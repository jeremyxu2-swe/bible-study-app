// Works out the route lines for the Paul's Journeys map and writes src/data/journeysRoutes.js.
// Run from the app folder after changing a journey's `way` in src/data/journeys.js:
//   node scripts/gen-journeys-routes.mjs
// Road legs ([lon, lat]) are straight lines between towns. Sea legs ([lon, lat, 's']) are the shortest
// course through open water on the real coastline (journeysLand.js): the map is turned into a grid of
// half-unit cells (about 2 km), land is filled in, and an A* search finds the way, with a small extra
// cost for hugging the shore so courses keep a little off the coast. The path is then straightened
// (each point jumps to the farthest later point it can see over open water) and written as an SVG path.
import fs from 'fs';
import { LAND_D } from '../src/data/journeysLand.js';
import { JOURNEYS, project, MAP_W, MAP_H } from '../src/data/journeys.js';

const R = 0.5;                                   // cell size in map units
const W = Math.ceil(MAP_W / R), H = Math.ceil(MAP_H / R);
const land = new Uint8Array(W * H);

// Fill land row by row (even–odd rule over every coastline ring).
const rings = LAND_D.split('Z').filter(Boolean).map((r) => r.slice(1).split('L').map((p) => p.split(',').map(Number)));
for (let j = 0; j < H; j++) {
  const y = (j + 0.5) * R, xs = [];
  for (const r of rings) {
    for (let i = 0, k = r.length - 1; i < r.length; k = i++) {
      const [x1, y1] = r[i], [x2, y2] = r[k];
      if ((y1 > y) !== (y2 > y)) xs.push(x1 + (y - y1) * (x2 - x1) / (y2 - y1));
    }
  }
  xs.sort((a, b) => a - b);
  for (let n = 0; n + 1 < xs.length; n += 2) {
    const a = Math.max(0, Math.ceil(xs[n] / R - 0.5)), b = Math.min(W - 1, Math.floor(xs[n + 1] / R - 0.5));
    for (let i = a; i <= b; i++) land[j * W + i] = 1;
  }
}

// Distance (in cells, up to 6) from the nearest land, for the shore penalty.
const dist = new Uint8Array(W * H).fill(255);
let q = [];
for (let c = 0; c < W * H; c++) if (land[c]) { dist[c] = 0; q.push(c); }
for (let d = 1; d <= 6; d++) {
  const nq = [];
  for (const c of q) {
    const x = c % W, y = (c - x) / W;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
      const n = ny * W + nx;
      if (dist[n] === 255) { dist[n] = d; nq.push(n); }
    }
  }
  q = nq;
}
const penalty = (c) => (dist[c] <= 1 ? 3 : dist[c] === 2 ? 1 : dist[c] === 3 ? 0.4 : 0);

const cellOf = ({ x, y }) => Math.min(H - 1, Math.max(0, Math.floor(y / R))) * W + Math.min(W - 1, Math.max(0, Math.floor(x / R)));
const ptOf = (c) => ({ x: ((c % W) + 0.5) * R, y: (Math.floor(c / W) + 0.5) * R });

// Nearest open-water cell to a point (ports and island towns sit on land).
function snap(p) {
  const start = cellOf(p);
  if (!land[start] && dist[start] >= 2) return start;
  const seen = new Set([start]);
  let ring = [start];
  while (ring.length) {
    const next = [];
    for (const c of ring) {
      const x = c % W, y = (c - x) / W;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
        const n = ny * W + nx;
        if (seen.has(n)) continue;
        if (!land[n] && dist[n] >= 2) return n;
        seen.add(n); next.push(n);
      }
    }
    ring = next;
  }
  throw new Error('no sea near ' + JSON.stringify(p));
}

// A* over sea cells.
function seaPath(a, b) {
  const g = new Float64Array(W * H).fill(Infinity), from = new Int32Array(W * H).fill(-1);
  const bx = b % W, by = (b - bx) / W;
  const h = (c) => { const x = c % W, y = (c - x) / W; const dx = Math.abs(x - bx), dy = Math.abs(y - by); return Math.max(dx, dy) + 0.4142 * Math.min(dx, dy); };
  const heap = [];
  const push = (c, f) => { heap.push([f, c]); let i = heap.length - 1; while (i) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { const l = 2 * i + 1, r = l + 1; let m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
  g[a] = 0; push(a, h(a));
  while (heap.length) {
    const [, c] = pop();
    if (c === b) break;
    const x = c % W, y = (c - x) / W;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
      const n = ny * W + nx;
      if (land[n]) continue;
      if (dx && dy && (land[y * W + nx] || land[ny * W + x])) continue; // no cutting corners of land
      const step = (dx && dy ? Math.SQRT2 : 1) * (1 + penalty(n));
      if (g[c] + step < g[n]) { g[n] = g[c] + step; from[n] = c; push(n, g[n] + h(n)); }
    }
  }
  if (from[b] === -1 && a !== b) throw new Error('no sea route');
  const path = [b];
  while (path[path.length - 1] !== a) path.push(from[path[path.length - 1]]);
  return path.reverse().map(ptOf);
}

// Can a straight line from p to q stay over open water (one cell off the coast)?
function clear(p, q) {
  const len = Math.hypot(q.x - p.x, q.y - p.y), n = Math.ceil(len / (R / 2));
  for (let i = 1; i < n; i++) {
    const c = cellOf({ x: p.x + (q.x - p.x) * i / n, y: p.y + (q.y - p.y) * i / n });
    if (land[c] || dist[c] < 2) return false;
  }
  return true;
}
function straighten(pts) {
  const out = [pts[0]];
  let i = 0;
  while (i < pts.length - 1) {
    let k = pts.length - 1;
    while (k > i + 1 && !clear(pts[i], pts[k])) k--;
    out.push(pts[k]); i = k;
  }
  return out;
}

const f = (p) => p.x.toFixed(1) + ',' + p.y.toFixed(1);
const ROUTES = {};
for (const j of JOURNEYS) {
  const pts = [project(j.way[0][0], j.way[0][1])];
  for (let i = 1; i < j.way.length; i++) {
    const [lon, lat, mode] = j.way[i];
    const to = project(lon, lat);
    if (mode === 's') {
      const from = pts[pts.length - 1];
      const a = snap(from), b = snap(to);
      const sea = straighten(seaPath(a, b));
      pts.push(...sea);
    }
    pts.push(to);
  }
  // drop repeated points
  const clean = pts.filter((p, i) => !i || Math.hypot(p.x - pts[i - 1].x, p.y - pts[i - 1].y) > 0.05);
  ROUTES[j.id] = 'M' + clean.map(f).join(' L');
  console.log(j.id, clean.length, 'points');
}
fs.writeFileSync(new URL('../src/data/journeysRoutes.js', import.meta.url),
  '// Generated by scripts/gen-journeys-routes.mjs from the `way` lists in journeys.js and the coastline in\n' +
  '// journeysLand.js. Do not edit by hand; rerun the script instead.\nexport const ROUTES = ' + JSON.stringify(ROUTES, null, 2) + ';\n');
