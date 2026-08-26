import type { Metadata } from 'next';
import { BrandIcon } from '../components/BrandIcons';
import { KennismakenCta } from '../components/KennismakenCta';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { identityPoints, values } from '../lib/content';
import { basePath } from '../lib/basePath';

export const metadata: Metadata = {
  title: 'Over RHB Zorg',
  description: 'Lees meer over de missie, visie en waarden van RHB Zorg.',
};

export default function OverRhbZorg() {
  return (
    <main>
      <SiteHeader active="/over-rhb-zorg" overlay />
      <section className="hero about-cinematic" aria-labelledby="about-title">
        <div className="hero-copy">
          <p className="eyebrow light">Wie wij zijn</p>
          <h1 id="about-title">Over <span>RHB Zorg</span></h1>
          <div className="title-rule" aria-hidden="true" />
          <p className="intro">
            RHB Zorg is een kleinschalige stichting die ambulante begeleiding biedt
            aan mensen die ondersteuning nodig hebben bij het vergroten van hun
            zelfredzaamheid, structuur en zelfstandigheid.
          </p>
        </div>
        <div
          className="hero-art about-art"
          role="img"
          aria-label="Een jonge plant groeit door de aarde heen"
          style={{ backgroundImage: `url('${basePath}/rhb-growth.png')` }}
        >
          <div className="line-motif line-motif-one" aria-hidden="true" />
          <div className="line-motif line-motif-two" aria-hidden="true" />
        </div>
      </section>

      <section className="about-grid page-shell">
        <article>
          <span className="section-index">01</span>
          <h2>Onze missie</h2>
          <p>
            Wij geloven dat ieder mens de kracht heeft om vooruit te komen. Onze missie
            is om mensen de juiste ondersteuning te bieden om regie te nemen,
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
          <ul>
            {values.map((value) => (
              <li key={value.title}>
                <span className="value-icon" aria-hidden="true">
                  <BrandIcon name={value.icon} />
                </span>
                {value.title}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="identity-panel page-shell">
        <article>
          <p className="eyebrow">Wie wij zijn</p>
          <h2>Betrokken zorgprofessionals</h2>
          <p>
            Wij werken met ervaren zorgprofessionals die cliënten ondersteunen bij
            uiteenlopende hulpvragen. Onze aanpak is persoonlijk, praktisch en afgestemd
            op de individuele ondersteuningsbehoefte.
          </p>
          <ul className="identity-points">
            {identityPoints.map((point) => (
              <li key={point.title}>
                <span className="value-icon" aria-hidden="true">
                  <BrandIcon name={point.icon} />
                </span>
                {point.title}
              </li>
            ))}
          </ul>
        </article>
        <article>
          <p className="eyebrow">De stichting</p>
          <h2>Samen kansen creëren</h2>
          <p>
            Alles wat wij doen draait om het ondersteunen van mensen en het creëren van kansen.
            Onze ambulante begeleiding kan onder andere worden ingezet vanuit een PGB.
            Waar nodig werken we samen met betrokken zorgprofessionals en het netwerk van
            de cliënt.
          </p>
        </article>
      </section>

      <KennismakenCta />
      <SiteFooter />
    </main>
  );
}
