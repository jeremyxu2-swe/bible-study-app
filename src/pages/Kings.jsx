import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {
  KINGS, VERDICTS, KINGDOM_NAME, KING_EVENTS, KING_ERAS, kingById, kingName, reignSpan, reignYears, kingStats,
} from '../data/kings.js';
import { AUDIENCES, prophetById, prophetByName, prophetYears, kingsOfProphet } from '../data/prophets.js';
import { usePeek } from '../components/BookPeek.jsx';
import LevelToggle from '../components/LevelToggle.jsx';
import NoteEditor from '../components/NoteEditor.jsx';
import { noteKey } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';
import { Passage, Sheet } from './Denominations.jsx';
import Ref from '../components/Ref.jsx';
import CHARACTER_LEVELS from '../data/characterLevels/index.js';
import { charIdOfKing } from '../data/kingProfiles/index.js';

// Bible Summaries › Kings & Prophets.
//   Computer (≥1100px): the ladder — Israel's kings on the left, the prophets of each reign in the middle,
//   Judah's kings on the right, in reign order — with a sticky detail panel on the right.
//   Phone and tablet: the same ladder, narrower, under a sticky bar naming the current era; tapping a king
//   opens a detail sheet. Press and hold any king or prophet for a quick summary (the shared peek card).
// The selection lives in the address: ?k=josiah (a king) or ?p=isaiah (a prophet: his kings light up).
const wideQuery = '(min-width: 1100px)';
const subWide = (fn) => { const m = window.matchMedia(wideQuery); m.addEventListener('change', fn); return () => m.removeEventListener('change', fn); };
const useWide = () => useSyncExternalStore(subWide, () => window.matchMedia(wideQuery).matches);

// Prophets marked "✦ … begins prophesying" on the phone ladder.
const MARKERS = ['elijah', 'elisha', 'jonah', 'amos', 'hosea', 'isaiah', 'micah', 'zephaniah', 'jeremiah', 'habakkuk'];

// One ordered list for the ladder: era headings, kings, events and prophet markers, newest last.
const ITEMS = (() => {
  const out = [];
  KINGS.forEach((k) => out.push({ t: 'k', y: k.start + (k.kingdom === 'i' ? 0.01 : 0) + (k.kingdom === 'u' ? 0.02 : 0), k }));
  KING_EVENTS.filter((e) => e.year !== 931).forEach((e) => out.push({ t: 'e', y: e.year - 0.5, e }));
  KING_ERAS.forEach((e) => out.push({ t: 'h', y: e.from + 0.6, e }));
  MARKERS.forEach((id) => { const p = prophetById[id]; out.push({ t: 'p', y: p.start + 0.3, p }); });
  return out.sort((a, b) => b.y - a.y);
})();

const firstSentence = (s) => (s.match(/^.*?[.!?](?=\s|$)/) || [s])[0];

function KingCard({ k, sel, dim, onPick, wide }) {
  const peek = usePeek({ kingId: k.id, onOpen: () => onPick({ k: k.id }) });
  const side = k.kingdom === 'i' ? 'left' : k.kingdom === 'j' ? 'right' : 'mid';
  const len = k.start - k.end;
  return (
    <button type="button" className={`kg-card holdable v-${k.verdict} ${side}${wide ? ' w' : ''}${sel ? ' sel' : ''}${dim ? ' dim' : ''}`}
      onClick={() => onPick({ k: k.id })} aria-pressed={sel} {...peek}>
      <span className="kg-txt"><b>{kingName(k)}</b><small>{reignSpan(k)} BC · {reignYears(k)}</small>{!wide && <span className="kg-word">{VERDICTS[k.verdict].label}</span>}</span>
      {wide && <span className="kg-pill">{VERDICTS[k.verdict].label}</span>}
      {wide && <i className="kg-len" style={{ width: `${Math.min(100, 5 + len * 1.7)}%` }} />}
    </button>
  );
}

function ProphetChip({ name, onPick, on }) {
  const p = prophetByName(name);
  const peek = usePeek({ prophetId: p?.id, onOpen: () => onPick({ p: p.id }) });
  if (!p) return <span className="kg-pchip plain">{name}</span>;
  return (
    <button type="button" className={`kg-pchip holdable aud-${p.audience}${on ? ' on' : ''}`} onClick={() => onPick({ p: p.id })} {...peek}>
      <i />{name.replace(' son of Hanani', ' (Hanani)').replace(' son of Jehoiada', '')}
    </button>
  );
}

function Marker({ p, onPick }) {
  const peek = usePeek({ prophetId: p.id, onOpen: () => onPick({ p: p.id }) });
  return (
    <div className="kg-marker">
      <button type="button" className={`holdable aud-${p.audience}`} onClick={() => onPick({ p: p.id })} {...peek}>✦ {p.name} begins prophesying</button>
    </div>
  );
}

function Stats({ compact, onJump }) {
  const rows = [['u', 'United kingdom', '3 kings · c. 1050–931 BC'], ['i', 'Israel (north)', '19 kings · 931–722 BC'], ['j', 'Judah (south)', '20 rulers · 931–586 BC']];
  return (
    <div className={'kg-stats' + (compact ? ' compact' : '')}>
      {rows.map(([kd, name, sub]) => {
        const { counts } = kingStats(kd);
        const vs = ['good', 'mixed', 'bad', 'none'].filter((v) => counts[v]);
        return (
          <button key={kd} type="button" className="kg-stat" onClick={() => onJump(kd)} aria-label={`Jump to ${name}`}>
            <div><b>{name}</b> <small>{sub}</small></div>
            <div className="kg-bar">{vs.map((v) => <span key={v} className={'v-' + v} style={{ flex: counts[v] }} />)}</div>
            <small className="kg-counts">{vs.map((v, i) => <span key={v} className={'v-' + v}>{i > 0 && ' · '}{counts[v]} {VERDICTS[v].label.toLowerCase()}</span>)}</small>
          </button>
        );
      })}
    </div>
  );
}

// The king's story at the app-wide reading level (profiles in characterLevels / kingProfiles):
//   Simple — two plain sentences.  Moderate — the fuller story.  Detailed — the story, key moments and why he matters.
const paras = (t) => (t || '').split(/\n\n+/).map((p, i) => <p key={i}>{p}</p>);
function KingLevels({ k, level }) {
  const L = CHARACTER_LEVELS[charIdOfKing(k.id)];
  if (!L) return <p>{level === 'simple' ? firstSentence(k.note) : k.note}</p>;
  if (level === 'simple') return <p className="kg-lede">{L.simple}</p>;
  const det = level === 'detailed' ? L.detailed : null;
  return (
    <>
      {paras(L.moderate)}
      {det?.moments?.length > 0 && (
        <>
          <h4>Key moments</h4>
          <ol className="kg-moments">
            {det.moments.map((m, i) => (
              <li key={i}>
                <span className="kg-mdate">{m.date}</span>
                <b>{m.title}</b>
                <span>{m.text}</span>
                {m.ref && <Ref to={`/book/${m.ref.book}/${m.ref.ch}`} className="kg-mref">{m.ref.label} ›</Ref>}
              </li>
            ))}
          </ol>
        </>
      )}
      {det?.significance && (
        <div className="kg-why">
          <h4>Why he matters</h4>
          {paras(det.significance)}
        </div>
      )}
      {det?.world && (
        <>
          <h4>The world of his day</h4>
          {paras(det.world)}
        </>
      )}
    </>
  );
}

function KingDetail({ k, onPick }) {
  const level = useLevel();
  const pros = k.prophets.map((n) => ({ n, p: prophetByName(n) }));
  return (
    <div className={'kg-detail v-' + k.verdict}>
      <div className="kg-dtop"><span className="kg-kind">{KINGDOM_NAME[k.kingdom]}</span><LevelToggle small /></div>
      <h2>{k.name}</h2>
      <div className="kg-meta">Reigned c. {reignSpan(k)} BC · {k.start === k.end ? 'under a year' : `${k.start - k.end} years`}</div>
      <div className="kg-verdict"><span className="kg-pill">{VERDICTS[k.verdict].label}</span><div><q>{k.quote.replace(/^“|”$/g, '')}</q><em>{k.ref}</em></div></div>
      <KingLevels k={k} level={level} />
      {level !== 'simple' && pros.length > 0 && (
        <>
          <h4>Prophets of his day</h4>
          {level === 'detailed' ? (
            <div className="kg-plist">
              {pros.map(({ n, p }) => (
                <div key={n} className={p ? 'aud-' + p.audience : ''}>
                  <ProphetChip name={n} onPick={onPick} />
                  {p && <span>{p.message}</span>}
                </div>
              ))}
            </div>
          ) : <div className="kg-chips">{pros.map(({ n }) => <ProphetChip key={n} name={n} onPick={onPick} />)}</div>}
        </>
      )}
      <h4>Read his story</h4>
      <div className="kg-chips">{k.read.split('; ').map((r) => <Passage key={r} text={r} />)}</div>
      <Link to={`/people/${charIdOfKing(k.id)}`} className="kg-profile">Full profile of {kingName(k)} ›</Link>
      <div className="kg-notes"><NoteEditor noteKey={noteKey('king', k.id)} title={`My notes on ${kingName(k)}`} /></div>
    </div>
  );
}

function ProphetDetail({ p, onPick }) {
  const her = p.id === 'huldah';
  const kings = kingsOfProphet(p.id).map((id) => kingById[id]);
  return (
    <div className={'kg-detail aud-' + p.audience}>
      <div className="kg-dtop"><span className="kg-aud">{AUDIENCES[p.audience].label}</span><LevelToggle small /></div>
      <h2>{p.name}</h2>
      <div className="kg-meta">Prophesied {prophetYears(p)}{p.unsure ? ' · dates debated' : ''} · {p.book ? `a book of the Bible bears ${her ? 'her' : 'his'} name` : `no book of ${her ? 'her' : 'his'} own`}</div>
      <p>{p.message}</p>
      <h4>Kings {her ? 'she' : 'he'} spoke to</h4>
      {kings.length ? (
        <div className="kg-klist">{kings.map((k) => (
          <button key={k.id} type="button" className={'v-' + k.verdict} onClick={() => onPick({ k: k.id })}>
            <i /><b>{kingName(k)}</b><small>{k.kingdom === 'i' ? 'Israel' : k.kingdom === 'j' ? 'Judah' : 'United'} · {reignSpan(k)}</small><span>{VERDICTS[k.verdict].label}</span>
          </button>
        ))}</div>
      ) : <p className="muted">After the exile there were no kings; {her ? 'she' : 'he'} spoke to the governor and the high priest.</p>}
      <h4>Read</h4>
      <div className="kg-chips">{p.ref.split('; ').map((r) => <Passage key={r} text={r} />)}</div>
      <p className="kg-hint">The kings {her ? 'she' : 'he'} spoke to are highlighted on the ladder.</p>
      {CHARACTER_LEVELS[p.id] && <Link to={`/people/${p.id}`} className="kg-profile">Full profile of {p.name} ›</Link>}
    </div>
  );
}

function EraBar({ listRef }) {
  const bar = useRef(null);
  const [era, setEra] = useState(KING_ERAS[0]);
  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const edge = (bar.current?.getBoundingClientRect().bottom || 0) + 8;
      let cur = KING_ERAS[0];
      listRef.current?.querySelectorAll('[data-era]').forEach((el) => { if (el.getBoundingClientRect().top < edge) cur = KING_ERAS.find((e) => e.id === el.dataset.era); });
      setEra((p) => (p === cur ? p : cur));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check); };
    window.addEventListener('scroll', onScroll, { passive: true });
    check();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, [listRef]);
  return (
    <div className="kg-bar-sticky" ref={bar}>
      <div className="kg-now"><b>{era.label}</b><span>{era.from}–{era.to} BC</span></div>
      <div className="kg-lanes"><span>Israel · north</span><span /><span>Judah · south</span></div>
    </div>
  );
}

export default function Kings() {
  const wide = useWide();
  const [params, setParams] = useSearchParams();
  const loc = useLocation();
  const listRef = useRef(null);
  const selK = kingById[params.get('k')] ? params.get('k') : null;
  const selP = !selK && prophetById[params.get('p')] ? params.get('p') : null;
  const lit = selP ? new Set(kingsOfProphet(selP)) : null;
  const pick = (next) => setParams(next, { replace: false });
  const close = () => setParams({}, { replace: false });
  const shown = selK || selP || (wide ? 'josiah' : null);
  // Tapping a kingdom's summary card: scroll to where its kings begin and briefly light up that kingdom's cards.
  const [flash, setFlash] = useState(null);
  const flashTimer = useRef(0);
  const jumpTo = (kd) => {
    const el = listRef.current?.querySelector(`[data-era="${kd === 'u' ? 'united' : 'early'}"]`);
    if (!el) return;
    const bar = document.querySelector('.kg-bar-sticky');
    const off = (bar ? bar.getBoundingClientRect().height : 0) + 4;
    window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top - off, behavior: 'smooth' });
    setFlash(kd);
    clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setFlash(null), 1800);
  };

  // Opening from a peek's "Add note" (state.focusNotes) or a link: scroll the chosen king into view.
  useEffect(() => {
    const id = selK || (selP && kingsOfProphet(selP)[0]);
    if (!id || !listRef.current) return;
    const el = listRef.current.querySelector(`[data-k="${id}"]`);
    if (el && wide) { const r = el.getBoundingClientRect(); if (r.top < 80 || r.bottom > window.innerHeight - 40) window.scrollTo({ top: window.scrollY + r.top - 200, behavior: 'smooth' }); }
  }, [selK, selP, wide]);
  useEffect(() => {
    if (loc.state?.focusNotes) setTimeout(() => document.querySelector('.kg-notes textarea, .kg-notes [contenteditable]')?.focus(), 300);
  }, [loc.state]);

  const ladder = (
    <div className={'kg-ladder' + (wide ? ' wide' : '') + (flash ? ' flash-' + flash : '')} ref={listRef}>
      {wide && <div className="kg-head"><span>Israel · north</span><span>Prophets</span><span>Judah · south</span></div>}
      {ITEMS.map((it, i) => {
        if (it.t === 'h') return <div key={'h' + it.e.id} className="kg-era" data-era={it.e.id}><b>{it.e.label}</b><small>{it.e.from}–{it.e.to} BC · {it.e.sub}</small></div>;
        if (it.t === 'e') return <div key={'e' + it.e.year} className="kg-ev"><span>{it.e.year} BC · {it.e.label}</span></div>;
        if (it.t === 'p') return wide ? null : <Marker key={'p' + it.p.id} p={it.p} onPick={pick} />;
        const k = it.k;
        const card = <KingCard k={k} sel={shown === k.id && !!selK || (wide && !selK && !selP && k.id === 'josiah')} dim={lit && !lit.has(k.id)} onPick={pick} wide={wide} />;
        if (k.kingdom === 'u') {
          return (
            <div key={k.id} className="kg-row united" data-k={k.id}>
              {wide ? <><div />{card}<div className="kg-mid right">{k.prophets.slice(0, 3).map((n) => <ProphetChip key={n} name={n} onPick={pick} on={selP && prophetByName(n)?.id === selP} />)}</div></> : <div className="kg-uwrap">{card}</div>}
            </div>
          );
        }
        const left = k.kingdom === 'i';
        const mid = wide
          ? <div className="kg-mid">{k.prophets.slice(0, 3).map((n) => <ProphetChip key={n} name={n} onPick={pick} on={selP && prophetByName(n)?.id === selP} />)}</div>
          : <div className="kg-dot"><span className={'v-' + k.verdict} /></div>;
        return <div key={k.id + i} className="kg-row" data-k={k.id}>{left ? card : <div />}{mid}{left ? <div /> : card}</div>;
      })}
      <div className="kg-ev"><span>586 BC · Judah exiled to Babylon</span></div>
    </div>
  );

  const detail = selP ? <ProphetDetail p={prophetById[selP]} onPick={pick} /> : shown ? <KingDetail k={kingById[shown]} onPick={pick} /> : null;

  return (
    <main className="wrap page stack-lg kg-page">
      <div>
        <div className="crumbs2">Bible Summaries › <b>Kings &amp; Prophets</b></div>
        <h1 className="h1-sm">The Kings of Israel &amp; Judah</h1>
        <p className="tagline" style={{ marginTop: 6 }}>Every reign in order, north and south side by side, with the prophets between them.</p>
      </div>
      <Stats compact={!wide} onJump={jumpTo} />
      <p className="kg-tip">{wide ? 'Click a king or prophet for details. Hover or press and hold for a quick summary.' : 'Tap a king for details. Press and hold any king or prophet for a quick summary.'}</p>
      {wide ? (
        <div className="kg-grid">
          {ladder}
          <aside className="kg-panel">{detail}</aside>
        </div>
      ) : (
        <>
          <EraBar listRef={listRef} />
          {ladder}
          {(selK || selP) && <Sheet onClose={close} label={selK ? kingById[selK].name : prophetById[selP].name}>{detail}</Sheet>}
        </>
      )}
      <nav className="ch-more" aria-label="More">
        <Link to="/prophecies" className="pill">Christ in Scripture ›</Link>
        <Link to="/people" className="pill">People ›</Link>
      </nav>
    </main>
  );
}
