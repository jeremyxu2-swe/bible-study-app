import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { search } from '../data/index.js';
import { SECTIONS, locate } from '../data/sections.js';
import { useSync, useSyncProblem } from '../store/sync.js';
import { useNotes } from '../store/notes.js';
import { useTheme, toggleTheme, useSideCollapsed, toggleSide } from '../store/prefs.js';
import Icon, { Lamp } from './Icon.jsx';

// ───────────────────────── Search ─────────────────────────
export function SearchBox({ className = 'search', autoFocus = false, onPick }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [hl, setHl] = useState(0);
  const nav = useNavigate();
  const loc = useLocation();
  const ref = useRef(null);
  const results = search(q);

  useEffect(() => { setQ(''); setOpen(false); }, [loc.pathname]);
  useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setHl((h) => Math.min(h + 1, results.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setHl((h) => Math.max(h - 1, 0)); }
    else if (e.key === 'Enter' && results[hl]) { nav(results[hl].to); onPick?.(); }
    else if (e.key === 'Escape') setOpen(false);
  };

  return (
    <div className={className} ref={ref}>
      <Icon k="search" size={16} stroke={2} className="search-ic" />
      <label className="sr-only" htmlFor={`s-${className}`}>Search</label>
      <input id={`s-${className}`} type="search" placeholder="Search books, people, “1 Sam 17”" value={q} autoFocus={autoFocus}
        onChange={(e) => { setQ(e.target.value); setOpen(true); setHl(0); }} onFocus={() => setOpen(true)} onKeyDown={onKey} />
      {open && q && (
        <div className="search-results" role="listbox">
          {results.length === 0 && <div className="empty" style={{ padding: 10 }}>No matches</div>}
          {results.map((r, i) => (
            <Link key={r.kind + r.to + i} to={r.to} className={i === hl ? 'hl' : ''} role="option" aria-selected={i === hl} onClick={() => onPick?.()}>
              <span style={{ display: 'flex', flexDirection: 'column' }}>
                <span>{r.label}</span>
                {r.sub && <span className="muted" style={{ fontSize: 'calc(13px * var(--ts))' }}>{r.sub}</span>}
              </span>
              <span className="kind">{r.kind}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// "Search everything" (Ctrl K) on a computer: a search box in a centered panel.
function SearchPalette({ onClose }) {
  useEffect(() => {
    const k = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  }, [onClose]);
  return (
    <div className="palette-dim" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="palette" role="dialog" aria-modal="true" aria-label="Search everything">
        <SearchBox className="search big palette-box" autoFocus onPick={onClose} />
        <p className="muted palette-hint">Type a book, a person, a chapter like “John 3”, or a word from a summary. <kbd>Esc</kbd> to close.</p>
      </div>
    </div>
  );
}

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent || '');

// ───────────────────────── Account footer ─────────────────────────
function who(user) {
  const local = (user?.email || '').split('@')[0];
  const parts = local.split(/[._-]+/).filter(Boolean);
  const name = parts.length ? parts[0].replace(/\d+$/, '') || parts[0] : '';
  const initials = (parts.length > 1 ? parts[0][0] + parts[1][0] : local[0] || '?').toUpperCase();
  return { name: name ? name[0].toUpperCase() + name.slice(1) : 'Account', initials };
}

export function SyncDot() {
  const st = useSync();
  const problem = useSyncProblem();
  const cls = !st.configured || !st.user ? 'off' : problem ? 'err' : st.status === 'syncing' ? 'busy' : 'ok';
  return <span className={'sync-dot ' + cls} aria-hidden="true" />;
}

function AccountFooter({ onNav }) {
  const st = useSync();
  const problem = useSyncProblem();
  const theme = useTheme();
  const loc = useLocation();
  const u = st.user ? who(st.user) : null;
  const status = !st.configured ? 'Saved on this device'
    : !st.user ? 'Not signed in'
    : problem ? (problem.reason === 'offline' ? 'Offline · not synced' : 'Not synced')
    : st.status === 'syncing' ? 'Syncing…' : 'Synced';
  return (
    <div className="side-me">
      <Link to="/settings" className="side-me-who" onClick={onNav} title="Account and settings">
        <span className={'side-av' + (u ? '' : ' off')}>{u ? u.initials : <Icon k="user" size={18} />}</span>
        <span className="side-me-txt">
          <b>{u ? u.name : 'Your notes'}</b>
          <small><SyncDot />{status}</small>
        </span>
      </Link>
      <span className="side-acts">
        <button type="button" className="ib" onClick={toggleTheme} title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
          <Icon k={theme === 'dark' ? 'moon' : 'sun'} size={17} />
        </button>
        <Link to="/settings" className={'ib' + (loc.pathname === '/settings' ? ' on' : '')} onClick={onNav} title="Settings" aria-label="Settings">
          <Icon k="gear" size={17} />
        </Link>
      </span>
    </div>
  );
}

// ───────────────────────── Sidebar (computer + phone drawer) ─────────────────────────
export function Sidebar({ onNav, onSearch, collapsible = false }) {
  const { pathname } = useLocation();
  const here = locate(pathname);
  const [open, setOpen] = useState(here.section.id);
  useEffect(() => { setOpen(here.section.id); }, [here.section.id]);
  const notes = useNotes();
  const noteCount = Object.keys(notes).length;
  const problem = useSyncProblem();

  return (
    <>
      <div className="side-top">
        <Link to="/" className="brand side-brand" onClick={onNav}><Lamp size={24} />Lamp &amp; Path</Link>
        {collapsible && (
          <button type="button" className="ib side-tog" onClick={toggleSide} title="Collapse sidebar" aria-label="Collapse sidebar">
            <Icon k="sideClose" size={18} />
          </button>
        )}
      </div>
      <button type="button" className="side-search" onClick={onSearch}>
        <Icon k="search" size={15} stroke={2} />Search everything<kbd>{isMac ? '⌘K' : 'Ctrl K'}</kbd>
      </button>
      <nav className="side-nav" aria-label="Sections">
        {SECTIONS.map((s) => {
          const isOpen = s.soon || open === s.id;
          return (
            <div key={s.id} className={'side-grp' + (s.soon ? ' soon' : '') + (here.section.id === s.id && !here.shared ? ' cur' : '')}>
              {s.soon ? (
                <div className="side-gh" aria-disabled="true">
                  <span className="side-gi" style={{ '--gc': s.color }}><Icon k={s.icon} size={16} /></span>
                  {s.name}<span className="side-soon">Soon</span>
                </div>
              ) : (
                <button type="button" className="side-gh" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : s.id)}>
                  <span className="side-gi" style={{ '--gc': s.color }}><Icon k={s.icon} size={16} /></span>
                  {s.name}<span className="side-ch" aria-hidden="true">{isOpen ? '▾' : '▸'}</span>
                </button>
              )}
              {isOpen && (
                <div className="side-items">
                  {s.pages.map((p) => (s.soon || !p.to
                    ? <span key={p.id} className="side-it off">{p.label}{!s.soon && <span className="side-soon">Soon</span>}</span>
                    : (
                      <Link key={p.id} to={p.to} onClick={onNav} className={'side-it' + (here.page?.id === p.id && !here.shared ? ' on' : '')}
                        aria-current={here.page?.id === p.id && !here.shared ? 'page' : undefined}>
                        {p.label}{p.count != null && <span className="n">{p.count}</span>}
                      </Link>
                    )))}
                </div>
              )}
            </div>
          );
        })}
        <div className="side-div" />
        <Link to="/notes" onClick={onNav} className={'side-solo' + (here.shared?.id === 'notes' ? ' on' : '')}>
          <Icon k="notes" size={18} />My Notes{problem && <span className="sync-warn" title="Notes not synced" />}
          {noteCount > 0 && <span className="n">{noteCount}</span>}
        </Link>
      </nav>
      <AccountFooter onNav={onNav} />
    </>
  );
}

// ───────────────────────── Collapsed sidebar (computer): a narrow rail of icons ─────────────────────────
// Each section's icon goes to its first page (or stays on the current page if you're already in it).
function SideRail({ onSearch }) {
  const { pathname } = useLocation();
  const here = locate(pathname);
  const st = useSync();
  const problem = useSyncProblem();
  const notes = useNotes();
  const noteCount = Object.keys(notes).length;
  const theme = useTheme();
  const u = st.user ? who(st.user) : null;
  return (
    <>
      <button type="button" className="ib rail-btn rail-open" onClick={toggleSide} title={`Expand sidebar (${isMac ? '⌘' : 'Ctrl'} \\)`} aria-label="Expand sidebar">
        <Icon k="sideOpen" size={19} />
      </button>
      <Link to="/" className="rail-btn rail-home" title="Lamp & Path · home" aria-label="Home"><Lamp size={24} /></Link>
      <button type="button" className="ib rail-btn" onClick={onSearch} title={`Search everything (${isMac ? '⌘K' : 'Ctrl K'})`} aria-label="Search everything">
        <Icon k="search" size={18} stroke={2} />
      </button>
      <nav className="rail-nav" aria-label="Sections">
        {SECTIONS.map((s) => {
          const cur = here.section.id === s.id && !here.shared;
          const first = s.pages.find((p) => p.to);
          if (s.soon || !first) {
            return <span key={s.id} className="rail-sec off" title={`${s.name} · coming soon`}><span className="side-gi" style={{ '--gc': s.color }}><Icon k={s.icon} size={16} /></span></span>;
          }
          return (
            <Link key={s.id} to={cur ? pathname : first.to} className={'rail-sec' + (cur ? ' on' : '')} title={s.name} aria-label={s.name} aria-current={cur ? 'true' : undefined}>
              <span className="side-gi" style={{ '--gc': s.color }}><Icon k={s.icon} size={16} /></span>
            </Link>
          );
        })}
        <div className="side-div" />
        <Link to="/notes" className={'rail-sec' + (here.shared?.id === 'notes' ? ' on' : '')} title={`My Notes${noteCount ? ` (${noteCount})` : ''}`} aria-label="My Notes">
          <Icon k="notes" size={18} />{problem && <span className="sync-warn rail-dot" title="Notes not synced" />}
        </Link>
      </nav>
      <div className="rail-foot">
        <button type="button" className="ib" onClick={toggleTheme} title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
          <Icon k={theme === 'dark' ? 'moon' : 'sun'} size={17} />
        </button>
        <Link to="/settings" className="rail-me" title="Account and settings" aria-label="Account and settings">
          <span className={'side-av' + (u ? '' : ' off')}>{u ? u.initials : <Icon k="user" size={18} />}</span>
        </Link>
      </div>
    </>
  );
}

// ───────────────────────── The shell: sidebar / phone top bar / drawer ─────────────────────────
export default function Header() {
  const { pathname } = useLocation();
  const here = locate(pathname);
  const theme = useTheme();
  const collapsed = useSideCollapsed();
  const [drawer, setDrawer] = useState(false);
  const [palette, setPalette] = useState(false);
  const nav = useNavigate();
  const drawerRef = useRef(null);

  useEffect(() => { setDrawer(false); setPalette(false); }, [pathname]);
  useEffect(() => {
    const k = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        if (window.matchMedia('(max-width: 760px)').matches) nav('/search'); else setPalette(true);
      }
      if (e.key === 'Escape') setDrawer(false);
      if ((e.ctrlKey || e.metaKey) && e.key === '\\') { e.preventDefault(); toggleSide(); }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  }, [nav]);
  useEffect(() => {
    document.body.classList.toggle('drawer-open', drawer);
    if (drawer) drawerRef.current?.querySelector('a, button')?.focus();
  }, [drawer]);

  const title = here.shared ? here.shared.label : here.page.label;
  const sub = here.shared ? null : here.section.name;
  const openSearch = () => {
    setDrawer(false);
    if (window.matchMedia('(max-width: 760px)').matches) nav('/search'); else setPalette(true);
  };

  return (
    <>
      <aside className={'app-side' + (collapsed ? ' rail' : '')} aria-label="Sidebar">
        {collapsed ? <SideRail onSearch={openSearch} /> : <Sidebar onSearch={openSearch} collapsible />}
      </aside>

      <header className="ptop">
        <button type="button" className="hb" onClick={() => setDrawer(true)} aria-label="Open menu" aria-expanded={drawer}><Icon k="menu" size={18} stroke={2} /></button>
        <div className="ptop-ttl">
          <span className="ptop-t">{title}</span>
          {sub && <small>{sub}</small>}
        </div>
        <button type="button" className="ib" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
          <Icon k={theme === 'dark' ? 'moon' : 'sun'} size={18} />
        </button>
      </header>

      {drawer && (
        <>
          <div className="drawer-dim" onClick={() => setDrawer(false)} />
          <aside className="drawer" ref={drawerRef} role="dialog" aria-modal="true" aria-label="Menu">
            <button type="button" className="ib drawer-x" onClick={() => setDrawer(false)} aria-label="Close menu"><Icon k="close" size={18} /></button>
            <Sidebar onNav={() => setDrawer(false)} onSearch={openSearch} />
          </aside>
        </>
      )}
      {palette && <SearchPalette onClose={() => setPalette(false)} />}
    </>
  );
}
