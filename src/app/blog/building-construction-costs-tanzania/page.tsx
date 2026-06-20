import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Zap, DollarSign, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Building Construction Costs Tanzania — 2026 Guide | Tanzibaba',
  description: 'Complete guide to building construction costs in Tanzania. Concrete prices, material costs, labour estimates and budget planning for residential and commercial projects in Dar es Salaam.',
  keywords: ['building construction costs Tanzania', 'construction cost Dar es Salaam', 'concrete price Tanzania', 'building material costs Tanzania', 'construction budget Tanzania'],
  alternates: { canonical: `${siteUrl}/blog/building-construction-costs-tanzania` },
  openGraph: { title: 'Building Construction Costs Tanzania — 2026 Guide', description: 'Complete guide to building construction costs in Tanzania.', url: `${siteUrl}/blog/building-construction-costs-tanzania`, siteName: 'Tanzibaba', type: 'article', locale: 'en_TZ' },
};

export default function BuildingConstructionCosts() {
  return (
    <>
      <Navbar />
      <main>
        <article className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Building Construction Costs Tanzania — 2026 Guide</h1>
          <p className="text-gray-500 mb-8">Understanding construction costs is essential for project planning and budgeting. This guide covers material costs, concrete prices, and key factors that influence building construction costs in Tanzania.</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Concrete Price Guide</h2>
            <p className="text-gray-600 mb-4">Concrete is one of the largest material costs in any construction project. Prices vary by grade, volume, and delivery distance. Use our Quick Price tool for an instant estimate tailored to your project.</p>
            <p className="text-gray-600">Ready-mix concrete prices in Dar es Salaam typically range from approximately 130,000 TZS per m³ for C10 to 400,000 TZS per m³ for C50, including 18% VAT. Volume discounts are available for larger orders. See our full <Link href="/services/ready-mix-concrete-dar-es-salaam" className="text-brand-600 font-semibold hover:underline">ready-mix concrete supply page →</Link></p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost Factors</h2>
            <p className="text-gray-600 mb-4">Several factors influence overall construction costs: material selection and quality, project location and accessibility, foundation requirements, structural complexity, labour availability, and project timeline. Engaging a qualified contractor early in the planning process helps identify cost drivers and optimize the budget.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/services/ready-mix-concrete-dar-es-salaam" className="group border border-gray-200 rounded-xl p-4 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-brand-600 transition-colors mb-1">Ready-Mix Concrete</h3>
                <p className="text-xs text-gray-500">C10–C50 grades delivered to your site</p>
              </Link>
              <Link href="/aggregates-supplier-zanzibar" className="group border border-gray-200 rounded-xl p-4 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-brand-600 transition-colors mb-1">Aggregates</h3>
                <p className="text-xs text-gray-500">Gravel, crushed stone &amp; all grades</p>
              </Link>
              <Link href="/blocks-supplier-zanzibar" className="group border border-gray-200 rounded-xl p-4 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-brand-600 transition-colors mb-1">Concrete Blocks</h3>
                <p className="text-xs text-gray-500">Standard &amp; custom blocks for construction</p>
              </Link>
              <Link href="/get-quote" className="group border border-gray-200 rounded-xl p-4 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-brand-600 transition-colors mb-1">Get a Quote</h3>
                <p className="text-xs text-gray-500">Instant pricing for your project</p>
              </Link>
            </div>
          </section>

          <section className="bg-brand-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-4">Get an Instant Cost Estimate</h2>
            <p className="text-brand-100 mb-6">Use our Quick Price tool for an instant material cost estimate.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/#quick-price" className="inline-flex items-center gap-2 bg-white text-brand-700 px-6 py-3 rounded-xl font-bold text-sm hover:bg-brand-50 transition-all">Get Estimate <Zap className="w-4 h-4" /></Link>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/30 transition-all"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
