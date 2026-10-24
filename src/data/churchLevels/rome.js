// The church in Rome at Moderate and Detailed reading levels (Simple = the base entry in churches.js).
// Key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
import { m, d, rd, pp } from '../nationLevels/_h.js';

export default {
  moderate: {
    facts: [['Population', 'Perhaps one million'], ['Jewish community', 'Perhaps 40,000–50,000, with many synagogues'], ['Letter', 'Romans, c. AD 57, from Corinth'], ['Emperors', 'Claudius (AD 41–54), Nero (AD 54–68)']],
    who: 'Rome was the largest city in the world and the capital of an empire stretching from Britain to Syria. Rich senators lived in grand houses on the hills, but most people crowded into apartment blocks several stories high, often poorly built and prone to fire. Perhaps a third of the population were slaves, and many more were freed slaves. Free grain and public games kept the crowds content.\n\nPeople came to Rome from every part of the empire, including a large Jewish community, many of them living across the Tiber in the Trastevere district, with a dozen or more synagogues. Christians did not have church buildings; they met in house churches scattered across the city.',
    relationship: 'No apostle founded the Roman church. "Visitors from Rome" were in Jerusalem at Pentecost, and the gospel probably reached the city through travelers and returning Jews. The Roman historian Suetonius says Claudius expelled the Jews from Rome because of disturbances "at the instigation of Chrestus," likely arguments over Christ. For a time the church was mainly Gentile.\n\nWhen Jewish believers like Priscilla and Aquila returned after Claudius died in AD 54, tensions grew between Jewish and Gentile Christians over food laws and holy days. Paul wrote Romans around AD 57 to set out the gospel fully, unite the church, and ask for support for a mission to Spain. He arrived about three years later as a prisoner and taught there for two years. Later, after the great fire of AD 64, Nero blamed the Christians and put many to death.',
    why: 'Romans is Paul\'s fullest explanation of the gospel, but it is also a letter to a real church of Jews and Gentiles learning to live together. That is why it moves from "all have sinned" and justification by faith, through God\'s plan for Israel (chapters 9–11), to welcoming one another over food and holy days (chapters 14–15): one gospel creating one people.',
    letter: 'Romans begins with the gospel as "the power of God for salvation to everyone who believes." Chapters 1–3 show that Gentiles and Jews alike have sinned, and that God justifies sinners freely by grace through faith in Christ. Chapters 4–8 explain Abraham\'s faith, peace with God, Adam and Christ, freedom from sin and the law, and life in the Spirit ("no condemnation"). Chapters 9–11 wrestle with Israel\'s unbelief and God\'s faithfulness. Chapters 12–15 describe the transformed life: living sacrifices, love, respect for authorities, and the strong and weak welcoming one another. Chapter 16 greets dozens of friends.',
    moments: [
      m('AD 30', 'Visitors from Rome hear Peter preach at Pentecost.', 'Acts 2', 'acts', 2),
      m('c. AD 49', 'Claudius expels the Jews from Rome; Priscilla and Aquila move to Corinth.', 'Acts 18', 'acts', 18),
      m('c. AD 57', 'Paul writes Romans from Corinth: "I am not ashamed of the gospel."', 'Romans 1', 'romans', 1),
      m('c. AD 57', 'Paul hopes to visit Rome on his way to Spain.', 'Romans 15', 'romans', 15),
      m('c. AD 57', 'Paul greets many friends, including several house churches and women co-workers.', 'Romans 16', 'romans', 16),
      m('c. AD 57', 'In the Jerusalem barracks, the Lord tells Paul he must testify in Rome too.', 'Acts 23', 'acts', 23),
      m('c. AD 59–60', 'After a shipwreck on Malta, Paul reaches Italy.', 'Acts 27', 'acts', 27),
      m('c. AD 60', 'Believers walk out to the Forum of Appius to meet Paul as he arrives as a prisoner.', 'Acts 28', 'acts', 28),
      m('c. AD 60–62', 'Paul lives two years under guard in his own rented house, preaching "with all boldness."', 'Acts 28', 'acts', 28),
      m('c. AD 64–67', 'After the great fire, Nero blames and executes Christians; Peter and Paul are martyred.', '2 Timothy 4', '2timothy', 4),
    ],
    archaeology: [
      { title: 'The catacombs', text: 'Underground burial galleries outside Rome, with Christian paintings and inscriptions from the 100s AD on, preserve the faith of the early church.' },
      { title: 'Jewish catacombs', text: 'Jewish burial inscriptions name at least eleven synagogues in ancient Rome.' },
      { title: 'The Arch of Titus', text: 'Built after AD 81, it shows Roman soldiers carrying the menorah from the Jerusalem temple destroyed in AD 70.' },
    ],
    later: 'The Roman church grew in strength and influence despite repeated persecution, and became one of the leading churches of the ancient world. Clement of Rome wrote to Corinth around AD 96, and the catacombs outside the city preserve early Christian burial places.',
    leaders: [
      pp('Priscilla and Aquila', 'Back in Rome by AD 57, with a church in their house (Romans 16:3–5).'),
      pp('Phoebe', 'A deacon of the church at Cenchreae who likely carried the letter (Romans 16:1).'),
      pp('Andronicus and Junia', 'Jewish believers "well known to the apostles," in Christ before Paul.'),
      pp('Peter', 'Tradition says he ministered and was martyred in Rome.', 'peter'),
      pp('Nero', 'Emperor (AD 54–68) when Paul wrote and when the persecution came.'),
    ],
  },
  detailed: {
    moments: [
      d('AD 30', 'Visitors from Rome', 'At Pentecost, among the crowd from every nation who hear the apostles in their own languages are "visitors from Rome, both Jews and proselytes." Some may have carried the gospel home.', 'Acts 2', 'acts', 2),
      d('c. AD 49', 'Expelled by Claudius', 'Paul meets Aquila and Priscilla in Corinth, "recently come from Italy... because Claudius had commanded all the Jews to leave Rome." Suetonius links the expulsion to riots over "Chrestus," probably Christ.', 'Acts 18', 'acts', 18),
      d('c. AD 57', 'Not ashamed', 'Writing from Corinth to a church he has never visited, Paul says he longs to see them and is eager to preach there, "for I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek."', 'Romans 1', 'romans', 1),
      d('c. AD 57', 'Justified by grace', '"All have sinned and fall short of the glory of God, and are justified by his grace as a gift, through the redemption that is in Christ Jesus." Jew and Gentile stand on the same level before God.', 'Romans 3', 'romans', 3),
      d('c. AD 57', 'No condemnation', 'Paul writes that "there is therefore now no condemnation for those who are in Christ Jesus," and that nothing "will be able to separate us from the love of God in Christ Jesus our Lord."', 'Romans 8', 'romans', 8),
      d('c. AD 57', 'Welcome one another', 'Some believers eat anything and treat every day alike; others keep food laws and holy days. Paul tells both not to judge or despise each other: "welcome one another as Christ has welcomed you, for the glory of God."', 'Romans 15', 'romans', 15),
      d('c. AD 57', 'A household of friends', 'Paul commends Phoebe and greets twenty-six people by name, including Prisca and Aquila "and the church in their house," Andronicus and Junia, and many women who "worked hard in the Lord."', 'Romans 16', 'romans', 16),
      d('c. AD 57', '"You must testify also in Rome"', 'After a riot in Jerusalem, Paul is held in the Roman barracks. That night the Lord stands by him: "Take courage, for as you have testified to the facts about me in Jerusalem, so you must testify also in Rome."', 'Acts 23', 'acts', 23),
      d('c. AD 59–60', 'Storm and shipwreck', 'Having appealed to Caesar, Paul sails for Rome as a prisoner. A violent storm drives the ship for two weeks; Paul encourages the crew, "I have faith in God that it will be exactly as I have been told," and all 276 people reach Malta safely.', 'Acts 27', 'acts', 27),
      d('c. AD 60', 'The Forum of Appius', 'As Paul travels up the Appian Way, believers come out as far as the Forum of Appius and Three Taverns to meet him. "On seeing them, Paul thanked God and took courage."', 'Acts 28', 'acts', 28),
      d('c. AD 60–62', 'Without hindrance', 'Paul lives two whole years in his own rented quarters under guard, welcoming all who come, "proclaiming the kingdom of God and teaching about the Lord Jesus Christ with all boldness and without hindrance." He probably writes Ephesians, Colossians, Philemon and Philippians there.', 'Acts 28', 'acts', 28),
      d('c. AD 66–67', 'The time of departure', 'Imprisoned again, probably in Rome, Paul writes his last letter: "I am already being poured out as a drink offering, and the time of my departure has come." Tradition says he was beheaded on the road to Ostia, and Peter crucified in Rome under Nero.', '2 Timothy 4', '2timothy', 4),
    ],
    folds: [
      {
        title: 'House churches in Rome', open: true,
        text: 'There was no single "First Church of Rome." Romans 16 greets at least five groups: the church in the house of Prisca and Aquila, "those who belong to the family of Aristobulus," "those in the Lord who belong to the family of Narcissus," the brothers with Asyncritus and others, and the saints with Philologus and Julia. Many of the names are common among slaves and freed slaves, and several belong to Jewish believers.\n\nThe groups were probably small, meeting in homes, workshops or apartment rooms. Paul\'s letter would have been carried from one to another, read aloud, and discussed, a reason he writes so carefully about unity.',
      },
      {
        title: 'Jews and Gentiles in one church',
        text: 'The church began among Jews, became mostly Gentile after Claudius\' expulsion, and then received Jewish believers back. Gentile Christians may have looked down on Jewish believers as weak for keeping food laws and festivals, while Jewish believers may have judged Gentiles. Paul addresses both: Gentiles must not boast over Israel, since they are wild branches grafted into the olive tree (11:17–24), and the "strong" and "weak" must welcome one another (14:1–15:13). The letter\'s great theme, that God justifies Jew and Gentile alike by faith, was also the foundation of their life together.',
      },
      {
        title: 'Nero\'s persecution',
        text: 'In July AD 64 a fire burned for days and destroyed much of Rome. Rumors blamed Nero, so, according to the historian Tacitus, he blamed the Christians, "a class hated for their abominations." Some were dressed in animal skins and torn by dogs, others crucified or burned as torches to light Nero\'s gardens at night.\n\nThis is the first known state persecution of Christians. Christian tradition places the deaths of Peter and Paul in this period, and 1 Peter, written from "Babylon" (likely Rome, 5:13), and Revelation reflect a church learning to suffer under the empire.',
      },
      {
        title: 'What archaeology shows',
        items: [
          { title: 'Catacombs', text: 'More than sixty catacombs, including those of Callixtus, Priscilla and Domitilla, contain miles of burial galleries with early Christian symbols like the fish, the anchor and the Good Shepherd.' },
          { title: 'The Vatican necropolis', text: 'Excavations under St. Peter\'s Basilica uncovered a cemetery and a small monument from about AD 160, which early Christians honored as Peter\'s grave.' },
          { title: 'Jewish inscriptions', text: 'Burial inscriptions from Rome\'s Jewish catacombs name synagogues like those of the "Augustesians" and "Agrippesians," possibly linked to Augustus and to Herod\'s family.' },
          { title: 'The Alexamenos graffito', text: 'A crude drawing scratched on a wall on the Palatine Hill, probably from about AD 200, shows a man worshiping a crucified figure with a donkey\'s head: "Alexamenos worships his god." It shows how Christians were mocked.' },
        ],
      },
      {
        title: 'Life in Rome',
        text: 'Life for most Romans was crowded and noisy. Fires were common in the timber-framed apartment blocks, and the poor depended on the free grain dole. Slaves worked in households, shops and on building sites; many earned their freedom but remained tied to their former masters as clients. Paul\'s words about slavery and freedom, adoption and inheritance, and obeying the governing authorities (13:1–7) would have had very concrete meanings for his readers.',
      },
    ],
    questions: [
      { q: 'Who founded the church in Rome?', a: 'No one knows. Acts mentions visitors from Rome at Pentecost, and travelers, merchants and slaves likely carried the gospel there. Paul writes to a church already well known for its faith (Romans 1:8) that no apostle had founded, which is why he says he does not want to "build on someone else\'s foundation" (15:20).' },
      { q: 'Was Peter the first bishop of Rome?', a: 'Early Christian writers, from Clement (about AD 96) to Irenaeus (about AD 180), agree that Peter and Paul ministered and died in Rome. Roman Catholic tradition regards Peter as its first bishop; many Protestants accept that Peter was in Rome but see the office of bishop developing later. The New Testament itself does not describe Peter\'s time there.' },
      { q: 'Why does Paul tell Christians to submit to the authorities?', a: 'In Romans 13 Paul teaches that governments are appointed by God to restrain evil, so Christians should pay taxes and respect rulers. He wrote this before Nero\'s persecution, and other passages show limits: when rulers command disobedience to God, "we must obey God rather than men" (Acts 5:29).' },
    ],
    keyVerses: [
      { ref: 'Romans 1:16', text: 'For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek.' },
      { ref: 'Romans 3:23–24', text: 'For all have sinned and fall short of the glory of God, and are justified by his grace as a gift, through the redemption that is in Christ Jesus.' },
      { ref: 'Romans 8:1', text: 'There is therefore now no condemnation for those who are in Christ Jesus.' },
      { ref: 'Romans 12:1', text: 'I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship.' },
      { ref: 'Romans 15:7', text: 'Therefore welcome one another as Christ has welcomed you, for the glory of God.' },
    ],
    reading: [
      rd('Romans 1–3', 'romans', 1, 'All have sinned; justified by faith'),
      rd('Romans 5–8', 'romans', 5, 'Peace with God and life in the Spirit'),
      rd('Romans 9–11', 'romans', 9, 'God\'s plan for Israel'),
      rd('Romans 12–16', 'romans', 12, 'The transformed life and greetings'),
      rd('Acts 27–28', 'acts', 27, 'Paul\'s journey to Rome'),
      rd('2 Timothy 4', '2timothy', 4, 'Paul\'s last words'),
    ],
    leaders: [
      pp('Priscilla and Aquila', 'Expelled under Claudius, they returned to Rome and hosted a church; Paul says they "risked their necks" for him.'),
      pp('Phoebe', 'A deacon (or servant) of the church at Cenchreae and a patron of many, who probably carried the letter.'),
      pp('Andronicus and Junia', 'Paul\'s Jewish relatives and fellow prisoners, "well known to the apostles."'),
      pp('Rufus', 'Possibly the son of Simon of Cyrene, who carried Jesus\' cross (Mark 15:21; Romans 16:13).'),
      pp('Paul', 'Wrote the letter, then came as a prisoner and preached for two years.', 'paul'),
      pp('Peter', 'By tradition he ministered and was crucified in Rome under Nero.', 'peter'),
      pp('Luke', 'Traveled with Paul to Rome and stayed with him to the end (2 Timothy 4:11).', 'luke'),
    ],
  },
};
