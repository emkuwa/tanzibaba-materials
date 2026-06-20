import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, HelpCircle, Truck, DollarSign, Phone, Mountain } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Kokoto Dodoma — Msambazaji wa Kokoto & Gravel | Tanzibaba',
  description: 'Msambazaji wa kokoto Dodoma. Kokoto, jiwe lililovunjwa na vifaa vya msingi kwa ujenzi. Uwasilishaji Chamwino, Bahi, Kongwa na Mpwapwa.',
  keywords: ['kokoto Dodoma', 'gravel supplier Dodoma', 'kokoto Tanzania', 'crushed stone Dodoma', 'kokoto bora', 'kokoto kwa ujenzi', 'bei ya kokoto', 'msambazaji wa kokoto', 'kokoto Chamwino', 'kokoto Bahi'],
  alternates: { canonical: `${siteUrl}/kokoto-dodoma` },
  openGraph: {
    title: 'Kokoto Dodoma — Msambazaji wa Kokoto & Gravel | Tanzibaba',
    description: 'Msambazaji wa kokoto Dodoma. Kokoto, jiwe lililovunjwa na vifaa vya msingi.',
    url: `${siteUrl}/kokoto-dodoma`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'sw_TZ',
    images: [{ url: '/images/new/aggregates.webp', width: 1200, height: 630 }],
  },
};

export default function KokotoDodomaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/aggregates.webp" alt="Kokoto Dodoma — Msambazaji wa kokoto bora" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Mountain className="w-4 h-4" /> Msambazaji wa Kokoto — Dodoma
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Kokoto{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Dodoma
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Msambazaji wa kokoto bora Dodoma. Kokoto asili, jiwe lililovunjwa na vifaa vya msingi kwa ujenzi wa barabara na majengo. Uwasilishaji Chamwino, Bahi, Kongwa na Mpwapwa.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href="/get-quote" className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40">
                  Pata Bei <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                  WhatsApp Sisi
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Aina za Kokoto Dodoma</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">Tunatoa kokoto na vifaa vya msingi kwa aina zote za ujenzi katika mkoa wa Dodoma.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { type: 'Kokoto Asili', price: 'TZS 28,000/tone', desc: 'Kokoto asili kwa changarawe, mchanganyiko wa zege na drainage.', swahili: 'Natural gravel kwa ujenzi' },
                { type: 'Jiwe Lililovunjwa', price: 'TZS 35,000/tone', desc: 'Jiwe lililovunjwa kwa barabara, misingi na majengo ya Kiwanda.', swahili: 'Crushed stone kwa barabara' },
                { type: 'Base Course', price: 'TZS 32,000/tone', desc: 'Msingi wa ubora kwa ujenzi wa barabara na misingi ya majengo.', swahili: 'Road base material' },
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
          </div>
        </section>

        {/* Delivery */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Uwasilishaji wa Kokoto Dodoma</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { area: 'Jiji la Dodoma', coverage: 'Kamili' },
                { area: 'Chamwino', coverage: 'Kamili' },
                { area: 'Bahi', coverage: 'Kamili' },
                { area: 'Kongwa', coverage: 'Kamili' },
                { area: 'Mpwapwa', coverage: 'Kamili' },
                { area: 'Kondoa', coverage: 'Kwa ombi' },
                { area: 'Kilosa', coverage: 'Kwa ombi' },
                { area: 'Bagamoyo', coverage: 'Kwa ombi' },
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
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Maswali Yanayoulizwa</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: 'Kokoto gani mnatoa Dodoma?', a: 'Tunatoa kokoto asili, jiwe lililovunjwa na base course kwa ujenzi wa barabara, changarawe na majengo katika mkoa wa Dodoma.' },
                { q: 'Bei gani za kokoto Dodoma?', a: 'Kokoto Dodoma inaanza TZS 28,000 kwa tone. Bei zinatofautiana kulingana na aina na kiasi.' },
                { q: 'Je, mnawasilisha kokoto Chamwino na Bahi?', a: 'Ndiyo, tunawasilisha kokoto na vifaa vya ujenzi katika wilaya zote za Dodoma ikiwa ni pamoja na Chamwino, Bahi, Kongwa na Mpwapwa.' },
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Hitaji Kokoto Dodoma?</h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm">Wasiliana nasi kwa bei na uwasilishaji. Kokoto bora kwa ujenzi wako!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/get-quote" className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30">
                Pata Bei <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all">
                WhatsApp Sisi
              </a>
              <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                <Phone className="w-4 h-4" /> Piga Simu
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
          { '@type': 'Question', name: 'Kokoto gani mnatoa Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'Tunatoa kokoto asili, jiwe lililovunjwa na base course kwa ujenzi wa barabara, changarawe na majengo.' } },
          { '@type': 'Question', name: 'Bei gani za kokoto Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'Kokoto Dodoma inaanza TZS 28,000 kwa tone. Bei zinatofautiana kulingana na aina na kiasi.' } },
          { '@type': 'Question', name: 'Je, mnawasilisha kokoto Chamwino na Bahi?', acceptedAnswer: { '@type': 'Answer', text: 'Ndiyo, tunawasilisha kokoto na vifaa vya ujenzi katika wilaya zote za Dodoma.' } },
        ]
      }) }} />
    </>
  );
}
