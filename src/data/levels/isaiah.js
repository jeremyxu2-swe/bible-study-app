// Isaiah at three reading levels. s = Simple, m = Moderate, d = Detailed, p = people.
// Book key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
import more from './isaiah.b.js';
import more2 from './isaiah.c.js';

export default {
  book: {
    simple: 'The Holy One of Israel judges sin and promises a Savior and a new creation.',
    moderate: 'Isaiah prophesied in Judah during the Assyrian crisis, warning a sinful nation and its kings of coming judgment. He also announced hope: a child named Immanuel, a righteous King from David\'s line, comfort after exile, and a Suffering Servant who would bear the sins of many. The book ends with a vision of new heavens and a new earth, where all nations worship the LORD.',
    detailed: 'Isaiah son of Amoz ministered in Jerusalem for about forty years under Uzziah, Jotham, Ahaz and Hezekiah, and his call began with a vision of the LORD, "holy, holy, holy," high and lifted up. Chapters 1–39 confront Judah\'s rebellion, social injustice and reliance on foreign alliances, pronounce judgment on the surrounding nations, and record God\'s deliverance of Jerusalem from Assyria, while promising a coming King: Immanuel, the child called Wonderful Counselor and Mighty God, the shoot from Jesse\'s stump. Chapters 40–55 speak comfort to exiles in Babylon, proclaiming God as the only Creator and Redeemer, naming Cyrus as His instrument, and portraying the Servant of the LORD who will be pierced for our transgressions and bring salvation to the ends of the earth. Chapters 56–66 call God\'s people to true righteousness and look ahead to Zion\'s glory and new heavens and a new earth, and the New Testament quotes Isaiah more than any other prophet, seeing it fulfilled in Jesus.',
    verse: { ref: 'Isaiah 53:5', text: 'But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed.' },
    themes: ['The holiness of God', 'Judgment and the remnant', 'The coming King and Suffering Servant', 'Comfort, salvation and new creation'],
    keyVerses: [
      { ref: '6:3', text: 'Holy, holy, holy is the LORD of hosts; the whole earth is full of his glory!' },
      { ref: '9:6', text: 'For to us a child is born, to us a son is given; and the government shall be upon his shoulder.' },
      { ref: '40:31', text: 'But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles.' },
    ],
  },
  sections: {
    1: { short: 'Judah\'s sin, Isaiah\'s call, and promises of Immanuel and the coming King.' },
    13: { short: 'God\'s judgments on Babylon, Assyria, Egypt and other nations.' },
    24: { short: 'Worldwide judgment and the final victory feast of God.' },
    28: { short: 'Woes on those who trust Egypt instead of the LORD.' },
    36: { short: 'Hezekiah trusts God and Jerusalem is spared from Assyria.' },
    40: { short: 'Comfort for exiles and the Servant who suffers for many.' },
    56: { short: 'Zion\'s future glory and new heavens and a new earth.' },
  },
  chapters: [
    { // 1
      s: 'God calls rebellious Judah to repent and promises cleansing.',
      m: 'God accuses Judah of rebelling like children who do not know their father, leaving the land devastated. He rejects their sacrifices and festivals because their hands are full of blood and injustice. He invites them to reason together, promising that though their sins are like scarlet, they shall be white as snow if they turn and obey.',
      d: 'Isaiah\'s vision during the reigns of Uzziah, Jotham, Ahaz and Hezekiah begins with God calling heaven and earth to hear: "Children have I reared and brought up, but they have rebelled against me," while even an ox knows its owner. Judah is sick from head to foot, its cities burned, and Zion left like a shelter in a field, and God says He is weary of their sacrifices, new moons and feasts because their hands are full of blood. "Wash yourselves; make yourselves clean... learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow\'s cause," He commands, inviting, "Come now, let us reason together... though your sins are like scarlet, they shall be as white as snow." He laments that the faithful city has become a whore, full of corrupt rulers, and promises to purge her dross and restore her judges, so that Zion will be called the city of righteousness, while rebels and sinners will be broken.',
      p: ['isaiah', 'hezekiah'],
    },
    { // 2
      s: 'All nations will stream to God\'s mountain, but the proud will be humbled.',
      m: 'Isaiah sees a future day when the mountain of the LORD\'s house will be raised up and all nations will come to learn His ways. They will beat their swords into plowshares and learn war no more. But first, the Day of the LORD will humble everything proud and lofty, and people will throw away their idols.',
      d: 'Isaiah sees that in the latter days the mountain of the house of the LORD will be established as the highest mountain, and all nations will flow to it, saying, "Come, let us go up to the mountain of the LORD... that he may teach us his ways." The law will go out from Zion, God will judge between nations, and "they shall beat their swords into plowshares, and their spears into pruning hooks; nation shall not lift up sword against nation, neither shall they learn war anymore." But for now Jacob is full of foreign practices, silver, gold, horses and idols, so a day is coming when "the haughty looks of man shall be brought low," and the LORD alone will be exalted against everything proud, from cedars of Lebanon to high towers and ships of Tarshish. People will throw their idols to the moles and bats and hide in caves from the terror of the LORD, so Isaiah warns, "Stop regarding man in whose nostrils is breath."',
      p: ['isaiah'],
    },
    { // 3
      s: 'God will remove Judah\'s leaders and judge its proud women.',
      m: 'Because Jerusalem has defied the LORD, He will take away its supplies of bread and water and its leaders, soldiers and advisers. Children and incompetent people will rule, and society will collapse. God enters into judgment with the leaders who have crushed the poor, and He condemns the proud daughters of Zion who flaunt their finery.',
      d: 'The Lord is about to take away from Jerusalem and Judah all support and supply of bread and water, along with the mighty man, soldier, judge, prophet, elder and counselor. He will make boys their princes, people will oppress each other, and someone will beg his brother to rule over the ruins, because their speech and deeds are against the LORD and they parade their sin like Sodom. Yet Isaiah adds, "Tell the righteous that it shall be well with them," while woe comes to the wicked. The LORD stands to judge the elders and princes who have devoured the vineyard and ground the faces of the poor, and He condemns the haughty daughters of Zion, walking with outstretched necks and tinkling ankles, stripping away their anklets, perfumes and fine robes so that instead of beauty there will be branding and mourning.',
      p: ['isaiah'],
    },
    { // 4
      s: 'A cleansed remnant will be holy, sheltered by God\'s glory.',
      m: 'After the judgment, so many men will have died that seven women will take hold of one man. In that day the Branch of the LORD will be beautiful and glorious, and the survivors in Zion will be called holy. God will cleanse Jerusalem and cover it with a cloud by day and fire by night as a canopy of protection.',
      d: 'In the aftermath of judgment, seven women will take hold of one man, begging to be called by his name to remove their disgrace, showing how devastating the war will be. "In that day the branch of the LORD shall be beautiful and glorious," a title later used for the Messiah, and the fruit of the land will be the pride of Israel\'s survivors. Everyone who is left in Zion and remains in Jerusalem will be called holy, after the Lord has washed away the filth of the daughters of Zion by a spirit of judgment and burning. Then the LORD will create over Mount Zion a cloud by day and smoke and a flaming fire by night, recalling the Exodus, as a canopy and shelter from heat, storm and rain.',
      p: ['isaiah'],
    },
    { // 5
      s: 'The song of the vineyard and six woes on Judah\'s sins.',
      m: 'Isaiah sings of a beloved who carefully planted a vineyard but it produced only wild grapes, so he will let it be destroyed. The vineyard is Israel, and God looked for justice and righteousness but found bloodshed and an outcry. Six woes follow against greed, drunkenness, mocking God, calling evil good, pride and corruption, and a distant nation is summoned to bring judgment.',
      d: 'Isaiah sings a love song about his beloved\'s vineyard on a fertile hill, which he cleared, planted with choice vines and protected with a tower, but it yielded only wild grapes. The beloved asks what more he could have done and announces he will remove its hedge and let it be trampled, then the meaning is revealed: "The vineyard of the LORD of hosts is the house of Israel... and he looked for justice, but behold, bloodshed; for righteousness, but behold, an outcry!" Six woes follow, against those who join house to house and field to field, those who rise early for strong drink, those who drag sin along with cords of falsehood and dare God to hurry, those "who call evil good and good evil," those wise in their own eyes, and those who acquit the guilty for a bribe. Because they rejected the law of the LORD, His anger burns, and He whistles for a nation from afar, a swift and powerful army that will come roaring like lions, a picture of Assyria.',
      p: ['isaiah'],
    },
    { // 6
      s: 'Isaiah sees the holy LORD and is sent as a prophet.',
      m: 'In the year King Uzziah died, Isaiah sees the Lord on a high throne, with seraphim calling, "Holy, holy, holy is the LORD of hosts." Overwhelmed by his sin, Isaiah cries out, and a seraph touches his lips with a burning coal to take away his guilt. When God asks whom He should send, Isaiah says, "Here I am! Send me," and is told his message will harden the people until the land is ruined, leaving only a holy seed.',
      d: '"In the year that King Uzziah died I saw the Lord sitting upon a throne, high and lifted up; and the train of his robe filled the temple," Isaiah writes, with seraphim covering their faces and feet and calling, "Holy, holy, holy is the LORD of hosts; the whole earth is full of his glory!" as the foundations shake and smoke fills the house. Isaiah cries, "Woe is me! For I am lost; for I am a man of unclean lips," and a seraph flies to him with a burning coal from the altar, touches his mouth, and declares his guilt taken away and his sin atoned for. Then he hears the Lord say, "Whom shall I send, and who will go for us?" and answers, "Here I am! Send me." God commissions him to preach to a people whose hearts will grow dull, ears heavy and eyes blind, a passage Jesus quotes about His parables, until cities lie waste and the land is desolate, yet like a stump remaining after a tree is felled, "the holy seed is its stump."',
      p: ['isaiah', 'jesus'],
    },
    { // 7
      s: 'Isaiah promises Ahaz the sign of Immanuel.',
      m: 'When Syria and Israel threaten to attack Jerusalem, King Ahaz and the people shake with fear. Isaiah tells Ahaz to stay calm and trust God, but Ahaz refuses to ask for a sign. God gives a sign anyway: the virgin will conceive and bear a son called Immanuel, "God with us," and Assyria will soon devastate the land.',
      d: 'In the days of Ahaz, Rezin of Syria and Pekah of Israel march against Jerusalem, and the hearts of the king and people shake like trees in the wind. God sends Isaiah with his son Shear-jashub, "a remnant shall return," to tell Ahaz, "Be careful, be quiet, do not fear," for the plot will fail, warning, "If you are not firm in faith, you will not be firm at all." When Ahaz piously refuses to ask for a sign, Isaiah declares that the Lord Himself will give one: "Behold, the virgin shall conceive and bear a son, and shall call his name Immanuel," and before the boy knows right from wrong, the two threatening kings will be gone, a prophecy Matthew 1:23 sees fully fulfilled in the birth of Jesus. Yet because Ahaz trusts Assyria rather than God, the LORD will bring the king of Assyria like a razor to shave the land, turning vineyards into thorns and briers.',
      p: ['isaiah', 'jesus'],
    },
    { // 8
      s: 'Assyria will flood the land, but fear God, not people.',
      m: 'Isaiah\'s son is named Maher-shalal-hash-baz as a sign that Syria and Israel will soon be plundered by Assyria. Because the people reject God\'s gentle waters, Assyria will sweep over Judah like a flood up to the neck, yet "God is with us." Isaiah is told not to fear what the people fear but to regard the LORD as holy, and to turn to God\'s teaching rather than mediums.',
      d: 'God tells Isaiah to write on a large tablet "Maher-shalal-hash-baz," meaning "the spoil speeds, the prey hastens," and to name his newborn son this as a sign that Damascus and Samaria will be plundered by Assyria before the boy can say "Father" or "Mother." Because this people refused the gently flowing waters of Shiloah, the LORD will bring the mighty river of Assyria, overflowing into Judah up to the neck, filling the breadth of "your land, O Immanuel," yet nations will be shattered "for God is with us." God warns Isaiah not to call conspiracy everything this people calls conspiracy or fear what they fear: "But the LORD of hosts, him you shall honor as holy," for He will be a sanctuary and a stone of stumbling, words Peter applies to Christ. Isaiah binds up the testimony among his disciples, waiting for the LORD, and warns against consulting mediums who chirp and mutter, asking, "Should not a people inquire of their God?... To the teaching and to the testimony!"',
      p: ['isaiah', 'jesus'],
    },
    { // 9
      s: 'A child is born who will reign on David\'s throne forever.',
      m: 'Galilee, once humbled, will see a great light, and gloom will turn to joy as God breaks the oppressor\'s rod. The reason is that a child is born whose name will be Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace, and He will rule on David\'s throne forever. Meanwhile God\'s anger is still stretched out against the northern kingdom\'s pride and wickedness.',
      d: '"But there will be no gloom for her who was in anguish," Isaiah declares, for Galilee of the nations, the region first humbled by Assyria, will be made glorious: "The people who walked in darkness have seen a great light," fulfilled when Jesus began His ministry there (Matthew 4:15–16). The yoke and rod of the oppressor are broken as on the day of Midian, and the boots of warriors burned, "for to us a child is born, to us a son is given; and the government shall be upon his shoulder, and his name shall be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace." Of the increase of His government and peace there will be no end, on the throne of David forever, and "the zeal of the LORD of hosts will do this." The chapter then turns to Israel\'s proud boast that it will rebuild with finer stones, and four times repeats, "For all this his anger has not turned away, and his hand is stretched out still," as judgment comes for their arrogance, corrupt leaders and civil strife.',
      p: ['isaiah', 'jesus', 'david'],
    },
    { // 10
      s: 'Assyria is God\'s tool, but it will be judged for its pride.',
      m: 'Woe comes to unjust lawmakers who rob the poor and widows. Assyria is the rod of God\'s anger against godless Israel, but Assyria proudly thinks it conquered by its own strength. God will punish Assyria\'s arrogance, cutting it down like a forest, and a remnant of Israel will return and lean on the LORD.',
      d: 'The chapter finishes the earlier woes with a woe on those who decree iniquitous decrees to rob the poor of justice and make widows their spoil. Then God declares, "Ah, Assyria, the rod of my anger," sent against a godless nation to plunder it, but Assyria has no such humble intent; it boasts, "By the strength of my hand I have done it," like an axe boasting over the one who chops with it. When God has finished His work on Mount Zion, He will punish the arrogant king of Assyria, burning his forest and thickets in one day. A remnant of Israel will no longer lean on the one who struck them but "will lean on the LORD," for "a remnant will return," and God tells His people not to fear Assyria, whose advance toward Jerusalem will be cut down like the cedars of Lebanon.',
      p: ['isaiah'],
    },
    { // 11
      s: 'A Branch from Jesse will rule in righteousness and bring peace to creation.',
      m: 'A shoot will come from the stump of Jesse, David\'s father, and the Spirit of the LORD will rest on Him with wisdom, understanding and the fear of the LORD. He will judge the poor with righteousness, and in His kingdom the wolf will live with the lamb and the earth will be full of the knowledge of the LORD. God will gather His scattered people from the nations as He did in the Exodus.',
      d: '"There shall come forth a shoot from the stump of Jesse, and a branch from his roots shall bear fruit," Isaiah says, picturing new life from David\'s fallen dynasty. "The Spirit of the LORD shall rest upon him, the Spirit of wisdom and understanding, the Spirit of counsel and might, the Spirit of knowledge and the fear of the LORD," and He will judge not by appearances but with righteousness for the poor, striking the earth with the rod of His mouth. In His peaceful kingdom, "the wolf shall dwell with the lamb, and the leopard shall lie down with the young goat," a little child shall lead them, the nursing child shall play by the cobra\'s hole, and "the earth shall be full of the knowledge of the LORD as the waters cover the sea." In that day the root of Jesse will stand as a signal for the peoples, the nations will inquire of Him, and the Lord will recover the remnant of His people from Assyria, Egypt and the coastlands, making a highway as there was for Israel when they came up from Egypt.',
      p: ['isaiah', 'jesse', 'david', 'jesus'],
    },
    { // 12
      s: 'A song of praise: God is my salvation.',
      m: 'In that day the people will thank the LORD because His anger has turned away and He comforts them. They will declare, "Behold, God is my salvation; I will trust, and will not be afraid." With joy they will draw water from the wells of salvation and make His name known among the nations.',
      d: 'This short song concludes the first section of Isaiah with praise. "You will say in that day: \'I will give thanks to you, O LORD, for though you were angry with me, your anger turned away, that you might comfort me. Behold, God is my salvation; I will trust, and will not be afraid; for the LORD GOD is my strength and my song, and he has become my salvation.\'" Echoing Moses\' song at the Red Sea, the redeemed will draw water with joy from the wells of salvation. They will make known His deeds among the peoples, sing praises for His glorious works, and shout for joy, "for great in your midst is the Holy One of Israel."',
      p: ['isaiah'],
    },
    { // 13
      s: 'God will judge proud Babylon on the Day of the LORD.',
      m: 'Isaiah announces an oracle against Babylon, where God musters an army for battle. The Day of the LORD comes with cruel wrath to make the land a desolation, and the sun, moon and stars will be darkened. God stirs up the Medes against Babylon, and the glory of the Chaldeans will become like Sodom and Gomorrah, inhabited only by wild animals.',
      d: 'Here begin the oracles against the nations, starting with Babylon, which in Isaiah\'s day was a rising power and later became the great enemy that destroyed Jerusalem. The LORD of hosts musters a host for battle from a distant land, and Isaiah cries, "Wail, for the day of the LORD is near," a day of wrath and fierce anger when hands go limp and hearts melt. The stars and constellations will not give their light, the sun will be dark at its rising, and God will punish the world for its evil and the arrogant for their pride. He stirs up the Medes, who care nothing for silver, and Babylon, "the glory of kingdoms," will be overthrown like Sodom and Gomorrah, never again inhabited, with jackals and ostriches in its palaces.',
      p: ['isaiah'],
    },
    { // 14
      s: 'The king of Babylon falls like the Day Star, and Assyria and Philistia are judged.',
      m: 'God will have compassion on Jacob, and Israel will mock the fallen king of Babylon. The proud king who said he would ascend to heaven and make himself like the Most High is brought down to the grave like a fallen Day Star. God also vows to break Assyria in His land and warns Philistia not to rejoice.',
      d: 'The LORD will have compassion on Jacob, choose Israel again and settle them in their land, and on the day He gives them rest, they will take up a taunt against the king of Babylon. The whole earth breaks into singing because the oppressor has ceased, and the dead in Sheol rise to greet him, saying, "You too have become as weak as we!" "How you are fallen from heaven, O Day Star, son of Dawn!" the taunt continues, mocking the king who said in his heart, "I will ascend to heaven; above the stars of God I will set my throne... I will make myself like the Most High," but is brought down to the depths of the pit, an image many have also connected with Satan\'s pride. God swears that as He has planned, so it will stand: He will break the Assyrian in His land, for "this is the purpose that is purposed concerning the whole earth," and He warns Philistia not to rejoice that the rod that struck it is broken, for "the LORD has founded Zion, and in her the afflicted of his people find refuge."',
      p: ['isaiah'],
    },
    { // 15
      s: 'Moab weeps over sudden destruction.',
      m: 'Isaiah announces an oracle against Moab, Israel\'s neighbor to the east. In one night its cities are laid waste, and its people go up to their high places to weep, shaving their heads and wearing sackcloth. Even Isaiah\'s heart cries out for Moab as refugees flee and the waters are full of blood.',
      d: 'Because Ar and Kir of Moab are laid waste in a night, Moab goes up to its temple and high places to weep, wailing over Nebo and Medeba with every head shaved and every beard cut off. In the streets they wear sackcloth, Heshbon and Elealeh cry out, and the armed men of Moab tremble. "My heart cries out for Moab," Isaiah says, showing compassion even for an enemy, as fugitives flee to Zoar and weep on the ascent of Luhith. The waters of Nimrim are desolate, the grass withered, and they carry their possessions across the Brook of the Willows, while the waters of Dibon are full of blood and a lion awaits the remnant.',
      p: ['isaiah'],
    },
    { // 16
      s: 'Moab is urged to seek refuge in Zion, but its pride brings ruin.',
      m: 'Moab\'s refugees are urged to send tribute to Zion and seek shelter there. Isaiah foresees a throne established in steadfast love in the tent of David, where a faithful ruler seeks justice. But because of Moab\'s great pride, its vineyards and joy will be destroyed, and within three years its glory will be brought into contempt.',
      d: 'Moab is urged to send lambs as tribute to the ruler of the land at Mount Zion and to give shelter to the outcasts, for when the oppressor ceases, "a throne will be established in steadfast love, and on it will sit in faithfulness in the tent of David one who judges and seeks justice." "We have heard of the pride of Moab—how proud he is!—of his arrogance, his pride, and his insolence," Isaiah says, so Moab will wail for the raisin cakes of Kir-hareseth and its blighted vineyards of Sibmah. Isaiah again weeps for Moab, his inner parts moaning like a lyre, as joy and gladness are taken from the fruitful fields and no one treads the winepresses. Within three years, as a hired worker counts years, the glory of Moab will be brought into contempt and its remnant will be very few and feeble.',
      p: ['isaiah', 'david'],
    },
    { // 17
      s: 'Damascus and Israel will fall, and the nations\' roaring will be silenced.',
      m: 'Damascus, the capital of Syria, will become a heap of ruins, and Israel, its ally, will be thinned like a harvested field. In that day people will look to their Maker instead of their idols, because they forgot the God of their salvation. The nations roar like the sea against God\'s people, but He rebukes them and they flee like chaff.',
      d: '"Behold, Damascus will cease to be a city and will become a heap of ruins," Isaiah announces, and the fortress will disappear from Ephraim, Syria\'s ally against Judah. The glory of Jacob will be brought low, like a field after the reaper has gathered the grain, with only a few olives left at the top of the tree. In that day people will look to their Maker, the Holy One of Israel, and not to the altars and Asherim made by their hands, because "you have forgotten the God of your salvation and have not remembered the Rock of your refuge." The chapter ends with the thunder of many peoples roaring like the sea, but God rebukes them and they flee like chaff on the mountains before the wind, so that "at evening time, behold, terror! Before morning, they are no more," the portion of those who plunder God\'s people.',
      p: ['isaiah'],
    },
    { // 18
      s: 'Cush will bring gifts to the LORD on Mount Zion.',
      m: 'Isaiah addresses Cush, a land of tall, smooth-skinned people beyond the rivers of Ethiopia, who sent envoys by papyrus boats. God says He will quietly watch from His dwelling and then cut off the enemy at the right time like a vinedresser pruning branches. Afterward Cush will bring gifts to the LORD of hosts on Mount Zion.',
      d: '"Ah, land of whirring wings that is beyond the rivers of Cush," Isaiah begins, addressing a powerful southern nation that sent ambassadors by sea in vessels of papyrus, perhaps seeking an alliance against Assyria. He tells them to go back to their tall and smooth people, feared near and far, and to watch for God\'s signal. The LORD says, "I will quietly look from my dwelling like clear heat in sunshine," waiting until the right moment, then like a vinedresser cutting off shoots before the harvest, He will cut down the enemy, leaving them for birds and beasts. At that time gifts will be brought to the LORD of hosts from this distant people, to Mount Zion, the place of His name, a glimpse of the nations worshiping Israel\'s God.',
      p: ['isaiah'],
    },
    { // 19
      s: 'God will judge Egypt, then heal it so it worships Him with Israel and Assyria.',
      m: 'The LORD rides on a cloud to Egypt, and its idols tremble as civil war, failing rivers and foolish counselors bring confusion. Yet in that day Egypt will build an altar to the LORD, cry out to Him, and be healed. In a stunning vision, Egypt and Assyria will worship together with Israel, and God will call them "my people" and "the work of my hands."',
      d: '"Behold, the LORD is riding on a swift cloud and comes to Egypt; and the idols of Egypt will tremble at his presence," Isaiah announces. God will stir up Egyptian against Egyptian, give them over to a hard master, dry up the Nile so that fishermen and linen workers despair, and make the counselors of Pharaoh foolish, the princes of Zoan deluded and the land staggering like a drunkard. Then the tone changes dramatically: in that day there will be an altar to the LORD in the midst of Egypt, the Egyptians will cry to the LORD because of oppressors, He will send a savior, they will know the LORD and worship Him, and He will strike and heal them. A highway will run from Egypt to Assyria, and they will worship together, and "Israel will be the third with Egypt and Assyria, a blessing in the midst of the earth," whom the LORD blesses, saying, "Blessed be Egypt my people, and Assyria the work of my hands, and Israel my inheritance."',
      p: ['isaiah'],
    },
    { // 20
      s: 'Isaiah walks barefoot as a sign that trusting Egypt will fail.',
      m: 'When Assyria captures Ashdod, God tells Isaiah to walk naked and barefoot for three years. This is a sign that the king of Assyria will lead away Egyptian and Cushite captives in shame. Those who hoped in Egypt and Cush for protection will be dismayed and ask how they can escape.',
      d: 'In the year that Sargon king of Assyria sent his commander to capture Ashdod, the LORD tells Isaiah to remove his sackcloth and sandals, and he walks stripped and barefoot for three years as an acted-out prophecy. God explains that just as His servant Isaiah has walked this way, so the king of Assyria will lead away the Egyptian captives and the Cushite exiles, young and old, naked and barefoot, to the shame of Egypt. Those who looked to Cush as their hope and boasted in Egypt will be dismayed and ashamed. The inhabitants of the coastland will say, "Behold, this is what has happened to those in whom we hoped... And we, how shall we escape?" warning Judah against trusting in Egypt instead of the LORD.',
      p: ['isaiah'],
    },
    { // 21
      s: 'Babylon falls, and Edom and Arabia face judgment.',
      m: 'Isaiah sees a terrifying vision of Babylon\'s fall, as Elam and Media attack. A watchman reports riders approaching and cries, "Fallen, fallen is Babylon; and all the carved images of her gods he has shattered." Brief oracles follow about Edom asking how long the night will last, and about the coming end of Arabia\'s glory.',
      d: 'In "the oracle concerning the wilderness of the sea," Isaiah sees a stern vision like whirlwinds sweeping through the Negeb, with the traitor betraying and the destroyer destroying, and he calls Elam and Media to attack. The vision causes him anguish like a woman in labor, while the feast continues in Babylon. A watchman set on the watchtower sees riders and chariots and announces, "Fallen, fallen is Babylon; and all the carved images of her gods he has shattered to the ground," words echoed in Revelation 18:2. A voice from Seir in Edom calls, "Watchman, what time of the night?" and the watchman answers, "Morning comes, and also the night," while an oracle concerning Arabia says that within a year all the glory of Kedar will come to an end.',
      p: ['isaiah'],
    },
    { // 22
      s: 'Jerusalem parties instead of repenting, and Shebna is replaced by Eliakim.',
      m: 'While Jerusalem faces attack, its people revel on the rooftops instead of weeping, and Isaiah grieves. They inspect their weapons and water supply but do not look to God, saying, "Let us eat and drink, for tomorrow we die." God also condemns the proud steward Shebna and promises to give his authority to Eliakim, placing on his shoulder the key of the house of David.',
      d: 'In "the oracle concerning the valley of vision," Isaiah rebukes Jerusalem for being full of shouting and revelry on the housetops while its leaders flee and its people are captured, and he weeps bitterly for the destruction of his people. In the day of crisis they looked to the weapons in the House of the Forest, counted houses to strengthen the wall, and made a reservoir, "but you did not look to him who did it." The LORD called for weeping and sackcloth, but instead there was joy and feasting: "Let us eat and drink, for tomorrow we die," a sin God says will not be atoned for. God then sends Isaiah against Shebna, the steward who carved a grand tomb for himself, promising to hurl him away and give his office to Eliakim son of Hilkiah, who will be a father to Jerusalem, and "I will place on his shoulder the key of the house of David. He shall open, and none shall shut," words Revelation 3:7 applies to Jesus.',
      p: ['isaiah', 'jesus', 'david'],
    },
    ...more, ...more2,
  ],
};
