import { Link, useParams } from 'react-router-dom';
import { getBook, sectionIndexOf, propheciesForChapter, chapterAtLevel, sectionShort, hasLevels, nationsForChapter } from '../data/index.js';
import NoteEditor from '../components/NoteEditor.jsx';
import LevelToggle, { KeyVerse } from '../components/LevelToggle.jsx';
import { noteKey } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';
import { SectionTimeline, PeopleChips, NationChips } from './Book.jsx';

export default function Chapter() {
  const { id, ch } = useParams();
  const level = useLevel();
  const book = getBook(id);
  const n = parseInt(ch, 10);
  if (!book || !n || n < 1 || n > book.chapters) {
    return <main className="wrap page"><h1 className="h1-sm">Chapter not found</h1><Link to="/">Back to all books</Link></main>;
  }
  const si = sectionIndexOf(book, n);
  const sec = book.sections[si];
  const prophecies = propheciesForChapter(book.id, n);
  const c = chapterAtLevel(book.id, n, level);
  const progress = Math.round((n / book.chapters) * 100);
  const peopleIds = c.people || sec.people || [];
  const nations = nationsForChapter(book.id, n);

  return (
    <>
      <SectionTimeline book={book} sel={si} linkTo={(i) => (i < 0 ? `/book/${book.id}` : `/book/${book.id}?s=${i}`)} />
      <main className="wrap page">
        <div className="cols">
          <div className="col-main">
            <div className="stack" style={{ gap: 6 }}>
              <div className="row" style={{ gap: 6, fontSize: 'calc(13px * var(--ts))' }}>
                <Link to={book.apocrypha ? '/apocrypha' : '/'} style={{ textDecoration: 'none' }}>{book.apocrypha ? 'Apocrypha' : 'Books'}</Link><span className="muted">/</span>
                <Link to={`/book/${book.id}?s=${si}`} style={{ textDecoration: 'none' }}>{book.name}</Link><span className="muted">/</span>
                <span className="muted">Chapter {n}</span>
              </div>
              <div style={{ height: 4, background: 'var(--line)', borderRadius: 2, overflow: 'hidden', maxWidth: 420 }} aria-label={`Chapter ${n} of ${book.chapters}`}>
                <div style={{ width: `${progress}%`, height: 4, background: 'var(--accent)' }} />
              </div>
              <div className="eyebrow gold" style={{ marginTop: 12 }}>{sec.title}{sec.years ? ` · ${sec.years}` : ''}</div>
              <div className="title-row">
                <h1 className="h1">{book.name} {n}</h1>
                <div className="level-box"><LevelToggle /></div>
              </div>
              <div className="muted" style={{ fontSize: 'calc(14px * var(--ts))' }}>Chapter {n} of {book.chapters}</div>
            </div>

            <p className="serif chapter-summary" style={{ fontSize: level === 'detailed' ? 17 : 18, lineHeight: 1.6 }}>
              {c.text || <span className="muted">Summary coming soon.</span>}
            </p>
            {c.verse && <KeyVerse verse={c.verse} book={book.name} />}
            {level === 'detailed' && c.people && (
              <div className="stack" style={{ gap: 6 }}>
                <div className="eyebrow">People in this chapter</div>
                <PeopleChips ids={c.people} />
              </div>
            )}
            {nations.length > 0 && (
              <div className="stack" style={{ gap: 6 }}>
                <div className="eyebrow">Nations in this chapter</div>
                <NationChips ids={nations} />
              </div>
            )}
            {!hasLevels(book.id) && level !== 'moderate' && (
              <div className="level-note">{level === 'simple' ? 'Simple' : 'Detailed'} summaries for {book.name} aren't written yet — showing the standard summary.</div>
            )}

            <div className="panel" style={{ gap: 12 }}>
              <div className="eyebrow">Where this fits</div>
              <div className="serif" style={{ fontSize: 'calc(20px * var(--ts))', fontWeight: 600 }}>{sec.title} <span className="muted" style={{ fontFamily: 'var(--sans)', fontSize: 'calc(14px * var(--ts))', fontWeight: 400 }}>· Ch. {sec.start}–{sec.end}</span></div>
              <p className="ink-2" style={{ margin: 0 }}>{level === 'detailed' ? sec.focus : sectionShort(book, sec)}</p>
              {level !== 'detailed' && peopleIds.length > 0 && <PeopleChips ids={peopleIds} />}
            </div>

            {prophecies.length > 0 && (
              <div className="card">
                <div className="eyebrow gold">Points to Christ</div>
                {prophecies.map((p) => (
                  <div key={p.id} className="stack" style={{ gap: 4 }}>
                    <div className="serif" style={{ fontSize: 'calc(18px * var(--ts))' }}>{p.ot} — {p.promise}</div>
                    <div className="ink-2" style={{ fontSize: 'calc(14px * var(--ts))' }}>Fulfilled in {p.nt} — {p.fulfil}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="chnav">
              {n > 1 ? <Link className="btn" to={`/book/${book.id}/${n - 1}`}>‹ Chapter {n - 1}</Link> : <span />}
              {n < book.chapters ? <Link className="btn" to={`/book/${book.id}/${n + 1}`}>Chapter {n + 1} ›</Link> : <span />}
            </div>
          </div>
          <aside className="col-side">
            <NoteEditor noteKey={noteKey('chapter', book.id, n)} title={`Notebook · ${book.name} ${n}`} />
          </aside>
        </div>
      </main>
    </>
  );
}
