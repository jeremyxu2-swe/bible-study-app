import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { SYSTEMS, SYSTEM_IDS } from '../data/theologySystems.js';
import { VIEWS, TOPICS, ARGS, REPLY, WHY } from '../data/theologyCompare.js';
import LevelToggle from '../components/LevelToggle.jsx';
import NoteEditor from '../components/NoteEditor.jsx';
import Ref from '../components/Ref.jsx';
import { bibleRefTo } from '../utils/bibleRef.js';
import { noteKey } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';

// Theology › Dispensational vs Covenant › one system in depth (/theology/compare/:system;
// system = dispensational | covenant). Same layout and reading-level rules as the end-times deep dives
// (EndTimesView.jsx): .et on the root, so Simple hides .et-nos / .et-m / .et-d, Moderate hides .et-d.
// Sections: In short · Building blocks · The case for it · Supporting passages · Questions · Varieties ·
// History · Living it out · End times. Side: where it stands on each comparison topic, links and notes.

const SECS = [['short', 'In short'], ['blocks', 'Building blocks'], ['case', 'The case for it'], ['passages', 'Supporting passages'], ['qa', 'Questions'], ['varieties', 'Varieties'], ['history', 'History'], ['life', 'Living it out'], ['end', 'End times']];

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

export default function TheologySystem() {
  const { system } = useParams();
  const level = useLevel();
  const lv = level === 'simple' ? 's' : 'm';
  const [cur, setCur] = useState('short');
  const navRef = useRef(null);
  const ok = SYSTEM_IDS.includes(system);

  useEffect(() => {
    if (!ok) return undefined;
    const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) setCur(en.target.id.replace('ed-', '')); }), { rootMargin: '-80px 0px -75% 0px' });
    document.querySelectorAll('.ed-main > section').forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [system, level, ok]);
  useEffect(() => {
    const a = navRef.current?.querySelector('a.on');
    if (a && navRef.current.scrollWidth > navRef.current.clientWidth) navRef.current.scrollTo({ left: a.offsetLeft - 20, behavior: 'smooth' });
  }, [cur]);

  if (!ok) return <Navigate to="/theology/compare" replace />;

  const s = SYSTEMS[system];
  const v = s.v;
  const view = VIEWS[v];
  const otherId = SYSTEM_IDS.find((x) => x !== system);
  const other = SYSTEMS[otherId];
  const go = (e, id) => { e.preventDefault(); document.getElementById('ed-' + id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <main className={`wrap page et ed tsys tsys-${v} lv-${level}`}>
      <div className="crumbs2">Theology › <Link to="/theology/compare">Dispensational vs Covenant</Link> › <b>{s.name}</b></div>

      <nav className="ed-views" aria-label="The two systems">
        {SYSTEM_IDS.map((id) => (
          <Link key={id} to={`/theology/compare/${id}`} className={`tsys-${SYSTEMS[id].v}` + (id === system ? ' on' : '')} aria-current={id === system ? 'page' : undefined}>
            <i aria-hidden="true" />{SYSTEMS[id].name}
          </Link>
        ))}
      </nav>

      <div className="ed-head">
        <span className="ed-eyebrow">A way of reading the whole Bible</span>
        <h1 className="h1-sm ed-h1">{s.name}</h1>
        <p className="tagline ed-tag">{view.idea}</p>
        <div className="et-tools"><LevelToggle small /><span className="muted">Reading level</span></div>
      </div>

      <nav className="et-snav ed-snav" ref={navRef} aria-label="Sections">
        {SECS.map(([id, l]) => (
          <a key={id} href={'#ed-' + id} className={(cur === id ? 'on' : '') + (['qa', 'varieties'].includes(id) ? ' et-nos' : '')} onClick={(e) => go(e, id)}>{l}</a>
        ))}
      </nav>

      <div className="ed-grid">
        <div className="ed-main">
          <section id="ed-short">
            <div className="et-sh"><h2>In short</h2></div>
            <p className="ed-big et-s">{view.idea}</p>
            <p className="ed-big et-nos">{s.lead}</p>
            <div className="ed-two et-nos">
              <div><b>Began</b>{view.began}</div>
              <div><b>Common in</b>{view.common}</div>
            </div>
          </section>

          <section id="ed-blocks">
            <div className="et-sh"><h2>The building blocks</h2><span>How the system is put together</span></div>
            {s.blocks.map((b) => (
              <div key={b.title} className="tsys-block">
                <h3 className="tsys-h3">{b.title}</h3>
                <p className="ed-p et-nos">{b.intro}</p>
                <ol className="tsys-items">
                  {b.items.map((x, j) => (
                    <li key={x.t}>
                      <span className="ed-num" aria-hidden="true">{j + 1}</span>
                      <div><b>{x.t}</b><p>{x.text}</p><span className="et-nos"><Refs refs={x.refs} /></span></div>
                    </li>
                  ))}
                </ol>
                {b.note && <p className="tsys-note">{b.note}</p>}
              </div>
            ))}
          </section>

          <section id="ed-case">
            <div className="et-sh"><h2>The case for it</h2><span>As its own teachers make it</span></div>
            <ol className="ed-case">
              {ARGS[v].map((c, j) => (
                <li key={c.t}>
                  <span className="ed-num" aria-hidden="true">{j + 1}</span>
                  <div><h3>{c.t}</h3><p>{c[lv]}</p><Refs refs={c.refs} /></div>
                </li>
              ))}
            </ol>
            <div className="ed-q tsys-reply et-nos">
              <b className={`tsys-${other.v} tsys-reply-h`}>{REPLY[v].title}</b>
              <p className="ed-p">{REPLY[v][lv]}</p>
              <Link to={`/theology/compare/${otherId}`} className="tsys-other">The case for {other.name.toLowerCase()} →</Link>
            </div>
          </section>

          <section id="ed-passages">
            <div className="et-sh"><h2>Supporting passages</h2><span>How {s.name.toLowerCase()} reads them</span></div>
            <p className="et-sub et-d">Under each passage: how the other side reads it.</p>
            <div className="ed-pass">
              {s.passages.map((p, j) => {
                const to = bibleRefTo(p.ref);
                return (
                  <article key={p.ref} className={'ed-pc' + (j >= 4 ? ' et-nos' : '')}>
                    {to ? <Ref to={to} className="ed-pref">{p.ref}</Ref> : <b className="ed-pref">{p.ref}</b>}
                    <p>{p.read}</p>
                    <p className="ed-alt et-d"><b>{other.name}:</b> {p.alt}</p>
                  </article>
                );
              })}
            </div>
            <p className="ed-more et-s">Switch to Moderate to see all {s.passages.length} passages.</p>
          </section>

          <section id="ed-qa" className="et-nos">
            <div className="et-sh"><h2>Questions others raise</h2><span>And how {s.name.toLowerCase()} answers</span></div>
            <div className="ed-qa">
              {s.qa.map((x) => (
                <div key={x.q} className="ed-q">
                  <p className="ed-qq"><span aria-hidden="true">Q</span>{x.q}</p>
                  <p className="ed-qa-a"><span aria-hidden="true">A</span>{x.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="ed-varieties" className="et-nos">
            <div className="et-sh"><h2>Varieties</h2><span>Not all its holders say the same</span></div>
            <div className="tsys-vars">
              {s.varieties.map((x) => (
                <div key={x.name} className="et-card"><h3>{x.name}</h3><small>{x.who}</small><p>{x.text}</p></div>
              ))}
            </div>
          </section>

          <section id="ed-history">
            <div className="et-sh"><h2>History</h2><span>Where it came from and who has taught it</span></div>
            {s.history.map((h, j) => <p key={j} className={'ed-p' + (j > 0 ? ' et-d' : '')}>{h}</p>)}
            <ul className="ed-people">
              {s.teachers.map((t) => <li key={t.name}><b>{t.name}</b>{t.years && <small>{t.years}</small>}<span className="et-nos">{t.note}</span></li>)}
            </ul>
          </section>

          <section id="ed-life">
            <div className="et-sh"><h2>Living it out</h2><span>Tendencies, not rules</span></div>
            {WHY.map((g) => (
              <div key={g.id} className="tsys-block">
                <h3 className="tsys-h3">{g.title}</h3>
                <div className="ed-life">
                  {g.rows.map((r) => (
                    <div key={r.k} className="et-card"><h3>{r.k}</h3><p>{r[v][lv]}</p><small className="tsys-ex">{r.ex}</small></div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section id="ed-end">
            <div className="et-sh"><h2>The end times</h2></div>
            <p className="ed-p">{s.end.text}</p>
            <div className="tsys-end">
              {s.end.links.map(([id, label]) => <Link key={id} to={`/theology/last-things/${id}`}>{label}: deep dive <span aria-hidden="true">→</span></Link>)}
              <Link to="/theology/last-things">All four views of the end times <span aria-hidden="true">→</span></Link>
            </div>
          </section>
        </div>

        <aside className="ed-side">
          <div className="et-card ed-glance">
            <div className="et-k">Where it stands</div>
            <dl>
              {TOPICS.map((t) => (
                <div key={t.id}><dt><Link to={`/theology/compare?t=${t.id}`}>{t.name}</Link></dt><dd>{t[v].s}</dd></div>
              ))}
            </dl>
          </div>
          <div className="et-card ed-links">
            <Link to="/theology/compare">Compare the two side by side <span aria-hidden="true">→</span></Link>
            <Link to={`/theology/compare/${otherId}`}>{other.name} in depth <span aria-hidden="true">→</span></Link>
          </div>
          <NoteEditor noteKey={noteKey('theology', 'system', system)} title={`My notes on ${s.name.toLowerCase()}`} />
        </aside>
      </div>

      <div className="et-fair"><b>How this page is written.</b> {s.name} is described the way its own teachers describe it. The questions are ones the other side raises, with the answers its holders give. The app doesn’t take a side.</div>
      <p className="et-foot">Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.</p>
    </main>
  );
}
