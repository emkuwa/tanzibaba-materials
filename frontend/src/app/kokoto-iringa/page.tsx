import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, HelpCircle, Truck, DollarSign, Phone, Mountain } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Kokoto Iringa — Msambazaji wa Kokoto & Gravel | Tanzibaba',
  description: 'Msambazaji wa kokoto Iringa. Kokoto, jiwe lililovunjwa na vifaa vya msingi kwa ujenzi. Uwasilishaji Mazimbu, Kihesa, Nala na Madizini.',
  keywords: ['kokoto Iringa', 'gravel supplier Iringa', 'kokoto Tanzania', 'crushed stone Iringa', 'kokoto bora', 'kokoto kwa ujenzi', 'bei ya kokoto', 'msambazaji wa kokoto', 'kokoto Mazimbu', 'kokoto Kihesa'],
  alternates: { canonical: `${siteUrl}/kokoto-iringa` },
  openGraph: {
    title: 'Kokoto Iringa — Msambazaji wa Kokoto & Gravel | Tanzibaba',
    description: 'Msambazaji wa kokoto Iringa. Kokoto, jiwe lililovunjwa na vifaa vya msingi.',
    url: `${siteUrl}/kokoto-iringa`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'sw_TZ',
    images: [{ url: '/images/new/aggregates.webp', width: 1200, height: 630 }],
  },
};

export default function KokotoIringaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/aggregates.webp" alt="Kokoto supplier in Iringa" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Mountain className="w-4 h-4" /> Kokoto & Gravel — Iringa
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Msambazaji wa{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Kokoto Iringa
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Kokoto bora kwa ujenzi wa barabara, majengo na miundombinu. Uwasilishaji wa haraka Mazimbu, Kihesa, Nala na Madizini.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href="/get-quote" className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40">
                  Pata Bei <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Kokoto Sizes */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Kokoto Sizes Available in Iringa</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">We supply various kokoto sizes for different construction needs across Iringa.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { size: 'Crusher Dust', uses: 'Paving & Base' },
                { size: '0-5mm', uses: 'Fine Concrete' },
                { size: '5-10mm', uses: 'Lightweight Blocks' },
                { size: '10-20mm', uses: 'Standard Concrete' },
                { size: '20-40mm', uses: 'Heavy Concrete' },
                { size: '40mm+', uses: 'Road Works' },
                { size: 'Road Base', uses: 'Road Construction' },
                { size: 'Asphalt Aggregate', uses: 'Road Surfacing' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-4 text-center">
                  <p className="font-bold text-brand-600 text-sm">{item.size}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.uses}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Coverage */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Kokoto Delivery in Iringa</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { area: 'Iringa City', coverage: 'Full coverage' },
                { area: 'Mazimbu', coverage: 'Full coverage' },
                { area: 'Kihesa', coverage: 'Full coverage' },
                { area: 'Nala', coverage: 'Full coverage' },
                { area: 'Madizini', coverage: 'Full coverage' },
                { area: 'Mlandizi', coverage: 'Full coverage' },
                { area: 'Idodi', coverage: 'On request' },
                { area: 'Kalenga', coverage: 'On request' },
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
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Maswali Yanayoulizwa Mara kwa Mara</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: 'Je, mnauza kokoto Iringa?', a: 'Ndiyo, tunauza kokoto bora kwa ujenzi wa barabara, majengo na miundombinu katika mkoa wa Iringa na maeneo yote jirani.' },
                { q: 'Kokoto gimi mnauza Iringa?', a: 'Tunauza kokoto za ukubwa tofauti kuanzia crusher dust hadi 40mm+ na road base material kwa miradi yote ya ujenzi.' },
                { q: 'Bei ya kokoto Iringa ni ngapi?', a: 'Bei ya kokoto Iringa inaanzia TZS 75,000 kwa tani. Bei hutofautiana kulingana na ukubwa na kiasi. Wasiliana nasi kwa bei za mradi wako.' },
                { q: 'Je, mnawasilisha kokoto Mazimbu na Kihesa?', a: 'Ndiyo, tunawasilisha kokoto katika maeneo yote ya Iringa ikiwa ni pamoja na Mazimbu, Kihesa, Nala, Madizini na Mlandizi.' },
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Unahitaji Kokoto Iringa?</h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm">Wasiliana nasi kwa bei, usambazaji na ratiba ya uwasilishaji. Kokoto bora kwa mradi wako!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/get-quote" className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30">
                Pata Bei <ArrowRight className="w-4 h-4" />
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
          { '@type': 'Service', name: 'Kokoto Supply Iringa', provider: { '@id': 'https://materials.tanzibaba.com/#business' }, areaServed: 'Iringa, Tanzania', description: 'Kokoto (gravel) supply in Iringa for construction, road building and infrastructure projects.' },
          { '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://materials.tanzibaba.com' },
            { '@type': 'ListItem', position: 2, name: 'Kokoto Iringa', item: 'https://materials.tanzibaba.com/kokoto-iringa' }
          ]},
          { '@type': 'FAQPage', mainEntity: [
            { '@type': 'Question', name: 'Je, mnauza kokoto Iringa?', acceptedAnswer: { '@type': 'Answer', text: 'Ndiyo, tunauza kokoto bora kwa ujenzi wa barabara, majengo na miundombinu katika mkoa wa Iringa na maeneo yote jirani.' } },
            { '@type': 'Question', name: 'Bei ya kokoto Iringa ni ngapi?', acceptedAnswer: { '@type': 'Answer', text: 'Bei ya kokoto Iringa inaanzia TZS 75,000 kwa tani. Bei hutofautiana kulingana na ukubwa na kiasi.' } },
        ] }
        ]
      }) }} />
    </>
  );
}
