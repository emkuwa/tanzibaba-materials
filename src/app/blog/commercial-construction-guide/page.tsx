import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Zap, Building2, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Commercial Construction Guide Tanzania — Office, Retail & Mixed-Use | Tanzibaba',
  description: 'Complete guide to commercial construction in Tanzania. Office complexes, retail centers, hotels and mixed-use developments. Planning, materials, costs and contractor selection.',
  keywords: ['commercial construction Tanzania', 'commercial building guide', 'office construction Dar es Salaam', 'retail construction Tanzania', 'mixed-use development guide'],
  alternates: { canonical: `${siteUrl}/blog/commercial-construction-guide` },
  openGraph: { title: 'Commercial Construction Guide Tanzania', description: 'Complete guide to commercial construction in Tanzania.', url: `${siteUrl}/blog/commercial-construction-guide`, siteName: 'Tanzibaba', type: 'article', locale: 'en_TZ' },
};

export default function CommercialConstructionGuide() {
  return (
    <>
      <Navbar />
      <main>
        <article className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Commercial Construction Guide Tanzania</h1>
          <p className="text-gray-500 mb-8">A comprehensive guide to commercial construction in Tanzania — covering project planning, materials, contractor selection, and key considerations for office, retail, hotel and mixed-use developments.</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Commercial Construction</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: 'Office Complexes', desc: 'Multi-story office buildings with modern infrastructure, parking and amenities for corporate and government tenants.' },
                { title: 'Retail Centers', desc: 'Shopping centers, malls and retail plazas designed for optimal customer flow and tenant visibility.' },
                { title: 'Hotels & Hospitality', desc: 'Hotels, resorts and hospitality facilities built to international standards for guest comfort.' },
                { title: 'Mixed-Use Developments', desc: 'Integrated developments combining retail, office, residential and hospitality in a single complex.' },
              ].map((m, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{m.title}</h3>
                  <p className="text-gray-500 text-xs">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Considerations</h2>
            <p className="text-gray-600 mb-4">Commercial construction projects require careful planning across multiple dimensions. Site selection, regulatory approvals, structural design, material specification, and contractor qualification all play critical roles in project success.</p>
            <p className="text-gray-600">Tanzibaba delivers commercial construction projects across Tanzania, with primary operations in Dar es Salaam, Zanzibar and Dodoma. Our Class 1 contractor capabilities ensure projects are delivered to international standards.</p>
          </section>

          <section className="bg-brand-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-4">Planning a Commercial Project?</h2>
            <p className="text-brand-100 mb-6">Discuss your commercial construction project with our team.</p>
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
