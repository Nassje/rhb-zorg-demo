import type { Metadata } from 'next';
import { ContactForm } from '../components/ContactForm';
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
          <ContactForm />
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}
