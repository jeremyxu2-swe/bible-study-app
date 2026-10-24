// Character reading levels, batch 1: Jesus, Abraham, Moses, David, Paul.
// Key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
// Languages: what the text and scholarship support; "likely" marks informed inference.
import { d } from './_h.js';

export default {
  jesus: {
    facts: {
      occupation: 'Craftsman (Greek tektōn: carpenter or builder), then traveling teacher',
      people: 'Jewish, of the tribe of Judah and the line of David',
      languages: 'Aramaic (everyday speech); Hebrew (Scripture and synagogue); likely some Greek',
      era: 'c. 6/4 BC – AD 30/33',
      hometown: 'Born in Bethlehem; raised in Nazareth, Galilee',
    },
    simple: 'Jesus of Nazareth is the center of the whole Bible: the promised Messiah, God the Son who became a man. He taught, healed, died on a cross for sin and rose again on the third day.',
    moderate: 'Jesus was born in Bethlehem to Mary, a virgin engaged to Joseph, a descendant of King David, during the reign of Herod the Great. He grew up in the small Galilean village of Nazareth, working with Joseph as a tektōn, a craftsman in wood and stone. Around the age of thirty He was baptized by John the Baptist, and for about three years He traveled through Galilee and Judea, calling twelve disciples, teaching about the kingdom of God in parables and sermons, healing the sick, casting out demons and forgiving sins.\n\nHis claims and His authority over the Sabbath and the temple brought Him into conflict with the religious leaders. At Passover in Jerusalem He was betrayed by Judas, condemned by the high priest\'s council and crucified under the Roman governor Pontius Pilate. On the third day His tomb was found empty, and over forty days He appeared to His disciples, then ascended to heaven, promising to send the Holy Spirit and to return.',
    detailed: {
      background: 'The Gospels present Jesus as the long-promised descendant of Abraham and David. Matthew traces His legal line through Joseph back to Abraham; Luke traces it to Adam. His mother Mary conceived Him by the Holy Spirit while still a virgin, and an angel told Joseph to name Him Jesus (Hebrew Yeshua, "the LORD saves"), "for he will save his people from their sins." Born in Bethlehem, David\'s town, He was visited by shepherds and later by Magi from the east, and His family fled to Egypt to escape Herod before settling in Nazareth.\n\nNazareth was a small, unremarkable village of perhaps a few hundred people. Jesus grew up in a devout Jewish home: the family traveled to Jerusalem every year for Passover, and at twelve He amazed the teachers in the temple. The Gospels name four brothers, James, Joseph (Joses), Simon and Judas, and mention sisters. Joseph seems to have died before Jesus\' ministry began, since only Mary appears later.',
      world: 'Jesus lived in Roman-ruled Palestine. Herod the Great\'s sons governed parts of it after his death in 4 BC: Herod Antipas ruled Galilee, where most of Jesus\' ministry took place, while Judea was governed directly by Roman prefects such as Pontius Pilate (AD 26–36). The Jewish people were divided into groups: Pharisees, who taught careful obedience to the Law and its traditions; Sadducees, the priestly aristocracy who ran the temple; Essenes, who withdrew into separate communities; and Zealots, who wanted to overthrow Rome. Many hoped for a Messiah who would free them.\n\nEveryday speech in Galilee was Aramaic, and the Gospels preserve some of Jesus\' Aramaic words: "Talitha cumi," "Ephphatha," "Abba," and His cry from the cross. Scripture was read in Hebrew in the synagogue, and Greek was the common language of trade across the eastern empire, so Jesus likely knew at least some Greek. As a tektōn He would have worked with wood and stone, perhaps on building projects in nearby Sepphoris, which Antipas was rebuilding during Jesus\' youth.',
      significance: 'Christians believe Jesus is the eternal Son of God who took on human nature, fully God and fully man, and that the whole Old Testament points to Him: He is the seed of the woman, the son of Abraham, the prophet like Moses, the son of David, the suffering Servant of Isaiah and the Son of Man of Daniel. His death is understood as the sacrifice for sin, His resurrection as God\'s vindication and the beginning of new creation, and His return as the hope of the world.\n\nHis life is also the best-attested of any figure in the ancient world outside the New Testament: the Roman historians Tacitus and Suetonius and the Jewish historian Josephus mention Him and His execution under Pilate. Within a few decades of His death, His followers were worshiping Him as Lord across the Roman Empire.',
      moments: [
        d('c. 6–4 BC', 'Born in Bethlehem', 'Caesar Augustus orders a census, and Joseph takes Mary to Bethlehem, where Jesus is born and laid in a manger. Angels announce His birth to shepherds: "Unto you is born this day in the city of David a Savior, who is Christ the Lord."', 'Luke 2', 'luke', 2),
        d('c. AD 8', 'In His Father\'s house', 'At twelve, Jesus stays behind in the temple after Passover, listening to the teachers and asking questions. When His parents find Him He says, "Did you not know that I must be in my Father\'s house?"', 'Luke 2', 'luke', 2),
        d('c. AD 27–29', 'Baptism and temptation', 'John baptizes Jesus in the Jordan; the Spirit descends like a dove and a voice from heaven says, "You are my beloved Son; with you I am well pleased." He then fasts forty days in the wilderness and resists Satan\'s temptations by quoting Deuteronomy.', 'Mark 1', 'mark', 1),
        d('Early ministry', 'The Sermon on the Mount', 'On a hillside in Galilee, Jesus teaches the Beatitudes, the Lord\'s Prayer and the golden rule, saying He came not to abolish the Law and the Prophets but to fulfill them. The crowds are astonished because He teaches "as one who had authority."', 'Matthew 5', 'matthew', 5),
        d('Galilean ministry', 'Signs and wonders', 'Jesus turns water into wine, heals lepers and the paralyzed, calms a storm, feeds five thousand with five loaves and two fish, walks on water and raises Jairus\'s daughter. John calls these "signs" that reveal His glory.', 'John 6', 'john', 6),
        d('Near Caesarea Philippi', 'Peter\'s confession', 'Jesus asks, "Who do you say that I am?" and Peter answers, "You are the Christ, the Son of the living God." From then on Jesus begins to teach that He must suffer, be killed and rise on the third day. A week later He is transfigured on a mountain before Peter, James and John.', 'Matthew 16', 'matthew', 16),
        d('Bethany', 'Lazarus raised', 'Jesus arrives four days after His friend Lazarus has died, weeps with his sisters and calls Lazarus out of the tomb, saying, "I am the resurrection and the life." The miracle leads the council to plot His death.', 'John 11', 'john', 11),
        d('Passover week', 'The last week', 'Jesus enters Jerusalem on a donkey as crowds shout "Hosanna," drives the money changers from the temple, and shares a final Passover meal with His disciples, giving them bread and wine as His body and blood. In Gethsemane He prays, "Not my will, but yours, be done," and is arrested.', 'Luke 22', 'luke', 22),
        d('AD 30 or 33', 'Crucified', 'Tried overnight before the high priest Caiaphas and the council, then before Pilate and Herod Antipas, Jesus is condemned and crucified between two criminals. Darkness covers the land, He cries "It is finished," and dies; He is buried in Joseph of Arimathea\'s new tomb.', 'John 19', 'john', 19),
        d('The third day', 'Risen', 'Women come to the tomb at dawn and find it empty; an angel says, "He is not here, for he has risen." Jesus appears to Mary Magdalene, to the disciples, to Thomas and to more than five hundred at once, and after forty days ascends to heaven from the Mount of Olives.', 'Luke 24', 'luke', 24),
      ],
      questions: [
        { q: 'Why is His birth dated "BC"?', a: 'The calendar was worked out in the 500s by a monk, Dionysius Exiguus, who miscalculated slightly. Herod the Great died in 4 BC, and Jesus was born before that, so His birth is usually placed around 6–4 BC.' },
        { q: 'Did Jesus claim to be God?', a: 'He forgave sins, which His hearers said only God can do (Mark 2:7); accepted worship; said "Before Abraham was, I am" (John 8:58), echoing God\'s name in Exodus 3; and said "I and the Father are one" (John 10:30). His opponents understood these as claims to deity, which is why they accused Him of blasphemy.' },
        { q: 'What did "Christ" mean?', a: 'It is not a surname but a title: the Greek Christos translates the Hebrew Mashiach, "Messiah" or "anointed one." Kings and priests were anointed with oil; the Messiah was the promised anointed King from David\'s line.' },
      ],
      keyVerses: [
        { ref: 'John 3:16', text: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.' },
        { ref: 'Mark 10:45', text: 'For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.' },
      ],
      reading: [
        { label: 'Mark 1–16', book: 'mark', ch: 1, note: 'The shortest Gospel, fast-paced' },
        { label: 'Luke 1–2', book: 'luke', ch: 1, note: 'His birth' },
        { label: 'Matthew 5–7', book: 'matthew', ch: 5, note: 'The Sermon on the Mount' },
        { label: 'John 13–17', book: 'john', ch: 13, note: 'The last evening with His disciples' },
        { label: 'John 18–21', book: 'john', ch: 18, note: 'Death and resurrection' },
      ],
    },
  },

  abraham: {
    facts: {
      occupation: 'Semi-nomadic herdsman with large flocks and many servants',
      people: 'Mesopotamian, of the line of Shem; ancestor of the Hebrews (called "Abram the Hebrew")',
      languages: 'Likely an early West Semitic (Amorite/Aramaean) dialect; possibly Akkadian from Ur',
      era: 'c. 2000–1800 BC (traditional dating)',
      hometown: 'Ur of the Chaldeans, then Haran; lived in Canaan (Hebron, Beersheba)',
    },
    simple: 'Abraham is the father of the Jewish people and a model of faith. God called him to leave his homeland and promised that through his family all nations would be blessed.',
    moderate: 'Abram, later renamed Abraham ("father of a multitude"), grew up in Ur in southern Mesopotamia, a family that worshiped other gods (Joshua 24:2). His father Terah moved the family to Haran, and there God called Abram to go to a land He would show him, promising to make him a great nation, give his descendants the land of Canaan, and bless all the families of the earth through him.\n\nAbraham lived as a wealthy herdsman, moving his tents between Shechem, Bethel, Hebron and Beersheba. He and Sarah waited twenty-five years for the promised son, Isaac, after an attempt to fulfill the promise through Sarah\'s servant Hagar produced Ishmael. God made a covenant with him and gave circumcision as its sign, and Abraham\'s faith was tested most when God asked him to offer Isaac. He died at 175 and was buried with Sarah in the cave of Machpelah at Hebron.',
    detailed: {
      background: 'Abram was a descendant of Shem through Eber (the probable source of the word "Hebrew"). His father Terah had three sons, Abram, Nahor and Haran; Haran died young, leaving a son, Lot, whom Abram took with him. Abram married his half-sister Sarai, who was unable to have children. Ur was a great Sumerian city with a temple tower to the moon god, and Haran, where the family settled, was also a center of moon worship.\n\nAt 75 Abram left Haran with Sarai, Lot, their servants and possessions. His household was large: he could muster 318 trained men to rescue Lot from raiding kings. He dealt with Canaanite and Egyptian rulers as an equal, bought land from the Hittites at Hebron, and was respected as "a prince of God" among them.',
      world: 'Abraham\'s world was that of the Middle Bronze Age, when Amorite peoples moved across the Fertile Crescent and city-states in Canaan were ruled by local kings. Semi-nomadic herdsmen lived alongside these cities, moving their flocks between pastures and wells and making treaties with local rulers, just as Abraham does with Abimelech of Gerar over the wells of Beersheba.\n\nCustoms in Genesis match what is known from ancient Near Eastern documents: a childless wife giving her servant to her husband to bear an heir, inheritance by an adopted household servant (Eliezer), and covenants sealed by cutting animals in two and passing between the pieces. Abraham\'s language was likely an early West Semitic dialect related to later Aramaic and Hebrew; as a man from Ur he may also have known Akkadian, the international language of Mesopotamia.',
      significance: 'Abraham is the founding father of Israel and a spiritual father to Jews, Christians and Muslims alike. The promises God made to him, land, descendants and blessing to the nations, drive the rest of the Old Testament, and the New Testament sees them fulfilled in Christ, Abraham\'s greatest descendant.\n\nPaul and James both point to Abraham as the model of faith: he "believed the LORD, and he counted it to him as righteousness" (Genesis 15:6), before he was circumcised and before the Law was given, so he is the father of all who believe. Hebrews 11 praises him for leaving home "not knowing where he was going" and for believing God could raise Isaac from the dead.',
      moments: [
        d('Haran', 'The call', 'God says, "Go from your country and your kindred and your father\'s house to the land that I will show you," promising to make Abram a great nation and to bless all the families of the earth through him. At 75 he obeys and travels to Canaan, building altars at Shechem and Bethel.', 'Genesis 12', 'genesis', 12),
        d('Egypt', 'A lie in Egypt', 'During a famine Abram goes to Egypt and, fearing for his life, says Sarai is his sister. Pharaoh takes her into his palace until God strikes his household with plagues. It is the first sign that the man of faith is still fallible.', 'Genesis 12', 'genesis', 12),
        d('Bethel and Hebron', 'Lot chooses the plain', 'When their herds grow too large, Abram generously lets Lot choose first; Lot takes the well-watered Jordan valley near Sodom. God tells Abram to look in every direction: all the land he sees will belong to his offspring.', 'Genesis 13', 'genesis', 13),
        d('Hebron', 'Rescue and Melchizedek', 'Four kings raid Sodom and carry off Lot. Abram pursues them with 318 men, rescues Lot, and is blessed by Melchizedek, king of Salem and priest of God Most High, to whom he gives a tenth of everything.', 'Genesis 14', 'genesis', 14),
        d('Hebron', 'The covenant of the pieces', 'God promises Abram descendants as countless as the stars, and "he believed the LORD." In a night vision God passes alone between the cut animals as a smoking pot and flaming torch, binding Himself to the promise of the land.', 'Genesis 15', 'genesis', 15),
        d('Hebron', 'Hagar and Ishmael', 'After ten years in Canaan without a child, Sarai gives her Egyptian servant Hagar to Abram, and Ishmael is born. The arrangement brings bitterness, and God later tells Abraham the promise will come through Sarah, not Hagar.', 'Genesis 16', 'genesis', 16),
        d('Age 99', 'New names', 'God renames Abram "Abraham" and Sarai "Sarah," gives circumcision as the covenant sign, and promises a son within a year. Abraham falls on his face and laughs; later three visitors repeat the promise, and Abraham pleads with God for Sodom.', 'Genesis 17', 'genesis', 17),
        d('Age 100', 'Isaac born', 'Sarah gives birth to Isaac ("he laughs"), saying, "God has made laughter for me." Hagar and Ishmael are sent away, but God promises to make Ishmael a great nation too.', 'Genesis 21', 'genesis', 21),
        d('Mount Moriah', 'The test', 'God tells Abraham to offer Isaac as a burnt offering. Abraham obeys, telling Isaac, "God will provide for himself the lamb," and at the last moment an angel stops him and a ram caught in a thicket is offered instead. God renews His promise with an oath.', 'Genesis 22', 'genesis', 22),
        d('Hebron', 'A burial place', 'When Sarah dies at 127, Abraham buys the cave of Machpelah from Ephron the Hittite for 400 shekels of silver, the first piece of the promised land his family owns. He later sends his servant to find Rebekah as Isaac\'s wife, and dies at 175.', 'Genesis 23', 'genesis', 23),
      ],
      questions: [
        { q: 'When did Abraham live?', a: 'Adding up the Bible\'s figures places him around 2100–1900 BC; many scholars prefer a broader "Middle Bronze Age" (c. 2000–1700 BC). Exact dates are uncertain.' },
        { q: 'Why is Abraham important to three religions?', a: 'Jews trace their descent from him through Isaac and Jacob; Christians see him as the father of all who believe (Romans 4); Muslims honor him (Ibrahim) as a prophet and trace Arab descent through Ishmael.' },
        { q: 'Why would God ask Abraham to sacrifice Isaac?', a: 'Genesis says it was a test, and God never intended Isaac to die. It showed Abraham\'s trust that God would keep His promise, even, as Hebrews says, by raising Isaac from the dead, and it foreshadowed God providing His own Son as the sacrifice on that same region of Moriah, where the temple was later built.' },
      ],
      keyVerses: [
        { ref: 'Genesis 12:2–3', text: 'And I will make of you a great nation, and I will bless you and make your name great, so that you will be a blessing. I will bless those who bless you, and him who dishonors you I will curse, and in you all the families of the earth shall be blessed.' },
        { ref: 'Genesis 15:6', text: 'And he believed the LORD, and he counted it to him as righteousness.' },
      ],
      reading: [
        { label: 'Genesis 12–15', book: 'genesis', ch: 12, note: 'The call and the covenant' },
        { label: 'Genesis 16–18', book: 'genesis', ch: 16, note: 'Hagar, new names, three visitors' },
        { label: 'Genesis 21–22', book: 'genesis', ch: 21, note: 'Isaac born and offered' },
        { label: 'Romans 4', book: 'romans', ch: 4, note: 'Paul on Abraham\'s faith' },
        { label: 'Hebrews 11', book: 'hebrews', ch: 11, note: 'The faith of the patriarchs' },
      ],
    },
  },

  moses: {
    facts: {
      occupation: 'Raised as an Egyptian prince; shepherd in Midian; prophet, lawgiver and leader of Israel',
      people: 'Hebrew, of the tribe of Levi',
      languages: 'Egyptian (raised at the royal court); Hebrew (or its ancestor); likely Midianite/Arabian dialect',
      era: 'c. 1520–1400 BC (or 13th century BC, by the later dating)',
      hometown: 'Born in Egypt (the land of Goshen); 40 years in Midian; died on Mount Nebo in Moab',
    },
    simple: 'Moses led Israel out of slavery in Egypt, received God\'s Law at Mount Sinai and guided the people through forty years in the wilderness to the edge of the promised land.',
    moderate: 'Moses was born to Hebrew slaves, Amram and Jochebed, of the tribe of Levi, when Pharaoh had ordered every Hebrew baby boy drowned. His mother hid him in a basket in the Nile, where Pharaoh\'s daughter found him and raised him as her own, "instructed in all the wisdom of the Egyptians." At forty he killed an Egyptian who was beating a Hebrew and fled to Midian, where he married Zipporah and kept sheep for forty years.\n\nAt the burning bush God revealed His name, "I AM WHO I AM," and sent Moses back to Pharaoh. After ten plagues Israel left Egypt, crossed the Red Sea and came to Mount Sinai, where God gave the Ten Commandments and the covenant law, and the tabernacle was built. Because the people refused to enter Canaan, they wandered forty years; Moses himself was barred from entering for striking the rock in anger. He saw the land from Mount Nebo and died at 120.',
    detailed: {
      background: 'Moses\' older siblings were Miriam, who watched over his basket, and Aaron, who became Israel\'s first high priest. His name sounds like the Egyptian word for "son" (as in Thutmose, Ramesses) and like the Hebrew mashah, "to draw out," as Pharaoh\'s daughter explained: "Because I drew him out of the water." Raised in the palace, he would have received an elite Egyptian education in writing and administration.\n\nIn Midian he married Zipporah, daughter of the priest Jethro (also called Reuel), and had two sons, Gershom and Eliezer. Jethro later visited Israel in the wilderness and advised Moses to appoint judges to share the burden of leadership.',
      world: 'Egypt in Moses\' day was the greatest power in the world, with huge building projects worked by forced labor. The Hebrews in Goshen, in the eastern Nile Delta, made bricks for Pharaoh\'s store cities, Pithom and Raamses. Scholars debate which Pharaoh is meant: an earlier date (c. 1446 BC, from 1 Kings 6:1) points to the 18th dynasty, while a later date points to Ramesses II in the 1200s BC.\n\nMidian lay east of the Gulf of Aqaba, a land of herdsmen and traders. The wilderness of Sinai, where Israel camped for a year and wandered for forty, is a harsh landscape of mountains, wadis and oases. The covenant at Sinai follows the shape of ancient treaties between a great king and his people: a history of what the king has done, then his laws, blessings and curses.',
      significance: 'Moses is the central human figure of the Old Testament: the deliverer through whom God rescued Israel, the mediator of the covenant, and the author (by tradition) of the first five books, the Torah. Deuteronomy says no prophet arose in Israel like Moses, "whom the LORD knew face to face."\n\nThe New Testament presents Jesus as the prophet like Moses whom Moses himself foretold (Deuteronomy 18:15; Acts 3:22), and as greater than Moses: "the law was given through Moses; grace and truth came through Jesus Christ" (John 1:17). The exodus became the pattern for salvation, and the Passover lamb pointed to Christ, "our Passover lamb" (1 Corinthians 5:7).',
      moments: [
        d('Egypt', 'Saved from the Nile', 'Pharaoh orders all Hebrew baby boys thrown into the Nile. Jochebed hides Moses for three months, then places him in a basket among the reeds; Pharaoh\'s daughter finds him, and Miriam arranges for his own mother to nurse him.', 'Exodus 2', 'exodus', 2),
        d('Age 40', 'Flight to Midian', 'Seeing an Egyptian beat a Hebrew, Moses kills him and hides the body. When it becomes known, he flees to Midian, defends Jethro\'s daughters at a well, and settles there as a shepherd.', 'Exodus 2', 'exodus', 2),
        d('Mount Horeb', 'The burning bush', 'A bush burns but is not consumed, and God calls, "Moses, Moses!" He reveals His name, "I AM WHO I AM," and sends Moses to bring His people out of Egypt. Moses protests that he is slow of speech, and God appoints Aaron to speak with him.', 'Exodus 3', 'exodus', 3),
        d('Egypt', 'Ten plagues', 'Pharaoh refuses to let the people go, and God sends plagues on the Nile, the land, the livestock and the sky, each one striking at Egypt\'s gods. In the tenth, the firstborn of Egypt die, while the Israelites are spared by the blood of the Passover lamb on their doorposts.', 'Exodus 12', 'exodus', 12),
        d('The sea', 'Crossing the sea', 'Pharaoh\'s chariots pursue Israel to the sea. Moses stretches out his hand, the waters part, and the people cross on dry ground; the waters return over the Egyptian army. Moses and Miriam lead a song of victory.', 'Exodus 14', 'exodus', 14),
        d('Mount Sinai', 'The Law given', 'God descends on the mountain in fire and thunder and speaks the Ten Commandments. Moses spends forty days on the mountain receiving the covenant laws and the plans for the tabernacle.', 'Exodus 20', 'exodus', 20),
        d('Mount Sinai', 'The golden calf', 'While Moses is on the mountain, the people make a golden calf and worship it. Moses breaks the stone tablets, pleads with God not to destroy them, and asks to see His glory; God passes by, proclaiming Himself "merciful and gracious, slow to anger."', 'Exodus 32', 'exodus', 32),
        d('Kadesh', 'Forty years of wandering', 'Ten of the twelve spies say Canaan cannot be taken, and the people want to go back to Egypt. God decrees that this generation will die in the wilderness, all except Joshua and Caleb.', 'Numbers 14', 'numbers', 14),
        d('Meribah', 'Striking the rock', 'When the people complain for water, God tells Moses to speak to the rock, but Moses strikes it twice in anger, saying, "Shall we bring water for you out of this rock?" Water flows, but God says Moses will not lead the people into the land.', 'Numbers 20', 'numbers', 20),
        d('Mount Nebo', 'Farewell and death', 'On the plains of Moab Moses gives his final sermons (Deuteronomy), commissions Joshua, and climbs Mount Nebo, where God shows him the whole land. He dies at 120, "his eye undimmed," and God buries him in an unknown grave.', 'Deuteronomy 34', 'deuteronomy', 34),
      ],
      questions: [
        { q: 'Did Moses write the first five books?', a: 'Jewish and Christian tradition, and Jesus Himself, speak of the Torah as "the Law of Moses," and the text says Moses wrote down laws and events (Exodus 24:4; Deuteronomy 31:9). The account of his death (Deuteronomy 34) was added by someone else, and many scholars think the books were edited and compiled later.' },
        { q: 'Why couldn\'t Moses enter the promised land?', a: 'At Meribah he struck the rock instead of speaking to it and took credit with Aaron ("shall we bring water"), failing to treat God as holy before the people (Numbers 20:12). Yet he later appears in the promised land with Elijah at Jesus\' transfiguration.' },
      ],
      keyVerses: [
        { ref: 'Exodus 3:14', text: 'God said to Moses, "I AM WHO I AM." And he said, "Say this to the people of Israel: I AM has sent me to you."' },
        { ref: 'Deuteronomy 34:10', text: 'And there has not arisen a prophet since in Israel like Moses, whom the LORD knew face to face.' },
      ],
      reading: [
        { label: 'Exodus 1–4', book: 'exodus', ch: 1, note: 'Birth and call' },
        { label: 'Exodus 7–15', book: 'exodus', ch: 7, note: 'Plagues, Passover and the sea' },
        { label: 'Exodus 19–20, 32–34', book: 'exodus', ch: 19, note: 'Sinai and the golden calf' },
        { label: 'Numbers 13–14, 20', book: 'numbers', ch: 13, note: 'The spies and the rock' },
        { label: 'Deuteronomy 31–34', book: 'deuteronomy', ch: 31, note: 'Farewell and death' },
      ],
    },
  },

  david: {
    facts: {
      occupation: 'Shepherd, musician, warrior, then king of Israel (c. 40 years)',
      people: 'Israelite, of the tribe of Judah (with a Moabite great-grandmother, Ruth)',
      languages: 'Hebrew; likely some Philistine contact language from his time at Gath',
      era: 'c. 1040–970 BC',
      hometown: 'Bethlehem in Judah; reigned from Hebron, then Jerusalem',
    },
    simple: 'David was the shepherd boy who killed Goliath and became Israel\'s greatest king. He wrote many of the Psalms, and God promised that his royal line would last forever.',
    moderate: 'David was the youngest of Jesse\'s eight sons in Bethlehem, a shepherd and a skilled harpist. The prophet Samuel anointed him as the next king while Saul still reigned, and David entered Saul\'s service as a musician and armor-bearer. His victory over the Philistine giant Goliath made him a national hero, but Saul\'s jealousy forced him to flee, and for years he lived as an outlaw with a band of loyal men, twice sparing Saul\'s life.\n\nAfter Saul\'s death David was crowned king of Judah at Hebron and, seven years later, of all Israel. He captured Jerusalem, made it his capital, brought the ark of the covenant there, and God promised him a dynasty that would last forever. His adultery with Bathsheba and the murder of her husband Uriah brought heartbreak to his family, including the rebellion of his son Absalom. He reigned forty years and named Solomon as his successor.',
    detailed: {
      background: 'David\'s family belonged to the tribe of Judah; his great-grandparents were Boaz and Ruth the Moabite. As the youngest son he was given the humble job of keeping the sheep, where, he later told Saul, he fought off lions and bears. When Samuel came to anoint a king among Jesse\'s sons, David was not even invited until God rejected all his older brothers: "The LORD looks on the heart."\n\nDavid had many wives, including Michal (Saul\'s daughter), Abigail, Ahinoam, Maacah and Bathsheba, and many children, among them Amnon, Absalom, Adonijah, Tamar and Solomon. His nephews Joab, Abishai and Asahel were his chief warriors, and his close friendship with Saul\'s son Jonathan is one of the Bible\'s great friendships.',
      world: 'David lived at the beginning of the Iron Age, when the Philistines, with their iron weapons and five strong cities on the coast, were Israel\'s main enemy. Israel had only just become a kingdom under Saul. David\'s conquests turned it into the leading power between Egypt and Mesopotamia, at a time when both great empires were weak.\n\nJerusalem, which he captured from the Jebusites, was a small hilltop fortress between the tribes of Judah and Benjamin, a neutral capital for a united kingdom. An inscription found at Tel Dan (9th century BC) mentions the "House of David," the earliest reference to David outside the Bible. Hebrew was his language; living among the Philistines at Gath, he likely picked up some of their speech.',
      significance: 'David is remembered as Israel\'s ideal king, "a man after God\'s own heart" (1 Samuel 13:14; Acts 13:22), not because he was sinless but because he repented and trusted God. God\'s covenant with him (2 Samuel 7), promising a son whose throne would last forever, became the foundation of Israel\'s hope for a Messiah, the "Son of David."\n\nAbout half of the Psalms are linked with David, giving words to praise, lament, confession (Psalm 51) and trust (Psalm 23). The New Testament opens by calling Jesus "the son of David," born in David\'s town, and Revelation calls Him "the Root and the Descendant of David."',
      moments: [
        d('Bethlehem', 'Anointed', 'Samuel looks over Jesse\'s sons; God tells him, "Man looks on the outward appearance, but the LORD looks on the heart." The youngest, David, is brought in from the sheep and anointed, and the Spirit of the LORD rushes upon him.', '1 Samuel 16', '1samuel', 16),
        d('Valley of Elah', 'David and Goliath', 'For forty days the Philistine champion Goliath defies Israel. David, bringing food to his brothers, volunteers, refuses Saul\'s armor, and kills Goliath with a single stone from his sling, saying "the battle is the LORD\'s."', '1 Samuel 17', '1samuel', 17),
        d('Gibeah', 'Saul\'s jealousy', 'As women sing "Saul has struck down his thousands, and David his ten thousands," Saul becomes jealous and twice hurls a spear at David. Jonathan makes a covenant of friendship with David and warns him to flee.', '1 Samuel 18–20', '1samuel', 18),
        d('Adullam and En-gedi', 'The outlaw years', 'David gathers about 400 men in the cave of Adullam. Twice Saul is at his mercy, in a cave at En-gedi and in his camp at night, but David refuses to harm "the LORD\'s anointed."', '1 Samuel 24', '1samuel', 24),
        d('Hebron, Jerusalem', 'King of all Israel', 'After Saul and Jonathan die at Mount Gilboa, David laments, "How the mighty have fallen!" He is made king of Judah at Hebron and, seven years later, of all Israel. He captures Jerusalem from the Jebusites and makes it the City of David.', '2 Samuel 5', '2samuel', 5),
        d('Jerusalem', 'The ark and the covenant', 'David brings the ark to Jerusalem, dancing before it with all his might. When he wants to build a temple, God instead promises to build David a "house," a dynasty: "Your throne shall be established forever."', '2 Samuel 6–7', '2samuel', 6),
        d('Jerusalem', 'Bathsheba and Uriah', 'David commits adultery with Bathsheba and arranges the death of her husband Uriah in battle. The prophet Nathan confronts him with a parable: "You are the man!" David confesses, and Psalm 51 is linked to his repentance.', '2 Samuel 11–12', '2samuel', 11),
        d('Jerusalem', 'Absalom\'s rebellion', 'David\'s son Absalom wins the people\'s hearts and seizes Jerusalem; David flees barefoot over the Mount of Olives. When Absalom is killed in battle, David weeps, "O my son Absalom... would I had died instead of you."', '2 Samuel 15–18', '2samuel', 15),
        d('c. 970 BC', 'Solomon made king', 'As David lies dying, his son Adonijah tries to seize the throne. Bathsheba and Nathan remind David of his promise, and Solomon is anointed king. David charges him to walk in God\'s ways, and dies after reigning forty years.', '1 Kings 1–2', '1kings', 1),
      ],
      questions: [
        { q: 'Was Goliath really over nine feet tall?', a: 'The standard Hebrew text gives "six cubits and a span" (about 9 ft 9 in), while the Dead Sea Scrolls and the Greek Septuagint read "four cubits and a span" (about 6 ft 9 in). Either way he was a giant among men of the time.' },
        { q: 'How could David be "a man after God\'s heart" after his sins?', a: 'The phrase describes his basic devotion to God, not perfection. Unlike Saul, when confronted with sin David confessed it honestly and accepted God\'s judgment, and he never turned to idols.' },
      ],
      keyVerses: [
        { ref: '1 Samuel 16:7', text: 'For the LORD sees not as man sees: man looks on the outward appearance, but the LORD looks on the heart.' },
        { ref: 'Psalm 23:1', text: 'The LORD is my shepherd; I shall not want.' },
        { ref: '2 Samuel 7:16', text: 'And your house and your kingdom shall be made sure forever before me. Your throne shall be established forever.' },
      ],
      reading: [
        { label: '1 Samuel 16–20', book: '1samuel', ch: 16, note: 'Anointing, Goliath, Jonathan' },
        { label: '1 Samuel 24–26', book: '1samuel', ch: 24, note: 'Sparing Saul; Abigail' },
        { label: '2 Samuel 5–7', book: '2samuel', ch: 5, note: 'King, Jerusalem and the covenant' },
        { label: '2 Samuel 11–12', book: '2samuel', ch: 11, note: 'Bathsheba and Nathan' },
        { label: 'Psalms 23, 51', book: 'psalms', ch: 51, note: 'Trust and repentance' },
      ],
    },
  },

  paul: {
    facts: {
      occupation: 'Pharisee and rabbinic student; tentmaker (leatherworker); apostle and missionary',
      people: 'Jewish, of the tribe of Benjamin; Roman citizen by birth',
      languages: 'Koine Greek (his letters); Aramaic and Hebrew; possibly some Latin',
      era: 'c. AD 5 – c. 64/67',
      hometown: 'Tarsus in Cilicia; educated in Jerusalem',
    },
    simple: 'Paul, first called Saul, persecuted Christians until the risen Jesus met him on the road to Damascus. He became the great missionary to the non-Jewish world and wrote thirteen letters of the New Testament.',
    moderate: 'Saul was born in Tarsus, a Greek-speaking university city in what is now southern Turkey, to a Jewish family of the tribe of Benjamin that held Roman citizenship. He trained in Jerusalem under the famous rabbi Gamaliel and became a zealous Pharisee. He approved of Stephen\'s stoning and led a violent campaign against the followers of Jesus, until, on his way to arrest believers in Damascus, the risen Jesus appeared to him in a blinding light.\n\nConverted and baptized, Paul (his Roman name) spent the next thirty years carrying the gospel across the Roman world on three long missionary journeys, planting churches in Asia Minor, Macedonia and Greece and supporting himself as a tentmaker. He insisted that Gentiles are saved by faith in Christ without becoming Jews. Arrested in Jerusalem, he appealed to Caesar, was taken to Rome, and by early tradition was beheaded there under Nero.',
    detailed: {
      background: 'Paul describes himself as "circumcised on the eighth day, of the people of Israel, of the tribe of Benjamin, a Hebrew of Hebrews; as to the law, a Pharisee" (Philippians 3:5). His Hebrew name, Saul, recalls Benjamin\'s most famous son, King Saul; Paulus was his Roman name. He had a sister, whose son warned him of a plot in Jerusalem (Acts 23:16).\n\nLike many rabbis, he learned a trade: he made tents, probably from leather or woven goat\'s hair, and worked with Priscilla and Aquila in Corinth. He seems never to have married, and he describes a painful "thorn in the flesh" that God did not remove.',
      world: 'Paul moved easily between three worlds: Jewish, Greek and Roman. Tarsus was a center of Greek learning, and Paul quotes Greek poets in Athens; he wrote his letters in fluent Koine Greek, the common language of the eastern empire. He spoke Aramaic to the crowd in Jerusalem (Acts 21:40) and read the Hebrew Scriptures; as a Roman citizen traveling to Rome and planning to go to Spain, he may have known some Latin.\n\nRoman roads and peace made travel possible, and Paul\'s strategy was to plant churches in major cities, Antioch, Ephesus, Corinth, Thessalonica, from which the message could spread. His Roman citizenship protected him: it entitled him to a trial and saved him from flogging, and it gave him the right to appeal to the emperor.',
      significance: 'Paul is the most influential missionary and theologian in Christian history. Thirteen New Testament letters bear his name, and more than half of Acts tells his story. His teaching that people are justified by grace through faith in Christ, not by works of the law, and that Jews and Gentiles are one in Christ, shaped the early church and later sparked the Reformation.\n\nHis own story, from persecutor to apostle, became the model of grace: "I am the least of the apostles... But by the grace of God I am what I am" (1 Corinthians 15:9–10).',
      moments: [
        d('c. AD 34', 'At Stephen\'s death', 'The men stoning Stephen lay their cloaks at the feet of a young man named Saul, who approves of his execution. Saul then ravages the church, dragging men and women off to prison.', 'Acts 7–8', 'acts', 7),
        d('c. AD 34–35', 'The Damascus road', 'Near Damascus a light from heaven flashes around Saul and a voice asks, "Saul, Saul, why are you persecuting me?" Blinded, he is led into the city; three days later Ananias lays hands on him, his sight returns, and he is baptized.', 'Acts 9', 'acts', 9),
        d('c. AD 35–45', 'Hidden years', 'Paul preaches in Damascus, escapes in a basket lowered over the wall, spends time in Arabia, meets Peter in Jerusalem, and returns to Tarsus. Barnabas later brings him to teach in Antioch, where believers are first called "Christians."', 'Galatians 1', 'galatians', 1),
        d('c. AD 46–48', 'First journey', 'Sent out by the church in Antioch with Barnabas, Paul travels through Cyprus and southern Galatia, preaching first in synagogues. At Lystra he is stoned and left for dead, but rises and goes on.', 'Acts 13–14', 'acts', 13),
        d('c. AD 49', 'The Jerusalem council', 'The church debates whether Gentile believers must be circumcised and keep the Law of Moses. Paul and Barnabas report what God has done among the Gentiles, and the apostles agree not to burden them.', 'Acts 15', 'acts', 15),
        d('c. AD 49–52', 'Second journey: into Europe', 'After a vision of a man of Macedonia, Paul crosses into Europe with Silas, Timothy and Luke. In Philippi he is beaten and jailed, and the jailer is converted after an earthquake; he preaches in Athens and stays eighteen months in Corinth.', 'Acts 16–18', 'acts', 16),
        d('c. AD 53–57', 'Third journey: Ephesus', 'Paul spends nearly three years in Ephesus, where so many turn from idols that silversmiths riot. He writes to the Corinthians and Romans during these years.', 'Acts 19–20', 'acts', 19),
        d('c. AD 57–59', 'Arrest and trials', 'In Jerusalem a mob seizes Paul in the temple. Rescued by Roman soldiers, he is held two years in Caesarea, testifies before governors Felix and Festus and King Agrippa, and appeals to Caesar.', 'Acts 21–26', 'acts', 21),
        d('c. AD 60–62', 'Shipwreck and Rome', 'On the way to Rome, his ship is wrecked on Malta, but all 276 aboard survive. In Rome he lives two years under house arrest, "proclaiming the kingdom of God... with all boldness."', 'Acts 27–28', 'acts', 27),
        d('c. AD 64–67', 'Final imprisonment', 'In his last letter, 2 Timothy, Paul writes from prison expecting death: "I have fought the good fight, I have finished the race, I have kept the faith." Early church tradition says he was beheaded in Rome under Nero.', '2 Timothy 4', '2timothy', 4),
      ],
      questions: [
        { q: 'Did God change his name from Saul to Paul?', a: 'Not exactly. As a Jew with Roman citizenship he likely had both names from birth. Acts simply switches to "Paul" when his mission among Gentiles begins (Acts 13:9).' },
        { q: 'Which letters did Paul write?', a: 'Thirteen letters bear his name: Romans, 1–2 Corinthians, Galatians, Ephesians, Philippians, Colossians, 1–2 Thessalonians, 1–2 Timothy, Titus and Philemon. Scholars debate the authorship of some, but the early church accepted all thirteen. Hebrews is anonymous.' },
      ],
      keyVerses: [
        { ref: 'Galatians 2:20', text: 'I have been crucified with Christ. It is no longer I who live, but Christ who lives in me.' },
        { ref: 'Philippians 1:21', text: 'For to me to live is Christ, and to die is gain.' },
        { ref: '2 Timothy 4:7', text: 'I have fought the good fight, I have finished the race, I have kept the faith.' },
      ],
      reading: [
        { label: 'Acts 9', book: 'acts', ch: 9, note: 'Conversion' },
        { label: 'Acts 13–20', book: 'acts', ch: 13, note: 'The missionary journeys' },
        { label: 'Acts 21–28', book: 'acts', ch: 21, note: 'Arrest, trials and Rome' },
        { label: 'Philippians 3', book: 'philippians', ch: 3, note: 'His own story' },
        { label: '2 Timothy 4', book: '2timothy', ch: 4, note: 'His last words' },
      ],
    },
  },
};
