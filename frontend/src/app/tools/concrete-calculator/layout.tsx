import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Concrete Volume Calculator | Tanzibaba',
  description: 'Calculate exact concrete volume for slabs, columns, beams and footings. Free online calculator with waste factor for construction projects in Tanzania.',
  keywords: ['concrete calculator', 'concrete volume', 'construction calculator', 'Tanzania', 'ready mix concrete'],
  openGraph: {
    title: 'Free Concrete Volume Calculator | Tanzibaba',
    description: 'Calculate exact concrete volume for slabs, columns, beams and footings. Free online calculator with waste factor.',
    url: 'https://materials.tanzibaba.com/tools/concrete-calculator',
    siteName: 'Tanzibaba',
    type: 'website',
  },
  alternates: {
    canonical: 'https://materials.tanzibaba.com/tools/concrete-calculator',
  },
};

export default function ConcreteCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
