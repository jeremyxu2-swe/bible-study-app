import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CHARACTERS } from '../data/index.js';
import { KINGS, VERDICTS, reignSpan } from '../data/kings.js';
import { charIdOfKing } from '../data/kingProfiles/index.js';

// "Kings of Israel & Judah": all 42 rulers in the order they began to reign, oldest first.
const KINGS_PILL = 'Kings of Israel & Judah';
const KING_OF = Object.fromEntries(KINGS.map((k) => [charIdOfKing(k.id), k]));
const KINGDOM = { u: 'United', i: 'Israel', j: 'Judah' };

export default function People() {
  const [q, setQ] = useState('');
  const [group, setGroup] = useState('All');
  const base = Array.from(new Set(CHARACTERS.map((c) => c.group)));
  const groups = ['All', ...base.slice(0, base.indexOf('Kings & Kingdom') + 1), KINGS_PILL, ...base.slice(base.indexOf('Kings & Kingdom') + 1)];
  const kingsView = group === KINGS_PILL;
  const pool = kingsView
    ? [...KINGS].sort((a, b) => b.start - a.start || (a.kingdom === 'j' ? -1 : 1)).map((k) => CHARACTERS.find((c) => c.id === charIdOfKing(k.id))).filter(Boolean)
    : CHARACTERS;
  const list = pool.filter((c) =>
    (group === 'All' || kingsView || c.group === group) &&
    (!q || (c.name + ' ' + c.title + ' ' + (c.meaning || '')).toLowerCase().includes(q.toLowerCase())));

  return (
    <main className="wrap page stack-lg people-page" style={{ gap: 24 }}>
      <div className="stack" style={{ gap: 8 }}>
        <h1 className="h1-sm">Characters</h1>
        <p className="tagline">The people of the story — who they were and where they appear.</p>
      </div>
      <div className="row people-tools" style={{ gap: 12 }}>
        <label className="sr-only" htmlFor="pq">Filter characters</label>
        <input id="pq" className="input" placeholder="Filter by name…" value={q} onChange={(e) => setQ(e.target.value)} style={{ minWidth: 240 }} />
        <div className="row pill-scroll" role="group" aria-label="Group">
          {groups.map((g) => (
            <button key={g} type="button" className={'pill' + (g === group ? ' on' : '')} aria-pressed={g === group} onClick={() => setGroup(g)}>{g}</button>
          ))}
        </div>
      </div>
      <div className="people-grid">
        {list.map((c) => (
          <Link key={c.id} to={`/people/${c.id}`} className="person">
            <span className="avatar" aria-hidden="true">{c.name[0]}</span>
            <span className="stack" style={{ gap: 3, minWidth: 0 }}>
              <span className="person-name">{c.name}</span>
              <span className="person-sub">{kingsView && KING_OF[c.id]
                ? <>{KINGDOM[KING_OF[c.id].kingdom]} · {reignSpan(KING_OF[c.id])} BC · <span className={'v-' + KING_OF[c.id].verdict + ' pk-verdict'}>{VERDICTS[KING_OF[c.id].verdict].label}</span></>
                : c.meaning ? <>Name means <span className="ink-2">“{c.meaning}”</span></> : c.title}</span>
            </span>
          </Link>
        ))}
        {list.length === 0 && <div className="empty">No one matches that filter.</div>}
      </div>
    </main>
  );
}
