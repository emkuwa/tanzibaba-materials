import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HardHat, ArrowRight, CheckCircle, MapPin } from 'lucide-react';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'Infrastructure Construction — Roads, Bridges & Public Works | Tanzibaba',
  description: 'Tanzibaba delivers infrastructure construction projects across Tanzania — road networks, bridges, drainage systems and public utilities. Primary operations in Dar es Salaam, Zanzibar and Dodoma.',
  keywords: ['infrastructure construction Tanzania', 'road construction Tanzania', 'bridge construction Dar es Salaam', 'drainage systems Tanzania', 'public works Tanzania', 'civil engineering Tanzania'],
  alternates: { canonical: `${siteUrl}/infrastructure-construction` },
  openGraph: {
    title: 'Infrastructure Construction — Roads, Bridges & Public Works | Tanzibaba',
    description: 'Infrastructure construction across Tanzania. Road networks, bridges, drainage systems and public utilities. Primary operations in Dar es Salaam, Zanzibar and Dodoma.',
    url: `${siteUrl}/infrastructure-construction`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/infrastructure-project.webp', width: 1200, height: 630 }],
  },
};

const services = [
  { title: 'Road Networks', desc: 'Highway construction, urban roads, access roads and pavement works designed for durability and heavy traffic loads.' },
  { title: 'Bridges & Culverts', desc: 'Bridge construction, box culverts, river crossings and drainage structures for transportation and flood control.' },
  { title: 'Drainage Systems', desc: 'Stormwater drainage, flood control channels, wastewater systems and water retention infrastructure.' },
  { title: 'Public Utilities', desc: 'Water supply systems, sewage treatment facilities, power distribution infrastructure and public service buildings.' },
];

export default function InfrastructurePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/infrastructure-project.webp" alt="Infrastructure construction projects by Tanzibaba" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-500/30 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <HardHat className="w-4 h-4" /> Infrastructure Construction
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Infrastructure{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Construction
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Delivering road networks, bridges, drainage systems and public utilities across Tanzania. Primary operations in Dar es Salaam, Zanzibar and Dodoma, with additional infrastructure projects undertaken in other regions subject to requirements.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href="/major-projects#qualify" className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40 hover:shadow-brand-600/60 hover:scale-[1.02] active:scale-[0.98]">
                  Qualify Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                  Talk to Our Team
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Our Infrastructure Services</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">End-to-end infrastructure construction from site preparation through to commissioning.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <HardHat className="w-5 h-5 text-amber-700" />
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
              <div className="flex items-start gap-2 mb-3">
                <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">Construction services available across Tanzania.</span> Primary operations in Dar es Salaam, Zanzibar and Dodoma. Additional infrastructure projects can be undertaken in other regions of Tanzania subject to project requirements.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Supporting construction projects across Tanzania with capability to support regional developments in East Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Ready to Start Your Infrastructure Project?</h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8">Submit your project for qualification and our team will respond within 1-2 business days.</p>
            <Link href="/major-projects#qualify" className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30">
              Qualify Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
