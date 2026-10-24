// "By time period" view: which books (or parts of books) belong to each era, grouped by kind.
// Entries are book ids, or { id, label, ch } for part of a book (ch = first chapter to open).
// Dates for some books (Job, Joel, Obadiah, the letters) are debated; these are common placements.
export const CHRONO = {
  beginnings: {
    story: [{ id: 'genesis', label: 'Genesis 1–11', ch: 1 }],
    people: ['adam', 'eve', 'noah'],
  },
  patriarchs: {
    story: [{ id: 'genesis', label: 'Genesis 12–50', ch: 12 }],
    writings: ['job'],
    empires: ['bronze'],
    people: ['abraham', 'sarah', 'isaac', 'rebekah', 'jacob', 'joseph', 'job'],
  },
  exodus: {
    story: ['exodus', 'leviticus', 'numbers', 'deuteronomy'],
    writings: [{ id: 'psalms', label: 'Psalm 90 (Moses)', ch: 90 }],
    empires: ['bronze'],
    people: ['moses', 'aaron', 'miriam', 'joshua', 'caleb'],
  },
  judges: {
    story: ['joshua', 'judges', 'ruth'],
    empires: ['bronze', 'iron'],
    people: ['joshua', 'rahab', 'deborah', 'gideon', 'samson', 'ruth', 'naomi', 'boaz'],
  },
  united: {
    story: ['1samuel', '2samuel', '1chronicles', { id: '1kings', label: '1 Kings 1–11', ch: 1 }, { id: '2chronicles', label: '2 Chronicles 1–9', ch: 1 }],
    writings: ['psalms', 'proverbs', 'songofsongs', 'ecclesiastes'],
    empires: ['iron'],
    people: ['samuel', 'saul', 'jonathan', 'david', 'bathsheba', 'nathan', 'solomon'],
  },
  divided: {
    story: [{ id: '1kings', label: '1 Kings 12–22', ch: 12 }, '2kings', { id: '2chronicles', label: '2 Chronicles 10–36', ch: 10 }],
    prophets: ['jonah', 'amos', 'hosea', 'isaiah', 'micah', 'nahum', 'zephaniah', 'habakkuk', 'jeremiah', { id: 'joel', label: 'Joel (date?)' }],
    empires: ['iron', 'assyria', 'babylon'],
    people: ['rehoboam', 'jeroboam', 'ahab', 'jezebel', 'elijah', 'elisha', 'hezekiah', 'isaiah', 'josiah', 'jeremiah'],
  },
  exile: {
    story: [{ id: 'daniel', label: 'Daniel 1–6', ch: 1 }],
    prophets: ['lamentations', 'ezekiel', 'obadiah', { id: 'daniel', label: 'Daniel 7–12', ch: 7 }],
    empires: ['babylon', 'persia'],
    people: ['nebuchadnezzar', 'daniel', 'ezekiel', 'jeremiah'],
  },
  return: {
    story: ['ezra', 'esther', 'nehemiah'],
    prophets: ['haggai', 'zechariah', 'malachi'],
    empires: ['persia'],
    people: ['cyrus', 'ezra', 'esther', 'mordecai', 'nehemiah'],
  },
  between: {
    empires: ['hellenistic', 'rome'],
    people: [],
  },
  christ: {
    story: ['matthew', 'mark', 'luke', 'john'],
    empires: ['rome'],
    people: ['mary', 'john-baptist', 'jesus', 'peter', 'andrew', 'james', 'john', 'mary-magdalene', 'pilate'],
  },
  church: {
    story: ['acts'],
    prophets: ['revelation'],
    // Letters in their likely writing order.
    writings: ['james', 'galatians', '1thessalonians', '2thessalonians', '1corinthians', '2corinthians', 'romans',
      'ephesians', 'colossians', 'philemon', 'philippians', '1timothy', 'titus', '1peter', '2peter', 'hebrews',
      '2timothy', 'jude', '1john', '2john', '3john'],
    empires: ['rome'],
    people: ['peter', 'stephen', 'paul', 'barnabas', 'silas', 'timothy', 'luke', 'lydia', 'titus'],
  },
};
