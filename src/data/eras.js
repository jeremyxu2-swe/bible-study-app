// Approximate dates; many early dates are debated. Traditional (early-Exodus) dating is used.
export const ERAS = [
  { id: 'beginnings', name: 'Creation & Flood', dates: 'Genesis 1–11', books: [], highlight: ['genesis'],
    summary: 'Creation, the fall, the first family, the flood and the tower of Babel — the backdrop for God\'s plan to bless all nations.' },
  { id: 'patriarchs', name: 'Patriarchs', dates: '~2100–1800 BC', books: ['genesis', 'job'],
    summary: 'God calls Abraham and promises land, descendants and blessing, passed down through Isaac, Jacob and Joseph.' },
  { id: 'exodus', name: 'Egypt & Exodus', dates: '~1800–1406 BC', books: ['exodus', 'leviticus', 'numbers', 'deuteronomy'],
    summary: 'Israel grows in Egypt, is enslaved, and is rescued through Moses. God gives the Law at Sinai and leads the people through the wilderness.' },
  { id: 'judges', name: 'Conquest & Judges', dates: '~1406–1050 BC', books: ['joshua', 'judges', 'ruth'],
    summary: 'Joshua leads Israel into Canaan. Afterward the tribes cycle through sin, oppression and rescue by judges.' },
  { id: 'united', name: 'United Kingdom', dates: '1050–930 BC', books: ['1samuel', '2samuel', '1chronicles', 'psalms', 'proverbs', 'ecclesiastes', 'songofsongs'],
    summary: 'Saul, David and Solomon rule a united Israel. God promises David an everlasting throne, and the temple is built.' },
  { id: 'divided', name: 'Divided Kingdom', dates: '930–586 BC', books: ['1kings', '2kings', '2chronicles', 'isaiah', 'jeremiah', 'hosea', 'joel', 'amos', 'obadiah', 'jonah', 'micah', 'nahum', 'habakkuk', 'zephaniah'],
    summary: 'The kingdom splits into Israel (north) and Judah (south). Prophets call both to return to God; Assyria destroys Israel in 722 BC and Babylon destroys Jerusalem in 586 BC.' },
  { id: 'exile', name: 'Exile', dates: '586–538 BC', books: ['lamentations', 'ezekiel', 'daniel'],
    summary: 'Judah lives in captivity in Babylon. God remains faithful and promises restoration.' },
  { id: 'return', name: 'Return & Rebuilding', dates: '538–430 BC', books: ['ezra', 'nehemiah', 'esther', 'haggai', 'zechariah', 'malachi'],
    summary: 'Under Persia the Jews return, rebuild the temple and Jerusalem\'s walls, and renew the covenant. The Old Testament closes awaiting the promised messenger.' },
  { id: 'between', name: 'Between the Testaments', dates: '430–5 BC', books: [],
    summary: 'About 400 years of prophetic silence. Greek and then Roman rule; synagogues, Pharisees and Sadducees develop.' },
  { id: 'christ', name: 'Life of Christ', dates: '~5 BC–AD 30', books: ['matthew', 'mark', 'luke', 'john'],
    summary: 'Jesus is born, teaches, heals, dies on the cross and rises again — the fulfillment of the Old Testament promises.' },
  { id: 'church', name: 'Early Church', dates: 'AD 30–100', books: ['acts', 'romans', '1corinthians', '2corinthians', 'galatians', 'ephesians', 'philippians', 'colossians', '1thessalonians', '2thessalonians', '1timothy', '2timothy', 'titus', 'philemon', 'hebrews', 'james', '1peter', '2peter', '1john', '2john', '3john', 'jude', 'revelation'],
    summary: 'The Holy Spirit comes at Pentecost and the gospel spreads from Jerusalem to Rome. The apostles write letters to guide the churches.' },
];

export const EMPIRES = [
  { id: 'bronze', name: 'Bronze Age', dates: 'c. 2100–1200 BC', flex: 2.6 },
  { id: 'iron', name: 'Regional Kingdoms', dates: 'c. 1200–853 BC', flex: 1.6 },
  { id: 'assyria', name: 'Assyria', dates: '911–609 BC', flex: 1 },
  { id: 'babylon', name: 'Babylon', dates: '626–539 BC', flex: 0.8 },
  { id: 'persia', name: 'Persia', dates: '539–332 BC', flex: 1 },
  { id: 'hellenistic', name: 'Greeks', dates: '332–63 BC', flex: 0.9 },
  { id: 'rome', name: 'Rome', dates: '63 BC onward', flex: 2 },
];

// Fuller "Period summary" text and the nations active in each period (ids from nations.js).
// Dates follow the same traditional (early-Exodus) chronology as the eras above.
export const ERA_MORE = {
  beginnings: {
    detail: [
      'God creates the heavens and the earth and makes man and woman in His image, placing them in the garden of Eden. When Adam and Eve disobey, sin, the curse and death enter the world, but God promises that the woman\'s offspring will one day crush the serpent (Genesis 3:15).',
      'Cain murders Abel, and violence spreads until God sends the flood, saving Noah, his family and the animals in the ark and making a covenant never to flood the earth again. Noah\'s descendants spread out into the nations, and at Babel proud people try to make a name for themselves until God confuses their language and scatters them. This sets the stage for God\'s call of Abram.',
    ],
    nations: ['cushites', 'canaanites', 'hittites', 'amorites', 'jebusites'],
  },
  patriarchs: {
    detail: [
      'Around 2091 BC God calls Abram to leave his homeland for Canaan, promising land, countless descendants and blessing for all the families of the earth. God makes a covenant with him, renames him Abraham, and in their old age gives him and Sarah a son, Isaac, after Ishmael is born to Hagar. Sodom is destroyed, and Abraham\'s faith is tested on Mount Moriah.',
      'Isaac marries Rebekah, and their son Jacob takes the birthright and blessing from Esau, flees to Laban, marries Leah and Rachel, and has twelve sons. After wrestling with God he is renamed Israel. Joseph is sold by his brothers into Egypt, rises to second in the land, and saves his family in a great famine; around 1876 BC Jacob\'s household settles in Goshen. The story of Job is usually placed in this era.',
    ],
    nations: ['canaanites', 'hittites', 'amorites', 'perizzites', 'hivites', 'philistines', 'ishmaelites', 'edomites', 'moabites', 'ammonites', 'midianites'],
  },
  exodus: {
    detail: [
      'Israel multiplies in Egypt until a new pharaoh enslaves them. Moses, rescued from the Nile and raised in Pharaoh\'s court, flees to Midian, where God speaks from the burning bush and reveals His name. Through ten plagues and the Passover, God brings Israel out of Egypt (about 1446 BC) and through the Red Sea.',
      'At Mount Sinai God gives the Ten Commandments and makes His covenant with Israel; despite the golden calf, the tabernacle is built and filled with His glory, and Leviticus sets out the sacrifices and the call to holiness. When the people refuse to enter Canaan after the spies\' report, they wander forty years in the wilderness. On the plains of Moab, Moses renews the covenant with the new generation in Deuteronomy and dies on Mount Nebo around 1406 BC.',
    ],
    nations: ['amalekites', 'midianites', 'edomites', 'moabites', 'amorites', 'kenites', 'cushites', 'canaanites'],
  },
  judges: {
    detail: [
      'Joshua leads Israel across the Jordan around 1406 BC. Jericho falls, Rahab is spared, and campaigns in the south and north break Canaanite power. The land is divided among the tribes, and Joshua challenges the people: "as for me and my house, we will serve the LORD."',
      'After Joshua dies, the tribes fail to drive out the Canaanites and turn to the Baals. A cycle repeats: Israel sins, God hands them to oppressors, they cry out, and He raises up judges such as Othniel, Ehud, Deborah and Barak, Gideon, Jephthah and Samson. The book of Judges ends in moral chaos, "everyone did what was right in his own eyes," while the story of Ruth shows quiet faithfulness in the same dark days and leads to King David\'s family line.',
    ],
    nations: ['canaanites', 'amorites', 'jebusites', 'hivites', 'perizzites', 'philistines', 'moabites', 'midianites', 'ammonites', 'amalekites', 'kenites'],
  },
  united: {
    detail: [
      'Samuel judges Israel until the people demand a king "like all the nations." Saul is anointed around 1050 BC but rejected for disobedience, and God chooses David, a shepherd after His own heart, who defeats Goliath and spends years fleeing Saul. After Saul dies on Mount Gilboa, David becomes king, first over Judah at Hebron and then over all Israel, captures Jerusalem and brings the ark there. God promises David a house and a throne that will last forever (2 Samuel 7), but David\'s sin with Bathsheba brings turmoil, including Absalom\'s revolt.',
      'Solomon, who becomes king around 970 BC, asks God for wisdom, builds the temple and brings Israel to its height of wealth and fame; Psalms, Proverbs, Ecclesiastes and Song of Songs come from this golden age. But Solomon\'s many foreign wives turn his heart to other gods, and God announces that the kingdom will be torn apart after his death in 930 BC.',
    ],
    nations: ['philistines', 'amalekites', 'ammonites', 'moabites', 'edomites', 'arameans', 'jebusites', 'phoenicians', 'sheba', 'hittites'],
  },
  divided: {
    detail: [
      'When Rehoboam answers the people harshly, the ten northern tribes break away under Jeroboam, who sets up golden calves at Bethel and Dan. The northern kingdom, Israel, has a series of unstable dynasties and no faithful kings; under Ahab and Jezebel Baal worship spreads, and Elijah and Elisha confront it. Amos and Hosea warn Israel, and Jonah is sent to Nineveh. In 722 BC Assyria destroys Samaria and exiles the northern tribes.',
      'The southern kingdom, Judah, keeps David\'s line on the throne. Some kings, like Hezekiah and Josiah, lead reform, and God delivers Jerusalem from Sennacherib in 701 BC, but others, like Manasseh, lead the nation into deep idolatry. Isaiah, Micah, Jeremiah and other prophets call Judah back to God. Babylon rises, carries off captives in 605 and 597 BC, and finally destroys Jerusalem and the temple in 586 BC.',
    ],
    nations: ['arameans', 'phoenicians', 'moabites', 'edomites', 'ammonites', 'philistines', 'cushites', 'samaritans'],
  },
  exile: {
    detail: [
      'Judah lives as captives in Babylon. Lamentations mourns the fallen city, and Jeremiah writes to the exiles to settle down and seek the welfare of Babylon, promising return after seventy years. Among the exiles, Ezekiel sees visions of God\'s glory leaving the temple, but also of dry bones coming to life, a new heart and a new temple.',
      'In Babylon\'s royal court, Daniel and his friends stay faithful: they refuse the king\'s food, survive the fiery furnace, and Daniel interprets Nebuchadnezzar\'s dreams. The handwriting on the wall announces Babylon\'s fall to the Medes and Persians in 539 BC, and under the new rulers Daniel is delivered from the lions and receives visions of the kingdoms to come and of "one like a son of man."',
    ],
    nations: ['medes', 'edomites', 'ammonites', 'moabites', 'philistines', 'phoenicians'],
  },
  return: {
    detail: [
      'In 538 BC Cyrus of Persia allows the Jews to go home. The first group returns under Zerubbabel and Jeshua and lays the temple\'s foundation, but opposition stops the work until Haggai and Zechariah stir the people to finish it in 516 BC. In Persia, Esther risks her life to save her people from Haman\'s plot.',
      'Ezra returns in 458 BC to teach God\'s Law, and Nehemiah arrives in 445 BC to rebuild Jerusalem\'s walls in just fifty-two days despite fierce opposition. The people renew the covenant, but Malachi soon rebukes their careless worship and broken marriages. The Old Testament closes with God\'s promise to send His messenger and the prophet Elijah before the day of the LORD.',
    ],
    nations: ['samaritans', 'ammonites', 'medes', 'amalekites', 'moabites', 'edomites'],
  },
  between: {
    detail: [
      'For about four hundred years no new Scripture is written. Persia gives way to Alexander the Great in 331 BC, and Greek language and culture spread across the region; the Hebrew Scriptures are translated into Greek (the Septuagint). After Alexander, Egypt\'s Ptolemies and Syria\'s Seleucids fight over Judea.',
      'In 167 BC the Seleucid king Antiochus IV desecrates the temple, sparking the Maccabean revolt; the temple is rededicated in 164 BC, remembered at Hanukkah. Rome takes Jerusalem in 63 BC, and Herod the Great becomes king and rebuilds the temple. Synagogues, Pharisees and Sadducees develop, and Roman roads and peace prepare the way for the gospel in "the fullness of time" (Galatians 4:4).',
    ],
    nations: ['edomites', 'samaritans'],
  },
  christ: {
    detail: [
      'Jesus is born in Bethlehem around 5 BC, during the reigns of Caesar Augustus and Herod the Great, and grows up in Nazareth. John the Baptist prepares the way, and Jesus is baptized, tempted in the wilderness and calls twelve disciples. For about three years He teaches about the kingdom of God, heals the sick, forgives sinners and welcomes outsiders, while opposition from the religious leaders grows.',
      'After Peter confesses Him as the Christ, Jesus sets His face toward Jerusalem. He enters the city as King, shares the Last Supper with His disciples, and is betrayed, tried and crucified under Pontius Pilate around AD 30. On the third day He rises from the dead, appears to His followers for forty days, gives the Great Commission, and ascends to the Father.',
    ],
    nations: ['samaritans', 'canaanites', 'phoenicians'],
  },
  church: {
    detail: [
      'At Pentecost the Holy Spirit comes, Peter preaches, and about three thousand believe. The church grows in Jerusalem, then scatters after Stephen\'s death, carrying the gospel to Samaria and beyond. Saul the persecutor meets the risen Jesus and becomes Paul, and Peter sees the Spirit given to the Gentile Cornelius.',
      'From Antioch, Paul\'s missionary journeys plant churches across Galatia, Macedonia, Greece and Asia, and his letters guide them. Arrested in Jerusalem, he eventually reaches Rome. Under Nero, persecution breaks out, and Peter and Paul are martyred in the 60s; Rome destroys the temple in AD 70. Near the end of the century, John, exiled on Patmos, receives the Revelation of the risen Christ\'s final victory.',
    ],
    nations: ['samaritans', 'cushites', 'phoenicians', 'medes'],
  },
};
