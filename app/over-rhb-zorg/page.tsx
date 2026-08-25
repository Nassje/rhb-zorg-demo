import type { Metadata } from 'next';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { basePath } from '../lib/basePath';

export const metadata: Metadata = {
  title: 'Over RHB Zorg',
  description: 'Lees meer over de missie, visie en waarden van RHB Zorg.',
};

const values = [
  'Aandacht en respect',
  'Duidelijkheid en eerlijkheid',
  'Betrouwbaar en betrokken',
  'Krachtgericht en oplossingsgericht',
];

export default function OverRhbZorg() {
  return (
    <main>
      <SiteHeader active="/over-rhb-zorg" />
      <section className="about-hero">
        <div className="page-intro compact">
          <p className="eyebrow">Wie wij zijn</p>
          <h1>Over <span>RHB Zorg</span></h1>
          <div className="title-rule" aria-hidden="true" />
          <p>
            RHB Zorg is een kleinschalige stichting met een warm hart voor mensen.
            Wij bieden begeleiding en ondersteuning aan mensen die toe zijn aan
            verandering, groei of meer grip op hun dagelijks leven.
          </p>
        </div>
        <div
          className="growth-photo"
          role="img"
          aria-label="Een jonge plant groeit door de aarde heen"
          style={{ backgroundImage: `url('${basePath}/rhb-growth.png')` }}
        />
      </section>

      <section className="about-grid page-shell">
        <article>
          <span className="section-index">01</span>
          <h2>Onze missie</h2>
          <p>
            Wij geloven dat ieder mens de kracht heeft om vooruit te komen. Onze missie
            is om begeleiding te bieden die mensen helpt weer regie te nemen,
            zelfvertrouwen op te bouwen en stappen te zetten naar een betekenisvolle toekomst.
          </p>
        </article>
        <article>
          <span className="section-index">02</span>
          <h2>Onze visie</h2>
          <p>
            Wij bouwen aan een samenleving waarin mensen gezien worden, mee kunnen doen
            en ondersteuning krijgen die past bij hun situatie. Persoonlijk, betrokken
            en betrouwbaar — met oog voor wie zij zijn en wat zij nodig hebben.
          </p>
        </article>
        <article className="values-card">
          <span className="section-index">03</span>
          <h2>Onze waarden</h2>
          <ul>{values.map((value) => <li key={value}>{value}</li>)}</ul>
        </article>
      </section>

      <section className="identity-panel page-shell">
        <article>
          <p className="eyebrow">Wie wij zijn</p>
          <h2>Betrokken professionals</h2>
          <p>
            We werken met professionals die ruime ervaring hebben in de begeleiding van
            mensen in verschillende levensfases en situaties. Onze aanpak is persoonlijk,
            praktisch en altijd afgestemd op wat iemand nodig heeft.
          </p>
        </article>
        <article>
          <p className="eyebrow">De stichting</p>
          <h2>Samen kansen creëren</h2>
          <p>
            Alles wat wij doen draait om het ondersteunen van mensen en het creëren van kansen.
            We werken met PGB en in samenwerking met gemeenten, verwijzers en netwerkpartners.
          </p>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
