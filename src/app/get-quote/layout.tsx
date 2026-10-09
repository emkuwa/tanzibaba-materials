import type { Metadata } from 'next';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Get a Quote — Ready-Mix Concrete & Materials Prices in Tanzania',
  description:
    'Get an instant price estimate for ready-mix concrete (C10–C50), aggregates, blocks and construction materials in Dar es Salaam, Zanzibar and Dodoma. Prices include 18% VAT. Same-day quotes via WhatsApp +255 716 002 790.',
  alternates: { canonical: `${siteUrl}/get-quote` },
  openGraph: {
    title: 'Get a Quote | Tanzibaba',
    description:
      'Instant price estimates for concrete, aggregates and blocks in Tanzania. Prices include VAT. Same-day quotes.',
    url: `${siteUrl}/get-quote`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

export default function GetQuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
