import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, ArrowRight, CheckCircle, MapPin, HelpCircle, Phone } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Commercial Construction Dodoma — Ofisi & Biashara | Tanzibaba',
  description: 'Commercial construction contractor in Dodoma. Office complexes, retail centers, government buildings and mixed-use developments. Class 1 contractor. Preferred project value from USD 2M+.',
  keywords: ['commercial construction Dodoma', 'construction company Dodoma', 'building contractor Dodoma', 'government construction Dodoma', 'office construction Dodoma', 'ujenzi wa biashara Dodoma', 'majengo ya ofisi Dodoma', 'commercial contractor Tanzania'],
  alternates: { canonical: `${siteUrl}/commercial-construction-dodoma` },
  openGraph: {
    title: 'Commercial Construction Dodoma — Ofisi & Biashara | Tanzibaba',
    description: 'Commercial construction contractor in Dodoma. Office complexes, retail centers and government buildings.',
    url: `${siteUrl}/commercial-construction-dodoma`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/commercial-building.webp', width: 1200, height: 630 }],
  },
};

export default function CommercialDodomaPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[65vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/commercial-building.webp" alt="Commercial construction Dodoma" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <MapPin className="w-4 h-4" /> Dodoma
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Commercial Construction{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Dodoma
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Commercial construction services in Tanzania's capital city. Tanzibaba delivers office complexes, retail centers, government buildings and mixed-use developments in Dodoma.
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
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Commercial Projects in Dodoma</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Tanzibaba delivers commercial construction projects across Dodoma, supporting the growth of Tanzania's capital city.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Office Buildings', desc: 'Multi-story office complexes for government and corporate clients in Dodoma.' },
                { title: 'Retail Developments', desc: 'Shopping centers and retail spaces serving Dodoma\'s growing population.' },
                { title: 'Government Facilities', desc: 'Government buildings and administrative facilities in the capital.' },
                { title: 'Mixed-Use Projects', desc: 'Integrated developments combining commercial, retail and residential spaces.' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="w-5 h-5 text-brand-600" />
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

        {/* Service Coverage Section */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Commercial Construction Coverage</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">We provide commercial construction services across Dodoma region and surrounding areas.</p>
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
              <p className="text-gray-500 text-sm">Common questions about commercial construction in Dodoma</p>
            </div>
            <div className="space-y-4">
              {[
                { q: 'What commercial construction projects do you handle in Dodoma?', a: 'We handle office complexes, retail centers, government buildings, hotels, mixed-use developments and commercial infrastructure projects in Dodoma. Our Class 1 contractor capabilities ensure international standards.' },
                { q: 'Do you build government facilities in Dodoma?', a: 'Yes, we are experienced in constructing government buildings, administrative offices, public facilities and civic infrastructure in Dodoma. We work with government procurement requirements and specifications.' },
                { q: 'What is the minimum project size for commercial construction in Dodoma?', a: 'Our preferred project value is from USD 2M+ for commercial construction projects in Dodoma. Contact us to discuss your specific project requirements.' },
                { q: 'How long does commercial construction take in Dodoma?', a: 'Timeline varies by project scope. Office complexes typically take 12-18 months, retail centers 10-14 months, and government buildings 12-24 months. We provide detailed schedules during proposal stage.' },
                { q: 'Do you use local materials for construction in Dodoma?', a: 'Yes, we source materials locally where possible including ready-mix concrete, aggregates, blocks and paving from our own production facilities. This ensures quality control and cost efficiency.' },
                { q: 'Can you design and build commercial projects in Dodoma?', a: 'Yes, we offer design-build services for commercial projects in Dodoma. We work with architects and engineers to deliver complete solutions from concept to completion.' },
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Planning a Commercial Project in Dodoma?</h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8">Submit your project for qualification and our team will respond within 1-2 business days. Wasiliana nasi leo!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/major-projects#qualify" className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30">
                Qualify Your Project <ArrowRight className="w-5 h-5" />
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
          { '@type': 'Question', name: 'What commercial construction projects do you handle in Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'We handle office complexes, retail centers, government buildings, hotels, mixed-use developments and commercial infrastructure projects in Dodoma.' } },
          { '@type': 'Question', name: 'Do you build government facilities in Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we are experienced in constructing government buildings, administrative offices, public facilities and civic infrastructure in Dodoma.' } },
          { '@type': 'Question', name: 'What is the minimum project size for commercial construction in Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'Our preferred project value is from USD 2M+ for commercial construction projects in Dodoma.' } },
          { '@type': 'Question', name: 'Do you use local materials for construction in Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we source materials locally including ready-mix concrete, aggregates, blocks and paving from our own production facilities.' } },
        ]
      }) }} />
    </>
  );
}
