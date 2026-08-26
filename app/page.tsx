import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
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
            RHB Zorg biedt persoonlijke begeleiding aan mensen die meer grip,
            structuur en zelfstandigheid in hun dagelijks leven willen ontwikkelen.
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

      <SiteFooter />
    </main>
  );
}
