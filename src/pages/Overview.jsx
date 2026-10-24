import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BOOKS, ERAS, EMPIRES, GROUPS, getBook, getCharacter, empireById } from '../data/index.js';
import { CHRONO } from '../data/chrono.js';
import { EMPIRE_COLORS, TL_ERAS, TL_END, TL_EMPIRES, yearLabel } from '../data/timeline.js';
import { useNotes, booksWithNotes } from '../store/notes.js';
import TimelineView from '../components/TimelineView.jsx';
import GlanceView from '../components/GlanceView.jsx';
import { PeekLink, PersonLink, PeekChip } from '../components/BookPeek.jsx';
import EraMore from '../components/EraMore.jsx';
import { useEraJump, EraJumpBar } from '../components/eraJump.jsx';
import { pageZoom } from '../utils/zoom.js';

const VIEW_KEY = 'lp-books-view';
const VIEWS = [['bible', 'Genre'], ['time', 'Time Period'], ['timeline', 'Timeline'], ['glance', 'At a glance']];
const readView = () => { try { const v = localStorage.getItem(VIEW_KEY); return VIEWS.some(([k]) => k === v) ? v : 'bible'; } catch { return 'bible'; } };
const ERA_IDS = ERAS.map((e) => e.id);
// With the scrollbar hidden, let a mouse wheel scroll these rows sideways (until the row reaches its end).
// Year → position (%) along the era strip: every era card is the same width, and years are spread
// evenly inside each card. The first card (Creation & Flood) has no dates, so empires start at the second.
function yearPct(y) {
  const n = ERAS.length;
  for (let i = 0; i < TL_ERAS.length; i++) {
    const a = TL_ERAS[i].start, b = TL_ERAS[i + 1]?.start ?? TL_END;
    if (y <= b || i === TL_ERAS.length - 1) {
      const idx = ERAS.findIndex((e) => e.id === TL_ERAS[i].id);
      const f = Math.min(1, Math.max(0, (y - a) / (b - a)));
      return ((idx + f) / n) * 100;
    }
  }
  return 100;
}

const wheelX = (el) => {
  if (!el || el._wx) return;
  el._wx = true;
  el.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) return;
    if ((e.deltaY < 0 && el.scrollLeft <= 0) || (e.deltaY > 0 && el.scrollLeft >= max - 1)) return;
    e.preventDefault();
    el.scrollLeft += e.deltaY;
  }, { passive: false });
};
// Books to highlight for an era (Creation & Flood highlights Genesis without changing Genesis's main era).
const curEraBooks = (id) => { const e = ERAS.find((x) => x.id === id); return [...e.books, ...(e.highlight || [])]; };

export default function Overview() {
  const notes = useNotes();
  const withNotes = booksWithNotes(notes);
  const [view, setView] = useState(readView);
  const choose = (v) => { setView(v); try { localStorage.setItem(VIEW_KEY, v); } catch { /* ignore */ } };

  return (
    <main className="wrap page stack-lg" style={{ gap: 28 }}>
      <div className="ov-top">
        <h1 className="h1-sm ov-title">The Biblical Narrative</h1>
        <div className="viewseg" role="group" aria-label="How to list the books">
          {VIEWS.map(([k, label]) => (
            <button key={k} type="button" className={view === k ? 'on' : ''} aria-pressed={view === k} onClick={() => choose(k)}>{label}</button>
          ))}
        </div>
      </div>
      {view === 'time' && <ByTime withNotes={withNotes} />}
      {view === 'timeline' && <TimelineView />}
      {view === 'bible' && <BibleOrder withNotes={withNotes} />}
      {view === 'glance' && <GlanceView withNotes={withNotes} />}
    </main>
  );
}

function BibleOrder({ withNotes }) {
  const [era, setEra] = useState(null);
  const eraBooks = era ? new Set(curEraBooks(era)) : null;
  const curEra = era && ERAS.find((e) => e.id === era);
  // Pin the band to the top once it scrolls up past the page heading
  const sentinel = useRef(null);
  const [pinned, setPinned] = useState(false);
  useEffect(() => {
    const el = sentinel.current;
    if (!el || !window.IntersectionObserver) return undefined;
    const io = new IntersectionObserver(([e]) => setPinned(!e.isIntersecting && e.boundingClientRect.top < 0));
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // The pinned band is shorter than the full one. If that lost height simply vanished, everything
  // below would jump up as the band pins (and the browser would shift the scroll position), which
  // made scrolling near the top glitchy. So the space the band takes up in the page never changes:
  // while pinned, a bottom margin makes up the difference.
  const band = useRef(null);
  const [pad, setPad] = useState(0);
  useLayoutEffect(() => {
    const el = band.current;
    if (!el) return undefined;
    const measure = () => {
      if (!el.classList.contains('pinned')) { setPad(0); return; }
      el.classList.remove('pinned');
      const full = el.getBoundingClientRect().height;
      el.classList.add('pinned');
      setPad(Math.max(0, full - el.getBoundingClientRect().height) / pageZoom()); // screen px → CSS px (job #21)
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [pinned, era]);
  return (
    <>
      {/* Zero-height marker for pinning; the negative margin cancels the page gap it would otherwise add. */}
      <div ref={sentinel} aria-hidden="true" style={{ marginTop: -28 }} />
      <section ref={band} style={pinned && pad ? { marginBottom: pad } : undefined} className={'panel era-band' + (pinned ? ' pinned' : '')} aria-label="Timeline of biblical history">
        <div className="eyebrow era-band-eyebrow"><span className="only-desktop-inline">Eras, set inside the world powers of their time · tap an era to highlight its books</span><span className="only-phone-inline">Eras &amp; world powers · tap an era</span></div>
        {/* Option D (23 Oct): the world powers are tinted zones behind the era cards, on one timeline scale
            (yearPct), so each era sits inside the powers that ruled it. Zones and eras share one sideways scroll. */}
        <div className="era-strip" ref={wheelX}>
          <div className="era-track zoned" style={{ '--n': ERAS.length }}>
            <div className="ez-zones">
              <span className="ez-zone none" style={{ left: 0, width: `${yearPct(TL_EMPIRES[0][2])}%` }}><span className="emp-name">Before</span></span>
              {TL_EMPIRES.map(([id, name, a, b]) => {
                const left = yearPct(a), width = yearPct(b) - left;
                const m = EMPIRES.find((x) => x.id === id);
                return (
                  <PeekChip key={id} kind="empire" id={id} to={`/empire/${id}`} className="ez-zone" title={`${empireById[id]?.name || name} · ${m?.dates || ''}`}
                    style={{ left: `${left}%`, width: `${width}%`, '--c': EMPIRE_COLORS[id] }}>
                    <span className="emp-name">{name}</span>
                  </PeekChip>
                );
              })}
            </div>
            <div className="eras">
              {ERAS.map((e) => (
                <button key={e.id} type="button" className={'era' + (era === e.id ? ' on' : '')} aria-pressed={era === e.id}
                  onClick={() => setEra(era === e.id ? null : e.id)}>
                  <span style={{ fontWeight: 600 }}>{e.name}</span>
                  <small>{e.dates}</small>
                </button>
              ))}
            </div>
            <div className="ez-ticks" aria-hidden="true">
              {ERAS.map((e) => { const t = TL_ERAS.find((x) => x.id === e.id); return <span key={e.id}>{t ? yearLabel(t.start) : ''}</span>; })}
            </div>
          </div>
        </div>
        {curEra
          ? <p className="ink-2 era-band-note" style={{ margin: 0 }}><b style={{ color: 'var(--accent-ink)' }}>{curEra.name}.</b> {curEra.summary}</p>
          : <div className="muted era-band-note" style={{ fontSize: 'calc(13px * var(--ts))' }}>The colored zones are the powers that shaped each period, from the Bronze Age kingdoms to Rome. Tap a zone's name to see who they were and how they shaped Israel's story.</div>}
      </section>

      {GROUPS.map((g) => (
        <section key={g.testament} className="stack-lg">
          <h2 className="h2">{g.testament}</h2>
          {g.categories.map((cat) => {
            const books = BOOKS.filter((b) => b.category === cat);
            return (
              <div key={cat} className="stack" style={{ gap: 8 }}>
                <div className="eyebrow">{cat} · {books.length} {books.length === 1 ? 'book' : 'books'}</div>
                <div className="books">
                  {books.map((b) => (
                    <PeekLink key={b.id} bookId={b.id} to={`/book/${b.id}`}
                      className={'book' + (withNotes.has(b.id) ? ' has' : '') + (eraBooks && !eraBooks.has(b.id) ? ' faded' : '')}>
                      {b.name}
                      {withNotes.has(b.id) && <span className="dot" aria-label="has notes" />}
                    </PeekLink>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      ))}
    </>
  );
}

const COLS = [
  { key: 'story', label: 'Story', head: 'Story (narrative books)', kind: 'n' },
  { key: 'prophets', label: 'Prophets at the time', head: 'Prophets speaking at the time', kind: 'p' },
  { key: 'writings', label: 'Poetry, wisdom & letters', head: 'Poetry, wisdom & letters', kind: 'w' },
];

const LETTER_CATS = new Set(["Paul's Letters", 'General Letters']);

function entry(e) {
  const id = typeof e === 'string' ? e : e.id;
  const b = getBook(id);
  return { id, b, label: (typeof e === 'object' && e.label) || b?.name || id, ch: typeof e === 'object' ? e.ch : undefined };
}

function ByTime({ withNotes }) {
  const jumpState = useEraJump(ERA_IDS);

  return (
    <section className="chrono-wrap" aria-label="Books by time period">
      <div className="legend">
        <span><i className="lg-n" />Story</span>
        <span><i className="lg-p" />Prophets</span>
        <span><i className="lg-w" />Poetry &amp; wisdom</span>
        <span><i className="lg-l" />Letters (in writing order)</span>
      </div>

      <EraJumpBar eras={ERAS} state={jumpState} />

      <div className="chrono">
        <div className="crow chead" aria-hidden="true">
          <div className="eyebrow">Era</div>
          {COLS.map((c) => <div key={c.key} className="eyebrow">{c.head}</div>)}
        </div>
        {ERAS.map((era) => {
          const d = CHRONO[era.id] || {};
          const emp = (d.empires || []).map((id) => EMPIRES.find((m) => m.id === id)).filter(Boolean);
          const people = (d.people || []).map(getCharacter).filter(Boolean);
          return (
            <article key={era.id} className="crow" data-era={era.id} ref={jumpState.register(era.id)}>
              <div className="c-era">
                <div className="c-era-name">
                  <h3>{era.name}</h3>
                  <small>{era.dates}</small>
                </div>
                {emp.length > 0 && (
                  <div className="c-emp">
                    {emp.map((m, i) => (
                      <span key={m.id}>{i > 0 && ' → '}<PeekChip kind="empire" id={m.id} to={`/empire/${m.id}`}>{m.name}</PeekChip></span>
                    ))}
                  </div>
                )}
              </div>
              {COLS.map((c) => {
                const list = (d[c.key] || []).map(entry);
                return (
                  <div key={c.key} className={'c-col' + (list.length ? '' : ' empty')}>
                    <div className="eyebrow c-lab">{c.label}</div>
                    {list.length ? (
                      <div className="c-chips">
                        {list.map((x) => {
                          const kind = c.kind === 'w' && LETTER_CATS.has(x.b?.category) ? 'l' : c.kind;
                          const to = `/book/${x.id}`;
                          return (
                            <PeekLink key={x.label} bookId={x.id} label={x.label} to={to} className={`cchip ${kind}`}>
                              {x.label}
                              {withNotes.has(x.id) && <span className="dot" aria-label="has notes" />}
                            </PeekLink>
                          );
                        })}
                      </div>
                    ) : <span className="c-none">—</span>}
                  </div>
                );
              })}
              <details className="c-more">
                <summary>Period summary &amp; key people</summary>
                <EraMore era={era} people={people} />
              </details>
            </article>
          );
        })}
      </div>
      <p className="muted" style={{ fontSize: 'calc(13px * var(--ts))', margin: '14px 0 0' }}>
        Dates are approximate, and a few books (Job, Joel, Obadiah, some letters) have debated dates. Tap a book to open it, or press and hold for a quick summary.
      </p>
    </section>
  );
}
