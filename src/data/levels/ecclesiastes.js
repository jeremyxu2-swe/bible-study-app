// Ecclesiastes at three reading levels. s = Simple, m = Moderate, d = Detailed, p = people.
// Book key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
export default {
  book: {
    simple: 'Life "under the sun" is fleeting, so fear God and enjoy His gifts.',
    moderate: 'The Preacher, traditionally Solomon, searches for meaning in wisdom, pleasure, work and wealth, and finds that everything "under the sun" is vanity, a passing breath. Death comes to wise and foolish alike, and much of life cannot be controlled or understood. His conclusion is to enjoy life as a gift from God and to fear God and keep His commandments, for God will judge every deed.',
    detailed: 'Ecclesiastes is the reflection of "the Preacher," a son of David and king in Jerusalem, on whether anything in life gives lasting gain. He tests wisdom, pleasure, great building projects and wealth, observes the endless cycles of nature and the injustice and oppression in the world, and repeatedly concludes that all is "vanity," a vapor that cannot be grasped, especially because death erases every advantage. Yet woven through the book is another theme: there is a time for everything, God has made everything beautiful in its time and put eternity into human hearts, and the simple joys of eating, drinking, work and marriage are gifts to be received from His hand. The book ends by urging the young to remember their Creator before old age and death, and gives the conclusion of the matter: "Fear God and keep his commandments, for this is the whole duty of man," because God will bring every deed into judgment.',
    verse: { ref: 'Ecclesiastes 12:13', text: 'Fear God and keep his commandments, for this is the whole duty of man.' },
    themes: ['The fleeting nature of life under the sun', 'The limits of human wisdom and control', 'Enjoying life as God\'s gift', 'Fearing God in light of judgment'],
    keyVerses: [
      { ref: '1:2', text: 'Vanity of vanities, says the Preacher, vanity of vanities! All is vanity.' },
      { ref: '3:1', text: 'For everything there is a season, and a time for every matter under heaven.' },
      { ref: '3:11', text: 'He has made everything beautiful in its time. Also, he has put eternity into man\'s heart.' },
    ],
  },
  sections: {
    1: { short: 'All is vanity; the Preacher\'s search through wisdom and pleasure.' },
    3: { short: 'A time for everything, and the frustrations of toil and injustice.' },
    7: { short: 'Proverbs and reflections on living wisely in an uncertain world.' },
    11: { short: 'Live boldly and joyfully, remember your Creator, and fear God.' },
  },
  chapters: [
    { // 1
      s: 'Everything under the sun is vanity, a chasing after wind.',
      m: 'The Preacher declares, "Vanity of vanities! All is vanity," asking what gain people have from all their toil. Generations come and go, the sun rises and sets, and the wind and rivers cycle endlessly, yet nothing is new under the sun. He set his heart to seek wisdom, but found that it was a striving after wind, and more knowledge brings more sorrow.',
      d: 'The words of the Preacher, son of David, king in Jerusalem, begin, "Vanity of vanities, says the Preacher, vanity of vanities! All is vanity," using a word that means vapor or breath. He asks what a person gains from all his toil under the sun, observing that generations come and go while the earth remains, the sun hurries around to rise again, the wind circles, and the rivers run into a sea that is never full. "What has been is what will be, and what has been done is what will be done, and there is nothing new under the sun," and no one remembers the people of the past. The Preacher applied his heart to seek out wisdom concerning everything done under heaven and found it all "vanity and a striving after wind," concluding that "in much wisdom is much vexation, and he who increases knowledge increases sorrow."',
      p: ['solomon'],
    },
    { // 2
      s: 'Pleasure, projects and wealth cannot satisfy, but simple joys come from God.',
      m: 'The Preacher tests pleasure, laughter, wine, great building projects, wealth, servants and music, denying himself nothing. Yet when he considers it all, everything is vanity, and both the wise and the fool die and are forgotten. He concludes that there is nothing better than to eat, drink and find enjoyment in work, which is a gift from the hand of God.',
      d: 'The Preacher says to himself, "Come now, I will test you with pleasure," and tries laughter and wine while still guided by wisdom. He builds houses, plants vineyards, gardens and parks, makes pools, acquires servants, herds, silver and gold, singers and many concubines, becoming greater than all before him and withholding no pleasure from his heart. "Then I considered all that my hands had done... and behold, all was vanity and a striving after wind," and though wisdom is better than folly as light is better than darkness, the same fate of death happens to both, so he hates life and all his toil because he must leave it to someone who may be a fool. Yet he concludes, "There is nothing better for a person than that he should eat and drink and find enjoyment in his toil. This also, I saw, is from the hand of God, for apart from him who can eat or who can have enjoyment?"',
      p: ['solomon'],
    },
    { // 3
      s: 'There is a time for everything, and God has put eternity in our hearts.',
      m: 'For everything there is a season: a time to be born and a time to die, a time to weep and a time to laugh, a time for war and a time for peace. God has made everything beautiful in its time and has put eternity into human hearts, though people cannot fully understand His work. Humans and animals both die, so people should enjoy their work as their portion.',
      d: 'In a famous poem, the Preacher says, "For everything there is a season, and a time for every matter under heaven," listing fourteen pairs of opposites: a time to be born and to die, to plant and to uproot, to kill and to heal, to weep and to laugh, to mourn and to dance, to keep silent and to speak, to love and to hate, for war and for peace. "He has made everything beautiful in its time. Also, he has put eternity into man\'s heart, yet so that he cannot find out what God has done from the beginning to the end," and whatever God does endures forever, so that people fear Him. The Preacher sees wickedness in the place of justice and trusts that God will judge the righteous and the wicked in His time. Observing that humans and beasts both return to dust, and no one knows what comes after, he concludes that there is nothing better than for a person to rejoice in his work, "for that is his lot."',
      p: [],
    },
    { // 4
      s: 'Oppression, envy and loneliness, but two are better than one.',
      m: 'The Preacher sees the tears of the oppressed with no one to comfort them. He observes that much work comes from envy, and that a lonely man toils endlessly without anyone to share it. Two are better than one, for they can help each other, and a threefold cord is not quickly broken.',
      d: 'The Preacher sees all the oppressions done under the sun and the tears of the oppressed with no one to comfort them, so that he thinks the dead and the unborn are better off. He sees that all toil and skill in work come from a man\'s envy of his neighbor, yet "better is a handful of quietness than two hands full of toil and a striving after wind." He observes a man alone with no son or brother who keeps working and is never satisfied with riches, never asking whom he is toiling for. "Two are better than one, because they have a good reward for their toil," for if one falls the other can lift him up, two lying together keep warm, and two can withstand an attacker, "a threefold cord is not quickly broken," and he adds that even a popular young king is soon forgotten.',
      p: [],
    },
    { // 5
      s: 'Approach God with reverence and do not love money.',
      m: 'The Preacher warns people to guard their steps when they go to God\'s house, to listen rather than offer the sacrifice of fools, and to let their words be few. If you make a vow to God, pay it quickly. Whoever loves money will never be satisfied with it, but it is good to enjoy the work and wealth God gives, for that is His gift.',
      d: '"Guard your steps when you go to the house of God. To draw near to listen is better than to offer the sacrifice of fools," the Preacher warns, adding, "God is in heaven and you are on earth. Therefore let your words be few." When you vow a vow to God, do not delay paying it, for it is better not to vow than to vow and not pay. He notes that officials oppress the poor in layers of bureaucracy and observes, "He who loves money will not be satisfied with money," for as goods increase, so do those who eat them, and riches can be lost in a bad venture, leaving a man to depart as naked as he came. Still, "it is good and fitting to eat and drink and find enjoyment in all the toil," and when God gives someone wealth and the power to enjoy it, "this is the gift of God," keeping him occupied with joy in his heart.',
      p: [],
    },
    { // 6
      s: 'Wealth without enjoyment is empty, and no one knows what is good.',
      m: 'The Preacher sees a grievous evil: a man to whom God gives wealth and honor but not the power to enjoy them. Even someone with a hundred children and a long life is worse off than a stillborn child if he cannot be satisfied. All human toil is for the mouth, yet the appetite is never satisfied, and no one knows what is truly good for a person.',
      d: 'The Preacher describes an evil that lies heavy on mankind: a man to whom God gives wealth, possessions and honor so that he lacks nothing he desires, yet God does not give him power to enjoy them, and a stranger enjoys them instead. Even if a man fathers a hundred children and lives many years but cannot enjoy life\'s good things and has no burial, a stillborn child is better off than he. "All the toil of man is for his mouth, yet his appetite is not satisfied," and "better is the sight of the eyes than the wandering of the appetite." No one can dispute with One stronger than he, and the Preacher asks, "Who knows what is good for man while he lives the few days of his vain life, which he passes like a shadow?" and who can tell him what will be after him under the sun.',
      p: [],
    },
    { // 7
      s: 'Wise sayings about sorrow, patience and the limits of human righteousness.',
      m: 'The Preacher gives proverbs saying that a good name is better than precious ointment and the house of mourning teaches more than the house of feasting. He advises patience over pride and accepting both days of prosperity and adversity from God. He observes that there is not a righteous man on earth who never sins, and that God made people upright but they have sought out many schemes.',
      d: '"A good name is better than precious ointment, and the day of death than the day of birth," the Preacher says, adding that it is better to go to the house of mourning than to the house of feasting, because death is the end of all mankind and the living will lay it to heart. "The end of a thing is better than its beginning, and the patient in spirit is better than the proud in spirit," and one should not ask why former days were better. "In the day of prosperity be joyful, and in the day of adversity consider: God has made the one as well as the other," so that man may not find out anything that will be after him. He warns against being overly righteous or overly wicked, notes that "surely there is not a righteous man on earth who does good and never sins," and concludes from his searching, "God made man upright, but they have sought out many schemes."',
      p: [],
    },
    { // 8
      s: 'Obey the king, fear God, and accept that God\'s ways are beyond us.',
      m: 'The Preacher advises obeying the king and knowing the proper time and way to act, for no one controls the day of death. He sees injustice when sentences against evil are not carried out quickly, yet he knows it will be well with those who fear God. Since no one can fully understand God\'s work, he commends joy, for eating, drinking and being joyful will accompany a person in his toil.',
      d: 'Wisdom makes a man\'s face shine, and the Preacher advises keeping the king\'s command because of God\'s oath, for the word of the king is supreme. No one has power to retain the spirit or authority over the day of death, and there is no discharge from that war. "Because the sentence against an evil deed is not executed speedily, the heart of the children of man is fully set to do evil," he observes, yet he knows "it will be well with those who fear God," while the wicked will not prolong their days. Since the righteous sometimes get what the wicked deserve and vice versa, he commends joy as God\'s gift, and he concludes that no one, however wise, can find out the work that is done under the sun, though he claims to know.',
      p: [],
    },
    { // 9
      s: 'All share the same fate, so enjoy life and work with all your might.',
      m: 'The Preacher observes that the righteous and the wise are in God\'s hand, but the same event, death, happens to all. Therefore he urges people to eat their bread with joy, enjoy life with the wife they love, and do whatever their hand finds to do with all their might. He also notes that wisdom is better than strength, though it is often ignored.',
      d: 'The Preacher lays to heart that the righteous and the wise and their deeds are in the hand of God, yet the same event happens to the righteous and the wicked, the good and the evil, and the hearts of men are full of evil while they live, and after that they go to the dead. "But he who is joined with all the living has hope, for a living dog is better than a dead lion," for the dead know nothing and have no more share in what is done under the sun. "Go, eat your bread with joy, and drink your wine with a merry heart, for God has already approved what you do," he says, urging people to enjoy life with the wife they love and, "whatever your hand finds to do, do it with your might," for there is no work in Sheol. He observes that the race is not to the swift nor the battle to the strong, for time and chance happen to all, and tells of a poor wise man who saved a besieged city by his wisdom yet was forgotten, concluding that wisdom is better than might and weapons of war, though one sinner destroys much good.',
      p: [],
    },
    { // 10
      s: 'A little folly can spoil wisdom; wise speech and diligence matter.',
      m: 'Just as dead flies make perfume stink, a little folly outweighs wisdom and honor. The Preacher gives proverbs about foolish rulers, the risks of work, the danger of careless speech, and the decay that comes from laziness. He warns not to curse the king even in your thoughts, for a bird may carry your words.',
      d: '"Dead flies make the perfumer\'s ointment give off a stench; so a little folly outweighs wisdom and honor," the chapter begins, observing that a fool\'s lack of sense shows even as he walks on the road. The Preacher has seen folly set in high places and the rich in low places, servants on horses and princes walking like servants. Everyday tasks have risks, such as digging a pit or splitting logs, and "if the iron is blunt... he must use more strength, but wisdom helps one to succeed." "The words of a wise man\'s mouth win him favor, but the lips of a fool consume him," and through sloth the roof sinks in, so he advises not to curse the king even in thought, "for a bird of the air will carry your voice."',
      p: [],
    },
    { // 11
      s: 'Be generous and diligent, and enjoy your youth knowing God will judge.',
      m: 'The Preacher urges generosity and boldness in the face of an uncertain future: cast your bread on the waters and give a portion to many. Since no one knows how God works, people should sow their seed morning and evening. Young people are told to rejoice in their youth, but to know that God will bring them into judgment for all these things.',
      d: '"Cast your bread upon the waters, for you will find it after many days," the Preacher says, urging people to give a portion to seven or even eight, for they do not know what disaster may happen on earth. "He who observes the wind will not sow, and he who regards the clouds will not reap," and just as no one knows how the spirit comes to the bones in the womb, "so you do not know the work of God who makes everything," so one should sow in the morning and evening without holding back. "Light is sweet," and if a person lives many years, he should rejoice in them all, while remembering that the days of darkness will be many. "Rejoice, O young man, in your youth," and walk in the ways of your heart, "but know that for all these things God will bring you into judgment," and remove vexation and pain, for youth is fleeting.',
      p: [],
    },
    { // 12
      s: 'Remember your Creator in your youth; fear God and keep His commandments.',
      m: 'The Preacher urges, "Remember also your Creator in the days of your youth," before the troubles of old age and death arrive, described in vivid poetic images. When life ends, the dust returns to the earth and the spirit to God who gave it. The book concludes that the whole duty of man is to fear God and keep His commandments, for God will judge every deed, including every secret thing.',
      d: '"Remember also your Creator in the days of your youth, before the evil days come and the years draw near of which you will say, \'I have no pleasure in them,\'" the Preacher urges. He describes old age in poetic images: the keepers of the house tremble, the grinders cease because they are few, those who look through the windows are dimmed, the almond tree blossoms, and desire fails, as man goes to his eternal home and mourners go about the streets. Then the silver cord is snapped, the golden bowl is broken, "and the dust returns to the earth as it was, and the spirit returns to God who gave it," with a final cry, "Vanity of vanities, says the Preacher; all is vanity." An epilogue says the Preacher taught knowledge carefully with words of truth, given by one Shepherd, and concludes, "The end of the matter; all has been heard. Fear God and keep his commandments, for this is the whole duty of man. For God will bring every deed into judgment, with every secret thing, whether good or evil."',
      p: [],
    },
  ],
};
