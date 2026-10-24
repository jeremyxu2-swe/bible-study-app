import { KINGS } from './kings.js';

// Prophets of the kings' era and the exile (25, plus 4 minor ones named in the kings' stories), for the Kings & Prophets page.
// audience: who they spoke to. book: a book of the Bible bears their name. kings: ids from kings.js.
// unsure: the dates are debated.
export const PROPHETS = [
 { "id": "samuel", "name": "Samuel", "start": 1070, "end": 1015, "audience": "both", "book": true, "message": "Last of the judges; anointed Saul, then David.", "kings": [ "saul", "david" ], "ref": "1 Samuel 1–25" },
 { "id": "nathan", "name": "Nathan", "start": 1000, "end": 965, "audience": "both", "book": false, "message": "Brought God’s covenant promise to David, then confronted him over Bathsheba: “You are the man!”", "kings": [ "david", "solomon" ], "ref": "2 Samuel 7; 12" },
 { "id": "ahijah", "name": "Ahijah", "start": 935, "end": 910, "audience": "north", "book": false, "message": "Tore his cloak into twelve pieces and gave Jeroboam ten, foretelling the split.", "kings": [ "solomon", "jeroboam1" ], "ref": "1 Kings 11:29–39; 14" },
 { "id": "shemaiah", "name": "Shemaiah", "start": 930, "end": 915, "audience": "south", "book": false, "message": "Stopped Rehoboam from going to war against the northern tribes.", "kings": [ "rehoboam" ], "ref": "1 Kings 12:21–24" },
 { "id": "jehuhanani", "name": "Jehu son of Hanani", "start": 890, "end": 850, "audience": "both", "book": false, "message": "Rebuked Baasha of Israel and Jehoshaphat of Judah.", "kings": [ "baasha", "jehoshaphat" ], "ref": "1 Kings 16:1–7; 2 Chronicles 19:2" },
 { "id": "elijah", "name": "Elijah", "start": 874, "end": 850, "audience": "north", "book": false, "message": "Faced the prophets of Baal on Mount Carmel: “How long will you go limping between two opinions?”", "kings": [ "ahab", "ahaziah_i" ], "ref": "1 Kings 17 – 2 Kings 2" },
 { "id": "micaiah", "name": "Micaiah", "start": 856, "end": 853, "audience": "north", "book": false, "message": "Alone foretold Ahab’s death in battle, against 400 court prophets.", "kings": [ "ahab", "jehoshaphat" ], "ref": "1 Kings 22" },
 { "id": "elisha", "name": "Elisha", "start": 852, "end": 795, "audience": "north", "book": false, "message": "Received Elijah’s double portion; healed Naaman, anointed Jehu.", "kings": [ "joram_i", "jehu", "jehoahaz_i", "jehoash_i" ], "ref": "2 Kings 2–13" },
 { "id": "obadiah", "name": "Obadiah", "start": 848, "end": 841, "audience": "nations", "book": true, "message": "Judgment on Edom for gloating over Jerusalem’s fall. (Date debated: c. 845 or after 586.)", "kings": [ "jehoram_j" ], "ref": "Obadiah", "unsure": true },
 { "id": "joel", "name": "Joel", "start": 835, "end": 800, "audience": "south", "book": true, "message": "A locust plague pictures the Day of the LORD; “I will pour out my Spirit on all flesh.” (Date debated.)", "kings": [ "joash" ], "ref": "Joel", "unsure": true },
 { "id": "jonah", "name": "Jonah", "start": 785, "end": 760, "audience": "nations", "book": true, "message": "Sent to Nineveh, he ran, was swallowed by a great fish, and saw God spare a repentant city.", "kings": [ "jeroboam2" ], "ref": "Jonah; 2 Kings 14:25" },
 { "id": "amos", "name": "Amos", "start": 765, "end": 750, "audience": "north", "book": true, "message": "A shepherd from Judah who denounced injustice in prosperous Israel: “Let justice roll down like waters.”", "kings": [ "jeroboam2", "uzziah" ], "ref": "Amos" },
 { "id": "hosea", "name": "Hosea", "start": 755, "end": 715, "audience": "north", "book": true, "message": "His marriage to unfaithful Gomer pictured God’s faithful love for unfaithful Israel.", "kings": [ "jeroboam2", "zechariah_i", "menahem", "pekah", "hoshea", "uzziah", "hezekiah" ], "ref": "Hosea" },
 { "id": "isaiah", "name": "Isaiah", "start": 740, "end": 681, "audience": "south", "book": true, "message": "Saw the LORD “high and lifted up”; foretold Immanuel and the suffering Servant.", "kings": [ "uzziah", "jotham", "ahaz", "hezekiah" ], "ref": "Isaiah; 2 Kings 19–20" },
 { "id": "micah", "name": "Micah", "start": 735, "end": 700, "audience": "south", "book": true, "message": "“What does the LORD require of you?” Foretold a ruler from Bethlehem.", "kings": [ "jotham", "ahaz", "hezekiah" ], "ref": "Micah" },
 { "id": "nahum", "name": "Nahum", "start": 660, "end": 630, "audience": "nations", "book": true, "message": "Announced the fall of Nineveh, Assyria’s cruel capital.", "kings": [ "manasseh", "josiah" ], "ref": "Nahum" },
 { "id": "zephaniah", "name": "Zephaniah", "start": 635, "end": 620, "audience": "south", "book": true, "message": "Warned of the Day of the LORD during Josiah’s early reign.", "kings": [ "josiah" ], "ref": "Zephaniah" },
 { "id": "huldah", "name": "Huldah", "start": 622, "end": 620, "audience": "south", "book": false, "message": "The prophetess who confirmed the newly found Book of the Law to Josiah.", "kings": [ "josiah" ], "ref": "2 Kings 22:14–20" },
 { "id": "jeremiah", "name": "Jeremiah", "start": 627, "end": 580, "audience": "south", "book": true, "message": "The weeping prophet; warned of Babylon and promised a new covenant (31:31).", "kings": [ "josiah", "jehoahaz_j", "jehoiakim", "jehoiachin", "zedekiah" ], "ref": "Jeremiah; Lamentations" },
 { "id": "habakkuk", "name": "Habakkuk", "start": 609, "end": 598, "audience": "south", "book": true, "message": "Asked why God allows evil; learned that “the righteous shall live by his faith.”", "kings": [ "jehoiakim" ], "ref": "Habakkuk" },
 { "id": "daniel", "name": "Daniel", "start": 605, "end": 536, "audience": "exile", "book": true, "message": "Taken to Babylon as a youth; stayed faithful and saw the kingdoms of the world give way to the Son of Man.", "kings": [ "jehoiakim", "zedekiah" ], "ref": "Daniel" },
 { "id": "ezekiel", "name": "Ezekiel", "start": 593, "end": 571, "audience": "exile", "book": true, "message": "A priest among the exiles; saw God’s glory leave the Temple and dry bones live again.", "kings": [ "zedekiah" ], "ref": "Ezekiel" },
 { "id": "haggai", "name": "Haggai", "start": 520, "end": 520, "audience": "exile", "book": true, "message": "Urged the returned exiles to finish rebuilding the Temple.", "kings": [], "ref": "Haggai; Ezra 5" },
 { "id": "zechariah_p", "name": "Zechariah", "start": 520, "end": 518, "audience": "exile", "book": true, "message": "Visions of hope; “your king is coming to you … humble and mounted on a donkey.”", "kings": [], "ref": "Zechariah" },
 { "id": "malachi", "name": "Malachi", "start": 440, "end": 420, "audience": "exile", "book": true, "message": "The last Old Testament prophet: God will send his messenger to prepare the way.", "kings": [], "ref": "Malachi" },
 { "id": "gad", "name": "Gad", "start": 1015, "end": 975, "audience": "both", "book": false, "message": "David’s seer: warned him to leave the cave of Adullam, and confronted him after his census of Israel.", "kings": [ "david" ], "ref": "1 Samuel 22:5; 2 Samuel 24", "minor": true },
 { "id": "azariah_p", "name": "Azariah son of Oded", "start": 895, "end": 895, "audience": "south", "book": false, "message": "“The LORD is with you while you are with him”: his words spurred King Asa’s reforms.", "kings": [ "asa" ], "ref": "2 Chronicles 15:1–8", "minor": true },
 { "id": "hanani", "name": "Hanani the seer", "start": 875, "end": 875, "audience": "south", "book": false, "message": "Rebuked Asa for relying on the king of Syria instead of the LORD, and was put in prison for it.", "kings": [ "asa" ], "ref": "2 Chronicles 16:7–10", "minor": true },
 { "id": "zechariah_j", "name": "Zechariah son of Jehoiada", "start": 800, "end": 800, "audience": "south", "book": false, "message": "A priest who warned Judah for forsaking the LORD; stoned in the temple court on King Joash’s order.", "kings": [ "joash" ], "ref": "2 Chronicles 24:20–22", "minor": true },
];

export const AUDIENCES = {
  north: { label: 'To Israel' },
  south: { label: 'To Judah' },
  nations: { label: 'To the nations' },
  exile: { label: 'To the exiles' },
  both: { label: 'To both kingdoms' },
};

export const prophetById = Object.fromEntries(PROPHETS.map((p) => [p.id, p]));

// Names used in the kings' stories → prophet ids ("Elijah (letter)" → elijah).
const ALIAS = { 'Elijah (letter)': 'elijah', 'Jehu son of Hanani': 'jehuhanani', 'Zechariah son of Jehoiada': 'zechariah_j', Azariah: 'azariah_p', Hanani: 'hanani' };
export function prophetByName(name) {
  if (name in ALIAS) return ALIAS[name] ? prophetById[ALIAS[name]] : null;
  return PROPHETS.find((p) => p.name === name) || null;
}
export const prophetYears = (p) => `c. ${p.start}${p.end !== p.start ? '–' + p.end : ''} BC`;

// Every king a prophet spoke to: his own list plus any king whose story names him, in reign order.
const kingsCache = new Map();
export function kingsOfProphet(id) {
  if (kingsCache.has(id)) return kingsCache.get(id);
  const p = prophetById[id];
  const ids = new Set(p ? p.kings : []);
  KINGS.forEach((k) => { if (k.prophets.some((n) => prophetByName(n)?.id === id)) ids.add(k.id); });
  const out = KINGS.filter((k) => ids.has(k.id)).sort((a, b) => b.start - a.start).map((k) => k.id);
  kingsCache.set(id, out);
  return out;
}
