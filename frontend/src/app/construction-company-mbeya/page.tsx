import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, HelpCircle, Phone, CheckCircle } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Construction Company Mbeya — Building & Civil Works | Tanzibaba',
  description:
    'Professional construction company in Mbeya. Residential, commercial and civil engineering projects.',
  keywords: [
    'construction company Mbeya',
    'builder Mbeya',
    'contractor Mbeya',
    'civil works Mbeya Tanzania',
    'residential construction Mbeya',
  ],
  alternates: {
    canonical: `${siteUrl}/construction-company-mbeya`,
  },
  openGraph: {
    title: 'Construction Company Mbeya — Building & Civil Works | Tanzibaba',
    description:
      'Professional construction company in Mbeya. Residential, commercial and civil engineering projects.',
    url: `${siteUrl}/construction-company-mbeya`,
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
    question: 'What construction services do you offer in Mbeya?',
    answer:
      'We offer residential construction, commercial building, civil engineering works, renovations and project management in Mbeya. Our team handles everything from foundation to finishing.',
  },
  {
    question: 'Do you handle residential projects?',
    answer:
      'Yes, we specialise in residential construction including houses, apartments and extensions in Mbeya City, Tukuyu, Tabora and surrounding areas. We work with clients from design through to handover.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes, we provide free initial estimates for construction projects in Mbeya. Contact us via WhatsApp or phone to discuss your project and receive a detailed quotation.',
  },
  {
    question: 'What areas in Mbeya do you serve?',
    answer:
      'We serve Mbeya City, Tukuyu, Tabora, Itiji, Maunda, Lwang\'wa, Nsalishi and Sumbawanga. Our construction teams are available across the Mbeya region.',
  },
];

export default function ConstructionCompanyMbeya() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Construction Company Mbeya</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Construction Company in Mbeya
          </h1>
          <p className="text-xl text-green-100 mb-6 max-w-2xl">
            Professional residential, commercial and civil engineering
            construction services across Mbeya region.
          </p>
          <div className="flex items-center gap-2 text-green-200">
            <MapPin className="w-5 h-5" />
            <span>Mbeya, Tanzania</span>
          </div>
        </div>
      </section>

      {/* Services Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Building &amp; Civil Works in Mbeya
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            We are a professional construction company in Mbeya, delivering
            high-quality building and civil engineering projects. Our experienced
            team manages every phase of construction, from site preparation and
            foundations to structural work, roofing, finishing and handover.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Residential Construction
              </h3>
              <p className="text-gray-600 text-sm">
                Houses, apartments, extensions and home renovations across
                Mbeya.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Commercial Building
              </h3>
              <p className="text-gray-600 text-sm">
                Offices, shops, warehouses and commercial developments in
                Mbeya.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Civil Engineering
              </h3>
              <p className="text-gray-600 text-sm">
                Roads, drainage, foundations and infrastructure projects across
                Mbeya region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Construction Service Areas in Mbeya
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <MapPin className="w-5 h-5 text-green-600 mx-auto mb-2" />
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
                  <HelpCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
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
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Construction Project in Mbeya
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Get a free estimate for residential, commercial or civil
            engineering projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/255716002790"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors inline-flex items-center justify-center gap-2"
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
                    name: 'Construction Company',
                    item: `${siteUrl}/construction-company`,
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Mbeya',
                    item: `${siteUrl}/construction-company-mbeya`,
                  },
                ],
              },
              {
                '@type': 'Service',
                serviceType: 'Construction & Civil Works',
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
                  'Professional residential, commercial and civil engineering construction services in Mbeya.',
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
