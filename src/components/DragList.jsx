import { useEffect, useRef, useState } from 'react';
import { pageZoom } from '../utils/zoom.js';

// A list you can reorder by dragging. Mouse: click and drag a row. Touch: press and hold a row, then drag.
// renderItem(item, { dragging }) returns the row's contents; onReorder(newKeys) is called on drop.
export default function DragList({ items, getKey, renderItem, onReorder, className = '', disabled = false }) {
  const listRef = useRef(null);
  const drag = useRef(null);
  const [state, setState] = useState(null); // { key, from, to, dy }
  const suppressClick = useRef(false);

  useEffect(() => () => clearTimeout(drag.current?.timer), []);
  // While a row is being dragged on a touch screen, stop the page from scrolling
  useEffect(() => {
    const block = (e) => { if (drag.current?.active) e.preventDefault(); };
    document.addEventListener('touchmove', block, { passive: false });
    return () => document.removeEventListener('touchmove', block);
  }, []);

  const rowsGeom = () => [...listRef.current.children].map((el) => { const r = el.getBoundingClientRect(); return { top: r.top, h: r.height }; });

  const begin = (d) => {
    d.active = true;
    d.geom = rowsGeom();
    suppressClick.current = true;
    navigator.vibrate?.(15);
    document.body.classList.add('dragging-list');
    setState({ key: d.key, from: d.index, to: d.index, dy: 0 });
  };

  const onPointerDown = (e, index, key) => {
    if (disabled || e.button > 0 || e.target.closest('button, input, a.no-drag')) return;
    const d = { key, index, x: e.clientX, y: e.clientY, pointerId: e.pointerId, touch: e.pointerType !== 'mouse', active: false, el: e.currentTarget };
    drag.current = d;
    if (d.touch) d.timer = setTimeout(() => { if (drag.current === d) { begin(d); try { d.el.setPointerCapture(d.pointerId); } catch { /* ignore */ } } }, 350);
  };

  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d || e.pointerId !== d.pointerId) return;
    const dx = e.clientX - d.x, dy = e.clientY - d.y;
    if (!d.active) {
      if (d.touch) { if (Math.hypot(dx, dy) > 8) { clearTimeout(d.timer); drag.current = null; } return; } // scrolling, not dragging
      if (Math.abs(dy) < 5) return;
      begin(d);
      try { d.el.setPointerCapture(d.pointerId); } catch { /* ignore */ }
    }
    e.preventDefault();
    const g = d.geom;
    const center = g[d.index].top + g[d.index].h / 2 + dy;
    let to = 0;
    for (let i = 0; i < g.length; i++) if (center > g[i].top + g[i].h / 2) to = i;
    if (center < g[0].top + g[0].h / 2) to = 0;
    setState({ key: d.key, from: d.index, to, dy });
    // auto-scroll near the screen edges
    if (e.clientY < 80) window.scrollBy(0, -8); else if (e.clientY > window.innerHeight - 120) window.scrollBy(0, 8);
  };

  const finish = () => {
    const d = drag.current;
    drag.current = null;
    if (!d) return;
    clearTimeout(d.timer);
    document.body.classList.remove('dragging-list');
    if (!d.active) { suppressClick.current = false; return; }
    setState((s) => {
      if (s && s.to !== s.from) {
        const keys = items.map(getKey);
        const [k] = keys.splice(s.from, 1);
        keys.splice(s.to, 0, k);
        onReorder(keys);
      }
      return null;
    });
    setTimeout(() => { suppressClick.current = false; }, 0);
  };

  // Shift the other rows to open a gap where the dragged row will land
  const shiftFor = (i) => {
    if (!state || i === state.from) return 0;
    const h = drag.current?.geom?.[state.from]?.h || 0;
    if (state.from < state.to && i > state.from && i <= state.to) return -h;
    if (state.from > state.to && i >= state.to && i < state.from) return h;
    return 0;
  };

  return (
    <div ref={listRef} className={className + (state ? ' is-dragging' : '')}
      onClickCapture={(e) => { if (suppressClick.current) { e.preventDefault(); e.stopPropagation(); } }}>
      {items.map((it, i) => {
        const key = getKey(it);
        const dragging = state?.key === key;
        return (
          <div key={key} className={'drag-item' + (dragging ? ' dragging' : '')}
            style={dragging ? { transform: `translateY(${state.dy / pageZoom()}px)`, zIndex: 5, position: 'relative' } : { transform: `translateY(${shiftFor(i) / pageZoom()}px)` }}
            onPointerDown={(e) => onPointerDown(e, i, key)} onPointerMove={onPointerMove} onPointerUp={finish} onPointerCancel={finish}
            onContextMenu={(e) => { if (drag.current?.touch) e.preventDefault(); }}>
            {renderItem(it, { dragging })}
          </div>
        );
      })}
    </div>
  );
}
