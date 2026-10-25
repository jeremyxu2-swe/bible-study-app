// Supabase Edge Function: esv-passage
// Forwards a chapter request to the ESV API so the API key never ships in the app.
//
// Setup (once):
//   1. Get a free key at https://api.esv.org/account/create-application/
//   2. supabase secrets set ESV_API_KEY=<your key>
//      (optional) supabase secrets set ALLOWED_ORIGINS=https://jeremyxu2-swe.github.io,http://localhost:5173
//   3. supabase functions deploy esv-passage --no-verify-jwt
//
// Request:  GET  /functions/v1/esv-passage?q=Genesis+1
//           POST /functions/v1/esv-passage   { "q": "Genesis 1" }
// Response: { canonical, html, verses } or { error }

const ESV_URL = 'https://api.esv.org/v3/passage/html/';

// Only whole chapters like "Genesis 1", "1 Samuel 17", "Song of Solomon 2".
const REF_RE = /^(?:[1-3] )?[A-Za-z]+(?: [A-Za-z]+){0,2} \d{1,3}$/;

const allowed = (Deno.env.get('ALLOWED_ORIGINS') || '')
  .split(',').map((s) => s.trim()).filter(Boolean);

function cors(origin: string | null): Record<string, string> {
  const ok = !allowed.length || (origin && allowed.includes(origin));
  return {
    'Access-Control-Allow-Origin': ok ? (origin || '*') : allowed[0],
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Vary': 'Origin',
  };
}

function json(body: unknown, status: number, headers: Record<string, string>, extra: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, ...extra, 'Content-Type': 'application/json' },
  });
}

Deno.serve(async (req) => {
  const origin = req.headers.get('Origin');
  const headers = cors(origin);
  if (req.method === 'OPTIONS') return new Response('ok', { headers });

  if (allowed.length && origin && !allowed.includes(origin)) {
    return json({ error: 'origin_not_allowed' }, 403, headers);
  }

  const key = Deno.env.get('ESV_API_KEY');
  if (!key) return json({ error: 'not_configured' }, 500, headers);

  let q = new URL(req.url).searchParams.get('q') || '';
  if (!q && req.method === 'POST') {
    try { q = String((await req.json())?.q || ''); } catch { /* ignore */ }
  }
  q = q.trim().replace(/\s+/g, ' ');
  if (!REF_RE.test(q)) return json({ error: 'bad_reference' }, 400, headers);

  const params = new URLSearchParams({
    q,
    'include-passage-references': 'false',
    'include-verse-numbers': 'true',
    'include-first-verse-numbers': 'true',
    'include-headings': 'true',
    'include-subheadings': 'true',
    'include-footnotes': 'false',
    'include-audio-link': 'false',
    'include-short-copyright': 'true',
    'include-chapter-numbers': 'true',
    'include-css-link': 'false',
    'inline-styles': 'false',
    'wrapping-div': 'false',
  });

  let res: Response;
  try {
    res = await fetch(`${ESV_URL}?${params}`, { headers: { Authorization: `Token ${key}` } });
  } catch {
    return json({ error: 'upstream_unreachable' }, 502, headers);
  }
  if (res.status === 429) {
    return json({ error: 'rate_limited' }, 429, headers, { 'Retry-After': res.headers.get('Retry-After') || '60' });
  }
  if (!res.ok) return json({ error: 'upstream_error', status: res.status }, 502, headers);

  const data = await res.json();
  const html = (data.passages || [])[0] || '';
  if (!html) return json({ error: 'not_found' }, 404, headers);

  // passage_meta gives verse codes like 1001001 … 1001031 (book, chapter, verse).
  const meta = (data.passage_meta || [])[0] || {};
  const [a, b] = meta.chapter_start && meta.chapter_end ? [meta.chapter_start[0], meta.chapter_end[1]] : [0, 0];
  const verses = a && b ? (b % 1000) - (a % 1000) + 1 : null;

  return json({ canonical: data.canonical || q, html, verses }, 200, headers, {
    // Let browsers reuse a chapter for a day without asking again.
    'Cache-Control': 'public, max-age=86400',
  });
});
