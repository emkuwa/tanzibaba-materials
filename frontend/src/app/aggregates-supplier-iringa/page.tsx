import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, HelpCircle, Phone, Mountain } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Aggregates Supplier Iringa — Gravel & Crushed Stone | Tanzibaba',
  description: 'Premium aggregates supplier in Iringa. Gravel, crushed stone, crusher dust and road base materials for construction projects. Delivery to Mazimbu, Kihesa, Nala.',
  keywords: ['aggregates supplier Iringa', 'gravel supplier Iringa', 'crushed stone Iringa', 'kokoto Iringa', 'road base Iringa', 'crusher dust Iringa'],
  alternates: { canonical: `${siteUrl}/aggregates-supplier-iringa` },
  openGraph: {
    title: 'Aggregates Supplier Iringa — Gravel & Crushed Stone | Tanzibaba',
    description: 'Premium aggregates supplier in Iringa. Gravel, crushed stone and road base materials.',
    url: `${siteUrl}/aggregates-supplier-iringa`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/aggregates.webp', width: 1200, height: 630 }],
  },
};

export default function AggregatesSupplierIringaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/aggregates.webp" alt="Aggregates supplier in Iringa" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Mountain className="w-4 h-4" /> Aggregates & Gravel — Iringa
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Aggregates Supplier{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Iringa
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Premium construction aggregates for road building, concrete production and infrastructure projects in Iringa. Gravel, crushed stone and base course materials.
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

        {/* Aggregate Types */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Aggregate Types Available in Iringa</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Crusher Dust', desc: 'Fine material for paving base' },
                { name: '0-5mm', desc: 'Asphalt production' },
                { name: '5-10mm', desc: 'Fine concrete mixes' },
                { name: '10-20mm', desc: 'Standard concrete' },
                { name: '20-40mm', desc: 'Heavy concrete & drainage' },
                { name: '40mm+', desc: 'Road works & sub-base' },
                { name: 'Road Base', desc: 'Road construction' },
                { name: 'Asphalt Aggregate', desc: 'Road surfacing' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-4 text-center">
                  <p className="font-bold text-brand-600 text-sm">{item.name}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Aggregate Delivery in Iringa</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { area: 'Iringa City', coverage: 'Full coverage' },
                { area: 'Mazimbu', coverage: 'Full coverage' },
                { area: 'Kihesa', coverage: 'Full coverage' },
                { area: 'Nala', coverage: 'Full coverage' },
                { area: 'Madizini', coverage: 'Full coverage' },
                { area: 'Mlandizi', coverage: 'Full coverage' },
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
                { q: 'What aggregate types do you supply in Iringa?', a: 'We supply crusher dust, 0-5mm, 5-10mm, 10-20mm, 20-40mm, 40mm+, road base and asphalt aggregate in Iringa.' },
                { q: 'What is the price of aggregates in Iringa?', a: 'Aggregate prices start from TZS 75,000 per ton. Prices vary by size and quantity. Contact us for project-specific quotes.' },
                { q: 'Do you deliver aggregates to all areas in Iringa?', a: 'Yes, we deliver to Iringa City, Mazimbu, Kihesa, Nala, Madizini, Mlandizi and surrounding areas.' },
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Need Aggregates in Iringa?</h2>
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
    </>
  );
}
