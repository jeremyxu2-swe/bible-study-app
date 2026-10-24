// Church History › Compare: data and helpers.
// The 11 main families have full answers (compare1.js, compare2.js). Every other denomination
// inherits a family's answers ("base"), with overrides and a note where it differs.
import { COMPARE_1 } from './compare1.js';
import { COMPARE_2 } from './compare2.js';
import { DENOMS, denomById, laneOf } from './denominations.js';
import DENOM_LEVELS from './denomLevels.js';

export const FAMILY_ANSWERS = { ...COMPARE_1, ...COMPARE_2 };

export const TOPICS = [
  { id: 'authority', name: 'Authority', sub: 'Where final truth comes from' },
  { id: 'salvation', name: 'Salvation', sub: 'How a person is saved' },
  { id: 'baptism', name: 'Baptism', sub: 'Who, how and what it does' },
  { id: 'communion', name: 'Communion', sub: 'The Lord’s Supper' },
  { id: 'sacraments', name: 'Sacraments', sub: 'How many and what they are' },
  { id: 'leadership', name: 'Leadership', sub: 'Who leads the church' },
  { id: 'worship', name: 'Worship', sub: 'What a service is like' },
  { id: 'mary', name: 'Mary & the saints', sub: 'How they are honored' },
  { id: 'scripture', name: 'Scripture', sub: 'Which books are in the Bible' },
];

export const GLANCE = [
  { id: 'infants', q: 'Baptizes infants', all: 'All baptize infants' },
  { id: 'presence', q: 'Christ truly present in Communion', all: 'Christ truly present in Communion' },
  { id: 'bishops', q: 'Led by bishops', all: 'All are led by bishops' },
  { id: 'liturgy', q: 'Liturgical worship', all: 'Liturgical worship' },
  { id: 'married', q: 'Married priests or pastors', all: 'Married clergy are allowed' },
  { id: 'women', q: 'Women pastors', all: 'Women are ordained as pastors' },
  { id: 'saints', q: 'Asks the saints to pray', all: 'The saints are asked to pray' },
  { id: 'pope', q: 'One worldwide head (the pope)', all: 'All accept the pope' },
];

// Held in common by all the main families (sub-branches can drop one with `noAgree`).
export const AGREE = [
  { id: 'trinity', text: 'One God in three persons' },
  { id: 'christ', text: 'Jesus fully God and fully man' },
  { id: 'cross', text: 'His death for sin and bodily resurrection' },
  { id: 'scripture', text: 'Scripture is God’s Word' },
  { id: 'grace', text: 'Salvation is by God’s grace' },
  { id: 'return', text: 'Christ will return' },
  { id: 'creed', text: 'The Nicene Creed (in substance)' },
  { id: 'ordinances', text: 'Baptism and the Lord’s Supper are commanded by Christ' },
];

export const QUICK = [
  { label: 'Catholic vs Orthodox', ids: ['rc', 'eo'] },
  { label: 'Lutheran vs Reformed', ids: ['luth', 'ref'] },
  { label: 'Baptist vs Methodist', ids: ['bap', 'meth'] },
  { label: 'Anglican vs Catholic', ids: ['ang', 'rc'] },
  { label: 'The ancient East', ids: ['coe', 'oo', 'eo'] },
  { label: 'The big four', ids: ['rc', 'eo', 'luth', 'bap'] },
];

// ── Sub-branches: what differs from their family ──
// base: whose answers to start from (default: the denomination's lane)
// glance / notes: overrides · t: { topic: { k?, add } } where `add` is shown as "In <name>: …"
const SUBS = {
  coptic: { note: 'The church of Egypt, led by the Pope of Alexandria.', t: { worship: { add: 'Coptic is still used alongside Arabic; hymns are accompanied by cymbals and triangle.' } } },
  ethiopian: { note: 'Shares the Oriental Orthodox faith, with distinctive ancient customs.', t: {
    scripture: { k: 'eth81', add: 'The largest canon of any church: 81 books, including 1 Enoch and Jubilees.' },
    worship: { add: 'Every church holds a tabot (a replica of the Ark’s tablets); worship uses drums, the sistrum and liturgical dance. Saturday and Sunday are both kept as holy days.' } } },
  armenian: { note: 'Armenia, the first Christian kingdom (301).', t: { communion: { add: 'Uses unleavened bread and unmixed wine, unlike other Oriental churches.' }, worship: { add: 'Celebrates Christmas and Epiphany together on 6 January.' } } },
  syriac: { note: 'The Syriac Orthodox Church of Antioch.', t: { worship: { add: 'Worship in Syriac, close to the Aramaic Jesus spoke.' } } },
  malankara: { note: 'The St Thomas Christians of Kerala, India.', t: { leadership: { add: 'Part of the community is led by the Malankara Catholicos; part by the Syriac Patriarch of Antioch.' } } },
  serbian: { note: 'Shares the Eastern Orthodox answers.' },
  russian: { note: 'The largest Orthodox church.', t: { worship: { add: 'Uses Church Slavonic and the Julian calendar (Christmas on 7 January).' } } },
  oca: { note: 'Self-governing since 1970 (not recognized by every Orthodox church).', t: { worship: { add: 'Worship is mostly in English.' } } },
  romanian: { note: 'Shares the Eastern Orthodox answers.', t: { worship: { add: 'Uses Romanian, a Latin language, and the revised Julian calendar.' } } },
  maronite: { note: 'An Eastern Catholic church of Lebanon, in full communion with Rome.', glance: { married: 1 }, notes: { married: 'Maronite priests may marry before ordination.' }, t: { worship: { add: 'Its own Syriac (Antiochene) liturgy.' }, leadership: { add: 'Led by its own Patriarch of Antioch, under the pope.' } } },
  ugcc: { note: 'An Eastern Catholic church in full communion with Rome.', glance: { married: 1 }, notes: { married: 'Ukrainian Greek Catholic priests may marry before ordination.' }, t: { worship: { add: 'Byzantine liturgy like the Orthodox, with icons and the iconostasis.' }, leadership: { add: 'Led by its own Major Archbishop of Kyiv, under the pope.' } } },
  oldcath: { note: 'Catholics who rejected papal infallibility (1870); in full communion with Anglicans.', glance: { pope: 0, married: 1, women: 0.5 }, notes: { married: 'Priests may marry.', women: 'The German, Swiss, Dutch and Austrian Old Catholic churches ordain women.' }, t: {
    authority: { k: 'tradition', add: 'Accepts the councils of the undivided church, but not papal infallibility or the pope’s universal jurisdiction.' },
    leadership: { k: 'bishops', add: 'Led by bishops of the Union of Utrecht, without a pope. Priests may marry.' },
    mary: { k: 'intercession', add: 'Mary and the saints are honored and asked to pray, but the papal dogmas of the Immaculate Conception (1854) and Assumption (1950) are not accepted.' } } },
  moravian: { base: 'luth', note: 'Followers of Jan Hus (1457); shares much with Lutherans.', glance: { bishops: 1, presence: 0.5, women: 1 }, notes: { bishops: 'Moravians have bishops, though synods govern.', presence: 'Christ present in the Supper, without defining how.' }, t: {
    leadership: { k: 'bishops', add: 'Bishops in a succession reaching back to 1467, though elected synods govern the church.' },
    worship: { add: 'Lovefeasts with buns and coffee; the Daily Texts (Losungen) read worldwide since 1731; a famous tradition of music.' } } },
  lcms: { note: 'A confessional Lutheran church in the US.', glance: { bishops: 0, women: 0 }, notes: { women: 'Pastors are men only.', bishops: 'Led by an elected synod president.' }, t: { communion: { add: 'Practises closed communion: normally only for members of churches in fellowship with it.' }, scripture: { add: 'Holds firmly to the inerrancy of Scripture.' } } },
  pres: { note: 'Reformed churches governed by elders; shares the Reformed answers.' },
  dutch: { note: 'The Reformed churches of the Netherlands and their daughters.', t: { authority: { add: 'Its standards are the “Three Forms of Unity”: Belgic Confession, Heidelberg Catechism and Canons of Dort.' } } },
  restor: { base: 'bap', note: 'Stone–Campbell “Christians only”: no creeds, weekly Communion.', glance: { infants: 0, presence: 0, women: 1, liturgy: 0 }, notes: { women: 'The Disciples of Christ ordain women.' }, noAgree: [], t: {
    authority: { k: 'no-creed', add: 'Scripture alone, without creeds: “No creed but Christ, no book but the Bible.”' },
    salvation: { k: 'faith-obedience', add: 'By grace through faith in Christ, expressed in repentance, confession and baptism.' },
    baptism: { k: 'believer-immersion', add: 'Believers only, by immersion, for the forgiveness of sins.' },
    communion: { k: 'memorial', add: 'A memorial meal at the center of worship every Sunday, open to all Christians.' },
    leadership: { k: 'congregational', add: 'Congregations govern themselves; the Disciples also have regional and general assemblies.' },
    worship: { k: 'free', add: 'Weekly Communion at the heart of the service, often led by lay elders, with hymns and preaching.' } } },
  coc: { base: 'bap', note: 'Restoration churches that worship without instruments.', glance: { infants: 0, presence: 0, women: 0, liturgy: 0 }, notes: { women: 'Men only lead worship and serve as elders.' }, t: {
    authority: { k: 'no-creed', add: 'Scripture alone, with no creeds; seeks to follow New Testament patterns exactly.' },
    salvation: { k: 'faith-obedience', add: 'By grace through faith, expressed in repentance, confession and baptism; a believer can fall away.' },
    baptism: { k: 'believer-immersion', add: 'Believers only, by immersion; most teach it is necessary for salvation.' },
    communion: { k: 'memorial', add: 'A memorial taken every Sunday.' },
    leadership: { k: 'congregational', add: 'Each congregation is led by its own elders; there is no denominational headquarters.' },
    worship: { k: 'a-cappella', add: 'Singing without instruments (a cappella), following the New Testament’s silence on instruments.' } } },
  hutterite: { note: 'Anabaptists who share all property (Acts 2:44).', t: { worship: { add: 'Live in colonies with goods held in common; daily evening services.' } } },
  menno: { note: 'The largest Anabaptist family; shares the Anabaptist answers.' },
  amish: { note: 'Old Order Anabaptists who separate from the modern world.', glance: { women: 0 }, notes: { women: 'Ministers and bishops are men, chosen by lot.' }, t: { worship: { add: 'Worship every other Sunday in members’ homes, in Pennsylvania Dutch and High German.' } } },
  brethren: { note: 'German Pietist Anabaptists (1708).', glance: { women: 1 }, notes: { women: 'The Church of the Brethren ordains women.' }, t: { baptism: { k: 'believer-immersion', add: 'Believers only, by triple immersion, kneeling forward in the water.' }, communion: { add: 'The Love Feast: foot washing, a fellowship meal and Communion together.' } } },
  cong: { base: 'ref', note: 'Puritan and Separatist churches that govern themselves.', glance: { women: 1 }, notes: { women: 'The United Church of Christ ordains women (and did so first, in 1853).' }, t: { leadership: { k: 'congregational', add: 'Each congregation is self-governing; no presbyteries or bishops.' } } },
  quaker: { base: 'ana', note: 'The Religious Society of Friends: no clergy, no outward sacraments.', glance: { infants: 0, presence: 0, bishops: 0, liturgy: 0, married: 0, women: 1, saints: 0, pope: 0 }, notes: { women: 'Women have spoken and ministered equally since the 1650s.', married: 'Most meetings have no clergy at all.' }, noAgree: ['ordinances', 'creed'], t: {
    authority: { k: 'inner-light', add: 'The “Inner Light” of Christ in each person, tested by Scripture and the gathered meeting.' },
    salvation: { k: 'inner-light', add: 'Through the light of Christ at work in every person who responds to it; Friends range from evangelical to liberal in how they describe this.' },
    mary: { k: 'no-intercession', add: 'Mary is respected; Friends do not pray to saints and keep no saints’ days or church calendar.' },
    scripture: { k: '66', add: '66 books, read in the light of the Spirit who first inspired them.' },
    baptism: { k: 'none', add: 'No water baptism: Friends seek the inward baptism of the Spirit.' },
    communion: { k: 'none', add: 'No outward Communion: every meal and moment can be communion with Christ.' },
    sacraments: { k: 'none', add: 'No outward sacraments; all of life is sacramental.' },
    leadership: { k: 'meeting', add: 'Decisions are made by the whole meeting seeking unity (“the sense of the meeting”), without voting or clergy.' },
    worship: { k: 'silent', add: 'Unprogrammed meetings wait in silence until someone is moved to speak; many Friends churches in Africa and the Americas have pastors and singing.' } } },
  episcopal: { note: 'The Anglican church in the United States.', glance: { women: 1 }, notes: { women: 'Women are ordained as priests and bishops (since 1976 and 1989).' } },
  partic: { note: 'Calvinist Baptists (London Baptist Confession, 1689).', glance: { women: 0 }, notes: { women: 'Pastors and elders are men only.' }, t: { salvation: { k: 'faith-reformed', add: 'By grace alone through faith, holding Reformed teaching on God’s sovereign election and the perseverance of believers.' } } },
  sbc: { note: 'The largest Protestant denomination in the US.', glance: { women: 0 }, notes: { women: 'The Baptist Faith and Message (2000) limits the office of pastor to men.' }, t: { authority: { add: 'Affirms the Baptist Faith and Message (2000) and the inerrancy of Scripture.' } } },
  natbap: { note: 'The largest historically Black denomination in the US.' },
  sda: { note: 'Adventists who keep a Saturday Sabbath.', glance: { women: 0.5 }, notes: { women: 'Women serve as pastors in some regions; the world church has not approved ordaining them.' }, t: {
    authority: { add: 'Also values the writings of Ellen G. White as inspired counsel, under Scripture.' },
    salvation: { k: 'faith-arminian', add: 'By grace through faith in Christ; a believer can turn away. Christ’s ministry in the heavenly sanctuary and his soon return are distinctive emphases.' },
    worship: { add: 'Worship on Saturday, the seventh-day Sabbath; health teaching (many are vegetarian).' },
    communion: { add: 'Communion is preceded by foot washing, usually once a quarter.' } } },
  nondenom: { note: 'Independent churches; mostly baptistic, often charismatic.', t: { worship: { k: 'charismatic', add: 'Contemporary worship with a band; informal and centered on preaching.' } } },
  ame: { note: 'The first independent Black denomination in the US (1816).', glance: { bishops: 1 }, notes: { bishops: 'Led by bishops.' }, t: { leadership: { k: 'bishops', add: 'Bishops lead the church; women have been ordained since 1948 and as bishops since 2000.' } } },
  salv: { note: 'A Methodist mission organized like an army; no sacraments.', glance: { infants: 0, presence: 0, bishops: 0, liturgy: 0 }, notes: { women: 'Women and men have served as officers equally since the 1870s.' }, noAgree: ['ordinances'], t: {
    baptism: { k: 'none', add: 'Does not practise water baptism; children are dedicated and adults enrolled as soldiers.' },
    communion: { k: 'none', add: 'Does not celebrate Communion, believing grace comes without outward signs.' },
    sacraments: { k: 'none', add: 'No sacraments.' },
    leadership: { k: 'army', add: 'Led by a General, with officers holding military-style ranks.' },
    worship: { k: 'free', add: 'Informal meetings with brass bands, songs and testimonies, and the “mercy seat” for prayer.' } } },
  hol: { note: 'Holiness churches such as the Church of the Nazarene.', glance: { infants: 0.5, bishops: 0, presence: 0 }, notes: { infants: 'Nazarenes allow infant baptism or dedication.' }, t: { salvation: { add: 'Stresses “entire sanctification,” a second work of grace that cleanses the heart.' } } },
  cogic: { note: 'The largest Pentecostal denomination in the US.', glance: { bishops: 1, women: 0 }, notes: { bishops: 'Led by a Presiding Bishop.', women: 'Women serve as missionaries and evangelists, not pastors.' } },
  aog: { note: 'One of the largest Pentecostal fellowships worldwide.', glance: { bishops: 0, women: 1 }, notes: { women: 'Women have been ordained since 1935.' } },
};

const EXCLUDE = new Set(['early', 'charis']); // the Early Church trunk, and a movement inside many churches

// Every denomination you can pick, in tree order, grouped Eastern / Catholic / Protestant.
const LANE_ORDER = ['coe', 'oo', 'eo', 'rc', 'luth', 'ref', 'ana', 'ang', 'bap', 'meth', 'pent'];
const famLane = (id) => (id === 'moravian' ? 'luth' : laneOf(id)); // Moravians sit with the Protestants
export const PICKABLE = DENOMS.filter((d) => !EXCLUDE.has(d.id))
  .sort((a, b) => LANE_ORDER.indexOf(famLane(a.id)) - LANE_ORDER.indexOf(famLane(b.id))
    || (LANE_ORDER.includes(b.id) - LANE_ORDER.includes(a.id)) || a.start - b.start)
  .map((d) => d.id);

const FAM_OF = { coe: 'east', oo: 'east', eo: 'east', rc: 'cath', luth: 'prot', ref: 'prot', ana: 'prot', ang: 'prot', bap: 'prot', meth: 'prot', pent: 'prot' };
export const GROUPS = [
  { id: 'east', label: 'Eastern' },
  { id: 'cath', label: 'Catholic' },
  { id: 'prot', label: 'Protestant' },
];
export function groupOf(id) {
  if (id === 'moravian') return 'prot';
  return FAM_OF[laneOf(id)] || 'prot';
}

const cache = new Map();
// Full answers for any pickable denomination.
export function answersFor(id) {
  if (cache.has(id)) return cache.get(id);
  const fam = FAMILY_ANSWERS[id];
  let out;
  if (fam) out = { id, base: id, ...fam, adds: {}, note: null, noAgree: [] };
  else {
    const sub = SUBS[id] || {};
    const baseId = sub.base || laneOf(id);
    const base = FAMILY_ANSWERS[baseId];
    const t = {};
    const adds = {};
    for (const tp of TOPICS) {
      const o = sub.t?.[tp.id];
      if (o?.k) t[tp.id] = { k: o.k, s: o.add, m: o.add, d: o.add, own: true }; // its own answer replaces the family's
      else { t[tp.id] = base.t[tp.id]; if (o?.add) adds[tp.id] = o.add; } // the family's answer, plus a note
    }
    const inherited = Object.fromEntries(Object.entries(base.notes || {}).filter(([q]) => !(sub.glance && q in sub.glance)));
    const d = denomById[id];
    out = {
      id, base: baseId,
      since: `${d.start} · branched from ${denomById[d.from]?.name || '—'}`,
      size: DENOM_LEVELS[id]?.todayShort || null,
      glance: { ...base.glance, ...(sub.glance || {}) },
      notes: { ...inherited, ...(sub.notes || {}) },
      t, adds,
      note: sub.note || `Shares the ${denomById[baseId].name} answers.`,
      noAgree: sub.noAgree || [],
    };
  }
  cache.set(id, out);
  return out;
}

// The comparison in the address: ?d=rc,eo,luth (2–4 ids). Also accepts ?with=x (from a denomination page).
export function parseSel(params) {
  const raw = (params.get('d') || '').split(',').map((s) => s.trim()).filter(Boolean);
  const ok = [...new Set(raw)].filter((id) => PICKABLE.includes(id));
  const w = params.get('with');
  if (w && PICKABLE.includes(w) && !ok.includes(w)) ok.unshift(w);
  return ok.slice(0, 4);
}

// A sensible partner for a single denomination (used for ?with=).
export function partnerFor(id) {
  const fam = laneOf(id);
  const PAIR = { coe: 'oo', oo: 'eo', eo: 'rc', rc: 'eo', luth: 'rc', ref: 'luth', ana: 'bap', ang: 'rc', bap: 'meth', meth: 'bap', pent: 'bap' };
  if (fam !== id) return fam; // a sub-branch: compare with its own family first
  return PAIR[id] || 'rc';
}

export const agreeFor = (ids) => {
  const a = ids.map(answersFor);
  const base = AGREE.filter((x) => a.every((r) => !r.noAgree.includes(x.id))).map((x) => x.text);
  const extra = GLANCE.filter((g) => g.id !== 'pope' && a.every((r) => r.glance[g.id] === 1)).map((g) => g.all);
  return [...base, ...extra];
};

export const topicDiffers = (ids, topic) => {
  const a = ids.map(answersFor);
  const keys = new Set(a.map((r) => r.t[topic].k));
  return keys.size > 1 || a.some((r) => r.adds[topic]);
};
export const glanceDiffers = (ids, q) => new Set(ids.map((id) => answersFor(id).glance[q])).size > 1;
