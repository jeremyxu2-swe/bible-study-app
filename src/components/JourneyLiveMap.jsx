import { useEffect, useRef, useState } from 'react';
import * as L from '../vendor/leaflet/leaflet.js';
import '../vendor/leaflet/leaflet.css';
import { PLACES, MAJOR, LETTERS, JOURNEYS, letterFor } from '../data/journeys.js';
import { ROUTES } from '../data/journeysRoutes.js';

// Paul's Journeys › the zoomable map (24 Oct). Leaflet (vendored in src/vendor/leaflet, BSD-2) over a choice of
// base maps; loaded lazily by Journeys.jsx, which falls back to the drawn map (JourneyMap) when offline or
// when the tiles can't be reached.
//   Base maps: Roman world (Digital Atlas of the Roman Empire; Roman roads, provinces, ancient names; to zoom 11),
//   Satellite (Esri World Imagery) and Terrain (Esri World Shaded Relief). The choice is saved per device.
//   On top: every route (the chosen one bold, the rest faint on the computer), numbered stops with city names
//   and letter tags. On the phone, names and tags appear once you zoom in a step; on the all-journeys view
//   the letter tags wait for a zoom too (they crowd the Aegean otherwise). Tapping a stop opens a card
//   (rendered by Journeys.jsx through onStop). Scroll-wheel zoom is off until you click the map, so the page
//   still scrolls past it.
// Routes come from journeysRoutes.js (drawn in the 750×420 map box) and are turned back into lon/lat here.

export const BASES = {
  roman: {
    label: 'Roman world', url: 'https://dh.gu.se/tiles/imperium/{z}/{x}/{y}.png', native: 11, max: 13, light: true,
    attr: 'Map: <a href="https://dh.gu.se/dare/" target="_blank" rel="noopener">Digital Atlas of the Roman Empire</a>, © Johan Åhlfeldt, Centre for Digital Humanities, University of Gothenburg (CC BY)',
  },
  satellite: {
    label: 'Satellite', url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', native: 18, max: 18, light: false,
    attr: 'Imagery © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP and the GIS User Community',
  },
  terrain: {
    label: 'Terrain', url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}', native: 13, max: 14, light: true,
    attr: 'Terrain © Esri — Source: Esri',
  },
};
export const BASE_KEY = 'lamp-path-journey-map';

// Route colours: darker on the light maps, brighter on satellite; each line has a casing for contrast.
const COLORS = {
  light: { j1: '#9A6A0E', j2: '#2F63B5', j3: '#257349', j4: '#B03A33', casing: 'rgba(255,255,255,.85)', ink: '#FFFFFF' },
  dark: { j1: '#F0C76E', j2: '#8DB8F0', j3: '#97DDB0', j4: '#F59A84', casing: 'rgba(10,12,16,.75)', ink: '#14161B' },
};
const DASH = { j3: '8 7', j4: '1 8' };

const toLatLng = (x, y) => [44 - y / 30, x / 25 + 10];
const ROUTE_LL = Object.fromEntries(Object.entries(ROUTES).map(([id, d]) => [id, (d.match(/-?[\d.]+,-?[\d.]+/g) || []).map((s) => { const [x, y] = s.split(',').map(Number); return toLatLng(x, y); })]));
const placeLL = (id) => [PLACES[id].lat, PLACES[id].lon];
const stopLL = (s) => (s.at ? [s.at[1], s.at[0]] : placeLL(s.place));
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// The pins for the current view (same rules as the drawn map): a journey's own stops, numbered, with the
// letter its church received (Galatians once); or, for all journeys, the major places plus letter cities.
function pinsFor(sel) {
  const pins = [];
  const seen = new Set();
  if (sel) {
    let galatians = false;
    sel.stops.forEach((s, i) => {
      if (!s.place || seen.has(s.place)) return;
      seen.add(s.place);
      const l = s.place === 'macedonia' ? null : letterFor(s.place);
      const showL = l && !(l.church === 'galatia' && galatians);
      if (l?.church === 'galatia') galatians = true;
      pins.push({ key: s.place, ll: stopLL(s), n: i + 1, i, side: s.side || PLACES[s.place].side, name: s.label || (s.at ? s.name : PLACES[s.place].name), badge: showL ? l : null });
    });
  } else {
    MAJOR.forEach((id) => { seen.add(id); pins.push({ key: id, ll: placeLL(id), side: PLACES[id].allSide || PLACES[id].side, name: PLACES[id].name, badge: LETTERS[id] || null }); });
    Object.entries(LETTERS).forEach(([id, l]) => { if (!seen.has(id) && PLACES[id]) pins.push({ key: id, ll: placeLL(id), side: PLACES[id].allSide || PLACES[id].side, name: PLACES[id].name, badge: l, faint: true }); });
  }
  return pins;
}

export default function JourneyLiveMap({ sel, phone, lettersOn, base, onStop, onFail }) {
  const el = useRef(null);
  const map = useRef(null);
  const tiles = useRef(null);
  const over = useRef(null);
  const [zoomed, setZoomed] = useState(false); // phone: names show once zoomed in past the fitted view
  const fitZoom = useRef(0);

  // Create the map once.
  useEffect(() => {
    const m = L.map(el.current, {
      zoomSnap: 0.25, zoomDelta: 0.5, wheelPxPerZoomLevel: 90, minZoom: 3.5, maxZoom: 18,
      scrollWheelZoom: false, worldCopyJump: false, maxBounds: [[20, -15], [56, 55]], maxBoundsViscosity: 0.8,
      attributionControl: true, zoomControl: true,
    });
    m.attributionControl.setPrefix('<a href="https://leafletjs.com" target="_blank" rel="noopener">Leaflet</a>');
    // Scroll-wheel zoom only after a click on the map, so the page keeps scrolling past it.
    m.on('click', () => m.scrollWheelZoom.enable());
    m.getContainer().addEventListener('mouseleave', () => m.scrollWheelZoom.disable());
    m.on('zoomend', () => setZoomed(m.getZoom() >= fitZoom.current + 0.75));
    over.current = L.layerGroup().addTo(m);
    m.on('zoomend moveend', () => declutter(m));
    map.current = m;
    const ro = new ResizeObserver(() => m.invalidateSize());
    ro.observe(el.current);
    return () => { ro.disconnect(); m.remove(); map.current = null; };
  }, []);

  // Base map. If nothing loads and errors pile up (server down, blocked), hand back to the drawn map.
  useEffect(() => {
    const m = map.current;
    const b = BASES[base] || BASES.roman;
    if (tiles.current) m.removeLayer(tiles.current);
    let ok = 0, bad = 0;
    const t = L.tileLayer(b.url, { maxNativeZoom: b.native, maxZoom: b.max, attribution: b.attr, crossOrigin: false, detectRetina: false });
    t.on('tileload', () => { ok += 1; });
    t.on('tileerror', () => { bad += 1; if (!ok && bad >= 4) onFail?.(); });
    t.addTo(m);
    m.setMaxZoom(b.max);
    tiles.current = t;
  }, [base, onFail]);

  // Routes and pins.
  useEffect(() => {
    const m = map.current;
    const g = over.current;
    g.clearLayers();
    const C = (BASES[base] || BASES.roman).light ? COLORS.light : COLORS.dark;
    JOURNEYS.forEach((j) => {
      const on = !sel || sel.id === j.id;
      if (phone && sel && !on) return;
      const pts = ROUTE_LL[j.id];
      const w = sel && on ? 4 : 3;
      L.polyline(pts, { color: C.casing, weight: w + 3, opacity: on ? 1 : 0.35, interactive: false, lineCap: 'round', lineJoin: 'round' }).addTo(g);
      L.polyline(pts, { color: C[j.id], weight: w, opacity: on ? 1 : 0.35, dashArray: DASH[j.id], interactive: false, lineCap: 'round', lineJoin: 'round' }).addTo(g);
    });
    pinsFor(sel).forEach((p) => {
      const col = sel ? C[sel.id] : null;
      const badge = lettersOn && p.badge ? `<a class="lm-badge" href="#/church/${p.badge.church}">${esc(p.badge.label)}</a>` : '';
      const html = `<span class="lm-pin s-${p.side || 'r'}${p.faint ? ' faint' : ''}">${p.n ? `<b class="lm-num" style="background:${col};color:${C.ink}">${p.n}</b>` : '<i class="lm-dot"></i>'}<span class="lm-lab"><span class="lm-name">${esc(p.name)}</span>${badge}</span></span>`;
      const size = p.n ? 26 : 12;
      const mk = L.marker(p.ll, { icon: L.divIcon({ className: 'lm-icon', html, iconSize: [size, size], iconAnchor: [size / 2, size / 2] }), keyboard: !!p.n, title: p.name, riseOnHover: true }).addTo(g);
      if (p.n) mk.on('click', () => onStop?.(p.i));
      mk._lmPrio = (p.badge ? 0 : 1000) + (p.n || 500);
    });
    // Fit the chosen journey (or everything).
    const pts = sel ? ROUTE_LL[sel.id] : Object.values(ROUTE_LL).flat();
    const pad = phone ? [24, 24] : [40, 40];
    m.invalidateSize();
    m.fitBounds(L.latLngBounds(pts), { padding: pad, animate: false });
    fitZoom.current = m.getZoom();
    setZoomed(false);
    requestAnimationFrame(() => declutter(m));
  }, [sel, phone, lettersOn, base, onStop]);

  // Where names or letter tags would overlap each other or another stop's number, keep the more important
  // one (letter cities first, then stop order) and hide the rest until you zoom in.
  function declutter(m) {
    const items = [];
    over.current?.eachLayer((l) => { if (l.getElement && l._lmPrio != null) items.push(l); });
    items.sort((a, b) => a._lmPrio - b._lmPrio);
    const kept = []; // labels kept, and the dots of the stops already placed (more important ones)
    const hit = (a, b) => a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;
    items.forEach((l) => {
      const lab = l.getElement()?.querySelector('.lm-lab');
      if (!lab) return;
      lab.classList.remove('lm-hide');
      if (getComputedStyle(lab).display === 'none') return;
      const r = lab.getBoundingClientRect();
      const dot = l.getElement().querySelector('.lm-num, .lm-dot')?.getBoundingClientRect();
      if (kept.some((k) => hit(r, k))) lab.classList.add('lm-hide'); else kept.push(r);
      if (dot) kept.push(dot);
    });
    void m;
  }
  useEffect(() => { if (map.current) requestAnimationFrame(() => declutter(map.current)); }, [zoomed]);

  const b = BASES[base] || BASES.roman;
  // Leaflet owns the inner element's classes, so ours go on a wrapper.
  return (
    <div
      className={'lm' + (b.light ? ' lm-light' : ' lm-dark') + (phone ? ' lm-phone' : '') + (zoomed || !phone ? ' lm-names' : '') + (zoomed || (sel && !phone) ? ' lm-badges' : '')}
      role="region"
      aria-label={sel ? `Zoomable map of Paul's ${sel.name.toLowerCase()}` : 'Zoomable map of Paul’s four journeys'}
    >
      <div ref={el} className="lm-map" />
    </div>
  );
}
