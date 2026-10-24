// Theology › Eschatology › deep dive for each view (/theology/last-things/:view).
// Adds to the short entries in endTimes.js (V, TL, Q). Each view is described the way its own teachers
// describe it; objections are the ones other Christians raise, with the answers the view's holders give.
//   lead      — an opening paragraph (Moderate and up)
//   cases     — the case for it: { t, text, refs }
//   passages  — supporting passages: { ref, read (how this view reads it), alt (how others read it, Detailed) }
//   qa        — questions others raise, with this view's answer: { q, a }
//   history   — paragraphs (the first one shows at Moderate, all at Detailed)
//   teachers  — { name, years, note }
//   life      — how it shapes the Christian life: { t, text, refs }
//   lens / rapture — how its holders usually read Revelation, and where they place the rapture
// Refs are written in full ("1 Thessalonians 4:13–18") so they link to the chapter.

export const DEEP = {
  disp: {
    lead: 'Dispensational premillennialism is the most widely known view of the end times in North America. It grows out of a way of reading the whole Bible that keeps God’s promises to Israel distinct from his purposes for the church, and expects those promises to be kept to the nation of Israel in a future kingdom on earth.',
    cases: [
      { t: 'God’s promises to Israel must be kept as given', text: 'God promised Abraham’s descendants a land “for an everlasting possession” and David a son whose throne would last forever. Gabriel tells Mary that Jesus will reign “over the house of Jacob forever.” Read in their plain sense, these promises need a future kingdom in which Israel lives in its land under the Messiah.', refs: ['Genesis 17:8', '2 Samuel 7:12–16', 'Luke 1:32–33'] },
      { t: 'Daniel’s seventieth week is still future', text: 'Daniel is told of seventy “weeks” of years. Sixty-nine run up to the Messiah, who is then “cut off.” The final week, with a ruler who makes a covenant and later stops the sacrifices, has not yet happened. Jesus points to its “abomination of desolation” as still ahead.', refs: ['Daniel 9:24–27', 'Matthew 24:15', '2 Thessalonians 2:3–4'] },
      { t: 'The church is promised rescue from the coming wrath', text: 'Believers wait for Jesus, “who delivers us from the wrath to come,” and are “not destined for wrath.” Jesus promises to keep the faithful “from the hour of trial that is coming on the whole world.” Since the tribulation is a time of God’s wrath, the church is taken out before it.', refs: ['1 Thessalonians 1:10', '1 Thessalonians 5:9', 'Revelation 3:10'] },
      { t: 'Christ could come at any moment', text: 'The New Testament tells believers to wait and watch for Christ himself, not for signs. If the tribulation had to come first, believers could count down to his return. A coming for the church before the tribulation keeps it imminent.', refs: ['Titus 2:13', 'John 14:2–3', 'James 5:8–9'] },
      { t: 'Revelation 19 and 20 are in order', text: 'Christ returns in chapter 19, then Satan is bound and the saints reign for a thousand years in chapter 20. The thousand years is mentioned six times, and the word “church” does not appear on earth from chapters 4 to 19, while Israel’s twelve tribes are sealed in chapter 7.', refs: ['Revelation 19:11–16', 'Revelation 20:1–6', 'Revelation 7:4–8'] },
    ],
    passages: [
      { ref: 'Genesis 15:18–21', read: 'God alone walked between the pieces, binding himself to give Abraham’s descendants the land from Egypt to the Euphrates. Israel has never held all of it, so it is still to come.', alt: 'Covenant readers see the land as a down payment on the whole renewed earth (Romans 4:13).' },
      { ref: '2 Samuel 7:12–16', read: 'David’s son will rule on David’s throne forever. Christ will sit on that throne in Jerusalem in the coming kingdom.', alt: 'Others say Christ already took David’s throne when he rose and ascended (Acts 2:30–36).' },
      { ref: 'Jeremiah 31:31–37', read: 'The new covenant is promised to “the house of Israel and the house of Judah,” and God says Israel will not cease to be a nation before him while the sun and moon endure.', alt: 'Hebrews 8 quotes this promise as already in force for the church.' },
      { ref: 'Daniel 9:24–27', read: 'A future seven-year period, Daniel’s seventieth week, with the Antichrist making and breaking a covenant with Israel.', alt: 'Many others see the final week fulfilled in Christ’s death and the fall of Jerusalem in AD 70.' },
      { ref: 'Zechariah 14:1–9', read: 'The LORD’s feet stand on the Mount of Olives, and he becomes king over all the earth from Jerusalem: a literal, earthly reign.', alt: 'Others read the chapter as a prophetic picture of God’s final victory, fulfilled in Christ and the new creation.' },
      { ref: '1 Thessalonians 4:13–18', read: 'The rapture: Christ comes for his church in the air, before the tribulation, and takes it to the Father’s house (John 14:3).', alt: 'Others see this as part of Christ’s one visible return, after the tribulation.' },
      { ref: 'Revelation 3:10', read: '“I will keep you from the hour of trial”: kept out of the tribulation, not kept safe through it.', alt: 'Posttribulationists note the same phrase in John 17:15, where Jesus asks the Father to keep his disciples from evil while they stay in the world.' },
      { ref: 'Romans 11:25–29', read: 'After the church age, “all Israel will be saved”: a national restoration, because God’s gifts and calling are irrevocable.', alt: 'Some others read “all Israel” as the whole people of God, Jew and Gentile together.' },
      { ref: 'Revelation 20:1–6', read: 'A literal thousand-year reign of Christ on earth after his return, ending with a final rebellion and judgment.', alt: 'Amillennialists read it as a symbol of the present age; postmillennialists as a future golden age before Christ returns.' },
    ],
    qa: [
      { q: 'Where does the Bible describe two future comings?', a: 'Not two comings, but two stages of one. Christ comes for his saints (John 14:3; 1 Thessalonians 4:17) and later with them (Zechariah 14:5; Jude 14; Revelation 19:14). The descriptions differ enough to show two stages with the tribulation between.' },
      { q: 'Wasn’t the pretribulation rapture unknown before the 1830s?', a: 'A teaching is tested by Scripture, not by its age. The early church was premillennial and expected Christ’s return at any moment, and some see hints of an escape before the tribulation in earlier writers, though this is debated.' },
      { q: 'Doesn’t it divide God’s people in two?', a: 'Israel and the church are saved the same way, by grace through faith in Christ, and share one salvation. They differ in calling and in some promises. Progressive dispensationalists stress how much the two now share in the new covenant.' },
    ],
    history: [
      'Belief in an earthly thousand-year reign goes back to the early church, but dispensationalism as a system took shape in the 1830s with John Nelson Darby and the Plymouth Brethren in Britain and Ireland.',
      'It spread in America through Bible conferences such as the Niagara Bible Conference (late 1800s), the Scofield Reference Bible (1909, revised 1917), and schools like Moody Bible Institute and Dallas Theological Seminary (founded 1924). Hal Lindsey’s The Late Great Planet Earth (1970) and the Left Behind novels (1995–2007) brought it into popular culture.',
      'Its teachers have refined it over time. “Revised” dispensationalists such as Ryrie, Walvoord and Pentecost restated it in the 1950s–60s, and “progressive” dispensationalists such as Craig Blaising, Darrell Bock and Robert Saucy in the 1990s, who see more overlap between Israel and the church.',
    ],
    teachers: [
      { name: 'John Nelson Darby', years: '1800–1882', note: 'Plymouth Brethren leader who shaped the system and the pretribulation rapture.' },
      { name: 'C. I. Scofield', years: '1843–1921', note: 'His Reference Bible put dispensational notes in millions of homes.' },
      { name: 'Lewis Sperry Chafer', years: '1871–1952', note: 'Founded Dallas Theological Seminary; wrote an eight-volume systematic theology.' },
      { name: 'John Walvoord', years: '1910–2002', note: 'Dallas Seminary president; author of The Rapture Question and The Millennial Kingdom.' },
      { name: 'Charles Ryrie', years: '1925–2016', note: 'Ryrie Study Bible; Dispensationalism Today set out its core marks.' },
      { name: 'J. Dwight Pentecost', years: '1915–2014', note: 'Things to Come, a full account of dispensational prophecy.' },
      { name: 'John MacArthur', years: 'b. 1939', note: 'Pastor and author; a leading present-day voice.' },
    ],
    life: [
      { t: 'Readiness and holiness', text: 'Because Christ could come at any moment, believers are urged to live ready, pure and watchful.', refs: ['1 John 3:2–3', 'Titus 2:11–13'] },
      { t: 'Urgency in sharing the gospel', text: 'Time may be short, so this view has fueled evangelism and missions, especially in the 20th century.', refs: ['2 Peter 3:9'] },
      { t: 'Comfort in grief', text: 'Paul ends his teaching on the rapture with “encourage one another with these words”: believers will be reunited with those who have died in Christ.', refs: ['1 Thessalonians 4:18'] },
      { t: 'Love for Israel', text: 'Many feel a special bond with the Jewish people and see God’s faithfulness to Israel as proof of his faithfulness to the church. Its teachers also warn against setting dates for Christ’s return.', refs: ['Genesis 12:3', 'Matthew 24:36'] },
    ],
    lens: 'Futurist: most of Revelation from chapter 4 on describes the tribulation and events still to come.',
    rapture: 'Pretribulation: before the seven years begin.',
  },

  hist: {
    lead: 'Historic premillennialism is the oldest recorded view of the end times. Like dispensationalism it expects Christ to reign on earth after he returns, but it sees one people of God and one return of Christ, after the church has passed through the final tribulation.',
    cases: [
      { t: 'Revelation 20 follows Revelation 19', text: 'John sees Christ ride out to defeat his enemies (chapter 19), then sees Satan bound and the saints reign for a thousand years (chapter 20). Read in order, Christ’s return comes before the thousand years.', refs: ['Revelation 19:11–21', 'Revelation 20:1–6'] },
      { t: 'Two resurrections, with time between', text: 'Those who “came to life” reign with Christ, while “the rest of the dead did not come to life until the thousand years were ended.” The same word is used for both, so both are bodily resurrections. Paul’s “each in his own order… then comes the end” leaves room for a reign in between.', refs: ['Revelation 20:4–5', '1 Corinthians 15:22–26'] },
      { t: 'The earliest church held it', text: 'Papias, Justin Martyr, Irenaeus and Tertullian all expected Christ to reign on earth after his return. Justin says he and others who were “right-minded Christians on all points” held it, while admitting that some true Christians did not.', refs: [] },
      { t: 'One return, after the tribulation', text: 'Jesus comes “immediately after the tribulation of those days” and gathers his elect. Paul tells the church that the gathering to Christ will not come until the man of lawlessness is revealed. The church is told what it will see, so it is still here.', refs: ['Matthew 24:29–31', '2 Thessalonians 2:1–4'] },
      { t: 'The prophets picture a reign on a renewed earth', text: 'Isaiah and Zechariah describe the Messiah ruling the nations, with long life but death still possible. The risen saints are promised to “reign on the earth” and rule the nations. That fits a reign between Christ’s return and the final new creation.', refs: ['Isaiah 65:17–25', 'Zechariah 14:16–17', 'Revelation 5:10', 'Revelation 2:26–27'] },
    ],
    passages: [
      { ref: 'Revelation 20:4–6', read: 'The “first resurrection” is the bodily resurrection of believers at Christ’s return; they then reign with him on earth.', alt: 'Amillennialists read the first resurrection as new life in Christ, or the believer’s soul going to be with him.' },
      { ref: '1 Corinthians 15:22–26', read: '“Christ the firstfruits, then at his coming those who belong to Christ. Then comes the end”: each “then” marks a stage, with Christ’s reign between his coming and the end.', alt: 'Others read the “end” as coming at Christ’s return, with his reign happening now (verse 25).' },
      { ref: 'Matthew 24:29–31', read: 'One return of Christ, “immediately after the tribulation,” with the gathering of his elect.', alt: 'Dispensationalists see this as Christ’s return with his saints, seven years after the rapture.' },
      { ref: '2 Thessalonians 2:1–8', read: 'Our “being gathered together to him” comes after the rebellion and the man of lawlessness, so the church sees the tribulation.', alt: 'Pretribulationists read “the day of the Lord” here as a time of judgment that begins after the church is taken.' },
      { ref: '1 Thessalonians 4:13–18', read: 'The word for “meet” was used of citizens going out to welcome a visiting ruler and escort him back to their city: believers rise to meet Christ and return with him.', alt: 'Pretribulationists see Christ taking the church to heaven at this point.' },
      { ref: 'Isaiah 65:17–25', read: 'A renewed earth where “the young man shall die a hundred years old”: long life, but death still possible, so not yet the final state.', alt: 'Amillennialists read this as poetic language for the new creation itself.' },
      { ref: 'Revelation 5:9–10', read: 'The redeemed “shall reign on the earth”: an earthly reign still future.', alt: 'Others see believers already reigning with Christ now, and fully in the new creation.' },
      { ref: 'Acts 1:6–7', read: 'Jesus doesn’t deny that the kingdom will be restored to Israel, only says the timing is the Father’s.', alt: 'Others note Jesus turns the disciples to the worldwide mission instead (Acts 1:8).' },
    ],
    qa: [
      { q: 'Why would sin and death still exist after Christ returns in glory?', a: 'The thousand years shows Christ’s rule publicly vindicated in history before the final new creation. People who survive the tribulation, and their children, live under his reign; the prophets picture just such a world (Isaiah 65:20; Zechariah 14:16–17).' },
      { q: 'Only one passage mentions a thousand years.', a: 'Once is enough when God says it. And the idea of a reign between Christ’s return and the end appears elsewhere too (1 Corinthians 15:23–25; Revelation 2:26–27; 5:10).' },
      { q: 'Doesn’t Jesus put the resurrection of all at one “hour” (John 5:28–29)?', a: 'In the same passage Jesus says the “hour” of spiritual life “is now here” (John 5:25), and it has lasted two thousand years. An “hour” can cover a long period, including the thousand years.' },
    ],
    history: [
      'The early church called this view chiliasm, from the Greek word for a thousand. It was held by Papias (about 60–130), Justin Martyr, Irenaeus and Tertullian, and was probably the most common view in the 2nd century.',
      'It declined after Origen’s allegorical reading of Scripture and especially after Augustine’s City of God (early 400s), which read the thousand years as the church age. For over a thousand years few held it.',
      'It returned among some Puritans (Joseph Mede, 1627) and 19th-century evangelicals such as Henry Alford and Charles Spurgeon. In the 20th century George Eldon Ladd set it out as an alternative to dispensationalism (The Blessed Hope, 1956), and many evangelical scholars hold it today.',
    ],
    teachers: [
      { name: 'Papias', years: 'c. 60–130', note: 'Bishop of Hierapolis; reported teaching from those who had known the apostles.' },
      { name: 'Justin Martyr', years: 'c. 100–165', note: 'Dialogue with Trypho: expected a thousand years in a rebuilt Jerusalem.' },
      { name: 'Irenaeus', years: 'c. 130–202', note: 'Against Heresies, book 5: the kingdom of the righteous on a renewed earth.' },
      { name: 'Charles Spurgeon', years: '1834–1892', note: 'London Baptist preacher who looked for Christ’s personal reign on earth.' },
      { name: 'George Eldon Ladd', years: '1911–1982', note: 'Fuller Seminary professor; The Blessed Hope and A Theology of the New Testament.' },
      { name: 'Wayne Grudem', years: 'b. 1948', note: 'His Systematic Theology (1994) defends it for a wide evangelical audience.' },
    ],
    life: [
      { t: 'Ready to endure', text: 'The church should expect hardship before Christ comes and be prepared to stay faithful through it.', refs: ['Acts 14:22', 'Revelation 2:10'] },
      { t: 'Hope for this earth', text: 'God’s purposes for history and for the earth will be publicly vindicated when Christ reigns where he was rejected.', refs: ['Psalm 2:8', 'Revelation 11:15'] },
      { t: 'Watchful, without date-setting', text: 'Believers watch for the signs Jesus gave, while knowing no one can know the day or hour.', refs: ['Matthew 24:32–36'] },
      { t: 'One people, one hope', text: 'Jew and Gentile believers share one hope; many also pray for a great turning of Jewish people to Christ.', refs: ['Romans 11:26', 'Ephesians 2:14–16'] },
    ],
    lens: 'Mostly futurist, often combined with other approaches (Ladd called his reading “eclectic”).',
    rapture: 'Posttribulation: believers meet Christ at his one return.',
  },

  amil: {
    lead: 'Amillennialism reads the thousand years of Revelation 20 as a picture of the present age, between Christ’s first and second comings. Its holders prefer the name “realized millennium”: Christ reigns now, and one day he will return once to raise the dead, judge the world and make all things new.',
    cases: [
      { t: 'Revelation is symbolic and goes over the same ground', text: 'Revelation tells the story of the church age several times over in parallel visions, each ending at the final judgment. Chapter 20 starts again from Christ’s first coming. Its numbers are symbols throughout, and 1,000 (ten times ten times ten) stands for a complete, long period.', refs: ['Revelation 1:1', 'Revelation 20:1–3'] },
      { t: 'Christ has already bound Satan', text: 'Jesus said he had entered the strong man’s house and bound him, and that the ruler of this world was being cast out. In Revelation 20 Satan is bound for one purpose: “so that he might not deceive the nations any longer.” Since Pentecost the gospel has gone to every nation.', refs: ['Matthew 12:28–29', 'John 12:31–32', 'Colossians 2:15'] },
      { t: 'Christ reigns now', text: 'Peter says David’s promise of a son on his throne was fulfilled when Christ rose and ascended. Christ is seated far above every rule and authority, and “he must reign until he has put all his enemies under his feet.” Believers who die reign with him.', refs: ['Acts 2:30–36', 'Ephesians 1:20–22', '1 Corinthians 15:25'] },
      { t: 'One return, one resurrection, one judgment', text: 'Jesus says an hour is coming when all in the tombs will come out, some to life and some to judgment. He separates sheep and goats at one coming. Paul and Peter place the rest of believers, the judgment of unbelievers and the new heavens and earth on the same day.', refs: ['John 5:28–29', 'Matthew 25:31–46', '2 Thessalonians 1:6–10', '2 Peter 3:10–13'] },
      { t: 'Death is defeated when Christ returns', text: 'When the dead are raised at Christ’s coming, “death is swallowed up in victory.” Creation itself is set free when the children of God are revealed. That leaves no room for a later age in which people still die.', refs: ['1 Corinthians 15:50–55', 'Romans 8:18–23'] },
    ],
    passages: [
      { ref: 'Revelation 20:1–6', read: 'A heavenly vision of the present age: Satan bound from deceiving the nations, and the souls of believers who have died reigning with Christ.', alt: 'Premillennialists read it as a future reign on earth after Christ returns.' },
      { ref: 'Matthew 12:28–29', read: 'Jesus has bound the strong man and is plundering his house: the binding of Satan began with Christ’s ministry.', alt: 'Premillennialists see this as a partial restraint, with the full binding still future.' },
      { ref: 'John 5:24–29', read: 'Two resurrections in one passage: the spiritual one “now here” (verse 25), and the bodily one of all the dead at once (verses 28–29). That matches the first and second resurrections of Revelation 20.', alt: 'Premillennialists note that the same chapter lets an “hour” span a long time.' },
      { ref: 'Ephesians 2:4–6', read: 'Believers have already been raised with Christ and seated with him in the heavenly places: the “first resurrection.”', alt: 'Premillennialists read the first resurrection as bodily, like the second.' },
      { ref: '2 Peter 3:8–13', read: 'The day of the Lord brings judgment and the new heavens and earth together, with no thousand years between. Verse 8 also warns against taking “a thousand years” as a fixed span.', alt: 'Premillennialists see the day of the Lord as a longer period that includes the thousand years.' },
      { ref: 'Matthew 13:24–30, 36–43', read: 'Wheat and weeds grow together until one harvest at the end of the age: good and evil side by side until Christ returns.', alt: 'Postmillennialists stress that the field still becomes mostly wheat.' },
      { ref: '1 Corinthians 15:50–55', read: 'At Christ’s coming the dead are raised and death is swallowed up: no mortal life continues after his return.', alt: 'Premillennialists apply this to believers only, with others still mortal during the thousand years.' },
      { ref: '2 Thessalonians 1:6–10', read: 'Rest for believers and judgment for unbelievers happen “when the Lord Jesus is revealed from heaven”: one day for both.', alt: 'Premillennialists see the final judgment of unbelievers after the thousand years.' },
    ],
    qa: [
      { q: 'Does Satan look bound today?', a: 'The binding is specific: he cannot “deceive the nations” and keep them from the gospel (Revelation 20:3). Like a dog on a chain, he is still dangerous within reach (1 Peter 5:8), but limited. Before Christ the nations were in darkness; now there are believers among almost every people.' },
      { q: 'If “they came to life” is bodily the second time, shouldn’t it be bodily the first time?', a: 'John 5 uses the same kind of language for a spiritual resurrection and a bodily one side by side (verses 25 and 28–29). Revelation 20 also speaks of a “second death” without a matching first death of the same kind.' },
      { q: 'Doesn’t “amillennial” deny the thousand years?', a: 'No. Amillennialists affirm the thousand years; they believe it is now. That’s why many prefer the name “realized millennium.”' },
    ],
    history: [
      'Tyconius (late 300s) and then Augustine (City of God, book 20, about 426) read the thousand years as the church age. After Augustine this became the standard view of the Western church.',
      'The Reformers kept it. The Augsburg Confession (1530) rejects the teaching that the godly will rule the world before the resurrection, and Calvin called the chiliasts’ thousand years too childish to need refuting. The Catholic Catechism (paragraph 676) rejects millenarianism, and the Orthodox churches hold the same.',
      'In the 20th century it was set out by Geerhardus Vos, Louis Berkhof, William Hendriksen (More Than Conquerors, 1940), Anthony Hoekema (The Bible and the Future, 1979), G. K. Beale and Kim Riddlebarger (A Case for Amillennialism, 2003).',
    ],
    teachers: [
      { name: 'Augustine', years: '354–430', note: 'City of God, book 20: the thousand years is the church age.' },
      { name: 'John Calvin', years: '1509–1564', note: 'Institutes 3.25: rejected an earthly thousand-year reign.' },
      { name: 'Herman Bavinck', years: '1854–1921', note: 'Dutch Reformed theologian; Reformed Dogmatics.' },
      { name: 'Geerhardus Vos', years: '1862–1949', note: 'Princeton; The Pauline Eschatology.' },
      { name: 'Anthony Hoekema', years: '1913–1988', note: 'The Bible and the Future, a standard modern account.' },
      { name: 'Kim Riddlebarger', years: '', note: 'A Case for Amillennialism.' },
    ],
    life: [
      { t: 'Confidence now', text: 'Christ already reigns and Satan is already bound from stopping the gospel, so believers can serve with courage.', refs: ['Ephesians 1:20–22', 'Matthew 28:18–20'] },
      { t: 'Realism about suffering', text: 'Growth and suffering run side by side until the end, so neither triumph nor trouble should surprise the church.', refs: ['Matthew 13:30', '2 Timothy 3:12'] },
      { t: 'Comfort in death', text: 'Believers who die go to be with Christ and reign with him now, while they wait for the resurrection.', refs: ['Philippians 1:23', 'Revelation 20:4'] },
      { t: 'Hope fixed on the new creation', text: 'The church’s hope is not a political future but Christ’s return and the new heavens and earth.', refs: ['2 Peter 3:13', 'Revelation 21:1–5'] },
    ],
    lens: 'Often idealist, or a mix: Revelation pictures the battle of every age, ending in Christ’s real return.',
    rapture: 'No separate rapture: believers meet Christ at his one return.',
  },

  post: {
    lead: 'Postmillennialism is the most hopeful view of history. It expects the gospel, by the power of the Spirit, to win most of the world to Christ, bringing a long age of righteousness and peace before he returns.',
    cases: [
      { t: 'Christ has all authority, so the mission will succeed', text: 'Jesus sends his church to make disciples of all nations on the basis of “all authority in heaven and on earth.” God promised his Son “the nations your heritage,” and that “all the ends of the earth shall remember and turn to the LORD.”', refs: ['Matthew 28:18–20', 'Psalm 2:8', 'Psalm 22:27'] },
      { t: 'The kingdom grows until it fills the earth', text: 'In Daniel the stone cut without hands becomes a great mountain that fills the whole earth. Jesus compares the kingdom to a mustard seed that becomes a tree and to yeast that works through all the dough.', refs: ['Daniel 2:34–35, 44', 'Matthew 13:31–33'] },
      { t: 'Christ reigns from heaven until his enemies are subdued', text: 'The Father tells the Son to sit at his right hand “until I make your enemies your footstool.” Christ “must reign until he has put all his enemies under his feet,” and heaven receives him “until the time for restoring all the things.”', refs: ['Psalm 110:1', '1 Corinthians 15:25', 'Acts 3:21'] },
      { t: 'The prophets promise a world full of the knowledge of God', text: 'The nations will stream to the LORD’s mountain and learn war no more. The earth will be filled with the knowledge of the glory of the LORD as the waters cover the sea, and “of the increase of his government and of peace there will be no end.”', refs: ['Isaiah 2:2–4', 'Habakkuk 2:14', 'Isaiah 9:7'] },
      { t: 'Israel’s conversion will bring blessing to the world', text: 'Paul says Israel’s “full inclusion” will mean even greater riches for the world, “life from the dead.” A great turning of Jewish people to Christ belongs to the gospel’s worldwide success.', refs: ['Romans 11:11–15'] },
    ],
    passages: [
      { ref: 'Psalm 110:1–2', read: 'Christ reigns from the Father’s right hand until every enemy is under his feet, so his return comes after his kingdom has triumphed.', alt: 'Amillennialists agree Christ reigns now but expect the last enemies to be defeated at his return.' },
      { ref: 'Daniel 2:34–35, 44', read: 'The kingdom starts small, like a stone, and grows into a mountain filling the whole earth: gradual growth in history.', alt: 'Premillennialists see the stone crushing the kingdoms suddenly, at Christ’s return.' },
      { ref: 'Matthew 13:31–33', read: 'The mustard seed and the leaven picture steady growth until “it was all leavened.”', alt: 'Others read the parables as the kingdom’s reach and hidden power, not a promise that most will believe.' },
      { ref: 'Matthew 28:18–20', read: 'With all authority behind it, the command to disciple the nations will be carried out.', alt: 'Others see a command to be obeyed faithfully, not a promise of how many will respond.' },
      { ref: '1 Corinthians 15:24–26', read: 'Christ reigns now and keeps subduing his enemies; death is the last to be destroyed, at his return.', alt: 'Premillennialists see a future reign between his coming and the end.' },
      { ref: 'Isaiah 2:2–4', read: 'Nations stream to the Lord and beat swords into plowshares: a coming age of peace in history.', alt: 'Premillennialists place this in the thousand years after Christ returns; amillennialists in the new creation.' },
      { ref: 'Romans 11:11–15', read: 'A future mass turning of Jews to Christ that brings “life from the dead” to the world.', alt: 'Others read “life from the dead” as the resurrection at Christ’s return.' },
      { ref: 'Revelation 20:1–6', read: 'A future era of gospel triumph on earth, growing out of the present age, before Christ returns.', alt: 'Amillennialists read it as the present age; premillennialists as a reign after Christ returns.' },
    ],
    qa: [
      { q: 'Doesn’t the New Testament warn of growing evil before the end (2 Timothy 3:1–5; Matthew 24:9–12)?', a: 'Many of these warnings concerned the apostles’ own generation and the fall of Jerusalem in AD 70 (“this generation will not pass away,” Matthew 24:34). Paul told Timothy to avoid such people, so they were already present. The gospel advances through suffering, not without it.' },
      { q: 'Doesn’t the world seem to be getting worse?', a: 'Measured over centuries, Christianity has grown from a few hundred believers to about a third of the world’s people. The kingdom grows like yeast, slowly and often unseen, and the golden age may still be far off.' },
      { q: 'Isn’t this just the 19th-century belief in progress?', a: 'Historic postmillennialism rests on Christ’s power and the work of the Spirit, not human progress. Its teachers distinguish it from the liberal “social gospel,” which borrowed its optimism without its gospel.' },
    ],
    history: [
      'Postmillennial hope flourished among the Puritans. The Westminster Larger Catechism (1648) teaches Christians to pray for the gospel to spread worldwide, “the Jews called, the fulness of the Gentiles brought in.”',
      'Jonathan Edwards and the Great Awakening carried it forward. Edwards’ call to united prayer for revival (1747) helped inspire the prayer movement behind William Carey and the modern missions movement. In the 1800s it was common among American Presbyterians and evangelicals, including Charles Hodge and B. B. Warfield at Princeton.',
      'It declined after the World Wars shook confidence in history. It was revived by Loraine Boettner (The Millennium, 1957), Iain Murray (The Puritan Hope, 1971) and Kenneth Gentry (He Shall Have Dominion, 1992), and is held today in some Reformed and Presbyterian churches.',
    ],
    teachers: [
      { name: 'John Owen', years: '1616–1683', note: 'Puritan theologian who expected a great spread of the gospel.' },
      { name: 'Jonathan Edwards', years: '1703–1758', note: 'A History of the Work of Redemption; called the church to pray for revival.' },
      { name: 'Charles Hodge', years: '1797–1878', note: 'Princeton Seminary; Systematic Theology.' },
      { name: 'B. B. Warfield', years: '1851–1921', note: 'Princeton; expected the gospel to win the world before Christ returns.' },
      { name: 'Loraine Boettner', years: '1901–1990', note: 'The Millennium (1957), which brought the view back into discussion.' },
      { name: 'Kenneth Gentry', years: '', note: 'He Shall Have Dominion; a leading present-day voice.' },
    ],
    life: [
      { t: 'Confidence in mission', text: 'The gospel will succeed, so prayer and missions are pursued with expectation.', refs: ['Matthew 24:14', 'Habakkuk 2:14'] },
      { t: 'Long-term faithfulness', text: 'Believers invest across generations, in family, work, education and culture, since the kingdom grows over time.', refs: ['Psalm 78:4–7', 'Matthew 13:33'] },
      { t: 'Prayer for revival', text: 'Christians pray for awakenings and for the conversion of the Jewish people as part of the gospel’s triumph.', refs: ['Romans 11:12', 'Matthew 6:10'] },
      { t: 'Patience', text: 'Growth is slow, like yeast or a seed, so setbacks don’t mean defeat.', refs: ['Mark 4:26–29'] },
    ],
    lens: 'Often partial preterist: much of Revelation and Matthew 24 fulfilled in the first century.',
    rapture: 'No separate rapture: believers meet Christ at his one return.',
  },
};
