import type { Metadata } from 'next';
import { LegalDocument } from '../components/LegalDocument';
import { privacySections } from '../lib/policies';

export const metadata: Metadata = {
  title: 'Privacyverklaring | RHB Zorg',
  description: 'Hoe Stichting RHB Zorg omgaat met persoonsgegevens en privacyrechten. Versie september 2026.',
};

export default function Privacyverklaring() {
  return <LegalDocument title="Privacyverklaring" description="Hoe wij omgaan met uw persoonsgegevens en uw privacyrechten." version="september 2026" sections={privacySections} />;
}
