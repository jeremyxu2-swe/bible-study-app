import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BOOKS, bookAtLevel } from '../data/index.js';
import LevelToggle from './LevelToggle.jsx';
import { useLevel } from '../store/prefs.js';

// Books & Timeline › "At a glance": all 66 books on one page, grouped by section.
// The text is each book's own summary (the same tagline and reading-level summaries as its book page):
//   Simple   — the book's Simple summary.
//   Moderate — the tagline and the Moderate summary.
//   Detailed — the same, plus author and date, an outline bar to scale and "Christ in this book".
// The List layout follows the level too (see `row`).
// Filter by text or by testament / section; switch between Cards and a compact List. Tap a book for its outline.

const CATS = [
  ['Law', 'law', 'God’s covenant with Israel and the founding of the nation'],
  ['History', 'hist', 'Israel in the land, from conquest to exile and return'],
  ['Poetry & Wisdom', 'poet', 'Worship, wisdom and the honest cry of the heart'],
  ['Major Prophets', 'major', 'The longer prophetic books'],
  ['Minor Prophets', 'minor', 'Twelve shorter prophetic books'],
  ['Gospels', 'gos', 'The life, death and resurrection of Jesus'],
  ['Church History', 'acts', 'The church spreads from Jerusalem to Rome'],
  ["Paul's Letters", 'paul', 'Paul’s letters to churches and coworkers'],
  ['General Letters', 'gen', 'Letters from other apostles and leaders'],
  ['Prophecy', 'proph', 'The revelation of Jesus and the end of the story'],
];
const CAT = Object.fromEntries(CATS.map(([n, k, d]) => [n, { k, d }]));
const LAYOUT_KEY = 'lp-glance-layout';
const readLayout = () => { try { return localStorage.getItem(LAYOUT_KEY) === 'list' ? 'list' : 'cards'; } catch { return 'cards'; } };
const sectionsText = (b) => (b.sections || []).map((s) => s.title).join(' · ');

function Outline({ b }) {
  if (!b.sections?.length) return null;
  return (
    <>
      <div className="gl-ol" aria-hidden="true">{b.sections.map((s, i) => <i key={i} style={{ flex: s.end - s.start + 1 }} title={`${s.title} (${s.start}–${s.end})`} />)}</div>
      <div className="gl-oll">{sectionsText(b)}</div>
    </>
  );
}

function Detail({ b, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const prev = document.activeElement;
    ref.current?.focus();
    const key = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', key);
    document.body.classList.add('drawer-open');
    return () => { document.removeEventListener('keydown', key); document.body.classList.remove('drawer-open'); prev?.focus?.(); };
  }, [onClose]);
  const sum = bookAtLevel(b, 'moderate');
  return (
    <>
      <div className="gl-dim" onClick={onClose} />
      <aside className={'gl-det c-' + CAT[b.category].k} role="dialog" aria-modal="true" aria-label={b.name} tabIndex={-1} ref={ref}>
        <button type="button" className="gl-x" onClick={onClose} aria-label="Close">✕</button>
        <div className="gl-k gl-cat">{b.category} · {b.chapters} {b.chapters === 1 ? 'chapter' : 'chapters'}</div>
        <h3>{b.name}</h3>
        <p className="gl-dtag">{b.tagline}</p>
        <p>{sum.text}</p>
        <div className="gl-k">Written</div>
        <p className="gl-tight">{b.author} · {b.written}</p>
        {b.sections?.length > 0 && (
          <>
            <div className="gl-k">Outline</div>
            <div className="gl-tight"><Outline b={b} /></div>
            <ol className="gl-sec">
              {b.sections.map((s, i) => (
                <li key={i}><Link to={`/book/${b.id}?s=${i}`}><span>{s.start === s.end ? `Ch. ${s.start}` : `Ch. ${s.start}–${s.end}`}</span>{s.title}</Link></li>
              ))}
            </ol>
          </>
        )}
        {b.christ && <><div className="gl-k">Christ in {b.name}</div><p className="gl-tight">{b.christ}</p></>}
        <Link to={`/book/${b.id}`} className="gl-open">Open {b.name} ›</Link>
      </aside>
    </>
  );
}

export default function GlanceView({ withNotes }) {
  const level = useLevel();
  const [layout, setLayout] = useState(readLayout);
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  const pickLayout = (v) => { setLayout(v); try { localStorage.setItem(LAYOUT_KEY, v); } catch { /* ignore */ } };

  const shown = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return BOOKS.filter((b) => (cat === 'All' || (cat === 'OT' && b.testament === 'Old Testament') || (cat === 'NT' && b.testament === 'New Testament') || b.category === cat)
      && (!ql || `${b.name} ${b.tagline} ${bookAtLevel(b, 'moderate').text} ${sectionsText(b)}`.toLowerCase().includes(ql)));
  }, [cat, q]);

  const card = (b) => {
    const text = level === 'simple' ? bookAtLevel(b, 'simple').text : bookAtLevel(b, 'moderate').text;
    return (
      <button key={b.id} type="button" className="gl-bk" onClick={() => setOpen(b.id)}>
        <span className="gl-bh"><b>{b.name}</b>{withNotes.has(b.id) && <span className="dot" aria-label="has notes" />}<small>{b.chapters} ch.</small></span>
        {level === 'simple'
          ? <span className="gl-tg">{text}</span>
          : <><span className="gl-tg">{b.tagline}</span><span className="gl-sm">{text}</span></>}
        {level === 'detailed' && (
          <>
            <span className="gl-meta">{b.author} · {b.written}</span>
            <span className="gl-olw"><Outline b={b} /></span>
            {b.christ && <span className="gl-cx"><b>✝ Christ in {b.name}</b>{b.christ}</span>}
          </>
        )}
      </button>
    );
  };
  // List rows follow the reading level too, staying compact:
  //   Simple   — the book's Simple summary in one plain line, no author column.
  //   Moderate — the tagline and the author.
  //   Detailed — the tagline, the Moderate summary and the outline, with author and date.
  const row = (b) => {
    const author = b.author.replace(' (traditional)', '');
    return (
      <button key={b.id} type="button" className={'gl-row lv-' + level} onClick={() => setOpen(b.id)}>
        <b><i />{b.name}</b><span className="gl-c">{b.chapters} ch.</span>
        {level === 'simple' && <span className="gl-t">{bookAtLevel(b, 'simple').text}</span>}
        {level === 'moderate' && <span className="gl-t">{b.tagline}</span>}
        {level === 'detailed' && (
          <span className="gl-t">
            <span className="gl-rtg">{b.tagline}</span>
            <span className="gl-rsm">{bookAtLevel(b, 'moderate').text}</span>
            {b.sections?.length > 0 && <span className="gl-roll">{sectionsText(b)}</span>}
          </span>
        )}
        {level !== 'simple' && (
          <span className="gl-w">{author}{level === 'detailed' && <><br /><span className="gl-wd">{b.written}</span></>}</span>
        )}
      </button>
    );
  };

  let lastT = '';
  const groups = [];
  CATS.forEach(([name, k, blurb]) => {
    const bs = shown.filter((b) => b.category === name);
    if (!bs.length) return;
    const t = bs[0].testament;
    if (t !== lastT && cat === 'All') { groups.push(<div key={'t' + t} className="gl-tsep">{t}</div>); lastT = t; }
    groups.push(
      <section key={name} className={'gl-grp c-' + k}>
        <div className="gl-gh"><h2>{name}</h2><span>{bs.length} {bs.length === 1 ? 'book' : 'books'} · {blurb}</span></div>
        {layout === 'cards' ? <div className="gl-cards">{bs.map(card)}</div> : <div className="gl-list">{bs.map(row)}</div>}
      </section>,
    );
  });

  const chips = [['All', 'All', ''], ['OT', 'Old Testament', ''], ['NT', 'New Testament', ''], ...CATS.map(([n, k]) => [n, n, k])];
  const openBook = open && BOOKS.find((b) => b.id === open);

  return (
    <section className="gl" aria-label="Every book at a glance">
      <p className="gl-lead">Every book of the Bible on one page: what it’s about in a sentence, and more as you turn up the reading level. Tap a book for its outline.</p>
      <div className="gl-tools">
        <input className="input gl-search" type="search" placeholder="Filter books or topics…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Filter books" />
        <div className="gl-tright">
          <LevelToggle small />
          <div className="gl-seg" role="group" aria-label="Layout">
            {[['cards', 'Cards'], ['list', 'List']].map(([v, l]) => <button key={v} type="button" className={layout === v ? 'on' : ''} aria-pressed={layout === v} onClick={() => pickLayout(v)}>{l}</button>)}
          </div>
        </div>
        <div className="gl-chips" role="group" aria-label="Show">
          {chips.map(([v, l, k]) => (
            <button key={v} type="button" className={'gl-chip' + (k ? ' c-' + k : '') + (cat === v ? ' on' : '')} aria-pressed={cat === v} onClick={() => setCat(v)}>{k && <i />}{l}</button>
          ))}
        </div>
      </div>
      {shown.length ? <p className="gl-count">{shown.length} of 66 books</p> : <div className="empty">No books match that filter.</div>}
      {groups}
      {openBook && <Detail b={openBook} onClose={close} />}
    </section>
  );
}
