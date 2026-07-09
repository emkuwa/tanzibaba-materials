import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Construction Cost Calculator | Tanzibaba',
  description: 'Estimate total construction costs including materials, labour and miscellaneous expenses. Free online cost calculator for Tanzania.',
  keywords: ['cost calculator', 'construction cost', 'building cost', 'construction calculator', 'Tanzania', 'building materials'],
  openGraph: {
    title: 'Free Construction Cost Calculator | Tanzibaba',
    description: 'Estimate total construction costs including materials, labour and miscellaneous expenses.',
    url: 'https://materials.tanzibaba.com/tools/cost-calculator',
    siteName: 'Tanzibaba',
    type: 'website',
  },
  alternates: {
    canonical: 'https://materials.tanzibaba.com/tools/cost-calculator',
  },
};

export default function CostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}