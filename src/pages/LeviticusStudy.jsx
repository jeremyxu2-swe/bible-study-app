import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SECS, MAPS, OFF, GAR, PSTORY, CLEAN, DOA, HOLY, FEASTS, SYM } from '../data/leviticusStudy.js';
import LevelToggle from '../components/LevelToggle.jsx';
import NoteEditor from '../components/NoteEditor.jsx';
import Ref from '../components/Ref.jsx';
import { noteKey } from '../store/notes.js';
import { useLevel } from '../store/prefs.js';

// Books › Leviticus › Study. One long page with a sticky row of section buttons:
//   the big question and key verse, section buttons for the book, then Offerings · Priests · Clean & unclean ·
//   Day of Atonement (a tabernacle plan with a 9-step walkthrough) · Holy living · Feasts (a calendar of the year) ·
//   Jubilee · Symbols. Every section ends with a gold "Points to Christ" box.
// Reading level: Simple hides .lvs-m and .lvs-d; Moderate hides .lvs-d (see styles.css).

const lev = (ch) => `/book/leviticus/${ch}`;
const Christ = ({ children, className = '' }) => <div className={'lvs-christ ' + className}><div className="lvs-k">Points to Christ</div>{children}</div>;
const firstCh = (s) => (String(s).match(/(\d+)/) || [])[1] || 1;

function Head({ title, refText }) {
  return <div className="lvs-sh"><h2>{title}</h2><span>{refText}</span></div>;
}

function Priests() {
  const [g, setG] = useState(0);
  return (
    <>
      <div className="lvs-pgrid">
        <div className="lvs-robe">
          <svg viewBox="0 0 260 360" role="img" aria-label="The high priest’s garments">
            <path d="M130 70c-26 0-40 12-44 30l-30 210c-2 12 6 20 18 20h112c12 0 20-8 18-20L174 100c-4-18-18-30-44-30z" fill="#3E5C8A" opacity=".85" />
            <path d="M96 104h68l12 120H84z" fill="#8A6A2E" opacity=".9" />
            <rect x="104" y="112" width="52" height="56" rx="4" fill="#C9A24E" />
            <rect x="84" y="210" width="92" height="10" fill="#B03A3A" opacity=".85" />
            <circle cx="130" cy="44" r="24" fill="#E9E1CF" />
            <rect x="104" y="20" width="52" height="22" rx="10" fill="#F4F0E6" />
            <rect x="116" y="28" width="28" height="7" rx="2" fill="#D9B26A" />
            <path d="M68 318h124" stroke="#D9B26A" strokeWidth="3" strokeDasharray="3 7" />
            {GAR.map(([n, , , x, y]) => (
              <g key={n} className={'lvs-hot' + (g === n ? ' on' : '')} onClick={() => setG(n)} role="button" tabIndex={0} aria-label={GAR[n - 1][1]}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setG(n); } }}>
                <circle cx={x} cy={y} r="12" /><text x={x} y={y}>{n}</text>
              </g>
            ))}
          </svg>
        </div>
        <div className="lvs-glist">
          {GAR.map(([n, name, text]) => (
            <button key={n} type="button" className={'lvs-gi' + (g === n ? ' on' : '')} onClick={() => setG(n)}>
              <i>{n}</i><div><b>{name}</b><span>{text}</span></div>
            </button>
          ))}
        </div>
      </div>
      <div className="lvs-story">
        {PSTORY.map(([r, t, x]) => <div key={r} className="lvs-st"><Ref className="lvs-ref" to={lev(firstCh(r))}>{r}</Ref><b>{t}</b>{x}</div>)}
      </div>
    </>
  );
}

function Atonement() {
  const [si, setSi] = useState(0);
  const s = DOA[si];
  const on = (id) => (s.loc.includes(id) ? ' hl' : '');
  return (
    <div className="lvs-doa">
      <div className="lvs-plan">
        <svg viewBox="0 0 600 300" role="img" aria-label="Plan of the tabernacle, with this step’s location highlighted">
          <rect x="10" y="16" width="420" height="250" rx="6" className="pl-court" />
          <text x="20" y="34" className="pl-lab">COURTYARD</text>
          <rect x="410" y="110" width="20" height="60" className={'pl-loc pl-plain' + on('gate')} />
          <text x="420" y="104" className="pl-lab" textAnchor="middle">Gate</text>
          <rect x="40" y="86" width="230" height="108" className="pl-tent" />
          <rect x="40" y="86" width="70" height="108" className={'pl-loc pl-mhp' + on('mhp')} />
          <text x="75" y="80" className={'pl-lab' + on('mhp')} textAnchor="middle">Most Holy Place</text>
          <text x="190" y="80" className="pl-lab" textAnchor="middle">Holy Place</text>
          <line x1="110" y1="86" x2="110" y2="194" className={'pl-loc pl-veil' + on('veil')} strokeWidth="3" strokeDasharray="5 3" />
          <text x="110" y="212" className={'pl-lab' + on('veil')} textAnchor="middle">Veil</text>
          <rect x="60" y="126" width="30" height="28" rx="3" className={'pl-loc pl-gold' + on('ark')} />
          <text x="75" y="172" className={'pl-lab' + on('ark')} textAnchor="middle">Ark · mercy seat</text>
          <rect x="122" y="131" width="16" height="16" rx="2" className={'pl-loc pl-gold' + on('incense')} />
          <text x="150" y="128" className={'pl-lab' + on('incense')}>Incense altar</text>
          <rect x="180" y="100" width="44" height="18" rx="2" className="pl-furn" /><text x="202" y="113" className="pl-lab pl-on" textAnchor="middle">Table</text>
          <rect x="180" y="160" width="44" height="18" rx="2" className="pl-furn" /><text x="202" y="173" className="pl-lab pl-on" textAnchor="middle">Lamp</text>
          <rect x="266" y="120" width="10" height="40" className={'pl-loc pl-plain' + on('door')} />
          <text x="300" y="206" className={'pl-lab' + on('door')}>Tent entrance</text>
          <circle cx="312" cy="140" r="12" className={'pl-loc pl-laver' + on('laver')} />
          <text x="312" y="168" className={'pl-lab' + on('laver')} textAnchor="middle">Basin</text>
          <rect x="345" y="118" width="44" height="44" rx="3" className={'pl-loc pl-altar' + on('altar')} />
          <text x="367" y="178" className={'pl-lab' + on('altar')} textAnchor="middle">Bronze altar</text>
          <rect x="440" y="16" width="150" height="250" rx="6" className="pl-out" strokeDasharray="4 5" />
          <text x="515" y="34" className="pl-lab" textAnchor="middle">OUTSIDE THE CAMP</text>
          <path d="M465 230 q30-40 60-20 t60-30" className="pl-path" />
          <circle cx="515" cy="200" r="16" className={'pl-loc pl-plain' + on('wild')} />
          <text x="515" y="205" textAnchor="middle" fontSize="15">🐐</text>
          <text x="515" y="236" className={'pl-lab' + on('wild')} textAnchor="middle">Wilderness</text>
          <rect x="470" y="70" width="90" height="40" rx="6" className={'pl-loc pl-plain' + on('out')} />
          <text x="515" y="94" className={'pl-lab' + on('out')} textAnchor="middle">Burned outside</text>
          <text x="20" y="288" className="pl-lab">West</text><text x="580" y="288" className="pl-lab" textAnchor="end">East · entrance</text>
        </svg>
        <div className="lvs-steps" role="group" aria-label="Steps of the day">
          {DOA.map((x, i) => <button key={i} type="button" className={i === si ? 'on' : ''} aria-pressed={i === si} title={x.t} onClick={() => setSi(i)}>{i + 1}</button>)}
        </div>
      </div>
      <div className="lvs-stepcard" aria-live="polite">
        <div className="lvs-k">Step {si + 1} of {DOA.length} · <Ref to={lev(16)}>Leviticus {s.r}</Ref></div>
        <h3>{s.t}</h3>
        <p>{s.p}</p>
        <Christ>{s.c}</Christ>
        <div className="lvs-nav2">
          <button type="button" disabled={!si} onClick={() => setSi(si - 1)}>‹ Back</button>
          <button type="button" className="pri" disabled={si === DOA.length - 1} onClick={() => setSi(si + 1)}>Next step ›</button>
        </div>
      </div>
    </div>
  );
}

const MONTHS = [['Nisan', 'Mar–Apr'], ['Iyyar', 'Apr–May'], ['Sivan', 'May–Jun'], ['Tammuz', 'Jun–Jul'], ['Av', 'Jul–Aug'], ['Elul', 'Aug–Sep'], ['Tishri', 'Sep–Oct']];
const W = [3, 1, 1.4, 0.7, 0.7, 0.7, 3];
const WT = W.reduce((a, b) => a + b);
const X = (m, d) => ((W.slice(0, m - 1).reduce((a, b) => a + b, 0) + (W[m - 1] * (d - 1)) / 30) / WT) * 100;
const ROW = { pass: 0, unl: 1, first: 2, weeks: 0, trum: 0, atone: 1, booths: 2 };

function Feasts() {
  const [sel, setSel] = useState('pass');
  const f = FEASTS.find((x) => x.id === sel);
  return (
    <>
      <div className="lvs-cal">
        <div className="lvs-months" style={{ gridTemplateColumns: W.map((w) => w + 'fr').join(' ') }}>
          {MONTHS.map(([a, b], i) => (i >= 3 && i <= 5
            ? <span key={a} title={`${a} · ${b}`}><b>{i + 1}</b>{a}</span>
            : <span key={a}><b>{i + 1} · {a}</b>{b}</span>))}
        </div>
        <div className="lvs-track">
          <div className="lvs-season" style={{ left: 0, width: X(3, 12) + '%' }}><small>Spring feasts</small></div>
          <div className="lvs-season" style={{ left: X(7, 1) - 1 + '%', width: 100 - X(7, 1) + 1 + '%' }}><small>Fall feasts</small></div>
          {FEASTS.map((x) => {
            const l = X(x.m, x.s);
            const w = Math.max(X(x.m, x.e + 1) - l, 0);
            return (
              <button key={x.id} type="button" className={'lvs-fe' + (x.id === sel ? ' on' : '')} aria-pressed={x.id === sel} onClick={() => setSel(x.id)}
                style={{ '--c': `var(${x.c})`, left: l + '%', minWidth: w + '%', top: 8 + ROW[x.id] * 30 }}>
                {x.n.split(' (')[0]}
              </button>
            );
          })}
        </div>
        <div className="lvs-flist">
          {FEASTS.map((x) => (
            <button key={x.id} type="button" className={x.id === sel ? 'on' : ''} aria-pressed={x.id === sel} style={{ '--c': `var(${x.c})` }} onClick={() => setSel(x.id)}>
              <i /><b>{x.n}</b><small>{x.d}</small>
            </button>
          ))}
        </div>
      </div>
      <div className="lvs-fdetail">
        <div className="lvs-card"><div className="lvs-k">{f.d} · <Ref to={lev(23)}>Leviticus {f.r}</Ref></div><h3>{f.n}</h3><p>{f.p}</p></div>
        <Christ className="lvs-card"><p>{f.x}</p><span className={'lvs-status ' + f.st}>{f.st === 'done' ? 'Fulfilled at his first coming' : 'Many Christians see this as pointing to his return'}</span></Christ>
      </div>
    </>
  );
}

export default function LeviticusStudy() {
  const level = useLevel();
  const [cur, setCur] = useState(SECS[0][0]);
  const [openSym, setOpenSym] = useState(() => new Set());
  const navRef = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) setCur(en.target.id.replace('lvs-', '')); }), { rootMargin: '-80px 0px -75% 0px' });
    document.querySelectorAll('.lvs section').forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const a = navRef.current?.querySelector('a.on');
    if (a && navRef.current.scrollWidth > navRef.current.clientWidth) navRef.current.scrollTo({ left: a.offsetLeft - 20, behavior: 'smooth' });
  }, [cur]);
  const go = (e, id) => { e?.preventDefault(); document.getElementById('lvs-' + id)?.scrollIntoView({ behavior: 'smooth' }); };
  const toggleSym = (i) => setOpenSym((o) => { const n = new Set(o); if (n.has(i)) n.delete(i); else n.add(i); return n; });

  let y = [];
  for (let i = 1; i <= 49; i++) y.push(<span key={i} className={i % 7 === 0 ? 'sab' : ''}>{i}</span>);

  return (
    <main className={`wrap page lvs lv-${level}`}>
      <div className="crumbs2"><Link to="/">Books &amp; Timeline</Link> › <Link to="/book/leviticus">Leviticus</Link> › <b>Study</b></div>
      <h1 className="h1-sm lvs-h1">Leviticus: drawing near to a holy God</h1>
      <p className="tagline lvs-tag">The offerings, priests, feasts and symbols of Israel’s worship, and how each one points ahead to Jesus.</p>
      <div className="lvs-tools"><LevelToggle small /><span className="muted">Reading level</span></div>

      <div className="lvs-hero">
        <div className="lvs-qcard">
          <div className="lvs-k">The big question</div>
          <h3>How can a holy God live among sinful people?</h3>
          <p>Exodus ends with God’s glory filling the tabernacle, so full that even Moses cannot enter (<Ref to="/book/exodus/40">Exodus 40:35</Ref>). Leviticus answers how Israel can come near: God provides <b>a way to approach</b> him through sacrifice and priests, and <b>a way to live</b> as his holy people.</p>
          <div className="lvs-halves">
            <div><b>Chapters 1–16 · The way to God</b>Offerings, priests, clean and unclean, and the Day of Atonement</div>
            <div><b>Chapters 17–27 · The walk with God</b>Holy living, the feasts, the Sabbath year and Jubilee</div>
          </div>
        </div>
        <div className="lvs-qcard">
          <div className="lvs-k">Key verse</div>
          <p className="lvs-kv">“You shall be holy, for I the LORD your God am holy.”</p>
          <span className="lvs-ref"><Ref to={lev(19)}>Leviticus 19:2</Ref> · quoted in 1 Peter 1:16</span>
          <Christ className="lvs-mt"><span>Hebrews calls these rituals “a shadow of the good things to come” (10:1). Jesus is the <b>sacrifice</b>, the <b>priest</b> and the <b>way into God’s presence</b> that Leviticus pictures.</span></Christ>
        </div>
      </div>

      <div className="lvs-map">
        <div className="lvs-k">The book at a glance · tap a section</div>
        <div className="lvs-mapbar">
          {MAPS.map(([a, b, sec, c, label]) => (
            <button key={a} type="button" onClick={() => go(null, sec)} className={a === 16 ? 'mid' : ''} style={{ '--c': `var(${c})`, '--n': b - a + 1 }}>
              <small>{a === b ? `Chapter ${a}` : `Ch. ${a}–${b}`}</small><b>{label}</b>
            </button>
          ))}
        </div>
      </div>

      <nav className="lvs-snav" ref={navRef} aria-label="Sections">
        {SECS.map(([id, l]) => <a key={id} href={'#lvs-' + id} className={cur === id ? 'on' : ''} onClick={(e) => go(e, id)}>{l}</a>)}
      </nav>

      <section id="lvs-offerings">
        <Head title="The five offerings" refText="Leviticus 1–7" />
        <p className="lvs-sub">Each offering said something different about coming to God. Three were voluntary gifts of worship; two were required when someone sinned.<span className="lvs-m"> They were usually offered together, in the order sin, burnt, then peace: first forgiveness, then dedication, then fellowship.</span></p>
        <div className="lvs-offer">
          {OFF.map((o) => (
            <div key={o.name} className="lvs-oc" style={{ '--c': `var(${o.c})` }}>
              <span className="lvs-pill">{o.kind}</span>
              <h3>{o.name}</h3>
              <span className="lvs-heb lvs-d">{o.heb} · <Ref to={lev(firstCh(o.ch))}>{o.ch.replace('Lev', 'Leviticus')}</Ref></span>
              <dl>
                <div><dt>What was offered</dt><dd>{o.what}</dd></div>
                <div className="lvs-m"><dt>What happened</dt><dd>{o.done}</dd></div>
                <div><dt>What it meant</dt><dd>{o.mean}</dd></div>
                <div className="lvs-d"><dt>Who ate it</dt><dd>{o.eat}</dd></div>
              </dl>
              <Christ className="lvs-oc-christ">{o.christ} <span className="lvs-ref">{o.cref}</span></Christ>
            </div>
          ))}
        </div>
        <div className="lvs-legend"><span>Voluntary: offered freely in worship</span><span>Required: needed when someone sinned</span></div>
      </section>

      <section id="lvs-priests">
        <Head title="The priests" refText="Leviticus 8–10" />
        <p className="lvs-sub">Aaron and his sons were set apart to stand between God and the people. The high priest’s clothes, described in Exodus 28 and put on him in Leviticus 8, each carried meaning. Tap a number.</p>
        <Priests />
        <Christ className="lvs-mt">Jesus is “a great high priest who has passed through the heavens” (Hebrews 4:14). Unlike Aaron he needs no sacrifice for himself, he never dies and is never replaced, and he “always lives to make intercession” for his people (Hebrews 7:23–27).<span className="lvs-m"> Through him all believers become “a royal priesthood” (1 Peter 2:9).</span></Christ>
      </section>

      <section id="lvs-clean">
        <Head title="Clean and unclean" refText="Leviticus 11–15" />
        <p className="lvs-sub">“Unclean” did not mean sinful or dirty. It meant not ready to come near God’s presence, often because of contact with death or loss of life. Uncleanness could be passed on, and it was removed by waiting, washing or offerings.</p>
        <div className="lvs-cgrid">
          {CLEAN.map(([ic, t, x, chs]) => <div key={t} className="lvs-cc"><span className="lvs-ic">{ic}</span><h4>{t}</h4><Ref className="lvs-ref" to={lev(firstCh(chs))}>{chs}</Ref>{x}</div>)}
        </div>
        <div className="lvs-why">
          <div className="lvs-birds">
            <div className="lvs-k">A picture in the cleansing of a leper · <Ref to={lev(14)}>Leviticus 14:1–7</Ref></div>
            <div className="lvs-two"><div><b>🕊 The first bird</b>is killed over fresh water in a clay pot.</div><div><b>🕊 The second bird</b>is dipped in the first bird’s blood and set free into the open field.</div></div>
            <Christ>Many Christians see in the two birds one death and one release: Christ died, and by his blood the sinner goes free.</Christ>
          </div>
          <div className="lvs-birds">
            <div className="lvs-k">What Jesus did</div>
            <p>Under the Law, touching a leper made you unclean. When Jesus touched a leper, the opposite happened: <b>the leper was made clean</b> (Mark 1:40–42). He healed a woman with a twelve-year discharge (Mark 5:25–34) and declared all foods clean (Mark 7:19). Peter’s vision in Acts 10 opened the way for Gentiles.</p>
            <Christ>Jesus doesn’t catch uncleanness; his holiness is contagious.</Christ>
          </div>
        </div>
      </section>

      <section id="lvs-atonement">
        <Head title="The Day of Atonement" refText="Leviticus 16" />
        <p className="lvs-sub">The center of the book. Once a year the high priest went behind the veil into the Most Holy Place to make atonement for the whole nation. Step through the day and see where each part happened.</p>
        <Atonement />
        <Christ className="lvs-mt">“He entered once for all into the holy places, not by means of the blood of goats and calves but by means of his own blood, thus securing an eternal redemption” (Hebrews 9:12). When Jesus died, the temple veil was torn in two from top to bottom (Matthew 27:51), and the way into God’s presence was opened for all (Hebrews 10:19–20).</Christ>
      </section>

      <section id="lvs-holy">
        <Head title="Holy living" refText="Leviticus 17–22, 26–27" />
        <p className="lvs-sub">The second half shows what a holy people looks like in everyday life: worship, family, farming, business and how to treat the poor and the foreigner.</p>
        <div className="lvs-hgrid">
          {HOLY.map(([ic, t, r, x, c]) => (
            <div key={t} className="lvs-hc"><span className="lvs-ic">{ic}</span><h4>{t}</h4><Ref className="lvs-ref" to={lev(firstCh(r))}>Leviticus {r}</Ref><span>{x}</span><Christ className="lvs-hc-christ">{c}</Christ></div>
          ))}
        </div>
      </section>

      <section id="lvs-feasts">
        <Head title="The appointed feasts" refText="Leviticus 23" />
        <p className="lvs-sub">Israel’s year was shaped around seven feasts, plus the weekly Sabbath. The spring feasts fall in the first months, the fall feasts in the seventh month. Tap a feast.</p>
        <Feasts />
      </section>

      <section id="lvs-jubilee">
        <Head title="Sabbath years and Jubilee" refText="Leviticus 25" />
        <p className="lvs-sub">Rest was built into time itself: every seventh day, every seventh year, and after seven sevens of years, the fiftieth year of Jubilee.</p>
        <div className="lvs-jub">
          <div className="lvs-years" aria-label="49 years, every seventh a Sabbath year, then the Jubilee">{y}<span className="j">Year 50 · Jubilee</span></div>
          <div className="lvs-qcard">
            <div className="lvs-k">The fiftieth year</div>
            <p className="lvs-kv">“You shall consecrate the fiftieth year, and proclaim liberty throughout the land to all its inhabitants.”</p>
            <span className="lvs-ref"><Ref to={lev(25)}>Leviticus 25:10</Ref></span>
            <p className="lvs-mt">Announced by trumpet on the Day of Atonement. Land returned to the family that first received it, Israelites who had sold themselves into service went free, and the fields rested.<span className="lvs-m"> In the Sabbath year (every seventh) the land also rested and God promised enough in the sixth year to last (25:20–22).</span><span className="lvs-d"> There is little evidence Israel ever kept the Jubilee; 2 Chronicles 36:21 links the 70-year exile to the Sabbath years the land never had.</span></p>
            <Christ>In his first sermon Jesus read Isaiah 61, a Jubilee promise: “to proclaim liberty to the captives… to proclaim the year of the Lord’s favor,” and said, “Today this Scripture has been fulfilled in your hearing” (Luke 4:18–21).</Christ>
          </div>
        </div>
      </section>

      <section id="lvs-symbols">
        <Head title="Symbols to know" refText="Across the book" />
        <p className="lvs-sub">Images that come up again and again in Leviticus, and in the rest of the Bible. Tap one to see where it points.</p>
        <div className="lvs-sym">
          {SYM.map(([ic, n, m, c], i) => (
            <button key={n} type="button" className={'lvs-sy' + (openSym.has(i) ? ' on' : '')} aria-expanded={openSym.has(i)} onClick={() => toggleSym(i)}>
              <span className="lvs-ic">{ic}</span><b>{n}</b><span>{m}</span>
              {openSym.has(i) && <Christ>{c}</Christ>}
            </button>
          ))}
        </div>
      </section>

      <div className="lvs-notes"><NoteEditor noteKey={noteKey('study', 'leviticus')} title="My notes on this study" /></div>
      <p className="lvs-foot">Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.</p>
    </main>
  );
}
