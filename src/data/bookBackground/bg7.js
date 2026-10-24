// Deeper "background" for book summaries at the Detailed level (job #18), books 58–66.
// Same schema as bg1.js (documented in bookBackground/index.js).
const p = (label, book, ch, note) => ({ label, book, ch, note });

export default {
  hebrews: {
    authorship: 'Hebrews is anonymous. The early church debated its author: some credited Paul, while others suggested Barnabas, Luke, Apollos or Priscilla. The theologian Origen (3rd century) concluded, "who wrote it, God only knows." It was probably written before AD 70, since it speaks of temple sacrifices as still going on.',
    setting: 'Written to Jewish believers, perhaps in Rome (13:24), who had endured persecution and were now tempted to drift back from Christ to the old ways of temple and sacrifice.',
    context: 'The Jerusalem temple still stood, with its priests and daily sacrifices. Hebrews argues from the Old Testament that Jesus is greater than angels, Moses, Joshua, the high priests and the whole sacrificial system, which were shadows of Him.',
    structure: [['1–4', 'The Son is greater than angels and Moses'], ['5–7', 'A high priest after the order of Melchizedek'], ['8–10', 'A better covenant and a once-for-all sacrifice'], ['11', 'The hall of faith'], ['12–13', 'Run the race; live as God\'s people']],
    passages: [p('Hebrews 1', 'hebrews', 1, 'God has spoken by His Son'), p('Hebrews 4', 'hebrews', 4, 'A great high priest who sympathizes'), p('Hebrews 8', 'hebrews', 8, 'The new covenant'), p('Hebrews 10', 'hebrews', 10, 'Once for all'), p('Hebrews 11', 'hebrews', 11, 'By faith'), p('Hebrews 12', 'hebrews', 12, 'Looking to Jesus')],
    christ: 'The whole letter is about Christ: "the radiance of the glory of God and the exact imprint of his nature" (1:3), the great high priest "who has been tempted as we are, yet without sin" (4:15), who offered Himself "once for all" (10:10) and is "the founder and perfecter of our faith" (12:2).',
  },
  james: {
    authorship: 'Traditionally James the brother of Jesus, leader of the Jerusalem church, who was martyred about AD 62. If so, it may be one of the earliest New Testament books (about AD 45–50). Some scholars think a later writer used his name because of its polished Greek; others note James\'s Galilean background and the letter\'s Jewish, practical style.',
    setting: 'Written "to the twelve tribes in the Dispersion," Jewish believers scattered outside Judea, many of them poor and facing trials and exploitation by the rich.',
    context: 'James reads like wisdom literature and echoes Jesus\' Sermon on the Mount. It addresses believers who claimed faith but showed favoritism to the rich, spoke carelessly and quarreled. Its teaching that "faith without works is dead" complements Paul: true faith always shows itself in action.',
    structure: [['1', 'Trials, wisdom and doing the word'], ['2', 'Favoritism; faith and works'], ['3', 'The tongue and true wisdom'], ['4–5', 'Humility, the rich, patience and prayer']],
    passages: [p('James 1', 'james', 1, 'Count it all joy; be doers of the word'), p('James 2', 'james', 2, 'Faith without works is dead'), p('James 3', 'james', 3, 'Taming the tongue'), p('James 5', 'james', 5, 'The prayer of faith')],
    christ: 'James mentions Jesus by name only twice, calling Him "our Lord Jesus Christ, the Lord of glory" (2:1), yet the letter is full of His teaching. It calls believers to wait patiently for "the coming of the Lord" (5:7–8) and to live out the "perfect law, the law of liberty" that Christ fulfilled.',
  },
  '1peter': {
    authorship: 'The letter names the apostle Peter, writing "by Silvanus" from "Babylon," probably a code name for Rome, about AD 62–64. Some scholars question Peter\'s authorship because of its good Greek, but Silvanus may have helped write it.',
    setting: 'Written to believers scattered across five Roman provinces in Asia Minor (modern Turkey), mostly Gentiles, who were suffering slander and hostility for their faith.',
    context: 'Christians who refused to join in pagan festivals and emperor worship were seen as antisocial and suspicious. Persecution was spreading, and Nero\'s violent persecution in Rome began in AD 64.',
    structure: [['1–2:10', 'A living hope and a chosen people'], ['2:11–3', 'Living honorably among unbelievers'], ['4–5', 'Suffering as Christians; shepherds and the flock']],
    passages: [p('1 Peter 1', '1peter', 1, 'Born again to a living hope'), p('1 Peter 2', '1peter', 2, 'A chosen race; Christ\'s example'), p('1 Peter 3', '1peter', 3, 'Christ suffered once for sins'), p('1 Peter 5', '1peter', 5, 'Cast your anxieties on Him')],
    christ: 'Peter draws on Isaiah 53: Christ "bore our sins in his body on the tree... By his wounds you have been healed" (2:24). Christ "suffered once for sins, the righteous for the unrighteous, that he might bring us to God" (3:18), and He is the chief Shepherd who will appear in glory.',
  },
  '2peter': {
    authorship: 'The letter names Simon Peter, writing near his death (1:14), about AD 65–68. It is the most disputed New Testament book: many scholars think a later writer used Peter\'s name, because of its style and similarities to Jude; the early church debated it but finally accepted it.',
    setting: 'Written to the same believers as 1 Peter (3:1), who were being troubled by false teachers.',
    context: 'False teachers were twisting grace into an excuse for immorality and mocking the promise of Christ\'s return because it had not happened yet. Peter reminds them that he was an eyewitness of Jesus\' glory at the Transfiguration and that God is patient, not slow.',
    structure: [['1', 'Grow in godliness; the eyewitness and the prophetic word'], ['2', 'False teachers and their judgment'], ['3', 'The day of the Lord will come']],
    passages: [p('2 Peter 1', '2peter', 1, 'Eyewitnesses of His majesty'), p('2 Peter 2', '2peter', 2, 'False teachers'), p('2 Peter 3', '2peter', 3, 'A day is like a thousand years')],
    christ: 'Peter calls Jesus "our God and Savior Jesus Christ" (1:1) and recalls hearing the Father\'s voice on the holy mountain: "This is my beloved Son." The letter ends looking to "new heavens and a new earth in which righteousness dwells" and urging growth "in the grace and knowledge of our Lord and Savior Jesus Christ" (3:18).',
  },
  '1john': {
    authorship: 'The letter is anonymous but clearly from the same circle as John\'s Gospel, and early tradition credits the apostle John, writing from Ephesus about AD 85–95. Some scholars attribute it to "John the elder" or a Johannine community.',
    setting: 'Written to churches that had just been through a painful split: some teachers had left, denying that Jesus was the Christ who came in the flesh.',
    context: 'Early forms of the idea later called Gnosticism taught that matter is evil and that a divine Christ could not truly become human or die. John insists that "Jesus Christ has come in the flesh" and gives tests of true faith: believing in Jesus, obeying God\'s commands and loving one another.',
    structure: [['1–2', 'Walking in the light; fellowship and forgiveness'], ['3', 'Children of God who love one another'], ['4', 'Test the spirits; God is love'], ['5', 'Faith that overcomes; assurance of eternal life']],
    passages: [p('1 John 1', '1john', 1, 'If we confess our sins'), p('1 John 3', '1john', 3, 'See what kind of love'), p('1 John 4', '1john', 4, 'God is love'), p('1 John 5', '1john', 5, 'That you may know you have eternal life')],
    christ: 'John begins with what "we have seen with our eyes... and touched with our hands... the word of life" (1:1). Jesus Christ the righteous is our advocate with the Father and "the propitiation for our sins" (2:1–2), and "in this is love, not that we have loved God but that he loved us and sent his Son" (4:10).',
  },
  '2john': {
    authorship: 'Written by "the elder," traditionally the apostle John, about AD 85–95. Some scholars think "the elder" was a different John who led churches in Asia.',
    setting: 'A short letter to "the elect lady and her children," most likely a local church and its members, near the churches of 1 John.',
    context: 'Traveling teachers depended on hospitality from churches. John warns not to welcome deceivers who deny that Jesus Christ came in the flesh, since supporting them would share in their work.',
    structure: [['1–6', 'Walk in truth and love'], ['7–11', 'Beware of deceivers'], ['12–13', 'Hope to visit']],
    passages: [p('2 John 1', '2john', 1, 'The whole letter: truth and love')],
    christ: 'John holds together truth and love "in Jesus Christ the Father\'s Son" (v. 3), and warns that whoever does not abide in the teaching of Christ does not have God, while "whoever abides in the teaching has both the Father and the Son" (v. 9).',
  },
  '3john': {
    authorship: 'Written by "the elder," traditionally the apostle John, about AD 85–95, likely at the same time as 2 John.',
    setting: 'A personal note to Gaius, a faithful believer, about hospitality to traveling missionaries, and about Diotrephes, a church leader who refused to welcome them and opposed John.',
    context: 'Early Christian missionaries traveled from church to church "for the sake of the name," taking nothing from Gentiles, so they relied on believers for food and lodging. Supporting them made believers "fellow workers for the truth."',
    structure: [['1–8', 'Praise for Gaius\'s hospitality'], ['9–10', 'Warning about Diotrephes'], ['11–15', 'Commendation of Demetrius; greetings']],
    passages: [p('3 John 1', '3john', 1, 'The whole letter: fellow workers for the truth')],
    christ: 'Missionaries went out "for the sake of the name" (v. 7), the name of Jesus. John\'s joy is to hear that his children "are walking in the truth" (v. 4), the truth found in Christ, who is "the way, and the truth, and the life."',
  },
  jude: {
    authorship: 'Written by "Jude, a servant of Jesus Christ and brother of James," traditionally Judas, one of Jesus\' brothers (Mark 6:3). Dates range from about AD 65–80. Jude quotes the Jewish book of 1 Enoch and alludes to the Assumption of Moses, which some found surprising; quoting a book does not mean treating it as Scripture.',
    setting: 'Written to believers whose churches had been infiltrated by ungodly people who "pervert the grace of our God into sensuality and deny our only Master and Lord, Jesus Christ" (v. 4).',
    context: 'Jude shares much material with 2 Peter 2, and one probably used the other. It uses Old Testament examples, Israel in the wilderness, the fallen angels, Sodom and Gomorrah, Cain, Balaam and Korah, as warnings of judgment on those who turn grace into license.',
    structure: [['1–4', 'Contend for the faith'], ['5–16', 'Examples of judgment and a description of the false teachers'], ['17–25', 'Keep yourselves in God\'s love; doxology']],
    passages: [p('Jude 1', 'jude', 1, 'The whole letter: contend for the faith')],
    christ: 'Jude ends with one of the Bible\'s great doxologies: "Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy, to the only God, our Savior, through Jesus Christ our Lord, be glory..." (vv. 24–25). Believers wait "for the mercy of our Lord Jesus Christ that leads to eternal life."',
  },
  revelation: {
    authorship: 'Written by "John," exiled on the island of Patmos, whom early tradition identifies as the apostle John. Some early and modern scholars thought another John wrote it because its Greek style differs from the Gospel. Most date it about AD 95, under Emperor Domitian; some prefer about AD 68, under Nero.',
    setting: 'Written to seven real churches in the Roman province of Asia (modern western Turkey), facing persecution, false teaching and the pressure to compromise with emperor worship and pagan trade guilds.',
    context: 'Revelation is "apocalyptic" writing, using symbols, numbers and visions drawn heavily from Daniel, Ezekiel, Isaiah and Zechariah. Christians read it in four main ways: as about events in John\'s own day, as history unfolding through the church age, as future events at the end, or as symbolic of the timeless struggle between Christ and evil. Many combine these.',
    structure: [['1–3', 'The risen Christ and the letters to seven churches'], ['4–5', 'The throne of God and the Lamb'], ['6–16', 'Seals, trumpets and bowls of judgment'], ['17–20', 'Babylon\'s fall, Christ\'s victory and the final judgment'], ['21–22', 'The new heaven and new earth']],
    passages: [p('Revelation 1', 'revelation', 1, 'The risen Christ'), p('Revelation 2–3', 'revelation', 2, 'Letters to seven churches'), p('Revelation 4–5', 'revelation', 4, 'The throne and the Lamb'), p('Revelation 12', 'revelation', 12, 'The woman and the dragon'), p('Revelation 19', 'revelation', 19, 'The rider on the white horse'), p('Revelation 21–22', 'revelation', 21, 'All things new')],
    christ: 'Revelation is "the revelation of Jesus Christ" (1:1). He is the faithful witness, the firstborn of the dead, the Lion of Judah who is the slain Lamb, the King of kings and Lord of lords, and "the Alpha and the Omega, the first and the last." It ends with God dwelling with His people, and the prayer, "Come, Lord Jesus!"',
  },
};
