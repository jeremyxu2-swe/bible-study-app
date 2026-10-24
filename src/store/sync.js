import { useSyncExternalStore } from 'react';
import { createClient } from '@supabase/supabase-js';
import { getNotesCache, applyRemoteNote, isTrashKey, trashRow } from './notes.js';
import { getFolderState, applyRemoteFolder } from './folders.js';
import { getDirty, clearDirty, onDirty, markDirty } from './dirty.js';

// ── Connection ──
// Set these in the .env file in the app folder (see README):
//   VITE_SUPABASE_URL=https://xxxx.supabase.co
//   VITE_SUPABASE_ANON_KEY=your anon / publishable key
const URL_ = (import.meta.env.VITE_SUPABASE_URL || '').replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');
const KEY_ = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
export const syncConfigured = !!(URL_ && KEY_ && !/^YOUR_|PASTE/i.test(KEY_));

export const supabase = syncConfigured
  ? createClient(URL_, KEY_, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false, storageKey: 'lamp-path-auth' } })
  : null;

// ── Status store for the UI ──
let state = { configured: syncConfigured, user: null, status: syncConfigured ? 'signed-out' : 'off', lastSync: null, error: '' };
const listeners = new Set();
const set = (patch) => { state = { ...state, ...patch }; listeners.forEach((l) => l()); };
const subscribe = (l) => { listeners.add(l); return () => listeners.delete(l); };
export const useSync = () => useSyncExternalStore(subscribe, () => state);

const ls = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* ignore */ } },
};

// ── Sign in with email + password (no emails are sent; "Confirm email" is turned off in Supabase) ──
function friendly(error) {
  const m = (error?.message || '').toLowerCase();
  if (m.includes('invalid login')) return 'That email and password don\'t match. Check them, or create an account first.';
  if (m.includes('email not confirmed')) return 'Supabase still requires email confirmation. In Supabase go to Authentication → Sign In / Providers → Email, turn off "Confirm email", then try again.';
  if (m.includes('already registered') || m.includes('already been registered')) return 'An account with this email already exists — use Sign in instead.';
  if (m.includes('signups not allowed') || m.includes('signup is disabled')) return 'New accounts are turned off for this project. Use Sign in with your existing account.';
  if (m.includes('password should be') || m.includes('at least')) return 'Please use a password with at least 6 characters.';
  if (m.includes('failed to fetch') || m.includes('network')) return 'Couldn\'t reach Supabase. Check your internet connection and try again.';
  return error?.message || 'Something went wrong. Please try again.';
}
export async function signIn(email, password) {
  const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
  if (error) throw new Error(friendly(error));
}
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email: email.trim(), password });
  if (error) throw new Error(friendly(error));
  if (!data.session) throw new Error(friendly({ message: 'email not confirmed' }));
}
export async function signOut() {
  await supabase.auth.signOut();
}

// ── Sync ──
let running = false;
let again = false;

const noteRow = (key, n, folderId) => (n
  ? { key, title: n.title || null, html: n.html || '', text: n.text || '', tags: n.tags || [], folder_id: folderId || null, created: n.created || new Date().toISOString(), updated: n.updated || new Date().toISOString(), deleted: false }
  : { key, title: null, html: '', text: '', tags: [], folder_id: null, updated: new Date().toISOString(), deleted: true });

const folderRow = (id, f) => (f
  ? { id, name: f.name, parent_id: f.parentId || null, color: f.color || null, updated: f.updated || f.created || new Date().toISOString(), deleted: false }
  : { id, name: '(deleted)', parent_id: null, color: null, updated: new Date().toISOString(), deleted: true });

async function push() {
  const snap = getDirty();
  const notes = getNotesCache();
  const fs = getFolderState();
  const fRows = Object.keys(snap.folders).map((id) => folderRow(id, fs.folders.find((f) => f.id === id)));
  const nRows = Object.keys(snap.notes).map((k) => (isTrashKey(k) ? trashRow(k) || noteRow(k, null) : noteRow(k, notes[k], fs.assign[k])));
  // folders first so notes never point at a folder another device hasn't seen yet
  for (let i = 0; i < fRows.length; i += 500) {
    const { error } = await supabase.from('folders').upsert(fRows.slice(i, i + 500), { onConflict: 'user_id,id' });
    if (error) throw error;
  }
  for (let i = 0; i < nRows.length; i += 200) {
    const { error } = await supabase.from('notes').upsert(nRows.slice(i, i + 200), { onConflict: 'user_id,key' });
    if (error) throw error;
  }
  clearDirty(snap);
}

async function pullTable(table, since, apply) {
  let newest = since;
  let from = 0;
  for (;;) {
    let q = supabase.from(table).select('*').order('updated', { ascending: true }).range(from, from + 999);
    if (since) q = q.gt('updated', since);
    const { data, error } = await q;
    if (error) throw error;
    data.forEach((row) => { apply(row); if (!newest || row.updated > newest) newest = row.updated; });
    if (data.length < 1000) break;
    from += 1000;
  }
  return newest;
}

async function pull(uid) {
  const k = `lamp-path-lastpull-${uid}`;
  const last = JSON.parse(ls.get(k) || '{}');
  const dirty = getDirty();
  // Skip remote rows for items edited here and not yet uploaded — the local edit is newer
  const f = await pullTable('folders', last.folders, (row) => { if (!dirty.folders[row.id]) applyRemoteFolder(row); });
  const n = await pullTable('notes', last.notes, (row) => { if (!dirty.notes[row.key]) applyRemoteNote(row); });
  ls.set(k, JSON.stringify({ folders: f, notes: n }));
}

export async function syncNow() {
  if (!supabase || !state.user) return;
  if (running) { again = true; return; }
  running = true;
  set({ status: 'syncing', error: '' });
  try {
    await push();
    await pull(state.user.id);
    set({ status: 'synced', lastSync: new Date().toISOString() });
  } catch (e) {
    const msg = e?.message || String(e);
    set({ status: 'error', error: /relation|does not exist|schema cache/i.test(msg) ? 'The notes and folders tables were not found in Supabase. Run the setup SQL from the README.' : msg });
  } finally {
    running = false;
    if (again) { again = false; setTimeout(syncNow, 300); }
  }
}

// The first time someone signs in on this device, upload everything already here
function uploadExistingOnce(uid) {
  const k = `lamp-path-uploaded-${uid}`;
  if (ls.get(k)) return;
  Object.keys(getNotesCache()).forEach((key) => markDirty('note', key));
  getFolderState().folders.forEach((f) => markDirty('folder', f.id));
  ls.set(k, '1');
}

let timer = null;
let interval = null;

export function startSync() {
  if (!supabase) return;
  let currentId;
  const onUser = (user) => {
    if ((user?.id || null) === currentId) return;
    currentId = user?.id || null;
    set({ user: user ? { id: user.id, email: user.email } : null, status: user ? state.status === 'syncing' ? 'syncing' : 'synced' : 'signed-out' });
    clearInterval(interval);
    if (user) {
      uploadExistingOnce(user.id);
      syncNow();
      interval = setInterval(syncNow, 60_000);
    }
  };
  supabase.auth.getSession().then(({ data }) => onUser(data.session?.user || null));
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' || event === 'SIGNED_OUT' || event === 'INITIAL_SESSION') onUser(session?.user || null);
  });
  // Upload shortly after any change
  onDirty(() => { clearTimeout(timer); timer = setTimeout(syncNow, 1500); });
  window.addEventListener('focus', () => syncNow());
  window.addEventListener('online', () => syncNow());
}

// ── Is anything NOT synced? (used to show a warning only when there's a problem) ──
import { useDirtyCount } from './dirty.js';
const onlineSub = (fn) => { window.addEventListener('online', fn); window.addEventListener('offline', fn); return () => { window.removeEventListener('online', fn); window.removeEventListener('offline', fn); }; };
const useOnline = () => useSyncExternalStore(onlineSub, () => navigator.onLine);
export function useSyncProblem() {
  const st = useSync();
  const pending = useDirtyCount();
  const online = useOnline();
  if (!st.user) return null;
  if (st.status === 'error') return { reason: 'error', pending };
  if (!online && pending > 0) return { reason: 'offline', pending };
  return null;
}
