import { useSyncExternalStore } from 'react';

// Which notebook is currently being edited (only one at a time).
let active = null;
const listeners = new Set();
const subscribe = (l) => { listeners.add(l); return () => listeners.delete(l); };

export function setActiveEditor(key) {
  active = key;
  document.body.classList.toggle('is-editing', !!key);
  listeners.forEach((l) => l());
}
export const useActiveEditor = () => useSyncExternalStore(subscribe, () => active);

export const isPhone = () => window.matchMedia('(max-width: 760px)').matches;
