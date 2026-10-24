// Daniel's Prophecies › Background: the wars behind Daniel (/daniel/background).
// The empires and wars that Daniel 2, 7, 8 and 11 describe, in order, so readers know the history before reading the visions.
// Each section:
//   period — the Geopolitical Timeline page it belongs to (/empire/:id)
//   dan    — Daniel passages it lines up with: [label, chapter]
//   mac    — 1 Maccabees chapters that tell it (Apocrypha), when any: [label, chapter]
//   lead   — one sentence (Simple)
//   points — [heading, text, sub-points?] (Moderate shows heading + text; Detailed adds the sub-points)

export const BG_SECTIONS = [
  { id: 'babylon', title: 'Babylon falls to Persia', years: '550–539 BC', period: 'babylon', also: 'persia',
    dan: [['Daniel 5', 5], ['Daniel 6', 6]],
    lead: 'Cyrus of Persia built an empire and took Babylon in 539 BC, the night of Belshazzar’s feast.',
    points: [
      ['Cyrus rises', 'Cyrus the Great took over the Median kingdom in 550 BC and Lydia, in today’s Turkey, around 547 BC.'],
      ['A weak Babylon', 'King Nabonidus was unpopular and spent about ten years in the Arabian desert, leaving his son Belshazzar in charge.'],
      ['The fall', 'In autumn 539 BC Cyrus beat Babylon’s army at Opis on the Tigris; his forces then entered Babylon with little fighting.', ['This is the night of Belshazzar’s feast and the writing on the wall (Daniel 5).']],
      ['The return', 'In 538 BC Cyrus let the exiles go home to rebuild the temple (Ezra 1). Persia ruled Judea for the next 200 years, mostly peacefully.'],
    ] },
  { id: 'persian-wars', title: 'Persia against Greece', years: '499–479 BC', period: 'persia',
    dan: [['Daniel 11:2', 11]],
    lead: 'Persia twice invaded Greece and was beaten both times, a wrong the Greeks would later avenge.',
    points: [
      ['How it started', 'The Greek cities of Ionia, on the Turkish coast, revolted against Persia in 499 BC. Athens sent help, and Persia’s regional capital Sardis was burned.'],
      ['Marathon (490 BC)', 'Darius I sent a fleet to punish Athens. A smaller Athenian army beat it.'],
      ['Xerxes’ invasion (480 BC)', 'Xerxes, Persia’s richest king, gathered troops from across the empire. He won at Thermopylae and burned Athens, but lost his fleet at Salamis and went home.', [
        'He bridged the Hellespont with boats and dug a canal through the Athos peninsula.',
        'At Thermopylae, Leonidas, his 300 Spartans and a few thousand allies held the pass for three days.',
        'At Salamis, Themistocles lured the Persian fleet into narrow waters and destroyed it.',
        'Daniel 11:2 describes him: a fourth king, far richer than the rest, who stirs up all against Greece.',
      ]],
      ['The end (479 BC)', 'His remaining army was beaten at Plataea and his fleet at Mycale. Persia never invaded Greece again, but kept meddling with money.'],
      ['Judea meanwhile', 'Xerxes is the Ahasuerus of Esther. Under his son Artaxerxes I, Ezra and Nehemiah returned and rebuilt Jerusalem’s walls (about 458–445 BC).'],
    ] },
  { id: 'alexander', title: 'Alexander the Great', years: '336–323 BC', period: 'hellenistic',
    dan: [['Daniel 8:5–8', 8], ['Daniel 11:3', 11]],
    lead: 'Alexander conquered the whole Persian Empire in about ten years, then died at 32 with no adult heir.',
    points: [
      ['Philip’s plan', 'Philip II of Macedon conquered the Greek cities in 338 BC and planned a war of revenge on Persia. He was assassinated in 336 BC, and his son Alexander became king at 20.'],
      ['The battles', 'Alexander crossed into Asia in 334 BC and beat the Persians at the Granicus, Issus (333) and Gaugamela (331), taking Tyre and Egypt on the way.', [
        'At Issus he beat Darius III himself, who fled and left his family behind.',
        'He took the island city of Tyre after a seven-month siege by building a causeway to it, then took Gaza.',
        'Egypt welcomed him as a liberator, and he founded Alexandria there.',
        'Gaugamela, near today’s Mosul, destroyed Darius’s last great army.',
      ]],
      ['The end of Persia', 'He took Babylon, Susa and Persepolis and burned the palace at Persepolis in 330 BC. Darius was killed by one of his own governors.'],
      ['India and death', 'He pushed on to India (the Hydaspes, 326 BC), but his army refused to go further. He died in Babylon in June 323 BC.', ['Daniel 8 pictures him as a goat that crosses the earth without touching the ground; its great horn breaks at the height of its power.']],
      ['Judea', 'Judea simply passed from Persian to Greek rule. Josephus tells of Alexander visiting Jerusalem and being shown Daniel; most historians consider it legend.'],
    ] },
  { id: 'generals', title: 'The generals divide the empire', years: '323–281 BC', period: 'hellenistic',
    dan: [['Daniel 8:8', 8], ['Daniel 11:4–5', 11]],
    lead: 'Alexander’s generals fought for twenty years and split his empire into four kingdoms.',
    points: [
      ['The scramble', 'Alexander’s half-brother and infant son were made kings in name but later murdered. His generals fought for the empire, and Antigonus “the One-Eyed” came closest to holding it together until the others killed him at Ipsus in 301 BC.'],
      ['Four kingdoms', 'Ptolemy held Egypt, Seleucus held Syria and Mesopotamia, Lysimachus held Thrace and Asia Minor, and Cassander held Macedonia: the four horns of Daniel 8:8 and 11:4.'],
      ['The seed of the next wars', 'After Ipsus, southern Syria and Judea were assigned to Seleucus, but Ptolemy already occupied them and refused to leave. That dispute led to over a century of war.'],
      ['Seleucus grows strong', 'Seleucus, once one of Ptolemy’s officers, regained Babylon in 312 BC and beat Lysimachus in 281 BC. His became the largest of the four kingdoms.', ['Daniel 11:5: “one of his princes shall be stronger than he.”']],
      ['Judea under the Ptolemies (301–200 BC)', 'Judea was ruled by its high priests and taxed through local families. Many Jews settled in Alexandria, where by tradition the Scriptures were translated into Greek (the Septuagint).'],
    ] },
  { id: 'syrian-wars', title: 'The Syrian Wars: south against north', years: '274–195 BC', period: 'hellenistic',
    dan: [['Daniel 11:5–17', 11]],
    lead: 'The Ptolemies of Egypt (the “king of the south”) and the Seleucids of Syria (the “king of the north”) fought six wars over Judea.',
    points: [
      ['A marriage peace that failed (c. 252 BC)', 'To end the second war, the Seleucid king Antiochus II married Berenice, daughter of Ptolemy II. After Ptolemy died, Antiochus went back to his first wife Laodice and died in 246 BC; Berenice and her infant son were murdered.', ['Daniel 11:6. Ancient writers say Laodice poisoned Antiochus.']],
      ['Revenge (246–241 BC)', 'Berenice’s brother, Ptolemy III, invaded, reached Antioch and possibly the Euphrates, and carried home huge plunder.', ['He brought back Egyptian god statues the Persians had taken centuries before, earning the title Euergetes, “Benefactor” (Daniel 11:7–9).']],
      ['Raphia (217 BC)', 'Antiochus III (“the Great”) attacked, but Ptolemy IV beat him near Gaza in one of the biggest battles of the age, about 70,000 men on each side with war elephants.', ['Ptolemy won partly by arming native Egyptians, which later fed revolts that weakened Egypt (Daniel 11:10–12).']],
      ['Panium (c. 200 BC)', 'With a child king in Egypt, Antiochus III crushed the Ptolemaic general Scopas at Panium, at the source of the Jordan, and took Judea.', ['Scopas held out in Sidon until a siege forced him to surrender (Daniel 11:15).', 'Jerusalem welcomed Antiochus, who granted tax relief and let the Jews live by their own laws: “the glorious land” of 11:16 was now Seleucid.']],
      ['Another marriage (194/193 BC)', 'Antiochus married his daughter Cleopatra I to the young Ptolemy V, hoping to control Egypt through her. She sided with her husband instead (Daniel 11:17).'],
    ] },
  { id: 'rome', title: 'Rome breaks Antiochus III', years: '192–175 BC', period: 'hellenistic',
    dan: [['Daniel 11:18–20', 11]],
    lead: 'Rome crushed Antiochus III, took his son as a hostage and left the Seleucids short of money.',
    points: [
      ['Moving west', 'Antiochus III pushed into Asia Minor and Greece and sheltered Rome’s enemy Hannibal.'],
      ['The defeats', 'Rome beat him at Thermopylae in 191 BC and at Magnesia in 190 BC under Lucius Scipio, the “commander” who ends his insolence (Daniel 11:18).'],
      ['The peace of Apamea (188 BC)', 'He gave up Asia Minor west of the Taurus, his elephants and fleet, paid 15,000 talents over twelve years, and sent hostages to Rome, including his son, the future Antiochus IV.'],
      ['His death', 'Short of money, he was killed in 187 BC while robbing a temple in Elymais, in Persia (Daniel 11:19).'],
      ['Seleucus IV (187–175 BC)', 'His son spent his reign paying Rome and sent his minister Heliodorus to seize the Jerusalem temple treasury. Heliodorus later murdered him (Daniel 11:20).', ['2 Maccabees 3 says Heliodorus was stopped from entering the treasury.']],
    ] },
  { id: 'antiochus', title: 'Antiochus IV Epiphanes', years: '175–164 BC', period: 'hellenistic',
    dan: [['Daniel 8:9–14', 8], ['Daniel 11:21–35', 11]],
    mac: [['1 Maccabees 1', 1]],
    lead: 'Antiochus IV took the throne, sold the high priesthood, was humiliated by Rome in Egypt, and then outlawed Judaism.',
    points: [
      ['Taking power', 'Swapped out of Rome as a hostage, Antiochus IV took the throne in 175 BC ahead of the rightful heir. He called himself Theos Epiphanes, “God made manifest”; critics punned it into Epimanes, “the madman” (Daniel 11:21).'],
      ['Buying the high priesthood', 'Jason paid to replace his brother Onias III as high priest and built a Greek gymnasium in Jerusalem; in 172 BC Menelaus outbid him, and Onias III, the “prince of the covenant”, was murdered around 171 BC (Daniel 11:22–23).'],
      ['First invasion of Egypt (170–169 BC)', 'He beat Egypt’s army near Pelusium and captured his nephew Ptolemy VI; the two kings negotiated while each tried to trick the other (Daniel 11:25–27).', ['On the way home he looted the temple: the golden altar, the lampstand and the vessels (1 Maccabees 1:20–24).']],
      ['Rome’s circle in the sand (168 BC)', 'On a second invasion, the Roman envoy Popillius Laenas met him outside Alexandria with the Senate’s order to leave. When Antiochus asked for time, Popillius drew a circle around him and told him to answer before stepping out. Antiochus withdrew.', ['These are the “ships of Kittim” of Daniel 11:30. Rome had just defeated Macedon at Pydna and was free to act.']],
      ['The persecution (167 BC)', 'His troops attacked Jerusalem on a Sabbath and built a fortress, the Akra. A decree banned the Sabbath, circumcision and the Scriptures, and in December 167 BC an altar to Zeus was set up on the temple altar: the “abomination that makes desolate” (Daniel 11:31).', [
        'The Akra stayed in Seleucid hands for 25 years.',
        'Jews who refused to break the law were killed, including the scribe Eleazar and a mother and her seven sons (2 Maccabees 6–7): those who “fall by sword and flame” (Daniel 11:33).',
      ]],
    ] },
  { id: 'maccabees', title: 'The Maccabean revolt', years: '167–142 BC', period: 'hellenistic',
    dan: [['Daniel 8:14', 8], ['Daniel 11:34', 11]],
    mac: [['1 Maccabees 2', 2], ['1 Maccabees 4', 4], ['1 Maccabees 13', 13]],
    lead: 'A priest’s sons led a revolt, rededicated the temple in 164 BC and won Judea’s independence by 142 BC.',
    points: [
      ['The spark', 'In the village of Modein, the priest Mattathias killed a royal officer enforcing a pagan sacrifice and fled to the hills with his five sons. He died in 166 BC.'],
      ['Judas Maccabeus, “the Hammer”', 'His son Judas led a guerrilla army that beat much larger Seleucid forces.', ['Apollonius, and Seron at Beth-horon (166 BC).', 'Gorgias at Emmaus (165 BC).', 'The regent Lysias at Beth-zur (164 BC).']],
      ['The rededication (164 BC)', 'On 25 Kislev 164 BC, three years after the desecration, Judas cleansed and rededicated the temple: the origin of Hanukkah. Antiochus died in Persia that same year after a failed temple robbery.', ['Polybius, 1 Maccabees 6 and 2 Maccabees 9 all record his death. Daniel 8:14’s 2,300 evenings and mornings are often read as this period.']],
      ['The long road to independence', 'Judas died in battle in 160 BC. His brother Jonathan was made high priest in 152 BC, and under Simon, in 142 BC, Judea became independent of the Seleucids.'],
    ] },
  { id: 'hasmoneans', title: 'The Hasmoneans and Rome', years: '142–63 BC', period: 'hellenistic', also: 'rome',
    dan: [['Daniel 2:40', 2], ['Daniel 7:7', 7]],
    mac: [['1 Maccabees 14', 14], ['1 Maccabees 16', 16]],
    lead: 'Simon’s family ruled Judea for about 80 years, until Rome took Jerusalem in 63 BC.',
    points: [
      ['Expansion', 'Simon’s descendants, the Hasmoneans, ruled as high priests and later as kings, conquering Idumea, Samaria and Galilee.'],
      ['Civil war', 'Two brothers, Hyrcanus II and Aristobulus II, fought over the throne, and both appealed to Rome.'],
      ['Pompey (63 BC)', 'Pompey besieged the temple for three months, took it and walked into the Holy of Holies. Judea became a Roman client state; Herod the Great ruled it for Rome from 37 BC, the world of the Gospels.', ['Many Christians read the fourth kingdom of Daniel 2 and 7 as Rome; others read it as Greece.']],
    ] },
];

export const BG_SOURCES = 'Main ancient sources: Herodotus (the Persian Wars), Arrian (Alexander), Polybius and Livy (the Syrian Wars and Rome), 1 and 2 Maccabees and Josephus (Judea).';
