import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free BOQ Generator | Tanzibaba',
  description: 'Generate a simple bill of quantities for your construction project. Free online BOQ generator for Tanzania.',
  keywords: ['BOQ generator', 'bill of quantities', 'construction BOQ', 'construction calculator', 'Tanzania', 'building materials'],
  openGraph: {
    title: 'Free BOQ Generator | Tanzibaba',
    description: 'Generate a simple bill of quantities for your construction project.',
    url: 'https://materials.tanzibaba.com/tools/boq-generator',
    siteName: 'Tanzibaba',
    type: 'website',
  },
  alternates: {
    canonical: 'https://materials.tanzibaba.com/tools/boq-generator',
  },
};

export default function BOQGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}