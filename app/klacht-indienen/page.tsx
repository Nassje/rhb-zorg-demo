import type { Metadata } from 'next';
import { ComplaintForm } from '../components/ComplaintForm';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { basePath } from '../lib/basePath';

export const metadata: Metadata = {
  title: 'Klacht indienen | RHB Zorg',
  description: 'Informatie over het indienen van een klacht bij Stichting RHB Zorg.',
};

export default function KlachtIndienen() {
  return (
    <>
      <SiteHeader active="/kwaliteit-veiligheid" />
      <main className="complaint-page page-shell">
        <header className="policy-intro">
          <a className="back-link" href={`${basePath}/kwaliteit-veiligheid/#klachten`}>← Kwaliteit &amp; Veiligheid</a>
          <p className="eyebrow">Wij luisteren.</p>
          <h1>Klacht indienen</h1>
          <p>Bent u niet tevreden over onze begeleiding, communicatie of werkwijze? Dan horen wij dat graag.</p>
          <p>Wilt u uw ontevredenheid eerst met ons bespreken? Dat kan uiteraard. Een gesprek met RHB Zorg is echter niet verplicht om een klacht te kunnen indienen.</p>
          <a className="text-link" href={`${basePath}/klachtenregeling/`}>Lees onze klachtenregeling →</a>
        </header>
        <ComplaintForm />
      </main>
      <SiteFooter />
    </>
  );
}
