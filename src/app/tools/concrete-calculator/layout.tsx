import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concrete Volume & Dar es Salaam Price Calculator | Tanzibaba',
  description: 'Kokotoa kiasi cha zege na bei ya delivery Dar es Salaam. Choose your area, estimate C15–C40 concrete prices and learn about concrete grades and curing.',
  keywords: ['concrete calculator', 'concrete volume', 'construction calculator', 'Tanzania', 'ready mix concrete'],
  openGraph: {
    title: 'Concrete Volume & Dar es Salaam Price Calculator | Tanzibaba',
    description: 'Calculate concrete volume and estimate delivery-based C15–C40 prices for your Dar es Salaam site.',
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
