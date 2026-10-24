import { useEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { EMPIRE_DETAILS, EMPIRE_ALIASES, empireById, getBook, getCharacter } from '../data/index.js';
import EMPIRE_LEVELS from '../data/empireLevels/index.js';
import NoteEditor from '../components/NoteEditor.jsx';
import LevelToggle, { KeyVerse } from '../components/LevelToggle.jsx';
import { noteKey, useNotes } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';
import { PersonLink, PeekLink } from '../components/BookPeek.jsx';
import Ref from '../components/Ref.jsx';
import { EMPIRE_COLORS } from '../data/timeline.js';

// Text with blank-line paragraph breaks.
function Paras({ text, className = 'ink-2' }) {
  return (text || '').split(/\n\n+/).map((p, i) => <p key={i} className={className} style={{ margin: 0, maxWidth: 720 }}>{p}</p>);
}

function RefLink({ r }) {
  if (!r) return null;
  return r.book && getBook(r.book)
    ? <Ref to={`/book/${r.book}/${r.ch}`} arrow style={{ textDecoration: 'none', fontWeight: 600, fontSize: 'calc(14px * var(--ts))' }}>{r.label}</Ref>
    : <span className="muted" style={{ fontSize: 'calc(14px * var(--ts))' }}>{r.label}</span>;
}

// A section that can be opened and closed (Detailed level).
function Fold({ title, count, children, open = false }) {
  return (
    <details className="emp-fold" open={open}>
      <summary><span className="h2" style={{ fontSize: 'calc(22px * var(--ts))' }}>{title}</span>{count != null && <span className="muted emp-fold-n">{count}</span>}</summary>
      <div className="emp-fold-body">{children}</div>
    </details>
  );
}

// One period of the geopolitical timeline (route /empire/:id). Old ids from the earlier six-empire
// pages ("egypt", "greece") redirect to their new period, and a note written under the old id
// keeps showing on the new page until a note is written under the new one.
// Periods are numbered in Roman numerals (I–VII) in the heading. The switcher (design D, 23 Oct) shows a colored dot,
// the name, and the Bible era on a second line (`era` in empires.js).
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
// "Read more about this period" (side card): the Daniel background page and the Apocrypha books that tell this period's history.
const READ_MORE = {
  babylon: [['/daniel/background', 'The wars behind Daniel', 'Babylon’s fall to Persia, the night of Belshazzar’s feast']],
  persia: [['/daniel/background', 'The wars behind Daniel', 'Persia’s wars with Greece and the rise of Alexander, as Daniel 8 and 11 describe them']],
  hellenistic: [
    ['/daniel/background#bg-syrian-wars', 'The wars behind Daniel', 'Alexander, the Ptolemies and Seleucids (the kings of the south and north), and Antiochus IV, step by step'],
    ['/book/1maccabees', '1 Maccabees (Apocrypha)', 'The Maccabean revolt, the first Hanukkah and Judea’s independence, chapter by chapter'],
  ],
};

export default function Empire() {
  const { id } = useParams();
  const level = useLevel();
  const notes = useNotes();
  const bandRef = useRef(null);
  // Keep the current period visible in the band (it scrolls sideways on phones).
  // Measured with getBoundingClientRect (offsetLeft is relative to the page, not the band), and again once
  // the fonts have loaded, since the chips change width when they do.
  useEffect(() => {
    const center = () => {
      const band = bandRef.current, el = band?.querySelector('.empire.on');
      if (!band || !el) return;
      const b = band.getBoundingClientRect(), r = el.getBoundingClientRect();
      band.scrollLeft += (r.left - b.left) - (b.width - r.width) / 2;
    };
    center();
    document.fonts?.ready.then(center);
  }, [id]);
  if (EMPIRE_ALIASES[id]) return <Navigate to={`/empire/${EMPIRE_ALIASES[id]}`} replace />;
  const e = empireById[id];
  if (!e) return <main className="wrap page"><h1 className="h1-sm">Period not found</h1><Link to="/">Back to the timeline</Link></main>;
  const legacyId = Object.keys(EMPIRE_ALIASES).find((old) => EMPIRE_ALIASES[old] === e.id);
  const ownKey = noteKey('empire', e.id);
  const legacyKey = legacyId && noteKey('empire', legacyId);
  const notesKey = !notes[ownKey] && legacyKey && notes[legacyKey] ? legacyKey : ownKey;
  const idx = EMPIRE_DETAILS.findIndex((x) => x.id === e.id);
  const prev = EMPIRE_DETAILS[idx - 1];
  const next = EMPIRE_DETAILS[idx + 1];
  const books = (e.books || []).map(getBook).filter(Boolean);
  const people = (e.people || []).map(getCharacter).filter(Boolean);

  // Simple = the base entry; Moderate adds to it; Detailed adds more again.
  const L = EMPIRE_LEVELS[e.id];
  const mod = level !== 'simple' ? L?.moderate : null;
  const det = level === 'detailed' ? L?.detailed : null;
  const facts = [['When', e.dates], ['Where', e.region], ['Centers of power', e.capital], ...(mod?.facts || [])];
  const moments = det?.moments || mod?.moments || e.moments || [];
  const rulers = mod?.rulers || e.rulers || [];
  const later = mod?.later || e.later;

  return (
    <>
      <section className="band" aria-label="Geopolitical timeline">
        <div className="wrap">
          <div className="empires church-band period-band" ref={bandRef}>
            {EMPIRE_DETAILS.map((m, i) => (
              <Link key={m.id} to={`/empire/${m.id}`} className={'empire' + (m.id === e.id ? ' on' : '')} title={m.name} aria-current={m.id === e.id ? 'page' : undefined}
                style={{ '--k': EMPIRE_COLORS[m.id] }}>
                <span className="pb-name"><i className="pb-dot" aria-hidden="true" />{m.chip || m.short || m.name}</span>
                {m.era && <span className="pb-era">{m.era}</span>}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <main className="wrap page">
        <div className="cols">
          <div className="col-main">
            <div className="crumbs"><Link to="/">Timeline</Link> / <span className="cur">Geopolitical timeline</span></div>
            <div className="stack" style={{ gap: 8 }}>
              <div className="eyebrow gold">Period {ROMAN[idx]} of {ROMAN[EMPIRE_DETAILS.length - 1]} · {e.dates}</div>
              <div className="title-row">
                <h1 className="h1">{e.name}</h1>
                <div className="level-box">
                  <LevelToggle />
                  <span className="muted" style={{ fontSize: 'calc(11px * var(--ts))' }}>Reading level</span>
                </div>
              </div>
              <p className="tagline">{e.tagline}</p>
            </div>
            <dl className="factgrid emp-facts">
              {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>

            <section className="stack">
              <h2 className="h2" style={{ fontSize: 'calc(26px * var(--ts))' }}>The powers of the region</h2>
              <Paras text={mod?.who || e.who} />
            </section>

            <section className="stack">
              <h2 className="h2" style={{ fontSize: 'calc(26px * var(--ts))' }}>Israel and Judah in this period</h2>
              <Paras text={mod?.relationship || e.relationship} />
            </section>

            <div className="card why-card">
              <div className="eyebrow gold">Why it matters when you read the Bible</div>
              <Paras text={mod?.why || e.why} className="" />
            </div>

            {moments.length > 0 && (
              <section className="stack" style={{ gap: 14 }}>
                <h2 className="h2" style={{ fontSize: 'calc(26px * var(--ts))' }}>Key events</h2>
                <ol className={'ctl' + (det ? ' ctl-long' : '')}>
                  {moments.map((m, i) => (
                    <li key={i}>
                      <div className="row" style={{ gap: 10, alignItems: 'baseline' }}>
                        <span className="moment-date">{m.date}</span>
                        {m.title && <span className="moment-title">{m.title}</span>}
                        <RefLink r={m.ref} />
                      </div>
                      <div className="ink-2">{m.text}</div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {det && rulers.length > 0 && (
              <Fold title="Rulers you'll meet" count={det.rulers.length}>
                <div className="stack" style={{ gap: 18 }}>
                  {det.rulers.map((r) => {
                    const p = r.person && getCharacter(r.person);
                    return (
                      <div key={r.name} className="stack" style={{ gap: 4 }}>
                        <div className="row" style={{ gap: 10, alignItems: 'baseline' }}>
                          {p ? <PersonLink personId={p.id} className="ruler-name">{r.name} ›</PersonLink> : <span className="ruler-name">{r.name}</span>}
                          <span className="moment-date">{r.dates}</span>
                        </div>
                        <p className="ink-2" style={{ margin: 0 }}>{r.bio}</p>
                        {r.where && <div className="muted" style={{ fontSize: 'calc(13px * var(--ts))' }}>Where they appear: {r.where}</div>}
                      </div>
                    );
                  })}
                </div>
              </Fold>
            )}

            {mod?.prophecy && (det
              ? <Fold title="In prophecy"><Paras text={mod.prophecy} /></Fold>
              : (
                <section className="stack">
                  <h2 className="h2" style={{ fontSize: 'calc(26px * var(--ts))' }}>In prophecy</h2>
                  <Paras text={mod.prophecy} />
                </section>
              ))}

            {mod?.archaeology?.length > 0 && (() => {
              const list = (
                <ul className="emp-list">
                  {mod.archaeology.map((a) => <li key={a.title}><b>{a.title}.</b> <span className="ink-2">{a.text}</span></li>)}
                </ul>
              );
              return det
                ? <Fold title="What archaeology shows" count={mod.archaeology.length}>{list}</Fold>
                : <section className="stack"><h2 className="h2" style={{ fontSize: 'calc(26px * var(--ts))' }}>What archaeology shows</h2>{list}</section>;
            })()}

            {det?.map && <Fold title="The land and its size"><Paras text={det.map} /></Fold>}
            {det?.faith && <Fold title="Faith and religion"><Paras text={det.faith} /></Fold>}
            {det?.life && <Fold title="Everyday life for God's people"><Paras text={det.life} /></Fold>}
            {det?.questions?.length > 0 && (
              <Fold title="Common questions" count={det.questions.length}>
                <div className="stack" style={{ gap: 14 }}>
                  {det.questions.map((q) => (
                    <div key={q.q} className="stack" style={{ gap: 4 }}>
                      <div style={{ fontWeight: 600 }}>{q.q}</div>
                      <p className="ink-2" style={{ margin: 0 }}>{q.a}</p>
                    </div>
                  ))}
                </div>
              </Fold>
            )}
            {det?.keyVerses?.length > 0 && (
              <section className="stack">
                <h2 className="h2" style={{ fontSize: 'calc(26px * var(--ts))' }}>Key verses</h2>
                {det.keyVerses.map((v) => <KeyVerse key={v.ref} verse={v} />)}
              </section>
            )}
            {det?.reading?.length > 0 && (
              <section className="stack">
                <h2 className="h2" style={{ fontSize: 'calc(26px * var(--ts))' }}>Read the story in order</h2>
                <ol className="emp-reading">
                  {det.reading.map((r) => (
                    <li key={r.label}>
                      <Ref to={`/book/${r.book}/${r.ch}`}>{r.label}</Ref>
                      {r.note && <span className="muted"> · {r.note}</span>}
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {later && (
              <section className="stack">
                <h2 className="h2" style={{ fontSize: 'calc(26px * var(--ts))' }}>Afterward</h2>
                <Paras text={later} />
              </section>
            )}

            <div className="chnav">
              {prev ? <Link className="btn" to={`/empire/${prev.id}`}>‹ {prev.short || prev.name}</Link> : <span />}
              {next ? <Link className="btn" to={`/empire/${next.id}`}>{next.short || next.name} ›</Link> : <span />}
            </div>
          </div>

          <aside className="col-side">
            {!det && rulers.length > 0 && (
              <div className="card">
                <div className="serif" style={{ fontSize: 'calc(20px * var(--ts))', fontWeight: 600 }}>Rulers you'll meet</div>
                <div className="stack" style={{ gap: 10, fontSize: 'calc(14px * var(--ts))' }}>
                  {rulers.map((r) => {
                    const p = r.person && getCharacter(r.person);
                    return (
                      <div key={r.name}>
                        {p ? <PersonLink personId={p.id} style={{ textDecoration: 'none', fontWeight: 600 }}>{r.name} ›</PersonLink> : <span style={{ fontWeight: 600 }}>{r.name}</span>}
                        {r.dates && <span className="muted"> · {r.dates}</span>}
                        <div className="ink-2">{r.note}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {books.length > 0 && (
              <div className="card">
                <div className="serif" style={{ fontSize: 'calc(20px * var(--ts))', fontWeight: 600 }}>Bible books set in this period</div>
                <div className="row">
                  {books.map((b) => <PeekLink key={b.id} bookId={b.id} className="chip gold" to={`/book/${b.id}`}>{b.name}</PeekLink>)}
                </div>
              </div>
            )}
            {READ_MORE[e.id] && (
              <div className="card">
                <div className="serif" style={{ fontSize: 'calc(20px * var(--ts))', fontWeight: 600 }}>Read more about this period</div>
                <div className="stack" style={{ gap: 8 }}>
                  {READ_MORE[e.id].map(([to, label, note]) => (
                    <Link key={to} to={to} className="em-more"><b>{label} ›</b><span>{note}</span></Link>
                  ))}
                </div>
              </div>
            )}
            {people.length > 0 && (
              <div className="card">
                <div className="serif" style={{ fontSize: 'calc(20px * var(--ts))', fontWeight: 600 }}>Related people</div>
                <div className="row">
                  {people.map((p) => <PersonLink key={p.id} personId={p.id} className="chip">{p.name}</PersonLink>)}
                </div>
              </div>
            )}
            <NoteEditor noteKey={notesKey} title={`My notes on the ${e.short || e.name} period`} />
          </aside>
        </div>
      </main>
    </>
  );
}
