import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useNotes, deleteNotes, createFreeNote, useTrash, restoreNotes, purgeTrash, daysLeft, TRASH_DAYS } from '../store/notes.js';
import {
  useFolders, childrenOf, descendants, folderPath, flatTree, createFolder, renameFolder,
  deleteFolder, moveFolder, setFolderColor, setNoteFolder, setNotesFolder, FOLDER_COLORS,
} from '../store/folders.js';
import { getBook, getCharacter, empireById, churchById, nationById } from '../data/index.js';
import { denomById } from '../data/church/denominations.js';
import { kingById, kingName } from '../data/kings.js';
import { personById } from '../data/church/people.js';
import { escapeRe } from '../utils/sanitize.js';
import { useNoteOrder, setNoteOrder, sortByOrder } from '../store/noteOrder.js';
import DragList from '../components/DragList.jsx';
import { ActionMenu, FolderIcon, Modal, useLongPress } from '../components/ui.jsx';
import { isPhone } from '../store/ui.js';
import { useSync } from '../store/sync.js';
import { topicById as theoTopic } from '../data/theologyCompare.js';
import { V as ET_V } from '../data/endTimes.js';

export function describe(key, note) {
  const [type, id, extra] = key.split(':');
  const book = getBook(id);
  if (type === 'free') return { label: note?.title || 'Untitled note', kind: 'Note', to: `/note/${id}` };
  if (type === 'chapter' && book) return { label: `${book.name} ${extra}`, kind: 'Chapter', to: `/book/${id}/${extra}` };
  if (type === 'section' && book) {
    const i = book.sections.findIndex((s) => String(s.start) === extra);
    const s = book.sections[i];
    return { label: `${book.name} · ${s ? s.title : 'Ch. ' + extra}`, kind: 'Section', to: `/book/${id}?s=${Math.max(i, 0)}` };
  }
  if (type === 'book' && book) return { label: book.name, kind: 'Book', to: `/book/${id}` };
  if (type === 'character') { const c = getCharacter(id); return { label: c ? c.name : id, kind: 'Person', to: `/people/${id}` }; }
  if (type === 'empire') { const e = empireById[id]; return { label: e ? e.name : id, kind: 'World power', to: `/empire/${e ? e.id : id}` }; }
  if (type === 'church') { const c = churchById[id]; return { label: c ? c.full : id, kind: 'Church', to: `/church/${id}` }; }
  if (type === 'nation') { const n = nationById[id]; return { label: n ? n.title : id, kind: 'Nation', to: `/nation/${id}` }; }
  if (type === 'person') { const p = personById[id]; return { label: p ? p.name : id, kind: 'Person', to: `/history/people/${id}` }; }
  if (type === 'theology' && id === 'last-things' && extra) { const v = ET_V.find((x) => x.id === extra); return { label: `End times · ${v ? v.n : extra}`, kind: 'Theology', to: `/theology/last-things/${extra}` }; }
  if (type === 'theology' && id === 'system') return { label: extra === 'covenant' ? 'Covenant Theology' : 'Dispensationalism', kind: 'Theology', to: `/theology/compare/${extra}` };
  if (type === 'theology' && id === 'compare') { const t = theoTopic[extra]; return { label: `Dispensational vs Covenant · ${t ? t.name : 'notes'}`, kind: 'Theology', to: `/theology/compare${t ? '?t=' + t.id : ''}` }; }
  if (type === 'theology') return { label: 'The end times: four views', kind: 'Theology', to: '/theology/last-things' };
  if (type === 'study') return { label: 'Leviticus study', kind: 'Study', to: '/study/leviticus' };
  if (type === 'journey') { const names = { all: 'Paul’s journeys', j1: 'Paul’s 1st journey', j2: 'Paul’s 2nd journey', j3: 'Paul’s 3rd journey', j4: 'Paul’s voyage to Rome' }; return { label: names[id] || 'Paul’s journeys', kind: 'Study', to: id && id !== 'all' ? `/journeys?j=${id}` : '/journeys' }; }
  if (type === 'daniel' && id === 'background') return { label: 'The wars behind Daniel', kind: 'Prophecy', to: '/daniel/background' };
  if (type === 'daniel' && id === 'written') return { label: 'When was Daniel written?', kind: 'Prophecy', to: '/daniel/written' };
  if (type === 'daniel') return { label: `Daniel ${id}: verse and fulfillment`, kind: 'Prophecy', to: `/daniel?ch=${id}` };
  if (type === 'king') { const k = kingById[id]; return { label: k ? kingName(k) : id, kind: 'King', to: `/kings?k=${id}` }; }
  if (type === 'denom') { const d = denomById[id]; return { label: d ? d.name : id, kind: 'Denomination', to: `/history/denominations?d=${id}` }; }
  return { label: key, kind: 'Note', to: '/notes' };
}

const TrashIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 7h16M9 7V4.5h6V7M6.5 7l1 13h9l1-13M10 11v6M14 11v6" />
  </svg>
);
const plural = (n, w = 'note') => `${n} ${w}${n === 1 ? '' : 's'}`;

const TYPES = ['All', 'Chapter', 'Section', 'Book', 'Person', 'King', 'World power', 'Denomination', 'Note'];

function Highlight({ text, term }) {
  if (!term) return text;
  const parts = text.split(new RegExp(`(${escapeRe(term)})`, 'gi'));
  return parts.map((p, i) => (p.toLowerCase() === term.toLowerCase() ? <mark key={i}>{p}</mark> : p));
}

function snippet(text, term) {
  if (!term) return text.slice(0, 220) + (text.length > 220 ? '…' : '');
  const i = text.toLowerCase().indexOf(term.toLowerCase());
  if (i < 0) return text.slice(0, 200) + (text.length > 200 ? '…' : '');
  const start = Math.max(0, i - 70);
  const end = Math.min(text.length, i + term.length + 150);
  return (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
}

// ── Folder tree in the sidebar ──
function TreeItem({ f, depth, current, counts, expanded, toggle, onOptions }) {
  const kids = childrenOf(f.id);
  const open = expanded.has(f.id);
  const on = current === f.id;
  const btn = useRef(null);
  return (
    <>
      <div className={'tree-row' + (on ? ' on' : '')} style={{ paddingLeft: 6 + depth * 18 }}>
        <button type="button" className="chev" aria-label={open ? `Collapse ${f.name}` : `Expand ${f.name}`}
          style={{ visibility: kids.length ? 'visible' : 'hidden' }} onClick={() => toggle(f.id)}>{open ? '▾' : '▸'}</button>
        <Link to={`/notes/${f.id}`} className="tree-link">
          <FolderIcon open={on || open} color={f.color} />
          <span className="tree-name">{f.name}</span>
          <span className="n">{counts.total[f.id] || 0}</span>
        </Link>
        <button ref={btn} type="button" className="tree-more" aria-label={`Options for ${f.name}`} onClick={() => onOptions(f, btn.current)}>⋯</button>
      </div>
      {open && kids.map((k) => (
        <TreeItem key={k.id} f={k} depth={depth + 1} current={current} counts={counts} expanded={expanded} toggle={toggle} onOptions={onOptions} />
      ))}
    </>
  );
}

function FolderRow({ f, count, sub, onOptions }) {
  const lp = useLongPress((el) => onOptions(f, el));
  return (
    <Link to={`/notes/${f.id}`} className="folder-row" {...lp}>
      <FolderIcon color={f.color} size={17} />
      <span className="stack" style={{ gap: 0 }}>
        <span>{f.name}</span>
        {sub > 0 && <span className="muted" style={{ fontSize: 'calc(12px * var(--ts))' }}>{sub} sub-folder{sub === 1 ? '' : 's'}</span>}
      </span>
      <span className="n">{count} ›</span>
    </Link>
  );
}

export default function Notes() {
  const { folderId } = useParams();
  const nav = useNavigate();
  const notes = useNotes();
  const fs = useFolders();
  const searchRef = useRef(null);
  const [q, setQ] = useState('');
  const [focus, setFocus] = useState(false);
  const [scope, setScope] = useState('folder');
  const [type, setType] = useState('All');
  const [msg, setMsg] = useState('');
  const [menu, setMenu] = useState(null); // { kind: 'folder'|'backup', folder, anchor }
  const [modal, setModal] = useState(null); // { kind, folder?, parentId? }
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [selecting, setSelecting] = useState(false);
  const [sel, setSel] = useState(() => new Set());
  const trash = useTrash();
  const [expanded, setExpanded] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem('lamp-path-expanded') || '[]')); } catch { return new Set(); }
  });

  const syncOn = !!useSync().user;
  const isTrash = folderId === 'trash';
  const isRoot = !folderId; // phone shows the folder list here; computer shows all notes
  const view = folderId || 'all';
  const folder = fs.folders.find((f) => f.id === view);
  const validIds = new Set(fs.folders.map((f) => f.id));

  useEffect(() => { setSelecting(false); setSel(new Set()); setMsg(''); }, [folderId]);
  useEffect(() => {
    document.body.classList.toggle('selecting', selecting);
    return () => document.body.classList.remove('selecting');
  }, [selecting]);
  const pickRow = (k) => { const n = new Set(sel); n.has(k) ? n.delete(k) : n.add(k); setSel(n); };
  const endSelect = () => { setSelecting(false); setSel(new Set()); };

  const toggle = (id) => {
    const next = new Set(expanded);
    next.has(id) ? next.delete(id) : next.add(id);
    setExpanded(next);
    try { localStorage.setItem('lamp-path-expanded', JSON.stringify([...next])); } catch { /* ignore */ }
  };

  const entries = useMemo(() => Object.entries(notes)
    .map(([k, v]) => ({ key: k, ...v, ...describe(k, v), folderId: validIds.has(fs.assign[k]) ? fs.assign[k] : null }))
    .sort((a, b) => (b.updated || '').localeCompare(a.updated || '')),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [notes, fs]);
  const savedOrder = useNoteOrder();

  const counts = useMemo(() => {
    const direct = {};
    entries.forEach((e) => { if (e.folderId) direct[e.folderId] = (direct[e.folderId] || 0) + 1; });
    const total = {};
    fs.folders.forEach((f) => { total[f.id] = [f.id, ...descendants(f.id, fs.folders)].reduce((s, id) => s + (direct[id] || 0), 0); });
    return { direct, total, unfiled: entries.filter((e) => !e.folderId).length };
  }, [entries, fs.folders]);

  const tagCounts = useMemo(() => {
    const m = {};
    entries.forEach((e) => (e.tags || []).forEach((t) => { m[t] = (m[t] || 0) + 1; }));
    return Object.entries(m).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [entries]);

  // ── Search ──
  const query = q.trim().toLowerCase();
  const isTag = query.startsWith('#');
  const inFolderIds = folder ? new Set([folder.id, ...descendants(folder.id, fs.folders)]) : null;
  const pool = entries.filter((e) => {
    if (query && (scope === 'all' || view === 'all')) return true;
    if (view === 'all') return true;
    if (view === 'unfiled') return !e.folderId;
    if (query) return inFolderIds?.has(e.folderId);
    return e.folderId === view;
  });
  const results = pool.filter((e) => {
    if (type !== 'All' && e.kind !== type) return false;
    if (!query) return true;
    if (isTag) return (e.tags || []).some((t) => t.startsWith(query));
    return (e.text + ' ' + e.label).toLowerCase().includes(query);
  });

  const suggestions = useMemo(() => {
    if (!query) return null;
    const bare = query.replace(/^#/, '');
    const tags = tagCounts.filter(([t]) => t.startsWith('#' + bare) && t !== query).slice(0, 5);
    const words = {};
    if (bare.length >= 2) {
      entries.forEach((e) => {
        const seen = new Set((e.text.toLowerCase().match(/[a-z][a-z'-]{2,}/g) || []).filter((w) => w.startsWith(bare) && w !== bare));
        seen.forEach((w) => { words[w] = (words[w] || 0) + 1; });
      });
    }
    const wordList = Object.entries(words).sort((a, b) => b[1] - a[1]).slice(0, 3);
    return tags.length || wordList.length ? { tags, words: wordList } : null;
  }, [query, tagCounts, entries]);

  // ── Actions ──
  const openModal = (kind, extra = {}) => {
    setMenu(null);
    setName(kind === 'rename' ? extra.folder.name : '');
    setTarget(kind === 'move' ? (extra.folder.parentId || '') : (extra.parentId || ''));
    setModal({ kind, ...extra });
  };
  const folderItems = (f) => [
    { icon: '✎', label: 'Rename', onClick: () => openModal('rename', { folder: f }) },
    { icon: <FolderIcon size={14} />, label: 'Add sub-folder', onClick: () => openModal('new', { parentId: f.id }) },
    { icon: '↪', label: 'Move folder', onClick: () => openModal('move', { folder: f }) },
    { icon: <span className="swatch" style={{ background: f.color }} />, label: 'Change color', onClick: () => openModal('color', { folder: f }) },
    { divider: true },
    { icon: '🗑', label: 'Delete folder', danger: true, onClick: () => openModal('delete', { folder: f }) },
  ];
  const showOptions = (f, anchor) => setMenu({ kind: 'folder', folder: f, anchor });

  const newNote = () => {
    const key = createFreeNote('Untitled note');
    if (folder) setNoteFolder(key, folder.id);
    nav(`/note/${key.split(':')[1]}`);
  };

  const path = folder ? folderPath(folder.id, fs.folders) : [];
  const parent = path.length > 1 ? path[path.length - 2] : null;
  const subFolders = folder ? childrenOf(folder.id, fs.folders) : [];
  const title = folder ? folder.name : view === 'unfiled' ? 'Unfiled' : isTrash ? 'Trash' : 'All notes';
  const trashRows = trash.map((t) => ({ ...t, ...describe(t.key, t.note), text: t.note.text || '' }));
  const shownKeys = isTrash ? trashRows.map((t) => t.id) : results.map((e) => e.key);
  const selCount = shownKeys.filter((k) => sel.has(k)).length;
  const selKeys = () => shownKeys.filter((k) => sel.has(k));
  const trashSelected = (keys) => {
    const n = deleteNotes(keys);
    endSelect();
    if (n) setMsg(`${plural(n)} moved to Trash. ${n === 1 ? 'It' : 'They'} can be restored for ${TRASH_DAYS} days.`);
  };
  const labelFor = (k, n) => describe(k, n).label;
  const term = isTag ? query : query;
  const allSubtreeCount = folder ? counts.total[folder.id] || 0 : 0;

  return (
    <main className={'wrap page notes-page' + (isRoot ? ' at-root' : '')}>
      <div className="notes-layout">
        {/* ── Sidebar (computer) ── */}
        <aside className="notes-side" aria-label="Folders">
          <div className="row" style={{ justifyContent: 'space-between', marginBottom: 6 }}>
            <span className="eyebrow">Folders</span>
            <button type="button" className="text-btn" onClick={() => openModal('new', { parentId: null })}>+ New</button>
          </div>
          <div className={'tree-row' + (view === 'all' ? ' on' : '')} style={{ paddingLeft: 6 }}>
            <span className="chev" />
            <Link to="/notes/all" className="tree-link"><FolderIcon open={view === 'all'} /><span className="tree-name">All notes</span><span className="n">{entries.length}</span></Link>
          </div>
          {childrenOf(null, fs.folders).map((f) => (
            <TreeItem key={f.id} f={f} depth={0} current={view} counts={counts} expanded={expanded} toggle={toggle} onOptions={showOptions} />
          ))}
          <div className={'tree-row' + (view === 'unfiled' ? ' on' : '')} style={{ paddingLeft: 6 }}>
            <span className="chev" />
            <Link to="/notes/unfiled" className="tree-link muted"><FolderIcon /><span className="tree-name">Unfiled</span><span className="n">{counts.unfiled}</span></Link>
          </div>
          <div className={'tree-row' + (isTrash ? ' on' : '')} style={{ paddingLeft: 6 }}>
            <span className="chev" />
            <Link to="/notes/trash" className="tree-link muted"><TrashIcon /><span className="tree-name">Trash</span><span className="n">{trash.length}</span></Link>
          </div>
          {tagCounts.length > 0 && (
            <>
              <div className="divider" style={{ margin: '14px 0 10px' }} />
              <span className="eyebrow" style={{ marginBottom: 6 }}>Tags</span>
              <div className="row" style={{ gap: 6 }}>
                {tagCounts.map(([t, n]) => (
                  <button key={t} type="button" className={'tag tag-btn' + (query === t ? ' hit' : '')} aria-pressed={query === t}
                    title={query === t ? 'Tap again to clear' : `Show notes tagged ${t}`}
                    onClick={() => { if (query === t) setQ(''); else { setQ(t); setScope('all'); } }}>{t} {n}{query === t && <span aria-hidden="true" className="tag-x"> ×</span>}</button>
                ))}
              </div>
            </>
          )}
          <div className="divider" style={{ margin: '14px 0 10px' }} />
          <Link to="/settings" className="text-btn left notes-set-link">Sync &amp; backup in Settings ›</Link>
        </aside>

        {/* ── Main ── */}
        <section className="notes-main">
          {/* Phone: back link */}
          {!isRoot && (
            <div className="only-phone row" style={{ justifyContent: 'space-between' }}>
              {selecting
                ? <button type="button" className="edit-link-btn" onClick={() => setSel(selCount === shownKeys.length ? new Set() : new Set(shownKeys))}>{selCount === shownKeys.length ? 'Deselect all' : 'Select all'}</button>
                : <Link to={parent ? `/notes/${parent.id}` : '/notes'} className="back-link">‹ {parent ? parent.name : 'My Notes'}</Link>}
              {(selecting || shownKeys.length > 0) && (
                <button type="button" className={'edit-link-btn' + (selecting ? ' strong' : '')} onClick={() => (selecting ? endSelect() : setSelecting(true))}>{selecting ? 'Done' : 'Edit'}</button>
              )}
            </div>
          )}
          {folder && path.length > 0 && (
            <nav className={'crumbs' + (path.length < 2 ? ' short' : '')} aria-label="Folder path">
              <Link to="/notes/all">My Notes</Link>
              {path.map((p, i) => (
                <span key={p.id}> › {i < path.length - 1 ? <Link to={`/notes/${p.id}`}>{p.name}</Link> : <span className="cur">{p.name}</span>}</span>
              ))}
            </nav>
          )}

          <div className="notes-head">
            <h1 className="h1-sm notes-title">
              <span className="only-desktop-inline">{title}</span>
              <span className="only-phone-inline">{isRoot ? 'My Notes' : title}</span>
            </h1>
            <span className="muted notes-count">
              {folder
                ? `${subFolders.length ? `${subFolders.length} sub-folder${subFolders.length === 1 ? '' : 's'} · ` : ''}${counts.direct[folder.id] || 0} note${(counts.direct[folder.id] || 0) === 1 ? '' : 's'} here${subFolders.length ? ` · ${allSubtreeCount} total` : ''}`
                : isTrash ? `${plural(trash.length)} · deleted notes are kept for ${TRASH_DAYS} days`
                : `${view === 'unfiled' ? counts.unfiled : entries.length} notes`}
            </span>
            <div className="notes-actions">
              {selecting ? (
                <button type="button" className="edit-link-btn strong only-desktop" onClick={endSelect}>Done</button>
              ) : <>
              {!isRoot && shownKeys.length > 0 && <button type="button" className="edit-link-btn only-desktop" onClick={() => setSelecting(true)}>Edit</button>}
              {isTrash && trash.length > 0 && <button type="button" className="btn danger-outline" onClick={() => setModal({ kind: 'purge', ids: null })}>Empty Trash</button>}
              {folder && (
                <button type="button" className="btn icon-btn" aria-label="Folder options"
                  onClick={(e) => showOptions(folder, e.currentTarget)}>⋯</button>
              )}
              {isRoot && <button type="button" className="btn only-phone" onClick={() => openModal('new', { parentId: null })}>+ Folder</button>}
              {!isTrash && <button type="button" className="btn primary new-note-btn" onClick={newNote}>+ New note</button>}
              </>}
            </div>
          </div>
          {msg && <div className="card" role="status" style={{ padding: 12 }}>{msg}</div>}

          {/* Search */}
          {!isTrash && <div className="search-wrap">
            <div className={'search big' + (focus ? ' focus' : '')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
              <label className="sr-only" htmlFor="notes-q">Search notes</label>
              <input id="notes-q" ref={searchRef} type="search" autoComplete="off" value={q}
                placeholder={folder ? (isPhone() ? 'Search this folder' : `Search in ${folder.name} (includes sub-folders)`) : 'Search notes or #tags'}
                onChange={(e) => { setQ(e.target.value); }} onFocus={() => setFocus(true)} onBlur={() => setTimeout(() => setFocus(false), 150)} />
              {query && <span className="muted only-desktop-inline" style={{ fontSize: 'calc(13px * var(--ts))', whiteSpace: 'nowrap' }}>{results.length} result{results.length === 1 ? '' : 's'}</span>}
              {q && <button type="button" className="clear-btn" aria-label="Clear search" onClick={() => { setQ(''); searchRef.current?.focus(); }}>✕</button>}
            </div>
            {focus && suggestions && (
              <div className="suggest" role="listbox">
                {suggestions.tags.length > 0 && <div className="suggest-h">Tags</div>}
                {suggestions.tags.map(([t, n]) => (
                  <button key={t} type="button" className="suggest-it" onMouseDown={(e) => e.preventDefault()} onClick={() => { setQ(t); setFocus(false); }}>
                    <span><Highlight text={t} term={'#' + query.replace(/^#/, '')} /></span><small>{n} note{n === 1 ? '' : 's'}</small>
                  </button>
                ))}
                {suggestions.words.length > 0 && <div className="suggest-h">Words in notes</div>}
                {suggestions.words.map(([w, n]) => (
                  <button key={w} type="button" className="suggest-it" onMouseDown={(e) => e.preventDefault()} onClick={() => { setQ(w); setFocus(false); }}>
                    <span>"<Highlight text={w} term={query.replace(/^#/, '')} />"</span><small>{n} note{n === 1 ? '' : 's'}</small>
                  </button>
                ))}
              </div>
            )}
          </div>}
          {!isTrash && (query || type !== 'All') && (
            <div className="row filters">
              {folder && query && (
                <>
                  <span className="muted" style={{ fontSize: 'calc(13px * var(--ts))' }}>Search in:</span>
                  <button type="button" className={'pill sm' + (scope === 'folder' ? ' on' : '')} onClick={() => setScope('folder')}>This folder</button>
                  <button type="button" className={'pill sm' + (scope === 'all' ? ' on' : '')} onClick={() => setScope('all')}>All notes</button>
                </>
              )}
              <span className="muted" style={{ fontSize: 'calc(13px * var(--ts))', marginLeft: folder && query ? 10 : 0 }}>Type:</span>
              {TYPES.map((t) => <button key={t} type="button" className={'pill sm' + (type === t ? ' on' : '')} onClick={() => setType(t)}>{t}</button>)}
            </div>
          )}

          {/* Phone: folder list at the top level */}
          {isRoot && !query && (
            <div className="only-phone stack" style={{ gap: 10 }}>
              <div className="folder-group">
                <Link to="/notes/all" className="folder-row"><FolderIcon size={17} /><span>All notes</span><span className="n">{entries.length} ›</span></Link>
                {childrenOf(null, fs.folders).map((f) => (
                  <FolderRow key={f.id} f={f} count={counts.total[f.id] || 0} sub={childrenOf(f.id, fs.folders).length} onOptions={showOptions} />
                ))}
                <Link to="/notes/unfiled" className="folder-row muted"><FolderIcon size={17} /><span>Unfiled</span><span className="n">{counts.unfiled} ›</span></Link>
              </div>
              <div className="folder-group">
                <Link to="/notes/trash" className="folder-row muted"><TrashIcon size={17} /><span>Trash</span><span className="n">{trash.length} ›</span></Link>
              </div>
              {fs.folders.length > 0 && <p className="muted" style={{ fontSize: 'calc(12px * var(--ts))', margin: 0 }}>Press and hold a folder to rename or delete it.</p>}
              {fs.folders.length === 0 && <p className="muted" style={{ fontSize: 'calc(13px * var(--ts))', margin: 0 }}>Tap “+ Folder” to make your first folder.</p>}
              <Link to="/settings" className="folder-row muted notes-set-row"><span>Sync &amp; backup</span><span className="n">Settings ›</span></Link>
            </div>
          )}

          {/* Sub-folders */}
          {folder && !query && subFolders.length > 0 && (
            <div className="stack" style={{ gap: 10 }}>
              <div className="eyebrow">Sub-folders</div>
              <div className="subfolders">
                {subFolders.map((f) => (
                  <SubCard key={f.id} f={f} count={counts.total[f.id] || 0} entries={entries} onOptions={showOptions} />
                ))}
              </div>
            </div>
          )}

          {/* Notes */}
          {isTrash && (
            <div className="stack notes-list" style={{ gap: 12 }}>
              {trashRows.length > 0 ? (
                <div className="note-list">
                  {trashRows.map((t) => (
                    <TrashRow key={t.id} t={t} selecting={selecting} on={sel.has(t.id)} onPick={() => pickRow(t.id)}
                      onRestore={() => { restoreNotes([t.id], labelFor); setMsg(`Restored "${t.label}".`); }}
                      onPurge={() => setModal({ kind: 'purge', ids: [t.id] })} />
                  ))}
                </div>
              ) : <div className="empty">Trash is empty. Deleted notes stay here for {TRASH_DAYS} days before they're removed for good.</div>}
            </div>
          )}
          {!isTrash && <div className={'stack notes-list' + (isRoot && !query ? ' hide-phone' : '')} style={{ gap: 12 }}>
            {folder && !query && subFolders.length > 0 && <div className="eyebrow">Notes in this folder</div>}
            {results.length > 0 && (
              <DragList className="note-list" items={sortByOrder(results, savedOrder)} getKey={(e) => e.key} disabled={!!query || selecting}
                onReorder={(keys) => {
                  // put the new order of these rows into the overall order, keeping everything else where it was
                  const all = sortByOrder(entries, savedOrder).map((e) => e.key);
                  const shown = new Set(keys);
                  const slots = all.map((k, i) => (shown.has(k) ? i : -1)).filter((i) => i >= 0);
                  slots.forEach((slot, j) => { all[slot] = keys[j]; });
                  setNoteOrder(all);
                }}
                renderItem={(e) => {
                  const f = fs.folders.find((x) => x.id === e.folderId);
                  const sub = query ? snippet(e.text || '', term) : firstLine(e);
                  return (
                    <article className={'note-row' + (selecting && sel.has(e.key) ? ' picked' : '')} role={selecting ? 'checkbox' : 'link'} aria-checked={selecting ? sel.has(e.key) : undefined} tabIndex={0}
                      onClick={(ev) => { if (ev.target.closest('button, [role="menu"], .menu-pop, .overlay')) return; selecting ? pickRow(e.key) : nav(e.to); }}
                      onKeyDown={(ev) => { if (ev.key === 'Enter' || (selecting && ev.key === ' ')) { ev.preventDefault(); selecting ? pickRow(e.key) : nav(e.to); } }}>
                      {selecting && <span className={'sel-dot' + (sel.has(e.key) ? ' on' : '')} aria-hidden="true" />}
                      <div className="nr-main">
                        <div className="nr-title">{e.label}</div>
                        <div className="nr-sub">
                          <span className="nr-date">{e.updated ? new Date(e.updated).toLocaleDateString(undefined, { month: 'numeric', day: 'numeric', year: '2-digit' }) : ''}</span>
                          {e.kind !== 'Note' && <span className="nr-kind">{e.kind}</span>}
                          {query && f && view !== f.id && <span className="nr-kind"><FolderIcon size={11} color={f.color} /> {f.name}</span>}
                          <span className="nr-text">{query ? <Highlight text={sub} term={term} /> : sub}</span>
                        </div>
                      </div>
                      {!selecting && <NoteMenu e={e} onMove={() => { setTarget(e.folderId || ''); setModal({ kind: 'moveNotes', keys: [e.key] }); }} onTrash={() => trashSelected([e.key])} />}
                    </article>
                  );
                }} />
            )}
            {results.length > 1 && !query && !selecting && <p className="muted drag-hint">Drag a note to reorder (on a phone, press and hold first).</p>}
            {entries.length === 0 && (
              <div className="card">
                <div className="serif" style={{ fontSize: 'calc(20px * var(--ts))' }}>No notes yet</div>
                <p className="ink-2" style={{ margin: 0 }}>Open any book, section, chapter or person and write in its notebook, or press “+ New note” for a stand-alone note like sermon notes. Add #tags (like #faith) to find notes later.</p>
              </div>
            )}
            {entries.length > 0 && results.length === 0 && (
              <div className="empty">{query ? 'No notes match your search.' : folder ? 'No notes directly in this folder yet. In any list, tap Select, choose notes, then Move to put them here.' : 'Nothing here.'}</div>
            )}
          </div>}
          {selecting && (
            <div className="sel-bar" role="toolbar" aria-label="Selected notes">
              <button type="button" className="sel-link only-desktop" onClick={() => setSel(selCount === shownKeys.length ? new Set() : new Set(shownKeys))}>
                {selCount === shownKeys.length ? 'Deselect all' : 'Select all'}
              </button>
              {isTrash
                ? <button type="button" className="sel-act" disabled={!selCount} onClick={() => { const n = restoreNotes(selKeys(), labelFor); endSelect(); setMsg(`Restored ${plural(n)}.`); }}>Restore</button>
                : <button type="button" className="sel-act" disabled={!selCount} onClick={() => { setTarget(''); setModal({ kind: 'moveNotes', keys: selKeys() }); }}>Move</button>}
              <span className="sel-n">{selCount ? `${selCount} selected` : 'Select notes'}</span>
              <button type="button" className="sel-act danger" disabled={!selCount}
                onClick={() => (isTrash ? setModal({ kind: 'purge', ids: selKeys() }) : trashSelected(selKeys()))}>Delete</button>
            </div>
          )}
          <p className="muted" style={{ fontSize: 'calc(13px * var(--ts))', margin: 0 }}>Notes and folders are saved on this device{syncOn ? ' and synced to your account' : ''}. <Link to="/settings">Export a backup</Link> in Settings to keep an extra copy.</p>
        </section>
      </div>

      {/* Menus */}
      {menu?.kind === 'folder' && (
        <ActionMenu anchor={menu.anchor} title={menu.folder.name} items={folderItems(menu.folder)} onClose={() => setMenu(null)} />
      )}

      {/* Dialogs */}
      {modal?.kind === 'new' && (
        <Modal title="New folder" onClose={() => setModal(null)}>
          <form className="stack" style={{ gap: 14 }} onSubmit={(e) => { e.preventDefault(); if (!name.trim()) return; const id = createFolder(name, target || null); if (target) { const n = new Set(expanded); n.add(target); setExpanded(n); } setModal(null); nav(`/notes/${id}`); }}>
            <label className="stack" style={{ gap: 6 }}><span className="muted" style={{ fontSize: 'calc(13px * var(--ts))' }}>Name</span>
              <input className="input" autoFocus value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Women of the Bible" /></label>
            <label className="stack" style={{ gap: 6 }}><span className="muted" style={{ fontSize: 'calc(13px * var(--ts))' }}>Inside</span>
              <select className="input" value={target} onChange={(e) => setTarget(e.target.value)}>
                <option value="">Top level</option>
                {flatTree(fs.folders).map((f) => <option key={f.id} value={f.id}>{'  '.repeat(f.depth)}{f.name}</option>)}
              </select></label>
            <div className="row" style={{ justifyContent: 'flex-end' }}><button type="button" className="btn" onClick={() => setModal(null)}>Cancel</button><button type="submit" className="btn primary">Create</button></div>
          </form>
        </Modal>
      )}
      {modal?.kind === 'rename' && (
        <Modal title="Rename folder" onClose={() => setModal(null)}>
          <form className="stack" style={{ gap: 14 }} onSubmit={(e) => { e.preventDefault(); renameFolder(modal.folder.id, name); setModal(null); }}>
            <input className="input" autoFocus value={name} onChange={(e) => setName(e.target.value)} aria-label="Folder name" />
            <div className="row" style={{ justifyContent: 'flex-end' }}><button type="button" className="btn" onClick={() => setModal(null)}>Cancel</button><button type="submit" className="btn primary">Save</button></div>
          </form>
        </Modal>
      )}
      {modal?.kind === 'move' && (
        <Modal title={`Move "${modal.folder.name}"`} onClose={() => setModal(null)}>
          <form className="stack" style={{ gap: 14 }} onSubmit={(e) => { e.preventDefault(); moveFolder(modal.folder.id, target || null); setModal(null); }}>
            <label className="stack" style={{ gap: 6 }}><span className="muted" style={{ fontSize: 'calc(13px * var(--ts))' }}>Move inside</span>
              <select className="input" value={target} onChange={(e) => setTarget(e.target.value)} autoFocus>
                <option value="">Top level</option>
                {flatTree(fs.folders).filter((f) => f.id !== modal.folder.id && !descendants(modal.folder.id, fs.folders).includes(f.id))
                  .map((f) => <option key={f.id} value={f.id}>{'  '.repeat(f.depth)}{f.name}</option>)}
              </select></label>
            <div className="row" style={{ justifyContent: 'flex-end' }}><button type="button" className="btn" onClick={() => setModal(null)}>Cancel</button><button type="submit" className="btn primary">Move</button></div>
          </form>
        </Modal>
      )}
      {modal?.kind === 'moveNotes' && (
        <Modal title={`Move ${plural(modal.keys.length)}`} onClose={() => setModal(null)}>
          <form className="stack" style={{ gap: 14 }} onSubmit={(e) => {
            e.preventDefault();
            setNotesFolder(modal.keys, target || null);
            const to = fs.folders.find((f) => f.id === target);
            setModal(null); endSelect();
            setMsg(`Moved ${plural(modal.keys.length)} to ${to ? to.name : 'Unfiled'}.`);
          }}>
            <label className="stack" style={{ gap: 6 }}><span className="muted" style={{ fontSize: 'calc(13px * var(--ts))' }}>Move to</span>
              <select className="input" value={target} onChange={(e) => setTarget(e.target.value)} autoFocus>
                <option value="">Unfiled (no folder)</option>
                {flatTree(fs.folders).map((f) => <option key={f.id} value={f.id}>{'\u00a0\u00a0'.repeat(f.depth)}{f.name}</option>)}
              </select></label>
            <div className="row" style={{ justifyContent: 'flex-end' }}><button type="button" className="btn" onClick={() => setModal(null)}>Cancel</button><button type="submit" className="btn primary">Move</button></div>
          </form>
        </Modal>
      )}
      {modal?.kind === 'purge' && (() => {
        const n = modal.ids ? modal.ids.length : trash.length;
        return (
          <Modal title={modal.ids ? `Delete ${plural(n)} forever?` : 'Empty Trash?'} onClose={() => setModal(null)}>
            <p className="ink-2" style={{ margin: 0 }}>{n === 1 ? 'This note' : `These ${n} notes`} will be deleted permanently. This can't be undone.</p>
            <div className="row" style={{ justifyContent: 'flex-end' }}>
              <button type="button" className="btn" onClick={() => setModal(null)}>Cancel</button>
              <button type="button" className="btn danger" onClick={() => { purgeTrash(modal.ids); setModal(null); endSelect(); setMsg(`Deleted ${plural(n)} permanently.`); }}>Delete forever</button>
            </div>
          </Modal>
        );
      })()}
      {modal?.kind === 'color' && (
        <Modal title="Folder color" onClose={() => setModal(null)}>
          <div className="row" style={{ gap: 12 }}>
            {FOLDER_COLORS.map((c) => (
              <button key={c} type="button" className={'swatch-btn' + (modal.folder.color === c ? ' on' : '')} style={{ background: c }}
                aria-label={`Color ${c}`} onClick={() => { setFolderColor(modal.folder.id, c); setModal(null); }} />
            ))}
          </div>
        </Modal>
      )}
      {modal?.kind === 'delete' && (() => {
        const subs = descendants(modal.folder.id, fs.folders).length;
        const n = counts.total[modal.folder.id] || 0;
        return (
          <Modal title={`Delete "${modal.folder.name}"?`} onClose={() => setModal(null)}>
            <p className="ink-2" style={{ margin: 0 }}>
              The folder{subs ? ` and its ${subs} sub-folder${subs === 1 ? '' : 's'}` : ''} will be removed.
              {n ? <> Its <b>{n} note{n === 1 ? '' : 's'}</b> will be kept and moved to <b>Unfiled</b>.</> : ' It has no notes.'}
            </p>
            <div className="row" style={{ justifyContent: 'flex-end' }}>
              <button type="button" className="btn" onClick={() => setModal(null)}>Cancel</button>
              <button type="button" className="btn danger" onClick={() => {
                const up = modal.folder.parentId;
                deleteFolder(modal.folder.id);
                setModal(null);
                if (folder && (folder.id === modal.folder.id || descendants(modal.folder.id).includes(folder.id))) nav(up ? `/notes/${up}` : '/notes');
              }}>Delete folder</button>
            </div>
          </Modal>
        );
      })()}
    </main>
  );
}

function SubCard({ f, count, entries, onOptions }) {
  const lp = useLongPress((el) => onOptions(f, el));
  const ids = new Set([f.id, ...descendants(f.id)]);
  const names = entries.filter((e) => ids.has(e.folderId)).slice(0, 2).map((e) => e.label);
  return (
    <Link to={`/notes/${f.id}`} className="subcard" {...lp}>
      <FolderIcon color={f.color} size={24} />
      <span className="subcard-name">{f.name}</span>
      <span className="muted" style={{ fontSize: 'calc(12px * var(--ts))' }}>{count} note{count === 1 ? '' : 's'}{names.length ? ` · ${names.join(', ')}` : ''}</span>
    </Link>
  );
}

// First line of a note's text for the list (Apple Notes style), or "No additional text"
function firstLine(e) {
  const lines = (e.text || '').split('\n').map((l) => l.trim()).filter(Boolean);
  const rest = lines[0] === e.label ? lines.slice(1) : lines;
  return rest[0] || 'No additional text';
}

function NoteMenu({ e, onMove, onTrash }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  return (
    <>
      <button ref={ref} type="button" className="icon-mini" aria-label={`Options for ${e.label}`} onClick={() => setOpen(true)}>⋯</button>
      {open && (
        <ActionMenu anchor={ref.current} title={e.label} onClose={() => setOpen(false)}
          items={[
            { icon: <FolderIcon size={14} />, label: 'Move to folder…', onClick: onMove },
            { divider: true },
            { icon: <TrashIcon size={14} />, label: 'Move to Trash', danger: true, onClick: onTrash },
          ]} />
      )}
    </>
  );
}

function TrashRow({ t, selecting, on, onPick, onRestore, onPurge }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const d = daysLeft(t);
  return (
    <article className={'note-row' + (selecting && on ? ' picked' : '')} role={selecting ? 'checkbox' : 'button'} aria-checked={selecting ? on : undefined} tabIndex={0}
      onClick={(ev) => { if (ev.target.closest('button, [role="menu"], .menu-pop, .overlay')) return; selecting ? onPick() : setOpen(true); }}
      onKeyDown={(ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); selecting ? onPick() : setOpen(true); } }}>
      {selecting && <span className={'sel-dot' + (on ? ' on' : '')} aria-hidden="true" />}
      <div className="nr-main">
        <div className="nr-title">{t.label}</div>
        <div className="nr-sub">
          <span className="nr-date">{d} day{d === 1 ? '' : 's'} left</span>
          {t.kind !== 'Note' && <span className="nr-kind">{t.kind}</span>}
          <span className="nr-text">{firstLine(t)}</span>
        </div>
      </div>
      {!selecting && <button ref={ref} type="button" className="icon-mini" aria-label={`Options for ${t.label}`} onClick={() => setOpen(true)}>⋯</button>}
      {open && (
        <ActionMenu anchor={ref.current} title={t.label} onClose={() => setOpen(false)}
          items={[
            { icon: '↺', label: 'Restore', onClick: onRestore },
            { divider: true },
            { icon: <TrashIcon size={14} />, label: 'Delete forever', danger: true, onClick: onPurge },
          ]} />
      )}
    </article>
  );
}
