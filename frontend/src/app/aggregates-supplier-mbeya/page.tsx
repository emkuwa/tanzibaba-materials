import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, HelpCircle, Phone, CheckCircle } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Aggregates Supplier Mbeya — Sand, Gravel & Ballast | Tanzibaba',
  description:
    'Premium aggregates supplier in Mbeya. Washed sand, gravel, ballast and crushtites. Delivery across Mbeya region.',
  keywords: [
    'aggregates supplier Mbeya',
    'sand supplier Mbeya',
    'gravel Mbeya',
    'ballast Mbeya Tanzania',
    'crushtites Mbeya',
  ],
  alternates: {
    canonical: `${siteUrl}/aggregates-supplier-mbeya`,
  },
  openGraph: {
    title: 'Aggregates Supplier Mbeya — Sand, Gravel & Ballast | Tanzibaba',
    description:
      'Premium aggregates supplier in Mbeya. Washed sand, gravel, ballast and crushtites.',
    url: `${siteUrl}/aggregates-supplier-mbeya`,
    siteName: 'Tanzibaba',
    type: 'website',
  },
};

const areas = [
  'Mbeya City',
  'Tukuyu',
  'Tabora',
  'Itiji',
  'Maunda',
  "Lwang'wa",
  'Nsalishi',
  'Sumbawanga',
];

const faqs = [
  {
    question: 'What aggregates do you supply in Mbeya?',
    answer:
      'We supply washed sand, gravel, ballast and crushtites in Mbeya. Our aggregates are sourced and graded to meet Tanzanian construction standards for concrete mixing, road construction and general building work.',
  },
  {
    question: 'Do you deliver to Tukuyu and Sumbawanga?',
    answer:
      'Yes, we deliver aggregates to Tukuyu, Sumbawanga and all areas across the Mbeya region. Delivery is arranged through our logistics network with competitive pricing for bulk orders.',
  },
  {
    question: 'What is the price of sand?',
    answer:
      'Sand prices in Mbeya vary based on type and quantity. Contact us via WhatsApp or phone for a current price list and bulk order discounts for washed sand and river sand.',
  },
  {
    question: 'What is the price of gravel?',
    answer:
      'Gravel prices in Mbeya depend on size, grade and quantity. We offer competitive rates for small and large orders. Contact us for a quote today.',
  },
];

export default function AggregatesSupplierMbeya() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Aggregates Supplier Mbeya</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aggregates Supplier in Mbeya
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">
            Premium washed sand, gravel, ballast and crushtites for
            construction projects across Mbeya region.
          </p>
          <div className="flex items-center gap-2 text-blue-200">
            <MapPin className="w-5 h-5" />
            <span>Mbeya, Tanzania</span>
          </div>
        </div>
      </section>

      {/* Product Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Sand, Gravel &amp; Ballast in Mbeya
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            We are a leading aggregates supplier in Mbeya, providing
            high-quality washed sand, gravel, ballast and crushtites. Our
            materials are carefully graded and tested to ensure consistency and
            quality for all your construction needs.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Washed Sand</h3>
              <p className="text-gray-600 text-sm">
                Clean, graded sand for concrete mixing and plastering.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Gravel</h3>
              <p className="text-gray-600 text-sm">
                Various grades of gravel for concrete and drainage work.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Ballast</h3>
              <p className="text-gray-600 text-sm">
                Coarse aggregate for heavy-duty concrete and foundations.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Crushtites</h3>
              <p className="text-gray-600 text-sm">
                Crushed stone for road construction and base courses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Aggregates Delivery Areas in Mbeya
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900 text-sm">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Order Aggregates in Mbeya Today
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Get a free quote for sand, gravel, ballast or crushtites delivered
            to your site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/255716002790"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              WhatsApp Us
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+255716002790"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call +255 716 002 790
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Aggregates Supplier',
                    item: `${siteUrl}/aggregates-supplier`,
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Mbeya',
                    item: `${siteUrl}/aggregates-supplier-mbeya`,
                  },
                ],
              },
              {
                '@type': 'Service',
                serviceType: 'Sand, Gravel & Ballast Supply',
                provider: {
                  '@type': 'Organization',
                  name: 'Tanzibaba',
                  url: siteUrl,
                },
                areaServed: {
                  '@type': 'City',
                  name: 'Mbeya',
                  address: {
                    '@type': 'PostalAddress',
                    addressRegion: 'Mbeya',
                    addressCountry: 'TZ',
                  },
                },
                description:
                  'Premium washed sand, gravel, ballast and crushtites for construction projects in Mbeya.',
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />
    </main>
  );
}
