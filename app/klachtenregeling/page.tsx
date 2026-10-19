import type { Metadata } from 'next';
import { LegalDocument } from '../components/LegalDocument';
import { complaintSections } from '../lib/policies';

export const metadata: Metadata = {
  title: 'Klachtenregeling | RHB Zorg',
  description: 'Lees hoe Stichting RHB Zorg omgaat met klachten over begeleiding, communicatie of werkwijze.',
};

export default function Klachtenregeling() {
  return <LegalDocument title="Klachtenregeling" description="Uw ervaring telt. Wij nemen klachten serieus en behandelen ze zorgvuldig." sections={complaintSections} complaints />;
}
