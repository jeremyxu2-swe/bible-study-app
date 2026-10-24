import { useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PROPHECIES } from '../data/index.js';
import { PROPHECY_STAGES, writtenLabel } from '../data/prophecies.js';
import Ref from '../components/Ref.jsx';

// Bible Summaries › Christ in Scripture: the promise path.
// Jesus' life in six stages (Lineage → Reign). Pick a stage and each Old Testament promise sits beside
// the New Testament passage where it came true, with roughly when it was written.
//   Computer: a numbered stepper across the top; promise | → | fulfilled cards.
//   Phone: the stepper scrolls sideways; each card stacks the promise above its fulfillment.
// The chosen stage lives in the address (?stage=death) so it can be linked and survives Back.
const stageOf = (v) => PROPHECY_STAGES.find((s) => s.id.toLowerCase() === String(v || '').toLowerCase());

export default function Prophecies() {
  const [params, setParams] = useSearchParams();
  const stage = stageOf(params.get('stage')) || PROPHECY_STAGES[0];
  const idx = PROPHECY_STAGES.indexOf(stage);
  const rows = PROPHECIES.filter((p) => p.cat === stage.id);
  const stepsRef = useRef(null);
  const focus = params.get('p');
  // Arriving from a book page (?stage=…&p=p9): scroll to that promise and highlight it briefly.
  useEffect(() => {
    const el = focus && document.getElementById(focus);
    if (!el) return;
    const t1 = setTimeout(() => { el.scrollIntoView({ block: 'center' }); el.classList.add('flash'); }, 150);
    const t2 = setTimeout(() => el.classList.remove('flash'), 1900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [focus]);
  const go = (s, scroll) => {
    setParams({ stage: s.id.toLowerCase() }, { replace: false });
    if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // Phone: keep the chosen stage visible in the sideways stepper.
  useEffect(() => {
    const el = stepsRef.current?.querySelector('.pp2-step.on');
    if (el && stepsRef.current.scrollWidth > stepsRef.current.clientWidth) el.scrollIntoView({ block: 'nearest', inline: 'center' });
  }, [stage.id]);
  const prev = PROPHECY_STAGES[idx - 1];
  const next = PROPHECY_STAGES[idx + 1];

  return (
    <main className="wrap page stack-lg proph-page pp2" style={{ gap: 22 }}>
      <div className="stack" style={{ gap: 6 }}>
        <div className="crumbs2">Bible Summaries › <b>Christ in Scripture</b></div>
        <h1 className="h1-sm">The promise path</h1>
        <p className="tagline">Every stage of Jesus’ life was promised beforehand. Pick a stage to see each promise beside how it came true.</p>
      </div>

      <nav className="pp2-steps" ref={stepsRef} aria-label="Stages of Jesus’ life">
        {PROPHECY_STAGES.map((s) => {
          const n = PROPHECIES.filter((p) => p.cat === s.id).length;
          return (
            <button key={s.id} type="button" className={`pp2-step k-${s.c}${s === stage ? ' on' : ''}`} aria-pressed={s === stage} onClick={() => go(s)}>
              <i>{s.n}</i>
              <b>{s.id}</b>
              <small>{n} {n === 1 ? 'promise' : 'promises'}</small>
            </button>
          );
        })}
      </nav>

      <section className={`stack pp2-list k-${stage.c}`} style={{ gap: 12 }} aria-live="polite">
        <div className="pp2-head">
          <h2 className="h2">{stage.n}. {stage.id}</h2>
          <span className="muted">{stage.sub}</span>
        </div>
        {rows.map((p) => (
          <article key={p.id} id={p.id} className="pp2-card">
            <div className="pp2-prom">
              <div className="pp2-k">
                <span>Promised</span>
                <Ref className="pp2-ref" to={`/book/${p.otBook}/${p.otCh}`}>{p.ot}</Ref>
                <span className="pp2-when">{writtenLabel(p)}</span>
              </div>
              <p className="pp2-text">{p.promise}</p>
            </div>
            <div className="pp2-arrow" aria-hidden="true">→</div>
            <div className="pp2-ful">
              <div className="pp2-k">
                <span>Fulfilled</span>
                <Ref className="pp2-ref" to={`/book/${p.ntBook}/${p.ntCh}`}>{p.nt}</Ref>
              </div>
              <p className="pp2-fultext">{p.fulfil}</p>
            </div>
          </article>
        ))}
      </section>

      <nav className="pp2-nav" aria-label="Other stages">
        {prev ? <button type="button" className="pill" onClick={() => go(prev, true)}>‹ {prev.n}. {prev.id}</button> : <span />}
        {next ? <button type="button" className="pill on" onClick={() => go(next, true)}>Next: {next.n}. {next.id} ›</button> : <Link to="/kings" className="pill">Kings &amp; Prophets ›</Link>}
      </nav>
      <p className="muted pp2-note">Dates are the traditional dates of writing and are approximate; many scholars date some of these books later.</p>
    </main>
  );
}
