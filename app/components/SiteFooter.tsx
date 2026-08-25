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
        <p>Persoonlijke begeleiding in regio Overijssel.</p>
        <small>Contact- en organisatiedetails worden later toegevoegd.</small>
      </div>
      <div className="footer-mark" aria-hidden="true">
        <img src={`${basePath}/rhb-logo-hq.png`} alt="" />
      </div>
    </footer>
  );
}
