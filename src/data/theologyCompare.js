// Theology › Dispensational vs Covenant (/theology/compare). Built from the approved
// "Dispensational vs Covenant" design canvas: A (computer), C (phone), and B's timeline as a second tab.
// Each view is described as its own teachers describe it; neither is presented as the right one.
// Texts: `s` = Simple (short), `m` = Moderate and Detailed. Refs are written in full ("1 Corinthians 10:32")
// so they can link to the chapter; anything that isn't a Bible book stays plain text.

export const VIEWS = {
  d: {
    name: 'Dispensationalism', label: 'Dispensational',
    idea: 'History moves through distinct stages, and God has a plan for Israel that stays separate from his plan for the church.',
    s: 'Distinct stages; Israel and the church kept separate.',
    began: 'J. N. Darby, Britain, 1830s; spread by the Scofield Reference Bible (1909)',
    teachers: 'L. S. Chafer, Charles Ryrie, John Walvoord; Dallas Seminary, Moody Bible Institute',
    common: 'Bible churches, many Baptists and Pentecostals, independent evangelicals',
  },
  c: {
    name: 'Covenant Theology', label: 'Covenant',
    idea: 'The Bible is one story held together by God’s covenants, with one people of God in both Testaments, gathered in Christ.',
    s: 'One covenant of grace; one people of God.',
    began: 'The Reformation (Zwingli, Bullinger, Calvin); set out in the Westminster Confession (1646)',
    teachers: 'Herman Witsius, Francis Turretin; today O. Palmer Robertson, Michael Horton, R. C. Sproul',
    common: 'Presbyterian and Reformed churches, Reformed Baptists (1689 Confession), many Anglicans',
  },
};

export const TOPICS = [
  {
    id: 'big-picture', name: 'The big picture', short: 'Big picture', tag: 'Differs', q: 'What holds the Bible’s story together?',
    d: { s: 'Distinct stages (“dispensations”), with one plan for Israel and another for the church.',
      m: 'History unfolds in distinct “dispensations”: stages in which God tests people under different arrangements, such as innocence, law and grace. God runs two programs, one for Israel and one for the church, both serving his glory.',
      refs: ['Ephesians 3:2–6', 'Galatians 3:23–25', 'John 1:17'] },
    c: { s: 'One covenant of grace, unfolding through Noah, Abraham, Moses and David to the new covenant.',
      m: 'One covenant of grace, promised after the fall (Genesis 3:15), runs through every age. It is unfolded in God’s covenants with Noah, Abraham, Moses and David, and fulfilled in the new covenant in Christ.',
      refs: ['Genesis 3:15', 'Genesis 17:7', 'Hebrews 8:6–13'] },
    crux: 'Is the Bible best read as a series of distinct stages, or as one covenant of grace in different forms?',
  },
  {
    id: 'israel-church', name: 'Israel and the church', short: 'Israel & church', tag: 'Differs', q: 'Is the church a new people, or the continuation of Israel?',
    d: { s: 'Two distinct peoples. The church began at Pentecost; God’s promises to Israel will be kept to Israel.',
      m: 'Israel and the church are two distinct peoples. The church began at Pentecost and is not “the new Israel”. God’s promises to the nation of Israel still stand, and will be kept to Israel itself.',
      refs: ['Romans 11:25–29', 'Acts 1:6–7', 'Ephesians 3:5–6'] },
    c: { s: 'One people of God in both Testaments. Gentile believers are grafted into the same olive tree.',
      m: 'There is one people of God across both Testaments. The church continues Israel: Gentile believers are grafted into the same olive tree and become Abraham’s offspring through faith in Christ.',
      refs: ['Romans 11:17–24', 'Galatians 3:29', 'Ephesians 2:19'] },
    crux: 'When the New Testament calls Gentile believers children of Abraham, does that mean they become part of Israel?',
  },
  {
    id: 'prophecy', name: 'Reading prophecy', short: 'Prophecy', tag: 'Differs', q: 'How should Old Testament promises be read?',
    d: { s: 'In their plain, normal sense: a promise about a land, a throne or a temple will be kept that way.',
      m: 'Read prophecy in its plain, normal sense. A promise made to Israel about a land, a throne or a temple means what it meant to those who first heard it, and will be fulfilled that way.',
      refs: ['Jeremiah 31:35–37', 'Ezekiel 40', 'Zechariah 14'] },
    c: { s: 'In light of the New Testament: many promises are fulfilled in Christ, often in greater ways.',
      m: 'Read the Old Testament in light of the New. Many promises are fulfilled in Christ and his people, often in ways greater than their first, earthly form, as the apostles read them.',
      refs: ['Acts 15:14–18', 'Hebrews 8:5', '2 Corinthians 1:20'] },
    crux: 'When the apostles apply an Old Testament promise to the church, is that its fulfillment, or one application of a promise still waiting for Israel?',
  },
  {
    id: 'land', name: 'The promised land', short: 'The land', tag: 'Differs', q: 'What happens to God’s promise of the land to Abraham?',
    d: { s: 'Israel will possess it fully, in Christ’s thousand-year kingdom.',
      m: 'Israel will possess the land promised to Abraham, fully and literally, in Christ’s thousand-year kingdom. Many see the modern return of Jews to the land as significant.',
      refs: ['Genesis 15:18–21', 'Amos 9:14–15', 'Ezekiel 37:21–28'] },
    c: { s: 'It pointed to something larger: Christ’s people will inherit the whole renewed earth.',
      m: 'The land was a down payment on something larger: Abraham was promised the world. It is fulfilled in Christ, who will give his people the whole renewed earth.',
      refs: ['Romans 4:13', 'Hebrews 11:10, 16', 'Matthew 5:5'] },
    crux: 'Was the land promise permanent for one nation, or a picture pointing to the whole new creation?',
  },
  {
    id: 'law', name: 'The law', short: 'The law', tag: 'Differs', q: 'Does the law of Moses still guide believers?',
    d: { s: 'It ended with Christ as a whole; believers live under “the law of Christ”.',
      m: 'The law of Moses, as a whole, ended with Christ. Believers live under “the law of Christ”; the moral commands repeated in the New Testament still apply.',
      refs: ['Romans 10:4', '2 Corinthians 3:7–11', 'Galatians 6:2'] },
    c: { s: 'Its ceremonies are fulfilled, but the moral law, summed up in the Ten Commandments, still guides.',
      m: 'The ceremonial laws are fulfilled in Christ and the civil laws ended with Israel as a nation, but the moral law, summed up in the Ten Commandments, still guides how believers live.',
      refs: ['Matthew 5:17–19', 'Romans 3:31', 'Romans 13:8–10'] },
    crux: 'Is the law of Moses one unit that ended together, or can its moral core be told apart from its temporary parts?',
  },
  {
    id: 'end-times', name: 'The end times', short: 'End times', tag: 'Differs', q: 'What comes before and after Christ’s return?',
    d: { s: 'The church is caught up first, then a seven-year tribulation, then Christ reigns 1,000 years from Jerusalem.',
      m: 'Christ returns before a literal thousand-year reign from Jerusalem (premillennial). Most expect the church to be caught up first (a pre-tribulation rapture), before seven years of tribulation focused on Israel.',
      refs: ['1 Thessalonians 4:16–17', 'Daniel 9:24–27', 'Revelation 20:1–6'] },
    c: { s: 'Usually amillennial: the 1,000 years picture this age, and Christ returns once to judge and renew.',
      m: 'Most are amillennial (the thousand years of Revelation 20 picture the present age) or postmillennial; some are historic premillennialists. No separate rapture: Christ’s return is one event.',
      refs: ['Matthew 24:30–31', '2 Peter 3:10–13', 'Revelation 20:1–6'] },
    crux: 'Is Revelation 20 a step-by-step timeline, or a picture of the present age seen from heaven?',
  },
  {
    id: 'baptism', name: 'Baptism', short: 'Baptism', tag: 'Varies', q: 'Who should be baptized?',
    d: { s: 'Most baptize believers only.',
      m: 'Most baptize believers only: the church is a new people made up of those who profess faith. (This is the usual practice, not something the system requires.)',
      refs: ['Acts 2:38, 41', 'Acts 8:12', 'Romans 6:3–4'] },
    c: { s: 'Presbyterians baptize believers’ children, as with circumcision; Reformed Baptists do not.',
      m: 'Presbyterian and Reformed churches baptize believers’ children, as circumcision marked children under the old covenant. Reformed Baptists hold covenant theology but baptize believers only.',
      refs: ['Genesis 17:7–12', 'Colossians 2:11–12', 'Acts 2:39'] },
    crux: 'Is baptism the new covenant’s version of circumcision, given to the same households?',
  },
  {
    id: 'salvation', name: 'Salvation', short: 'Salvation', tag: 'Agree', q: 'How were people saved before Christ?',
    d: { s: 'By grace through faith, in every age.',
      m: 'Always by grace through faith. Some older study notes (Scofield, 1909) were read as teaching another way under the law; later dispensationalists such as Ryrie made clear that faith has always been the way, though what people knew grew over time.',
      refs: ['Genesis 15:6', 'Romans 4:1–5', 'Hebrews 11'] },
    c: { s: 'By grace through faith in the promised Redeemer.',
      m: 'Always by grace through faith in the promised Redeemer. Old Testament believers were saved by the same Christ, looking forward to him through promises, sacrifices and signs.',
      refs: ['Genesis 15:6', 'Romans 4:1–5', 'Galatians 3:8'] },
    crux: 'Both agree here. The difference is emphasis: how much the Old Testament saints understood about the coming Christ.',
  },
];
export const topicById = Object.fromEntries(TOPICS.map((t) => [t.id, t]));

// How each system shapes the end times (shown on the end-times topic). `view` = the End Times page's ?view= id.
export const END_TIMES = {
  d: {
    mill: [{ label: 'Premillennial', view: 'disp' }],
    millNote: 'Nearly always. Unkept promises to Israel need a future earthly kingdom.',
    rap: 'Before the tribulation',
    rapNote: 'Usually. The church is taken out before God turns back to Israel (Daniel 9:27).',
  },
  c: {
    mill: [{ label: 'Amillennial', view: 'amil' }, { label: 'Postmillennial', view: 'post' }, { label: 'Historic premillennial', view: 'hist' }],
    millNote: 'Open. Amillennial is most common today (Vos, Berkhof, Hoekema); postmillennial was common among older Reformed teachers (Edwards, Hodge, Warfield); some are premillennial (Spurgeon, Schaeffer).',
    rap: 'No separate rapture',
    rapNote: 'One people means no separate period for Israel; Christ returns once.',
  },
  note: 'It doesn’t work backward: being premillennial doesn’t make someone a dispensationalist. Historic premillennialism is older, held by early church writers such as Justin Martyr and Irenaeus.',
};

// The case each side makes, as its own teachers put it, and how the other side usually answers.
export const ARGS = {
  d: [
    { t: 'Read prophecy the way it was fulfilled before', s: 'Prophecies of Christ’s first coming came true literally, so expect the promises about Israel to come true the same way.',
      m: 'Prophecies of Christ’s first coming came true literally: born in Bethlehem, pierced, buried with the rich. The prophecies about Israel’s future should be expected to come true the same way.',
      refs: ['Micah 5:2', 'Zechariah 12:10', 'Isaiah 53:9'] },
    { t: 'God’s promises to Israel cannot be revoked', s: 'God alone passed between the pieces with Abraham, and his gifts and calling are irrevocable.',
      m: 'God alone passed between the pieces when he made his covenant with Abraham, so it rests on him, not on Israel. Paul says God’s gifts and calling are irrevocable.',
      refs: ['Genesis 15:17–18', 'Romans 11:29', 'Jeremiah 31:35–37'] },
    { t: 'Paul expects a future for the nation', s: 'After the fullness of the Gentiles comes in, “all Israel will be saved.”',
      m: 'After “the fullness of the Gentiles has come in, all Israel will be saved.” When the disciples ask about restoring the kingdom to Israel, Jesus corrects only their timing.',
      refs: ['Romans 11:25–27', 'Acts 1:6–7', 'Matthew 19:28'] },
    { t: 'The church was a mystery, now revealed', s: 'Jews and Gentiles in one body was hidden in past ages; the church began at Pentecost.',
      m: 'Paul calls Jews and Gentiles in one body a mystery hidden in past ages. The church began when the Spirit came at Pentecost, which Jesus spoke of as still future.',
      refs: ['Ephesians 3:4–6', 'Colossians 1:26', 'Acts 1:5'] },
    { t: '“Israel” means Israel', s: 'The New Testament keeps Jews, Greeks and the church of God as different groups.',
      m: 'In the New Testament “Israel” almost always means the Jewish people, and Paul names Jews, Greeks and the church of God as different groups.',
      refs: ['1 Corinthians 10:32', 'Romans 9:3–5'] },
  ],
  c: [
    { t: 'The New Testament reads the Old this way', s: 'Christ is Abraham’s promised offspring, and all who belong to him are Abraham’s heirs.',
      m: 'Paul says Abraham’s promised offspring is Christ, and all who belong to Christ are Abraham’s offspring and heirs. Peter gives the church Israel’s own titles.',
      refs: ['Galatians 3:16, 29', '1 Peter 2:9–10', 'Exodus 19:6'] },
    { t: 'The new covenant is given to the church', s: 'The new covenant promised “with Israel and Judah” is in force for Christians now.',
      m: 'Jeremiah’s promise of a new covenant “with Israel and Judah” is quoted in Hebrews as already in force for Christians, and Jesus inaugurates it at the Lord’s Supper.',
      refs: ['Jeremiah 31:31–34', 'Hebrews 8:6–13', 'Luke 22:20'] },
    { t: 'One tree, not two', s: 'Gentile believers are grafted into Israel’s olive tree; Christ made the two one people.',
      m: 'Gentile believers are grafted into Israel’s olive tree, not planted in a new one. Christ broke down the dividing wall and made the two one people, fellow citizens with the saints.',
      refs: ['Romans 11:17–24', 'Ephesians 2:11–22'] },
    { t: 'One way of salvation from Genesis on', s: 'Abraham was counted righteous by faith; one covenant of grace explains that unity.',
      m: 'Abraham was counted righteous by faith, and the believers of Hebrews 11 looked ahead to the same promise. One covenant of grace explains that unity.',
      refs: ['Genesis 15:6', 'Romans 4', 'Hebrews 11:39–40'] },
    { t: 'Christ is the center of every promise', s: 'All God’s promises find their “Yes” in Christ, and the whole Old Testament speaks of him.',
      m: 'All God’s promises find their “Yes” in Christ, and Jesus taught that the whole Old Testament speaks of him. The Reformers and their confessions read Scripture this way.',
      refs: ['2 Corinthians 1:20', 'Luke 24:27, 44', 'Westminster Confession 7'] },
  ],
};
// The other side's usual answer: REPLY.d answers the dispensational case (it is the covenant reply), and so on.
export const REPLY = {
  d: { title: 'How covenant theologians answer',
    s: 'The apostles read the promises as fulfilled in Christ, and “not all who are descended from Israel belong to Israel” (Romans 9:6).',
    m: 'The apostles themselves read the promises as fulfilled in Christ: David’s throne in his resurrection and ascension (Acts 2:30–36), the rebuilt “tent of David” in Gentiles coming in (Acts 15:16–17). “Not all who are descended from Israel belong to Israel” (Romans 9:6), and “all Israel” in Romans 11:26 may mean the full number of God’s people. A plain reading includes reading the Old Testament the way the New Testament does.' },
  c: { title: 'How dispensationalists answer',
    s: 'Sharing in Israel’s blessings is not replacing Israel: Paul still sees a future for Israel after the Gentiles come in.',
    m: 'Sharing in Israel’s blessings is not the same as replacing Israel: Paul still speaks of a future for Israel “according to election” after the Gentiles come in (Romans 11:25–29). The New Testament keeps “Jews, Greeks and the church of God” distinct (1 Corinthians 10:32). Early church fathers such as Justin and Irenaeus expected an earthly kingdom, and a view is not proven by its age.' },
};

// Why it matters: tendencies, not rules.
export const WHY = [
  {
    id: 'read', title: 'Reading the Bible', rows: [
      { k: 'Old Testament promises', ex: 'e.g. 2 Chronicles 7:14, Jeremiah 29:11',
        d: { s: 'First ask what it meant for Israel; it shows who God is.', m: 'First ask what the promise meant for Israel. It may not be a direct promise to you, but it shows who God is and how he works.' },
        c: { s: 'Ask how it is fulfilled in Christ; in him it belongs to his people.', m: 'Ask how the promise is fulfilled in Christ. Because believers are in Christ, Israel’s promises belong to his people today.' } },
      { k: 'Bible prophecy', ex: 'e.g. Daniel 9, Ezekiel 38–39, Revelation',
        d: { s: 'Much is still future, often read alongside world news.', m: 'Much of it is still future and can be read like a map of coming events, often alongside news about Israel and the nations.' },
        c: { s: 'Much is already fulfilled; wary of linking it to headlines.', m: 'Much of it is already fulfilled in Christ and the church age. Readers are usually wary of linking prophecy to the headlines.' } },
      { k: 'Commands in the law', ex: 'e.g. the Sabbath, the Ten Commandments',
        d: { s: 'A command binds Christians if the New Testament repeats it.', m: 'A command binds Christians if the New Testament repeats it. The law as a whole belonged to Israel.' },
        c: { s: 'Ask whether it is moral, ceremonial or civil.', m: 'Ask whether a command is moral (still binding), ceremonial (fulfilled in Christ) or civil (for Israel as a nation).' } },
      { k: 'How the Testaments connect', ex: 'Reading the whole Bible',
        d: { s: 'Notice the differences between Israel, the church and each stage.', m: 'Notice the differences between Israel and the church, and between each stage of God’s dealings.' },
        c: { s: 'Notice the continuity: one story, one people, one Savior.', m: 'Notice the continuity: one story, one people, one Savior, from Genesis 3:15 to Revelation.' } },
    ],
  },
  {
    id: 'live', title: 'Living it out', rows: [
      { k: 'Israel today', ex: 'Genesis 12:3, Romans 11',
        d: { s: 'Many feel called to support the Jewish people and the modern state of Israel.', m: 'Many feel a special call to support the Jewish people and the modern state of Israel, and see its founding in 1948 as significant.' },
        c: { s: 'Love the Jewish people and share Christ; treat the modern state like other nations.', m: 'Love the Jewish people and share Christ with them, but usually treat the modern state like any other nation.' } },
      { k: 'Hope and urgency', ex: 'Titus 2:13, 1 John 3:2–3',
        d: { s: 'Christ could come for his church any moment: urgency and readiness.', m: 'Christ could come for his church at any moment. That stirs urgency in evangelism and readiness in daily life.' },
        c: { s: 'Christ reigns now: patient, long-term work in church, family and culture.', m: 'Christ reigns now and his kingdom grows. That encourages patient, long-term work in church, family, vocation and culture.' } },
      { k: 'Children and family', ex: 'Acts 2:39, Deuteronomy 6:7',
        d: { s: 'Children are called to faith, then baptized when they believe.', m: 'Children are taught and called to personal faith, then baptized when they believe.' },
        c: { s: 'Presbyterians baptize children and raise them as covenant members.', m: 'In Presbyterian and Reformed churches, children are baptized and raised as members of the covenant, often with catechisms and family worship.' } },
      { k: 'Sunday and worship', ex: 'Exodus 20:8, Romans 14:5',
        d: { s: 'Sunday is the church’s day of worship, not the Sabbath carried over.', m: 'Most see Sunday as the church’s day of worship and rest, not the Sabbath command carried over.' },
        c: { s: 'Many keep Sunday as the Christian Sabbath.', m: 'Many, especially Presbyterians, keep Sunday as the Christian Sabbath under the fourth commandment.' } },
    ],
  },
];
export const WHY_NOTE = 'These are tendencies, not rules: many believers and churches mix the two, and both views call Christians to faith, holiness, love for Jewish people and sharing the gospel. The differences are mostly in emphasis.';

export const AGREE = [
  'Scripture is God’s word and the final authority.',
  'Salvation in every age is by grace, through faith, because of Christ.',
  'Christ will return bodily, judge the world and make all things new.',
  'God keeps every promise he has made.',
];
export const BETWEEN = [
  { name: 'Progressive dispensationalism', who: 'Blaising, Bock, 1990s', text: 'Israel and the church stay distinct, but the church already shares in the new covenant and David’s kingdom.' },
  { name: 'Progressive covenantalism', who: 'Gentry & Wellum, 2012', text: 'One story through the covenants, but the new covenant brings real change, so believers only are baptized.' },
];

// Timeline tab (design B). Widths are shares of the row, not years.
export const ERAS = [
  { name: 'Creation', ref: 'Genesis 1–2', w: 10, d: 'Innocence', dt: 'Adam in Eden', c: 'works' },
  { name: 'Fall to Flood', ref: 'Genesis 3–8', w: 10, d: 'Conscience', dt: 'Fall to Flood', c: 'grace' },
  { name: 'Babel', ref: 'Genesis 9–11', w: 9, d: 'Human government', dt: 'Noah to Babel', c: 'grace', mark: { name: 'Noah', ref: 'Genesis 9', at: 0.05 } },
  { name: 'The patriarchs', ref: 'Genesis 12 – Exodus 18', w: 12, d: 'Promise', dt: 'Abraham’s family', c: 'grace', mark: { name: 'Abraham', ref: 'Genesis 12–17', at: 0.4 } },
  { name: 'Sinai to the cross', ref: 'Exodus 19 – the Gospels', w: 22, d: 'Law', dt: 'Israel under Moses', c: 'grace', marks: [{ name: 'Moses', ref: 'Exodus 19–24', at: 0.08 }, { name: 'David', ref: '2 Samuel 7', at: 0.45 }] },
  { name: 'Pentecost to Christ’s return', ref: 'Acts – Revelation 19', w: 21, d: 'Grace', dt: 'The church age', c: 'grace', mark: { name: 'New covenant', ref: 'Jeremiah 31; Luke 22', at: 0.04 }, now: true },
  { name: 'Kingdom', ref: 'Revelation 20–22', w: 16, d: 'Kingdom', dt: '1,000-year reign', c: 'grace' },
];
export const TIMELINE_NOTE = 'Dispensations follow the Scofield Reference Bible; some dispensationalists count fewer. Covenant theologians also speak of a covenant of redemption, made between the Father and the Son before time.';
export const END_D = ['Church age', 'Rapture of the church', '7-year tribulation', 'Christ returns', '1,000-year kingdom', 'Final judgment', 'New creation'];
export const END_C = ['Church age (the “1,000 years”)', 'Christ returns', 'Resurrection and judgment', 'New creation'];
export const END_NOTE = 'Some covenant theologians are postmillennial (the gospel’s spread brings a long golden age first) or historic premillennial (a thousand-year reign after Christ returns, without a separate rapture).';
