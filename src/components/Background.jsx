import { Link } from 'react-router-dom';
import { getBook, getCharacter } from '../data/index.js';
import { KeyVerse } from './LevelToggle.jsx';
import { PersonLink } from './BookPeek.jsx';
import Ref from './Ref.jsx';

// Shared pieces for the background pages (nations and churches) at three reading levels.

// Text with blank-line paragraph breaks.
export function Paras({ text, className = 'ink-2' }) {
  return (text || '').split(/\n\n+/).map((p, i) => <p key={i} className={className} style={{ margin: 0, maxWidth: 720 }}>{p}</p>);
}

export function RefLink({ r }) {
  if (!r) return null;
  return r.book && getBook(r.book)
    ? <Ref to={`/book/${r.book}/${r.ch}`} arrow style={{ textDecoration: 'none', fontWeight: 600, fontSize: 'calc(14px * var(--ts))' }}>{r.label}</Ref>
    : <span className="muted" style={{ fontSize: 'calc(14px * var(--ts))' }}>{r.label}</span>;
}

// A section that can be opened and closed (Detailed level).
export function Fold({ title, count, children, open = false }) {
  return (
    <details className="emp-fold" open={open}>
      <summary><span className="h2" style={{ fontSize: 'calc(22px * var(--ts))' }}>{title}</span>{count != null && <span className="muted emp-fold-n">{count}</span>}</summary>
      <div className="emp-fold-body">{children}</div>
    </details>
  );
}

export function Section({ title, children }) {
  return (
    <section className="stack">
      <h2 className="h2" style={{ fontSize: 'calc(26px * var(--ts))' }}>{title}</h2>
      {children}
    </section>
  );
}

export function Facts({ facts }) {
  return (
    <dl className="factgrid emp-facts">
      {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
    </dl>
  );
}

export function Moments({ title = 'Key moments', moments, long = false }) {
  if (!moments?.length) return null;
  return (
    <section className="stack" style={{ gap: 14 }}>
      <h2 className="h2" style={{ fontSize: 'calc(26px * var(--ts))' }}>{title}</h2>
      <ol className={'ctl' + (long ? ' ctl-long' : '')}>
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
  );
}

// A titled list: [{ title, text, nation? }]
export function ItemList({ items, linkTo }) {
  return (
    <ul className="emp-list">
      {items.map((a) => (
        <li key={a.title}>
          {linkTo && linkTo(a) ? <Link to={linkTo(a)} style={{ fontWeight: 700, textDecoration: 'none' }}>{a.title} ›</Link> : <b>{a.title}.</b>}{' '}
          <span className="ink-2">{a.text}</span>
        </li>
      ))}
    </ul>
  );
}

export function Questions({ items, open = true }) {
  if (!items?.length) return null;
  return (
    <Fold title="Common questions" count={items.length} open={open}>
      <div className="stack" style={{ gap: 14 }}>
        {items.map((q) => (
          <div key={q.q} className="stack" style={{ gap: 4 }}>
            <div style={{ fontWeight: 600 }}>{q.q}</div>
            <p className="ink-2" style={{ margin: 0 }}>{q.a}</p>
          </div>
        ))}
      </div>
    </Fold>
  );
}

export function KeyVerses({ verses }) {
  if (!verses?.length) return null;
  return (
    <Section title="Key verses">
      {verses.map((v) => <KeyVerse key={v.ref} verse={v} />)}
    </Section>
  );
}

export function Reading({ items }) {
  if (!items?.length) return null;
  return (
    <Section title="Read the story in order">
      <ol className="emp-reading">
        {items.map((r) => (
          <li key={r.label}>
            <Ref to={`/book/${r.book}/${r.ch}`}>{r.label}</Ref>
            {r.note && <span className="muted"> · {r.note}</span>}
          </li>
        ))}
      </ol>
    </Section>
  );
}

// Sidebar card: [{ name, note, person? }]
export function PeopleCard({ title = 'People you\'ll meet', people }) {
  if (!people?.length) return null;
  return (
    <div className="card">
      <div className="serif" style={{ fontSize: 'calc(20px * var(--ts))', fontWeight: 600 }}>{title}</div>
      <div className="stack" style={{ gap: 10, fontSize: 'calc(14px * var(--ts))' }}>
        {people.map((r) => {
          const p = r.person && getCharacter(r.person);
          return (
            <div key={r.name}>
              {p
                ? <PersonLink personId={p.id} to={`/people/${p.id}`} style={{ textDecoration: 'none', fontWeight: 600 }}>{r.name} ›</PersonLink>
                : <span style={{ fontWeight: 600 }}>{r.name}</span>}
              {r.dates && <span className="muted"> · {r.dates}</span>}
              <div className="ink-2">{r.note}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
