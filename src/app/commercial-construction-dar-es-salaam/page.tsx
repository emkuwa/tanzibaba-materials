import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, ArrowRight, CheckCircle, MapPin } from 'lucide-react';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'Commercial Construction Dar es Salaam — Office, Retail & Mixed-Use | Tanzibaba',
  description: 'Commercial construction contractor in Dar es Salaam — office complexes, retail centers, hotels and mixed-use developments across Kinondoni, Ubungo, Ilala, Temeke and Kigamboni.',
  keywords: ['commercial construction Dar es Salaam', 'office construction Dar es Salaam', 'retail construction Dar es Salaam', 'building contractor Dar es Salaam', 'commercial developer Tanzania'],
  alternates: { canonical: `${siteUrl}/commercial-construction-dar-es-salaam` },
  openGraph: {
    title: 'Commercial Construction Dar es Salaam | Tanzibaba',
    description: 'Commercial construction services across all Dar es Salaam districts. Office, retail, hotel and mixed-use developments.',
    url: `${siteUrl}/commercial-construction-dar-es-salaam`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/commercial-building.webp', width: 1200, height: 630 }],
  },
};

const districts = ['Kinondoni', 'Ubungo', 'Ilala', 'Temeke', 'Kigamboni'];

export default function CommercialDarPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[65vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/commercial-building.webp" alt="Commercial construction Dar es Salaam" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <MapPin className="w-4 h-4" /> Dar es Salaam
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Commercial Construction{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Dar es Salaam
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Commercial construction services across all Dar es Salaam districts — Kinondoni, Ubungo, Ilala, Temeke and Kigamboni. Office complexes, retail centers, hotels and mixed-use developments.
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
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Service Areas in Dar es Salaam</h2>
              <p className="text-gray-500 max-w-xl mx-auto">We deliver commercial construction projects across all Dar es Salaam districts.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {districts.map((d, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-xl px-5 py-3 border border-gray-200">
                  <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
                  <span className="font-medium text-gray-700 text-sm">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Ready to Start Your Commercial Project?</h2>
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
