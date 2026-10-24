import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { POSITIONS, MIDDLE, TIMELINE, WHY, TOPICS, BACK_CHAPTERS } from '../data/danielDate.js';
import LevelToggle from '../components/LevelToggle.jsx';
import NoteEditor from '../components/NoteEditor.jsx';
import Ref from '../components/Ref.jsx';
import { noteKey } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';
import { bibleRefTo } from '../utils/bibleRef.js';

// Daniel's Prophecies › When was Daniel written? (/daniel/written). From the "Daniel Dating Subpage" canvas.
//   Two date cards (early c. 530 BC, late c. 165 BC), a timeline of where they fall, then six kinds of evidence
//   with each side's argument. "Both sides / Early date / Late date" filters the columns (?side=early|late).
//   Reading level: Simple = one line each; Moderate = the paragraph; Detailed adds more and the other side's reply.
//   Phone: the topics fold (the first starts open); computer: all open, sides side by side.

const SIDES = [['both', 'Both sides'], ['early', 'Early date'], ['late', 'Late date']];

function Refs({ refs }) {
  return (
    <div className="dd-refs">
      <b>See</b>{' '}
      {refs.map((r, i) => {
        const to = bibleRefTo(r);
        return <span key={r}>{i > 0 && '; '}{to ? <Ref to={to}>{r}</Ref> : r}</span>;
      })}
    </div>
  );
}

function Side({ k, x, level }) {
  const P = POSITIONS[k];
  const other = k === 'early' ? 'Late-date reply' : 'Early-date reply';
  const body = level === 'simple' ? x.s : x.m + (level === 'detailed' ? ' ' + x.d : '');
  return (
    <article className={'dd-arg ' + k}>
      <div className="dd-lab"><i aria-hidden="true" />For the {P.label.toLowerCase()}</div>
      <p className="dd-head">{x.head}</p>
      <p className="dd-body">{body}</p>
      {level === 'detailed' && <div className={'dd-reply ' + (k === 'early' ? 'late' : 'early')}><b>{other}</b>{x.reply}</div>}
      {level !== 'simple' && <Refs refs={x.refs} />}
    </article>
  );
}

export default function DanielDate() {
  const level = useLevel();
  const [params, setParams] = useSearchParams();
  const side = ['early', 'late'].includes(params.get('side')) ? params.get('side') : 'both';
  const [open, setOpen] = useState({ [TOPICS[0].id]: true }); // phone only; the computer shows every topic
  const setSide = (s) => setParams(s === 'both' ? {} : { side: s }, { replace: true });
  const lean = { both: 'Both sides', early: 'Key for early date', late: 'Key for late date' };
  const leanShort = { both: 'Both', early: 'Early', late: 'Late' };

  return (
    <main className="wrap page dd-page">
      <div className="dd-grid">
        <div className="dd-main">
          <div className="crumbs2">Bible Summaries › <Link to="/daniel">Daniel’s Prophecies</Link> › <b>When was it written?</b></div>
          <h1 className="h1-sm">When was Daniel written?</h1>
          <p className="tagline dd-tag">Two dates nearly four centuries apart, and the evidence each side points to.</p>

          <div className="dd-dates">
            {['early', 'late'].map((k) => (
              <section key={k} className={'dd-date ' + k}>
                <div className="dd-lab">{POSITIONS[k].label}</div>
                <div className="dd-yr">{POSITIONS[k].date}</div>
                <p>{level === 'simple' ? POSITIONS[k].s : POSITIONS[k].m}</p>
                <div className="dd-held"><b>Held by</b> {POSITIONS[k].held}</div>
              </section>
            ))}
          </div>
          {level !== 'simple' && <p className="dd-mid">{MIDDLE}</p>}

          <section className="dd-tl" aria-label="Timeline">
            <div className="dd-k">Where the two dates fall</div>
            <div className="dd-tl-h">
              <div className="dd-tl-line" />
              {TIMELINE.filter((e) => !e.narrowOnly).map((e) => (e.mark
                ? <div key={e.y} className={'dd-tl-mark ' + e.mark} style={{ left: e.pos + '%' }}><span>{e.t} · {e.y}</span></div>
                : <div key={e.y} className={'dd-tl-ev' + (e.gold ? ' gold' : '') + (['539', 'c. 125'].includes(e.y) ? ' lo' : '') + (e.pos > 80 ? ' end' : '')} style={{ left: e.pos + '%' }}><i /><span><b>{e.wide || e.y}</b> {e.wt || e.t}</span></div>
              ))}
            </div>
            <ol className="dd-tl-v">
              {TIMELINE.map((e) => (
                <li key={e.y} className={e.mark ? 'mk ' + e.mark : (e.gold ? 'gold' : '')}>
                  <i />{e.mark ? <span className="pill">{e.t} · {e.y}</span> : <span><b>{e.y}</b> {e.t}</span>}
                </li>
              ))}
            </ol>
          </section>

          <div className="dd-tools">
            <LevelToggle small />
            <div className="seg sm dd-side" role="radiogroup" aria-label="Show">
              {SIDES.map(([id, label]) => (
                <button key={id} type="button" role="radio" aria-checked={side === id} className={side === id ? 'on' : ''} onClick={() => setSide(id)}>{label}</button>
              ))}
            </div>
          </div>

          {TOPICS.map((t) => {
            const isOpen = !!open[t.id];
            return (
              <section key={t.id} id={'dd-' + t.id} className={'dd-topic' + (isOpen ? ' open' : '')}>
                <button type="button" className="dd-th" aria-expanded={isOpen} onClick={() => setOpen({ ...open, [t.id]: !isOpen })}>
                  <span className="dd-tn"><h2>{t.name}</h2><small>{t.sub}</small></span>
                  <span className={'dd-lean ' + t.lean}>{lean[t.lean]}</span>
                  <svg className="dd-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
                </button>
                <div className={'dd-cols' + (side === 'both' ? '' : ' one')}>
                  {side !== 'late' && <Side k="early" x={t.e} level={level} />}
                  {side !== 'early' && <Side k="late" x={t.l} level={level} />}
                </div>
              </section>
            );
          })}

          <section className="dd-why">
            <h2>Why the question matters</h2>
            <p>{WHY}</p>
          </section>
          <p className="dp-foot">Summaries of the main scholarly positions. Bible references link to the chapter in the app.</p>
        </div>

        <aside className="dd-side-col">
          <div className="dp-box dd-toc-box">
            <h3>Evidence</h3>
            <nav className="dd-toc" aria-label="Evidence topics">
              {TOPICS.map((t) => (
                <a key={t.id} href={'#dd-' + t.id} onClick={(e) => { e.preventDefault(); document.getElementById('dd-' + t.id)?.scrollIntoView({ behavior: 'smooth' }); }}>
                  {t.name}<small>{leanShort[t.lean]}</small>
                </a>
              ))}
            </nav>
          </div>
          <div className="dp-box">
            <div className="dp-k">Back to the prophecies</div>
            <div className="dp-chips">
              {BACK_CHAPTERS.map((n) => <Link key={n} to={`/daniel?ch=${n}`} className="dp-chip">Daniel {n}</Link>)}
            </div>
          </div>
          <NoteEditor noteKey={noteKey('daniel', 'written')} title="My notes on this question" />
        </aside>
      </div>
    </main>
  );
}
