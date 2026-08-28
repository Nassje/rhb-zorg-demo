export const services = [
  {
    icon: 'person',
    title: 'Begeleiding op maat',
    text: 'Wij bieden individuele begeleiding die aansluit bij uw doelen en ondersteuningsbehoefte. Samen kijken we welke ondersteuning nodig is om uw zelfstandigheid en eigen regie te vergroten.',
  },
  {
    icon: 'calendar',
    title: 'Structuur & ontwikkeling',
    text: 'We ondersteunen bij het aanbrengen van structuur en dagritme, plannen en organiseren, dagelijkse vaardigheden en het vergroten van zelfredzaamheid en zelfstandigheid.',
  },
  {
    icon: 'people',
    title: 'Samenwerken aan vooruitgang',
    text: 'Waar nodig werken we samen met ouders, het netwerk en andere betrokken zorgprofessionals.',
  },
] as const;

export const themes = [
  {
    icon: 'structure',
    slug: 'structuur',
    title: 'Structuur en dagritme',
    lead: 'Een dag die je kunt overzien geeft rust. Geen strak keurslijf, maar een ritme dat past bij hoe iemand leeft en dat ook vol te houden is als het even tegenzit.',
    practice: [
      'Opstaan, eten, school of werk, en slapen in een volgorde die voorspelbaar voelt',
      'Een week die je kunt nakijken: wat moet, wat mag, wat kan wachten',
      'Een agenda, pictogrammen of herinneringen die écht gebruikt worden in plaats van een systeem dat in de la verdwijnt',
      'Minder gedoe in huis en in het hoofd, omdat de dag niet elke ochtend opnieuw moet worden uitgevonden',
    ],
  },
  {
    icon: 'selfReliance',
    slug: 'zelfredzaamheid',
    title: 'Zelfredzaamheid en zelfstandigheid',
    lead: 'Zelf kunnen wat eerder lastig was en stap voor stap meer eigen regie nemen. We oefenen in het dagelijks leven en houden ondersteuning beschikbaar waar dat nodig is.',
    practice: [
      'Steeds een volgende haalbare stap kiezen en oefenen',
      'Leren wanneer u iets zelf kunt en wanneer hulp vragen passend is',
      'Eigen afspraken en keuzes leren maken',
      'Ondersteuning afbouwen waar dat kan en behouden waar dat nodig is',
    ],
  },
  {
    icon: 'calendar',
    slug: 'plannen-en-organiseren',
    title: 'Plannen en organiseren',
    lead: 'Overzicht helpt om taken te beginnen, afspraken na te komen en ruimte te houden voor rust. Samen zoeken we een manier van plannen die praktisch en vol te houden is.',
    practice: [
      'Taken opdelen in duidelijke en haalbare stappen',
      'Een agenda, weekplanning of herinneringen leren gebruiken',
      'Prioriteiten stellen en afspraken voorbereiden',
      'Balans aanbrengen tussen inspanning en rust',
    ],
  },
  {
    icon: 'independence',
    slug: 'praktische-vaardigheden',
    title: 'Praktische vaardigheden in het dagelijks leven',
    lead: 'Dagelijkse vaardigheden worden begrijpelijker door ze samen te oefenen op de plek waar ze nodig zijn. Eerst voordoen, dan samen doen en uiteindelijk zoveel mogelijk zelf doen.',
    practice: [
      'Oefenen met huishouden, verzorging en koken',
      'Ondersteuning bij reizen, boodschappen en administratie',
      'Nieuwe handelingen stap voor stap aanleren',
      'Vaardigheden herhalen totdat ze vertrouwd voelen',
    ],
  },
  {
    icon: 'social',
    slug: 'sociale-vaardigheden',
    title: 'Sociale vaardigheden en contacten',
    lead: 'Contact maken, een grens aangeven en samen iets doen. We oefenen in alledaagse situaties en kijken wat helpt om contacten prettig en begrijpelijk te houden.',
    practice: [
      'Gesprekken beginnen, voeren en afronden',
      'Grenzen en wensen leren aangeven',
      'Omgaan met misverstanden, afwijzing of onduidelijkheid',
      'Contacten met gezin, vrienden en andere betrokkenen onderhouden',
    ],
  },
  {
    icon: 'compass',
    slug: 'school-werk-daginvulling',
    title: 'School, werk en daginvulling',
    lead: 'Een passende invulling van de dag geeft structuur, betekenis en mogelijkheden om te groeien. We kijken samen wat haalbaar is en welke ondersteuning daarbij nodig is.',
    practice: [
      'Een haalbaar ritme rond school, werk of dagbesteding opbouwen',
      'Afspraken voorbereiden en overzicht houden',
      'Onderzoeken welke activiteiten aansluiten bij interesses en mogelijkheden',
      'Omgaan met spanning, verwachtingen en veranderingen',
    ],
  },
  {
    icon: 'change',
    slug: 'veranderingen',
    title: 'Omgaan met veranderingen',
    lead: 'Een nieuwe school, andere begeleiding, een verhuizing of iets dat anders loopt dan gedacht. Verandering vraagt voorbereiding en passende ondersteuning.',
    practice: [
      'Vooraf weten wat er komt, in stappen die te volgen zijn',
      'Oefenen met situaties die onzeker of nieuw voelen',
      'Samen kijken wat helpt als het anders gaat dan gepland',
      'Ruimte nemen om aan een nieuwe situatie te wennen',
    ],
  },
  {
    icon: 'emotion',
    slug: 'emotieregulatie',
    title: 'Emotieregulatie',
    lead: 'Boos, bang, overprikkeld of juist nergens meer bij kunnen. Eerst herkennen wat er gebeurt, daarna ontdekken wat helpt om weer tot rust te komen.',
    practice: [
      'Signalen van spanning eerder leren herkennen',
      'Manieren vinden om tot rust te komen die bij u passen',
      'Woorden geven aan wat er vanbinnen gebeurt',
      'Voorbereiden op situaties die spanning kunnen oproepen',
    ],
  },
  {
    icon: 'confidence',
    slug: 'zelfvertrouwen',
    title: 'Zelfvertrouwen vergroten',
    lead: 'Zelfvertrouwen groeit door ervaringen die lukken en door te zien welke stappen al zijn gezet. We maken vooruitgang zichtbaar en oefenen met situaties die nog spannend zijn.',
    practice: [
      'Kleine successen herkennen en benoemen',
      'Talenten en sterke kanten leren inzetten',
      'In een veilig tempo oefenen met nieuwe situaties',
      'Leren omgaan met fouten en tegenslagen',
    ],
  },
  {
    icon: 'growth',
    slug: 'persoonlijke-ontwikkeling',
    title: 'Persoonlijke ontwikkeling',
    lead: 'Wie bent u, wat wilt u en wat past bij u? We ondersteunen groei in uw eigen tempo en sluiten aan bij uw mogelijkheden, interesses en doelen.',
    practice: [
      'Talenten en interesses onderzoeken',
      'Persoonlijke doelen formuleren en in stappen uitvoeren',
      'Zelf keuzes maken en de gevolgen daarvan leren overzien',
      'Vooruitkijken naar een betekenisvolle toekomst',
    ],
  },
] as const;

export const values = [
  { icon: 'respect', title: 'Aandacht en respect' },
  { icon: 'clarity', title: 'Duidelijkheid en eerlijkheid' },
  { icon: 'shield', title: 'Betrouwbaar en betrokken' },
  { icon: 'compass', title: 'Krachtgericht en oplossingsgericht' },
] as const;

export const identityPoints = [
  { icon: 'people', title: 'Ervaren & betrokken zorgprofessionals' },
  { icon: 'shield', title: 'Veilige en vertrouwde omgeving' },
  { icon: 'person', title: 'Persoonlijke aanpak, geen standaard oplossingen' },
] as const;

export type BrandIconName =
  | (typeof services)[number]['icon']
  | (typeof themes)[number]['icon']
  | (typeof values)[number]['icon'];
