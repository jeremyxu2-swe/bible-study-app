import { Link } from 'react-router-dom';
import { ERA_MORE } from '../data/eras.js';
import { nationById } from '../data/nations.js';
import { PersonLink, PeekChip } from './BookPeek.jsx';

// "Period summary & key people" body: a fuller summary, then People and Nations chip lines.
export default function EraMore({ era, people }) {
  const more = ERA_MORE[era.id];
  const paras = more?.detail || [era.summary];
  const nations = (more?.nations || []).map((id) => nationById[id]).filter(Boolean);
  return (
    <>
      {paras.map((t, i) => <p key={i}>{t}</p>)}
      {(people.length > 0 || nations.length > 0) && (
        <div className="chip-lines era-chips">
          {people.length > 0 && (
            <div className="chip-line"><span className="chip-lab">People</span>
              <div className="c-people">
                {people.map((p) => <PersonLink key={p.id} personId={p.id} className="chip plain">{p.name}</PersonLink>)}
              </div>
            </div>
          )}
          {nations.length > 0 && (
            <div className="chip-line"><span className="chip-lab">Nations</span>
              <div className="c-people">
                {nations.map((n) => (
                  <PeekChip key={n.id} kind="nation" id={n.id} className="nation-tag" to={`/nation/${n.id}`}><span className="nflag" aria-hidden="true">⚑</span>{n.name}</PeekChip>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
