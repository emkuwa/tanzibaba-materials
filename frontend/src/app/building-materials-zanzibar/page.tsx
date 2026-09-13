import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, HelpCircle, Phone, Package, CheckCircle } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Building Materials Zanzibar — Cement, Steel & Finishes | Tanzibaba',
  description: 'Complete building materials supply in Zanzibar. Cement, steel, paints, tiles, plumbing and electrical supplies. Delivery to Stone Town, Nungwi, Paje, Jambiani.',
  keywords: ['building materials Zanzibar', 'vifaa vya ujenzi Zanzibar', 'construction materials Zanzibar', 'building supplies Zanzibar', 'cement Zanzibar', 'steel Zanzibar', 'paints Zanzibar', 'tiles Zanzibar', 'plumbing Zanzibar', 'electrical supplies Zanzibar'],
  alternates: { canonical: `${siteUrl}/building-materials-zanzibar` },
  openGraph: {
    title: 'Building Materials Zanzibar — Cement, Steel & Finishes | Tanzibaba',
    description: 'Complete building materials supply in Zanzibar. Cement, steel, paints, tiles, plumbing and electrical supplies.',
    url: `${siteUrl}/building-materials-zanzibar`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/aggregates.webp', width: 1200, height: 630 }],
  },
};

export default function BuildingMaterialsZanzibarPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/aggregates.webp" alt="Building materials supplier in Zanzibar" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Package className="w-4 h-4" /> Building Materials \u2014 Zanzibar
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Building Materials{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Zanzibar
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Complete building materials supply in Zanzibar. Cement, steel, paints, tiles, plumbing and electrical supplies. Delivery to Stone Town, Nungwi, Paje, Jambiani.
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
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Our Building Materials Range</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">Tanzibaba supplies the complete range of building materials for construction projects across Zanzibar.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Cement & Concrete', desc: 'Premium cement brands CEM I to CEM IV. Concrete mix, mortar and plaster supplies.', swahili: 'Semeneti na zege', icon: 'C', color: 'blue', href: '/blocks-supplier-zanzibar' },
                { title: 'Steel & Iron', desc: 'Reinforcement bars, structural steel, galvanized sheets and iron fittings.', swahili: 'Chuma na mbao', icon: 'S', color: 'orange', href: '/blocks-supplier-zanzibar' },
                { title: 'Paints & Finishes', desc: 'Interior, exterior, primers and specialty coatings for residential and commercial projects.', swahili: 'Rangi na mapambo', icon: 'P', color: 'purple', href: '/blocks-supplier-zanzibar' },
                { title: 'Tiles & Ceramics', desc: 'Floor tiles, wall tiles, porcelain and ceramic tiles for all building projects.', swahili: 'Tiles na ceramics', icon: 'T', color: 'green', href: '/blocks-supplier-zanzibar' },
                { title: 'Plumbing Supplies', desc: 'Pipes, fittings, valves, fixtures and water supply systems for residential and commercial.', swahili: 'Vifaa vya maji', icon: 'L', color: 'blue', href: '/blocks-supplier-zanzibar' },
                { title: 'Electrical Supplies', desc: 'Cables, switches, panels, lighting and electrical accessories for construction.', swahili: 'Vifaa vya umeme', icon: 'E', color: 'orange', href: '/blocks-supplier-zanzibar' },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:border-brand-200 hover:bg-brand-50 transition-all group">
                  <div className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-${item.color}-200 transition-colors`}>
                    <span className={`text-${item.color}-600 font-bold`}>{item.icon}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-brand-700">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{item.desc}</p>
                  <p className="text-gray-400 text-xs italic mb-3">{item.swahili}</p>
                  <span className="text-brand-600 font-semibold text-sm group-hover:underline">Learn More \u2192</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Building Materials Delivery in Zanzibar</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">We deliver all building materials across Zanzibar island and surrounding areas.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { area: 'Stone Town', coverage: 'Full coverage' },
                { area: 'Nungwi', coverage: 'Full coverage' },
                { area: 'Paje', coverage: 'Full coverage' },
                { area: 'Jambiani', coverage: 'Full coverage' },
                { area: 'Kiwengwa', coverage: 'Full coverage' },
                { area: 'Matemwe', coverage: 'Full coverage' },
                { area: 'Fumba', coverage: 'On request' },
                { area: 'Zanzibar City', coverage: 'Full coverage' },
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-gray-500 text-sm">Common questions about building materials supply in Zanzibar</p>
            </div>
            <div className="space-y-4">
              {[
                { q: 'What building materials do you supply in Zanzibar?', a: 'We supply the complete range of building materials in Zanzibar including cement, steel, paints, tiles, plumbing and electrical supplies for all construction projects.' },
                { q: 'Do you deliver building materials to all areas of Zanzibar?', a: 'Yes, we deliver building materials to all areas of Zanzibar including Stone Town, Nungwi, Paje, Jambiani, Kiwengwa, Matemwe, Fumba and Zanzibar City.' },
                { q: 'Can I get all materials from one supplier in Zanzibar?', a: 'Yes, Tanzibaba is your one-stop building materials supplier in Zanzibar. We supply cement, steel, paints, tiles, plumbing and electrical with unified delivery and billing.' },
                { q: 'Do you offer bulk pricing for building materials in Zanzibar?', a: 'Yes, we offer competitive bulk pricing for all building materials. Contact us for project-specific quotes and volume discounts.' },
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Need Building Materials in Zanzibar?</h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm">Contact us for complete building materials supply. One supplier, all materials, reliable delivery. Wasiliana nasi leo!</p>
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
              { '@type': 'ListItem', position: 2, name: 'Building Materials', item: `${siteUrl}/building-materials-zanzibar` },
              { '@type': 'ListItem', position: 3, name: 'Zanzibar', item: `${siteUrl}/building-materials-zanzibar` },
            ],
          },
          {
            '@type': 'Service',
            name: 'Building Materials Supply \u2014 Zanzibar',
            description: 'Complete building materials supply in Zanzibar including cement, steel, paints, tiles, plumbing and electrical.',
            provider: { '@type': 'Organization', name: 'Tanzibaba' },
            areaServed: { '@type': 'Place', name: 'Zanzibar' },
            serviceType: 'Building Materials Supply',
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What building materials do you supply in Zanzibar?', acceptedAnswer: { '@type': 'Answer', text: 'We supply the complete range of building materials in Zanzibar including cement, steel, paints, tiles, plumbing and electrical supplies.' } },
              { '@type': 'Question', name: 'Do you deliver building materials to all areas of Zanzibar?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we deliver building materials to all areas of Zanzibar including Stone Town, Nungwi, Paje, Jambiani, Kiwengwa, Matemwe, Fumba and Zanzibar City.' } },
              { '@type': 'Question', name: 'Can I get all materials from one supplier in Zanzibar?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Tanzibaba is your one-stop building materials supplier in Zanzibar. We supply cement, steel, paints, tiles, plumbing and electrical.' } },
              { '@type': 'Question', name: 'Do you offer bulk pricing for building materials in Zanzibar?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer competitive bulk pricing for all building materials. Contact us for project-specific quotes and volume discounts.' } },
            ],
          },
        ],
      }) }} />
    </>
  );
}
