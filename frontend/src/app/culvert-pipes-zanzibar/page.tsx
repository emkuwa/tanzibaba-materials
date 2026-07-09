import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, CheckCircle, Package } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Culvert Pipes Zanzibar | Precast Concrete | Tanzibaba',
  description: 'Quality precast concrete culvert pipes for drainage and infrastructure projects across Zanzibar. Materials supplied through our established logistics network.',
  keywords: ['culvert pipes Zanzibar', 'precast concrete pipes Zanzibar', 'drainage pipes Zanzibar', 'infrastructure pipes Zanzibar'],
  alternates: { canonical: `${siteUrl}/culvert-pipes-zanzibar` },
  openGraph: {
    title: 'Culvert Pipes Zanzibar | Tanzibaba',
    description: 'Quality precast concrete culvert pipes for drainage and infrastructure projects across Zanzibar.',
    url: `${siteUrl}/culvert-pipes-zanzibar`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/culvert-pipes.webp', width: 1200, height: 630 }],
  },
};

export default function CulvertPipesZanzibarPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/culvert-pipes.webp" alt="Culvert pipes supply in Zanzibar" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <MapPin className="w-4 h-4" /> Zanzibar Operations
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Culvert Pipes{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Zanzibar
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Quality precast concrete culvert pipes for drainage and infrastructure projects across Zanzibar. Materials supplied through our established logistics network.
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
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Culvert Pipes for Zanzibar Projects</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">Tanzibaba supplies quality precast concrete culvert pipes to Zanzibar through our established logistics network for drainage and infrastructure projects.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Drainage Systems', desc: 'Quality precast culvert pipes for stormwater drainage, roadside drainage and municipal infrastructure across Zanzibar.' },
                { title: 'Road Infrastructure', desc: 'Culvert pipes for road crossings, highway drainage and transport infrastructure projects across the islands.' },
                { title: 'Commercial Developments', desc: 'Pre-cast culvert pipes for commercial property drainage, parking lot drainage and site infrastructure in Zanzibar.' },
                { title: 'Infrastructure Projects', desc: 'Culvert pipes for bridges, water management systems and large-scale infrastructure developments in Zanzibar.' },
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
              <p className="text-gray-500 max-w-2xl mx-auto text-sm">Quick answers to common questions about culvert pipe supply in Zanzibar.</p>
            </div>
            <div className="space-y-4">
              {[
                { q: 'What culvert pipe sizes do you supply in Zanzibar?', a: 'We supply precast concrete culvert pipes in a range of diameters including 450mm, 600mm, 750mm, 900mm, 1050mm and 1200mm. Pipes are available in standard and heavy-duty configurations to suit different drainage and infrastructure requirements across Zanzibar.' },
                { q: 'Are pipes suitable for road drainage?', a: 'Yes, our precast concrete culvert pipes are designed for road drainage, highway crossings and transport infrastructure projects. They meet load rating requirements for road applications and are engineered to withstand traffic loads and environmental conditions in Zanzibar.' },
                { q: 'Do you deliver across all of Zanzibar?', a: 'Yes, we deliver culvert pipes to Stone Town, Nungwi, Paje, Kendwa, Jambiani and all areas across Zanzibar. Our established logistics network ensures reliable delivery of large-diameter pipes to your construction site. Contact us on WhatsApp at +255 716 002 790 for delivery scheduling.' },
                { q: 'What is the load rating for your pipes?', a: 'Our precast concrete culvert pipes are manufactured to meet AASHTO and local road authority load rating standards. Standard pipes suit normal traffic conditions while heavy-duty variants handle high-traffic and deep burial applications. Contact our team for specific load rating certifications for your Zanzibar project.' },
                { q: 'How do I get a quote for culvert pipes?', a: 'Getting a quote is quick and easy. Click the "Get a Quote" button on our website, provide your project details including pipe diameter, quantity and delivery location, and we will send you a price estimate via WhatsApp. You can also message us directly at +255 716 002 790 for an immediate response.' },
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
          { '@type': 'Question', name: 'What culvert pipe sizes do you supply in Zanzibar?', acceptedAnswer: { '@type': 'Answer', text: 'We supply precast concrete culvert pipes in a range of diameters including 450mm, 600mm, 750mm, 900mm, 1050mm and 1200mm. Pipes are available in standard and heavy-duty configurations to suit different drainage and infrastructure requirements across Zanzibar.' } },
          { '@type': 'Question', name: 'Are pipes suitable for road drainage?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, our precast concrete culvert pipes are designed for road drainage, highway crossings and transport infrastructure projects. They meet load rating requirements for road applications and are engineered to withstand traffic loads and environmental conditions in Zanzibar.' } },
          { '@type': 'Question', name: 'Do you deliver across all of Zanzibar?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we deliver culvert pipes to Stone Town, Nungwi, Paje, Kendwa, Jambiani and all areas across Zanzibar. Our established logistics network ensures reliable delivery of large-diameter pipes to your construction site. Contact us on WhatsApp at +255 716 002 790 for delivery scheduling.' } },
          { '@type': 'Question', name: 'What is the load rating for your pipes?', acceptedAnswer: { '@type': 'Answer', text: 'Our precast concrete culvert pipes are manufactured to meet AASHTO and local road authority load rating standards. Standard pipes suit normal traffic conditions while heavy-duty variants handle high-traffic and deep burial applications. Contact our team for specific load rating certifications for your Zanzibar project.' } },
          { '@type': 'Question', name: 'How do I get a quote for culvert pipes?', acceptedAnswer: { '@type': 'Answer', text: 'Getting a quote is quick and easy. Click the "Get a Quote" button on our website, provide your project details including pipe diameter, quantity and delivery location, and we will send you a price estimate via WhatsApp. You can also message us directly at +255 716 002 790 for an immediate response.' } },
        ] }) }} />

        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Need Culvert Pipes in Zanzibar?</h2>
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
