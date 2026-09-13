import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, CheckCircle, Square, HelpCircle, Phone } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Blocks Supplier Morogoro — Hollow & Solid Blocks | Tanzibaba',
  description: 'Concrete blocks supplier in Morogoro. Hollow blocks, solid blocks and interlocking blocks for construction projects. Delivery to Mazoma, Kola, Kingolwira, Luale, Masakinga, Ifakara and Mikumi.',
  keywords: ['concrete blocks Morogoro', 'blocks supplier Morogoro', 'hollow blocks Morogoro', 'solid blocks Morogoro', 'building materials Morogoro', 'vikapu Morogoro', 'blocks kwa ujenzi', 'msambazaji wa blocks Morogoro', 'concrete blocks Tanzania', 'vikapu vya ujenzi'],
  alternates: { canonical: `${siteUrl}/blocks-supplier-morogoro` },
  openGraph: {
    title: 'Blocks Supplier Morogoro — Hollow & Solid Blocks | Tanzibaba',
    description: 'Concrete blocks supplier in Morogoro. Hollow blocks, solid blocks and interlocking blocks.',
    url: `${siteUrl}/blocks-supplier-morogoro`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/hollow-blocks.webp', width: 1200, height: 630 }],
  },
};

export default function BlocksMorogoroPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/hollow-blocks.webp" alt="Concrete blocks supply in Morogoro" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <MapPin className="w-4 h-4" /> Morogoro Operations
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Concrete Blocks{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Morogoro
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Supply of concrete blocks and building materials for projects across Morogoro with dependable delivery and project support.
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

        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Blocks for Morogoro Projects</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">Tanzibaba supplies concrete blocks and building materials to Morogoro for a wide range of construction projects with dependable delivery.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Government Projects', desc: 'Concrete blocks for government buildings, administrative facilities and public works in Morogoro.' },
                { title: 'Commercial Developments', desc: 'Reliable block supply for office complexes, retail centers and commercial developments.' },
                { title: 'Institutional Projects', desc: 'Blocks for schools, hospitals, universities and institutional buildings serving Morogoro.' },
                { title: 'Residential Projects', desc: 'Quality concrete blocks for house construction, boundary walls and residential developments.' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <Square className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                      <p className="text-gray-500 text-sm">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Concrete Blocks Pricing in Morogoro</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">Competitive pricing for hollow blocks, solid blocks and interlocking blocks delivery across Morogoro.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { type: 'Hollow Blocks', price: 'From TZS 850/piece', desc: 'Standard hollow concrete blocks for walls, partitions and structural applications.', swahili: 'Vikapu tupu kwa kuta na maeneo ya ujenzi' },
                { type: 'Solid Blocks', price: 'From TZS 1,100/piece', desc: 'Dense solid concrete blocks for load-bearing walls and structural foundations.', swahili: 'Vikapu imara kwa kuta zenye mzigo' },
                { type: 'Interlocking Blocks', price: 'From TZS 1,200/piece', desc: 'Precision interlocking blocks for fast construction and reduced mortar usage.', swahili: 'Vikapu vinavyofungana kwa ujenzi wa haraka' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Square className="w-5 h-5 text-brand-600" />
                    <h3 className="font-bold text-gray-900">{item.type}</h3>
                  </div>
                  <p className="text-brand-600 font-bold text-lg mb-2">{item.price}</p>
                  <p className="text-gray-500 text-sm mb-2">{item.desc}</p>
                  <p className="text-gray-400 text-xs italic">{item.swahili}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-xs mt-6">*Prices exclude 18% VAT. Delivery charges vary by location and quantity. Contact us for project-specific quotes.</p>
          </div>
        </section>

        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Block Delivery Coverage in Morogoro</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">We deliver concrete blocks, hollow blocks and building materials across Morogoro region.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { area: 'Morogoro City', coverage: 'Full coverage' },
                { area: 'Mazoma', coverage: 'Full coverage' },
                { area: 'Kola', coverage: 'Full coverage' },
                { area: 'Kingolwira', coverage: 'Full coverage' },
                { area: 'Luale', coverage: 'Full coverage' },
                { area: 'Masakinga', coverage: 'Full coverage' },
                { area: 'Ifakara', coverage: 'On request' },
                { area: 'Mikumi', coverage: 'On request' },
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

        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">Other Building Materials in Morogoro</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/aggregates-supplier-morogoro" className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-orange-50 border border-gray-100 hover:border-orange-200 transition-all group">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <span className="text-orange-600 font-bold text-sm">A</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Aggregates & Kokoto</p>
                  <p className="text-gray-500 text-xs">Morogoro Supplier</p>
                </div>
              </Link>
              <Link href="/construction-company-morogoro" className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 transition-all group">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-600 font-bold text-sm">C</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Construction Company</p>
                  <p className="text-gray-500 text-xs">Morogoro</p>
                </div>
              </Link>
              <Link href="/building-materials-morogoro" className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-purple-50 border border-gray-100 hover:border-purple-200 transition-all group">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <span className="text-purple-600 font-bold text-sm">B</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Building Materials</p>
                  <p className="text-gray-500 text-xs">Morogoro</p>
                </div>
              </Link>
              <Link href="/paving-blocks-morogoro" className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 transition-all group">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <span className="text-green-600 font-bold text-sm">P</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Paving Blocks</p>
                  <p className="text-gray-500 text-xs">Vya Kupavisha Morogoro</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-gray-500 text-sm">Common questions about concrete blocks supply in Morogoro</p>
            </div>
            <div className="space-y-4">
              {[
                { q: 'What types of concrete blocks do you supply in Morogoro?', a: 'We supply hollow blocks, solid blocks and interlocking blocks for walls, partitions, load-bearing structures and construction projects across Morogoro region.' },
                { q: 'Do you deliver blocks to Mazoma and Kola?', a: 'Yes, we deliver concrete blocks and building materials to all areas in Morogoro including Mazoma, Kola, Kingolwira, Luale, Masakinga, Ifakara and Mikumi.' },
                { q: 'What is the price of hollow blocks in Morogoro?', a: 'Hollow concrete blocks in Morogoro start from TZS 850 per piece. Prices vary by block type, quantity and delivery location. Contact us for bulk pricing.' },
                { q: 'How many blocks do I need for a house in Morogoro?', a: 'A typical 3-bedroom house requires approximately 2,500-3,500 blocks depending on design. Contact us for a free quantity estimate based on your building plans.' },
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

        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Need Blocks in Morogoro?</h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm">Contact our team for pricing, delivery scheduling and technical specifications. Vikapu bora kwa ujenzi wako!</p>
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
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
              { '@type': 'ListItem', position: 2, name: 'Blocks Supplier', item: `${siteUrl}/blocks-supplier-morogoro` },
              { '@type': 'ListItem', position: 3, name: 'Morogoro', item: `${siteUrl}/blocks-supplier-morogoro` },
            ],
          },
          {
            '@type': 'Service',
            name: 'Concrete Blocks Supply — Morogoro',
            description: 'Supply of hollow blocks, solid blocks and interlocking blocks for construction projects in Morogoro.',
            provider: { '@type': 'Organization', name: 'Tanzibaba' },
            areaServed: { '@type': 'Place', name: 'Morogoro' },
            serviceType: 'Building Materials Supply',
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What types of concrete blocks do you supply in Morogoro?', acceptedAnswer: { '@type': 'Answer', text: 'We supply hollow blocks, solid blocks and interlocking blocks for walls, partitions, load-bearing structures and construction projects across Morogoro region.' } },
              { '@type': 'Question', name: 'Do you deliver blocks to Mazoma and Kola?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we deliver concrete blocks and building materials to all areas in Morogoro including Mazoma, Kola, Kingolwira, Luale, Masakinga, Ifakara and Mikumi.' } },
              { '@type': 'Question', name: 'What is the price of hollow blocks in Morogoro?', acceptedAnswer: { '@type': 'Answer', text: 'Hollow concrete blocks in Morogoro start from TZS 850 per piece. Prices vary by block type, quantity and delivery location.' } },
              { '@type': 'Question', name: 'How many blocks do I need for a house in Morogoro?', acceptedAnswer: { '@type': 'Answer', text: 'A typical 3-bedroom house requires approximately 2,500-3,500 blocks depending on design. Contact us for a free quantity estimate.' } },
            ],
          },
        ],
      }) }} />
    </>
  );
}
