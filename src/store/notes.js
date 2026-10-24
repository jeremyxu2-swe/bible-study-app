import { useSyncExternalStore } from 'react';
import { getFolderState, replaceFolderState, forgetNote, onAssignChange, applyRemoteAssign, setNoteFolder } from './folders.js';
import { markDirty } from './dirty.js';

// Notes are saved in this browser (localStorage), so they stay on this device.
// Use Export / Import on the Notes page to back them up or move them to another device.
const KEY = 'lamp-path-notes-v1';
const listeners = new Set();
let cache = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(cache));
  } catch {
    /* storage unavailable: notes stay in memory for this visit */
  }
  listeners.forEach((l) => l());
}

window.addEventListener('storage', (e) => {
  if (e.key === KEY) {
    cache = load();
    listeners.forEach((l) => l());
  }
  if (e.key === TRASH_KEY) {
    trash = loadTrash();
    listeners.forEach((l) => l());
  }
});

function subscribe(l) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function noteKey(type, ...ids) {
  return [type, ...ids].join(':');
}

export function extractTags(text) {
  const m = text.match(/#[A-Za-z][\w-]*/g) || [];
  return [...new Set(m.map((t) => t.toLowerCase()))];
}

const isFree = (key) => key.startsWith('free:');

export function saveNote(key, html, text) {
  const now = new Date().toISOString();
  const trimmed = (text || '').trim();
  const prev = cache[key];
  if (!trimmed && !(isFree(key) && prev?.title)) {
    if (prev) {
      cache = { ...cache };
      delete cache[key];
      persist();
      markDirty('note', key);
    }
    return;
  }
  cache = { ...cache, [key]: { ...prev, html: trimmed ? html : '', text: trimmed, tags: extractTags(trimmed), created: prev?.created || now, updated: now } };
  persist();
  markDirty('note', key);
}

// Stand-alone notes (sermon notes, prayers…) that aren't tied to a chapter
export function createFreeNote(title = 'Untitled note') {
  const key = 'free:' + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-3);
  const now = new Date().toISOString();
  cache = { ...cache, [key]: { title, html: '', text: '', tags: [], created: now, updated: now } };
  persist();
  markDirty('note', key);
  return key;
}

export function setFreeTitle(key, title) {
  const prev = cache[key];
  if (!prev) return;
  cache = { ...cache, [key]: { ...prev, title, updated: new Date().toISOString() } };
  persist();
  markDirty('note', key);
}

// ── Trash: deleted notes are kept here for 30 days so they can be restored ──
const TRASH_KEY = 'lamp-path-trash-v1';
export const TRASH_DAYS = 30;
const DAY = 86400000;
let trash = loadTrash();

const trashId = () => 'trash:' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
const expired = (t) => new Date(t.deletedAt).getTime() <= Date.now() - TRASH_DAYS * DAY;

function loadTrash() {
  try {
    const t = JSON.parse(localStorage.getItem(TRASH_KEY) || '[]');
    if (!Array.isArray(t)) return [];
    const ok = t.filter((x) => x && x.key && x.note);
    // older versions kept the Trash on this device only: give those entries a syncable id
    ok.forEach((x) => { if (!String(x.id).startsWith('trash:')) { x.id = trashId(); x.updated = x.deletedAt; markDirty('note', x.id); } });
    // anything past 30 days is removed for good (on every device)
    ok.filter(expired).forEach((x) => markDirty('note', x.id));
    return ok.filter((x) => !expired(x));
  } catch { return []; }
}
function persistTrash() {
  try { localStorage.setItem(TRASH_KEY, JSON.stringify(trash)); } catch { /* ignore */ }
  listeners.forEach((l) => l());
}
persistTrash();

export const useTrash = () => useSyncExternalStore(subscribe, () => trash);
export const daysLeft = (t) => Math.max(1, Math.ceil((new Date(t.deletedAt).getTime() + TRASH_DAYS * DAY - Date.now()) / DAY));

// Move notes to the Trash (removed everywhere else, synced as deleted)
export function deleteNotes(keys) {
  const assign = getFolderState().assign;
  const now = new Date().toISOString();
  const moved = [];
  keys.forEach((key, i) => {
    if (!cache[key]) return;
    moved.push({ id: trashId() + i, key, note: cache[key], folderId: assign[key] || null, deletedAt: now, updated: now });
  });
  if (!moved.length) return 0;
  cache = { ...cache };
  moved.forEach((t) => delete cache[t.key]);
  trash = [...moved, ...trash];
  persist();
  persistTrash();
  moved.forEach((t) => { forgetNote(t.key); markDirty('note', t.key); markDirty('note', t.id); });
  return moved.length;
}
export function deleteNote(key) { return deleteNotes([key]); }

// Put notes back where they were. If that spot already has a newer note (e.g. you wrote a
// new note on the same chapter), the old one comes back as a stand-alone note instead.
export function restoreNotes(ids, labelFor = (k) => k) {
  const now = new Date().toISOString();
  const pick = trash.filter((t) => ids.includes(t.id));
  if (!pick.length) return 0;
  const folders = new Set(getFolderState().folders.map((f) => f.id));
  const assigns = [];
  cache = { ...cache };
  pick.forEach((t) => {
    let key = t.key;
    let note = { ...t.note, updated: now };
    if (cache[key]) {
      key = 'free:' + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-3);
      note = { ...note, title: `${labelFor(t.key, t.note)} (restored)` };
    }
    cache[key] = note;
    markDirty('note', key);
    if (t.folderId && folders.has(t.folderId)) assigns.push([key, t.folderId]);
  });
  trash = trash.filter((t) => !ids.includes(t.id));
  pick.forEach((t) => markDirty('note', t.id));
  persist();
  persistTrash();
  assigns.forEach(([k, f]) => setNoteFolder(k, f));
  return pick.length;
}

// Gone for good
export function purgeTrash(ids) {
  const gone = ids ? trash.filter((t) => ids.includes(t.id)) : trash;
  trash = ids ? trash.filter((t) => !ids.includes(t.id)) : [];
  persistTrash();
  gone.forEach((t) => markDirty('note', t.id));
}

// ── Trash ↔ sync: each Trash item travels as a note row with key "trash:…" and a marker tag ──
const MARK = '__trash|';
export const isTrashKey = (k) => k.startsWith('trash:');
export function trashRow(id) {
  const t = trash.find((x) => x.id === id);
  if (!t) return null;
  return {
    key: id, title: t.note.title || null, html: t.note.html || '', text: t.note.text || '',
    tags: [...(t.note.tags || []), MARK + t.deletedAt + '|' + t.key + '|' + (t.note.created || '') + '|' + (t.note.updated || '')],
    folder_id: t.folderId || null, created: t.deletedAt, updated: t.updated || t.deletedAt, deleted: false,
  };
}
function applyRemoteTrash(row) {
  const local = trash.find((x) => x.id === row.key);
  if (local && new Date(local.updated || local.deletedAt) > new Date(row.updated)) return;
  if (row.deleted) {
    if (local) { trash = trash.filter((x) => x.id !== row.key); persistTrash(); }
    return;
  }
  const mark = (row.tags || []).find((x) => x.startsWith(MARK));
  if (!mark) return;
  const [deletedAt, key, created, updated] = mark.slice(MARK.length).split('|');
  const entry = {
    id: row.key, key, deletedAt, updated: row.updated, folderId: row.folder_id || null,
    note: { title: row.title || undefined, html: row.html || '', text: row.text || '', tags: (row.tags || []).filter((x) => !x.startsWith(MARK)), created: created || deletedAt, updated: updated || deletedAt },
  };
  if (expired(entry)) return;
  trash = local ? trash.map((x) => (x.id === row.key ? entry : x)) : [entry, ...trash].sort((a, b) => b.deletedAt.localeCompare(a.deletedAt));
  persistTrash();
}


export function useNotes() {
  return useSyncExternalStore(subscribe, () => cache);
}

export function useNote(key) {
  const all = useNotes();
  return all[key];
}

export function exportNotes() {
  const blob = new Blob([JSON.stringify({ app: 'lamp-path', version: 2, exported: new Date().toISOString(), notes: cache, folders: getFolderState() }, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bible-notes-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function importNotes(file) {
  const data = JSON.parse(await file.text());
  const incoming = data.notes || data;
  let added = 0;
  const next = { ...cache };
  for (const [k, v] of Object.entries(incoming)) {
    if (!v || typeof v.html !== 'string') continue;
    const cur = next[k];
    if (!cur || (v.updated || '') > (cur.updated || '')) {
      next[k] = v;
      added++;
      markDirty('note', k);
    }
  }
  cache = next;
  persist();
  if (data.folders && Array.isArray(data.folders.folders)) {
    const cur = getFolderState();
    const ids = new Set(cur.folders.map((f) => f.id));
    replaceFolderState({
      folders: [...cur.folders, ...data.folders.folders.filter((f) => !ids.has(f.id))],
      assign: { ...data.folders.assign, ...cur.assign },
    });
    getFolderState().folders.forEach((f) => markDirty('folder', f.id));
  }
  return added;
}

// Books that have at least one note (for the gold dots on the overview)
export function booksWithNotes(all) {
  const s = new Set();
  for (const k of Object.keys(all)) {
    const [type, id] = k.split(':');
    if (type === 'book' || type === 'section' || type === 'chapter') s.add(id);
  }
  return s;
}

// Moving a note to another folder counts as an edit, so it syncs to other devices
onAssignChange((key) => {
  const prev = cache[key];
  if (!prev) return;
  cache = { ...cache, [key]: { ...prev, updated: new Date().toISOString() } };
  persist();
  markDirty('note', key);
});

// ── Used by sync ──
export const getNotesCache = () => cache;

// Apply a note that came from another device. Newer edits win.
export function applyRemoteNote(row) {
  if (isTrashKey(row.key)) { applyRemoteTrash(row); return true; }
  const local = cache[row.key];
  if (local && local.updated && new Date(local.updated) > new Date(row.updated)) return false;
  if (row.deleted) {
    if (local) { cache = { ...cache }; delete cache[row.key]; persist(); }
    return true;
  }
  cache = { ...cache, [row.key]: { title: row.title || undefined, html: row.html || '', text: row.text || '', tags: row.tags || [], created: row.created, updated: row.updated } };
  persist();
  applyRemoteAssign(row.key, row.folder_id);
  return true;
}
