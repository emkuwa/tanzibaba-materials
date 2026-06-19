import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Paint Calculator | Tanzibaba',
  description: 'Estimate the amount of paint needed for your walls and ceilings. Free online paint calculator for Tanzania.',
  keywords: ['paint calculator', 'paint coverage', 'wall paint', 'construction calculator', 'Tanzania', 'building materials'],
  openGraph: {
    title: 'Free Paint Calculator | Tanzibaba',
    description: 'Estimate the amount of paint needed for your walls and ceilings.',
    url: 'https://materials.tanzibaba.com/tools/paint-calculator',
    siteName: 'Tanzibaba',
    type: 'website',
  },
  alternates: {
    canonical: 'https://materials.tanzibaba.com/tools/paint-calculator',
  },
};

export default function PaintCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}