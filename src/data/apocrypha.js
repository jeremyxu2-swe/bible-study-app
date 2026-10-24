// Bible Summaries › Apocrypha. Books outside the Hebrew Bible and most Protestant Bibles, summarized in the same
// format as the 66 books (book fields, sections, chapters at Simple / Moderate / Detailed, "why it was written",
// the deeper background), plus two things only these books get:
//   history  — what outside sources and archaeology confirm, and what scholars question
//   canon    — which churches include the book, and why most Bibles leave it out
// Merged into the book lookups in data/index.js (getBook, chapters, levels), so /book/:id and /book/:id/:ch work;
// the 66-book list (BOOKS) and the timelines are unchanged. Dates in 1 Maccabees follow its own Seleucid-era years.
// Tone: describe each tradition's view as it holds it, without taking sides.

const APOC = 'Apocrypha';

export const APOCRYPHA = [
  {
    id: '1maccabees', name: '1 Maccabees', testament: APOC, category: 'Apocrypha', genre: 'Historical Narrative', chapters: 16,
    apocrypha: true,
    author: 'Unknown Jewish author in Judea', written: 'c. 100 BC', years: '175–134 BC', empire: 'Seleucid kingdom (Hellenistic)',
    tagline: 'A small family of priests stands against a Greek king, wins back the temple, and leads Judea to independence.',
    summary: 'When the Seleucid king Antiochus IV bans Judaism and desecrates the temple, the priest Mattathias and his sons revolt. Judas Maccabeus retakes Jerusalem and rededicates the temple, and his brothers Jonathan and Simon go on to win Judea’s independence, ruling as high priests.',
    background: 'Written about a generation after the events by a supporter of the Hasmonean family, the dynasty founded by Simon. It is the main source for the Maccabean revolt and for Judea between the Testaments, the period Daniel 8 and 11 describe.',
    sections: [
      { title: 'Persecution & Revolt', start: 1, end: 2, years: '175–166 BC', focus: 'Antiochus IV plunders the temple, bans the Jewish law and sets up the “desolating sacrilege”; the priest Mattathias refuses to sacrifice and leads his sons into the hills.' },
      { title: 'The Temple Restored', start: 3, end: 4, years: '166–164 BC', focus: 'Judas Maccabeus defeats army after army, retakes Jerusalem, cleanses the temple and rededicates it: the first Hanukkah.' },
      { title: 'Judas Fights On', start: 5, end: 8, years: '164–161 BC', focus: 'Judas rescues Jews in Galilee and Gilead, survives the young king’s great army, defeats Nicanor and makes a treaty with Rome.' },
      { title: 'Jonathan', start: 9, end: 12, years: '160–143 BC', focus: 'After Judas falls, his brother Jonathan plays rival Seleucid kings against each other and becomes high priest, until he is captured by treachery.' },
      { title: 'Simon & Independence', start: 13, end: 16, years: '143–134 BC', focus: 'Simon wins freedom from tribute, takes the Akra fortress and is made high priest and ruler for ever, until his murder at Jericho.' },
    ],
    christ: null,

    // What is historical
    history: {
      intro: 'Historians treat 1 Maccabees as a generally reliable source, written close to the events by someone with access to records and letters. It is also openly partisan for the Hasmonean family.',
      confirmed: [
        ['The kings and their dates', 'Its Seleucid kings, rival claimants and dates match Greek historians (Polybius, Diodorus), Babylonian records and the kings’ own coins.'],
        ['Antiochus IV in Egypt and Jerusalem', 'His invasions of Egypt, the looting of the temple and Rome forcing him out of Egypt in 168 BC are also told by Polybius and Josephus.'],
        ['The persecution', 'The ban on Jewish practice and the desecration of the temple are independently described in Daniel, 2 Maccabees and Josephus.'],
        ['Antiochus’s death in Persia', 'Polybius also says he died in Persia in 164 BC after a failed attempt to rob a temple. A Babylonian king list dates his death to late 164 BC.'],
        ['Places and fortresses', 'Beth-zur, Gezer and other sites show fortifications from this time. In 2015 archaeologists in Jerusalem’s City of David uncovered walls that many identify as the Akra, the Seleucid fortress of 1:33.'],
        ['The Hasmonean rulers', 'Simon’s line ruled Judea as high priests and later as kings until Rome took over in 63 BC; their coins survive in large numbers.'],
      ],
      questioned: [
        ['Army sizes', 'Enemy armies are often very large (Lysias with 60,000 foot soldiers; Antiochus V with 100,000 and 32 elephants), which most historians think is inflated.'],
        ['Speeches, prayers and poems', 'These follow the style of ancient histories and are generally thought to be the author’s compositions, not word-for-word records.'],
        ['The empire-wide decree', '1:41–42 says Antiochus ordered his whole kingdom to give up its customs; no outside source mentions this, and the ban seems to have targeted Judea.'],
        ['Rome and Sparta', 'Its picture of Rome is idealized and partly wrong (Rome had two consuls each year, not one ruler, 8:16), and the Spartan letter claiming kinship with Abraham (12:20–23) is widely doubted.'],
        ['Antiochus’s death', 'It places his death after the rededication and gives him a deathbed regret; 2 Maccabees tells it differently, and the order of the two events is debated.'],
        ['Its point of view', 'Others who resisted, such as the Hasideans, get little credit, and leaders outside the family fail “because they were not of that family” (5:62).'],
      ],
    },

    // Why it is not in most Bibles
    canon: {
      who: [
        ['Catholic', 'Included', 'One of the deuterocanonical (“second canon”) books, confirmed at the Council of Trent in 1546.'],
        ['Eastern Orthodox', 'Included', 'Part of the Old Testament, with 2 and 3 Maccabees.'],
        ['Jewish', 'Not included', 'Not in the Hebrew Bible, though Hanukkah, which it explains, is still celebrated.'],
        ['Protestant', 'Not included', 'Placed in a separate Apocrypha section in early Protestant Bibles, and left out of most since the 1800s.'],
      ],
      s: 'It was never part of the Hebrew Bible, so most Protestant Bibles follow the Jewish canon and leave it out. Catholic and Orthodox Bibles include it.',
      reasons: [
        ['Not in the Hebrew Bible', 'The Jewish Scriptures were settled without it. It survives only in Greek, in the Greek Old Testament (the Septuagint) used by Greek-speaking Jews and the early church.'],
        ['After the prophets', 'Jewish tradition held that prophecy ended with Malachi, about 400 BC. The book itself says there was no prophet in its day (4:46; 9:27; 14:41).'],
        ['Not quoted as Scripture', 'Jesus and the apostles quote the Law, the Prophets and the Psalms, but never 1 Maccabees. Jesus does attend the Feast of Dedication it describes (John 10:22).'],
        ['Jerome and the Reformers', 'Jerome, translating the Latin Bible about AD 400, followed the Hebrew canon and called these books useful but not Scripture. Luther (1534) printed them in a separate section, as books not equal to Scripture but good and useful to read. The Church of England reads them “for example of life” but not to establish doctrine (Article 6), and the Westminster Confession (1646) excludes them.'],
        ['Why they disappeared', 'To save cost, Bible societies stopped printing the Apocrypha in the 1820s, so most Protestant Bibles since have no Apocrypha section at all.'],
      ],
      other: 'Catholic and Orthodox churches answer that the early church read the Greek Old Testament, which included these books; that many church fathers and councils (Hippo 393, Carthage 397) received them; and that the church, not the Jewish canon, settles the Christian Bible.',
      value: 'Almost all Christians agree it is valuable history: it fills the gap between the Testaments and explains the world of the Gospels, from the high priesthood and Hanukkah to Jewish hopes for a deliverer.',
    },
  },
];

// The other books of the Apocrypha, listed on the Apocrypha page (not written yet).
export const APOCRYPHA_LATER = [
  ['2 Maccabees', 'The same revolt told with martyr stories, miracles and prayer for the dead'],
  ['Tobit', 'A devout exile in Nineveh, his son’s journey and the angel Raphael'],
  ['Judith', 'A widow saves her town from an Assyrian general'],
  ['Wisdom of Solomon', 'Wisdom and the hope of immortality'],
  ['Sirach (Ecclesiasticus)', 'Proverbs and advice from a Jerusalem teacher, c. 180 BC'],
  ['Baruch', 'Confession and hope in exile, with the Letter of Jeremiah'],
  ['Additions to Esther and Daniel', 'Prayers, Susanna, and Bel and the Dragon'],
  ['1 & 2 Esdras, Prayer of Manasseh', 'In some Orthodox and older Protestant Bibles'],
];

export const APOC_CHAPTERS = {
  '1maccabees': [],
};

// Simple / Moderate / Detailed, same shape as data/levels/*.js.
export const APOC_LEVELS = {
  '1maccabees': {
    book: {
      simple: 'A Greek king bans the Jewish faith, and a priest’s sons fight back, win back the temple and free their nation.',
      moderate: 'In 167 BC the Seleucid king Antiochus IV outlawed the Jewish law and set up a pagan altar in the temple. The priest Mattathias refused to sacrifice and fled to the hills with his five sons. His son Judas Maccabeus beat army after army and rededicated the temple in 164 BC, the origin of Hanukkah. After Judas died, his brothers Jonathan and Simon used the quarrels between rival Syrian kings to win Judea’s independence in 142 BC. Simon was made high priest and ruler, founding the Hasmonean dynasty.',
      detailed: 'The book opens with Alexander the Great and the kingdoms that followed him, then narrows to Judea under the Seleucid king Antiochus IV Epiphanes. Some Jews welcomed Greek ways, building a gymnasium in Jerusalem; then Antiochus plundered the temple (169 BC), built a fortress in the city and banned the Sabbath, circumcision and the Scriptures (167 BC). In the village of Modein the priest Mattathias killed an officer enforcing a pagan sacrifice and called the faithful to follow him. His son Judas, called Maccabeus (“the Hammer”), defeated much larger Seleucid forces and rededicated the temple on 25 Kislev 164 BC. Judas fought on until he fell in battle in 160 BC. His brother Jonathan, a skilled diplomat, was made high priest in 152 BC by one Syrian king and confirmed by others, until he was captured and killed. The last brother, Simon, won freedom from tribute in 142 BC, took the Akra fortress and was named high priest, commander and ruler “for ever, until a trustworthy prophet should arise” (14:41). The book ends with Simon’s murder in 134 BC and his son John Hyrcanus taking power.',
      themes: ['Faithfulness to the covenant under persecution', 'Zeal for the law, after the model of Phinehas (2:26, 54)', 'God working through human courage, without miracles', 'The temple and its rededication', 'The rise of the Hasmonean family', 'Waiting for a true prophet (4:46; 14:41)'],
    },
    sections: {
      1: { short: 'The temple is defiled and the law banned; Mattathias revolts.' },
      3: { short: 'Judas wins against the odds and rededicates the temple.' },
      5: { short: 'Judas rescues Jews nearby, defeats Nicanor and allies with Rome.' },
      9: { short: 'Judas falls; Jonathan becomes leader and high priest.' },
      13: { short: 'Simon wins independence and founds a dynasty.' },
    },
    chapters: [
      { s: 'Antiochus IV plunders the temple, bans the Jewish law and sets up an altar to a foreign god.',
        m: 'After Alexander’s empire splits, Antiochus IV takes the Seleucid throne (175 BC). Some Jews adopt Greek ways and build a gymnasium in Jerusalem. Antiochus loots the temple after invading Egypt, builds a fortress (the Akra) in the city, and orders the Jews to give up their law. In December 167 BC the “desolating sacrilege” is set up on the altar, and those who keep the covenant are killed.',
        d: 'The chapter moves quickly from Alexander’s death to Antiochus IV, “a sinful root” (1:10). Jews who wanted to “make a covenant with the Gentiles” built a gymnasium and hid their circumcision. In 169 BC Antiochus took the golden altar, the lampstand and the temple treasures. Two years later his tax official attacked Jerusalem and fortified the City of David as a garrison. A royal decree banned sacrifices, Sabbaths and festivals, ordered pagan altars and unclean sacrifices, and made circumcision a capital crime. On 15 Kislev 167 BC the “desolating sacrilege” was built on the altar (compare Daniel 11:31). Copies of the law were burned, mothers who circumcised their babies were executed, and many chose death rather than eat unclean food.' },
      { s: 'The priest Mattathias refuses to sacrifice to idols and leads his sons into the hills.',
        m: 'In Modein, the king’s officers ask the respected priest Mattathias to sacrifice first. He refuses, kills a Jew who steps forward to do it and the officer, and flees to the hills with his five sons. After a thousand faithful Jews are killed without resisting on the Sabbath, the rebels decide to defend themselves even on the Sabbath. Before he dies, Mattathias urges his sons to be zealous for the law, naming Judas as their commander.',
        d: 'Mattathias’s five sons are named: John, Simon, Judas Maccabeus, Eleazar and Jonathan. His lament over Jerusalem echoes Lamentations. His act of zeal is compared to Phinehas (Numbers 25). The pious Hasideans join the movement, and the rebels tear down pagan altars and circumcise children by force. On his deathbed (166 BC) Mattathias recalls Abraham, Joseph, Phinehas, Joshua, Caleb, David, Elijah, Daniel and his three friends, who were faithful and were rewarded. He appoints Simon as counselor and Judas as commander.' },
      { s: 'Judas Maccabeus defeats two Seleucid generals and prepares to face a great army.',
        m: 'A poem praises Judas as a lion in battle. He kills the general Apollonius and takes his sword, then routs Seron at Beth-horon. Short of money, Antiochus goes east to collect tribute, leaving Lysias in charge with orders to wipe out Judea. Lysias sends a large army under Ptolemy, Nicanor and Gorgias, and slave traders come to buy the captives. Judas gathers the people at Mizpah to fast and pray.',
        d: 'Before the battle Judas tells his small army that victory “does not depend on the size of the army, but strength comes from Heaven” (3:19). At Mizpah the people open the book of the law, display the priestly garments and the tithes they cannot bring to the defiled temple, and cry to God. Following Deuteronomy 20, Judas sends home those who were newly married, building houses, planting vineyards or afraid. The enemy force is given as 40,000 foot soldiers and 7,000 cavalry, numbers most historians consider inflated.' },
      { s: 'Judas wins at Emmaus and Beth-zur, then cleanses and rededicates the temple.',
        m: 'Gorgias leads a night attack to surprise Judas, but Judas strikes the main camp at Emmaus instead, and Gorgias’s men flee when they see it burning. The next year Judas defeats Lysias at Beth-zur. He then cleanses the temple, builds a new altar and rededicates it on 25 Kislev 164 BC, three years after its desecration. The people celebrate for eight days and decide to keep the feast every year: Hanukkah.',
        d: 'At the temple they find the sanctuary desolate, the altar profaned and the gates burned. Judas holds off the Akra garrison while blameless priests cleanse it. Unsure what to do with the defiled altar, they store its stones on the temple mount “until a prophet should come to tell what to do with them” (4:46). They build a new altar of uncut stones, make new vessels, and light the lampstand. The book says nothing of a miracle of oil; that story comes from the later Talmud. Judas fortifies Mount Zion and Beth-zur. This chapter is the background to the Feast of Dedication that Jesus attended in John 10:22.' },
      { s: 'Judas and his brothers rescue Jews in Gilead and Galilee from hostile neighbors.',
        m: 'The surrounding peoples turn on the Jews among them. Judas fights the Idumeans and Ammonites, then goes with Jonathan to rescue the Jews of Gilead while Simon rescues those in Galilee; they bring the survivors back to Judea. Two commanders left behind, Joseph and Azariah, disobey orders, attack Jamnia and are badly defeated by Gorgias.',
        d: 'Judas’s campaigns take him across the Jordan to Bosora, Dathema and Raphon, and south to Hebron and Azotus, where he destroys pagan altars. The returning Jews are brought to Mount Zion with rejoicing. The author explains Joseph and Azariah’s defeat by saying they “did not belong to the family of those men through whom deliverance was given to Israel” (5:62), one of the clearest signs of the book’s support for the Hasmonean family. Some priests also die in battle, having gone out unwisely.' },
      { s: 'Antiochus IV dies in Persia; his young son’s army nearly crushes the Jews, then makes peace.',
        m: 'Antiochus IV fails to rob a rich temple in Elymais, hears of his armies’ defeats in Judea and dies in Persia, regretting what he did in Jerusalem. Lysias makes his young son king as Antiochus V. When Judas besieges the Akra, they invade with a huge army and elephants. At Beth-zechariah Judas’s brother Eleazar dies killing an elephant he thinks carries the king. The Jews are besieged in the temple, but Lysias must rush home to face a rival and grants them the right to live by their own laws.',
        d: 'Antiochus’s death in 164 BC is confirmed by Polybius, though 2 Maccabees 9 describes it differently, and the Babylonian king list suggests it came about the time of the rededication. The army that invades is given as 100,000 foot soldiers, 20,000 cavalry and 32 elephants. Beth-zur surrenders because a sabbatical year has left no stored food. The peace of 163/162 BC effectively ends the persecution: the king withdraws the ban on Jewish practice. But he breaks his oath by tearing down the wall around Mount Zion before leaving to defeat Philip, the rival regent.' },
      { s: 'A new king appoints a treacherous high priest; Judas defeats and kills the general Nicanor.',
        m: 'Demetrius I seizes the Seleucid throne and kills Antiochus V and Lysias. He appoints Alcimus, a pro-Greek priest, as high priest and sends Bacchides to install him. Trusting Alcimus because he is a descendant of Aaron, a group of scribes and Hasideans seek peace, and he has sixty of them killed. The general Nicanor threatens to burn the temple, but Judas defeats and kills him at Adasa on 13 Adar 161 BC, a day kept afterward as “Nicanor’s Day”.',
        d: 'Demetrius I had escaped from Rome, where he was a hostage, to claim the throne his father Seleucus IV had held. The murder of the sixty Hasideans is said to fulfill Psalm 79:2–3. Nicanor first tries to capture Judas by a trick, then fights him at Caphar-salama. Standing before the temple he swears to burn it unless Judas is handed over; the priests pray, recalling how God struck down Sennacherib’s army. After Adasa, Nicanor’s head and right hand are displayed near Jerusalem, and the land has rest “for a few days” (7:50).' },
      { s: 'Judas makes a treaty of friendship with Rome.',
        m: 'Judas hears of Rome’s power: its victories over the Gauls, Spain, Macedonia and Antiochus the Great, and its senate that meets daily. He sends Eupolemus and Jason to Rome, and the senate agrees a treaty of mutual help, written on bronze tablets. Rome warns Demetrius not to oppress its new allies.',
        d: 'The chapter’s praise of Rome reflects how it was seen from a distance before it ruled Judea: no Roman wears a crown, there is no envy among them, and “one man” rules each year. In fact Rome elected two consuls each year. Josephus also reports the treaty, and most historians accept that some such agreement was made around 161 BC, though it brought Judas no help in his last battle. Readers of the time would know that a century later Rome itself took Jerusalem (63 BC).' },
      { s: 'Judas falls in battle, and his brother Jonathan takes command.',
        m: 'Bacchides returns with a large army. At Elasa most of Judas’s men desert, leaving 800, but Judas refuses to flee and is killed (160 BC). Israel mourns, “How is the mighty fallen”. The pro-Greek party takes control, and the loyalists choose Jonathan as their leader. Jonathan wages guerrilla war from the wilderness until Bacchides makes peace, and he settles at Michmash to judge the people.',
        d: 'Judas is buried at Modein; the author says his other deeds were too many to record, echoing the books of Kings. His brother John is killed by the sons of Jambri, and Jonathan and Simon avenge him at a wedding. Bacchides fortifies towns around Judea and holds the sons of leading families as hostages in the Akra. The high priest Alcimus orders the wall of the temple’s inner court torn down, is struck by a stroke and dies (159 BC). The book’s remark that this was the worst distress since prophets stopped appearing (9:27) is one reason Jews and Protestants place the book after the age of prophecy.' },
      { s: 'Rival kings compete for Jonathan’s support, and he becomes high priest.',
        m: 'Alexander Balas, claiming to be Antiochus IV’s son, challenges Demetrius I for the throne. Both send Jonathan offers. Alexander appoints him high priest and sends him a purple robe and gold crown, and Jonathan puts on the high priest’s vestments at the Feast of Booths in 152 BC. Alexander wins, honors Jonathan at his wedding to an Egyptian princess, and makes him a general and governor. Jonathan then defeats Apollonius, a general backing the next claimant, at Azotus.',
        d: 'Demetrius’s counteroffer is extravagant: freedom from taxes, the city of Ptolemais given to the temple, Jewish troops in royal service and the release of all captives; the Jews do not trust it. Jonathan is the first of the Hasmonean family to be high priest, although the family were not from the line of Zadok that had held the office for centuries, a sore point for some, perhaps including the community at Qumran. At Azotus Jonathan burns the temple of Dagon with those who had fled into it.' },
      { s: 'Ptolemy VI turns on Alexander, and Jonathan wins favor with each new king in turn.',
        m: 'Ptolemy VI of Egypt takes Alexander’s cities, gives his daughter to the young Demetrius II, and drives Alexander out; Alexander is killed in Arabia and Ptolemy dies days later. Jonathan besieges the Akra, then wins over Demetrius II with gifts, gaining confirmation as high priest and lower taxes. When Antioch riots, Jonathan’s troops save Demetrius, who then breaks his promises. Jonathan switches to the general Trypho and the child king Antiochus VI.',
        d: 'Three Samaritan districts are added to Judea, and Simon is made governor of the coast from the Ladder of Tyre to Egypt. In a battle on the plain of Hazor Jonathan’s army is ambushed and nearly routed; only two commanders stay with him, but he rallies and wins. The chapter shows how the Hasmoneans gained ground by trading loyalty between rival claimants in the long Seleucid civil wars.' },
      { s: 'Jonathan renews ties with Rome and Sparta but is captured by Trypho.',
        m: 'Jonathan sends envoys to renew the friendship with Rome and writes to Sparta, recalling an earlier letter that called the Spartans and Jews kinsmen descended from Abraham. He turns back Demetrius II’s generals, and he and Simon strengthen Jerusalem and the countryside, building a wall to cut off the Akra. Trypho, who wants the throne himself, lures Jonathan to Ptolemais with a small guard, captures him and kills his men.',
        d: 'The letter from the Spartan king Arius (12:20–23) is widely doubted by historians as genuine, though a sense of shared ancestry between Greeks and Jews appears in other sources of the time. Simon takes Joppa as a port. Trypho fears Jonathan’s loyalty to Antiochus VI and his growing strength; his trap succeeds because Jonathan trusts his promises of friendship. All Israel mourns, and the surrounding peoples prepare to attack.' },
      { s: 'Simon takes over, wins freedom from tribute and captures the Akra.',
        m: 'Simon rallies the people and becomes leader. Trypho kills Jonathan despite receiving ransom and hostages, and then murders the boy king Antiochus VI. Simon builds a family tomb at Modein and makes peace with Demetrius II, who frees Judea from tribute in 142 BC: “the yoke of the Gentiles was removed from Israel” (13:41). Simon takes Gezer and, in 141 BC, the Akra fortress, entering it with songs and palm branches.',
        d: 'From this year the people began dating their contracts by Simon’s years as high priest and ruler, a mark of independence. The tomb at Modein had seven pyramids, for his parents and four brothers, with carved ships visible from the sea. The Akra garrison had held out for about 25 years; its fall was celebrated every year. Simon puts his son John in command at Gezer.' },
      { s: 'A poem praises Simon’s peace, and the people make him high priest and ruler for ever.',
        m: 'Demetrius II is captured by the Parthians. A poem praises Simon’s rule, when every man sat under his vine and fig tree. Rome and Sparta renew their treaties. In 140 BC the priests and people decree that Simon is to be high priest, commander and ruler for ever, “until a trustworthy prophet should arise” (14:41), and set the decree up on bronze tablets on Mount Zion.',
        d: 'The poem borrows prophetic language for messianic peace (Micah 4:4; Zechariah 8), presenting Simon’s rule as a golden age. The decree is the founding charter of the Hasmonean dynasty; its condition, “until a trustworthy prophet should arise”, leaves room for God to overrule it and shows the community knew it lived without prophets. Simon also sends Rome a golden shield weighing 1,000 minas.' },
      { s: 'Antiochus VII first courts Simon, then turns against him.',
        m: 'Antiochus VII, brother of Demetrius II, writes to Simon from abroad, confirming his privileges and granting him the right to mint coins, and returns to fight Trypho. A Roman consul sends letters to kings and cities supporting the Jews. Once he has Trypho trapped at Dor, Antiochus refuses Simon’s help, demands Joppa, Gezer and the Akra or a huge payment, and sends his general Cendebeus to harass Judea.',
        d: 'No coins of Simon have been found; the earliest known Hasmonean coins are from his successors, so the right to mint may not have been used. The Roman letter (15:16–24) lists many states, from Egypt and Parthia to Sparta and Cyprus. Simon offers 100 talents for Joppa and Gezer, arguing they were Israel’s ancestral land. Trypho escapes from Dor by ship; other sources say he died soon after.' },
      { s: 'Simon’s sons defeat Cendebeus, but Simon is murdered and his son John takes power.',
        m: 'Now old, Simon sends his sons Judas and John to fight Cendebeus, and they win near Modein. In 134 BC Simon visits Jericho, where his son-in-law Ptolemy, who wants to rule, holds a banquet in the fortress of Dok and murders Simon and two of his sons. He sends men to kill John at Gezer, but John is warned, kills the assassins and becomes high priest. The book closes by pointing to the annals of John’s rule.',
        d: 'Ptolemy son of Abubus was governor of the plain of Jericho and hoped Antiochus VII would back him. John, known as John Hyrcanus, ruled until 104 BC and expanded Judea into Idumea, Samaria and Galilee. The closing reference to “the annals of his high priesthood” (16:24) suggests the book was written after John’s rule began, probably around 100 BC.' },
    ],
  },
};
// Detailed = the Moderate paragraph plus the extra detail (the d text adds to m rather than replacing it).
APOC_LEVELS['1maccabees'].chapters = APOC_LEVELS['1maccabees'].chapters.map((c) => ({ ...c, d: c.m + ' ' + c.d }));
APOC_CHAPTERS['1maccabees'] = APOC_LEVELS['1maccabees'].chapters.map((c) => c.m);

export const APOC_PURPOSE = {
  '1maccabees': {
    s: 'To tell how God saved Israel through the Maccabee family and to show why that family should lead the nation.',
    d: 'The author wanted readers to remember how God delivered Israel when the law and the temple were nearly destroyed, and to stay faithful to the covenant whatever it cost. Written while the Hasmoneans ruled, it also explains and defends their position: the family’s zeal, courage and success show they were the ones “through whom deliverance was given to Israel” (5:62). It models itself on the history books of the Old Testament, such as Judges, Samuel and Kings, presenting the Maccabees as heirs of Israel’s judges and kings, while admitting that God had not yet sent a prophet.',
  },
};

// Detailed background, same shape as data/bookBackground/*.js.
export const APOC_BG = {
  '1maccabees': {
    authorship: 'The author is unknown: a devout Jew in Judea, almost certainly a supporter of the Hasmonean rulers. It was written in Hebrew, as Origen and Jerome knew, but only the Greek translation survives. The mention of John Hyrcanus’s annals (16:23–24) puts it after 134 BC, and most scholars date it about 100 BC, before Rome arrived in 63 BC.',
    setting: 'Written in Judea for Jewish readers living under the Hasmonean dynasty, a generation or two after the revolt, to remember the deliverance and support the ruling family.',
    context: 'Judea sat between the Seleucid kingdom of Syria and the Ptolemaic kingdom of Egypt, which fought over it for more than a century (the “king of the north” and “king of the south” of Daniel 11). Antiochus IV’s policies grew out of Greek influence on Jerusalem’s elite, rivalry over the high priesthood and his need for money after Rome’s treaty with his father. The book dates events by the Seleucid era, counted from 312/311 BC.',
    structure: [['1–2', 'The persecution and Mattathias’s revolt'], ['3–9', 'Judas Maccabeus'], ['9–12', 'Jonathan'], ['13–16', 'Simon']],
    passages: [
      { label: '1 Maccabees 1', book: '1maccabees', ch: 1, note: 'The desecration of the temple' },
      { label: '1 Maccabees 2', book: '1maccabees', ch: 2, note: 'Mattathias’s stand at Modein' },
      { label: '1 Maccabees 4', book: '1maccabees', ch: 4, note: 'The rededication: the first Hanukkah' },
      { label: '1 Maccabees 14', book: '1maccabees', ch: 14, note: 'Simon made high priest and ruler' },
      { label: 'Daniel 11', book: 'daniel', ch: 11, note: 'The same events foretold' },
      { label: 'John 10', book: 'john', ch: 10, note: 'Jesus at the Feast of Dedication' },
    ],
    christ: null,
  },
};

export const apocBySlug = Object.fromEntries(APOCRYPHA.map((b) => [b.id, b]));
