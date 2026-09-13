import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, HelpCircle, Phone, CheckCircle } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Blocks Supplier Mbeya — Hollow & Solid Blocks | Tanzibaba',
  description:
    'Premium blocks supplier in Mbeya. Hollow blocks, solid blocks and concrete blocks for construction. Delivery to Mbeya City, Tukuyu, Tabora, Itiji, Maunda, Lwang\'wa, Nsalishi and Sumbawanga.',
  keywords: [
    'blocks supplier Mbeya',
    'hollow blocks Mbeya',
    'concrete blocks Mbeya',
    'solid blocks Mbeya',
    'building blocks Mbeya Tanzania',
  ],
  alternates: {
    canonical: `${siteUrl}/blocks-supplier-mbeya`,
  },
  openGraph: {
    title: 'Blocks Supplier Mbeya — Hollow & Solid Blocks | Tanzibaba',
    description:
      'Premium blocks supplier in Mbeya. Hollow blocks, solid blocks and concrete blocks for construction.',
    url: `${siteUrl}/blocks-supplier-mbeya`,
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
    question: 'What blocks do you supply in Mbeya?',
    answer:
      'We supply hollow blocks, solid concrete blocks and heavy-duty construction blocks in Mbeya. All blocks are manufactured to Tanzanian construction standards and suitable for residential and commercial building projects.',
  },
  {
    question: 'Do you deliver to Tukuyu?',
    answer:
      'Yes, we deliver blocks and construction materials to Tukuyu and surrounding areas across the Mbeya region. Delivery is arranged through our logistics network with competitive pricing.',
  },
  {
    question: 'What is the price of hollow blocks?',
    answer:
      'Hollow block prices in Mbeya vary based on size and quantity. Contact us via WhatsApp or phone for a current price list and bulk order discounts.',
  },
  {
    question: 'How fast can you deliver?',
    answer:
      'We typically deliver within Mbeya City within 24–48 hours. Deliveries to Tukuyu, Tabora, Itiji, Maunda, Lwang\'wa, Nsalishi and Sumbawanga are scheduled within 2–5 business days depending on order size.',
  },
];

export default function BlocksSupplierMbeya() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-yellow-600 to-yellow-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-yellow-200 text-sm mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Blocks Supplier Mbeya</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blocks Supplier in Mbeya
          </h1>
          <p className="text-xl text-yellow-100 mb-6 max-w-2xl">
            Premium hollow blocks, solid blocks and concrete blocks for
            construction projects across Mbeya region.
          </p>
          <div className="flex items-center gap-2 text-yellow-200">
            <MapPin className="w-5 h-5" />
            <span>Mbeya, Tanzania</span>
          </div>
        </div>
      </section>

      {/* Product Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hollow &amp; Solid Blocks in Mbeya
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            We are a leading blocks supplier in Mbeya, providing high-quality
            hollow blocks, solid concrete blocks and construction blocks. Our
            products are manufactured using precision moulds and cured to
            deliver maximum strength and durability for your building projects.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-yellow-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Hollow Blocks
              </h3>
              <p className="text-gray-600 text-sm">
                Lightweight yet strong hollow blocks for walls and partitions.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-yellow-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Solid Blocks
              </h3>
              <p className="text-gray-600 text-sm">
                Dense solid concrete blocks for load-bearing and foundation
                work.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-yellow-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Construction Blocks
              </h3>
              <p className="text-gray-600 text-sm">
                Heavy-duty blocks designed for commercial and industrial
                construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Block Delivery Areas in Mbeya
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <MapPin className="w-5 h-5 text-yellow-600 mx-auto mb-2" />
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
                  <HelpCircle className="w-6 h-6 text-yellow-600 mt-0.5 shrink-0" />
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
      <section className="py-16 bg-gradient-to-br from-yellow-600 to-yellow-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Order Blocks in Mbeya Today
          </h2>
          <p className="text-yellow-100 mb-8 text-lg">
            Get a free quote for hollow blocks, solid blocks or concrete blocks
            delivered to your site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/255716002790"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-yellow-700 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-50 transition-colors inline-flex items-center justify-center gap-2"
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
                    name: 'Blocks Supplier',
                    item: `${siteUrl}/blocks-supplier`,
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Mbeya',
                    item: `${siteUrl}/blocks-supplier-mbeya`,
                  },
                ],
              },
              {
                '@type': 'Service',
                serviceType: 'Hollow & Solid Blocks Supply',
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
                  'Premium hollow blocks, solid blocks and concrete blocks for construction projects in Mbeya.',
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
