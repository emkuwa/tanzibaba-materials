import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Zap, Building2, CheckCircle, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Hotel Construction Zanzibar — Resorts, Villas & Hospitality Projects | Tanzibaba',
  description: 'Guide to hotel and resort construction in Zanzibar. Concrete supply, construction materials and project delivery for hospitality developments across Zanzibar.',
  keywords: ['hotel construction Zanzibar', 'resort construction Zanzibar', 'hospitality projects Zanzibar', 'concrete Zanzibar', 'construction materials Zanzibar'],
  alternates: { canonical: `${siteUrl}/blog/hotel-construction-zanzibar` },
  openGraph: { title: 'Hotel Construction Zanzibar — Resorts, Villas & Hospitality', description: 'Guide to hotel and resort construction in Zanzibar.', url: `${siteUrl}/blog/hotel-construction-zanzibar`, siteName: 'Tanzibaba', type: 'article', locale: 'en_TZ' },
};

export default function HotelConstructionZanzibar() {
  return (
    <>
      <Navbar />
      <main>
        <article className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Hotel Construction Zanzibar — Resorts, Villas & Hospitality Projects</h1>
          <p className="text-gray-500 mb-8">Zanzibar's tourism sector continues to grow, driving demand for new hotels, resorts and hospitality developments. This guide covers construction considerations for hospitality projects in Zanzibar.</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Construction in Zanzibar</h2>
            <p className="text-gray-600 mb-4">Building in Zanzibar presents unique opportunities and challenges. Logistics, material supply, and environmental considerations all play important roles in project planning. Tanzibaba supplies ready-mix concrete to Zanzibar for hotels, resorts, villas and commercial buildings, with operations serving the island.</p>
            <p className="text-gray-600">Additional materials such as aggregates, blocks, paving products and precast products can be supplied from Mainland Tanzania to Zanzibar upon request.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: 'Hotels & Resorts', desc: 'Beachfront resorts, boutique hotels and eco-lodges built to international hospitality standards.' },
                { title: 'Villas', desc: 'Luxury private villas and vacation homes for the high-end tourism market.' },
                { title: 'Commercial Buildings', desc: 'Restaurants, retail spaces and commercial facilities serving the tourism industry.' },
                { title: 'Infrastructure', desc: 'Access roads, drainage systems and utility infrastructure supporting hospitality developments.' },
              ].map((m, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{m.title}</h3>
                  <p className="text-gray-500 text-xs">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-brand-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-4">Building in Zanzibar?</h2>
            <p className="text-brand-100 mb-6">Get concrete and materials for your Zanzibar hospitality project.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/ready-mix-concrete-zanzibar" className="inline-flex items-center gap-2 bg-white text-brand-700 px-6 py-3 rounded-xl font-bold text-sm hover:bg-brand-50 transition-all">Zanzibar Concrete <ArrowRight className="w-4 h-4" /></Link>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/30 transition-all"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
