import type { Metadata } from 'next';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Tanzania Construction Directory — Contractors, Engineers & Suppliers',
  description:
    'Search the Tanzibaba construction directory: building contractors, architects, engineers, quantity surveyors, material suppliers and equipment hire across Dar es Salaam and Tanzania.',
  alternates: { canonical: `${siteUrl}/directory` },
  openGraph: {
    title: 'Tanzania Construction Directory | Tanzibaba',
    description:
      'Find contractors, architects, engineers, suppliers and service providers for construction projects in Tanzania.',
    url: `${siteUrl}/directory`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

export default function DirectoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
