import { Link, useParams } from 'react-router-dom';
import { SECTIONS } from '../data/sections.js';
import { EVENTS, denomById } from '../data/church/denominations.js';

// Church History: Turning Points (placeholder until its pages are built). Compare is pages/Compare.jsx.
// Denominations and Key People have their own pages (Denominations.jsx, KeyPeople.jsx).
const SECTION = SECTIONS.find((s) => s.id === 'history');

const PAGES = {
  'turning-points': {
    tag: 'The moments where the church divided or changed course.',
    events: EVENTS,
    soon: 'Each turning point will get its own page: what happened, who was there, and which churches it led to.',
  },
};

export default function ChurchHistory() {
  const { id } = useParams();
  const key = PAGES[id] ? id : 'turning-points';
  const page = PAGES[key];
  const meta = SECTION.pages.find((p) => p.to === `/history/${key}`) || SECTION.pages[0];

  return (
    <main className="wrap page stack-lg ch-page">
      <div>
        <div className="crumbs2">{SECTION.name} › <b>{meta.label}</b></div>
        <h1 className="h1-sm">{meta.label}</h1>
        <p className="tagline" style={{ marginTop: 6 }}>{page.tag}</p>
      </div>

      {page.events && (
        <ol className="tp-list">
          {page.events.map((e) => (
            <li key={e.year}>
              <span className="tp-dia" aria-hidden="true" />
              <div>
                <div className="tp-h"><b>{e.name}</b><span>AD {e.year}</span></div>
                <p>{e.text}</p>
                <p className="tp-led">Led to: {e.led.map((d, i) => <span key={d}>{i > 0 && ', '}<Link to={`/history/denominations?d=${d}`}>{denomById[d].name}</Link></span>)}</p>
              </div>
            </li>
          ))}
        </ol>
      )}


      <div className="soon-card">
        <span className="side-soon">Coming soon</span>
        <p>{page.soon}</p>
        {page.bullets && <ul>{page.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
      </div>

      <nav className="ch-more" aria-label="Church History pages">
        {SECTION.pages.filter((p) => p.to !== meta.to).map((p) => <Link key={p.id} to={p.to} className="pill">{p.label} ›</Link>)}
      </nav>
    </main>
  );
}
