import type { Metadata } from 'next';
import { siteUrl } from '@/data/locations';

export const metadata: Metadata = {
  title: 'Get a Quote — Ready-Mix Concrete, Aggregates & Building Materials | Tanzibaba',
  description: 'Request a quick price estimate for ready-mix concrete, aggregates, blocks, and construction materials in Tanzania. Fast response within 24 hours.',
  alternates: { canonical: `${siteUrl}/get-quote` },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Get a Quote | Tanzibaba',
    description: 'Request a quick price estimate for concrete, aggregates, and construction materials in Tanzania.',
    url: `${siteUrl}/get-quote`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

export default function GetQuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
