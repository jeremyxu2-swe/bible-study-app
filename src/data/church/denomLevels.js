// Simple / Moderate / Detailed text for each denomination.
//   s — one or two plain sentences        m — a short paragraph with the key facts
//   d — the full story, about four paragraphs (an array, one string per paragraph)
// All 48 groups are written (step 4). A group without an entry would fall back to its tree data: `one` for Simple and `why` for Moderate and Detailed.
// Batch 1 (Early Church, the 11 families, Eastern and Catholic sub-branches) is in levels1.js; batch 2 follows in levels2.js.
import LEVELS_1 from './levels1.js';
import LEVELS_2 from './levels2.js';

const DENOM_LEVELS = {
  ...LEVELS_1,
  ...LEVELS_2,
  meth: {
    s: 'A church that grew out of John and Charles Wesley’s revival in 1700s England. It is known for warm personal faith, holy living and hearty hymn singing.',
    m: 'John and Charles Wesley led a revival inside the Church of England, preaching in fields to working people. Their “methodical” small groups stressed prayer, Bible study and holy living. After American independence, Wesley ordained ministers for America, and the Methodist Episcopal Church was formed in 1784. Methodists believe God’s grace is offered to everyone and that believers can grow in holiness throughout life.',
    d: [
      'The movement began in 1729 with the “Holy Club” at Oxford, where John and Charles Wesley met to pray, study Scripture and visit prisoners. Classmates mocked them as “Methodists” for their strict routine.',
      'In 1738, at a meeting in Aldersgate Street, London, John Wesley felt his heart “strangely warmed” and became sure that Christ had saved him. From 1739, following George Whitefield’s example, he preached in open fields to miners and laborers who rarely went to church. Converts met weekly in “class meetings” of about twelve people to encourage and hold one another accountable. Charles wrote more than 6,000 hymns, including “And Can It Be.”',
      'Wesley meant to renew the Church of England, not leave it. But after the American Revolution left American Methodists without clergy, he ordained ministers for them, and the Methodist Episcopal Church was organized at the Christmas Conference of 1784. Circuit-riding preachers such as Francis Asbury carried Methodism across the American frontier. British Methodists became a separate church after Wesley’s death in 1791.',
      'Methodism later divided and reunited several times. The AME Church formed in 1816, and northern and southern Methodists split over slavery in 1844 and reunited in 1939. The United Methodist Church formed in 1968, and in 2022 the Global Methodist Church formed after disagreements over sexuality and Scripture.',
    ],
    todayShort: 'About 80 million members worldwide (approx.).',
  },
};

export default DENOM_LEVELS;
