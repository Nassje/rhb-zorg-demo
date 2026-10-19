import type { Metadata } from 'next';
import Image from 'next/image';
import { DocumentBlocks } from '../components/DocumentBlocks';
import { ExternalComplaintsLink } from '../components/ExternalComplaintsLink';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { SectionIndex } from '../components/SectionIndex';
import { basePath } from '../lib/basePath';
import { qualitySections } from '../lib/policies';

export const metadata: Metadata = {
  title: 'Kwaliteit & Veiligheid | RHB Zorg',
  description: 'Onze afspraken over veilige en deskundige begeleiding, de meldcode, klachten en onafhankelijke ondersteuning.',
};

export default function KwaliteitVeiligheid() {
  const [introduction, ...sections] = qualitySections;
  return (
    <>
      <SiteHeader active="/kwaliteit-veiligheid" overlay />
      <main>
        <section className="hero quality-cinematic" aria-labelledby="quality-title">
          <div className="hero-copy">
            <p className="eyebrow light">Zorgvuldig, veilig en professioneel.</p>
            <h1 id="quality-title">Kwaliteit &amp;<br /><span>veiligheid.</span></h1>
            <div className="title-rule" aria-hidden="true" />
            <div className="intro quality-hero-intro"><DocumentBlocks blocks={introduction.blocks} /></div>
            <div className="hero-actions">
              <a className="button secondary" href="#klachten">Vragen, zorgen of een klacht?</a>
            </div>
          </div>
          <div className="hero-art quality-art">
            <Image
              className="quality-hero-image"
              src={`${basePath}/rhb-kwaliteit-veiligheid.webp`}
              alt="Een begeleider en cliënt bespreken samen hun afspraken in een rustige huiskamer"
              fill
              sizes="100vw"
              priority
            />
            <div className="line-motif line-motif-one" aria-hidden="true" />
            <div className="line-motif line-motif-two" aria-hidden="true" />
          </div>
        </section>
        <div className="page-shell policy-layout quality-layout">
          <SectionIndex items={sections.map(({ id, title }) => ({ id, title }))} title="Onze afspraken" label="Kwaliteit en veiligheid" />
          <div className="policy-body">
            {sections.map((section) => (
              <section className="document-section" key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                <DocumentBlocks blocks={section.blocks} />
                {section.id === 'klachten' ? (
                  <>
                    <div className="policy-actions">
                      <a className="button primary" href={`${basePath}/klacht-indienen/`}>Klacht indienen</a>
                      <a className="button secondary" href={`${basePath}/klachtenregeling/`}>Klachtenregeling</a>
                    </div>
                    <ExternalComplaintsLink />
                  </>
                ) : null}
                {section.id === 'vertrouwenspersoon' ? (
                  <a className="button secondary" href="https://jeugdstem.nl/">Onafhankelijke vertrouwenspersoon ↗</a>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
