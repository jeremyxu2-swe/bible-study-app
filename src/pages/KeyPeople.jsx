import { Link, useParams, useSearchParams } from 'react-router-dom';
import { PEOPLE, personById, traditionColor, initials } from '../data/church/people.js';
import PEOPLE_LEVELS from '../data/church/peopleLevels.js';
import { ERAS, denomById } from '../data/church/denominations.js';
import NoteEditor from '../components/NoteEditor.jsx';
import { PeekChip } from '../components/BookPeek.jsx';
import LevelToggle from '../components/LevelToggle.jsx';
import { Passage } from './Denominations.jsx';
import { noteKey } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';

// Church History › Key People: the list grouped by era (/history/people, ?era= filters) and each person's page (/history/people/:id).

const eraById = Object.fromEntries(ERAS.map((e) => [e.id, e]));
const eraRange = (e) => `${e.from === 33 ? 100 : e.from} – ${e.to === 2025 ? 'today' : e.to}`;

function Avatar({ p, size = 'md' }) {
  return <span className={'kp-av ' + size} style={{ background: traditionColor(p) }} aria-hidden="true">{initials(p.name)}</span>;
}

export function KeyPeopleList() {
  const [params, setParams] = useSearchParams();
  const era = eraById[params.get('era')] ? params.get('era') : 'all';
  const groups = ERAS.filter((e) => era === 'all' || e.id === era).map((e) => ({ e, list: PEOPLE.filter((p) => p.era === e.id) }));
  return (
    <main className="wrap page kp-page">
      <div className="dn-head">
        <div className="crumbs2">Church History › <b>Key People</b></div>
        <h1 className="h1-sm">Key People</h1>
        <p className="tagline">The men and women who shaped the church after the apostles.</p>
      </div>
      <div className="kp-chips" role="toolbar" aria-label="Filter by era">
        {[{ id: 'all', label: 'All' }, ...ERAS].map((e) => (
          <button key={e.id} type="button" className={'dn-ev' + (era === e.id ? ' on' : '')} aria-pressed={era === e.id}
            onClick={() => setParams(e.id === 'all' ? {} : { era: e.id }, { replace: true })}>{e.label}</button>
        ))}
      </div>
      {groups.map(({ e, list }) => (
        <section key={e.id} className="kp-era" aria-label={e.label}>
          <div className="kp-era-h"><h2>{e.label}</h2><small>{eraRange(e)}</small></div>
          <div className="kp-grid">
            {list.map((p) => (
              <Link key={p.id} to={`/history/people/${p.id}`} className="kp-card">
                <Avatar p={p} />
                <span className="kp-card-t"><b>{p.name}</b><small>{p.years} · {p.role}</small></span>
              </Link>
            ))}
          </div>
        </section>
      ))}
      <p className="dn-hint">The color of each circle shows the person’s tradition in the <Link to="/history/denominations">family tree</Link>.</p>
    </main>
  );
}

function RelatedChip({ r }) {
  const p = personById[r];
  return p
    ? <PeekChip kind="histperson" id={p.id} to={`/history/people/${p.id}`} className="chip dn-chip kp-rel"><span className="dn-sw" style={{ background: traditionColor(p) }} />{p.name}</PeekChip>
    : <span className="chip plain dn-chip">{r}</span>;
}

export function KeyPerson() {
  const { id } = useParams();
  const level = useLevel();
  const p = personById[id];
  if (!p) return <main className="wrap page"><h1 className="h1-sm">Person not found</h1><Link to="/history/people">All key people</Link></main>;
  const L = PEOPLE_LEVELS[p.id];
  const trad = denomById[p.trad];
  const i = PEOPLE.indexOf(p);
  const prev = PEOPLE[i - 1], next = PEOPLE[i + 1];
  const era = eraById[p.era];

  return (
    <main className="wrap page kp-page kp-person">
      <div>
        <div className="crumbs2"><Link to="/history/people">Key People</Link> › <Link to={`/history/people?era=${era.id}`}>{era.label}</Link></div>
        <div className="kp-head">
          <Avatar p={p} size="lg" />
          <div className="kp-head-t">
            <h1 className="h1-sm">{p.name}</h1>
            <div className="dn-meta">{p.years} · {p.role}</div>
          </div>
        </div>
        <div className="kp-level"><LevelToggle small /></div>
      </div>

      <div className="kp-body">
        {level !== 'simple' && p.facts && (
          <div className="kp-facts">{p.facts.map(([k, v]) => <div key={k}><b>{k}</b>{v}</div>)}</div>
        )}
        {!L && <p className="dn-lead">{p.one}</p>}
        {L && level === 'simple' && <p className="dn-lead">{L.s}</p>}
        {L && level === 'moderate' && <p className="dn-p">{L.m}</p>}
        {L && level === 'detailed' && L.d.map((t, k) => <p key={k} className="dn-p">{t}</p>)}
        {!L && <p className="muted kp-soon">The fuller story for {p.name} is being written.</p>}

        <h3 className="dn-h">Tradition</h3>
        <div className="dn-chips">
          <PeekChip kind="denom" id={trad.id} to={`/history/denominations?d=${trad.id}`} className="chip dn-chip kp-rel"><span className="dn-sw" style={{ background: trad.color }} />{trad.name} · see in the tree ›</PeekChip>
        </div>

        {level !== 'simple' && p.related?.length > 0 && (
          <><h3 className="dn-h">Related people</h3><div className="dn-chips">{p.related.map((r) => <RelatedChip key={r} r={r} />)}</div></>
        )}
        {p.verses?.length > 0 && (
          <><h3 className="dn-h">Key passages</h3><div className="dn-chips">{p.verses.slice(0, level === 'simple' ? 1 : 3).map((v) => <Passage key={v} text={v} />)}</div></>
        )}

        <div className="dn-notes">
          <NoteEditor noteKey={noteKey('person', p.id)} title={`My notes on ${p.name}`} />
        </div>

        <nav className="kp-nav" aria-label="More people">
          {prev ? <Link to={`/history/people/${prev.id}`} className="pill">‹ {prev.name}</Link> : <span />}
          {next && <Link to={`/history/people/${next.id}`} className="pill">{next.name} ›</Link>}
        </nav>
      </div>
    </main>
  );
}
