// Only allow the simple formatting the notes editor produces.
const ALLOWED = new Set(['P', 'B', 'STRONG', 'I', 'EM', 'MARK', 'UL', 'OL', 'LI', 'H1', 'H2', 'H3', 'U', 'BLOCKQUOTE', 'BR', 'S', 'CODE', 'LABEL', 'INPUT', 'DIV', 'SPAN']);

export function sanitize(html) {
  const doc = new DOMParser().parseFromString(html || '', 'text/html');
  const walk = (el) => {
    for (const child of Array.from(el.children)) {
      if (!ALLOWED.has(child.tagName)) { child.replaceWith(document.createTextNode(child.textContent || '')); continue; }
      for (const a of Array.from(child.attributes)) {
        if (!['data-type', 'data-checked', 'data-color', 'data-style', 'type', 'checked'].includes(a.name)) child.removeAttribute(a.name);
      }
      if (child.tagName === 'INPUT') child.setAttribute('disabled', '');
      walk(child);
    }
  };
  walk(doc.body);
  return doc.body.innerHTML;
}

export function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
