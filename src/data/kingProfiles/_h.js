// Helpers for the kings' profiles (People pages and the Kings & Prophets panel).
// Each batch file exports { chars, levels }:
//   chars  — base character entries (same shape as characters.js), group 'Kings & Kingdom'.
//   levels — reading levels (same shape as characterLevels): facts, simple, moderate, detailed.
export const s = (ref, book, ch, text) => ({ ref, book, ch, text });
export { d } from '../characterLevels/_h.js';
export const r = (label, book, ch, note) => ({ label, book, ch, note });
