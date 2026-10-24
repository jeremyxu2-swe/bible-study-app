// Line icons used in the sidebar, drawer and bottom bar. All draw with currentColor.
const P = {
  book: <path d="M4 5h6a2 2 0 012 2v12a2 2 0 00-2-2H4zM20 5h-6a2 2 0 00-2 2v12a2 2 0 012-2h6z" />,
  books: <path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z" />,
  tree: <><path d="M6 3v18M6 8c5 0 5 4 10 4M6 14c4 0 4 3 8 3" /><circle cx="17" cy="12" r="1.6" /><circle cx="15" cy="17" r="1.6" /></>,
  shield: <path d="M12 3l8 4v5c0 5-4 8-8 9-4-1-8-4-8-9V7z" />,
  people: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0116 0" /></>,
  christ: <path d="M12 3v18M5 9h14" />,
  scroll: <path d="M7 4h11a2 2 0 012 2v1h-4M7 4a2 2 0 00-2 2v12a2 2 0 002 2h9a2 2 0 002-2V7M7 4a2 2 0 012 2v12M12 9h3M12 13h3" />,
  diamond: <path d="M12 3l8 9-8 9-8-9z" />,
  compare: <><rect x="3" y="5" width="7" height="14" rx="1.5" /><rect x="14" y="5" width="7" height="14" rx="1.5" /></>,
  notes: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" /></>,
  moon: <path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6L19 19M5 19l1.4-1.4M17.6 6.4L19 5" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  sideClose: <><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M9 4v16M15.5 9.5L13 12l2.5 2.5" /></>,
  sideOpen: <><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M9 4v16M13 9.5l2.5 2.5-2.5 2.5" /></>,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18" /></>,
  map: <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14" />,
  crown: <path d="M4 17h16M5 17l-1-9 5 4 3-6 3 6 5-4-1 9" />,
  user: <><circle cx="12" cy="9" r="3.5" /><path d="M5.5 19.5a7 7 0 0113 0" /></>,
};

export default function Icon({ k, size = 20, stroke = 1.8, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{P[k]}</svg>
  );
}

// The lamp logo.
export function Lamp({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 8c-6 9-11 14-11 22a11 11 0 0022 0c0-8-5-13-11-22z" fill="var(--accent)" />
      <rect x="20" y="48" width="24" height="6" rx="3" fill="var(--accent)" />
    </svg>
  );
}
