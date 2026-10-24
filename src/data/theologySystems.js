// Theology › Dispensational vs Covenant › one system in depth (/theology/compare/:system).
// Each system is described the way its own teachers describe it; the questions are ones the other side
// raises, with the answers its holders give. The case for each reuses ARGS in theologyCompare.js.
//   blocks    — the building blocks: { title, intro, items: [{ t, text, refs }], note }
//   passages  — { ref, read (this system), alt (the other side, Detailed) }
//   qa        — { q, a }
//   varieties — { name, who, text }
//   history   — paragraphs (first at Moderate, all at Detailed); teachers — { name, years, note }
//   end       — which end-times views its holders take, with links to those deep dives

export const SYSTEMS = {
  dispensational: {
    v: 'd',
    name: 'Dispensationalism',
    lead: 'Dispensationalism is a way of reading the whole Bible that sees God working through a series of distinct arrangements, or “dispensations,” and keeps his promises to Israel separate from his purposes for the church. It began in the 1800s and became one of the most influential approaches among evangelicals in North America.',
    blocks: [
      {
        title: 'Three marks',
        intro: 'Charles Ryrie (Dispensationalism Today, 1965) named three marks that set the system apart.',
        items: [
          { t: 'Israel and the church are distinct', text: 'The most basic mark: God has two peoples, with different promises. The church is not a new Israel, and Israel’s promises are not transferred to it.', refs: ['Romans 11:25–29', '1 Corinthians 10:32'] },
          { t: 'A consistently plain reading', text: 'Scripture, including prophecy, is read in its normal, grammatical-historical sense, so promises about a land, a throne and a temple mean what they meant to their first hearers.', refs: ['Jeremiah 31:35–37'] },
          { t: 'God’s glory as the goal', text: 'The unifying purpose of history is God’s glory, shown in many ways, not only in the salvation of his people.', refs: ['Ephesians 1:12–14', 'Romans 11:36'] },
        ],
      },
      {
        title: 'The seven dispensations',
        intro: 'A dispensation (Greek oikonomia, “stewardship,” Ephesians 3:2) is a stage in which God gives people a particular responsibility. This is the scheme of the Scofield Reference Bible; some dispensationalists count fewer.',
        items: [
          { t: 'Innocence', text: 'Adam and Eve in Eden, given one command. Ends in the fall.', refs: ['Genesis 2:15–17'] },
          { t: 'Conscience', text: 'From the fall to the flood, people answer to their conscience. Ends in violence and judgment.', refs: ['Genesis 6:5–8'] },
          { t: 'Human government', text: 'After the flood, people are to govern the world for God. Ends at Babel.', refs: ['Genesis 9:5–6', 'Genesis 11:1–9'] },
          { t: 'Promise', text: 'God’s promises to Abraham and his family. Ends with Israel in Egypt.', refs: ['Genesis 12:1–3'] },
          { t: 'Law', text: 'Israel under the law of Moses, from Sinai to the cross. Israel breaks the law and rejects its Messiah.', refs: ['Exodus 19:3–8', 'Galatians 3:23–25'] },
          { t: 'Grace (the church)', text: 'From Pentecost to the rapture, salvation offered to all through Christ. Ends in widespread unbelief.', refs: ['Acts 2:1–4', 'John 1:17'] },
          { t: 'Kingdom', text: 'Christ’s thousand-year reign on earth. Ends in a final rebellion and judgment.', refs: ['Revelation 20:1–10'] },
        ],
        note: 'Each dispensation is a new stewardship, not a new way of salvation: in every age people are saved by grace through faith.',
      },
    ],
    passages: [
      { ref: 'Ephesians 3:2–6', read: 'Paul calls his ministry a “stewardship” (oikonomia) and the church a “mystery” not made known in earlier generations: something new, not the continuation of Israel.', alt: 'Covenant readers say the mystery is not the church itself but the full inclusion of Gentiles on equal terms, which the prophets foretold less clearly.' },
      { ref: 'Romans 11:25–29', read: 'After “the fullness of the Gentiles has come in, all Israel will be saved,” because “the gifts and the calling of God are irrevocable.” A future for the nation.', alt: 'Some covenant readers take “all Israel” as the whole people of God; others agree it means a future turning of Jews to Christ, within the one church.' },
      { ref: 'Romans 9:3–5', read: 'Paul says the covenants and promises still belong to Israel, his kinsmen “according to the flesh,” even in their unbelief.', alt: 'Covenant readers note Paul goes straight on: “not all who are descended from Israel belong to Israel” (Romans 9:6).' },
      { ref: 'Acts 1:6–7', read: 'The disciples ask if Jesus will now restore the kingdom to Israel, and he corrects only their timing, not their expectation.', alt: 'Covenant readers note that Jesus redirects them to a worldwide mission (Acts 1:8).' },
      { ref: 'Jeremiah 31:35–37', read: 'Israel will not cease to be a nation before God as long as the sun, moon and stars endure.', alt: 'Covenant readers see God keeping this promise through a believing remnant and through Christ, the true Israel.' },
      { ref: 'Genesis 15:17–21', read: 'God alone passes between the pieces, binding himself to give the land to Abraham’s offspring: an unconditional promise still to be fully kept.', alt: 'Covenant readers see the land fulfilled in the renewed earth Christ’s people inherit (Romans 4:13).' },
      { ref: '1 Corinthians 10:32', read: 'Paul names three groups: Jews, Greeks and the church of God. Israel and the church are not the same.', alt: 'Covenant readers say Paul is describing groups of people in Corinth, not making a point about God’s covenants.' },
      { ref: 'Galatians 3:23–25', read: 'The law was a guardian “until Christ came”: a distinct stage that has now ended.', alt: 'Covenant readers agree the Mosaic administration has ended, but see it as one stage of the one covenant of grace.' },
    ],
    qa: [
      { q: 'Does it teach different ways of salvation in different ages?', a: 'No. Ryrie put it this way: the basis of salvation in every age is the death of Christ, the requirement is faith, and the object of faith is God; what changes is how much God has revealed. Some older study notes were read as saying otherwise, and later dispensationalists corrected them.' },
      { q: 'Isn’t the system only about 200 years old?', a: 'Any teaching is tested by Scripture, not its age. Writers long before Darby, such as Isaac Watts, described stages in God’s dealings, and the early church expected an earthly kingdom. Dispensationalists see their system as a fuller account of what the Bible always said.' },
      { q: 'Doesn’t it make parts of the Bible, like the Sermon on the Mount, not for Christians?', a: 'Some early dispensationalists applied the Sermon on the Mount mainly to the coming kingdom. Most today apply all of Scripture to Christians (2 Timothy 3:16), while asking first whom a passage was addressed to.' },
      { q: 'Does it mean approving whatever the modern state of Israel does?', a: 'Dispensationalists hold that God’s covenant with Israel stands and many support the Jewish people strongly, but that is not the same as approving every policy of a modern government. Views on that vary widely.' },
    ],
    varieties: [
      { name: 'Classic', who: 'Darby, Scofield, Chafer', text: 'Two peoples with two destinies: an earthly one for Israel and a heavenly one for the church, kept distinct forever.' },
      { name: 'Revised (or normative)', who: 'Ryrie, Walvoord, Pentecost, 1950s–60s', text: 'Stresses one way of salvation for all, while keeping Israel and the church distinct in God’s program and in the kingdom.' },
      { name: 'Progressive', who: 'Craig Blaising, Darrell Bock, Robert Saucy, 1990s', text: 'The church already shares in the new covenant and in Christ’s Davidic reign, though Israel still has a future as a nation. Closer to covenant theology on many points.' },
    ],
    history: [
      'Dispensationalism took shape in the 1830s through John Nelson Darby and the Plymouth Brethren in Britain and Ireland, who taught a sharp distinction between Israel and the church and a rapture of the church before the tribulation.',
      'In America it spread through Bible and prophecy conferences in the late 1800s, through the Scofield Reference Bible (1909, revised 1917), and through schools such as Moody Bible Institute and Dallas Theological Seminary (founded 1924 by Lewis Sperry Chafer).',
      'Later teachers refined it: Ryrie, Walvoord and Pentecost in the mid-20th century, and the “progressive” dispensationalists from the 1990s. It remains common in Bible churches, many Baptist and Pentecostal churches, and independent evangelical churches.',
    ],
    teachers: [
      { name: 'John Nelson Darby', years: '1800–1882', note: 'Brethren leader who first set out the system.' },
      { name: 'C. I. Scofield', years: '1843–1921', note: 'The Scofield Reference Bible spread it worldwide.' },
      { name: 'Lewis Sperry Chafer', years: '1871–1952', note: 'Founded Dallas Theological Seminary; eight-volume Systematic Theology.' },
      { name: 'Charles Ryrie', years: '1925–2016', note: 'Dispensationalism Today and the Ryrie Study Bible.' },
      { name: 'John Walvoord', years: '1910–2002', note: 'Dallas Seminary president; wrote widely on prophecy.' },
      { name: 'Darrell Bock', years: '', note: 'New Testament scholar; a leader of progressive dispensationalism.' },
    ],
    end: { text: 'Dispensationalists are premillennial, and most hold a rapture of the church before a seven-year tribulation.', links: [['disp', 'Dispensational premillennialism']] },
  },

  covenant: {
    v: 'c',
    name: 'Covenant Theology',
    lead: 'Covenant theology reads the whole Bible as one story held together by God’s covenants, with one people of God in both Testaments, gathered in Christ. It grew out of the Reformation, was set down in the Westminster Confession (1646), and shapes Presbyterian, Reformed and Reformed Baptist churches today.',
    blocks: [
      {
        title: 'Three covenants',
        intro: 'Covenant theologians use three big covenants to describe God’s whole plan. The names are not found in the Bible, much like the word “Trinity,” but they summarize what its texts teach.',
        items: [
          { t: 'The covenant of redemption', text: 'Before time, the Father and the Son agreed that the Son would come to save a people the Father gave him, and the Spirit would apply that salvation.', refs: ['John 6:37–40', 'John 17:4–6', 'Ephesians 1:3–4'] },
          { t: 'The covenant of works', text: 'God promised Adam life for obedience and death for disobedience. Adam failed and all humanity fell in him; Christ, the last Adam, kept it perfectly for his people.', refs: ['Genesis 2:16–17', 'Hosea 6:7', 'Romans 5:12–21'] },
          { t: 'The covenant of grace', text: 'After the fall, God promised salvation through the offspring of the woman. This one covenant of grace runs through the rest of Scripture in several stages.', refs: ['Genesis 3:15'] },
        ],
      },
      {
        title: 'One covenant of grace, five stages',
        intro: 'Each covenant God makes after the fall is seen as another stage, or “administration,” of the one covenant of grace, each revealing more of Christ.',
        items: [
          { t: 'With Noah', text: 'God preserves the world so his plan of salvation can go forward.', refs: ['Genesis 9:8–17'] },
          { t: 'With Abraham', text: '“To be God to you and to your offspring after you”: a people, a land and blessing for all nations.', refs: ['Genesis 12:1–3', 'Genesis 17:7'] },
          { t: 'With Moses', text: 'The law, priesthood and sacrifices, which point ahead to Christ.', refs: ['Exodus 19:3–8', 'Hebrews 10:1'] },
          { t: 'With David', text: 'A son of David who will reign forever.', refs: ['2 Samuel 7:12–16'] },
          { t: 'The new covenant', text: 'Fulfilled in Christ: the law written on hearts and sins forgiven for good.', refs: ['Jeremiah 31:31–34', 'Luke 22:20', 'Hebrews 8:6–13'] },
        ],
        note: 'Reformed Baptists (the 1689 Confession) agree on one covenant of grace, but say it was promised in the old covenants and formally established only in the new covenant.',
      },
    ],
    passages: [
      { ref: 'Genesis 3:15', read: 'The first gospel promise: the woman’s offspring will crush the serpent. The covenant of grace begins here and runs to Christ.', alt: 'Dispensationalists agree this is the first promise of a Redeemer but see it opening a new dispensation (conscience).' },
      { ref: 'Hosea 6:7', read: '“Like Adam they transgressed the covenant”: God’s arrangement with Adam was a covenant.', alt: 'Some translate “at Adam” (a place) or “like men,” so others give this verse less weight.' },
      { ref: 'Romans 5:12–21', read: 'Two representatives, Adam and Christ: what Adam lost under the covenant of works, Christ won for his people.', alt: 'Dispensationalists agree on Adam and Christ as heads, without framing it as two covenants.' },
      { ref: 'Genesis 17:7', read: 'God promises to be God to Abraham “and to your offspring after you”: the covenant includes believers’ children, which is why Presbyterians baptize them.', alt: 'Dispensationalists and Reformed Baptists see Abraham’s physical offspring and the church as different groups.' },
      { ref: 'Galatians 3:6–29', read: 'The gospel was preached beforehand to Abraham; Christ is the promised offspring, and all who belong to Christ are Abraham’s offspring and heirs.', alt: 'Dispensationalists agree believers share Abraham’s spiritual blessing, without the church inheriting Israel’s national promises.' },
      { ref: 'Romans 11:17–24', read: 'One olive tree: Gentile believers are grafted into Israel’s tree, not planted in a new one.', alt: 'Dispensationalists read the tree as the place of blessing, not Israel itself, and stress that the natural branches will be grafted back in.' },
      { ref: 'Ephesians 2:11–22', read: 'Gentiles, once “strangers to the covenants of promise,” are now fellow citizens with the saints: one new people in Christ.', alt: 'Dispensationalists see the “one new man” as the church, a new body distinct from Israel.' },
      { ref: 'Hebrews 8:6–13', read: 'The new covenant promised “with the house of Israel” is already in force for the church through Christ.', alt: 'Dispensationalists say the church shares in its blessings now, with its full national fulfillment still to come for Israel.' },
      { ref: 'Luke 24:25–27, 44', read: 'Jesus teaches that all the Scriptures speak of him: the right way to read the Old Testament is through Christ.', alt: 'Dispensationalists agree the Old Testament points to Christ, but say its promises to Israel also keep their plain meaning.' },
    ],
    qa: [
      { q: 'Where does the Bible use the terms covenant of works, grace and redemption?', a: 'It doesn’t, any more than it uses the word “Trinity.” The terms summarize what many passages teach, and Hosea 6:7 calls God’s arrangement with Adam a covenant.' },
      { q: 'Isn’t this “replacement theology,” with the church replacing Israel?', a: 'Covenant theologians prefer “fulfillment”: Israel is not set aside but fulfilled in Christ, the true Israel, and Jewish believers belong to the one people. Many, such as Charles Hodge and John Murray, also expect a large turning of Jewish people to Christ before the end (Romans 11:26).' },
      { q: 'Doesn’t it read the New Testament back into the Old?', a: 'The New Testament writers themselves teach Christians to read the Old Testament this way (Luke 24:27; 1 Peter 1:10–12). The Old Testament meaning isn’t erased but filled out.' },
      { q: 'Why do some covenant theologians baptize babies and others don’t?', a: 'Presbyterians see baptism as the sign of the covenant given to believers and their children, as circumcision was (Genesis 17:7; Acts 2:39; Colossians 2:11–12). Reformed Baptists say new covenant members are those who know the Lord (Jeremiah 31:34), so they baptize believers only.' },
    ],
    varieties: [
      { name: 'Westminster (Presbyterian)', who: 'Westminster Confession, 1646', text: 'One covenant of grace in two administrations, old and new. Believers’ children receive the covenant sign of baptism.' },
      { name: '1689 Federalism (Reformed Baptist)', who: 'Second London Baptist Confession, 1689', text: 'The covenant of grace was promised in the old covenants and established only in the new covenant, whose members all know the Lord. Believers only are baptized.' },
      { name: 'Views in between', who: 'New Covenant Theology; progressive covenantalism (Gentry & Wellum, 2012)', text: 'One unfolding story through the covenants, but with more discontinuity: the law of Moses fulfilled as a whole in Christ, and believers only baptized.' },
    ],
    history: [
      'At the Reformation, Ulrich Zwingli and Heinrich Bullinger in Zürich argued that God has one covenant with his people across both Testaments (Bullinger, On the One and Eternal Covenant, 1534), partly to explain infant baptism. Calvin wrote on the unity and difference of the Testaments (Institutes 2.10–11).',
      'Zacharias Ursinus and Caspar Olevianus in Heidelberg developed the covenants of works and grace in the 1560s–80s. Johannes Cocceius and Herman Witsius (The Economy of the Covenants, 1677) gave it full form, and the Westminster Confession (1646, chapter 7) and the 1689 Baptist Confession (chapter 7) made it the framework of their churches.',
      'Puritans such as John Owen carried it forward. In the 20th century Geerhardus Vos, O. Palmer Robertson (The Christ of the Covenants, 1980) and Michael Horton (Introducing Covenant Theology, 2006) restated it, and it is taught today in Presbyterian, Reformed and Reformed Baptist churches.',
    ],
    teachers: [
      { name: 'Heinrich Bullinger', years: '1504–1575', note: 'Zürich reformer; wrote on the one eternal covenant.' },
      { name: 'John Calvin', years: '1509–1564', note: 'Institutes 2.10–11: the unity of the Old and New Testaments.' },
      { name: 'Zacharias Ursinus', years: '1534–1583', note: 'Main author of the Heidelberg Catechism.' },
      { name: 'Herman Witsius', years: '1636–1708', note: 'The Economy of the Covenants between God and Man.' },
      { name: 'John Owen', years: '1616–1683', note: 'Puritan; wrote at length on the covenants in his work on Hebrews.' },
      { name: 'Geerhardus Vos', years: '1862–1949', note: 'Princeton; Biblical Theology traced revelation covenant by covenant.' },
      { name: 'O. Palmer Robertson', years: '', note: 'The Christ of the Covenants, a widely used modern account.' },
    ],
    end: { text: 'Covenant theologians differ on the end times: most today are amillennial, some postmillennial, and some historic premillennial. None hold a separate rapture before the tribulation.', links: [['amil', 'Amillennialism'], ['post', 'Postmillennialism'], ['hist', 'Historic premillennialism']] },
  },
};
export const SYSTEM_IDS = Object.keys(SYSTEMS);
