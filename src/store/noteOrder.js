import { useSyncExternalStore } from 'react';

// Your own order for the notes list (set by dragging). Saved in this browser.
// Notes not in the list yet (new ones) show at the top, newest first.
const KEY = 'lamp-path-note-order-v1';
const listeners = new Set();
let order = load();

function load() {
  try { const a = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(a) ? a : []; } catch { return []; }
}
window.addEventListener('storage', (e) => { if (e.key === KEY) { order = load(); listeners.forEach((l) => l()); } });

export const useNoteOrder = () => useSyncExternalStore((l) => { listeners.add(l); return () => listeners.delete(l); }, () => order);

export function setNoteOrder(keys) {
  order = keys;
  try { localStorage.setItem(KEY, JSON.stringify(keys)); } catch { /* storage unavailable */ }
  listeners.forEach((l) => l());
}

// Sort entries ({key, updated}) by the saved order
export function sortByOrder(list, saved) {
  const pos = new Map(saved.map((k, i) => [k, i]));
  return [...list].sort((a, b) => {
    const pa = pos.has(a.key), pb = pos.has(b.key);
    if (pa && pb) return pos.get(a.key) - pos.get(b.key);
    if (pa !== pb) return pa ? 1 : -1; // unordered (new) notes first
    return (b.updated || '').localeCompare(a.updated || '');
  });
}
