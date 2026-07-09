import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Zap, Scale, Home, Building2, DollarSign, HardHat } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'C25 vs C30 Concrete | Which Grade Do You Need? | Tanzibaba',
  description: 'Compare C25 and C30 concrete for construction projects. Strength, applications, cost differences, and expert recommendations.',
  keywords: ['C25 vs C30 concrete', 'concrete grade comparison', 'which concrete grade', 'C25 concrete', 'C30 concrete'],
  alternates: { canonical: `${siteUrl}/blog/c25-vs-c30-concrete` },
  openGraph: {
    title: 'C25 vs C30 Concrete | Which Grade Do You Need? | Tanzibaba',
    description: 'Compare C25 and C30 concrete for construction projects. Strength, applications, cost differences, and expert recommendations.',
    url: `${siteUrl}/blog/c25-vs-c30-concrete`,
    siteName: 'Tanzibaba',
    type: 'article',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'C25 vs C30 Concrete — Which Grade Do You Need?',
  description: 'Compare C25 and C30 concrete for construction projects. Strength, applications, cost differences, and expert recommendations.',
  datePublished: '2026-06-10',
  author: { '@type': 'Organization', name: 'Tanzibaba' },
  publisher: { '@type': 'Organization', name: 'Tanzibaba' },
};

export default function C25VsC30() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1600&q=80" alt="C25 vs C30 concrete comparison" className="w-full h-full object-cover" style={{ objectPosition: '50% 50%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Scale className="w-4 h-4" /> Grade Comparison
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-4 tracking-tight">
                C25 vs C30 Concrete — Which Grade Do You Need?
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>Published: 10 June 2026</span>
                <span>·</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </section>

        <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-8">
          <Image src="/images/new/commercial-building.webp" alt="C25 vs C30 concrete comparison guide — choosing the right grade for your construction project" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" loading="lazy" />
        </div>

        <article className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto prose prose-gray prose-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Choosing between C25 and C30 concrete is one of the most common decisions in construction. Both are widely used in Dar es Salaam, but they serve different purposes. This guide compares their strength, applications, cost, and helps you decide which grade is right for your project.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Do C25 and C30 Mean?</h2>
            <p>
              The &quot;C&quot; in concrete grading stands for compressive strength, and the number indicates the strength in megapascals (MPa) that the concrete is designed to achieve after 28 days of curing. In simple terms:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>C25 concrete</strong> has a compressive strength of 25 MPa — suitable for standard residential construction.</li>
              <li><strong>C30 concrete</strong> has a compressive strength of 30 MPa — designed for more demanding structural applications.</li>
            </ul>
            <p>
              The 5 MPa difference may seem small, but it translates to approximately 20% higher load-bearing capacity. This additional strength comes from a higher cement content and stricter aggregate specifications, which also increases the cost.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Quick Comparison Table</h2>
            <div className="bg-gray-50 rounded-2xl p-6 my-8 border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 font-bold text-gray-900">Property</th>
                    <th className="text-left py-3 font-bold text-gray-900">C25</th>
                    <th className="text-left py-3 font-bold text-gray-900">C30</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { property: 'Compressive Strength', c25: '25 MPa', c30: '30 MPa' },
                    { property: 'Typical Cement Content', c25: '350–380 kg/m³', c30: '400–430 kg/m³' },
                    { property: 'Slump Range', c25: '50–100 mm', c30: '50–100 mm' },
                    { property: 'Typical Applications', c25: 'Houses, slabs, driveways', c30: 'Apartments, commercial buildings' },
                    { property: 'Approx. Cost (per m³)', c25: '210,000–230,000 TZS', c30: '250,000–280,000 TZS' },
                    { property: 'Best For', c25: 'Residential projects', c30: 'Multi-storey & structural' },
                  ].map((row) => (
                    <tr key={row.property} className="border-b border-gray-200 last:border-0">
                      <td className="py-3 font-semibold text-gray-900">{row.property}</td>
                      <td className="py-3 text-gray-700">{row.c25}</td>
                      <td className="py-3 text-gray-700">{row.c30}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">When to Use C25 Concrete</h2>
            <p>
              C25 concrete is the most commonly used grade for residential construction in Dar es Salaam. It offers a good balance of strength and affordability, making it suitable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>House foundations</strong> — Strip foundations and pads for single-storey homes.</li>
              <li><strong>Ground floor slabs</strong> — Standard residential floor slabs without heavy loading.</li>
              <li><strong>Columns and beams</strong> — Structural elements in single-storey or two-storey houses.</li>
              <li><strong>Driveways and patios</strong> — Light to medium vehicle traffic areas.</li>
              <li><strong>Retaining walls</strong> — Low-height retaining walls for landscaping.</li>
            </ul>
            <p>
              <Link href="/services/c25-concrete-dar-es-salaam" className="text-brand-600 font-semibold hover:underline">Learn more about C25 concrete from Tanzibaba →</Link>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">When to Use C30 Concrete</h2>
            <p>
              C30 concrete is specified when higher structural strength is required. It is the minimum grade recommended for most engineered structures and is commonly used in:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Multi-storey apartments</strong> — Columns, slabs, and shear walls for buildings above two storeys.</li>
              <li><strong>Commercial buildings</strong> — Office blocks, retail spaces, and showrooms.</li>
              <li><strong>Heavy-duty ground slabs</strong> — Warehouse floors and industrial areas with heavy loads.</li>
              <li><strong>Foundations for heavy structures</strong> — Raft foundations and pile caps for larger buildings.</li>
              <li><strong>External paving</strong> — Areas subjected to heavy vehicle traffic.</li>
            </ul>
            <p>
              <Link href="/services/c30-concrete-dar-es-salaam" className="text-brand-600 font-semibold hover:underline">Learn more about C30 concrete from Tanzibaba →</Link>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost Difference</h2>
            <p>
              The price difference between C25 and C30 is approximately <strong>TZS 30,000–50,000 per m³</strong>. For a typical residential project requiring 10 m³, this means an additional cost of TZS 300,000–500,000.
            </p>
            <p>
              While C30 is more expensive, using it where it is not structurally required is unnecessary spending. Always consult with a structural engineer to determine the correct grade for your specific project. Over-specifying concrete grade is one of the most common budget mistakes in construction.
            </p>
            <p>
              For a detailed breakdown of all concrete prices, read our <Link href="/blog/concrete-price-guide-tanzania" className="text-brand-600 font-semibold hover:underline">Complete Concrete Price Guide →</Link>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Expert Recommendations</h2>
            <div className="space-y-6 my-6">
              <div className="flex items-start gap-4">
                <Home className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">For a single-storey house: Use C25</h3>
                  <p className="text-sm text-gray-700">C25 provides sufficient strength for standard residential foundations, slabs, columns, and beams. It is cost-effective and widely available.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">For apartments and commercial buildings: Use C30</h3>
                  <p className="text-sm text-gray-700">Multi-storey structures require the higher compressive strength of C30 to safely carry additional loads from upper floors, occupancy, and wind forces.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <HardHat className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">When in doubt: Consult an engineer</h3>
                  <p className="text-sm text-gray-700">Your structural engineer will specify the required concrete grade based on load calculations, soil conditions, and building design. Never substitute grades without professional approval.</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-50 rounded-2xl p-6 my-10 border border-brand-200">
              <div className="flex items-start gap-4">
                <DollarSign className="w-8 h-8 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Not Sure Which Grade You Need?</h3>
                  <p className="text-gray-700 mb-4">
                    Our team can help you choose the right concrete grade for your project. Get an instant quote or chat with us on WhatsApp for personalised advice.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="/#quick-price" className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-brand-700 transition-all">
                      Get Instant Quote <ArrowRight className="w-4 h-4" />
                    </a>
                    <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white border border-brand-300 text-brand-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-brand-50 transition-all">
                      <MessageCircle className="w-4 h-4" /> WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/concrete-price-guide-tanzania" className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">Concrete Price Guide Tanzania 2026</h3>
                <p className="text-sm text-gray-600">Complete breakdown of concrete prices across all grades, delivery costs, pump fees, and VAT.</p>
              </Link>
              <Link href="/blog/foundation-concrete-guide" className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">Foundation Concrete Guide</h3>
                <p className="text-sm text-gray-600">Learn about foundation types, recommended grades, curing tips, and common mistakes.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-brand-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Place Your Order?</h2>
            <p className="text-lg text-brand-100 mb-8">Get an instant quote or chat with our team on WhatsApp.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl">
                <Zap className="w-5 h-5" /> Get Instant Quote
              </a>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
