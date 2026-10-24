// Song of Songs at three reading levels. s = Simple, m = Moderate, d = Detailed, p = people.
// Book key verses are quoted from the ESV® Bible (English Standard Version®), © 2001 by Crossway. Used by permission. All rights reserved.
export default {
  book: {
    simple: 'A love poem celebrating the joy and commitment of married love.',
    moderate: 'The Song of Songs is a collection of love poems between a bride and her beloved, traditionally linked with Solomon. It celebrates romantic love, desire and faithfulness in marriage as a good gift from God. Many readers have also seen in it a picture of God\'s love for His people and Christ\'s love for the church.',
    detailed: 'The Song of Songs, "which is Solomon\'s," is a lyrical poem in which a young woman and her beloved express their longing and delight in each other, with occasional voices from the "daughters of Jerusalem." It moves through courtship, the wedding day and the deepening of married love, with times of separation and searching, celebrating physical attraction, mutual belonging ("My beloved is mine, and I am his") and exclusive commitment. Its refrain warns, "Do not stir up or awaken love until it pleases," honoring the right time and place for love. The book closes by declaring that love is strong as death and many waters cannot quench it, and Jewish and Christian readers alike have also read it as a picture of the covenant love between God and His people, fulfilled in Christ and His bride, the church.',
    verse: { ref: 'Song of Songs 8:7', text: 'Many waters cannot quench love, neither can floods drown it.' },
    themes: ['The goodness of married love', 'Mutual delight and belonging', 'Waiting for the right time', 'Love as strong as death'],
    keyVerses: [
      { ref: '2:16', text: 'My beloved is mine, and I am his.' },
      { ref: '8:6', text: 'Set me as a seal upon your heart, as a seal upon your arm, for love is strong as death.' },
    ],
  },
  sections: {
    1: { short: 'The bride and her beloved long for each other and court.' },
    4: { short: 'The wedding: the groom praises his bride, and they rejoice together.' },
    6: { short: 'Love tested by separation grows deeper and stronger than death.' },
  },
  chapters: [
    { // 1
      s: 'The bride longs for her beloved, and they praise each other.',
      m: 'The Song opens with the young woman longing for her beloved\'s kisses, saying his love is better than wine. She feels insecure about her sun-darkened skin and asks where he pastures his flock. The two then exchange words of admiration, calling each other beautiful.',
      d: 'The book is titled "The Song of Songs, which is Solomon\'s," meaning the greatest of songs, and opens with the woman\'s desire: "Let him kiss me with the kisses of his mouth! For your love is better than wine." She tells the daughters of Jerusalem that she is dark from working in her brothers\' vineyards, so that she has not kept her own vineyard, and she asks her beloved, the shepherd, where he pastures his flock at noon. He answers playfully and compares her to a mare among Pharaoh\'s chariots, praising her beauty and promising ornaments of gold. They exchange delight, she calling him a sachet of myrrh and a cluster of henna blossoms, and he saying, "Behold, you are beautiful, my love," as they picture their home among cedars and pines.',
      p: ['solomon'],
    },
    { // 2
      s: 'Spring has come, and the lovers delight in each other.',
      m: 'The bride calls herself a lily of the valleys, and her beloved says she is like a lily among brambles. She rests in his shade and says his banner over her is love, while charging others not to awaken love until it pleases. Her beloved invites her to come away, for winter is past and spring has come.',
      d: 'The woman says, "I am a rose of Sharon, a lily of the valleys," and he replies, "As a lily among brambles, so is my love among the young women." She delights to sit in his shade like an apple tree, and he brings her to the banqueting house, "and his banner over me was love," and she is lovesick and longs for his embrace. The first refrain warns the daughters of Jerusalem, "Do not stir up or awaken love until it pleases," guarding love until the proper time. Her beloved comes leaping over the mountains like a gazelle, calling, "Arise, my love, my beautiful one, and come away, for behold, the winter is past," and she declares, "My beloved is mine, and I am his," asking that the little foxes that spoil the vineyards be caught.',
      p: [],
    },
    { // 3
      s: 'The bride searches for her beloved, and a royal wedding procession arrives.',
      m: 'At night the bride searches the city for the one her soul loves, and when she finds him, she holds him and will not let him go. She again tells others not to awaken love until it pleases. Then King Solomon\'s grand wedding procession approaches, and the daughters of Zion are called to see him crowned on his wedding day.',
      d: 'On her bed by night the woman seeks the one her soul loves but does not find him, so she rises and searches the streets and squares, asking the watchmen, until she finds him and holds him and will not let him go until she brings him to her mother\'s house. The refrain repeats: "Do not stir up or awaken love until it pleases." Then a cloud of smoke appears in the wilderness, perfumed with myrrh and frankincense: it is Solomon\'s litter, surrounded by sixty mighty men armed with swords against terror by night. The litter is made of Lebanon wood, silver and gold, its interior inlaid with love, and the daughters of Zion are called to look on King Solomon with the crown his mother gave him on the day of his wedding, the day of the gladness of his heart.',
      p: ['solomon'],
    },
    { // 4
      s: 'The groom praises his bride\'s beauty on their wedding day.',
      m: 'The groom describes his bride\'s beauty from head to toe with rich imagery from nature. He tells her, "You are altogether beautiful, my love; there is no flaw in you," and invites her to come away with him. He calls her a locked garden, and she invites him to come into his garden.',
      d: '"Behold, you are beautiful, my love, behold, you are beautiful!" the groom begins, describing her eyes like doves behind her veil, her hair like a flock of goats, her teeth like newly shorn ewes, her lips like a scarlet thread, and her neck like David\'s tower. He declares, "You are altogether beautiful, my love; there is no flaw in you," and invites her to come with him from Lebanon, saying she has captivated his heart with one glance of her eyes. He calls her "my sister, my bride" and praises her love as better than wine and her fragrance above all spices. "A garden locked is my sister, my bride, a spring locked, a fountain sealed," he says, picturing her purity, and she answers, "Let my beloved come to his garden, and eat its choicest fruits."',
      p: ['david'],
    },
    { // 5
      s: 'The bride hesitates, her beloved leaves, and she searches for him.',
      m: 'The groom enjoys his garden, and friends urge the lovers to drink deeply of love. Later at night, the bride is slow to open when her beloved knocks, and when she does, he is gone. She searches the city, is mistreated by watchmen, and then describes her beloved\'s beauty to the daughters of Jerusalem, saying he is altogether desirable.',
      d: 'The groom says he has come to his garden and gathered his myrrh and honey, and a voice urges, "Eat, friends, drink, and be drunk with love!" Then the woman tells of a night when she slept but her heart was awake, and her beloved knocked, but she hesitated because she had already undressed and washed her feet. When she finally rose to open, "my beloved had turned and gone," and she searched and called but found him not, and the watchmen beat her and took her veil. She asks the daughters of Jerusalem to tell him she is sick with love, and when they ask what makes him special, she describes him as radiant and ruddy, with a head like the finest gold, eyes like doves, lips like lilies and arms like gold, concluding, "He is altogether desirable. This is my beloved and this is my friend."',
      p: [],
    },
    { // 6
      s: 'The lovers are reunited, and he praises her again.',
      m: 'The daughters ask where her beloved has gone, and she says he has gone down to his garden, declaring, "I am my beloved\'s and my beloved is mine." He praises her as awesome as an army with banners and unique among many women. Others also admire her, calling her fair as the moon and bright as the sun.',
      d: 'The daughters of Jerusalem offer to help seek her beloved, and she answers that he has gone down to his garden to graze and gather lilies, affirming, "I am my beloved\'s and my beloved is mine." He tells her she is beautiful as Tirzah, lovely as Jerusalem, "awesome as an army with banners," and asks her to turn away her eyes because they overwhelm him, repeating his earlier praise. Though there are sixty queens and eighty concubines and countless virgins, "my dove, my perfect one, is the only one," and even the queens praise her. Others ask, "Who is this who looks down like the dawn, beautiful as the moon, bright as the sun?" and she goes down to the nut orchard to see if the vines have budded, finding herself swept up in her love.',
      p: [],
    },
    { // 7
      s: 'The groom delights in his bride, and she invites him to the fields.',
      m: 'The groom praises his bride\'s beauty from her feet to her head and says how delightful she is. He compares her to a palm tree and longs for her love. She responds, "I am my beloved\'s, and his desire is for me," and invites him to go out to the fields and vineyards, where she will give him her love.',
      d: 'The bride is called to return so that others may look upon her, and the groom praises her from her graceful feet in sandals to her thighs, navel, waist, breasts, neck, eyes, nose and head, using images of jewels, wheat, twin fawns, ivory towers and Mount Carmel. "How beautiful and pleasant you are, O loved one, with all your delights!" he says, comparing her stature to a palm tree and saying he will climb it and take hold of its fruit. She answers, "I am my beloved\'s, and his desire is for me," a reversal of the curse in Genesis 3:16 where desire became a struggle. She invites him, "Come, my beloved, let us go out into the fields," to see whether the vines have budded and the pomegranates are in bloom, "There I will give you my love."',
      p: [],
    },
    { // 8
      s: 'Love is as strong as death, and many waters cannot quench it.',
      m: 'The bride wishes she could show her love openly and repeats the charge not to awaken love until it pleases. She asks her beloved to set her as a seal on his heart, for love is as strong as death and many waters cannot quench it. The Song ends with her brothers\' care for her, her own declaration of purity, and a final call for her beloved to hurry to her.',
      d: 'The woman wishes her beloved were like a brother so she could kiss him in public without being despised, and again she charges the daughters of Jerusalem, "Do not stir up or awaken love until it pleases." Coming up from the wilderness leaning on her beloved, she says, "Set me as a seal upon your heart, as a seal upon your arm, for love is strong as death, jealousy is fierce as the grave," its flashes like the very flame of the LORD. "Many waters cannot quench love, neither can floods drown it," and if someone offered all the wealth of his house for love, he would be utterly despised. Her brothers recall protecting their little sister until she was ready for marriage, she declares, "I was a wall," having kept herself pure, she contrasts Solomon\'s large vineyard with her own given freely to her beloved, and the Song ends with her call, "Make haste, my beloved, and be like a gazelle."',
      p: ['solomon'],
    },
  ],
};
