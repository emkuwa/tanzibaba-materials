import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, ArrowRight, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Construction Company Dodoma — Commercial & Government Projects | Tanzibaba',
  description: 'Tanzibaba is a premier construction company serving Dodoma, Tanzania\'s capital city. Commercial, government and infrastructure projects. Preferred project value from USD 2M+.',
  keywords: ['construction company Dodoma', 'building contractor Dodoma', 'construction Dodoma Tanzania', 'government projects Dodoma', 'commercial construction Dodoma', 'civil engineering Dodoma'],
  alternates: { canonical: `${siteUrl}/construction-company-dodoma` },
  openGraph: {
    title: 'Construction Company Dodoma | Tanzibaba',
    description: 'Premier construction company serving Dodoma. Commercial, government and infrastructure projects in Tanzania\'s capital.',
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

        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-2xl border border-gray-200 p-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Our Dodoma Team</h3>
                <p className="text-gray-500 text-sm">Reach out to discuss your project in Dodoma.</p>
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
    </>
  );
}
