// The smaller nations and peoples around Israel (the great empires live in empires.js).
// Each entry is the Simple reading level; Moderate and Detailed text is in nationLevels/.
// `ch` lists the chapters where the nation plays a real part, as 'book:1,2,3|book:4'. It drives
// the nation chips on chapter rows, sections and chapter pages. Dates are approximate.
const r = (label, book, ch) => ({ label, book, ch });
const m = (date, text, label, book, ch) => ({ date, text, ref: label ? r(label, book, ch) : null });

export const NATION_DETAILS = [
  {
    id: 'canaanites', name: 'Canaanites', title: 'The Canaanites', group: 'Canaan & neighbors',
    tagline: 'The people living in the land God promised to Abraham.',
    facts: [['Where', 'Canaan, the land west of the Jordan River'], ['When', 'Before and during Israel\'s time in the land'], ['Gods', 'Baal and Asherah']],
    who: 'The Canaanites lived in small walled cities, each with its own king, like Jericho and Hazor. They were farmers and traders who worshiped Baal, a storm god they believed sent rain and good harvests.',
    relationship: 'God promised their land to Abraham and gave it to Israel under Joshua. Israel did not drive them all out, and over time many Israelites copied their idol worship, which the prophets warned against again and again.',
    why: 'When you read about Baal, Asherah poles or "high places," that is Canaanite religion. It was Israel\'s biggest temptation for hundreds of years.',
    moments: [
      m('~2091 BC', 'God promises Canaan to Abraham\'s family.', 'Genesis 12', 'genesis', 12),
      m('c. 1406 BC', 'Joshua leads Israel into Canaan; Jericho falls.', 'Joshua 6', 'joshua', 6),
      m('c. 1400 BC', 'Many Canaanite cities are left, and Israel lives among them.', 'Judges 1', 'judges', 1),
      m('c. 870 BC', 'Elijah defeats the prophets of Baal on Mount Carmel.', '1 Kings 18', '1kings', 18),
      m('c. AD 29', 'Jesus praises a Canaanite woman\'s great faith.', 'Matthew 15', 'matthew', 15),
    ],
    ch: 'genesis:9,10,12,13,15,24,28,38,50|exodus:3,13,23,33,34|numbers:13,14,21,33|deuteronomy:7,12,20|joshua:2,3,5,6,7,11,12,13,16,17|judges:1,2,3,4,5|1kings:18|ezra:9|nehemiah:9|psalms:106|matthew:15',
  },
  {
    id: 'amorites', name: 'Amorites', title: 'The Amorites', group: 'Canaan & neighbors',
    tagline: 'Hill-country people of Canaan, and the kings Moses defeated east of the Jordan.',
    facts: [['Where', 'The hills of Canaan and the land east of the Jordan'], ['When', 'Abraham\'s time to the judges'], ['Known for', 'King Sihon and King Og']],
    who: 'The Amorites were a large people group who lived in the hill country of Canaan and east of the Jordan River. The Bible sometimes uses "Amorites" as a name for all the people of Canaan.',
    relationship: 'God told Abraham his descendants would wait for the land until "the iniquity of the Amorites" was complete. Moses defeated the Amorite kings Sihon and Og, and Joshua defeated five Amorite kings in the battle where the sun stood still.',
    why: 'Sihon and Og became a byword for God\'s victories, and the Psalms praise God for them. Joshua\'s famous challenge, "choose this day whom you will serve," mentions "the gods of the Amorites."',
    moments: [
      m('~2080 BC', 'God tells Abraham the Amorites\' sin is "not yet complete."', 'Genesis 15', 'genesis', 15),
      m('c. 1407 BC', 'Israel defeats Sihon, king of the Amorites, and Og, king of Bashan.', 'Numbers 21', 'numbers', 21),
      m('c. 1405 BC', 'Five Amorite kings attack Gibeon; the sun stands still for Joshua.', 'Joshua 10', 'joshua', 10),
      m('c. 1380 BC', 'Joshua tells Israel to choose the LORD over the gods of the Amorites.', 'Joshua 24', 'joshua', 24),
    ],
    ch: 'genesis:14,15,48|numbers:13,21,22,32|deuteronomy:1,2,3,4,31|joshua:2,5,7,9,10,11,12,13,24|judges:1,6,10,11|1samuel:7|1kings:21|2kings:21|ezra:9|nehemiah:9|psalms:135,136|ezekiel:16|amos:2',
  },
  {
    id: 'hittites', name: 'Hittites', title: 'The Hittites', group: 'Canaan & neighbors',
    tagline: 'A people of Canaan linked to a great empire, remembered for Ephron and Uriah.',
    facts: [['Where', 'Hebron and the hills of Canaan; a great empire in Turkey'], ['When', 'Abraham\'s time to the kings'], ['Known for', 'Ephron, Uriah and chariots']],
    who: 'Hittites in the Bible lived among the Canaanites, especially around Hebron. Far to the north, in what is now Turkey, a great Hittite empire rivaled Egypt, and later Hittite kingdoms ruled cities in Syria.',
    relationship: 'Abraham bought a burial cave for Sarah from Ephron the Hittite. Esau married Hittite women, which grieved his parents. Later, Uriah the Hittite was one of David\'s best soldiers, and David had him killed.',
    why: 'The Hittites show how mixed the land was. Uriah, a foreigner, was more loyal than King David, and Matthew remembers him in Jesus\' family line as "the wife of Uriah."',
    moments: [
      m('~2030 BC', 'Abraham buys the cave of Machpelah from Ephron the Hittite.', 'Genesis 23', 'genesis', 23),
      m('~1965 BC', 'Esau marries two Hittite women, a grief to Isaac and Rebekah.', 'Genesis 26', 'genesis', 26),
      m('c. 990 BC', 'David takes Bathsheba and arranges the death of Uriah the Hittite.', '2 Samuel 11', '2samuel', 11),
      m('c. 960 BC', 'Solomon trades chariots and horses with the kings of the Hittites.', '1 Kings 10', '1kings', 10),
    ],
    ch: 'genesis:15,23,25,26,27,49,50|exodus:3,23,33,34|numbers:13|deuteronomy:7,20|joshua:1,3,9,11,12,24|judges:1,3|1samuel:26|2samuel:11,12,23|1kings:9,10,11,15|2kings:7|ezra:9|nehemiah:9|ezekiel:16|matthew:1',
  },
  {
    id: 'hivites', name: 'Hivites', title: 'The Hivites', group: 'Canaan & neighbors',
    tagline: 'The people of Shechem and Gibeon, who tricked Joshua into a peace treaty.',
    facts: [['Where', 'Shechem, Gibeon, and the north near Mount Hermon'], ['When', 'Jacob\'s time to David'], ['Known for', 'The Gibeonite treaty']],
    who: 'The Hivites were one of the peoples of Canaan. They lived in towns like Shechem and Gibeon in the central hills, and in the far north near Mount Hermon.',
    relationship: 'The men of Gibeon, who were Hivites, fooled Joshua into making a peace treaty by pretending to come from far away. Israel kept its promise, and the Gibeonites lived among Israel as servants at the house of God.',
    why: 'The Gibeonite story shows that God takes promises seriously. When King Saul broke Israel\'s oath to them many years later, the whole land suffered for it.',
    moments: [
      m('~1900 BC', 'Shechem, son of Hamor the Hivite, takes Dinah, and her brothers take revenge.', 'Genesis 34', 'genesis', 34),
      m('c. 1405 BC', 'The Gibeonites trick Joshua into a peace treaty.', 'Joshua 9', 'joshua', 9),
      m('c. 1405 BC', 'Joshua defends Gibeon, and the sun stands still.', 'Joshua 10', 'joshua', 10),
      m('c. 980 BC', 'David makes amends for Saul\'s attack on the Gibeonites.', '2 Samuel 21', '2samuel', 21),
    ],
    ch: 'genesis:10,34,36|exodus:3,13,23,33,34|deuteronomy:7,20|joshua:3,9,10,11,12,24|judges:3|2samuel:21|1kings:9|nehemiah:3',
  },
  {
    id: 'perizzites', name: 'Perizzites', title: 'The Perizzites', group: 'Canaan & neighbors',
    tagline: 'Villagers of the hill country, named in nearly every list of the peoples of Canaan.',
    facts: [['Where', 'The hills and forests of central Canaan'], ['When', 'Abraham\'s time to Solomon'], ['Known for', 'Unwalled country villages']],
    who: 'The Perizzites were a people of Canaan who probably lived in open country villages rather than walled cities. Their name may even mean "villagers."',
    relationship: 'They were living in the land when Abraham and Lot settled there. Joshua and the tribe of Judah fought them, but many remained, and Israel was warned not to marry them or worship their gods.',
    why: 'When you see the list "Canaanites, Hittites, Amorites, Perizzites, Hivites and Jebusites," it describes the many different peoples living in the promised land.',
    moments: [
      m('~2085 BC', 'Abram and Lot separate while "the Canaanites and the Perizzites" live in the land.', 'Genesis 13', 'genesis', 13),
      m('c. 1400 BC', 'Joshua tells the tribe of Joseph to clear the forest of the Perizzites.', 'Joshua 17', 'joshua', 17),
      m('c. 1390 BC', 'Judah and Simeon defeat 10,000 Canaanites and Perizzites at Bezek.', 'Judges 1', 'judges', 1),
      m('c. 458 BC', 'Ezra is grieved that returned exiles have married into these peoples.', 'Ezra 9', 'ezra', 9),
    ],
    ch: 'genesis:13,15,34|exodus:3,23,33,34|deuteronomy:7,20|joshua:3,9,11,12,17,24|judges:1,3|1kings:9|ezra:9|nehemiah:9',
  },
  {
    id: 'jebusites', name: 'Jebusites', title: 'The Jebusites', group: 'Canaan & neighbors',
    tagline: 'The people of Jebus, the hilltop fortress that became Jerusalem.',
    facts: [['Where', 'Jebus, later called Jerusalem'], ['When', 'Before Joshua until David, about 1000 BC'], ['Known for', 'Their stronghold, the future City of David']],
    who: 'The Jebusites held a small, strong fortress city called Jebus in the hills of Canaan. Its walls and steep valleys made it very hard to capture.',
    relationship: 'Israel could not drive the Jebusites out of Jerusalem for about 400 years. David finally captured the city and made it his capital, and later bought a Jebusite\'s threshing floor where the temple was built.',
    why: 'Jerusalem, the holy city at the center of the Bible, began as a Jebusite town. God turned an enemy stronghold into the place where He would put His name.',
    moments: [
      m('c. 1405 BC', 'Adoni-zedek, king of Jerusalem, leads five kings against Joshua.', 'Joshua 10', 'joshua', 10),
      m('c. 1390 BC', 'Benjamin cannot drive out the Jebusites from Jerusalem.', 'Judges 1', 'judges', 1),
      m('c. 1000 BC', 'David captures the stronghold of Zion.', '2 Samuel 5', '2samuel', 5),
      m('c. 975 BC', 'David buys the threshing floor of Araunah the Jebusite, the future temple site.', '2 Samuel 24', '2samuel', 24),
    ],
    ch: 'genesis:10,15|exodus:3,13,23,33,34|numbers:13|deuteronomy:7,20|joshua:3,9,10,11,12,15,18,24|judges:1,3,19|2samuel:5,24|1kings:9|1chronicles:11,21|2chronicles:3,8|ezra:9|nehemiah:9|zechariah:9',
  },
  {
    id: 'philistines', name: 'Philistines', title: 'The Philistines', group: 'Coast of Canaan',
    tagline: 'Israel\'s great enemy on the coast, the people of Goliath and Delilah.',
    facts: [['Where', 'The southern coast of Canaan, around Gaza'], ['When', 'About 1180–600 BC'], ['God', 'Dagon']],
    who: 'The Philistines were sea people who came from the islands and coasts of the Mediterranean and settled on Canaan\'s southern coast. They had five main cities, Gaza, Ashkelon, Ashdod, Gath and Ekron, and were skilled at working iron.',
    relationship: 'The Philistines were Israel\'s main enemy during the time of the judges and King Saul. Samson fought them, they captured the ark of God, and David defeated their giant Goliath and later broke their power.',
    why: 'Many famous Bible stories happen in the fight against the Philistines: Samson and Delilah, the ark in Dagon\'s temple, David and Goliath, and Saul\'s death on Mount Gilboa.',
    moments: [
      m('c. 1070 BC', 'Samson fights the Philistines and pulls down Dagon\'s temple.', 'Judges 16', 'judges', 16),
      m('c. 1050 BC', 'The Philistines capture the ark, and Dagon falls on his face before it.', '1 Samuel 5', '1samuel', 5),
      m('c. 1025 BC', 'David defeats the Philistine giant Goliath.', '1 Samuel 17', '1samuel', 17),
      m('c. 1010 BC', 'Saul and Jonathan die fighting the Philistines on Mount Gilboa.', '1 Samuel 31', '1samuel', 31),
      m('c. 1000 BC', 'David defeats the Philistines and ends their threat.', '2 Samuel 5', '2samuel', 5),
    ],
    ch: 'genesis:21,26|exodus:13|joshua:13|judges:3,10,13,14,15,16|1samuel:4,5,6,7,13,14,17,18,19,21,23,27,28,29,31|2samuel:5,8,21,23|1chronicles:10,11,14,18,20|2chronicles:21,26,28|2kings:18|isaiah:14|jeremiah:47|ezekiel:25|amos:1,9|zephaniah:2|zechariah:9',
  },
  {
    id: 'amalekites', name: 'Amalekites', title: 'The Amalekites', group: 'Desert peoples',
    tagline: 'Desert raiders who attacked Israel first, and Israel\'s enemy for generations.',
    facts: [['Where', 'The Negev and Sinai deserts'], ['When', 'The Exodus to King Hezekiah'], ['Known for', 'Attacking Israel in the wilderness']],
    who: 'The Amalekites were nomads and raiders who lived in the deserts south of Canaan. They came from Amalek, a grandson of Esau.',
    relationship: 'Amalek was the first nation to attack Israel after the Exodus, striking the weak and weary at the back. They raided Israel again in the time of the judges, and King Saul lost his kingdom for sparing their king, Agag.',
    why: 'The battle against Amalek, won while Moses held up his hands, is a picture of depending on God. Haman in the book of Esther is called "the Agagite," linking him to this old enemy.',
    moments: [
      m('c. 1446 BC', 'Amalek attacks Israel at Rephidim; Israel wins while Moses\' hands are raised.', 'Exodus 17', 'exodus', 17),
      m('c. 1180 BC', 'Amalekites join Midian in raiding Israel\'s crops in Gideon\'s day.', 'Judges 6', 'judges', 6),
      m('c. 1030 BC', 'Saul spares King Agag and the best animals, and God rejects him as king.', '1 Samuel 15', '1samuel', 15),
      m('c. 1010 BC', 'Amalekites burn Ziklag, and David rescues the captives.', '1 Samuel 30', '1samuel', 30),
    ],
    ch: 'genesis:14,36|exodus:17|numbers:13,14,24|deuteronomy:25|judges:3,5,6,7,10,12|1samuel:14,15,27,28,30|2samuel:1,8|1chronicles:4,18|esther:3,8,9|psalms:83',
  },
  {
    id: 'edomites', name: 'Edomites', title: 'The Edomites', group: 'East of the Jordan',
    tagline: 'Esau\'s descendants, Israel\'s brother nation and bitter rival.',
    facts: [['Where', 'The mountains of Seir, south of the Dead Sea'], ['When', 'Esau\'s time to the 100s BC'], ['Known for', 'Descendants of Esau']],
    who: 'The Edomites descended from Esau, Jacob\'s twin brother. They lived in the red rocky mountains south of the Dead Sea, and their name Edom means "red."',
    relationship: 'Like Esau and Jacob, Edom and Israel were brothers who fought. Edom refused to let Israel pass through its land, David conquered it, and Edom later cheered when Babylon destroyed Jerusalem.',
    why: 'The rivalry between Jacob and Esau runs through the whole Old Testament. The short book of Obadiah is all about Edom, and King Herod, who tried to kill the baby Jesus, came from Edom\'s descendants.',
    moments: [
      m('~1990 BC', 'Esau sells his birthright to Jacob for a bowl of red stew.', 'Genesis 25', 'genesis', 25),
      m('c. 1407 BC', 'Edom refuses to let Israel pass through its land.', 'Numbers 20', 'numbers', 20),
      m('c. 995 BC', 'David puts garrisons in Edom, and the Edomites serve him.', '2 Samuel 8', '2samuel', 8),
      m('586 BC', 'Edom gloats over Jerusalem\'s fall, and Obadiah announces its judgment.', 'Obadiah 1', 'obadiah', 1),
    ],
    ch: 'genesis:25,27,32,33,36|numbers:20,24|deuteronomy:2,23|1samuel:21,22|2samuel:8|1kings:11,22|2kings:3,8,14|2chronicles:20,21,25,28|psalms:60,137|isaiah:34,63|jeremiah:49|lamentations:4|ezekiel:25,35|amos:1|obadiah:1|malachi:1|mark:3',
  },
  {
    id: 'moabites', name: 'Moabites', title: 'The Moabites', group: 'East of the Jordan',
    tagline: 'Lot\'s descendants east of the Dead Sea, and the people of Ruth.',
    facts: [['Where', 'The tableland east of the Dead Sea'], ['When', 'Lot\'s time to the 580s BC'], ['God', 'Chemosh']],
    who: 'The Moabites descended from Lot, Abraham\'s nephew. They lived on the high plains east of the Dead Sea and worshiped a god called Chemosh.',
    relationship: 'Moab\'s king hired Balaam to curse Israel, but he could only bless. Moab oppressed Israel in the time of the judges, yet Ruth the Moabite became the great-grandmother of King David.',
    why: 'Moab shows both sides of God\'s dealings with the nations: judgment on proud enemies, and welcome for anyone who trusts Him, like Ruth, who joined God\'s people and is named in Jesus\' family line.',
    moments: [
      m('c. 1407 BC', 'Balak, king of Moab, hires Balaam to curse Israel, but God turns it to blessing.', 'Numbers 22', 'numbers', 22),
      m('c. 1300 BC', 'Ehud kills Eglon, king of Moab, and frees Israel.', 'Judges 3', 'judges', 3),
      m('c. 1100 BC', 'Ruth the Moabite chooses Naomi\'s God: "Your God my God."', 'Ruth 1', 'ruth', 1),
      m('c. 850 BC', 'King Mesha of Moab rebels against Israel.', '2 Kings 3', '2kings', 3),
    ],
    ch: 'genesis:19|numbers:21,22,23,24,25,33|deuteronomy:1,2,23,29,34|judges:3,10,11|ruth:1,2,4|1samuel:12,22|2samuel:8|1kings:11|2kings:1,3,13,24|2chronicles:20|nehemiah:13|psalms:60,83|isaiah:15,16,25|jeremiah:48|ezekiel:25|amos:2|zephaniah:2',
  },
  {
    id: 'ammonites', name: 'Ammonites', title: 'The Ammonites', group: 'East of the Jordan',
    tagline: 'Lot\'s other descendants, centered on Rabbah, today\'s Amman.',
    facts: [['Where', 'East of the Jordan, around Rabbah (modern Amman)'], ['When', 'Lot\'s time to Nehemiah\'s day'], ['God', 'Milcom (Molech)']],
    who: 'The Ammonites descended from Lot, like the Moabites. Their capital was Rabbah, the city that is now Amman, the capital of Jordan, and they worshiped a god called Milcom or Molech.',
    relationship: 'The Ammonites often attacked Israel\'s land east of the Jordan. Jephthah and Saul fought them, and David\'s war against Rabbah was when he sinned with Bathsheba. Tobiah the Ammonite later opposed Nehemiah.',
    why: 'Saul\'s first victory as king was rescuing a town from the Ammonites. Solomon\'s worship of their god Molech was one of the sins that split his kingdom.',
    moments: [
      m('c. 1100 BC', 'Jephthah leads Israel against the Ammonites.', 'Judges 11', 'judges', 11),
      m('c. 1050 BC', 'Saul rescues Jabesh-gilead from Nahash the Ammonite.', '1 Samuel 11', '1samuel', 11),
      m('c. 990 BC', 'David\'s army besieges Rabbah while he stays home with Bathsheba.', '2 Samuel 11', '2samuel', 11),
      m('445 BC', 'Tobiah the Ammonite mocks and opposes Nehemiah\'s rebuilding.', 'Nehemiah 4', 'nehemiah', 4),
    ],
    ch: 'genesis:19|deuteronomy:2,23|judges:3,10,11,12|1samuel:11,12|2samuel:10,11,12|1kings:11,14|2kings:23,24|2chronicles:20,26,27|nehemiah:2,4,6,13|jeremiah:40,41,49|ezekiel:21,25|amos:1|zephaniah:2',
  },
  {
    id: 'midianites', name: 'Midianites', title: 'The Midianites', group: 'Desert peoples',
    tagline: 'Desert people who sheltered Moses, and later raided Israel until Gideon.',
    facts: [['Where', 'The desert east of the Gulf of Aqaba'], ['When', 'Abraham\'s time to Gideon'], ['Known for', 'Jethro, Moses\' father-in-law; camel raiders']],
    who: 'The Midianites descended from Midian, a son of Abraham and Keturah. They were desert herders and traders who lived in northwest Arabia and used camels.',
    relationship: 'Midianite traders carried Joseph to Egypt, and Moses lived in Midian for forty years and married the daughter of Jethro, a priest of Midian. Later Midian led Israel into sin and raided their land until God used Gideon to defeat them.',
    why: 'Gideon\'s small army of 300 defeating the huge Midianite army shows that victory comes from God, not from numbers. Isaiah looks back to it as "the day of Midian."',
    moments: [
      m('~1898 BC', 'Midianite traders carry Joseph to Egypt.', 'Genesis 37', 'genesis', 37),
      m('c. 1526 BC', 'Moses flees to Midian and marries Zipporah, Jethro\'s daughter.', 'Exodus 2', 'exodus', 2),
      m('c. 1446 BC', 'Jethro visits Moses and advises him to share the work of judging.', 'Exodus 18', 'exodus', 18),
      m('c. 1180 BC', 'Gideon\'s 300 men defeat the Midianites.', 'Judges 7', 'judges', 7),
    ],
    ch: 'genesis:25,36,37|exodus:2,3,4,18|numbers:10,22,25,31|joshua:13|judges:6,7,8,9|psalms:83|isaiah:9,10,60|habakkuk:3|acts:7',
  },
  {
    id: 'arameans', name: 'Arameans', title: 'The Arameans (Syria)', group: 'North of Israel',
    tagline: 'Israel\'s northern neighbors in Syria, ruled from Damascus.',
    facts: [['Where', 'Syria, with Damascus as the chief city'], ['When', 'Jacob\'s time to 732 BC'], ['Language', 'Aramaic']],
    who: 'The Arameans lived in Syria and northern Mesopotamia. Their strongest kingdom was ruled from Damascus. Their language, Aramaic, later became the common language of the Middle East and was spoken by Jesus.',
    relationship: 'Israel\'s ancestors had Aramean relatives, like Laban. Later, Aram and Israel were neighbors who fought many wars, especially in the days of Ahab, Elijah and Elisha, until Assyria destroyed Damascus in 732 BC.',
    why: 'Many of Elisha\'s miracles involve Aram, including the healing of Naaman, the Aramean army commander. Jesus pointed to Naaman to show that God\'s mercy reaches outsiders.',
    moments: [
      m('~1925 BC', 'Jacob works for his uncle Laban the Aramean and marries Leah and Rachel.', 'Genesis 29', 'genesis', 29),
      m('c. 855 BC', 'Ben-hadad of Aram attacks Samaria, and God gives Ahab victory.', '1 Kings 20', '1kings', 20),
      m('c. 850 BC', 'Naaman, Aram\'s army commander, is healed of leprosy in the Jordan.', '2 Kings 5', '2kings', 5),
      m('c. 735 BC', 'Aram and Israel threaten Judah; Isaiah gives Ahaz the sign of Immanuel.', 'Isaiah 7', 'isaiah', 7),
    ],
    ch: 'genesis:24,25,28,29,31|numbers:23|deuteronomy:26|judges:3,10|2samuel:8,10|1kings:11,15,19,20,22|2kings:5,6,7,8,13,16|2chronicles:16,24,28|isaiah:7,17|jeremiah:49|amos:1|luke:4|acts:9',
  },
  {
    id: 'phoenicians', name: 'Phoenicians', title: 'The Phoenicians (Tyre & Sidon)', group: 'Coast of Canaan',
    tagline: 'The sea-trading cities of Tyre and Sidon, home of Hiram and Jezebel.',
    facts: [['Where', 'The coast of Lebanon: Tyre, Sidon and Byblos'], ['When', 'About 1200–332 BC at their height'], ['Known for', 'Sea trade, cedar wood and purple dye']],
    who: 'The Phoenicians were the Canaanites of the northern coast, living in rich port cities like Tyre and Sidon. They were the greatest sailors and traders of their time and spread the alphabet around the Mediterranean.',
    relationship: 'King Hiram of Tyre was David\'s friend and sent cedar and builders for Solomon\'s temple. But Jezebel, a princess of Sidon, brought Baal worship into Israel. The prophets condemned Tyre\'s pride, and Jesus later visited the region.',
    why: 'Tyre and Sidon show both help and harm from outside: the cedar for God\'s temple, and the Baal worship Elijah fought. Jesus said that even Tyre and Sidon would have repented if they had seen His miracles.',
    moments: [
      m('c. 966 BC', 'Hiram of Tyre sends cedar and craftsmen to build Solomon\'s temple.', '1 Kings 5', '1kings', 5),
      m('c. 874 BC', 'Ahab marries Jezebel, daughter of the king of Sidon, and serves Baal.', '1 Kings 16', '1kings', 16),
      m('c. 586 BC', 'Ezekiel announces the fall of proud Tyre.', 'Ezekiel 26', 'ezekiel', 26),
      m('c. AD 29', 'Jesus visits the region of Tyre and Sidon.', 'Mark 7', 'mark', 7),
    ],
    ch: 'genesis:10,49|joshua:19|judges:1,10,18|2samuel:5,24|1kings:5,7,9,10,16,17|1chronicles:14,22|2chronicles:2|ezra:3|nehemiah:13|psalms:45,83,87|isaiah:23|jeremiah:25,47|ezekiel:26,27,28|joel:3|amos:1|zechariah:9|matthew:11,15|mark:3,7|luke:4,6,10|acts:12,21,27',
  },
  {
    id: 'ishmaelites', name: 'Ishmaelites', title: 'The Ishmaelites', group: 'Desert peoples',
    tagline: 'The twelve tribes descended from Abraham\'s son Ishmael.',
    facts: [['Where', 'The deserts of northern Arabia and Sinai'], ['When', 'Abraham\'s time onward'], ['Known for', 'Desert traders and tent-dwellers']],
    who: 'The Ishmaelites descended from Ishmael, the son of Abraham and Hagar. God promised that Ishmael would become a great nation, and he had twelve sons who became tribal leaders in the desert.',
    relationship: 'God cared for Hagar and Ishmael when they were sent away. Ishmaelite traders bought Joseph from his brothers and took him to Egypt, and Ishmael\'s descendants lived as Israel\'s desert neighbors.',
    why: 'Ishmael\'s story shows God hearing and caring for people outside the chosen line. His name means "God hears," and God kept His promise to make him a great nation.',
    moments: [
      m('~2081 BC', 'The angel of the LORD finds Hagar in the desert and names her son Ishmael.', 'Genesis 16', 'genesis', 16),
      m('~2063 BC', 'Hagar and Ishmael are sent away, and God provides a well.', 'Genesis 21', 'genesis', 21),
      m('~1990 BC', 'Ishmael\'s twelve sons become twelve princes.', 'Genesis 25', 'genesis', 25),
      m('~1898 BC', 'Joseph\'s brothers sell him to Ishmaelite traders.', 'Genesis 37', 'genesis', 37),
    ],
    ch: 'genesis:16,17,21,25,28,37,39|judges:8|1chronicles:1,27|psalms:83,120|isaiah:21,42,60|jeremiah:49|galatians:4',
  },
  {
    id: 'kenites', name: 'Kenites', title: 'The Kenites', group: 'Desert peoples',
    tagline: 'A small clan of friends to Israel, related to Moses\' father-in-law.',
    facts: [['Where', 'The Negev desert near Arad'], ['When', 'Moses\' time to Jeremiah\'s day'], ['Known for', 'Jethro\'s clan, Jael, and the Rechabites']],
    who: 'The Kenites were a small group of wandering people, possibly metalworkers. Moses\' father-in-law belonged to them, and they traveled with Israel into the promised land.',
    relationship: 'The Kenites were friends of Israel. Moses invited them to come along, they settled with the tribe of Judah, and Jael, a Kenite woman, killed the enemy commander Sisera. Saul spared them because they had been kind to Israel.',
    why: 'The Kenites show outsiders who joined God\'s people and were remembered for their faithfulness, from Jael\'s courage to the Rechabites, whose loyalty Jeremiah held up as an example.',
    moments: [
      m('c. 1445 BC', 'Moses invites Hobab and his family to travel with Israel.', 'Numbers 10', 'numbers', 10),
      m('c. 1390 BC', 'The Kenites settle with the people of Judah in the Negev.', 'Judges 1', 'judges', 1),
      m('c. 1200 BC', 'Jael, wife of Heber the Kenite, kills Sisera.', 'Judges 4', 'judges', 4),
      m('c. 600 BC', 'The Rechabites, a Kenite family, refuse wine to keep their ancestor\'s command.', 'Jeremiah 35', 'jeremiah', 35),
    ],
    ch: 'genesis:15|exodus:2,3,18|numbers:10,24|judges:1,4,5|1samuel:15,27,30|2kings:10|1chronicles:2|jeremiah:35',
  },
  {
    id: 'cushites', name: 'Cushites', title: 'Cush (Ethiopia)', group: 'Africa',
    tagline: 'The African kingdom south of Egypt, from Moses\' wife to the Ethiopian official.',
    facts: [['Where', 'South of Egypt on the Nile (modern Sudan)'], ['When', 'From Moses\' day to the New Testament'], ['Known for', 'Gold, strong armies, and pharaohs from Cush']],
    who: 'Cush was a powerful African kingdom on the Nile River south of Egypt. Older Bibles call it Ethiopia. For a time its kings even ruled Egypt as pharaohs.',
    relationship: 'Moses married a Cushite woman, and King Tirhakah of Cush marched against Assyria in Hezekiah\'s day. Ebed-melech, a Cushite official, saved Jeremiah from a muddy pit, and in Acts an Ethiopian official became one of the first non-Jewish believers.',
    why: 'Cush shows that God\'s people always included Africans. The prophets promised that Cush would bring gifts to God, and that hope came true when the Ethiopian official believed and was baptized.',
    moments: [
      m('c. 1445 BC', 'Miriam and Aaron criticize Moses for marrying a Cushite woman.', 'Numbers 12', 'numbers', 12),
      m('701 BC', 'Tirhakah, king of Cush, marches out against Assyria.', '2 Kings 19', '2kings', 19),
      m('c. 588 BC', 'Ebed-melech the Cushite rescues Jeremiah from the cistern.', 'Jeremiah 38', 'jeremiah', 38),
      m('c. AD 35', 'Philip explains Isaiah to an Ethiopian official, who is baptized.', 'Acts 8', 'acts', 8),
    ],
    ch: 'genesis:10|numbers:12|2samuel:18|2kings:19|2chronicles:12,14,16|esther:1|psalms:68,87|isaiah:18,20,37,43,45|jeremiah:13,38,39,46|ezekiel:29,30,38|amos:9|nahum:3|zephaniah:2,3|acts:8',
  },
  {
    id: 'samaritans', name: 'Samaritans', title: 'The Samaritans', group: 'In the land',
    tagline: 'The mixed people of Samaria, despised by the Jews and loved by Jesus.',
    facts: [['Where', 'Samaria, between Judea and Galilee'], ['When', 'From 722 BC to today'], ['Worship', 'On Mount Gerizim']],
    who: 'The Samaritans came from the Israelites left in the north after Assyria conquered Samaria in 722 BC, mixed with foreigners Assyria brought in. They accepted only the five books of Moses and worshiped on Mount Gerizim.',
    relationship: 'Samaritans opposed the Jews who rebuilt Jerusalem after the exile, and by Jesus\' time Jews and Samaritans avoided each other. Jesus broke that barrier, speaking with a Samaritan woman and making a Samaritan the hero of a parable.',
    why: 'When Jesus tells of the Good Samaritan or speaks with the woman at the well, it is shocking, because Samaritans were despised outsiders. Jesus later sent His followers to Samaria with the gospel.',
    moments: [
      m('722 BC', 'Assyria resettles foreigners in Samaria, who mix their gods with the LORD.', '2 Kings 17', '2kings', 17),
      m('c. 536 BC', 'The people of the land oppose the rebuilding of the temple.', 'Ezra 4', 'ezra', 4),
      m('c. AD 27', 'Jesus offers living water to a Samaritan woman at Jacob\'s well.', 'John 4', 'john', 4),
      m('c. AD 29', 'Jesus tells the parable of the Good Samaritan.', 'Luke 10', 'luke', 10),
      m('c. AD 34', 'Philip preaches in Samaria, and many believe.', 'Acts 8', 'acts', 8),
    ],
    ch: '2kings:17|ezra:4|nehemiah:2,4,6|matthew:10|luke:9,10,17|john:4,8|acts:1,8,9,15',
  },
  {
    id: 'medes', name: 'Medes', title: 'The Medes', group: 'Far east',
    tagline: 'A people of Iran who helped destroy Nineveh and then joined Persia.',
    facts: [['Where', 'Northwest Iran, with Ecbatana as capital'], ['When', 'About 700–550 BC, then part of Persia'], ['Known for', '"The law of the Medes and Persians"']],
    who: 'The Medes lived in the mountains of what is now northwest Iran. They grew strong in the 600s BC and helped Babylon destroy the Assyrian capital, Nineveh. Around 550 BC Cyrus of Persia took over their kingdom, and the two peoples ruled together.',
    relationship: 'Assyria deported some Israelites to the cities of the Medes. Isaiah and Jeremiah foretold that the Medes would help bring down Babylon, and Daniel saw Babylon fall to "Darius the Mede."',
    why: 'The phrase "the Medes and Persians" in Daniel and Esther comes from this partnership. Their part in Babylon\'s fall showed God keeping the promises He made through the prophets.',
    moments: [
      m('722 BC', 'Israelites from Samaria are deported to the cities of the Medes.', '2 Kings 17', '2kings', 17),
      m('c. 700 BC', 'Isaiah foretells that God will stir up the Medes against Babylon.', 'Isaiah 13', 'isaiah', 13),
      m('539 BC', 'Babylon falls, and Darius the Mede receives the kingdom.', 'Daniel 5', 'daniel', 5),
      m('c. AD 30', 'Medes hear the gospel in their own language at Pentecost.', 'Acts 2', 'acts', 2),
    ],
    ch: '2kings:17,18|ezra:6|esther:1,10|isaiah:13,21|jeremiah:25,51|daniel:5,6,8,9,11|acts:2',
  },
  {
    id: 'sheba', name: 'Sheba', title: 'Sheba (the Sabeans)', group: 'Arabia',
    tagline: 'The rich incense kingdom of southern Arabia, whose queen visited Solomon.',
    facts: [['Where', 'Southwest Arabia (modern Yemen)'], ['When', 'About 1000–100s BC at its height'], ['Known for', 'Frankincense, gold and spices']],
    who: 'Sheba was a wealthy kingdom in southern Arabia. Its people, the Sabeans, grew rich from trading frankincense, myrrh, spices and gold by camel caravan.',
    relationship: 'The Queen of Sheba traveled to Jerusalem to test Solomon\'s wisdom and praised Israel\'s God. Later the Psalms and prophets pictured the wealth of Sheba coming to honor God and His king.',
    why: 'Jesus mentioned the Queen of Sheba, "the queen of the South," who came from far away to hear Solomon, saying that "something greater than Solomon is here."',
    moments: [
      m('c. 950 BC', 'The Queen of Sheba visits Solomon with gifts and hard questions.', '1 Kings 10', '1kings', 10),
      m('Undated', 'Sabean raiders carry off Job\'s oxen and donkeys.', 'Job 1', 'job', 1),
      m('c. 700 BC', 'Isaiah foresees caravans from Sheba bringing gold and frankincense.', 'Isaiah 60', 'isaiah', 60),
      m('c. AD 28', 'Jesus says the queen of the South will judge His generation.', 'Matthew 12', 'matthew', 12),
    ],
    ch: 'genesis:10,25|1kings:10|2chronicles:9|job:1,6|psalms:72|isaiah:45,60|jeremiah:6|ezekiel:27,38|joel:3|matthew:12|luke:11',
  },
];

// Parse the compact chapter lists.
NATION_DETAILS.forEach((n) => {
  n.chapters = {};
  (n.ch || '').split('|').filter(Boolean).forEach((part) => {
    const [book, list] = part.split(':');
    n.chapters[book] = list.split(',').map(Number);
  });
  n.books = Object.keys(n.chapters);
});

export const nationById = Object.fromEntries(NATION_DETAILS.map((n) => [n.id, n]));

// Reverse index: "bookId:chapter" → nation ids, in list order.
const byChapter = {};
NATION_DETAILS.forEach((n) => {
  Object.entries(n.chapters).forEach(([book, chs]) => chs.forEach((c) => { (byChapter[`${book}:${c}`] ||= []).push(n.id); }));
});
export const nationsForChapter = (bookId, n) => byChapter[`${bookId}:${n}`] || [];
export function nationsForRange(bookId, start, end) {
  const seen = new Set();
  for (let c = start; c <= end; c++) nationsForChapter(bookId, c).forEach((id) => seen.add(id));
  return NATION_DETAILS.filter((n) => seen.has(n.id)).map((n) => n.id);
}
