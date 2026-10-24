import { useSyncExternalStore } from 'react';
import { markDirty } from './dirty.js';

// Folders and which folder each note belongs to. Saved in this browser.
const KEY = 'lamp-path-folders-v1';
const listeners = new Set();
let state = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    const s = raw ? JSON.parse(raw) : null;
    if (s && Array.isArray(s.folders)) return { folders: s.folders, assign: s.assign || {} };
  } catch { /* ignore */ }
  return { folders: [], assign: {} };
}

function persist(next) {
  state = next;
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* storage unavailable */ }
  listeners.forEach((l) => l());
}

window.addEventListener('storage', (e) => {
  if (e.key === KEY) { state = load(); listeners.forEach((l) => l()); }
});

const subscribe = (l) => { listeners.add(l); return () => listeners.delete(l); };

// notes.js listens here so that moving a note between folders counts as an edit to that note
const assignListeners = new Set();
export const onAssignChange = (fn) => { assignListeners.add(fn); return () => assignListeners.delete(fn); };
const emitAssign = (keys) => keys.forEach((k) => assignListeners.forEach((fn) => fn(k)));
const now = () => new Date().toISOString();
export const useFolders = () => useSyncExternalStore(subscribe, () => state);
export const getFolderState = () => state;

export const FOLDER_COLORS = ['#D9B26A', '#8FB8A8', '#9DB4E0', '#C9A0DC', '#E39A8A', '#A8A398'];

const uid = () => Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-3);

export function createFolder(name, parentId = null) {
  const f = { id: uid(), name: name.trim() || 'Untitled folder', parentId: parentId || null, color: FOLDER_COLORS[0], created: now(), updated: now() };
  persist({ ...state, folders: [...state.folders, f] });
  markDirty('folder', f.id);
  return f.id;
}

export function renameFolder(id, name) {
  persist({ ...state, folders: state.folders.map((f) => (f.id === id ? { ...f, name: name.trim() || f.name, updated: now() } : f)) });
  markDirty('folder', id);
}

export function setFolderColor(id, color) {
  persist({ ...state, folders: state.folders.map((f) => (f.id === id ? { ...f, color, updated: now() } : f)) });
  markDirty('folder', id);
}

export function descendants(id, folders = state.folders) {
  const out = [];
  const walk = (pid) => folders.filter((f) => f.parentId === pid).forEach((f) => { out.push(f.id); walk(f.id); });
  walk(id);
  return out;
}

export function moveFolder(id, newParentId) {
  if (id === newParentId || descendants(id).includes(newParentId)) return false;
  persist({ ...state, folders: state.folders.map((f) => (f.id === id ? { ...f, parentId: newParentId || null, updated: now() } : f)) });
  markDirty('folder', id);
  return true;
}

// Deletes the folder and its sub-folders. Notes inside are kept and become Unfiled.
export function deleteFolder(id) {
  const gone = new Set([id, ...descendants(id)]);
  const assign = { ...state.assign };
  const moved = [];
  for (const [k, v] of Object.entries(assign)) if (gone.has(v)) { delete assign[k]; moved.push(k); }
  persist({ folders: state.folders.filter((f) => !gone.has(f.id)), assign });
  gone.forEach((fid) => markDirty('folder', fid));
  emitAssign(moved);
}

export function setNoteFolder(noteKey, folderId) {
  const assign = { ...state.assign };
  if (folderId) assign[noteKey] = folderId; else delete assign[noteKey];
  persist({ ...state, assign });
  emitAssign([noteKey]);
}

export function setNotesFolder(keys, folderId) {
  const assign = { ...state.assign };
  keys.forEach((k) => { if (folderId) assign[k] = folderId; else delete assign[k]; });
  persist({ ...state, assign });
  emitAssign(keys);
}

export function forgetNote(noteKey) {
  if (!state.assign[noteKey]) return;
  const assign = { ...state.assign };
  delete assign[noteKey];
  persist({ ...state, assign });
}

export function folderPath(id, folders = state.folders) {
  const path = [];
  let cur = folders.find((f) => f.id === id);
  while (cur) { path.unshift(cur); cur = folders.find((f) => f.id === cur.parentId); }
  return path;
}

export function childrenOf(parentId, folders = state.folders) {
  return folders.filter((f) => (f.parentId || null) === (parentId || null)).sort((a, b) => a.name.localeCompare(b.name));
}

// Flat list in tree order with depth, for pickers
export function flatTree(folders = state.folders) {
  const out = [];
  const walk = (pid, depth) => childrenOf(pid, folders).forEach((f) => { out.push({ ...f, depth }); walk(f.id, depth + 1); });
  walk(null, 0);
  return out;
}

export function replaceFolderState(next) {
  persist({ folders: next.folders || [], assign: next.assign || {} });
}

// ── Used by sync: apply changes that came from another device (not marked as local edits) ──
export function applyRemoteFolder(row) {
  const local = state.folders.find((f) => f.id === row.id);
  if (local && local.updated && row.updated && new Date(local.updated) > new Date(row.updated)) return;
  if (row.deleted) {
    if (local) persist({ ...state, folders: state.folders.filter((f) => f.id !== row.id) });
    return;
  }
  const f = { id: row.id, name: row.name, parentId: row.parent_id || null, color: row.color || FOLDER_COLORS[0], created: local?.created || row.updated, updated: row.updated };
  persist({ ...state, folders: local ? state.folders.map((x) => (x.id === row.id ? f : x)) : [...state.folders, f] });
}
export function applyRemoteAssign(noteKey, folderId) {
  if ((state.assign[noteKey] || null) === (folderId || null)) return;
  const assign = { ...state.assign };
  if (folderId) assign[noteKey] = folderId; else delete assign[noteKey];
  persist({ ...state, assign });
}
