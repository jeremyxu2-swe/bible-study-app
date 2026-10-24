// Bible Summaries › Paul's Journeys (Acts 13–28). Built from the approved "Paul's Journeys Map"
// mockups: A (computer atlas) and C (phone).
//
// The map is the eastern Mediterranean in its own 750 × 420 box: x = (longitude − 10) × 25,
// y = (44 − latitude) × 30 (a plain longitude/latitude grid, stretched so that around latitude 37°
// distances east–west and north–south come out about equal).
//   Coastlines: real data (Natural Earth 1:10m, generated into journeysLand.js).
//   Cities: their real coordinates (lon, lat). A few towns that sit very close together get a small
//     `nudge` (in map units) so their numbered markers don't cover each other; the true point is kept.
//   Routes: the towns and ports Acts names, in order, joined by the Roman roads between them (straight
//     lines) or by sea (the shortest course through open water, worked out from the real coastline by
//     scripts/gen-journeys-routes.mjs into journeysRoutes.js; rerun it after changing a `way`). Where
//     Acts doesn't say which way Paul went, the usual road or port is used, so treat routes as approximate.
// PLACES: name, lon, lat, which side the name sits on (r/l/t/b); allSide overrides it on the
// "All journeys" view. A stop's `ch` is the Acts chapter it links to; `place` points into PLACES
// (null = no new marker, e.g. returning to Antioch). LETTERS marks the cities whose church received
// one of Paul's letters; `church` is the id of its page in data/churches.js.
import { LAND_D } from './journeysLand.js';
import { ROUTES } from './journeysRoutes.js';

export const MAP_W = 750;
export const MAP_H = 420;
export const project = (lon, lat) => ({ x: (lon - 10) * 25, y: (44 - lat) * 30 });
export const LAND = [LAND_D];
export const ISLETS = [];

// Region names drawn in the sea and on land (italic, faint), as lon/lat.
export const REGIONS = [
  ['Mediterranean Sea', 18.5, 34.2], ['Black Sea', 31.5, 42.9], ['Asia Minor', 33.6, 38.7], ['Macedonia', 21.0, 42.3],
  ['Italy', 12.6, 42.9], ['Syria', 37.0, 34.6], ['Egypt', 29.5, 30.3], ['Aegean Sea', 24.6, 39.2],
].map(([t, lon, lat]) => [t, project(lon, lat).x, project(lon, lat).y]);

const pl = (name, lon, lat, side, extra = {}) => ({ name, lon, lat, side, ...project(lon, lat), ...extra });
export const PLACES = {
  antioch: pl('Antioch', 36.16, 36.20, 'r'),
  salamis: pl('Salamis', 33.90, 35.18, 'r'),
  paphos: pl('Paphos', 32.41, 34.76, 'b'),
  perga: pl('Perga', 30.85, 36.96, 'b'),
  'pisidian-antioch': pl('Pisidian Antioch', 31.19, 38.31, 'l'),
  iconium: pl('Iconium', 32.49, 37.87, 't'),
  lystra: pl('Lystra', 32.45, 37.58, 'l'),
  derbe: pl('Derbe', 33.36, 37.35, 'r'),
  tarsus: pl('Tarsus', 34.90, 36.92, 't'),
  galatia: pl('Galatia', 32.2, 39.2, 't'),
  troas: pl('Troas', 26.16, 39.75, 'l'),
  philippi: pl('Philippi', 24.29, 41.01, 'r'),
  thessalonica: pl('Thessalonica', 22.95, 40.64, 't'),
  berea: pl('Berea', 22.20, 40.52, 'l'),
  athens: pl('Athens', 23.73, 37.98, 'r'),
  corinth: pl('Corinth', 22.88, 37.91, 'l'),
  macedonia: pl('Macedonia & Greece', 22.4, 39.6, 'l'),
  ephesus: pl('Ephesus', 27.34, 37.94, 'r', { allSide: 't' }),
  miletus: pl('Miletus', 27.28, 37.53, 'l', { nudge: [0, 5] }),
  colossae: pl('Colossae', 29.12, 37.79, 'b'),
  tyre: pl('Tyre', 35.20, 33.27, 'r'),
  sidon: pl('Sidon', 35.37, 33.56, 'r'),
  caesarea: pl('Caesarea', 34.89, 32.50, 'l'),
  jerusalem: pl('Jerusalem', 35.23, 31.78, 'r'),
  myra: pl('Myra', 29.98, 36.26, 'b'),
  'fair-havens': pl('Fair Havens', 24.78, 34.93, 'b'),
  malta: pl('Malta', 14.40, 35.95, 'b'),
  syracuse: pl('Syracuse', 15.29, 37.07, 'r'),
  puteoli: pl('Puteoli', 14.12, 40.82, 'r'),
  rome: pl('Rome', 12.48, 41.90, 'r'),
};

// Cities shown by name on the "All journeys" view.
export const MAJOR = ['rome', 'malta', 'philippi', 'thessalonica', 'athens', 'corinth', 'troas', 'ephesus', 'tarsus', 'antioch', 'caesarea', 'jerusalem'];

// Churches that received one of Paul's letters (by the place on the map).
export const LETTERS = {
  rome: { label: 'Romans', church: 'rome', books: ['romans'] },
  corinth: { label: '1 & 2 Corinthians', church: 'corinth', books: ['1corinthians', '2corinthians'] },
  galatia: { label: 'Galatians', church: 'galatia', books: ['galatians'], region: true },
  ephesus: { label: 'Ephesians', church: 'ephesus', books: ['ephesians'] },
  philippi: { label: 'Philippians', church: 'philippi', books: ['philippians'] },
  colossae: { label: 'Colossians · Philemon', church: 'colossae', books: ['colossians', 'philemon'], note: 'not visited by Paul' },
  thessalonica: { label: '1 & 2 Thessalonians', church: 'thessalonica', books: ['1thessalonians', '2thessalonians'] },
};
// The four towns of southern Galatia also count as letter cities (Galatians was written to them).
export const GALATIAN_TOWNS = ['pisidian-antioch', 'iconium', 'lystra', 'derbe'];
// Which letter (if any) a stop's place received.
export function letterFor(place) {
  if (!place) return null;
  if (LETTERS[place]) return LETTERS[place];
  if (GALATIAN_TOWNS.includes(place)) return LETTERS.galatia;
  if (place === 'macedonia') return { multi: [LETTERS.philippi, LETTERS.thessalonica, LETTERS.corinth] }; // a region: three churches
  return null;
}

// Timeline band: AD 45–61.
export const TL_FROM = 45;
export const TL_TO = 61;

export const JOURNEYS = [
  {
    id: 'j1', name: '1st Journey', short: '1st', years: 'c. AD 46–48', from: 46, to: 48,
    ref: 'Acts 13:1–14:28', ch: 13, dash: '',
    way: [ // [lon, lat] reached by road, or [lon, lat, 's'] reached by sea
      [36.16, 36.20], [35.93, 36.12], // Antioch → its port, Seleucia
      [33.90, 35.18, 's'], // sail to Salamis
      [33.63, 34.92], [32.88, 34.67], [32.41, 34.76], // across Cyprus (Kition, Kourion) to Paphos
      [30.70, 36.88, 's'], [30.85, 36.96], // sail to Attalia; Perga
      [31.19, 38.31], [32.49, 37.87], [32.45, 37.58], [33.36, 37.35], // Pisidian Antioch, Iconium, Lystra, Derbe
      [32.45, 37.58], [32.49, 37.87], [31.19, 38.31], [30.85, 36.96], [30.70, 36.88], // back the same way to Attalia
      [35.93, 36.12, 's'], [36.16, 36.20], // sail home
    ],
    with: ['Barnabas', 'John Mark (as far as Perga)'],
    letters: [['galatians', 'likely written soon after; the date is debated']],
    stops: [
      { place: 'antioch', name: 'Antioch (Syria)', ref: '13:1–3', ch: 13, text: 'The church lays hands on Barnabas and Saul and sends them out.' },
      { place: 'salamis', name: 'Salamis, Cyprus', ref: '13:5', ch: 13, text: 'They preach in the synagogues.' },
      { place: 'paphos', name: 'Paphos', ref: '13:6–12', ch: 13, text: 'Elymas is struck blind; the proconsul Sergius Paulus believes.' },
      { place: 'perga', name: 'Perga', ref: '13:13', ch: 13, text: 'John Mark leaves and returns to Jerusalem.' },
      { place: 'pisidian-antioch', name: 'Pisidian Antioch', ref: '13:14–52', ch: 13, text: 'Paul preaches in the synagogue, then turns to the Gentiles.' },
      { place: 'iconium', name: 'Iconium', ref: '14:1–6', ch: 14, text: 'Many believe; a plot to stone them drives them on.' },
      { place: 'lystra', name: 'Lystra', ref: '14:8–20', ch: 14, text: 'A lame man is healed; Paul is stoned and left for dead.' },
      { place: 'derbe', name: 'Derbe', ref: '14:20–21', ch: 14, text: 'Many disciples are made.' },
      { place: null, name: 'Back to Antioch', ref: '14:21–28', ch: 14, text: 'They retrace their steps, appoint elders and report to the church.' },
    ],
  },
  {
    id: 'j2', name: '2nd Journey', short: '2nd', years: 'c. AD 49–52', from: 49, to: 52,
    ref: 'Acts 15:36–18:22', ch: 15, dash: '',
    way: [
      [36.16, 36.20], [36.25, 36.45], [36.17, 36.85], [35.32, 37.00], [34.90, 36.92], // Antioch, the Syrian Gates, Issus, Tarsus
      [34.80, 37.35], [33.36, 37.35], [32.45, 37.58], [32.49, 37.87], [31.19, 38.31], // Cilician Gates; Derbe, Lystra, Iconium, Pisidian Antioch
      [30.40, 38.90], [28.60, 39.60], [27.30, 39.90], [26.16, 39.75], // through Phrygia and Mysia to Troas
      [25.53, 40.47, 's'], [24.40, 40.94, 's'], [24.29, 41.01], // Samothrace, Neapolis; Philippi
      [23.85, 40.82], [23.47, 40.65], [22.95, 40.64], [22.20, 40.52], // Amphipolis, Apollonia, Thessalonica, Berea
      [22.58, 40.46], [23.63, 37.94, 's'], [23.73, 37.98], // to the coast, by sea to Piraeus; Athens
      [23.35, 38.00], [22.88, 37.91], [22.99, 37.88], // Megara, Corinth, Cenchreae
      [27.34, 37.94, 's'], // sail to Ephesus
      [34.89, 32.50, 's'], [34.93, 32.10], [35.23, 31.78], // sail to Caesarea; up to Jerusalem
      [34.93, 32.10], [34.89, 32.50], [35.07, 32.93], [35.20, 33.27], [35.37, 33.56], [35.50, 33.90], [35.65, 34.12], [35.84, 34.44], [35.78, 35.52], [36.16, 36.20], // up the coast road to Antioch
    ],
    with: ['Silas', 'Timothy (from Lystra)', 'Luke (from Troas)'],
    letters: [['1thessalonians', 'from Corinth'], ['2thessalonians', 'from Corinth']],
    stops: [
      { place: 'antioch', name: 'Antioch (Syria)', ref: '15:36–41', ch: 15, text: 'Paul and Barnabas part ways; Paul chooses Silas.' },
      { place: 'lystra', name: 'Derbe & Lystra', ref: '16:1–5', ch: 16, text: 'Timothy joins the team.', at: [32.9, 37.47], side: 'b' },
      { place: 'troas', name: 'Troas', ref: '16:8–10', ch: 16, text: 'A vision: a man of Macedonia pleads for help.' },
      { place: 'philippi', name: 'Philippi', ref: '16:11–40', ch: 16, text: 'Lydia believes; Paul and Silas are jailed; an earthquake; the jailer is baptized.' },
      { place: 'thessalonica', name: 'Thessalonica', ref: '17:1–9', ch: 17, text: 'Many believe; a mob attacks the house of Jason.' },
      { place: 'berea', name: 'Berea', ref: '17:10–14', ch: 17, text: 'The Bereans search the Scriptures daily.' },
      { place: 'athens', name: 'Athens', ref: '17:16–34', ch: 17, text: 'Paul speaks at the Areopagus about the unknown god.' },
      { place: 'corinth', name: 'Corinth', ref: '18:1–18', ch: 18, text: 'He works with Priscilla and Aquila and teaches there.' },
      { place: 'ephesus', name: 'Ephesus', ref: '18:19–21', ch: 18, text: 'A short visit, with a promise to return.' },
      { place: 'caesarea', name: 'Caesarea → Antioch', ref: '18:22', ch: 18, text: 'He greets the church in Jerusalem, then returns to Antioch.' },
    ],
  },
  {
    id: 'j3', name: '3rd Journey', short: '3rd', years: 'c. AD 53–57', from: 53, to: 57,
    ref: 'Acts 18:23–21:17', ch: 18, dash: '9 6',
    way: [
      [36.16, 36.20], [36.25, 36.45], [36.17, 36.85], [35.32, 37.00], [34.90, 36.92], [34.80, 37.35], // to Tarsus and the Cilician Gates
      [33.36, 37.35], [32.45, 37.58], [32.49, 37.87], [32.20, 39.20], [31.19, 38.31], // Derbe, Lystra, Iconium, Galatia and Phrygia
      [29.90, 38.50], [28.52, 38.35], [28.04, 38.49], [27.34, 37.94], // the upper road: Philadelphia, Sardis, Ephesus
      [27.14, 38.42], [27.18, 39.13], [26.16, 39.75], // north by Smyrna and Pergamum to Troas
      [24.40, 40.94, 's'], [24.29, 41.01], [23.85, 40.82], [23.47, 40.65], [22.95, 40.64], [22.20, 40.52], // to Macedonia
      [22.42, 39.64], [22.53, 38.80], [23.32, 38.32], [23.35, 38.00], [22.88, 37.91], // down through Greece to Corinth
      [23.35, 38.00], [23.32, 38.32], [22.53, 38.80], [22.42, 39.64], [22.20, 40.52], [22.95, 40.64], [23.47, 40.65], [23.85, 40.82], [24.29, 41.01], [24.40, 40.94], // back through Macedonia
      [26.16, 39.75, 's'], [26.34, 39.49], // sail to Troas; walk to Assos
      [26.55, 39.10, 's'], [26.20, 38.40, 's'], [26.95, 37.70, 's'], [27.28, 37.53, 's'], // Mitylene, off Chios, Samos, Miletus
      [27.29, 36.89, 's'], [28.22, 36.44, 's'], [29.32, 36.27, 's'], // Cos, Rhodes, Patara
      [32.50, 34.30, 's'], [35.20, 33.27, 's'], // past Cyprus on the left to Tyre
      [35.07, 32.93, 's'], [34.89, 32.50], [34.93, 32.10], [35.23, 31.78], // Ptolemais; Caesarea; Jerusalem
    ],
    with: ['Timothy', 'Luke', 'Aristarchus', 'Tychicus', 'Trophimus'],
    letters: [['1corinthians', 'from Ephesus'], ['2corinthians', 'from Macedonia'], ['romans', 'from Corinth']],
    stops: [
      { place: 'galatia', name: 'Galatia & Phrygia', label: 'Galatia & Phrygia', ref: '18:23', ch: 18, text: 'Strengthening the disciples town by town.' },
      { place: 'ephesus', name: 'Ephesus', ref: '19:1–41', ch: 19, text: 'Teaching in the hall of Tyrannus; the silversmiths riot over Artemis.' },
      { place: 'macedonia', name: 'Macedonia & Greece', ref: '20:1–3', ch: 20, text: 'Encouraging the churches; a plot sends him back through Macedonia.' },
      { place: 'troas', name: 'Troas', ref: '20:6–12', ch: 20, text: 'Eutychus falls from a window and is raised.' },
      { place: 'miletus', name: 'Miletus', ref: '20:17–38', ch: 20, text: 'Farewell to the Ephesian elders.' },
      { place: 'tyre', name: 'Tyre', ref: '21:3–6', ch: 21, text: 'Disciples urge Paul not to go to Jerusalem.' },
      { place: 'caesarea', name: 'Caesarea', ref: '21:8–14', ch: 21, text: 'Agabus warns of chains in Jerusalem.' },
      { place: 'jerusalem', name: 'Jerusalem', ref: '21:17–36', ch: 21, text: 'Paul is seized in the temple and arrested.' },
    ],
  },
  {
    id: 'j4', name: 'Voyage to Rome', short: 'To Rome', years: 'c. AD 59–60', from: 59, to: 60,
    ref: 'Acts 27:1–28:31', ch: 27, dash: '2 7',
    way: [
      [34.89, 32.50], [35.37, 33.56, 's'], // Caesarea → Sidon
      [34.30, 35.98, 's'], [29.98, 36.22, 's'], // under the lee of Cyprus to Myra
      [27.37, 36.68, 's'], [26.32, 35.30, 's'], [24.78, 34.93, 's'], // Cnidus; round Salmone to Fair Havens
      [24.08, 34.80, 's'], [14.40, 35.95, 's'], // driven past Cauda; two weeks adrift to Malta
      [15.29, 37.07, 's'], [15.65, 38.11, 's'], [14.12, 40.82, 's'], // Syracuse, Rhegium, Puteoli
      [14.25, 41.08], [13.10, 41.40], [12.80, 41.65], [12.48, 41.90], // the Appian Way: Capua, Forum of Appius, Three Taverns, Rome
    ],
    with: ['Luke', 'Aristarchus', 'Julius, the centurion guarding him'],
    letters: [['ephesians', 'traditionally from Rome'], ['philippians', 'traditionally from Rome'], ['colossians', 'traditionally from Rome'], ['philemon', 'traditionally from Rome']],
    stops: [
      { place: 'caesarea', name: 'Caesarea', ref: '27:1–2', ch: 27, text: 'Paul sails as a prisoner after appealing to Caesar.' },
      { place: 'sidon', name: 'Sidon', ref: '27:3', ch: 27, text: 'Julius lets Paul visit his friends.' },
      { place: 'myra', name: 'Myra', ref: '27:5–6', ch: 27, text: 'They change to a grain ship from Alexandria.' },
      { place: 'fair-havens', name: 'Fair Havens, Crete', ref: '27:8–12', ch: 27, text: 'Paul warns against sailing on; he is overruled.' },
      { place: 'malta', name: 'Malta', ref: '27:39–28:10', ch: 28, text: 'Shipwreck; a viper bite; many are healed.' },
      { place: 'syracuse', name: 'Syracuse → Puteoli', ref: '28:11–14', ch: 28, text: 'Up the coasts of Sicily and Italy.' },
      { place: 'rome', name: 'Rome', ref: '28:16–31', ch: 28, text: 'Under house arrest, he welcomes all who come and preaches freely.' },
    ],
  },
];

// Each route's SVG path is precomputed by scripts/gen-journeys-routes.mjs: road legs are straight lines
// between the towns above; sea legs are the shortest course through open water on the real coastline.
JOURNEYS.forEach((j) => { j.route = ROUTES[j.id]; });

export const journeyById = Object.fromEntries(JOURNEYS.map((j) => [j.id, j]));

// Where a stop's marker sits on the map: its place, or `at` (lon, lat) when the stop covers two towns,
// moved by the place's small `nudge` where neighbours would otherwise overlap.
export const stopPoint = (s) => {
  const p = s.at ? project(s.at[0], s.at[1]) : PLACES[s.place];
  const n = s.at ? [0, 0] : PLACES[s.place].nudge || [0, 0];
  return { x: p.x + n[0], y: p.y + n[1] };
};
