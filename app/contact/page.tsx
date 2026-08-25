import type { Metadata } from 'next';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Contact | RHB Zorg',
  description: 'Neem contact op met RHB Zorg voor een kennismaking of meer informatie.',
};

export default function Contact() {
  return (
    <main>
      <SiteHeader active="/contact" />
      <section className="contact-page page-shell">
        <div className="page-intro">
          <p className="eyebrow">Kennismaken</p>
          <h1>Samen kijken naar wat <span>wél</span> kan.</h1>
          <div className="title-rule" aria-hidden="true" />
          <p>
            Wilt u weten wat RHB Zorg kan betekenen voor u, uw kind of iemand die u begeleidt?
            Neem gerust contact met ons op. We bespreken de situatie, de ondersteuningsvraag
            en welke mogelijkheden passend zijn.
          </p>
        </div>

        <aside className="contact-placeholder">
          <p className="eyebrow light">Aanmelden & informatie</p>
          <h2>Contactgegevens volgen</h2>
          <p>
            Het telefoonnummer, e-mailadres, bezoekadres en de QR-code worden toegevoegd
            zodra de definitieve gegevens beschikbaar zijn.
          </p>
          <span className="placeholder-pill">Binnenkort beschikbaar</span>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
