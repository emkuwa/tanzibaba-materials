import type { Metadata } from 'next';
import HomeClient from './_components/HomeClient';
import { homeFaqs } from '@/data/homeFaq';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Tanzibaba — Ready-Mix Concrete, Aggregates & Building Materials | Tanzania',
  description:
    'Tanzibaba supplies ready-mix concrete (grades C10–C50), aggregates, concrete blocks, paving blocks and construction equipment across Dar es Salaam, Zanzibar and Dodoma. Estimate concrete volume and delivery-based prices online. Get a quote in under 2 minutes.',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Tanzibaba — Ready-Mix Concrete, Aggregates & Building Materials | Tanzania',
    description:
      'Ready-mix concrete C10–C50, aggregates, blocks and equipment across Dar es Salaam, Zanzibar and Dodoma. Try our concrete volume and price calculator. Get a quote in under 2 minutes.',
    url: siteUrl,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'Tanzibaba — Ready-Mix Concrete, Aggregates & Building Materials | Tanzania',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en-TZ',
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: homeFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Raw script (not next/script) so JSON-LD is present in SSR HTML for crawlers */}
      <script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
