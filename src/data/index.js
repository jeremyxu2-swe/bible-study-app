import { EMPIRE_DETAILS } from './empires.js';
import { BOOKS } from './books.js';
import { CHARACTERS } from './characters.js';
import { PROPHECIES } from './prophecies.js';
import { ERAS, EMPIRES } from './eras.js';
import law from './chapters/law.js';
import history from './chapters/history.js';
import poetry from './chapters/poetry.js';
import prophets from './chapters/prophets.js';
import gospels from './chapters/gospels.js';
import letters from './chapters/letters.js';
import ALL_LEVELS from './levels/index.js';
import { NAME_MEANINGS } from './nameMeanings.js';
import { AUDIENCE } from './audience.js';
import storiesEarly from './stories/early.js';
import storiesKings from './stories/kings.js';
import storiesProphets from './stories/prophets.js';
import storiesNT from './stories/nt.js';
import { NATION_DETAILS as NATIONS } from './nations.js';
import { KING_CHARS } from './kingProfiles/index.js';
import { MORE_CHARS, GROUP_ORDER } from './moreProfiles/index.js';
import { APOCRYPHA, APOC_CHAPTERS, APOC_LEVELS } from './apocrypha.js';

// The kings of Israel and Judah join the People list, in reign order, after the other Kings & Kingdom characters.
{
  const last = CHARACTERS.map((c) => c.group).lastIndexOf('Kings & Kingdom');
  CHARACTERS.splice(last + 1, 0, ...KING_CHARS.filter((k) => !CHARACTERS.some((c) => c.id === k.id)));
}
// Judges, prophets, apostles and others join their groups; each group is then put in reading order.
{
  for (const c of MORE_CHARS) {
    if (CHARACTERS.some((x) => x.id === c.id)) continue;
    const last = CHARACTERS.map((x) => x.group).lastIndexOf(c.group);
    CHARACTERS.splice(last + 1, 0, c);
  }
  for (const [g, order] of Object.entries(GROUP_ORDER)) {
    const slots = CHARACTERS.reduce((a, c, i) => (c.group === g ? [...a, i] : a), []);
    const rank = (c) => { const i = order.indexOf(c.id); return i < 0 ? order.length + slots.indexOf(CHARACTERS.indexOf(c)) : i; };
    const sorted = slots.map((i) => CHARACTERS[i]).sort((a, b) => rank(a) - rank(b));
    slots.forEach((i, n) => { CHARACTERS[i] = sorted[n]; });
  }
}

// Attach name meanings to characters and original audiences to books.
const STORIES = { ...storiesEarly, ...storiesKings, ...storiesProphets, ...storiesNT };
CHARACTERS.forEach((c) => { const nm = NAME_MEANINGS[c.id]; c.meaning = nm?.[0]; c.meaningWhy = nm?.[1]; if (STORIES[c.id]) c.story = STORIES[c.id]; });
BOOKS.forEach((b) => { b.audience = AUDIENCE[b.id]; });

export { BOOKS, CHARACTERS, PROPHECIES, ERAS, EMPIRES };

const CHAPTERS = { ...law, ...history, ...poetry, ...prophets, ...gospels, ...letters, ...APOC_CHAPTERS };
// Apocryphal books (data/apocrypha.js) open with the same book and chapter pages, but stay out of BOOKS (the 66).
const byId = Object.fromEntries([...BOOKS, ...APOCRYPHA].map((b) => [b.id, b]));
const charById = Object.fromEntries(CHARACTERS.map((c) => [c.id, c]));

export const getBook = (id) => byId[id];

// Simple / Moderate / Detailed text per book. Chapter entries use either the long keys
// {simple, moderate, detailed, verse, people} or the compact {s, m, d, v, p}.
// A chapter without its own moderate text falls back to the standard summary in chapters/*.js.
const LEVELS = { ...ALL_LEVELS, ...APOC_LEVELS };
const normCh = (c) => c && ({
  simple: c.simple ?? c.s,
  moderate: c.moderate ?? c.m,
  detailed: c.detailed ?? c.d,
  verse: typeof (c.verse ?? c.v) === 'string' ? { ref: c.verse ?? c.v } : (c.verse ?? c.v),
  people: c.people ?? c.p,
});
export const hasLevels = (bookId) => !!LEVELS[bookId];

// Summary of a book at a reading level, with sensible fallbacks for books not yet written
export function bookAtLevel(book, level) {
  const L = LEVELS[book.id]?.book;
  if (level === 'simple') return { text: L?.simple || book.tagline || book.summary };
  if (level === 'moderate') return { text: L?.moderate || book.summary, verse: L?.verse };
  return { text: L?.detailed || book.summary, themes: L?.themes, keyVerses: L?.keyVerses, background: book.background };
}

export function sectionShort(book, sec) {
  return LEVELS[book.id]?.sections?.[sec.start]?.short || sec.focus;
}

// A chapter at a reading level: { text, people, written }. Chapter key verses are intentionally not shown
// (the data for 1 Samuel is kept in levels/1samuel.js in case they come back).
export function chapterAtLevel(bookId, n, level) {
  const base = chapterSummary(bookId, n);
  const c = normCh(LEVELS[bookId]?.chapters?.[n - 1]);
  if (!c) return { text: base, written: level === 'moderate' };
  if (level === 'simple') return { text: c.simple || base, written: true };
  if (level === 'moderate') return { text: c.moderate || base, people: c.people, written: true };
  return { text: c.detailed || base, people: c.people, written: true };
}
export const getCharacter = (id) => charById[id];

export function chapterSummary(bookId, n) {
  const list = CHAPTERS[bookId];
  return (list && list[n - 1]) || '';
}

export function sectionIndexOf(book, n) {
  const i = book.sections.findIndex((s) => n >= s.start && n <= s.end);
  return i < 0 ? 0 : i;
}

export function charactersForBook(bookId) {
  return CHARACTERS.filter((c) => (c.books || []).includes(bookId));
}

export function propheciesForBook(bookId) {
  return PROPHECIES.filter((p) => p.otBook === bookId || p.ntBook === bookId);
}

export function propheciesForChapter(bookId, n) {
  return PROPHECIES.filter((p) => (p.otBook === bookId && p.otCh === n) || (p.ntBook === bookId && p.ntCh === n));
}

export function eraForBook(bookId) {
  return ERAS.find((e) => e.books.includes(bookId));
}

export const GROUPS = [
  { testament: 'Old Testament', categories: ['Law', 'History', 'Poetry & Wisdom', 'Major Prophets', 'Minor Prophets'] },
  { testament: 'New Testament', categories: ['Gospels', 'Church History', "Paul's Letters", 'General Letters', 'Prophecy'] },
];

// Abbreviations used for search ("1 Sam 17", "jn 3", "rev")
const extraNames = {
  genesis: ['gen', 'gn'], exodus: ['exod', 'ex'], leviticus: ['lev'], numbers: ['num'], deuteronomy: ['deut', 'dt'],
  joshua: ['josh'], judges: ['judg'], '1samuel': ['1 sam', '1sam', '1 sm'], '2samuel': ['2 sam', '2sam'],
  '1kings': ['1 kgs', '1 ki'], '2kings': ['2 kgs', '2 ki'], '1chronicles': ['1 chr', '1 chron'], '2chronicles': ['2 chr', '2 chron'],
  nehemiah: ['neh'], esther: ['esth'], psalms: ['ps', 'psa', 'psalm'], proverbs: ['prov', 'pr'], ecclesiastes: ['eccl', 'ecc'],
  songofsongs: ['song', 'song of solomon', 'sos'], isaiah: ['isa'], jeremiah: ['jer'], lamentations: ['lam'], ezekiel: ['ezek'],
  daniel: ['dan'], hosea: ['hos'], obadiah: ['obad'], micah: ['mic'], nahum: ['nah'], habakkuk: ['hab'], zephaniah: ['zeph'],
  haggai: ['hag'], zechariah: ['zech'], malachi: ['mal'], matthew: ['matt', 'mt'], mark: ['mk'], luke: ['lk'], john: ['jn'],
  romans: ['rom'], '1corinthians': ['1 cor'], '2corinthians': ['2 cor'], galatians: ['gal'], ephesians: ['eph'],
  philippians: ['phil'], colossians: ['col'], '1thessalonians': ['1 thess'], '2thessalonians': ['2 thess'],
  '1timothy': ['1 tim'], '2timothy': ['2 tim'], philemon: ['phlm'], hebrews: ['heb'], james: ['jas'],
  '1peter': ['1 pet'], '2peter': ['2 pet'], '1john': ['1 jn'], '2john': ['2 jn'], '3john': ['3 jn'], revelation: ['rev'],
};

const norm = (s) => s.toLowerCase().replace(/\./g, '').replace(/\s+/g, ' ').trim();

// Extra search words for the seven periods of the geopolitical timeline.
const PERIOD_WORDS = {
  bronze: ['egypt', 'pharaoh', 'hittites', 'amorites', 'canaan', 'hammurabi', 'exodus', 'empire'],
  iron: ['philistines', 'phoenicia', 'tyre', 'aram', 'damascus', 'moab', 'edom', 'ammon', 'shishak'],
  assyria: ['assyrian', 'nineveh', 'sennacherib', 'empire'],
  babylon: ['babylonian', 'chaldeans', 'nebuchadnezzar', 'exile', 'empire'],
  persia: ['persian', 'achaemenid', 'medes', 'cyrus', 'empire'],
  hellenistic: ['greece', 'greek', 'alexander', 'macedonia', 'ptolemies', 'seleucids', 'maccabees', 'hellenism'],
  rome: ['roman', 'caesar', 'empire'],
};

export function search(query) {
  const q = norm(query);
  if (!q) return [];
  const out = [];
  // Reference like "1 sam 17" or "john 3"
  const m = q.match(/^(.*?)[\s]*(\d+)(?::\d+)?$/);
  if (m && m[1]) {
    const name = norm(m[1]);
    const n = parseInt(m[2], 10);
    const b = BOOKS.find((bk) => norm(bk.name) === name || (extraNames[bk.id] || []).includes(name) || norm(bk.name).startsWith(name));
    if (b && n >= 1 && n <= b.chapters) {
      out.push({ kind: 'Chapter', label: `${b.name} ${n}`, to: `/book/${b.id}/${n}` });
    }
  }
  for (const b of BOOKS) {
    const names = [norm(b.name), ...(extraNames[b.id] || [])];
    if (names.some((x) => x.startsWith(q) || x.includes(q))) out.push({ kind: 'Book', label: b.name, to: `/book/${b.id}` });
  }
  for (const c of CHARACTERS) {
    if (norm(c.name).includes(q)) out.push({ kind: 'Person', label: c.name, to: `/people/${c.id}` });
  }
  for (const e of EMPIRE_DETAILS) {
    const words = [e.name, e.short, ...(PERIOD_WORDS[e.id] || [])].map(norm);
    if (words.some((w) => w.includes(q) || (q.length >= 4 && q.includes(w)))) out.push({ kind: 'World power', label: e.name, sub: e.dates, to: `/empire/${e.id}` });
  }
  if (q.length >= 4 && ['apocrypha', 'apocryphal', 'deuterocanon', 'maccabees', 'maccabean', 'macabees', 'hanukkah', 'hasmonean', 'judas maccabeus', 'mattathias'].some((w) => w.includes(q) || q.includes(w))) {
    out.push({ kind: 'Book', label: '1 Maccabees', sub: 'Apocrypha · the Maccabean revolt', to: '/book/1maccabees' });
    out.push({ kind: 'Study', label: 'The Apocrypha', sub: 'Books outside most Protestant Bibles', to: '/apocrypha' });
  }
  if (q.length >= 4 && ['wars behind daniel', 'syrian wars', 'king of the north', 'king of the south', 'ptolemies', 'seleucids', 'alexander the great', 'persian wars', 'daniel background', 'background of daniel'].some((w) => w.includes(q) || q.includes(w))) {
    out.push({ kind: 'Study', label: 'The wars behind Daniel', sub: 'Background to Daniel’s prophecies', to: '/daniel/background' });
  }
  if (q.length >= 3 && ['paul’s journeys', "paul's journeys", 'pauls journeys', 'missionary journeys', 'journeys', 'missionary', 'shipwreck', 'voyage to rome'].some((w) => w.includes(q) || q.includes(w))) {
    out.push({ kind: 'Study', label: 'Paul’s Missionary Journeys', sub: 'Acts 13–28 on a map', to: '/journeys' });
  }
  if (q.length >= 4 && ['when was daniel written', 'date of daniel', 'daniel written', 'daniel date', 'maccabean', 'dead sea scrolls', 'darius the mede', 'belshazzar', 'antiochus'].some((w) => w.includes(q) || q.includes(w))) {
    out.push({ kind: 'Study', label: 'When was Daniel written?', sub: 'The early and late dates, and the evidence', to: '/daniel/written' });
  }
  if (q.length >= 4 && ['dispensational', 'dispensationalism', 'covenant theology', 'covenantal', 'rapture', 'replacement theology', 'israel and the church'].some((w) => w.includes(q) || q.includes(w))) {
    out.push({ kind: 'Theology', label: 'Dispensational vs Covenant Theology', sub: 'Two ways to read the whole Bible', to: '/theology/compare' });
    if (/dispens/.test(q)) out.push({ kind: 'Theology', label: 'Dispensationalism', sub: 'In depth', to: '/theology/compare/dispensational' });
    if (/covenant/.test(q)) out.push({ kind: 'Theology', label: 'Covenant Theology', sub: 'In depth', to: '/theology/compare/covenant' });
  }
  for (const [id, label, words] of [
    ['disp', 'Dispensational premillennialism', ['dispensational premillennialism', 'pretribulation', 'pre-tribulation', 'left behind', 'premillennial']],
    ['hist', 'Historic premillennialism', ['historic premillennialism', 'chiliasm', 'posttribulation', 'premillennial']],
    ['amil', 'Amillennialism', ['amillennial', 'amillennialism', 'realized millennium']],
    ['post', 'Postmillennialism', ['postmillennial', 'postmillennialism', 'golden age']],
  ]) {
    if (q.length >= 4 && (words.some((w) => w.includes(q) || q.includes(w)) || (q.includes('millenn') && !q.includes('pre') && !q.includes('post') && !q.includes('amil')))) {
      out.push({ kind: 'Theology', label, sub: 'End times · deep dive', to: `/theology/last-things/${id}` });
    }
  }
  for (const n of NATIONS) {
    if (norm(n.title).includes(q) || norm(n.name).includes(q)) out.push({ kind: 'Nation', label: n.title, to: `/nation/${n.id}` });
  }
  if (q.length >= 4) {
    for (const b of BOOKS) {
      const list = CHAPTERS[b.id] || [];
      list.forEach((t, i) => {
        if (out.length < 40 && t.toLowerCase().includes(q)) out.push({ kind: 'Chapter', label: `${b.name} ${i + 1}`, sub: t, to: `/book/${b.id}/${i + 1}` });
      });
    }
  }
  return out.slice(0, 30);
}

export function chapterCount(bookId) {
  return (CHAPTERS[bookId] || []).length;
}
export { EMPIRE_DETAILS, empireById, empiresInText, resolveEmpireId, periodsForBook, periodForSection, EMPIRE_ALIASES } from './empires.js';
export { CHURCH_DETAILS, churchById, churchesForBook } from './churches.js';
export { NATION_DETAILS, nationById, nationsForChapter, nationsForRange } from './nations.js';
