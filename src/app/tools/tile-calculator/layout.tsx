import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Tile Calculator | Tanzibaba',
  description: 'Calculate the number of tiles needed for your floor or wall area. Free online tile calculator for Tanzania.',
  keywords: ['tile calculator', 'floor tiles', 'wall tiles', 'construction calculator', 'Tanzania', 'building materials'],
  openGraph: {
    title: 'Free Tile Calculator | Tanzibaba',
    description: 'Calculate the number of tiles needed for your floor or wall area.',
    url: 'https://materials.tanzibaba.com/tools/tile-calculator',
    siteName: 'Tanzibaba',
    type: 'website',
  },
  alternates: {
    canonical: 'https://materials.tanzibaba.com/tools/tile-calculator',
  },
};

export default function TileCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}