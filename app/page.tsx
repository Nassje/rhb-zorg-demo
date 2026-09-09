import { KennismakenCta } from './components/KennismakenCta';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { basePath } from './lib/basePath';

export default function Home() {
  return (
    <main>
      <SiteHeader active="/" />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">Samen kijken<br />naar wat <span>wél kan?</span></h1>
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
        <div className="section-copy wide">
          <h2 id="approach-title">Ambulante begeleiding, gericht op wat <span>wél kan.</span></h2>
          <div className="title-rule" aria-hidden="true" />
          <p>
            We kijken niet alleen naar wat moeilijk gaat, maar vooral naar welke
            ondersteuning nodig is om verder te komen. De begeleiding is kleinschalig,
            praktisch en afgestemd op de persoonlijke situatie.
          </p>
          <a className="text-link" href={`${basePath}/wat-wij-doen#themas`}>Bekijk onze begeleiding</a>
        </div>
      </section>

      <section className="home-themes" aria-labelledby="themes-title">
        <div className="page-shell">
          <div className="section-copy wide">
            <h2 id="themes-title">Waaraan kunnen we <span>werken?</span></h2>
            <div className="title-rule" aria-hidden="true" />
            <p>
              We helpen bij het aanbrengen van structuur, het oefenen van dagelijkse
              vaardigheden en het werken aan persoonlijke doelen. Bekijk de thema’s
              waarin wij begeleiding kunnen bieden.
            </p>
            <a className="text-link" href={`${basePath}/wat-wij-doen#themas`}>Bekijk alle thema’s</a>
          </div>
        </div>
      </section>

      <section className="home-about" aria-labelledby="home-about-title">
        <div className="page-shell">
          <div className="section-copy wide">
            <p className="eyebrow">Over RHB Zorg.</p>
            <h2 id="home-about-title">Een kleinschalige stichting met een warm hart voor mensen.</h2>
            <a className="text-link" href={`${basePath}/over-rhb-zorg`}>Meer over wie we zijn</a>
          </div>
        </div>
      </section>

      <KennismakenCta />
      <SiteFooter />
    </main>
  );
}
