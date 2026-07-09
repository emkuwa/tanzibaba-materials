import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, HelpCircle, Phone, CheckCircle } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Concrete Supplier Dodoma — Zege & Ready Mix | Tanzibaba',
  description: 'Premium concrete supplier in Dodoma. Ready mix concrete grades C10 to C50 with washed sand technology. Delivery to Chamwino, Bahi, Kongwa and Mpwapwa.',
  keywords: ['concrete supplier Dodoma', 'ready mix concrete Dodoma', 'zege Dodoma', 'concrete company Dodoma', 'msambazaji wa zege', 'concrete delivery Dodoma', 'concrete Chamwino', 'concrete Bahi'],
  alternates: { canonical: `${siteUrl}/concrete-supplier-dodoma` },
  openGraph: {
    title: 'Concrete Supplier Dodoma — Zege & Ready Mix | Tanzibaba',
    description: 'Premium concrete supplier in Dodoma. Ready mix concrete grades C10 to C50.',
    url: `${siteUrl}/concrete-supplier-dodoma`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/ready-mix-concrete.webp', width: 1200, height: 630 }],
  },
};

export default function ConcreteSupplierDodomaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/ready-mix-concrete.webp" alt="Concrete supplier in Dodoma" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <MapPin className="w-4 h-4" /> Concrete Supplier — Dodoma
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Concrete Supplier{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Dodoma
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Premium concrete supplier in Dodoma. Ready mix concrete grades C10 to C50 with washed sand technology. Fast delivery to Chamwino, Bahi, Kongwa and Mpwapwa.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href="/get-quote" className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40">
                  Get a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Concrete Grades */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Concrete Grades Available in Dodoma</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">We supply all concrete grades from C10 to C50 for construction projects across Dodoma.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['C10', 'C15', 'C20', 'C25', 'C30', 'C35', 'C40', 'C45', 'C50'].map((grade, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-4 text-center">
                  <p className="font-bold text-brand-600 text-lg">{grade}</p>
                  <p className="text-gray-500 text-xs mt-1">Concrete Grade</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/ready-mix-concrete-dodoma" className="text-brand-600 font-semibold text-sm hover:underline">
                View Full Concrete Specifications →
              </Link>
            </div>
          </div>
        </section>

        {/* Delivery Coverage */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Concrete Delivery in Dodoma</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { area: 'Dodoma City', coverage: 'Full coverage' },
                { area: 'Chamwino', coverage: 'Full coverage' },
                { area: 'Bahi', coverage: 'Full coverage' },
                { area: 'Kongwa', coverage: 'Full coverage' },
                { area: 'Mpwapwa', coverage: 'Full coverage' },
                { area: 'Kondoa', coverage: 'On request' },
                { area: 'Kilosa', coverage: 'On request' },
                { area: 'Bagamoyo', coverage: 'On request' },
              ].map((loc, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                  <MapPin className="w-5 h-5 text-brand-500 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">{loc.area}</p>
                  <p className="text-green-600 text-xs mt-1">{loc.coverage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: 'What concrete grades do you supply in Dodoma?', a: 'We supply all concrete grades from C10 to C50 in Dodoma. Our ready mix concrete uses washed sand technology for superior strength and consistency.' },
                { q: 'Do you deliver concrete to Chamwino and Bahi?', a: 'Yes, we deliver concrete to all districts in Dodoma region including Chamwino, Bahi, Kongwa, Mpwapwa and surrounding areas.' },
                { q: 'What is the price of ready mix concrete in Dodoma?', a: 'Ready mix concrete in Dodoma starts from TZS 120,000 per cubic meter. Prices vary by grade and quantity. Contact us for project-specific quotes.' },
                { q: 'How fast can you deliver concrete in Dodoma?', a: 'We offer same-day and next-day concrete delivery across Dodoma. Orders placed before 2:00 PM can typically be delivered the same day.' },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                      <p className="text-gray-500 text-sm">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Need Concrete in Dodoma?</h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm">Contact us for concrete supply, pricing and delivery scheduling. Zege bora kwa mradi wako!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/get-quote" className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all">
                WhatsApp Us
              </a>
              <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What concrete grades do you supply in Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'We supply all concrete grades from C10 to C50 in Dodoma with washed sand technology.' } },
          { '@type': 'Question', name: 'Do you deliver concrete to Chamwino and Bahi?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we deliver concrete to all districts in Dodoma region including Chamwino, Bahi, Kongwa, Mpwapwa.' } },
          { '@type': 'Question', name: 'What is the price of ready mix concrete in Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'Ready mix concrete in Dodoma starts from TZS 120,000 per cubic meter. Prices vary by grade and quantity.' } },
        ]
      }) }} />
    </>
  );
}
