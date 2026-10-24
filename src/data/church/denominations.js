// Church History › Denominations: the family tree data.
// 48 groups: the Early Church trunk, 11 main families and their sub-branches.
//   from   — the group it branched from        start — year it began (AD)
//   size   — rough size today, 1 (small) to 5 (largest); sets the line thickness
//   fam    — 'east' | 'cath' | 'prot' (the color key)
//   sub    — a sub-branch (shown lighter)       also  — a second tradition that strongly shaped it (dashed line)
//   short  — a shorter name for the tree's labels on narrower screens
//   one    — the one-line summary used on the phone and at the Simple level
//   why    — why it split / how it began        today — where it is now (membership rounded, approximate)
// Each tradition is described in its own terms, without taking sides.

export const DENOMS = [
  {
    id: "early", name: "Early Church", from: null, start: 33, years: "AD 33 – 1054", color: "#E3C285", size: 5, fam: "cath",
    one: "Pentecost in Jerusalem: the church begins (Acts 2)",
    why: "The church begins at Pentecost in Jerusalem (Acts 2) and spreads across the Roman Empire despite persecution. After Constantine’s Edict of Milan (313) it can worship openly, and councils such as Nicaea (325) agree the creeds. For a thousand years there is broadly one church, led by bishops in five great centers: Rome, Constantinople, Alexandria, Antioch and Jerusalem.",
    people: ["Peter","Paul","Ignatius of Antioch","Athanasius","Augustine"],
    beliefs: [
      ["Authority","The Scriptures, the apostles’ teaching handed down, and church councils"],
      ["Creeds","Apostles’ Creed; Nicene Creed (325, expanded 381)"],
      ["Leadership","Bishops, priests (elders) and deacons"],
      ["Worship","Weekly Eucharist (Lord’s Supper) on the Lord’s Day"],
    ],
    today: "The shared heritage of all the branches below.",
    verses: ["Acts 2:42","Matthew 28:19–20"],
  },
  {
    id: "coe", name: "Church of the East", from: "early", start: 431, years: "431 – today", color: "#C0574A", size: 1, fam: "east",
    one: "Churches in Persia don’t accept the Council of Ephesus",
    why: "After the Council of Ephesus (431) condemned Nestorius, the churches in the Persian Empire, outside Rome’s borders, did not accept its ruling. They stressed the full humanity and full divinity of Christ as distinct, and reject the label “Nestorian.” Their isolation from Rome was political as much as theological.",
    people: ["Nestorius (claimed)","Mar Aba I","Timothy I"],
    beliefs: [
      ["Authority","Scripture and their own synods and fathers"],
      ["Christ","Two natures in Christ, described in Syriac terms"],
      ["Leadership","A Catholicos-Patriarch and bishops"],
      ["Worship","Ancient Syriac liturgy (Addai and Mari)"],
    ],
    today: "Missionaries reached India and China by the 600s (the Xi’an Stele, 781). Today it is the Assyrian Church of the East and related bodies, centered in Iraq, Iran and the diaspora. A few hundred thousand members.",
    verses: ["John 1:14"],
  },
  {
    id: "oo", name: "Oriental Orthodox", from: "early", start: 451, years: "451 – today", color: "#D98A4C", size: 3, fam: "east",
    one: "Egypt, Syria and Armenia reject Chalcedon’s wording about Christ",
    why: "The Council of Chalcedon (451) defined Christ as one person “in two natures.” Churches in Egypt, Syria and Armenia held to Cyril of Alexandria’s phrase “one incarnate nature of God the Word” (miaphysite). They felt Chalcedon went too far. Tension with the imperial church in Constantinople deepened the divide.",
    people: ["Cyril of Alexandria","Dioscorus","Severus of Antioch"],
    beliefs: [
      ["Authority","Scripture, Tradition and the first three councils"],
      ["Christ","One united divine-human nature, without mixing or confusion"],
      ["Leadership","Patriarchs of each national church"],
      ["Worship","Ancient liturgies; long fasts; icons"],
    ],
    today: "Coptic (Egypt), Ethiopian, Eritrean, Syriac, Armenian and Malankara (India) churches. About 60 million members (approx.).",
    verses: ["John 1:14","Colossians 2:9"],
  },
  {
    id: "coptic", name: "Coptic Orthodox", from: "oo", start: 451, years: "451 – today", color: "#E0A06A", size: 2, fam: "east", sub: true,
    one: "The ancient church of Egypt",
    why: "The church of Egypt, which traces its founding to Mark the Gospel writer. It is led by the Pope of Alexandria and kept its faith through centuries of Muslim rule.",
    people: ["Athanasius","Cyril of Alexandria","Pope Shenouda III"],
    today: "Egypt and a worldwide diaspora; about 10 million members (approx.).",
  },
  {
    id: "armenian", name: "Armenian Apostolic", from: "oo", start: 506, years: "506 – today", color: "#C97A55", size: 2, fam: "east", sub: true,
    one: "Armenia formally rejects Chalcedon at Dvin",
    why: "Armenia became the first Christian kingdom in 301 under Gregory the Illuminator. At the Council of Dvin (506) its church formally rejected Chalcedon.",
    people: ["Gregory the Illuminator","Mesrop Mashtots"],
    today: "Armenia and a large diaspora; several million members (approx.).",
  },
  {
    id: "syriac", name: "Syriac Orthodox", from: "oo", start: 540, years: "540 – today", color: "#B86A48", size: 1, fam: "east", sub: true,
    one: "Jacob Baradaeus ordains a new line of Syriac bishops",
    why: "After miaphysite bishops in Syria were removed from office, Jacob Baradaeus secretly ordained a new line of clergy (540s). That line became the Syriac Orthodox Church of Antioch.",
    people: ["Severus of Antioch","Jacob Baradaeus"],
    today: "Syria, Iraq, Turkey, India and the diaspora.",
  },
  {
    id: "eo", name: "Eastern Orthodox", from: "early", start: 1054, years: "1054 – today", color: "#A98BDB", size: 4, fam: "east",
    one: "East and West split over the pope’s authority and the creed",
    why: "In the Great Schism of 1054, Rome’s legate and the Patriarch of Constantinople excommunicated each other. Underneath were centuries of drift. The East rejected the pope’s claim to rule over the whole church, and it rejected the West adding “and the Son” (filioque) to the Nicene Creed. Language, culture and politics differed too. The Crusaders’ sack of Constantinople (1204) hardened the break.",
    people: ["Photius","Michael Cerularius","Gregory Palamas"],
    beliefs: [
      ["Authority","Holy Tradition, of which Scripture is the heart; the seven councils"],
      ["Salvation","Theosis: being united with God by grace"],
      ["Leadership","Self-governing churches led by patriarchs; no single head"],
      ["Worship","Divine Liturgy, icons; married parish priests allowed"],
    ],
    today: "Greek, Russian, Serbian, Romanian, Antiochian and other churches. About 220 million members (approx.).",
    verses: ["2 Peter 1:4","2 Thessalonians 2:15"],
  },
  {
    id: "rc", name: "Roman Catholic", from: "early", start: 1054, years: "1054 – today", color: "#D9B26A", size: 5, fam: "cath",
    one: "The Latin West carries on under the Bishop of Rome",
    why: "The Latin-speaking West continued under the Bishop of Rome, whom Catholics see as the successor of Peter. The Council of Trent (1545–63) answered the Reformation and set out Catholic teaching. Vatican II (1962–65) brought Mass in local languages and a new openness to other Christians.",
    people: ["Gregory the Great","Thomas Aquinas","Francis of Assisi","Ignatius of Loyola"],
    beliefs: [
      ["Authority","Scripture and Tradition, interpreted by the Magisterium (pope and bishops)"],
      ["Salvation","By grace, received through faith and the sacraments"],
      ["Sacraments","Seven; in the Mass the bread and wine become Christ’s body and blood"],
      ["Leadership","The pope, bishops and priests (celibate in the Latin rite)"],
    ],
    today: "The largest Christian church, with about 1.4 billion members (approx.) across every continent.",
    verses: ["Matthew 16:18–19","John 6:53–56"],
  },
  {
    id: "maronite", name: "Maronite Catholic", from: "rc", start: 1182, years: "1182 – today", color: "#E8C88A", size: 1, fam: "cath", sub: true,
    one: "Lebanon’s Maronites reaffirm their union with Rome",
    why: "A Syriac-rite church of Lebanon named after Saint Maron. It says it never broke with Rome, and its union was formally reaffirmed in 1182. It keeps its own liturgy and married priests.",
    people: ["Saint Maron"],
    today: "Lebanon and the diaspora; one of the Eastern Catholic churches.",
  },
  {
    id: "serbian", name: "Serbian Orthodox", from: "eo", start: 1219, years: "1219 – today", color: "#BBA2E6", size: 1, fam: "east", sub: true,
    one: "Saint Sava’s Serbian church becomes self-governing",
    why: "Saint Sava obtained self-government for the Serbian church from Constantinople in 1219. He became its first archbishop.",
    people: ["Saint Sava"],
    today: "Serbia and the Balkans.",
  },
  {
    id: "russian", name: "Russian Orthodox", from: "eo", start: 1448, years: "1448 – today", color: "#9475D0", size: 3, fam: "east", sub: true,
    one: "Russian bishops choose their own leader",
    why: "Russian bishops chose their own metropolitan in 1448, after Constantinople briefly agreed to reunion with Rome at Florence. Moscow became a patriarchate in 1589.",
    people: ["Sergius of Radonezh","Seraphim of Sarov"],
    today: "The largest Orthodox church, with tens of millions of members.",
  },
  {
    id: "moravian", name: "Moravian (Hussite)", from: "rc", start: 1457, years: "1457 – today", color: "#7FA4E0", size: 1, fam: "cath", sub: true,
    one: "Followers of Jan Hus form the Unity of the Brethren",
    why: "Followers of Jan Hus, who was burned in 1415 for challenging church abuses, formed the Unity of the Brethren in 1457, a century before Luther. It was renewed at Herrnhut in 1722 and became a pioneer of Protestant missions.",
    people: ["Jan Hus","Count Zinzendorf"],
    today: "A small worldwide church; its greatest influence came through John Wesley.",
  },
  {
    id: "luth", name: "Lutheran", from: "rc", start: 1517, years: "1517 – today", color: "#4F7DC9", size: 3, fam: "prot",
    one: "Luther’s 95 Theses: saved by grace through faith",
    why: "In 1517 Martin Luther posted his 95 Theses against the sale of indulgences. He came to believe that sinners are made right with God by grace alone through faith alone, and that Scripture outranks popes and councils. He refused to recant at the Diet of Worms (1521) and was excommunicated. His followers organized separate churches.",
    people: ["Martin Luther","Philip Melanchthon","Katharina von Bora"],
    beliefs: [
      ["Authority","Scripture alone as the final rule; the Augsburg Confession (1530)"],
      ["Salvation","Justification by grace through faith, apart from works"],
      ["Sacraments","Baptism (including infants) and the Lord’s Supper: Christ truly present"],
      ["Worship","Liturgical, with hymns sung by the congregation"],
    ],
    today: "Germany, Scandinavia, the US, and fast-growing churches in Ethiopia and Tanzania. About 75 million members (approx.).",
    verses: ["Romans 1:17","Ephesians 2:8–9"],
  },
  {
    id: "ref", name: "Reformed", from: "rc", start: 1523, years: "1520s – today", color: "#3FA7A0", size: 3, fam: "prot",
    one: "Zwingli and Calvin: reform shaped by God’s sovereignty",
    why: "Zwingli in Zürich and later John Calvin in Geneva pushed reform further than Luther. At Marburg (1529) Luther and Zwingli could not agree on the Lord’s Supper (Christ bodily present, or spiritually present). John Knox brought this tradition to Scotland as Presbyterianism (1560).",
    people: ["Ulrich Zwingli","John Calvin","John Knox"],
    beliefs: [
      ["Authority","Scripture alone; the Westminster and Heidelberg confessions"],
      ["Salvation","God’s sovereign grace; election (predestination)"],
      ["Sacraments","Baptism (including infants) and the Lord’s Supper as a spiritual feeding"],
      ["Leadership","Elected elders (presbyters) in local and regional bodies"],
    ],
    today: "Presbyterian, Reformed and Congregational churches in Scotland, the Netherlands, Korea, the US and Africa. Roughly 75 million members (approx.).",
    verses: ["Ephesians 1:4–5","Romans 8:29–30"],
  },
  {
    id: "ana", name: "Anabaptist", from: "ref", start: 1525, years: "1525 – today", color: "#8FA05A", size: 1, fam: "prot",
    one: "Baptism for believers only; a church apart from the state",
    why: "In Zürich some of Zwingli’s students believed baptism should follow a personal confession of faith. In January 1525 they baptized one another as adults (“ana-baptist” means re-baptizer). They also sought a church separate from the state and refused to take up arms. Catholics and Protestants alike persecuted them.",
    people: ["Conrad Grebel","Felix Manz","Menno Simons"],
    beliefs: [
      ["Authority","Scripture, read together as a community"],
      ["Baptism","Only for believers who confess faith"],
      ["Life","Following Jesus’ Sermon on the Mount: nonviolence, simplicity"],
      ["Church & state","Separate; many decline oaths and public office"],
    ],
    today: "Mennonites, Amish, Hutterites and Brethren. About 2 million members (approx.).",
    verses: ["Matthew 5:38–44","Acts 8:36–38"],
  },
  {
    id: "hutterite", name: "Hutterites", from: "ana", start: 1528, years: "1528 – today", color: "#A8B86E", size: 1, fam: "prot", sub: true,
    one: "Anabaptists who share all property in common",
    why: "Anabaptists who share all property in common, following Acts 2:44, under Jakob Hutter.",
    people: ["Jakob Hutter"],
    today: "Colonies in Canada and the northern US.",
  },
  {
    id: "ang", name: "Anglican", from: "rc", start: 1534, years: "1534 – today", color: "#9DB4E0", size: 3, fam: "prot",
    one: "Henry VIII breaks with Rome: the Church of England",
    why: "When the pope refused to annul Henry VIII’s marriage to Catherine of Aragon, Parliament declared the king head of the Church of England (Act of Supremacy, 1534). Under Thomas Cranmer the church adopted Protestant teaching and the Book of Common Prayer (1549). It kept bishops and much of the older liturgy, a “middle way.”",
    people: ["Thomas Cranmer","Elizabeth I","Richard Hooker"],
    beliefs: [
      ["Authority","Scripture first, read with tradition and reason; the Thirty-Nine Articles"],
      ["Worship","The Book of Common Prayer; ranges from very formal to evangelical"],
      ["Sacraments","Baptism and the Lord’s Supper (Holy Communion)"],
      ["Leadership","Bishops; the Archbishop of Canterbury as a symbolic head"],
    ],
    today: "The Anglican Communion, including the Episcopal Church in the US. Its largest churches are now in Nigeria and Uganda. About 85 million members (approx.).",
    verses: ["1 Corinthians 14:40"],
  },
  {
    id: "menno", name: "Mennonites", from: "ana", start: 1536, years: "1536 – today", color: "#7C8C48", size: 1, fam: "prot", sub: true,
    one: "Menno Simons gathers scattered Anabaptists",
    why: "Menno Simons, a former Catholic priest, joined the Anabaptists in 1536. He gathered the scattered, persecuted groups, which took his name.",
    people: ["Menno Simons"],
    today: "Worldwide, with large churches in Africa and the Americas.",
  },
  {
    id: "pres", name: "Presbyterian", from: "ref", start: 1560, years: "1560 – today", color: "#5CC0B8", size: 2, fam: "prot", sub: true,
    one: "John Knox brings Calvin’s teaching to Scotland",
    why: "John Knox brought Calvin’s teaching to Scotland. The Scots Confession (1560) founded a church governed by elders (presbyters) instead of bishops.",
    people: ["John Knox","Andrew Melville"],
    today: "Scotland, the US, Korea (one of the largest Presbyterian communities), Brazil and Africa.",
  },
  {
    id: "dutch", name: "Dutch Reformed", from: "ref", start: 1571, years: "1571 – today", color: "#2E8C86", size: 1, fam: "prot", sub: true,
    one: "Reformed churches organize in the Netherlands",
    why: "Reformed churches in the Netherlands organized at the Synod of Emden (1571). The Synod of Dort (1618–19) defined Reformed teaching on grace against the Remonstrants.",
    people: ["Abraham Kuyper"],
    today: "The Netherlands, South Africa and the US (Reformed Church in America, Christian Reformed Church).",
  },
  {
    id: "cong", name: "Puritans / Congregational", short: "Puritans / Congreg.", from: "ang", start: 1582, years: "1582 – today", color: "#8AA3D8", size: 2, fam: "prot", sub: true,
    one: "Puritans and Separatists want a purer church",
    why: "Puritans wanted to purify the Church of England further. Separatists such as Robert Browne (1582), and later the Pilgrims (1620), formed congregations that governed themselves.",
    people: ["Robert Browne","William Bradford","Jonathan Edwards"],
    today: "United Church of Christ and Congregational churches; its ideas shaped early America.",
  },
  {
    id: "ugcc", name: "Ukrainian Greek Catholic", short: "Ukrainian Greek Cath.", from: "rc", start: 1596, years: "1596 – today", color: "#C9A55C", size: 1, fam: "cath", sub: true, also: "eo",
    one: "Bishops in Ukraine accept the pope but keep their liturgy",
    why: "At the Union of Brest (1596), Orthodox bishops in Poland-Lithuania accepted the pope’s authority. They kept their Byzantine liturgy and customs.",
    people: ["Josaphat Kuntsevych","Andrey Sheptytsky"],
    today: "The largest Eastern Catholic church; Ukraine and the diaspora.",
  },
  {
    id: "bap", name: "Baptist", from: "cong", start: 1609, years: "1609 – today", color: "#5FB6D9", size: 3, fam: "prot", also: "ana",
    one: "English Separatists baptize believers only",
    why: "English Separatists, who wanted a purer church than the Church of England, fled to Amsterdam. There, in 1609, John Smyth and Thomas Helwys concluded that only believers should be baptized, and they formed a new congregation. Helwys also argued for religious liberty for all.",
    people: ["John Smyth","Thomas Helwys","Charles Spurgeon"],
    beliefs: [
      ["Authority","Scripture alone; each believer can read and interpret it"],
      ["Baptism","Believers only, by full immersion"],
      ["Leadership","Each congregation governs itself"],
      ["Church & state","Strong defenders of religious freedom"],
    ],
    today: "The Southern Baptist Convention and many other unions worldwide, strong in the US, Brazil, Nigeria and India. About 100 million members (approx.).",
    verses: ["Romans 6:3–4","Acts 2:41"],
  },
  {
    id: "partic", name: "Particular Baptists", from: "bap", start: 1638, years: "1638 – today", color: "#3E98C2", size: 1, fam: "prot", sub: true,
    one: "Calvinist Baptists form churches in London",
    why: "Baptists who held Calvinist teaching on grace formed churches in London from 1638 and issued the London Baptist Confession (1644, 1689).",
    people: ["Charles Spurgeon","William Carey"],
    today: "Reformed Baptist churches worldwide.",
  },
  {
    id: "quaker", name: "Quakers (Friends)", from: "cong", start: 1652, years: "1652 – today", color: "#B4C4E8", size: 1, fam: "prot", sub: true,
    one: "George Fox and the “inner light”",
    why: "George Fox taught that every person can know God’s “inner light” directly. Friends worship in silence, without clergy or sacraments, and are known for pacifism and anti-slavery work.",
    people: ["George Fox","William Penn"],
    today: "United States, the UK and East Africa (Kenya).",
  },
  {
    id: "malankara", name: "Malankara (India)", short: "Malankara (India)", from: "syriac", start: 1665, years: "1665 – today", color: "#CF8E6A", size: 1, fam: "east", sub: true,
    one: "Thomas Christians of India join the Syriac church",
    why: "The St Thomas Christians of Kerala trace their faith to the apostle Thomas. After Portuguese pressure to adopt Latin ways, part of the community joined the Syriac Orthodox Church in 1665.",
    people: ["Thomas the Apostle (tradition)"],
    today: "Kerala, India; a few million members across several related churches (approx.).",
  },
  {
    id: "amish", name: "Amish", from: "menno", start: 1693, years: "1693 – today", color: "#A3B26A", size: 1, fam: "prot", sub: true,
    one: "Jakob Ammann’s stricter Mennonites",
    why: "Jakob Ammann led a split from the Swiss Mennonites in 1693 over stricter church discipline and separation from the world.",
    people: ["Jakob Ammann"],
    today: "Rural communities in the US and Canada, growing quickly.",
  },
  {
    id: "brethren", name: "Church of the Brethren", from: "ana", start: 1708, years: "1708 – today", color: "#B5C27E", size: 1, fam: "prot", sub: true,
    one: "German Pietists baptize by triple immersion",
    why: "German Pietists led by Alexander Mack embraced believer’s baptism in 1708 at Schwarzenau. They baptize by triple immersion.",
    people: ["Alexander Mack"],
    today: "United States and Nigeria.",
  },
  {
    id: "meth", name: "Methodist", from: "ang", start: 1739, years: "1739 – today", color: "#E07A9A", size: 3, fam: "prot", also: "moravian",
    one: "The Wesleys’ revival of holy living",
    why: "John and Charles Wesley led a revival inside the Church of England, preaching in fields to working people. Their “methodical” small groups stressed holy living. After American independence, Wesley ordained ministers for America, and the Methodist Episcopal Church formed there in 1784. British Methodists separated after his death in 1791.",
    people: ["John Wesley","Charles Wesley","George Whitefield"],
    beliefs: [
      ["Salvation","God’s grace offered to all (Arminian); assurance of salvation"],
      ["Holiness","Growth toward Christian perfection (sanctification)"],
      ["Worship","Hymn singing; class meetings and small groups"],
      ["Leadership","Bishops or conferences; ministers appointed to churches"],
    ],
    today: "United Methodist, Global Methodist, AME and others worldwide. About 80 million members (approx.).",
    verses: ["1 Thessalonians 5:23","Hebrews 12:14"],
  },
  {
    id: "episcopal", name: "Episcopal Church (US)", short: "Episcopal (US)", from: "ang", start: 1789, years: "1789 – today", color: "#B9CBEC", size: 1, fam: "prot", sub: true,
    one: "American Anglicans form their own church",
    why: "After American independence, Anglicans in the US formed their own church in 1789. Its first bishop, Samuel Seabury, was consecrated in Scotland.",
    people: ["Samuel Seabury"],
    today: "United States; part of the Anglican Communion.",
  },
  {
    id: "ame", name: "African Methodist Episcopal", short: "African Meth. Episcopal", from: "meth", start: 1816, years: "1816 – today", color: "#EE9DB6", size: 2, fam: "prot", sub: true,
    one: "Richard Allen founds the first Black denomination in the US",
    why: "Richard Allen and other Black worshippers walked out of St George’s Methodist Church in Philadelphia over segregation. In 1816 they founded the AME, the first independent Black denomination in the US.",
    people: ["Richard Allen"],
    today: "United States, Africa and the Caribbean.",
  },
  {
    id: "restor", name: "Restoration (Disciples)", short: "Restoration", from: "pres", start: 1832, years: "1832 – today", color: "#86D1C0", size: 1, fam: "prot", sub: true, also: "bap",
    one: "Stone and Campbell: back to New Testament Christianity",
    why: "Barton Stone (Presbyterian) and Alexander Campbell wanted to restore New Testament Christianity without creeds or denominations. Their movements united in 1832.",
    people: ["Barton W. Stone","Alexander Campbell"],
    today: "Christian Church (Disciples of Christ) and independent Christian churches.",
  },
  {
    id: "sbc", name: "Southern Baptist Conv.", short: "Southern Baptist", from: "bap", start: 1845, years: "1845 – today", color: "#7CC6E6", size: 2, fam: "prot", sub: true,
    one: "Southern Baptists split from northern Baptists over slavery",
    why: "Baptists in the US South split from northern Baptists in 1845 over whether slaveholders could be missionaries. In 1995 the SBC formally apologized for its support of slavery.",
    people: ["Billy Graham (member)"],
    today: "The largest Protestant denomination in the US; about 13 million members (approx.).",
  },
  {
    id: "lcms", name: "Lutheran–Missouri Synod", short: "Lutheran (Missouri)", from: "luth", start: 1847, years: "1847 – today", color: "#6F95D6", size: 1, fam: "prot", sub: true,
    one: "German Lutherans in America keep strict confessions",
    why: "German immigrants who wanted to keep strict Lutheran teaching formed it in the US in 1847. It holds firmly to the Lutheran confessions and to the inerrancy of Scripture.",
    people: ["C. F. W. Walther"],
    today: "United States; about 1.7 million members (approx.).",
  },
  {
    id: "sda", name: "Seventh-day Adventist", short: "Adventist", from: "bap", start: 1863, years: "1863 – today", color: "#9ED6EC", size: 2, fam: "prot", sub: true, also: "meth",
    one: "After the Millerite movement, a Saturday Sabbath church",
    why: "The Millerites, led by the Baptist preacher William Miller, expected Christ to return in 1844. Afterward, Ellen G. White and others formed the Adventist church (1863). It keeps a Saturday Sabbath.",
    people: ["William Miller","Ellen G. White"],
    today: "Worldwide; about 22 million members (approx.).",
  },
  {
    id: "salv", name: "Salvation Army", from: "meth", start: 1865, years: "1865 – today", color: "#D4618A", size: 1, fam: "prot", sub: true,
    one: "William and Catherine Booth’s mission to the poor",
    why: "William and Catherine Booth began a mission to London’s poor in 1865, organized like an army. It is known for social work and does not practise sacraments.",
    people: ["William Booth","Catherine Booth"],
    today: "More than 130 countries.",
  },
  {
    id: "hol", name: "Holiness / Nazarene", from: "meth", start: 1867, years: "1867 – today", color: "#E9A1A9", size: 2, fam: "prot", sub: true,
    one: "Methodists seeking “entire sanctification”",
    why: "Methodists who stressed “entire sanctification” held national camp meetings from 1867. Churches such as the Church of the Nazarene (1908) grew from this movement.",
    people: ["Phoebe Palmer","Phineas Bresee"],
    today: "Church of the Nazarene, Wesleyan and Free Methodist churches.",
  },
  {
    id: "oldcath", name: "Old Catholic", from: "rc", start: 1870, years: "1870 – today", color: "#B89A5E", size: 1, fam: "cath", sub: true,
    one: "Catholics who reject papal infallibility",
    why: "Catholics in Germany, Switzerland and the Netherlands rejected the First Vatican Council’s definition of papal infallibility (1870). They joined the church of Utrecht, which had been independent since 1723.",
    people: ["Ignaz von Döllinger"],
    today: "Small churches in Europe; in full communion with Anglicans.",
  },
  {
    id: "romanian", name: "Romanian Orthodox", from: "eo", start: 1885, years: "1885 – today", color: "#A88DD8", size: 2, fam: "east", sub: true,
    one: "Romania’s church becomes self-governing",
    why: "Romania became independent from the Ottoman Empire, and its church was recognized as self-governing by Constantinople in 1885. It became a patriarchate in 1925.",
    today: "The second-largest Orthodox church.",
  },
  {
    id: "natbap", name: "National Baptist Conv.", short: "National Baptist", from: "bap", start: 1895, years: "1895 – today", color: "#4FA8CF", size: 2, fam: "prot", sub: true,
    one: "African American Baptists unite in Atlanta",
    why: "African American Baptist conventions united in Atlanta in 1895 to form what became the largest Black denomination in the US.",
    people: ["Elias Camp Morris"],
    today: "United States; several million members (approx.).",
  },
  {
    id: "pent", name: "Pentecostal", from: "hol", start: 1906, years: "1906 – today", color: "#F0A04B", size: 4, fam: "prot",
    one: "Azusa Street: baptism in the Holy Spirit",
    why: "Out of the Holiness movement came the Azusa Street Revival in Los Angeles (1906), led by William J. Seymour. Participants taught a “baptism in the Holy Spirit” after conversion, shown by speaking in tongues. Existing churches often rejected the movement, so new denominations formed, such as the Assemblies of God (1914).",
    people: ["Charles Parham","William J. Seymour","Aimee Semple McPherson"],
    beliefs: [
      ["Holy Spirit","Baptism in the Spirit; tongues, healing and prophecy for today"],
      ["Salvation","By faith in Christ; personal conversion"],
      ["Worship","Expressive, contemporary, Spirit-led"],
      ["Mission","Strong focus on evangelism and missions"],
    ],
    today: "The fastest-growing branch, especially in Africa, Latin America and Asia. About 280 million Pentecostals (approx.), and many more charismatics in other churches.",
    verses: ["Acts 2:1–4","1 Corinthians 12:7–11"],
  },
  {
    id: "coc", name: "Churches of Christ", from: "restor", start: 1906, years: "1906 – today", color: "#A6E0D2", size: 1, fam: "prot", sub: true,
    one: "Restoration churches that worship without instruments",
    why: "Restoration churches divided over instrumental music in worship and missionary societies. The 1906 US census listed the Churches of Christ separately. They sing without instruments.",
    today: "United States and worldwide.",
  },
  {
    id: "cogic", name: "Church of God in Christ", short: "Church of God in Christ", from: "pent", start: 1907, years: "1907 – today", color: "#F7BE7A", size: 2, fam: "prot", sub: true,
    one: "Charles H. Mason leads his church into Pentecostalism",
    why: "Charles Harrison Mason attended the Azusa Street Revival and led his Holiness church into Pentecostalism in 1907.",
    people: ["Charles H. Mason"],
    today: "The largest Pentecostal denomination in the US.",
  },
  {
    id: "aog", name: "Assemblies of God", from: "pent", start: 1914, years: "1914 – today", color: "#E58A2E", size: 3, fam: "prot", sub: true,
    one: "Pentecostals organize at Hot Springs, Arkansas",
    why: "Pentecostal congregations organized in Hot Springs, Arkansas, in 1914 for fellowship and missions.",
    people: ["E. N. Bell"],
    today: "One of the largest Protestant fellowships worldwide (Brazil, Nigeria, Korea and others).",
  },
  {
    id: "ethiopian", name: "Ethiopian Orthodox", from: "coptic", start: 1959, years: "1959 – today", color: "#E8B47C", size: 2, fam: "east", sub: true,
    one: "Ethiopia’s church gets its own patriarch",
    why: "For about 1,600 years Ethiopia received its archbishop from Alexandria. In 1959 it became self-governing with its own patriarch. It keeps a distinctive canon of Scripture and ancient customs.",
    people: ["Frumentius"],
    today: "The largest Oriental Orthodox church, with tens of millions of members in Ethiopia.",
  },
  {
    id: "charis", name: "Charismatic renewal", from: "pent", start: 1960, years: "1960 – today", color: "#F5C994", size: 2, fam: "prot", sub: true,
    one: "Gifts of the Spirit spread into older churches",
    why: "In 1960 an Episcopal priest, Dennis Bennett, spoke of being baptized in the Spirit. Gifts like tongues then spread into Anglican, Lutheran and Catholic churches (Catholic Charismatic Renewal, 1967) without people leaving their churches.",
    people: ["Dennis Bennett"],
    today: "Hundreds of millions of charismatic Christians across many traditions (approx.).",
  },
  {
    id: "nondenom", name: "Non-denominational", from: "bap", start: 1965, years: "1965 – today", color: "#C6E6F2", size: 2, fam: "prot", sub: true, also: "pent",
    one: "Independent churches like Calvary Chapel",
    why: "Independent churches with no denomination grew from the 1960s, for example Calvary Chapel (1965) and Vineyard. They are mostly baptistic in practice, often influenced by the charismatic movement, and use contemporary worship.",
    people: ["Chuck Smith","John Wimber"],
    today: "The fastest-growing type of Protestant church in the US.",
  },
  {
    id: "oca", name: "Orthodox Church in America", short: "Orthodox Ch. in America", from: "russian", start: 1970, years: "1970 – today", color: "#B59BE0", size: 1, fam: "east", sub: true,
    one: "The Orthodox Church in America becomes self-governing",
    why: "It grew from a Russian mission to Alaska (1794). Moscow granted it self-government in 1970, though not every Orthodox church recognizes that status.",
    people: ["Herman of Alaska","Tikhon of Moscow"],
    today: "United States and Canada.",
  },
];

// Turning points: the moments where the church divided or changed course.
export const EVENTS = [
  { id: "e431", year: 431, name: "Council of Ephesus", short: "Ephesus",
    text: "Bishops met in Ephesus to settle how Christ’s divinity and humanity relate. They condemned Nestorius and called Mary “Theotokos” (God-bearer). The churches of Persia did not accept the ruling, which led to the Church of the East.",
    led: ["coe"] },
  { id: "e451", year: 451, name: "Council of Chalcedon", short: "Chalcedon",
    text: "The council defined Christ as one person “in two natures,” without confusion or division. Churches in Egypt, Syria and Armenia rejected the wording, which led to the Oriental Orthodox churches.",
    led: ["oo"] },
  { id: "e1054", year: 1054, name: "The Great Schism", short: "Great Schism",
    text: "Rome and Constantinople excommunicated each other over papal authority, the filioque clause in the creed, and growing cultural differences. The church divided into the Roman Catholic West and the Eastern Orthodox East. The excommunications were lifted in 1965, but the two churches remain separate.",
    led: ["eo","rc"] },
  { id: "e1517", year: 1517, name: "The Reformation", short: "Reformation",
    text: "Luther’s 95 Theses started a movement calling the church back to Scripture and grace. Within twenty years Lutheran, Reformed, Anabaptist and Anglican churches had formed across Europe.",
    led: ["luth","ref","ana","ang"] },
  { id: "e1906", year: 1906, name: "Azusa Street Revival", short: "Azusa Street",
    text: "A revival led by William J. Seymour in Los Angeles drew people of every race. Speaking in tongues was taught as the sign of baptism in the Holy Spirit. Within a century Pentecostal and charismatic Christianity had spread worldwide.",
    led: ["pent","cogic","aog"] },
];

export const FAMILIES = [
  { id: 'east', label: 'Eastern', name: 'Eastern churches', color: '#C0574A' },
  { id: 'cath', label: 'Catholic', name: 'Catholic churches', color: '#D9B26A' },
  { id: 'prot', label: 'Protestant', name: 'Protestant churches', color: '#4F7DC9' },
];

export const ERAS = [
  { id: 'early', label: 'Early church', from: 33, to: 1000 },
  { id: 'middle', label: 'Middle Ages', from: 1000, to: 1500 },
  { id: 'reform', label: 'Reformation', from: 1500, to: 1650 },
  { id: 'revival', label: 'Revivals & missions', from: 1650, to: 1900 },
  { id: 'global', label: 'Global church', from: 1900, to: 2025 },
];

// The 11 main families: the colored lanes on the phone.
export const LANES = ["coe","oo","eo","rc","luth","ref","ana","ang","bap","meth","pent"];

// ── Helpers ──
export const denomById = Object.fromEntries(DENOMS.map((d) => [d.id, d]));
export const kidsOf = (id) => DENOMS.filter((d) => d.from === id).sort((a, b) => a.start - b.start);
// Early Church › … › this group
export function lineage(id) {
  const out = [];
  for (let d = denomById[id]; d; d = denomById[d.from]) out.unshift(d.id);
  return out;
}
// every group that branched from this one, at any depth
export function descendantsOf(id) {
  return kidsOf(id).flatMap((k) => [k.id, ...descendantsOf(k.id)]);
}
// the main family lane a group belongs to (the Early Church sits on the Roman Catholic lane)
export function laneOf(id) {
  let d = denomById[id];
  while (d && !LANES.includes(d.id)) d = denomById[d.from];
  return d ? d.id : 'rc';
}
export const DENOM_COUNT = DENOMS.length - 1; // not counting the Early Church trunk
