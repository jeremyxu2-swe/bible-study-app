// "See more" details for book sections, by book id and the section's first chapter.
import law from './law.js';
import history1 from './history1.js';
import history2 from './history2.js';
import poetry1 from './poetry1.js';
import prophets1 from './prophets1.js';
import prophets2 from './prophets2.js';
import gospels from './gospels.js';
import paul1 from './paul1.js';
import paul2 from './paul2.js';
import general from './general.js';

const SECTION_DETAILS = { ...law, ...history1, ...history2, ...poetry1, ...prophets1, ...prophets2, ...gospels, ...paul1, ...paul2, ...general };
export default SECTION_DETAILS;
export const sectionDetail = (bookId, start) => SECTION_DETAILS[bookId]?.[start];
