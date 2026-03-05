import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'House of Reyana — A Love Letter to Our Roots',
  description: 'The first contemporary brand purpose-built to bring Indian heritage craftsmanship into Western wardrobes. Hand block printing, Chikankari embroidery, natural fabrics.',
  keywords: 'Indian heritage fashion, Chikankari, hand block print, sustainable fashion, Indian craftsmanship',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
