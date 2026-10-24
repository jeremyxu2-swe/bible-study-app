// Job #21: the computer layout (wider than 760px) renders at 80% with CSS `zoom` on <html> (see
// styles.css, --z). With zoom on the root, getBoundingClientRect(), mouse/touch coordinates,
// innerWidth/innerHeight, visualViewport and window.scrollY are in real screen pixels, while
// offsetWidth/offsetHeight/scrollHeight and every CSS length we set (top, left, width, margins)
// are in the page's own (zoomed) CSS pixels. Convert between the two with pageZoom():
//   CSS px = screen px / pageZoom()      screen px = CSS px * pageZoom()
// On the phone layout the zoom is 1, so these are no-ops there.
export function pageZoom() {
  if (typeof document === 'undefined') return 1;
  const de = document.documentElement;
  const z = de.currentCSSZoom ?? parseFloat(getComputedStyle(de).zoom);
  return z > 0 && Number.isFinite(z) ? z : 1;
}
