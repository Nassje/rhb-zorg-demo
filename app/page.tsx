import { KennismakenCta } from './components/KennismakenCta';
import { BrandIcon } from './components/BrandIcons';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { services, themes } from './lib/content';
import { basePath } from './lib/basePath';

export default function Home() {
  return (
    <main>
      <SiteHeader active="/" />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">Samen kijken<br />naar wat <span>wél</span> kan.</h1>
          <div className="title-rule" aria-hidden="true" />
          <p className="intro">
            RHB Zorg biedt ambulante begeleiding aan mensen die ondersteuning nodig
            hebben bij het vergroten van hun zelfredzaamheid, structuur en
            zelfstandigheid in het dagelijks leven.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={`${basePath}/wat-wij-doen`}>Ontdek wat wij doen</a>
            <a className="button secondary" href={`${basePath}/over-rhb-zorg`}>Over RHB Zorg</a>
          </div>
        </div>

        <div
          className="hero-art"
          role="img"
          aria-label="Twee mensen helpen elkaar vooruit op een heuvel"
          style={{
            backgroundImage: `url('${basePath}/rhb-hero-video-poster.jpg')`,
          }}
        >
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={`${basePath}/rhb-hero-video-poster.jpg`}
            aria-hidden="true"
          >
            <source src={`${basePath}/rhb-hero-video.mp4`} type="video/mp4" />
          </video>
          <div className="line-motif line-motif-one" aria-hidden="true" />
          <div className="line-motif line-motif-two" aria-hidden="true" />
        </div>
      </section>

      <section className="promise" aria-label="Onze manier van werken">
        <p><span>Aandacht</span> voor de persoon.</p>
        <p><span>Verbinding</span> met de omgeving.</p>
        <p><span>Vooruitgang</span> op eigen tempo.</p>
      </section>

      <section className="home-approach page-shell" aria-labelledby="approach-title">
        <div className="section-copy">
          <p className="eyebrow">Wat wij doen</p>
          <h2 id="approach-title">Ambulante begeleiding, gericht op wat <span>wél</span> kan.</h2>
          <div className="title-rule" aria-hidden="true" />
          <p>
            We kijken niet alleen naar wat moeilijk gaat, maar vooral naar welke
            ondersteuning nodig is om verder te komen. De begeleiding is kleinschalig,
            praktisch en afgestemd op de persoonlijke situatie.
          </p>
          <a className="text-link" href={`${basePath}/wat-wij-doen#themas`}>Bekijk onze begeleiding</a>
        </div>

        <div className="service-list home-service-list">
          {services.map((service) => (
            <article className="service-row" key={service.title}>
              <span className={`service-icon service-icon-${service.icon}`} aria-hidden="true">
                <BrandIcon name={service.icon} />
              </span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-themes" aria-labelledby="themes-title">
        <div className="page-shell">
          <div className="section-copy wide">
            <p className="eyebrow">Samen werken aan</p>
            <h2 id="themes-title">Waaraan kunnen we <span>werken</span>?</h2>
            <div className="title-rule" aria-hidden="true" />
          </div>
          <ul className="theme-grid">
            {themes.map((theme) => (
              <li key={theme.title}>
                <a href={`${basePath}/wat-wij-doen#${theme.slug}`}>
                  <span className="theme-icon" aria-hidden="true">
                    <BrandIcon name={theme.icon} />
                  </span>
                  <span>{theme.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-about" aria-labelledby="home-about-title">
        <div className="page-shell home-about-grid">
          <div className="section-copy">
            <p className="eyebrow">Over RHB Zorg</p>
            <h2 id="home-about-title">Een kleinschalige stichting met een warm hart voor mensen.</h2>
            <div className="title-rule" aria-hidden="true" />
            <p>
              Wij bieden ambulante begeleiding aan mensen die ondersteuning nodig
              hebben bij het vergroten van hun zelfredzaamheid, structuur en
              zelfstandigheid — met aandacht, respect en zonder oordeel.
            </p>
            <a className="text-link" href={`${basePath}/over-rhb-zorg`}>Meer over wie wij zijn</a>
          </div>
          <blockquote className="home-quote">
            <p>Met aandacht.<br /><em>Vooruit door verbinding.</em></p>
          </blockquote>
        </div>
      </section>

      <KennismakenCta />
      <SiteFooter />
    </main>
  );
}
