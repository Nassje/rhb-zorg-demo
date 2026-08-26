export const services = [
  {
    icon: 'person',
    title: 'Begeleiding op maat',
    text: 'Ondersteuning afgestemd op de persoon, de hulpvraag en de doelen die we samen vaststellen.',
  },
  {
    icon: 'calendar',
    title: 'Structuur & ontwikkeling',
    text: 'We werken aan dagelijkse structuur, zelfredzaamheid, sociale vaardigheden, emotieregulatie en het vergroten van eigen regie.',
  },
  {
    icon: 'people',
    title: 'Samenwerken aan vooruitgang',
    text: 'Waar nodig werken we samen met ouders, het netwerk, verwijzers en andere betrokken professionals.',
  },
] as const;

export const themes = [
  {
    icon: 'structure',
    slug: 'structuur',
    title: 'Structuur in het dagelijks leven',
    lead: 'Een dag die je kunt overzien geeft rust. Geen strak keurslijf, maar een ritme dat past bij hoe iemand leeft — en dat ook vol te houden is als het even tegenzit.',
    practice: [
      'Opstaan, eten, school of werk, en slapen in een volgorde die voorspelbaar voelt',
      'Een week die je kunt nakijken: wat moet, wat mag, wat kan wachten',
      'Een agenda, pictogrammen of herinneringen die écht gebruikt worden — niet een systeem dat in de la verdwijnt',
      'Minder gedoe in huis en in het hoofd, omdat de dag niet elke ochtend opnieuw moet worden uitgevonden',
    ],
  },
  {
    icon: 'change',
    slug: 'veranderingen',
    title: 'Omgaan met veranderingen',
    lead: 'Een nieuwe school, andere begeleiding, een verhuizing of iets dat anders loopt dan gedacht. Verandering vraagt voorbereiding, geen verrassing.',
    practice: [
      'Vooraf weten wat er komt, in stappen die te volgen zijn',
      'Oefenen met situaties die onzeker of nieuw voelen',
      'Samen kijken wat helpt als het tóch anders gaat dan gepland',
      'Ruimte om bij te komen, in plaats van meteen door naar het volgende',
    ],
  },
  {
    icon: 'selfReliance',
    slug: 'zelfredzaamheid',
    title: 'Zelfredzaamheid',
    lead: 'Zelf kunnen wat eerder lastig was. Klein beginnen, in het echte leven oefenen — voordoen, samen doen, zelf doen.',
    practice: [
      'Huishouden, verzorging, koken, reizen of administratie: wat op dát moment telt',
      'Oefenen waar het gebeurt, niet alleen erover praten',
      'Fouten mogen, opnieuw proberen, zonder oordeel',
      'Steeds een stukje meer zelf, met een vangnet dat past',
    ],
  },
  {
    icon: 'confidence',
    slug: 'zelfvertrouwen',
    title: 'Vergroten van zelfvertrouwen',
    lead: 'Zelfvertrouwen groeit niet van een pep-talk. Het groeit van dingen die lukken — en van iemand die dat met je meeziet.',
    practice: [
      'Kleine successen zichtbaar maken, niet alleen de grote stappen',
      'Durven oefenen in situaties die spannend zijn',
      'Stoppen met alleen kijken naar wat misgaat',
      'Taal geven aan “dit kan ik wél”',
    ],
  },
  {
    icon: 'emotion',
    slug: 'emotieregulatie',
    title: 'Emotieregulatie',
    lead: 'Boos, bang, overprikkeld of juist nergens meer bij kunnen. Eerst herkennen wat er gebeurt, daarna weten wat helpt om weer bij jezelf te komen.',
    practice: [
      'Signalen van spanning eerder zien — in het lijf, in gedrag, in de sfeer',
      'Manieren om tot rust te komen die bij iemand passen, niet bij een protocol',
      'Woorden geven aan wat er vanbinnen gebeurt',
      'Voorkomen dat het telkens tot een knal of een shutdown komt',
    ],
  },
  {
    icon: 'growth',
    slug: 'ontwikkeling',
    title: 'Persoonlijke ontwikkeling',
    lead: 'Wie ben je, wat wil je, waar word je rustig van. Groei in eigen tempo — niet een traject dat voor je is bedacht.',
    practice: [
      'Talenten en interesses serieus nemen, ook als ze klein of anders lijken',
      'Uitproberen zonder meteen een heel levensplan te hoeven hebben',
      'Zelf keuzes oefenen, en de gevolgen daarvan leren kennen',
      'Vooruitkijken naar een leven dat ergens over gaat',
    ],
  },
  {
    icon: 'social',
    slug: 'sociaal',
    title: 'Sociale vaardigheden',
    lead: 'Contact maken, je grens aangeven, samen iets doen. In het echt, op de plekken waar het ertoe doet — thuis, school, werk, vrije tijd.',
    practice: [
      'Oefenen in alledaagse situaties, niet alleen in een oefengesprek',
      'Aangeven wat je wel en niet wilt, zonder dat het meteen misgaat',
      'Omgaan met misverstanden, afwijzing of onduidelijkheid',
      'Relaties met gezin, vrienden en andere betrokkenen houdbaar houden',
    ],
  },
  {
    icon: 'independence',
    slug: 'zelfstandigheid',
    title: 'Toewerken naar meer zelfstandigheid',
    lead: 'Niet in één keer alleen, maar stap voor stap meer eigen regie. Loslaten waar het kan, steun houden waar het nodig is.',
    practice: [
      'De volgende concrete stap: wonen, school, werk of vrije tijd',
      'Weten wanneer je hulp vraagt — en wanneer je het zelf doet',
      'Eigen afspraken, eigen keuzes, eigen tempo',
      'Toewerken naar een situatie waarin iemand zelf verder kan',
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
  { icon: 'people', title: 'Ervaren & betrokken professionals' },
  { icon: 'shield', title: 'Veilige en vertrouwde omgeving' },
  { icon: 'person', title: 'Persoonlijke aanpak, geen standaard oplossingen' },
] as const;

export type BrandIconName =
  | (typeof services)[number]['icon']
  | (typeof themes)[number]['icon']
  | (typeof values)[number]['icon'];
