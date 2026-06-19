import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Zap, HardHat, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Infrastructure Construction Guide Tanzania — Roads, Bridges & Public Works | Tanzibaba',
  description: 'Complete guide to infrastructure construction in Tanzania. Road networks, bridges, drainage systems and public utilities. Materials, planning and contractor selection.',
  keywords: ['infrastructure construction Tanzania', 'road construction guide', 'bridge construction Tanzania', 'public works Tanzania', 'infrastructure projects guide'],
  alternates: { canonical: `${siteUrl}/blog/infrastructure-construction-guide` },
  openGraph: { title: 'Infrastructure Construction Guide Tanzania', description: 'Complete guide to infrastructure construction in Tanzania.', url: `${siteUrl}/blog/infrastructure-construction-guide`, siteName: 'Tanzibaba', type: 'article', locale: 'en_TZ' },
};

export default function InfrastructureConstructionGuide() {
  return (
    <>
      <Navbar />
      <main>
        <article className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Infrastructure Construction Guide Tanzania</h1>
          <p className="text-gray-500 mb-8">Infrastructure construction is the backbone of Tanzania's development. This guide covers road networks, bridges, drainage systems and public utilities — from planning through to completion.</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Project Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: 'Road Networks', desc: 'Highway construction, urban roads, access roads and pavement works designed for heavy traffic loads.' },
                { title: 'Bridges & Culverts', desc: 'Bridge construction, box culverts, river crossings and drainage structures for transportation.' },
                { title: 'Drainage Systems', desc: 'Stormwater drainage, flood control channels, wastewater systems and water retention infrastructure.' },
                { title: 'Public Utilities', desc: 'Water supply systems, sewage treatment, power distribution and public service buildings.' },
              ].map((m, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{m.title}</h3>
                  <p className="text-gray-500 text-xs">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Materials for Infrastructure</h2>
            <p className="text-gray-600 mb-4">Infrastructure projects demand materials that meet stringent specifications. High-strength concrete (C35 to C50) for bridges and structural elements, quality-controlled aggregates for road base and sub-base, and durable culvert pipes for drainage systems.</p>
            <p className="text-gray-600">Tanzibaba supplies all materials required for infrastructure construction, from concrete and aggregates to precast products and culvert pipes. Our Class 1 contractor capabilities ensure project delivery to specification.</p>
          </section>

          <section className="bg-brand-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-4">Planning Infrastructure Work?</h2>
            <p className="text-brand-100 mb-6">Discuss your infrastructure project with our team.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/major-projects#qualify" className="inline-flex items-center gap-2 bg-white text-brand-700 px-6 py-3 rounded-xl font-bold text-sm hover:bg-brand-50 transition-all">Discuss Your Project <ArrowRight className="w-4 h-4" /></Link>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/30 transition-all"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
