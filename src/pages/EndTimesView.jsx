import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { V, Q, TL } from '../data/endTimes.js';
import { DEEP } from '../data/endTimesDeep.js';
import { VIEW_IDS, periodName, timelineRows, railStyle } from './EndTimes.jsx';
import LevelToggle from '../components/LevelToggle.jsx';
import NoteEditor from '../components/NoteEditor.jsx';
import Ref from '../components/Ref.jsx';
import { bibleRefTo } from '../utils/bibleRef.js';
import { noteKey } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';

// Theology › Eschatology › one view in depth (/theology/last-things/:view; view = disp | hist | amil | post).
// Sections (sticky buttons): In short · Order of events · The case for it · Supporting passages ·
// Questions and answers · History · Living it out. The side column has the view at a glance (its answers
// to the comparison questions), how its holders read Revelation and the rapture, links and notes.
// Uses the End Times page's .et styles, so its colors, timeline and reading-level rules apply:
//   Simple hides .et-nos (and .et-m / .et-d); Moderate hides .et-d; Detailed shows everything.
// Content: data/endTimes.js (V, TL, Q) plus data/endTimesDeep.js (DEEP).

const SECS = [['short', 'In short'], ['order', 'Order of events'], ['case', 'The case for it'], ['passages', 'Supporting passages'], ['qa', 'Questions'], ['history', 'History'], ['life', 'Living it out']];

function Refs({ refs }) {
  if (!refs?.length) return null;
  return (
    <span className="ed-refs">
      {refs.map((r) => {
        const to = bibleRefTo(r);
        return to ? <Ref key={r} to={to} className="ed-ref">{r}</Ref> : <span key={r} className="ed-ref plain">{r}</span>;
      })}
    </span>
  );
}

export default function EndTimesView() {
  const { view } = useParams();
  const level = useLevel();
  const [cur, setCur] = useState('short');
  const navRef = useRef(null);
  const ok = VIEW_IDS.includes(view);

  useEffect(() => {
    if (!ok) return undefined;
    const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) setCur(en.target.id.replace('ed-', '')); }), { rootMargin: '-80px 0px -75% 0px' });
    document.querySelectorAll('.ed-main > section').forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [view, level, ok]);
  useEffect(() => {
    const a = navRef.current?.querySelector('a.on');
    if (a && navRef.current.scrollWidth > navRef.current.clientWidth) navRef.current.scrollTo({ left: a.offsetLeft - 20, behavior: 'smooth' });
  }, [cur]);

  if (!ok) return <Navigate to="/theology/last-things" replace />;

  const i = VIEW_IDS.indexOf(view);
  const v = V[i];
  const d = DEEP[view];
  const rows = timelineRows(view);
  const prev = V[(i + V.length - 1) % V.length];
  const next = V[(i + 1) % V.length];
  const go = (e, id) => { e.preventDefault(); document.getElementById('ed-' + id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <main className={`wrap page et ed lv-${level}`} style={{ '--c': `var(${v.c})` }}>
      <div className="crumbs2">Theology › <Link to="/theology/last-things">Eschatology</Link> › <b>{v.short}</b></div>

      <nav className="ed-views" aria-label="The four views">
        {V.map((x) => (
          <Link key={x.id} to={`/theology/last-things/${x.id}`} className={x.id === view ? 'on' : ''} aria-current={x.id === view ? 'page' : undefined} style={{ '--c': `var(${x.c})` }}>
            <i aria-hidden="true" />{x.short}
          </Link>
        ))}
      </nav>

      <div className="ed-head">
        <span className="ed-eyebrow">A view of the end times</span>
        <h1 className="h1-sm ed-h1">{v.n}</h1>
        <p className="tagline ed-tag">{TL[view].tag}</p>
        <div className="et-tools"><LevelToggle small /><span className="muted">Reading level</span></div>
      </div>

      <nav className="et-snav ed-snav" ref={navRef} aria-label="Sections">
        {SECS.map(([id, l]) => (
          <a key={id} href={'#ed-' + id} className={(cur === id ? 'on' : '') + (id === 'qa' ? ' et-nos' : '')} onClick={(e) => go(e, id)}>{l}</a>
        ))}
      </nav>

      <div className="ed-grid">
        <div className="ed-main">
          <section id="ed-short">
            <div className="et-sh"><h2>In short</h2></div>
            <p className="ed-big et-s">{v.simple}</p>
            <p className="ed-big et-nos">{d.lead}</p>
            <p className="ed-p et-nos">{v.sum}</p>
            <div className="ed-two et-nos">
              <div><b>Revelation 20</b>{v.rev20}</div>
              <div><b>Israel and the church</b>{v.israel}</div>
            </div>
          </section>

          <section id="ed-order">
            <div className="et-sh"><h2>The order of events</h2><span>From the cross to the new creation</span></div>
            <div className="et-track ed-track" role="img" aria-label={v.short + ': ' + TL[view].segs.map(([k]) => periodName[k]).join(', then ')}>
              <span className="et-segs">{TL[view].segs.map(([k, w, l], j) => <span key={j} className={'et-p ' + k} style={{ flexBasis: `calc(${w}% - 2px)` }}>{l}</span>)}</span>
            </div>
            <ol className="et-steps ed-steps">
              {rows.map((r, j) => (
                <li key={j} className={'et-st' + (r.now ? ' now' : '') + (r.past ? ' past' : '') + (r.k === 'ret' ? ' ret' : '')}>
                  <span className="et-dt">{r.date}</span>
                  <span className="et-rail" aria-hidden="true">
                    <i style={railStyle(r.top, j > 0)} />
                    <b className={r.k && !r.past && !r.now ? 'k-' + r.k : ''} />
                    <i style={railStyle(r.bot, j < rows.length - 1)} />
                  </span>
                  <div className="et-sx">
                    <span className="et-stt">{r.t}</span>
                    {r.k && !r.now && <span className={'et-pill ' + r.k}>{periodName[r.k]}</span>}
                    <span className="et-stn">{r.n}</span>
                    {r.why && <span className="et-stw et-nos"><b>Why here:</b> {r.why}</span>}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="ed-case">
            <div className="et-sh"><h2>The case for it</h2><span>As its own teachers make it</span></div>
            <ol className="ed-case">
              {d.cases.map((c, j) => (
                <li key={c.t}>
                  <span className="ed-num" aria-hidden="true">{j + 1}</span>
                  <div>
                    <h3>{c.t}</h3>
                    <p>{c.text}</p>
                    <Refs refs={c.refs} />
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="ed-passages">
            <div className="et-sh"><h2>Supporting passages</h2><span>How this view reads them</span></div>
            <p className="et-sub et-d">Under each passage: how Christians who hold other views read it.</p>
            <div className="ed-pass">
              {d.passages.map((p, j) => {
                const to = bibleRefTo(p.ref);
                return (
                  <article key={p.ref} className={'ed-pc' + (j >= 4 ? ' et-nos' : '')}>
                    {to ? <Ref to={to} className="ed-pref">{p.ref}</Ref> : <b className="ed-pref">{p.ref}</b>}
                    <p>{p.read}</p>
                    <p className="ed-alt et-d"><b>Other views:</b> {p.alt}</p>
                  </article>
                );
              })}
            </div>
            <p className="ed-more et-s">Switch to Moderate to see all {d.passages.length} passages.</p>
          </section>

          <section id="ed-qa" className="et-nos">
            <div className="et-sh"><h2>Questions others raise</h2><span>And how this view answers</span></div>
            <div className="ed-qa">
              {d.qa.map((x) => (
                <div key={x.q} className="ed-q">
                  <p className="ed-qq"><span aria-hidden="true">Q</span>{x.q}</p>
                  <p className="ed-qa-a"><span aria-hidden="true">A</span>{x.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="ed-history">
            <div className="et-sh"><h2>History</h2><span>Where it came from and who has held it</span></div>
            {d.history.map((h, j) => <p key={j} className={'ed-p' + (j > 0 ? ' et-d' : '')}>{h}</p>)}
            <ul className="ed-people">
              {d.teachers.map((t) => (
                <li key={t.name}><b>{t.name}</b>{t.years && <small>{t.years}</small>}<span className="et-nos">{t.note}</span></li>
              ))}
            </ul>
            <p className="ed-p et-nos ed-where">{v.where}</p>
          </section>

          <section id="ed-life">
            <div className="et-sh"><h2>Living it out</h2><span>How it shapes the Christian life</span></div>
            <div className="ed-life">
              {d.life.map((x) => (
                <div key={x.t} className="et-card"><h3>{x.t}</h3><p>{x.text}</p><Refs refs={x.refs} /></div>
              ))}
            </div>
          </section>
        </div>

        <aside className="ed-side">
          <div className="et-card ed-glance">
            <div className="et-k">At a glance</div>
            <dl>
              {Q.map(([q, a, w]) => (
                <div key={q}><dt>{q}</dt><dd>{a[i]}{w && <span className="et-d ed-why">{w[i]}</span>}</dd></div>
              ))}
              <div><dt>Reading Revelation</dt><dd>{d.lens}</dd></div>
              <div><dt>The rapture</dt><dd>{d.rapture}</dd></div>
            </dl>
          </div>
          <div className="et-card ed-links">
            <Link to={`/theology/last-things?view=${view}`}>Compare all four views <span aria-hidden="true">→</span></Link>
            <Link to="/theology/compare?t=end-times">Dispensational vs Covenant theology <span aria-hidden="true">→</span></Link>
          </div>
          <NoteEditor noteKey={noteKey('theology', 'last-things', view)} title={`My notes on ${v.short.toLowerCase()}`} />
        </aside>
      </div>

      <nav className="ed-pn" aria-label="Other views">
        <Link to={`/theology/last-things/${prev.id}`} style={{ '--c': `var(${prev.c})` }}><small>← Previous view</small><span><i aria-hidden="true" />{prev.short}</span></Link>
        <Link to={`/theology/last-things/${next.id}`} className="r" style={{ '--c': `var(${next.c})` }}><small>Next view →</small><span><i aria-hidden="true" />{next.short}</span></Link>
      </nav>

      <div className="et-fair"><b>How this page is written.</b> This view is described the way its own teachers describe it. The questions are ones other Christians raise, with the answers its holders give. The app doesn’t take a side.</div>
      <p className="et-foot">Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.</p>
    </main>
  );
}
