import Image from 'next/image';
import { basePath } from '../lib/basePath';

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
        <small>Contact- en organisatiedetails worden later toegevoegd.</small>
      </div>
      <div className="footer-mark" aria-hidden="true">
        <Image src={`${basePath}/rhb-logo-hq.png`} alt="" width={1536} height={1024} />
      </div>
    </footer>
  );
}
