import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useNote, setFreeTitle, deleteNote } from '../store/notes.js';
import { useFolders, folderPath } from '../store/folders.js';
import NoteEditor from '../components/NoteEditor.jsx';
import AutoTitle from '../components/AutoTitle.jsx';
import { setActiveEditor, isPhone } from '../store/ui.js';

// A stand-alone note (sermon notes, prayers, topic studies) that isn't tied to one chapter
export default function FreeNote() {
  const { id } = useParams();
  const key = `free:${id}`;
  const note = useNote(key);
  const fs = useFolders();
  const nav = useNavigate();
  const [title, setTitle] = useState(note?.title || '');

  useEffect(() => { setTitle(note?.title || ''); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [id]);
  // A brand-new note opens straight into editing
  useEffect(() => { if (note && !note.text) setTimeout(() => setActiveEditor(key), 50); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [id]);

  if (!note) return <main className="wrap page"><h1 className="h1-sm">Note not found</h1><Link to="/notes">Back to My Notes</Link></main>;
  const path = folderPath(fs.assign[key], fs.folders);
  const back = path.length ? `/notes/${path[path.length - 1].id}` : '/notes/all';

  return (
    <main className="wrap page" style={{ maxWidth: 860 }}>
      <div className="stack" style={{ gap: 18 }}>
        <nav className="crumbs" aria-label="Folder path">
          <Link to="/notes/all">My Notes</Link>
          {path.map((p) => <span key={p.id}> › <Link to={`/notes/${p.id}`}>{p.name}</Link></span>)}
        </nav>
        <label className="sr-only" htmlFor="note-title">Note title</label>
        <AutoTitle id="note-title" className="title-input serif" value={title} placeholder="Untitled note"
          onChange={(v) => { setTitle(v); setFreeTitle(key, v || 'Untitled note'); }} />
        <div className="muted" style={{ fontSize: 'calc(13px * var(--ts))', marginTop: -10 }}>
          Stand-alone note · created {new Date(note.created).toLocaleDateString()}
        </div>
        <NoteEditor noteKey={key} title="Note" placeholder="Write your notes… type “- ” for bullets, “#tag” for tags"
          autoEdit={isPhone()} onExit={() => nav(back)}
          titleField={{ value: title, onChange: (v) => { setTitle(v); setFreeTitle(key, v || 'Untitled note'); } }} />
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <Link className="btn" to={back}>‹ Back to {path.length ? path[path.length - 1].name : 'My Notes'}</Link>
          <button type="button" className="btn danger-outline" onClick={() => {
            deleteNote(key); nav(back);
          }}>Move to Trash</button>
        </div>
      </div>
    </main>
  );
}
