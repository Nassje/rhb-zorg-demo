'use client';

import { useRef, useState, type FormEvent } from 'react';
import { basePath } from '../lib/basePath';
import { contactDetails } from '../lib/content';

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const submitting = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setSending(true);
    setError('');
    const payload = new FormData(event.currentTarget);
    // AJAX handles navigation only after the service confirms acceptance.
    payload.delete('redirect');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30_000);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
        signal: controller.signal,
      });
      const result: { success?: boolean } = await response.json();
      if (!response.ok || result.success !== true) {
        setError('Uw bericht kon niet worden verstuurd. Probeer het later opnieuw.');
        return;
      }
      window.location.assign(`${basePath}/contact/bedankt/`);
    } catch {
      setError('We konden de verzending niet bevestigen. Uw ingevulde bericht blijft bewaard op deze pagina.');
    } finally {
      clearTimeout(timeout);
      submitting.current = false;
      setSending(false);
    }
  }

  return (
    <form className="contact-form" action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} aria-busy={sending}>
      <input type="hidden" name="subject" value="Nieuw contactbericht via RHB Zorg" />
      <input type="hidden" name="access_key" value="fd6852a5-9d5c-40be-9145-985cae3ac904" />
      <input type="hidden" name="from_name" value="RHB Zorg website" />
      <input type="hidden" name="redirect" value="https://rhbzorg.nl/contact/bedankt/" />
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
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
        <select id="subject" name="onderwerp" defaultValue="" required>
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

      <button className="button primary form-submit" type="submit" disabled={sending}>
        {sending ? 'Bezig met versturen…' : 'Versturen'}
      </button>
      <p className="form-status">
        Uw bericht wordt via Web3Forms naar {contactDetails.email} verstuurd.
      </p>
      {error && <p className="form-status" role="alert">{error} U kunt ook rechtstreeks mailen naar <a href={contactDetails.emailHref}>{contactDetails.email}</a>.</p>}
    </form>
  );
}
