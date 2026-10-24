// The church in Thessalonica at Moderate and Detailed reading levels (Simple = the base entry in churches.js).
// Key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
import { m, d, rd, pp } from '../nationLevels/_h.js';

export default {
  moderate: {
    letterTitle: 'The letters in brief',
    facts: [['Status', 'Free city and capital of Macedonia'], ['Population', 'Perhaps 65,000 or more'], ['Letters', '1 and 2 Thessalonians, c. AD 50–51, from Corinth'], ['Known for', 'Faith under persecution and hope in Christ\'s return']],
    who: 'Thessalonica was founded in 316 BC by Cassander, one of Alexander the Great\'s generals, who named it after his wife Thessalonike, Alexander\'s half-sister. Because it backed Antony and Octavian in the civil war, Rome made it a "free city" that governed itself through local magistrates called politarchs, the very title Luke uses in Acts 17:6.\n\nIt was the capital of Macedonia, a major seaport and a stop on the Via Egnatia, crowded with merchants, craftsmen and dockworkers. The city honored Roma and the emperors, along with Dionysus, the Cabirus and Egyptian gods like Serapis and Isis. There was also a synagogue with Jews and many God-fearing Greeks.',
    relationship: 'Paul came straight from his beating at Philippi. For three Sabbaths he reasoned in the synagogue that the Messiah had to suffer and rise, and some Jews, a great many devout Greeks and not a few leading women believed. Jealous opponents gathered a mob, attacked Jason\'s house, and dragged him before the politarchs, crying that these men "have turned the world upside down" and say "there is another king, Jesus."\n\nPaul and Silas slipped away by night to Berea, then Paul went on to Athens and Corinth. Unable to return, he sent Timothy, and when Timothy brought good news of their faith and love, Paul wrote 1 Thessalonians. A few months later, confusion about the Lord\'s return led to 2 Thessalonians.',
    why: 'These letters were written to believers only months old in the faith, already suffering for it, and grieving members who had died. That explains Paul\'s tender, parent-like tone, his focus on hope and the Lord\'s return, and his practical encouragement to keep working quietly and to "encourage one another with these words."',
    letter: '1 Thessalonians thanks God for their faith, remembers how Paul lived among them like a nursing mother and a father, and rejoices at Timothy\'s report. Then it teaches holiness and sexual purity, brotherly love and quiet work, comforts them about believers who have died ("the dead in Christ will rise first"), and reminds them that the day of the Lord will come like a thief in the night. 2 Thessalonians encourages them under persecution, corrects the idea that the day of the Lord has already come, describes "the man of lawlessness" who must appear first, and tells those who refuse to work to earn their own living.',
    moments: [
      m('c. AD 49', 'Paul preaches for three Sabbaths; Jews, many Greeks and leading women believe.', 'Acts 17', 'acts', 17),
      m('c. AD 49', 'A mob attacks Jason\'s house; Paul and Silas are sent away by night to Berea.', 'Acts 17', 'acts', 17),
      m('c. AD 49', 'Opponents from Thessalonica follow Paul to Berea and stir up the crowds.', 'Acts 17', 'acts', 17),
      m('c. AD 50', 'Paul longs to return "again and again," but Satan hinders him.', '1 Thessalonians 2', '1thessalonians', 2),
      m('c. AD 50', 'Paul sends Timothy from Athens to strengthen them under persecution.', '1 Thessalonians 3', '1thessalonians', 3),
      m('c. AD 50', 'Timothy brings good news, and Paul writes 1 Thessalonians from Corinth.', '1 Thessalonians 1', '1thessalonians', 1),
      m('c. AD 50', 'Paul teaches about believers who have died and the Lord\'s coming.', '1 Thessalonians 4', '1thessalonians', 4),
      m('c. AD 51', 'Confusion that the day of the Lord has already come leads to 2 Thessalonians.', '2 Thessalonians 2', '2thessalonians', 2),
      m('c. AD 56–57', 'Aristarchus and Secundus of Thessalonica travel with Paul toward Jerusalem.', 'Acts 20', 'acts', 20),
    ],
    archaeology: [
      { title: 'The politarch inscription', text: 'An inscription from a Roman arch (now in the British Museum) lists the city\'s politarchs, confirming Luke\'s unusual title.' },
      { title: 'The Roman forum', text: 'The forum of Thessalonica, with shops, an odeon and public buildings, lies in the heart of modern Thessaloniki.' },
      { title: 'The Serapeum', text: 'A temple of the Egyptian god Serapis shows the variety of religions Paul\'s converts turned away from.' },
    ],
    later: 'Thessalonica became a leading center of Christianity in the Greek world and later of the Byzantine Empire; Cyril and Methodius, missionaries to the Slavs, came from there. As Thessaloniki, it is Greece\'s second-largest city today.',
    leaders: [
      pp('Jason', 'Hosted Paul and was dragged before the city officials for it.'),
      pp('Aristarchus', 'A Thessalonian who traveled with Paul and shared his imprisonment (Colossians 4:10).'),
      pp('Secundus', 'Traveled with Paul carrying the collection for Jerusalem.'),
      pp('Timothy', 'Sent back to strengthen the church and brought Paul good news.', 'timothy'),
      pp('The idle', 'Some stopped working, perhaps expecting the Lord\'s immediate return (2 Thessalonians 3).'),
    ],
  },
  detailed: {
    moments: [
      d('c. AD 49', 'Three Sabbaths', 'Paul goes into the synagogue "as was his custom" and for three Sabbaths reasons from the Scriptures, explaining that the Christ had to suffer and rise: "This Jesus, whom I proclaim to you, is the Christ." Some Jews, a great many devout Greeks and not a few of the leading women believe.', 'Acts 17', 'acts', 17),
      d('c. AD 49', 'Another king', 'Jealous opponents gather "wicked men of the rabble," set the city in an uproar and attack Jason\'s house. Not finding Paul, they drag Jason before the politarchs: "These men who have turned the world upside down have come here also... they are all acting against the decrees of Caesar, saying that there is another king, Jesus."', 'Acts 17', 'acts', 17),
      d('c. AD 49', 'Away by night', 'After Jason posts bond, the believers send Paul and Silas away by night to Berea, where the Jews receive the word eagerly and examine the Scriptures daily. Opponents from Thessalonica follow and stir up the crowds, and Paul is sent on to Athens.', 'Acts 17', 'acts', 17),
      d('c. AD 50', 'Torn away', 'Paul writes that being separated from them was like being orphaned. "We wanted to come to you—I, Paul, again and again—but Satan hindered us." He calls them "our glory and joy."', '1 Thessalonians 2', '1thessalonians', 2),
      d('c. AD 50', 'Timothy sent', 'When he can bear it no longer, Paul stays alone in Athens and sends Timothy to establish and exhort them, so that no one would be moved by their afflictions, which he had warned them would come.', '1 Thessalonians 3', '1thessalonians', 3),
      d('c. AD 50', 'Good news', 'Timothy returns with the good news of their faith and love and their longing to see Paul. "For now we live, if you are standing fast in the Lord." Paul writes 1 Thessalonians from Corinth.', '1 Thessalonians 3', '1thessalonians', 3),
      d('c. AD 50', 'The dead in Christ', 'Some believers have died, and the church grieves. Paul writes that they need not "grieve as others do who have no hope": the Lord will descend with a cry of command, "the dead in Christ will rise first," and all believers "will always be with the Lord."', '1 Thessalonians 4', '1thessalonians', 4),
      d('c. AD 50', 'A thief in the night', 'When people say "There is peace and security," sudden destruction will come. But believers are "children of light," so they should stay awake and sober, wearing faith, love and the hope of salvation as armor.', '1 Thessalonians 5', '1thessalonians', 5),
      d('c. AD 51', 'Not yet', 'Someone has claimed, perhaps even by a letter falsely said to be from Paul, that the day of the Lord has already come. Paul reminds them that first comes the rebellion and the revealing of "the man of lawlessness," whom the Lord Jesus will destroy at His coming.', '2 Thessalonians 2', '2thessalonians', 2),
      d('c. AD 51', 'Work quietly', 'Some are walking in idleness, "not busy at work, but busybodies." Paul reminds them that he worked night and day so as not to burden anyone: "If anyone is not willing to work, let him not eat."', '2 Thessalonians 3', '2thessalonians', 3),
      d('c. AD 56–59', 'Faithful companions', 'Aristarchus and Secundus of Thessalonica travel with Paul to Jerusalem with the collection, and Aristarchus later sails with him to Rome as a prisoner.', 'Acts 27', 'acts', 27),
    ],
    folds: [
      {
        title: 'A city loyal to Caesar', open: true,
        text: 'Thessalonica owed its freedom and prosperity to Rome, and it showed its loyalty by honoring "Roma and the Roman benefactors" and later the emperors with a temple and priesthood. So the charge that the missionaries proclaimed "another king, Jesus" and acted "against the decrees of Caesar" was politically explosive, and the politarchs took it seriously.\n\nPaul\'s letters use words that echoed imperial language. Parousia, "coming," was used for an emperor\'s official visit; apantēsis, "to meet," for the city going out to welcome him (1 Thessalonians 4:17); and "peace and security" (5:3) sounds like Roman propaganda. Paul\'s message was that the true Lord\'s visit was still to come.',
      },
      {
        title: 'How Paul lived among them',
        text: 'Paul reminds the Thessalonians that he did not come with flattery or greed. "We were gentle among you, like a nursing mother taking care of her own children," and "like a father with his children, we exhorted each one of you" (1 Thessalonians 2:7, 11). He and his team "worked night and day" at their trade so as not to be a burden (2:9), probably tentmaking or leatherwork in a workshop where they could talk with customers and coworkers.\n\nThe church also received gifts from Philippi while Paul was there (Philippians 4:16). Paul\'s example of hard work became the basis for his later instructions to the idle.',
      },
      {
        title: 'Hope for those who grieve',
        text: 'In the ancient world, grief at death was often hopeless; tomb inscriptions sometimes read "I was not, I was, I am not, I do not care." The Thessalonians had believed Paul\'s message that Jesus would return, and when members died before that day, they feared those believers would miss out.\n\nPaul\'s answer was not to stop grieving but to grieve with hope: "since we believe that Jesus died and rose again, even so, through Jesus, God will bring with him those who have fallen asleep." The living and the dead in Christ will be gathered together, "and so we will always be with the Lord. Therefore encourage one another with these words."',
      },
      {
        title: 'What archaeology shows',
        items: [
          { title: 'The Vardar Gate inscription', text: 'A Roman-era arch inscription listing six politarchs confirmed Luke\'s use of a title once thought to be unknown outside Acts. Over thirty inscriptions with the title have since been found, most from Macedonia.' },
          { title: 'The forum', text: 'Excavations in the city center uncovered the Roman forum with paved squares, shops and an odeon, mostly from the century after Paul.' },
          { title: 'Imperial cult', text: 'Coins and inscriptions show Thessalonica honoring Julius Caesar as a god and Augustus as "son of god" in Paul\'s century.' },
          { title: 'Egyptian gods', text: 'The Serapeum, with inscriptions to Isis and Serapis, shows the range of gods in the city.' },
        ],
      },
      {
        title: 'Life in Thessalonica',
        text: 'Thessalonica was a busy port where goods from across the Aegean met the Via Egnatia. Many of the believers were probably manual workers and craftspeople, which is why Paul urged them "to work with your hands" and "to live quietly" (1 Thessalonians 4:11). Patrons and clients, guilds and local festivals shaped daily life, and turning away from the city\'s gods "to serve the living and true God" (1:9) meant leaving behind social ties and public celebrations, a source of the persecution they faced.',
      },
    ],
    questions: [
      { q: 'What does "caught up" in 1 Thessalonians 4:17 mean?', a: 'Paul says believers who are alive "will be caught up together with them in the clouds to meet the Lord in the air." Christians agree this describes being united with Christ at His return. They differ on details: some see a "rapture" before a time of tribulation, while many see it as the welcoming party that meets the Lord and escorts Him back to earth.' },
      { q: 'Who is the "man of lawlessness"?', a: 'Paul describes a figure who will exalt himself against God before the day of the Lord (2 Thessalonians 2:3–4). Interpretations include a future Antichrist, a symbol of rebellion that recurs in history, or a figure connected with Rome or the temple in Paul\'s day. Paul\'s main point is clear: the day had not yet come, and Christ will defeat him.' },
      { q: 'Why were some believers idle?', a: 'Some may have stopped working because they expected the Lord\'s immediate return; others may simply have relied on wealthier believers as patrons. Either way, Paul insisted that everyone who could should work and support themselves (2 Thessalonians 3:6–12).' },
    ],
    keyVerses: [
      { ref: 'Acts 17:6', text: 'These men who have turned the world upside down have come here also.' },
      { ref: '1 Thessalonians 1:9', text: 'You turned to God from idols to serve the living and true God.' },
      { ref: '1 Thessalonians 4:13', text: 'But we do not want you to be uninformed, brothers, about those who are asleep, that you may not grieve as others do who have no hope.' },
      { ref: '1 Thessalonians 5:16–18', text: 'Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.' },
      { ref: '2 Thessalonians 3:10', text: 'If anyone is not willing to work, let him not eat.' },
    ],
    reading: [
      rd('Acts 17', 'acts', 17, 'The church is founded'),
      rd('1 Thessalonians 1–3', '1thessalonians', 1, 'Thanks and Timothy\'s report'),
      rd('1 Thessalonians 4–5', '1thessalonians', 4, 'Holiness and hope'),
      rd('2 Thessalonians 1–2', '2thessalonians', 1, 'The day of the Lord'),
      rd('2 Thessalonians 3', '2thessalonians', 3, 'Work quietly'),
    ],
    leaders: [
      pp('Jason', 'Hosted the missionaries, was dragged before the politarchs, and posted bond for them; possibly the Jason of Romans 16:21.'),
      pp('Aristarchus', 'A Thessalonian who was seized in the Ephesus riot, traveled with Paul to Rome, and shared his imprisonment.'),
      pp('Secundus', 'One of the delegates who carried the collection to Jerusalem (Acts 20:4).'),
      pp('Timothy', 'Sent back to establish the church; co-author of both letters.', 'timothy'),
      pp('Silas (Silvanus)', 'Paul\'s partner in founding the church and co-author of both letters.', 'silas'),
      pp('Demas', 'Possibly from Thessalonica; he later deserted Paul and went there, "in love with this present world" (2 Timothy 4:10).'),
    ],
  },
};
