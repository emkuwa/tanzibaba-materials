import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, CheckCircle, Square, HelpCircle, Truck, DollarSign, Phone } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Blocks Supplier Iringa — Vikapu & Concrete Blocks | Tanzibaba',
  description: 'Concrete blocks supplier in Iringa. Hollow blocks, solid blocks and interlocking blocks for construction projects. Delivery to Mazimbu, Kihesa, Nala and Madizini.',
  keywords: ['concrete blocks Iringa', 'blocks supplier Iringa', 'hollow blocks Iringa', 'solid blocks Iringa', 'building materials Iringa', 'vikapu Iringa', 'blocks kwa ujenzi', 'msambazaji wa blocks Iringa'],
  alternates: { canonical: `${siteUrl}/blocks-supplier-iringa` },
  openGraph: {
    title: 'Blocks Supplier Iringa — Vikapu & Concrete Blocks | Tanzibaba',
    description: 'Concrete blocks supplier in Iringa. Hollow blocks, solid blocks and interlocking blocks.',
    url: `${siteUrl}/blocks-supplier-iringa`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/hollow-blocks.webp', width: 1200, height: 630 }],
  },
};

export default function BlocksIringaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/hollow-blocks.webp" alt="Blocks supplier in Iringa" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Square className="w-4 h-4" /> Blocks Supplier — Iringa
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Blocks Supplier{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Iringa
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Premium concrete blocks supplier in Iringa. Hollow blocks, solid blocks and interlocking blocks for all construction projects.
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

        {/* Block Types */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Block Types Available in Iringa</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">We supply various concrete block types for different construction needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Hollow Blocks', desc: 'Lightweight blocks for walls, partitions & fencing', specs: '140×190×390mm, 190×190×390mm, 230×190×390mm' },
                { name: 'Solid Blocks', desc: 'Solid concrete blocks for load-bearing walls', specs: '90×190×390mm, 140×190×390mm, 190×190×390mm' },
                { name: 'Paving Blocks', desc: 'Interlocking blocks for driveways, walkways & yards', specs: '200×100×80mm, 220×110×80mm' },
              ].map((block, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                    <Square className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{block.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{block.desc}</p>
                  <p className="text-brand-600 text-xs font-medium">{block.specs}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Coverage */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Block Delivery in Iringa</h2>
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
                { q: 'What block types do you supply in Iringa?', a: 'We supply hollow blocks, solid blocks and paving blocks in Iringa. All blocks are manufactured to Tanzanian standards.' },
                { q: 'What are the prices of blocks in Iringa?', a: 'Hollow blocks start from TZS 2,500 each, solid blocks from TZS 3,500 each. Prices vary by size and quantity. Contact us for bulk pricing.' },
                { q: 'Do you deliver blocks to Mazimbu and Kihesa?', a: 'Yes, we deliver blocks to all areas in Iringa including Mazimbu, Kihesa, Nala, Madizini and Mlandizi.' },
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Need Blocks in Iringa?</h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm">Contact us for blocks supply, pricing and delivery scheduling.</p>
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
        '@graph': [
          { '@type': 'LocalBusiness', '@id': 'https://materials.tanzibaba.com/#business', name: 'Tanzibaba', url: 'https://materials.tanzibaba.com', telephone: '+255716002790', areaServed: 'Iringa, Tanzania' },
          { '@type': 'Service', name: 'Concrete Blocks Supply Iringa', provider: { '@id': 'https://materials.tanzibaba.com/#business' }, areaServed: 'Iringa, Tanzania', description: 'Concrete blocks supply in Iringa — hollow blocks, solid blocks and paving blocks for construction projects.' },
          { '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://materials.tanzibaba.com' },
            { '@type': 'ListItem', position: 2, name: 'Blocks Supplier Iringa', item: 'https://materials.tanzibaba.com/blocks-supplier-iringa' }
          ]},
          { '@type': 'FAQPage', mainEntity: [
            { '@type': 'Question', name: 'What block types do you supply in Iringa?', acceptedAnswer: { '@type': 'Answer', text: 'We supply hollow blocks, solid blocks and paving blocks in Iringa. All blocks are manufactured to Tanzanian standards.' } },
            { '@type': 'Question', name: 'What are the prices of blocks in Iringa?', acceptedAnswer: { '@type': 'Answer', text: 'Hollow blocks start from TZS 2,500 each, solid blocks from TZS 3,500 each. Prices vary by size and quantity. Contact us for bulk pricing.' } },
            { '@type': 'Question', name: 'Do you deliver blocks to Mazimbu and Kihesa?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we deliver blocks to all areas in Iringa including Mazimbu, Kihesa, Nala, Madizini and Mlandizi.' } },
          ]}
        ]
      }) }} />
    </>
  );
}
