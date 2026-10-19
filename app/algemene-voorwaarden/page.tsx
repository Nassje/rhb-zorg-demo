import type { Metadata } from 'next';
import { LegalDocument } from '../components/LegalDocument';
import { conditionsSections } from '../lib/policies';

export const metadata: Metadata = {
  title: 'Algemene voorwaarden | RHB Zorg',
  description: 'Algemene voorwaarden van Stichting RHB Zorg voor ambulante begeleiding en ondersteuning. Versie september 2026.',
};

export default function AlgemeneVoorwaarden() {
  return <LegalDocument title="Algemene voorwaarden" description="Ambulante begeleiding en ondersteuning." version="september 2026" sections={conditionsSections} />;
}
