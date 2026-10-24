// Ruth at three reading levels. s = Simple, m = Moderate, d = Detailed, v = key verse, p = people.
// Book key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
export default {
  book: {
    simple: 'A loyal Moabite widow finds a redeemer and becomes King David\'s great-grandmother.',
    moderate: 'During the time of the judges, Naomi loses her husband and sons in Moab and returns to Bethlehem with her loyal daughter-in-law Ruth. Ruth gleans in the field of Boaz, a relative who shows her kindness. Boaz redeems the family land and marries Ruth, and their son becomes the grandfather of King David.',
    detailed: 'Set in the dark days of the judges, Ruth is a quiet story of loyalty and God\'s hidden providence. Naomi returns from Moab bitter and empty after losing her husband and sons, but her Moabite daughter-in-law Ruth refuses to leave her and commits herself to Naomi\'s people and God. In Bethlehem Ruth "happens" to glean in the field of Boaz, a worthy man and relative who becomes their kinsman-redeemer, buying back the family land and marrying Ruth. Their son Obed is the grandfather of David, showing how God weaves the faithfulness of ordinary people, even a foreigner, into His plan for Israel\'s king and, ultimately, the Messiah.',
    verse: { ref: 'Ruth 1:16', text: 'Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God.' },
    themes: ['Covenant loyalty (hesed)', 'God\'s hidden providence', 'The kinsman-redeemer', 'God welcomes outsiders into His family'],
    keyVerses: [
      { ref: '2:12', text: 'The LORD repay you for what you have done, and a full reward be given you by the LORD, the God of Israel, under whose wings you have come to take refuge!' },
      { ref: '4:14', text: 'Blessed be the LORD, who has not left you this day without a redeemer.' },
    ],
  },
  sections: {
    1: { short: 'Ruth stays with Naomi, and Boaz redeems their family.' },
  },
  chapters: [
    { // 1
      s: 'Ruth refuses to leave Naomi and goes with her to Bethlehem.',
      m: 'During a famine, Naomi\'s family moves to Moab, where her husband and both sons die. When she returns to Bethlehem, her daughter-in-law Ruth refuses to leave her, vowing, "Your people shall be my people, and your God my God." Naomi arrives home grieving, asking to be called Mara, "bitter."',
      d: 'During a famine in the days of the judges, Elimelech of Bethlehem takes his wife Naomi and two sons to Moab, where he dies, the sons marry Moabite women, Orpah and Ruth, and then the sons die too. When Naomi hears that the LORD has given food in Judah, she sets out for home and urges her daughters-in-law to return to their mothers, and Orpah tearfully goes back. Ruth clings to her and vows to go wherever Naomi goes: "Your people shall be my people, and your God my God," even to death. When they arrive in Bethlehem at the start of the barley harvest, Naomi tells the women to call her Mara, "bitter," saying she went away full and the LORD has brought her back empty.',
      p: ['ruth', 'naomi'],
    },
    { // 2
      s: 'Ruth gleans in Boaz\'s field, and he treats her kindly.',
      m: 'Ruth goes to glean leftover grain and "happens" to come to the field of Boaz, a relative of Naomi\'s husband. Boaz has heard of her loyalty to Naomi; he protects her, feeds her and has his workers leave extra grain. Naomi sees God\'s kindness and tells Ruth that Boaz is one of their redeemers.',
      d: 'Ruth goes out to glean grain behind the harvesters and "happened" to come to the field belonging to Boaz, a worthy man from Elimelech\'s clan. Boaz greets his workers with a blessing, learns who Ruth is, and tells her to stay in his field, keep close to his young women, drink from his water jars, and be safe from harm. When Ruth asks why she has found such favor as a foreigner, he praises her kindness to Naomi and prays that the LORD, under whose wings she has come to take refuge, will reward her, then secretly tells his men to drop extra grain for her. Ruth brings home about an ephah of barley, and Naomi blesses the LORD when she hears it was Boaz, explaining that he is one of their redeemers.',
      p: ['ruth', 'boaz', 'naomi'],
    },
    { // 3
      s: 'Ruth asks Boaz at the threshing floor to redeem her.',
      m: "Naomi plans for Ruth's future and sends her to the threshing floor at night. Ruth lies at Boaz's feet and asks him to spread his wing over her as a redeemer. Boaz praises her kindness and agrees, but a closer relative has the first right, so he promises to settle it the next day.",
      d: 'Naomi seeks rest and security for Ruth and tells her to wash, put on her cloak and go to the threshing floor where Boaz is winnowing barley, then lie down at his feet once he is asleep. At midnight Boaz is startled to find a woman there, and Ruth asks him to spread his wings, or the corner of his garment, over her, because he is a redeemer. Boaz blesses her for this kindness, greater than the first, since she has not gone after younger men, and promises to do all she asks, but explains there is a closer redeemer who must have the first chance. He sends her home before dawn with six measures of barley, and Naomi tells Ruth to wait, because Boaz will not rest until he settles the matter that day.',
      p: ['ruth', 'boaz', 'naomi'],
    },
    { // 4
      s: 'Boaz redeems the land, marries Ruth, and their son is David\'s grandfather.',
      m: "At the town gate Boaz offers the closer relative the right to redeem Naomi's land, but the man declines when he learns it includes marrying Ruth. Boaz redeems the land and marries Ruth before witnesses. The LORD gives them a son, Obed, whose son is Jesse and whose grandson is King David.",
      d: 'Boaz sits at the town gate, gathers ten elders, and offers the nearer redeemer the right to buy Elimelech\'s land, and the man agrees until he learns that he must also marry Ruth to raise up a name for the dead, which would endanger his own inheritance. He passes the right to Boaz by removing his sandal, and Boaz publicly buys the land and takes Ruth as his wife, and the people bless her to be like Rachel and Leah and his house like that of Perez. The LORD gives Ruth a son, and the women praise God for giving Naomi a redeemer, saying Ruth is better to her than seven sons, and Naomi becomes his nurse. They name him Obed, the father of Jesse, the father of David, and a closing genealogy traces the line from Perez to David.',
      p: ['boaz', 'ruth', 'naomi', 'david'],
    },
  ],
};
