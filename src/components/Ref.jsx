import { Link } from 'react-router-dom';
import { useRefLinks } from '../store/prefs.js';

// A Bible reference. Shown as a link unless "Show Bible references as links" is off in Settings,
// in which case it's plain text with the same look (and no trailing arrow).
//   to   — an in-app chapter link       href — an outside link (opens in a new tab)
export default function Ref({ to, href, className = '', style, onClick, arrow = false, children }) {
  const on = useRefLinks();
  if (!on) return <span className={('ref-plain ' + className).trim()} style={style}>{children}</span>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={className || undefined} style={style}>{children}{arrow && ' ›'}</a>;
  return <Link to={to} className={className || undefined} style={style} onClick={onClick}>{children}{arrow && ' ›'}</Link>;
}
