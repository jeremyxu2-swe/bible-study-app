import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { isPhone } from '../store/ui.js';
import { pageZoom } from '../utils/zoom.js';

export const FolderIcon = ({ open = false, color = 'currentColor', size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" aria-hidden="true" style={{ flex: 'none' }}>
    {open
      ? <><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v1H7l-4 8z" /><path d="M7 10h14l-3 9H3z" /></>
      : <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />}
  </svg>
);

function useEscape(onClose) {
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') { e.stopPropagation(); onClose(); } };
    document.addEventListener('keydown', h, true);
    return () => document.removeEventListener('keydown', h, true);
  }, [onClose]);
}

// Centered dialog
export function Modal({ title, children, onClose }) {
  useEscape(onClose);
  return createPortal(
    <div className="overlay" data-keep-editing onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
        <h2 className="serif modal-title">{title}</h2>
        {children}
      </div>
    </div>,
    document.body
  );
}

// A list of actions: a dropdown next to the button on a computer, a sheet from the bottom on a phone.
export function ActionMenu({ anchor, title, items, onClose, children, align = 'right' }) {
  useEscape(onClose);
  const ref = useRef(null);
  const phone = isPhone();
  const [pos, setPos] = useState(null);

  useLayoutEffect(() => {
    if (phone || !anchor) return;
    // Screen pixels throughout, converted to CSS pixels at the end (job #21: 80% zoom on the computer).
    const z = pageZoom();
    const r = anchor.getBoundingClientRect();
    const w = (ref.current ? ref.current.offsetWidth : 220) * z;
    const h = (ref.current ? ref.current.offsetHeight : 200) * z;
    let top = r.bottom + 6;
    if (top + h > window.innerHeight - 8) top = Math.max(8, r.top - h - 6);
    let left = align === 'right' ? r.right - w : r.left;
    left = Math.max(8, Math.min(left, window.innerWidth - w - 8));
    setPos({ top: top / z, left: left / z });
  }, [anchor, phone, align]);

  useEffect(() => {
    if (phone) return;
    const h = (e) => {
      if (ref.current && !ref.current.contains(e.target) && !(anchor && anchor.contains(e.target))) onClose();
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [phone, anchor, onClose]);

  const list = (
    <>
      {items?.map((it, i) => it.divider
        ? <div key={i} className="menu-divider" />
        : (
          <button key={i} type="button" role="menuitem" className={'menu-item' + (it.danger ? ' danger' : '') + (it.selected ? ' selected' : '')}
            style={it.indent ? { paddingLeft: 12 + it.indent * 16 } : undefined}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => { it.onClick(); if (!it.keepOpen) onClose(); }}>
            {it.icon && <span className="mi-icon">{it.icon}</span>}
            <span className="mi-label">{it.label}</span>
            {it.hint && <span className="mi-hint">{it.hint}</span>}
          </button>
        ))}
      {children}
    </>
  );

  if (phone) {
    return createPortal(
      <div className="overlay sheet-overlay" data-keep-editing onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        <div className="sheet" role="menu" aria-label={title}>
          <div className="grab" />
          {title && <div className="sheet-title serif">{title}</div>}
          <div className={items?.length > 4 && items.every((i) => i.grid) ? 'sheet-grid' : 'sheet-list'}>{list}</div>
        </div>
      </div>,
      document.body
    );
  }
  return createPortal(
    <div ref={ref} className="menu-pop" role="menu" aria-label={title} data-keep-editing
      style={{ top: pos?.top ?? -9999, left: pos?.left ?? -9999 }}>
      {title && <div className="menu-title">{title}</div>}
      {list}
    </div>,
    document.body
  );
}

// Press-and-hold on phones (opens folder options)
export function useLongPress(onLong, ms = 500) {
  const t = useRef(null);
  const fired = useRef(false);
  const start = (e) => {
    fired.current = false;
    const target = e.currentTarget;
    t.current = setTimeout(() => { fired.current = true; onLong(target); }, ms);
  };
  const cancel = () => clearTimeout(t.current);
  return {
    onTouchStart: start,
    onTouchEnd: cancel,
    onTouchMove: cancel,
    onContextMenu: (e) => { if (isPhone()) e.preventDefault(); },
    onClickCapture: (e) => { if (fired.current) { e.preventDefault(); e.stopPropagation(); fired.current = false; } },
  };
}
