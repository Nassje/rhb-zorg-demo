import Image from 'next/image';
import { basePath } from '../lib/basePath';
import { contactDetails } from '../lib/content';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-tagline">
        <span aria-hidden="true" />
        <strong>Met aandacht.</strong>
        <em>Vooruit door verbinding.</em>
      </div>
      <div className="footer-info">
        <strong>RHB Zorg</strong>
        <p><a href={contactDetails.emailHref}>{contactDetails.email}</a></p>
        <p><a href={contactDetails.phoneHref}>{contactDetails.phone}</a></p>
        <p>Instagram: <a href={contactDetails.instagramHref}>{contactDetails.instagram}</a></p>
      </div>
      <div className="footer-membership">
        <span>Lid van BVKZ · 2026</span>
        <a className="footer-bvkz" href="https://www.bvkz.nl/" aria-label="Branchevereniging Kleinschalige Zorg — naar de website van BVKZ">
          <Image src={`${basePath}/bvkz-logo.svg`} alt="BVKZ — Branchevereniging Kleinschalige Zorg" width={1013} height={314} />
        </a>
      </div>
      <nav className="footer-legal" aria-label="Kwaliteit en juridische informatie">
        <a href={`${basePath}/kwaliteit-veiligheid/`}>Kwaliteit &amp; Veiligheid</a>
        <a href={`${basePath}/klachtenregeling/`}>Klachtenregeling</a>
        <a href={`${basePath}/privacyverklaring/`}>Privacyverklaring</a>
        <a href={`${basePath}/algemene-voorwaarden/`}>Algemene voorwaarden</a>
      </nav>
    </footer>
  );
}
