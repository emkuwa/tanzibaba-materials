import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Zap, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'Aggregate Sizes Guide — Gravel & Crushed Stone Grades for Construction | Tanzibaba',
  description: 'Complete guide to construction aggregate sizes in Tanzania. Crusher dust, 6mm, 10mm, 14mm, 20mm, 40mm and larger grades. Uses, applications and pricing for Dar es Salaam construction.',
  keywords: ['aggregate sizes Tanzania', 'gravel grades', 'crushed stone sizes', 'construction aggregates Dar es Salaam', 'aggregate sizes guide'],
  alternates: { canonical: `${siteUrl}/blog/aggregate-sizes-guide` },
  openGraph: { title: 'Aggregate Sizes Guide — Gravel & Crushed Stone Grades', description: 'Complete guide to construction aggregate sizes in Tanzania.', url: `${siteUrl}/blog/aggregate-sizes-guide`, siteName: 'Tanzibaba', type: 'article', locale: 'en_TZ' },
};

const sizes = [
  { size: 'Crusher Dust (0-5mm)', use: 'Base layer for paving, slab bedding, backfill', source: 'Crushing operations at Lugoba quarry' },
  { size: '6mm (¼")', use: 'Fine concrete, block making, plastering aggregate', source: 'Screened and washed at our production facility' },
  { size: '10mm (⅜")', use: 'Concrete production, pipe bedding, drainage layers', source: 'Quality-controlled crushing at Lugoba' },
  { size: '14mm (½")', use: 'Standard concrete aggregate, road surfacing', source: 'Produced to engineering specifications' },
  { size: '20mm (¾")', use: 'Structural concrete, road base, foundation fill', source: 'Sourced from quality-controlled production' },
  { size: '40mm (1½")', use: 'Mass concrete, drainage, large foundation fill', source: 'Production from our Lugoba crushing plant' },
  { size: 'Road Base', use: 'Road construction base course, sub-base material', source: 'Specification-graded from our crusher' },
  { size: 'Asphalt Aggregate', use: 'Asphalt production, road surfacing, wearing course', source: 'Specially graded for asphalt plant feed' },
];

export default function AggregateSizesGuide() {
  return (
    <>
      <Navbar />
      <main>
        <article className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Aggregate Sizes Guide — Gravel & Crushed Stone Grades for Construction</h1>
          <p className="text-gray-500 mb-8">Understanding aggregate sizes is essential for choosing the right materials for your construction project. This guide covers the standard aggregate grades available in Dar es Salaam and their specific applications.</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Standard Aggregate Sizes</h2>
            <p className="text-gray-600 mb-6">Construction aggregates are graded by particle size, from fine crusher dust to large stones. Each grade serves a specific purpose in construction, from concrete production to road building and drainage.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b"><th className="text-left py-3 px-4 font-bold text-gray-900">Grade</th><th className="text-left py-3 px-4 font-bold text-gray-900">Common Uses</th><th className="text-left py-3 px-4 font-bold text-gray-900">Source</th></tr></thead>
                <tbody>{sizes.map((s, i) => (<tr key={i} className="border-b border-gray-100"><td className="py-3 px-4 font-semibold text-gray-900">{s.size}</td><td className="py-3 px-4 text-gray-600">{s.use}</td><td className="py-3 px-4 text-gray-500">{s.source}</td></tr>))}</tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Choosing the Right Aggregate</h2>
            <p className="text-gray-600 mb-4">Selecting the correct aggregate size depends on your application. For concrete production, 10mm and 20mm aggregates are standard. Road construction requires graded base course materials, while drainage applications need larger, open-graded aggregates.</p>
            <p className="text-gray-600">Tanzibaba supplies all aggregate grades from our Lugoba crushing operations, with bulk delivery available across Dar es Salaam, Zanzibar and Dodoma.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
            <div className="space-y-4">
              {[
                { q: 'What is the most common aggregate size for concrete?', a: '20mm (¾") aggregate is the most common for structural concrete in Tanzania. For finer concrete work, 10mm or 14mm aggregates are typically used.' },
                { q: 'Can I get mixed aggregate sizes delivered?', a: 'Yes, we can supply graded aggregates that include a blend of sizes for specific applications like road base or drainage fill.' },
                { q: 'Do you supply aggregates in Zanzibar and Dodoma?', a: 'Our primary aggregate supply is from our Lugoba crusher in Dar es Salaam. Aggregates can be supplied to Zanzibar and Dodoma upon request.' },
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                  <summary className="px-5 py-4 cursor-pointer text-sm font-semibold text-gray-900">{faq.q}</summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-brand-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-4">Need Aggregates for Your Project?</h2>
            <p className="text-brand-100 mb-6">Get an instant quote for gravel, crushed stone and aggregates delivered to your site.</p>
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
