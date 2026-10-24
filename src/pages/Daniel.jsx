import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DANIEL, DANIEL_CHAPTERS } from '../data/danielProphecies.js';
import { CHARACTERS } from '../data/index.js';
import { PersonLink, PeekChip } from '../components/BookPeek.jsx';
import LevelToggle from '../components/LevelToggle.jsx';
import NoteEditor from '../components/NoteEditor.jsx';
import Ref from '../components/Ref.jsx';
import { noteKey } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';

// Bible Summaries › Daniel's Prophecies: each prophecy beside how it came to pass, chapter by chapter
// (Daniel 2, 4, 5, 7, 8, 9, 11, 12). Built from the approved "Daniel Prophecies Mockup".
//   Top: reading level and chapter buttons; the chapter intro; a sticky bar of the chapter's sections.
//   Rows (design C3 layout at C2 text sizes, 23 Oct): one line per verse, reference and year on the left, the explanation as the main text.
//     The verse is folded away under the line; tap to open it (or "Show all verses"). The open part also holds
//     the Moderate paragraph, the Detailed history and ancient source, and the people and places.
//   Debated or still-future passages get a gold row; opening it shows the main Christian readings.
//   Side panel (stacks below on phones): In this chapter, the chapter key, when Daniel was written, and notes.
// The chapter lives in the address (?ch=11).

// People who have their own page in the app; everyone else is a plain chip.
const PERSON_ID = Object.fromEntries(CHARACTERS.map((c) => [c.name, c.id]));
Object.assign(PERSON_ID, { Jesus: 'jesus', 'Cyrus the Great': 'cyrus' });
// Nations and powers that have a page (world-power periods and nations).
const NATION_LINK = {
  Babylon: ['empire', 'babylon'], Persia: ['empire', 'persia'], Greece: ['empire', 'hellenistic'], Rome: ['empire', 'rome'],
  Assyria: ['empire', 'assyria'], Media: ['nation', 'medes'],
};

function Chips({ x }) {
  const people = x.people || [], nations = x.nations || [];
  if (!people.length && !nations.length) return null;
  return (
    <div className="dp-chips">
      {people.map((p) => (PERSON_ID[p]
        ? <PersonLink key={p} personId={PERSON_ID[p]} className="dp-chip">{p}</PersonLink>
        : <span key={p} className="dp-chip">{p}</span>))}
      {nations.map((n) => {
        const l = NATION_LINK[n];
        return l
          ? <PeekChip key={n} kind={l[0]} id={l[1]} to={`/${l[0]}/${l[1]}`} className="dp-chip nat">{n}</PeekChip>
          : <span key={n} className="dp-chip nat">{n}</span>;
      })}
    </div>
  );
}

// One line per verse (design C3 layout, C2 text sizes): reference and year, then the explanation. Tapping the line opens the verse
// underneath, with the longer explanation (Moderate / Detailed), the ancient source and the people and places.
function Row({ ch, x, era, level, open, onToggle }) {
  const ref = x.ref || `${ch}:${x.v}`;
  const id = `dp-v-${ch}-${x.v}`;
  const views = x.debate ? (x.views || [['View 1 · Antiochus IV', x.a], ['View 2 · A future ruler', x.b]]) : null;
  return (
    <div className={'dp-row' + (open ? ' open' : '') + (x.debate ? ' debate' : '')} id={`v${x.v}`} style={{ '--c': `var(${era.c})` }}>
      <button type="button" className="dp-rowbtn" aria-expanded={open} aria-controls={id} onClick={onToggle}>
        <span className="dp-rref"><b>{ref}</b><small>{x.debate ? (x.pill || 'Debated') : x.year}</small></span>
        <span className="dp-rs">{x.s}</span>
        <svg className="dp-chev" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
      </button>
      {open && (
        <div className="dp-rbody" id={id}>
          <blockquote className="dp-q">
            <span>“{x.text}”</span>
            <Ref className="dp-qref" to={`/book/daniel/${ch}`}>Daniel {ref} · ESV</Ref>
          </blockquote>
          {views ? (
            <>
              <div className="dp-k">{x.head || 'How Christians read it'}</div>
              <div className="dp-views">{views.map(([l, t]) => <div key={l}><b>{l}</b>{t}</div>)}</div>
            </>
          ) : (
            <>
              {level !== 'simple' && x.m && <p className="dp-what">{x.m}{level === 'detailed' && x.d ? ' ' + x.d : ''}</p>}
              {level === 'detailed' && x.src && <div className="dp-src"><b>Ancient source:</b> {x.src}</div>}
            </>
          )}
          <Chips x={x} />
        </div>
      )}
    </div>
  );
}

export default function Daniel() {
  const level = useLevel();
  const [params, setParams] = useSearchParams();
  const ch = DANIEL[+params.get('ch')] ? +params.get('ch') : 11;
  const C = DANIEL[ch];
  const listRef = useRef(null);
  const [cur, setCur] = useState(C.eras[0].id);
  const [open, setOpen] = useState({});   // verses opened in this chapter
  const [all, setAll] = useState(false);  // "Show all verses"
  useEffect(() => { setOpen({}); setAll(false); }, [ch]);
  const toggle = (v) => {
    const now = all || !!open[v];
    setOpen(all ? { ...Object.fromEntries(C.v.map((y) => [y.v, true])), [v]: !now } : { ...open, [v]: !now });
    setAll(false);
  };
  const eraOf = (id) => C.eras.find((e) => e.id === id);

  // Highlight the section being read (sticky bar and side list).
  useEffect(() => {
    setCur(C.eras[0].id);
    const els = listRef.current?.querySelectorAll('[data-era]') || [];
    const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) setCur(en.target.dataset.era); }), { rootMargin: '-90px 0px -70% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ch]);
  const jump = (e, id) => { e.preventDefault(); document.getElementById('dp-e-' + id)?.scrollIntoView({ behavior: 'smooth' }); };
  const pick = (n) => { setParams({ ch: String(n) }); window.scrollTo({ top: 0 }); };

  // Cards with era headers; a gap note ("… about 150 years later") goes before the header it introduces.
  const rows = [];
  let last = null;
  C.v.forEach((x) => {
    const era = eraOf(x.era);
    const newEra = x.era !== last;
    if (newEra && x.gap) rows.push(<div key={'g' + x.v} className="dp-gap">… {x.gap}</div>);
    if (newEra) {
      rows.push(
        <div key={'e' + era.id} className="dp-era" id={'dp-e-' + era.id} data-era={era.id} style={{ '--c': `var(${era.c})` }}>
          <h2>{era.name}</h2><span>Daniel {era.range}</span>
        </div>,
      );
      last = x.era;
    } else if (x.gap) rows.push(<div key={'g' + x.v} className="dp-gap">… {x.gap}</div>);
    rows.push(<Row key={x.v} ch={ch} x={x} era={era} level={level} open={all || !!open[x.v]} onToggle={() => toggle(x.v)} />);
  });

  const toc = (cls) => C.eras.map((e) => (
    <a key={e.id} href={'#dp-e-' + e.id} onClick={(ev) => jump(ev, e.id)} className={cls + (cur === e.id ? ' on' : '')} style={{ '--c': `var(${e.c})` }}>
      {cls === 'dp-bar-a' ? <><i />{e.short || e.name}</> : <>{e.name}<small>{e.range}</small></>}
    </a>
  ));

  return (
    <main className="wrap page dp-page">
      <div className="dp-grid">
        <div className="dp-main" ref={listRef}>
          <div className="crumbs2">Bible Summaries › <Link to="/prophecies">Christ in Scripture</Link> › <b>Daniel {ch}</b></div>
          <h1 className="h1-sm">Daniel {ch}: verse and fulfillment</h1>
          <p className="tagline dp-tag">{C.tag}</p>
          <div className="dp-tools">
            <LevelToggle small />
            <nav className="dp-chaps" aria-label="Chapters">
              {DANIEL_CHAPTERS.map((n) => (
                <button key={n} type="button" className={n === ch ? 'on' : ''} aria-pressed={n === ch} onClick={() => pick(n)}>Daniel {n}</button>
              ))}
            </nav>
          </div>
          {/* Intro text is our own static content (data/danielProphecies.js), with <b> for emphasis. */}
          <div className="dp-intro" dangerouslySetInnerHTML={{ __html: level === 'simple' ? C.simple : C.full + ' Each line says how the verse came to pass; tap it for the verse.' + (level === 'detailed' ? ' The source for each date is listed under its verse.' : '') }} />
          <Link to="/daniel/background" className="db-cta"><b>New to Daniel? Start with the background</b><span>The empires and wars behind these visions, from Babylon to the Maccabees ›</span></Link>
          <nav className="dp-bar" aria-label="Sections of this chapter">{toc('dp-bar-a')}</nav>
          <div className="dp-listbar">
            <span>Tap a line to read its verse.</span>
            <button type="button" className={'dp-all' + (all ? ' on' : '')} aria-pressed={all} onClick={() => { setAll(!all); setOpen({}); }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z" /></svg>
              {all ? 'Hide all verses' : 'Show all verses'}
            </button>
          </div>
          {rows}
          <p className="dp-foot">Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved.</p>
        </div>
        <aside className="dp-side">
          <div className="dp-box"><h3>In this chapter</h3><div className="dp-toc">{toc('dp-toc-a')}</div></div>
          <div className="dp-box dp-key" dangerouslySetInnerHTML={{ __html: C.key }} />
          <div className="dp-box dd-entry">
            <div className="dp-k">When was Daniel written?</div>
            <div className="dd-entry-d">
              <div className="early"><b>c. 530 BC</b><span>Traditional</span></div>
              <div className="late"><b>c. 165 BC</b><span>Most modern scholars</span></div>
            </div>
            <p className="dp-small">The date changes how these prophecies read. See the evidence on both sides.</p>
            <Link to="/daniel/written" className="dd-entry-go">Read the arguments</Link>
          </div>
          <NoteEditor noteKey={noteKey('daniel', String(ch))} title={`My notes on Daniel ${ch}`} />
        </aside>
      </div>
    </main>
  );
}
