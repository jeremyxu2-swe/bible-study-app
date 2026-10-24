import { Link, useParams } from 'react-router-dom';
import { CHURCH_DETAILS, churchById, getBook, getCharacter } from '../data/index.js';
import CHURCH_LEVELS from '../data/churchLevels/index.js';
import NoteEditor from '../components/NoteEditor.jsx';
import LevelToggle from '../components/LevelToggle.jsx';
import { PersonLink, PeekLink } from '../components/BookPeek.jsx';
import {
  Paras, Fold, Section, Facts, Moments, ItemList, Questions, KeyVerses, Reading, PeopleCard,
} from '../components/Background.jsx';
import { noteKey } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';

// A church's background page at Simple (the base entry), Moderate or Detailed reading level.
export default function Church() {
  const { id } = useParams();
  const level = useLevel();
  const e = churchById[id];
  if (!e) return <main className="wrap page"><h1 className="h1-sm">Church not found</h1><Link to="/">Back to all books</Link></main>;
  const idx = CHURCH_DETAILS.findIndex((x) => x.id === e.id);
  const prev = CHURCH_DETAILS[idx - 1];
  const next = CHURCH_DETAILS[idx + 1];
  const books = (e.books || []).map(getBook).filter(Boolean);
  const people = (e.people || []).map(getCharacter).filter(Boolean);

  // Simple = the base entry; Moderate adds to it; Detailed adds more again.
  const L = CHURCH_LEVELS[e.id];
  const mod = level !== 'simple' ? L?.moderate : null;
  const det = level === 'detailed' ? L?.detailed : null;
  const facts = [['When', e.dates], ['Where', e.region], ['Founded by', e.founded], ...(mod?.facts || [])];
  const leaders = det?.leaders || mod?.leaders || e.leaders;

  return (
    <>
      <section className="band" aria-label="Churches Paul wrote to">
        <div className="wrap">
          <div className="empires church-band">
            {CHURCH_DETAILS.map((m) => (
              <Link key={m.id} to={`/church/${m.id}`} className={'empire' + (m.id === e.id ? ' on' : '')} style={{ flex: '1 0 auto', textAlign: 'center' }}>{m.name}</Link>
            ))}
          </div>
        </div>
      </section>
      <main className="wrap page">
        <div className="cols">
          <div className="col-main">
            <div className="crumbs"><Link to="/">Books</Link> / <span className="cur">Churches Paul wrote to</span></div>
            <div className="stack" style={{ gap: 8 }}>
              <div className="eyebrow gold">Church background · {idx + 1} of {CHURCH_DETAILS.length}</div>
              <div className="title-row">
                <h1 className="h1">{e.name}</h1>
                <div className="level-box">
                  <LevelToggle />
                  <span className="muted" style={{ fontSize: 'calc(11px * var(--ts))' }}>Reading level</span>
                </div>
              </div>
              <div className="muted" style={{ fontSize: 'calc(14px * var(--ts))' }}>{e.full}</div>
              <p className="tagline">{e.tagline}</p>
            </div>
            <Facts facts={facts} />

            <Section title="The city"><Paras text={mod?.who || e.who} /></Section>
            <Section title="How the church began"><Paras text={mod?.relationship || e.relationship} /></Section>

            <div className="card why-card">
              <div className="eyebrow gold">Why it matters when you read the letter</div>
              <Paras text={mod?.why || e.why} className="" />
            </div>

            {mod?.letter && (
              <Section title={mod.letterTitle || 'The letter in brief'}>
                <Paras text={mod.letter} />
              </Section>
            )}

            <Moments moments={det?.moments || mod?.moments || e.moments} long={!!det} />

            {det ? (
              <>
                {det.folds.map((f) => (
                  <Fold key={f.title} title={f.title} count={f.items?.length} open={!!f.open}>
                    {f.text && <Paras text={f.text} />}
                    {f.items && <ItemList items={f.items} />}
                  </Fold>
                ))}
                <Questions items={det.questions} />
                <KeyVerses verses={det.keyVerses} />
                <Reading items={det.reading} />
              </>
            ) : mod?.archaeology?.length > 0 && (
              <Section title="What archaeology shows"><ItemList items={mod.archaeology} /></Section>
            )}

            {(mod?.later || e.later) && <Section title="Afterward"><Paras text={mod?.later || e.later} /></Section>}

            <div className="chnav">
              {prev ? <Link className="btn" to={`/church/${prev.id}`}>‹ {prev.name}</Link> : <span />}
              {next ? <Link className="btn" to={`/church/${next.id}`}>{next.name} ›</Link> : <span />}
            </div>
          </div>

          <aside className="col-side">
            <PeopleCard people={leaders} />
            {books.length > 0 && (
              <div className="card">
                <div className="serif" style={{ fontSize: 'calc(20px * var(--ts))', fontWeight: 600 }}>Letters &amp; passages</div>
                <div className="row">
                  {books.map((b) => <PeekLink key={b.id} bookId={b.id} className="chip gold" to={`/book/${b.id}`}>{b.name}</PeekLink>)}
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
            <NoteEditor noteKey={noteKey('church', e.id)} title={`My notes on ${e.name}`} />
          </aside>
        </div>
      </main>
    </>
  );
}
