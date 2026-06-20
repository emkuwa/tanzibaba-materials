import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, CheckCircle, Package } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Paving Blocks Zanzibar | Interlocking Pavers | Tanzibaba',
  description: 'Quality paving blocks and interlocking pavers for construction projects across Zanzibar. Driveways, walkways, parking areas and landscaping developments.',
  keywords: ['paving blocks Zanzibar', 'interlocking pavers Zanzibar', 'driveway pavers Zanzibar', 'walkway blocks Zanzibar'],
  alternates: { canonical: `${siteUrl}/paving-blocks-zanzibar` },
  openGraph: {
    title: 'Paving Blocks Zanzibar | Tanzibaba',
    description: 'Quality paving blocks and interlocking pavers for construction projects across Zanzibar.',
    url: `${siteUrl}/paving-blocks-zanzibar`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/paving-blocks.png', width: 1200, height: 630 }],
  },
};

export default function PavingBlocksZanzibarPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/paving-blocks.png" alt="Paving blocks supply in Zanzibar" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <MapPin className="w-4 h-4" /> Zanzibar Operations
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Paving Blocks{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Zanzibar
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Quality paving blocks and interlocking pavers for construction projects across Zanzibar. Driveways, walkways, parking areas and landscaping developments.
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
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Paving Blocks for Zanzibar Projects</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">Tanzibaba supplies quality paving blocks and interlocking pavers to Zanzibar for driveways, walkways, parking areas and landscaping developments.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Hotels & Resorts', desc: 'Paving blocks for resort developments, beachfront hotels and hospitality projects across Zanzibar.' },
                { title: 'Residential Projects', desc: 'Premium pavers for residential driveways, garden pathways and outdoor living spaces in Stone Town and beyond.' },
                { title: 'Commercial Buildings', desc: 'Durable interlocking pavers for commercial parking lots, forecourts and high-traffic areas in Zanzibar.' },
                { title: 'Landscaping Projects', desc: 'Quality pavers for landscape design, park developments, pedestrian zones and public spaces across the islands.' },
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

        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <CheckCircle className="w-4 h-4" /> FAQ
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm">Quick answers to common questions about paving blocks supply in Zanzibar.</p>
            </div>
            <div className="space-y-4">
              {[
                { q: 'What paving block styles are available in Zanzibar?', a: 'We offer a wide range of interlocking paving block styles including zig-zag, uni-paver, rectangular and T-shape designs. Each style is available in different sizes and thicknesses to suit driveways, walkways, parking areas and landscaping projects across Zanzibar.' },
                { q: 'Are paving blocks suitable for driveways?', a: 'Yes, our interlocking paving blocks are specifically designed for high-traffic areas including driveways, parking lots and forecourts. They offer excellent load-bearing capacity, durability and weather resistance. The interlocking design ensures stability and prevents shifting under vehicle traffic.' },
                { q: 'Do you deliver to Stone Town?', a: 'Yes, we deliver paving blocks to Stone Town, Nungwi, Paje, Kendwa, Jambiani and all areas across Zanzibar. Our established logistics network ensures reliable delivery to your construction site. Contact us on WhatsApp at +255 716 002 790 for delivery scheduling and availability.' },
                { q: 'What colors and patterns are available?', a: 'Our paving blocks are available in natural grey, red, yellow and charcoal colors. Multiple laying patterns including herringbone, basket weave, stretcher bond and running bond can be achieved with our interlocking pavers to create distinctive designs for your Zanzibar project.' },
                { q: 'How do I calculate paving block quantities?', a: 'To calculate quantities, measure your area in square metres and add 5-10% for cuts and wastage. Our team can provide a free quantity estimate based on your project dimensions and chosen block style. Contact us on WhatsApp at +255 716 002 790 for a detailed estimate for your Zanzibar project.' },
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                    {faq.q}
                    <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform shrink-0" />
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
          { '@type': 'Question', name: 'What paving block styles are available in Zanzibar?', acceptedAnswer: { '@type': 'Answer', text: 'We offer a wide range of interlocking paving block styles including zig-zag, uni-paver, rectangular and T-shape designs. Each style is available in different sizes and thicknesses to suit driveways, walkways, parking areas and landscaping projects across Zanzibar.' } },
          { '@type': 'Question', name: 'Are paving blocks suitable for driveways?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, our interlocking paving blocks are specifically designed for high-traffic areas including driveways, parking lots and forecourts. They offer excellent load-bearing capacity, durability and weather resistance. The interlocking design ensures stability and prevents shifting under vehicle traffic.' } },
          { '@type': 'Question', name: 'Do you deliver to Stone Town?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we deliver paving blocks to Stone Town, Nungwi, Paje, Kendwa, Jambiani and all areas across Zanzibar. Our established logistics network ensures reliable delivery to your construction site. Contact us on WhatsApp at +255 716 002 790 for delivery scheduling and availability.' } },
          { '@type': 'Question', name: 'What colors and patterns are available?', acceptedAnswer: { '@type': 'Answer', text: 'Our paving blocks are available in natural grey, red, yellow and charcoal colors. Multiple laying patterns including herringbone, basket weave, stretcher bond and running bond can be achieved with our interlocking pavers to create distinctive designs for your Zanzibar project.' } },
          { '@type': 'Question', name: 'How do I calculate paving block quantities?', acceptedAnswer: { '@type': 'Answer', text: 'To calculate quantities, measure your area in square metres and add 5-10% for cuts and wastage. Our team can provide a free quantity estimate based on your project dimensions and chosen block style. Contact us on WhatsApp at +255 716 002 790 for a detailed estimate for your Zanzibar project.' } },
        ] }) }} />

        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Need Paving Blocks in Zanzibar?</h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm">Contact our team for pricing, delivery scheduling and technical specifications for your Zanzibar project.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/get-quote" className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
