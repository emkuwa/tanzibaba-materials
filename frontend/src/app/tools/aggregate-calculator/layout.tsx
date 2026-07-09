import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Aggregate Calculator | Tanzibaba',
  description: 'Calculate the volume and weight of aggregate, gravel or crushed stone needed. Free online aggregate calculator for Tanzania.',
  keywords: ['aggregate calculator', 'gravel calculator', 'crushed stone', 'construction calculator', 'Tanzania', 'building materials'],
  openGraph: {
    title: 'Free Aggregate Calculator | Tanzibaba',
    description: 'Calculate the volume and weight of aggregate, gravel or crushed stone needed.',
    url: 'https://materials.tanzibaba.com/tools/aggregate-calculator',
    siteName: 'Tanzibaba',
    type: 'website',
  },
  alternates: {
    canonical: 'https://materials.tanzibaba.com/tools/aggregate-calculator',
  },
};

export default function AggregateCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}