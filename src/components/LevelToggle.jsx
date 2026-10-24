import { LEVELS, setLevel, useLevel } from '../store/prefs.js';
import Ref from './Ref.jsx';

// Simple | Moderate | Detailed switch. One setting for the whole app.
export default function LevelToggle({ small = false }) {
  const level = useLevel();
  return (
    <div className={'seg' + (small ? ' sm' : '')} role="radiogroup" aria-label="Reading level">
      {LEVELS.map((l) => (
        <button key={l.id} type="button" role="radio" aria-checked={level === l.id}
          className={level === l.id ? 'on' : ''} onClick={() => setLevel(l.id)}>
          {l.label}
        </button>
      ))}
    </div>
  );
}

const esvUrl = (ref) => `https://www.esv.org/${encodeURIComponent(ref).replace(/%20/g, '+')}/`;

// A key verse. With text: quoted. Without text: a reference that opens the passage on esv.org.
// `book` builds the full reference ("Genesis 1:27"); `short` keeps the label as just "1:27".
export function KeyVerse({ verse, book, short = false }) {
  if (!verse) return null;
  const full = book && !/[a-z] \d/i.test(verse.ref) ? `${book} ${verse.ref}` : verse.ref;
  const label = short ? verse.ref : full;
  if (!verse.text) {
    return (
      <div className="kv kv-ref-only">
        Key verse: <Ref href={esvUrl(full)}>{label}</Ref> <span className="kv-ref">(ESV)</span>
      </div>
    );
  }
  return (
    <blockquote className="kv">
      “{verse.text}” <span className="kv-ref">— {label} (ESV)</span>
    </blockquote>
  );
}
