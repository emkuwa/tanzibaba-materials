import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, CheckCircle, Building2 } from 'lucide-react';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'Construction Company Zanzibar — Commercial & Hospitality Projects | Tanzibaba',
  description: 'Construction company serving Zanzibar — commercial buildings, hotels, resorts and infrastructure projects. Class 1 contractor capabilities with ready-mix concrete supply.',
  keywords: ['construction company Zanzibar', 'building contractor Zanzibar', 'hotel construction Zanzibar', 'construction Zanzibar', 'commercial construction Zanzibar'],
  alternates: { canonical: `${siteUrl}/construction-company-zanzibar` },
  openGraph: {
    title: 'Construction Company Zanzibar | Tanzibaba',
    description: 'Construction company serving Zanzibar for commercial, hospitality and infrastructure projects.',
    url: `${siteUrl}/construction-company-zanzibar`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/commercial-building.webp', width: 1200, height: 630 }],
  },
};

export default function ConstructionZanzibarPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/commercial-building.webp" alt="Construction company Zanzibar" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <MapPin className="w-4 h-4" /> Zanzibar Operations
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Construction Company{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Zanzibar
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Tanzibaba delivers construction projects across Zanzibar — commercial buildings, hotels, resorts and infrastructure. Backed by Class 1 contractor capabilities and ready-mix concrete supply.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href="/major-projects#qualify" className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40">
                  Discuss Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Our Services in Zanzibar</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm">From concept to completion — construction services tailored to Zanzibar's unique environment and project requirements.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Hotel & Resort Construction', desc: 'Full-service construction for beachfront resorts, boutique hotels and hospitality developments across Zanzibar.' },
                { title: 'Commercial Buildings', desc: 'Retail centers, office buildings and mixed-use commercial developments on the islands.' },
                { title: 'Residential Developments', desc: 'Residential projects including apartment blocks and private villa communities.' },
                { title: 'Infrastructure Projects', desc: 'Road networks, drainage systems and public infrastructure works in Zanzibar.' },
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

        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Planning a Project in Zanzibar?</h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm">Contact our team to discuss your construction needs in Zanzibar.</p>
            <Link href="/major-projects#qualify" className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30">
              Submit Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
