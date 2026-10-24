// Small helpers shared by the nation level files.
export const m = (date, text, label, book, ch) => ({ date, text, ref: label ? { label, book, ch } : null });
export const d = (date, title, text, label, book, ch) => ({ date, title, text, ref: label ? { label, book, ch } : null });
export const rd = (label, book, ch, note) => ({ label, book, ch, note });
export const pp = (name, note, person) => ({ name, note, person });
