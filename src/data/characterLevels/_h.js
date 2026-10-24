// A key moment for a character's Detailed level: date, title, text and an optional Bible reference.
export const d = (date, title, text, label, book, ch) => ({ date, title, text, ref: label ? { label, book, ch } : null });
