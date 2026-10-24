import { BOOKS } from '../data/index.js';

// "1 Corinthians 15:22–26" → "/book/1corinthians/15". Returns null for anything that isn't a Bible book
// (a confession, a church father), so callers can show it as plain text.
const BY_NAME = Object.fromEntries(BOOKS.map((b) => [b.name.toLowerCase(), b.id]));
Object.assign(BY_NAME, { psalm: 'psalms', 'song of solomon': 'songofsongs' });

export function bibleRefTo(text) {
  const m = String(text).match(/^((?:[123] )?[A-Za-z]+(?: of [A-Za-z]+)?) (\d+)/);
  const id = m && BY_NAME[m[1].toLowerCase()];
  return id ? `/book/${id}/${m[2]}` : null;
}
