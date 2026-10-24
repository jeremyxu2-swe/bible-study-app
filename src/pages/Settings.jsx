import { useRef, useState } from 'react';
import AccountRows from '../components/SyncPanel.jsx';
import LevelToggle from '../components/LevelToggle.jsx';
import { THEMES, setTheme, useThemePref, TEXT_SIZES, setTextSize, useTextSize, useRefLinks, setRefLinks } from '../store/prefs.js';
import { useNotes, exportNotes, importNotes } from '../store/notes.js';

// Little picture of each look, drawn with that look's own colors.
const LOOKS = {
  dark: { side: '#1A1C22', bg: '#14161B', ink: '#ECE8DF', gold: '#D9B26A' },
  light: { side: '#EFE8DA', bg: '#F6F1E7', ink: '#221F1A', gold: '#B98A2E' },
};
function Preview({ look }) {
  const c = LOOKS[look];
  return (
    <span className="th-pv" style={{ background: c.bg }}>
      <span className="a" style={{ background: c.side }}>
        <i style={{ background: c.gold, width: '70%' }} /><i style={{ background: c.ink, opacity: 0.35 }} /><i style={{ background: c.ink, opacity: 0.35, width: '80%' }} />
      </span>
      <span className="b">
        <i style={{ background: c.ink, width: '60%', height: 7 }} /><i style={{ background: c.ink, opacity: 0.3 }} /><i style={{ background: c.ink, opacity: 0.3, width: '85%' }} /><i style={{ background: c.gold, width: '30%' }} />
      </span>
    </span>
  );
}
function AutoPreview() {
  return (
    <span className="th-pv auto">
      {['light', 'dark'].map((k) => (
        <span key={k} style={{ background: LOOKS[k].bg }}>
          <i style={{ background: LOOKS[k].ink, width: '70%', height: 6 }} /><i style={{ background: LOOKS[k].ink, opacity: 0.3 }} /><i style={{ background: LOOKS[k].gold, width: '40%' }} />
        </span>
      ))}
    </span>
  );
}

function Switch({ on, onChange, label }) {
  return (
    <button type="button" role="switch" aria-checked={on} aria-label={label} className={'switch' + (on ? ' on' : '')} onClick={() => onChange(!on)} />
  );
}

export default function Settings() {
  const theme = useThemePref();
  const size = useTextSize();
  const refLinks = useRefLinks();
  const notes = useNotes();
  const count = Object.keys(notes).length;
  const fileRef = useRef(null);
  const [msg, setMsg] = useState('');
  const idx = Math.max(0, TEXT_SIZES.indexOf(size));

  const onImport = async (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    try { const n = await importNotes(f); setMsg(`Imported ${n} note${n === 1 ? '' : 's'}.`); }
    catch { setMsg('That file could not be read as a notes backup.'); }
    e.target.value = '';
  };

  return (
    <main className="wrap page settings-page">
      <div className="crumbs2 only-desktop">Settings</div>
      <h1 className="h1-sm">Settings</h1>
      <p className="tagline set-tag">Your account, how the app looks, and how you read.</p>

      <div className="set">
        <section className="sgrp" aria-labelledby="set-acc">
          <h2 id="set-acc">Account</h2>
          <AccountRows />
        </section>

        <section className="sgrp" aria-labelledby="set-look">
          <h2 id="set-look">Appearance</h2>
          <div className="themes" role="radiogroup" aria-label="Theme">
            {THEMES.map((t) => (
              <button key={t.id} type="button" role="radio" aria-checked={theme === t.id} className={'th' + (theme === t.id ? ' on' : '')} onClick={() => setTheme(t.id)}>
                {t.id === 'auto' ? <AutoPreview /> : <Preview look={t.id} />}
                <span className="th-nm"><span className="rd" aria-hidden="true" />{t.label}</span>
              </button>
            ))}
          </div>
          <p className="muted set-note">{theme === 'auto' ? 'Follows your phone or computer’s light/dark setting.' : 'Saved on this device. The sun/moon button switches in one tap.'}</p>
          <div className="srow">
            <div className="l"><b id="ts-l">Text size</b><small>Makes summaries and notes easier to read · {Math.round(size * 100)}%</small></div>
            <div className="r2 size">
              <span aria-hidden="true" style={{ fontSize: 12 }}>A</span>
              <input type="range" min="0" max={TEXT_SIZES.length - 1} step="1" value={idx} aria-labelledby="ts-l"
                aria-valuetext={`${Math.round(size * 100)} percent`} onChange={(e) => setTextSize(TEXT_SIZES[+e.target.value])} />
              <span aria-hidden="true" style={{ fontSize: 19 }}>A</span>
            </div>
          </div>
        </section>

        <section className="sgrp" aria-labelledby="set-read">
          <h2 id="set-read">Reading</h2>
          <div className="srow wrap-row">
            <div className="l"><b>Default reading level</b><small>Used for book summaries and background pages. You can change it on any page.</small></div>
            <div className="r2"><LevelToggle small /></div>
          </div>
          <div className="srow">
            <div className="l"><b>Show Bible references as links</b><small>{refLinks ? 'References open the chapter (or esv.org for key verses).' : 'References show as plain text.'}</small></div>
            <div className="r2"><Switch on={refLinks} onChange={setRefLinks} label="Show Bible references as links" /></div>
          </div>
        </section>

        <section className="sgrp" aria-labelledby="set-bak">
          <h2 id="set-bak">Notes backup</h2>
          <div className="srow wrap-row">
            <div className="l"><b>Export or import</b><small>A file copy of all your notes and folders ({count} note{count === 1 ? '' : 's'} on this device).</small></div>
            <div className="r2">
              <button type="button" className="btn" onClick={exportNotes} disabled={!count}>Export</button>
              <button type="button" className="btn" onClick={() => fileRef.current?.click()}>Import</button>
            </div>
          </div>
          <input ref={fileRef} type="file" accept="application/json,.json" onChange={onImport} hidden />
          {msg && <div className="set-msg" role="status">{msg}</div>}
        </section>
      </div>
    </main>
  );
}
