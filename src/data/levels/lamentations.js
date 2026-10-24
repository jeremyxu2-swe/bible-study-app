// Lamentations at three reading levels. s = Simple, m = Moderate, d = Detailed, p = people.
// Book key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
export default {
  book: {
    simple: 'Five poems of grief over Jerusalem\'s destruction, with hope in God\'s mercy.',
    moderate: 'Lamentations is a series of five poems mourning the fall of Jerusalem to Babylon in 586 BC, traditionally written by Jeremiah. They honestly describe the city\'s ruin, suffering and famine, and confess that it came because of the people\'s sin. At the very center is a bright hope: God\'s steadfast love never ceases and His mercies are new every morning.',
    detailed: 'Lamentations gives voice to the shock and grief of Jerusalem\'s destruction, when the temple was burned, the people slaughtered or exiled, and survivors starved in the streets. Four of its five poems are acrostics, each verse beginning with the next letter of the Hebrew alphabet, as if to express grief from A to Z, while the fifth has twenty-two lines without the acrostic pattern. The poems picture Jerusalem as a weeping widow with no one to comfort her, admit that "the LORD has done what he purposed" because of Judah\'s sins, and describe horrors such as mothers eating their children during the siege. At the heart of the book, in chapter 3, the poet remembers that "the steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning," and the book ends with a plea: "Restore us to yourself, O LORD, that we may be restored!"',
    verse: { ref: 'Lamentations 3:22–23', text: 'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.' },
    themes: ['Honest grief and lament', 'Sin and God\'s righteous judgment', 'God\'s faithfulness in the darkest times', 'Waiting quietly for salvation'],
    keyVerses: [
      { ref: '1:12', text: 'Is it nothing to you, all you who pass by? Look and see if there is any sorrow like my sorrow.' },
      { ref: '3:25', text: 'The LORD is good to those who wait for him, to the soul who seeks him.' },
      { ref: '5:21', text: 'Restore us to yourself, O LORD, that we may be restored! Renew our days as of old.' },
    ],
  },
  sections: {
    1: { short: 'Five laments over Jerusalem\'s fall, with hope in God\'s new mercies.' },
  },
  chapters: [
    { // 1
      s: 'Jerusalem sits alone like a weeping widow with no comforter.',
      m: 'The once-crowded city of Jerusalem sits lonely like a widow, weeping bitterly at night with none to comfort her. Her people have gone into exile, her enemies prosper, and her temple has been invaded by foreigners, because she sinned grievously. Jerusalem herself cries out to passersby to see if any sorrow is like hers, acknowledging that the LORD is in the right.',
      d: '"How lonely sits the city that was full of people! How like a widow has she become, she who was great among the nations!" the first acrostic begins. She weeps bitterly in the night with tears on her cheeks, and among all her lovers she has none to comfort her, for her friends have become her enemies, Judah has gone into exile, and the roads to Zion mourn because no one comes to the festivals. "Jerusalem sinned grievously; therefore she became filthy," and the enemy has stretched out his hands over her precious things and entered her sanctuary, while her people groan as they search for bread. Jerusalem herself speaks, "Is it nothing to you, all you who pass by? Look and see if there is any sorrow like my sorrow," confessing, "The LORD is in the right, for I have rebelled against his word," and asking God to see her distress and deal with her enemies as He has dealt with her.',
      p: ['jeremiah'],
    },
    { // 2
      s: 'The LORD in His anger has destroyed Jerusalem and the temple.',
      m: 'The poet describes how the Lord, acting like an enemy, has swallowed up Israel\'s strongholds, destroyed the temple, and rejected His altar. Children and infants faint from hunger in the streets, and the prophets gave false visions that did not expose the people\'s sin. The poet urges Zion to pour out her heart like water before the Lord and plead for the lives of her children.',
      d: '"How the Lord in his anger has set the daughter of Zion under a cloud!" the second acrostic begins, describing how He has swallowed up the habitations of Jacob without mercy, broken down Judah\'s strongholds, and "become like an enemy." He has laid waste His booth like a garden, made Zion forget festival and Sabbath, scorned His altar and disowned His sanctuary, so that the law is no more and the prophets receive no vision. The poet\'s eyes are spent with weeping as infants and babies faint in the streets, asking their mothers, "Where is bread and wine?" and he laments that Jerusalem\'s prophets saw false and deceptive visions and did not expose her iniquity to restore her fortunes. He urges, "Arise, cry out in the night... Pour out your heart like water before the presence of the Lord! Lift your hands to him for the lives of your children," and the chapter ends with a raw protest to God over the horrors of the siege.',
      p: ['jeremiah'],
    },
    { // 3
      s: 'In deep affliction, the poet hopes in God\'s new mercies every morning.',
      m: 'A man who has seen affliction describes feeling that God has walled him in, broken his bones and shut out his prayer. Yet he calls to mind that the LORD\'s steadfast love never ceases and His mercies are new every morning; great is His faithfulness. He concludes that it is good to wait quietly for the LORD\'s salvation, and he calls the people to examine their ways and return to Him.',
      d: 'In a triple acrostic, a man who has seen affliction under the rod of God\'s wrath describes being driven into darkness, his flesh and skin wasted, walled in with heavy chains, and shut out from prayer, made a laughingstock to his people and filled with bitterness. "But this I call to mind, and therefore I have hope: The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness. \'The LORD is my portion,\' says my soul, \'therefore I will hope in him.\'" He reasons that the LORD is good to those who wait for Him, "it is good that one should wait quietly for the salvation of the LORD," and "the Lord will not cast off forever, but, though he cause grief, he will have compassion according to the abundance of his steadfast love," for He does not afflict from His heart. He urges, "Let us test and examine our ways, and return to the LORD! Let us lift up our hearts and hands to God in heaven," confesses their sin, recalls how God came near when he called from the pit and said, "Do not fear!" and asks God to repay his enemies.',
      p: ['jeremiah'],
    },
    { // 4
      s: 'The horrors of the siege contrast with Jerusalem\'s former glory.',
      m: 'The poet laments how Jerusalem\'s gold has grown dim and its precious children are treated like clay pots. During the siege, nursing infants were thirsty, nobles became unrecognizable, and compassionate mothers even boiled their own children. This came because of the sins of the prophets and priests, but the poem ends saying Zion\'s punishment is complete and Edom\'s is coming.',
      d: '"How the gold has grown dim, how the pure gold is changed!" the fourth acrostic begins, as Zion\'s precious sons, worth their weight in gold, are now regarded as earthen pots. Even jackals nurse their young, but the tongue of the nursing infant sticks to its mouth for thirst and children beg for bread with no one to give it, while those who once ate delicacies perish in the streets, and the punishment of Jerusalem is greater than Sodom\'s. "The hands of compassionate women have boiled their own children; they became their food," the poet writes, fulfilling the curses of Deuteronomy 28, and he says this happened because of the sins of the prophets and iniquities of the priests who shed the blood of the righteous. Hopes in a nation that could not save failed, even the LORD\'s anointed king was captured in their pits, yet the poem ends, "The punishment of your iniquity, O daughter of Zion, is accomplished," while Edom, who rejoiced at her fall, will drink the cup of judgment.',
      p: ['jeremiah'],
    },
    { // 5
      s: 'The people pray, "Remember us and restore us, O LORD."',
      m: 'The final poem is a prayer asking the LORD to remember what has happened to His people. Their inheritance has been given to strangers, they are orphans and slaves, women are violated, and joy has turned to mourning. They confess their sins and plead, "Restore us to yourself, O LORD, that we may be restored! Renew our days as of old."',
      d: '"Remember, O LORD, what has befallen us; look, and see our disgrace!" the closing prayer begins, describing how their inheritance has been turned over to strangers, they have become orphans, and they must pay for their own water and wood. They have given their hand to Egypt and Assyria for bread, they bear the iniquities of their fathers, slaves rule over them, women are raped in Zion, princes are hung up by their hands, and young men grind at the mill. "The joy of our hearts has ceased; our dancing has been turned to mourning. The crown has fallen from our head; woe to us, for we have sinned!" and Mount Zion lies desolate with jackals prowling over it. Yet they declare, "But you, O LORD, reign forever; your throne endures to all generations," and ask why God has forgotten them, ending with the plea, "Restore us to yourself, O LORD, that we may be restored! Renew our days as of old— unless you have utterly rejected us, and you remain exceedingly angry with us."',
      p: ['jeremiah'],
    },
  ],
};
