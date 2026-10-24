import { useRef, useState } from 'react';
import { useFolders, flatTree, setNoteFolder, createFolder } from '../store/folders.js';
import { ActionMenu, FolderIcon } from './ui.jsx';

// Small chip showing which folder a note is in; tap to move it.
export default function FolderPicker({ noteKey }) {
  const fs = useFolders();
  const [open, setOpen] = useState(false);
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState('');
  const btn = useRef(null);
  const current = fs.folders.find((f) => f.id === fs.assign[noteKey]);
  const tree = flatTree(fs.folders);

  const close = () => { setOpen(false); setAdding(false); setName(''); };
  const create = () => {
    if (!name.trim()) return;
    const id = createFolder(name);
    setNoteFolder(noteKey, id);
    close();
  };

  return (
    <>
      <button ref={btn} type="button" className="folder-chip" data-keep-editing aria-haspopup="menu" aria-expanded={open}
        onMouseDown={(e) => e.preventDefault()} onClick={() => setOpen((o) => !o)}>
        <FolderIcon color={current?.color || 'currentColor'} size={14} />
        <span>{current ? current.name : 'Unfiled'}</span>
        <span aria-hidden="true">▾</span>
      </button>
      {open && (
        <ActionMenu anchor={btn.current} align="left" title="Move to folder" onClose={close}
          items={[
            ...tree.map((f) => ({ label: f.name, indent: f.depth, icon: <FolderIcon color={f.color} size={14} />, selected: current?.id === f.id, hint: current?.id === f.id ? '✓' : '', onClick: () => setNoteFolder(noteKey, f.id) })),
            { label: 'Unfiled', icon: <FolderIcon size={14} />, selected: !current, hint: !current ? '✓' : '', onClick: () => setNoteFolder(noteKey, null) },
            { divider: true },
            ...(!adding ? [{ label: '+ New folder…', keepOpen: true, onClick: () => setAdding(true) }] : []),
          ]}>
          {adding && (
            <form className="menu-form" onSubmit={(e) => { e.preventDefault(); create(); }}>
              <label className="sr-only" htmlFor={`nf-${noteKey}`}>New folder name</label>
              <input id={`nf-${noteKey}`} className="input" autoFocus placeholder="Folder name" value={name} onChange={(e) => setName(e.target.value)} />
              <button type="submit" className="btn primary">Create</button>
            </form>
          )}
        </ActionMenu>
      )}
    </>
  );
}
