import { useEffect } from 'react';
import { PersonLink, PeekLink } from '../components/BookPeek.jsx';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getCharacter, getBook } from '../data/index.js';
import CHARACTER_LEVELS from '../data/characterLevels/index.js';
import NoteEditor from '../components/NoteEditor.jsx';
import LevelToggle, { KeyVerse } from '../components/LevelToggle.jsx';
import { noteKey } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';
import Ref from '../components/Ref.jsx';
import { kingById, KINGDOM_NAME, VERDICTS, reignSpan } from '../data/kings.js';
import { kingIdOfChar } from '../data/kingProfiles/index.js';

// A Bible character, at three reading levels (the app-wide Simple / Moderate / Detailed toggle):
//   Simple   — one or two plain sentences and the key facts (occupation, people, era).
//   Moderate — a paragraph, a full facts grid (adds occupation, people, languages) and their story step by step.
//   Detailed — background, the world they lived in, key moments, significance, common questions,
//              key verses and a reading plan, like the Empire and Nation pages.
// Characters without level text yet fall back to the base entry (characters.js) at every level.

// Text with blank-line paragraph breaks.
function Paras({ text, className = 'ink-2' }) {
  return (text || '').split(/\n\n+/).map((p, i) => <p key={i} className={className + ' pp-bio'} style={{ margin: 0, maxWidth: 720 }}>{p}</p>);
}

function RefLink({ r }) {
  if (!r) return null;
  return r.book && getBook(r.book)
    ? <Ref to={`/book/${r.book}/${r.ch}`} arrow style={{ textDecoration: 'none', fontWeight: 600, fontSize: 'calc(14px * var(--ts))' }}>{r.label}</Ref>
    : <span className="muted" style={{ fontSize: 'calc(14px * var(--ts))' }}>{r.label}</span>;
}

// A section that opens and closes (Detailed level), the same as the Empire pages.
function Fold({ title, count, children, open = false }) {
  return (
    <details className="emp-fold" open={open}>
      <summary><span className="h2 pp-h2" style={{ fontSize: 'calc(22px * var(--ts))' }}>{title}</span>{count != null && <span className="muted emp-fold-n">{count}</span>}</summary>
      <div className="emp-fold-body">{children}</div>
    </details>
  );
}

const H2 = ({ children }) => <h2 className="h2 pp-h2" style={{ fontSize: 'calc(26px * var(--ts))' }}>{children}</h2>;

export default function Person() {
  const { id } = useParams();
  const level = useLevel();
  const c = getCharacter(id);
  const location = useLocation();
  // Arriving from a person preview's "Add note": scroll to the notes box.
  useEffect(() => {
    if (location.state?.focusNotes) setTimeout(() => document.getElementById('person-notes')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
  }, [location.key]);
  if (!c) return <main className="wrap page"><h1 className="h1-sm">Person not found</h1><Link to="/people">All characters</Link></main>;

  const L = CHARACTER_LEVELS[c.id];
  const F = L?.facts || {};
  const simple = level === 'simple';
  const det = level === 'detailed' ? L?.detailed : null;
  // Facts: Simple shows the essentials; Moderate and Detailed show the full grid.
  const allFacts = [
    ['Occupation', F.occupation],
    ['People', F.people || c.tribe],
    ['Language(s)', F.languages],
    ['Era', F.era || c.when],
    ['Hometown', F.hometown || c.hometown],
    ['Family', c.family],
  ];
  const facts = (L && simple
    ? allFacts.filter(([k]) => ['Occupation', 'People', 'Era'].includes(k))
    : L ? allFacts : [['Tribe / people', c.tribe], ['Family', c.family], ['From', c.hometown], ['When', c.when]]
  ).filter(([, v]) => v);
  const intro = L ? (simple ? L.simple : L.moderate) : c.bio;
  // Kings of Israel and Judah: the Bible's verdict on the reign, and a link to the Kings & Prophets ladder.
  const king = kingById[kingIdOfChar(c.id)];
  const keyVerses = det?.keyVerses?.length ? det.keyVerses : king && det ? [{ ref: king.ref, text: king.quote.replace(/^“|”$/g, '') }] : [];

  return (
    <main className="wrap page person-page">
      <div className="cols">
        <div className="col-main">
          <div className="pp-crumb" style={{ fontSize: 'calc(13px * var(--ts))' }}><Link to="/people" style={{ textDecoration: 'none' }}>Characters</Link> <span className="muted">/ {c.group}</span></div>
          <div className="row pp-head" style={{ gap: 24 }}>
            <div className="avatar lg" aria-hidden="true">{c.name[0]}</div>
            <div className="stack" style={{ gap: 6, minWidth: 0, flex: 1 }}>
              <h1 className="h1 pp-name" style={{ fontSize: 'calc(56px * var(--ts))' }}>{c.name}</h1>
              <div className="tagline pp-title" style={{ fontSize: 'calc(19px * var(--ts))' }}>{c.title}</div>
              {c.meaning && <div className="muted pp-mean" style={{ fontSize: 'calc(14px * var(--ts))' }}>Name means <span className="ink-2">“{c.meaning}”</span>{c.meaningWhy && <> — {c.meaningWhy}</>}</div>}
            </div>
          </div>
          <div className="pp-level"><LevelToggle small /><span className="muted" style={{ fontSize: 'calc(11px * var(--ts))' }}>Reading level</span></div>
          {king && (
            <div className={'pk-reign v-' + king.verdict}>
              <div><span className="pk-kingdom">{KINGDOM_NAME[king.kingdom]}</span> · Reigned c. {reignSpan(king)} BC · <span className="pk-verdict">{VERDICTS[king.verdict].label}</span></div>
              <q>{king.quote.replace(/^“|”$/g, '')}</q> <span className="muted">{king.ref}</span>
              <div><Link to={`/kings?k=${king.id}`} className="pk-ladder">See him on the Kings &amp; Prophets ladder ›</Link></div>
            </div>
          )}
          {facts.length > 0 && (
            <dl className="factgrid">
              {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
          )}

          <section className="stack">
            <H2>{det ? 'In brief' : 'Who they were'}</H2>
            <Paras text={intro} />
          </section>

          {det?.background && <section className="stack"><H2>Background and family</H2><Paras text={det.background} /></section>}
          {det?.significance && (
            <div className="card why-card">
              <div className="eyebrow gold">Why {c.name.split(' ')[0]} matters</div>
              <Paras text={det.significance} className="" />
            </div>
          )}

          {det?.moments?.length > 0 ? (
            <section className="stack pp-story" style={{ gap: 14 }}>
              <H2>Key moments</H2>
              <ol className="ctl ctl-long">
                {det.moments.map((m, i) => (
                  <li key={i}>
                    <div className="row" style={{ gap: 10, alignItems: 'baseline' }}>
                      {m.date && <span className="moment-date">{m.date}</span>}
                      {m.title && <span className="moment-title">{m.title}</span>}
                      <RefLink r={m.ref} />
                    </div>
                    <div className="ink-2">{m.text}</div>
                  </li>
                ))}
              </ol>
            </section>
          ) : !simple && c.story?.length > 0 && (
            <section className="stack pp-story" style={{ gap: 14 }}>
              <H2>Their story</H2>
              <ol className="ctl">
                {c.story.map((s, i) => (
                  <li key={i}>
                    {s.book ? <Ref to={`/book/${s.book}/${s.ch}`} style={{ textDecoration: 'none', fontWeight: 600 }}>{s.ref}</Ref> : <span style={{ fontWeight: 600 }}>{s.ref}</span>}
                    <div className="ink-2">{s.text}</div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {det?.world && <Fold title="The world they lived in"><Paras text={det.world} /></Fold>}
          {det?.questions?.length > 0 && (
            <Fold title="Common questions" count={det.questions.length}>
              <div className="stack" style={{ gap: 14 }}>
                {det.questions.map((q) => (
                  <div key={q.q} className="stack" style={{ gap: 4 }}>
                    <div style={{ fontWeight: 600 }}>{q.q}</div>
                    <p className="ink-2 pp-bio" style={{ margin: 0 }}>{q.a}</p>
                  </div>
                ))}
              </div>
            </Fold>
          )}
          {keyVerses.length > 0 && (
            <section className="stack">
              <H2>Key verses</H2>
              {keyVerses.map((v) => <KeyVerse key={v.ref} verse={v} />)}
            </section>
          )}
          {det?.reading?.length > 0 && (
            <section className="stack">
              <H2>Read their story in order</H2>
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
        </div>
        <aside className="col-side">
          {c.christ && (
            <div className="card">
              <div className="eyebrow gold">Points to Christ</div>
              <p className="ink-2 pp-christ" style={{ margin: 0, fontSize: 'calc(14px * var(--ts))' }}>{c.christ}</p>
            </div>
          )}
          {c.books?.length > 0 && (
            <div className="card">
              <div className="serif pp-ct" style={{ fontSize: 'calc(20px * var(--ts))', fontWeight: 600 }}>Appears in</div>
              <div className="row">
                {c.books.map((b) => { const bk = getBook(b); return bk ? <PeekLink key={b} bookId={b} className="chip gold" to={`/book/${b}`}>{bk.name}</PeekLink> : null; })}
              </div>
            </div>
          )}
          {c.related?.length > 0 && (
            <div className="card">
              <div className="serif pp-ct" style={{ fontSize: 'calc(20px * var(--ts))', fontWeight: 600 }}>Related people</div>
              <div className="stack pp-rel" style={{ gap: 8, fontSize: 'calc(14px * var(--ts))' }}>
                {c.related.map((r) => {
                  const other = getCharacter(r.id);
                  return other
                    ? <PersonLink key={r.id} personId={r.id} style={{ textDecoration: 'none', color: 'var(--ink)' }}>{other.name} <span className="muted">· {r.rel}</span></PersonLink>
                    : <span key={r.id}>{r.id} <span className="muted">· {r.rel}</span></span>;
                })}
              </div>
            </div>
          )}
          <div id="person-notes" style={{ scrollMarginTop: 16 }}>
            <NoteEditor noteKey={noteKey('character', c.id)} title={`My notes on ${c.name}`} />
          </div>
        </aside>
      </div>
    </main>
  );
}
