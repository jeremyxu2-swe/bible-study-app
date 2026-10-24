import { useSyncExternalStore } from 'react';

// Per-device preferences, remembered in this browser (not synced):
//   reading level · theme · text size · Bible-reference links · computer sidebar collapsed
const ls = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* private mode etc. */ } },
};

// A tiny store for one remembered value.
function pref(key, fallback, parse = (v) => v) {
  const listeners = new Set();
  let value = (() => { const v = ls.get(key); return v == null ? fallback : parse(v); })();
  const subscribe = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };
  return {
    get: () => value,
    set: (v) => { value = v; ls.set(key, String(v)); listeners.forEach((fn) => fn()); },
    subscribe,
    use: () => useSyncExternalStore(subscribe, () => value),
  };
}

// ── Reading level: 'simple' | 'moderate' | 'detailed' (one setting for the whole app) ──
export const LEVELS = [
  { id: 'simple', label: 'Simple' },
  { id: 'moderate', label: 'Moderate' },
  { id: 'detailed', label: 'Detailed' },
];
const level = pref('lamp-path-level', 'moderate');
export const setLevel = level.set;
export const useLevel = level.use;

// ── Theme: 'dark' | 'light' | 'auto' (auto follows the device) ──
export const THEMES = [
  { id: 'dark', label: 'Dark' },
  { id: 'light', label: 'Light' },
  { id: 'auto', label: 'Automatic' },
];
const theme = pref('lamp-path-theme', 'dark', (v) => (['dark', 'light', 'auto'].includes(v) ? v : 'dark'));
const mq = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
const effective = () => (theme.get() === 'auto' ? (mq?.matches ? 'light' : 'dark') : theme.get());
const META = { dark: '#14161B', light: '#F6F1E7' };

function applyTheme() {
  if (typeof document === 'undefined') return;
  const t = effective();
  document.documentElement.dataset.theme = t;
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', META[t]));
}
// Effective theme as a store, so "auto" re-renders when the device switches.
const effListeners = new Set();
const notifyEff = () => { applyTheme(); effListeners.forEach((fn) => fn()); };
theme.subscribe(notifyEff);
mq?.addEventListener?.('change', () => { if (theme.get() === 'auto') notifyEff(); });

export const setTheme = theme.set;
export const useThemePref = theme.use;
export const useTheme = () => useSyncExternalStore((fn) => { effListeners.add(fn); return () => effListeners.delete(fn); }, effective);
// The sun/moon button: flip to the other look and remember it.
export const toggleTheme = () => theme.set(effective() === 'dark' ? 'light' : 'dark');

// ── Text size: a multiplier for every font size (CSS var --ts) ──
export const TEXT_SIZES = [0.9, 1, 1.1, 1.2, 1.3];
const textSize = pref('lamp-path-text-size', 1, (v) => { const n = parseFloat(v); return n >= 0.85 && n <= 1.35 ? n : 1; });
function applyTextSize() {
  if (typeof document !== 'undefined') document.documentElement.style.setProperty('--ts', String(textSize.get()));
}
textSize.subscribe(applyTextSize);
export const setTextSize = textSize.set;
export const useTextSize = textSize.use;

// ── Show Bible references as links ──
const refLinks = pref('lamp-path-ref-links', true, (v) => v !== 'false');
export const setRefLinks = refLinks.set;
export const useRefLinks = refLinks.use;

// ── Computer sidebar: full width, or collapsed to a narrow rail of icons ──
const sideCollapsed = pref('lamp-path-side-collapsed', false, (v) => v === 'true');
function applySide() {
  if (typeof document !== 'undefined') document.documentElement.classList.toggle('side-collapsed', sideCollapsed.get());
}
sideCollapsed.subscribe(applySide);
export const useSideCollapsed = sideCollapsed.use;
export const toggleSide = () => sideCollapsed.set(!sideCollapsed.get());

// Apply the saved look once at start-up (index.html also does this before the app loads, to avoid a flash).
export function applyPrefs() { applyTheme(); applyTextSize(); applySide(); }
