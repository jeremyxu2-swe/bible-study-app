import { useEffect, useRef, useState } from 'react';
import { pageZoom } from '../utils/zoom.js';

// Sticky "jump to era" chips for phones: highlights the era in view and scrolls to one on tap.
// Elements registered with register(id) need a data-era attribute.
export function useEraJump(ids) {
  const [active, setActive] = useState(ids[0]);
  const jumpRef = useRef(null);
  const rowRefs = useRef({});

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const seen = new Map();
    const io = new IntersectionObserver((items) => {
      items.forEach((it) => seen.set(it.target.dataset.era, it.isIntersecting));
      const vis = ids.filter((id) => seen.get(id));
      if (vis.length) setActive(vis[0]);
    }, { rootMargin: '-90px 0px -55% 0px' });
    Object.values(rowRefs.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  useEffect(() => {
    const bar = jumpRef.current;
    const chip = bar?.querySelector(`[data-jump="${active}"]`);
    if (bar && chip && bar.scrollTo) bar.scrollTo({ left: chip.offsetLeft - 16, behavior: 'smooth' });
  }, [active]);

  const jump = (id) => {
    const el = rowRefs.current[id];
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - ((jumpRef.current?.offsetHeight || 0) + 12) * pageZoom();
    window.scrollTo({ top: y, behavior: 'smooth' });
    setActive(id);
  };

  const register = (id) => (el) => { rowRefs.current[id] = el; };
  return { active, jumpRef, jump, register };
}

export function EraJumpBar({ eras, state }) {
  return (
    <nav className="era-jump" ref={state.jumpRef} aria-label="Jump to an era">
      {eras.map((e) => (
        <button key={e.id} type="button" data-jump={e.id} className={state.active === e.id ? 'on' : ''} onClick={() => state.jump(e.id)}>{e.name}</button>
      ))}
    </nav>
  );
}
