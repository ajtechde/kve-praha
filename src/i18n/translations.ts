export type Lang = "ru" | "cz" | "de" | "en";

export const translations = {
  nav: {
    home: { ru: "Главная", cz: "Domů", de: "Startseite", en: "Home" },
    about: { ru: "О нас", cz: "O nás", de: "Über uns", en: "About" },
    beliefs: { ru: "Вероучение", cz: "Vyznání víry", de: "Glaubensbekenntnis", en: "Beliefs" },
    locations: { ru: "Локации", cz: "Lokace", de: "Standorte", en: "Locations" },
    contact: { ru: "Контакт", cz: "Kontakt", de: "Kontakt", en: "Contact" },
  },
  hero: {
    headline: {
      ru: "Мы проповедуем Христа",
      cz: "Kážeme Krista",
      de: "Wir predigen Christus",
      en: "We preach Christ",
    },
    subheadline: {
      ru: "распятого, воскресшего и вновь грядущего",
      cz: "ukřižovaného, vzkříšeného a znovu přicházejícího",
      de: "den Gekreuzigten, Auferstandenen und Wiederkommenden",
      en: "crucified, risen and coming again",
    },
    ctaVisit: {
      ru: "Посетить богослужение",
      cz: "Navštivte bohoslužbu",
      de: "Gottesdienst besuchen",
      en: "Visit a service",
    },
    ctaContact: {
      ru: "Написать нам",
      cz: "Napište nám",
      de: "Schreiben Sie uns",
      en: "Write to us",
    },
  },
  verse: {
    john316: {
      ru: "Ибо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, верующий в Него, не погиб, но имел жизнь вечную.",
      cz: "Neboť Bůh tak miloval svět, že dal svého jediného Syna, aby žádný, kdo v něho věří, nezahynul, ale měl život věčný.",
      de: "Denn also hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab, damit alle, die an ihn glauben, nicht verloren werden, sondern das ewige Leben haben.",
      en: "For God so loved the world that he gave his only begotten Son, that whoever believes in him should not perish but have everlasting life.",
    },
    john316ref: { ru: "Иоанна 3:16", cz: "Jan 3:16", de: "Johannes 3:16", en: "John 3:16" },
    matt1128: {
      ru: "Придите ко Мне все труждающиеся и обремененные, и Я успокою вас.",
      cz: "Pojďte ke mně všichni, kdo se namáháte a jste obtíženi břemeny, a já vám dám odpočinout.",
      de: "Kommt her zu mir, alle, die ihr mühselig und beladen seid; ich will euch erquicken.",
      en: "Come to me, all you who are weary and burdened, and I will give you rest.",
    },
    matt1128ref: { ru: "Матфея 11:28", cz: "Matouš 11:28", de: "Matthäus 11:28", en: "Matthew 11:28" },
  },
  aboutSection: {
    title: { ru: "О нас", cz: "O nás", de: "Über uns", en: "About us" },
    text: {
      ru: "Мы — евангельская христианская община в Праге, объединённая верой в Иисуса Христа. Наша церковь — это место, где каждый может найти поддержку, общение и духовный рост. Мы стремимся жить по учению Евангелия и делиться Божьей любовью с окружающими.",
      cz: "Jsme evangelická křesťanská komunita v Praze, sjednocená vírou v Ježíše Krista. Náš sbor je místem, kde každý může najít podporu, společenství a duchovní růst.",
      de: "Wir sind eine evangelische christliche Gemeinde in Prag, vereint im Glauben an Jesus Christus. Unsere Kirche ist ein Ort, an dem jeder Unterstützung, Gemeinschaft und geistliches Wachstum finden kann.",
      en: "We are an evangelical Christian community in Prague, united by faith in Jesus Christ. Our church is a place where everyone can find support, fellowship and spiritual growth.",
    },
    link: { ru: "Узнать больше", cz: "Zjistit více", de: "Mehr erfahren", en: "Learn more" },
  },
  beliefsSection: {
    title: { ru: "Мы веруем", cz: "Věříme", de: "Wir glauben", en: "We believe" },
    summary: {
      ru: "Наше учение основано на Священном Писании — Библии. Мы верим в Единого Бога, явленного в трёх лицах: Отца, Сына и Святого Духа.",
      cz: "Naše učení je založeno na Svatém Písmu – Bibli. Věříme v jednoho Boha, zjeveného ve třech osobách: Otce, Syna a Ducha Svatého.",
      de: "Unsere Lehre basiert auf der Heiligen Schrift – der Bibel. Wir glauben an einen Gott, offenbart in drei Personen: Vater, Sohn und Heiliger Geist.",
      en: "Our teaching is founded on the Holy Scripture — the Bible. We believe in one God revealed in three persons: the Father, the Son and the Holy Spirit.",
    },
    link: { ru: "Подробнее", cz: "Více", de: "Mehr", en: "Read more" },
    creed: {
      ru: `Верую во единого Бога, Отца Вседержителя, Творца неба и земли, всего видимого и невидимого.

И во единого Господа Иисуса Христа, Сына Божия Единородного, от Отца рождённого прежде всех веков. Бога от Бога, Свет от Света, Бога истинного от Бога истинного, рождённого, не сотворённого, единосущного Отцу, через Которого всё сотворено.

Ради нас, людей, и ради нашего спасения сшедшего с небес и воплотившегося от Духа Святого и Марии Девы и вочеловечившегося.

Распятого за нас при Понтии Пилате, страдавшего и погребённого. И воскресшего в третий день по Писаниям. И восшедшего на небеса, и сидящего одесную Отца. И вновь грядущего со славою судить живых и мёртвых, и Царству Его не будет конца.

И в Духа Святого, Господа Животворящего, от Отца исходящего, Которому вместе с Отцом и Сыном подобает поклонение и слава, Который говорил через пророков.

Во единую святую, соборную и апостольскую Церковь. Исповедую единое крещение во оставление грехов. Ожидаю воскресения мёртвых и жизни будущего века. Аминь.`,
      cz: `Věřím v jednoho Boha, Otce všemohoucího, Stvořitele nebe i země, všeho viditelného i neviditelného.

I v jednoho Pána Ježíše Krista, jednorozeného Syna Božího, zrozeného z Otce přede všemi věky. Boha z Boha, Světlo ze Světla, pravého Boha z pravého Boha, zrozeného, nestvořeného, jedné podstaty s Otcem, skrze něhož všechno je stvořeno.

Pro nás lidi a pro naši spásu sestoupil z nebes, skrze Ducha Svatého přijal tělo z Marie Panny a stal se člověkem.

Byl za nás ukřižován za dnů Poncia Piláta, byl umučen a pohřben. Třetího dne vstal z mrtvých podle Písma. Vstoupil do nebe, sedí po pravici Otce. A znovu přijde ve slávě soudit živé i mrtvé a jeho království bude bez konce.

Věřím v Ducha Svatého, Pána a Dárce života, který z Otce vychází, s Otcem i Synem je zároveň uctíván a oslavován a mluvil ústy proroků.

Věřím v jednu svatou, obecnou, apoštolskou církev. Vyznávám jeden křest na odpuštění hříchů. Očekávám vzkříšení mrtvých a život budoucího věku. Amen.`,
      de: `Ich glaube an den einen Gott, den Vater, den Allmächtigen, den Schöpfer des Himmels und der Erde, aller sichtbaren und unsichtbaren Dinge.

Und an den einen Herrn Jesus Christus, Gottes eingeborenen Sohn, aus dem Vater geboren vor aller Zeit. Gott von Gott, Licht vom Licht, wahrer Gott vom wahren Gott, gezeugt, nicht geschaffen, eines Wesens mit dem Vater, durch ihn ist alles geschaffen.

Für uns Menschen und zu unserem Heil ist er vom Himmel gekommen, hat Fleisch angenommen durch den Heiligen Geist von der Jungfrau Maria und ist Mensch geworden.

Er wurde für uns gekreuzigt unter Pontius Pilatus, hat gelitten und ist begraben worden. Er ist am dritten Tage auferstanden nach der Schrift. Er ist aufgefahren in den Himmel und sitzt zur Rechten des Vaters. Er wird wiederkommen in Herrlichkeit, zu richten die Lebenden und die Toten, und seines Reiches wird kein Ende sein.

Und an den Heiligen Geist, den Herrn und Lebensspender, der aus dem Vater hervorgeht, der mit dem Vater und dem Sohn angebetet und verherrlicht wird, der gesprochen hat durch die Propheten.

Und die eine, heilige, allgemeine und apostolische Kirche. Ich bekenne die eine Taufe zur Vergebung der Sünden. Ich erwarte die Auferstehung der Toten und das Leben der kommenden Welt. Amen.`,
      en: `I believe in one God, the Father Almighty, Maker of heaven and earth, and of all things visible and invisible.

And in one Lord Jesus Christ, the only-begotten Son of God, begotten of the Father before all ages. God of God, Light of Light, true God of true God, begotten, not made, of one essence with the Father, through whom all things were made.

Who for us men and for our salvation came down from heaven and was incarnate of the Holy Spirit and the Virgin Mary and became man.

He was crucified for us under Pontius Pilate, and suffered and was buried. And He rose again on the third day according to the Scriptures. And He ascended into heaven and sits at the right hand of the Father. And He shall come again with glory to judge the living and the dead, and His kingdom shall have no end.

And in the Holy Spirit, the Lord, the Giver of Life, who proceeds from the Father, who together with the Father and the Son is worshipped and glorified, who spoke through the prophets.

In one holy, catholic and apostolic Church. I confess one baptism for the remission of sins. I await the resurrection of the dead and the life of the age to come. Amen.`,
    },
    questionsTitle: {
      ru: "Есть вопросы?",
      cz: "Máte otázky?",
      de: "Haben Sie Fragen?",
      en: "Have questions?",
    },
    questionsText: {
      ru: "Мы будем рады ответить на ваши вопросы о вере и нашей церкви.",
      cz: "Rádi odpovíme na vaše otázky o víře a našem sboru.",
      de: "Wir beantworten gerne Ihre Fragen zum Glauben und unserer Gemeinde.",
      en: "We are glad to answer your questions about faith and our church.",
    },
  },
  locationsSection: {
    title: { ru: "Локации и время", cz: "Lokace a časy", de: "Standorte & Zeiten", en: "Locations & Times" },
    sunday: { ru: "Воскресенье", cz: "Neděle", de: "Sonntag", en: "Sunday" },
    tuesday: { ru: "Вторник", cz: "Úterý", de: "Dienstag", en: "Tuesday" },
    friday: { ru: "Пятница", cz: "Pátek", de: "Freitag", en: "Friday" },
    services: { ru: "Богослужения", cz: "Bohoslužby", de: "Gottesdienste", en: "Services" },
    contactPerson: { ru: "Контакт", cz: "Kontakt", de: "Kontakt", en: "Contact" },
    details: { ru: "Подробнее", cz: "Více", de: "Mehr", en: "Details" },
    openMap: { ru: "Открыть карту", cz: "Otevřít mapu", de: "Karte öffnen", en: "Open map" },
  },
  contactSection: {
    title: { ru: "Связаться с нами", cz: "Kontaktujte nás", de: "Kontaktieren Sie uns", en: "Contact us" },
    teaser: {
      ru: "Придите ко Мне все труждающиеся и обремененные, и Я успокою вас.",
      cz: "Pojďte ke mně všichni, kdo se namáháte a jste obtíženi břemeny, a já vám dám odpočinout.",
      de: "Kommt her zu mir, alle, die ihr mühselig und beladen seid; ich will euch erquicken.",
      en: "Come to me, all you who are weary and burdened, and I will give you rest.",
    },
    name: { ru: "Имя", cz: "Jméno", de: "Name", en: "Name" },
    phone: { ru: "Телефон", cz: "Telefon", de: "Telefon", en: "Phone" },
    message: { ru: "Сообщение", cz: "Zpráva", de: "Nachricht", en: "Message" },
    send: { ru: "Отправить", cz: "Odeslat", de: "Senden", en: "Send" },
    success: {
      ru: "Сообщение отправлено! Мы свяжемся с вами в ближайшее время.",
      cz: "Zpráva byla odeslána! Brzy se vám ozveme.",
      de: "Nachricht gesendet! Wir melden uns bald bei Ihnen.",
      en: "Message sent! We will get back to you soon.",
    },
    required: { ru: "Обязательное поле", cz: "Povinné pole", de: "Pflichtfeld", en: "Required field" },
  },
  aboutPage: {
    title: { ru: "О нашей церкви", cz: "O našem sboru", de: "Über unsere Gemeinde", en: "About our church" },
    intro: {
      ru: "Евангельская христианская община \u00ABХристиане Веры Евангельской\u00BB в Праге принадлежит к Германскому братству (ОЦХВЕ). Учение нашей церкви основано на Евангелии Иисуса Христа.",
      cz: "Evangelick\u00E1 k\u0159es\u0165ansk\u00E1 komunita \u201EK\u0159es\u0165an\u00E9 evangelick\u00E9 v\u00EDry\u201C v Praze pat\u0159\u00ED k N\u011Bmeck\u00E9mu bratstv\u00ED (\u041E\u0426\u0425\u0412\u0415). U\u010Den\u00ED na\u0161eho sboru je zalo\u017Eeno na evangeliu Je\u017E\u00ED\u0161e Krista.",
      de: "Die evangelische christliche Gemeinde \u201EChristen des Evangelischen Glaubens\u201C in Prag geh\u00F6rt zur Deutschen Bruderschaft (\u041E\u0426\u0425\u0412\u0415). Die Lehre unserer Gemeinde basiert auf dem Evangelium Jesu Christi.",
      en: "The evangelical Christian community \u201CChristians of the Evangelical Faith\u201D in Prague belongs to the German Brotherhood (\u041E\u0426\u0425\u0412\u0415). The teaching of our church is founded on the Gospel of Jesus Christ.",
    },
    values: {
      title: { ru: "Наши ценности", cz: "Naše hodnoty", de: "Unsere Werte", en: "Our values" },
    },
    valuesCards: [
      {
        icon: "Book",
        title: { ru: "Писание", cz: "Písmo", de: "Schrift", en: "Scripture" },
        text: {
          ru: "Библия — основа нашей веры и жизни.",
          cz: "Bible je základem naší víry a života.",
          de: "Die Bibel ist die Grundlage unseres Glaubens und Lebens.",
          en: "The Bible is the foundation of our faith and life.",
        },
      },
      {
        icon: "Heart",
        title: { ru: "Молитва", cz: "Modlitba", de: "Gebet", en: "Prayer" },
        text: {
          ru: "Молитва — наш путь общения с Богом.",
          cz: "Modlitba je naší cestou komunikace s Bohem.",
          de: "Das Gebet ist unser Weg der Kommunikation mit Gott.",
          en: "Prayer is our way of communion with God.",
        },
      },
      {
        icon: "Users",
        title: { ru: "Общение", cz: "Společenství", de: "Gemeinschaft", en: "Fellowship" },
        text: {
          ru: "Мы — семья, объединённая верой.",
          cz: "Jsme rodina sjednocená vírou.",
          de: "Wir sind eine Familie, vereint im Glauben.",
          en: "We are a family united by faith.",
        },
      },
      {
        icon: "Music",
        title: { ru: "Поклонение", cz: "Uctívání", de: "Anbetung", en: "Worship" },
        text: {
          ru: "Прославление Бога — сердце нашего служения.",
          cz: "Oslavování Boha je srdcem naší služby.",
          de: "Die Verherrlichung Gottes ist das Herz unseres Dienstes.",
          en: "Glorifying God is the heart of our ministry.",
        },
      },
      {
        icon: "Sprout",
        title: { ru: "Ученичество", cz: "Učednictví", de: "Jüngerschaft", en: "Discipleship" },
        text: {
          ru: "Мы растём вместе, изучая Слово Божье.",
          cz: "Společně rosteme studiem Božího slova.",
          de: "Wir wachsen gemeinsam durch das Studium des Wortes Gottes.",
          en: "We grow together by studying the Word of God.",
        },
      },
    ],
  },
  footer: {
    copyright: {
      ru: "© {year} KVE – Христиане Веры Евангельской, Прага",
      cz: "© {year} KVE – Křesťané evangelické víry, Praha",
      de: "© {year} KVE – Christen des Evangelischen Glaubens, Prag",
      en: "© {year} KVE – Christians of the Evangelical Faith, Prague",
    },
  },
  meta: {
    homeTitle: {
      ru: "KVE Praha — Христиане Веры Евангельской",
      cz: "KVE Praha — Křesťané evangelické víry",
      de: "KVE Prag — Christen des Evangelischen Glaubens",
      en: "KVE Prague — Christians of the Evangelical Faith",
    },
    homeDesc: {
      ru: "Евангельская христианская церковь в Праге. Богослужения, общение, вера.",
      cz: "Evangelický křesťanský sbor v Praze. Bohoslužby, společenství, víra.",
      de: "Evangelische christliche Gemeinde in Prag. Gottesdienste, Gemeinschaft, Glaube.",
      en: "Evangelical Christian church in Prague. Services, fellowship, faith.",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations;
