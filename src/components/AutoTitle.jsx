import { useLayoutEffect, useRef } from 'react';

// A note title box that wraps onto as many lines as it needs (a plain <input> cuts long titles off).
// It stays a single line of text: Enter doesn't add a line break; it calls onEnter instead (or leaves the box).
export default function AutoTitle({ value, onChange, onEnter, className = '', ...rest }) {
  const ref = useRef(null);
  const fit = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  };
  useLayoutEffect(fit, [value]);
  useLayoutEffect(() => {
    if (typeof ResizeObserver === 'undefined' || !ref.current) return undefined;
    let w = ref.current.offsetWidth;
    const ro = new ResizeObserver(() => { const nw = ref.current?.offsetWidth; if (nw !== w) { w = nw; fit(); } });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return (
    <textarea ref={ref} rows={1} className={'auto-title ' + className} value={value} spellCheck
      onChange={(e) => onChange(e.target.value.replace(/[\r\n]+/g, ' '))}
      onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); if (onEnter) onEnter(); else e.currentTarget.blur(); } }}
      {...rest} />
  );
}
