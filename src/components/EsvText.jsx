import { useEffect, useState } from 'react';
import { getChapter, esvMessage, cleanEsvHtml } from '../store/esv.js';

const esvLink = (book, n) => `https://www.esv.org/${encodeURIComponent(`${book.name} ${n}`).replace(/%20/g, '+')}/`;

// The full ESV text of one chapter, loaded when it first shows.
export default function EsvText({ book, n, compact = false }) {
  const [st, setSt] = useState({ status: 'loading' });
  const [tries, setTries] = useState(0);

  useEffect(() => {
    let live = true;
    setSt({ status: 'loading' });
    getChapter(book, n)
      .then((d) => { if (live) setSt({ status: 'ok', html: cleanEsvHtml(d.html), canonical: d.canonical, fromCache: d.fromCache }); })
      .catch((e) => { if (live) setSt({ status: 'error', code: e.code || 'failed' }); });
    return () => { live = false; };
  }, [book.id, n, tries]);

  return (
    <section className={'esv' + (compact ? ' esv-compact' : '')} aria-label={`${book.name} ${n}, English Standard Version`} aria-busy={st.status === 'loading'}>
      <div className="esv-head">
        <span className="esv-title">{book.name} {n}</span>
        <a className="esv-badge" href={esvLink(book, n)} target="_blank" rel="noopener">ESV · esv.org ↗</a>
      </div>

      {st.status === 'loading' && (
        <div className="esv-loading" role="status">
          <span className="esv-sk" /><span className="esv-sk" /><span className="esv-sk short" />
          <span className="sr-only">Loading {book.name} {n}…</span>
        </div>
      )}

      {st.status === 'error' && (
        <div className="esv-error" role="alert">
          <p>{esvMessage(st.code)}</p>
          {st.code !== 'not_configured' && <button type="button" className="btn" onClick={() => setTries((t) => t + 1)}>Try again</button>}
          <a href={esvLink(book, n)} target="_blank" rel="noopener">Read {book.name} {n} on esv.org ↗</a>
        </div>
      )}

      {st.status === 'ok' && (
        <>
          <div className="esv-text serif" dangerouslySetInnerHTML={{ __html: st.html }} />
          <p className="esv-copy">
            Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway,
            a publishing ministry of Good News Publishers. Used by permission. All rights reserved.
          </p>
        </>
      )}
    </section>
  );
}
