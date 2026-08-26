import type { Metadata } from 'next';
import { BrandIcon } from '../components/BrandIcons';
import { KennismakenCta } from '../components/KennismakenCta';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { ThemeExplorer } from '../components/ThemeExplorer';

export const metadata: Metadata = {
  title: 'Wat wij doen | RHB Zorg',
  description: 'Persoonlijke begeleiding op maat, gericht op structuur, ontwikkeling en zelfstandigheid.',
};

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
            Open een thema hieronder om te zien wat dat in iemands dagelijks
            leven kan betekenen — geen standaardpakket, maar wat iemand nodig
            heeft om verder te komen.
          </p>
        </div>
        <div className="geo-corner" aria-hidden="true">
          <span />
          <span />
        </div>
        <ThemeExplorer />
      </section>

      <section className="together-band" aria-labelledby="together-title">
        <div className="page-shell together-grid">
          <article>
            <p className="eyebrow">Samen verder</p>
            <h2 id="together-title">Niet alleen, maar samen</h2>
            <p>
              Waar dat helpt, werken we samen met ouders, het netwerk, verwijzers en
              andere betrokken professionals. Begeleiding stopt niet bij de voordeur —
              de omgeving doet ertoe.
            </p>
          </article>
          <article className="pgb-card">
            <span className="theme-icon" aria-hidden="true">
              <BrandIcon name="person" />
            </span>
            <div>
              <strong>Begeleiding via PGB mogelijk.</strong>
              <p>Wij denken graag met u mee over wat past bij de situatie en de ondersteuningsvraag.</p>
            </div>
          </article>
        </div>
      </section>

      <KennismakenCta />
      <SiteFooter />
    </main>
  );
}
