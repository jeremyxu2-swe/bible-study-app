import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  MAP_W, MAP_H, project, LAND, ISLETS, REGIONS, PLACES, MAJOR, LETTERS, JOURNEYS, journeyById, letterFor, stopPoint, TL_FROM, TL_TO,
} from '../data/journeys.js';
import { CHARACTERS, getBook } from '../data/index.js';
import { PersonLink, PeekChip } from '../components/BookPeek.jsx';
import NoteEditor from '../components/NoteEditor.jsx';
import Ref from '../components/Ref.jsx';
import { noteKey } from '../store/notes.js';

// Bible Summaries › Paul's Journeys (/journeys). Built from the approved "Paul's Journeys Map" canvas:
//   Computer (A, "Atlas"): journey tabs; the whole eastern Mediterranean with every route; the chosen
//     route lit up with numbered stops and city names; a side panel with who went, the letters written,
//     and each stop (Acts reference, one line, and the letter its church later received); a timeline below.
//     Gold tags on the map mark the cities whose church received a letter (a switch under the map).
//   Phone (C, ≤760px): the map zooms in on the chosen journey; numbered stops, with a gold ring on cities
//     that received a letter; the stop list below. No city names on the small map.
// The chosen journey lives in the address: ?j=j1 | j2 | j3 | j4 (no ?j = all journeys).

const PERSON_ID = Object.fromEntries(CHARACTERS.map((c) => [c.name, c.id]));
const LETTERS_KEY = 'lamp-path-journey-letters';

function useMedia(q) {
  const [on, setOn] = useState(() => window.matchMedia(q).matches);
  useEffect(() => {
    const m = window.matchMedia(q);
    const f = () => setOn(m.matches);
    m.addEventListener('change', f);
    return () => m.removeEventListener('change', f);
  }, [q]);
  return on;
}

function readLetters() {
  try { return localStorage.getItem(LETTERS_KEY) !== '0'; } catch { return true; }
}

// The part of the map to show on a phone: the journey's stops plus a margin, kept at 4:3 and inside the map.
// The part of the map to show for a journey: its whole route plus a margin for names, at the given
// width:height ratio and inside the map. Phone 4:3; computer the map's own 750:420.
// On the phone `ratio` is a minimum: a very wide route (the voyage to Rome) gets a wider, shorter frame
// (up to the whole map) instead of being cut off at the sides.
function cropFor(j, ratio, stretch = false) {
  if (!j) return [0, 0, MAP_W, MAP_H];
  const pts = j.way.map(([lon, lat]) => project(lon, lat));
  const x0 = Math.min(...pts.map((p) => p.x)) - 55, x1 = Math.max(...pts.map((p) => p.x)) + 55;
  const y0 = Math.min(...pts.map((p) => p.y)) - 40, y1 = Math.max(...pts.map((p) => p.y)) + 40;
  if (stretch) ratio = Math.min(MAP_W / MAP_H, Math.max(ratio, (x1 - x0) / (y1 - y0)));
  let w = Math.max(x1 - x0, 260), h = Math.max(y1 - y0, 260 / ratio);
  if (w / h > ratio) h = w / ratio; else w = h * ratio;
  if (w > MAP_W) { w = MAP_W; h = w / ratio; }
  if (h > MAP_H) { h = MAP_H; w = h * ratio; }
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  const vx = Math.min(Math.max(cx - w / 2, 0), MAP_W - w);
  const vy = Math.min(Math.max(cy - h / 2, 0), MAP_H - h);
  return [vx, vy, w, h];
}

function Person({ name }) {
  const base = name.split(' (')[0];
  const id = PERSON_ID[base];
  const rest = name.slice(base.length);
  return id
    ? <PersonLink personId={id} className="jr-chip">{base}<span>{rest}</span></PersonLink>
    : <span className="jr-chip plain">{name}</span>;
}

function LetterChip({ letter, className = 'jr-letter' }) {
  return <PeekChip kind="church" id={letter.church} to={`/church/${letter.church}`} className={className}>{letter.label}</PeekChip>;
}

function JourneyMap({ sel, phone, lettersOn }) {
  const box = cropFor(sel, phone ? 4 / 3 : MAP_W / MAP_H, phone);
  const k = box[2] / MAP_W; // map units per unit at full size: keeps text and dashes the same size when zoomed
  const [vx, vy, vw, vh] = box;
  const pos = (p) => ({ left: `${((p.x - vx) / vw) * 100}%`, top: `${((p.y - vy) / vh) * 100}%` });

  // Pins over the map: numbered stops for the chosen journey, plus (computer) city names and letter tags.
  const pins = [];
  const seen = new Set();
  if (sel) {
    // A journey: its own stops only, each with the letter its church received (the Galatian towns share
    // one "Galatians" tag, on the first of them; the Macedonia & Greece stop has none, it's a region).
    let galatians = false;
    sel.stops.forEach((s, i) => {
      if (!s.place || seen.has(s.place)) return;
      seen.add(s.place);
      const l = s.place === 'macedonia' ? null : letterFor(s.place);
      const showL = l && !(l.church === 'galatia' && galatians);
      if (l?.church === 'galatia') galatians = true;
      pins.push({
        key: s.place, p: stopPoint(s), side: s.side || PLACES[s.place].side, n: i + 1,
        name: s.label || (s.at ? s.name : PLACES[s.place].name),
        badge: lettersOn && showL ? l : null,
        ring: !!letterFor(s.place),
      });
    });
  } else {
    MAJOR.forEach((id) => { seen.add(id); pins.push({ key: id, p: PLACES[id], side: PLACES[id].allSide || PLACES[id].side, name: PLACES[id].name, dot: true, badge: lettersOn ? LETTERS[id] || null : null }); });
  }
  if (lettersOn && !phone && !sel) {
    Object.entries(LETTERS).forEach(([id, l]) => {
      if (seen.has(id)) return;
      pins.push({ key: id, p: PLACES[id], side: PLACES[id].allSide || PLACES[id].side, name: PLACES[id].name, dot: !l.region, badge: l, faint: true });
    });
  }

  return (
    <div className="jr-map">
      <svg viewBox={box.join(' ')} role="img" aria-label={sel ? `Map of Paul's ${sel.name.toLowerCase()}` : 'Map of the eastern Mediterranean with Paul’s four journeys'} preserveAspectRatio="xMidYMid meet">
        <rect x="0" y="0" width={MAP_W} height={MAP_H} className="jr-sea" />
        <g className="jr-land">
          {LAND.map((d, i) => <path key={i} d={d} />)}
          {ISLETS.map(([x, y, r]) => <circle key={x} cx={x} cy={y} r={r} />)}
        </g>
        {!phone && <g className="jr-rgn" aria-hidden="true" style={{ fontSize: 13 * k }}>{REGIONS.filter(([, x, y]) => x > box[0] + 8 * k && x < box[0] + box[2] - 90 * k && y > box[1] + 18 * k && y < box[1] + box[3] - 6 * k).map(([t, x, y]) => <text key={t} x={x} y={y}>{t}</text>)}</g>}
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {JOURNEYS.map((j) => {
            const on = !sel || sel.id === j.id;
            if (phone && sel && !on) return null;
            return (
              <path key={j.id} d={j.route} stroke={`var(--${j.id})`} strokeDasharray={j.dash ? j.dash.split(' ').map((n) => n * k).join(' ') : undefined}
                strokeOpacity={on ? 1 : 0.16} strokeWidth={sel && on ? 3.5 : 2.4} vectorEffect="non-scaling-stroke" />
            );
          })}
        </g>
      </svg>
      {pins.map((x) => (
        <div key={x.key} className={`jr-pin s-${x.side}${x.faint ? ' faint' : ''}`} style={pos(x.p)}>
          {x.n
            ? <span className={'jr-num' + (phone && x.ring ? ' ring' : '')} style={{ '--c': `var(--${sel.id})` }} aria-hidden="true">{x.n}</span>
            : x.dot && <span className="jr-dot" aria-hidden="true" />}
          {!phone && (
            <span className="jr-tag">
              <b>{x.name}</b>
              {x.badge && <LetterChip letter={x.badge} className="jr-badge" />}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Journeys() {
  const [params, setParams] = useSearchParams();
  const sel = journeyById[params.get('j')] || null;
  const phone = useMedia('(max-width: 760px)');
  const [lettersOn, setLettersOn] = useState(readLetters);
  const toggleLetters = () => {
    const v = !lettersOn;
    setLettersOn(v);
    try { localStorage.setItem(LETTERS_KEY, v ? '1' : '0'); } catch { /* storage blocked */ }
  };
  const pick = (id) => setParams(id ? { j: id } : {}, { replace: true });

  const tabs = [{ id: null, label: phone ? 'All' : 'All journeys', color: 'var(--muted)' }, ...JOURNEYS.map((j) => ({ id: j.id, label: phone ? j.short : j.name, color: `var(--${j.id})` }))];
  const letterRows = useMemo(() => [
    ['Rome', 'rome'], ['Corinth', 'corinth'], ['Galatia (Pisidian Antioch, Iconium, Lystra, Derbe)', 'galatia'],
    ['Ephesus', 'ephesus'], ['Philippi', 'philippi'], ['Colossae (Paul never visited)', 'colossae'], ['Thessalonica', 'thessalonica'],
  ], []);

  return (
    <main className={'wrap page jr-page' + (sel ? ' has-sel' : '')}>
      <div className="crumbs2">Bible Summaries › <Link to="/book/acts">Acts</Link> › <b>Paul’s Journeys</b></div>
      <h1 className="h1-sm">Paul’s Missionary Journeys</h1>
      <p className="jr-sub">Acts 13–28 · c. AD 46–60 · from Antioch to Rome</p>

      <div className="jr-tabs" role="tablist" aria-label="Journeys">
        {tabs.map((t) => {
          const on = (sel?.id || null) === t.id;
          return (
            <button key={t.id || 'all'} type="button" role="tab" aria-selected={on} className={'jr-tab' + (on ? ' on' : '')} onClick={() => pick(t.id)}>
              <i style={{ background: t.color }} aria-hidden="true" />{t.label}
            </button>
          );
        })}
      </div>

      <div className="jr-grid">
        <div className="jr-left">
        <div className="jr-mapcard">
          <JourneyMap sel={sel} phone={phone} lettersOn={lettersOn} />
          <div className="jr-legend">
            {!phone && JOURNEYS.map((j) => (
              <span key={j.id}><svg width="24" height="6" aria-hidden="true"><line x1="1" y1="3" x2="23" y2="3" stroke={`var(--${j.id})`} strokeWidth="3" strokeLinecap="round" strokeDasharray={j.id === 'j4' ? '1 5' : j.dash ? '6 4' : undefined} /></svg>{j.id === 'j4' ? 'Voyage to Rome' : j.short}</span>
            ))}
            {!phone && (
              <button type="button" className={'jr-ltoggle' + (lettersOn ? ' on' : '')} aria-pressed={lettersOn} onClick={toggleLetters}>
                <i aria-hidden="true" />Cities that received a letter
              </button>
            )}
            {phone && sel && <span><i className="jr-ringkey" aria-hidden="true" />Received a letter</span>}
            <span className="jr-approx">Coastlines: Natural Earth · routes approximate</span>
          </div>
        </div>
        <section className="jr-tl" aria-label="Timeline">
          <div className="jr-tl-top"><h2 className="jr-h2 sm">Timeline</h2><span className="jr-small">Dates are approximate</span></div>
          <div className="jr-tl-bar">
            <span className="jr-tl-held" style={{ left: `${((57 - TL_FROM) / (TL_TO - TL_FROM)) * 100}%`, width: `${(2 / (TL_TO - TL_FROM)) * 100}%` }} title="Held at Caesarea, c. 57–59" />
            {JOURNEYS.map((j) => (
              <button key={j.id} type="button" className={'jr-tl-seg' + (sel && sel.id !== j.id ? ' dim' : '')} aria-label={`${j.name}, ${j.years}`} onClick={() => pick(j.id)}
                style={{ left: `${((j.from - TL_FROM) / (TL_TO - TL_FROM)) * 100}%`, width: `${(Math.max(j.to - j.from, 1) / (TL_TO - TL_FROM)) * 100}%`, background: `var(--${j.id})` }} />
            ))}
            <span className="jr-tl-council" style={{ left: `${((49 - TL_FROM) / (TL_TO - TL_FROM)) * 100}%` }} />
          </div>
          <div className="jr-tl-axis">
            <span style={{ left: 0 }}>AD {TL_FROM}</span>
            <span className="mid hi" style={{ left: `${((49 - TL_FROM) / (TL_TO - TL_FROM)) * 100}%` }}>Jerusalem Council · c. 49</span>
            <span className="mid low" style={{ left: `${((58 - TL_FROM) / (TL_TO - TL_FROM)) * 100}%` }}>Held at Caesarea · c. 57–59</span>
            <span style={{ right: 0 }}>AD {TL_TO}</span>
          </div>
        </section>
        </div>

        <aside className="jr-side">
          {!sel ? (
            <>
              <h2 className="jr-h2">Four journeys</h2>
              <p className="jr-small">Choose a journey to see each stop, who travelled with Paul, and the letters tied to it.</p>
              <div className="jr-cards">
                {JOURNEYS.map((j) => (
                  <button key={j.id} type="button" className="jr-jcard" onClick={() => pick(j.id)}>
                    <b><i style={{ background: `var(--${j.id})` }} aria-hidden="true" />{j.name}</b>
                    <span>{j.years} · {j.ref} · {j.stops.length} stops</span>
                  </button>
                ))}
              </div>
              <h3 className="jr-k">Cities that received a letter</h3>
              <ul className="jr-lcities">
                {letterRows.map(([city, id]) => {
                  const l = Object.values(LETTERS).find((x) => x.church === id);
                  return <li key={id}><span>{city}</span><LetterChip letter={l} className="jr-lc-link" /></li>;
                })}
              </ul>
            </>
          ) : (
            <>
              <div className="jr-head" style={{ '--c': `var(--${sel.id})` }}>
                <span className="jr-years">{sel.years}</span>
                <h2 className="jr-h2">{sel.name}</h2>
                <Ref to={`/book/acts/${sel.ch}`} className="jr-ref">{sel.ref}</Ref>
              </div>
              <div className="jr-meta">
                <div><span className="jr-k">With Paul</span><div className="jr-chips">{sel.with.map((n) => <Person key={n} name={n} />)}</div></div>
                <div>
                  <span className="jr-k">Letters written</span>
                  <ul className="jr-written">
                    {sel.letters.map(([id, note]) => <li key={id}><Link to={`/book/${id}`}>{getBook(id)?.name || id}</Link> <span>· {note}</span></li>)}
                  </ul>
                </div>
              </div>
              <ol className="jr-stops" style={{ '--c': `var(--${sel.id})` }}>
                {sel.stops.map((s, i) => {
                  const l = letterFor(s.place);
                  return (
                    <li key={i}>
                      <span className={'jr-n' + (l ? ' ring' : '')} aria-hidden="true">{i + 1}</span>
                      <div>
                        <div className="jr-place">{s.name} <Ref to={`/book/acts/${s.ch}`} className="jr-sref">Acts {s.ref}</Ref></div>
                        <p>{s.text}</p>
                        {l && (l.multi
                          ? <span className="jr-lline">Letters to these churches: {l.multi.map((x) => <LetterChip key={x.church} letter={x} />)}</span>
                          : <span className="jr-lline">Letter to this church: <LetterChip letter={l} /></span>)}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </>
          )}
          <NoteEditor noteKey={noteKey('journey', sel ? sel.id : 'all')} title={sel ? `My notes on the ${sel.name.toLowerCase()}` : 'My notes on Paul’s journeys'} />
        </aside>
      </div>

    </main>
  );
}
