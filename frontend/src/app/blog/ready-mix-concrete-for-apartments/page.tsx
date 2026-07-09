import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Zap, Building2, CheckCircle, HardHat, Ruler, Truck, DollarSign } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Ready-Mix Concrete for Apartment Buildings | Guide | Tanzibaba',
  description: 'Essential guide to concrete for apartment construction in Dar es Salaam. Grade recommendations, costs, and best practices.',
  keywords: ['concrete for apartments', 'apartment construction concrete', 'multi-storey concrete', 'concrete grade for apartments', 'apartment building concrete'],
  alternates: { canonical: `${siteUrl}/blog/ready-mix-concrete-for-apartments` },
  openGraph: {
    title: 'Ready-Mix Concrete for Apartment Buildings | Guide | Tanzibaba',
    description: 'Essential guide to concrete for apartment construction in Dar es Salaam. Grade recommendations, costs, and best practices.',
    url: `${siteUrl}/blog/ready-mix-concrete-for-apartments`,
    siteName: 'Tanzibaba',
    type: 'article',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ready-Mix Concrete for Apartment Buildings',
  description: 'Essential guide to concrete for apartment construction in Dar es Salaam. Grade recommendations, costs, and best practices.',
  datePublished: '2026-05-28',
  author: { '@type': 'Organization', name: 'Tanzibaba' },
  publisher: { '@type': 'Organization', name: 'Tanzibaba' },
};

export default function ConcreteForApartments() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80" alt="Ready-mix concrete for apartment buildings" className="w-full h-full object-cover" style={{ objectPosition: '50% 40%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Building2 className="w-4 h-4" /> Apartment Construction
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-4 tracking-tight">
                Ready-Mix Concrete for Apartment Buildings
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>Published: 28 May 2026</span>
                <span>·</span>
                <span>7 min read</span>
              </div>
            </div>
          </div>
        </section>

        <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-8">
          <Image src="/images/apartment-development.jpg" alt="Ready-mix concrete for apartment buildings — essential guide for multi-storey construction in Dar es Salaam" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" loading="lazy" />
        </div>

        <article className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto prose prose-gray prose-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Apartment building construction in Dar es Salaam is booming, and getting the concrete specification right is critical to the safety, durability, and cost-effectiveness of your project. This guide covers everything you need to know about choosing and using ready-mix concrete for multi-storey residential buildings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Recommended Concrete Grades for Apartment Buildings</h2>
            <p>
              The concrete grade required for an apartment building depends on the number of storeys, the structural design, and soil conditions. Most apartment buildings in Dar es Salaam use a combination of C25 and C30 concrete:
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 my-8 border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 font-bold text-gray-900">Building Element</th>
                    <th className="text-left py-3 font-bold text-gray-900">Recommended Grade</th>
                    <th className="text-left py-3 font-bold text-gray-900">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { element: 'Blinding / leveling', grade: 'C10 – C15', reason: 'Non-structural, cost-effective fill' },
                    { element: 'Strip foundations', grade: 'C25', reason: 'Standard for low-rise (up to 2 storeys)' },
                    { element: 'Raft foundations', grade: 'C30 – C35', reason: 'High load-bearing for multi-storey' },
                    { element: 'Columns (low-rise)', grade: 'C25 – C30', reason: 'Vertical load support up to 4 storeys' },
                    { element: 'Columns (mid/high-rise)', grade: 'C30 – C40', reason: 'Higher compressive strength needed' },
                    { element: 'Suspended slabs', grade: 'C30', reason: 'Span between floors, vehicle loads' },
                    { element: 'Shear walls', grade: 'C30 – C35', reason: 'Lateral stability against wind/seismic' },
                    { element: 'Staircases', grade: 'C25', reason: 'Moderate strength, wear resistance' },
                  ].map((row) => (
                    <tr key={row.element} className="border-b border-gray-200 last:border-0">
                      <td className="py-3 font-semibold text-gray-900">{row.element}</td>
                      <td className="py-3 text-brand-600 font-bold">{row.grade}</td>
                      <td className="py-3 text-gray-700 text-sm">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Foundation Requirements</h2>
            <p>
              The foundation is the most critical concrete element in any apartment building. In Dar es Salaam, soil conditions vary significantly between areas. Coastal areas with sandy soil may require deeper foundations or pile systems, while areas with clay soil need careful drainage and reinforcement design.
            </p>
            <p>
              For apartment buildings above two storeys, a raft foundation or pile foundation is typically required. Raft foundations distribute the building load over a wide area and are suitable for moderately stable soils. Pile foundations transfer loads to deeper, more stable soil layers and are used in areas with poor surface soil conditions.
            </p>
            <p>
              The concrete used in foundations should typically be <strong>C30 or higher</strong> to withstand the compressive forces from the structure above. Your structural engineer will specify the exact grade based on load calculations and soil test results.
            </p>
            <p>
              <Link href="/blog/foundation-concrete-guide" className="text-brand-600 font-semibold hover:underline">Read our complete foundation concrete guide →</Link>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Column and Slab Specifications</h2>
            <p>
              Columns and suspended slabs are the primary structural elements that determine the building&apos;s strength and stability. Key considerations include:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex items-start gap-4">
                <HardHat className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Columns</h3>
                  <p className="text-sm text-gray-700">Columns carry the vertical load from upper floors down to the foundation. For a 4-storey apartment building, ground floor columns typically need C30 concrete, while upper-floor columns may use C25. Column dimensions and reinforcement spacing must follow the structural engineer&apos;s design.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Ruler className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Suspended Slabs</h3>
                  <p className="text-sm text-gray-700">Slabs spanning between floors require C30 concrete for adequate strength and deflection control. Slab thickness typically ranges from 125 mm to 200 mm depending on the span and loading. Proper curing is essential to prevent cracking and ensure long-term durability.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Shear Walls</h3>
                  <p className="text-sm text-gray-700">Shear walls provide lateral stability against wind loads. In multi-storey apartment buildings, shear walls are typically constructed with C30 or C35 concrete and extend from the foundation to the roof level.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Quantity Estimation</h2>
            <p>
              Estimating concrete quantities accurately is crucial for budgeting and ordering. Here are rough guidelines for apartment building elements:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Raft foundation:</strong> 0.3 – 0.5 m³ per m² of building footprint</li>
              <li><strong>Columns:</strong> 0.02 – 0.04 m³ per m² of floor area per storey</li>
              <li><strong>Suspended slabs:</strong> 0.12 – 0.18 m³ per m² of floor area</li>
              <li><strong>Shear walls:</strong> 0.05 – 0.10 m³ per m² of wall area</li>
              <li><strong>Staircases:</strong> 0.5 – 1.0 m³ per flight</li>
            </ul>
            <p>
              For a typical 4-storey apartment building with a 200 m² footprint, total concrete volume typically ranges from <strong>200 to 350 m³</strong>, depending on the design. Your quantity surveyor or engineer can provide a precise estimate.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Delivery Planning for Apartment Projects</h2>
            <p>
              Large apartment projects require careful delivery planning to ensure a smooth pour. Key considerations:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li><strong>Schedule in advance</strong> — Book your concrete delivery at least 48–72 hours ahead. For large pours, give 5–7 days notice.</li>
              <li><strong>Plan pump access</strong> — Ensure the pump truck has clear access to the pour area. For upper floors, confirm the boom pump can reach the required height and distance.</li>
              <li><strong>Coordinate with labour</strong> — Have enough workers on site to handle the concrete as it arrives. A typical crew for a pump pour is 4–6 workers plus a supervisor.</li>
              <li><strong>Prepare for continuous pour</strong> — Large structural elements like raft foundations and slabs should be poured continuously to avoid cold joints. Plan truck arrival intervals accordingly.</li>
              <li><strong>Have a backup plan</strong> — Weather, traffic, and equipment issues can cause delays. Have a contingency plan for protecting fresh concrete in case of unexpected rain or interruptions.</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Concrete Quality Control</h2>
            <p>
              For apartment buildings, concrete quality control is non-negotiable. Every load should be tested for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Slump test</strong> — Measures workability. Target slump for pumped concrete is typically 75–125 mm.</li>
              <li><strong>Temperature</strong> — Fresh concrete temperature should be between 10°C and 30°C for optimal curing.</li>
              <li><strong>Compressive strength tests</strong> — Cubes should be taken from each day&apos;s pour and tested at 7 and 28 days.</li>
              <li><strong>Visual inspection</strong> — Check for segregation, excessive bleeding, or contamination in each truck load.</li>
            </ul>
            <p>
              Tanzibaba provides quality test certificates with every delivery, giving you full traceability and peace of mind. Order <Link href="/services/ready-mix-concrete-dar-es-salaam" className="text-brand-600 font-semibold hover:underline">ready-mix concrete for your apartment project →</Link>
            </p>

            <div className="bg-brand-50 rounded-2xl p-6 my-10 border border-brand-200">
              <div className="flex items-start gap-4">
                <Building2 className="w-8 h-8 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Building an Apartment in Dar es Salaam?</h3>
                  <p className="text-gray-700 mb-4">
                    We supply premium ready-mix concrete for apartment projects of all sizes. Get an instant quote or speak with our team for expert advice on concrete grades and quantities.
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

          <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/c25-vs-c30-concrete" className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">C25 vs C30 Concrete</h3>
                <p className="text-sm text-gray-600">Compare the two most common grades for apartment construction.</p>
              </Link>
              <Link href="/blog/concrete-pump-guide" className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">Concrete Pump Guide</h3>
                <p className="text-sm text-gray-600">Learn why pumps are essential for multi-storey concrete placement.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-brand-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Start Your Apartment Project</h2>
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
