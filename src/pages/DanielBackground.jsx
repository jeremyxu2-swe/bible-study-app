import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BG_SECTIONS, BG_SOURCES } from '../data/danielBackground.js';
import { empireById } from '../data/empires.js';
import { PeekChip } from '../components/BookPeek.jsx';
import LevelToggle from '../components/LevelToggle.jsx';
import NoteEditor from '../components/NoteEditor.jsx';
import Ref from '../components/Ref.jsx';
import { noteKey } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';

// Daniel's Prophecies › Background: the wars behind Daniel (/daniel/background).
// The empires and wars Daniel's visions describe, in order, as a numbered timeline of sections.
//   Simple: one line per section. Moderate: the key events. Detailed: adds the extra details under each.
//   Each section links to its Geopolitical Timeline period, the Daniel chapters it explains and, for the revolt,
//   1 Maccabees (Apocrypha). A sticky bar of years jumps between sections.

export default function DanielBackground() {
  const level = useLevel();
  const listRef = useRef(null);
  const [cur, setCur] = useState(BG_SECTIONS[0].id);
  useEffect(() => {
    const els = listRef.current?.querySelectorAll('[data-sec]') || [];
    const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) setCur(en.target.dataset.sec); }), { rootMargin: '-90px 0px -70% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  // Arriving with a section in the address (from a period page): scroll to it.
  const { hash } = useLocation();
  useEffect(() => { if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 50); }, [hash]);
  const jump = (e, id) => { e.preventDefault(); document.getElementById('bg-' + id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <main className="wrap page db-page">
      <div className="dd-grid">
        <div className="db-main" ref={listRef}>
          <div className="crumbs2">Bible Summaries › <Link to="/daniel">Daniel’s Prophecies</Link> › <b>Background</b></div>
          <h1 className="h1-sm">The wars behind Daniel</h1>
          <p className="tagline dd-tag">The empires and wars Daniel’s visions describe, from the fall of Babylon to Rome, so the prophecies make sense when you read them.</p>
          <div className="db-intro">
            <p>Daniel lived from about 605 to 536 BC, but his visions in chapters 2, 7, 8 and 11 reach centuries further: through Persia, Alexander the Great and the wars of the kingdoms that followed him, to Antiochus IV and the Maccabean revolt. Each section below says which verses it explains.</p>
            <div className="db-links">
              <Link to="/empire/persia">Geopolitical Timeline ›</Link>
              <Link to="/book/1maccabees">1 Maccabees (Apocrypha) ›</Link>
            </div>
          </div>
          <div className="dd-tools db-tools">
            <LevelToggle small />
            <nav className="db-bar" aria-label="Sections">
              {BG_SECTIONS.map((s, i) => (
                <a key={s.id} href={'#bg-' + s.id} onClick={(e) => jump(e, s.id)} className={cur === s.id ? 'on' : ''}><i>{i + 1}</i>{s.years.split('–')[0]}</a>
              ))}
            </nav>
          </div>

          <ol className="db-list">
            {BG_SECTIONS.map((s, i) => {
              const p = empireById[s.period];
              const also = s.also && empireById[s.also];
              return (
                <li key={s.id} id={'bg-' + s.id} data-sec={s.id} className="db-sec">
                  <div className="db-num" aria-hidden="true">{i + 1}</div>
                  <div className="db-body">
                    <div className="db-yrs">{s.years}</div>
                    <h2>{s.title}</h2>
                    {level === 'simple'
                      ? <p className="db-lead">{s.lead}</p>
                      : (
                        <ul className="db-points">
                          {s.points.map(([h, t, sub]) => (
                            <li key={h}>
                              <b>{h}.</b> {t}
                              {level === 'detailed' && sub?.length > 0 && <ul className="db-sub">{sub.map((x) => <li key={x}>{x}</li>)}</ul>}
                            </li>
                          ))}
                        </ul>
                      )}
                    <div className="db-refs">
                      <span className="db-lab">In Daniel</span>
                      {s.dan.map(([l, ch]) => <Ref key={l} to={`/daniel?ch=${ch}`} className="dp-chip">{l}</Ref>)}
                      {s.mac && <><span className="db-lab">In 1 Maccabees</span>{s.mac.map(([l, ch]) => <Link key={l} to={`/book/1maccabees/${ch}`} className="dp-chip apoc">{l}</Link>)}</>}
                    </div>
                    <div className="db-refs">
                      <span className="db-lab">Period</span>
                      {[p, also].filter(Boolean).map((e) => <PeekChip key={e.id} kind="empire" id={e.id} className="chip empire-chip" to={`/empire/${e.id}`}>{e.name} ›</PeekChip>)}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <p className="dp-foot">{BG_SOURCES} Bible quotations are from the ESV.</p>
        </div>

        <aside className="dd-side-col">
          <div className="dp-box">
            <h3>Read next</h3>
            <div className="db-next">
              <Link to="/daniel?ch=11">Daniel 11, verse by verse ›</Link>
              <Link to="/daniel?ch=8">Daniel 8: the ram and the goat ›</Link>
              <Link to="/daniel/written">When was Daniel written? ›</Link>
              <Link to="/book/1maccabees">1 Maccabees: the revolt in full ›</Link>
            </div>
          </div>
          <NoteEditor noteKey={noteKey('daniel', 'background')} title="My notes on the background" />
        </aside>
      </div>
    </main>
  );
}
