import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Block Calculator | Tanzibaba',
  description: 'Estimate number of concrete blocks needed for walls and partitions. Free online block calculator for construction projects in Tanzania.',
  keywords: ['block calculator', 'concrete blocks', 'construction calculator', 'Tanzania', 'building materials'],
  openGraph: {
    title: 'Free Block Calculator | Tanzibaba',
    description: 'Estimate number of concrete blocks needed for walls and partitions.',
    url: 'https://materials.tanzibaba.com/tools/block-calculator',
    siteName: 'Tanzibaba',
    type: 'website',
  },
  alternates: {
    canonical: 'https://materials.tanzibaba.com/tools/block-calculator',
  },
};

export default function BlockCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
