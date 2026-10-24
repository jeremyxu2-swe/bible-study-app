import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ERAS, EMPIRES, getBook, getCharacter } from '../data/index.js';
import { CHRONO } from '../data/chrono.js';
import { TL_ERAS, TL_END, TL_LANES, TL_EMPIRES, EMPIRE_COLORS, yearLabel, rangeLabel } from '../data/timeline.js';
import EraMore from './EraMore.jsx';
import { PeekLink, PeekChip } from './BookPeek.jsx';
import { pageZoom } from '../utils/zoom.js';

// ---- shared geometry -------------------------------------------------------
const TRACK = TL_ERAS.reduce((s, e) => s + e.w, 0);
const bounds = TL_ERAS.map((e, i) => ({ ...e, end: TL_ERAS[i + 1]?.start ?? TL_END }));
const eraName = Object.fromEntries(ERAS.map((e) => [e.id, e.name]));

// Year → x position (each era gets its own width so short periods stay readable).
function X(y) {
  let acc = 0;
  for (let i = 0; i < bounds.length; i++) {
    const { start, end, w } = bounds[i];
    if (y <= end || i === bounds.length - 1) return acc + ((Math.max(Math.min(y, end), start) - start) / (end - start)) * w;
    acc += w;
  }
  return acc;
}
const eraOf = (y) => bounds.find((b) => y >= b.start && y < b.end) || bounds[bounds.length - 1];
const empireOf = (y) => TL_EMPIRES.find(([, , a, b]) => y >= a && y < b)?.[1];

const ITEMS = TL_LANES.map((lane) => ({
  ...lane,
  items: lane.items.map(([id, s, e, o = {}]) => {
    const b = getBook(id);
    const label = o.label || b?.name || id;
    return { id, s, e, b, label, full: o.ch || id === 'joel' ? label : (b?.name || label), ch: o.ch, to: `/book/${id}` };
  }),
}));

// Pack bars into rows so labels never overlap.
const ROW_H = 28;
const PLACED = ITEMS.map((lane) => {
  const ends = [];
  const items = lane.items.map((it) => {
    const x1 = X(it.s);
    const x2 = Math.max(X(it.e), x1 + 6);
    const labelW = it.label.length * 6.9 + 20;
    const small = x2 - x1 < labelW;
    // Labels that would run past the right edge sit to the left of their dot instead.
    const flip = small && x1 + labelW > TRACK;
    const left = flip ? x1 - labelW + 12 : x1;
    const right = flip ? x1 + 12 : x1 + Math.max(x2 - x1, labelW);
    let r = 0;
    while (r < ends.length && ends[r] > left - 3) r++;
    ends[r] = right;
    return { ...it, x1, x2, small, flip, row: r };
  });
  return { ...lane, items, rows: ends.length };
});

// ---- desktop chart ---------------------------------------------------------
function DesktopTimeline() {
  const [tip, setTip] = useState(null);
  const pinRef = useRef(null);
  return (
    <div className="tl-desk">
      <div className="tl-frame">
        {/* Empires + eras stay pinned to the top while you scroll down; they follow the chart sideways */}
        <div className="tl-pin">
          <div className="tl-pin-inner" ref={pinRef} style={{ width: TRACK + 150 }}>
          <div className="tl-emp">
            {TL_EMPIRES.map(([id, name, a, b]) => {
              const w = X(b) - X(a) - 3;
              const c = EMPIRE_COLORS[id];
              return id
                ? <PeekChip key={name} kind="empire" id={id} to={`/empire/${id}`} className="emp-pill" style={{ width: w, '--ec': c, background: `${c}33`, borderColor: `${c}66`, boxShadow: `inset 0 -2px 0 ${c}` }} title={`About ${name}`}>{w < 60 ? `${name.slice(0, 2)}.` : name}</PeekChip>
                : <span key={name} style={{ width: w }}>{name}</span>;
            })}
          </div>
          <div className="tl-head">
            {bounds.map((e) => (
              <div key={e.id} style={{ width: e.w }} title={`${eraName[e.id]} · from ${yearLabel(e.start)}`}>
                {e.short}<small>{yearLabel(e.start)}</small>
              </div>
            ))}
          </div>
          </div>
          {/* Row labels stay put when the chart scrolls sideways, like the lane names below */}
          <div className="tl-pin-lab" aria-hidden="true"><span>World powers</span><span>Eras</span></div>
        </div>
      <div className="tl-scroll" onScroll={(e) => { if (pinRef.current) pinRef.current.style.transform = `translateX(${-e.currentTarget.scrollLeft}px)`; }}>
        <div className="tl-inner" style={{ width: TRACK + 150 }}>
          {PLACED.map((lane) => (
            <div key={lane.key} className="tl-lane">
              <div className="tl-lname" style={{ color: lane.color, "--c": lane.color }}>{lane.name}</div>
              <div className="tl-track" style={{ width: TRACK, height: lane.rows * ROW_H + 14 }}>
                {TL_EMPIRES.filter(([id]) => id).map(([id, , a, b]) => (
                  <div key={id} className="tl-wash" style={{ left: X(a), width: X(b) - X(a), background: `${EMPIRE_COLORS[id]}14` }} />
                ))}
                {bounds.map((e) => <div key={e.id} className="tl-grid" style={{ left: X(e.start) }} />)}
                {lane.items.map((it) => {
                  const style = it.flip
                    ? { right: TRACK - it.x1 - 12, top: 8 + it.row * ROW_H, '--c': lane.color }
                    : { left: it.x1, top: 8 + it.row * ROW_H, '--c': lane.color };
                  if (!it.small) style.width = it.x2 - it.x1;
                  const show = () => setTip({ it, lane });
                  return (
                    <PeekLink key={it.label} bookId={it.id} label={it.full} to={it.to} mouseHold className={'tl-bar holdable' + (it.small ? ' sm' : '') + (it.flip ? ' flip' : '')} style={style}
                      onMouseEnter={show} onFocus={show} onMouseLeave={() => setTip(null)} onBlur={() => setTip(null)}
                      onPointerDownCapture={() => setTip(null)}
                      aria-label={`${it.full}, ${rangeLabel(it.s, it.e)}`}>
                      {it.label}
                    </PeekLink>
                  );
                })}
                {tip && tip.lane.key === lane.key && <Tip it={tip.it} />}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <p className="muted tl-note">
        Hover a book for its dates · click to open it · click and hold for a quick summary. The scale is stretched per era so short periods stay readable.
        {' '}<PeekLink bookId="genesis" label="Genesis 1–11" to="/book/genesis" mouseHold className="holdable">Genesis 1–11</PeekLink> (creation to Babel) comes before the first column.
      </p>
    </div>
  );
}

function Tip({ it }) {
  const left = Math.min(Math.max(it.x1 - 40, 0), TRACK - 270);
  const era = eraOf(it.s);
  const emp = empireOf(it.s);
  return (
    <div className="tl-tip" role="tooltip" style={{ left, top: 8 + it.row * ROW_H + ROW_H + 4 }}>
      <b>{it.full}</b>
      <div className="tl-tip-meta">{rangeLabel(it.s, it.e)} · {eraName[era.id]}{emp && emp !== '—' ? ` · ${emp}` : ''}</div>
      {it.b?.tagline && <div className="tl-tip-text">{it.b.tagline}</div>}
    </div>
  );
}

// ---- phone: story line with a jump bar -------------------------------------
// One scrolling list from Creation to Revelation: each era is a "station", each book a "stop" at the
// year it begins. A bar pinned to the top shows where you are in history and lets you jump.
const LANE_LABEL = { story: 'History', prophets: 'Prophet', poetry: 'Poetry & wisdom', letters: 'Letter' };
const STOPS = ITEMS.flatMap((l) => l.items.map((it) => ({ ...it, lane: l.key, color: l.color })))
  .sort((a, b) => a.s - b.s || (a.lane === 'story' ? -1 : b.lane === 'story' ? 1 : 0));
// Books of a different kind that overlap a stop (very long-running ones like Psalms are left out).
// eslint-disable-next-line no-unused-vars
const meanwhile = (it) => STOPS.filter((o) => o !== it && o.lane !== it.lane && o.s < it.e && o.e > it.s && o.e - o.s <= 150).slice(0, 3);
const TONES = ['a', 'b', 'c', 'b', 'a', 'c', 'b', 'd', 'e', 'a'].map((t) => `var(--tone-${t})`);
const TICKS = [[-2100, '2100 BC'], [-1000, '1000 BC'], [0, 'Christ'], [TL_END, `AD ${TL_END}`]];
// x fraction (0–1) → year, the inverse of X()
function yearAt(f) {
  let acc = 0;
  const x = f * TRACK;
  for (const b of bounds) {
    if (x <= acc + b.w) return Math.round(b.start + ((x - acc) / b.w) * (b.end - b.start));
    acc += b.w;
  }
  return TL_END;
}

function MobileTimeline() {
  const barRef = useRef(null);
  const stripRef = useRef(null);
  const listRef = useRef(null);
  const [pos, setPos] = useState({ y: null, era: null });

  const marks = () => [...(listRef.current?.querySelectorAll('[data-y]') || [])];
  const barBottom = () => barRef.current?.getBoundingClientRect().bottom ?? 0;

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = barBottom() + 48;
      let cur = null;
      for (const m of marks()) { if (m.getBoundingClientRect().top <= line) cur = m; else break; }
      const y = cur && cur.dataset.y !== '' ? +cur.dataset.y : null;
      setPos((p) => (p.y === y ? p : { y, era: y == null ? null : eraOf(y).id }));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);

  const jumpTo = (clientX) => {
    const r = stripRef.current.getBoundingClientRect();
    const y = yearAt(Math.min(1, Math.max(0, (clientX - r.left) / r.width)));
    let target = null;
    for (const m of marks()) { if (m.dataset.y === '') continue; if (+m.dataset.y <= y || !target) target = m; else break; }
    if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - (barRef.current.offsetHeight + 8) * pageZoom(), behavior: 'auto' });
  };
  const drag = useRef(false);
  const onDown = (e) => { drag.current = true; e.currentTarget.setPointerCapture?.(e.pointerId); jumpTo(e.clientX); };
  const onMove = (e) => { if (drag.current) jumpTo(e.clientX); };
  const onUp = () => { drag.current = false; };

  const handle = pos.y == null ? 0 : (X(pos.y) / TRACK) * 100;
  const beginnings = ERAS.find((e) => e.id === 'beginnings');

  return (
    <div className="tl-mob sl">
      <div className="sl-bar" ref={barRef}>
        <div className="sl-now">
          <b>{pos.y == null ? 'Creation' : `≈ ${yearLabel(pos.y)}`}</b>
          <em>{pos.y == null ? `${beginnings.name} · before datable history` : eraName[pos.era]}</em>
        </div>
        <div className="sl-strip" ref={stripRef} role="slider" aria-label="Jump to a point in history"
          aria-valuemin={-2100} aria-valuemax={TL_END} aria-valuenow={pos.y ?? -2100} aria-valuetext={pos.y == null ? 'Creation' : yearLabel(pos.y)} tabIndex={0}
          onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
          {bounds.map((b, i) => <div key={b.id} className={pos.era === b.id ? 'on' : ''} style={{ flex: b.w, background: TONES[i] }} />)}
          <span className="sl-handle" style={{ left: `${handle}%` }} />
        </div>
        <div className="sl-ticks" aria-hidden="true">
          {TICKS.map(([y, t], i) => (
            <span key={t} style={{ left: `${(X(y) / TRACK) * 100}%`, transform: `translateX(${i === 0 ? 0 : i === TICKS.length - 1 ? -100 : -50}%)` }}>{t}</span>
          ))}
        </div>
      </div>

      <div className="sl-line" ref={listRef}>
        <Station era={beginnings} y="" dates="Before datable history" />
        <div className="ca-card">
          <div className="ca-row" data-y="">
            <PeekLink bookId="genesis" label="Genesis 1–11" to="/book/genesis" className="ca-name holdable"><i style={{ background: TL_LANES[0].color }} aria-hidden="true" />Genesis 1–11</PeekLink>
            <span className="ca-range">Undated</span>
            <span className="ca-sub">Creation, the fall, the flood and Babel</span>
          </div>
        </div>

        {bounds.map((b) => {
          const era = ERAS.find((e) => e.id === b.id);
          const here = STOPS.filter((it) => it.s >= b.start && it.s < b.end);
          return (
            <div key={b.id}>
              <Station era={era} y={b.start} dates={`${yearLabel(b.start)} – ${yearLabel(b.end)}`} />
              {here.length === 0 && <p className="sl-quiet">About 400 years with no new Scripture.</p>}
              {here.length > 0 && (
                <div className="ca-card">
                  {here.map((it) => {
                    const span = b.end - b.start;
                    const pct = (y) => Math.max(0, Math.min(100, ((y - b.start) / span) * 100));
                    const left = pct(it.s);
                    const width = Math.max(2, pct(it.e) - left);
                    return (
                      <div key={it.id + it.s} className="ca-row" data-y={it.s}>
                        <PeekLink bookId={it.id} label={it.full} to={it.to} className="ca-name holdable" aria-label={`${it.full}, ${LANE_LABEL[it.lane]}, ${rangeLabel(it.s, it.e)}`}>
                          <i style={{ background: it.color }} aria-hidden="true" />{it.full}
                        </PeekLink>
                        <span className="ca-range">{rangeLabel(it.s, it.e).replace('c. ', '')}</span>
                        <span className="ca-track" aria-hidden="true"><b style={{ left: `${Math.min(left, 98)}%`, width: `${Math.min(width, 100 - Math.min(left, 98))}%`, background: it.color }} /></span>
                      </div>
                    );
                  })}
                  <div className="ca-axis" aria-hidden="true"><span>{yearLabel(b.start)}</span><span>{yearLabel(b.end)}</span></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <p className="muted tl-note">Drag along the bar to jump through history. Tap a book to open it; press and hold for a quick summary.</p>
    </div>
  );
}

function Station({ era, y, dates }) {
  const d = CHRONO[era.id] || {};
  const emp = (d.empires || []).map((id) => EMPIRES.find((m) => m.id === id)).filter(Boolean);
  const people = (d.people || []).map(getCharacter).filter(Boolean);
  return (
    <section className="sl-station" data-y={y} data-era={era.id}>
      <div className="sl-st-row">
        <span className="sl-dot" aria-hidden="true" />
        <div className="sl-st-name">
          <h3>{era.name}</h3>
          <small>{dates}</small>
        </div>
        {emp.length > 0 && (
          <div className="sl-emp">{emp.map((m, i) => <span key={m.id}>{i > 0 && ' → '}<PeekChip kind="empire" id={m.id} to={`/empire/${m.id}`}><i className="emp-dot" style={{ background: EMPIRE_COLORS[m.id] }} />{m.name}</PeekChip></span>)}</div>
        )}
      </div>
      <details className="c-more sl-more">
        <summary>Period summary &amp; key people</summary>
        <EraMore era={era} people={people} />
      </details>
    </section>
  );
}

export default function TimelineView() {
  return (
    <section aria-label="Timeline of the books">
      <div className="legend">
        {TL_LANES.map((l) => <span key={l.key}><i style={{ background: l.color }} />{l.name}</span>)}
      </div>
      <DesktopTimeline />
      <MobileTimeline />
    </section>
  );
}
