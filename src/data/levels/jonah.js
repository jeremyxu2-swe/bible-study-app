// Jonah at three reading levels. s = Simple, m = Moderate, d = Detailed, p = people.
// Book key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
export default {
  book: {
    simple: 'A reluctant prophet learns that God\'s mercy reaches even Israel\'s enemies.',
    moderate: 'God tells Jonah to preach against Nineveh, the capital of brutal Assyria, but Jonah runs the opposite way by ship. God sends a storm and a great fish that swallows Jonah, who prays and is spat out on dry land. When Jonah finally preaches, Nineveh repents and God spares it, which angers Jonah, and God teaches him that He cares for all people, even Israel\'s enemies.',
    detailed: 'Jonah son of Amittai was a prophet in Israel during Jeroboam II\'s reign, when Assyria was a feared enemy. Commanded to cry against wicked Nineveh, he flees toward Tarshish, but God hurls a great storm on the sea, the pagan sailors pray and eventually throw Jonah overboard at his own request, and God appoints a great fish to swallow him for three days and nights, where he prays a psalm of thanksgiving declaring, "Salvation belongs to the LORD!" Given a second chance, Jonah preaches a short message of doom, and the whole city, from the king to the animals, fasts and repents, so God relents from the disaster He had threatened. Jonah is furious, because he knew God was "gracious and merciful, slow to anger and abounding in steadfast love," and the book ends with God using a plant, a worm and a scorching wind to ask Jonah whether He should not pity the great city of Nineveh, a question left open for every reader, while Jesus later points to Jonah\'s three days in the fish as a sign of His own death and resurrection.',
    verse: { ref: 'Jonah 4:2', text: 'For I knew that you are a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster.' },
    themes: ['God\'s mercy for all nations', 'Running from God and second chances', 'Genuine repentance', 'God\'s sovereignty over creation'],
    keyVerses: [
      { ref: '2:9', text: 'Salvation belongs to the LORD!' },
      { ref: '3:10', text: 'When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them.' },
      { ref: '4:11', text: 'And should not I pity Nineveh, that great city?' },
    ],
  },
  sections: {
    1: { short: 'Jonah flees, is thrown into the sea and swallowed by a great fish.' },
    3: { short: 'Nineveh repents, God shows mercy, and Jonah sulks.' },
  },
  chapters: [
    { // 1
      s: 'Jonah runs from God and is thrown into the stormy sea.',
      m: 'God tells Jonah to go to Nineveh and preach against its wickedness, but Jonah boards a ship heading the opposite direction to Tarshish. God sends a great storm, and the terrified sailors cast lots, which fall on Jonah, who admits he is fleeing from the LORD. At Jonah\'s request they throw him overboard, the sea grows calm, the sailors worship the LORD, and God appoints a great fish to swallow Jonah.',
      d: 'The word of the LORD comes to Jonah son of Amittai: "Arise, go to Nineveh, that great city, and call out against it, for their evil has come up before me." But Jonah rises to flee to Tarshish from the presence of the LORD, going down to Joppa, paying the fare and going down into the ship, and then down into the inner part where he lies fast asleep. The LORD hurls a great wind on the sea so the ship threatens to break up, the sailors each cry out to his god and throw cargo overboard, and the captain wakes Jonah, telling him to call on his god; when lots fall on Jonah, he confesses, "I am a Hebrew, and I fear the LORD, the God of heaven, who made the sea and the dry land." Jonah tells them to throw him into the sea, the sailors row hard to avoid it and then pray not to be held guilty, and when they throw him overboard, the sea ceases from its raging, the men fear the LORD exceedingly and offer sacrifices and vows, "and the LORD appointed a great fish to swallow up Jonah," and he is in its belly three days and three nights, a sign Jesus applied to His own burial (Matthew 12:40).',
      p: ['jonah', 'jesus'],
    },
    { // 2
      s: 'Jonah prays from inside the fish, and God rescues him.',
      m: 'From the belly of the fish, Jonah prays to the LORD, describing how he sank into the depths with seaweed around his head and felt banished from God\'s sight. Yet God brought his life up from the pit when he remembered the LORD. He vows to offer thanksgiving, declaring, "Salvation belongs to the LORD!" and God commands the fish to vomit Jonah onto dry land.',
      d: 'Jonah prays to the LORD his God from the belly of the fish, a psalm of thanksgiving: "I called out to the LORD, out of my distress, and he answered me; out of the belly of Sheol I cried, and you heard my voice." He describes being cast into the deep, with all God\'s waves and billows passing over him, feeling driven away from God\'s sight, the waters closing over him and weeds wrapped about his head as he went down to the land whose bars closed forever. "Yet you brought up my life from the pit, O LORD my God. When my life was fainting away, I remembered the LORD, and my prayer came to you, into your holy temple." He contrasts those who pay regard to vain idols and forsake their hope of steadfast love with his own vow to sacrifice with the voice of thanksgiving, ending, "Salvation belongs to the LORD!" and the LORD speaks to the fish, and it vomits Jonah out upon the dry land.',
      p: ['jonah'],
    },
    { // 3
      s: 'Jonah preaches, and all Nineveh repents.',
      m: 'God gives Jonah a second chance, and this time he goes to Nineveh, a city so great it takes three days to cross. He proclaims, "Yet forty days, and Nineveh shall be overthrown!" and the people believe God, fast and put on sackcloth, from the greatest to the least. The king calls everyone to turn from violence, and when God sees their repentance, He relents from the disaster He had threatened.',
      d: 'The word of the LORD comes to Jonah a second time: "Arise, go to Nineveh, that great city, and call out against it the message that I tell you," and this time Jonah obeys. Nineveh is an exceedingly great city, three days\' journey in breadth, and Jonah goes a day\'s journey in and calls out, "Yet forty days, and Nineveh shall be overthrown!" a message of just five Hebrew words. The people of Nineveh believe God, call for a fast and put on sackcloth, from the greatest to the least, and when the word reaches the king, he rises from his throne, covers himself with sackcloth, sits in ashes, and decrees that people and animals fast, be covered in sackcloth and call out mightily to God, "Let everyone turn from his evil way and from the violence that is in his hands. Who knows? God may turn and relent." "When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them, and he did not do it," a story Jesus later used to rebuke His own generation, since the people of Nineveh repented at the preaching of Jonah and "something greater than Jonah is here" (Matthew 12:41).',
      p: ['jonah', 'jesus'],
    },
    { // 4
      s: 'Jonah is angry at God\'s mercy, and God teaches him compassion.',
      m: 'Jonah is furious that God spared Nineveh, admitting he fled because he knew God was gracious and merciful, and he asks to die. God provides a plant to shade Jonah, then a worm to destroy it and a scorching wind, and Jonah is angry enough to die over the plant. God asks why Jonah pities a plant he did not make, while God should not pity Nineveh with its 120,000 people who do not know right from left, and many animals.',
      d: 'Jonah is exceedingly displeased and angry, and he prays, "O LORD, is not this what I said when I was yet in my country? That is why I made haste to flee to Tarshish; for I knew that you are a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster," asking God to take his life. The LORD asks, "Do you do well to be angry?" and Jonah goes out east of the city, makes a booth, and sits in its shade to see what will happen. God appoints a plant to grow up over Jonah\'s head to save him from discomfort, and Jonah is exceedingly glad, but at dawn God appoints a worm that attacks the plant so it withers, and then a scorching east wind and blazing sun so that Jonah faints and again asks to die, insisting, "Yes, I do well to be angry, angry enough to die." The LORD replies, "You pity the plant, for which you did not labor, nor did you make it grow... And should not I pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left, and also much cattle?" and the book ends with this question unanswered, inviting readers to share God\'s compassion for the lost.',
      p: ['jonah'],
    },
  ],
};
