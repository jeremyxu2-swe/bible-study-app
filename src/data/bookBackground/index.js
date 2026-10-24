// Book-summary background, one level deeper (jobs #16–#18).
//
// HOW THE SHIFT-UP WORKS (reusable for every batch of books):
//   For a book listed here, the book SUMMARY card (not chapters or sections) moves up one level:
//     Simple   shows what Moderate used to show (Moderate text, key verse, full facts, world-power chips)
//     Moderate shows what Detailed used to show (Detailed text, themes, key verses, short background)
//     Detailed shows all of that PLUS this entry: authorship (with scholarly views), setting & audience,
//              historical context, structure, key passages and how the book points to Christ.
//   Books not listed here keep the old behavior. To add a batch: write bgN.js with the same fields
//   (authorship, setting, context, structure[[range,title]], passages[{label,book,ch,note}], christ),
//   import it below, and run the checks in the build log.
import bg1 from './bg1.js';
import bg2 from './bg2.js';
import bg3 from './bg3.js';
import bg4 from './bg4.js';
import bg5 from './bg5.js';
import bg6 from './bg6.js';
import bg7 from './bg7.js';

const BOOK_BG = { ...bg1, ...bg2, ...bg3, ...bg4, ...bg5, ...bg6, ...bg7 };
export default BOOK_BG;

// The level the book SUMMARY card should use for the reader's chosen level.
export const summaryLevel = (bookId, level) =>
  BOOK_BG[bookId] ? (level === 'simple' ? 'moderate' : 'detailed') : level;
