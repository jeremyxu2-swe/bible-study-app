// ESV chapter text, fetched through the `esv-passage` Supabase Edge Function
// (the API key lives only there). Recently read chapters are kept on the device
// in IndexedDB for offline reading, within the ESV API terms:
//   • at most 500 verses stored in total (oldest chapters are removed first)
//   • never more than half of any book (approximated as half its chapters;
//     one-chapter books are kept in memory only, never stored)
import { supabase, syncConfigured } from './sync.js';

const DB_NAME = 'lamp-path-esv';
const STORE = 'chapters';
const MAX_VERSES = 500;

const mem = new Map(); // key -> { canonical, html, verses }
const inflight = new Map();

const keyOf = (bookId, n) => `${bookId}:${n}`;

function openDb() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') return reject(new Error('no idb'));
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE, { keyPath: 'key' });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function withStore(mode, fn) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, mode);
    const out = fn(tx.objectStore(STORE));
    tx.oncomplete = () => { db.close(); resolve(out instanceof IDBRequest ? out.result : out); };
    tx.onerror = () => { db.close(); reject(tx.error); };
    tx.onabort = () => { db.close(); reject(tx.error); };
  });
}

async function readCached(key) {
  try {
    const row = await withStore('readonly', (s) => s.get(key));
    if (row) withStore('readwrite', (s) => s.put({ ...row, used: Date.now() })).catch(() => {});
    return row || null;
  } catch { return null; }
}

async function store(row, book) {
  if (!book || book.chapters < 2) return; // never store a whole one-chapter book
  try {
    const all = await withStore('readonly', (s) => s.getAll());
    const keep = all.filter((r) => r.key !== row.key);
    keep.push(row);
    keep.sort((a, b) => b.used - a.used); // newest first
    const perBook = {};
    const halfOf = (r) => Math.floor((r.chapters || 2) / 2);
    let total = 0;
    const drop = [];
    for (const r of keep) {
      const v = r.verses || 40;
      const nb = (perBook[r.bookId] || 0) + 1;
      if (total + v > MAX_VERSES || nb > halfOf(r)) { drop.push(r.key); continue; }
      total += v; perBook[r.bookId] = nb;
    }
    await withStore('readwrite', (s) => {
      if (!drop.includes(row.key)) s.put(row);
      drop.forEach((k) => s.delete(k));
    });
  } catch { /* storage is a convenience; ignore failures */ }
}

export class EsvError extends Error {
  constructor(code) { super(code); this.code = code; }
}

export const esvAvailable = () => syncConfigured && !!supabase;

// Returns { canonical, html, verses, fromCache }.
export async function getChapter(book, n) {
  const key = keyOf(book.id, n);
  if (mem.has(key)) return { ...mem.get(key), fromCache: true };
  if (inflight.has(key)) return inflight.get(key);

  const p = (async () => {
    const cached = await readCached(key);
    if (cached?.html) {
      const v = { canonical: cached.canonical, html: cached.html, verses: cached.verses };
      mem.set(key, v);
      return { ...v, fromCache: true };
    }
    if (!esvAvailable()) throw new EsvError('not_configured');
    if (typeof navigator !== 'undefined' && navigator.onLine === false) throw new EsvError('offline');

    const { data, error } = await supabase.functions.invoke('esv-passage', { body: { q: `${book.name} ${n}` } });
    if (error) {
      let code = 'failed';
      try {
        const body = await error.context?.json?.();
        if (body?.error) code = body.error;
      } catch { /* ignore */ }
      if (error.name === 'FunctionsFetchError') code = navigator.onLine === false ? 'offline' : 'unreachable';
      throw new EsvError(code);
    }
    if (!data?.html) throw new EsvError('failed');
    const v = { canonical: data.canonical, html: data.html, verses: data.verses };
    mem.set(key, v);
    store({ key, bookId: book.id, chapters: book.chapters, n, ...v, used: Date.now() }, book);
    return { ...v, fromCache: false };
  })();

  inflight.set(key, p);
  try { return await p; } finally { inflight.delete(key); }
}

export function esvMessage(code) {
  switch (code) {
    case 'offline': return 'You’re offline, and this chapter isn’t saved on this device yet. It will load once you’re back online.';
    case 'not_configured': return 'Bible text isn’t set up yet: the app’s ESV connection still needs its API key.';
    case 'rate_limited': return 'Too many chapters were requested in a short time. Wait a minute and try again.';
    case 'unreachable': return 'Couldn’t reach the Bible text service. Check your connection and try again.';
    default: return 'Something went wrong loading this chapter. Please try again.';
  }
}

// Keep only the tags and classes the ESV HTML uses, so nothing unexpected runs.
const TAGS = new Set(['P', 'H2', 'H3', 'H4', 'B', 'SPAN', 'SUP', 'BR', 'SMALL', 'EM', 'I', 'STRONG', 'DIV', 'A']);
export function cleanEsvHtml(html) {
  if (typeof DOMParser === 'undefined') return '';
  const doc = new DOMParser().parseFromString(`<div>${html}</div>`, 'text/html');
  const root = doc.body.firstElementChild;
  const walk = (el) => {
    for (const child of [...el.children]) {
      if (!TAGS.has(child.tagName)) { child.remove(); continue; }
      for (const attr of [...child.attributes]) {
        const name = attr.name.toLowerCase();
        if (name === 'class') continue;
        if (name === 'href' && child.tagName === 'A' && /^https?:\/\/(www\.)?esv\.org(\/|$)/i.test(attr.value)) continue;
        child.removeAttribute(attr.name);
      }
      if (child.tagName === 'A') {
        if (!child.hasAttribute('href')) { child.replaceWith(...child.childNodes); continue; }
        child.setAttribute('target', '_blank');
        child.setAttribute('rel', 'noopener');
      }
      walk(child);
    }
  };
  walk(root);
  return root.innerHTML;
}
