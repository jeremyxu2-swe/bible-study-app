import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useEditor, EditorContent, Mark, Extension, mergeAttributes } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import Placeholder from '@tiptap/extension-placeholder';
import { saveNote, useNote } from '../store/notes.js';
import { setActiveEditor, useActiveEditor, isPhone } from '../store/ui.js';
import { ActionMenu } from './ui.jsx';
import AutoTitle from './AutoTitle.jsx';
import { pageZoom } from '../utils/zoom.js';

// ───────── Extra formatting (Apple Notes style), built without extra packages ─────────
const Underline = Mark.create({
  name: 'underline',
  parseHTML: () => [{ tag: 'u' }, { style: 'text-decoration', getAttrs: (v) => (String(v).includes('underline') ? {} : false) }],
  renderHTML: ({ HTMLAttributes }) => ['u', mergeAttributes(HTMLAttributes), 0],
  addKeyboardShortcuts() { return { 'Mod-u': () => this.editor.commands.toggleMark(this.name) }; },
});

// Text colors from the app's palette (stored as a name, so the theme decides the exact shade)
export const NOTE_COLORS = [
  { id: 'gold', label: 'Gold' }, { id: 'rose', label: 'Rose' }, { id: 'sage', label: 'Sage' },
  { id: 'sky', label: 'Sky' }, { id: 'violet', label: 'Violet' },
];
const TextColor = Mark.create({
  name: 'textColor',
  addAttributes: () => ({ color: { default: null, parseHTML: (el) => el.getAttribute('data-color'), renderHTML: (a) => (a.color ? { 'data-color': a.color } : {}) } }),
  parseHTML: () => [{ tag: 'span[data-color]' }],
  renderHTML: ({ HTMLAttributes }) => ['span', mergeAttributes(HTMLAttributes), 0],
});

// Bulleted lists can be shown with dashes instead of dots
const ListStyle = Extension.create({
  name: 'listStyle',
  addGlobalAttributes: () => [{
    types: ['bulletList'],
    attributes: { listStyle: { default: null, parseHTML: (el) => el.getAttribute('data-style'), renderHTML: (a) => (a.listStyle ? { 'data-style': a.listStyle } : {}) } },
  }],
});

// ───────── Icons (SF Symbols–like line icons) ─────────
const S = ({ children, size = 22, sw = 1.8 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);
const I = {
  back: <S size={24} sw={2.2}><path d="M15 5l-7 7 7 7" /></S>,
  undo: <S><path d="M9 14L4 9l5-5" /><path d="M4 9h10a6 6 0 010 12h-3" /></S>,
  redo: <S><path d="M15 14l5-5-5-5" /><path d="M20 9H10a6 6 0 000 12h3" /></S>,
  share: <S><path d="M12 3v12" /><path d="M8 7l4-4 4 4" /><path d="M6 11H5a1 1 0 00-1 1v8a1 1 0 001 1h14a1 1 0 001-1v-8a1 1 0 00-1-1h-1" /></S>,
  more: <S sw={2.6}><path d="M5 12h.01M12 12h.01M19 12h.01" /></S>,
  check: <S size={26} sw={2.4}><path d="M5 12.5l4.5 4.5L19 7" /></S>,
  close: <S sw={2.2}><path d="M6 6l12 12M18 6L6 18" /></S>,
  checklist: <S><circle cx="5.5" cy="7" r="2.5" /><path d="M4.3 7l.9.9 1.6-1.8" /><circle cx="5.5" cy="17" r="2.5" /><path d="M11 7h9M11 17h9" /></S>,
  bullets: <S><path d="M9 6h11M9 12h11M9 18h11" /><circle cx="4.5" cy="6" r=".6" fill="currentColor" /><circle cx="4.5" cy="12" r=".6" fill="currentColor" /><circle cx="4.5" cy="18" r=".6" fill="currentColor" /></S>,
  dashes: <S><path d="M9 6h11M9 12h11M9 18h11M3 6h3M3 12h3M3 18h3" /></S>,
  numbers: <S><path d="M10 6h10M10 12h10M10 18h10" /><path d="M4 4.5l1.2-.8V8.5" strokeWidth={1.4} /><path d="M3.6 11.2c.4-.6 2.1-.7 2.1.4 0 .9-2.2 1.9-2.2 2.9h2.3" /><path d="M3.6 16.4h2l-1 1.3c.8 0 1.2.4 1.2 1s-.6 1-1.2 1-.9-.2-1.1-.5" /></S>,
  outdent: <S><path d="M10 6h10M10 12h10M10 18h10" /><path d="M7 9l-3 3 3 3" /></S>,
  indent: <S><path d="M10 6h10M10 12h10M10 18h10" /><path d="M4 9l3 3-3 3" /></S>,
  quote: <S><path d="M5 4v16" strokeWidth={2.6} /><rect x="9" y="7" width="11" height="10" rx="2" fill="currentColor" stroke="none" opacity=".85" /></S>,
  pen: <S><path d="M4 20h16" /><path d="M14.5 5.5l3 3L9 17l-4 1 1-4z" /></S>,
  tag: <S><path d="M9 4L7 20M17 4l-2 16M4 9h16M3 15h16" /></S>,
  keyboard: <S><rect x="3" y="5" width="18" height="11" rx="2" /><path d="M7 9h.01M11 9h.01M15 9h.01M8 12.5h8" /><path d="M9.5 19l2.5 2 2.5-2" /></S>,
};
const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || '');

// ───────── Shared formatting helpers ─────────
function useFmt(editor, keepFocus) {
  const c = () => (keepFocus ? editor.chain().focus() : editor.chain());
  const itemType = editor.isActive('taskList') ? 'taskItem' : 'listItem';
  const listKind = editor.isActive('taskList') ? 'check'
    : editor.isActive('orderedList') ? 'numbered'
      : editor.isActive('bulletList') ? (editor.getAttributes('bulletList').listStyle === 'dashed' ? 'dashed' : 'bulleted') : null;
  const style = editor.isActive('heading', { level: 1 }) ? 'title' : editor.isActive('heading', { level: 2 }) ? 'heading' : editor.isActive('heading', { level: 3 }) ? 'subheading' : 'body';
  return {
    c, itemType, listKind, style,
    setStyle: (s) => {
      if (s === 'body') return c().setParagraph().run();
      const level = s === 'title' ? 1 : s === 'heading' ? 2 : 3;
      return c().setHeading({ level }).run();
    },
    setList: (kind) => {
      if (kind === listKind) {
        if (kind === 'numbered') return c().toggleOrderedList().run();
        return c().toggleBulletList().run();
      }
      if (kind === 'numbered') return c().toggleOrderedList().run();
      let ch = c();
      if (listKind !== 'bulleted' && listKind !== 'dashed') ch = ch.toggleBulletList();
      return ch.updateAttributes('bulletList', { listStyle: kind === 'dashed' ? 'dashed' : null }).run();
    },
    toggleCheck: () => c().toggleTaskList().run(),
    color: editor.getAttributes('textColor').color || null,
    setColor: (id) => (id ? c().setMark('textColor', { color: id }).run() : c().unsetMark('textColor').run()),
    tag: () => c().insertContent('#').run(),
  };
}

function Btn({ on, label, onClick, children, className = '', disabled }) {
  return (
    <button type="button" className={'nb' + (on ? ' on' : '') + (className ? ` ${className}` : '')} aria-label={label} title={label}
      aria-pressed={on === undefined ? undefined : on ? 'true' : 'false'} disabled={disabled}
      onMouseDown={(e) => e.preventDefault()} onClick={onClick}>
      {children}
    </button>
  );
}

// The Apple Notes "Format" panel: styles, B I U S, highlight + color, lists, indent, block quote
function FormatPanel({ editor, keepFocus, onClose, compact = false }) {
  const f = useFmt(editor, keepFocus);
  const [colors, setColors] = useState(false);
  const styles = [['title', 'Title'], ['heading', 'Heading'], ['subheading', 'Subheading'], ['body', 'Body']];
  return (
    <div className={'fmt' + (compact ? ' compact' : '')} data-keep-editing>
      {!compact && (
        <div className="fmt-head">
          <h3>Format</h3>
          <button type="button" className="round-btn sm" aria-label="Close format" onMouseDown={(e) => e.preventDefault()} onClick={onClose}>{I.close}</button>
        </div>
      )}
      <div className="fmt-styles" role="group" aria-label="Paragraph style">
        {styles.map(([k, l]) => (
          <button key={k} type="button" className={`fs-${k}` + (f.style === k ? ' on' : '')} aria-pressed={f.style === k}
            onMouseDown={(e) => e.preventDefault()} onClick={() => f.setStyle(k)}>{l}</button>
        ))}
      </div>
      <div className="fmt-row">
        <div className="pill-group">
          <Btn label="Bold" on={editor.isActive('bold')} onClick={() => f.c().toggleBold().run()}><b className="glyph">B</b></Btn>
          <Btn label="Italic" on={editor.isActive('italic')} onClick={() => f.c().toggleItalic().run()}><i className="glyph serif-i">I</i></Btn>
          <Btn label="Underline" on={editor.isActive('underline')} onClick={() => f.c().toggleMark('underline').run()}><u className="glyph">U</u></Btn>
          <Btn label="Strikethrough" on={editor.isActive('strike')} onClick={() => f.c().toggleStrike().run()}><s className="glyph">S</s></Btn>
        </div>
        <div className="pill-group">
          <Btn label="Highlight" on={editor.isActive('highlight')} onClick={() => f.c().toggleHighlight().run()}>{I.pen}</Btn>
          <Btn label="Text color" on={colors || !!f.color} onClick={() => setColors((v) => !v)}>
            <span className="color-dot" data-color={f.color || 'gold'} />
          </Btn>
        </div>
      </div>
      {colors && (
        <div className="fmt-colors" role="group" aria-label="Text color">
          <button type="button" className={'swatch none' + (!f.color ? ' on' : '')} aria-label="Default color" onMouseDown={(e) => e.preventDefault()} onClick={() => f.setColor(null)} />
          {NOTE_COLORS.map((col) => (
            <button key={col.id} type="button" className={'swatch' + (f.color === col.id ? ' on' : '')} data-color={col.id} aria-label={col.label}
              onMouseDown={(e) => e.preventDefault()} onClick={() => f.setColor(col.id)} />
          ))}
        </div>
      )}
      <div className="fmt-row">
        <div className="pill-group">
          <Btn label="Bulleted list" on={f.listKind === 'bulleted'} onClick={() => f.setList('bulleted')}>{I.bullets}</Btn>
          <Btn label="Dashed list" on={f.listKind === 'dashed'} onClick={() => f.setList('dashed')}>{I.dashes}</Btn>
          <Btn label="Numbered list" on={f.listKind === 'numbered'} onClick={() => f.setList('numbered')}>{I.numbers}</Btn>
        </div>
        <div className="pill-group">
          <Btn label="Outdent" onClick={() => f.c().liftListItem(f.itemType).run()}>{I.outdent}</Btn>
          <Btn label="Indent" onClick={() => f.c().sinkListItem(f.itemType).run()}>{I.indent}</Btn>
        </div>
        <div className="pill-group">
          <Btn label="Block quote" on={editor.isActive('blockquote')} onClick={() => f.c().toggleBlockquote().run()}>{I.quote}</Btn>
        </div>
        {compact && (
          <div className="pill-group">
            <Btn label="Checklist" on={f.listKind === 'check'} onClick={f.toggleCheck}>{I.checklist}</Btn>
            <Btn label="Add a #tag" onClick={f.tag}>{I.tag}</Btn>
          </div>
        )}
      </div>
    </div>
  );
}

// Keep fixed bars sitting right on top of the on-screen keyboard
// Keep the full-screen note inside the part of the screen you can actually see.
// iOS shrinks the "visual viewport" for the keyboard AND scrolls it to show the cursor,
// so the note follows both its top and height (not just the keyboard height).
function useVisibleArea(enabled) {
  const [area, setArea] = useState(null);
  useEffect(() => {
    const vv = window.visualViewport;
    if (!enabled || !vv) return;
    let raf = 0;
    let until = 0;
    const read = () => {
      const kbOpen = window.innerHeight - vv.height > 80;
      setArea((a) => {
        const z = pageZoom(); // screen px → CSS px (job #21: 80% zoom on the computer)
        const next = { top: Math.round(vv.offsetTop / z), height: Math.round(vv.height / z), kbOpen };
        return a && a.top === next.top && a.height === next.height && a.kbOpen === next.kbOpen ? a : next;
      });
    };
    // iOS sometimes fires its events before the keyboard finishes sliding in, so keep checking briefly
    const settle = () => {
      until = performance.now() + 700;
      cancelAnimationFrame(raf);
      const tick = () => { read(); if (performance.now() < until) raf = requestAnimationFrame(tick); };
      tick();
    };
    read();
    vv.addEventListener('resize', settle);
    vv.addEventListener('scroll', settle);
    window.addEventListener('focusin', settle);
    window.addEventListener('focusout', settle);
    return () => {
      cancelAnimationFrame(raf);
      vv.removeEventListener('resize', settle); vv.removeEventListener('scroll', settle);
      window.removeEventListener('focusin', settle); window.removeEventListener('focusout', settle);
    };
  }, [enabled]);
  return area;
}

const when = (t) => {
  const d = t ? new Date(t) : new Date();
  return `${d.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })} at ${d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })}`;
};

// ───────── Phone: full-screen note, like Apple Notes on iPhone ─────────
function PhoneNote({ editor, noteKey, title, updated, showFolder, onDone, status, titleField }) {
  const area = useVisibleArea(true);
  // after the screen resizes for the keyboard, bring the cursor back into view
  useEffect(() => { if (area?.kbOpen && editor.isFocused) setTimeout(() => editor.commands.scrollIntoView(), 30); }, [area?.height, area?.top]); // eslint-disable-line react-hooks/exhaustive-deps
  const [panel, setPanel] = useState(null); // 'format' | 'lists' | 'more' | null
  const moreRef = useRef(null);
  const f = useFmt(editor, true);
  const [, force] = useState(0);

  // Re-render the toolbar state as the cursor moves
  useEffect(() => {
    const t = () => force((n) => n + 1);
    editor.on('selectionUpdate', t); editor.on('transaction', t);
    return () => { editor.off('selectionUpdate', t); editor.off('transaction', t); };
  }, [editor]);

  useEffect(() => {
    document.body.classList.add('note-full');
    return () => document.body.classList.remove('note-full');
  }, []);

  const openFormat = () => { editor.commands.blur(); setPanel('format'); };
  const closeFormat = () => { setPanel(null); setTimeout(() => editor.commands.focus(), 0); };
  const share = async () => {
    const text = editor.getText();
    try {
      if (navigator.share) await navigator.share({ title, text });
      else { await navigator.clipboard.writeText(text); alert('Note copied to the clipboard.'); }
    } catch { /* cancelled */ }
  };
  const listIcon = f.listKind === 'numbered' ? I.numbers : f.listKind === 'dashed' ? I.dashes : I.bullets;

  return createPortal(
    <div className={'note-full-screen' + (area?.kbOpen ? ' kb-open' : '')} data-keep-editing
      style={area ? { top: area.top, height: area.height, bottom: 'auto' } : undefined}>
      <header className="nf-top">
        <button type="button" className="round-btn" aria-label="Back (your note is saved)" onMouseDown={(e) => e.preventDefault()} onClick={onDone}>{I.back}</button>
        <div className="nf-top-right">
          <div className="round-pill">
            <button type="button" aria-label="Share" onMouseDown={(e) => e.preventDefault()} onClick={share}>{I.share}</button>
            <button type="button" ref={moreRef} aria-label="More" onMouseDown={(e) => e.preventDefault()} onClick={() => setPanel(panel === 'more' ? null : 'more')}>{I.more}</button>
          </div>
        </div>
      </header>

      <div className="nf-scroll">
        <div className="nf-date">{title && !titleField ? `${title} · ` : ''}{when(updated)}</div>
        {titleField && (
          <AutoTitle className="nf-title" value={titleField.value} placeholder="Title" aria-label="Note title"
            onChange={(v) => titleField.onChange(v)}
            onEnter={() => editor.commands.focus('start')} />
        )}
        <div className="nf-body"><EditorContent editor={editor} /></div>
      </div>

      {panel === 'format' ? (
        <div className="nf-sheet"><FormatPanel editor={editor} keepFocus={false} onClose={closeFormat} /></div>
      ) : (
        <div className="nf-bar" role="toolbar" aria-label="Note tools">
          {panel === 'lists' && (
            <div className="nf-pop" role="menu" aria-label="List style">
              {[['bulleted', 'Bulleted', I.bullets], ['dashed', 'Dashed', I.dashes], ['numbered', 'Numbered', I.numbers]].map(([k, l, ic]) => (
                <button key={k} type="button" role="menuitemradio" aria-checked={f.listKind === k} className={f.listKind === k ? 'on' : ''}
                  onMouseDown={(e) => e.preventDefault()} onClick={() => { f.setList(k); setPanel(null); }}>
                  {ic}<span>{l}</span>
                </button>
              ))}
            </div>
          )}
          <div className="nf-pill">
            <button type="button" aria-label="Format" onMouseDown={(e) => e.preventDefault()} onClick={openFormat}><span className="aa">Aa</span></button>
            <button type="button" aria-label="Checklist" className={f.listKind === 'check' ? 'on' : ''} onMouseDown={(e) => e.preventDefault()} onClick={f.toggleCheck}>{I.checklist}</button>
            <button type="button" aria-label="Lists" aria-haspopup="menu" aria-expanded={panel === 'lists'} className={f.listKind && f.listKind !== 'check' ? 'on' : ''}
              onMouseDown={(e) => e.preventDefault()} onClick={() => setPanel(panel === 'lists' ? null : 'lists')}>{listIcon}</button>
            <button type="button" aria-label="Indent" onMouseDown={(e) => e.preventDefault()} onClick={() => f.c().sinkListItem(f.itemType).run()}>{I.indent}</button>
            <button type="button" aria-label="Add a #tag" onMouseDown={(e) => e.preventDefault()} onClick={f.tag}>{I.tag}</button>
            <button type="button" aria-label="Hide keyboard" onMouseDown={(e) => e.preventDefault()} onClick={() => { setPanel(null); editor.commands.blur(); }}>{I.keyboard}</button>
          </div>
        </div>
      )}

      {panel === 'more' && (
        <ActionMenu anchor={moreRef.current} title="Note" onClose={() => setPanel(null)}
          items={[
            { icon: '↶', label: 'Undo', onClick: () => editor.chain().focus().undo().run() },
            { icon: '↷', label: 'Redo', onClick: () => editor.chain().focus().redo().run() },
            { icon: '#', label: 'Add a tag', onClick: f.tag },
            { icon: '⧉', label: 'Copy text', onClick: () => navigator.clipboard?.writeText(editor.getText()) },
          ]} />
      )}
    </div>,
    document.body
  );
}

// ───────── Computer: Apple-style format bar above the note ─────────
function DeskToolbar({ editor }) {
  const [, force] = useState(0);
  useEffect(() => {
    const t = () => force((n) => n + 1);
    editor.on('selectionUpdate', t); editor.on('transaction', t);
    return () => { editor.off('selectionUpdate', t); editor.off('transaction', t); };
  }, [editor]);
  return (
    <div className="desk-fmt" role="toolbar" aria-label="Formatting" data-keep-editing>
      <FormatPanel editor={editor} keepFocus compact />
      <div className="desk-undo">
        <Btn label={`Undo (${isMac ? '⌘' : 'Ctrl+'}Z)`} disabled={!editor.can().undo()} onClick={() => editor.chain().focus().undo().run()}>{I.undo}</Btn>
        <Btn label={`Redo (${isMac ? '⇧⌘' : 'Ctrl+'}${isMac ? 'Z' : 'Y'})`} disabled={!editor.can().redo()} onClick={() => editor.chain().focus().redo().run()}>{I.redo}</Btn>
      </div>
    </div>
  );
}

function Editor({ noteKey, title, placeholder, showFolder = true, onExit, titleField, autoEdit = false }) {
  const existing = useNote(noteKey);
  const active = useActiveEditor() === noteKey;
  const [status, setStatus] = useState('');
  const [empty, setEmpty] = useState(!existing?.text);
  const timer = useRef(null);
  const card = useRef(null);
  const phone = isPhone();

  const editor = useEditor({
    editable: false,
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
      Underline,
      TextColor,
      ListStyle,
      Highlight,
      TaskList,
      TaskItem.configure({ nested: true }),
      Placeholder.configure({ placeholder: placeholder || 'Write a note… type "- " for bullets, "#tag" for tags' }),
    ],
    content: existing?.html || '',
    onUpdate: ({ editor }) => {
      setStatus('Saving…');
      setEmpty(editor.isEmpty);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        timer.current = null;
        saveNote(noteKey, editor.getHTML(), editor.getText());
        setStatus('Saved');
      }, 500);
    },
  });

  const flush = () => {
    if (timer.current && editor && !editor.isDestroyed) {
      clearTimeout(timer.current);
      timer.current = null;
      saveNote(noteKey, editor.getHTML(), editor.getText());
    }
  };

  // Autosave also when the app is hidden or closed mid-typing
  useEffect(() => {
    const save = () => { if (document.visibilityState === 'hidden') flush(); };
    window.addEventListener('pagehide', flush);
    document.addEventListener('visibilitychange', save);
    return () => { window.removeEventListener('pagehide', flush); document.removeEventListener('visibilitychange', save); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  // Open straight into editing (phones, from a stand-alone note)
  useEffect(() => { if (editor && autoEdit) setActiveEditor(noteKey); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [editor]);

  // Switch between viewing and editing
  useEffect(() => {
    if (!editor) return;
    editor.setEditable(active);
    if (active) {
      setStatus(existing ? 'Saved' : '');
      setTimeout(() => editor.commands.focus('end'), 0);
    } else {
      flush();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, editor]);

  // Leave edit mode: click outside, or Esc
  useEffect(() => {
    if (!active) return;
    const out = (e) => {
      if (card.current?.contains(e.target) || e.target.closest?.('[data-keep-editing]')) return;
      setActiveEditor(null);
    };
    const esc = (e) => { if (e.key === 'Escape') setActiveEditor(null); };
    document.addEventListener('mousedown', out);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', out); document.removeEventListener('keydown', esc); };
  }, [active]);

  useEffect(() => () => {
    flush();
    if (document.body.classList.contains('is-editing')) setActiveEditor(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  // Show changes that arrive from another device (only while not editing here)
  useEffect(() => {
    if (!editor || active) return;
    const html = existing?.html || '';
    if (html === '' ? !editor.isEmpty : editor.getHTML() !== html) {
      editor.commands.setContent(html, false);
      setEmpty(editor.isEmpty);
    }
  }, [existing?.updated, existing?.html, editor, active]);

  if (!editor) return null;
  const startEditing = () => { if (!active) setActiveEditor(noteKey); };
  const done = () => { flush(); setActiveEditor(null); if (phone && onExit) onExit(); };
  const fullScreen = active && phone;

  return (
    <div ref={card} className={'editor-card' + (active && !phone ? ' editing' : '')}>
      <div className="editor-head">
        <h3 className="h3" style={{ fontSize: 'calc(20px * var(--ts))' }}>{title}</h3>
        {active && !phone ? (
          <span className="row" style={{ gap: 8, flexWrap: 'nowrap' }}>
            <span className="muted" style={{ fontSize: 'calc(12px * var(--ts))' }} aria-live="polite">{status || 'Saves automatically'}</span>
          </span>
        ) : (!empty && !fullScreen && <button type="button" className="edit-link" onClick={startEditing}>Edit</button>)}
      </div>
      {active && !phone && <DeskToolbar editor={editor} />}
      {fullScreen ? (
        <>
          <div className="muted" style={{ fontSize: 'calc(13px * var(--ts))' }}>Editing…</div>
          <PhoneNote editor={editor} noteKey={noteKey} title={title} updated={existing?.updated} showFolder={showFolder} onDone={done} status={status} titleField={titleField} />
        </>
      ) : !active && empty ? (
        <button type="button" className="add-note" onClick={startEditing}><b>+</b> Add a note…</button>
      ) : (
        <div className={'editor-body' + (active ? '' : ' viewing')} onClick={startEditing}>
          <EditorContent editor={editor} />
        </div>
      )}
    </div>
  );
}

export default function NoteEditor(props) {
  // remount when the note changes so the editor loads the right content
  return <Editor key={props.noteKey} {...props} />;
}
