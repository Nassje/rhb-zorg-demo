import type { Metadata } from 'next';
import Image from 'next/image';
import { BrandIcon } from '../components/BrandIcons';
import { KennismakenCta } from '../components/KennismakenCta';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { ThemeExplorer } from '../components/ThemeExplorer';
import { basePath } from '../lib/basePath';
import { services } from '../lib/content';

export const metadata: Metadata = {
  title: 'Wat wij doen | RHB Zorg',
  description: 'Ambulante begeleiding die aansluit bij uw ondersteuningsbehoefte en persoonlijke situatie.',
};

export default function WatWijDoen() {
  return (
    <main>
      <SiteHeader active="/wat-wij-doen" overlay />
      <section className="hero services-cinematic" aria-labelledby="services-title">
        <div className="hero-copy">
          <p className="eyebrow light">Onze begeleiding.</p>
          <h1 id="services-title">Wat wij <span>doen.</span></h1>
          <div className="title-rule" aria-hidden="true" />
          <p className="intro">
            Ambulante begeleiding die aansluit bij uw ondersteuningsbehoefte en
            persoonlijke situatie.
          </p>
        </div>
        <div className="hero-art services-art">
          <Image
            className="services-hero-image"
            src={`${basePath}/rhb-ambulante-begeleiding.png`}
            alt="Een zorgprofessional en cliënt maken samen een planning aan de keukentafel"
            fill
            sizes="100vw"
            priority
          />
          <div className="line-motif line-motif-one" aria-hidden="true" />
          <div className="line-motif line-motif-two" aria-hidden="true" />
        </div>
      </section>

      <section className="page-shell service-page">
        <div className="section-copy service-section-heading">
          <p className="eyebrow">Onze werkwijze.</p>
          <h2>Begeleiding die past bij uw <span>situatie.</span></h2>
          <div className="title-rule" aria-hidden="true" />
        </div>
        <div className="service-list page-service-list" aria-label="Onze werkwijze">
          {services.map((service, index) => (
            <article className="service-row" key={service.title}>
              <span className={`service-icon service-icon-${service.icon}`} aria-hidden="true">
                <BrandIcon name={service.icon} />
              </span>
              <div>
                <span className="section-index">{String(index + 1).padStart(2, '0')}</span>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>

        <section className="support-themes" aria-labelledby="support-themes-title">
          <p className="eyebrow">Ondersteuningsgebieden.</p>
          <h2 id="support-themes-title">Waarbij kunnen wij ondersteunen?</h2>
          <div className="support-themes-grid">
            <figure className="support-themes-image">
              <Image
                src={`${basePath}/rhb-ondersteuning-buiten.png`}
                alt="Een zorgprofessional en cliënt lopen samen door een woonwijk"
                width={1122}
                height={1402}
                sizes="(max-width: 1020px) calc(100vw - 80px), 38vw"
              />
            </figure>
            <ThemeExplorer />
          </div>
        </section>
      </section>

      <section className="together-band" aria-labelledby="together-title">
        <div className="page-shell together-grid">
          <article>
            <p className="eyebrow">Samen verder.</p>
            <h2 id="together-title">Niet alleen, maar samen.</h2>
            <p>
              Waar nodig werken we samen met ouders, het netwerk en andere betrokken
              zorgprofessionals.
            </p>
          </article>
          <article className="pgb-card">
            <span className="theme-icon" aria-hidden="true">
              <BrandIcon name="person" />
            </span>
            <div>
              <strong>Begeleiding via PGB.</strong>
              <p>
                Heeft u een PGB? Onze ambulante begeleiding kan, afhankelijk van uw
                indicatie en zorgvraag, vanuit een PGB worden ingezet. Tijdens een
                kennismaking bekijken we samen of onze begeleiding aansluit bij uw
                ondersteuningsbehoefte.
              </p>
            </div>
          </article>
        </div>
      </section>

      <KennismakenCta />
      <SiteFooter />
    </main>
  );
}
