// World Religions: the six faiths, their families, and the side-by-side comparison.
// Christianity is covered in Bible Summaries and Church History, so the overview links there instead.
import { BUDDHISM, ISLAM, HINDUISM } from './buddhism-islam-hinduism.js';
import { JUDAISM, SIKHISM, MORMONISM } from './judaism-sikhism-mormonism.js';

// Sidebar and prev/next order.
export const RELIGIONS = [BUDDHISM, ISLAM, HINDUISM, JUDAISM, SIKHISM, MORMONISM];
export const religionById = Object.fromEntries(RELIGIONS.map((r) => [r.id, r]));

export const FAMILIES = [
  { id: 'dharmic', name: 'Dharmic (Indian) religions', desc: 'Rooted in South Asia. They share the ideas of karma, rebirth (samsara) and liberation from the cycle of existence.', ids: ['hinduism', 'buddhism', 'sikhism'] },
  { id: 'abrahamic', name: 'Abrahamic religions', desc: 'Trace their faith back to Abraham, worship one God, and see history moving toward a final judgment. Christianity belongs here too; Mormonism grew out of it.', ids: ['judaism', 'islam', 'mormonism'], christianity: true },
];

// Side by side, ordered by number of followers.
export const COMPARE_COLS = ['Followers', 'Share of world', 'Began', 'Founder or central figure', 'View of the divine', 'Main scriptures', 'Ultimate goal'];
export const COMPARE = [
  { id: 'islam', cells: ['About 2.0 billion', '25.6%', '610 CE, Arabia', 'Prophet Muhammad', 'One God (Allah), absolutely one', 'Quran; Hadith', 'Paradise after the Day of Judgment'] },
  { id: 'hinduism', cells: ['1.2 billion', '14.9%', 'Developed from c. 1500 BCE, India', 'No single founder', 'One ultimate reality (Brahman) worshipped in many forms', 'Vedas, Upanishads, Bhagavad Gita, epics', 'Moksha (liberation from rebirth)'] },
  { id: 'buddhism', cells: ['324 million', '4.1%', 'c. 5th century BCE, India', 'Siddhartha Gautama (the Buddha)', 'No creator God', 'Pali Canon; Mahayana sutras; Tibetan canon', 'Nirvana (end of suffering and rebirth)'] },
  { id: 'sikhism', cells: ['About 25–30 million (rough estimate)', 'About 0.3%', 'c. 1500 CE, Punjab', 'Guru Nanak and nine successor Gurus', 'One formless God (Ik Onkar)', 'Guru Granth Sahib', 'Mukti (liberation through union with God)'] },
  { id: 'mormonism', cells: ['17.9 million (LDS Church count, end of 2025)', 'About 0.2%', '1830, New York, USA', 'Joseph Smith', 'Father, Son and Holy Ghost as three separate beings', 'Bible, Book of Mormon, Doctrine and Covenants, Pearl of Great Price', 'Exaltation: eternal life with God as families'] },
  { id: 'judaism', cells: ['14.8 million', '0.2%', 'c. 2nd millennium BCE (by tradition), Canaan', 'Abraham; Moses', 'One God', 'Tanakh; Talmud', 'Faithful life under God’s covenant; the messianic age'] },
];

// Search words for each faith (data/index.js search()).
export const RELIGION_WORDS = {
  buddhism: ['buddhism', 'buddhist', 'buddha', 'siddhartha', 'theravada', 'mahayana', 'vajrayana', 'zen', 'dalai lama', 'nirvana', 'dharma', 'tibetan buddhism', 'pure land', 'bodhisattva', 'pali canon'],
  islam: ['islam', 'muslim', 'muhammad', 'quran', 'koran', 'sunni', 'shia', 'shiite', 'sufi', 'sufism', 'ramadan', 'mecca', 'hajj', 'five pillars', 'hadith', 'caliph', 'imam'],
  hinduism: ['hinduism', 'hindu', 'vedas', 'upanishads', 'bhagavad gita', 'krishna', 'vishnu', 'shiva', 'brahman', 'karma', 'reincarnation', 'yoga', 'diwali', 'vedanta', 'caste'],
  judaism: ['judaism', 'jewish', 'jew', 'jews', 'torah', 'talmud', 'rabbi', 'synagogue', 'orthodox judaism', 'reform judaism', 'hasidic', 'kabbalah', 'shabbat', 'passover', 'kosher', 'tanakh'],
  sikhism: ['sikhism', 'sikh', 'guru nanak', 'guru granth sahib', 'khalsa', 'gurdwara', 'golden temple', 'five ks', 'langar', 'punjab', 'turban'],
  mormonism: ['mormonism', 'mormon', 'latter-day saints', 'latter day saints', 'lds', 'joseph smith', 'book of mormon', 'brigham young', 'salt lake', 'community of christ'],
};

// The first sentence of a passage, for the Simple reading level. Skips the full stop in "c.", in
// initials ("B. R. Ambedkar") and in short abbreviations, and keeps a closing quote mark.
const ABBR = new Set(['c', 'r', 'b', 'd', 'vs', 'st', 'mt', 'dr', 'jr', 'sr', 'e.g', 'i.e', 'ca']);
export function firstSentence(text) {
  const re = /([.!?])([”"’)]?)\s+(?=[A-Z“"(])/g;
  let m;
  while ((m = re.exec(text))) {
    const before = text.slice(0, m.index);
    const word = (before.match(/([A-Za-z.]+)$/) || [])[1] || '';
    if (m[1] === '.' && (ABBR.has(word.toLowerCase()) || /^[A-Z]$/.test(word))) continue;
    return text.slice(0, m.index + 1 + m[2].length);
  }
  return text;
}
