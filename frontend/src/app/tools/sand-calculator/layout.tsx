import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Sand Calculator | Tanzibaba',
  description: 'Calculate the volume and weight of sand needed for your construction project. Free online sand calculator for Tanzania.',
  keywords: ['sand calculator', 'sand volume', 'sand weight', 'construction calculator', 'Tanzania', 'building materials'],
  openGraph: {
    title: 'Free Sand Calculator | Tanzibaba',
    description: 'Calculate the volume and weight of sand needed for your construction project.',
    url: 'https://materials.tanzibaba.com/tools/sand-calculator',
    siteName: 'Tanzibaba',
    type: 'website',
  },
  alternates: {
    canonical: 'https://materials.tanzibaba.com/tools/sand-calculator',
  },
};

export default function SandCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}