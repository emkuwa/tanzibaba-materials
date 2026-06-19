import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Zap, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'Road Construction Materials Guide — Aggregates, Concrete & Base Course | Tanzibaba',
  description: 'Complete guide to road construction materials in Tanzania. Aggregates, gravel, base course, concrete for roads, bridges and drainage. Quality materials for infrastructure projects.',
  keywords: ['road construction materials Tanzania', 'road building materials Dar es Salaam', 'base course aggregate', 'road construction guide'],
  alternates: { canonical: `${siteUrl}/blog/road-construction-materials-guide` },
  openGraph: { title: 'Road Construction Materials Guide', description: 'Complete guide to road construction materials in Tanzania.', url: `${siteUrl}/blog/road-construction-materials-guide`, siteName: 'Tanzibaba', type: 'article', locale: 'en_TZ' },
};

export default function RoadConstructionMaterialsGuide() {
  return (
    <>
      <Navbar />
      <main>
        <article className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Road Construction Materials Guide</h1>
          <p className="text-gray-500 mb-8">Road construction requires carefully selected materials for each layer of the pavement structure. From sub-base to wearing course, every material must meet engineering specifications for durability and performance.</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential Road Construction Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: 'Sub-base Materials', desc: 'Granular materials placed on prepared subgrade to provide drainage and load distribution.' },
                { title: 'Base Course Aggregate', desc: 'High-quality crushed stone that forms the main load-bearing layer of the pavement.' },
                { title: 'Concrete for Roads', desc: 'C30 to C50 grades for rigid pavements, bridges, culverts and drainage structures.' },
                { title: 'Asphalt Aggregates', desc: 'Specially graded aggregates for asphalt concrete production and road surfacing.' },
                { title: 'Drainage Materials', desc: 'Permeable aggregates and culvert pipes for road drainage and water management.' },
                { title: 'Fill & Embankment', desc: 'Selected fill materials for road embankments, approach roads and earthworks.' },
              ].map((m, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{m.title}</h3>
                  <p className="text-gray-500 text-xs">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Concrete for Road Construction</h2>
            <p className="text-gray-600 mb-4">Concrete roads (rigid pavements) require high-strength concrete grades. C30 is the minimum for residential roads, while C35 to C50 are specified for highways, truck routes and industrial access roads. Concrete is also essential for bridges, box culverts, and drainage channels.</p>
            <p className="text-gray-600">Tanzibaba supplies concrete grades C10 to C50 from our production facilities, with washed sand technology for superior strength and durability in road applications.</p>
          </section>

          <section className="bg-brand-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-4">Materials for Your Road Project</h2>
            <p className="text-brand-100 mb-6">Get a quote for road construction materials delivered to your site.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/#quick-price" className="inline-flex items-center gap-2 bg-white text-brand-700 px-6 py-3 rounded-xl font-bold text-sm hover:bg-brand-50 transition-all">Get Quote <Zap className="w-4 h-4" /></Link>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/30 transition-all"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
