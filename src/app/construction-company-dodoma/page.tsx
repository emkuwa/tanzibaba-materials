import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, ArrowRight, CheckCircle, MapPin, Phone, Mail, HelpCircle, Truck, DollarSign } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Construction Company Dodoma — Mkandarasi & Government Projects | Tanzibaba',
  description: 'Premier construction company in Dodoma, Tanzania\'s capital. Commercial, government and infrastructure projects. Class 1 contractor. Preferred project value from USD 2M+.',
  keywords: ['construction company Dodoma', 'building contractor Dodoma', 'construction Dodoma Tanzania', 'government projects Dodoma', 'commercial construction Dodoma', 'civil engineering Dodoma', 'mkandarasi Dodoma', 'kampuni ya ujenzi Dodoma', 'ujenzi wa majengo Dodoma', 'contractor Dodoma'],
  alternates: { canonical: `${siteUrl}/construction-company-dodoma` },
  openGraph: {
    title: 'Construction Company Dodoma — Mkandarasi & Government Projects | Tanzibaba',
    description: 'Premier construction company in Dodoma. Commercial, government and infrastructure projects.',
    url: `${siteUrl}/construction-company-dodoma`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/commercial-building.webp', width: 1200, height: 630 }],
  },
};

export default function DodomaPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[65vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/commercial-building.webp" alt="Construction company Dodoma — Tanzibaba" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Building2 className="w-4 h-4" /> Construction Company — Dodoma
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Construction Company{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Dodoma
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Tanzibaba is a premier construction company serving Dodoma, Tanzania's capital city. We deliver commercial, government and infrastructure projects with a focus on quality, safety and on-time delivery.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href="/major-projects#qualify" className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40">
                  Qualify Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                  Talk to Our Team
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Why Tanzibaba Dodoma?</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Trusted construction partner for commercial, government and infrastructure projects in Tanzania's capital.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Commercial Projects', desc: 'Office complexes, retail centers and mixed-use developments built to international standards.' },
                { title: 'Government Contracts', desc: 'Government buildings, administrative facilities and public infrastructure projects.' },
                { title: 'Infrastructure', desc: 'Road networks, drainage systems and public utilities serving Dodoma\'s growth.' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Types Section */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Construction Projects in Dodoma</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">We deliver commercial, government and infrastructure projects across Dodoma region.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Government Buildings', desc: 'Administrative offices, public facilities, government housing and civic infrastructure.', swahili: 'Majengo ya serikali, ofisi za utawala' },
                { title: 'Commercial Complexes', desc: 'Office towers, shopping centers, hotels and mixed-use developments.', swahili: 'Majengo ya biashara, maduka, hoteli' },
                { title: 'Infrastructure Projects', desc: 'Roads, bridges, drainage systems, water supply and public utilities.', swahili: 'Barabara, madaraja, mifereji, maji' },
                { title: 'Institutional Buildings', desc: 'Schools, hospitals, universities and community facilities.', swahili: 'Shule, hospitali, vyuo, vituo vya jamii' },
                { title: 'Industrial Facilities', desc: 'Warehouses, processing plants, factories and industrial infrastructure.', swahili: 'Maghala, viwanda, kiwanda' },
                { title: 'Residential Developments', desc: 'Housing estates, apartment blocks and residential compounds.', swahili: 'Nyumba za kulala, apartimenti' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="w-5 h-5 text-brand-600" />
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

        {/* Service Coverage Section */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Construction Service Coverage</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">We provide construction services across Dodoma region and surrounding areas.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { area: 'Dodoma City', swahili: 'Jiji la Dodoma', coverage: 'Primary operations' },
                { area: 'Chamwino', swahili: 'Chamwino', coverage: 'Full coverage' },
                { area: 'Bahi', swahili: 'Bahi', coverage: 'Full coverage' },
                { area: 'Kongwa', swahili: 'Kongwa', coverage: 'Full coverage' },
                { area: 'Mpwapwa', swahili: 'Mpwapwa', coverage: 'Full coverage' },
                { area: 'Kondoa', swahili: 'Kondoa', coverage: 'On request' },
                { area: 'Dodoma Region', swahili: 'Mkoa wa Dodoma', coverage: 'Full coverage' },
                { area: 'Central Tanzania', swahili: 'Katikati ya Tanzania', coverage: 'On request' },
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

        {/* FAQs Section */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-gray-500 text-sm">Common questions about construction services in Dodoma</p>
            </div>
            <div className="space-y-4">
              {[
                { q: 'What construction services does Tanzibaba offer in Dodoma?', a: 'Tanzibaba offers commercial buildings, government projects, infrastructure development, institutional buildings, industrial facilities and residential projects in Dodoma. We are a Class 1 contractor with primary operations in Dar es Salaam, Zanzibar and Dodoma.' },
                { q: 'Do you handle government construction projects in Dodoma?', a: 'Yes, we are experienced in delivering government construction projects in Dodoma including administrative offices, public facilities, government housing and civic infrastructure. We provide documentation and compliance with government procurement requirements.' },
                { q: 'What is the minimum project value for Tanzibaba in Dodoma?', a: 'Our preferred project value is from USD 2M+ for construction projects in Dodoma. However, we may consider smaller projects on a case-by-case basis. Contact us to discuss your project.' },
                { q: 'Do you provide construction materials supply in Dodoma?', a: 'Yes, we supply ready-mix concrete, aggregates, blocks, paving blocks and culvert pipes for construction projects in Dodoma. Our materials division supports both our construction projects and third-party contractors.' },
                { q: 'How long does a typical construction project take in Dodoma?', a: 'Project timelines vary by scope and complexity. A typical commercial building takes 12-18 months, while infrastructure projects may take 6-24 months. We provide detailed project schedules during the proposal stage.' },
                { q: 'Do you work with international partners in Dodoma?', a: 'Yes, we collaborate with international architects, engineers and consultants for large-scale projects in Dodoma. We have experience working with international standards and specifications.' },
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

        {/* Contact Section */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-2xl border border-gray-200 p-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Our Dodoma Team</h3>
                <p className="text-gray-500 text-sm">Reach out to discuss your construction project in Dodoma. Piga simu au WhatsApp!</p>
              </div>
              <div className="flex gap-3">
                <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-brand-700 transition-all">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-green-600 transition-all">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What construction services does Tanzibaba offer in Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'Tanzibaba offers commercial buildings, government projects, infrastructure development, institutional buildings, industrial facilities and residential projects in Dodoma. We are a Class 1 contractor.' } },
          { '@type': 'Question', name: 'Do you handle government construction projects in Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we are experienced in delivering government construction projects in Dodoma including administrative offices, public facilities and civic infrastructure.' } },
          { '@type': 'Question', name: 'What is the minimum project value for Tanzibaba in Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'Our preferred project value is from USD 2M+ for construction projects in Dodoma. Contact us to discuss your project.' } },
          { '@type': 'Question', name: 'Do you provide construction materials supply in Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we supply ready-mix concrete, aggregates, blocks, paving blocks and culvert pipes for construction projects in Dodoma.' } },
        ]
      }) }} />
    </>
  );
}
