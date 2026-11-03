// World Religions › Buddhism, Islam and Hinduism.
// Shape of each entry (shared with judaism-sikhism-mormonism.js; read by pages/WorldReligions.jsx):
//   lead      { s, m }    Simple lead, and the Moderate/Detailed lead
//   about     string      a note on the name (Detailed only)
//   facts     [[label, value]]  the facts row under the title
//   origins   [{ when, t, text }]  the story in order (Simple shows the first sentence of each)
//   figures   [{ title?, note?, items: [{ name, years?, role }] }]  (Simple shows the first group's first 6)
//   branches  { intro, cols, rows: [{ name, color?, cells }], groups: [{ title, intro?, items: [{ t, text }], level? }] }
//             a group with level 'd' shows at Detailed only
//   beliefs   { intro?, items: [{ t, text }] }
//   practices { intro?, numbered?, items: [{ t, text, sub?: [{ t, text }] }], more?: { title, items } }
//   texts     { intro?, groups: [{ title?, note?, items: [{ t, text }] }] }
//   sources   [[label, url]]
// Every faith is described as its own followers understand it. Follower counts are rounded estimates.

const PEW = ['Pew Research Center, How the Global Religious Landscape Changed From 2010 to 2020 (June 2025)', 'https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/'];

export const BUDDHISM = {
  id: 'buddhism',
  name: 'Buddhism',
  family: 'dharmic',
  color: '#A98BDB',
  tagline: 'The path to awakening taught by the Buddha.',
  followers: '324 million',
  share: '4.1%',
  lead: {
    s: 'Buddhism began in northern India around the 5th century BCE with Siddhartha Gautama, the Buddha (“awakened one”). It teaches a path to end suffering and the cycle of rebirth.',
    m: 'Buddhism began in northern India around the 5th century BCE with the teachings of Siddhartha Gautama, the Buddha (“awakened one”). It had about 324 million followers in 2020, roughly 4% of the world, and was the only major religion to shrink in number between 2010 and 2020.',
  },
  facts: [['Began', 'c. 5th century BCE, India'], ['Founder', 'Siddhartha Gautama (the Buddha)'], ['Scriptures', 'Pali Canon; Mahayana sutras; Tibetan canon'], ['Followers', '324 million (2020)'], ['Main branches', 'Theravada, Mahayana, Vajrayana']],
  origins: [
    { when: 'c. 480 BCE', t: 'Birth and early life', text: 'Siddhartha was born a prince of the Shakya clan in Lumbini, in present-day Nepal. Tradition dates his life to c. 563–483 BCE; many scholars now place it closer to c. 480–400 BCE.' },
    { when: 'Age 29', t: 'The Four Sights', text: 'Raised in luxury, he saw an old man, a sick man, a corpse and a wandering holy man. Shaken by suffering, he left home at 29 to find a way to end it.' },
    { when: 'Six years', t: 'The Middle Way', text: 'After years of extreme fasting and self-denial, he rejected both indulgence and asceticism for a balanced path.' },
    { when: 'Age 35', t: 'Enlightenment', text: 'At about 35, meditating under the Bodhi tree at Bodh Gaya, he reached awakening. He gave his first sermon at the Deer Park in Sarnath and taught for about 45 years.' },
    { when: 'Age 80', t: 'Death', text: 'He died (entered parinirvana) at Kushinagar around age 80.' },
    { when: 'c. 250 BCE on', t: 'Spread', text: 'The Indian emperor Ashoka (r. c. 268–232 BCE) adopted Buddhism and sent missionaries across South Asia and to Sri Lanka. It then moved along the Silk Road to China (1st century CE), Korea, Japan (6th century), Tibet (7th–8th centuries) and Southeast Asia.' },
    { when: '13th c. – 1956', t: 'Decline and revival in India', text: 'Buddhism largely faded in India by the 13th century, after a Hindu revival and the destruction of great monasteries such as Nalanda. It returned in 1956 when B. R. Ambedkar led a mass conversion of Dalits (formerly “untouchables”).' },
  ],
  figures: [{
    items: [
      { name: 'Siddhartha Gautama', years: 'c. 5th c. BCE', role: 'The Buddha, founder of the tradition' },
      { name: 'Ananda', years: '5th c. BCE', role: 'The Buddha’s cousin and attendant, credited with memorizing his sermons' },
      { name: 'Sariputta and Moggallana', years: '5th c. BCE', role: 'His two chief disciples' },
      { name: 'Mahapajapati Gotami', years: '5th c. BCE', role: 'His aunt and foster mother, the first Buddhist nun' },
      { name: 'Emperor Ashoka', years: 'r. c. 268–232 BCE', role: 'Spread Buddhism across Asia' },
      { name: 'Nagarjuna', years: 'c. 150–250', role: 'Philosopher of “emptiness” and founder of the Madhyamaka school' },
      { name: 'Buddhaghosa', years: '5th century', role: 'The great Theravada commentator' },
      { name: 'Bodhidharma', years: '5th–6th century', role: 'Legendary founder of Chan (Zen) in China' },
      { name: 'Padmasambhava', years: '8th century', role: '“Guru Rinpoche,” who brought tantric Buddhism to Tibet' },
      { name: 'Shinran, Dogen and Nichiren', years: '13th century', role: 'Founders of major Japanese schools: True Pure Land, Soto Zen and Nichiren Buddhism' },
      { name: 'Tenzin Gyatso, the 14th Dalai Lama', years: 'b. 1935', role: 'Leading figure of Tibetan Buddhism' },
      { name: 'Thich Nhat Hanh', years: '1926–2022', role: 'Vietnamese Zen monk who popularized mindfulness in the West' },
    ],
  }],
  branches: {
    intro: 'Buddhism has three major branches. All share the Four Noble Truths, the Eightfold Path, karma and rebirth.',
    cols: ['Main regions', 'Spiritual ideal', 'Distinctive features'],
    rows: [
      { name: 'Theravada', sub: '“Teaching of the Elders”', color: '#4F7DC9', cells: ['Sri Lanka, Thailand, Myanmar, Cambodia, Laos', 'The arhat, who reaches nirvana through personal discipline', 'Oldest surviving school; Pali Canon only; strong monastic focus; insight (vipassana) meditation'] },
      { name: 'Mahayana', sub: '“Great Vehicle”', color: '#D9B26A', cells: ['China, Japan, Korea, Vietnam, Taiwan', 'The bodhisattva, who seeks awakening to free all beings', 'Later sutras; ideas of emptiness and Buddha-nature; many Buddhas and bodhisattvas to venerate'] },
      { name: 'Vajrayana', sub: '“Diamond Vehicle”', color: '#A98BDB', cells: ['Tibet, Bhutan, Mongolia, Nepal, parts of Russia', 'The bodhisattva, aiming for awakening in a single lifetime', 'Tantric rituals, mantras, mandalas, visualization; central role of the teacher (lama)'] },
    ],
    groups: [
      { title: 'Major Mahayana schools', items: [
        { t: 'Zen', text: 'Called Chan in China, Seon in Korea and Thiền in Vietnam. Awakening through seated meditation (zazen) and koans, with little reliance on texts. Japan’s two main lines are Soto and Rinzai.' },
        { t: 'Pure Land', text: 'Faith in Amitabha Buddha and chanting his name to be reborn in his Western Paradise. It is the most widely practiced form in East Asia.' },
        { t: 'Nichiren', text: 'Centers on the Lotus Sutra and chanting Nam-myoho-renge-kyo. Soka Gakkai is its largest modern lay movement.' },
        { t: 'Tiantai (Tendai) and Huayan (Kegon)', text: 'Philosophical schools built around the Lotus and Flower Garland sutras.' },
      ] },
      { title: 'Tibetan schools', items: [
        { t: 'Nyingma, Kagyu, Sakya and Gelug', text: 'The four main schools. Nyingma is the oldest; Gelug is the Dalai Lama’s school. Japan’s Shingon school is also tantric.' },
      ] },
      { title: 'Modern movements', level: 'd', items: [
        { t: 'Insight Meditation movement', text: 'Vipassana meditation taught to lay people, from Myanmar to centers worldwide.' },
        { t: 'Secular Buddhism', text: 'Keeps the meditation and ethics but often sets aside rebirth and ritual.' },
        { t: 'Navayana', text: 'Ambedkarite Buddhism in India, rooted in the 1956 conversion of Dalits.' },
      ] },
    ],
  },
  beliefs: {
    items: [
      { t: 'No creator God', text: 'Gods may exist, but they are also caught in the cycle of rebirth.' },
      { t: 'Three Marks of Existence', text: 'Everything is impermanent (anicca), unsatisfying (dukkha), and without a fixed self (anatta).' },
      { t: 'Four Noble Truths', text: 'Suffering exists; it is caused by craving and attachment; it can end; the Eightfold Path is the way to end it.' },
      { t: 'Noble Eightfold Path', text: 'Right view, intention, speech, action, livelihood, effort, mindfulness and concentration. These are grouped into wisdom, ethics and meditation.' },
      { t: 'Dependent origination', text: 'Everything arises from causes and conditions; nothing exists independently.' },
      { t: 'Karma and rebirth', text: 'Intentional actions shape future lives across six realms (gods, demigods, humans, animals, hungry ghosts, hell beings).' },
      { t: 'Nirvana', text: 'The “blowing out” of greed, hatred and delusion, and release from the cycle of rebirth.' },
    ],
  },
  practices: {
    items: [
      { t: 'Taking refuge', text: 'In the Three Jewels: the Buddha, the Dharma (teaching) and the Sangha (community).' },
      { t: 'Five Precepts', text: 'For laypeople: no killing, stealing, sexual misconduct, lying, or intoxicants.' },
      { t: 'Meditation', text: 'Calm-abiding (samatha), insight (vipassana), zazen and loving-kindness (metta).' },
      { t: 'Monastic life', text: 'Monks and nuns follow the Vinaya rules (227 for Theravada monks). In Theravada countries, laypeople earn merit by giving alms.' },
      { t: 'Chanting and devotion', text: 'Mantras, prayer wheels, bowing and offerings at shrines.' },
      { t: 'Pilgrimage', text: 'To four sites tied to the Buddha’s life: Lumbini, Bodh Gaya, Sarnath and Kushinagar.' },
      { t: 'Festivals', text: 'Vesak (the Buddha’s birth, awakening and death), Losar (Tibetan New Year), Obon (Japanese festival honoring ancestors), and monthly Uposatha observance days.' },
    ],
  },
  texts: {
    groups: [{
      items: [
        { t: 'Pali Canon (Tipitaka, “Three Baskets”)', text: 'The Theravada scripture, with monastic rules (Vinaya), discourses (Sutta), and philosophy (Abhidhamma). It includes the much-loved Dhammapada.' },
        { t: 'Mahayana sutras', text: 'The Lotus, Heart, Diamond, Flower Garland and Pure Land sutras.' },
        { t: 'Tibetan canon', text: 'The Kangyur (the Buddha’s words) and Tengyur (commentaries). The Bardo Thodol, or Tibetan Book of the Dead, guides the dying through the state between lives.' },
      ],
    }],
  },
  sources: [PEW],
};

export const ISLAM = {
  id: 'islam',
  name: 'Islam',
  family: 'abrahamic',
  color: '#4FB39A',
  tagline: 'Submission to the one God, revealed through the Prophet Muhammad.',
  followers: 'About 2 billion',
  share: '25.6%',
  lead: {
    s: 'Islam began in Arabia in the early 7th century CE with the Prophet Muhammad. It is the world’s second-largest religion and the fastest-growing.',
    m: 'Islam began in Arabia in the early 7th century CE with the Prophet Muhammad. With about 2 billion followers (25.6% of the world) in 2020, it is the second-largest religion and the fastest-growing one, adding more people between 2010 and 2020 than all other religions combined.',
  },
  about: 'The word Islam means “submission” to God; a Muslim is “one who submits.”',
  facts: [['Began', '610 CE, Mecca'], ['Founder', 'The Prophet Muhammad'], ['Scriptures', 'The Quran; Hadith'], ['Followers', 'About 2 billion (2020)'], ['Main branches', 'Sunni, Shia, Ibadi']],
  origins: [
    { when: 'c. 570', t: 'Birth and early life', text: 'Muhammad was born in Mecca around 570 CE into the Quraysh tribe. Orphaned young, he was raised by his grandfather and then his uncle Abu Talib, worked as a trader, and married the merchant Khadijah.' },
    { when: '610', t: 'First revelation', text: 'While meditating in the cave of Hira near Mecca, Muhammad reported a visit from the angel Gabriel (Jibril), who commanded him to “recite.” Revelations continued for about 23 years and became the Quran.' },
    { when: '610–622', t: 'Persecution in Mecca', text: 'His message of one God threatened Mecca’s elite, who profited from pilgrimages to the many idols kept at the Kaaba shrine. Early Muslims faced boycotts and violence.' },
    { when: '622', t: 'The Hijra', text: 'Muhammad and his followers migrated to Yathrib, renamed Medina. He became its religious and political leader. This migration marks Year 1 of the Islamic calendar.' },
    { when: '624–630', t: 'Conflict and return', text: 'Battles with Mecca followed (Badr 624, Uhud 625, the Trench 627). In 630, Muhammad took Mecca with little bloodshed, removed the idols, and rededicated the Kaaba to the one God.' },
    { when: '632', t: 'Death', text: 'He died in Medina after his Farewell Pilgrimage.' },
    { when: '632–1258', t: 'Expansion', text: 'Under the first four caliphs and then the Umayyad (661–750) and Abbasid (750–1258) dynasties, Islam spread from Spain to Central Asia. The Abbasid capital, Baghdad, became a center of science and philosophy during the Islamic Golden Age. The Ottoman, Safavid and Mughal empires later carried it further.' },
    { when: 'Today', t: 'Where Muslims live', text: 'About 59% of Muslims live in the Asia-Pacific region. Indonesia, Pakistan, India and Bangladesh have the largest Muslim populations; Arabs are a minority of Muslims worldwide.' },
  ],
  figures: [{
    note: 'Following common Muslim practice, people are shown by initials only, with no pictures.',
    items: [
      { name: 'Muhammad', years: 'c. 570–632', role: 'Regarded as the final prophet, the “Seal of the Prophets”' },
      { name: 'Khadijah', years: 'd. 619', role: 'Muhammad’s first wife and the first person to accept Islam' },
      { name: 'Abu Bakr', years: 'd. 634', role: 'First caliph' },
      { name: 'Umar', years: 'd. 644', role: 'Second caliph' },
      { name: 'Uthman', years: 'd. 656', role: 'Third caliph; oversaw the standard written text of the Quran' },
      { name: 'Ali', years: 'd. 661', role: 'Muhammad’s cousin and son-in-law; fourth caliph and the first Imam for Shia Muslims' },
      { name: 'Aisha', years: 'd. 678', role: 'Muhammad’s wife and a major source of reports about his life' },
      { name: 'Fatima', years: 'd. 632', role: 'His daughter, wife of Ali and mother of Hasan and Husayn' },
      { name: 'Husayn ibn Ali', years: '626–680', role: 'Muhammad’s grandson, killed at the Battle of Karbala; his death is central to Shia identity' },
      { name: 'Abu Hanifa, Malik, al-Shafi‘i and Ibn Hanbal', years: '8th–9th centuries', role: 'Founders of the four Sunni schools of law' },
      { name: 'Al-Bukhari', years: '810–870', role: 'Compiler of the most trusted Sunni hadith collection' },
      { name: 'Al-Ghazali', years: '1058–1111', role: 'Theologian who reconciled Sufi mysticism with mainstream Sunni thought' },
      { name: 'Rumi', years: '1207–1273', role: 'Persian Sufi poet whose followers founded the Mevlevi “whirling dervish” order' },
    ],
  }, {
    title: 'Earlier prophets',
    items: [
      { name: 'Adam, Noah, Abraham, Moses, David and Jesus', role: 'The Quran names 25 prophets, including Adam, Noah (Nuh), Abraham (Ibrahim), Moses (Musa), David (Dawud) and Jesus (Isa). Jesus is honored as a prophet and the Messiah, born of the Virgin Mary, but not as divine.' },
    ],
  }],
  branches: {
    intro: 'The main split began over who should lead the community after Muhammad’s death. Sunnis held that the community should choose a leader, and accepted Abu Bakr. Shia (from Shi‘at Ali, “the party of Ali”) held that leadership belonged to Muhammad’s family through Ali and his descendants.',
    cols: ['Share of Muslims (approx.)', 'Main regions', 'Distinctive beliefs'],
    rows: [
      { name: 'Sunni', color: '#4FB39A', cells: ['85–90%', 'Most of the Muslim world, including Indonesia, Pakistan, Egypt, Turkey, Saudi Arabia', 'Authority rests with scripture, the Prophet’s example and scholarly consensus; no infallible religious leaders'] },
      { name: 'Shia', color: '#8E6FD1', cells: ['10–15%', 'Iran, Iraq, Azerbaijan, Bahrain, Lebanon, parts of Pakistan, India and Yemen', 'Leadership passes through divinely guided Imams descended from Ali; strong clergy (ayatollahs)'] },
      { name: 'Ibadi', color: '#E8A56E', cells: ['Under 1%', 'Oman, plus pockets in Algeria, Libya and Zanzibar', 'Oldest surviving non-Sunni, non-Shia school; leader chosen for piety rather than lineage'] },
    ],
    groups: [
      { title: 'Sunni subgroups', items: [
        { t: 'Four schools of law (madhhabs)', text: 'Hanafi (Turkey, South and Central Asia, the Balkans), Maliki (North and West Africa), Shafi‘i (East Africa, Southeast Asia, Yemen) and Hanbali (Saudi Arabia, Qatar). Each is accepted as legitimate by the others.' },
        { t: 'Reform and revival movements', text: 'Salafism and Wahhabism (calling for a return to the practice of the earliest Muslims), and the Deobandi and Barelvi movements of South Asia.' },
      ] },
      { title: 'Shia subgroups', items: [
        { t: 'Twelvers (Ithna Ashari)', text: 'The largest Shia group. They believe in 12 Imams, the last of whom, the Mahdi, went into hiding in 874 and will return before the Day of Judgment.' },
        { t: 'Ismailis (Seveners)', text: 'Split over the seventh Imam. The largest branch, the Nizaris, follows a living Imam, the Aga Khan.' },
        { t: 'Zaydis (Fivers)', text: 'Concentrated in northern Yemen and closest to Sunnis in law.' },
        { t: 'Offshoots', text: 'The Alawites of Syria and the Alevis of Turkey have distinct beliefs and practices.' },
      ] },
      { title: 'Sufism', items: [
        { t: 'The mystical dimension', text: 'Sufism is not a separate sect but a mystical dimension found among both Sunnis and Shia. Sufis seek direct experience of God through orders (tariqas) led by spiritual masters. Well-known orders include the Qadiriyya, Naqshbandiyya, Chishtiyya and Mevlevi.' },
      ] },
      { title: 'Other movements', level: 'd', items: [
        { t: 'Ahmadiyya', text: 'Founded in 1889 in Punjab. Ahmadis consider themselves Muslim, but most mainstream scholars reject that claim and Pakistan’s constitution classifies them as non-Muslim.' },
        { t: 'Nation of Islam', text: 'Founded in the US in 1930; it differs from mainstream Islam on core doctrines.' },
      ] },
    ],
  },
  beliefs: {
    items: [
      { t: 'Tawhid', text: 'God (Allah, the Arabic word for God) is absolutely one, with no partners, children or incarnations.' },
      { t: 'Six Articles of Faith', text: 'Belief in God, angels, revealed books, prophets, the Day of Judgment, and divine decree (God’s knowledge and will over all events).' },
      { t: 'Prophethood', text: 'God sent prophets to every people, and Muhammad was the last.' },
      { t: 'The Quran', text: 'The literal, unaltered word of God, revealed in Arabic.' },
      { t: 'No original sin', text: 'People are born pure (fitra) and are responsible for their own deeds. God is merciful and forgives those who repent.' },
      { t: 'Afterlife', text: 'All people will be resurrected and judged, then enter Paradise (Jannah) or Hell (Jahannam).' },
      { t: 'Sharia', text: 'God’s law, covering worship, ethics, family life and society. Scholars interpret it through jurisprudence (fiqh).' },
      { t: 'Shia emphases', text: 'Shia add God’s justice and the Imamate to their core principles of faith.' },
    ],
  },
  practices: {
    intro: 'The Five Pillars are the core duties of every Muslim:',
    numbered: true,
    items: [
      { t: 'Shahada (declaration of faith)', text: '“There is no god but God, and Muhammad is the messenger of God.”' },
      { t: 'Salat (prayer)', text: 'Five daily prayers facing Mecca, at dawn, noon, afternoon, sunset and night, plus congregational prayer at the mosque on Friday.' },
      { t: 'Zakat (almsgiving)', text: 'Giving a set share of one’s wealth each year, usually 2.5% of savings, to the poor.' },
      { t: 'Sawm (fasting)', text: 'No food, drink or sex from dawn to sunset during the month of Ramadan.' },
      { t: 'Hajj (pilgrimage)', text: 'A journey to Mecca at least once in a lifetime for those physically and financially able.' },
    ],
    more: { title: 'Other practices and observances', items: [
      { t: 'Dietary law', text: 'Food must be halal; pork and alcohol are forbidden.' },
      { t: 'Modesty', text: 'In dress and behavior, for both men and women.' },
      { t: 'Eid al-Fitr and Eid al-Adha', text: 'Eid al-Fitr marks the end of Ramadan; Eid al-Adha marks the Hajj and Abraham’s willingness to sacrifice his son.' },
      { t: 'Ashura', text: 'Shia Muslims mourn Husayn’s death at Karbala. Many Sunnis fast on this day.' },
      { t: 'Mawlid', text: 'Celebration of the Prophet’s birthday, observed by many but not all Muslims.' },
    ] },
  },
  texts: {
    groups: [{
      items: [
        { t: 'The Quran', text: '114 chapters (surahs) of varying length, revealed between 610 and 632. Muslims consider only the Arabic original to be the Quran; translations are interpretations.' },
        { t: 'Hadith', text: 'Reports of Muhammad’s words and actions, which together form his Sunnah (example). Sunnis rely on six major collections, led by those of al-Bukhari and Muslim. Shia rely on their own collections, including the Four Books, and on the teachings of the Imams.' },
        { t: 'Earlier scriptures', text: 'Muslims honor the Torah (Tawrat), Psalms (Zabur) and Gospel (Injil) as revelations from God, but believe their texts changed over time.' },
      ],
    }],
  },
  sources: [PEW],
};

export const HINDUISM = {
  id: 'hinduism',
  name: 'Hinduism',
  family: 'dharmic',
  color: '#E07A9A',
  tagline: 'Sanatana Dharma, “the eternal way.”',
  followers: '1.2 billion',
  share: '14.9%',
  lead: {
    s: 'Hinduism has no single founder or founding date. It grew over more than 3,000 years from the religious traditions of India, and many Hindus call it Sanatana Dharma, “the eternal way.”',
    m: 'Hinduism has no single founder, creed or founding date: it grew over more than 3,000 years from the religious traditions of the Indian subcontinent, and many Hindus call it Sanatana Dharma, “the eternal way.” It had about 1.2 billion followers (14.9% of the world) in 2020, 95% of whom live in India; India and Nepal are the only Hindu-majority countries.',
  },
  about: 'The word Hindu comes from the Persian name for the Indus (Sindhu) River.',
  facts: [['Began', 'Developed from c. 1500 BCE, India'], ['Founder', 'No single founder'], ['Scriptures', 'Vedas, Upanishads, Bhagavad Gita, epics'], ['Followers', '1.2 billion (2020)'], ['Main traditions', 'Vaishnavism, Shaivism, Shaktism, Smartism']],
  origins: [
    { when: 'c. 2600–1900 BCE', t: 'Indus Valley Civilization', text: 'Some scholars see possible early traces of later Hindu practice, such as ritual bathing. Because its script is undeciphered, its religion remains uncertain.' },
    { when: 'c. 1500–500 BCE', t: 'Vedic period', text: 'Sanskrit-speaking peoples composed the Vedas. Worship centered on fire sacrifices (yajna) to gods such as Indra (storms) and Agni (fire), performed by Brahmin priests.' },
    { when: 'c. 800–200 BCE', t: 'The Upanishads', text: 'A philosophical turn inward, introducing the ideas of Brahman, the inner self (atman), karma, rebirth and liberation.' },
    { when: 'c. 500 BCE – 500 CE', t: 'Epic and Puranic period', text: 'The Ramayana and Mahabharata were composed. Devotion to Vishnu, Shiva and the Goddess grew, and temple worship gradually replaced Vedic sacrifice.' },
    { when: 'c. 6th–17th c.', t: 'Bhakti movement', text: 'Devotional poet-saints in Tamil South India spread a message of personal love for God, open to all castes. The movement spread north through poets such as Mirabai and Tulsidas.' },
    { when: '8th c. on', t: 'Medieval era', text: 'The philosopher Adi Shankara (8th century) revived Vedanta philosophy. Hinduism coexisted, and at times clashed, with Islam under the Delhi Sultanate and Mughal Empire.' },
    { when: '19th c.', t: 'Modern reform', text: 'Reformers such as Ram Mohan Roy and Dayananda Saraswati challenged practices like caste discrimination. Swami Vivekananda introduced Hindu thought to the West at Chicago’s Parliament of the World’s Religions in 1893.' },
    { when: 'Today', t: 'Diaspora', text: 'Large Hindu communities live in Nepal, Bangladesh, Sri Lanka, Bali (Indonesia), Mauritius, Fiji, the Caribbean, the UK and the US.' },
  ],
  figures: [{
    title: 'Divine figures',
    note: 'Hindus may worship many deities, often seen as forms of one ultimate reality.',
    items: [
      { name: 'The Trimurti', role: 'Brahma the creator, Vishnu the preserver, and Shiva the destroyer and renewer' },
      { name: 'Rama and Krishna', role: 'Vishnu’s best-known avatars: Rama, hero of the Ramayana, and Krishna, teacher of the Bhagavad Gita' },
      { name: 'Devi (the Goddess)', role: 'The divine feminine, worshipped as Durga (warrior), Kali (time and destruction), Lakshmi (wealth), Saraswati (learning) and Parvati (Shiva’s consort)' },
      { name: 'Ganesha', role: 'Elephant-headed remover of obstacles, honored at the start of any new venture' },
      { name: 'Hanuman', role: 'The monkey god, a model of devotion to Rama' },
    ],
  }, {
    title: 'Human teachers',
    items: [
      { name: 'Vyasa and Valmiki', years: 'Ancient', role: 'Legendary authors of the Mahabharata and Ramayana' },
      { name: 'Adi Shankara', years: '8th century', role: 'Taught Advaita (non-dual) Vedanta' },
      { name: 'Ramanuja and Madhva', years: '11th–13th centuries', role: 'Founders of devotional Vedanta schools centered on Vishnu' },
      { name: 'Chaitanya Mahaprabhu', years: '1486–1534', role: 'Bengali saint of ecstatic devotion to Krishna' },
      { name: 'Ramakrishna and Swami Vivekananda', years: '1836–1886 · 1863–1902', role: 'Mystic and his disciple, who taught that all religions lead to God' },
      { name: 'Mahatma Gandhi', years: '1869–1948', role: 'Drew on the Bhagavad Gita and non-violence (ahimsa) to lead India’s independence movement' },
      { name: 'A. C. Bhaktivedanta Swami Prabhupada', years: '1896–1977', role: 'Founded the International Society for Krishna Consciousness (ISKCON, the “Hare Krishnas”) in 1966' },
    ],
  }],
  branches: {
    title: 'Traditions',
    intro: 'Hinduism has no central authority such as a pope. Instead, it has several major devotional traditions that overlap, and many Hindus worship deities from more than one.',
    cols: ['Supreme deity', 'Main regions', 'Distinctive features'],
    rows: [
      { name: 'Vaishnavism', color: '#7FA4E0', cells: ['Vishnu and his avatars, especially Krishna and Rama', 'Throughout India; the largest tradition', 'Loving devotion (bhakti); includes ISKCON and the Swaminarayan movement'] },
      { name: 'Shaivism', color: '#A98BDB', cells: ['Shiva', 'South India (especially Tamil Nadu), Kashmir, Nepal', 'Yoga, asceticism, worship of the lingam symbol; includes Kashmir Shaivism and the Lingayats'] },
      { name: 'Shaktism', color: '#E07A9A', cells: ['Devi, the Mother Goddess', 'Bengal, Assam, Odisha, Nepal', 'Worship of divine feminine power (shakti); tantric rituals; Durga Puja festival'] },
      { name: 'Smartism', color: '#D9B26A', cells: ['Five deities (Vishnu, Shiva, Devi, Ganesha, Surya) as equal forms of one Brahman', 'Across India, especially Brahmin families', 'Associated with Adi Shankara and Advaita philosophy'] },
    ],
    groups: [
      { title: 'Philosophical schools', intro: 'Classical Hinduism recognizes six orthodox schools. The most influential, Vedanta, has three main branches:', items: [
        { t: 'Advaita (non-dualism)', text: 'The self and Brahman are identical; the world of separate things is ultimately illusion (maya).' },
        { t: 'Vishishtadvaita (qualified non-dualism)', text: 'Souls are real parts of God but not identical to God.' },
        { t: 'Dvaita (dualism)', text: 'God and souls are eternally distinct.' },
      ] },
      { title: 'Modern movements', level: 'd', items: [
        { t: 'Reform and devotional movements', text: 'The Arya Samaj, the Ramakrishna Mission, ISKCON, and the Swaminarayan (BAPS) movement.' },
      ] },
    ],
  },
  beliefs: {
    items: [
      { t: 'Brahman', text: 'The one ultimate reality behind everything. It can be understood as an impersonal absolute or as a personal God such as Vishnu, Shiva or Devi.' },
      { t: 'Atman', text: 'The eternal true self within every living being.' },
      { t: 'Samsara', text: 'The endless cycle of birth, death and rebirth.' },
      { t: 'Karma', text: 'Every action has consequences that shape this life and future ones.' },
      { t: 'Moksha', text: 'Liberation from samsara, the highest goal of life.' },
      { t: 'Dharma', text: 'Duty, righteousness and cosmic order. One’s dharma depends on stage of life and role in society.' },
      { t: 'Four goals of life', text: 'Dharma (duty), artha (prosperity), kama (pleasure and love) and moksha (liberation).' },
      { t: 'Four stages of life', text: 'Student, householder, retiree and renunciant.' },
      { t: 'Four paths to liberation', text: 'Knowledge (jnana), devotion (bhakti), selfless action (karma) and meditation (raja yoga).' },
      { t: 'Cyclical time', text: 'The universe is created, destroyed and recreated in vast cycles. The current age is the Kali Yuga, an age of decline.' },
      { t: 'Ahimsa', text: 'Non-violence toward all living beings. Cows are especially revered.' },
      { t: 'Caste', text: 'Traditional texts describe four social classes (varnas), with many birth-based groups (jatis) within them. Caste discrimination was outlawed by India’s 1950 constitution, and many Hindu reformers reject caste hierarchy.' },
    ],
  },
  practices: {
    items: [
      { t: 'Puja (worship)', text: 'Offering flowers, food, incense and light (aarti) to images of deities at home shrines and temples.' },
      { t: 'Darshan', text: '“Seeing” the deity in a temple and being seen in return, a central act of devotion.' },
      { t: 'Mantras', text: 'Sacred sounds, such as Om and the Gayatri Mantra.' },
      { t: 'Yoga and meditation', text: 'Spiritual disciplines aimed at uniting the self with the divine.' },
      { t: 'Rites of passage (samskaras)', text: 'Naming ceremonies, the sacred thread ceremony, weddings in which the couple walks around a sacred fire, and cremation at death.' },
      { t: 'Pilgrimage', text: 'To holy sites such as Varanasi on the Ganges River. The Kumbh Mela draws tens of millions to bathe in sacred rivers.' },
      { t: 'Festivals', text: 'Diwali (festival of lights), Holi (festival of colors), Navaratri and Durga Puja (the Goddess), Janmashtami (Krishna’s birth) and Maha Shivaratri (Shiva).' },
      { t: 'Diet', text: 'Many Hindus are vegetarian, and most avoid beef.' },
    ],
  },
  texts: {
    intro: 'Hindu scriptures fall into two categories.',
    groups: [
      { title: 'Shruti (“what is heard”)', note: 'Revealed truth, the most authoritative.', items: [
        { t: 'The four Vedas', text: 'The Rigveda (oldest, with 1,028 hymns), Samaveda, Yajurveda and Atharvaveda.' },
        { t: 'The Upanishads', text: 'Philosophical texts at the end of the Vedas.' },
      ] },
      { title: 'Smriti (“what is remembered”)', note: 'Tradition, written by human authors.', items: [
        { t: 'The Mahabharata', text: 'One of the longest poems ever written, about a war between two branches of a royal family. It includes the Bhagavad Gita, Krishna’s teaching to the warrior Arjuna on duty and devotion.' },
        { t: 'The Ramayana', text: 'The story of Prince Rama’s rescue of his wife Sita from the demon king Ravana.' },
        { t: 'The Puranas', text: 'Collections of myths, genealogies and devotion, such as the Bhagavata Purana.' },
        { t: 'The Dharma Shastras', text: 'Law codes such as the Laws of Manu.' },
        { t: 'The Yoga Sutras of Patanjali', text: 'The classic text on yoga and meditation.' },
      ] },
    ],
  },
  sources: [PEW],
};
