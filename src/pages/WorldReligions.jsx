import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { RELIGIONS, religionById, FAMILIES, COMPARE, COMPARE_COLS, firstSentence } from '../data/religions/index.js';
import LevelToggle from '../components/LevelToggle.jsx';
import NoteEditor from '../components/NoteEditor.jsx';
import { noteKey } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';

// World Religions: the overview (/religions) and one page per faith (/religions/:id).
// Content: data/religions/. Reading level: Simple shows the short lead and the first sentence of each
// item, the first six key figures, and the branch table without its sub-groups; Moderate shows the full
// text and sub-groups; Detailed adds the note on the name and the groups marked level 'd'.
// Colors: each faith's color is --c on its elements; light mode darkens it in styles.css (.wr-*).

const PEW_URL = 'https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/';

const initials = (name) => name.replace(/^(The|Guru|Emperor|King|Rabbi|Maharaja|Mata|Bhai|Al-|al-)\s+/, '')
  .split(/[\s,-]+/).filter((w) => /^[A-Z]/.test(w) && !['and', 'of', 'the'].includes(w)).map((w) => w[0]).slice(0, 2).join('') || name[0];

function FaithDot({ c }) {
  return <i className="wr-dot" style={{ '--c': c }} aria-hidden="true" />;
}

// ── Overview ──────────────────────────────────────────────────────────────────

export function ReligionsOverview() {
  return (
    <main className="wrap page wr wr-ov">
      <div className="crumbs2">World Religions › <b>Overview</b></div>
      <h1 className="h1-sm wr-h1">World Religions</h1>
      <p className="tagline wr-tag">The major faiths of the world: where they came from, who shaped them, how they branched, and what they believe.</p>

      {FAMILIES.map((f) => (
        <section key={f.id} className="wr-fam" aria-label={f.name}>
          <div className="wr-sh"><h2>{f.name}</h2></div>
          <p className="wr-sub">{f.desc}</p>
          <div className="wr-cards">
            {f.ids.map((id) => {
              const r = religionById[id];
              return (
                <Link key={id} to={`/religions/${id}`} className="wr-card" style={{ '--c': r.color }}>
                  <b>{r.name}</b>
                  <span className="wr-size">{r.followers} · {r.share} of the world</span>
                  <small>{r.tagline}</small>
                  <span className="wr-open">Origins, figures, branches & beliefs ›</span>
                </Link>
              );
            })}
            {f.christianity && (
              <Link to="/history/denominations" className="wr-card wr-card-x" style={{ '--c': '#D9B26A' }}>
                <b>Christianity</b>
                <span className="wr-size">2.3 billion · 28.8% of the world</span>
                <small>Covered in Bible Summaries and Church History.</small>
                <span className="wr-open">Church History ›</span>
              </Link>
            )}
          </div>
        </section>
      ))}

      <section className="wr-fam" aria-label="Side by side">
        <div className="wr-sh"><h2>Side by side</h2></div>
        <p className="wr-sub">Islam is the largest of the six, followed by Hinduism. Islam, Judaism and Mormonism share Abrahamic roots and many of the same prophets, while Hinduism, Buddhism and Sikhism share the ideas of karma and rebirth.</p>
        <div className="wr-tablewrap">
          <table className="wr-table wr-cmp">
            <thead><tr><th>Religion</th>{COMPARE_COLS.map((c) => <th key={c}>{c}</th>)}</tr></thead>
            <tbody>
              {COMPARE.map((row) => {
                const r = religionById[row.id];
                return (
                  <tr key={row.id} style={{ '--c': r.color }}>
                    <th scope="row"><Link to={`/religions/${r.id}`}><FaithDot c={r.color} />{r.name}</Link></th>
                    {row.cells.map((c, i) => <td key={i}>{c}</td>)}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="wr-mcards">
          {COMPARE.map((row) => {
            const r = religionById[row.id];
            return (
              <Link key={row.id} to={`/religions/${r.id}`} className="wr-mcard" style={{ '--c': r.color }}>
                <b>{r.name}</b>
                <dl>{row.cells.map((c, i) => <div key={i}><dt>{COMPARE_COLS[i]}</dt><dd>{c}</dd></div>)}</dl>
              </Link>
            );
          })}
        </div>
        <p className="wr-note">Follower counts are rounded estimates: 2020 figures from <a href={PEW_URL} target="_blank" rel="noopener">Pew Research Center</a> (June 2025), except Sikhism (a rough estimate; few countries count Sikhs separately) and Mormonism (the church’s own count for the end of 2025). About 1.9 billion people describe themselves as having no religion.</p>
      </section>

      <div className="wr-notes">
        <NoteEditor noteKey={noteKey('religion', 'all')} title="My notes on world religions" />
      </div>
    </main>
  );
}

// ── One religion ──────────────────────────────────────────────────────────────

function Item({ it, simple, numbered, n }) {
  return (
    <li className="wr-item">
      {numbered && <span className="wr-num" aria-hidden="true">{n}</span>}
      <div>
        <b>{it.t}</b>
        <p>{simple ? firstSentence(it.text) : it.text}</p>
        {!simple && it.sub && (
          <ul className="wr-subl">{it.sub.map((s) => <li key={s.t}><b>{s.t}</b> {s.text}</li>)}</ul>
        )}
      </div>
    </li>
  );
}

function Figure({ f, c }) {
  return (
    <div className="wr-fig" style={{ '--c': c }}>
      <span className="wr-av" aria-hidden="true">{initials(f.name)}</span>
      <div className="wr-fig-t">
        <b>{f.name}</b>
        {f.years && <small className="wr-yrs">{f.years}</small>}
        <span>{f.role}</span>
      </div>
    </div>
  );
}

const SECS = (r) => [
  ['short', 'In short'], ['origins', 'Origins'], ['figures', 'Key figures'],
  ['branches', r.branches.title || 'Branches'], ['beliefs', 'Beliefs'], ['practices', 'Practices'], ['texts', 'Sacred texts'],
];

export function ReligionPage() {
  const { id } = useParams();
  const level = useLevel();
  const simple = level === 'simple';
  const detailed = level === 'detailed';
  const r = religionById[id];
  const [cur, setCur] = useState('short');
  const navRef = useRef(null);

  useEffect(() => {
    if (!r) return undefined;
    const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) setCur(en.target.id.replace('wr-', '')); }), { rootMargin: '-80px 0px -75% 0px' });
    document.querySelectorAll('.wr-main > section').forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [id, level, r]);
  useEffect(() => {
    const a = navRef.current?.querySelector('a.on');
    if (a && navRef.current.scrollWidth > navRef.current.clientWidth) navRef.current.scrollTo({ left: a.offsetLeft - 20, behavior: 'smooth' });
  }, [cur]);
  useEffect(() => { setCur('short'); }, [id]);

  if (!r) return <Navigate to="/religions" replace />;

  const fam = FAMILIES.find((f) => f.id === r.family);
  const i = RELIGIONS.indexOf(r);
  const prev = RELIGIONS[i - 1], next = RELIGIONS[i + 1];
  const go = (e, s) => { e.preventDefault(); document.getElementById('wr-' + s)?.scrollIntoView({ behavior: 'smooth' }); };

  // Simple: the first group's first six figures.
  const figGroups = simple ? [{ ...r.figures[0], items: r.figures[0].items.slice(0, 6) }] : r.figures;
  const figTotal = r.figures.reduce((a, g) => a + g.items.length, 0);
  const groups = simple ? [] : r.branches.groups.filter((g) => g.level !== 'd' || detailed);

  return (
    <main className={`wrap page wr wr-rel lv-${level}`} style={{ '--c': r.color }}>
      <div className="crumbs2"><Link to="/religions">World Religions</Link> › <b>{r.name}</b></div>

      <nav className="wr-views" aria-label="Religions">
        {RELIGIONS.map((x) => (
          <Link key={x.id} to={`/religions/${x.id}`} style={{ '--c': x.color }} className={x.id === r.id ? 'on' : ''} aria-current={x.id === r.id ? 'page' : undefined}>
            <i aria-hidden="true" />{x.name}
          </Link>
        ))}
      </nav>

      <div className="wr-head">
        <span className="wr-eyebrow">{fam.name}</span>
        <h1 className="h1-sm wr-h1">{r.name}</h1>
        <p className="tagline wr-tag">{r.tagline}</p>
        <div className="wr-tools"><LevelToggle small /><span className="muted">Reading level</span></div>
      </div>

      <dl className="wr-facts">
        {r.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
      </dl>

      <nav className="wr-snav" ref={navRef} aria-label="Sections">
        {SECS(r).map(([sid, l]) => <a key={sid} href={'#wr-' + sid} className={cur === sid ? 'on' : ''} onClick={(e) => go(e, sid)}>{l}</a>)}
      </nav>

      <div className="wr-grid">
        <div className="wr-main">
          <section id="wr-short">
            <div className="wr-sh"><h2>In short</h2></div>
            <p className="wr-lead">{simple ? r.lead.s : r.lead.m}</p>
            {detailed && r.about && <p className="wr-about">{r.about}</p>}
          </section>

          <section id="wr-origins">
            <div className="wr-sh"><h2>Origins</h2><span>How it began and spread</span></div>
            <ol className="wr-tl">
              {r.origins.map((o) => (
                <li key={o.t}>
                  <span className="wr-when">{o.when}</span>
                  <span className="wr-rail" aria-hidden="true"><i /><b /><i /></span>
                  <div className="wr-tlx"><b>{o.t}</b><p>{simple ? firstSentence(o.text) : o.text}</p></div>
                </li>
              ))}
            </ol>
          </section>

          <section id="wr-figures">
            <div className="wr-sh"><h2>Key figures</h2><span>{figTotal} {figTotal === 1 ? 'entry' : 'entries'}</span></div>
            {figGroups.map((g, k) => (
              <div key={k} className="wr-figgrp">
                {g.title && <h3 className="wr-h3">{g.title}</h3>}
                {g.note && <p className="wr-sub">{g.note}</p>}
                <div className="wr-figs">{g.items.map((f) => <Figure key={f.name} f={f} c={r.color} />)}</div>
              </div>
            ))}
            {simple && figTotal > 6 && <p className="wr-more">Switch to Moderate to see all {figTotal}.</p>}
          </section>

          <section id="wr-branches">
            <div className="wr-sh"><h2>{r.branches.title || 'Branches'}</h2></div>
            <p className="wr-sub">{simple ? firstSentence(r.branches.intro) : r.branches.intro}</p>
            <div className="wr-tablewrap">
              <table className="wr-table wr-br">
                <thead><tr><th>{r.branches.title ? r.branches.title.replace(/s$/, '') : 'Branch'}</th>{r.branches.cols.map((c) => <th key={c}>{c}</th>)}</tr></thead>
                <tbody>
                  {r.branches.rows.map((row) => (
                    <tr key={row.name} style={{ '--c': row.color || r.color }}>
                      <th scope="row"><span className="wr-brn"><FaithDot c={row.color || r.color} />{row.name}</span>{row.sub && <small>{row.sub}</small>}</th>
                      {row.cells.map((c, k) => <td key={k}>{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="wr-mcards">
              {r.branches.rows.map((row) => (
                <div key={row.name} className="wr-mcard" style={{ '--c': row.color || r.color }}>
                  <b>{row.name}</b>{row.sub && <small>{row.sub}</small>}
                  <dl>{row.cells.map((c, k) => <div key={k}><dt>{r.branches.cols[k]}</dt><dd>{c}</dd></div>)}</dl>
                </div>
              ))}
            </div>
            {groups.map((g) => (
              <div key={g.title} className="wr-grp">
                <h3 className="wr-h3">{g.title}</h3>
                {g.intro && <p className="wr-sub">{g.intro}</p>}
                <ul className="wr-items">{g.items.map((it) => <Item key={it.t} it={it} />)}</ul>
              </div>
            ))}
            {simple && r.branches.groups.length > 0 && <p className="wr-more">Switch to Moderate to see the schools and sub-groups.</p>}
          </section>

          <section id="wr-beliefs">
            <div className="wr-sh"><h2>Core beliefs</h2></div>
            {r.beliefs.intro && <p className="wr-sub">{r.beliefs.intro}</p>}
            <ul className="wr-items wr-cols">{r.beliefs.items.map((it) => <Item key={it.t} it={it} simple={simple} />)}</ul>
          </section>

          <section id="wr-practices">
            <div className="wr-sh"><h2>Practices</h2></div>
            {r.practices.intro && <p className="wr-sub">{r.practices.intro}</p>}
            <ul className={'wr-items' + (r.practices.numbered ? ' wr-numd' : ' wr-cols')}>
              {r.practices.items.map((it, k) => <Item key={it.t} it={it} simple={simple} numbered={r.practices.numbered} n={k + 1} />)}
            </ul>
            {!simple && r.practices.more && (
              <div className="wr-grp">
                <h3 className="wr-h3">{r.practices.more.title}</h3>
                <ul className="wr-items wr-cols">{r.practices.more.items.map((it) => <Item key={it.t} it={it} />)}</ul>
              </div>
            )}
          </section>

          <section id="wr-texts">
            <div className="wr-sh"><h2>Sacred texts</h2></div>
            {r.texts.intro && <p className="wr-sub">{r.texts.intro}</p>}
            {r.texts.groups.map((g, k) => (
              <div key={k} className={g.title ? 'wr-grp' : ''}>
                {g.title && <h3 className="wr-h3">{g.title}</h3>}
                {g.note && <p className="wr-sub">{g.note}</p>}
                <ul className="wr-items">{g.items.map((it) => <Item key={it.t} it={it} simple={simple} />)}</ul>
              </div>
            ))}
          </section>
        </div>

        <aside className="wr-side">
          <NoteEditor noteKey={noteKey('religion', r.id)} title={`My notes on ${r.name}`} />
          <div className="wr-scard">
            <div className="wr-k">The other religions</div>
            <ul className="wr-others">
              {RELIGIONS.filter((x) => x.id !== r.id).map((x) => (
                <li key={x.id}><Link to={`/religions/${x.id}`}><FaithDot c={x.color} />{x.name}<small>{x.followers}</small></Link></li>
              ))}
              <li><Link to="/religions">Compare all six side by side ›</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="wr-fair">
        <b>How this page is written.</b> {r.name} is described the way its own followers understand it. Follower counts are rounded estimates.
        <ul className="wr-src">{r.sources.map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noopener">{label}</a></li>)}</ul>
      </div>

      <nav className="wr-pn" aria-label="More religions">
        {prev ? <Link to={`/religions/${prev.id}`} className="pill">‹ {prev.name}</Link> : <Link to="/religions" className="pill">‹ Overview</Link>}
        {next ? <Link to={`/religions/${next.id}`} className="pill">{next.name} ›</Link> : <Link to="/religions" className="pill">Overview ›</Link>}
      </nav>
    </main>
  );
}
