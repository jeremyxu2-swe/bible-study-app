import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import {
  getBook, getCharacter, propheciesForBook, BOOKS,
  bookAtLevel, chapterAtLevel, sectionShort, hasLevels, churchesForBook,
  nationById, nationsForChapter, nationsForRange,
} from '../data/index.js';
import { PersonLink, PeekChip } from '../components/BookPeek.jsx';
import { sectionDetail } from '../data/sectionDetails/index.js';
import { periodForSection, periodsForBook } from '../data/empires.js';
import BOOK_BG, { summaryLevel } from '../data/bookBackground/index.js';
import { BOOK_PURPOSE } from '../data/bookPurpose.js';
import { APOCRYPHA, APOC_PURPOSE, APOC_BG } from '../data/apocrypha.js';
import { ApocryphaCards } from './Apocrypha.jsx';
import NoteEditor from '../components/NoteEditor.jsx';
import LevelToggle, { KeyVerse } from '../components/LevelToggle.jsx';
import { useNotes, noteKey } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';
import Ref from '../components/Ref.jsx';
import { pageZoom } from '../utils/zoom.js';

// Section tabs for a book, pinned to the top of the screen as you scroll.
// "All" shows the whole book; tapping the current section again also goes back to All.
export function SectionTimeline({ book, sel, onPick, linkTo }) {
  const total = book.chapters;
  const rowRef = useRef(null);
  // Keep the chosen tab in view on narrow screens, where the row scrolls sideways
  useEffect(() => {
    const row = rowRef.current;
    const on = row?.querySelector('.tl-seg.on');
    if (row && on && row.scrollWidth > row.clientWidth) row.scrollTo({ left: on.offsetLeft - 16, behavior: 'smooth' });
  }, [sel]);
  const allLabel = `All sections · Ch. 1–${total}`;
  const allInner = <><span className="tl-seg-t">All</span><small>Ch. 1–{total}</small></>;
  return (
    <section className="band sec-band" aria-label="Sections">
      <div className="wrap">
        <div className="tl-row" ref={rowRef}>
          {book.sections.length > 1 && (linkTo
            ? <Link to={linkTo(-1)} className={'tl-seg all' + (sel < 0 ? ' on' : '')} title={allLabel}>{allInner}</Link>
            : <button type="button" className={'tl-seg all' + (sel < 0 ? ' on' : '')} title={allLabel} aria-pressed={sel < 0} onClick={() => onPick(-1)}>{allInner}</button>)}
          {book.sections.map((s, i) => {
            const flex = Math.max(1, s.end - s.start + 1) / total * 100;
            const cls = 'tl-seg' + (i === sel ? ' on' : '');
            const label = `${s.title} · ${s.start === s.end ? s.start : s.start + '–' + s.end}`;
            const inner = <><span className="tl-seg-t">{s.title}</span><small>Ch. {s.start === s.end ? s.start : `${s.start}–${s.end}`}</small></>;
            return linkTo
              ? <Link key={i} to={linkTo(i)} className={cls} style={{ flex: `${flex} 1 0` }} title={label}>{inner}</Link>
              : <button key={i} type="button" className={cls} style={{ flex: `${flex} 1 0` }} title={label} aria-pressed={i === sel} onClick={() => onPick(i === sel ? -1 : i)}>{inner}</button>;
          })}
        </div>
      </div>
    </section>
  );
}

export function PeopleChips({ ids, small = false }) {
  const people = (ids || []).map(getCharacter).filter(Boolean);
  if (!people.length) return null;
  return (
    <div className="row" style={{ gap: 6 }}>
      {people.map((p) => <PersonLink key={p.id} personId={p.id} className={small ? 'tag person-tag' : 'chip'}>{p.name}</PersonLink>)}
    </div>
  );
}

// Nation chips: outlined in blue with a small flag, linking to the nation's background page.
export function NationChips({ ids, small = false, max }) {
  const all = (ids || []).map((id) => nationById[id]).filter(Boolean);
  if (!all.length) return null;
  const list = max && all.length > max ? all.slice(0, max) : all;
  return (
    <div className="row" style={{ gap: 6 }}>
      {list.map((n) => (
        <PeekChip key={n.id} kind="nation" id={n.id} className={'nation-tag' + (small ? ' sm' : '')} to={`/nation/${n.id}`}>
          <span className="nflag" aria-hidden="true">⚑</span>{n.name}
        </PeekChip>
      ))}
      {list.length < all.length && <span className="muted" style={{ fontSize: 'calc(12px * var(--ts))' }}>+{all.length - list.length} more</span>}
    </div>
  );
}

// People on one line and nations on a second. Each line always has its label ("People:",
// "Nation:" or "Nations:") whenever it has chips, even when the other kind is missing.
export function ChipLines({ people, nations, small = false, maxPeople, maxNations }) {
  const hasP = (people || []).some((id) => getCharacter(id));
  const nCount = (nations || []).filter((id) => nationById[id]).length;
  if (!hasP && !nCount) return null;
  const ids = maxPeople ? (people || []).slice(0, maxPeople) : people;
  return (
    <div className="chip-lines">
      {hasP && <div className="chip-line"><span className="chip-lab">People:</span><PeopleChips ids={ids} small={small} /></div>}
      {nCount > 0 && <div className="chip-line"><span className="chip-lab">{nCount === 1 ? 'Nation:' : 'Nations:'}</span><NationChips ids={nations} small={small} max={maxNations} /></div>}
    </div>
  );
}

const range = (s) => (s.start === s.end ? `${s.start}` : `${s.start}–${s.end}`);

// A section's one-line summary with an inline "See more" that opens fuller details
// (Moderate: what happens and a key verse; Detailed: everything). Not shown at Simple.
function SectionSummary({ book, sec, level, className, style }) {
  const [open, setOpen] = useState(false);
  const det = level !== 'simple' ? sectionDetail(book.id, sec.start) : null;
  const text = level === 'detailed' ? sec.focus : sectionShort(book, sec);
  return (
    <>
      <p className={className} style={style}>
        {text}
        {det && (
          <>{' '}<button type="button" className="see-more" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'See less ⌃' : 'See more ⌄'}</button></>
        )}
      </p>
      {det && open && <SectionMore det={det} sec={sec} bookId={book.id} full={level === 'detailed'} />}
    </>
  );
}

function SectionMore({ det, sec, full, bookId }) {
  const power = periodForSection(det.power, bookId, sec.start);
  return (
    <div className="sec-more">
      <div><div className="sm-lbl">What happens</div><Paras text={det.what} /></div>
      {full && det.unfolds?.length > 0 && (
        <div>
          <div className="sm-lbl">How it unfolds</div>
          <div className="sm-grp">
            {det.unfolds.map(([r, t]) => <div key={r}><b>{r}</b><span>{t}</span></div>)}
          </div>
        </div>
      )}
      {full && det.themes?.length > 0 && (
        <div><div className="sm-lbl">Themes</div><div className="row" style={{ gap: 6 }}>{det.themes.map((t) => <span key={t} className="sm-theme">{t}</span>)}</div></div>
      )}
      {det.verse && <div><div className="sm-lbl">Key verse</div><KeyVerse verse={det.verse} /></div>}
      {full && det.christ && (
        <div className="sm-christ"><div className="sm-lbl gold">{det.christLabel || 'Look for Christ'}</div><p>{det.christ}</p></div>
      )}
      {full && (sec.people?.length > 0 || power) && (
        <div className="row" style={{ gap: 6 }}>
          {sec.people?.length > 0 && <><span className="muted" style={{ fontSize: 'calc(12px * var(--ts))' }}>Key people</span><PeopleChips ids={sec.people} /></>}
          {power && <><span className="muted" style={{ fontSize: 'calc(12px * var(--ts))', marginLeft: 6 }}>World power</span><PeekChip kind="empire" id={power.id} className="chip empire-chip" to={`/empire/${power.id}`}>{power.name} ›</PeekChip></>}
        </div>
      )}
    </div>
  );
}

function Paras({ text }) {
  return (text || '').split(/\n\n+/).map((p, i) => <p key={i} className="sm-p">{p}</p>);
}

// The book title with the reading-level toggle beside it. On phones the title shrinks (30px → 19px)
// just enough to share the line; if it still can't fit, the toggle moves underneath.
function BookTitle({ name }) {
  const row = useRef(null);
  const title = useRef(null);
  useLayoutEffect(() => {
    const fit = () => {
      const r = row.current, t = title.current;
      if (!r || !t) return;
      t.style.fontSize = '';
      r.classList.remove('wrapped');
      if (!window.matchMedia('(max-width: 760px)').matches) return;
      const toggle = r.querySelector('.level-box');
      const room = () => t.offsetWidth + toggle.offsetWidth + 8 <= r.clientWidth;
      let size = 30;
      t.style.fontSize = `${size}px`;
      while (size > 19 && !room()) { size -= 1; t.style.fontSize = `${size}px`; }
      if (!room()) r.classList.add('wrapped');
    };
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [name]);
  return (
    <div className="title-row book-title-row" ref={row}>
      <h1 className="h1" ref={title}>{name}</h1>
      <div className="level-box"><LevelToggle small /></div>
    </div>
  );
}

export default function Book() {
  const { id } = useParams();
  const book = getBook(id);
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  // Arriving from a book preview's "Add note": scroll to this book's notes box.
  useEffect(() => {
    if (location.state?.focusNotes) setTimeout(() => document.getElementById('book-notes')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
  }, [location.key]);
  const notes = useNotes();
  const level = useLevel();
  if (!book) return <main className="wrap page"><h1 className="h1-sm">Book not found</h1><Link to="/">Back to all books</Link></main>;

  // No ?s= (or ?s=all) means "All sections"; ?s=2 picks the third section.
  const raw = params.get('s');
  const sel = raw == null || raw === 'all' || Number.isNaN(parseInt(raw, 10))
    ? -1 : Math.min(Math.max(parseInt(raw, 10), 0), book.sections.length - 1);
  const pick = (i) => {
    setParams(i < 0 ? {} : { s: String(i) }, { replace: true });
    requestAnimationFrame(() => {
      const band = document.querySelector('.sec-band');
      const main = band?.nextElementSibling;
      if (!band || !main) return;
      const top = main.getBoundingClientRect().top + window.scrollY - band.offsetHeight * pageZoom();
      if (window.scrollY > top) window.scrollTo({ top });
    });
  };
  const sec = sel >= 0 ? book.sections[sel] : null;
  const prophecies = propheciesForBook(book.id);
  const list = book.apocrypha ? APOCRYPHA : BOOKS;   // apocryphal books page through the Apocrypha only
  const idx = list.findIndex((b) => b.id === book.id);
  const prev = list[idx - 1];
  const next = list[idx + 1];
  const chapters = [];
  if (sec) for (let n = sec.start; n <= sec.end; n++) chapters.push(n);
  const secNations = sec ? nationsForRange(book.id, sec.start, sec.end) : [];
  // Book summary card: for books with deeper background, every level shows one step more (job #16).
  const sumLevel = summaryLevel(book.id, level);
  const sum = bookAtLevel(book, sumLevel);
  const deep = level === 'detailed' ? (BOOK_BG[book.id] || APOC_BG[book.id]) : null;
  const written = hasLevels(book.id);
  const detailed = level === 'detailed';
  const simple = level === 'simple';
  const notWritten = !written && level !== 'moderate' && (
    <div className="level-note">{simple ? 'Simple' : 'Detailed'} chapter summaries for {book.name} aren't written yet — showing the standard (Moderate) summaries.</div>
  );

  return (
    <>
      <SectionTimeline book={book} sel={sel} onPick={pick} />
      <main className="wrap page">
        <div className="cols">
          <div className="col-main">
            <div className="stack">
              {book.apocrypha && <Link to="/apocrypha" className="ap-badge">Apocrypha · not in most Protestant Bibles ›</Link>}
              <BookTitle name={book.name} />
              {!simple && book.tagline && <p className="tagline book-tagline">{book.tagline}</p>}
            </div>

            <SummaryCard book={book} sum={sum} level={sumLevel} realLevel={level} deep={deep} />
            {book.id === 'leviticus' && <Link to="/study/leviticus" className="dp-booklink"><b>Study Leviticus</b><span>The offerings, priests, Day of Atonement, feasts and symbols, and how each points to Christ ›</span></Link>}
            {book.id === 'acts' && <Link to="/journeys" className="dp-booklink"><b>Paul’s missionary journeys</b><span>The four journeys on a map, every stop, and the cities that received his letters ›</span></Link>}
            {book.id === 'daniel' && <Link to="/daniel/background" className="dp-booklink"><b>Background: the wars behind Daniel</b><span>Persia, Alexander, the kings of the north and south, and the Maccabees, before you read ›</span></Link>}
            {book.id === 'daniel' && <Link to="/daniel" className="dp-booklink"><b>Daniel’s prophecies, verse by verse</b><span>Each prophecy beside how it came to pass, chapters 2–12 ›</span></Link>}
            {book.apocrypha && <ApocryphaCards book={book} />}
            {book.id === '1maccabees' && <Link to="/daniel/background" className="dp-booklink"><b>The wars behind Daniel</b><span>How Daniel 8 and 11 describe these same events, and the wars that led up to them ›</span></Link>}


            {sec ? (
              <section className="panel sec-panel" aria-label={sec.title}>
                <div className="row" style={{ justifyContent: 'space-between', alignItems: 'baseline', gap: 10 }}>
                  <h2 className="h2">{sec.title}</h2>
                  <span style={{ fontSize: 'calc(14px * var(--ts))', color: 'var(--accent-ink)' }}>
                    Ch. {range(sec)}{sec.years ? ` · ${sec.years}` : ''}{detailed ? ` · ${chapters.length} ${chapters.length === 1 ? 'chapter' : 'chapters'}` : ''}
                  </span>
                </div>
                {detailed && sec.event && <div className="muted" style={{ fontSize: 'calc(14px * var(--ts))' }}>Event: {sec.event}</div>}
                {/* Same font and size at every reading level (only the wording changes). */}
                <SectionSummary key={sec.start} book={book} sec={sec} level={level} className="serif ink-2 sec-sum" style={{ margin: 0, fontStyle: 'italic' }} />
                {!simple && sec.people?.length > 0 && (
                  <div className="row">
                    <span className="muted" style={{ fontSize: 'calc(12px * var(--ts))', marginRight: 4 }}>Key people</span>
                    <PeopleChips ids={detailed ? sec.people : sec.people.slice(0, 5)} />
                  </div>
                )}
                {!simple && secNations.length > 0 && (
                  <div className="row">
                    <span className="muted" style={{ fontSize: 'calc(12px * var(--ts))', marginRight: 4 }}>Nations</span>
                    <NationChips ids={secNations} max={detailed ? undefined : 6} />
                  </div>
                )}
                {notWritten}
                <ChapterRows book={book} chapters={chapters} level={level} notes={notes} />
                <div className="sec-nav">
                  {sel > 0 ? <button type="button" className="btn" onClick={() => pick(sel - 1)}>‹ {book.sections[sel - 1].title}</button> : <span />}
                  {sel < book.sections.length - 1 ? <button type="button" className="btn" onClick={() => pick(sel + 1)}>{book.sections[sel + 1].title} ›</button> : <span />}
                </div>
              </section>
            ) : (
              <section className="all-secs" aria-label={`All chapters of ${book.name}`}>
                {notWritten}
                {book.sections.map((s2, i) => {
                  const chs = [];
                  for (let n = s2.start; n <= s2.end; n++) chs.push(n);
                  return (
                    <div key={i} className="sec-group">
                      <div className="sec-ghead">
                        <div className="sec-top"><span>Ch. {range(s2)}</span>{s2.years && <span>{s2.years}</span>}</div>
                        <h2>{s2.title}</h2>
                        <SectionSummary book={book} sec={s2} level={level} />
                      </div>
                      <ChapterRows book={book} chapters={chs} level={level} notes={notes} />
                    </div>
                  );
                })}
              </section>
            )}

            <div className="chnav">
              {prev ? <Link className="btn" to={`/book/${prev.id}`}>‹ {prev.name}</Link> : <span />}
              {next ? <Link className="btn" to={`/book/${next.id}`}>{next.name} ›</Link> : <span />}
            </div>
          </div>

          <aside className="col-side">
            {prophecies.length > 0 && (
              <div className="card">
                <div className="eyebrow gold">Points to Christ</div>
                {prophecies.slice(0, 3).map((p, i) => (
                  <div key={p.id} className="stack" style={{ gap: 6 }}>
                    {i > 0 && <div className="divider" />}
                    <div className="serif" style={{ fontSize: 'calc(18px * var(--ts))' }}>{p.ot} — {p.promise}</div>
                    <div className="ink-2" style={{ fontSize: 'calc(14px * var(--ts))' }}>Fulfilled in <Link to={`/prophecies?stage=${p.cat.toLowerCase()}&p=${p.id}`}>{p.nt}</Link> — {p.fulfil}</div>
                  </div>
                ))}
                {prophecies.length > 3 && <Link to="/prophecies" style={{ fontSize: 'calc(14px * var(--ts))' }}>See all {prophecies.length} →</Link>}
              </div>
            )}
            {book.christ && (
              <div className="card">
                <div className="eyebrow gold">Christ in {book.name}</div>
                <p className="ink-2" style={{ margin: 0, fontSize: 'calc(14px * var(--ts))' }}>{book.christ}</p>
              </div>
            )}
            <div id="book-notes" style={{ scrollMarginTop: 16 }}>
              <NoteEditor noteKey={noteKey('book', book.id)} title={`Notes on ${book.name}`} placeholder="Big-picture notes on this book…" />
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

function ChapterRows({ book, chapters, level, notes }) {
  return (
    <ol className={'chlist level-' + level}>
      {chapters.map((n) => {
        const c = chapterAtLevel(book.id, n, level);
        const has = notes[noteKey('chapter', book.id, n)];
        return (
          <li key={n}>
            <div className="ch-row">
              <Link to={`/book/${book.id}/${n}`} className="num" aria-label={`${book.name} chapter ${n}`}>{n}</Link>
              <div className="ch-body">
                <Link to={`/book/${book.id}/${n}`} className="txt">{c.text || <span className="muted">Summary coming soon</span>}</Link>
                {c.verse && <KeyVerse verse={c.verse} book={book.name} short />}
                {level !== 'simple' && <ChipLines people={c.people} nations={nationsForChapter(book.id, n)} small />}
              </div>
              {has && <span className="badge">note</span>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

// Summary card that can be minimized. Starts minimized on phones and open on larger screens;
// once someone opens or hides it, that choice carries over to other books.
const OPEN_KEY = 'lp-summary-open';
function initialOpen() {
  try { const v = localStorage.getItem(OPEN_KEY); if (v === '1' || v === '0') return v === '1'; } catch { /* ignore */ }
  return typeof window === 'undefined' || !window.matchMedia || !window.matchMedia('(max-width: 760px)').matches;
}

function SummaryCard({ book, sum, level, realLevel, deep }) {
  const [open, setOpen] = useState(initialOpen);
  const toggle = () => { const v = !open; setOpen(v); try { localStorage.setItem(OPEN_KEY, v ? '1' : '0'); } catch { /* ignore */ } };
  const simple = level === 'simple';
  const detailed = level === 'detailed';
  const facts = [
    ['Author', book.author],
    !simple && ['Written', book.written],
    ['Events', book.years],
    !simple && ['World power', book.empire],
    ['Chapters', book.chapters],
    ['Written for', book.audience],
  ].filter((f) => f && f[1]);
  const empires = !simple ? periodsForBook(book.id) : [];
  const churches = !simple ? churchesForBook(book.id) : [];

  return (
    <div className={'card sum-card' + (open ? ' open' : '')}>
      <button type="button" className="sum-head" aria-expanded={open} aria-controls={`sum-${book.id}`} onClick={toggle}>
        <span className="sum-label">
          <span className="eyebrow gold">Summary</span>
          {!open && <span className="sum-hint">Author, dates, audience &amp; overview</span>}
        </span>
        <span className="sum-tog">{open ? 'Hide ▴' : 'Show ▾'}</span>
      </button>
      {open && (
        <div className="sum-body" id={`sum-${book.id}`}>
          <dl className="facts sum-facts">
            {facts.map(([k, v]) => <div key={k} className={k === 'Written for' ? 'wide' : ''}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
          {empires.length > 0 && (
            <div className="row" style={{ gap: 6 }}>
              <span className="muted" style={{ fontSize: 'calc(12px * var(--ts))', marginRight: 4 }}>World powers</span>
              {empires.map((e) => <PeekChip key={e.id} kind="empire" id={e.id} className="chip empire-chip" to={`/empire/${e.id}`}>{e.name} — background ›</PeekChip>)}
            </div>
          )}
          {churches.length > 0 && (
            <div className="row" style={{ gap: 6 }}>
              <span className="muted" style={{ fontSize: 'calc(12px * var(--ts))', marginRight: 4 }}>{churches.length === 1 ? 'Church' : 'Churches'}</span>
              {churches.map((c) => <PeekChip key={c.id} kind="church" id={c.id} className="chip empire-chip" to={`/church/${c.id}`}>{c.full} — background ›</PeekChip>)}
            </div>
          )}
          <div className="divider" />
          <p className="sum-text" style={{ margin: 0 }}>{sum.text}</p>
          <WhyWritten bookId={book.id} level={realLevel || level} />
          {level === 'moderate' && <KeyVerse verse={sum.verse} book={book.name} />}
          {detailed && (sum.themes || sum.keyVerses) && (
            <div className="two-col">
              {sum.themes && (
                <div className="stack" style={{ gap: 6 }}>
                  <div className="eyebrow">Key themes</div>
                  <ul className="ev">{sum.themes.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
              )}
              {sum.keyVerses && (
                <div className="stack" style={{ gap: 6 }}>
                  <div className="eyebrow">Key verses</div>
                  {sum.keyVerses.map((v) => <KeyVerse key={v.ref} verse={v} book={book.name} />)}
                </div>
              )}
            </div>
          )}
          {detailed && book.background && (
            <div className="stack" style={{ gap: 4 }}>
              <div className="eyebrow gold">Background</div>
              <p className="ink-2" style={{ margin: 0 }}>{book.background}</p>
            </div>
          )}
          {deep && <BookDeep book={book} d={deep} />}
        </div>
      )}
    </div>
  );
}

// "Sections" dropdown: All sections (default) or one section.

// Detailed level only: the deeper background for a book (authorship, setting, context, outline,
// key passages, and how it points to Christ). Data in data/bookBackground/.
function BookDeep({ book, d }) {
  const Block = ({ title, text }) => text ? (
    <div className="stack bk-deep-sec" style={{ gap: 4 }}>
      <div className="eyebrow gold">{title}</div>
      <p className="ink-2" style={{ margin: 0 }}>{text}</p>
    </div>
  ) : null;
  return (
    <div className="bk-deep stack">
      <div className="divider" />
      <Block title="Author and date" text={d.authorship} />
      <Block title="Setting and audience" text={d.setting} />
      <Block title="Historical context" text={d.context} />
      {d.structure?.length > 0 && (
        <div className="stack bk-deep-sec" style={{ gap: 6 }}>
          <div className="eyebrow gold">How the book is organized</div>
          <ol className="bk-outline">
            {d.structure.map(([range, title]) => {
              // One-chapter books (Obadiah, Philemon, 2–3 John, Jude) are outlined by verses, so they all link to chapter 1.
              const oneCh = book.chapters === 1;
              const first = oneCh ? 1 : parseInt(range, 10);
              const label = oneCh ? `vv. ${range}` : range;
              return (
                <li key={range}>
                  {first && first <= book.chapters ? <Link to={`/book/${book.id}/${first}`} className="bk-range">{label}</Link> : <span className="bk-range">{label}</span>}
                  <span className="ink-2">{title}</span>
                </li>
              );
            })}
          </ol>
        </div>
      )}
      {d.passages?.length > 0 && (
        <div className="stack bk-deep-sec" style={{ gap: 6 }}>
          <div className="eyebrow gold">Key passages</div>
          <ul className="bk-passages">
            {d.passages.map((x) => (
              <li key={x.label}><Ref to={`/book/${x.book}/${x.ch}`}>{x.label}</Ref>{x.note && <span className="muted"> · {x.note}</span>}</li>
            ))}
          </ul>
        </div>
      )}
      {d.christ && (
        <div className="card why-card bk-christ">
          <div className="eyebrow gold">How {book.name} points to Christ</div>
          <p style={{ margin: 0 }}>{d.christ}</p>
        </div>
      )}
    </div>
  );
}

// "Why it was written" (job #19): one sentence at Simple, the first two sentences of the fuller
// explanation at Moderate, all of it at Detailed. Data in data/bookPurpose.js.
function WhyWritten({ bookId, level }) {
  const w = BOOK_PURPOSE[bookId] || APOC_PURPOSE[bookId];
  if (!w) return null;
  const sentences = w.d.split(/(?<=[.!?]["”’)]?)\s+(?=[A-Z0-9"“(])/);
  const text = level === 'simple' ? w.s : level === 'moderate' ? sentences.slice(0, 2).join(' ') : w.d;
  return (
    <div className="why-written">
      <div className="eyebrow gold">Why it was written</div>
      <p className="ink-2" style={{ margin: 0 }}>{text}</p>
    </div>
  );
}
