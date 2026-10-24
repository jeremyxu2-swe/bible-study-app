// Ezra at three reading levels. s = Simple, m = Moderate, d = Detailed, v = key verse, p = people.
// Book key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
export default {
  book: {
    simple: 'The exiles return to Jerusalem, rebuild the temple, and Ezra calls them back to God\'s law.',
    moderate: 'Ezra tells how God moved Cyrus of Persia to let the Jews return home and rebuild the temple. Despite opposition and delays, the temple is finished with the encouragement of the prophets Haggai and Zechariah. Decades later, Ezra the scribe returns to teach God\'s law and leads the people to repent of marrying idol-worshiping neighbors.',
    detailed: 'Ezra opens where Chronicles ends, with Cyrus\'s decree in 538 BC allowing the Jews to return and rebuild the house of the LORD. About fifty thousand return under Zerubbabel and Jeshua, rebuild the altar, and lay the temple foundation amid shouts and tears, but local enemies discourage them and the work stops for years until the prophets Haggai and Zechariah stir them up and King Darius confirms the decree, and the temple is completed in 516 BC. In the second half, about sixty years later, Ezra, a scribe skilled in the Law of Moses who "set his heart to study the Law of the LORD, and to do it, and to teach," leads a second group to Jerusalem with the support of Artaxerxes. He discovers that many, including leaders, have intermarried with the surrounding peoples, prays a heartbroken prayer of confession, and the people make a covenant to put away their foreign wives, showing the costly call to holiness for a community rebuilding its identity.',
    verse: { ref: 'Ezra 7:10', text: 'For Ezra had set his heart to study the Law of the LORD, and to do it and to teach his statutes and rules in Israel.' },
    themes: ['God keeps His promise to restore', 'Rebuilding worship at the center', 'Perseverance amid opposition', 'Repentance and holiness'],
    keyVerses: [
      { ref: '3:11', text: 'For he is good, for his steadfast love endures forever toward Israel.' },
      { ref: '6:22', text: 'For the LORD had made them joyful and had turned the heart of the king of Assyria to them.' },
      { ref: '9:6', text: 'O my God, I am ashamed and blush to lift my face to you, my God, for our iniquities have risen higher than our heads.' },
    ],
  },
  sections: {
    1: { short: 'Exiles return under Zerubbabel and rebuild the temple despite opposition.' },
    7: { short: 'Ezra returns, teaches the law, and calls the people to repent.' },
  },
  chapters: [
    { // 1
      s: 'Cyrus lets the Jews return to rebuild the temple.',
      m: 'In the first year of Cyrus, king of Persia, God stirs his spirit to fulfill Jeremiah\'s prophecy. Cyrus proclaims that the God of heaven has charged him to build a temple in Jerusalem and invites the Jews to return. The people prepare to go, and Cyrus returns the temple vessels Nebuchadnezzar had taken.',
      d: 'To fulfill the word spoken by Jeremiah, the LORD stirs up the spirit of Cyrus king of Persia, who issues a written proclamation throughout his kingdom. He declares that the LORD, the God of heaven, has given him all the kingdoms of the earth and charged him to build Him a house at Jerusalem, and that any of God\'s people may go up, with their neighbors supporting them with silver, gold, goods and offerings. The heads of Judah and Benjamin, the priests and the Levites, "everyone whose spirit God had stirred," rise to go up and rebuild. Cyrus brings out 5,400 gold and silver vessels Nebuchadnezzar had carried away and entrusts them to Sheshbazzar, the prince of Judah.',
      p: ['cyrus', 'jeremiah', 'nebuchadnezzar'],
    },
    { // 2
      s: 'A list of the families who returned.',
      m: 'This chapter lists those who returned from exile with Zerubbabel and Jeshua, family by family. It includes priests, Levites, singers, gatekeepers and temple servants, as well as some who could not prove their ancestry. In all, about fifty thousand people return and give freewill offerings for rebuilding the temple.',
      d: 'The chapter records the people of the province who came up from captivity under Zerubbabel, Jeshua, Nehemiah and other leaders, listed by family and by hometown. Priests, Levites, singers, gatekeepers, temple servants and descendants of Solomon\'s servants are counted separately. Some families and priests cannot prove their genealogy, and the priests among them are excluded from eating holy food until a priest with Urim and Thummim arises. The whole assembly numbers 42,360, plus over seven thousand servants and two hundred singers, and when they arrive, some heads of families give freewill offerings to rebuild the house of God on its site.',
      p: [],
    },
    { // 3
      s: 'The altar is rebuilt and the temple foundation is laid.',
      m: 'In the seventh month the people gather in Jerusalem, rebuild the altar, and begin offering sacrifices and keeping the Feast of Booths. In the second year they lay the foundation of the temple. The people shout for joy, while older people who remember Solomon\'s temple weep aloud.',
      d: 'In the seventh month the people gather as one man in Jerusalem, and Jeshua and Zerubbabel build the altar on its foundation, despite their fear of the surrounding peoples, and offer morning and evening burnt offerings as written in the Law of Moses. They keep the Feast of Booths and the appointed feasts, though the temple foundation is not yet laid, and they hire masons and order cedar from Lebanon as Cyrus allowed. In the second year, the Levites oversee the work, and when the builders lay the foundation, the priests with trumpets and Levites with cymbals praise the LORD as David directed, singing, "For he is good, for his steadfast love endures forever toward Israel." All the people shout with a great shout, but many old priests and leaders who had seen the first house weep with a loud voice, so that no one can distinguish the sound of joy from the sound of weeping.',
      p: ['david', 'cyrus'],
    },
    { // 4
      s: 'Enemies oppose the rebuilding, and the work stops.',
      m: 'The surrounding peoples offer to help build, but Zerubbabel refuses because they worship other gods too. They then discourage the builders, bribe officials and write accusing letters to the Persian kings. Eventually King Artaxerxes orders the work stopped, and the temple building halts until the reign of Darius.',
      d: 'Adversaries of Judah and Benjamin, descendants of peoples resettled by Assyria, ask to help build, claiming they worship the same God, but Zerubbabel and Jeshua refuse, saying the work belongs to them as Cyrus commanded. The people of the land then discourage and frighten the builders and hire counselors to frustrate their purpose through the reigns of Cyrus and Darius. The writer includes later examples of opposition, including a letter to Artaxerxes accusing Jerusalem of being a rebellious city that will stop paying taxes if its walls are rebuilt. Artaxerxes orders the work stopped, and the narrative returns to note that the work on the house of God ceased until the second year of Darius king of Persia.',
      p: ['cyrus'],
    },
    { // 5
      s: 'Haggai and Zechariah stir the people to resume building.',
      m: 'The prophets Haggai and Zechariah prophesy to the Jews, and Zerubbabel and Jeshua begin building again. Tattenai, the regional governor, questions who authorized the work and writes to King Darius. But the eye of God is on the elders, and the work continues while they wait for a reply.',
      d: 'Haggai and Zechariah prophesy in the name of the God of Israel, and Zerubbabel and Jeshua arise and begin rebuilding the house of God, with the prophets helping them. Tattenai, governor of the province Beyond the River, comes and asks who gave them a decree to build and who the builders are. "But the eye of their God was on the elders of the Jews," and the work is not stopped while a report goes to Darius. The letter quotes the Jews\' answer: they are servants of the God of heaven and earth, rebuilding the house that their fathers\' sin led Nebuchadnezzar to destroy, and Cyrus himself decreed its rebuilding, so they ask the king to search the royal archives.',
      p: ['cyrus', 'nebuchadnezzar'],
    },
    { // 6
      s: 'Darius confirms the decree, and the temple is finished.',
      m: 'Darius finds Cyrus\'s original decree and orders that the work continue, paid for from royal taxes. The temple is finished in the sixth year of Darius, and the people dedicate it with joy. They then celebrate the Passover, rejoicing because the LORD had turned the king\'s heart to help them.',
      d: 'Darius orders a search, and a scroll is found at Ecbatana recording Cyrus\'s decree that the house be rebuilt with its costs paid from the royal treasury and the vessels returned. Darius commands Tattenai to let the work alone, to pay the builders in full from the royal revenue, and to provide whatever is needed for sacrifices, so the Jews may pray for the life of the king, with severe penalties for anyone who alters this edict. The elders build and prosper through the prophesying of Haggai and Zechariah, and the house is finished in the sixth year of Darius, 516 BC, and dedicated with joy and offerings, including twelve goats for the twelve tribes. The returned exiles, joined by those who separated themselves from the uncleanness of the nations, keep the Passover and the Feast of Unleavened Bread with joy, "for the LORD had made them joyful."',
      p: ['cyrus'],
    },
    { // 7
      s: 'Ezra comes to Jerusalem to teach God\'s law.',
      m: 'Many years later, Ezra, a priest and scribe skilled in the Law of Moses, travels from Babylon to Jerusalem. He had set his heart to study the law, do it and teach it. King Artaxerxes sends him with a letter granting gold, silver and authority to teach and appoint judges, and Ezra praises God for His hand upon him.',
      d: 'In the reign of Artaxerxes, Ezra, a descendant of Aaron and a scribe skilled in the Law of Moses, goes up from Babylon, and the king grants all he asks, "for the hand of the LORD his God was on him." He arrives in Jerusalem after a four-month journey because "Ezra had set his heart to study the Law of the LORD, and to do it and to teach his statutes and rules in Israel." The chapter includes Artaxerxes\' letter authorizing any Israelite to go with Ezra, sending silver and gold for offerings, exempting temple workers from taxes, and empowering Ezra to appoint judges who know God\'s law and teach those who do not. Ezra blesses the LORD, who put it into the king\'s heart to beautify the house of the LORD and extended steadfast love to him before the king.',
      p: ['ezra', 'aaron', 'moses'],
    },
    { // 8
      s: 'Ezra leads a group to Jerusalem under God\'s protection.',
      m: 'Ezra gathers a group of returning families and recruits Levites to serve in the temple. Ashamed to ask the king for soldiers after saying God protects those who seek Him, he proclaims a fast and prays for a safe journey. God protects them from enemies, and they arrive safely with the temple treasures.',
      d: 'Ezra lists the family heads who go up with him and, finding no Levites at the river Ahava, sends for some, and by God\'s good hand they bring men of discretion and temple servants. He proclaims a fast to humble themselves before God and seek a safe journey, because he was ashamed to ask the king for soldiers after telling him, "The hand of our God is for good on all who seek him." God listens to their entreaty, and Ezra entrusts the silver, gold and vessels to twelve leading priests, weighing everything carefully. The God who delivered them from enemies and ambushes along the way brings them safely to Jerusalem, where the treasures are weighed again and the returned exiles offer burnt offerings to the God of Israel.',
      p: ['ezra'],
    },
    { // 9
      s: 'Ezra is grieved by mixed marriages and prays in confession.',
      m: 'Leaders tell Ezra that many people, including priests and Levites, have married women from the surrounding nations who practice their abominations. Ezra tears his clothes, pulls out his hair and sits appalled until the evening sacrifice. Then he falls on his knees and prays a heartfelt confession of Israel\'s guilt, acknowledging God\'s mercy in leaving a remnant.',
      d: 'The officials report that the people of Israel, the priests and the Levites have not separated themselves from the peoples of the lands and their abominations, having taken their daughters as wives, so that the holy race has mixed itself, with the leaders foremost in this faithlessness. Ezra tears his garment and cloak, pulls hair from his head and beard, and sits appalled while those who tremble at God\'s words gather around him. At the evening sacrifice he falls on his knees, spreads out his hands, and prays, "O my God, I am ashamed and blush to lift my face to you," confessing that their guilt has mounted to the heavens since their fathers\' days. He acknowledges that God has shown favor in leaving a remnant and giving them a secure hold in His holy place, and asks how they can break His commandments again, admitting, "We are before you in our guilt, for none can stand before you because of this."',
      p: ['ezra'],
    },
    { // 10
      s: 'The people confess and agree to put away foreign wives.',
      m: 'As Ezra weeps and confesses, a large crowd gathers and weeps with him. Shecaniah proposes a covenant to send away the foreign wives and their children, and the people agree. In the cold rain, the assembly confesses, and a process investigates each case; the chapter ends with a list of those who had married foreign women.',
      d: 'While Ezra prays and weeps before the house of God, a very great assembly of men, women and children gathers and weeps bitterly. Shecaniah confesses their unfaithfulness but says there is still hope for Israel, proposing a covenant to put away the foreign wives and their children according to the law, and urges Ezra, "Arise, for it is your task, and we are with you; be strong and do it." All the men of Judah and Benjamin assemble in Jerusalem within three days and sit trembling in the open square in heavy rain, and Ezra calls them to confess and separate themselves, and they agree, asking for an orderly process because the matter is large. Over three months, officials examine each case, and the chapter lists those who had married foreign women, including priests, Levites and laymen, showing how seriously the community took its call to covenant faithfulness.',
      p: ['ezra'],
    },
  ],
};
