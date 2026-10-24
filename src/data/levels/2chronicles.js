// 2 Chronicles at three reading levels. s = Simple, m = Moderate, d = Detailed, v = key verse, p = people.
// Book key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
import more from './2chronicles.b.js';

export default {
  book: {
    simple: 'Judah\'s kings rise and fall by whether they seek God, until exile and the call to return.',
    moderate: '2 Chronicles follows the kings of Judah from Solomon to the Babylonian exile. Solomon builds the temple, and God promises to hear and heal when His people humble themselves and pray. Kings who seek the LORD, like Jehoshaphat, Hezekiah and Josiah, are blessed, while those who forsake Him bring disaster, until Jerusalem falls and Cyrus finally invites the exiles home.',
    detailed: '2 Chronicles retells the history of Judah with the temple at its center. It begins with Solomon\'s wisdom, the building and dedication of the temple, and God\'s promise that if His people humble themselves, pray, seek His face and turn from their wicked ways, He will forgive and heal their land. After the kingdom divides, the Chronicler focuses on Judah alone, showing again and again that seeking God brings blessing and forsaking Him brings defeat, with extended accounts of reforming kings such as Asa, Jehoshaphat, Hezekiah and Josiah, and even the repentance of wicked Manasseh. The book ends with Judah mocking God\'s messengers until there is no remedy, Jerusalem and the temple destroyed, and the land enjoying its Sabbaths for seventy years, before Cyrus of Persia decrees that the temple be rebuilt and invites God\'s people to go up.',
    verse: { ref: '2 Chronicles 7:14', text: 'If my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land.' },
    themes: ['Seeking God brings blessing', 'The temple and true worship', 'Humble repentance and God\'s mercy', 'Hope beyond exile'],
    keyVerses: [
      { ref: '16:9', text: 'For the eyes of the LORD run to and fro throughout the whole earth, to give strong support to those whose heart is blameless toward him.' },
      { ref: '20:15', text: 'Do not be afraid and do not be dismayed at this great horde, for the battle is not yours but God\'s.' },
      { ref: '36:23', text: 'The LORD, the God of heaven, has given me all the kingdoms of the earth, and he has charged me to build him a house at Jerusalem.' },
    ],
  },
  sections: {
    1: { short: 'Solomon\'s wisdom, the temple\'s dedication and God\'s promise.' },
    10: { short: 'The kingdom divides; Asa and Jehoshaphat seek the LORD.' },
    21: { short: 'Judah swings between apostasy and renewal under several kings.' },
    29: { short: 'Hezekiah and Josiah restore temple worship and keep the Passover.' },
    36: { short: 'Jerusalem falls, and Cyrus invites the exiles home.' },
  },
  chapters: [
    { // 1
      s: 'Solomon asks God for wisdom and receives wealth too.',
      m: 'Solomon goes with all Israel to the tabernacle at Gibeon and offers a thousand burnt offerings. God appears to him that night and invites him to ask for anything, and Solomon asks for wisdom and knowledge to lead God\'s people. God grants it and adds riches and honor, and Solomon\'s wealth grows greatly.',
      d: 'Solomon establishes himself in his kingdom, and the LORD is with him and makes him exceedingly great. He leads the whole assembly to the high place at Gibeon, where the tent of meeting and Bezalel\'s bronze altar are, and offers a thousand burnt offerings. That night God says, "Ask what I shall give you," and Solomon asks for wisdom and knowledge to go out and come in before this great people. God is pleased that he did not ask for wealth, long life or the death of enemies, so He grants wisdom and also riches and honor beyond any king, and Solomon gathers chariots and horsemen and makes silver and gold as common as stone in Jerusalem.',
      p: ['solomon'],
    },
    { // 2
      s: 'Solomon arranges with Hiram to build the temple.',
      m: 'Solomon decides to build a temple for the LORD and a palace for himself. He asks Hiram, king of Tyre, for cedar and a skilled craftsman, explaining that God is greater than all gods. Hiram sends Huram-abi, a master artisan, and Solomon gathers foreign laborers for the work.',
      d: 'Solomon purposes to build a house for the name of the LORD and assigns seventy thousand burden bearers, eighty thousand stonecutters and three thousand six hundred overseers. He writes to Hiram king of Tyre, explaining that the house will be great "for our God is greater than all gods," though heaven itself cannot contain Him. He requests a skilled craftsman and cedar, cypress and algum timber from Lebanon in exchange for wheat, barley, wine and oil. Hiram blesses the LORD for giving David a wise son and sends Huram-abi, skilled in gold, silver, bronze, stone, wood and fabrics, and floats timber to Joppa, while Solomon conscripts the foreigners living in Israel as laborers.',
      p: ['solomon'],
    },
    { // 3
      s: 'Solomon builds the temple on Mount Moriah.',
      m: 'Solomon begins building the temple in Jerusalem on Mount Moriah, at the threshing floor David bought. The inside is overlaid with gold and decorated with precious stones and carved cherubim. Two great bronze pillars named Jachin and Boaz stand at the entrance.',
      d: 'Solomon begins to build the house of the LORD in Jerusalem on Mount Moriah, where the LORD appeared to David, on the threshing floor of Ornan, connecting the temple with Abraham\'s offering of Isaac and David\'s altar. The building is sixty cubits long and twenty wide, with a porch overlaid with pure gold. The Most Holy Place is lined with six hundred talents of fine gold, and two huge cherubim stand with outstretched wings touching the walls and each other. A veil of blue, purple and crimson with cherubim hangs before it, and two pillars named Jachin and Boaz are set up in front of the temple.',
      p: ['solomon', 'david', 'abraham'],
    },
    { // 4
      s: 'The temple furnishings are made.',
      m: 'Solomon makes a large bronze altar and a huge bronze sea resting on twelve oxen for the priests to wash in. He also makes golden lampstands, tables and other utensils for the temple. Huram finishes all the bronze work, and the vessels are too many to weigh.',
      d: 'Solomon makes a bronze altar twenty cubits square and the cast metal Sea, ten cubits across, standing on twelve bronze oxen facing outward, for the priests to wash in. Ten basins are made for washing the offerings, along with ten golden lampstands and ten tables, and a hundred golden basins. Huram completes the pillars, capitals, pots, shovels and other bronze work cast in the clay ground of the Jordan plain. Inside, Solomon makes the golden altar, the tables for the bread of the Presence, the lampstands of pure gold and all the golden utensils and doors.',
      p: ['solomon'],
    },
    { // 5
      s: 'The ark enters the temple, and God\'s glory fills it.',
      m: 'Solomon brings David\'s dedicated treasures into the temple and gathers Israel to bring up the ark. The priests place the ark in the Most Holy Place, and the Levite musicians praise God with one voice. As they sing, "He is good, for his steadfast love endures forever," the temple is filled with a cloud of God\'s glory.',
      d: 'When the work is finished, Solomon brings in the silver, gold and vessels David dedicated. He assembles the elders and heads of Israel at the feast in the seventh month, and the Levites carry the ark while countless sheep and oxen are sacrificed. The priests set the ark in the inner sanctuary under the cherubim\'s wings, containing only the two tablets Moses put there at Horeb. As the priests come out and the Levite singers and 120 trumpeters make themselves heard in unison praising the LORD, "For he is good, for his steadfast love endures forever," the house is filled with a cloud, and the priests cannot stand to minister because the glory of the LORD fills the house of God.',
      p: ['solomon', 'david', 'moses'],
    },
    { // 6
      s: 'Solomon prays at the temple\'s dedication.',
      m: 'Solomon blesses the LORD for keeping His promise to David. Kneeling before the assembly, he admits that heaven cannot contain God, yet asks Him to hear the prayers offered toward this temple. He prays for forgiveness and help in times of sin, defeat, drought, war and even exile, and asks God to hear foreigners as well.',
      d: 'Solomon tells the people that God has fulfilled with His hand what He promised David with His mouth, and that he has built the house for God\'s name. On a bronze platform he kneels with hands spread toward heaven and praises God, who keeps covenant and steadfast love, then asks, "Will God indeed dwell with man on the earth?" since heaven cannot contain Him. He asks God to hear when His people pray toward this place in cases of oath-taking, defeat, drought, famine, plague, foreign prayer, war and captivity, and to forgive when they repent with all their heart. He closes, "Arise, O LORD God, and go to your resting place," asking God to remember His steadfast love for David.',
      p: ['solomon', 'david'],
    },
    { // 7
      s: 'Fire falls from heaven, and God promises to heal the land.',
      m: 'When Solomon finishes praying, fire from heaven consumes the offerings and God\'s glory fills the temple, and the people bow and worship. After a great celebration, God appears to Solomon at night and promises that if His people humble themselves, pray, seek His face and turn from their wicked ways, He will forgive and heal their land. He warns that if they turn away to other gods, He will reject the temple and uproot them.',
      d: 'As Solomon finishes, fire comes down from heaven and consumes the burnt offering, and the glory of the LORD fills the temple so the priests cannot enter, and the people bow with faces to the ground, saying, "For he is good, for his steadfast love endures forever." Solomon and the people dedicate the temple with 22,000 oxen and 120,000 sheep and keep a great feast for fourteen days. The LORD appears to Solomon by night, saying He has chosen this place, and promising, "If my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land." He promises to establish Solomon\'s throne if he walks as David did, but warns that if they forsake Him for other gods, He will pluck Israel from the land and make this house a byword among the nations.',
      p: ['solomon', 'david'],
    },
    { // 8
      s: 'Solomon\'s building projects and organized worship.',
      m: 'Solomon builds and rebuilds many cities and uses the remaining Canaanite peoples as forced laborers. He offers sacrifices according to Moses\' commands on Sabbaths, new moons and feasts. He organizes the priests and Levites as David had arranged, and his ships bring gold from Ophir.',
      d: 'Over twenty years Solomon builds the temple and his palace, then rebuilds cities Hiram gave him, store cities and chariot cities in Hamath, Tadmor and elsewhere. The descendants of the Canaanite peoples left in the land are drafted as forced labor, while Israelites serve as soldiers and officials. Solomon moves Pharaoh\'s daughter out of the City of David because the places where the ark has been are holy, and he offers burnt offerings daily, on Sabbaths, new moons and the three annual feasts according to Moses\' commands. He appoints the priestly divisions, Levites and gatekeepers as David ordered, and Hiram\'s sailors bring 450 talents of gold from Ophir.',
      p: ['solomon', 'moses', 'david'],
    },
    { // 9
      s: 'The queen of Sheba visits, and Solomon dies.',
      m: 'The queen of Sheba comes to test Solomon with hard questions and is overwhelmed by his wisdom and wealth. She praises the LORD for placing Solomon on His throne. Solomon becomes the richest and wisest of all kings, and after forty years he dies and Rehoboam reigns.',
      d: 'Hearing of Solomon\'s fame, the queen of Sheba arrives with a great caravan of spices, gold and precious stones and tests him with hard questions, which he answers fully. Seeing his wisdom, house, food, servants and offerings, she is breathless and says the half was not told her, and she blesses the LORD who set Solomon "on his throne as king for the LORD your God." Solomon\'s income of gold, his great ivory throne overlaid with gold, his golden shields and his trade in horses from Egypt and other lands show he excels all the kings of the earth in riches and wisdom. After reigning forty years over all Israel, Solomon dies and is buried in the City of David, and his son Rehoboam reigns in his place.',
      p: ['solomon', 'rehoboam'],
    },
    { // 10
      s: 'Rehoboam\'s harsh answer splits the kingdom.',
      m: 'The people ask Rehoboam to lighten the heavy burden Solomon placed on them. Rejecting the elders\' advice, he follows his young friends and promises even harsher rule. The northern tribes rebel and follow Jeroboam, and the kingdom is divided.',
      d: 'All Israel gathers at Shechem to make Rehoboam king, and Jeroboam, returned from Egypt, leads them in asking for relief from Solomon\'s heavy yoke. The old men who served Solomon advise kindness, promising the people will be his servants forever, but Rehoboam follows the young men who grew up with him. He answers, "My father disciplined you with whips, but I will discipline you with scorpions," and the Chronicler notes this turn of affairs was brought about by God to fulfill the word spoken through Ahijah. Israel declares, "What portion have we in David?" stones Rehoboam\'s taskmaster Hadoram, and rebels against the house of David, leaving Rehoboam to rule only those living in Judah.',
      p: ['rehoboam', 'jeroboam', 'solomon'],
    },
    { // 11
      s: 'Rehoboam fortifies Judah, and faithful priests come south.',
      m: 'Rehoboam prepares to fight the northern tribes, but God tells him through Shemaiah not to fight his brothers, and he obeys. He fortifies cities throughout Judah. Priests, Levites and faithful people from the north move to Judah because Jeroboam has rejected them, strengthening the kingdom for three years.',
      d: 'Rehoboam assembles 180,000 warriors to fight Israel and restore the kingdom, but the word of the LORD comes to Shemaiah the man of God: "You shall not go up or fight against your relatives," for this thing is from God, and they obey. Rehoboam builds fortified cities across Judah and Benjamin and stocks them with food, oil, wine, shields and spears. The priests and Levites throughout Israel leave their lands and come to Judah, because Jeroboam has rejected them as priests and appointed his own for the high places, goat idols and calves. Those who set their hearts to seek the LORD follow them to Jerusalem to sacrifice, strengthening Judah for three years, and Rehoboam has many wives and children and appoints Abijah as chief prince.',
      p: ['rehoboam', 'jeroboam'],
    },
    { // 12
      s: 'Rehoboam abandons God, and Egypt plunders Jerusalem.',
      m: 'Once his kingdom is strong, Rehoboam and Judah abandon the law of the LORD. God allows Shishak of Egypt to invade, and the prophet Shemaiah declares that they have abandoned God, so He has abandoned them. When they humble themselves, God spares them from destruction, but Shishak carries off the temple treasures.',
      d: 'When Rehoboam\'s rule is established and strong, he and all Israel with him abandon the law of the LORD. In his fifth year Shishak king of Egypt comes up with twelve hundred chariots and countless troops, capturing Judah\'s fortified cities, and Shemaiah tells the leaders, "You abandoned me, so I have abandoned you to the hand of Shishak." The princes and the king humble themselves and say, "The LORD is righteous," and God says He will not destroy them but will grant some deliverance, though they will serve Shishak "that they may know my service and the service of the kingdoms of the countries." Shishak takes away the treasures of the temple and palace, including the gold shields, and Rehoboam does evil "for he did not set his heart to seek the LORD."',
      p: ['rehoboam'],
    },
    { // 13
      s: 'Abijah defeats Jeroboam by relying on God.',
      m: 'Rehoboam\'s son Abijah faces Jeroboam\'s much larger army. From a mountain he declares that Judah has kept the true priesthood and worship, while Israel has golden calves. Surrounded, Judah cries to the LORD and shouts, and God gives them a great victory because they relied on Him.',
      d: 'Abijah becomes king of Judah and goes to war against Jeroboam with 400,000 chosen men against Israel\'s 800,000. Standing on Mount Zemaraim, he reminds Israel that God gave the kingship to David\'s sons by a covenant of salt, condemns Jeroboam\'s golden calves and false priests, and declares that Judah has not forsaken the LORD, whose priests and Levites serve properly, so Israel should not fight against the LORD. Meanwhile Jeroboam sets an ambush behind Judah, and when Judah sees the battle before and behind, they cry to the LORD, the priests blow trumpets, and the men raise a battle shout. God defeats Jeroboam, and Judah prevails "because they relied on the LORD, the God of their fathers," while Jeroboam never recovers his power and dies.',
      p: ['jeroboam', 'david'],
    },
    { // 14
      s: 'Asa removes idols and God defeats a vast Cushite army.',
      m: 'Asa does what is good and right, removing foreign altars and idols and commanding Judah to seek the LORD. The land has peace, and he builds fortified cities. When Zerah the Cushite attacks with a huge army, Asa cries to God for help, and the LORD defeats the Cushites.',
      d: 'Asa does what is good and right in the eyes of the LORD, taking away foreign altars and high places, breaking down pillars and Asherim, and commanding Judah to seek the LORD and keep His law. The land has rest for ten years, and Asa builds fortified cities, saying that because they have sought the LORD, He has given them peace on every side. Zerah the Cushite comes against Judah with a million men and three hundred chariots, and Asa cries out, "O LORD, there is none like you to help, between the mighty and the weak," asking God to help them because they rely on Him. The LORD defeats the Cushites before Asa, and Judah carries away much plunder.',
      p: [],
    },
    { // 15
      s: 'Azariah\'s message leads Asa and Judah to renew the covenant.',
      m: 'The Spirit of God comes upon the prophet Azariah, who tells Asa that the LORD is with them while they are with Him, and if they seek Him He will be found. Encouraged, Asa removes more idols and gathers the people to make a covenant to seek the LORD with all their heart. He even removes his grandmother from being queen mother because of her idol.',
      d: 'The Spirit of God comes upon Azariah son of Oded, who meets Asa and declares that the LORD is with them while they are with Him: "If you seek him, he will be found by you, but if you forsake him, he will forsake you." He recalls how Israel suffered without the true God, a teaching priest and law, but found God when they turned to Him in distress, and he urges Asa to take courage, for his work will be rewarded. Asa removes the detestable idols from the whole land, repairs the altar, and gathers Judah, Benjamin and many from the north who have deserted to him, and they enter into a covenant to seek the LORD with all their heart and soul, rejoicing with a loud voice. Asa even removes Maacah, his grandmother, from being queen mother because she made a detestable image for Asherah, and there is no more war until his thirty-fifth year.',
      p: [],
    },
    { // 16
      s: 'Asa relies on Syria instead of God and ends poorly.',
      m: 'When Israel\'s King Baasha threatens Judah, Asa pays Syria with temple treasure to attack Israel instead of trusting the LORD. The seer Hanani rebukes him, saying God\'s eyes search the earth to strengthen those whose hearts are fully His. Asa angrily imprisons Hanani, and later, when severely diseased in his feet, he seeks only doctors, not the LORD.',
      d: 'In Asa\'s thirty-sixth year Baasha of Israel builds Ramah to block access to Judah, and Asa sends silver and gold from the temple and palace to Ben-hadad of Syria to break his treaty with Israel, which works. Hanani the seer rebukes Asa for relying on the king of Syria instead of the LORD, reminding him how God delivered the huge Cushite army when he relied on Him. "For the eyes of the LORD run to and fro throughout the whole earth, to give strong support to those whose heart is blameless toward him," Hanani says, and he warns that from now on Asa will have wars. Asa is enraged and puts Hanani in stocks and oppresses some of the people, and when he becomes severely diseased in his feet, he does not seek the LORD but only physicians, and he dies in his forty-first year.',
      p: [],
    },
    { // 17
      s: 'Jehoshaphat seeks God and sends teachers through Judah.',
      m: 'Jehoshaphat, Asa\'s son, walks in the early ways of David and seeks God rather than the Baals. He sends officials, Levites and priests throughout Judah to teach the people the Book of the Law. The fear of the LORD falls on surrounding nations, and Jehoshaphat grows strong and wealthy.',
      d: 'Jehoshaphat strengthens himself against Israel and places troops in Judah\'s fortified cities, and the LORD is with him because he walks in the earlier ways of David and does not seek the Baals but seeks the God of his father. His heart is courageous in the ways of the LORD, and he removes the high places and Asherim. In his third year he sends princes, Levites and priests through all the cities of Judah, "having the Book of the Law of the LORD with them," teaching the people. The fear of the LORD falls on the surrounding kingdoms so that they do not make war, even Philistines and Arabians bring tribute, and Jehoshaphat grows great with large armies and stores.',
      p: ['david'],
    },
    { // 18
      s: 'Jehoshaphat allies with Ahab, and Micaiah foretells defeat.',
      m: 'Jehoshaphat makes a marriage alliance with Ahab and agrees to join him in battle against Syria. Ahab\'s four hundred prophets promise victory, but Micaiah, the LORD\'s prophet, foretells Ahab\'s death. In the battle Jehoshaphat cries out and God helps him, but Ahab is killed by a random arrow.',
      d: 'Jehoshaphat has great riches and honor but makes a marriage alliance with Ahab of Israel and agrees to go up with him against Ramoth-gilead. He asks to inquire first for the word of the LORD, and when Ahab\'s four hundred prophets all promise success, he asks for another prophet. Micaiah, though pressured to agree, says he will speak only what God says, sees all Israel scattered like sheep without a shepherd, and describes a lying spirit God has allowed in the mouths of Ahab\'s prophets, so Ahab imprisons him. In battle the Syrians chase Jehoshaphat, mistaking him for the king of Israel, but he cries out, and the LORD helps him and draws them away, while a man draws his bow at random and strikes the disguised Ahab, who dies at sunset.',
      p: ['ahab'],
    },
    { // 19
      s: 'Jehoshaphat is rebuked and appoints judges.',
      m: 'Returning home, Jehoshaphat is rebuked by the seer Jehu for helping wicked Ahab, though some good is found in him. He goes out among the people to bring them back to the LORD. He appoints judges throughout Judah and charges them to judge in the fear of the LORD, without partiality or bribes.',
      d: 'When Jehoshaphat returns safely to Jerusalem, Jehu son of Hanani the seer asks, "Should you help the wicked and love those who hate the LORD?" announcing wrath, but also noting that some good is found in him because he destroyed the Asherahs and set his heart to seek God. Jehoshaphat goes out personally from Beersheba to the hill country of Ephraim and brings the people back to the LORD. He appoints judges in every fortified city, telling them they judge not for man but for the LORD, who has no injustice, partiality or bribe-taking. In Jerusalem he appoints Levites, priests and family heads to hear disputes, with Amariah the chief priest over religious matters and Zebadiah over the king\'s matters, urging them, "Deal courageously, and may the LORD be with the upright."',
      p: [],
    },
    { // 20
      s: 'Judah prays and praises, and God defeats a great army.',
      m: 'A vast army of Moabites, Ammonites and others comes against Judah, and Jehoshaphat proclaims a fast and prays, "We do not know what to do, but our eyes are on you." God answers through a Levite that the battle is not theirs but God\'s. As the singers lead the army praising God, the enemies destroy each other, and Judah collects plunder for three days.',
      d: 'Moabites, Ammonites and Meunites come against Jehoshaphat with a great multitude, and he is afraid but sets his face to seek the LORD, proclaiming a fast throughout Judah. Standing in the temple, he praises God\'s power, recalls His promise to hear prayers offered at this house, and ends, "We do not know what to do, but our eyes are on you," while all Judah stands with their little ones. The Spirit comes on Jahaziel the Levite, who declares, "Do not be afraid and do not be dismayed at this great horde, for the battle is not yours but God\'s," and tells them to stand firm and see the LORD\'s salvation. The next morning Jehoshaphat appoints singers to go before the army praising "the splendor of holiness," and as they begin to sing, the LORD sets ambushes, the enemy armies destroy one another, Judah spends three days gathering spoil, and they return to Jerusalem rejoicing, though later Jehoshaphat makes an alliance with wicked Ahaziah and their ships are wrecked.',
      p: [],
    },
    ...more,
  ],
};
