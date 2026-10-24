import { useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  DENOMS, EVENTS, FAMILIES, ERAS, LANES, denomById, kidsOf, lineage, descendantsOf, laneOf, DENOM_COUNT,
} from '../data/church/denominations.js';
import DENOM_LEVELS from '../data/church/denomLevels.js';
import { BOOKS } from '../data/index.js';
import { personByName, peopleOf, traditionColor } from '../data/church/people.js';
import NoteEditor from '../components/NoteEditor.jsx';
import LevelToggle from '../components/LevelToggle.jsx';
import Ref from '../components/Ref.jsx';
import Icon from '../components/Icon.jsx';
import { noteKey } from '../store/notes.js';
import { useLevel, useTheme, useTextSize } from '../store/prefs.js';
import { PeekChip } from '../components/BookPeek.jsx';
import { pageZoom } from '../utils/zoom.js';

// Church History › Denominations.
//   Computer (≥1200px): a sideways family tree from AD 33 to today, with a detail panel on the right.
//   Phone and tablet: a scroll through history. Time runs down the screen and the 11 main families are
//   colored lanes on the left that fork as you go. Tapping a row opens a detail sheet.
// The selection lives in the address (?d=meth, ?ev=e1517 or ?fam=prot), so it can be bookmarked and Back closes the sheet.

const END = 2025;
const famById = Object.fromEntries(FAMILIES.map((f) => [f.id, f]));
const evById = Object.fromEntries(EVENTS.map((e) => [e.id, e]));

// ───────── Colors ─────────
// The branch colors are tuned for the dark theme. On the light (paper) theme, pale colors are darkened so they stay visible.
function hexRgb(h) { const n = parseInt(h.slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255]; }
const toneCache = new Map();
export function tone(hex, theme) {
  if (theme !== 'light' || !hex) return hex;
  if (toneCache.has(hex)) return toneCache.get(hex);
  const [r, g, b] = hexRgb(hex);
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  const k = Math.min(0.38, Math.max(0.08, (lum - 0.42) * 0.95)); // how much to darken (paler colors more)
  const mix = (c, d) => Math.round(c * (1 - k) + d * k);
  const out = `rgb(${mix(r, 20)} ${mix(g, 18)} ${mix(b, 14)})`;
  toneCache.set(hex, out);
  return out;
}

// ───────── Screen size ─────────
const wideQuery = '(min-width: 1200px)'; // room for the sidebar, the tree and the detail panel
const subWide = (fn) => { const m = window.matchMedia(wideQuery); m.addEventListener('change', fn); return () => m.removeEventListener('change', fn); };
const useWide = () => useSyncExternalStore(subWide, () => window.matchMedia(wideQuery).matches);

// ───────── Tree layout (computer) ─────────
// Each group gets its own row. A group's branches alternate above and below it, and the latest branch sits nearest
// its parent, so an earlier branch's curve only passes rows whose lines haven't started yet: the curves never cross.
// The Early Church trunk carries straight on as Roman Catholic, so they share a row.
function order(id) {
  const up = [], down = [];
  kidsOf(id).forEach((c, i) => (i % 2 ? up : down).push(c));
  up.sort((a, b) => a.start - b.start);
  down.sort((a, b) => b.start - a.start);
  return [...up.flatMap((c) => order(c.id)), id, ...down.flatMap((c) => order(c.id))];
}
const ABOVE = ['coe', 'oo', 'eo', 'maronite', 'ugcc', 'oldcath'];
const BELOW = ['ang', 'ref', 'luth', 'moravian'];
const ROWS = [...ABOVE.flatMap(order), 'rc', ...BELOW.flatMap(order)];
const rowOf = Object.fromEntries(ROWS.map((id, i) => [id, i]));
rowOf.early = rowOf.rc;

// History isn't spread evenly: the Reformation and the centuries after it get more room than the first thousand years.
// On a narrower tree the first thousand years (only four forks) give up even more room.
const AXIS = [[33, 0], [1000, 0.17], [1500, 0.3], [1600, 0.46], [1800, 0.66], [2025, 1]];
const AXIS_NARROW = [[33, 0], [1000, 0.12], [1500, 0.24], [1600, 0.43], [1800, 0.66], [2025, 1]];
function fx(y, axis) {
  for (let i = 1; i < axis.length; i++) {
    if (y <= axis[i][0]) { const [a, pa] = axis[i - 1], [b, pb] = axis[i]; return pa + (pb - pa) * (y - a) / (b - a); }
  }
  return 1;
}
const ERA_SHORT = { early: 'Early', middle: 'Middle Ages', reform: 'Reform.', revival: 'Revivals', global: 'Global' };
const SW = [0, 2, 3, 5, 7, 9]; // line width by size
const byStart = [...DENOMS].sort((a, b) => a.start - b.start || (a.id === 'early' ? -1 : b.id === 'early' ? 1 : 0));

// What lights up for a selection: its line of descent and everything that branched from it.
function litSet(sel) {
  if (!sel) return null;
  if (sel.d) return new Set([...lineage(sel.d), ...descendantsOf(sel.d)]);
  if (sel.ev) return new Set(evById[sel.ev]?.led || []);
  if (sel.fam) return new Set(DENOMS.filter((d) => d.fam === sel.fam).map((d) => d.id));
  return null;
}

function Tree({ sel, onPick, theme, ts }) {
  const box = useRef(null);
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const el = box.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const W = Math.max(width || 900, 540);
  const compact = W < 760; // shorter names, smaller labels and a squeezed first millennium
  const L = 10, LBL = Math.round((compact ? 174 : 214) * ts), T = Math.round(34 * ts), rh = 19.5 * ts;
  const H = T + ROWS.length * rh + 26 * ts;
  const DW = W - L - LBL;
  const axis = DW < 620 ? AXIS_NARROW : AXIS;
  const X = (y) => L + fx(y, axis) * DW;
  // year labels along the bottom, dropping any that would crowd the one before
  const ticks = [33, 500, 1000, 1500, 1600, 1700, 1800, 1900, 2025].reduce((out, y) => {
    const last = out[out.length - 1];
    if (last == null || X(y) - X(last) >= (last === 33 ? 52 : 38) * ts) out.push(y);
    return out;
  }, []);
  // an era's heading, shortened or left out if it won't fit its band
  const eraLabel = (e) => {
    const room = X(e.to) - X(e.from) - 6, per = 7.4 * ts;
    if (e.label.length * per <= room) return e.label.toUpperCase();
    if (ERA_SHORT[e.id].length * per <= room) return ERA_SHORT[e.id].toUpperCase();
    return '';
  };
  const Y = (r) => T + r * rh + rh / 2;
  const fs = (n) => n * ts;

  // where each line starts (never before its parent's line has begun) and where its curve lands
  const geo = useMemo(() => {
    const sx = {}, lx = {}, dx = {};
    byStart.forEach((b) => {
      if (!b.from || b.id === 'rc') { sx[b.id] = X(b.start); lx[b.id] = X(b.start); return; }
      const dy = Math.abs(rowOf[b.id] - rowOf[b.from]) * rh;
      dx[b.id] = Math.max(14, Math.min(54, dy * 0.42));
      sx[b.id] = Math.max(X(b.start), lx[b.from] + 4);
      lx[b.id] = sx[b.id] + dx[b.id];
    });
    return { sx, lx, dx };
  }, [W, ts, axis]); // eslint-disable-line react-hooks/exhaustive-deps

  const lit = litSet(sel);
  const on = (id) => !lit || lit.has(id);
  const c = (hex) => tone(hex, theme);
  const selD = sel?.d;
  const pathOf = (b) => {
    const y = Y(rowOf[b.id]), x2 = X(END);
    if (!b.from || b.id === 'rc') return `M${geo.sx[b.id]} ${y} L ${x2} ${y}`;
    const y1 = Y(rowOf[b.from]), x = geo.sx[b.id], d = geo.dx[b.id];
    return `M${x} ${y1} C ${x + d * 0.55} ${y1}, ${x + d * 0.45} ${y}, ${x + d} ${y} L ${x2} ${y}`;
  };
  const key = (id) => (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPick({ d: id }); } };

  return (
    <div className="dn-tree" ref={box}>
      <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} role="group" aria-label="Family tree of Christian traditions from AD 33 to today">
        {ERAS.map((e, i) => (
          <g key={e.id}>
            <rect x={X(e.from)} y={T - 6} width={X(e.to) - X(e.from)} height={H - T - 20 * ts} className={'dn-band' + (i % 2 ? ' alt' : '')} />
            <text x={(X(e.from) + X(e.to)) / 2} y={T - 14 * ts} textAnchor="middle" fontSize={fs(10.5)} letterSpacing="1" className="dn-era">{eraLabel(e)}</text>
          </g>
        ))}
        {ticks.map((y) => (
          <text key={y} x={X(y)} y={H - 6} textAnchor={y === 33 ? 'start' : y === 2025 ? 'end' : 'middle'} fontSize={fs(10.5)} className="dn-axis">
            {y === 2025 ? 'Today' : y === 33 ? 'AD 33' : y}
          </text>
        ))}
        {EVENTS.map((e) => (
          <line key={e.id} x1={X(e.year)} x2={X(e.year)} y1={T - 6} y2={H - 20 * ts} strokeDasharray="3 4"
            className={'dn-evline' + (sel?.ev === e.id ? ' on' : '')} />
        ))}

        {/* influence from a second tradition (dashed), only for the selected group's family line */}
        {selD && DENOMS.filter((b) => b.also).map((b) => {
          const p = denomById[b.also];
          const show = (lit.has(b.id) && lit.has(p.id)) || selD === b.id || selD === p.id;
          if (!show) return null;
          const x = geo.lx[b.id], y1 = Y(rowOf[p.id]), y2 = Y(rowOf[b.id]);
          return <path key={'a' + b.id} d={`M${Math.max(geo.lx[p.id] + 20, x - 60)} ${y1} C ${x - 10} ${y1}, ${x - 20} ${y2}, ${x} ${y2}`}
            fill="none" stroke={c(p.color)} strokeWidth="1.4" strokeDasharray="3 3" opacity=".8" />;
        })}

        {/* branches, thickest first so thin ones sit on top */}
        {[...DENOMS].sort((a, b) => b.size - a.size).map((b) => {
          const w = SW[b.size] * Math.min(ts, 1.15), op = on(b.id) ? 1 : 0.28;
          if (b.id === 'early') {
            const y = Y(rowOf.early);
            return <line key={b.id} x1={geo.sx.early} x2={X(1054)} y1={y} y2={y} stroke={c(b.color)} strokeWidth={w} strokeLinecap="round" opacity={op}
              className="dn-hit" onClick={() => onPick({ d: 'early' })} />;
          }
          const d = pathOf(b);
          return (
            <g key={b.id} className="dn-hit" onClick={() => onPick({ d: b.id })}>
              {selD === b.id && <path d={d} fill="none" stroke={c(b.color)} strokeWidth={w + 9} opacity=".22" strokeLinecap="round" />}
              <path d={d} fill="none" stroke={c(b.color)} strokeWidth={w} strokeLinecap="round" opacity={op} />
              <path d={d} fill="none" stroke="transparent" strokeWidth="14" />
            </g>
          );
        })}

        {/* where each group forks off */}
        {DENOMS.filter((b) => b.from && b.id !== 'rc').map((b) => (
          <circle key={'f' + b.id} cx={geo.sx[b.id]} cy={Y(rowOf[b.from])} r={Math.max(2.4, SW[b.size] * 0.45)}
            className="dn-fork" stroke={c(b.color)} strokeWidth="1.6" opacity={on(b.id) ? 1 : 0.25} />
        ))}

        {/* names at the tips */}
        {DENOMS.filter((b) => b.id !== 'early').map((b) => {
          const y = Y(rowOf[b.id]);
          return (
            <g key={'t' + b.id} className="dn-hit dn-tip" onClick={() => onPick({ d: b.id })} onKeyDown={key(b.id)}
              tabIndex={0} role="button" aria-label={`${b.name}, from ${b.start}`} aria-pressed={selD === b.id}>
              <rect x={X(END) + 6} y={y - rh / 2} width={LBL - 8} height={rh} fill="transparent" />
              <text x={X(END) + 10} y={y + 4 * ts} fontSize={fs((b.sub ? 11.5 : 12.5) - (compact ? 0.5 : 0))} fontWeight={selD === b.id ? 700 : b.sub ? 400 : 600}
                className={'dn-name' + (b.sub ? ' sub' : '') + (on(b.id) ? '' : ' off')}>
                {compact && b.short ? b.short : b.name} <tspan fontSize={fs(compact ? 9.5 : 10)} fontWeight="400" className="dn-yr">{b.start}</tspan>
              </text>
            </g>
          );
        })}

        <g className="dn-hit dn-tip" onClick={() => onPick({ d: 'early' })} onKeyDown={key('early')} tabIndex={0} role="button" aria-label="Early Church, from AD 33">
          <text x={X(33) + 4} y={Y(rowOf.early) + 18 * ts} fontSize={fs(12.5)} fontWeight={selD === 'early' ? 700 : 600} className={'dn-name halo' + (on('early') ? '' : ' off')}>
            Early Church <tspan fontWeight="400" fontSize={fs(10.5)} className="dn-yr">Pentecost, AD 33</tspan>
          </text>
        </g>
      </svg>
    </div>
  );
}

// ───────── Lanes (phone and tablet) ─────────
// One row per founding, in date order, with era headings and turning points mixed in.
const LANE_ITEMS = (() => {
  const items = [];
  ERAS.forEach((e) => items.push({ k: 'era', y: e.from - 0.5, era: e }));
  EVENTS.forEach((e) => items.push({ k: 'ev', y: e.year - 0.3, ev: e }));
  DENOMS.filter((b) => b.id !== 'rc').forEach((b) => items.push({ k: LANES.includes(b.id) || b.id === 'early' ? 'main' : 'sub', y: b.start, b }));
  return items.sort((a, b) => a.y - b.y);
})();
const HH = { era: 36, ev: 44, main: 62, sub: 44 };

function Lanes({ sel, onPick, theme, ts, laneRef }) {
  const c = (hex) => tone(hex, theme);
  const LW = 11, GX = 10, GW = GX + LANES.length * LW + 6;
  const lx = (id) => GX + LANES.indexOf(id) * LW + LW / 2;
  let y = 0;
  const items = LANE_ITEMS.map((it) => { const h = HH[it.k] * Math.max(1, ts); const o = { ...it, top: y, h }; y += h; return o; });
  const H = y + 20;
  const lit = litSet(sel);
  const on = (id) => !lit || lit.has(id);
  const litLane = lit ? new Set([...lit].map(laneOf)) : null;
  const startY = {};
  items.forEach((it) => { if (it.k === 'main') startY[it.b.id === 'early' ? 'rc' : it.b.id] = it.top + it.h / 2; });

  return (
    <div className="dn-lanes" style={{ height: H }} ref={laneRef}>
      <svg width={GW} height={H} viewBox={`0 0 ${GW} ${H}`} aria-hidden="true">
        {LANES.map((id) => (
          <line key={id} x1={lx(id)} x2={lx(id)} y1={startY[id]} y2={H} stroke={c(denomById[id].color)} strokeWidth={id === 'rc' ? 4 : 3}
            strokeLinecap="round" opacity={!litLane || litLane.has(id) ? 1 : 0.25} />
        ))}
        {items.map((it) => {
          const cy = it.top + it.h / 2;
          if (it.k === 'main' && it.b.id !== 'early') {
            const b = it.b, x1 = lx(laneOf(b.from)), x2 = lx(b.id), y1 = cy - 26;
            return <path key={'f' + b.id} d={`M${x1} ${y1} C ${x1} ${y1 + 16}, ${x2} ${cy - 16}, ${x2} ${cy}`} fill="none" stroke={c(b.color)} strokeWidth="3" opacity={on(b.id) ? 1 : 0.25} />;
          }
          return null;
        })}
        {items.map((it) => {
          const cy = it.top + it.h / 2;
          if (it.k === 'main') {
            const id = it.b.id === 'early' ? 'rc' : it.b.id, col = c(it.b.color);
            return (
              <g key={'d' + it.b.id} opacity={on(it.b.id) ? 1 : 0.3}>
                <circle cx={lx(id)} cy={cy} r="5.5" className="dn-fork" stroke={col} strokeWidth="2.6" />
                <line x1={lx(id) + 7} x2={GW} y1={cy} y2={cy} stroke={col} strokeWidth="1" strokeDasharray="1 3" opacity=".6" />
              </g>
            );
          }
          if (it.k === 'sub') {
            const id = laneOf(it.b.id), col = c(it.b.color);
            return (
              <g key={'d' + it.b.id} opacity={on(it.b.id) ? 1 : 0.3}>
                <circle cx={lx(id)} cy={cy} r="3.4" fill={col} />
                <line x1={lx(id) + 5} x2={GW} y1={cy} y2={cy} stroke={col} strokeWidth="1" strokeDasharray="1 3" opacity=".45" />
              </g>
            );
          }
          if (it.k === 'ev') return <rect key={'e' + it.ev.id} x={lx('rc') - 5} y={cy - 5} width="10" height="10" transform={`rotate(45 ${lx('rc')} ${cy})`} className="dn-diamond" />;
          return <line key={'r' + it.era.id} x1="4" x2={GW} y1={it.top + it.h - 1} y2={it.top + it.h - 1} className="dn-rule" />;
        })}
      </svg>
      {items.map((it) => {
        const style = { top: it.top, height: it.h, paddingLeft: GW + 6 };
        if (it.k === 'era') return <div key={'r' + it.era.id} className="dn-row dr-era" style={style} data-era={it.era.id}><b>{it.era.label}</b></div>;
        if (it.k === 'ev') {
          return (
            <button key={'e' + it.ev.id} type="button" className={'dn-row dr-ev' + (sel?.ev === it.ev.id ? ' dr-sel' : '')} style={style} onClick={() => onPick({ ev: it.ev.id })}>
              <b>{it.ev.year} · {it.ev.name}</b><span>Tap to read what happened</span>
            </button>
          );
        }
        const b = it.b;
        return (
          <button key={b.id} type="button" className={'dn-row' + (it.k === 'sub' ? ' dr-sub' : '') + (sel?.d === b.id ? ' dr-sel' : '') + (on(b.id) ? '' : ' dr-off')}
            style={style} onClick={() => onPick({ d: b.id })} data-year={b.start === 33 ? 'AD 33' : b.start}>
            <b>{b.name} <em>{b.start === 33 ? 'AD 33' : b.start}</em></b>
            <span>{b.one}</span>
          </button>
        );
      })}
    </div>
  );
}

// The era bar that stays at the top while you scroll: where you are in history, and chips to jump between eras.
function EraBar({ laneRef }) {
  const bar = useRef(null);
  const [now, setNow] = useState({ era: ERAS[0], text: 'AD 33 · Pentecost' });
  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const g = laneRef.current;
      if (!g) return;
      const edge = (bar.current?.getBoundingClientRect().bottom || 0) + 12;
      let era = ERAS[0], text = 'AD 33 · Pentecost';
      for (const el of g.children) {
        if (el.tagName === 'svg') continue;
        if (el.getBoundingClientRect().top > edge) break;
        if (el.dataset.era) era = ERAS.find((e) => e.id === el.dataset.era);
        else text = el.querySelector('b')?.textContent.replace(/\s+(AD )?\d+$/, '') || text;
        if (el.dataset.year) text = `${el.dataset.year} · ${text}`;
      }
      setNow((p) => (p.era === era && p.text === text ? p : { era, text }));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check); };
    window.addEventListener('scroll', onScroll, { passive: true });
    check();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, [laneRef]);
  const jump = (id) => {
    const el = laneRef.current?.querySelector(`[data-era="${id}"]`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - ((bar.current?.offsetHeight || 0) + 2) * pageZoom();
    window.scrollTo({ top, behavior: 'smooth' });
  };
  return (
    <div className="dn-bar" ref={bar}>
      <div className="dn-now"><b>{now.era.label}</b><span>{now.text}</span></div>
      <div className="dn-jump" role="toolbar" aria-label="Jump to an era">
        {ERAS.map((e) => <button key={e.id} type="button" className={'dn-jchip' + (now.era.id === e.id ? ' on' : '')} onClick={() => jump(e.id)}>{e.label}</button>)}
      </div>
    </div>
  );
}

// ───────── The small tree of one group's own branches ─────────
function MiniTree({ id, onPick, theme, ts }) {
  // each branch sits right under its parent
  const ordered = [];
  (function walk(x) { ordered.push(x); kidsOf(x).forEach((k) => walk(k.id)); })(id);
  if (ordered.length < 2) return null;
  const root = denomById[id];
  const W = 330, rh = 21 * ts, LB = Math.round(158 * ts), H = ordered.length * rh + 14, x0 = 8;
  const X = (y) => x0 + ((y - root.start) / (END - root.start)) * (W - x0 - LB - 6);
  const Y = (i) => 7 + i * rh + rh / 2;
  const row = Object.fromEntries(ordered.map((x, i) => [x, i]));
  // a branch never starts before its parent's line has (ordered lists parents first)
  const sx = {};
  ordered.forEach((f) => { sx[f] = f === id ? X(root.start) : Math.max(X(denomById[f].start), sx[denomById[f].from] + (denomById[f].from === id ? 4 : 14)); });
  const c = (hex) => tone(hex, theme);
  return (
    <div className="dn-mini">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="group" aria-label={`Branches of ${root.name}`}>
        {ordered.map((f) => {
          const b = denomById[f], y = Y(row[f]), x = sx[f], top = f === id, py = top ? y : Y(row[b.from]);
          return (
            <g key={f} className="dn-hit" onClick={() => !top && onPick({ d: f })}>
              {!top && <path d={`M${x} ${py} C ${x + 6} ${py}, ${x} ${y}, ${x + 10} ${y}`} fill="none" stroke={c(b.color)} strokeWidth="2" />}
              <line x1={top ? x : x + 10} x2={W - LB} y1={y} y2={y} stroke={c(b.color)} strokeWidth={top ? 4 : 2.2} strokeLinecap="round" />
              <text x={W - LB + 6} y={y + 4} fontSize={(top ? 12 : 11) * ts} fontWeight={top ? 600 : 400} className={'dn-name' + (top ? '' : ' sub')}>
                {b.short || b.name} <tspan fontSize={9.5 * ts} className="dn-yr">{b.start}</tspan>
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ───────── Detail card ─────────
const bookByName = Object.fromEntries(BOOKS.map((b) => [b.name, b]));
export function Passage({ text }) {
  const m = text.match(/^(.+?) (\d+)(?::|$)/);
  const book = m && bookByName[m[1]];
  return book
    ? <Ref to={`/book/${book.id}/${m[2]}`} className="chip dn-chip-v">{text}</Ref>
    : <span className="chip dn-chip-v">{text}</span>;
}

const Swatch = ({ color, diamond }) => <span className={'dn-sw' + (diamond ? ' dia' : '')} style={{ background: color }} aria-hidden="true" />;

function Chips({ ids, onPick, theme }) {
  return (
    <div className="dn-chips">
      {ids.map((k) => <PeekChip key={k} kind="denom" id={k} className="chip dn-chip" onClick={() => onPick({ d: k })}><Swatch color={tone(denomById[k].color, theme)} />{denomById[k].name}</PeekChip>)}
    </div>
  );
}

const sentence = (s) => (/[.!?”]$/.test(s) ? s : s + '.');

function DenomCard({ id, onPick, theme, ts, wide }) {
  const level = useLevel();
  const b = denomById[id];
  const L = DENOM_LEVELS[id];
  const kids = kidsOf(id);
  const parent = denomById[b.from];
  const heading = id === 'early' || id === 'rc' ? 'The story' : b.sub ? 'How it began' : 'Why it split';
  // its key people: linked when they have a page in Key People, plus anyone from Key People in this tradition
  const named = (b.people || []).map((n) => personByName[n] || n);
  const keyPeople = [...named, ...peopleOf(id).filter((p) => !named.includes(p))];
  const paras = level === 'simple' ? null : level === 'moderate' ? [L?.m || b.why] : (L?.d || [b.why]);

  return (
    <article className="dn-card" aria-label={b.name}>
      <nav className="dn-lin" aria-label="Line of descent">
        {lineage(id).map((x, i) => (
          <span key={x}>
            {i > 0 && <em aria-hidden="true">›</em>}
            <button type="button" onClick={() => onPick({ d: x })} aria-current={x === id ? 'true' : undefined}><Swatch color={tone(denomById[x].color, theme)} />{denomById[x].name}</button>
          </span>
        ))}
      </nav>
      <div className="dn-ttl">
        <h2><Swatch color={tone(b.color, theme)} />{b.name}</h2>
        <LevelToggle small />
      </div>
      <div className="dn-meta">
        {b.years}
        {parent && <> · Branched from <button type="button" className="link-btn" onClick={() => onPick({ d: parent.id })}>{parent.name}</button></>}
      </div>

      {level === 'simple'
        ? <p className="dn-lead">{sentence(L?.s || b.one)}</p>
        : <><h3 className="dn-h">{heading}</h3>{paras.map((p, i) => <p key={i} className="dn-p">{p}</p>)}</>}

      {level !== 'simple' && keyPeople.length > 0 && (
        <><h3 className="dn-h">Key people</h3><div className="dn-chips">{keyPeople.map((p) => (typeof p === 'string'
          ? <span key={p} className="chip plain dn-chip">{p}</span>
          : <PeekChip key={p.id} kind="histperson" id={p.id} to={`/history/people/${p.id}`} className="chip dn-chip kp-rel"><Swatch color={tone(traditionColor(p), theme)} />{p.name}</PeekChip>))}</div></>
      )}
      {level === 'detailed' && b.beliefs && (
        <><h3 className="dn-h">Beliefs &amp; practice</h3>
          <div className={'dn-grid' + (wide ? '' : ' one')}>{b.beliefs.map(([k, v]) => <div key={k}><b>{k}</b>{v}</div>)}</div></>
      )}
      <h3 className="dn-h">Today</h3>
      <p className="dn-p">{level === 'simple' && L?.todayShort ? L.todayShort : b.today}</p>

      {kids.length > 0 && (
        <>
          <h3 className="dn-h">Branches from here</h3>
          {level === 'simple' ? <Chips ids={kids.map((k) => k.id)} onPick={onPick} theme={theme} /> : <MiniTree id={id} onPick={onPick} theme={theme} ts={ts} />}
        </>
      )}
      {level === 'detailed' && b.verses?.length > 0 && (
        <><h3 className="dn-h">Key passages</h3><div className="dn-chips">{b.verses.map((v) => <Passage key={v} text={v} />)}</div></>
      )}

      {id !== 'early' && (
        <Link to={`/history/compare?with=${id}`} className="btn dn-compare"><Icon k="compare" size={16} />Compare with…</Link>
      )}
      <div className="dn-notes">
        <NoteEditor noteKey={noteKey('denom', id)} title={`My notes on ${b.name}`} />
      </div>
    </article>
  );
}

function EventCard({ id, onPick, theme }) {
  const e = evById[id];
  return (
    <article className="dn-card" aria-label={e.name}>
      <div className="dn-ttl"><h2><Swatch color="var(--accent)" diamond />{e.name}</h2></div>
      <div className="dn-meta">AD {e.year} · turning point</div>
      <p className="dn-p">{e.text}</p>
      <h3 className="dn-h">Led to</h3>
      <Chips ids={e.led} onPick={onPick} theme={theme} />
      <Link to="/history/turning-points" className="dn-more">All turning points ›</Link>
    </article>
  );
}

function FamilyCard({ id, onPick, theme }) {
  const f = famById[id];
  const list = DENOMS.filter((d) => d.fam === id && d.id !== 'early').map((d) => d.id);
  return (
    <article className="dn-card" aria-label={f.name}>
      <div className="dn-ttl"><h2><Swatch color={tone(f.color, theme)} />{f.name}</h2></div>
      <div className="dn-meta">{list.length} groups on the tree</div>
      <Chips ids={list} onPick={onPick} theme={theme} />
    </article>
  );
}

function IntroCard({ onPick, theme }) {
  return (
    <article className="dn-card intro">
      <h2 className="dn-intro-h">Pick any branch</h2>
      <p className="dn-p">Click a name or a line to see why that group began, its key people, what it teaches and where it is today. Thicker lines are larger groups today.</p>
      <h3 className="dn-h">The three families</h3>
      <div className="dn-chips">
        {FAMILIES.map((f) => <PeekChip key={f.id} kind="family" id={f.id} className="chip dn-chip" onClick={() => onPick({ fam: f.id })}><Swatch color={tone(f.color, theme)} />{f.name}</PeekChip>)}
      </div>
      <h3 className="dn-h">Turning points</h3>
      <div className="dn-chips">
        {EVENTS.map((e) => <PeekChip key={e.id} kind="event" id={e.id} className="chip dn-chip" onClick={() => onPick({ ev: e.id })}><b className="dn-evyr">{e.year}</b>{e.short}</PeekChip>)}
      </div>
      <h3 className="dn-h">Start at the beginning</h3>
      <Chips ids={['early']} onPick={onPick} theme={theme} />
    </article>
  );
}

function Detail({ sel, ...p }) {
  if (sel?.d) return <DenomCard id={sel.d} {...p} />;
  if (sel?.ev) return <EventCard id={sel.ev} {...p} />;
  if (sel?.fam) return <FamilyCard id={sel.fam} {...p} />;
  return <IntroCard {...p} />;
}

// ───────── The phone's bottom sheet ─────────
export function Sheet({ children, onClose, label }) {
  const body = useRef(null);
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const esc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', esc);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', esc); };
  }, [onClose]);
  useEffect(() => { body.current?.scrollTo(0, 0); }, [label]);
  return (
    <>
      <div className="dn-dim" onClick={onClose} />
      <div className="dn-sheet" role="dialog" aria-modal="true" aria-label={label} ref={body}>
        <div className="dn-sheet-top">
          <button type="button" className="dn-grab" onClick={onClose} aria-label="Close" />
          <button type="button" className="ib dn-x" onClick={onClose} aria-label="Close"><Icon k="close" size={18} /></button>
        </div>
        {children}
      </div>
    </>
  );
}

// ───────── Page ─────────
export default function Denominations() {
  const wide = useWide();
  const theme = useTheme();
  const ts = useTextSize();
  const nav = useNavigate();
  const [params, setParams] = useSearchParams();
  const laneRef = useRef(null);
  const openedHere = useRef(false);

  const pick = (s) => (s.d && denomById[s.d] ? { d: s.d } : s.ev && evById[s.ev] ? { ev: s.ev } : s.fam && famById[s.fam] ? { fam: s.fam } : null);
  const sel = pick({ d: params.get('d'), ev: params.get('ev'), fam: params.get('fam') });
  const label = sel?.d ? denomById[sel.d].name : sel?.ev ? evById[sel.ev].name : sel?.fam ? famById[sel.fam].name : '';

  const onPick = (s) => {
    const next = pick(s);
    if (!next) return;
    // On a computer every click replaces the address; on a phone the first tap adds a history entry, so Back closes the sheet.
    const push = !wide && !sel;
    if (push) openedHere.current = true;
    setParams(next, { replace: !push });
  };
  const close = () => {
    if (openedHere.current) { openedHere.current = false; nav(-1); } else setParams({}, { replace: true });
  };

  const card = <Detail sel={sel} onPick={onPick} theme={theme} ts={ts} wide={wide} />;

  return (
    <main className="wrap page dn-page">
      <div className="dn-head">
        <div className="crumbs2">Church History › <b>Denominations</b></div>
        <h1 className="h1-sm">Denominations</h1>
        <p className="tagline">How one church became many, and why.</p>
      </div>

      {wide ? (
        <div className="dn-desk">
          <div className="dn-main">
            <div className="dn-tools">
              <div className="dn-evs" role="toolbar" aria-label="Turning points">
                {EVENTS.map((e) => (
                  <button key={e.id} type="button" className={'dn-ev' + (sel?.ev === e.id ? ' on' : '')} aria-pressed={sel?.ev === e.id}
                    onClick={() => (sel?.ev === e.id ? setParams({}, { replace: true }) : onPick({ ev: e.id }))}><b>{e.year}</b>{e.short}</button>
                ))}
              </div>
              <div className="dn-fams">
                {FAMILIES.map((f) => (
                  <button key={f.id} type="button" className={'dn-fam' + (sel?.fam === f.id ? ' on' : '')} aria-pressed={sel?.fam === f.id}
                    onClick={() => (sel?.fam === f.id ? setParams({}, { replace: true }) : onPick({ fam: f.id }))}><Swatch color={tone(f.color, theme)} />{f.label}</button>
                ))}
              </div>
            </div>
            <Tree sel={sel} onPick={onPick} theme={theme} ts={ts} />
            <p className="dn-hint">Click a name or line to see its story. Thicker lines are larger groups today. When a group is selected, dashed lines show strong influence from another tradition.{sel && <> <button type="button" className="link-btn" onClick={() => setParams({}, { replace: true })}>Clear selection</button></>}</p>
          </div>
          <aside className="dn-panel" aria-label="Details">{card}</aside>
        </div>
      ) : (
        <>
          <div className="dn-key">
            {FAMILIES.map((f) => <span key={f.id}><Swatch color={tone(f.color, theme)} />{f.label}</span>)}
            <span className="dn-count">{DENOM_COUNT} groups</span>
          </div>
          <EraBar laneRef={laneRef} />
          <Lanes sel={sel} onPick={onPick} theme={theme} ts={ts} laneRef={laneRef} />
          {sel && <Sheet onClose={close} label={label}>{card}</Sheet>}
        </>
      )}

      <nav className="ch-more" aria-label="Church History pages">
        <Link to="/history/people" className="pill">Key People ›</Link>
        <Link to="/history/turning-points" className="pill">Turning Points ›</Link>
        <Link to="/history/compare" className="pill">Compare ›</Link>
      </nav>
    </main>
  );
}
