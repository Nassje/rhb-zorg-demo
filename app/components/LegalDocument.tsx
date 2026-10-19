import { basePath } from '../lib/basePath';
import { contactDetails } from '../lib/content';
import { externalComplaintsUrl } from '../lib/complaints';
import type { DocumentSection } from '../lib/policies';
import { DocumentBlocks } from './DocumentBlocks';
import { ExternalComplaintsLink } from './ExternalComplaintsLink';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';
import { SectionIndex } from './SectionIndex';

type LegalDocumentProps = {
  title: string;
  description: string;
  version?: string;
  sections: DocumentSection[];
  complaints?: boolean;
};

export function LegalDocument({ title, description, version, sections, complaints = false }: LegalDocumentProps) {
  return (
    <>
      <SiteHeader active={complaints ? '/kwaliteit-veiligheid' : ''} />
      <main className="policy-page page-shell" id="inhoud">
        <header className="policy-intro">
          <a className="back-link" href={`${basePath}/kwaliteit-veiligheid/`}>← Kwaliteit &amp; Veiligheid</a>
          <p className="eyebrow">Stichting RHB Zorg</p>
          <h1>{title}</h1>
          <p>{description}</p>
          {version ? <span className="document-version">Versie: {version}</span> : null}
        </header>
        <div className="policy-layout">
          <SectionIndex items={sections.map(({ id, title }) => ({ id, title }))} />
          <article className="policy-body">
            {sections.map((section) => (
              <section className="document-section" key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                {complaints && section.id === 'onderdeel-5' ? (
                  <>
                    <p>Het online klachtenformulier wordt voorbereid en is nog niet beschikbaar. Neem voor het indienen van een klacht contact op met RHB Zorg via <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>.</p>
                    <DocumentBlocks blocks={section.blocks.slice(1)} />
                    <a className="button secondary" href={`${basePath}/klacht-indienen/`}>Naar het klachtenformulier</a>
                  </>
                ) : complaints && section.id === 'onderdeel-6' ? (
                  <>
                    {externalComplaintsUrl ? <DocumentBlocks blocks={section.blocks} /> : <p>Voor informatie over de onafhankelijke klachtenprocedure bij jeugdhulp kunt u contact opnemen met RHB Zorg. De gegevens van de externe klachtenvoorziening worden hier toegevoegd zodra de aansluiting definitief is.</p>}
                    <ExternalComplaintsLink />
                  </>
                ) : <DocumentBlocks blocks={section.blocks} />}
                {complaints && section.id === 'onderdeel-7' ? <a className="text-link" href="https://jeugdstem.nl/">Naar Jeugdstem ↗</a> : null}
              </section>
            ))}
            <a className="back-link" href="#inhoud">Terug naar boven ↑</a>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
