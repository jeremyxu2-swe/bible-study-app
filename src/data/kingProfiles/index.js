// Profiles for the kings of Israel and Judah who aren't in characters.js (34 of the 42).
// Saul, David, Solomon, Rehoboam, Jeroboam I, Ahab, Hezekiah and Josiah already have full character pages.
import * as k1 from './k1.js';
import * as k2 from './k2.js';
import * as k3 from './k3.js';
import * as k4 from './k4.js';
import * as k5 from './k5.js';

const BATCHES = [k1, k2, k3, k4, k5];
export const KING_CHARS = BATCHES.flatMap((b) => b.chars);
export const KING_LEVELS = Object.assign({}, ...BATCHES.map((b) => b.levels));

// Kings & Prophets ids that differ from the character id.
const CHAR_ID = { jeroboam1: 'jeroboam' };
export const charIdOfKing = (kingId) => CHAR_ID[kingId] || kingId;
export const kingIdOfChar = (charId) => Object.keys(CHAR_ID).find((k) => CHAR_ID[k] === charId) || charId;
