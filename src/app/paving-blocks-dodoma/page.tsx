import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, CheckCircle, Package, HelpCircle, Truck, DollarSign, Phone } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Paving Blocks Dodoma — Interlocking Pavers & Kerbs | Tanzibaba',
  description: 'Quality paving blocks supplier in Dodoma. Interlocking pavers, driveway blocks, walkway tiles and kerbstones for residential and commercial projects. Delivery to Chamwino, Bahi, Kongwa and Mpwapwa.',
  keywords: ['paving blocks Dodoma', 'interlocking pavers Dodoma', 'driveway pavers Dodoma', 'walkway blocks Dodoma', 'paving blocks Tanzania', 'vya kupavisha Dodoma', 'blocks za mapazia', 'kerbstones Dodoma', 'landscaping materials Dodoma'],
  alternates: { canonical: `${siteUrl}/paving-blocks-dodoma` },
  openGraph: {
    title: 'Paving Blocks Dodoma — Interlocking Pavers & Kerbs | Tanzibaba',
    description: 'Quality paving blocks supplier in Dodoma. Interlocking pavers, driveway blocks and kerbstones.',
    url: `${siteUrl}/paving-blocks-dodoma`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/paving-blocks.png', width: 1200, height: 630 }],
  },
};

export default function PavingBlocksDodomaPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/paving-blocks.png" alt="Paving blocks supply in Dodoma" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <MapPin className="w-4 h-4" /> Dodoma Operations
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Paving Blocks{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Dodoma
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Quality paving blocks and interlocking pavers for construction projects across Dodoma. Driveways, walkways, parking areas and landscaping.
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
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Paving Blocks for Dodoma Projects</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">Tanzibaba supplies quality paving blocks and interlocking pavers to Dodoma for driveways, walkways, parking areas and landscaping projects.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Government Projects', desc: 'Paving blocks for government buildings, public spaces, administrative facilities and civic infrastructure in Dodoma.' },
                { title: 'Commercial Developments', desc: 'Durable interlocking pavers for commercial parking lots, forecourts and high-traffic areas in the capital.' },
                { title: 'Residential Projects', desc: 'Premium paving blocks for residential driveways, garden pathways and outdoor living spaces in Dodoma.' },
                { title: 'Landscaping Projects', desc: 'Quality pavers for landscape design, park developments, pedestrian zones and public spaces.' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <Package className="w-5 h-5 text-brand-600" />
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

        {/* Cost Guide Section */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Paving Blocks Pricing in Dodoma</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">Competitive pricing for interlocking pavers, driveway blocks and kerbstones across Dodoma.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { type: 'Interlocking Pavers', price: 'From TZS 3,500/m²', desc: 'Standard interlocking paving blocks for driveways, walkways and parking areas.', swahili: 'Vya kupavisha kwa mapazia na maeneo ya magari' },
                { type: 'Driveway Blocks', price: 'From TZS 4,200/m²', desc: 'Heavy-duty driveway pavers for residential and commercial vehicle areas.', swahili: 'Vya magari kwa nyumba na biashara' },
                { type: 'Kerbstones', price: 'From TZS 15,000/piece', desc: 'Concrete kerbstones for road edges, garden borders and landscape definition.', swahili: 'Kerbstones za barabara na bustani' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign className="w-5 h-5 text-brand-600" />
                    <h3 className="font-bold text-gray-900">{item.type}</h3>
                  </div>
                  <p className="text-brand-600 font-bold text-lg mb-2">{item.price}</p>
                  <p className="text-gray-500 text-sm mb-2">{item.desc}</p>
                  <p className="text-gray-400 text-xs italic">{item.swahili}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-xs mt-6">*Prices exclude 18% VAT. Delivery charges vary by location. Installation services available on request.</p>
          </div>
        </section>

        {/* Delivery Coverage Section */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Paving Blocks Delivery in Dodoma</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">We deliver paving blocks, pavers and kerbstones across Dodoma region.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { area: 'Dodoma City', swahili: 'Jiji la Dodoma', coverage: 'Full coverage' },
                { area: 'Chamwino', swahili: 'Chamwino', coverage: 'Full coverage' },
                { area: 'Bahi', swahili: 'Bahi', coverage: 'Full coverage' },
                { area: 'Kongwa', swahili: 'Kongwa', coverage: 'Full coverage' },
                { area: 'Mpwapwa', swahili: 'Mpwapwa', coverage: 'Full coverage' },
                { area: 'Kondoa', swahili: 'Kondoa', coverage: 'On request' },
                { area: 'Kilosa', swahili: 'Kilosa', coverage: 'On request' },
                { area: 'Bagamoyo', swahili: 'Bagamoyo', coverage: 'On request' },
              ].map((loc, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                  <MapPin className="w-5 h-5 text-brand-500 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">{loc.area}</p>
                  <p className="text-gray-400 text-xs">{loc.swahili}</p>
                  <p className="text-green-600 text-xs mt-1">{loc.coverage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services in Dodoma */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">Other Building Materials in Dodoma</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/ready-mix-concrete-dodoma" className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-orange-50 border border-gray-100 hover:border-orange-200 transition-all group">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <span className="text-orange-600 font-bold text-sm">R</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Ready-Mix Concrete</p>
                  <p className="text-gray-500 text-xs">Zege Dodoma</p>
                </div>
              </Link>
              <Link href="/aggregates-supplier-dodoma" className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-orange-50 border border-gray-100 hover:border-orange-200 transition-all group">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <span className="text-orange-600 font-bold text-sm">A</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Aggregates & Kokoto</p>
                  <p className="text-gray-500 text-xs">Dodoma Supplier</p>
                </div>
              </Link>
              <Link href="/blocks-supplier-dodoma" className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 transition-all group">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-600 font-bold text-sm">B</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Concrete Blocks</p>
                  <p className="text-gray-500 text-xs">Vikapu Dodoma</p>
                </div>
              </Link>
              <Link href="/culvert-pipes-dodoma" className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 transition-all group">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <span className="text-green-600 font-bold text-sm">C</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Culvert Pipes</p>
                  <p className="text-gray-500 text-xs">Mifereji Dodoma</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-gray-500 text-sm">Common questions about paving blocks supply in Dodoma</p>
            </div>
            <div className="space-y-4">
              {[
                { q: 'What types of paving blocks do you supply in Dodoma?', a: 'We supply interlocking pavers, driveway blocks, walkway tiles and kerbstones for residential driveways, commercial parking areas, pedestrian walkways and landscaping projects across Dodoma.' },
                { q: 'Do you deliver paving blocks to Chamwino and Bahi?', a: 'Yes, we deliver paving blocks and landscaping materials to all districts in Dodoma region including Chamwino, Bahi, Kongwa, Mpwapwa and surrounding areas.' },
                { q: 'How much do paving blocks cost in Dodoma?', a: 'Interlocking paving blocks in Dodoma start from TZS 3,500 per m². Prices vary by block type, color and quantity. Installation services available on request.' },
                { q: 'Can you install paving blocks in Dodoma?', a: 'Yes, we offer professional paving block installation services across Dodoma. Our team handles site preparation, installation and finishing for driveways, walkways and parking areas.' },
                { q: 'What is the best paving block for a driveway?', a: 'For driveways, we recommend heavy-duty interlocking pavers (40mm thickness minimum) or driveway-specific blocks. These withstand vehicle weight and provide excellent durability.' },
                { q: 'Do you supply paving for government projects in Dodoma?', a: 'Yes, we supply paving blocks for government projects including public spaces, administrative facilities, parks and civic infrastructure in Dodoma.' },
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

        {/* CTA Section */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Need Paving Blocks in Dodoma?</h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm">Contact our team for pricing, delivery scheduling and technical specifications. Paving bora kwa mapazia yako!</p>
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
          { '@type': 'Question', name: 'What types of paving blocks do you supply in Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'We supply interlocking pavers, driveway blocks, walkway tiles and kerbstones for residential driveways, commercial parking areas, pedestrian walkways and landscaping projects.' } },
          { '@type': 'Question', name: 'Do you deliver paving blocks to Chamwino and Bahi?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we deliver paving blocks and landscaping materials to all districts in Dodoma region including Chamwino, Bahi, Kongwa, Mpwapwa and surrounding areas.' } },
          { '@type': 'Question', name: 'How much do paving blocks cost in Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'Interlocking paving blocks in Dodoma start from TZS 3,500 per m². Prices vary by block type, color and quantity.' } },
          { '@type': 'Question', name: 'Can you install paving blocks in Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer professional paving block installation services across Dodoma including site preparation, installation and finishing.' } },
        ]
      }) }} />
    </>
  );
}
