// "Timeline" view: approximate span of events each book covers (or, for prophets, poetry and
// letters, when it was spoken or written). Years are negative for BC. Many dates are debated;
// traditional (early-Exodus) dating is used, matching eras.js.
// Entries: [bookId, start, end] or [bookId, start, end, { label, ch }].
export const TL_ERAS = [
  { id: 'patriarchs', start: -2100, w: 60, short: 'Patriarchs' },
  { id: 'exodus', start: -1800, w: 85, short: 'Egypt & Exodus' },
  { id: 'judges', start: -1406, w: 100, short: 'Conquest & Judges' },
  { id: 'united', start: -1050, w: 100, short: 'United Kingdom' },
  { id: 'divided', start: -930, w: 250, short: 'Divided Kingdom' },
  { id: 'exile', start: -586, w: 55, short: 'Exile' },
  { id: 'return', start: -538, w: 90, short: 'Return' },
  { id: 'between', start: -430, w: 55, short: 'Between' },
  { id: 'christ', start: -5, w: 60, short: 'Christ' },
  { id: 'church', start: 30, w: 185, short: 'Early Church' },
];
export const TL_END = 100;

export const TL_LANES = [
  { key: 'story', name: 'Story', color: '#D9B26A', items: [
    ['genesis', -2091, -1805, { label: 'Genesis 12–50', ch: 12 }],
    ['exodus', -1526, -1445], ['leviticus', -1445, -1440], ['numbers', -1445, -1406], ['deuteronomy', -1406, -1405, { label: 'Deut.' }],
    ['joshua', -1406, -1375], ['judges', -1375, -1050], ['ruth', -1100, -1050],
    ['1samuel', -1105, -1010], ['2samuel', -1010, -970], ['1chronicles', -1010, -970, { label: '1 Chron.' }],
    ['1kings', -970, -853], ['2kings', -853, -560], ['2chronicles', -970, -538, { label: '2 Chron.' }],
    ['daniel', -605, -536], ['ezra', -538, -457], ['esther', -483, -473], ['nehemiah', -445, -432],
    ['luke', -5, 30], ['matthew', -5, 30], ['mark', 27, 30], ['john', 27, 30], ['acts', 30, 62],
  ] },
  { key: 'prophets', name: 'Prophets', color: '#6E86AD', items: [
    ['jonah', -780, -760], ['amos', -760, -750], ['hosea', -755, -715], ['isaiah', -740, -681], ['micah', -735, -700],
    ['joel', -700, -690, { label: 'Joel (date?)' }],
    ['nahum', -660, -612], ['zephaniah', -640, -620], ['jeremiah', -627, -586], ['habakkuk', -609, -598],
    ['ezekiel', -593, -571], ['lamentations', -586, -584, { label: 'Lam.' }], ['obadiah', -586, -580],
    ['haggai', -520, -519], ['zechariah', -520, -480], ['malachi', -440, -430], ['revelation', 90, 96],
  ] },
  { key: 'poetry', name: 'Poetry & wisdom', color: '#8E7AB5', items: [
    ['job', -2000, -1900], ['psalms', -1440, -450], ['proverbs', -970, -700],
    ['songofsongs', -965, -960, { label: 'Song' }], ['ecclesiastes', -940, -930, { label: 'Eccl.' }],
  ] },
  { key: 'letters', name: 'Letters', color: '#6FA083', items: [
    ['james', 45, 49], ['galatians', 48, 49], ['1thessalonians', 50, 51, { label: '1 Thess.' }], ['2thessalonians', 51, 52, { label: '2 Thess.' }],
    ['1corinthians', 54, 55, { label: '1 Cor.' }], ['2corinthians', 55, 56, { label: '2 Cor.' }], ['romans', 56, 57],
    ['ephesians', 60, 62, { label: 'Eph.' }], ['colossians', 60, 62, { label: 'Col.' }], ['philemon', 60, 62, { label: 'Phlm.' }], ['philippians', 61, 62, { label: 'Phil.' }],
    ['1timothy', 62, 64, { label: '1 Tim.' }], ['titus', 62, 64], ['1peter', 62, 64, { label: '1 Pet.' }], ['hebrews', 64, 68, { label: 'Heb.' }],
    ['2peter', 65, 68, { label: '2 Pet.' }], ['jude', 65, 80], ['2timothy', 66, 67, { label: '2 Tim.' }],
    ['1john', 85, 95, { label: '1 John' }], ['2john', 85, 95, { label: '2 John' }], ['3john', 85, 95, { label: '3 John' }],
  ] },
];

// The seven periods of the geopolitical timeline, as bands under the eras (ids match empires.js).
// The regional kingdoms lasted until Assyria absorbed them (745–732 BC), but the period hands over to
// Assyria at 853 BC, when its armies first reached Israel (Ahab at Qarqar) and the Assyria page's story begins.
export const TL_EMPIRES = [
  ['bronze', 'Bronze Age', -2100, -1200], ['iron', 'Regional Kingdoms', -1200, -853], ['assyria', 'Assyria', -853, -612],
  ['babylon', 'Babylon', -612, -539], ['persia', 'Persia', -539, -332], ['hellenistic', 'Greeks', -332, -63], ['rome', 'Rome', -63, 100],
];

// Each period's color (Bronze Age: Nile sand · Regional Kingdoms: iron grey-blue · Assyria: brick red · Babylon: Ishtar-gate blue ·
// Persia: turquoise · Greeks: olive · Rome: imperial purple). Old ids kept so older links still get a color.
export const EMPIRE_COLORS = { bronze: '#D4A24C', iron: '#7F8FA3', assyria: '#C0574A', babylon: '#4F7DC9', persia: '#3FA7A0', hellenistic: '#8FA05A', rome: '#9B6BC2', egypt: '#D4A24C', greece: '#8FA05A' };

export const yearLabel = (y) => (y < 0 ? `${-y} BC` : `AD ${y}`);
export const rangeLabel = (a, b) => (a < 0 && b < 0 ? `c. ${-a}–${-b} BC` : a < 0 ? `c. ${-a} BC–AD ${b}` : `c. AD ${a}–${b}`);
