// Esther at three reading levels. s = Simple, m = Moderate, d = Detailed, v = key verse, p = people.
// Book key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
export default {
  book: {
    simple: 'Queen Esther risks her life to save the Jewish people from destruction.',
    moderate: 'In Persia, a young Jewish woman named Esther becomes queen. When the wicked official Haman plots to destroy all the Jews, her cousin Mordecai urges her to plead with the king, perhaps she has come to the kingdom "for such a time as this." Esther risks her life, Haman is exposed and executed, and the Jews are saved, celebrated each year at the feast of Purim.',
    detailed: 'Esther is set in the Persian court of King Ahasuerus (Xerxes I) around 480 BC, among Jews who stayed in exile. After Queen Vashti is deposed, Esther, an orphan raised by her cousin Mordecai, is chosen as queen while hiding her Jewish identity, and Mordecai uncovers a plot against the king. When Mordecai refuses to bow to Haman, the proud official obtains a royal decree to annihilate all Jews, and Mordecai challenges Esther to act, saying deliverance will come from somewhere but perhaps she has come to royalty for such a time as this. Though God is never named, the story is full of His hidden providence: a sleepless night, perfect timing, and reversals in which Haman is hanged on his own gallows, Mordecai is exalted, and the Jews defend themselves, celebrating Purim as a lasting memorial of sorrow turned to joy.',
    verse: { ref: 'Esther 4:14', text: 'And who knows whether you have not come to the kingdom for such a time as this?' },
    themes: ['God\'s hidden providence', 'Courage to act at the right time', 'The reversal of fortunes', 'God preserves His people'],
    keyVerses: [
      { ref: '4:16', text: 'Then I will go to the king, though it is against the law, and if I perish, I perish.' },
      { ref: '9:22', text: 'As the days on which the Jews got relief from their enemies, and as the month that had been turned for them from sorrow into gladness.' },
    ],
  },
  sections: {
    1: { short: 'Vashti is deposed and Esther becomes queen; Mordecai saves the king.' },
    3: { short: 'Haman plots genocide, and Esther risks her life.' },
    6: { short: 'Haman falls, Mordecai rises, and the Jews are saved.' },
  },
  chapters: [
    { // 1
      s: 'Queen Vashti refuses the king and is removed.',
      m: 'King Ahasuerus of Persia holds a lavish six-month display of his wealth followed by a seven-day feast. When he is merry with wine, he commands Queen Vashti to come and show her beauty, but she refuses. On his advisers\' counsel, the king removes her as queen and issues a decree that every man be master of his household.',
      d: 'Ahasuerus rules 127 provinces from India to Cush, and in his third year he displays the riches of his kingdom for 180 days, then holds a seven-day banquet in the garden court of the palace in Susa with abundant royal wine. On the seventh day, merry with wine, he orders his eunuchs to bring Queen Vashti wearing her royal crown to show the peoples her beauty, but she refuses, and the king becomes furious. His wise men warn that her example will make all wives despise their husbands, so they advise that she be banished and her royal position given to someone better. The king agrees and sends letters to every province in its own language declaring that every man should be master in his own household.',
      p: [],
    },
    { // 2
      s: 'Esther becomes queen, and Mordecai uncovers a plot.',
      m: 'Young women are gathered from across the empire so the king can choose a new queen. Esther, a Jewish orphan raised by her cousin Mordecai, wins favor and is made queen, but keeps her Jewish identity secret. Mordecai discovers a plot to kill the king, Esther reports it in his name, and it is recorded in the royal chronicles.',
      d: 'When the king\'s anger subsides, his servants propose gathering beautiful young virgins from all the provinces to the harem in Susa, so that the one who pleases the king may replace Vashti. Mordecai, a Benjaminite whose family was carried into exile, has raised his orphaned cousin Hadassah, that is Esther, who is lovely and beautiful, and she is taken into the king\'s palace, where she wins the favor of Hegai and everyone who sees her. On Mordecai\'s instructions she does not reveal her people, and after a year of beauty treatments she goes to the king, who loves her more than all the women and sets the royal crown on her head. Sitting at the king\'s gate, Mordecai learns of a plot by two eunuchs to assassinate the king, tells Esther, who reports it in his name, the men are hanged, and the event is written in the book of the chronicles in the king\'s presence.',
      p: ['esther', 'mordecai'],
    },
    { // 3
      s: 'Haman plots to destroy all the Jews.',
      m: 'The king promotes Haman the Agagite above all the officials, and everyone bows to him except Mordecai. Furious, Haman decides to destroy not just Mordecai but all the Jews in the empire. He casts lots (pur) to choose a date and persuades the king to issue a decree for their annihilation.',
      d: 'Ahasuerus promotes Haman the Agagite, a descendant of Israel\'s ancient enemy Agag, and commands everyone to bow down to him, but Mordecai will not bow, having told the officials he is a Jew. Haman is filled with fury and, disdaining to lay hands on Mordecai alone, seeks to destroy all the Jews throughout the kingdom. He casts pur, that is lots, before him to choose the day, and the lot falls on the thirteenth day of the twelfth month, Adar, nearly a year away. Haman tells the king there is a certain people whose laws differ and who do not keep the king\'s laws, offers ten thousand talents of silver, and receives the king\'s signet ring, so letters go out to kill, annihilate and plunder all Jews, young and old, women and children, in one day, and while the king and Haman sit down to drink, the city of Susa is thrown into confusion.',
      p: ['mordecai', 'agag'],
    },
    { // 4
      s: 'Mordecai urges Esther to act "for such a time as this."',
      m: 'Mordecai and the Jews mourn in sackcloth throughout the empire. When Esther learns of the decree, Mordecai urges her to plead with the king, though going to him uninvited could mean death. He tells her that perhaps she has come to royal position for such a time as this, and Esther asks the Jews to fast for her, saying, "If I perish, I perish."',
      d: 'When Mordecai learns what has been done, he tears his clothes, puts on sackcloth and ashes, and cries out loudly and bitterly in the city, and in every province there is great mourning among the Jews with fasting and weeping. Esther, deeply distressed, sends her servant Hathach, and Mordecai sends back a copy of the decree and urges her to go to the king and plead for her people. Esther replies that anyone who approaches the king in the inner court without being called is put to death unless he holds out his golden scepter, and she has not been called for thirty days. Mordecai answers that she should not think she will escape because she is in the palace, for if she keeps silent, relief and deliverance will rise from another place, "And who knows whether you have not come to the kingdom for such a time as this?", and Esther tells him to gather the Jews of Susa to fast three days, after which she will go to the king, "and if I perish, I perish."',
      p: ['esther', 'mordecai'],
    },
    { // 5
      s: 'Esther invites the king and Haman to a feast, and Haman builds gallows.',
      m: 'On the third day Esther stands in the inner court, and the king holds out his scepter and offers her up to half his kingdom. She invites the king and Haman to a banquet, and then to a second one the next day. Haman leaves proud but is enraged at Mordecai, and on his wife\'s advice he builds a tall gallows to hang Mordecai.',
      d: 'On the third day Esther puts on her royal robes and stands in the inner court, and when the king sees her she wins favor, and he holds out the golden scepter, asking her request, "even to the half of my kingdom." She invites him and Haman to a feast she has prepared, and at the feast, when the king asks again, she invites them to a second feast the next day, delaying her real request. Haman goes out joyful and glad of heart, but when he sees Mordecai at the king\'s gate refusing to rise or tremble, he is filled with wrath. At home he boasts of his riches, his sons and the queen\'s invitation, yet says all this is worth nothing while Mordecai sits at the gate, so his wife Zeresh and his friends suggest a gallows fifty cubits high on which to hang Mordecai in the morning, and the idea pleases him.',
      p: ['esther', 'mordecai'],
    },
    { // 6
      s: 'The sleepless king honors Mordecai, and Haman is humiliated.',
      m: 'That night the king cannot sleep and has the royal chronicles read, discovering that Mordecai was never rewarded for saving his life. When Haman arrives to ask about hanging Mordecai, the king asks how to honor a man he delights in, and Haman, thinking it is himself, describes a royal parade. The king orders Haman to do it all for Mordecai, and Haman\'s friends warn that his downfall has begun.',
      d: 'On that night the king cannot sleep, so he orders the book of memorable deeds to be read, and it is found that Mordecai exposed the assassination plot but received no honor. Just then Haman enters the outer court to ask the king to hang Mordecai on the gallows he prepared, and the king asks him, "What should be done to the man whom the king delights to honor?" Haman, thinking, "Whom would the king delight to honor more than me?", suggests royal robes the king has worn, a horse the king has ridden, and a noble official leading him through the city square proclaiming his honor. The king tells Haman to hurry and do exactly that for Mordecai the Jew, so Haman leads Mordecai through the city, then rushes home mourning with his head covered, and his wise men and wife say that if Mordecai is of the Jewish people, he will not overcome him but will surely fall before him.',
      p: ['mordecai'],
    },
    { // 7
      s: 'Esther exposes Haman, and he is hanged on his own gallows.',
      m: 'At the second banquet, Esther reveals that she and her people have been sold to be destroyed and names Haman as the enemy. The king storms out in anger, and when he returns, Haman is pleading at Esther\'s couch. Learning of the gallows Haman built for Mordecai, the king orders Haman hanged on it.',
      d: 'At the second feast the king asks Esther again for her wish, even to half his kingdom, and she pleads for her life and the lives of her people, explaining that they have been sold to be destroyed, killed and annihilated. The king demands who would dare do this, and Esther names "this wicked Haman" as the foe and enemy, and Haman is terrified. The king rises in wrath and goes into the palace garden, and Haman stays to beg the queen for his life, falling on the couch where she reclines just as the king returns, and the king accuses him of assaulting the queen in his own house. A eunuch mentions the fifty-cubit gallows Haman prepared for Mordecai, "whose word saved the king," and the king says, "Hang him on that," so they hang Haman on the gallows he prepared for Mordecai, and the king\'s wrath subsides.',
      p: ['esther', 'mordecai'],
    },
    { // 8
      s: 'Mordecai is promoted, and a new decree lets the Jews defend themselves.',
      m: 'The king gives Haman\'s estate to Esther, and Mordecai receives the king\'s signet ring. Because a Persian law cannot be revoked, Esther pleads for her people, and Mordecai writes a new decree allowing the Jews to defend themselves on the appointed day. The Jews celebrate with feasting and gladness, and many people from other nations become Jews.',
      d: 'That day the king gives Esther the house of Haman, and Mordecai comes before the king because Esther has told what he is to her, so the king gives him the signet ring taken from Haman, and Esther sets him over Haman\'s house. Esther falls at the king\'s feet weeping and begs him to avert Haman\'s evil plan, asking, "How can I bear to see the calamity that is coming to my people?" Since an edict written in the king\'s name and sealed with his ring cannot be revoked, the king tells Esther and Mordecai to write as they please, and Mordecai sends letters by swift couriers allowing the Jews in every city to gather and defend their lives against anyone who attacks them on the thirteenth of Adar. Mordecai goes out in royal robes of blue and white with a great golden crown, the city of Susa shouts and rejoices, the Jews have light, gladness, joy and honor with feasting and a holiday, and many from the peoples of the country declare themselves Jews, for fear of the Jews has fallen on them.',
      p: ['esther', 'mordecai'],
    },
    { // 9
      s: 'The Jews defeat their enemies and celebrate Purim.',
      m: 'On the day their enemies hoped to destroy them, the Jews gain the upper hand and defend themselves, though they take no plunder. Haman\'s ten sons are killed. Mordecai and Esther establish the feast of Purim as a yearly celebration of how their sorrow turned to gladness and mourning into a holiday.',
      d: 'On the thirteenth day of Adar, the very day the enemies of the Jews hoped to gain mastery, "the reverse occurred": the Jews gather in their cities to defend themselves, and no one can stand against them, while officials help them out of fear of Mordecai, whose fame spreads throughout the provinces. In Susa they kill five hundred men and the ten sons of Haman, and at Esther\'s request the king grants another day in Susa, while in the provinces seventy-five thousand enemies are killed, yet three times the text stresses that the Jews lay no hand on the plunder. They rest on the fourteenth and fifteenth days and make them days of feasting and gladness. Mordecai writes to all the Jews to keep these days every year "as the days on which the Jews got relief from their enemies, and as the month that had been turned for them from sorrow into gladness," with gifts of food to one another and gifts to the poor, and Esther confirms the practice of Purim, named after the pur that Haman cast.',
      p: ['mordecai', 'esther'],
    },
    { // 10
      s: 'Mordecai becomes great and seeks his people\'s welfare.',
      m: 'King Ahasuerus imposes taxes throughout his empire, and his acts of power are recorded in the chronicles of Persia. Mordecai becomes second in rank to the king. He is great among the Jews and popular with his people because he seeks their welfare and speaks peace to them.',
      d: 'King Ahasuerus imposes tax on the land and on the coastlands of the sea. All his acts of power and might, and the full account of Mordecai\'s high honor, are written in the Book of the Chronicles of the kings of Media and Persia. Mordecai the Jew is second in rank to King Ahasuerus, great among the Jews and popular with the multitude of his brothers. The book ends with a picture of a leader who uses his power well, for "he sought the welfare of his people and spoke peace to all his people."',
      p: ['mordecai'],
    },
  ],
};
