import { Link } from 'react-router-dom';
import { APOCRYPHA, APOCRYPHA_LATER } from '../data/apocrypha.js';
import { useLevel } from '../store/prefs.js';

// Bible Summaries › Apocrypha (/apocrypha): what the Apocrypha is, the written books (same book pages as the 66),
// and the books still to come. The two cards shown on an apocryphal book's page (ApocryphaCards) also live here.

export default function Apocrypha() {
  return (
    <main className="wrap page ap-page">
      <div className="crumbs2">Bible Summaries › <b>Apocrypha</b></div>
      <h1 className="h1-sm">The Apocrypha</h1>
      <p className="tagline dd-tag">Jewish books from between the Old and New Testaments, read in Catholic and Orthodox Bibles but left out of most Protestant ones.</p>
      <div className="ap-intro">
        <p>These books were written roughly 300 BC to AD 100 and were kept in the Greek Old Testament (the Septuagint) used by the early church, but not in the Hebrew Bible. Catholics call most of them <b>deuterocanonical</b> (“second canon”) and include them in Scripture; Orthodox churches include them and a few more; Jews and most Protestants do not. Each book here notes what is historical and why most Bibles leave it out.</p>
      </div>
      <div className="ap-grid">
        {APOCRYPHA.map((b) => (
          <Link key={b.id} to={`/book/${b.id}`} className="ap-card">
            <span className="ap-tag">Apocrypha · {b.genre}</span>
            <b>{b.name}</b>
            <small>{b.years} · {b.chapters} chapters</small>
            <span className="ap-line">{b.tagline}</span>
            <span className="ap-go">Read the summary ›</span>
          </Link>
        ))}
      </div>
      <h2 className="ap-h2">Other books of the Apocrypha</h2>
      <ul className="ap-later">
        {APOCRYPHA_LATER.map(([n, t]) => <li key={n}><b>{n}</b><span>{t}</span><em>Not written yet</em></li>)}
      </ul>
    </main>
  );
}

// The two cards on an apocryphal book's page, under the summary.
export function ApocryphaCards({ book }) {
  const level = useLevel();
  const simple = level === 'simple';
  const h = book.history, c = book.canon;
  if (!h || !c) return null;
  return (
    <>
      <section className="card ap-hist" aria-label="Is it historical?">
        <div className="eyebrow gold">Is it historical?</div>
        <p className="ap-p">{h.intro}</p>
        <div className="ap-cols">
          <div>
            <div className="ap-k ok"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>Confirmed by other sources</div>
            <ul className="ap-list">{h.confirmed.map(([k, t]) => <li key={k}><b>{k}</b>{!simple && <span>{t}</span>}</li>)}</ul>
          </div>
          <div>
            <div className="ap-k q"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M12 8v5M12 16.5v.5" /><circle cx="12" cy="12" r="9" /></svg>Questioned by historians</div>
            <ul className="ap-list">{h.questioned.map(([k, t]) => <li key={k}><b>{k}</b>{!simple && <span>{t}</span>}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="card ap-canon" aria-label="Why it isn't in most Bibles">
        <div className="eyebrow gold">Why it isn’t in most Bibles</div>
        <p className="ap-p">{c.s}</p>
        <div className="ap-who">
          {c.who.map(([who, st, note]) => (
            <div key={who} className={st === 'Included' ? 'in' : 'out'}>
              <b>{who}</b><span className="ap-st">{st}</span>{!simple && <small>{note}</small>}
            </div>
          ))}
        </div>
        {!simple && (
          <>
            <div className="ap-k">Why Jews and most Protestants leave it out</div>
            <ul className="ap-list">{c.reasons.map(([k, t]) => <li key={k}><b>{k}</b><span>{t}</span></li>)}</ul>
          </>
        )}
        {level === 'detailed' && <><div className="ap-k">Why Catholics and Orthodox include it</div><p className="ap-p">{c.other}</p></>}
        {!simple && <p className="ap-p ap-value">{c.value}</p>}
      </section>
    </>
  );
}
