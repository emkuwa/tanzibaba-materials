import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, CheckCircle, Square } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Blocks Supplier Zanzibar | Concrete Blocks | Tanzibaba',
  description: 'Supply of concrete blocks and building materials for projects across Zanzibar with dependable delivery and project support.',
  keywords: ['concrete blocks Zanzibar', 'blocks supplier Zanzibar', 'hollow blocks Zanzibar', 'solid blocks Zanzibar', 'building materials Zanzibar'],
  alternates: { canonical: `${siteUrl}/blocks-supplier-zanzibar` },
  openGraph: {
    title: 'Blocks Supplier Zanzibar | Tanzibaba',
    description: 'Supply of concrete blocks and building materials for projects across Zanzibar.',
    url: `${siteUrl}/blocks-supplier-zanzibar`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/hollow-blocks.webp', width: 1200, height: 630 }],
  },
};

export default function BlocksZanzibarPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/hollow-blocks.webp" alt="Concrete blocks supply in Zanzibar" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <MapPin className="w-4 h-4" /> Zanzibar Operations
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Concrete Blocks{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Zanzibar
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Supply of concrete blocks and building materials for projects across Zanzibar with dependable delivery and project support.
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
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Blocks for Zanzibar Projects</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">Tanzibaba supplies concrete blocks and building materials to Zanzibar with dependable delivery and project support for residential, commercial and hospitality developments.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Hotels & Resorts', desc: 'Concrete blocks for resort developments, beachfront hotels and hospitality projects across Zanzibar.' },
                { title: 'Residential Projects', desc: 'Reliable block supply for residential developments, apartments and private homes in Stone Town and beyond.' },
                { title: 'Commercial Buildings', desc: 'Commercial block supply for retail centers, office buildings and mixed-use developments in Zanzibar.' },
                { title: 'Infrastructure Projects', desc: 'Blocks for roads, drainage, water infrastructure and public works projects across the islands.' },
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">Other Services in Zanzibar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link href="/aggregates-supplier-zanzibar" className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-orange-50 border border-gray-100 hover:border-orange-200 transition-all group">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <span className="text-orange-600 font-bold text-sm">A</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Aggregates</p>
                  <p className="text-gray-500 text-xs">Zanzibar Supplier</p>
                </div>
              </Link>
              <Link href="/paving-blocks-zanzibar" className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-purple-50 border border-gray-100 hover:border-purple-200 transition-all group">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <span className="text-purple-600 font-bold text-sm">P</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Paving Blocks</p>
                  <p className="text-gray-500 text-xs">Zanzibar Supplier</p>
                </div>
              </Link>
              <Link href="/culvert-pipes-zanzibar" className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 transition-all group">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <span className="text-green-600 font-bold text-sm">C</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Culvert Pipes</p>
                  <p className="text-gray-500 text-xs">Zanzibar Supplier</p>
                </div>
              </Link>
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
              <p className="text-gray-500 max-w-2xl mx-auto text-sm">Quick answers to common questions about concrete blocks supply in Zanzibar.</p>
            </div>
            <div className="space-y-4">
              {[
                { q: 'What types of concrete blocks do you supply in Zanzibar?', a: 'We supply both hollow and solid concrete blocks suitable for residential, commercial and infrastructure projects across Zanzibar. Our blocks are manufactured to meet construction standards and are available in various grades and densities to suit different structural requirements.' },
                { q: 'What block sizes are available?', a: 'We offer concrete blocks in standard sizes including 400x200x200mm, 400x200x150mm and 400x200x100mm. Hollow blocks come in 2-cell and 3-cell configurations. Our team can help you select the right size and type for your specific project requirements.' },
                { q: 'Do you deliver to all areas of Zanzibar?', a: 'Yes, we deliver concrete blocks to Stone Town, Nungwi, Paje, Kendwa, Jambiani and all areas across Zanzibar. Our established logistics network ensures reliable delivery to your construction site. Contact us on WhatsApp at +255 716 002 790 for delivery availability and scheduling.' },
                { q: 'What is the difference between hollow and solid blocks?', a: 'Hollow blocks have cavities that reduce weight and improve thermal insulation, making them ideal for partition walls and non-load-bearing applications. Solid blocks are denser and stronger, suitable for load-bearing walls and structural applications. Both types are available in various grades for different project needs.' },
                { q: 'How do I calculate how many blocks I need?', a: 'To calculate blocks needed, measure your wall area in square metres and multiply by the number of blocks per square metre based on your chosen block size. For a 400x200x200mm block, you need approximately 12.5 blocks per square metre. Contact our team for a free quantity estimate for your Zanzibar project.' },
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
          { '@type': 'Question', name: 'What types of concrete blocks do you supply in Zanzibar?', acceptedAnswer: { '@type': 'Answer', text: 'We supply both hollow and solid concrete blocks suitable for residential, commercial and infrastructure projects across Zanzibar. Our blocks are manufactured to meet construction standards and are available in various grades and densities to suit different structural requirements.' } },
          { '@type': 'Question', name: 'What block sizes are available?', acceptedAnswer: { '@type': 'Answer', text: 'We offer concrete blocks in standard sizes including 400x200x200mm, 400x200x150mm and 400x200x100mm. Hollow blocks come in 2-cell and 3-cell configurations. Our team can help you select the right size and type for your specific project requirements.' } },
          { '@type': 'Question', name: 'Do you deliver to all areas of Zanzibar?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we deliver concrete blocks to Stone Town, Nungwi, Paje, Kendwa, Jambiani and all areas across Zanzibar. Our established logistics network ensures reliable delivery to your construction site. Contact us on WhatsApp at +255 716 002 790 for delivery availability and scheduling.' } },
          { '@type': 'Question', name: 'What is the difference between hollow and solid blocks?', acceptedAnswer: { '@type': 'Answer', text: 'Hollow blocks have cavities that reduce weight and improve thermal insulation, making them ideal for partition walls and non-load-bearing applications. Solid blocks are denser and stronger, suitable for load-bearing walls and structural applications. Both types are available in various grades for different project needs.' } },
          { '@type': 'Question', name: 'How do I calculate how many blocks I need?', acceptedAnswer: { '@type': 'Answer', text: 'To calculate blocks needed, measure your wall area in square metres and multiply by the number of blocks per square metre based on your chosen block size. For a 400x200x200mm block, you need approximately 12.5 blocks per square metre. Contact our team for a free quantity estimate for your Zanzibar project.' } },
        ] }) }} />

        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Need Blocks in Zanzibar?</h2>
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
