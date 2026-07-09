import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, HelpCircle, Truck, DollarSign, Phone, CheckCircle } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Zege Dodoma — Msambazaji wa Zege & Concrete | Tanzibaba',
  description: 'Msambazaji wa zege Dodoma. Zege bora kwa ujenzi, grades C10 hadi C50. Uwasilishaji wa haraka Chamwino, Bahi, Kongwa na Mpwapwa.',
  keywords: ['zege Dodoma', 'msambazaji wa zege', 'zege Tanzania', 'concrete Dodoma', 'zege bora', 'ready mix zege', 'zege kwa ujenzi', 'bei ya zege Dodoma', 'zege Chamwino', 'zege Bahi', 'zege Kongwa', 'zege Mpwapwa'],
  alternates: { canonical: `${siteUrl}/zege-dodoma` },
  openGraph: {
    title: 'Zege Dodoma — Msambazaji wa Zege & Concrete | Tanzibaba',
    description: 'Msambazaji wa zege Dodoma. Zege bora kwa ujenzi, grades C10 hadi C50.',
    url: `${siteUrl}/zege-dodoma`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'sw_TZ',
    images: [{ url: '/images/new/ready-mix-concrete.webp', width: 1200, height: 630 }],
  },
};

export default function ZegeDodomaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/ready-mix-concrete.webp" alt="Zege Dodoma — Msambazaji wa zege bora" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <MapPin className="w-4 h-4" /> Msambazaji wa Zege — Dodoma
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Zege{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Dodoma
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Msambazaji wa zege bora Dodoma. Ready mix concrete, grades C10 hadi C50, washed sand technology. Uwasilishaji wa haraka Chamwino, Bahi, Kongwa na Mpwapwa.
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

        {/* Products Section */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Bidhaa Zetu za Zege Dodoma</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">Tunatoa zege bora kwa aina zote za ujenzi katika mkoa wa Dodoma.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Ready Mix Concrete', desc: 'Zege tayari kwa kutumika, grades C10 hadi C50. Teknolojia ya washed sand kwa nguvu bora.', swahili: 'Zege tayari, grades C10-C50' },
                { title: 'Kokoto & Aggregates', desc: 'Kokoto, jiwe lililovunjwa na vifaa vya msingi kwa ujenzi wa barabara na majengo.', swahili: 'Kokoto na vifaa vya ujenzi' },
                { title: 'Vikapu (Concrete Blocks)', desc: 'Vikapu tupu, vikapu imara na vikapu vinavyofungana kwa kuta na ujenzi.', swahili: 'Vikapu vya ujenzi' },
                { title: 'Paving Blocks', desc: 'Vya kupavisha, driveway blocks na kerbstones kwa mapazia na bustani.', swahili: 'Vya kupavisha na mapazia' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm mb-1">{item.desc}</p>
                      <p className="text-gray-400 text-xs italic">{item.swahili}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Bei ya Zege Dodoma</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">Bei za ushindani kwa zege, kokoto na vifaa vya ujenzi katika mkoa wa Dodoma.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { type: 'Ready Mix Concrete', price: 'TZS 120,000 - 180,000/m³', desc: 'Grades C10 hadi C50, bei inategemea grade na kiasi.', swahili: 'Zege tayari, grades tofauti' },
                { type: 'Kokoto (Gravel)', price: 'From TZS 28,000/tonne', desc: 'Kokoto asili kwa changarawe na miundombinu.', swahili: 'Kokoto kwa ujenzi' },
                { type: 'Vikapu (Blocks)', price: 'From TZS 850/piece', desc: 'Vikapu tupu, imara na vinavyofungana.', swahili: 'Vikapu vya kila aina' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6">
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
            <p className="text-center text-gray-400 text-xs mt-6">*Bei hazijumuishi VAT 18%. Gharama za usafirishaji zinatofautiana kulingana na eneo.</p>
          </div>
        </section>

        {/* Delivery Coverage */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Uwasilishaji wa Zege Dodoma</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">Tunawasilisha zege, kokoto na vifaa vya ujenzi katika mkoa wa Dodoma na maeneo jirani.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { area: 'Jiji la Dodoma', coverage: 'Uwasilishaji kamili' },
                { area: 'Chamwino', coverage: 'Uwasilishaji kamili' },
                { area: 'Bahi', coverage: 'Uwasilishaji kamili' },
                { area: 'Kongwa', coverage: 'Uwasilishaji kamili' },
                { area: 'Mpwapwa', coverage: 'Uwasilishaji kamili' },
                { area: 'Kondoa', coverage: 'Kwa ombi' },
                { area: 'Kilosa', coverage: 'Kwa ombi' },
                { area: 'Bagamoyo', coverage: 'Kwa ombi' },
              ].map((loc, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-4 text-center">
                  <MapPin className="w-5 h-5 text-brand-500 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">{loc.area}</p>
                  <p className="text-green-600 text-xs mt-1">{loc.coverage}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm mb-4">Uwasilishaji unapatikana Jumatatu-Jumamosi, 6:00 AM – 6:00 PM</p>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-green-600 transition-all">
                <Truck className="w-4 h-4" /> Angalia Uwasilishaji Eneo Lako
              </a>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">Vifaa vya Ujenzi Dodoma</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/ready-mix-concrete-dodoma" className="flex items-center gap-3 p-4 rounded-xl bg-white hover:bg-orange-50 border border-gray-200 hover:border-orange-200 transition-all group">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <span className="text-orange-600 font-bold text-sm">R</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Ready-Mix Concrete</p>
                  <p className="text-gray-500 text-xs">Zege Tayari</p>
                </div>
              </Link>
              <Link href="/aggregates-supplier-dodoma" className="flex items-center gap-3 p-4 rounded-xl bg-white hover:bg-orange-50 border border-gray-200 hover:border-orange-200 transition-all group">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <span className="text-orange-600 font-bold text-sm">A</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Aggregates & Kokoto</p>
                  <p className="text-gray-500 text-xs">Vifaa vya Ujenzi</p>
                </div>
              </Link>
              <Link href="/blocks-supplier-dodoma" className="flex items-center gap-3 p-4 rounded-xl bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all group">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-600 font-bold text-sm">B</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Concrete Blocks</p>
                  <p className="text-gray-500 text-xs">Vikapu</p>
                </div>
              </Link>
              <Link href="/paving-blocks-dodoma" className="flex items-center gap-3 p-4 rounded-xl bg-white hover:bg-purple-50 border border-gray-200 hover:border-purple-200 transition-all group">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <span className="text-purple-600 font-bold text-sm">P</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Paving Blocks</p>
                  <p className="text-gray-500 text-xs">Vya Kupavisha</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Maswali Yanayoulizwa Mara kwa Mara</h2>
              <p className="text-gray-500 text-sm">Maswali ya kawaida kuhusu usambazaji wa zege Dodoma</p>
            </div>
            <div className="space-y-4">
              {[
                { q: 'Zege gani mnatoa Dodoma?', a: 'Tunatoa ready mix concrete (zege tayari) grades C10 hadi C50, kokoto, vikapu na paving blocks kwa aina zote za ujenzi katika mkoa wa Dodoma.' },
                { q: 'Je, mnawasilisha zege Chamwino na Bahi?', a: 'Ndiyo, tunawasilisha zege na vifaa vya ujenzi katika wilaya zote za mkoa wa Dodoma ikiwa ni pamoja na Chamwino, Bahi, Kongwa, Mpwapwa na maeneo jirani.' },
                { q: 'Bei gani za zege Dodoma?', a: 'Ready mix concrete Dodoma inaanza TZS 120,000 kwa m³. Kokoto inaanza TZS 28,000 kwa tone. Bei zinatofautiana kulingana na grade na kiasi.' },
                { q: 'Je, mnatoa sampuli za zege?', a: 'Ndiyo, tunatoa sampuli na vyeo vya ubora kwa wateja wetu. Wasiliana nasi kwa maelezo zaidi.' },
                { q: 'Je, mnafanya kazi na miradi ya serikali?', a: 'Ndiyo, tunafanya kazi na miradi ya serikali Dodoma. Tunatoa vifaa vilivyothibitishwa ubora na nyaraka kwa miradi ya umma.' },
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Hitaji Zege Dodoma?</h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm">Wasiliana nasi kwa bei, ratiba ya usafirishaji na maelezo ya kiufundi kwa mradi wako. Tunakusubiri!</p>
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
          { '@type': 'Question', name: 'Zege gani mnatoa Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'Tunatoa ready mix concrete grades C10 hadi C50, kokoto, vikapu na paving blocks kwa aina zote za ujenzi katika mkoa wa Dodoma.' } },
          { '@type': 'Question', name: 'Je, mnawasilisha zege Chamwino na Bahi?', acceptedAnswer: { '@type': 'Answer', text: 'Ndiyo, tunawasilisha zege na vifaa vya ujenzi katika wilaya zote za mkoa wa Dodoma ikiwa ni pamoja na Chamwino, Bahi, Kongwa, Mpwapwa na maeneo jirani.' } },
          { '@type': 'Question', name: 'Bei gani za zege Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'Ready mix concrete Dodoma inaanza TZS 120,000 kwa m³. Kokoto inaanza TZS 28,000 kwa tone. Bei zinatofautiana kulingana na grade na kiasi.' } },
          { '@type': 'Question', name: 'Je, mnafanya kazi na miradi ya serikali?', acceptedAnswer: { '@type': 'Answer', text: 'Ndiyo, tunafanya kazi na miradi ya serikali Dodoma. Tunatoa vifaa vilivyothibitishwa ubora na nyaraka kwa miradi ya umma.' } },
        ]
      }) }} />
    </>
  );
}
