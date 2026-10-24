// Tracks which notes and folders changed on this device and still need to be uploaded.
const KEY = 'lamp-path-dirty-v1';
const listeners = new Set();
let dirty = load();

function load() {
  try { const d = JSON.parse(localStorage.getItem(KEY) || 'null'); if (d && d.notes && d.folders) return d; } catch { /* ignore */ }
  return { notes: {}, folders: {} };
}
function persist() {
  try { localStorage.setItem(KEY, JSON.stringify(dirty)); } catch { /* ignore */ }
  listeners.forEach((l) => l());
}

export function markDirty(kind, id) {
  const bucket = kind === 'folder' ? 'folders' : 'notes';
  dirty = { ...dirty, [bucket]: { ...dirty[bucket], [id]: Date.now() } };
  persist();
}
export function getDirty() { return dirty; }
// Clear only the entries that haven't changed again since the snapshot was taken
export function clearDirty(snapshot) {
  const next = { notes: { ...dirty.notes }, folders: { ...dirty.folders } };
  for (const b of ['notes', 'folders']) {
    for (const [id, t] of Object.entries(snapshot[b])) if (next[b][id] === t) delete next[b][id];
  }
  dirty = next;
  persist();
}
export function onDirty(fn) { listeners.add(fn); return () => listeners.delete(fn); }
export const dirtyCount = () => Object.keys(dirty.notes).length + Object.keys(dirty.folders).length;

import { useSyncExternalStore } from 'react';
export const useDirtyCount = () => useSyncExternalStore(onDirty, dirtyCount);
