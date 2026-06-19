import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, ArrowRight, CheckCircle, MapPin } from 'lucide-react';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'Commercial Construction Tanzania — Office, Retail & Mixed-Use | Tanzibaba',
  description: 'Tanzibaba delivers commercial construction projects across Tanzania — office complexes, retail centers, hotels and mixed-use developments. Primary operations in Dar es Salaam, Zanzibar and Dodoma.',
  keywords: ['commercial construction Tanzania', 'office construction Tanzania', 'retail construction Tanzania', 'mixed-use development Tanzania', 'hotel construction Tanzania'],
  alternates: { canonical: `${siteUrl}/commercial-construction-tanzania` },
  openGraph: {
    title: 'Commercial Construction Tanzania — Office, Retail & Mixed-Use | Tanzibaba',
    description: 'Commercial construction projects across Tanzania. Office complexes, retail centers, hotels and mixed-use developments. Primary operations in Dar es Salaam, Zanzibar and Dodoma.',
    url: `${siteUrl}/commercial-construction-tanzania`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/commercial-building.webp', width: 1200, height: 630 }],
  },
};

const services = [
  { title: 'Office Complexes', desc: 'Multi-story office buildings with modern infrastructure, parking and amenities for corporate and government tenants.' },
  { title: 'Retail Centers', desc: 'Shopping centers, malls and retail plazas designed for optimal customer flow and tenant visibility.' },
  { title: 'Hotel & Hospitality', desc: 'Hotels, resorts and hospitality facilities built to international standards for guest comfort and operational efficiency.' },
  { title: 'Mixed-Use Developments', desc: 'Integrated developments combining retail, office, residential and hospitality in a single master-planned complex.' },
];

export default function CommercialConstructionTanzaniaPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/commercial-building.webp" alt="Commercial construction projects across Tanzania" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Building2 className="w-4 h-4" /> Commercial Construction Tanzania
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Commercial Construction{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Tanzania
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Delivering office complexes, retail centers, hotels and mixed-use developments across Tanzania. Primary operations in Dar es Salaam, Zanzibar and Dodoma.
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="flex items-center gap-1.5 text-sm text-gray-300 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  <MapPin className="w-4 h-4 text-brand-400" /> Dar es Salaam
                </div>
                <div className="flex items-center gap-1.5 text-sm text-gray-300 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  <MapPin className="w-4 h-4 text-brand-400" /> Zanzibar
                </div>
                <div className="flex items-center gap-1.5 text-sm text-gray-300 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  <MapPin className="w-4 h-4 text-brand-400" /> Dodoma
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href="/major-projects#qualify" className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40 hover:shadow-brand-600/60 hover:scale-[1.02] active:scale-[0.98]">
                  Discuss Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                  Request Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Our Commercial Services</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">End-to-end commercial construction services from site preparation through to handover.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
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
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">Construction services available across Tanzania.</span> Primary operations in Dar es Salaam, Zanzibar and Dodoma. Additional commercial construction projects can be undertaken in other regions of Tanzania subject to project requirements.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Supporting construction projects across Tanzania with capability to support regional developments in East Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Ready to Start Your Commercial Project?</h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8">Submit your project for qualification and our team will respond within 1-2 business days.</p>
            <Link href="/major-projects#qualify" className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30">
              Discuss Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
