import { useEffect, useRef } from 'react';
import { PeekLink } from '../components/BookPeek.jsx';
import { Link, useParams } from 'react-router-dom';
import { NATION_DETAILS, nationById, getBook } from '../data/index.js';
import NATION_LEVELS from '../data/nationLevels/index.js';
import NoteEditor from '../components/NoteEditor.jsx';
import LevelToggle from '../components/LevelToggle.jsx';
import {
  Paras, Fold, Section, Facts, Moments, ItemList, Questions, KeyVerses, Reading, PeopleCard,
} from '../components/Background.jsx';
import { noteKey } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';

// A nation's background page at Simple, Moderate or Detailed reading level.
export default function Nation() {
  const { id } = useParams();
  const level = useLevel();
  const bandRef = useRef(null);
  const n = nationById[id];

  // Keep the current nation visible in the scrolling band.
  useEffect(() => {
    const el = bandRef.current?.querySelector('.empire.on');
    if (el) el.scrollIntoView({ block: 'nearest', inline: 'center' });
  }, [id]);

  if (!n) return <main className="wrap page"><h1 className="h1-sm">Nation not found</h1><Link to="/">Back to all books</Link></main>;
  const idx = NATION_DETAILS.findIndex((x) => x.id === n.id);
  const prev = NATION_DETAILS[idx - 1];
  const next = NATION_DETAILS[idx + 1];

  // Simple = the base entry; Moderate and Detailed come from nationLevels/.
  const L = NATION_LEVELS[n.id];
  const mod = level !== 'simple' ? L?.moderate : null;
  const det = level === 'detailed' ? L?.detailed : null;
  const cur = det || mod;
  const facts = cur?.facts || n.facts;
  const tagline = cur?.tagline || mod?.tagline || n.tagline;
  const books = n.books.map((b) => ({ book: getBook(b), count: n.chapters[b].length })).filter((x) => x.book);

  return (
    <>
      <section className="band" aria-label="Nations and peoples">
        <div className="wrap">
          <div className="empires church-band" ref={bandRef}>
            {NATION_DETAILS.map((x) => (
              <Link key={x.id} to={`/nation/${x.id}`} className={'empire' + (x.id === n.id ? ' on' : '')} style={{ flex: '1 0 auto', textAlign: 'center' }}>{x.name}</Link>
            ))}
          </div>
        </div>
      </section>
      <main className="wrap page">
        <div className="cols">
          <div className="col-main">
            <div className="crumbs"><Link to="/">Books</Link> / <span className="cur">Nations &amp; peoples</span></div>
            <div className="stack" style={{ gap: 8 }}>
              <div className="eyebrow nation-eyebrow">Nation · {n.group}</div>
              <div className="title-row">
                <h1 className="h1">{n.title}</h1>
                <div className="level-box">
                  <LevelToggle />
                  <span className="muted" style={{ fontSize: 'calc(11px * var(--ts))' }}>Reading level</span>
                </div>
              </div>
              <p className="tagline">{tagline}</p>
            </div>
            <Facts facts={facts} />

            <Section title="Who they were"><Paras text={cur?.who || n.who} /></Section>
            <Section title="Their relationship with Israel"><Paras text={cur?.relationship || n.relationship} /></Section>

            <div className="card why-card">
              <div className="eyebrow gold">Why it matters when you read the Bible</div>
              <Paras text={cur?.why || n.why} className="" />
            </div>

            <Moments moments={cur?.moments || n.moments} long={!!det} />

            {det ? (
              <>
                {det.folds.map((f) => (
                  <Fold key={f.title} title={f.title} count={f.items?.length} open={!!f.open}>
                    {f.intro && <Paras text={f.intro} />}
                    {f.text && <Paras text={f.text} />}
                    {f.items && <ItemList items={f.items} linkTo={(a) => a.nation && `/nation/${a.nation}`} />}
                  </Fold>
                ))}
                <Questions items={det.questions} />
                <KeyVerses verses={det.keyVerses} />
                <Reading items={det.reading} />
              </>
            ) : mod && (
              <>
                <Section title={mod.godsTitle || 'Their gods and worship'}><Paras text={mod.gods} /></Section>
                {mod.archaeology?.length > 0 && <Section title="What archaeology shows"><ItemList items={mod.archaeology} /></Section>}
              </>
            )}

            {(cur?.later) && <Section title="Afterward"><Paras text={cur.later} /></Section>}

            <div className="chnav">
              {prev ? <Link className="btn" to={`/nation/${prev.id}`}>‹ {prev.name}</Link> : <span />}
              {next ? <Link className="btn" to={`/nation/${next.id}`}>{next.name} ›</Link> : <span />}
            </div>
          </div>

          <aside className="col-side">
            {cur?.people && <PeopleCard people={cur.people} />}
            {books.length > 0 && (
              <div className="card">
                <div className="serif" style={{ fontSize: 'calc(20px * var(--ts))', fontWeight: 600 }}>Appears in</div>
                <div className="row">
                  {books.map(({ book, count }) => (
                    <PeekLink key={book.id} bookId={book.id} className="chip gold" to={`/book/${book.id}`}>
                      {book.name}{level === 'detailed' && <span className="muted" style={{ fontWeight: 400 }}> · {count}</span>}
                    </PeekLink>
                  ))}
                </div>
                {level === 'detailed' && <div className="muted" style={{ fontSize: 'calc(12px * var(--ts))' }}>Numbers show how many chapters feature them.</div>}
              </div>
            )}
            <NoteEditor noteKey={noteKey('nation', n.id)} title={`My notes on ${n.title}`} />
          </aside>
        </div>
      </main>
    </>
  );
}
