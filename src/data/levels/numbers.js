// Numbers at three reading levels. s = Simple, m = Moderate, d = Detailed, v = key verse, p = people.
// Book key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
import more from './numbers.b.js';

export default {
  book: {
    simple: 'Israel\'s unbelief keeps them wandering in the wilderness for forty years.',
    moderate: 'Numbers follows Israel from Mount Sinai to the edge of the promised land. When the people refuse to enter Canaan out of fear, God sentences that generation to wander and die in the wilderness for forty years. Yet God stays faithful, provides for them, and prepares a new generation to inherit the land.',
    detailed: 'Numbers opens with a census of Israel\'s fighting men and careful arrangements for the camp around the tabernacle as the people prepare to march from Sinai. But the journey quickly turns into complaining and rebellion, climaxing when ten of the twelve spies persuade the people not to trust God to give them Canaan. God sentences that generation to forty years in the wilderness, and the book records further rebellions, including Korah\'s revolt and even Moses\' own failure at Meribah, alongside God\'s patience, the bronze serpent and Balaam\'s forced blessings. A second census counts the new generation on the plains of Moab, where God gives instructions for dividing the land, showing that His promises stand even when His people fail.',
    verse: { ref: 'Numbers 14:18', text: 'The LORD is slow to anger and abounding in steadfast love, forgiving iniquity and transgression, but he will by no means clear the guilty.' },
    themes: ['Unbelief and its consequences', 'God\'s faithfulness despite rebellion', 'God\'s presence leading His people', 'Preparing a new generation for the promise'],
    keyVerses: [
      { ref: '6:24–26', text: 'The LORD bless you and keep you; the LORD make his face to shine upon you and be gracious to you; the LORD lift up his countenance upon you and give you peace.' },
      { ref: '14:9', text: 'Only do not rebel against the LORD. And do not fear the people of the land, for they are bread for us.' },
      { ref: '21:8', text: 'Make a fiery serpent and set it on a pole, and everyone who is bitten, when he sees it, shall live.' },
      { ref: '23:19', text: 'God is not man, that he should lie, or a son of man, that he should change his mind.' },
    ],
  },
  sections: {
    1: { short: 'Israel is counted, organized and blessed before leaving Sinai.' },
    11: { short: 'Complaints, the spies\' bad report, forty years of wandering, and Balaam.' },
    26: { short: 'A new generation is counted and prepared to enter Canaan.' },
  },
  chapters: [
    { // 1
      s: 'Moses counts Israel\'s fighting men.',
      m: 'In the second year after the Exodus, God tells Moses to take a census of all men twenty years and older who can go to war. The tribes number 603,550 men in total. The Levites are not counted with them because they are set apart to care for the tabernacle.',
      d: 'On the first day of the second month of the second year after leaving Egypt, God commands Moses and Aaron to count every man twenty years old and upward able to go to war, with a leader from each tribe assisting. The chapter lists the totals tribe by tribe, with Judah the largest at 74,600. The grand total is 603,550 men, showing that God has kept His promise to multiply Abraham\'s descendants. The Levites are not included because they are appointed to carry, set up and guard the tabernacle and camp around it.',
      p: ['moses', 'aaron'],
    },
    { // 2
      s: 'The tribes camp in order around the tabernacle.',
      m: 'God assigns each tribe its place around the tabernacle, three tribes on each side, each under its own banner. Judah leads on the east, the side facing the entrance. The Levites camp nearest the tabernacle, with God\'s dwelling at the center of the nation.',
      d: 'The LORD tells Israel to camp facing the tent of meeting at a distance, each tribe by its own banner. Judah, Issachar and Zebulun camp on the east and set out first; Reuben, Simeon and Gad on the south; Ephraim, Manasseh and Benjamin on the west; and Dan, Asher and Naphtali on the north. The Levites and the tabernacle travel in the middle of the camp. The arrangement pictures a well-ordered people gathered around God\'s presence, and Israel does everything just as the LORD commanded Moses.',
      p: ['moses'],
    },
    { // 3
      s: 'The Levites are set apart in place of Israel\'s firstborn.',
      m: 'The chapter lists Aaron\'s sons, the priests, and assigns the Levites to serve them and guard the tabernacle. God takes the Levites for Himself instead of every firstborn son in Israel. The extra firstborn are redeemed with silver.',
      d: 'Aaron\'s sons Eleazar and Ithamar serve as priests after the deaths of Nadab and Abihu. God gives the tribe of Levi to Aaron to assist the priests and guard the sanctuary, and He takes them in place of every firstborn in Israel, since all the firstborn have belonged to Him since the night He struck Egypt\'s firstborn. The three Levite clans, Gershon, Kohath and Merari, are counted and assigned positions and duties around the tabernacle. Because the firstborn of Israel outnumber the Levites by 273, those extra sons are redeemed for five shekels each, paid to Aaron.',
      p: ['aaron', 'moses'],
    },
    { // 4
      s: 'Duties of the Levite clans in carrying the tabernacle.',
      m: 'The Kohathites carry the most holy objects after the priests cover them. The Gershonites carry the curtains and coverings, and the Merarites carry the frames and posts. A census counts Levites between thirty and fifty who are fit for this service.',
      d: 'When the camp moves, Aaron and his sons first cover the ark, table, lampstand and altars with cloths and skins. Only then may the Kohathites carry them on poles, and they must not touch or even look at the holy things, or they will die. The Gershonites carry the curtains, coverings and hangings under Ithamar\'s direction, and the Merarites carry the frames, bars, posts and bases. Moses counts the Levites aged thirty to fifty, 8,580 men, for this work.',
      p: ['aaron', 'moses'],
    },
    { // 5
      s: 'Keeping the camp pure; confession and the jealousy test.',
      m: 'Those who are unclean must stay outside the camp because God dwells among His people. Anyone who wrongs another must confess and make full restitution plus a fifth. A ritual is given for a husband who suspects his wife of unfaithfulness.',
      d: 'Anyone with a skin disease, a discharge, or uncleanness from a dead body is put outside the camp so as not to defile it, "in the midst of which I dwell." When a person breaks faith with the LORD by wronging someone, he must confess his sin, repay in full with a fifth added, and give it to a relative or the priest if the victim has no redeemer. The chapter then describes a test for a woman suspected of adultery without witnesses. She drinks holy water mixed with dust from the tabernacle floor, and God Himself reveals her guilt or protects her innocence.',
      p: ['moses'],
    },
    { // 6
      s: 'The Nazirite vow and the priestly blessing.',
      m: 'Any man or woman can take a Nazirite vow to be specially dedicated to the LORD for a time. They must avoid wine and grapes, not cut their hair, and not touch a dead body. The chapter ends with the blessing Aaron and his sons are to speak over Israel.',
      d: 'A man or woman may make a special Nazirite vow of separation to the LORD for a set period. During that time they must abstain from wine, strong drink and anything from the grapevine, let their hair grow uncut, and avoid any dead body, even of close family. If the vow is broken by sudden contact with death, the person shaves, offers sacrifices, and starts over, and at the end of the vow offers sacrifices and burns the hair. God then gives Aaron the priestly blessing: "The LORD bless you and keep you; the LORD make his face to shine upon you and be gracious to you; the LORD lift up his countenance upon you and give you peace," so putting His name on the people.',
      p: ['aaron', 'moses'],
    },
    { // 7
      s: 'The tribal leaders bring gifts for the tabernacle.',
      m: 'When the tabernacle is set up, the leaders of the twelve tribes bring wagons and oxen for the Levites. Over twelve days, each leader presents an identical offering for the dedication of the altar. Then Moses hears God speaking to him from above the mercy seat.',
      d: 'On the day Moses finishes setting up and anointing the tabernacle, the chiefs of Israel bring six covered wagons and twelve oxen, which are given to the Gershonites and Merarites for transporting it, while the Kohathites carry the holy things on their shoulders. Then for twelve days, one tribe per day, each leader brings exactly the same offering: silver plates and basins, a gold dish of incense, and animals for burnt, sin and peace offerings. The long repetition honors every tribe equally. When Moses enters the tent, he hears the voice speaking to him from above the mercy seat between the cherubim.',
      p: ['moses'],
    },
    { // 8
      s: 'The lamps are set up and the Levites are dedicated.',
      m: 'Aaron sets up the seven lamps of the lampstand to give light in front of it. The Levites are cleansed, shaved and presented to the LORD as a wave offering from Israel. They serve from age twenty-five to fifty, then assist others.',
      d: 'God tells Aaron to arrange the lamps so that they shine in front of the lampstand, and he does so. The Levites are purified with water, shave their bodies, wash their clothes and offer a bull for a sin offering and one for a burnt offering. The people of Israel lay their hands on them, and Aaron presents them before the LORD as a wave offering, because they belong to God in place of Israel\'s firstborn. They serve at the tent of meeting from age twenty-five and retire at fifty to help their brothers.',
      p: ['aaron', 'moses'],
    },
    { // 9
      s: 'Israel keeps Passover, and the cloud leads them.',
      m: 'Israel celebrates the Passover in the wilderness of Sinai one year after leaving Egypt. God provides a second date for those who are unclean or traveling. The cloud over the tabernacle tells Israel when to stay and when to move.',
      d: 'In the first month of the second year, Israel keeps the Passover at Sinai as commanded. Some men are unclean from touching a dead body and ask Moses what to do, so God allows a second Passover a month later for anyone unclean or on a journey, while warning that anyone who simply neglects it will be cut off. The foreigner who lives among them may also keep the Passover. Whenever the cloud lifts from the tabernacle, Israel sets out, and wherever it settles, they camp, whether for days, a month or a year, so that they move only at the command of the LORD.',
      p: ['moses'],
    },
    { // 10
      s: 'Israel sets out from Sinai.',
      m: 'God tells Moses to make two silver trumpets for calling assemblies and signaling the camp to move. In the second year, the cloud lifts, and Israel leaves Sinai in tribal order. Whenever the ark sets out, Moses prays, "Arise, O LORD, and let your enemies be scattered."',
      d: 'Moses makes two silver trumpets to summon the congregation, signal the march, sound alarms in battle, and celebrate feasts. On the twentieth day of the second month of the second year, the cloud lifts, and Israel sets out from the wilderness of Sinai for the first time, tribe by tribe in the order God assigned. Moses invites his brother-in-law Hobab to guide them and share in God\'s goodness. The ark goes before them for three days to find a resting place, and when it sets out Moses says, "Arise, O LORD," and when it rests, "Return, O LORD, to the ten thousand thousands of Israel."',
      p: ['moses'],
    },
    { // 11
      s: 'The people complain, and God sends quail and seventy elders.',
      m: 'The people complain about their hardships, and God\'s fire burns the edges of the camp. They crave meat and despise the manna, and Moses feels the burden is too heavy for him alone. God puts His Spirit on seventy elders to share the load and sends so much quail that it becomes a judgment.',
      d: 'The people grumble, and fire from the LORD burns the outskirts of the camp until Moses prays, so the place is called Taberah. Then the rabble craves meat, and Israel weeps, remembering the fish, cucumbers and onions of Egypt and despising the manna. Moses tells God he cannot carry the people alone and would rather die, so God takes some of the Spirit on Moses and puts it on seventy elders, who prophesy; when Joshua objects to two men prophesying in the camp, Moses wishes all the LORD\'s people were prophets. God sends quail in huge numbers, asking, "Is the LORD\'s hand shortened?" but while the meat is still between their teeth, a plague strikes those who had craved it.',
      p: ['moses', 'joshua'],
    },
    { // 12
      s: 'Miriam and Aaron oppose Moses, and Miriam is struck with disease.',
      m: 'Miriam and Aaron criticize Moses for marrying a Cushite woman and question his special role. God defends Moses as His faithful servant with whom He speaks face to face. Miriam becomes leprous, and after Moses prays for her, she is healed but kept outside the camp for seven days.',
      d: 'Miriam and Aaron speak against Moses because of his Cushite wife and ask, "Has the LORD indeed spoken only through Moses?" The text notes that Moses is very meek, more than anyone on earth. The LORD calls the three of them to the tent and declares that while He speaks to prophets in visions and dreams, with Moses, His faithful servant, He speaks mouth to mouth, so why were they not afraid? When the cloud lifts, Miriam is leprous; Aaron pleads with Moses, Moses cries to God to heal her, and she is shut outside the camp for seven days while the people wait for her.',
      p: ['miriam', 'aaron', 'moses'],
    },
    { // 13
      s: 'Twelve spies explore Canaan, and ten bring a bad report.',
      m: 'Moses sends twelve men, one from each tribe, to scout the land of Canaan. They return after forty days with huge grapes, saying the land truly flows with milk and honey. But ten spies say the people are giants and the cities too strong, while Caleb urges Israel to go up and take it.',
      d: 'At God\'s command Moses sends a leader from each tribe, including Caleb of Judah and Hoshea, whom he renames Joshua, to spy out the land. They explore it for forty days and bring back a cluster of grapes so large two men carry it on a pole, along with pomegranates and figs. They report that the land flows with milk and honey, but the people are strong, the cities fortified, and the descendants of Anak live there. Caleb quiets the people, saying, "Let us go up at once and occupy it," but the others spread a bad report, claiming they seemed like grasshoppers next to the giants.',
      p: ['moses', 'joshua', 'caleb'],
    },
    { // 14
      s: 'Israel refuses to enter Canaan and must wander forty years.',
      m: 'The people weep all night and want to choose a leader to take them back to Egypt. Joshua and Caleb plead with them to trust the LORD, but the crowd talks of stoning them. God forgives at Moses\' plea, but sentences that generation to wander forty years until they die, except Caleb and Joshua.',
      d: 'The whole congregation weeps, grumbles against Moses and Aaron, and proposes to choose a captain and return to Egypt. Joshua and Caleb tear their clothes and say the land is exceedingly good and the LORD will give it to them if they do not rebel or fear, but the people want to stone them until the glory of the LORD appears. God threatens to destroy the people, but Moses pleads on the basis of His reputation and His character as "slow to anger and abounding in steadfast love," and God pardons them. Yet none of that generation will see the land except Caleb and Joshua; they will wander forty years, a year for each day of spying, and when the people then try to attack on their own, they are defeated.',
      p: ['moses', 'aaron', 'joshua', 'caleb'],
    },
    { // 15
      s: 'Laws for offerings in the land and for deliberate sin.',
      m: 'God gives instructions for offerings "when you come into the land," a reminder that His promise still stands. Unintentional sins can be atoned for, but sins done defiantly bring judgment. A man gathering sticks on the Sabbath is stoned, and Israel is told to wear tassels to remember God\'s commands.',
      d: 'Right after the sentence of wandering, God speaks of what Israel will do when they enter the land, showing His promise has not been cancelled. Grain and drink offerings must accompany sacrifices, and the same law applies to native Israelites and foreigners. Unintentional sins by the community or individuals can be forgiven through offerings, but anyone who sins "with a high hand" despises the word of the LORD and must be cut off. A man gathering wood on the Sabbath is stoned at God\'s command, and Israel is told to put blue tassels on their garments to remember and obey all God\'s commandments instead of following their own hearts and eyes.',
      p: ['moses'],
    },
    { // 16
      s: 'Korah rebels, and the earth swallows the rebels.',
      m: 'Korah, a Levite, joins with Dathan, Abiram and 250 leaders to challenge Moses and Aaron\'s authority. God makes the ground open and swallow the rebel leaders and their households, and fire consumes the 250 men. When the people blame Moses and Aaron, a plague breaks out until Aaron stands between the living and the dead.',
      d: 'Korah the Levite, with Dathan and Abiram of Reuben and 250 well-known leaders, accuses Moses and Aaron of exalting themselves, claiming the whole congregation is holy. Moses tells them to bring censers before the LORD so He can show whom He has chosen, and rebukes the Levites for seeking the priesthood too. The ground splits open and swallows Dathan, Abiram and Korah\'s household, and fire from the LORD consumes the 250 offering incense; their censers are hammered into a covering for the altar as a warning. The next day the congregation grumbles that Moses and Aaron have killed the LORD\'s people, a plague begins, and Aaron runs with incense and stands between the dead and the living until it stops, after 14,700 have died.',
      p: ['moses', 'aaron'],
    },
    { // 17
      s: 'Aaron\'s staff buds to confirm his priesthood.',
      m: 'To settle the question of who is chosen to be priest, each tribe\'s leader places a staff in the tabernacle. Overnight Aaron\'s staff sprouts, blossoms and produces almonds. It is kept before the ark as a sign against rebels.',
      d: 'God tells Moses to take twelve staffs, one for each tribe\'s chief, with Aaron\'s name written on Levi\'s staff, and place them before the testimony. He promises that the staff of the man He chooses will sprout and so stop Israel\'s grumbling. The next morning Aaron\'s staff has sprouted, put out buds, blossomed and borne ripe almonds. Moses shows the staffs to the people, and Aaron\'s is kept before the testimony as a sign, while the frightened people cry that anyone who comes near the tabernacle will die.',
      p: ['aaron', 'moses'],
    },
    { // 18
      s: 'The duties and income of priests and Levites.',
      m: 'God explains that the priests and Levites will bear responsibility for the sanctuary so that the people will not die. The priests receive portions of offerings and firstfruits, and the Levites receive Israel\'s tithes, since they have no land inheritance. The Levites in turn must give a tenth of what they receive.',
      d: 'In answer to the people\'s fear, God says Aaron and his sons will bear the guilt connected with the sanctuary and priesthood, and the Levites will guard the tent so that wrath will not fall on Israel again. The priests receive the holy portions of offerings, the firstfruits and the firstborn, by "a covenant of salt forever." Because priests and Levites will have no land, God says, "I am your portion and your inheritance." The Levites receive Israel\'s tithe as payment for their service and must give a tithe of that tithe to the priests.',
      p: ['aaron'],
    },
    { // 19
      s: 'The red heifer cleansing for contact with death.',
      m: 'God gives a ritual to cleanse those who become unclean by touching a dead body. A red heifer without defect is burned outside the camp, and its ashes are mixed with water. This water is sprinkled on the unclean person on the third and seventh days to purify them.',
      d: 'A perfect red cow that has never been yoked is slaughtered outside the camp, and the priest sprinkles its blood toward the tent seven times. The whole cow is burned with cedar wood, hyssop and scarlet yarn, and its ashes are stored as a means of purification. Anyone who touches a corpse, a bone or a grave is unclean for seven days and must be sprinkled with water mixed with these ashes on the third and seventh days. Those who refuse cleansing defile the tabernacle and are cut off, a vivid picture, later used in Hebrews 9:13–14, of how death defiles and must be cleansed.',
      p: ['aaron'],
    },
    { // 20
      s: 'Miriam dies, Moses strikes the rock, and Aaron dies.',
      m: 'Miriam dies at Kadesh, and the people quarrel again over lack of water. God tells Moses to speak to the rock, but Moses angrily strikes it twice, and God says he will not lead Israel into the land. Edom refuses to let Israel pass, and Aaron dies on Mount Hor.',
      d: 'Israel arrives at Kadesh in the first month, perhaps of the fortieth year, and Miriam dies there. With no water, the people contend with Moses again, and God tells Moses to take the staff and speak to the rock. Instead Moses says, "Hear now, you rebels: shall we bring water for you out of this rock?" and strikes it twice; water gushes out, but God says that because Moses and Aaron did not believe Him or uphold Him as holy, they will not bring the people into the land. Edom refuses passage, so Israel turns away, and at Mount Hor Aaron\'s garments are put on his son Eleazar before Aaron dies, and Israel mourns thirty days.',
      p: ['moses', 'aaron', 'miriam'],
    },
    ...more,
  ],
};
