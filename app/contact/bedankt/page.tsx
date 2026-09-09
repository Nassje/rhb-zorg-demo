import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Bedankt voor uw bericht | RHB Zorg',
  robots: { index: false, follow: false },
};

export default function ContactBedankt() {
  return (
    <main>
      <SiteHeader active="/contact" />
      <section className="page-shell">
        <div className="page-intro">
          <p className="eyebrow">Bedankt.</p>
          <h1>Uw bericht is <span>verstuurd.</span></h1>
          <div className="title-rule" aria-hidden="true" />
          <p>Bedankt voor uw interesse in RHB Zorg. We nemen zo snel mogelijk contact met u op.</p>
          <Link className="button primary" href="/">Terug naar home</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
