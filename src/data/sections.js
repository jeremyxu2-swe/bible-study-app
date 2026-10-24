// App sections shown in the sidebar (computer), and the ☰ drawer (phone).
// To add a section: add one entry here with a name, icon, color and pages, then add its routes in App.jsx.
//   icon  — a key from the icon set in components/Icon.jsx
//   tab   — a short label for the page (not shown anywhere right now; the phone bottom bar was removed)
//   match — path prefixes that belong to this page ('/' on its own only matches the home page)
//   soon  — shown greyed out with a "Soon" badge; its pages aren't clickable yet
export const SECTIONS = [
  {
    id: 'bible',
    name: 'Bible Summaries',
    icon: 'book',
    color: '#D9B26A',
    pages: [
      { id: 'books', label: 'Books & Timeline', tab: 'Books', icon: 'books', to: '/', count: 66, match: ['/', '/book/', '/nation/', '/church/'] },
      { id: 'people', label: 'People', tab: 'People', icon: 'people', to: '/people', match: ['/people'] },
      { id: 'powers', label: 'Geopolitical Timeline', icon: 'globe', to: '/empire', match: ['/empire'] },
      { id: 'kings', label: 'Kings & Prophets', tab: 'Kings', icon: 'crown', to: '/kings', match: ['/kings'] },
      { id: 'christ', label: 'Christ in Scripture', tab: 'Christ', icon: 'christ', to: '/prophecies', match: ['/prophecies'] },
      { id: 'leviticus', label: 'Leviticus Study', icon: 'tent', to: '/study/leviticus', match: ['/study/leviticus'] },
      { id: 'daniel', label: 'Daniel’s Prophecies', icon: 'scroll', to: '/daniel', match: ['/daniel'] },
      { id: 'journeys', label: 'Paul’s Journeys', icon: 'map', to: '/journeys', match: ['/journeys'] },
      { id: 'apocrypha', label: 'Apocrypha', icon: 'scroll', to: '/apocrypha', match: ['/apocrypha', '/book/1maccabees'] },
    ],
  },
  {
    id: 'history',
    name: 'Church History',
    icon: 'tree',
    color: '#7FA4E0',
    pages: [
      { id: 'denominations', label: 'Denominations', tab: 'Branches', icon: 'tree', to: '/history/denominations' },
      { id: 'key-people', label: 'Key People', tab: 'People', icon: 'people', to: '/history/people' },
      { id: 'turning-points', label: 'Turning Points', tab: 'Events', icon: 'diamond', to: '/history/turning-points', count: 5 },
      { id: 'compare', label: 'Compare', icon: 'compare', to: '/history/compare' },
    ],
  },
  {
    id: 'theology',
    name: 'Theology',
    icon: 'shield',
    color: '#A98BDB',
    pages: [
      { id: 'last-things', label: 'Eschatology', tab: 'End Times', icon: 'diamond', to: '/theology/last-things', match: ['/theology/last-things'] },
      { id: 'disp-covenant', label: 'Dispensational vs Covenant', tab: 'Compare', icon: 'compare', to: '/theology/compare', match: ['/theology/compare'] },
    ],
  },
];

// Pages shared by every section.
export const SHARED = [
  { id: 'notes', label: 'My Notes', icon: 'notes', to: '/notes', match: ['/notes', '/note/'] },
  { id: 'search', label: 'Search', icon: 'search', to: '/search', match: ['/search'] },
  { id: 'settings', label: 'Settings', icon: 'gear', to: '/settings', match: ['/settings'] },
];

const matches = (page, path) => (page.match || [page.to]).some((m) => (m === '/' ? path === '/' : path === m || path.startsWith(m.endsWith('/') ? m : m + '/')));

// Remember the last section, so Notes / Search / Settings stay with that section.
let lastSection = 'bible';

// Where am I? → { section, page, shared }
export function locate(path) {
  // The most specific match wins (e.g. '/book/1maccabees' → Apocrypha rather than '/book/' → Books & Timeline).
  let best = null, bestLen = -1;
  for (const s of SECTIONS) {
    if (s.soon) continue;
    for (const p of s.pages) {
      if (!p.to || !matches(p, path)) continue;
      const len = Math.max(...(p.match || [p.to]).filter((m) => (m === '/' ? path === '/' : path === m || path.startsWith(m.endsWith('/') ? m : m + '/'))).map((m) => m.length));
      if (len > bestLen) { best = { s, p }; bestLen = len; }
    }
  }
  if (best) { lastSection = best.s.id; return { section: best.s, page: best.p, shared: null }; }
  const shared = SHARED.find((p) => matches(p, path)) || null;
  const section = SECTIONS.find((s) => s.id === lastSection);
  if (!shared) return { section, page: section.pages[0], shared: null }; // unknown path: falls back to the home page
  return { section, page: null, shared };
}
