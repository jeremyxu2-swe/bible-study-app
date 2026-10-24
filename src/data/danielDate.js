// Daniel's Prophecies › When was Daniel written? (/daniel/written)
// Built from the "Daniel Dating Subpage" design canvas (https://claude.ai/artifact/FuZu9HLDwR7fHkTciZPwzh).
// Two positions (early c. 530 BC, late c. 165 BC) and six kinds of evidence. For each topic, each side has:
//   s     — Simple: one sentence
//   head  — the argument in a few words
//   m     — Moderate paragraph
//   d     — extra sentence(s) added at Detailed
//   reply — the other side's answer (shown at Detailed)
//   refs  — references; Bible ones link to the chapter (bibleRefTo), the rest stay plain text
// Tone: each side's case as its own scholars make it, without taking sides.

export const POSITIONS = {
  early: {
    label: 'Early date', date: 'c. 530 BC',
    m: 'Daniel wrote it himself in Babylon near the end of his life. The visions in chapters 7–12 are genuine prediction of events still centuries away.',
    s: 'Daniel wrote it in Babylon. The visions are real prediction.',
    held: 'traditional Jewish and Christian interpreters and most evangelical scholars.',
  },
  late: {
    label: 'Late date', date: 'c. 165 BC',
    m: 'An unknown author wrote during Antiochus IV’s persecution, using older stories about Daniel. The visions recount past history as if foretold, to encourage faithful Jews.',
    s: 'Written under Antiochus IV. History told as prophecy.',
    held: 'most scholars in universities and mainline seminaries.',
  },
};

export const MIDDLE = 'Some take a middle view: the stories in chapters 1–6 are old, and the visions were added or edited later.';

// Timeline, 620 → 100 BC. pos = % along the line. The computer's horizontal line merges 167 and 164
// (wide / wt; narrowOnly rows show only in the phone's vertical list).
const pct = (y) => Math.round(((620 - y) / 520) * 1000) / 10;
export const TIMELINE = [
  { y: '605 BC', t: 'Daniel taken to Babylon', pos: pct(605) },
  { y: '539', t: 'Persia takes Babylon', pos: pct(539) },
  { mark: 'early', y: '530', t: 'Early date', pos: pct(530) },
  { y: '331', t: 'Alexander defeats Persia', pos: pct(331) },
  { y: '167', t: 'Antiochus desecrates the temple', wide: '167–164', wt: 'Antiochus’s persecution', pos: pct(167) },
  { mark: 'late', y: '165', t: 'Late date', pos: pct(165) },
  { y: '164', t: 'Antiochus dies in Persia', pos: pct(164), narrowOnly: true },
  { y: 'c. 125', t: 'Earliest copy at Qumran', pos: pct(125), gold: true },
];

export const WHY = 'The date shapes how the prophecies on the Daniel pages read. On the early date, chapters 2, 7, 8 and 11 are predictions fulfilled centuries later. On the late date, they are a faithful retelling of recent history meant to give hope under persecution, with only the closing verses looking ahead.';

export const TOPICS = [
  { id: 'predictions', name: 'The predictions', sub: 'Chapter 11 and the four kingdoms', lean: 'both',
    e: { s: 'God can reveal the future, and the book reaches past 165 BC.', head: 'Accurate prophecy is what the book claims to be',
      m: 'If God reveals the future, precise fulfillment is expected, not suspicious. Most early-date readers see 11:36–45 shifting to a future figure, or looking past Antiochus to one, and take the fourth kingdom and the seventy weeks as reaching Rome and the Messiah, well past 165 BC.',
      d: 'Jesus places the abomination of desolation still in the future (Matthew 24:15), so the book was read as pointing beyond Antiochus.',
      reply: 'The fourth kingdom fits Greece just as well, and Rome is never named in Daniel.',
      refs: ['Daniel 2:40', 'Daniel 9:24–27', 'Daniel 11:36'] },
    l: { s: 'The details are exact up to 165 BC, then they stop matching.', head: 'The precision ends just before 164 BC',
      m: 'Chapter 11 tracks the Ptolemies and Seleucids in close detail through Antiochus IV’s persecution. Verses 40–45 then describe a final war and his death near Jerusalem, but he actually died in Persia in 164 BC. The author seems to write just before that.',
      d: 'Ancient apocalypses commonly retell history as prediction and then add a real forecast at the end, which is exactly where the accuracy drops.',
      reply: 'Those verses describe a later antichrist figure, so they were never about Antiochus’s death.',
      refs: ['Daniel 11:21–35', 'Daniel 11:40–45'] } },
  { id: 'manuscripts', name: 'The manuscripts', sub: 'The Dead Sea Scrolls', lean: 'early',
    e: { s: 'Copies were already treated as Scripture by about 125 BC.', head: 'Too widely copied, too soon',
      m: 'Eight copies of Daniel were found at Qumran, the oldest from about 125 BC. Another scroll already quotes it as written by Daniel the prophet. Wide copying and scriptural status within 40 years of composition would be unusual.',
      d: 'A Greek translation followed by the late second century BC, which also implies time to spread.',
      reply: 'Writings that spoke to a crisis could spread quickly, and Qumran prized apocalyptic books.',
      refs: ['4Q174 (Florilegium)', 'the 4QDan scrolls'] },
    l: { s: 'The scrolls fit a late date too.', head: 'The copies do not settle it',
      m: 'Forty years is enough time for a popular book to circulate, especially one written to a community under persecution. Qumran also copied other recent works like 1 Enoch and Jubilees.',
      d: 'The oldest copies are close in time to the late date, which some see as supporting it rather than undermining it.',
      reply: 'Copying a book is not the same as treating it as Scripture, and Daniel was.',
      refs: ['the 4QDan scrolls'] } },
  { id: 'language', name: 'The language', sub: 'Hebrew, Aramaic and loanwords', lean: 'both',
    e: { s: 'The Aramaic and Persian words fit the 500s–400s BC.', head: 'The Aramaic fits the Persian era',
      m: 'Chapters 2–7 use Imperial Aramaic like the fifth-century Elephantine papyri. There are about 20 Persian loanwords, natural in a Persian court, and only three Greek words, all names of musical instruments.',
      d: 'Greek traders and mercenaries were in the Near East before Alexander, so a few instrument names are not surprising.',
      reply: 'Imperial Aramaic stayed in use for centuries, so it cannot fix a date.',
      refs: ['Daniel 2:4', 'Daniel 3:5'] },
    l: { s: 'Greek words point after Alexander.', head: 'Greek words suggest after Alexander',
      m: 'The instrument names in 3:5 are Greek, which fits a time after Alexander’s conquest. The Hebrew chapters read like late biblical Hebrew, closer to Chronicles than to earlier prophets.',
      d: 'The mix of Hebrew and Aramaic may also show older stories joined to newer visions.',
      reply: 'If the book were from 165 BC, far more Greek words would be expected than three.',
      refs: ['Daniel 3:5', 'Daniel 3:10'] } },
  { id: 'history', name: 'The historical details', sub: 'Belshazzar, Darius, dates', lean: 'both',
    e: { s: 'Belshazzar was real, a detail later writers had forgotten.', head: 'It knows things later writers did not',
      m: 'Belshazzar was once thought fictional until the Nabonidus Cylinder (found 1854) showed he ruled while his father was away. That explains why he can offer only the third place in the kingdom.',
      d: 'Darius the Mede may be another name for Cyrus or his governor Gubaru, and 1:1 can be squared with Jeremiah by Babylonian ways of counting a king’s years.',
      reply: 'The book still calls Belshazzar king and son of Nebuchadnezzar, and no Darius the Mede is known.',
      refs: ['Daniel 5:16', 'Daniel 5:29', 'Daniel 6:28'] },
    l: { s: 'Some details clash with known history.', head: 'Some details do not match the record',
      m: 'No ruler named Darius the Mede is known between Babylon and Cyrus. Belshazzar is called king and son of Nebuchadnezzar, though his father was Nabonidus. Daniel 1:1 seems to clash with Jeremiah’s date for Nebuchadnezzar’s rise.',
      d: 'A writer centuries later would know the main outline but blur these specifics.',
      reply: 'Son can mean descendant or successor, and Belshazzar did hold royal authority.',
      refs: ['Daniel 1:1', 'Daniel 5:2', 'Daniel 5:31', 'Jeremiah 25:1'] } },
  { id: 'canon', name: 'Its place in the canon', sub: 'Where Daniel sits', lean: 'late',
    e: { s: 'Daniel was a statesman, so it sits with the Writings.', head: 'Placement reflects Daniel’s role',
      m: 'Daniel served as a court official, not a prophet by office, which may explain his place among the Writings. The Septuagint and Josephus put him with the Prophets, and Josephus treats him as an ancient prophet.',
      d: 'Ben Sira’s list of heroes skips Ezra too, so a missing name proves little.',
      reply: 'Josephus wrote centuries later and reflects the tradition, not its origin.',
      refs: ['Josephus, Antiquities 10–11'] },
    l: { s: 'It came too late to join the Prophets.', head: 'It arrived after the Prophets were closed',
      m: 'The Hebrew Bible places Daniel among the Writings, not the Prophets, which suggests it came after that collection was settled. Ben Sira, writing about 180 BC, lists Israel’s great figures and leaves Daniel out.',
      d: 'Neither point is decisive alone, but together they fit a second-century origin.',
      reply: 'Many Writings, like Psalms, are early, so placement does not track age.',
      refs: ['Sirach 44–49'] } },
  { id: 'testimony', name: 'The book’s own claims', sub: 'Authorship and later witness', lean: 'early',
    e: { s: 'The book says Daniel wrote it, and Jesus calls him a prophet.', head: 'It claims to be Daniel’s own visions',
      m: 'Chapters 7–12 speak in Daniel’s own voice and are told to be sealed and kept. Jesus refers to Daniel the prophet, and Ezekiel names a Daniel among the righteous.',
      d: 'For many, accepting Jesus’ words settles the question of authorship.',
      reply: 'Writing under a famous name was common then, and Jesus may be using the book’s usual title.',
      refs: ['Daniel 7:1', 'Daniel 12:4', 'Matthew 24:15', 'Ezekiel 14:14'] },
    l: { s: 'Writing under a famous name was common.', head: 'Writing under a hero’s name was common',
      m: 'Books like 1 Enoch were written in the name of ancient heroes, and readers did not see this as deceit. The first-person voice is part of the style.',
      d: 'Ezekiel’s Daniel, spelled Danel and grouped with Noah and Job, may be an ancient figure rather than the exile.',
      reply: 'Scripture elsewhere does not use false names, and Daniel’s claims are tied to dates and places.',
      refs: ['1 Enoch', 'Ezekiel 14:14', 'Ezekiel 14:20'] } },
];

export const BACK_CHAPTERS = [2, 7, 8, 9, 11];
