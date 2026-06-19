import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Zap, Building2, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'Industrial Construction Tanzania — Manufacturing & Processing Facilities | Tanzibaba',
  description: 'Guide to industrial construction in Tanzania. Manufacturing plants, warehouses, processing facilities and industrial infrastructure. Planning, materials and contractor selection.',
  keywords: ['industrial construction Tanzania', 'manufacturing plant construction', 'warehouse construction Tanzania', 'processing facilities Tanzania', 'industrial building Tanzania'],
  alternates: { canonical: `${siteUrl}/blog/industrial-construction-tanzania` },
  openGraph: { title: 'Industrial Construction Tanzania — Manufacturing & Processing', description: 'Guide to industrial construction in Tanzania.', url: `${siteUrl}/blog/industrial-construction-tanzania`, siteName: 'Tanzibaba', type: 'article', locale: 'en_TZ' },
};

export default function IndustrialConstructionTanzania() {
  return (
    <>
      <Navbar />
      <main>
        <article className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Industrial Construction Tanzania — Manufacturing & Processing Facilities</h1>
          <p className="text-gray-500 mb-8">Industrial construction requires specialized expertise in heavy-duty structures, equipment foundations, and process-specific building requirements. This guide covers key considerations for industrial projects in Tanzania.</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Industrial Facility Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: 'Manufacturing Plants', desc: 'Production facilities, assembly plants and processing units designed for operational efficiency.' },
                { title: 'Warehouses & Logistics', desc: 'Distribution centers, storage facilities and logistics hubs for material handling.' },
                { title: 'Processing Facilities', desc: 'Food processing, mineral processing and industrial treatment plants.' },
                { title: 'Industrial Infrastructure', desc: 'Power distribution, water treatment and utility infrastructure for industrial operations.' },
              ].map((m, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{m.title}</h3>
                  <p className="text-gray-500 text-xs">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Materials for Industrial Construction</h2>
            <p className="text-gray-600 mb-4">Industrial facilities require high-strength concrete (C35 to C50) for heavy-duty floors, equipment foundations, and structural elements. Quality aggregates, reinforcement steel, and precast products are also essential. Tanzibaba supplies all materials required for industrial construction projects across Tanzania.</p>
          </section>

          <section className="bg-brand-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-4">Planning an Industrial Project?</h2>
            <p className="text-brand-100 mb-6">Discuss your industrial construction project with our team.</p>
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
