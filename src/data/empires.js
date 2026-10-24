// The great powers around Israel, and how each one shaped the biblical story.
// Dates are approximate. r(label, bookId, chapter) links to a chapter in the app.
const r = (label, book, ch) => ({ label, book, ch });

export const EMPIRE_DETAILS = [
  {
    id: 'bronze',
    era: 'Patriarchs & Exodus', // the Bible story in this period (period switcher, second line)
    name: 'Bronze Age Kingdoms',
    short: 'Bronze Age',
    dates: 'c. 2100–1200 BC',
    region: 'The Fertile Crescent: Egypt, Canaan, Syria, Anatolia and Mesopotamia',
    capital: 'Egypt (Memphis, Thebes, Avaris), Babylon, Hattusa (Hittites); Canaan\'s city-states',
    tagline: 'Great kingdoms and small city-states: the world of the patriarchs, the Exodus and the conquest.',
    who: 'In the Middle and Late Bronze Ages several great kingdoms shared the ancient Near East. Egypt was the oldest and richest, ruled by pharaohs treated as gods; Babylon rose under Hammurabi, and later the Hittites of Anatolia rivaled Egypt for control of Syria. Canaan, between them, was a patchwork of small walled cities, each with its own king and often paying tribute to Egypt. Around 1200–1150 BC this whole world collapsed in war, drought and migration.',
    relationship: 'This is the world of Abraham, Isaac, Jacob and Joseph, of slavery in Egypt and the Exodus, and of Joshua\'s conquest. Abraham lived in tents among Canaanite and Hittite neighbors; famine brought Jacob\'s family to Egypt, where Joseph ruled under Pharaoh and Israel grew into a nation. A later pharaoh enslaved them, and God brought them out with mighty acts, gave them His covenant at Sinai, and led them into Canaan, where the early judges defended them against Canaanite kings.',
    moments: [
      { date: 'c. 2091 BC', text: 'God calls Abram to Canaan, a land of city-states; famine drives him to Egypt.', ref: r('Genesis 12', 'genesis', 12) },
      { date: 'c. 1898–1876 BC', text: 'Joseph rises to power in Egypt and Jacob\'s family settles in Goshen.', ref: r('Genesis 41', 'genesis', 41) },
      { date: 'c. 1526 BC', text: 'A new pharaoh enslaves the Israelites.', ref: r('Exodus 1', 'exodus', 1) },
      { date: 'c. 1446 BC', text: 'The plagues, the Passover, the Red Sea and the covenant at Sinai.', ref: r('Exodus 12', 'exodus', 12) },
      { date: 'c. 1406 BC', text: 'Israel defeats the Amorite kings Sihon and Og.', ref: r('Numbers 21', 'numbers', 21) },
      { date: 'c. 1406–1400 BC', text: 'Joshua leads Israel into Canaan; Jericho and Hazor fall.', ref: r('Joshua 6', 'joshua', 6) },
      { date: 'c. 1375–1200 BC', text: 'Early judges such as Deborah defend Israel against Canaanite kings.', ref: r('Judges 4', 'judges', 4) },
    ],
    rulers: [
      { name: 'Hammurabi of Babylon', note: 'Famous law code; his world matches the setting of Genesis.' },
      { name: 'The pharaoh of Joseph', note: 'Unnamed in Genesis; raised Joseph to power.' },
      { name: 'The pharaoh of the Exodus', note: 'Unnamed in Exodus; hardened his heart against God\'s command.' },
      { name: 'Ramesses II', note: 'Fought the Hittites; linked with the city "Raamses" (Exodus 1:11).' },
    ],
    books: ['genesis', 'job', 'exodus', 'leviticus', 'numbers', 'deuteronomy', 'joshua', 'judges'],
    people: ['abraham', 'sarah', 'isaac', 'jacob', 'joseph', 'moses', 'aaron', 'miriam', 'joshua', 'caleb', 'rahab', 'deborah'],
    why: 'This period holds the Bible\'s foundations: God\'s promises to Abraham, the rescue from Egypt, the covenant at Sinai and the gift of the land. The Exodus is the Old Testament\'s great picture of salvation, and the New Testament uses it to explain Jesus, the Passover Lamb who leads His people out of slavery to sin.',
    later: 'The Late Bronze Age collapse (c. 1200–1150 BC) ended the age of great powers. Egypt shrank back to the Nile, and the Philistines settled on Canaan\'s coast, opening the age of small regional kingdoms.',
  },
  {
    id: 'iron',
    era: 'Judges & kings', // the Bible story in this period (period switcher, second line)
    name: 'Iron Age & Regional Kingdoms',
    short: 'Regional Kingdoms', chip: 'Regional kingdoms',
    dates: 'c. 1200–853 BC (the small kingdoms lasted until Assyria absorbed them, 745–732 BC)',
    region: 'The Levant: Canaan, Syria, Phoenicia and the lands east of the Jordan',
    capital: 'Jerusalem and Samaria; Gaza, Gath and the Philistine cities; Tyre and Sidon; Damascus',
    tagline: 'No great empire, many small kingdoms: the age of the judges, Saul, David and Solomon.',
    who: 'After the Bronze Age collapse, no superpower controlled the eastern Mediterranean for about three centuries. Egypt was weak and divided, and Assyria only gradually grew strong. Small kingdoms filled the gap: the Philistines on the southern coast, the Phoenician trading cities of Tyre and Sidon, the Aramean kingdom of Damascus, and Moab, Ammon and Edom east of the Jordan, along with Israel and Judah.',
    relationship: 'Israel grew from a league of tribes under judges into a kingdom under Saul, David and Solomon. The Philistines were the great enemy until David defeated them and the neighboring kingdoms, and Solomon built the temple with help from Hiram of Tyre. After the kingdom divided in 931 BC, Israel and Judah traded, married and fought with their neighbors: Shishak of Egypt raided Jerusalem, Ahab married Jezebel of Sidon, Aram-Damascus waged long wars with Israel, and Moab broke free.',
    moments: [
      { date: 'c. 1070 BC', text: 'The Philistines capture the ark of the covenant.', ref: r('1 Samuel 4', '1samuel', 4) },
      { date: 'c. 1020 BC', text: 'David defeats Goliath of Gath.', ref: r('1 Samuel 17', '1samuel', 17) },
      { date: 'c. 1000–990 BC', text: 'David subdues the Philistines, Moab, Aram, Ammon and Edom.', ref: r('2 Samuel 8', '2samuel', 8) },
      { date: 'c. 966 BC', text: 'Solomon and Hiram of Tyre build the temple.', ref: r('1 Kings 5', '1kings', 5) },
      { date: '931 BC', text: 'The kingdom divides into Israel and Judah.', ref: r('1 Kings 12', '1kings', 12) },
      { date: 'c. 925 BC', text: 'Shishak of Egypt plunders Jerusalem.', ref: r('1 Kings 14', '1kings', 14) },
      { date: 'c. 874 BC', text: 'Ahab marries Jezebel of Sidon and brings in Baal worship.', ref: r('1 Kings 16', '1kings', 16) },
      { date: 'c. 850–796 BC', text: 'Wars with Aram-Damascus under Ben-hadad and Hazael; Moab rebels.', ref: r('2 Kings 8', '2kings', 8) },
    ],
    rulers: [
      { name: 'Hiram of Tyre', note: 'Supplied cedar and builders for Solomon\'s temple.' },
      { name: 'Shishak (Shoshenq I)', note: 'Pharaoh who plundered Jerusalem in Rehoboam\'s reign.' },
      { name: 'Ben-hadad and Hazael', note: 'Aramean kings of Damascus who fought Israel.' },
      { name: 'Mesha of Moab', note: 'Rebelled against Israel (2 Kings 3).' },
    ],
    books: ['judges', 'ruth', '1samuel', '2samuel', '1kings', '2kings', '1chronicles', '2chronicles', 'psalms', 'proverbs', 'ecclesiastes', 'songofsongs', 'jonah', 'amos'],
    people: ['samson', 'samuel', 'saul', 'david', 'goliath', 'solomon', 'jeroboam', 'ahab', 'jezebel', 'elijah', 'elisha'],
    why: 'This period is the setting for Judges through 2 Kings 14, for David\'s psalms and Solomon\'s wisdom. It explains why the Philistines loom so large, why Solomon could build so grandly, and why the prophets name Damascus, Tyre, Moab, Ammon and Edom. Above all, it is the time of David, to whom God promised an everlasting throne, fulfilled in Jesus, "the son of David."',
    later: 'From 745 BC Assyria under Tiglath-pileser III began swallowing these small kingdoms one by one, beginning the age of great empires that would last until Rome.',
  },
  {
    id: 'assyria',
    era: 'Israel falls', // the Bible story in this period (period switcher, second line)
    name: 'Neo-Assyrian Empire',
    short: 'Assyria',
    dates: '911–609 BC (pressing on Israel from 853 BC; ruling the Levant c. 745–630 BC)',
    region: 'Northern Mesopotamia (modern northern Iraq), on the Tigris River',
    capital: 'Ashur, then Calah (Nimrud), then Nineveh',
    tagline: 'The feared superpower that destroyed the northern kingdom of Israel.',
    who: 'A powerful, militaristic empire from the upper Tigris River. Assyria was famous for its brutal warfare and for a policy of mass deportation: it uprooted conquered peoples and resettled them in other lands so they could not rebel. At its height it controlled the whole Fertile Crescent, from Persia to Egypt. Its great capital Nineveh fell to the Babylonians and Medes in 612 BC, and the empire collapsed soon after.',
    relationship: 'Assyria was the great threat during the time of the divided kingdom and the eighth-century prophets. Israel and Judah both paid it heavy tribute. In 722 BC Assyria captured Samaria, ended the northern kingdom of Israel, and deported its people; it then moved foreigners into the land, whose mixing with the remaining Israelites produced the Samaritans. In 701 BC Assyria invaded Judah and surrounded Jerusalem, but God delivered the city in answer to Hezekiah\'s prayer. Isaiah called Assyria "the rod of my anger" — God used it to judge His people, then judged Assyria for its pride.',
    moments: [
      { date: 'c. 780–760 BC', text: 'Jonah preaches in Nineveh, and the city repents.', ref: r('Jonah 3', 'jonah', 3) },
      { date: 'c. 743 BC', text: 'King Menahem of Israel pays a huge tribute to Tiglath-pileser (Pul).', ref: r('2 Kings 15', '2kings', 15) },
      { date: 'c. 732 BC', text: 'Ahaz of Judah asks Assyria for help, becoming its vassal; Galilee is deported.', ref: r('2 Kings 16', '2kings', 16) },
      { date: '722 BC', text: 'Samaria falls; the northern kingdom of Israel is exiled and foreigners are resettled there.', ref: r('2 Kings 17', '2kings', 17) },
      { date: '701 BC', text: 'Sennacherib invades Judah and besieges Jerusalem; the angel of the LORD strikes his army.', ref: r('2 Kings 19', '2kings', 19) },
      { date: 'c. 650 BC', text: 'King Manasseh is taken captive by Assyrian commanders and later repents.', ref: r('2 Chronicles 33', '2chronicles', 33) },
      { date: '612 BC', text: 'Nineveh falls, as Nahum had prophesied.', ref: r('Nahum 3', 'nahum', 3) },
    ],
    rulers: [
      { name: 'Tiglath-pileser III (Pul)', note: 'Expanded the empire and began mass deportations.' },
      { name: 'Shalmaneser V', note: 'Besieged Samaria.' },
      { name: 'Sargon II', note: 'Completed the conquest of Samaria and the deportation.' },
      { name: 'Sennacherib', note: 'Invaded Judah in 701 BC and mocked the LORD.' },
    ],
    books: ['2kings', '2chronicles', 'isaiah', 'hosea', 'amos', 'jonah', 'micah', 'nahum', 'zephaniah'],
    people: ['hezekiah', 'isaiah', 'jonah', 'hosea'],
    why: 'Assyria explains why ten of Israel\'s twelve tribes "disappear" from the story after 2 Kings 17, and why Jews and Samaritans distrusted each other in Jesus\' day (John 4; Luke 10). It also gives the background for Isaiah, Hosea, Amos, Micah, Jonah and Nahum — and for the lesson that God is sovereign even over the nations that oppress His people.',
  },
  {
    id: 'babylon',
    era: 'The exile', // the Bible story in this period (period switcher, second line)
    name: 'Neo-Babylonian Empire',
    short: 'Babylon',
    dates: '626–539 BC',
    region: 'Southern Mesopotamia (modern southern Iraq), on the Euphrates River',
    capital: 'Babylon',
    tagline: 'The empire that destroyed Jerusalem and took Judah into exile.',
    who: 'The Neo-Babylonian (Chaldean) empire rose when Babylon threw off Assyrian rule and, with the Medes, destroyed Nineveh. Under Nebuchadnezzar II it became the great power of the world, with a magnificent capital, famous gates and gardens, and learned astrologers and wise men. Its time was short: in 539 BC Cyrus of Persia took Babylon, on the night described in Daniel 5.',
    relationship: 'Babylon was God\'s instrument of judgment on Judah. It took captives in three waves — in 605 BC (including Daniel), 597 BC (including King Jehoiachin and Ezekiel) and 586 BC, when it burned Jerusalem and Solomon\'s temple. Jeremiah warned that the exile would last seventy years and told the exiles to settle down and seek the welfare of Babylon. The exile reshaped the Jewish people: idol worship faded, and devotion to God\'s Word, prayer and the synagogue grew. Later, "Babylon" became a symbol of proud human power set against God.',
    moments: [
      { date: 'c. 712 BC', text: 'Hezekiah shows Babylonian envoys his treasures; Isaiah predicts exile to Babylon.', ref: r('2 Kings 20', '2kings', 20) },
      { date: '605 BC', text: 'Nebuchadnezzar takes the first captives, including Daniel and his friends.', ref: r('Daniel 1', 'daniel', 1) },
      { date: '597 BC', text: 'King Jehoiachin, Ezekiel and thousands more are taken to Babylon.', ref: r('2 Kings 24', '2kings', 24) },
      { date: '586 BC', text: 'Jerusalem and the temple are destroyed; most of Judah is exiled.', ref: r('2 Kings 25', '2kings', 25) },
      { date: 'c. 594 BC', text: 'Jeremiah writes to the exiles: seek the welfare of the city; after seventy years God will bring you back.', ref: r('Jeremiah 29', 'jeremiah', 29) },
      { date: 'c. 580s BC', text: 'Nebuchadnezzar is humbled and praises the Most High.', ref: r('Daniel 4', 'daniel', 4) },
      { date: '539 BC', text: 'The writing on the wall; Babylon falls to Persia that night.', ref: r('Daniel 5', 'daniel', 5) },
    ],
    rulers: [
      { name: 'Nabopolassar', note: 'Founder of the Neo-Babylonian empire.' },
      { name: 'Nebuchadnezzar II', note: 'Conquered Jerusalem; central figure in Daniel 1–4.', person: 'nebuchadnezzar' },
      { name: 'Evil-merodach', note: 'Released Jehoiachin from prison (2 Kings 25).' },
      { name: 'Belshazzar', note: 'Co-ruler on the night Babylon fell (Daniel 5).' },
    ],
    books: ['2kings', '2chronicles', 'isaiah', 'jeremiah', 'lamentations', 'ezekiel', 'daniel', 'habakkuk', 'psalms', 'revelation'],
    people: ['nebuchadnezzar', 'daniel', 'jeremiah', 'ezekiel'],
    why: 'The Babylonian exile is the great turning point of the Old Testament. It explains the grief of Lamentations and Psalm 137, the hope of Isaiah 40–55 and Ezekiel, and why the later books (Ezra, Nehemiah, Esther, Haggai, Zechariah, Malachi) are about returning and rebuilding. In Revelation 17–18, "Babylon" stands for every proud world power opposed to God.',
  },
  {
    id: 'persia',
    era: 'The return', // the Bible story in this period (period switcher, second line)
    name: 'Achaemenid Persian Empire',
    short: 'Persia',
    dates: '550–330 BC (ruling Judah 539–332 BC)',
    region: 'Iran, ruling from India to Egypt and Greece',
    capital: 'Susa, Persepolis, Ecbatana and Babylon',
    tagline: 'The empire that let the Jews go home and rebuild.',
    who: 'The Achaemenid Persian empire, founded by Cyrus the Great, was the largest empire the world had yet seen. Persia governed through provinces (satrapies), built royal roads, and generally allowed conquered peoples to return home and keep their own religions. It used Aramaic as a common language — which is why parts of Ezra and Daniel are written in Aramaic. Alexander the Great conquered it in 331 BC.',
    relationship: 'Persia was Israel\'s liberator. Isaiah even named Cyrus as God\'s chosen instrument, generations before he was born. In 538 BC Cyrus allowed the Jews to return to Jerusalem and rebuild the temple, which was finished in 516 BC under Darius. Judah became a small Persian province ("Yehud") with its own governors. Many Jews stayed in Persia, where Esther became queen. Ezra and Nehemiah, both serving under Persian kings, led later returns to restore God\'s Law and Jerusalem\'s walls.',
    moments: [
      { date: '539–538 BC', text: 'Cyrus conquers Babylon and decrees that the Jews may return and rebuild the temple.', ref: r('Ezra 1', 'ezra', 1) },
      { date: 'c. 539 BC', text: 'Daniel serves under Darius the Mede and is saved from the lions.', ref: r('Daniel 6', 'daniel', 6) },
      { date: '520 BC', text: 'Haggai and Zechariah urge the people to finish the temple.', ref: r('Haggai 1', 'haggai', 1) },
      { date: '516 BC', text: 'King Darius confirms Cyrus\' decree; the second temple is completed.', ref: r('Ezra 6', 'ezra', 6) },
      { date: 'c. 474 BC', text: 'Under Xerxes (Ahasuerus), Esther saves the Jews from Haman\'s plot.', ref: r('Esther 4', 'esther', 4) },
      { date: '458 BC', text: 'Artaxerxes sends Ezra to teach God\'s Law in Jerusalem.', ref: r('Ezra 7', 'ezra', 7) },
      { date: '445 BC', text: 'Nehemiah, the king\'s cupbearer, returns to rebuild Jerusalem\'s walls.', ref: r('Nehemiah 2', 'nehemiah', 2) },
    ],
    rulers: [
      { name: 'Cyrus the Great', note: 'Conquered Babylon; allowed the return (Isaiah 44:28–45:1).', person: 'cyrus' },
      { name: 'Darius I', note: 'Supported finishing the temple (Ezra 6).' },
      { name: 'Xerxes I (Ahasuerus)', note: 'King in the book of Esther.' },
      { name: 'Artaxerxes I', note: 'Sent Ezra and Nehemiah.' },
    ],
    books: ['2chronicles', 'ezra', 'nehemiah', 'esther', 'isaiah', 'daniel', 'haggai', 'zechariah', 'malachi'],
    people: ['cyrus', 'daniel', 'esther', 'mordecai', 'ezra', 'nehemiah'],
    why: 'Persia is the setting for the last chapter of Old Testament history. It shows God keeping His promise to bring His people home, working even through a foreign king. It also explains why the post-exile books feel small and humble — a tiny province rebuilding under a vast empire, waiting for the greater glory the prophets promised.',
  },
  {
    id: 'hellenistic',
    era: 'Between Testaments', // the Bible story in this period (period switcher, second line)
    name: 'Macedonian & Hellenistic Kingdoms',
    short: 'Greeks',
    dates: '336–63 BC (Judea under Greek rule 332–142 BC)',
    region: 'Macedonia and Greece, then the eastern Mediterranean and Middle East',
    capital: 'Pella (Macedon), then Alexandria (Ptolemies) and Antioch (Seleucids)',
    tagline: 'Alexander and the Greek kings of the "silent years" who gave the New Testament its language.',
    who: 'Alexander the Great of Macedon conquered the Persian empire in just a few years (334–331 BC) and spread Greek language and culture — "Hellenism" — across the known world. When he died in 323 BC, his generals divided the empire. Two of their dynasties matter for the Bible: the Ptolemies in Egypt and the Seleucids in Syria, who fought each other over the land of Israel.',
    relationship: 'This is the period between the Old and New Testaments, so no biblical book narrates it — but Daniel\'s visions describe it in advance (the goat and its horns in Daniel 8; the kings of the north and south in Daniel 11). Judea was ruled first by the Ptolemies and then by the Seleucids. In 167 BC the Seleucid king Antiochus IV Epiphanes banned Jewish worship and desecrated the temple. The Maccabees revolted, recaptured Jerusalem and rededicated the temple in 164 BC — remembered at Hanukkah, the Feast of Dedication Jesus attended (John 10:22). The Jewish (Hasmonean) kingdom that followed lasted until Rome took over in 63 BC.',
    moments: [
      { date: '331 BC', text: 'Alexander defeats Persia; Daniel\'s vision of the goat with the great horn.', ref: r('Daniel 8', 'daniel', 8) },
      { date: '323 BC', text: 'Alexander dies and his empire is divided among his generals.', ref: r('Daniel 11', 'daniel', 11) },
      { date: '3rd–2nd century BC', text: 'Jews in Alexandria translate the Old Testament into Greek (the Septuagint).' },
      { date: '167 BC', text: 'Antiochus IV desecrates the temple — the "abomination that makes desolate".', ref: r('Daniel 11', 'daniel', 11) },
      { date: '164 BC', text: 'The Maccabees rededicate the temple (Hanukkah).' },
      { date: 'c. AD 29', text: 'Jesus at the Feast of Dedication in Jerusalem.', ref: r('John 10', 'john', 10) },
    ],
    rulers: [
      { name: 'Alexander the Great', note: 'Conquered Persia; spread Greek language and culture.' },
      { name: 'The Ptolemies', note: 'Greek kings of Egypt; ruled Judea about 301–198 BC.' },
      { name: 'The Seleucids', note: 'Greek kings of Syria; ruled Judea from 198 BC.' },
      { name: 'Antiochus IV Epiphanes', note: 'Persecuted the Jews and defiled the temple (167 BC).' },
    ],
    books: ['daniel', 'zechariah', 'john', 'acts'],
    people: [],
    why: 'Greece explains the world the New Testament was born into. Because of Alexander, Greek became the common language from Rome to Egypt — so the New Testament was written in Greek and the gospel could travel widely. It also explains Hanukkah, the "Hellenists" in Acts 6, synagogues spread across the Mediterranean, and why Paul could preach to both Jews and Greeks in the same cities.',
  },
  {
    id: 'rome',
    era: 'Jesus & the church', // the Bible story in this period (period switcher, second line)
    name: 'Roman Empire',
    short: 'Rome',
    dates: '63 BC onward (in Judea)',
    region: 'Italy, ruling the whole Mediterranean world',
    capital: 'Rome',
    tagline: 'The empire of Jesus\' world: Caesar, Pilate, roads and crosses.',
    who: 'Rome grew from a city-state in Italy into a republic and then an empire ruled by emperors (Caesars). It brought the "Pax Romana" — a long Roman peace — with good roads, shared law and easy travel, but it ruled by force, heavy taxes and the cruel punishment of crucifixion. Emperors were increasingly honored as gods.',
    relationship: 'The Roman general Pompey took Jerusalem in 63 BC, and Judea was ruled through puppet kings like Herod the Great and then by Roman governors such as Pontius Pilate. Many Jews longed for a Messiah who would throw off Rome; tax collectors who worked for Rome were hated. Jesus was crucified under Roman authority. Paul was a Roman citizen and used Roman roads and courts to spread the gospel all the way to Rome. In AD 70 Rome destroyed Jerusalem and the temple, as Jesus had foretold.',
    moments: [
      { date: '63 BC', text: 'Pompey captures Jerusalem; Judea comes under Roman control.' },
      { date: '37–4 BC', text: 'Herod the Great rules as Rome\'s king of Judea; he rebuilds the temple and tries to kill the infant Jesus.', ref: r('Matthew 2', 'matthew', 2) },
      { date: '~5 BC', text: 'Caesar Augustus orders a census, bringing Mary and Joseph to Bethlehem.', ref: r('Luke 2', 'luke', 2) },
      { date: 'c. AD 30', text: 'Jesus is crucified under Pontius Pilate, the Roman governor.', ref: r('John 19', 'john', 19) },
      { date: 'c. AD 49', text: 'Emperor Claudius expels the Jews from Rome; Paul meets Priscilla and Aquila.', ref: r('Acts 18', 'acts', 18) },
      { date: 'c. AD 59–62', text: 'Paul appeals to Caesar as a Roman citizen and is taken to Rome.', ref: r('Acts 25', 'acts', 25) },
      { date: 'c. AD 64–67', text: 'Nero persecutes Christians; Peter and Paul are martyred.', ref: r('2 Timothy 4', '2timothy', 4) },
      { date: 'AD 70', text: 'Rome destroys Jerusalem and the temple, as Jesus predicted.', ref: r('Luke 21', 'luke', 21) },
    ],
    rulers: [
      { name: 'Augustus', note: 'First emperor; ordered the census of Luke 2.' },
      { name: 'Tiberius', note: 'Emperor during Jesus\' ministry (Luke 3:1).' },
      { name: 'Herod the Great', note: 'Rome\'s client king of Judea at Jesus\' birth.' },
      { name: 'Pontius Pilate', note: 'Governor who sentenced Jesus.', person: 'pilate' },
      { name: 'Claudius', note: 'Expelled Jews from Rome (Acts 18:2).' },
      { name: 'Nero', note: 'Emperor when Paul appealed to Caesar; later persecuted Christians.' },
    ],
    books: ['matthew', 'mark', 'luke', 'john', 'acts', 'romans', '1peter', 'revelation'],
    people: ['jesus', 'pilate', 'paul', 'peter'],
    why: 'Rome is the backdrop of the whole New Testament. It explains the census in Bethlehem, tax collectors like Matthew, "render to Caesar" (Mark 12:17), why the Jewish leaders needed Pilate to execute Jesus, why the cross was the cruelest of deaths, how Paul could travel and appeal to Caesar, and why 1 Peter and Revelation speak to Christians facing persecution from a powerful empire.',
  },
];

// Old empire ids (before the seven-period timeline) still work: links and notes are redirected.
export const EMPIRE_ALIASES = { egypt: 'bronze', greece: 'hellenistic' };
export const resolveEmpireId = (id) => EMPIRE_ALIASES[id] || id;
export const empireById = Object.fromEntries([
  ...EMPIRE_DETAILS.map((e) => [e.id, e]),
  ...Object.entries(EMPIRE_ALIASES).map(([old, id]) => [old, EMPIRE_DETAILS.find((e) => e.id === id)]),
]);

// Which periods each book is set in (for the "World powers" links on book pages).
const BOOK_PERIODS = {
  '1maccabees': ['hellenistic'],
  genesis: ['bronze'], exodus: ['bronze'], leviticus: ['bronze'], numbers: ['bronze'], deuteronomy: ['bronze'], joshua: ['bronze'],
  judges: ['bronze', 'iron'], ruth: ['iron'], '1samuel': ['iron'], '2samuel': ['iron'], '1kings': ['iron'],
  '2kings': ['iron', 'assyria', 'babylon'], '1chronicles': ['iron'], '2chronicles': ['iron', 'assyria', 'babylon', 'persia'],
  ezra: ['persia'], nehemiah: ['persia'], esther: ['persia'], job: ['bronze'],
  psalms: ['iron', 'babylon'], proverbs: ['iron'], ecclesiastes: ['iron'], songofsongs: ['iron'],
  isaiah: ['assyria', 'babylon', 'persia'], jeremiah: ['assyria', 'babylon'], lamentations: ['babylon'], ezekiel: ['babylon'],
  daniel: ['babylon', 'persia', 'hellenistic'], hosea: ['iron', 'assyria'], joel: [], amos: ['iron'], obadiah: ['babylon'],
  jonah: ['iron', 'assyria'], micah: ['assyria'], nahum: ['assyria'], habakkuk: ['babylon'], zephaniah: ['assyria'],
  haggai: ['persia'], zechariah: ['persia'], malachi: ['persia'],
};
export function periodsForBook(bookId) {
  const ids = BOOK_PERIODS[bookId] || (bookId ? ['rome'] : []);   // every New Testament book is set under Rome
  return ids.map((id) => empireById[id]).filter(Boolean);
}

// Section "world power" links: the old 'egypt' id meant different periods in different places.
const SECTION_POWER = { 'genesis:12': 'bronze', 'genesis:37': 'bronze', 'exodus:1': 'bronze', 'exodus:7': 'bronze', 'joshua:1': 'bronze',
  '1kings:1': 'iron', '1kings:12': 'iron', '2chronicles:10': 'iron', 'isaiah:28': 'assyria', 'ezekiel:25': 'babylon' };
export const periodForSection = (power, bookId, start) => power && empireById[SECTION_POWER[`${bookId}:${start}`] || resolveEmpireId(power)];

// Kept for older callers: which periods a book's "World power" text mentions.
export function empiresInText(text = '') {
  const t = text.toLowerCase();
  const hits = [];
  if (/egypt|hittite|amorite/.test(t)) hits.push('bronze');
  if (/philist|local power|israel|aram|phoenic/.test(t)) hits.push('iron');
  if (t.includes('assyria')) hits.push('assyria');
  if (t.includes('babylon')) hits.push('babylon');
  if (t.includes('persia')) hits.push('persia');
  if (/greek|greece|ptolem|seleuc/.test(t)) hits.push('hellenistic');
  if (t.includes('rome') || t.includes('roman')) hits.push('rome');
  return hits.map((id) => empireById[id]);
}
