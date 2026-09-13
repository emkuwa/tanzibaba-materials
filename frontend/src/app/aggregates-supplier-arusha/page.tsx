import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MapPin, ArrowRight, HelpCircle, Phone, CheckCircle } from 'lucide-react'

const siteUrl = 'https://materials.tanzibaba.com'

export const metadata: Metadata = {
  title: 'Aggregates Supplier Arusha — Sand, Gravel & Ballast | Tanzibaba',
  description: 'Premium aggregates supplier in Arusha. Washed sand, gravel, ballast and crushtites for construction. Delivery across Arusha region.',
  keywords: 'aggregates supplier Arusha, sand supplier Arusha, gravel Arusha',
  alternates: {
    canonical: `${siteUrl}/aggregates-supplier-arusha`,
  },
  openGraph: {
    title: 'Aggregates Supplier Arusha — Sand, Gravel & Ballast | Tanzibaba',
    description: 'Premium aggregates supplier in Arusha. Washed sand, gravel, ballast and crushtites for construction. Delivery across Arusha region.',
    url: `${siteUrl}/aggregates-supplier-arusha`,
    siteName: 'Tanzibaba',
    type: 'website',
  },
}

const deliveryAreas = [
  { name: 'Arusha City', description: 'Central Arusha delivery' },
  { name: 'Tengeru', description: 'Eastern Arusha delivery' },
  { name: 'Meru', description: 'Meru district delivery' },
  { name: 'Usa River', description: 'Usa River area delivery' },
  { name: 'Njiro', description: 'Njiro estate delivery' },
  { name: 'Sakina', description: 'Sakina estate delivery' },
  { name: 'Sinon', description: 'Sinon area delivery' },
  { name: 'Sekei', description: 'Sekei estate delivery' },
]

const faqs = [
  {
    question: 'What aggregates do you supply in Arusha?',
    answer: 'We supply washed sand, gravel, ballast, crushtites, and other construction aggregates. All materials are sourced from reliable quarries and meet quality standards.',
  },
  {
    question: 'Do you deliver to Meru and Usa River?',
    answer: 'Yes, we deliver aggregates to Meru, Usa River, and all areas across the Arusha region. Our fleet handles bulk deliveries efficiently.',
  },
  {
    question: 'What is the price of sand?',
    answer: 'Sand prices vary by type and quantity. We offer competitive rates for washed sand and river sand. Contact us for current pricing and bulk discounts.',
  },
  {
    question: 'What is the price of gravel?',
    answer: 'Gravel prices depend on size and grade. We supply various grades of gravel for different construction needs. Contact us for a detailed quote.',
  },
]

export default function AggregatesSupplierArusha() {
  return (
    <>
      <Navbar />

      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-amber-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <ArrowRight className="h-4 w-4" />
            <span>Aggregates Supplier Arusha</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aggregates Supplier Arusha
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mb-6">
            Washed sand, gravel, ballast and crushtites for construction. Premium quality materials.
          </p>
          <div className="flex items-center gap-2 text-amber-200">
            <MapPin className="h-5 w-5" />
            <span>Delivery across Arusha region</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quality Aggregates for Every Project
              </h2>
              <p className="text-gray-600 mb-6">
                Tanzibaba supplies premium construction aggregates across Arusha. Our materials are carefully sourced and tested to ensure they meet industry standards for residential, commercial and infrastructure projects.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Washed sand for concrete and plastering</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Gravel in various sizes and grades</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Ballast for foundation and road work</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Bulk delivery with reliable fleet</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/255716002790"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Order on WhatsApp
                </a>
                <a
                  href="tel:+255716002790"
                  className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/aggregates.jpg"
                alt="Aggregates supplier in Arusha"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Delivery Areas in Arusha
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryAreas.map((area) => (
              <div
                key={area.name}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <h3 className="font-semibold text-gray-900">{area.name}</h3>
                </div>
                <p className="text-sm text-gray-500">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Aggregates in Arusha?
          </h2>
          <p className="text-amber-100 mb-8 text-lg">
            Contact us today for sand, gravel, ballast and crushtites. Fast bulk delivery across Arusha.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/255716002790"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              <Phone className="h-5 w-5" />
              WhatsApp Us
            </a>
            <a
              href="tel:+255716002790"
              className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call +255 716 002 790
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: siteUrl,
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Aggregates Supplier',
                    item: `${siteUrl}/aggregates-supplier`,
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Arusha',
                    item: `${siteUrl}/aggregates-supplier-arusha`,
                  },
                ],
              },
              {
                '@type': 'Service',
                name: 'Aggregates Supply in Arusha',
                serviceType: 'Sand, Gravel & Ballast Supply',
                description: 'Premium aggregates supplier in Arusha. Washed sand, gravel, ballast and crushtites for construction.',
                provider: {
                  '@type': 'Organization',
                  name: 'Tanzibaba',
                  url: siteUrl,
                },
                areaServed: {
                  '@type': 'City',
                  name: 'Arusha',
                },
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

      <Footer />
    </>
  )
}
