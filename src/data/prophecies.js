// Old Testament prophecies and their New Testament fulfillment in Christ.
export const PROPHECIES = [
  { id: 'p1', cat: 'Lineage', ot: 'Genesis 3:15', otBook: 'genesis', otCh: 3, promise: 'The woman\'s offspring will crush the serpent\'s head.', nt: 'Galatians 4:4', ntBook: 'galatians', ntCh: 4, fulfil: 'God sent His Son, born of a woman.' },
  { id: 'p2', cat: 'Lineage', ot: 'Genesis 12:3', otBook: 'genesis', otCh: 12, promise: 'All nations will be blessed through Abraham.', nt: 'Galatians 3:8, 16', ntBook: 'galatians', ntCh: 3, fulfil: 'The blessing comes through Abraham\'s offspring, Christ.' },
  { id: 'p3', cat: 'Lineage', ot: 'Genesis 49:10', otBook: 'genesis', otCh: 49, promise: 'The scepter will not depart from Judah.', nt: 'Luke 3:33', ntBook: 'luke', ntCh: 3, fulfil: 'Jesus descends from the tribe of Judah.' },
  { id: 'p4', cat: 'Lineage', ot: 'Ruth 4:17', otBook: 'ruth', otCh: 4, promise: 'Ruth and Boaz\'s son Obed becomes the grandfather of David.', nt: 'Matthew 1:5–6', ntBook: 'matthew', ntCh: 1, fulfil: 'Boaz, Ruth, Obed and Jesse appear in Jesus\' genealogy.' },
  { id: 'p5', cat: 'Lineage', ot: '1 Samuel 2:10', otBook: '1samuel', otCh: 2, promise: 'God will exalt the horn of His anointed king.', nt: 'Luke 1:69', ntBook: 'luke', ntCh: 1, fulfil: 'A horn of salvation raised up in the house of David.' },
  { id: 'p6', cat: 'Lineage', ot: '2 Samuel 7:12–13', otBook: '2samuel', otCh: 7, promise: 'A descendant of David will have an everlasting throne.', nt: 'Luke 1:32–33', ntBook: 'luke', ntCh: 1, fulfil: 'Jesus is given the throne of His father David forever.' },
  { id: 'p7', cat: 'Lineage', ot: 'Isaiah 11:1', otBook: 'isaiah', otCh: 11, promise: 'A shoot will come from the stump of Jesse.', nt: 'Romans 15:12', ntBook: 'romans', ntCh: 15, fulfil: 'Paul applies the root of Jesse to Christ.' },
  { id: 'p8', cat: 'Birth', ot: 'Isaiah 7:14', otBook: 'isaiah', otCh: 7, promise: 'A virgin will conceive and bear a son, Immanuel.', nt: 'Matthew 1:22–23', ntBook: 'matthew', ntCh: 1, fulfil: 'Jesus is born of the virgin Mary.' },
  { id: 'p9', cat: 'Birth', ot: 'Micah 5:2', otBook: 'micah', otCh: 5, promise: 'A ruler will come from Bethlehem.', nt: 'Matthew 2:1–6', ntBook: 'matthew', ntCh: 2, fulfil: 'Jesus is born in Bethlehem of Judea.' },
  { id: 'p10', cat: 'Birth', ot: 'Isaiah 9:6–7', otBook: 'isaiah', otCh: 9, promise: 'A child born, called Mighty God, Prince of Peace, on David\'s throne.', nt: 'Luke 2:11', ntBook: 'luke', ntCh: 2, fulfil: 'A Savior, Christ the Lord, is born in the city of David.' },
  { id: 'p11', cat: 'Birth', ot: 'Hosea 11:1', otBook: 'hosea', otCh: 11, promise: 'Out of Egypt I called my son.', nt: 'Matthew 2:15', ntBook: 'matthew', ntCh: 2, fulfil: 'Jesus\' family returns from Egypt.' },
  { id: 'p12', cat: 'Ministry', ot: 'Malachi 3:1', otBook: 'malachi', otCh: 3, promise: 'A messenger will prepare the way before the Lord.', nt: 'Matthew 11:10', ntBook: 'matthew', ntCh: 11, fulfil: 'John the Baptist prepares the way for Jesus.' },
  { id: 'p13', cat: 'Ministry', ot: 'Deuteronomy 18:15', otBook: 'deuteronomy', otCh: 18, promise: 'God will raise up a prophet like Moses.', nt: 'Acts 3:22–23', ntBook: 'acts', ntCh: 3, fulfil: 'Peter identifies Jesus as that prophet.' },
  { id: 'p14', cat: 'Ministry', ot: 'Isaiah 61:1–2', otBook: 'isaiah', otCh: 61, promise: 'The anointed one will bring good news to the poor.', nt: 'Luke 4:18–21', ntBook: 'luke', ntCh: 4, fulfil: 'Jesus reads this in Nazareth: "Today this is fulfilled."' },
  { id: 'p15', cat: 'Ministry', ot: 'Isaiah 9:1–2', otBook: 'isaiah', otCh: 9, promise: 'Galilee of the nations will see a great light.', nt: 'Matthew 4:13–16', ntBook: 'matthew', ntCh: 4, fulfil: 'Jesus begins His ministry in Galilee.' },
  { id: 'p16', cat: 'Ministry', ot: 'Psalm 78:2', otBook: 'psalms', otCh: 78, promise: 'I will open my mouth in parables.', nt: 'Matthew 13:34–35', ntBook: 'matthew', ntCh: 13, fulfil: 'Jesus teaches the crowds in parables.' },
  { id: 'p17', cat: 'Ministry', ot: 'Zechariah 9:9', otBook: 'zechariah', otCh: 9, promise: 'Your king comes humbly, riding on a donkey.', nt: 'Matthew 21:4–5', ntBook: 'matthew', ntCh: 21, fulfil: 'The triumphal entry into Jerusalem.' },
  { id: 'p18', cat: 'Death', ot: 'Psalm 41:9', otBook: 'psalms', otCh: 41, promise: 'A close friend who shared my bread has lifted his heel against me.', nt: 'John 13:18', ntBook: 'john', ntCh: 13, fulfil: 'Judas betrays Jesus.' },
  { id: 'p19', cat: 'Death', ot: 'Zechariah 11:12–13', otBook: 'zechariah', otCh: 11, promise: 'Thirty pieces of silver as his price, thrown to the potter.', nt: 'Matthew 27:3–10', ntBook: 'matthew', ntCh: 27, fulfil: 'Judas\' silver buys the potter\'s field.' },
  { id: 'p20', cat: 'Death', ot: 'Isaiah 53:7', otBook: 'isaiah', otCh: 53, promise: 'Like a lamb led to slaughter, he did not open his mouth.', nt: 'Matthew 27:12–14', ntBook: 'matthew', ntCh: 27, fulfil: 'Jesus stays silent before His accusers.' },
  { id: 'p21', cat: 'Death', ot: 'Isaiah 53:5', otBook: 'isaiah', otCh: 53, promise: 'Pierced for our transgressions; by his wounds we are healed.', nt: '1 Peter 2:24', ntBook: '1peter', ntCh: 2, fulfil: 'Christ bore our sins on the cross.' },
  { id: 'p22', cat: 'Death', ot: 'Psalm 22:16–18', otBook: 'psalms', otCh: 22, promise: 'They pierced my hands and feet; they cast lots for my clothing.', nt: 'John 19:23–24', ntBook: 'john', ntCh: 19, fulfil: 'Soldiers cast lots for Jesus\' garments.' },
  { id: 'p23', cat: 'Death', ot: 'Psalm 22:1', otBook: 'psalms', otCh: 22, promise: '"My God, my God, why have you forsaken me?"', nt: 'Matthew 27:46', ntBook: 'matthew', ntCh: 27, fulfil: 'Jesus cries these words from the cross.' },
  { id: 'p24', cat: 'Death', ot: 'Exodus 12:46', otBook: 'exodus', otCh: 12, promise: 'Not a bone of the Passover lamb shall be broken.', nt: 'John 19:33–36', ntBook: 'john', ntCh: 19, fulfil: 'The soldiers do not break Jesus\' legs.' },
  { id: 'p25', cat: 'Death', ot: 'Zechariah 12:10', otBook: 'zechariah', otCh: 12, promise: 'They will look on me, whom they have pierced.', nt: 'John 19:37', ntBook: 'john', ntCh: 19, fulfil: 'A soldier pierces Jesus\' side.' },
  { id: 'p26', cat: 'Death', ot: 'Isaiah 53:9', otBook: 'isaiah', otCh: 53, promise: 'His grave was with the rich in his death.', nt: 'Matthew 27:57–60', ntBook: 'matthew', ntCh: 27, fulfil: 'Buried in the tomb of rich Joseph of Arimathea.' },
  { id: 'p27', cat: 'Death', ot: 'Numbers 21:8–9', otBook: 'numbers', otCh: 21, promise: 'Whoever looks at the bronze serpent lifted up will live.', nt: 'John 3:14–15', ntBook: 'john', ntCh: 3, fulfil: 'The Son of Man is lifted up so believers have eternal life.' },
  { id: 'p28', cat: 'Resurrection', ot: 'Psalm 16:10', otBook: 'psalms', otCh: 16, promise: 'God will not let His holy one see decay.', nt: 'Acts 2:27–31', ntBook: 'acts', ntCh: 2, fulfil: 'Peter preaches the resurrection of Christ.' },
  { id: 'p29', cat: 'Resurrection', ot: 'Jonah 1:17', otBook: 'jonah', otCh: 1, promise: 'Jonah was three days and three nights in the fish.', nt: 'Matthew 12:40', ntBook: 'matthew', ntCh: 12, fulfil: 'The Son of Man three days in the heart of the earth.' },
  { id: 'p30', cat: 'Resurrection', ot: 'Psalm 118:22', otBook: 'psalms', otCh: 118, promise: 'The stone the builders rejected has become the cornerstone.', nt: 'Acts 4:10–11', ntBook: 'acts', ntCh: 4, fulfil: 'Jesus, rejected and raised, is the cornerstone.' },
  { id: 'p31', cat: 'Reign', ot: 'Psalm 110:1', otBook: 'psalms', otCh: 110, promise: '"Sit at my right hand until I make your enemies your footstool."', nt: 'Acts 2:34–36', ntBook: 'acts', ntCh: 2, fulfil: 'Jesus ascends and is exalted as Lord and Christ.' },
  { id: 'p32', cat: 'Reign', ot: 'Daniel 7:13–14', otBook: 'daniel', otCh: 7, promise: 'One like a son of man receives an everlasting kingdom.', nt: 'Matthew 26:64', ntBook: 'matthew', ntCh: 26, fulfil: 'Jesus says He is the Son of Man coming on the clouds.' },
  { id: 'p33', cat: 'Reign', ot: 'Jeremiah 31:31–34', otBook: 'jeremiah', otCh: 31, promise: 'God will make a new covenant, written on the heart.', nt: 'Luke 22:20', ntBook: 'luke', ntCh: 22, fulfil: '"This cup is the new covenant in my blood."' },
  { id: 'p34', cat: 'Reign', ot: 'Joel 2:28–32', otBook: 'joel', otCh: 2, promise: 'God will pour out His Spirit on all people.', nt: 'Acts 2:16–21', ntBook: 'acts', ntCh: 2, fulfil: 'The Spirit comes at Pentecost.' },
];

// Christ in Scripture › the promise path: the six stages of Jesus' life, in order.
export const PROPHECY_STAGES = [
  { id: 'Lineage', n: 1, sub: 'The promised family', c: 'lineage' },
  { id: 'Birth', n: 2, sub: 'Where and how he would be born', c: 'birth' },
  { id: 'Ministry', n: 3, sub: 'His work and teaching', c: 'ministry' },
  { id: 'Death', n: 4, sub: 'The cross', c: 'death' },
  { id: 'Resurrection', n: 5, sub: 'The empty tomb', c: 'resurrection' },
  { id: 'Reign', n: 6, sub: 'Exalted as King', c: 'reign' },
];

// Roughly when each promise was written (traditional dates, years BC), by Old Testament book.
// A prophecy can override with its own value; null means the date is debated or unknown.
const WRITTEN_BY_BOOK = { genesis: 1400, exodus: 1400, numbers: 1400, deuteronomy: 1400, ruth: 1000, '1samuel': 1000, '2samuel': 970, psalms: 1000, isaiah: 700, micah: 700, hosea: 750, jonah: 760, zechariah: 520, malachi: 430, jeremiah: 600, daniel: 550 };
const WRITTEN_BY_ID = { p1: 'first', p30: null, p34: null };
export function writtenLabel(p) {
  const w = p.id in WRITTEN_BY_ID ? WRITTEN_BY_ID[p.id] : WRITTEN_BY_BOOK[p.otBook];
  if (w === 'first') return 'The first promise';
  if (!w) return 'Date debated';
  const before = Math.round(w / 10) * 10;
  return `c. ${w} BC · about ${before.toLocaleString('en-US')} years before`;
}
