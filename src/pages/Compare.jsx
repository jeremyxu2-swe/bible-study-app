import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SECTIONS } from '../data/sections.js';
import { denomById } from '../data/church/denominations.js';
import {
  TOPICS, GLANCE, QUICK, GROUPS, PICKABLE, answersFor, parseSel, partnerFor, agreeFor, topicDiffers, glanceDiffers, groupOf,
} from '../data/church/compare.js';
import LevelToggle from '../components/LevelToggle.jsx';
import Icon from '../components/Icon.jsx';
import { useLevel, useTheme } from '../store/prefs.js';
import { tone, Sheet } from './Denominations.jsx';

// Church History › Compare. Pick 2–4 denominations and see them side by side:
// at a glance (yes / some / no), where they agree, roots & size, then topic by topic.
// Computer (≥1100px): a column table. Phone and tablet: one card per topic, each denomination a colored row.
// The comparison lives in the address (?d=rc,eo&diff=1), so it can be bookmarked.
const SECTION = SECTIONS.find((s) => s.id === 'history');
const wideQuery = '(min-width: 1100px)';
const subWide = (fn) => { const m = window.matchMedia(wideQuery); m.addEventListener('change', fn); return () => m.removeEventListener('change', fn); };
const useWide = () => useSyncExternalStore(subWide, () => window.matchMedia(wideQuery).matches);
const LV = { simple: 's', moderate: 'm', detailed: 'd' };
const SHORT = { rc: 'Catholic', eo: 'Orthodox', oo: 'Oriental', coe: 'East', ang: 'Anglican', luth: 'Lutheran', ref: 'Reformed', ana: 'Anabaptist', bap: 'Baptist', meth: 'Methodist', pent: 'Pentecostal' };
const shortName = (id) => SHORT[id] || denomById[id].short || denomById[id].name;

function Dot({ v, color }) {
  const cls = v === 1 ? 'y' : v === 0 ? 'n' : 's';
  const word = v === 1 ? 'Yes' : v === 0 ? 'No' : 'Some churches';
  return <span className={'cmp-dot ' + cls} style={{ color }} role="img" aria-label={word} title={word} />;
}

function Chip({ id, color, onRemove }) {
  return (
    <span className="cmp-chip" style={{ borderColor: color }}>
      <i style={{ background: color }} />{denomById[id].name}
      {onRemove && <button type="button" onClick={onRemove} aria-label={`Remove ${denomById[id].name}`}><Icon k="close" size={14} /></button>}
    </span>
  );
}

function Picker({ sel, onDone, colorOf }) {
  const [pick, setPick] = useState(sel);
  const toggle = (id) => setPick((p) => (p.includes(id) ? p.filter((x) => x !== id) : p.length >= 4 ? p : [...p, id]));
  return (
    <Sheet onClose={() => onDone(pick)} label="Choose denominations">
      <div className="cmp-pk-h"><b>Compare</b><span>{pick.length} of 4 picked</span></div>
      <div className="cmp-quick">{QUICK.map((q) => <button key={q.label} type="button" className="pill sm" onClick={() => onDone(q.ids)}>{q.label}</button>)}</div>
      {GROUPS.map((g) => (
        <div key={g.id}>
          <div className="cmp-fam-h">{g.label}</div>
          {PICKABLE.filter((id) => groupOf(id) === g.id).map((id) => {
            const d = denomById[id];
            const on = pick.includes(id);
            const full = !on && pick.length >= 4;
            return (
              <button key={id} type="button" className={'cmp-row' + (d.sub ? ' sub' : '') + (on ? ' on' : '')} disabled={full} onClick={() => toggle(id)} aria-pressed={on}>
                <i style={{ background: colorOf(id) }} />{d.name}<small>{d.start}</small><span className="cmp-ck" />
              </button>
            );
          })}
        </div>
      ))}
      <div className="cmp-pk-go"><button type="button" className="btn primary" onClick={() => onDone(pick)} disabled={pick.length < 2}>{pick.length < 2 ? 'Pick at least two' : `Compare ${pick.length}`}</button></div>
    </Sheet>
  );
}

// Text for one cell, plus the sub-branch note ("In Amish: …").
// If a sub-branch is compared with the family it inherits from, say "Same as …" instead of repeating the text.
function Cell({ a, topic, lv, ids }) {
  const add = a.adds[topic];
  const same = a.base !== a.id && ids.includes(a.base) && a.t[topic] === answersFor(a.base).t[topic];
  return (
    <>
      {same ? <span className="cmp-same">Same as {denomById[a.base].name}.</span> : a.t[topic][lv]}
      {add && <span className="cmp-add"><b>In {denomById[a.id].name}:</b> {add}</span>}
    </>
  );
}

export default function Compare() {
  const [params, setParams] = useSearchParams();
  const theme = useTheme();
  const level = useLevel();
  const wide = useWide();
  const lv = LV[level] || 'm';
  const [picking, setPicking] = useState(false);

  // ?with=x (from a denomination page) becomes x + a sensible partner.
  let sel = parseSel(params);
  if (params.get('with') && sel.length === 1) sel = [sel[0], partnerFor(sel[0])].filter((v, i, s) => s.indexOf(v) === i);
  const onlyDiff = params.get('diff') === '1';
  useEffect(() => { // tidy ?with=x into ?d=x,partner so the address is bookmarkable
    if (params.get('with') && sel.length >= 2) setParams({ d: sel.join(','), ...(onlyDiff ? { diff: '1' } : {}) }, { replace: true });
  }, [params.get('with')]);
  const set = (ids, diff = onlyDiff) => {
    const p = {};
    if (ids.length) p.d = ids.join(',');
    if (diff) p.diff = '1';
    setParams(p, { replace: true });
  };

  const colorOf = (id) => tone(denomById[id].color, theme);
  const ans = useMemo(() => sel.map(answersFor), [sel.join(',')]);
  const ready = sel.length >= 2;
  const topics = ready ? TOPICS.filter((t) => !onlyDiff || topicDiffers(sel, t.id)) : [];
  const glance = ready ? GLANCE.filter((g) => !onlyDiff || glanceDiffers(sel, g.id)) : [];
  const agree = ready ? agreeFor(sel) : [];

  // Footnotes for "some" or unusual cells.
  const foot = [];
  const footNo = {};
  if (ready) glance.forEach((g) => ans.forEach((a) => { const n = a.notes[g.id]; if (n && (a.glance[g.id] !== 1 || g.id === 'married' || g.id === 'presence')) {
    const prev = foot.findIndex((f) => f.n === n);
    if (prev >= 0) { foot[prev].who.push(a.id); footNo[a.id + g.id] = prev + 1; } else { foot.push({ who: [a.id], n }); footNo[a.id + g.id] = foot.length; }
  } }));

  const head = (
    <div>
      <div className="crumbs2">{SECTION.name} › <b>Compare</b></div>
      <h1 className="h1-sm">Compare denominations</h1>
      <p className="tagline" style={{ marginTop: 6 }}>What each tradition believes and practices, side by side.</p>
    </div>
  );

  const pickRow = (
    <div className="cmp-pick">
      <div className="cmp-chips">
        {sel.map((id) => <Chip key={id} id={id} color={colorOf(id)} onRemove={() => set(sel.filter((x) => x !== id))} />)}
        <button type="button" className="cmp-chip add" onClick={() => setPicking(true)}><Icon k="plus" size={14} />{sel.length ? (sel.length >= 4 ? 'Change' : 'Add') : 'Choose'}<span className="cmp-upto">{sel.length < 4 ? ' (up to 4)' : ''}</span></button>
      </div>
      <div className="cmp-opts">
        <label className="cmp-tg"><button type="button" role="switch" aria-checked={onlyDiff} className={'switch sm' + (onlyDiff ? ' on' : '')} onClick={() => set(sel, !onlyDiff)} />Only differences</label>
        <LevelToggle small />
      </div>
    </div>
  );

  const quick = (
    <div className="cmp-quick">
      <span className="muted">Quick picks:</span>
      {QUICK.map((q) => {
        const on = q.ids.length === sel.length && q.ids.every((i) => sel.includes(i));
        return <button key={q.label} type="button" className={'pill sm' + (on ? ' on' : '')} onClick={() => set(q.ids)}>{q.label}</button>;
      })}
    </div>
  );

  const legend = (
    <div className="cmp-legend"><span><Dot v={1} color="var(--ink-2)" />Yes</span><span><Dot v={0.5} color="var(--ink-2)" />Some churches</span><span><Dot v={0} color="var(--ink-2)" />No</span></div>
  );

  const glanceBox = glance.length > 0 && (
    <section className="cmp-box">
      <h2 className="cmp-h">At a glance</h2>
      <table className={'cmp-gl' + (wide ? '' : ' narrow')}>
        <thead><tr><th />{ans.map((a) => <th key={a.id} scope="col"><i style={{ background: colorOf(a.id) }} /><span>{wide ? denomById[a.id].name : shortName(a.id)}</span></th>)}</tr></thead>
        <tbody>
          {glance.map((g) => (
            <tr key={g.id}>
              <th scope="row">{g.q}</th>
              {ans.map((a) => <td key={a.id}><Dot v={a.glance[g.id]} color={colorOf(a.id)} />{footNo[a.id + g.id] && <sup>{footNo[a.id + g.id]}</sup>}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      {legend}
      {foot.length > 0 && <ol className="cmp-foot">{foot.map((f, i) => <li key={i}><b>{f.who.map(shortName).join(', ')}:</b> {f.n}</li>)}</ol>}
    </section>
  );

  const agreeBox = (
    <section className="cmp-box">
      <h2 className="cmp-h">Where they agree</h2>
      <div className="cmp-agree">{agree.map((a) => <span key={a}>{a}</span>)}</div>
    </section>
  );

  const rootsBox = (
    <section className="cmp-box">
      <h2 className="cmp-h">Roots &amp; size today</h2>
      <table className="cmp-roots"><tbody>
        {ans.map((a) => (
          <tr key={a.id}>
            <th scope="row"><i style={{ background: colorOf(a.id) }} /><Link to={`/history/denominations?d=${a.id}`}>{denomById[a.id].name}</Link></th>
            <td>{a.since}{a.note && <small>{a.note}</small>}{a.size && <small className="cmp-szm">{a.size}</small>}</td>
            {a.size && <td className="sz">{a.size}</td>}
          </tr>
        ))}
      </tbody></table>
      <p className="cmp-small">Membership figures are rounded estimates.</p>
    </section>
  );

  const topicTable = (
    <section className="cmp-box">
      <h2 className="cmp-h">Topic by topic</h2>
      {topics.length === 0 ? <p className="cmp-none">They give the same basic answer on every topic.</p> : (
        <table className="cmp-ct">
          <thead><tr><th />{ans.map((a) => <th key={a.id} scope="col"><Link to={`/history/denominations?d=${a.id}`} className="cmp-colh" style={{ borderColor: colorOf(a.id) }}><i style={{ background: colorOf(a.id) }} />{denomById[a.id].name}</Link></th>)}</tr></thead>
          <tbody>
            {topics.map((t) => {
              const diff = topicDiffers(sel, t.id);
              return (
                <tr key={t.id} className={diff ? 'diff' : ''}>
                  <th scope="row" className="cmp-topic">{t.name}<small>{t.sub}</small>{diff && <em className="cmp-differs">Differs</em>}</th>
                  {ans.map((a) => <td key={a.id}><Cell a={a} topic={t.id} lv={lv} ids={sel} /></td>)}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </section>
  );

  const topicCards = (
    <section>
      <h2 className="cmp-h out">Topic by topic</h2>
      {topics.length === 0 && <p className="cmp-none">They give the same basic answer on every topic.</p>}
      {topics.map((t) => {
        const diff = topicDiffers(sel, t.id);
        return (
          <div key={t.id} className={'cmp-card' + (diff ? ' diff' : '')}>
            <h3>{t.name}{diff && <em className="cmp-differs">Differs</em>}</h3>
            <p className="cmp-card-sub">{t.sub}</p>
            {ans.map((a) => (
              <div key={a.id} className="cmp-trow">
                <span className="bar" style={{ background: colorOf(a.id) }} />
                <div><b>{denomById[a.id].name}</b><span><Cell a={a} topic={t.id} lv={lv} ids={sel} /></span></div>
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );

  return (
    <main className="wrap page stack-lg ch-page cmp-page">
      {head}
      {pickRow}
      {quick}
      {!ready ? (
        <div className="soon-card cmp-empty">
          <p><b>Pick at least two denominations</b> to compare them, or start with a quick pick above.</p>
          <button type="button" className="btn primary" onClick={() => setPicking(true)}><Icon k="plus" size={16} />Choose denominations</button>
        </div>
      ) : (
        <>
          {onlyDiff && <p className="cmp-small" style={{ margin: 0 }}>Showing only what differs. <button type="button" className="link-btn" onClick={() => set(sel, false)}>Show everything</button></p>}
          {wide ? (
            <div className="cmp-top">
              {glanceBox || <section className="cmp-box"><h2 className="cmp-h">At a glance</h2><p className="cmp-none">Same answers to all eight questions.</p></section>}
              <div className="stack-lg">{agreeBox}{rootsBox}</div>
            </div>
          ) : (
            <>{glanceBox}{agreeBox}{rootsBox}</>
          )}
          {wide ? topicTable : topicCards}
          <p className="cmp-small">Each answer describes what that tradition teaches about itself. Where churches within a family differ, the answer says so. Sub-branches share their family’s answers, with notes where they differ.</p>
        </>
      )}

      <nav className="ch-more" aria-label="Church History pages">
        {SECTION.pages.filter((p) => p.to !== '/history/compare').map((p) => <Link key={p.id} to={p.to} className="pill">{p.label} ›</Link>)}
      </nav>

      {picking && <Picker sel={sel} colorOf={colorOf} onDone={(ids) => { setPicking(false); if (ids.length >= 1) set(ids.slice(0, 4)); }} />}
    </main>
  );
}
