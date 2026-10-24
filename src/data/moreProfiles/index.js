// Profiles added after the kings: judges, prophets, more of the Twelve, the early church,
// the exile and return, and figures around Jesus (Zacchaeus, Caiaphas, the Herods).
// Same shape as kingProfiles: { chars, levels } per batch.
import * as judges from './judges.js';
import * as prophets1 from './prophets1.js';
import * as prophets2 from './prophets2.js';
import * as nt from './nt.js';
import * as others from './others.js';

const BATCHES = [judges, prophets1, prophets2, nt, others];
export const MORE_CHARS = BATCHES.flatMap((b) => b.chars);
export const MORE_LEVELS = Object.assign({}, ...BATCHES.map((b) => b.levels));

// Reading order inside each People group (roughly chronological). Ids not listed keep their place at the end.
export const GROUP_ORDER = {
  'Exodus & Judges': ['moses', 'aaron', 'miriam', 'joshua', 'caleb', 'rahab', 'othniel', 'ehud', 'shamgar', 'deborah', 'barak', 'gideon', 'abimelech', 'tola', 'jair', 'jephthah', 'ibzan', 'elon', 'abdon', 'samson', 'ruth', 'naomi', 'boaz'],
  Prophets: ['gad', 'ahijah', 'shemaiah', 'azariah_p', 'hanani', 'jehuhanani', 'elijah', 'micaiah', 'elisha', 'obadiah', 'zechariah_j', 'joel', 'jonah', 'amos', 'hosea', 'isaiah', 'micah', 'nahum', 'zephaniah', 'huldah', 'jeremiah', 'habakkuk', 'uriah', 'daniel', 'ezekiel', 'haggai', 'zechariah_p', 'malachi'],
  'Exile & Return': ['nebuchadnezzar', 'cyrus', 'zerubbabel', 'darius', 'esther', 'mordecai', 'haman', 'artaxerxes', 'ezra', 'nehemiah'],
  'Life of Jesus': ['jesus', 'mary', 'herod-great', 'anna', 'john-baptist', 'herod-antipas', 'peter', 'andrew', 'james', 'john', 'philip', 'bartholomew', 'matthew', 'thomas', 'james-alphaeus', 'thaddeus', 'simon-zealot', 'judas', 'mary-magdalene', 'nicodemus', 'zacchaeus', 'lazarus', 'martha', 'caiaphas', 'pilate'],
  'Early Church': ['matthias', 'stephen', 'philip-evangelist', 'paul', 'james-brother', 'cornelius', 'herod-agrippa1', 'barnabas', 'mark', 'agabus', 'silas', 'timothy', 'lydia', 'priscilla-aquila', 'apollos', 'luke', 'titus', 'philemon', 'onesimus', 'jude', 'herod-agrippa2'],
};
