import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  VIEWS, TOPICS, topicById, END_TIMES, ARGS, REPLY, WHY, WHY_NOTE, AGREE, BETWEEN,
  ERAS, TIMELINE_NOTE, END_D, END_C, END_NOTE,
} from '../data/theologyCompare.js';
import { BOOKS } from '../data/index.js';
import LevelToggle from '../components/LevelToggle.jsx';
import NoteEditor from '../components/NoteEditor.jsx';
import Ref from '../components/Ref.jsx';
import { noteKey } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';

// Theology › Dispensational vs Covenant (/theology/compare). Built from the approved design canvas:
//   Computer (A): the two view cards; a topic list beside the chosen topic (both answers side by side,
//     key texts, "the real question", and on the end-times topic how each system shapes the end times);
//     then Why it matters (a table), The case each side makes (two columns, each with the other side's
//     answer), Where they agree, Views in between and notes.
//   Phone (C, ≤760px): sticky topic chips; the answers stacked; switches for Reading/Living and For D/For C,
//     so only one list shows at a time; the view cards move to "About the two views" near the end.
//   Timeline tab (B): the dispensations and covenants on one row of Bible eras (a vertical list on the phone),
//     two peoples vs one people, and how each view expects the end to unfold.
// Reading level: Simple uses the short texts and hides "the real question"; Moderate uses the full texts;
// Detailed adds each view's teachers and the references under each argument.
// Address: ?t=<topic id> and ?tab=timeline.

function useMedia(q) {
  const [on, setOn] = useState(() => window.matchMedia(q).matches);
  useEffect(() => {
    const m = window.matchMedia(q);
    const f = () => setOn(m.matches);
    m.addEventListener('change', f);
    return () => m.removeEventListener('change', f);
  }, [q]);
  return on;
}

// "1 Corinthians 10:32" → /book/1corinthians/10; anything that isn't a book stays plain text.
const BOOK_BY_NAME = Object.fromEntries(BOOKS.map((b) => [b.name.toLowerCase(), b.id]));
function refTo(text) {
  const m = text.match(/^((?:[123] )?[A-Za-z]+(?: of [A-Za-z]+)?) (\d+)/);
  const id = m && BOOK_BY_NAME[m[1].toLowerCase()];
  return id ? `/book/${id}/${m[2]}` : null;
}
function Refs({ refs, className = 'tc-refs' }) {
  return (
    <div className={className}>
      {refs.map((r) => {
        const to = refTo(r);
        return to ? <Ref key={r} to={to} className="tc-ref">{r}</Ref> : <span key={r} className="tc-ref plain">{r}</span>;
      })}
    </div>
  );
}

const Mark = ({ v, small }) => <span className={`tc-mark tc-${v}` + (small ? ' sm' : '')} aria-hidden="true">{v.toUpperCase()}</span>;
const ViewLabel = ({ v, children }) => <span className={`tc-vlabel tc-${v}`}><Mark v={v} small />{children || VIEWS[v].label}</span>;
const Tag = ({ tag }) => <span className={'tc-tag ' + tag.toLowerCase()}>{tag}</span>;
const endLink = (view) => `/theology/last-things/${view}`; // the view's deep-dive page

function ViewCard({ v, level }) {
  const x = VIEWS[v];
  return (
    <section className={`tc-view tc-${v}`} aria-label={x.name}>
      <h2 className="tc-view-h"><Mark v={v} />{x.name}</h2>
      <p className="tc-view-idea">{level === 'simple' ? x.s : x.idea}</p>
      {level !== 'simple' && (
        <dl className="tc-view-dl">
          <dt>Began</dt><dd>{x.began}</dd>
          {level === 'detailed' && <><dt>Teachers</dt><dd>{x.teachers}</dd></>}
          <dt>Common in</dt><dd>{x.common}</dd>
        </dl>
      )}
      <Link to={`/theology/compare/${v === 'd' ? 'dispensational' : 'covenant'}`} className="tc-deep">{x.name} in depth <span aria-hidden="true">→</span><small>Building blocks, the case for it, passages, questions and answers, history</small></Link>
    </section>
  );
}

function EndTimesBlock({ phone }) {
  const rows = ['d', 'c'].map((v) => {
    const e = END_TIMES[v];
    const mill = e.mill.map((m) => <Link key={m.view} to={endLink(m.view)} className={`tc-pos tc-${v}`}>{m.label}</Link>);
    return { v, e, mill };
  });
  if (phone) {
    return (
      <section className="tc-end" aria-label="How each system shapes the end times">
        <h3 className="tc-h3">How each system shapes the end times</h3>
        {rows.map(({ v, e, mill }, i) => (
          <div key={v} className={'tc-end-m' + (i ? ' sep' : '')}>
            <ViewLabel v={v} />
            <div className="tc-pos-row">{mill}<span className={`tc-pos tc-${v} plain`}>{e.rap}</span></div>
            <p>{e.millNote} {e.rapNote}</p>
          </div>
        ))}
        <p className="tc-fine">{END_TIMES.note}</p>
        <Link to="/theology/last-things" className="tc-end-btn">See all four views on End Times →</Link>
      </section>
    );
  }
  return (
    <section className="tc-end" aria-label="How each system shapes the end times">
      <div className="tc-end-top">
        <h3 className="tc-h3">How each system shapes the end times</h3>
        <Link to="/theology/last-things">See all four views on End Times →</Link>
      </div>
      <div className="tc-end-grid head"><span /><span>The millennium</span><span>The rapture</span></div>
      {rows.map(({ v, e, mill }) => (
        <div key={v} className="tc-end-grid">
          <span><ViewLabel v={v} /></span>
          <div><div className="tc-pos-row">{mill}</div><p>{e.millNote}</p></div>
          <div><div className="tc-pos-row"><span className={`tc-pos tc-${v} plain`}>{e.rap}</span></div><p>{e.rapNote}</p></div>
        </div>
      ))}
      <p className="tc-fine pad">{END_TIMES.note}</p>
    </section>
  );
}

function Answer({ v, topic, lv }) {
  const a = topic[v];
  return (
    <section className={`tc-ans tc-${v}`} aria-label={`${VIEWS[v].label} view`}>
      <ViewLabel v={v} />
      <p className="tc-ans-p">{a[lv]}</p>
      <Refs refs={a.refs} />
    </section>
  );
}

function TopicPanel({ topic, idx, level, lv, phone, go }) {
  const prev = TOPICS[(idx + TOPICS.length - 1) % TOPICS.length];
  const next = TOPICS[(idx + 1) % TOPICS.length];
  return (
    <article className="tc-topic">
      <div className="tc-topic-head">
        <div className="tc-eyebrow-row"><span className="tc-eyebrow">Topic {idx + 1} of {TOPICS.length}</span>{phone && <Tag tag={topic.tag} />}</div>
        <h2 className="tc-topic-h">{topic.name}</h2>
        <p className="tc-topic-q">{topic.q}</p>
      </div>
      <div className="tc-ans-grid">
        <Answer v="d" topic={topic} lv={lv} />
        <Answer v="c" topic={topic} lv={lv} />
      </div>
      {level !== 'simple' && (
        <div className="tc-crux"><span className="tc-eyebrow">The real question</span><p>{topic.crux}</p></div>
      )}
      {topic.id === 'end-times' && <EndTimesBlock phone={phone} />}
      <div className="tc-pn">
        <button type="button" onClick={() => go(prev.id)}><small>← Previous</small><span>{phone ? prev.short : prev.name}</span></button>
        <button type="button" className="r" onClick={() => go(next.id)}><small>Next →</small><span>{phone ? next.short : next.name}</span></button>
      </div>
      <div className="tc-notes">
        <NoteEditor noteKey={noteKey('theology', 'compare', topic.id)} title={`My notes on ${topic.name.toLowerCase()}`} />
      </div>
    </article>
  );
}

function Switch({ label, options, value, onChange }) {
  return (
    <div className="tc-switch" role="tablist" aria-label={label}>
      {options.map(([id, text, v]) => (
        <button key={id} type="button" role="tab" aria-selected={value === id} className={(value === id ? 'on' : '') + (v ? ` tc-${v}` : '')} onClick={() => onChange(id)}>{text}</button>
      ))}
    </div>
  );
}

function WhySection({ lv, phone }) {
  const [part, setPart] = useState('read');
  const head = (
    <div className="tc-sec-head">
      <h2 className="tc-h2">Why it matters</h2>
      <p>How each view shapes the way you read the Bible, and how that carries into everyday life.</p>
    </div>
  );
  if (phone) {
    const g = WHY.find((x) => x.id === part);
    return (
      <section className="tc-sec" aria-label="Why it matters">
        {head}
        <Switch label="Show" value={part} onChange={setPart} options={WHY.map((x) => [x.id, x.title])} />
        {g.rows.map((r) => (
          <div key={r.k} className="tc-why-card">
            <div><b>{r.k}</b><small>{r.ex}</small></div>
            <div className="tc-why-line"><Mark v="d" small /><p>{r.d[lv]}</p></div>
            <div className="tc-why-line"><Mark v="c" small /><p>{r.c[lv]}</p></div>
          </div>
        ))}
        <p className="tc-fine">{WHY_NOTE}</p>
      </section>
    );
  }
  return (
    <section className="tc-sec" aria-label="Why it matters">
      {head}
      {WHY.map((g) => (
        <div key={g.id} className="tc-why-table">
          <div className="tc-why-row head">
            <h3 className="tc-h3">{g.title}</h3>
            <span><ViewLabel v="d" /></span>
            <span><ViewLabel v="c" /></span>
          </div>
          {g.rows.map((r) => (
            <div key={r.k} className="tc-why-row">
              <div><b>{r.k}</b><small>{r.ex}</small></div>
              <p>{r.d[lv]}</p>
              <p>{r.c[lv]}</p>
            </div>
          ))}
        </div>
      ))}
      <p className="tc-fine">{WHY_NOTE}</p>
    </section>
  );
}

function CaseColumn({ v, lv, level }) {
  const other = v === 'd' ? 'c' : 'd';
  return (
    <div className={`tc-case tc-${v}`}>
      {<ViewLabel v={v}>{v === 'd' ? 'For dispensationalism' : 'For covenant theology'}</ViewLabel>}
      <ol className="tc-args">
        {ARGS[v].map((a, i) => (
          <li key={a.t}>
            <span className={`tc-num tc-${v}`} aria-hidden="true">{i + 1}</span>
            <div>
              <b>{a.t}</b>
              <p>{a[lv]}</p>
              {level !== 'simple' && <Refs refs={a.refs} className="tc-refs inline" />}
            </div>
          </li>
        ))}
      </ol>
      <div className="tc-reply">
        <span className={`tc-reply-h tc-${other}`}>{REPLY[v].title}</span>
        <p>{REPLY[v][lv]}</p>
      </div>
    </div>
  );
}

function CaseSection({ lv, level, phone }) {
  const [side, setSide] = useState('d');
  return (
    <section className="tc-sec" aria-label="The case each side makes">
      <div className="tc-sec-head">
        <h2 className="tc-h2">The case each side makes</h2>
        <p>The main arguments as each view’s own teachers put them, with how the other side usually answers.</p>
      </div>
      {phone ? (
        <>
          <Switch label="Which view" value={side} onChange={setSide} options={[['d', 'For D', 'd'], ['c', 'For C', 'c']]} />
          <CaseColumn v={side} lv={lv} level={level} />
        </>
      ) : (
        <div className="tc-case-grid">
          <CaseColumn v="d" lv={lv} level={level} />
          <CaseColumn v="c" lv={lv} level={level} />
        </div>
      )}
    </section>
  );
}

function AgreeBetween() {
  return (
    <div className="tc-trio">
      <section className="tc-box">
        <h3 className="tc-h3">Where they agree</h3>
        <ul>{AGREE.map((a) => <li key={a}>{a}</li>)}</ul>
      </section>
      <section className="tc-box">
        <h3 className="tc-h3">Views in between</h3>
        {BETWEEN.map((b) => <p key={b.name}><b>{b.name}</b> ({b.who}): {b.text}</p>)}
      </section>
    </div>
  );
}

// ───────── Timeline tab (design B) ─────────
const total = ERAS.reduce((s, e) => s + e.w, 0);
function marksOf() {
  const out = [];
  let x = 0;
  ERAS.forEach((e) => {
    [e.mark, ...(e.marks || [])].filter(Boolean).forEach((m) => out.push({ ...m, left: ((x + e.w * m.at) / total) * 100 }));
    x += e.w;
  });
  return out;
}

function Timeline({ phone }) {
  const marks = marksOf();
  const peopleD = (
    <div className="tc-people">
      <div className="tc-ptrack"><span>Israel</span><div><i className="tc-bar d" style={{ left: 0, width: '46%' }} /><i className="tc-gap d" style={{ left: '46%', width: '30%' }} /><i className="tc-bar d" style={{ left: '76%', width: '24%' }} /></div></div>
      <div className="tc-ptrack"><span>Church</span><div><i className="tc-bar d2" style={{ left: '46%', width: '30%' }} /></div></div>
      <div className="tc-ptrack axis"><span /><div><em style={{ left: 0 }}>Abraham</em><em className="c hi" style={{ left: '46%' }}>Pentecost</em><em className="c hi" style={{ left: '76%' }}>Rapture</em><em className="r low">Kingdom</em></div></div>
    </div>
  );
  const peopleC = (
    <div className="tc-people">
      <div className="tc-ptrack"><span>Gentiles</span><div><i className="tc-gap c" style={{ left: '30%', width: '16%' }} /><b className="tc-join" style={{ left: '46%' }} /></div></div>
      <div className="tc-ptrack"><span>God’s people</span><div><i className="tc-bar c" style={{ left: 0, width: '46%' }} /><i className="tc-bar c2" style={{ left: '46%', width: '54%' }} /></div></div>
      <div className="tc-ptrack axis"><span /><div><em style={{ left: 0 }}>Abraham</em><em className="c hi" style={{ left: '46%' }}>Pentecost</em><em className="r">New creation</em></div></div>
    </div>
  );
  const seq = (v, xs) => (
    <ol className="tc-seq">
      {xs.map((t, i) => <li key={t}><span className={`tc-step tc-${v}`}>{t}</span>{i < xs.length - 1 && <span className={`tc-arrow tc-${v}`} aria-hidden="true">→</span>}</li>)}
    </ol>
  );
  return (
    <div className="tc-tl">
      <section className="tc-box tc-tl-main" aria-label="How each divides history">
        {phone ? (
          <ol className="tc-tl-list">
            {ERAS.map((e) => {
              const ms = [e.mark, ...(e.marks || [])].filter(Boolean);
              return (
                <li key={e.name}>
                  <div className="tc-tl-era"><b>{e.name}</b><small>{e.ref}</small></div>
                  <div className="tc-tl-pair">
                    <span className="tc-chip d"><Mark v="d" small />{e.d}</span>
                    <span className="tc-chip c"><Mark v="c" small />{e.c === 'works' ? 'Covenant of works' : ms.length ? ms.map((m) => (m.name === 'New covenant' ? 'New covenant' : `Covenant with ${m.name}`)).join(' · ') : 'Covenant of grace'}</span>
                  </div>
                </li>
              );
            })}
          </ol>
        ) : (
          <>
            <div className="tc-tl-row head">
              <span className="tc-eyebrow">The story</span>
              <div className="tc-tl-cells">{ERAS.map((e) => <div key={e.name} style={{ flex: `${e.w} 1 0` }}><b>{e.name}</b><small>{e.ref}</small></div>)}</div>
            </div>
            <div className="tc-tl-row">
              <div className="tc-tl-lab"><ViewLabel v="d" /><small>7 dispensations</small></div>
              <div className="tc-tl-cells">{ERAS.map((e) => <div key={e.name} className={'tc-disp' + (e.now ? ' now' : '')} style={{ flex: `${e.w} 1 0` }}><b>{e.d}</b><small>{e.dt}</small></div>)}</div>
            </div>
            <div className="tc-tl-row">
              <div className="tc-tl-lab"><ViewLabel v="c" /><small>Works, then one covenant of grace</small></div>
              <div className="tc-tl-cov">
                <div className="tc-tl-cells">
                  <div className="tc-covbox" style={{ flex: `${ERAS[0].w} 1 0` }}><b>Covenant of works</b><small>With Adam: obey and live</small></div>
                  <div className="tc-covbox wide" style={{ flex: `${total - ERAS[0].w} 1 0` }}><b>Covenant of grace</b><small>promised in Genesis 3:15, one plan of salvation in every age</small></div>
                </div>
                <div className="tc-marks">
                  {marks.map((m) => <div key={m.name} style={{ left: m.left + '%' }}><i aria-hidden="true" /><b>{m.name}</b><small>{m.ref}</small></div>)}
                </div>
              </div>
            </div>
          </>
        )}
        <p className="tc-fine">{TIMELINE_NOTE}</p>
      </section>

      <div className="tc-ppl-grid">
        <section className="tc-box" aria-label="Dispensational view of God's people">
          <span className="tc-eyebrow tc-d">Dispensational</span>
          <h3 className="tc-h3">Two peoples, two programs</h3>
          {peopleD}
          <p className="tc-body">God’s program for Israel pauses while the church is gathered, then resumes in the tribulation and the thousand-year kingdom.</p>
        </section>
        <section className="tc-box" aria-label="Covenant view of God's people">
          <span className="tc-eyebrow tc-c">Covenant</span>
          <h3 className="tc-h3">One people, growing</h3>
          {peopleC}
          <p className="tc-body">Israel and the church are one people. At Pentecost the people widens as Gentiles are grafted into the same tree.</p>
        </section>
      </div>

      <section className="tc-box" aria-label="How it ends">
        <div className="tc-end-top"><h3 className="tc-h3">How it ends</h3><Link to="/theology/last-things">See all four views on End Times →</Link></div>
        <div className="tc-seq-row"><div className="tc-tl-lab"><ViewLabel v="d" /><small>premillennial, most pre-tribulation</small></div>{seq('d', END_D)}</div>
        <div className="tc-seq-row"><div className="tc-tl-lab"><ViewLabel v="c" /><small>most amillennial</small></div>{seq('c', END_C)}</div>
        <p className="tc-fine">{END_NOTE}</p>
      </section>
    </div>
  );
}

export default function TheologyCompare() {
  const level = useLevel();
  const lv = level === 'simple' ? 's' : 'm';
  const phone = useMedia('(max-width: 760px)');
  const [sp, setSp] = useSearchParams();
  const tab = sp.get('tab') === 'timeline' ? 'timeline' : 'topics';
  const topic = topicById[sp.get('t')] || TOPICS[0];
  const idx = TOPICS.indexOf(topic);
  const set = (k, v) => { const n = new URLSearchParams(sp); if (v) n.set(k, v); else n.delete(k); setSp(n, { replace: true }); };
  const go = (id) => {
    set('t', id);
    if (phone) document.querySelector('.tc-topic')?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  return (
    <main className={`wrap page tc lv-${level}`}>
      <div className="tc-top">
        <div className="tc-top-text">
          <div className="crumbs2">Theology › <b>Compare views</b></div>
          <h1 className="h1-sm">Dispensational &amp; Covenant Theology</h1>
          <p className="tc-lede">Two Protestant ways of seeing how the whole Bible fits together: how Israel and the church relate, how promises are fulfilled, and what comes at the end.</p>
        </div>
        <div className="tc-tools">
          <Switch label="View" value={tab} onChange={(v) => set('tab', v === 'timeline' ? 'timeline' : null)} options={[['topics', 'Topic by topic'], ['timeline', 'Timeline']]} />
          <LevelToggle small />
        </div>
      </div>

      {tab === 'timeline' ? <Timeline phone={phone} /> : (
        <>
          {!phone && <div className="tc-views"><ViewCard v="d" level={level} /><ViewCard v="c" level={level} /></div>}

          {phone ? (
            <div className="tc-chips" role="tablist" aria-label="Topics">
              {TOPICS.map((t) => (
                <button key={t.id} type="button" role="tab" aria-selected={t.id === topic.id} className={t.id === topic.id ? 'on' : ''} onClick={() => go(t.id)}>{t.short}</button>
              ))}
            </div>
          ) : null}

          <div className="tc-main">
            {!phone && (
              <nav className="tc-nav" aria-label="Topics">
                <span className="tc-eyebrow">Topics</span>
                {TOPICS.map((t) => (
                  <button key={t.id} type="button" aria-current={t.id === topic.id ? 'true' : undefined} className={t.id === topic.id ? 'on' : ''} onClick={() => go(t.id)}>
                    <span>{t.name}</span><Tag tag={t.tag} />
                  </button>
                ))}
              </nav>
            )}
            <TopicPanel topic={topic} idx={idx} level={level} lv={lv} phone={phone} go={go} />
          </div>

          <WhySection lv={lv} phone={phone} />
          <CaseSection lv={lv} level={level} phone={phone} />

          {phone && (
            <section className="tc-sec" aria-label="About the two views">
              <h2 className="tc-h2">About the two views</h2>
              <ViewCard v="d" level={level} />
              <ViewCard v="c" level={level} />
            </section>
          )}
          <AgreeBetween />
        </>
      )}
    </main>
  );
}
