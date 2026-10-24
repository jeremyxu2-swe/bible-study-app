import { useEffect, useState } from 'react';
import { useSync, useSyncProblem, signIn, signUp, signOut, syncNow } from '../store/sync.js';

export function ago(iso) {
  if (!iso) return '';
  const s = Math.round((Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 10) return 'just now';
  if (s < 60) return `${s} sec ago`;
  if (s < 3600) return `${Math.round(s / 60)} min ago`;
  return new Date(iso).toLocaleString();
}

// Re-render every 30 s so "last synced 2 min ago" stays true.
function useTick(ms = 30000) {
  const [, set] = useState(0);
  useEffect(() => { const t = setInterval(() => set((n) => n + 1), ms); return () => clearInterval(t); }, [ms]);
}

// Settings › Account: sign in / out and sync status, for keeping notes in step across devices.
export default function AccountRows() {
  const st = useSync();
  const problem = useSyncProblem();
  useTick();

  if (!st.configured) {
    return (
      <div className="srow">
        <span className="set-av off" aria-hidden="true">?</span>
        <div className="l"><b>Sync is off</b><small>Notes are saved on this device only. Add your Supabase details to the <code>.env</code> file and rebuild to sync between devices (see README).</small></div>
      </div>
    );
  }

  if (!st.user) return <div className="srow block"><SignInForm /></div>;

  const initial = (st.user.email || '?')[0].toUpperCase();
  const changes = problem?.pending ? ` ${problem.pending} change${problem.pending === 1 ? '' : 's'} saved on this device will upload when it's fixed.` : '';
  const syncLine = st.status === 'syncing' ? 'Syncing now…'
    : st.lastSync ? `Notes and folders sync across your devices · last synced ${ago(st.lastSync)}`
    : 'Notes and folders sync across your devices';
  return (
    <>
      <div className="srow">
        <span className="set-av" aria-hidden="true">{initial}</span>
        <div className="l"><b>Signed in</b><small className="break">{st.user.email}</small></div>
        <div className="r2"><button type="button" className="btn" onClick={signOut}>Sign out</button></div>
      </div>
      <div className="srow">
        <div className="l">
          <b><span className={'sync-dot ' + (problem ? 'err' : st.status === 'syncing' ? 'busy' : 'ok')} aria-hidden="true" /> {problem ? 'Not synced' : 'Sync'}</b>
          <small>{syncLine}</small>
          {problem?.reason === 'offline' && <div className="sync-err" role="status"><b>You're offline.</b>{changes}</div>}
          {problem?.reason === 'error' && <div className="sync-err" role="alert">{st.error}{/[.!?]$/.test(st.error || '') ? '' : '.'}{changes}</div>}
        </div>
        <div className="r2"><button type="button" className="btn" onClick={syncNow} disabled={st.status === 'syncing'}>{problem ? 'Try again' : 'Sync now'}</button></div>
      </div>
    </>
  );
}

export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('signin');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  const go = async (fn) => {
    setBusy(true); setErr('');
    try { await fn(); } catch (e) { setErr(e?.message || 'Something went wrong. Please try again.'); }
    setBusy(false);
  };
  const creating = mode === 'create';

  return (
    <div className="sync-card plain">
      <div className="sync-head"><span className="sync-dot off" />Sync across devices</div>
      <div className="seg sync-tabs" role="tablist" aria-label="Account">
        <button type="button" role="tab" aria-selected={!creating} className={!creating ? 'on' : ''} onClick={() => { setMode('signin'); setErr(''); }}>Sign in</button>
        <button type="button" role="tab" aria-selected={creating} className={creating ? 'on' : ''} onClick={() => { setMode('create'); setErr(''); }}>Create account</button>
      </div>
      <form className="stack" style={{ gap: 8 }} onSubmit={(e) => {
        e.preventDefault();
        if (creating && password !== confirm) { setErr('The two passwords don\'t match.'); return; }
        go(() => (creating ? signUp(email, password) : signIn(email, password)));
      }}>
        <label className="muted" style={{ fontSize: 'calc(13px * var(--ts))' }} htmlFor="sync-email">{creating ? 'Create an account once, then sign in on each device.' : 'Sign in to keep your notes on every device.'}</label>
        <input id="sync-email" className="input" type="email" required placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        <label className="sr-only" htmlFor="sync-pw">Password</label>
        <div className="pw-wrap">
          <input id="sync-pw" className="input" type={show ? 'text' : 'password'} required minLength={6} placeholder="Password (6+ characters)" value={password}
            onChange={(e) => setPassword(e.target.value)} autoComplete={creating ? 'new-password' : 'current-password'} />
          <button type="button" className="pw-toggle" onClick={() => setShow((v) => !v)} aria-label={show ? 'Hide password' : 'Show password'}>{show ? 'Hide' : 'Show'}</button>
        </div>
        {creating && (
          <>
            <label className="sr-only" htmlFor="sync-pw2">Confirm password</label>
            <input id="sync-pw2" className="input" type={show ? 'text' : 'password'} required minLength={6} placeholder="Confirm password" value={confirm} onChange={(e) => setConfirm(e.target.value)} autoComplete="new-password" />
          </>
        )}
        <button type="submit" className="btn primary sm" disabled={busy || !email || password.length < 6}>
          {busy ? (creating ? 'Creating…' : 'Signing in…') : (creating ? 'Create account' : 'Sign in')}
        </button>
      </form>
      {err && <div className="sync-err" role="alert">{err}</div>}
    </div>
  );
}
