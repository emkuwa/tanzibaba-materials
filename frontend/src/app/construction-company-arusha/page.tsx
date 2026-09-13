import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MapPin, ArrowRight, HelpCircle, Phone, CheckCircle } from 'lucide-react'

const siteUrl = 'https://materials.tanzibaba.com'

export const metadata: Metadata = {
  title: 'Construction Company Arusha — Building & Civil Works | Tanzibaba',
  description: 'Professional construction company in Arusha. Residential, commercial and civil engineering projects. Free consultation and project quotes.',
  keywords: 'construction company Arusha, builder Arusha, contractor Arusha',
  alternates: {
    canonical: `${siteUrl}/construction-company-arusha`,
  },
  openGraph: {
    title: 'Construction Company Arusha — Building & Civil Works | Tanzibaba',
    description: 'Professional construction company in Arusha. Residential, commercial and civil engineering projects. Free consultation and project quotes.',
    url: `${siteUrl}/construction-company-arusha`,
    siteName: 'Tanzibaba',
    type: 'website',
  },
}

const deliveryAreas = [
  { name: 'Arusha City', description: 'Central Arusha projects' },
  { name: 'Tengeru', description: 'Eastern Arusha projects' },
  { name: 'Meru', description: 'Meru district projects' },
  { name: 'Usa River', description: 'Usa River area projects' },
  { name: 'Njiro', description: 'Njiro estate projects' },
  { name: 'Sakina', description: 'Sakina estate projects' },
  { name: 'Sinon', description: 'Sinon area projects' },
  { name: 'Sekei', description: 'Sekei estate projects' },
]

const faqs = [
  {
    question: 'What construction services do you offer in Arusha?',
    answer: 'We offer full construction services including residential buildings, commercial structures, renovations, extensions, civil works, and project management from foundation to completion.',
  },
  {
    question: 'Do you handle residential projects?',
    answer: 'Yes, we specialize in residential construction including new homes, apartments, renovations, extensions, and interior finishing. We work with homeowners and developers alike.',
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes, we provide free consultations and project estimates. Contact us to discuss your project and receive a detailed quotation with no obligation.',
  },
  {
    question: 'What areas in Arusha do you serve?',
    answer: 'We serve all areas across Arusha including Arusha City, Tengeru, Meru, Usa River, Njiro, Sakina, Sinon, Sekei, and surrounding regions.',
  },
]

export default function ConstructionCompanyArusha() {
  return (
    <>
      <Navbar />

      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-emerald-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <ArrowRight className="h-4 w-4" />
            <span>Construction Company Arusha</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Construction Company Arusha
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mb-6">
            Residential, commercial and civil engineering projects. Free consultation and project quotes.
          </p>
          <div className="flex items-center gap-2 text-emerald-200">
            <MapPin className="h-5 w-5" />
            <span>Serving all areas in Arusha</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Construction Services
              </h2>
              <p className="text-gray-600 mb-6">
                Tanzibaba is a trusted construction company serving Arusha with high-quality building and civil engineering services. Our experienced team delivers projects on time and within budget.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Residential buildings and apartments</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Commercial and industrial structures</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Renovations and extensions</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Civil works and project management</span>
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
                  Get a Quote on WhatsApp
                </a>
                <a
                  href="tel:+255716002790"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/construction.jpg"
                alt="Construction company in Arusha"
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
            Service Areas in Arusha
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryAreas.map((area) => (
              <div
                key={area.name}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-emerald-600" />
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
                  <HelpCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
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

      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Project in Arusha
          </h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Contact us today for a free consultation and project estimate. Professional construction services across Arusha.
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
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors"
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
                    name: 'Construction Company',
                    item: `${siteUrl}/construction-company`,
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Arusha',
                    item: `${siteUrl}/construction-company-arusha`,
                  },
                ],
              },
              {
                '@type': 'Service',
                name: 'Construction Services in Arusha',
                serviceType: 'Construction & Civil Works',
                description: 'Professional construction company in Arusha. Residential, commercial and civil engineering projects.',
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
