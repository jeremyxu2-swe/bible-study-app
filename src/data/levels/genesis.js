// Genesis at three reading levels. s = Simple, m = Moderate, d = Detailed, v = key verse, p = people.
// Book key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
import more from './genesis.b.js';

export default {
  book: {
    simple: "God creates a good world, people fall into sin, and God begins His rescue plan through Abraham's family.",
    moderate: "Genesis tells how God created the world and how sin broke it. After the flood and Babel, God chooses Abraham and promises that through his family all nations will be blessed. The promise passes to Isaac, Jacob and Joseph, ending with Israel's family safe in Egypt.",
    detailed: "Genesis is the book of beginnings: of the world, of humanity, of sin, and of God's plan to put things right. Chapters 1–11 cover creation, the fall, the flood and the tower of Babel, showing how sin spreads and how God still shows mercy. Chapters 12–50 follow Abraham, Isaac, Jacob and Joseph, flawed people through whom God keeps His covenant promises of land, descendants and blessing. It ends with Joseph saying that what others meant for evil, God meant for good.",
    verse: { ref: 'Genesis 12:3', text: "I will bless those who bless you, and him who dishonors you I will curse, and in you all the families of the earth shall be blessed." },
    themes: ['God is Creator of all things', 'Sin breaks every relationship', "God's covenant promises to Abraham", "God's sovereignty over human evil"],
    keyVerses: [
      { ref: '1:1', text: 'In the beginning, God created the heavens and the earth.' },
      { ref: '3:15', text: 'I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel.' },
      { ref: '15:6', text: 'And he believed the LORD, and he counted it to him as righteousness.' },
      { ref: '50:20', text: 'As for you, you meant evil against me, but God meant it for good.' },
    ],
  },
  sections: {
    1: { short: 'God creates a good world; Adam and Eve sin; Cain kills Abel.' },
    6: { short: 'God floods a violent world, saves Noah, then scatters the nations at Babel.' },
    12: { short: 'God calls Abraham, makes a covenant with him and gives him Isaac.' },
    26: { short: 'The promise passes to Isaac and to Jacob, who is renamed Israel.' },
    37: { short: 'Joseph is sold into Egypt, rises to power and saves his family.' },
  },
  chapters: [
    { // 1
      s: "God creates everything in six days and calls it very good.",
      m: "God speaks the heavens, the earth and all living things into being over six days. On the sixth day He creates humanity, male and female, in His own image to rule over the earth. He looks at everything He has made and calls it very good.",
      d: "In the beginning God creates the heavens and the earth by His word, bringing order and light out of darkness and emptiness. Over six days He forms the sky, seas, land, plants, sun, moon, stars, fish, birds and animals. Last of all He makes humanity, male and female, in His own image and gives them the task of filling the earth and ruling it as His representatives. God sees everything He has made and declares it very good.",
      p: ['adam', 'eve'],
    },
    { // 2
      s: "God rests, forms Adam, plants Eden and makes Eve.",
      m: "God rests on the seventh day and blesses it. He forms the man from the dust, places him in the garden of Eden, and forbids him to eat from the tree of the knowledge of good and evil. Then He makes the woman from the man's side, and the two become one flesh.",
      d: "God finishes His work and rests on the seventh day, making it holy. The chapter then zooms in: God forms the man from dust, breathes life into him, and places him in Eden to work and keep the garden. He may eat from any tree except the tree of the knowledge of good and evil, which will bring death. Seeing that it is not good for the man to be alone, God builds the woman from his rib, and the man joyfully receives her as his wife.",
      p: ['adam', 'eve'],
    },
    { // 3
      s: "Adam and Eve disobey God, and sin enters the world.",
      m: "The serpent tempts Eve to doubt God, and she and Adam eat the forbidden fruit. Their shame leads them to hide, and God pronounces judgment on the serpent, the woman and the man. Yet He promises that the woman's offspring will crush the serpent, clothes them, and sends them out of Eden.",
      d: "The serpent questions God's word and suggests God is holding back something good, so Eve eats the fruit and gives some to Adam. Their eyes are opened, they feel shame, and they hide from God, then blame each other. God curses the serpent, brings pain into childbirth and work, and announces that people will return to dust. Even so, He promises that the woman's offspring will crush the serpent's head, makes garments of skin for them, and sends them out of the garden.",
      p: ['adam', 'eve'],
    },
    { // 4
      s: "Cain kills his brother Abel.",
      m: "Cain and Abel bring offerings, and God accepts Abel's but not Cain's. Cain refuses God's warning, murders Abel, and is sent away as a wanderer. Cain's line builds cities and culture, while Adam and Eve have another son, Seth.",
      d: "Adam and Eve's sons bring offerings: Abel gives the best of his flock, and God has regard for him, but not for Cain. God warns Cain that sin is crouching at the door and he must master it, but Cain lures Abel into a field and kills him. God curses Cain to be a restless wanderer yet puts a mark on him for protection. Cain's descendants build a city and develop music and metalwork, while violence grows through Lamech; meanwhile Seth is born, and people begin to call on the LORD.",
      p: ['adam', 'eve'],
    },
    { // 5
      s: "A family line runs from Adam to Noah.",
      m: "This genealogy traces ten generations from Adam to Noah, repeating the refrain “and he died” to show the reality of sin's curse. Enoch stands out because he walked with God and God took him. The chapter ends with Noah and his three sons.",
      d: "The chapter lists the generations from Adam through Seth down to Noah, each with very long lifespans. The repeated phrase “and he died” shows that the warning of Genesis 2 has come true. One exception breaks the pattern: Enoch walked with God and “was not, for God took him.” Lamech names his son Noah, hoping he will bring relief from the cursed ground, and Noah becomes the father of Shem, Ham and Japheth.",
      p: ['adam', 'noah'],
    },
    { // 6
      s: "The world becomes wicked, and God tells Noah to build an ark.",
      m: "Human wickedness and violence fill the earth, and God is grieved that He made mankind. He decides to send a flood, but Noah finds favor in His eyes. God tells Noah to build a large ark and promises to make a covenant with him.",
      d: "As people multiply, evil spreads until every intention of the human heart is only evil continually. God is grieved and resolves to wipe out the corrupt world with a flood. Noah, however, finds favor with the LORD and walks with God as a righteous man. God gives him exact plans for an ark, tells him to bring his family and pairs of every kind of animal, and Noah does all that God commands.",
      p: ['noah'],
    },
    { // 7
      s: "The flood comes, and only those in the ark survive.",
      m: "Noah, his family and the animals enter the ark, and the LORD shuts them in. Rain falls for forty days and the waters cover even the mountains. Every living thing on land dies, and only those in the ark are kept alive.",
      d: "At God's command Noah, his wife, his three sons and their wives enter the ark, together with the animals, and the LORD Himself shuts the door. The fountains of the deep burst open and rain falls for forty days and nights. The waters rise above the highest mountains and prevail on the earth for 150 days. Every creature that breathes on land perishes, and only Noah and those with him in the ark survive.",
      p: ['noah'],
    },
    { // 8
      s: "The waters go down, and Noah leaves the ark and worships.",
      m: "God remembers Noah and sends a wind, and the waters slowly recede. Noah sends out a raven and then a dove, which returns with an olive leaf. When the earth is dry, Noah leaves the ark, offers a sacrifice, and God promises never again to curse the ground in this way.",
      d: "God remembers Noah, sends a wind over the earth, and the waters begin to fall until the ark rests on the mountains of Ararat. Noah sends out a raven and then a dove three times; the dove brings back an olive leaf and then does not return at all. At God's word Noah, his family and the animals come out of the ark. Noah builds an altar and offers sacrifices, and the LORD promises that while the earth remains, seedtime and harvest, summer and winter will not cease.",
      p: ['noah'],
    },
    { // 9
      s: "God makes a covenant with Noah, sealed by the rainbow.",
      m: "God blesses Noah's family, tells them to fill the earth, and declares that human life is precious because people are made in His image. He makes a covenant never again to destroy the earth by flood and sets the rainbow as its sign. Later Noah gets drunk, Ham dishonors him, and Noah curses Canaan.",
      d: "God renews the creation blessing, telling Noah's family to be fruitful and fill the earth, and allows them to eat meat but not blood. Because humans bear God's image, He requires justice for anyone who sheds human blood. He makes a covenant with Noah and every living creature never again to flood the whole earth, and gives the rainbow as a sign. Afterward Noah plants a vineyard and becomes drunk; Ham sees his father's nakedness, Shem and Japheth cover him, and Noah curses Canaan and blesses Shem.",
      p: ['noah'],
    },
    { // 10
      s: "The nations spread out from Noah's three sons.",
      m: "The Table of Nations lists the peoples descended from Shem, Ham and Japheth. It shows how the nations spread across the lands, each with its own language and territory. It includes Nimrod, a mighty hunter who founded Babel and Nineveh.",
      d: "This chapter records about seventy nations descended from Noah's sons. Japheth's line spreads to the coastlands, Ham's to Egypt, Canaan and Mesopotamia, and Shem's to the Semitic peoples, including Eber, ancestor of the Hebrews. Nimrod, a descendant of Ham, is described as a mighty hunter who founded cities such as Babel and Nineveh. The list reminds readers that all nations come from one family and sets the stage for God's promise to bless all of them through Abraham.",
      p: ['noah'],
    },
    { // 11
      s: "People build the tower of Babel, and God scatters them.",
      m: "Humanity, speaking one language, tries to build a city and tower reaching to heaven to make a name for themselves. God confuses their language and scatters them across the earth. The chapter then traces Shem's line to Terah and his son Abram.",
      d: "The people settle in Shinar and decide to build a city with a tower to the heavens so they will not be scattered and can make a name for themselves. The LORD comes down, confuses their language, and scatters them over the whole earth, and the city is called Babel. A genealogy then follows Shem's descendants down to Terah. Terah's son Abram marries Sarai, who is barren, and the family leaves Ur of the Chaldeans and settles in Haran.",
      p: ['abraham', 'sarah'],
    },
    { // 12
      s: "God calls Abram and promises to bless the world through him.",
      m: "God calls Abram to leave his country and promises to make him a great nation and to bless all the families of the earth through him. Abram obeys and travels to Canaan, where God promises the land to his offspring. During a famine Abram goes to Egypt and lies that Sarai is his sister.",
      d: "The LORD tells Abram to leave his land and family for a land God will show him, promising to make him a great nation, bless him, and bless all the families of the earth through him. At seventy-five Abram obeys and travels to Canaan with Sarai and his nephew Lot. At Shechem God promises the land to his offspring, and Abram builds altars. When famine strikes, he goes to Egypt and, out of fear, says Sarai is his sister; Pharaoh takes her, but God sends plagues and she is returned.",
      p: ['abraham', 'sarah'],
    },
    { // 13
      s: "Abram and Lot separate, and God renews the land promise.",
      m: "Abram and Lot have so many animals that their herdsmen quarrel. Abram generously lets Lot choose, and Lot picks the well-watered Jordan valley near Sodom. God then promises Abram all the land he can see and offspring as countless as the dust.",
      d: "Back in Canaan, Abram and Lot have grown so wealthy in flocks that the land cannot support them both, and their herdsmen begin to quarrel. Abram, wanting peace, lets Lot choose first, and Lot chooses the lush Jordan valley, moving his tent near wicked Sodom. After they part, God tells Abram to look in every direction and promises him that land forever and offspring as numerous as the dust of the earth. Abram settles by the oaks of Mamre at Hebron and builds an altar.",
      p: ['abraham'],
    },
    { // 14
      s: "Abram rescues Lot and is blessed by Melchizedek.",
      m: "Four kings defeat the kings of Sodom and nearby cities and carry off Lot. Abram leads 318 trained men, defeats the invaders and rescues Lot. Melchizedek, king of Salem and priest of God Most High, blesses Abram, who gives him a tenth of everything.",
      d: "A coalition of four eastern kings crushes a revolt by five Canaanite kings, including the king of Sodom, and carries off people and goods, including Lot. When Abram hears, he pursues them with 318 trained men, attacks by night and brings back Lot and all the captives. Melchizedek, king of Salem and priest of God Most High, meets him with bread and wine and blesses him, and Abram gives him a tenth of everything. Abram refuses any reward from the king of Sodom so that no one can say a man made him rich.",
      p: ['abraham'],
    },
    { // 15
      s: "Abram believes God, and God makes a covenant with him.",
      m: "God promises Abram a son of his own and offspring as many as the stars. Abram believes the LORD, and God counts it to him as righteousness. In a solemn ceremony, God alone passes between the cut animals, binding Himself to give Abram's descendants the land.",
      d: "God tells Abram not to fear, for He is his shield and great reward, but Abram asks how this can be when he has no child. God brings him outside, tells him to count the stars, and says, “So shall your offspring be,” and Abram believes the LORD, who counts it to him as righteousness. God then confirms the land promise with a covenant ceremony: animals are cut in two, and a smoking fire pot and flaming torch, symbols of God's presence, pass between the pieces. God also foretells that Abram's descendants will be oppressed in a foreign land for four hundred years before returning.",
      p: ['abraham'],
    },
    { // 16
      s: "Sarai gives Hagar to Abram, and Ishmael is born.",
      m: "Still childless, Sarai gives her Egyptian servant Hagar to Abram, and Hagar conceives. Tension follows, and Hagar flees into the wilderness. The angel of the LORD finds her, promises many descendants through her son Ishmael, and she calls God “the God who sees me.”",
      d: "Ten years after arriving in Canaan, Sarai, still unable to have children, gives her servant Hagar to Abram as a wife so she can build a family through her. When Hagar conceives, she looks on Sarai with contempt, and Sarai treats her harshly until Hagar runs away. The angel of the LORD meets her by a spring, tells her to return, and promises that her son, Ishmael, will have countless descendants. Hagar names the LORD “a God of seeing,” and Ishmael is born when Abram is eighty-six.",
      p: ['abraham', 'sarah'],
    },
    { // 17
      s: "God renames Abram and Sarai and gives circumcision as the covenant sign.",
      m: "God appears to Abram at ninety-nine and renames him Abraham, “father of many nations.” He gives circumcision as the sign of the covenant and renames Sarai as Sarah. God promises that Sarah will bear a son, Isaac, through whom the covenant will continue.",
      d: "When Abram is ninety-nine, God appears as God Almighty and calls him to walk before Him blamelessly. He changes his name to Abraham because he will be the father of many nations and kings, and promises an everlasting covenant and the land of Canaan. Every male is to be circumcised as the sign of the covenant. God renames Sarai as Sarah and says she will bear a son; Abraham laughs in disbelief, but God says the child will be named Isaac and the covenant will continue through him, while Ishmael will also be blessed.",
      p: ['abraham', 'sarah', 'isaac'],
    },
    { // 18
      s: "The LORD visits Abraham, and Abraham pleads for Sodom.",
      m: "Three visitors come to Abraham's tent, and the LORD promises that Sarah will have a son within a year; Sarah laughs. The LORD reveals that He will judge Sodom. Abraham boldly intercedes, and God agrees to spare the city if even ten righteous people are found there.",
      d: "The LORD appears to Abraham as three visitors, and Abraham hurries to serve them a generous meal. The LORD says that Sarah will have a son by this time next year; Sarah laughs inside, and the LORD asks, “Is anything too hard for the LORD?” As the visitors leave, the LORD shares His plan to investigate the outcry against Sodom and Gomorrah. Abraham pleads for the city, asking whether the Judge of all the earth will do what is just, and God agrees to spare it for fifty, then forty-five, down to ten righteous people.",
      p: ['abraham', 'sarah'],
    },
    { // 19
      s: "God destroys Sodom and Gomorrah but rescues Lot.",
      m: "Two angels come to Sodom, and the men of the city try to abuse them, showing how wicked it has become. The angels lead Lot and his family out, and the LORD rains fire on Sodom and Gomorrah. Lot's wife looks back and becomes a pillar of salt, and Lot's daughters later commit incest with him.",
      d: "Lot welcomes two angels into his home in Sodom, but the men of the city surround the house demanding to abuse them, and the angels strike them blind. The angels urge Lot to flee, and when he lingers they seize him, his wife and daughters by the hand and bring them out because the LORD is merciful. The LORD rains sulfur and fire on Sodom and Gomorrah, and Lot's wife looks back and becomes a pillar of salt. Hiding in a cave, Lot's daughters get him drunk and conceive Moab and Ben-ammi, ancestors of the Moabites and Ammonites.",
      p: ['abraham'],
    },
    { // 20
      s: "Abraham lies again about Sarah, and God protects her.",
      m: "In Gerar, Abraham again says Sarah is his sister, and King Abimelech takes her. God warns Abimelech in a dream, and he returns Sarah untouched. Abraham prays for Abimelech's household, and God heals them.",
      d: "Abraham moves to Gerar and, fearing for his life, again tells people that Sarah is his sister, so King Abimelech takes her. Before he touches her, God warns Abimelech in a dream that he is a dead man unless he returns her, since she is married. Abimelech protests his innocence, rebukes Abraham, and restores Sarah with gifts. Abraham admits his fear and prays for Abimelech, and God heals his household, protecting the promised line despite Abraham's failure.",
      p: ['abraham', 'sarah'],
    },
    { // 21
      s: "Isaac is born, and Hagar and Ishmael are sent away.",
      m: "God keeps His promise, and Sarah gives birth to Isaac when Abraham is a hundred. Sarah has Hagar and Ishmael sent away, but God provides water in the wilderness and promises to make Ishmael a nation. Abraham also makes a treaty with Abimelech at Beersheba.",
      d: "The LORD visits Sarah as He said, and she bears Isaac to Abraham in his old age; she says God has made laughter for her. At Isaac's weaning feast, Sarah sees Ishmael mocking and demands that Hagar and her son be sent away, and God tells Abraham to listen because the promise will come through Isaac. In the wilderness, when the water runs out, God hears the boy and opens Hagar's eyes to a well, promising to make Ishmael a great nation. Abraham and Abimelech then swear an oath at Beersheba over a disputed well.",
      p: ['abraham', 'sarah', 'isaac'],
    },
    { // 22
      s: "God tests Abraham, then provides a ram in place of Isaac.",
      m: "God tests Abraham by telling him to offer Isaac as a burnt offering on Mount Moriah. Abraham obeys, trusting that God will provide, and at the last moment the angel of the LORD stops him. God provides a ram instead and renews His promise to bless all nations through Abraham's offspring.",
      d: "God tells Abraham to take his only son Isaac, whom he loves, and offer him on a mountain in the land of Moriah. Abraham rises early and goes, and when Isaac asks where the lamb is, Abraham replies that God will provide it. As Abraham raises the knife, the angel of the LORD stops him, saying he now knows Abraham fears God, and Abraham sees a ram caught in a thicket to offer instead. He names the place “The LORD will provide,” and God swears to multiply his offspring and bless all nations through them.",
      p: ['abraham', 'isaac'],
    },
    { // 23
      s: "Sarah dies, and Abraham buys a burial cave.",
      m: "Sarah dies at Hebron at the age of 127, and Abraham mourns her. He insists on paying full price to Ephron the Hittite for the cave of Machpelah. It becomes the family's first piece of owned land in Canaan.",
      d: "Sarah dies at Kiriath-arba, that is Hebron, and Abraham mourns and weeps for her. Though the Hittites offer to let him use their tombs, Abraham asks to buy the cave of Machpelah from Ephron. Ephron offers it as a gift but names its value, and Abraham pays the full four hundred shekels of silver in front of witnesses. This small burial plot becomes the first part of the promised land legally owned by Abraham's family.",
      p: ['abraham', 'sarah'],
    },
    { // 24
      s: "Abraham's servant finds Rebekah as a wife for Isaac.",
      m: "Abraham sends his servant back to his relatives to find a wife for Isaac. The servant prays for a sign, and Rebekah appears at the well and fulfills it exactly. Rebekah agrees to go, and Isaac marries her and loves her.",
      d: "Abraham, now old, makes his servant swear to find a wife for Isaac from his own family rather than from the Canaanites. At the well outside Nahor's town, the servant prays that the right young woman will offer water to him and his camels, and before he finishes Rebekah does just that. He worships God and tells her family the whole story, and Laban and Bethuel agree that this is from the LORD. Rebekah chooses to go at once, and Isaac takes her as his wife, loves her and is comforted after his mother's death.",
      p: ['abraham', 'isaac', 'rebekah'],
    },
    { // 25
      s: "Abraham dies, and Jacob and Esau are born.",
      m: "Abraham dies at 175 and is buried by Isaac and Ishmael. Rebekah is barren until Isaac prays, and she has twins; God says the older will serve the younger. Esau, the hunter, later sells his birthright to Jacob for a bowl of stew.",
      d: "Abraham has more sons through Keturah but gives everything to Isaac, then dies in a good old age and is buried with Sarah by Isaac and Ishmael. Ishmael's twelve sons become tribal leaders. Isaac prays for Rebekah, who is barren, and she conceives twins who struggle within her; God tells her two nations are in her womb and the older will serve the younger. Esau becomes a skillful hunter and Jacob a quiet man, and one day the famished Esau despises his birthright by selling it to Jacob for some red stew.",
      p: ['abraham', 'isaac', 'rebekah', 'jacob'],
    },
    ...more,
  ],
};
