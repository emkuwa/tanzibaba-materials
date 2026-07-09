import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, HelpCircle, Phone, Package, CheckCircle } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Building Materials Mpwapwa — Zege, Kokoto & Blocks | Tanzibaba',
  description: 'Building materials supplier in Mpwapwa, Dodoma. Ready mix concrete, aggregates, kokoto, blocks, paving blocks and culvert pipes.',
  keywords: ['building materials Mpwapwa', 'zege Mpwapwa', 'kokoto Mpwapwa', 'concrete Mpwapwa', 'blocks Mpwapwa', 'vifaa vya ujenzi Mpwapwa', 'msambazaji wa zege Mpwapwa', 'aggregates Mpwapwa'],
  alternates: { canonical: `${siteUrl}/mpwapwa-building-materials` },
  openGraph: {
    title: 'Building Materials Mpwapwa — Zege, Kokoto & Blocks | Tanzibaba',
    description: 'Building materials supplier in Mpwapwa, Dodoma. Concrete, aggregates, blocks and pipes.',
    url: `${siteUrl}/mpwapwa-building-materials`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/aggregates.webp', width: 1200, height: 630 }],
  },
};

export default function MpwapwaBuildingMaterialsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/aggregates.webp" alt="Building materials supplier Mpwapwa" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <MapPin className="w-4 h-4" /> Mpwapwa District — Dodoma
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Building Materials{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Mpwapwa
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Complete building materials supplier in Mpwapwa district, Dodoma. Ready mix concrete, aggregates, kokoto, blocks, paving blocks and culvert pipes for construction projects.
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

        {/* Available Materials */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Building Materials Available in Mpwapwa</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">We deliver the full range of construction materials to Mpwapwa district.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Ready-Mix Concrete', desc: 'Grades C10-C50, washed sand technology', swahili: 'Zege tayari', href: '/ready-mix-concrete-dodoma', color: 'orange' },
                { title: 'Aggregates & Kokoto', desc: 'Natural gravel, crushed stone, base course', swahili: 'Kokoto na vifaa', href: '/aggregates-supplier-dodoma', color: 'orange' },
                { title: 'Concrete Blocks', desc: 'Hollow, solid and interlocking blocks', swahili: 'Vikapu', href: '/blocks-supplier-dodoma', color: 'blue' },
                { title: 'Paving Blocks', desc: 'Interlocking pavers and kerbstones', swahili: 'Vya kupavisha', href: '/paving-blocks-dodoma', color: 'purple' },
                { title: 'Culvert Pipes', desc: 'Round pipes and box culverts', swahili: 'Mifereji', href: '/culvert-pipes-dodoma', color: 'green' },
                { title: 'Zege (Swahili)', desc: 'Zege bora kwa ujenzi Mpwapwa', swahili: 'Zege bora', href: '/zege-dodoma', color: 'brand' },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-brand-50 border border-gray-100 hover:border-brand-200 transition-all group">
                  <div className={`w-10 h-10 bg-${item.color}-100 rounded-xl flex items-center justify-center group-hover:bg-${item.color}-200 transition-colors`}>
                    <Package className={`w-5 h-5 text-${item.color}-600`} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                    <p className="text-gray-400 text-xs italic">{item.swahili}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Mpwapwa Building Materials FAQs</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: 'Do you deliver building materials to Mpwapwa district?', a: 'Yes, we deliver all building materials to Mpwapwa district including ready mix concrete, aggregates, blocks, paving blocks and culvert pipes.' },
                { q: 'How long does delivery take to Mpwapwa?', a: 'Delivery to Mpwapwa typically takes 2-4 hours from order confirmation. Same-day delivery available for orders placed before 2:00 PM.' },
                { q: 'What materials do you supply in Mpwapwa?', a: 'We supply the complete range of building materials in Mpwapwa including concrete, aggregates, kokoto, blocks, paving blocks and culvert pipes.' },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
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
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Need Materials in Mpwapwa?</h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm">Contact us for building materials supply to Mpwapwa district. Fast delivery, competitive prices!</p>
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
          { '@type': 'Question', name: 'Do you deliver building materials to Mpwapwa district?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we deliver all building materials to Mpwapwa district including ready mix concrete, aggregates, blocks, paving blocks and culvert pipes.' } },
          { '@type': 'Question', name: 'How long does delivery take to Mpwapwa?', acceptedAnswer: { '@type': 'Answer', text: 'Delivery to Mpwapwa typically takes 2-4 hours from order confirmation. Same-day delivery available.' } },
        ]
      }) }} />
    </>
  );
}
