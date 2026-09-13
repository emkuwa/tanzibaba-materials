import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MapPin, ArrowRight, HelpCircle, Phone, CheckCircle } from 'lucide-react'

const siteUrl = 'https://materials.tanzibaba.com'

export const metadata: Metadata = {
  title: 'Aggregates Supplier Mwanza — Sand, Gravel & Ballast | Tanzibaba',
  description: 'Premium aggregates supplier in Mwanza. Washed sand, gravel, ballast and crushtites. Delivery across Mwanza region.',
  keywords: 'aggregates supplier Mwanza, sand supplier Mwanza, gravel Mwanza',
  alternates: {
    canonical: `${siteUrl}/aggregates-supplier-mwanza`,
  },
  openGraph: {
    title: 'Aggregates Supplier Mwanza — Sand, Gravel & Ballast | Tanzibaba',
    description: 'Premium aggregates supplier in Mwanza. Washed sand, gravel, ballast and crushtites. Delivery across Mwanza region.',
    url: `${siteUrl}/aggregates-supplier-mwanza`,
    siteName: 'Tanzibaba',
    type: 'website',
  },
}

const areas = [
  { name: 'Mwanza City', description: 'Full delivery coverage across Mwanza City' },
  { name: 'Igoma', description: 'Reliable aggregates delivery to Igoma' },
  { name: 'Bugando', description: 'Quick delivery to Bugando area' },
  { name: 'Kenyatta', description: 'Aggregates supply to Kenyatta ward' },
  { name: 'Nyegezi', description: 'Affordable delivery to Nyegezi' },
  { name: 'Lumumba', description: 'Same-day delivery to Lumumba' },
  { name: 'Misungwi', description: 'Delivery to Misungwi district' },
  { name: 'Igoma', description: 'Full service coverage in Igoma' },
]

const faqs = [
  {
    question: 'What aggregates do you supply in Mwanza?',
    answer: 'We supply high-quality washed sand, gravel, ballast, and crushtites in Mwanza. All our aggregates are sourced from trusted suppliers and meet construction standards.',
  },
  {
    question: 'Do you deliver to Lumumba and Igoma?',
    answer: 'Yes, we deliver to both Lumumba and Igoma. We cover all major areas in Mwanza region including Lumumba, Igoma, Bugando, Nyegezi, and Misungwi.',
  },
  {
    question: 'What is the price of sand?',
    answer: 'Contact us on WhatsApp or call us directly for current sand prices. Prices vary based on type (washed sand, sharp sand), quantity, and delivery location within Mwanza.',
  },
  {
    question: 'What is the price of gravel?',
    answer: 'Gravel prices depend on size and quantity ordered. Please contact us for a custom quote. We offer competitive rates for bulk orders delivered across Mwanza.',
  },
]

export default function AggregatesSupplierMwanza() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="flex items-center gap-2 text-emerald-200 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/aggregates-supplier-mwanza" className="text-white">Aggregates Supplier Mwanza</Link>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Aggregates Supplier Mwanza
            </h1>
            <p className="text-xl text-emerald-100 mb-4 max-w-2xl">
              Sand, Gravel & Ballast
            </p>
            <p className="text-lg text-emerald-200 mb-8 max-w-2xl">
              Premium aggregates supplier in Mwanza. Washed sand, gravel, ballast and crushtites. Delivery across Mwanza region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/255716002790"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Get a Quote
              </a>
              <a
                href="https://wa.me/255716002790"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Product Info Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Quality Aggregates for Construction in Mwanza
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We are the leading aggregates supplier in Mwanza, providing high-quality washed sand, gravel, ballast, and crushtites for all construction needs. Our aggregates are sourced from trusted suppliers and meet Tanzania construction standards.
                </p>
                <ul className="space-y-3">
                  {['Washed Sand', 'Gravel', 'Ballast', 'Crushtites', 'Bulk Orders Available'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-emerald-100 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-emerald-800 font-semibold">Mwanza Region</p>
                  <p className="text-emerald-600">8 Delivery Areas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Areas Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Delivery Areas in Mwanza
            </h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              We deliver aggregates across Mwanza region. Contact us for delivery to your specific area.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {areas.map((area) => (
                <div key={area.name + area.description} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-semibold text-gray-900">{area.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mb-12 text-center">
              Common questions about our aggregates supply service in Mwanza
            </p>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 text-emerald-600 mt-0.5 shrink-0" />
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

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-emerald-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Order Aggregates in Mwanza?</h2>
            <p className="text-xl text-emerald-100 mb-8">
              Contact us today for a free quote on sand, gravel, ballast, and crushtites.
            </p>
            <a
              href="https://wa.me/255716002790"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call or WhatsApp: +255 716 002 790
            </a>
          </div>
        </section>
      </main>

      {/* JSON-LD Structured Data */}
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
                    name: 'Mwanza',
                    item: `${siteUrl}/aggregates-supplier-mwanza`,
                  },
                ],
              },
              {
                '@type': 'Service',
                serviceType: 'Sand, Gravel & Ballast Supply',
                areaServed: 'Mwanza',
                provider: {
                  '@type': 'Organization',
                  name: 'Tanzibaba',
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
          })
        }}
      />
      <Footer />
    </>
  )
}
