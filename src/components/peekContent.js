// What the press-and-hold preview shows for each kind of chip that isn't a book, Bible person,
// king or prophet (those have their own card bodies in BookPeek.jsx). Job #19.
//   kind: 'nation' | 'empire' | 'church' | 'denom' | 'family' | 'event' | 'histperson'
// Each builder returns { title, meta, text, facts?, list?, to, openLabel } or null.
import { nationById, empireById, churchById } from '../data/index.js';
import { DENOMS, denomById, FAMILIES, EVENTS } from '../data/church/denominations.js';
import { personById } from '../data/church/people.js';

// First paragraph, cut at a sentence end near `max` characters.
export function brief(text = '', max = 320) {
  const p = String(text).split(/\n\n+/)[0].trim();
  if (p.length <= max) return p;
  const cut = p.slice(0, max);
  const end = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('." '), cut.lastIndexOf('? '));
  return end > max * 0.5 ? cut.slice(0, end + 1) : cut.replace(/\s+\S*$/, '') + '…';
}

const BUILDERS = {
  nation(id) {
    const n = nationById[id];
    if (!n) return null;
    const when = (n.facts || []).find(([k]) => k === 'When')?.[1];
    return { title: n.title || n.name, meta: [n.group, when].filter(Boolean).join(' · '), text: n.tagline ? `${n.tagline} ${brief(n.who, 220)}` : brief(n.who), facts: (n.facts || []).filter(([k]) => k !== 'When').slice(0, 2), to: `/nation/${n.id}`, openLabel: 'Open nation' };
  },
  empire(id) {
    const e = empireById[id];
    if (!e) return null;
    return { title: e.name, meta: e.dates, text: `${e.tagline} ${brief(e.who, 240)}`, facts: [['Where', e.region]], to: `/empire/${e.id}`, openLabel: 'Open period' };
  },
  church(id) {
    const c = churchById[id];
    if (!c) return null;
    return { title: c.full || c.name, meta: [c.dates, c.region].filter(Boolean).join(' · '), text: `${c.tagline} ${brief(c.who, 220)}`, facts: c.founded ? [['Founded', c.founded]] : [], to: `/church/${c.id}`, openLabel: 'Open church' };
  },
  denom(id) {
    const d = denomById[id];
    if (!d) return null;
    const fam = FAMILIES.find((f) => f.id === d.fam);
    return { title: d.name, meta: [d.years, fam?.name].filter(Boolean).join(' · '), text: d.one ? `${d.one}. ${brief(d.why, 220)}` : brief(d.why), to: `/history/denominations?d=${d.id}`, openLabel: 'Show in the tree' };
  },
  family(id) {
    const f = FAMILIES.find((x) => x.id === id);
    if (!f) return null;
    const members = DENOMS.filter((d) => d.fam === f.id);
    return { title: f.name, meta: `Family of churches · ${members.length} in the tree`, text: '', listLabel: 'Includes', list: members.slice(0, 12).map((d) => d.name), more: Math.max(0, members.length - 12), to: `/history/denominations?fam=${f.id}`, openLabel: 'Show in the tree' };
  },
  event(id) {
    const e = EVENTS.find((x) => x.id === id);
    if (!e) return null;
    const led = (e.led || []).map((d) => denomById[d]?.name).filter(Boolean);
    return { title: e.name, meta: String(e.year), text: brief(e.text, 360), list: led.length ? led : null, listLabel: 'Led to', to: `/history/denominations?ev=${e.id}`, openLabel: 'Show in the tree' };
  },
  histperson(id) {
    const p = personById[id];
    if (!p) return null;
    return { title: p.name, meta: [p.years, p.role].filter(Boolean).join(' · '), text: p.one, facts: (p.facts || []).slice(0, 3), to: `/history/people/${p.id}`, openLabel: 'Open' };
  },
};

export function peekContent(kind, id) {
  return BUILDERS[kind]?.(id) || null;
}
