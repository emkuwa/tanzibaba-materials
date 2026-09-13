import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MapPin, ArrowRight, HelpCircle, Phone, CheckCircle } from 'lucide-react'

const siteUrl = 'https://materials.tanzibaba.com'

export const metadata: Metadata = {
  title: 'Construction Company Mwanza — Building & Civil Works | Tanzibaba',
  description: 'Professional construction company in Mwanza. Residential, commercial and civil engineering projects.',
  keywords: 'construction company Mwanza, builder Mwanza, contractor Mwanza',
  alternates: {
    canonical: `${siteUrl}/construction-company-mwanza`,
  },
  openGraph: {
    title: 'Construction Company Mwanza — Building & Civil Works | Tanzibaba',
    description: 'Professional construction company in Mwanza. Residential, commercial and civil engineering projects.',
    url: `${siteUrl}/construction-company-mwanza`,
    siteName: 'Tanzibaba',
    type: 'website',
  },
}

const areas = [
  { name: 'Mwanza City', description: 'Full construction services across Mwanza City' },
  { name: 'Igoma', description: 'Residential and commercial projects in Igoma' },
  { name: 'Bugando', description: 'Building and civil works in Bugando' },
  { name: 'Kenyatta', description: 'Construction services in Kenyatta ward' },
  { name: 'Nyegezi', description: 'Affordable building solutions in Nyegezi' },
  { name: 'Lumumba', description: 'Professional construction in Lumumba' },
  { name: 'Misungwi', description: 'Construction projects in Misungwi district' },
  { name: 'Igoma', description: 'Full service coverage in Igoma' },
]

const faqs = [
  {
    question: 'What construction services do you offer in Mwanza?',
    answer: 'We offer comprehensive construction services including residential building, commercial construction, civil engineering works, renovations, and general contracting across Mwanza.',
  },
  {
    question: 'Do you handle residential projects?',
    answer: 'Yes, we specialize in residential construction including new homes, apartment buildings, renovations, extensions, and home improvements in Mwanza and surrounding areas.',
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes, we provide free project estimates and consultations. Contact us via WhatsApp or phone to discuss your construction needs and get a detailed quote.',
  },
  {
    question: 'What areas in Mwanza do you serve?',
    answer: 'We serve all areas in Mwanza region including Mwanza City, Igoma, Bugando, Kenyatta, Nyegezi, Lumumba, Misungwi, and other surrounding communities.',
  },
]

export default function ConstructionCompanyMwanza() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="flex items-center gap-2 text-orange-200 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/construction-company-mwanza" className="text-white">Construction Company Mwanza</Link>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Construction Company Mwanza
            </h1>
            <p className="text-xl text-orange-100 mb-4 max-w-2xl">
              Building & Civil Works
            </p>
            <p className="text-lg text-orange-200 mb-8 max-w-2xl">
              Professional construction company in Mwanza. Residential, commercial and civil engineering projects. Quality craftsmanship and reliable service.
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
                className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
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
                  Professional Construction Services in Mwanza
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We are a trusted construction company in Mwanza, delivering high-quality residential, commercial, and civil engineering projects. Our experienced team ensures every project is completed to the highest standards.
                </p>
                <ul className="space-y-3">
                  {['Residential Construction', 'Commercial Buildings', 'Civil Engineering Works', 'Renovations & Extensions', 'Free Project Estimates'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-100 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-orange-800 font-semibold">Mwanza Region</p>
                  <p className="text-orange-600">8 Service Areas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Areas Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Service Areas in Mwanza
            </h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              We provide construction services across Mwanza region. Contact us for projects in your area.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {areas.map((area) => (
                <div key={area.name + area.description} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-orange-600" />
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
              Common questions about our construction services in Mwanza
            </p>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 text-orange-600 mt-0.5 shrink-0" />
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
        <section className="py-16 lg:py-24 bg-orange-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Construction Project in Mwanza?</h2>
            <p className="text-xl text-orange-100 mb-8">
              Contact us today for a free consultation and project estimate.
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
                    name: 'Construction Company',
                    item: `${siteUrl}/construction-company`,
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Mwanza',
                    item: `${siteUrl}/construction-company-mwanza`,
                  },
                ],
              },
              {
                '@type': 'Service',
                serviceType: 'Construction & Civil Works',
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
