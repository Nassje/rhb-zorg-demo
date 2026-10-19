import { basePath } from '../lib/basePath';
import { contactDetails } from '../lib/content';

// Intentionally inactive until delivery, attachment handling and receipt emails
// have been connected and verified. A disabled fieldset also works without JS.
export function ComplaintForm() {
  return (
    <section className="complaint-form-panel" aria-labelledby="complaint-form-title">
      <header>
        <p className="eyebrow">Uw klacht, zorgvuldig behandeld.</p>
        <h2 id="complaint-form-title">Klachtenformulier</h2>
        <div className="form-unavailable" id="complaint-form-status">
          <strong>Online indienen is nog niet beschikbaar.</strong>
          <p>Neem voor het indienen van een klacht contact op met RHB Zorg via <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>. Hieronder ziet u welke informatie in het formulier wordt gevraagd.</p>
        </div>
      </header>
      <form className="complaint-form" aria-describedby="complaint-form-status">
        <fieldset disabled>
          <legend>1. Uw gegevens</legend>
          <div className="complaint-field-grid">
            <div className="form-field"><label htmlFor="complaint-name">Naam</label><input id="complaint-name" name="name" autoComplete="name" maxLength={150} /></div>
            <div className="form-field"><label htmlFor="complaint-email">E-mailadres</label><input id="complaint-email" name="email" type="email" autoComplete="email" maxLength={254} /></div>
            <div className="form-field"><label htmlFor="complaint-phone">Telefoonnummer</label><input id="complaint-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} /></div>
          </div>
        </fieldset>
        <fieldset disabled>
          <legend>2. Gegevens cliënt</legend>
          <div className="complaint-field-grid">
            <div className="form-field"><label htmlFor="complaint-client">Naam cliënt</label><input id="complaint-client" name="client_name" maxLength={150} /></div>
            <div className="form-field">
              <label htmlFor="complaint-relation">Uw relatie tot de cliënt</label>
              <select id="complaint-relation" name="relationship" defaultValue="">
                <option value="" disabled>Kies uw relatie</option>
                <option>Cliënt</option><option>Ouder/verzorger</option><option>Wettelijk vertegenwoordiger</option><option>Anders</option>
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset disabled>
          <legend>3. Uw klacht</legend>
          <div className="form-field"><label htmlFor="complaint-subject">Waar gaat uw klacht over?</label><textarea id="complaint-subject" name="subject" rows={3} maxLength={5000} /></div>
          <div className="form-field"><label htmlFor="complaint-description">Wat is er gebeurd?</label><textarea id="complaint-description" name="description" rows={5} maxLength={10000} /></div>
          <div className="form-field"><label htmlFor="complaint-date">Wanneer heeft dit plaatsgevonden?</label><input id="complaint-date" name="incident_date" type="date" /></div>
          <div className="form-field"><label htmlFor="complaint-contact">Met wie binnen RHB Zorg heeft u hierover contact gehad, indien van toepassing?</label><input id="complaint-contact" name="previous_contact" maxLength={250} /></div>
          <div className="form-field">
            <label htmlFor="complaint-discussed">Heeft u deze situatie of klacht al eerder met RHB Zorg besproken?</label>
            <select id="complaint-discussed" name="previously_discussed" defaultValue=""><option value="" disabled>Kies een antwoord</option><option>Ja</option><option>Nee</option></select>
          </div>
          <div className="form-field"><label htmlFor="complaint-agreements">Indien ja, wat is er besproken of afgesproken?</label><textarea id="complaint-agreements" name="previous_agreements" rows={3} maxLength={5000} /></div>
        </fieldset>
        <fieldset disabled>
          <legend>4. Wat kunnen wij voor u doen?</legend>
          <div className="form-field"><label htmlFor="complaint-outcome">Wat zou u graag willen dat RHB Zorg met uw klacht doet?</label><textarea id="complaint-outcome" name="desired_outcome" rows={4} maxLength={5000} /></div>
        </fieldset>
        <fieldset disabled>
          <legend>5. Bijlage</legend>
          <div className="form-field"><label htmlFor="complaint-attachment">Wilt u een document of andere relevante informatie toevoegen?</label><input id="complaint-attachment" name="attachment" type="file" /></div>
        </fieldset>
        <div className="complaint-privacy">
          <h3>Privacy</h3>
          <p>De gegevens die u via dit formulier verstrekt, worden gebruikt voor de behandeling en afhandeling van uw klacht. RHB Zorg gaat zorgvuldig en vertrouwelijk met deze gegevens om. Lees onze <a href={`${basePath}/privacyverklaring/`}>privacyverklaring</a>.</p>
        </div>
        <button type="button" className="button primary" disabled aria-describedby="complaint-form-status">Klacht indienen — nog niet beschikbaar</button>
      </form>
    </section>
  );
}
