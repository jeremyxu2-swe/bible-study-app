import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SECS, AGREE, V, Q, P, LENS, RAP, PERIODS, NOW_AT, TL, PAST } from '../data/endTimes.js';
import LevelToggle from '../components/LevelToggle.jsx';
import NoteEditor from '../components/NoteEditor.jsx';
import { noteKey } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';

// Theology › Eschatology. One long page with a sticky row of section buttons:
//   Where Christians agree · The four views on a timeline (tap a bar to follow it; ?view= keeps the choice) · Side by side (table; cards on phones) ·
//   Key passages · Four ways to read Revelation · Rapture timing. Each view is described in its own terms.
// Reading level: Simple shows .et-s and hides .et-m / .et-d / .et-nos; Moderate hides .et-d and .et-s.

export const periodName = Object.fromEntries(PERIODS);
export const VIEW_IDS = ['disp', 'hist', 'amil', 'post'];

// The selected view's timeline rows: the shared past, a "You are here" row, then that view's future.
// top/bot = the period whose thick bar runs through that half of the rail (church age or thousand years).
export function timelineRows(id) {
  const tl = TL[id];
  const mfc = !!tl.millFromCross;
  const past = PAST.map((p, i) => ({
    date: p.date, t: p.t, now: !!p.now, past: i === 0,
    n: (mfc && p.nMill) || ((id === 'amil' || id === 'post') && p.nAmilPost) || p.n,
    k: i === 0 ? null : (mfc && p.inMill ? 'mill' : 'age'),
  }));
  const all = past.concat(tl.future.map(([k, t, n, why]) => ({ k, t, n, why, date: k === 'ret' ? 'Unknown' : '' })));
  const span = (a, b) => (a && b && a.k && a.k === b.k && (a.k === 'age' || a.k === 'mill') ? a.k : null);
  return all.map((r, i) => ({ ...r, top: span(all[i - 1], r), bot: span(r, all[i + 1]) }));
}
export const railStyle = (k, show) => (k ? { width: 8, background: `var(--kp-${k})` } : { width: 2, background: show ? 'var(--line-2)' : 'transparent' });

export default function EndTimes() {
  const level = useLevel();
  const [cur, setCur] = useState(SECS[0][0]);
  const [sp, setSp] = useSearchParams();
  const vsel = VIEW_IDS.includes(sp.get('view')) ? sp.get('view') : 'amil';
  const setVsel = (id) => { const n = new URLSearchParams(sp); n.set('view', id); setSp(n, { replace: true }); };
  const [psel, setPsel] = useState(P[0].id);
  const [rsel, setRsel] = useState(RAP[0].id);
  const navRef = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) setCur(en.target.id.replace('et-', '')); }), { rootMargin: '-80px 0px -75% 0px' });
    document.querySelectorAll('.et section').forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const a = navRef.current?.querySelector('a.on');
    if (a && navRef.current.scrollWidth > navRef.current.clientWidth) navRef.current.scrollTo({ left: a.offsetLeft - 20, behavior: 'smooth' });
  }, [cur]);
  const go = (e, id) => { e.preventDefault(); document.getElementById('et-' + id)?.scrollIntoView({ behavior: 'smooth' }); };
  const v = V.find((x) => x.id === vsel);
  const rows = timelineRows(vsel);
  const p = P.find((x) => x.id === psel);
  const r = RAP.find((x) => x.id === rsel);

  return (
    <main className={`wrap page et lv-${level}`}>
      <div className="crumbs2">Theology › <b>Eschatology</b></div>
      <h1 className="h1-sm et-h1">The end times: four views</h1>
      <p className="tagline et-tag">What Christians believe about Christ’s return, the 1,000 years and the new creation, and why they read the same passages differently.</p>
      <div className="et-tools"><LevelToggle small /><span className="muted">Reading level</span></div>
      <div className="et-intro">
        <span className="et-s">Christians all agree Jesus is coming back. They disagree about the order of events around his return, especially the “thousand years” in Revelation 20.</span>
        <span className="et-m">The study of last things is called <b>eschatology</b> (from the Greek <i>eschatos</i>, “last”). The four main views are named for where they place Christ’s return in relation to the <b>millennium</b>, the 1,000 years of Revelation 20:1–6: before it (<b>pre</b>millennial), after it (<b>post</b>millennial), or with no separate future millennium (<b>a</b>millennial). Faithful, Bible-believing Christians have held each of them.</span>
      </div>

      <nav className="et-snav" ref={navRef} aria-label="Sections">
        {SECS.map(([id, l]) => <a key={id} href={'#et-' + id} className={cur === id ? 'on' : ''} onClick={(e) => go(e, id)}>{l}</a>)}
      </nav>

      <section id="et-agree">
        <div className="et-sh"><h2>Where Christians agree</h2><span>All four views</span></div>
        <p className="et-sub">The historic creeds confess that Christ “will come again to judge the living and the dead” and look for “the resurrection of the dead and the life of the world to come.” Every view below holds these.</p>
        <div className="et-agree">{AGREE.map(([t, d, rf]) => <div key={t} className="et-ag"><b>{t}</b>{d}<span>{rf}</span></div>)}</div>
      </section>

      <section id="et-views">
        <div className="et-sh"><h2>The four views on a timeline</h2><span>From the cross to the new creation</span></div>
        <p className="et-sub">Each bar is one view’s order of events. Every period has the same color in all four, and the gold line is today. Tap a bar to follow that view below.</p>
        <div className="et-bars">
          <div className="et-axis" aria-hidden="true"><span>AD 30<span className="et-axx"> · the cross</span></span><span className="now" style={{ left: NOW_AT + '%' }}>Now</span><span>Forever</span></div>
          {V.map((x) => (
            <button key={x.id} type="button" className={'et-bar' + (vsel === x.id ? ' on' : '')} style={{ '--c': `var(${x.c})` }} aria-pressed={vsel === x.id} onClick={() => setVsel(x.id)}>
              <span className="et-bn"><b><i />{x.short}</b><small>{x.sub}</small></span>
              <span className="et-track" role="img" aria-label={x.short + ': ' + TL[x.id].segs.map(([k]) => periodName[k]).join(', then ')}>
                <span className="et-segs">{TL[x.id].segs.map(([k, w, l], i) => <span key={i} className={'et-p ' + k} style={{ flexBasis: `calc(${w}% - 2px)` }}>{l}</span>)}</span>
                <span className="et-nowln" style={{ left: NOW_AT + '%' }} />
              </span>
            </button>
          ))}
          <div className="et-leg2">
            {PERIODS.map(([k, n]) => <span key={k}><i className={k} />{n}</span>)}
            <span className="et-legn">Bar lengths show order, not years.</span>
          </div>
        </div>
        <div className="et-vd et-vd2" aria-live="polite">
          <div className="et-card et-vtl" style={{ '--c': `var(${v.c})` }}>
            <div className="et-k et-vk"><i />{v.n}</div>
            <h3>{TL[v.id].tag}</h3>
            <ol className="et-steps">
              {rows.map((r, i) => (
                <li key={i} className={'et-st' + (r.now ? ' now' : '') + (r.past ? ' past' : '') + (r.k === 'ret' ? ' ret' : '')}>
                  <span className="et-dt">{r.date}</span>
                  <span className="et-rail" aria-hidden="true">
                    <i style={railStyle(r.top, i > 0)} />
                    <b className={r.k && !r.past && !r.now ? 'k-' + r.k : ''} />
                    <i style={railStyle(r.bot, i < rows.length - 1)} />
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
          </div>
          <div className="et-vside">
            <div className="et-card et-vmain" style={{ '--c': `var(${v.c})` }}>
              <div className="et-k" style={{ color: `var(${v.c})` }}>In short</div>
              <p className="et-s">{v.simple}</p>
              <p className="et-nos">{v.sum}</p>
              <div className="et-pp et-nos">
                <div><b>Revelation 20</b>{v.rev20}</div>
                <div><b>Israel</b>{v.israel}</div>
                <div className="et-m"><b>Why its holders find it convincing</b>{v.strengths}</div>
                <div className="et-m"><b>Questions others raise</b>{v.questions}</div>
              </div>
              <Link to={`/theology/last-things/${v.id}`} className="et-deep" style={{ '--c': `var(${v.c})` }}>Deep dive: {v.short} <span aria-hidden="true">→</span><small>The case for it, supporting passages, questions and answers, history</small></Link>
            </div>
            <div className="et-card">
              <div className="et-k">Who has held it</div>
              <div className="et-people">{v.people.map((n) => <span key={n}>{n}</span>)}</div>
              <p className="et-nos et-where">{v.where}</p>
              <div className="et-d"><div className="et-k">Key passages for this view</div><ul className="et-vlist">{v.keys.map((k) => <li key={k}>{k}</li>)}</ul></div>
            </div>
          </div>
        </div>
      </section>

      <section id="et-compare">
        <div className="et-sh"><h2>Side by side</h2><span>The key questions</span></div>
        <p className="et-sub">The same questions, answered by each view<span className="et-nos">, with the reason each one gives</span>.</p>
        <table className="et-mx">
          <thead><tr><th />{V.map((x) => <th key={x.id} style={{ '--c': `var(${x.c})` }}><Link to={`/theology/last-things/${x.id}`} className="et-thl"><i />{x.short}</Link></th>)}</tr></thead>
          <tbody>{Q.map(([q, a, w]) => <tr key={q}><th>{q}</th>{a.map((t, i) => <td key={i}>{t}{w && <span className="et-why et-nos">{w[i]}</span>}</td>)}</tr>)}</tbody>
        </table>
        <div className="et-mxm">
          {Q.map(([q, a, w]) => (
            <div key={q} className="et-mq"><h4>{q}</h4>{a.map((t, i) => <div key={i} style={{ '--c': `var(${V[i].c})` }}><b>{V[i].short}</b><span>{t}{w && <span className="et-why et-nos">{w[i]}</span>}</span></div>)}</div>
          ))}
        </div>
      </section>

      <section id="et-passages">
        <div className="et-sh"><h2>Key passages</h2><span>How each view reads them</span></div>
        <p className="et-sub">Most of the disagreement comes down to a few passages. Pick one to see how each view reads it.</p>
        <div className="et-ptabs" role="group" aria-label="Passages">
          {P.map((x) => <button key={x.id} type="button" className={x.id === psel ? 'on' : ''} aria-pressed={x.id === psel} onClick={() => setPsel(x.id)}>{x.ref}</button>)}
        </div>
        <div className="et-quote"><p>“{p.text}”</p><span>{p.ref}</span></div>
        <div className="et-pv">{p.r.map((t, i) => <div key={i} className="et-pc" style={{ '--c': `var(${V[i].c})` }}><b>{V[i].short}</b>{t}</div>)}</div>
      </section>

      <section id="et-revelation">
        <div className="et-sh"><h2>Four ways to read Revelation</h2><span>Interpretive approaches</span></div>
        <p className="et-sub">Separate from the millennium question is <b>when</b> Revelation’s visions take place. Many readers combine these approaches.</p>
        <div className="et-lens">
          {LENS.map(([ic, n, s, et, ex, note, why, q]) => (
            <div key={n} className="et-ln"><span className="et-ic">{ic}</span><h4>{n}</h4><span>{s}</span><span className="et-m et-note">{note}</span>
              <div className="et-lw et-nos"><b>Why some read it this way</b>{why}</div>
              <div className="et-lw et-m"><b>Questions others raise</b>{q}</div>
              <div className="et-ex et-nos"><b>Example: {et}</b>{ex}</div></div>
          ))}
        </div>
      </section>

      <section id="et-rapture">
        <div className="et-sh"><h2>The timing of the rapture</h2><span>A debate among premillennialists</span></div>
        <p className="et-sub">“We who are alive… will be caught up together with them in the clouds to meet the Lord in the air” (1 Thessalonians 4:17). Premillennial Christians differ on when this happens in relation to a seven-year tribulation. Tap a position.</p>
        <div className="et-rap">
          <div className="et-bar7">
            <div className="et-half" />
            <div className="et-blab">Seven-year tribulation (Daniel’s 70th week)</div>
            {RAP.map((x) => (
              <button key={x.id} type="button" aria-pressed={x.id === rsel} onClick={() => setRsel(x.id)} style={{ left: x.x + '%' }}
                className={'et-pin' + (x.hi ? ' hi' : '') + (x.x === 0 ? ' l' : x.x === 100 ? ' rt' : '') + (x.id === rsel ? ' on' : '')}>
                <b>{x.n}</b><i>▼</i>
              </button>
            ))}
          </div>
          <div className="et-ends"><span>Begins</span><span>Midpoint</span><span>Christ returns</span></div>
          <div className="et-rapd">
            <div className="et-card"><div className="et-k">{r.n} · the case for it</div><p>{r.t}</p></div>
            <div className="et-card"><div className="et-k">Who holds it</div><p>{r.w}</p></div>
            <div className="et-card et-nos"><div className="et-k">Questions others raise</div><p>{r.q}</p></div>
          </div>
        </div>
      </section>

      <div className="et-fair"><b>How this page is written.</b> Each view is described the way its own teachers would describe it, with the passages they rely on and the questions others raise. The app doesn’t take a side.</div>
      <div className="et-notes"><NoteEditor noteKey={noteKey('theology', 'last-things')} title="My notes on the end times" /></div>
      <p className="et-foot">Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.</p>
    </main>
  );
}
