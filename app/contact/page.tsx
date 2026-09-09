import type { Metadata } from 'next';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { contactDetails } from '../lib/content';

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
          <dl className="contact-details">
            <div>
              <dt>E-mail</dt>
              <dd><a href={contactDetails.emailHref}>{contactDetails.email}</a></dd>
            </div>
            <div>
              <dt>Telefoon</dt>
              <dd><a href={contactDetails.phoneHref}>{contactDetails.phone}</a></dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd><a href={contactDetails.instagramHref}>{contactDetails.instagram}</a></dd>
            </div>
          </dl>
        </div>

        <section className="contact-form-card" aria-labelledby="contact-form-title">
          <p className="eyebrow light">Aanmelden & informatie.</p>
          <h2 id="contact-form-title">Contactformulier.</h2>
          <form className="contact-form" action={`https://formsubmit.co/${contactDetails.email}`} method="POST">
            <input type="hidden" name="_subject" value="Nieuw contactbericht via RHB Zorg" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://rhbzorg.nl/contact/bedankt/" />
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
            <div className="form-field">
              <label htmlFor="name">Naam</label>
              <input id="name" name="name" type="text" autoComplete="name" maxLength={150} required />
            </div>

            <div className="form-field">
              <label htmlFor="email">E-mailadres</label>
              <input id="email" name="email" type="email" autoComplete="email" maxLength={254} required />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Telefoonnummer</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} />
            </div>

            <div className="form-field">
              <label htmlFor="subject">Waar gaat uw vraag over?</label>
              <select id="subject" name="subject" defaultValue="" required>
                <option value="" disabled>Kies een onderwerp</option>
                <option value="Ambulante begeleiding">Ambulante begeleiding</option>
                <option value="Begeleiding via PGB">Begeleiding via PGB</option>
                <option value="Samenwerking">Samenwerking</option>
                <option value="Anders">Anders</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">Bericht</label>
              <textarea id="message" name="message" rows={5} maxLength={5000} required />
            </div>

            <button className="button primary form-submit" type="submit">
              Versturen
            </button>
            <p className="form-status">
              Uw bericht wordt via FormSubmit naar {contactDetails.email} verstuurd.
            </p>
          </form>
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}
