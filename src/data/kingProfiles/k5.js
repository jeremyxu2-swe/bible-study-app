// Kings' profiles, batch 5: Israel's last kings, from Zechariah to Hoshea (753–722 BC).
import { s, d, r } from './_h.js';

const G = 'Kings & Kingdom';

export const chars = [
  { id: 'zechariah_i', name: 'Zechariah of Israel', title: 'King of Israel for six months, 753 BC', group: G, tribe: 'Israel (house of Jehu)', family: 'Son of Jeroboam II', when: 'Reigned 753 BC',
    bio: 'Jeroboam II’s son and the last king of Jehu’s dynasty. After six months Shallum killed him in public, ending the dynasty in the fourth generation, exactly as God had told Jehu.',
    books: ['2kings'],
    story: [s('2 Kings 15:8–12', '2kings', 15, 'Reigns six months; killed by Shallum, fulfilling the word to Jehu.')],
    related: [{ id: 'jeroboam2', rel: 'father' }, { id: 'shallum', rel: 'killed him' }, { id: 'jehu', rel: 'great-great-grandfather' }] },
  { id: 'shallum', name: 'Shallum', title: 'King of Israel for one month, 752 BC', group: G, tribe: 'Israel', family: 'Son of Jabesh', when: 'Reigned 752 BC',
    bio: 'He murdered King Zechariah and reigned one month in Samaria before Menahem came up from Tirzah and killed him. He is the only king of Israel the Bible gives no verdict on.',
    books: ['2kings'],
    story: [s('2 Kings 15:10–15', '2kings', 15, 'Kills Zechariah; killed by Menahem a month later.')],
    related: [{ id: 'zechariah_i', rel: 'killed' }, { id: 'menahem', rel: 'killed him' }] },
  { id: 'menahem', name: 'Menahem', title: 'King of Israel who paid Assyria, 752–742 BC', group: G, tribe: 'Israel', family: 'Son of Gadi; father of Pekahiah', when: 'Reigned ~752–742 BC',
    bio: 'A brutal ruler who killed Shallum and savagely punished a town that would not open to him. When the Assyrian king Tiglath-pileser (Pul) invaded, Menahem paid him a thousand talents of silver, taxing every wealthy man in Israel to raise it.',
    books: ['2kings'],
    story: [s('2 Kings 15:14–16', '2kings', 15, 'Kills Shallum and sacks Tiphsah.'), s('2 Kings 15:17–22', '2kings', 15, 'Pays Pul a thousand talents to keep his throne.')],
    related: [{ id: 'shallum', rel: 'killed' }, { id: 'pekahiah', rel: 'son' }] },
  { id: 'pekahiah', name: 'Pekahiah', title: 'King of Israel, 742–740 BC', group: G, tribe: 'Israel', family: 'Son of Menahem', when: 'Reigned ~742–740 BC',
    bio: 'Menahem’s son, who reigned two years before his officer Pekah, with fifty men of Gilead, killed him in the citadel of the palace in Samaria.',
    books: ['2kings'],
    story: [s('2 Kings 15:23–26', '2kings', 15, 'Killed in his palace by his captain Pekah.')],
    related: [{ id: 'menahem', rel: 'father' }, { id: 'pekah', rel: 'killed him' }] },
  { id: 'pekah', name: 'Pekah', title: 'King of Israel who attacked Judah, 740–732 BC', group: G, tribe: 'Israel (supported by Gilead)', family: 'Son of Remaliah', when: 'Reigned ~740–732 BC',
    bio: 'An army captain who killed Pekahiah and took the throne. He allied with Rezin of Syria against Assyria and attacked Judah to force it to join, the crisis behind Isaiah’s Immanuel prophecy. Assyria responded by seizing Galilee and Gilead, and Pekah was killed by Hoshea.',
    books: ['2kings', '2chronicles', 'isaiah'],
    story: [s('2 Kings 15:25–31', '2kings', 15, 'Kills Pekahiah; loses Galilee and Gilead to Assyria; killed by Hoshea.'), s('Isaiah 7:1–9', 'isaiah', 7, 'With Rezin he marches on Jerusalem; Isaiah calls them two smoldering stumps.'), s('2 Chronicles 28:5–15', '2chronicles', 28, 'Takes captives from Judah, who are sent home at the prophet Oded’s word.')],
    related: [{ id: 'pekahiah', rel: 'killed' }, { id: 'ahaz', rel: 'enemy' }, { id: 'hoshea', rel: 'killed him' }, { id: 'isaiah', rel: 'prophet' }] },
  { id: 'hoshea', name: 'Hoshea', title: 'Last king of Israel, 732–722 BC', group: G, tribe: 'Israel', family: 'Son of Elah', when: 'Reigned ~732–722 BC',
    bio: 'He killed Pekah and ruled as Assyria’s vassal. When he stopped paying tribute and sought help from Egypt, Shalmaneser imprisoned him and besieged Samaria for three years. In 722 BC the city fell and the people of Israel were carried into exile, the end of the northern kingdom.',
    books: ['2kings', 'hosea'],
    story: [s('2 Kings 17:1–6', '2kings', 17, 'Rebels against Assyria; Samaria is besieged and falls.'), s('2 Kings 17:7–23', '2kings', 17, 'Why Israel fell: they rejected the LORD and his covenant.')],
    related: [{ id: 'pekah', rel: 'killed' }, { id: 'hosea', rel: 'prophet' }] },
];

export const levels = {
  zechariah_i: {
    facts: { occupation: 'King of Israel (reigned six months, 753 BC)', people: 'Israelite (house of Jehu)', languages: 'Hebrew', era: 'Last years of Israel, 8th century BC', hometown: 'Samaria' },
    simple: 'Zechariah was king of Israel for only six months before he was killed. With him, Jehu’s family line of kings ended, just as God had said.',
    moderate: 'Zechariah son of Jeroboam reigned over Israel in Samaria six months. He did what was evil in the sight of the LORD, as his fathers had done, and did not depart from the sins of Jeroboam son of Nebat.\n\nShallum son of Jabesh conspired against him, struck him down in front of the people, killed him and reigned in his place. The writer of Kings points out what this meant: this was the promise that the LORD gave to Jehu, “Your sons shall sit on the throne of Israel to the fourth generation.” And so it came to pass. After Jehu, Jehoahaz, Jehoash and Jeroboam II, Zechariah was the fourth generation, and the last.',
    detailed: {
      background: 'He succeeded his father Jeroboam II after Israel’s most prosperous reign in a century. He is not the prophet Zechariah or the priest Zechariah killed under Joash.',
      world: 'His death began Israel’s final collapse. In the next twenty years five more men held the throne, three of them by murder, while Assyria under Tiglath-pileser III moved west.',
      significance: 'God’s word to Jehu both blessed and limited his dynasty, and Zechariah’s death fulfilled it to the generation. Hosea’s warning that God would punish Jehu’s house (Hosea 1:4) came true.',
      moments: [
        d('753 BC', 'Six months', 'He succeeds Jeroboam II and continues the golden calves.', '2 Kings 15:8–9', '2kings', 15),
        d('753 BC', 'Killed before the people', 'Shallum kills him publicly, ending Jehu’s dynasty.', '2 Kings 15:10–12', '2kings', 15),
      ],
      reading: [r('2 Kings 15:8–12', '2kings', 15, 'His reign'), r('2 Kings 10:30', '2kings', 10, 'The promise to Jehu')],
    },
  },
  shallum: {
    facts: { occupation: 'King of Israel (reigned one month, 752 BC)', people: 'Israelite', languages: 'Hebrew', era: 'Last years of Israel, 8th century BC', hometown: 'Samaria (possibly from Jabesh in Gilead)' },
    simple: 'Shallum killed King Zechariah and became king, but only a month later he was killed by Menahem.',
    moderate: 'Shallum son of Jabesh conspired against Zechariah, the last of Jehu’s line, and killed him. He began to reign in the 39th year of Uzziah king of Judah, and he reigned one full month in Samaria.\n\nThen Menahem son of Gadi came up from Tirzah, the old capital, struck down Shallum in Samaria, killed him and reigned in his place. Kings records his conspiracy as written in the Book of the Chronicles of the Kings of Israel. Unusually, it gives no verdict on him at all, perhaps because his reign was too short to judge.',
    detailed: {
      background: '“Son of Jabesh” may name his father or his hometown, Jabesh-gilead east of the Jordan. If so, his coup may reflect rivalry between Gilead and the western tribes, which continued under Pekah.',
      world: 'Four kings ruled Israel in a single year (753–752 BC): Jeroboam II, Zechariah, Shallum and Menahem. Hosea spoke of this chaos: “They made kings, but not through me” (Hosea 8:4).',
      significance: 'Shallum’s month on the throne shows Israel collapsing into a cycle of violence, each king taken down by the next. The kingdom that had begun by rejecting David’s house now had no stable house at all.',
      moments: [
        d('752 BC', 'Kills Zechariah', 'He conspires against the king and takes the throne.', '2 Kings 15:10', '2kings', 15),
        d('752 BC', 'One month', 'Menahem comes from Tirzah and kills him.', '2 Kings 15:13–15', '2kings', 15),
      ],
      reading: [r('2 Kings 15:10–15', '2kings', 15, 'His month as king'), r('Hosea 8:1–4', 'hosea', 8, '“They made kings, but not through me”')],
    },
  },
  menahem: {
    facts: { occupation: 'King of Israel (reigned c. 752–742 BC)', people: 'Israelite', languages: 'Hebrew; Aramaic for dealings with Assyria', era: 'Last years of Israel, 8th century BC', hometown: 'Tirzah, then Samaria' },
    simple: 'Menahem killed Shallum to become king. He was very cruel, and when the Assyrians came, he paid them a huge amount of silver to leave him on the throne.',
    moderate: 'Menahem son of Gadi came up from Tirzah, killed Shallum and took the throne. When the town of Tiphsah would not open its gates to him, he sacked it and committed terrible atrocities, ripping open the pregnant women. He reigned ten years in Samaria and kept Jeroboam’s sins all his days.\n\nThen Pul, king of Assyria, came against the land. Menahem gave him a thousand talents of silver so that Pul would help him hold on to his kingdom. He raised the money by taxing every wealthy man in Israel fifty shekels of silver, roughly sixty thousand men. So the king of Assyria turned back and did not stay in the land. Menahem died in peace, one of the last kings of Israel to do so, and his son Pekahiah succeeded him.',
    detailed: {
      background: 'His father Gadi may have been from the tribe of Gad. He likely began as a military leader in Tirzah, the old capital.',
      world: '“Pul” was the personal name of Tiglath-pileser III, who made Assyria an empire. His own annals list tribute from “Menahem of Samaria” (Minihimmu Samerinaya), one of many clear points where the Bible and Assyrian records meet.',
      significance: 'Menahem bought his throne from Assyria with his people’s money. Hosea condemned exactly this: Ephraim “like a dove, silly and without sense,” calling to Egypt and going to Assyria (Hosea 7:11). Paying tribute made Israel Assyria’s vassal, the first step toward its end.',
      moments: [
        d('752 BC', 'Kills Shallum', 'He marches from Tirzah and takes the throne.', '2 Kings 15:14', '2kings', 15),
        d('752 BC', 'Tiphsah', 'He savagely punishes a town that would not open to him.', '2 Kings 15:16', '2kings', 15),
        d('c. 743 BC', 'Tribute to Pul', 'He pays a thousand talents of silver to the king of Assyria.', '2 Kings 15:19–20', '2kings', 15),
      ],
      reading: [r('2 Kings 15:14–22', '2kings', 15, 'His reign'), r('Hosea 7:8–16', 'hosea', 7, 'Israel turning to Assyria')],
    },
  },
  pekahiah: {
    facts: { occupation: 'King of Israel (reigned c. 742–740 BC)', people: 'Israelite', languages: 'Hebrew', era: 'Last years of Israel, 8th century BC', hometown: 'Samaria' },
    simple: 'Pekahiah was Menahem’s son. After two years as king, one of his own officers, Pekah, killed him and took the throne.',
    moderate: 'Pekahiah son of Menahem began to reign over Israel in Samaria in the 50th year of Uzziah, and he reigned two years. He did what was evil in the sight of the LORD, keeping the sins of Jeroboam.\n\nPekah son of Remaliah, his captain, conspired against him with fifty men of Gilead and struck him down in Samaria, in the citadel of the king’s house, together with two men named Argob and Arieh. Pekah then reigned in his place. Pekahiah’s death may have been political as much as personal: his father had submitted to Assyria, while Pekah would soon lead an alliance against it.',
    detailed: {
      background: 'He inherited the throne peacefully, which was rare in these years, and with it his father’s policy of paying tribute to Assyria.',
      world: 'An anti-Assyrian movement was forming among the small states of the region, led by Rezin of Damascus. Pekah’s coup, with men from Gilead near the Syrian border, brought Israel into it.',
      significance: 'Pekahiah’s short reign is one more step in the downward spiral Hosea described: “All their kings have fallen, and none of them calls upon me” (Hosea 7:7).',
      moments: [
        d('742 BC', 'King after Menahem', 'He succeeds his father and keeps Jeroboam’s sins.', '2 Kings 15:23–24', '2kings', 15),
        d('740 BC', 'Killed in the citadel', 'Pekah and fifty Gileadites kill him in the palace.', '2 Kings 15:25', '2kings', 15),
      ],
      reading: [r('2 Kings 15:23–26', '2kings', 15, 'His reign')],
    },
  },
  pekah: {
    facts: { occupation: 'Army captain, then king of Israel (reigned c. 740–732 BC)', people: 'Israelite (his support came from Gilead)', languages: 'Hebrew; Aramaic for his alliance with Damascus', era: 'Last years of Israel, 8th century BC', hometown: 'Samaria' },
    simple: 'Pekah killed King Pekahiah and became king. He joined with Syria to attack Judah, but Assyria struck back and took much of Israel’s land. Then he was killed too.',
    moderate: 'Pekah son of Remaliah was Pekahiah’s captain. With fifty men of Gilead he killed the king and took the throne. He joined Rezin of Damascus in an alliance against Assyria, and when Ahaz of Judah refused to join, they invaded Judah. Chronicles says Pekah killed 120,000 Judeans in one day and carried off 200,000 captives, but the prophet Oded met the army at Samaria and persuaded Israel to clothe, feed and send the captives home.\n\nPekah and Rezin then besieged Jerusalem to put their own man on Judah’s throne. Isaiah told Ahaz not to fear these “two smoldering stumps of firebrands,” and gave the sign of Immanuel. Ahaz called on Assyria instead, and Tiglath-pileser came. He captured Galilee, the land of Naphtali and Gilead and deported their people to Assyria, and in 732 BC took Damascus. That same year Hoshea son of Elah conspired against Pekah, killed him and reigned in his place.',
    detailed: {
      background: 'Kings credits him with twenty years, which most scholars explain as counting from about 752 BC, when he may have ruled in Gilead as a rival to Menahem, before he took Samaria in 740 BC.',
      world: 'Tiglath-pileser’s annals say that the people of Israel “overthrew Pekah their king” and that he placed Hoshea over them, matching 2 Kings 15:30. The land Pekah lost became Assyrian provinces, the “Galilee of the nations” of Isaiah 9:1.',
      significance: 'Pekah’s war on Judah is the backdrop of Isaiah 7–9. The very land he lost to Assyria, Galilee, is where Isaiah promised a great light would shine, fulfilled when Jesus began his ministry there (Matthew 4:13–16).',
      moments: [
        d('740 BC', 'Kills Pekahiah', 'With fifty Gileadites he kills the king in his palace.', '2 Kings 15:25', '2kings', 15),
        d('c. 735 BC', 'War on Judah', 'He defeats Judah; the captives are sent home at Oded’s word.', '2 Chronicles 28:5–15', '2chronicles', 28),
        d('c. 734 BC', 'Siege of Jerusalem', 'With Rezin he marches on Jerusalem; Isaiah speaks to Ahaz.', 'Isaiah 7:1–9', 'isaiah', 7),
        d('733–732 BC', 'Galilee lost', 'Tiglath-pileser takes Galilee and Gilead and deports their people.', '2 Kings 15:29', '2kings', 15),
        d('732 BC', 'Killed by Hoshea', 'Hoshea conspires against him and takes the throne.', '2 Kings 15:30', '2kings', 15),
      ],
      reading: [r('2 Kings 15:25–31', '2kings', 15, 'His reign'), r('Isaiah 7', 'isaiah', 7, 'His attack on Jerusalem'), r('2 Chronicles 28:5–15', '2chronicles', 28, 'The captives sent home')],
    },
  },
  hoshea: {
    facts: { occupation: 'King of Israel (reigned c. 732–722 BC), Assyria’s vassal', people: 'Israelite', languages: 'Hebrew; Aramaic for dealings with Assyria', era: 'Fall of Israel, 8th century BC', hometown: 'Samaria' },
    simple: 'Hoshea was the last king of Israel. He stopped paying the Assyrians and asked Egypt for help. Assyria put him in prison, captured Samaria and took the people of Israel away into exile.',
    moderate: 'Hoshea son of Elah killed Pekah and became king, ruling what was left of Israel as a vassal of Assyria. He did evil, though not like the kings of Israel before him. When Shalmaneser V came against him, Hoshea submitted and paid tribute. But then he sent messengers to So, king of Egypt, and stopped paying tribute. Shalmaneser found out, bound him and put him in prison.\n\nThe Assyrian army invaded the land and besieged Samaria for three years. In the ninth year of Hoshea, 722 BC, Samaria fell, and the king of Assyria carried the Israelites away to Assyria and settled them in Halah, on the Habor, the river of Gozan, and in the cities of the Medes. Second Kings 17 then pauses to explain why: Israel had sinned against the LORD who brought them out of Egypt, worshiped other gods, and ignored the prophets who warned them, until the LORD removed them from his sight.',
    detailed: {
      background: 'His name means “salvation,” the same name the prophet Hosea bore and the original name of Joshua. He is the only king of Israel whose verdict is softened (“yet not as the kings of Israel who were before him”).',
      world: 'Shalmaneser V began the siege, and his successor Sargon II claimed the capture of Samaria, boasting that he deported 27,290 people and resettled the city with foreigners. Their descendants mixed with the remaining Israelites, the beginning of the Samaritans.',
      significance: 'Hoshea’s reign ends the northern kingdom after about 200 years and nineteen kings, none of whom walked fully with God. Its fall became a warning to Judah, which ignored it, and the background for the prophets’ hope that God would one day gather the scattered tribes again.',
      moments: [
        d('732 BC', 'Kills Pekah', 'He takes the throne with Assyria’s approval.', '2 Kings 15:30', '2kings', 15),
        d('c. 725 BC', 'Turns to Egypt', 'He stops paying tribute and seeks help from So of Egypt.', '2 Kings 17:3–4', '2kings', 17),
        d('725–722 BC', 'Siege of Samaria', 'Assyria imprisons Hoshea and besieges Samaria three years.', '2 Kings 17:5', '2kings', 17),
        d('722 BC', 'Israel exiled', 'Samaria falls and the people are deported to Assyria.', '2 Kings 17:6', '2kings', 17),
        d('Afterward', 'Why Israel fell', 'Kings explains the fall as the result of Israel’s long unfaithfulness.', '2 Kings 17:7–23', '2kings', 17),
      ],
      questions: [{ q: 'Were the ten tribes “lost”?', a: 'Many were deported and absorbed into other peoples, but not all. Some from the northern tribes had already moved to Judah, others stayed in the land, and the New Testament mentions Anna of the tribe of Asher (Luke 2:36). The prophets foresaw God gathering all Israel again.' }],
      reading: [r('2 Kings 17', '2kings', 17, 'The fall of Samaria and why'), r('Hosea 13–14', 'hosea', 13, 'Hosea’s final warning and hope')],
    },
  },
};
