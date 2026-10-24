// Exodus at three reading levels. s = Simple, m = Moderate, d = Detailed, v = key verse, p = people.
// Book key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
import more from './exodus.b.js';

export default {
  book: {
    simple: 'God rescues Israel from slavery in Egypt and makes them His people at Mount Sinai.',
    moderate: 'Israel is enslaved in Egypt until God calls Moses and sends ten plagues to set them free. He brings them through the Red Sea, provides for them in the wilderness, and gives them His law at Mount Sinai. The book ends with God\'s glory filling the tabernacle so He can live among His people.',
    detailed: 'Exodus opens with Jacob\'s descendants multiplying in Egypt and a new Pharaoh forcing them into brutal slavery. God hears their cry, calls Moses at the burning bush, reveals His name, and through ten plagues and the Passover breaks Pharaoh\'s power and brings Israel out through the Red Sea. At Mount Sinai He makes a covenant with them, giving the Ten Commandments and laws for life as His treasured possession, and even after the sin of the golden calf He renews the covenant. The book closes with the tabernacle built exactly as God commanded and His glory filling it, showing that the goal of redemption is God dwelling with His people.',
    verse: { ref: 'Exodus 20:2', text: 'I am the LORD your God, who brought you out of the land of Egypt, out of the house of slavery.' },
    themes: ['God hears and rescues the oppressed', 'The Passover lamb and redemption', 'The covenant and the law at Sinai', 'God\'s presence living among His people'],
    keyVerses: [
      { ref: '3:14', text: 'God said to Moses, "I AM WHO I AM."' },
      { ref: '12:13', text: 'And when I see the blood, I will pass over you.' },
      { ref: '14:14', text: 'The LORD will fight for you, and you have only to be silent.' },
      { ref: '34:6', text: 'The LORD, the LORD, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness.' },
    ],
  },
  sections: {
    1: { short: 'Israel is enslaved; God calls Moses at the burning bush.' },
    7: { short: 'Ten plagues strike Egypt, and the Passover sets Israel free.' },
    14: { short: 'God parts the Red Sea and provides in the wilderness.' },
    19: { short: 'God makes His covenant with Israel and gives the law.' },
    25: { short: 'Plans for the tabernacle, the golden calf, and God\'s glory filling His dwelling.' },
  },
  chapters: [
    { // 1
      s: 'A new Pharaoh enslaves the growing nation of Israel.',
      m: 'Jacob\'s family multiplies greatly in Egypt after Joseph\'s death. A new Pharaoh who did not know Joseph fears them and forces them into hard slavery. When he orders the Hebrew midwives to kill the baby boys, they fear God and refuse, so he commands that every newborn son be thrown into the Nile.',
      d: 'The seventy descendants of Jacob who came to Egypt become so fruitful that the land is filled with them, just as God promised Abraham. A new king who does not know Joseph sees them as a threat and puts slave masters over them, forcing them to build store cities with ruthless labor. Yet the more they are oppressed, the more they multiply. Pharaoh orders the midwives Shiphrah and Puah to kill Hebrew baby boys, but they fear God and let the boys live, so Pharaoh commands all his people to throw every newborn Hebrew son into the Nile.',
      p: [],
    },
    { // 2
      s: 'Baby Moses is saved, grows up, and flees to Midian.',
      m: 'A Levite mother hides her baby in a basket on the Nile, and Pharaoh\'s daughter finds him and names him Moses. As a grown man Moses kills an Egyptian who is beating a Hebrew and flees to Midian, where he marries and has a son. Meanwhile Israel groans in slavery, and God hears and remembers His covenant.',
      d: 'A Levite woman hides her son for three months, then places him in a basket among the reeds of the Nile while his sister watches. Pharaoh\'s daughter finds him, has pity on him, and, through his sister\'s quick thinking, hires his own mother to nurse him before raising him as her son and naming him Moses. Grown up, Moses sees an Egyptian beating a Hebrew and kills him, and when the deed becomes known he flees to Midian, where he defends the daughters of the priest Reuel, marries Zipporah, and names his son Gershom. Years pass, the king of Egypt dies, and the people of Israel cry out; God hears their groaning and remembers His covenant with Abraham, Isaac and Jacob.',
      p: ['moses', 'miriam'],
    },
    { // 3
      s: 'God calls Moses from a burning bush.',
      m: 'While tending sheep, Moses sees a bush that burns without being consumed, and God speaks to him from it. God says He has seen His people\'s suffering and is sending Moses to bring them out of Egypt. When Moses asks His name, God answers, "I AM WHO I AM."',
      d: 'At Horeb, the mountain of God, Moses sees a bush burning but not consumed, and the LORD calls to him from it, telling him to remove his sandals because the ground is holy. God says He has seen the affliction of His people, heard their cry, and come down to deliver them and bring them into a good land. Moses objects, "Who am I?" and God promises, "I will be with you." When Moses asks for His name, God reveals Himself as "I AM WHO I AM," the LORD, the God of their fathers, and foretells that Pharaoh will resist until God strikes Egypt and Israel leaves with Egypt\'s riches.',
      p: ['moses'],
    },
    { // 4
      s: 'God gives Moses signs, and Aaron joins him.',
      m: 'Moses worries that no one will believe him, so God gives him miraculous signs, including a staff that turns into a snake. When Moses says he is not a good speaker, God angrily appoints Aaron to speak for him. Moses returns to Egypt, and the elders of Israel believe and worship.',
      d: 'Moses fears the people will not believe him, so God gives him three signs: his staff becomes a serpent, his hand becomes leprous and is restored, and water from the Nile will turn to blood. Moses protests that he is slow of speech, and God reminds him who made man\'s mouth, but when Moses begs Him to send someone else, God\'s anger burns and He appoints Aaron as his spokesman. On the way to Egypt, God confronts Moses because his son is uncircumcised, and Zipporah circumcises the boy. Aaron meets Moses in the wilderness, and when they show the signs to the elders, the people believe and bow in worship.',
      p: ['moses', 'aaron'],
    },
    { // 5
      s: 'Pharaoh refuses Moses and makes the slavery harder.',
      m: 'Moses and Aaron ask Pharaoh to let Israel go to worship in the wilderness. Pharaoh says he does not know the LORD and orders the slaves to make bricks without being given straw. The Israelite foremen blame Moses, and Moses complains to God.',
      d: 'Moses and Aaron tell Pharaoh that the LORD, the God of Israel, says, "Let my people go." Pharaoh answers, "Who is the LORD, that I should obey his voice?" and accuses the people of being lazy. He orders that they gather their own straw while still making the same number of bricks, and the Israelite foremen are beaten when they fall short. The foremen accuse Moses and Aaron of making them stink in Pharaoh\'s eyes, and Moses turns to the LORD, asking why He has done evil to this people and not delivered them.',
      p: ['moses', 'aaron'],
    },
    { // 6
      s: 'God repeats His promise to rescue and adopt Israel.',
      m: 'God assures Moses that He will act with a mighty hand and reminds him of the covenant with the patriarchs. He promises to bring Israel out, redeem them, take them as His people and give them the land. The people are too discouraged to listen, and the chapter traces the family line of Moses and Aaron.',
      d: 'The LORD tells Moses that Pharaoh will soon let the people go because of His strong hand. He reveals that He appeared to Abraham, Isaac and Jacob as God Almighty but now will show the meaning of His name, the LORD, by keeping His covenant. He gives a series of "I will" promises: to bring them out, deliver them, redeem them with an outstretched arm, take them as His people, be their God and bring them into the land. The Israelites do not listen because of their broken spirit and harsh slavery, and a genealogy shows Moses and Aaron\'s descent from Levi.',
      p: ['moses', 'aaron'],
    },
    { // 7
      s: 'Aaron\'s staff becomes a serpent, and the Nile turns to blood.',
      m: 'God says He will harden Pharaoh\'s heart so Egypt will know that He is the LORD. Aaron\'s staff becomes a serpent and swallows the magicians\' staffs, but Pharaoh will not listen. In the first plague, the Nile turns to blood.',
      d: 'God tells Moses that he will be like God to Pharaoh, with Aaron as his prophet, and that He will harden Pharaoh\'s heart and multiply His signs so Egypt will know He is the LORD. Moses is eighty and Aaron eighty-three when they speak to Pharaoh. Aaron\'s staff becomes a serpent, and though the magicians do the same by their secret arts, Aaron\'s staff swallows theirs. At God\'s command Aaron strikes the Nile, and all the water in Egypt turns to blood, the fish die, and the river stinks, yet Pharaoh\'s heart stays hard.',
      p: ['moses', 'aaron'],
    },
    { // 8
      s: 'Plagues of frogs, gnats and flies strike Egypt.',
      m: 'Frogs cover the land, and Pharaoh promises to let Israel go but changes his mind once they die. Gnats come next, and the magicians admit, "This is the finger of God." Then swarms of flies fill Egypt but not Goshen, where Israel lives.',
      d: 'In the second plague frogs swarm over Egypt, even into beds and ovens, and Pharaoh begs Moses to pray and promises to let the people go. When the frogs die, he hardens his heart. Aaron strikes the dust and it becomes gnats, which the magicians cannot copy, and they tell Pharaoh, "This is the finger of God." In the fourth plague, swarms of flies ruin the land, but God makes a distinction by sparing Goshen; Pharaoh bargains again, then breaks his word once more.',
      p: ['moses', 'aaron'],
    },
    { // 9
      s: 'Plagues on livestock, boils and hail.',
      m: 'A plague kills Egypt\'s livestock but not Israel\'s, and then painful boils break out on people and animals. God sends the worst hail Egypt has ever seen, though those who fear His word shelter their servants and animals. Pharaoh admits he has sinned but hardens his heart again.',
      d: 'In the fifth plague a severe disease kills the livestock of Egypt, but not one animal belonging to Israel dies. Moses throws soot into the air, and boils break out on people and animals, so even the magicians cannot stand before him. God tells Pharaoh He has raised him up to show His power and make His name known in all the earth, then sends a terrible hailstorm with fire, while Egyptians who fear the word of the LORD bring their servants and livestock inside. Pharaoh confesses, "This time I have sinned; the LORD is in the right," but once the storm stops, he sins again and hardens his heart.',
      p: ['moses', 'aaron'],
    },
    { // 10
      s: 'Locusts and darkness cover Egypt.',
      m: 'Pharaoh\'s officials beg him to let Israel go, but he will release only the men. Locusts devour every plant that survived the hail. Then thick darkness covers Egypt for three days, while the Israelites have light where they live.',
      d: 'God says He has hardened Pharaoh\'s heart so that Israel may tell their children how He dealt with Egypt. Pharaoh\'s servants plead, "Do you not yet understand that Egypt is ruined?" but Pharaoh offers to let only the men go. An east wind brings locusts that cover the ground and eat everything left after the hail, and though Pharaoh confesses his sin, he again refuses once they are gone. Then a darkness that can be felt covers Egypt for three days, while all the Israelites have light; Pharaoh bargains to keep their flocks and finally threatens Moses with death if he sees his face again.',
      p: ['moses', 'aaron'],
    },
    { // 11
      s: 'God announces the final plague: the death of the firstborn.',
      m: 'The LORD tells Moses one more plague will come, after which Pharaoh will drive Israel out. At midnight every firstborn in Egypt will die, from Pharaoh\'s son to the livestock. But not even a dog will growl at the Israelites, so Egypt will know that the LORD makes a distinction.',
      d: 'God tells Moses that after one more plague Pharaoh will not just let them go but drive them out completely. He tells the people to ask their Egyptian neighbors for silver and gold, and the LORD gives them favor, while Moses himself is greatly respected in Egypt. Moses warns Pharaoh that at midnight every firstborn in the land will die, from the son of Pharaoh to the son of the slave girl and the firstborn of the cattle, with a great cry throughout Egypt. Among Israel, however, not a dog will growl, so that Egypt will know the LORD distinguishes between Egypt and Israel; Moses leaves in hot anger.',
      p: ['moses'],
    },
    { // 12
      s: 'The Passover lamb protects Israel, and they leave Egypt.',
      m: 'God institutes the Passover: each household must sacrifice a lamb and put its blood on the doorposts. At midnight the LORD strikes down Egypt\'s firstborn but passes over the houses marked by blood. Pharaoh drives Israel out, and they leave after 430 years in Egypt.',
      d: 'The LORD makes this month the beginning of Israel\'s year and commands each household to take a spotless lamb, kill it at twilight, put its blood on the doorposts, and eat it in haste with unleavened bread and bitter herbs. He promises, "When I see the blood, I will pass over you," and establishes Passover and the Feast of Unleavened Bread as lasting memorials. At midnight every firstborn of Egypt dies, and Pharaoh summons Moses and Aaron by night and tells them to go. About six hundred thousand men, plus women, children and a mixed multitude, leave with Egypt\'s silver and gold on the very day the 430 years end.',
      p: ['moses', 'aaron'],
    },
    { // 13
      s: 'God leads Israel by a pillar of cloud and fire.',
      m: 'God commands Israel to dedicate every firstborn to Him and to keep the Feast of Unleavened Bread as a reminder of His rescue. He leads them the long way toward the Red Sea so they will not turn back at the sight of war. Moses carries Joseph\'s bones, and the LORD goes before them in a pillar of cloud by day and fire by night.',
      d: 'The LORD says every firstborn male among people and animals belongs to Him, and the firstborn sons must be redeemed, because He struck Egypt\'s firstborn to free Israel. Moses tells the people to remember the day by eating unleavened bread for seven days and to explain to their children that the LORD brought them out with a strong hand. God does not lead them by the short road through Philistine territory, lest they see war and return to Egypt, but leads them toward the Red Sea. Moses takes Joseph\'s bones as promised, and the LORD goes before them in a pillar of cloud by day and a pillar of fire by night.',
      p: ['moses', 'joseph'],
    },
    { // 14
      s: 'God parts the Red Sea, and Egypt\'s army drowns.',
      m: 'Pharaoh changes his mind and chases Israel with his chariots, trapping them by the sea. Moses tells the terrified people that the LORD will fight for them, and God parts the waters so Israel walks through on dry ground. When the Egyptians follow, the sea returns and covers them.',
      d: 'God leads Israel to camp by the sea so that Pharaoh will think they are trapped and pursue them, and Pharaoh sets out with six hundred chariots. The people panic and accuse Moses of bringing them out to die, but Moses answers, "Fear not, stand firm, and see the salvation of the LORD," promising that the LORD will fight for them. The pillar of cloud moves behind Israel, Moses stretches out his hand, and a strong east wind divides the waters so Israel crosses on dry ground with walls of water on either side. When the Egyptians follow, God throws them into confusion, the sea returns, and not one survives, so Israel fears the LORD and believes in Him and in His servant Moses.',
      p: ['moses'],
    },
    { // 15
      s: 'Israel sings a song of victory to the LORD.',
      m: 'Moses and the people sing praise to the LORD, who has thrown horse and rider into the sea. Miriam leads the women with tambourines and dancing. Three days later the people grumble over bitter water at Marah, and God makes it sweet and promises to be their healer.',
      d: 'Moses and Israel sing a great song celebrating the LORD as a warrior who has triumphed gloriously, throwing Pharaoh\'s army into the sea. The song declares that no god is like Him, majestic in holiness, and looks ahead to God leading His redeemed people to His holy dwelling and reigning forever. Miriam the prophetess takes a tambourine and leads the women in dancing and singing. After three days without water, they find only bitter water at Marah and grumble; God shows Moses a log that makes the water sweet, promises "I am the LORD, your healer," and leads them on to the springs and palm trees of Elim.',
      p: ['moses', 'miriam'],
    },
    { // 16
      s: 'God feeds Israel with manna and quail.',
      m: 'In the wilderness the people grumble that they were better off in Egypt. God sends quail in the evening and manna each morning, bread from heaven. They must gather only what they need each day, with a double portion before the Sabbath, to learn to trust Him.',
      d: 'A month after leaving Egypt, the whole congregation grumbles in the wilderness of Sin, wishing they had died by the meat pots of Egypt. The LORD promises to rain bread from heaven to test whether they will follow His instructions, and that evening quail cover the camp while in the morning flakes like frost appear, which they call manna. Each person is to gather what he needs; leftovers breed worms, except on the sixth day, when they gather a double portion and it keeps for the Sabbath. Some disobey and go out on the Sabbath, a jar of manna is kept as a lasting reminder, and Israel eats manna for forty years.',
      p: ['moses', 'aaron'],
    },
    { // 17
      s: 'Water flows from the rock, and Israel defeats Amalek.',
      m: 'At Rephidim the people quarrel with Moses for water, and God tells him to strike a rock, from which water flows. Then Amalek attacks Israel. As long as Moses holds up his hands, Joshua\'s army wins, so Aaron and Hur hold his hands up until sunset.',
      d: 'Camped at Rephidim with no water, the people quarrel with Moses and test the LORD, asking, "Is the LORD among us or not?" God tells Moses to strike the rock at Horeb with his staff, and water comes out for the people, so the place is named Massah and Meribah. Amalek comes to fight, and Moses sends Joshua into battle while he stands on a hill with the staff of God. When Moses raises his hands Israel prevails, and when he lowers them Amalek prevails, so Aaron and Hur hold up his hands until Joshua wins; Moses builds an altar named "The LORD Is My Banner."',
      p: ['moses', 'joshua', 'aaron'],
    },
    { // 18
      s: 'Jethro visits Moses and advises him to share leadership.',
      m: 'Moses\' father-in-law Jethro brings Moses\' wife and sons to the camp and rejoices at what God has done. Seeing Moses judging the people from morning till evening, Jethro warns that he will wear himself out. He advises Moses to appoint capable, God-fearing men to judge smaller cases.',
      d: 'Jethro, priest of Midian, hears what God has done for Israel and brings Zipporah and her two sons to Moses at the mountain of God. Moses tells him the whole story of deliverance, and Jethro blesses the LORD, saying, "Now I know that the LORD is greater than all gods," and offers sacrifices. The next day Jethro watches Moses sit from morning to evening judging the people\'s disputes and tells him this is not good, because he will wear out himself and the people. He advises Moses to teach God\'s laws and appoint trustworthy men who fear God as leaders over thousands, hundreds, fifties and tens, and Moses listens and does it.',
      p: ['moses'],
    },
    { // 19
      s: 'God meets Israel at Mount Sinai.',
      m: 'Israel camps before Mount Sinai, and God offers to make them His treasured possession, a kingdom of priests and a holy nation. The people promise to do all He says and consecrate themselves for three days. Then the LORD descends on the mountain in fire, smoke, thunder and a loud trumpet blast.',
      d: 'Three months after leaving Egypt, Israel camps at Sinai, and God tells Moses to remind them how He carried them on eagles\' wings. If they obey His voice and keep His covenant, they will be His treasured possession among all peoples, a kingdom of priests and a holy nation, and the people answer, "All that the LORD has spoken we will do." They wash their garments and set boundaries around the mountain, since anyone who touches it must die. On the third day thunder, lightning, a thick cloud and a very loud trumpet fill the camp with trembling, and the LORD descends on the smoking mountain in fire as Moses goes up to meet Him.',
      p: ['moses', 'aaron'],
    },
    { // 20
      s: 'God gives the Ten Commandments.',
      m: 'God speaks the Ten Commandments, beginning with a reminder that He brought Israel out of slavery. They call Israel to worship Him alone, honor His name and the Sabbath, honor parents, and not murder, commit adultery, steal, lie or covet. Terrified by God\'s voice, the people ask Moses to speak to them instead.',
      d: 'God introduces Himself as the LORD who brought them out of Egypt, then gives the Ten Commandments. They forbid other gods and idols, misusing God\'s name, and working on the Sabbath, and command honoring father and mother. They also forbid murder, adultery, stealing, false witness and coveting. The people tremble at the thunder and smoke and beg Moses to speak to them instead of God, and Moses explains that God has come to test them so that the fear of Him will keep them from sinning; God then gives instructions for simple altars of earth or uncut stones.',
      p: ['moses'],
    },
    ...more,
  ],
};
