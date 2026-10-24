// Job at three reading levels. s = Simple, m = Moderate, d = Detailed, v = key verse, p = people.
// Book key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
import more from './job.b.js';

export default {
  book: {
    simple: 'A righteous man loses everything, wrestles with God, and learns to trust Him.',
    moderate: 'Job is a blameless man whom God allows Satan to test by taking his wealth, children and health. His three friends insist he must be suffering for secret sin, while Job protests his innocence and demands an answer from God. Finally God speaks from the whirlwind, revealing His wisdom and power, and Job humbly repents and is restored.',
    detailed: 'Job explores why the righteous suffer and whether people serve God only for His blessings. In a heavenly scene Satan challenges Job\'s integrity, and God permits him to strip Job of possessions, children and health, yet Job refuses to curse God. Most of the book is poetry: Job laments his birth and debates his friends Eliphaz, Bildad and Zophar, who argue that suffering always means sin, while Job insists on his innocence, longs for a mediator, and even declares, "I know that my Redeemer lives." After a young man named Elihu speaks, God answers Job out of the whirlwind with questions about creation that reveal His wisdom beyond human understanding; Job repents in dust and ashes, God rebukes the friends for not speaking rightly, and Job\'s fortunes are restored twice over.',
    verse: { ref: 'Job 19:25', text: 'For I know that my Redeemer lives, and at the last he will stand upon the earth.' },
    themes: ['Suffering and God\'s sovereignty', 'The limits of human wisdom', 'Honest lament and faith', 'God\'s goodness beyond our understanding'],
    keyVerses: [
      { ref: '1:21', text: 'The LORD gave, and the LORD has taken away; blessed be the name of the LORD.' },
      { ref: '38:4', text: 'Where were you when I laid the foundation of the earth? Tell me, if you have understanding.' },
      { ref: '42:5', text: 'I had heard of you by the hearing of the ear, but now my eye sees you.' },
    ],
  },
  sections: {
    1: { short: 'Satan tests Job, who loses everything but does not curse God.' },
    3: { short: 'Job laments, and his three friends argue he must have sinned.' },
    32: { short: 'Young Elihu speaks about God\'s purposes in suffering.' },
    38: { short: 'God speaks from the whirlwind, and Job is restored.' },
  },
  chapters: [
    { // 1
      s: 'Job loses his wealth and children but still worships God.',
      m: 'Job is a blameless man who fears God and is very wealthy. Satan claims Job only serves God because God has blessed him, so God allows Satan to take everything Job has. In one day Job loses his animals, servants and all ten children, yet he worships, saying, "The LORD gave, and the LORD has taken away; blessed be the name of the LORD."',
      d: 'In the land of Uz lives Job, blameless and upright, who fears God, turns from evil, and is the greatest man of the east, with seven sons, three daughters and vast flocks. When the heavenly beings present themselves before the LORD, God points out Job, and Satan replies that Job fears God only because God has put a hedge around him, predicting he will curse God if he loses everything. God permits Satan to touch all Job has but not Job himself, and in one day messengers report that raiders took his oxen and donkeys, fire fell on his sheep, Chaldeans took his camels, and a wind collapsed the house where his children were feasting, killing them all. Job tears his robe, shaves his head, falls on the ground and worships, saying, "Naked I came from my mother\'s womb, and naked shall I return," and in all this he does not sin or charge God with wrong.',
      p: ['job'],
    },
    { // 2
      s: 'Job is struck with painful sores, and three friends come to comfort him.',
      m: 'Satan says Job will curse God if his own body is attacked, and God allows Satan to strike him with painful sores from head to foot. Job\'s wife tells him to curse God and die, but Job refuses, accepting both good and evil from God. His friends Eliphaz, Bildad and Zophar come and sit silently with him for seven days because his suffering is so great.',
      d: 'Again the heavenly beings come before the LORD, who notes that Job still holds fast his integrity, but Satan says, "Skin for skin! All that a man has he will give for his life," claiming Job will curse God if his flesh is struck. God gives Job into Satan\'s hand but forbids him to take his life, and Satan afflicts Job with loathsome sores from the sole of his foot to the crown of his head, so that he sits in ashes scraping himself with a piece of broken pottery. His wife urges him to curse God and die, but Job calls this foolish talk and asks, "Shall we receive good from God, and shall we not receive evil?" Three friends, Eliphaz, Bildad and Zophar, come to show sympathy, weep when they hardly recognize him, and sit with him on the ground seven days and nights without speaking a word.',
      p: ['job'],
    },
    { // 3
      s: 'Job curses the day he was born.',
      m: 'After seven days of silence, Job breaks out in grief and curses the day of his birth. He wishes he had died at birth and found rest in the grave. He asks why life is given to those in misery who long for death.',
      d: 'Job opens his mouth and curses the day he was born, wishing that day had been darkness and that night had never counted among the months. He asks why he did not die at birth, imagining the grave as a place of rest where kings, prisoners and slaves lie quietly together. He asks why light is given to the miserable who long for death more than for hidden treasure. He ends confessing that what he feared has come upon him, and that he has no ease, no quiet and no rest, "but trouble comes," opening the long poetic debate with raw lament.',
      p: ['job'],
    },
    { // 4
      s: 'Eliphaz suggests Job is suffering for his sin.',
      m: 'Eliphaz begins gently but reminds Job that he once encouraged others in trouble and now is discouraged himself. He argues that the innocent never perish and those who sow trouble reap it. He describes a frightening night vision teaching that no human is pure before God.',
      d: 'Eliphaz the Temanite asks whether Job will be offended if he speaks, then notes that Job has instructed and strengthened many but now loses patience when trouble touches him. He asks, "Who that was innocent ever perished?" claiming that those who plow iniquity and sow trouble reap the same, implying Job\'s suffering must have a cause. He describes a spirit gliding past his face in the night and a voice asking whether mortal man can be right before God. If even angels are charged with error, he reasons, how much more frail humans who live in houses of clay and are crushed like a moth.',
      p: ['job'],
    },
    { // 5
      s: 'Eliphaz urges Job to seek God and accept His discipline.',
      m: 'Eliphaz says that if he were Job, he would seek God and commit his cause to Him. He praises God\'s wonderful works and His care for the lowly. He tells Job that the one God disciplines is blessed, for God wounds but also heals.',
      d: 'Eliphaz says no heavenly being will answer Job and that resentment kills the fool, for affliction does not spring from the dust but man is born to trouble as surely as sparks fly upward. "As for me, I would seek God," he says, describing God who does great and unsearchable things, sends rain, lifts the lowly, and frustrates the crafty. He declares, "Blessed is the one whom God reproves; therefore despise not the discipline of the Almighty," for He wounds but binds up. He promises that if Job accepts this, God will deliver him from famine, war and wild beasts and give him peace, offspring and a long life, ending, "Behold, this we have searched out; it is true."',
      p: ['job'],
    },
    { // 6
      s: 'Job says his friends have failed him.',
      m: 'Job says his anguish is heavier than the sand of the sea and asks God to crush him. He accuses his friends of being like streams that dry up when travelers need water most. He challenges them to show him where he has done wrong.',
      d: 'Job answers that if his vexation could be weighed, it would be heavier than the sand of the sea, which is why his words have been rash, because the arrows of the Almighty are in him. He wishes God would crush him, finding comfort that he has not denied the words of the Holy One. He says a despairing man should have the kindness of his friends, but they are treacherous like seasonal streams that vanish in the heat just when caravans come looking for water. "Teach me, and I will be silent," he says, asking them to show how he has gone astray and to look him in the face, for he would not lie.',
      p: ['job'],
    },
    { // 7
      s: 'Job complains to God about his miserable life.',
      m: 'Job describes human life as hard service, with months of emptiness and nights of misery. Turning to God, he complains that his days are swift and hopeless. He asks why God watches him so closely and will not leave him alone or forgive him.',
      d: 'Job says human life on earth is like a hired worker longing for evening, and he has been given months of emptiness and nights of misery, his flesh clothed with worms and dirt. He addresses God directly: his days are swifter than a weaver\'s shuttle and end without hope, and soon he will be gone. Refusing to restrain his mouth, he asks if he is the sea or a sea monster that God sets a guard over him, and complains that God terrifies him with dreams. In a dark twist of Psalm 8, he asks, "What is man, that you make so much of him... visit him every morning and test him every moment?", and pleads, "Why do you not pardon my transgression?"',
      p: ['job'],
    },
    { // 8
      s: 'Bildad says God is just and Job\'s children must have sinned.',
      m: 'Bildad accuses Job of speaking like a strong wind and insists God never perverts justice. He suggests Job\'s children died because they sinned. He urges Job to seek God, promising that if he is pure, God will restore him.',
      d: 'Bildad the Shuhite asks how long Job will speak words like a great wind and asserts, "Does God pervert justice?" He bluntly suggests that if Job\'s children sinned, God delivered them into the hand of their transgression. If Job will seek God and is pure and upright, God will rouse Himself for him and restore him, and his latter days will be very great. Bildad appeals to the wisdom of past generations, comparing the godless to papyrus without water and a spider\'s web, and promises that God will not reject a blameless man but will yet fill Job\'s mouth with laughter.',
      p: ['job'],
    },
    { // 9
      s: 'Job says no one can argue with God and longs for a mediator.',
      m: 'Job agrees that God is just but asks how anyone can be right before Him. God is so powerful and wise that Job could not answer Him even if he were innocent. He wishes there were an arbiter between them who could lay a hand on both.',
      d: 'Job agrees with Bildad in principle but asks, "How can a man be in the right before God?" since no one could answer Him once in a thousand times. He describes God\'s overwhelming power: moving mountains, shaking the earth, commanding the sun, stretching out the heavens, and doing great things beyond searching out. Even if he were in the right, Job says, he could not answer but would have to plead for mercy, and he feels God crushes him with a tempest and multiplies his wounds without cause. He cries that there is no arbiter between them who might lay his hand on both, wishing God would remove His rod so he could speak without fear.',
      p: ['job'],
    },
    { // 10
      s: 'Job asks God why He made him only to destroy him.',
      m: 'Job loathes his life and speaks in the bitterness of his soul. He asks God why He would carefully form him and then turn to destroy him. He pleads for a little rest before he goes to the land of darkness.',
      d: 'Job decides to give free rein to his complaint and asks God to tell him why He contends against him. He describes how God shaped him like clay, poured him out like milk, clothed him with skin and flesh, and knit him together with bones and sinews, granting him life and steadfast love. Yet it seems God was secretly planning to watch for his sin and hunt him like a lion. Job asks why God brought him out of the womb and begs Him to let him alone a little before he goes to the land of gloom and deep darkness, from which he will not return.',
      p: ['job'],
    },
    { // 11
      s: 'Zophar says Job deserves even worse.',
      m: 'Zophar rebukes Job\'s many words and says God is punishing him less than his guilt deserves. He describes God\'s wisdom as higher than heaven and deeper than Sheol. He urges Job to put away his sin and promises that his life will become brighter than noonday.',
      d: 'Zophar the Naamathite asks whether a multitude of words should go unanswered and wishes God would speak and show Job the secrets of wisdom, adding, "Know then that God exacts of you less than your guilt deserves." He asks whether Job can find out the deep things of God, whose limits are higher than heaven, deeper than Sheol, longer than the earth and broader than the sea. God knows worthless men and sees iniquity, he says, but a stupid man will get understanding when a wild donkey is born a man. If Job prepares his heart, stretches out his hands to God and puts iniquity far away, his life will be brighter than the noonday, but the eyes of the wicked will fail.',
      p: ['job'],
    },
    { // 12
      s: 'Job says God\'s power over all is obvious, even to animals.',
      m: 'Job sarcastically tells his friends that wisdom will die with them. He says even the animals know that the LORD\'s hand has made everything. God controls nature, rulers and nations, often overturning the wise and powerful.',
      d: 'Job answers, "No doubt you are the people, and wisdom will die with you," insisting he has understanding as well and has become a laughingstock though he called on God. He says the beasts, birds, plants and fish could all teach that the hand of the LORD has done this, for in His hand is the life of every living thing. With God are wisdom and might, Job declares, describing how He tears down and none can rebuild, withholds or sends waters, and makes counselors and judges fools. He loosens the bonds of kings, overthrows the mighty, makes nations great and destroys them, and takes away the understanding of the leaders of the earth.',
      p: ['job'],
    },
    { // 13
      s: 'Job wants to argue his case with God and calls his friends liars.',
      m: 'Job tells his friends they are worthless physicians who whitewash with lies and would be wiser to stay silent. He wants to speak directly to God and argue his case. Though God may slay him, Job says he will hope in Him, and he asks God to show him his sins.',
      d: 'Job says he knows as much as his friends and wishes to speak to the Almighty and argue his case with God. He calls his friends "worthless physicians" who whitewash with lies, saying it would be wisdom if they kept silent, and he warns that God will rebuke them for showing partiality on His behalf. Taking his life in his hand, he declares, "Though he slay me, I will hope in him; yet I will argue my ways to his face," confident that he will be in the right. He asks God to withdraw His hand and stop terrifying him, then demands, "How many are my iniquities and my sins? Make me know my transgression," wondering why God hides His face and counts him as His enemy.',
      p: ['job'],
    },
    { // 14
      s: 'Job wonders whether a person who dies will live again.',
      m: 'Job reflects that human life is short and full of trouble, like a flower that fades. A tree cut down can sprout again, but a man dies and does not rise. He asks, "If a man dies, shall he live again?" and longs for God to hide him in the grave until His anger passes.',
      d: 'Man born of woman is few of days and full of trouble, Job says, flowering and withering like a passing shadow, with days determined by God. There is hope for a tree that is cut down, for at the scent of water it will bud again, but a man dies and lies low and does not rise until the heavens are no more. Job wishes God would hide him in Sheol until His wrath is past and then remember him, asking, "If a man dies, shall he live again?" and imagining that God would call and he would answer, longing for the work of His hands. But he ends in gloom, saying that as water wears away stones, so God destroys the hope of man.',
      p: ['job'],
    },
    { // 15
      s: 'Eliphaz accuses Job of undermining the fear of God.',
      m: 'Eliphaz says Job\'s words are windy and that he is doing away with reverence for God. He insists no human can be pure before God. He describes at length how the wicked suffer distress and ruin all their days.',
      d: 'In the second round of speeches, Eliphaz charges that Job fills himself with the east wind and is doing away with the fear of God, and that his own mouth condemns him. He asks whether Job was the first man born or has listened in the council of God, and whether God\'s comforts are too small for him. "What is man, that he can be pure?" he asks, saying that if even the heavens are not clean in God\'s sight, how much less one who drinks injustice like water. He then describes the wicked man who writhes in pain all his days, hears dreadful sounds, wanders for bread and will not be rich, because he stretched out his hand against God.',
      p: ['job'],
    },
    { // 16
      s: 'Job calls his friends miserable comforters and looks to a witness in heaven.',
      m: 'Job calls his friends "miserable comforters" and says he could speak like them if they were in his place. He describes God as tearing him apart and his enemies mocking him. Yet he believes he has a witness in heaven who will plead his case with God.',
      d: 'Job says he has heard many such things and calls his friends "miserable comforters," saying he too could heap up words and shake his head at them, but he would strengthen them instead. He describes God as having worn him out, torn him in wrath, handed him over to the ungodly, broken him apart and set him up as a target. His face is red with weeping, yet there is no violence in his hands and his prayer is pure. In an astonishing turn, Job declares, "Even now, behold, my witness is in heaven, and he who testifies for me is on high," one who will argue his case with God as a man does with his neighbor.',
      p: ['job'],
    },
    { // 17
      s: 'Job feels his spirit is broken and his hope lies in the grave.',
      m: 'Job says his spirit is broken and his days are nearly gone, with only the grave left for him. He asks God to give a pledge on his behalf since his friends will not. He mourns that his plans are broken and wonders where his hope is.',
      d: 'Job says his spirit is broken, his days are extinct, and the graveyard is ready for him, while mockers surround him. He asks God to lay down a pledge for him, since no one else will put up security, for God has closed his friends\' hearts to understanding. He has become a byword among the people, someone they spit in the face of, and his eye has grown dim from grief. He says his days are past and his plans broken off, and if he hopes for Sheol as his house, where then is his hope?',
      p: ['job'],
    },
    { // 18
      s: 'Bildad describes the terrible fate of the wicked.',
      m: 'Bildad is offended that Job treats his friends like cattle. He gives a vivid description of the wicked caught in traps, terrified on every side, and wiped from memory. He implies Job fits the description of one who does not know God.',
      d: 'Bildad asks how long Job will hunt for words and why his friends are counted as cattle, and asks whether the earth should be forsaken for Job\'s sake. He insists that the light of the wicked is put out: his own schemes throw him down, a net catches his feet, terrors frighten him on every side, and disaster waits for him. Disease consumes his skin, he is torn from the tent where he trusted, and his memory perishes from the earth, with no offspring or descendant among his people. Bildad concludes, "Surely such are the dwellings of the unrighteous, such is the place of him who knows not God," aiming the description at Job.',
      p: ['job'],
    },
    { // 19
      s: 'Job declares, "I know that my Redeemer lives."',
      m: 'Job asks his friends how long they will torment him and says God has wronged him and walled up his way. His family, friends and servants have abandoned him, and he begs his friends for pity. Then in a great statement of faith, he declares that his Redeemer lives and that after his skin is destroyed, he will see God in his flesh.',
      d: 'Job asks how long his friends will torment him and break him in pieces with words, insisting that God has put him in the wrong, closed his net around him, walled up his way, stripped his glory and uprooted his hope like a tree. His brothers, relatives, guests and servants have all turned away, his breath is strange to his wife, children despise him, and he has escaped "by the skin of my teeth," so he cries, "Have mercy on me, O you my friends, for the hand of God has touched me!" He wishes his words were engraved in rock forever. Then he declares, "For I know that my Redeemer lives, and at the last he will stand upon the earth. And after my skin has been thus destroyed, yet in my flesh I shall see God," a hope his heart faints for, and he warns his friends to fear the sword of judgment.',
      p: ['job'],
    },
    { // 20
      s: 'Zophar says the joy of the wicked is short-lived.',
      m: 'Zophar feels insulted by Job and answers that the triumph of the wicked is brief. Their wealth will be vomited up and their prosperity taken away. God\'s anger will fall on them, and heaven and earth will rise against them.',
      d: 'Zophar says his thoughts compel him to answer because he has heard censure that insults him. He declares that since man was placed on earth, the exulting of the wicked is short and the joy of the godless but for a moment; though he rises to the heavens, he will perish like his own dung. The wicked man may enjoy evil like a sweet morsel under his tongue, but it turns to venom in his stomach, and he must give back the riches he swallowed, because he crushed and abandoned the poor. God will send His burning anger on him, the heavens will reveal his iniquity and the earth will rise against him, "This is the wicked man\'s portion from God."',
      p: ['job'],
    },
    { // 21
      s: 'Job points out that the wicked often prosper.',
      m: 'Job challenges his friends\' claim that the wicked always suffer. He observes that the wicked often live long, grow rich, see their children prosper and die in peace. He concludes that his friends\' comfort is empty and their answers are false.',
      d: 'Job asks his friends to listen carefully as their consolation and then mock on, for his complaint is not against man. He asks, "Why do the wicked live, reach old age, and grow mighty in power?" They see their children established, their houses safe, their herds fruitful, their children dancing, and they spend their days in prosperity and go down to Sheol in peace, even though they tell God to depart from them. Job notes that one man dies in full vigor and another in bitterness, and both lie in the dust, and he tells his friends that travelers know the wicked are spared in the day of calamity, so "how then will you comfort me with empty nothings? There is nothing left of your answers but falsehood."',
      p: ['job'],
    },
    ...more,
  ],
};
