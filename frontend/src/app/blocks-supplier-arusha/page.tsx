import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MapPin, ArrowRight, HelpCircle, Phone, CheckCircle } from 'lucide-react'

const siteUrl = 'https://materials.tanzibaba.com'

export const metadata: Metadata = {
  title: 'Blocks Supplier Arusha — Hollow & Solid Blocks | Tanzibaba',
  description: 'Premium blocks supplier in Arusha. Hollow blocks, solid blocks and concrete blocks for construction. Delivery to Arusha City, Tengeru, Meru, Usa River, Njiro, Sakina, Sinon and Sekei.',
  keywords: 'blocks supplier Arusha, hollow blocks Arusha, concrete blocks Arusha',
  alternates: {
    canonical: `${siteUrl}/blocks-supplier-arusha`,
  },
  openGraph: {
    title: 'Blocks Supplier Arusha — Hollow & Solid Blocks | Tanzibaba',
    description: 'Premium blocks supplier in Arusha. Hollow blocks, solid blocks and concrete blocks for construction. Delivery across Arusha region.',
    url: `${siteUrl}/blocks-supplier-arusha`,
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
    question: 'What blocks do you supply in Arusha?',
    answer: 'We supply hollow blocks, solid blocks, and concrete blocks in various sizes and specifications. All our blocks are manufactured to meet construction standards.',
  },
  {
    question: 'Do you deliver to Tengeru and Meru?',
    answer: 'Yes, we deliver blocks to Tengeru, Meru, and all areas across Arusha region. Our delivery fleet covers all major estates and surrounding areas.',
  },
  {
    question: 'What is the price of hollow blocks?',
    answer: 'Our hollow block prices are competitive and vary by size and quantity. Contact us on WhatsApp or phone for current pricing and bulk order discounts.',
  },
  {
    question: 'How fast can you deliver?',
    answer: 'We offer same-day and next-day delivery across Arusha. Contact us early in the day to secure your delivery slot.',
  },
]

export default function BlocksSupplierArusha() {
  return (
    <>
      <Navbar />

      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <ArrowRight className="h-4 w-4" />
            <span>Blocks Supplier Arusha</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blocks Supplier Arusha
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-6">
            Hollow blocks, solid blocks and concrete blocks for construction. Premium quality, competitive prices.
          </p>
          <div className="flex items-center gap-2 text-blue-200">
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
                Premium Blocks for Every Project
              </h2>
              <p className="text-gray-600 mb-6">
                Tanzibaba supplies high-quality blocks for residential, commercial and industrial construction across Arusha. Our blocks are manufactured to strict quality standards ensuring durability and strength.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Hollow blocks in standard and heavy-duty specifications</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Solid blocks for load-bearing walls</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Concrete blocks for foundation work</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Same-day and next-day delivery</span>
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
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/blocks.jpg"
                alt="Blocks supplier in Arusha"
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
                  <MapPin className="h-5 w-5 text-blue-600" />
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
                  <HelpCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
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

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Blocks in Arusha?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Contact us today for a quote on hollow blocks, solid blocks, and concrete blocks. Fast delivery across Arusha.
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
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
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
                    name: 'Blocks Supplier',
                    item: `${siteUrl}/blocks-supplier`,
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Arusha',
                    item: `${siteUrl}/blocks-supplier-arusha`,
                  },
                ],
              },
              {
                '@type': 'Service',
                name: 'Blocks Supply in Arusha',
                serviceType: 'Hollow & Solid Blocks Supply',
                description: 'Premium blocks supplier in Arusha. Hollow blocks, solid blocks and concrete blocks for construction.',
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
