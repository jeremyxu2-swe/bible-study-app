// Regenerates src/data/journeysLand.js. Run from a folder where `npm install world-atlas@2 topojson-client@3`
// has been done (they are not app dependencies): node gen-journeys-land.mjs 10m 0.35 1.5 → land.txt
import fs from 'fs';
import { feature } from 'topojson-client';
const res = process.argv[2] || '10m', tol = +(process.argv[3] || 0.4), minA = +(process.argv[4] || 3);
const topo = JSON.parse(fs.readFileSync(`node_modules/world-atlas/land-${res}.json`));
const land = feature(topo, topo.objects.land);
const P = ([lon, lat]) => [(lon - 10) * 25, (44 - lat) * 30];
// clip in projected space to a box slightly larger than the map
const B = { x0: -6, y0: -6, x1: 756, y1: 426 };
function clip(pts) {
  const edges = [
    [(p) => p[0] >= B.x0, (a, b) => { const t = (B.x0 - a[0]) / (b[0] - a[0]); return [B.x0, a[1] + t * (b[1] - a[1])]; }],
    [(p) => p[0] <= B.x1, (a, b) => { const t = (B.x1 - a[0]) / (b[0] - a[0]); return [B.x1, a[1] + t * (b[1] - a[1])]; }],
    [(p) => p[1] >= B.y0, (a, b) => { const t = (B.y0 - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), B.y0]; }],
    [(p) => p[1] <= B.y1, (a, b) => { const t = (B.y1 - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), B.y1]; }],
  ];
  let out = pts;
  for (const [inside, cut] of edges) {
    const inp = out; out = [];
    for (let i = 0; i < inp.length; i++) {
      const a = inp[(i + inp.length - 1) % inp.length], b = inp[i];
      if (inside(b)) { if (!inside(a)) out.push(cut(a, b)); out.push(b); }
      else if (inside(a)) out.push(cut(a, b));
    }
    if (!out.length) break;
  }
  return out;
}
function dp(pts, eps) {
  if (pts.length < 3) return pts;
  const [a, b] = [pts[0], pts[pts.length - 1]];
  let m = -1, idx = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const p = pts[i], dx = b[0] - a[0], dy = b[1] - a[1];
    const d = (dx || dy) ? Math.abs(dy * p[0] - dx * p[1] + b[0] * a[1] - b[1] * a[0]) / Math.hypot(dx, dy) : Math.hypot(p[0] - a[0], p[1] - a[1]);
    if (d > m) { m = d; idx = i; }
  }
  if (m <= eps) return [a, b];
  return dp(pts.slice(0, idx + 1), eps).slice(0, -1).concat(dp(pts.slice(idx), eps));
}
const area = (r) => Math.abs(r.reduce((s, p, i) => { const q = r[(i + 1) % r.length]; return s + p[0] * q[1] - q[0] * p[1]; }, 0) / 2);
const paths = [];
let rings = 0;
for (const f of land.features) {
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const poly of polys) for (const ring of poly) {
    // quick reject by bbox
    const pr = ring.map(P);
    const xs = pr.map((p) => p[0]), ys = pr.map((p) => p[1]);
    if (Math.max(...xs) < B.x0 || Math.min(...xs) > B.x1 || Math.max(...ys) < B.y0 || Math.min(...ys) > B.y1) continue;
    let c = clip(pr.slice(0, -1));
    if (c.length < 3 || area(c) < minA) continue;
    // simplify as a closed ring: split at farthest point
    c = dp(c.concat([c[0]]), tol).slice(0, -1);
    if (c.length < 3) continue;
    rings++;
    paths.push('M' + c.map((p) => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join('L') + 'Z');
  }
}
const d = paths.join('');
fs.writeFileSync('land.txt', d);
console.log(res, 'tol', tol, 'rings', rings, 'bytes', d.length);
