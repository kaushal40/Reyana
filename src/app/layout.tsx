import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'House of Reyana — Minimalism with a Meaning',
  description: 'Craft-led modern fashion by Shreya & Krina Ranch. Elevated Western silhouettes infused with authentic Indian textile artistry — hand block printing, Chikankari embroidery, natural fabrics.',
  keywords: 'Indian heritage fashion, Chikankari, hand block print, sustainable fashion, Indian craftsmanship',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
