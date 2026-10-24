import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getBook, bookAtLevel, getCharacter } from '../data/index.js';
import Ref from './Ref.jsx';
import { kingById, kingName, reignSpan, reignYears, VERDICTS, KINGDOM_NAME } from '../data/kings.js';
import { prophetById, prophetByName, prophetYears, AUDIENCES, kingsOfProphet } from '../data/prophets.js';
import { peekContent } from './peekContent.js';
import { pageZoom } from '../utils/zoom.js';

// Quick preview: press and hold a chip on a phone (or hover on a computer) to see a short summary in a
// floating card, with buttons to open the page or jump to its notes. One shared card for every kind:
// books (bookId), Bible people (personId), kings (kingId), prophets (prophetId), and (job #19) every other chip
// through { kind, id }: nations, world-power periods, churches, denominations, families, events, church-history people.
// The card always stays on screen: below the chip if it fits, otherwise above, otherwise pinned and scrollable.

// ---- tiny store -------------------------------------------------------------
let state = null; // { bookId | personId | kingId | prophetId, label, to, rect, el, touch }
const listeners = new Set();
const emit = () => listeners.forEach((l) => l());
function openPeek(next) {
  if (state?.el && state.el !== next.el) state.el.classList.remove('peek-src');
  next.el?.classList.add('peek-src');
  state = next;
  emit();
}
export function closePeek() {
  state?.el?.classList.remove('peek-src');
  state = null;
  emit();
}
const usePeekState = () => useSyncExternalStore((l) => { listeners.add(l); return () => listeners.delete(l); }, () => state);

const canHover = () => typeof window !== 'undefined' && window.matchMedia?.('(hover: hover) and (pointer: fine)').matches;
const HOLD_MS = 450;

// Props to spread on a link or button: <Link {...usePeek({ bookId, label, to })} />, { personId, to }, { kingId, onOpen } or { prophetId, onOpen }.
// onOpen: what the card's main button does instead of navigating (e.g. select the king on the same page).
// mouseHold: on a computer, open by holding the mouse button down (instead of hovering), for places
// that already show a hover tooltip, like the Timeline's book bars.
export function usePeek({ bookId, personId, kingId, prophetId, kind, id, label, to, onOpen, mouseHold = false }) {
  const who = { bookId, personId, kingId, prophetId, kind, id, label, to, onOpen };
  const timer = useRef(null);
  const start = useRef(null);
  const fired = useRef(false);
  const hoverClose = useRef(null);
  const clear = () => { clearTimeout(timer.current); timer.current = null; };

  return {
    onPointerDown: (e) => {
      const mouse = e.pointerType === 'mouse';
      if (mouse && (!mouseHold || e.button !== 0)) return;
      fired.current = false;
      start.current = { x: e.clientX, y: e.clientY };
      const el = e.currentTarget;
      clear();
      timer.current = setTimeout(() => {
        fired.current = true;
        try { navigator.vibrate?.(10); } catch { /* ignore */ }
        openPeek({ ...who, rect: el.getBoundingClientRect(), el, touch: !mouse, pinned: mouse });
      }, HOLD_MS);
    },
    onPointerMove: (e) => {
      if (!timer.current || !start.current) return;
      if (Math.abs(e.clientX - start.current.x) > 10 || Math.abs(e.clientY - start.current.y) > 10) clear();
    },
    onPointerUp: clear,
    onPointerCancel: clear,
    onContextMenu: (e) => { if (fired.current || timer.current) e.preventDefault(); },
    onClickCapture: (e) => { if (fired.current) { e.preventDefault(); e.stopPropagation(); fired.current = false; } },
    onDragStart: (e) => { if (timer.current || fired.current) e.preventDefault(); },
    onMouseEnter: (e) => {
      if (!canHover() || mouseHold) return;
      const el = e.currentTarget;
      clearTimeout(hoverClose.current);
      clear();
      timer.current = setTimeout(() => openPeek({ ...who, rect: el.getBoundingClientRect(), el, touch: false }), 550);
    },
    onMouseLeave: () => {
      if (!canHover()) return;
      if (mouseHold) { if (!fired.current) clear(); return; }
      clear();
      if (state && !state.touch) scheduleHoverClose();
    },
  };
}

// A Link that shows the book preview on press-and-hold / hover.
export function PeekLink({ bookId, label, to, children, mouseHold, onMouseEnter, onMouseLeave, ...rest }) {
  const peek = usePeek({ bookId, label, to, mouseHold });
  // Let callers keep their own hover handlers (e.g. the Timeline's date tooltip) alongside the peek's.
  const both = (a, b) => (a && b ? (e) => { a(e); b(e); } : a || b);
  return <Link to={to} draggable={false} {...rest} {...peek} onMouseEnter={both(peek.onMouseEnter, onMouseEnter)} onMouseLeave={both(peek.onMouseLeave, onMouseLeave)}>{children}</Link>;
}

// A Link to a person that shows their quick summary on press-and-hold / hover.
export function PersonLink({ personId, to, children, ...rest }) {
  const peek = usePeek({ personId, to: to || `/people/${personId}` });
  return <Link to={to || `/people/${personId}`} {...rest} {...peek}>{children}</Link>;
}

// Any other chip (job #19): <PeekChip kind="nation" id="moabites" to="/nation/moabites" className="nation-tag">…</PeekChip>.
// With `to` it renders a Link (a tap still navigates); without, a button (onClick as usual; onOpen = the card's main button).
export function PeekChip({ kind, id, to, onOpen, mouseHold, children, onClick, ...rest }) {
  const peek = usePeek({ kind, id, to, onOpen: onOpen || (to ? undefined : onClick), mouseHold });
  return to
    ? <Link to={to} draggable={false} {...rest} {...peek}>{children}</Link>
    : <button type="button" onClick={onClick} {...rest} {...peek}>{children}</button>;
}

let closeTimer = null;
function scheduleHoverClose() { clearTimeout(closeTimer); closeTimer = setTimeout(() => { if (state && !state.touch && !state.pinned && !state.hoverCard) closePeek(); }, 220); }

// ---- the card -------------------------------------------------------------
export default function BookPeek() {
  const s = usePeekState();
  const nav = useNavigate();
  const cardRef = useRef(null);
  const [pos, setPos] = useState(null);

  // Keep the whole card on screen (job #19): measure the visible viewport (iOS visualViewport), the
  // phone's bottom bar (if shown) and the safe areas; put the card below the chip, flip it above when
  // there is no room, clamp it, and let long content scroll inside it. Re-measure when it resizes.
  useLayoutEffect(() => {
    if (!s || !cardRef.current) { setPos(null); return undefined; }
    const place = () => {
      const el = cardRef.current;
      if (!el) return;
      // Work in screen pixels, then convert to the page's CSS pixels at the end (job #21: 80% zoom on the computer).
      const z = pageZoom();
      const vv = window.visualViewport;
      const vh = vv ? vv.height : window.innerHeight;
      const vw = vv ? vv.width : window.innerWidth;
      const offTop = vv ? vv.offsetTop : 0;
      const gap = 10;
      const safe = safeAreas();
      const topSafe = 12 + safe.top;
      const nav = document.querySelector('.bottomnav');
      const navR = nav && getComputedStyle(nav).display !== 'none' && !nav.classList.contains('bn-hidden') ? nav.getBoundingClientRect() : null;
      const bottomSafe = Math.max(12 + safe.bottom, navR && navR.top < vh ? vh - navR.top + 10 : 0);
      const room = Math.max(160, vh - topSafe - bottomSafe);
      // Natural height of the content (without a previous max-height squeezing it).
      const prevMax = el.style.maxHeight;
      el.style.maxHeight = 'none';
      const natural = (el.scrollHeight + 2) * z;
      el.style.maxHeight = prevMax;
      const h = Math.min(natural, room);
      const r = s.el?.isConnected ? s.el.getBoundingClientRect() : s.rect;
      const below = vh - bottomSafe - (r.bottom + gap);
      const above = r.top - gap - topSafe;
      let top;
      if (h <= below) top = r.bottom + gap;                 // fits below the chip
      else if (h <= above) top = r.top - gap - h;           // flip above
      else top = below >= above ? vh - bottomSafe - h : topSafe; // neither: use the larger side, clamped
      top = Math.min(Math.max(topSafe, top), vh - bottomSafe - h) + offTop;
      const cw = s.touch ? vw - 28 : el.offsetWidth * z;
      const left = s.touch ? 14 : Math.min(Math.max(12, r.left), vw - cw - 12);
      const c = { top: top / z, left: left / z, width: s.touch ? (vw - 28) / z : undefined, maxHeight: h / z };
      setPos((p) => (p && p.top === c.top && p.left === c.left && p.maxHeight === c.maxHeight ? p : c));
    };
    place();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => place()) : null;
    ro?.observe(cardRef.current);
    window.addEventListener('resize', place);
    window.visualViewport?.addEventListener('resize', place);
    return () => { ro?.disconnect(); window.removeEventListener('resize', place); window.visualViewport?.removeEventListener('resize', place); };
  }, [s]);

  useEffect(() => {
    if (!s) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') closePeek(); };
    const onScroll = () => { if (!s.touch && !s.pinned) closePeek(); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('scroll', onScroll); };
  }, [s]);

  // Close when the page changes.
  const loc = useLocation();
  useEffect(() => { closePeek(); }, [loc.pathname, loc.search]);

  if (!s) return null;
  const go = (path, opts) => { closePeek(); nav(path, opts); };
  const king = s.kingId && kingById[s.kingId];
  const prophet = s.prophetId && prophetById[s.prophetId];
  const person = !king && !prophet && s.personId && getCharacter(s.personId);
  const book = !king && !prophet && !person && getBook(s.bookId);
  const gen = !king && !prophet && !person && !book && s.kind ? peekContent(s.kind, s.id) : null;
  if (!king && !prophet && !person && !book && !gen) return null;
  const sum = book && bookAtLevel(book, 'moderate');
  const label = s.label || (king ? kingName(king) : prophet ? prophet.name : person ? person.name : gen ? gen.title : book.name);
  const open = () => { closePeek(); s.onOpen?.(); };

  return (
    <>
      {(s.touch || s.pinned) && <div className={'peek-dim' + (s.pinned ? ' clear' : '')} onPointerDown={(e) => { e.preventDefault(); closePeek(); }} aria-hidden="true" />}
      <div
        ref={cardRef}
        className={'peek-card' + (s.touch ? ' touch' : '')}
        role="dialog"
        aria-label={`${label} preview`}
        style={pos ? { top: pos.top, left: pos.left, width: pos.width, maxHeight: pos.maxHeight } : { top: -9999, left: 0, visibility: 'hidden' }}
        onMouseEnter={() => { if (state) state.hoverCard = true; clearTimeout(closeTimer); }}
        onMouseLeave={() => { if (state) state.hoverCard = false; scheduleHoverClose(); }}
      >
        <h3>{label}</h3>
        {gen ? <GenericBody g={gen} s={s} open={open} go={go} /> : king ? <KingBody k={king} s={s} open={open} go={go} /> : prophet ? <ProphetBody p={prophet} s={s} open={open} go={go} /> : person ? <PersonBody person={person} go={go} /> : (<>
        <div className="peek-meta">{[book.years, `${book.chapters} ${book.chapters === 1 ? 'chapter' : 'chapters'}`, book.category].filter(Boolean).join(' · ')}</div>
        <p className="peek-sum">{sum.text}</p>
        {book.sections.length > 1 && (
          <div className="peek-secs">
            {book.sections.map((sec, i) => (
              <Link key={i} to={`/book/${book.id}?s=${i}`} onClick={(e) => { e.preventDefault(); go(`/book/${book.id}?s=${i}`); }}>
                {sec.title} · {sec.start === sec.end ? sec.start : `${sec.start}–${sec.end}`}
              </Link>
            ))}
          </div>
        )}
        <div className="peek-acts">
          <button type="button" className="pri" onClick={() => go(s.to || `/book/${book.id}`)}>Open {book.name} ›</button>
          <button type="button" onClick={() => go(`/book/${book.id}`, { state: { focusNotes: true } })}>✎ Add note</button>
        </div>
        </>)}
        {(s.touch || s.pinned) && <div className="peek-hint">{s.touch ? 'Tap' : 'Click'} outside to close</div>}
      </div>
    </>
  );
}

// Card body for a person: what the name means, a short bio, key chapters, and buttons.
function PersonBody({ person, go }) {
  const seen = new Set();
  const steps = (person.story || []).filter((st) => !seen.has(st.ref) && seen.add(st.ref)).slice(0, 4);
  const first = person.name.split(' ')[0];
  return (
    <>
      <div className="peek-meta">{[person.when, person.hometown, person.tribe].filter(Boolean).join(' · ')}</div>
      {person.meaning && <div className="peek-means">Name means <span>“{person.meaning}”</span></div>}
      <p className="peek-sum">{person.bio}</p>
      {steps.length > 0 && (
        <div className="peek-secs">
          {steps.map((st) => (
            <Ref key={st.ref} to={`/book/${st.book}/${st.ch}`} onClick={(e) => { e.preventDefault(); go(`/book/${st.book}/${st.ch}`); }}>{st.ref}</Ref>
          ))}
        </div>
      )}
      <div className="peek-acts">
        <button type="button" className="pri" onClick={() => go(`/people/${person.id}`)}>Open {first} ›</button>
        <button type="button" onClick={() => go(`/people/${person.id}`, { state: { focusNotes: true } })}>✎ Add note</button>
      </div>
    </>
  );
}

// Card body for a king: kingdom and reign, the Bible's verdict, a one-line note, and his prophets.
function KingBody({ k, s, open, go }) {
  const pros = k.prophets.map((n) => ({ n, p: prophetByName(n) }));
  return (
    <>
      <div className="peek-meta">{KINGDOM_NAME[k.kingdom]} · {reignSpan(k)} BC · {reignYears(k)}</div>
      <div className={'peek-verdict v-' + k.verdict}><span className="vpill">{VERDICTS[k.verdict].label}</span><q>{k.quote.replace(/^“|”$/g, '')}</q><em>{k.ref}</em></div>
      <p className="peek-sum">{k.note}</p>
      {pros.length > 0 && (<><div className="peek-k">Prophets who spoke to him</div><div className="peek-chips">{pros.map(({ n, p }) => <span key={n} className={p ? 'aud-' + p.audience : ''}><i />{n}</span>)}</div></>)}
      <div className="peek-acts">
        <button type="button" className="pri" onClick={() => (s.onOpen ? open() : go(`/kings?k=${k.id}`))}>Full details ›</button>
        <button type="button" onClick={() => go(`/kings?k=${k.id}`, { state: { focusNotes: true } })}>✎ Add note</button>
      </div>
    </>
  );
}

// Card body for a prophet: who he spoke to, dates, book, his message and the kings he faced.
function ProphetBody({ p, s, open, go }) {
  const her = p.id === 'huldah';
  const kings = kingsOfProphet(p.id).map((id) => kingById[id]);
  return (
    <>
      <div className="peek-meta"><span className={'peek-aud aud-' + p.audience}>{AUDIENCES[p.audience].label}</span> {prophetYears(p)}{p.unsure ? ' (debated)' : ''} · {p.book ? 'a book of the Bible bears ' + (her ? 'her' : 'his') + ' name' : 'no book of ' + (her ? 'her' : 'his') + ' own'}</div>
      <p className="peek-sum">{p.message}</p>
      {kings.length > 0 ? (<><div className="peek-k">Kings {her ? 'she' : 'he'} spoke to</div><div className="peek-chips">{kings.map((k) => <span key={k.id} className={'v-' + k.verdict}><i />{kingName(k)}</span>)}</div></>)
        : <p className="peek-sum muted">After the exile there were no kings.</p>}
      <div className="peek-meta">{p.ref}</div>
      <div className="peek-acts">
        {s.onOpen && <button type="button" className="pri" onClick={open}>Show on the ladder ›</button>}
        {!s.onOpen && <button type="button" className="pri" onClick={() => go(`/kings?p=${p.id}`)}>Open Kings &amp; Prophets ›</button>}
      </div>
    </>
  );
}

// Card body for every other chip kind (nations, periods, churches, denominations, families, events,
// church-history people): meta line, a short summary, a few facts or names, and an Open button.
function GenericBody({ g, s, open, go }) {
  return (
    <>
      {g.meta && <div className="peek-meta">{g.meta}</div>}
      {g.text && <p className="peek-sum">{g.text}</p>}
      {g.facts?.length > 0 && (
        <dl className="peek-facts">
          {g.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
      )}
      {g.list?.length > 0 && (<><div className="peek-k">{g.listLabel || 'Includes'}</div><div className="peek-chips">{g.list.map((n) => <span key={n}>{n}</span>)}{g.more > 0 && <span>+{g.more} more</span>}</div></>)}
      <div className="peek-acts">
        <button type="button" className="pri" onClick={() => (s.onOpen ? open() : go(s.to || g.to))}>{g.openLabel || 'Open'} ›</button>
      </div>
    </>
  );
}

// The phone's safe-area insets (notch, home indicator), read once from CSS env().
let SAFE = null;
function safeAreas() {
  if (SAFE) return SAFE;
  try {
    const d = document.createElement('div');
    d.style.cssText = 'position:fixed;visibility:hidden;padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)';
    document.body.appendChild(d);
    const cs = getComputedStyle(d);
    SAFE = { top: parseFloat(cs.paddingTop) || 0, bottom: parseFloat(cs.paddingBottom) || 0 };
    d.remove();
  } catch { SAFE = { top: 0, bottom: 0 }; }
  return SAFE;
}
