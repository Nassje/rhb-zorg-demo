import type { Metadata } from 'next';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Contact | RHB Zorg',
  description: 'Neem contact op met RHB Zorg over ambulante begeleiding, begeleiding via PGB of samenwerking.',
};

export default function Contact() {
  return (
    <main>
      <SiteHeader active="/contact" />
      <section className="contact-page page-shell">
        <div className="page-intro">
          <p className="eyebrow">Kennismaken.</p>
          <h1>Samen kijken naar wat <span>wél kan.</span></h1>
          <div className="title-rule" aria-hidden="true" />
          <p>
            Heeft u een vraag over onze ambulante begeleiding of wilt u bespreken of
            RHB Zorg bij uw ondersteuningsvraag past? Neem gerust contact met ons op.
          </p>
        </div>

        <section className="contact-form-card" aria-labelledby="contact-form-title">
          <p className="eyebrow light">Aanmelden & informatie.</p>
          <h2 id="contact-form-title">Contactformulier.</h2>
          <form className="contact-form">
            <div className="form-field">
              <label htmlFor="name">Naam</label>
              <input id="name" name="name" type="text" autoComplete="name" required />
            </div>

            <div className="form-field">
              <label htmlFor="email">E-mailadres</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Telefoonnummer</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>

            <div className="form-field">
              <label htmlFor="subject">Waar gaat uw vraag over?</label>
              <select id="subject" name="subject" defaultValue="" required>
                <option value="" disabled>Kies een onderwerp</option>
                <option value="ambulante-begeleiding">Ambulante begeleiding</option>
                <option value="pgb">Begeleiding via PGB</option>
                <option value="samenwerking">Samenwerking</option>
                <option value="anders">Anders</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">Bericht</label>
              <textarea id="message" name="message" rows={5} required />
            </div>

            <button className="button primary form-submit" type="button" disabled>
              Versturen
            </button>
            <p className="form-status">
              Verzenden wordt geactiveerd zodra het definitieve ontvangstadres bekend is.
            </p>
          </form>
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}
