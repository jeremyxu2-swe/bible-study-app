// Deuteronomy at three reading levels. s = Simple, m = Moderate, d = Detailed, v = key verse, p = people.
// Book key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
import more from './deuteronomy.b.js';

export default {
  book: {
    simple: 'Before he dies, Moses calls the new generation to love God and obey Him in the land.',
    moderate: 'On the plains of Moab, Moses gives a series of farewell sermons to the generation about to enter Canaan. He retells their history, restates God\'s law, and calls them to love the LORD with all their heart. He sets before them life and death, blessing and curse, urging them to choose life, and then dies after viewing the land.',
    detailed: 'Deuteronomy, meaning "second law," records Moses\' final speeches forty years after the Exodus, as Israel waits to cross the Jordan. He reviews God\'s faithfulness and Israel\'s rebellions in the wilderness, then restates the Ten Commandments and the Shema, "Hear, O Israel: The LORD our God, the LORD is one," calling for wholehearted love. The central chapters apply the covenant to worship, leadership, justice, family and care for the poor, all shaped like an ancient treaty between a great King and His people. Moses then lays out blessings and curses, foresees Israel\'s future failure and God\'s promise to circumcise their hearts, commissions Joshua, sings a final song and blessing, and dies on Mount Nebo.',
    verse: { ref: 'Deuteronomy 6:5', text: 'You shall love the LORD your God with all your heart and with all your soul and with all your might.' },
    themes: ['Love the LORD with all your heart', 'Remember what God has done', 'Covenant blessing and curse', 'Obedience flowing from gratitude'],
    keyVerses: [
      { ref: '6:4', text: 'Hear, O Israel: The LORD our God, the LORD is one.' },
      { ref: '8:3', text: 'Man does not live by bread alone, but man lives by every word that comes from the mouth of the LORD.' },
      { ref: '30:19', text: 'I have set before you life and death, blessing and curse. Therefore choose life, that you and your offspring may live.' },
      { ref: '31:6', text: 'Be strong and courageous. Do not fear or be in dread of them, for it is the LORD your God who goes with you. He will not leave you or forsake you.' },
    ],
  },
  sections: {
    1: { short: 'Moses retells Israel\'s journey from Sinai to Moab.' },
    5: { short: 'The Ten Commandments, the Shema, and laws for life in the land.' },
    27: { short: 'Blessings and curses, and a call to choose life.' },
    31: { short: 'Joshua is commissioned; Moses sings, blesses Israel and dies.' },
  },
  chapters: [
    { // 1
      s: 'Moses recalls how Israel refused to enter the land.',
      m: 'In the fortieth year, Moses begins explaining God\'s law to Israel on the plains of Moab. He recalls how God told them to leave Horeb and take the land, and how leaders were appointed to help him. He then reminds them how their parents refused to trust God at Kadesh and were sentenced to wander.',
      d: 'Moses speaks to all Israel beyond the Jordan in the fortieth year, noting that the trip from Horeb to Kadesh should have taken only eleven days. He recalls God\'s command to go and possess the land promised to Abraham, Isaac and Jacob, and how he appointed wise leaders to judge fairly. When they reached Kadesh, the spies brought back good fruit, but the people grumbled, saying the LORD hated them, even though He had carried them "as a man carries his son." Because they did not believe, God swore that only Caleb and Joshua of that generation would enter, and when they then attacked on their own, they were defeated.',
      p: ['moses', 'caleb', 'joshua'],
    },
    { // 2
      s: 'Israel passes Edom, Moab and Ammon and defeats Sihon.',
      m: 'Moses recalls how God told Israel not to fight Edom, Moab or Ammon, because He had given them their lands. After the old generation died, God told Israel to fight Sihon, king of Heshbon. God hardened Sihon\'s heart, and Israel defeated him and took his land.',
      d: 'After many days of wandering, God told Israel to travel north, passing through the territory of Esau\'s descendants without provoking them, because God had given Seir to Esau. They also were not to harass Moab or Ammon, Lot\'s descendants, whose lands God had given them after they drove out giants. When the generation of fighting men had died, as God had sworn, God commanded them to cross the Arnon and engage Sihon the Amorite. Sihon refused peaceful passage because God hardened his spirit, and the LORD gave him and all his cities into Israel\'s hand.',
      p: ['moses'],
    },
    { // 3
      s: 'Israel defeats Og, and Moses is told he will not cross the Jordan.',
      m: 'God gives Israel victory over Og, king of Bashan, whose iron bed was enormous. The land east of the Jordan is given to Reuben, Gad and half of Manasseh. Moses pleads to enter Canaan, but God says no and tells him to encourage Joshua instead.',
      d: 'God tells Moses not to fear Og, king of Bashan, and Israel captures sixty fortified cities, devoting them to destruction. Og, last of the giant Rephaim, had a bed of iron over thirteen feet long. Moses gives the conquered territory east of the Jordan to Reuben, Gad and half the tribe of Manasseh, on condition that their soldiers cross over to fight. Moses begs the LORD to let him see the good land, but God says, "Enough from you," lets him only view it from Pisgah, and tells him to charge and strengthen Joshua, who will lead the people across.',
      p: ['moses', 'joshua'],
    },
    { // 4
      s: 'Moses urges Israel to obey and never make idols.',
      m: 'Moses calls Israel to keep God\'s laws, which will show the nations their wisdom. Remembering that they saw no form at Sinai, they must not make idols of any kind. If they turn away, they will be scattered, but if they seek God with all their heart, He will be found because He is merciful.',
      d: 'Moses urges Israel to listen to God\'s statutes and not add to or take away from them, because their obedience will show the nations their wisdom and how near their God is to them. He reminds them that at Horeb they heard God\'s voice from the fire but saw no form, so they must never make idols in the shape of anything in creation. He warns that if they become corrupt, God will scatter them among the nations, yet if they seek Him there with all their heart and soul, they will find Him, "for the LORD your God is a merciful God." No other people has heard God speak and lived or been taken out of another nation by such signs, so they must know that the LORD is God and there is no other; Moses then sets aside three cities of refuge east of the Jordan.',
      p: ['moses'],
    },
    { // 5
      s: 'Moses restates the Ten Commandments.',
      m: 'Moses reminds Israel that God made His covenant with them, not just their ancestors. He repeats the Ten Commandments given at Horeb, explaining the Sabbath as a reminder that they were slaves in Egypt. He recalls how the people asked him to listen to God for them, and urges them to obey so it will go well with them.',
      d: 'Moses gathers Israel and says the covenant made at Horeb was made "with us, who are all of us here alive today." He repeats the Ten Commandments, with one notable change: the Sabbath is grounded in remembering that God redeemed them from slavery in Egypt with a mighty hand. He recalls how the people, terrified by the fire and the voice, asked Moses to go near and hear God for them, and God approved, saying, "Oh that they had such a heart as this always, to fear me." Moses urges them to walk in all God\'s ways so that they may live and prosper in the land.',
      p: ['moses'],
    },
    { // 6
      s: 'Hear, O Israel: love the LORD with all your heart.',
      m: 'Moses gives the Shema: the LORD is one, and Israel must love Him with all their heart, soul and might. These words must be on their hearts and taught diligently to their children throughout daily life. When they enjoy the land\'s blessings, they must not forget the God who brought them out of slavery.',
      d: 'Moses declares the Shema: "Hear, O Israel: The LORD our God, the LORD is one," and Israel must love Him with all their heart, soul and might. These words must be on their hearts, taught diligently to their children, and talked about at home, on the road, when lying down and rising up, and bound on hands and doorposts. When God gives them cities they did not build and vineyards they did not plant, they must take care not to forget Him or follow other gods, and must not put Him to the test as at Massah. When their children ask what the laws mean, they are to tell the story of how the LORD brought them out of Egypt for their good.',
      p: ['moses'],
    },
    { // 7
      s: 'Israel is God\'s chosen people and must not mix with idolaters.',
      m: 'God commands Israel to destroy the nations of Canaan and their idols and not intermarry with them. He chose Israel not because they were great but because He loved them and kept His oath. He promises to bless their obedience and drive out the nations little by little.',
      d: 'When God brings them into the land, Israel must devote its seven nations to destruction, make no covenants with them, avoid intermarriage, and tear down their altars and idols. Israel is a people holy to the LORD, chosen as His treasured possession, not because they were more numerous but because the LORD loved them and kept the oath He swore to their fathers. He is the faithful God who keeps covenant and steadfast love to a thousand generations of those who love Him. They must not fear the nations, because the God who struck Egypt will drive them out little by little, and they must burn their idols and not covet the silver and gold on them.',
      p: ['moses'],
    },
    { // 8
      s: 'Remember God in plenty, for man does not live by bread alone.',
      m: 'Moses reminds Israel that God humbled them in the wilderness and fed them with manna to teach them to depend on His word. He describes the good land God is giving them. When they are full and prosperous, they must not forget God or think their own power made them wealthy.',
      d: 'Moses tells Israel to remember the forty years in the wilderness, when God humbled and tested them to know what was in their hearts. He let them hunger and fed them with manna "that he might make you know that man does not live by bread alone, but man lives by every word that comes from the mouth of the LORD," and their clothes did not wear out. God disciplines them as a father disciplines his son. He describes the good land of streams, wheat, vines and copper, and warns that when they have eaten and are full and their wealth multiplies, they must not say, "My power has gotten me this wealth," for it is God who gives the power to get wealth.',
      p: ['moses'],
    },
    { // 9
      s: 'Not because of your righteousness: the golden calf remembered.',
      m: 'Moses warns Israel not to think God is giving them the land because of their righteousness. It is because of the nations\' wickedness and God\'s promise to their fathers. He reminds them of their stubbornness, especially the golden calf, and how he interceded for forty days to save them.',
      d: 'God will go before Israel like a consuming fire to defeat the mighty Anakim, but Moses warns them not to think it is because of their righteousness. Rather, it is because of the wickedness of the nations and to confirm His word to Abraham, Isaac and Jacob, for Israel is a stubborn people. Moses recounts how they provoked God at Horeb by making the golden calf while he was on the mountain receiving the tablets, so that he broke the tablets before their eyes. He lay prostrate before God for forty days and nights pleading for them and for Aaron, appealing to God\'s promises and reputation, and he lists other rebellions at Taberah, Massah, Kibroth-hattaavah and Kadesh-barnea.',
      p: ['moses', 'aaron'],
    },
    { // 10
      s: 'God requires Israel to fear, love and serve Him.',
      m: 'Moses recalls the new tablets placed in the ark and the setting apart of the Levites. He asks what God requires: to fear Him, walk in His ways, love Him and serve Him with all their heart. Israel must circumcise their hearts and, like God, love the sojourner.',
      d: 'Moses tells how God had him cut two new tablets, wrote the Ten Commandments on them again, and had them placed in the ark, and how the Levites were set apart to carry it and bless in God\'s name. He asks, "What does the LORD your God require of you, but to fear the LORD your God, to walk in all his ways, to love him, to serve the LORD your God with all your heart and with all your soul." Though heaven and earth belong to God, He set His love on their fathers, so they must circumcise their hearts and stop being stubborn. God is the great God who is not partial, executes justice for the fatherless and widow, and loves the sojourner, so Israel must love the sojourner too.',
      p: ['moses'],
    },
    { // 11
      s: 'Love and obey God, and He will bless the land.',
      m: 'Moses reminds the people of everything they personally saw God do in Egypt and the wilderness. Unlike Egypt, Canaan depends on rain from heaven, which God will send if they love and serve Him. He sets before them a blessing and a curse, to be proclaimed on Mount Gerizim and Mount Ebal.',
      d: 'Moses stresses that it is this generation, not their children, who saw God\'s discipline, His mighty acts against Pharaoh, the Red Sea, and the judgment on Dathan and Abiram. The land they are entering is not like Egypt, irrigated by human effort, but a land of hills and valleys that drinks rain from heaven, a land the LORD cares for. If they love God and serve Him with all their heart, He will send rain in its season, but if they turn to other gods, He will shut up the heavens. They must lay these words on their hearts and teach them to their children, and when they enter the land they are to set the blessing on Mount Gerizim and the curse on Mount Ebal.',
      p: ['moses'],
    },
    { // 12
      s: 'Worship God only at the place He chooses.',
      m: 'Israel must destroy all the places where the nations worshiped their gods. They must bring their offerings only to the place the LORD chooses for His name to dwell. They may eat meat anywhere but not the blood, and must not worship God the way the nations worship their gods.',
      d: 'The specific laws begin with worship: Israel must tear down every high place, altar, pillar and Asherah pole of the nations and wipe out the names of their gods. Instead of offering sacrifices wherever they like, they must bring burnt offerings, tithes and vows to the one place the LORD will choose to make His name dwell, later Jerusalem, and rejoice there with their households and the Levites. Ordinary meat may be eaten in any town, but the blood must be poured out, "for the blood is the life." They must not ask how the nations served their gods in order to copy them, since they even burned their children, but must carefully do all God commands without adding to it or taking from it.',
      p: ['moses'],
    },
    { // 13
      s: 'Reject anyone who leads Israel to other gods.',
      m: 'If a prophet performs a sign but urges Israel to follow other gods, they must not listen, because God is testing their love. Even a close family member or friend who secretly entices them to idolatry must not be spared. A town that turns to idols must be destroyed.',
      d: 'If a prophet or dreamer gives a sign that comes true but says, "Let us go after other gods," Israel must not listen, for the LORD is testing whether they love Him with all their heart and soul; that prophet must be put to death. Even if a brother, son, daughter, wife or closest friend secretly entices them to serve other gods, they must not yield or conceal it but make sure the person is put to death. If they hear that worthless men have drawn a whole town into idolatry, they must investigate thoroughly, and if it is true, devote the town to destruction. This severity guards Israel\'s covenant loyalty to the God who redeemed them.',
      p: ['moses'],
    },
    { // 14
      s: 'Food laws and the tithe.',
      m: 'As God\'s children, Israel must not mourn like the pagans or eat unclean animals. The chapter repeats which animals, fish and birds are clean. Israel must set aside a tithe each year to eat joyfully before the LORD and every third year give it to the Levites, foreigners, orphans and widows.',
      d: 'Moses tells Israel, "You are the sons of the LORD your God," so they must not cut themselves or shave their foreheads for the dead, for they are a people holy to the LORD and His treasured possession. He lists clean and unclean animals, fish and birds, and forbids eating anything that dies naturally or boiling a young goat in its mother\'s milk. Each year they must tithe their grain, wine, oil and firstborn animals and eat it in God\'s presence at the chosen place, so they may learn to fear Him, converting it to money if the distance is too far. Every third year the tithe is stored in their towns so the Levite, sojourner, fatherless and widow may eat and be satisfied.',
      p: ['moses'],
    },
    { // 15
      s: 'Releasing debts and servants every seventh year.',
      m: 'Every seventh year Israelites must cancel debts owed by their fellow Israelites. They must be generous and open-handed to the poor and not refuse to lend because the year of release is near. Hebrew servants must be set free in the seventh year and sent away with generous gifts.',
      d: 'At the end of every seven years, creditors must release debts owed by fellow Israelites, because the LORD\'s release has been proclaimed. Moses says there should be no poor among them if they obey, yet because there will always be poor people in the land, they must open their hands wide and not harden their hearts or let a stingy thought keep them from lending as the seventh year approaches. Hebrew servants must be released in the seventh year and sent away not empty-handed but furnished liberally from flock, threshing floor and winepress, remembering that they were slaves in Egypt. Firstborn male animals must be set apart for the LORD and eaten before Him.',
      p: ['moses'],
    },
    { // 16
      s: 'Three pilgrimage feasts and the call for justice.',
      m: 'Three times a year all Israel\'s males must appear before the LORD at the place He chooses: Passover, the Feast of Weeks and the Feast of Booths. They are to rejoice and give as God has blessed them. Israel must appoint judges who judge fairly and refuse bribes: "Justice, and only justice, you shall follow."',
      d: 'Israel must keep Passover at the place God chooses, eating unleavened bread, "the bread of affliction," for seven days to remember the hasty departure from Egypt. Seven weeks later they celebrate the Feast of Weeks with freewill offerings, rejoicing with servants, Levites, sojourners, orphans and widows. The Feast of Booths follows the harvest for seven days of joy, and at each feast no one is to appear before God empty-handed but give as He has blessed them. Moses then commands that judges and officers be appointed in every town to judge righteously, without partiality or bribes, adding, "Justice, and only justice, you shall follow," and forbids Asherah poles and pillars beside God\'s altar.',
      p: ['moses'],
    },
    { // 17
      s: 'Courts, difficult cases and rules for a future king.',
      m: 'Idolaters must be judged on the testimony of two or three witnesses. Difficult cases go to the priests and judge at the central sanctuary. If Israel wants a king, he must be chosen by God, must not multiply horses, wives or wealth, and must write and read a copy of God\'s law all his life.',
      d: 'Sacrifices must be without blemish, and anyone found worshiping other gods may be executed only on the testimony of two or three witnesses, with the witnesses throwing the first stones. Cases too hard for local judges are to be taken to the Levitical priests and the judge at the place God chooses, and their decision must be followed. Moses anticipates that Israel will ask for a king like the nations and says the king must be an Israelite whom God chooses. He must not acquire many horses, return the people to Egypt, take many wives, or pile up silver and gold, but must write a copy of the law, read it all his days and fear the LORD, so his heart is not lifted up above his brothers.',
      p: ['moses'],
    },
    { // 18
      s: 'Provision for priests and the promise of a prophet like Moses.',
      m: 'The priests and Levites have no land because the LORD is their inheritance, so they live on portions of the offerings. Israel must reject every form of witchcraft and divination practiced by the nations. Instead God promises to raise up a prophet like Moses, and they must listen to him.',
      d: 'The Levitical priests receive no territory, because the LORD is their inheritance, so the people must give them shares of sacrifices and firstfruits, and any Levite who comes to serve at the central sanctuary shares equally. Israel must not learn the abominable practices of the nations: child sacrifice, divination, fortune-telling, sorcery, charming, mediums, necromancy and consulting the dead. Instead God says, "The LORD your God will raise up for you a prophet like me from among you... it is to him you shall listen," a promise ultimately fulfilled in Jesus (Acts 3:22). A prophet who speaks in God\'s name a word that does not come true has spoken presumptuously and must not be feared.',
      p: ['moses'],
    },
    { // 19
      s: 'Cities of refuge, boundary stones and honest witnesses.',
      m: 'Israel must set aside cities of refuge so anyone who kills someone accidentally can escape the avenger. Deliberate murderers must not be protected. Boundary markers must not be moved, two or three witnesses are required for a charge, and a false witness receives the punishment he intended for another.',
      d: 'When Israel takes the land, they must set apart three cities of refuge, with roads built to them, and add three more if their territory expands, so that innocent blood is not shed. Moses gives the example of an axe head flying off and killing a neighbor accidentally, and says such a person may flee and live. But a murderer who kills from hatred and flees there must be handed to the avenger of blood, without pity. No one may move a neighbor\'s ancient boundary stone, a single witness is not enough to convict, and a malicious witness who lies must suffer what he meant to do to his brother, "life for life, eye for eye," so that evil is purged from Israel.',
      p: ['moses'],
    },
    { // 20
      s: 'Laws for warfare.',
      m: 'When Israel goes to war against a stronger army, they must not be afraid because God goes with them. Men who are newly married, have just built a house or planted a vineyard, or are fearful may go home. Distant cities must first be offered peace, and fruit trees must not be cut down during a siege.',
      d: 'When Israel faces horses, chariots and armies larger than their own, they must not fear, for the LORD who brought them out of Egypt is with them, and the priest is to encourage them before battle. Officers send home anyone who has built a house but not dedicated it, planted a vineyard but not enjoyed it, or become engaged but not married, as well as anyone fearful and fainthearted. Distant cities are to be offered terms of peace first, while the cities of Canaan are to be devoted to destruction so they will not teach Israel their abominable practices. During a siege, fruit trees must not be destroyed: "Are the trees in the field human, that they should be besieged by you?"',
      p: ['moses'],
    },
    ...more,
  ],
};
