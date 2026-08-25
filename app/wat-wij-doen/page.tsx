import type { Metadata } from 'next';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Wat wij doen | RHB Zorg',
  description: 'Persoonlijke begeleiding op maat, gericht op structuur, ontwikkeling en zelfstandigheid.',
};

const services = [
  {
    number: '01',
    title: 'Begeleiding op maat',
    text: 'Ondersteuning afgestemd op de persoon, de hulpvraag en de doelen die we samen vaststellen.',
  },
  {
    number: '02',
    title: 'Structuur & ontwikkeling',
    text: 'We werken aan dagelijkse structuur, zelfredzaamheid, sociale vaardigheden, emotieregulatie en het vergroten van eigen regie.',
  },
  {
    number: '03',
    title: 'Samenwerken aan vooruitgang',
    text: 'Waar nodig werken we samen met ouders, het netwerk, verwijzers en andere betrokken professionals.',
  },
];

const themes = [
  'Structuur in het dagelijks leven',
  'Omgaan met veranderingen',
  'Zelfredzaamheid',
  'Vergroten van zelfvertrouwen',
  'Emotieregulatie',
  'Persoonlijke ontwikkeling',
  'Sociale vaardigheden',
  'Toewerken naar meer zelfstandigheid',
];

export default function WatWijDoen() {
  return (
    <main>
      <SiteHeader active="/wat-wij-doen" />
      <section className="page-shell service-page">
        <div className="page-intro">
          <p className="eyebrow">Onze begeleiding</p>
          <h1>Wat wij <span>doen</span></h1>
          <div className="title-rule" aria-hidden="true" />
          <p>
            RHB Zorg biedt persoonlijke begeleiding aan mensen die ondersteuning nodig
            hebben om meer grip, structuur en zelfstandigheid in hun leven te ontwikkelen.
            We kijken niet alleen naar wat moeilijk gaat, maar vooral naar wat iemand nodig
            heeft om verder te komen.
          </p>
        </div>

        <div className="service-layout">
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-number" aria-hidden="true">{service.number}</span>
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="themes-card">
            <p className="eyebrow light">Samen werken aan</p>
            <h2>Waaraan kunnen we werken?</h2>
            <div className="card-rule" aria-hidden="true" />
            <ul>
              {themes.map((theme) => <li key={theme}>{theme}</li>)}
            </ul>
            <div className="pgb-note">
              <strong>Begeleiding via PGB mogelijk.</strong>
              <em>Wij denken graag met u mee.</em>
            </div>
          </aside>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
