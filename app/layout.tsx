import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'RHB Zorg | Met aandacht. Vooruit door verbinding.',
  description: 'Ambulante begeleiding met aandacht, respect en oog voor wat wél kan.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
