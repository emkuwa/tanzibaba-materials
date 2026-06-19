import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Zap, HardHat, CheckCircle, Droplets, ThermometerSun, Ruler, AlertTriangle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'Foundation Concrete Guide | Right Mix for Your Project | Tanzibaba',
  description: 'Complete guide to foundation concrete in Dar es Salaam. Grades, mix designs, curing tips, and common mistakes to avoid.',
  keywords: ['foundation concrete guide', 'concrete foundation', 'foundation mix', 'concrete grade for foundation', 'foundation construction dar es salaam'],
  alternates: { canonical: `${siteUrl}/blog/foundation-concrete-guide` },
  openGraph: {
    title: 'Foundation Concrete Guide | Right Mix for Your Project | Tanzibaba',
    description: 'Complete guide to foundation concrete in Dar es Salaam. Grades, mix designs, curing tips, and common mistakes to avoid.',
    url: `${siteUrl}/blog/foundation-concrete-guide`,
    siteName: 'Tanzibaba',
    type: 'article',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Foundation Concrete Guide — Right Mix for Your Project',
  description: 'Complete guide to foundation concrete in Dar es Salaam. Grades, mix designs, curing tips, and common mistakes to avoid.',
  datePublished: '2026-05-20',
  author: { '@type': 'Organization', name: 'Tanzibaba' },
  publisher: { '@type': 'Organization', name: 'Tanzibaba' },
};

export default function FoundationConcreteGuide() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80" alt="Foundation concrete guide" className="w-full h-full object-cover" style={{ objectPosition: '50% 40%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <HardHat className="w-4 h-4" /> Foundation Guide
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-4 tracking-tight">
                Foundation Concrete Guide — Right Mix for Your Project
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>Published: 20 May 2026</span>
                <span>·</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </section>

        <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-8">
          <Image src="/images/commercial-building.jpg" alt="Foundation concrete guide — right mix design for strong building foundations in Dar es Salaam" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" loading="lazy" />
        </div>

        <article className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto prose prose-gray prose-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              The foundation is the most important part of any building. Getting the concrete mix right ensures your structure stands strong for decades. This guide covers foundation types, recommended concrete grades, curing best practices, common mistakes, and tips for ordering concrete for foundation work in Dar es Salaam.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Types of Foundations</h2>
            <p>
              The type of foundation you need depends on the soil conditions, building load, and local building codes. In Dar es Salaam, the most common foundation types are:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Strip Foundation</h3>
                <p className="text-sm text-gray-700 mb-3">
                  A continuous strip of concrete that supports load-bearing walls. The most common and economical foundation for single-storey houses.
                </p>
                <p className="text-xs text-gray-500">Best for: Single-storey houses on stable soil</p>
                <p className="text-xs text-gray-500">Typical grade: C25</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Raft Foundation</h3>
                <p className="text-sm text-gray-700 mb-3">
                  A thick concrete slab that covers the entire building footprint, distributing the load over a wide area. Used for multi-storey buildings and poor soil conditions.
                </p>
                <p className="text-xs text-gray-500">Best for: Multi-storey buildings, unstable soil</p>
                <p className="text-xs text-gray-500">Typical grade: C30 – C35</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Pile Foundation</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Deep concrete columns (piles) driven into the ground to reach stable soil layers. Piles transfer building loads to deeper, stronger ground.
                </p>
                <p className="text-xs text-gray-500">Best for: Weak surface soil, high-rise buildings</p>
                <p className="text-xs text-gray-500">Typical grade: C30 – C40</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Recommended Concrete Grades for Foundations</h2>
            <p>
              Choosing the right concrete grade for your foundation is critical. Here are the recommended grades based on foundation type and building size:
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 my-8 border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 font-bold text-gray-900">Foundation Type</th>
                    <th className="text-left py-3 font-bold text-gray-900">Building Height</th>
                    <th className="text-left py-3 font-bold text-gray-900">Recommended Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'Strip foundation', height: 'Single storey', grade: 'C25' },
                    { type: 'Strip foundation', height: 'Two storeys', grade: 'C25 – C30' },
                    { type: 'Raft foundation', height: '2–4 storeys', grade: 'C30 – C35' },
                    { type: 'Raft foundation', height: '5+ storeys', grade: 'C35 – C40' },
                    { type: 'Pile foundation', height: 'Any', grade: 'C30 – C40' },
                    { type: 'Pad foundation', height: 'Single storey', grade: 'C25' },
                  ].map((row) => (
                    <tr key={`${row.type}-${row.height}`} className="border-b border-gray-200 last:border-0">
                      <td className="py-3 font-semibold text-gray-900">{row.type}</td>
                      <td className="py-3 text-gray-700">{row.height}</td>
                      <td className="py-3 text-brand-600 font-bold">{row.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Concrete Mix Design for Foundations</h2>
            <p>
              Foundation concrete must be designed to withstand both compressive forces from the building above and environmental factors like moisture and soil chemicals. Key mix design considerations include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Cement content</strong> — Foundation concrete typically requires 350–420 kg/m³ of cement depending on the grade. Higher cement content increases strength and durability.</li>
              <li><strong>Water-cement ratio</strong> — A low water-cement ratio (0.45–0.55) produces stronger, more durable concrete. Excess water weakens the concrete and increases shrinkage cracking.</li>
              <li><strong>Aggregate size</strong> — For foundation work, 20 mm or 40 mm coarse aggregate is typically used. Larger aggregates reduce the cement paste required and help control heat generation in thick sections.</li>
              <li><strong>Workability</strong> — Foundation concrete should have a slump of 50–100 mm for trench fill and 75–125 mm if a pump is being used.</li>
            </ul>
            <p>
              Tanzibaba uses advanced washed sand technology that removes silt and clay from the aggregate, producing cleaner concrete with superior bond strength. This is especially important for foundations where long-term durability is critical.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Curing Foundation Concrete</h2>
            <p>
              Proper curing is essential for foundation concrete to achieve its design strength and durability. In Dar es Salaam&apos;s warm climate, curing requires special attention:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex items-start gap-4">
                <Droplets className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Keep Concrete Moist</h3>
                  <p className="text-sm text-gray-700">Foundation concrete should be kept continuously moist for at least 7 days after pouring. In hot weather, extend this to 10–14 days. Use wet burlap, plastic sheeting, or a water spray to prevent moisture loss.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ThermometerSun className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Protect from Heat</h3>
                  <p className="text-sm text-gray-700">In Dar es Salaam&apos;s heat, fresh concrete can lose moisture rapidly, leading to plastic shrinkage cracks. Pour early in the morning or late afternoon when temperatures are lower. Have curing materials ready before the concrete arrives.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Ruler className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Control Joints</h3>
                  <p className="text-sm text-gray-700">For large foundation slabs, install control joints (also called contraction joints) to manage cracking. These joints should be cut or formed at intervals of 3–5 metres, depending on slab thickness and reinforcement.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Common Foundation Concrete Mistakes</h2>
            <p>
              Avoid these frequent errors that compromise foundation quality:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Using the Wrong Grade</h3>
                  <p className="text-sm text-gray-700">Using C20 concrete for a foundation that requires C25 or C30 is a common cost-cutting mistake. The savings are minor compared to the risk of structural failure. Always follow your engineer&apos;s specification.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Adding Water on Site</h3>
                  <p className="text-sm text-gray-700">Adding water to ready-mix concrete on site to improve workability is one of the worst mistakes you can make. It increases the water-cement ratio, which significantly reduces strength and durability. If the concrete is too stiff, request a mix redesign from your supplier.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Poor Compaction</h3>
                  <p className="text-sm text-gray-700">Inadequate vibration or tamping leaves air pockets (honeycombing) in the concrete, reducing strength and exposing reinforcement to moisture. Use a poker vibrator for deep sections and ensure proper compaction around rebar and corners.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Insufficient Curing</h3>
                  <p className="text-sm text-gray-700">Many builders underestimate the importance of curing. Concrete that is not properly cured can lose 30–50% of its potential strength. In Dar es Salaam&apos;s climate, curing is even more critical due to high evaporation rates.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Pouring on Dry or Dirty Soil</h3>
                  <p className="text-sm text-gray-700">Pouring concrete onto dry soil causes the soil to absorb water from the concrete, weakening the mix. Always dampen the soil before pouring. Also ensure the excavation is clean — loose soil, debris, and standing water must be removed.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tips for Ordering Foundation Concrete</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li><strong>Order 10–15% extra</strong> — Account for wastage, uneven ground, and over-excavation. It is better to have a small surplus than to run short and create a cold joint.</li>
              <li><strong>Specify the correct grade</strong> — Clearly state the concrete grade required (e.g., C25 for strip foundations, C30 for raft foundations).</li>
              <li><strong>Arrange pump access</strong> — For deep trench foundations or large raft slabs, a concrete pump may be necessary. Confirm pump requirements when ordering.</li>
              <li><strong>Schedule delivery timing</strong> — Foundation pours should be continuous to avoid cold joints. Coordinate truck arrival intervals based on your pour rate and crew size.</li>
              <li><strong>Request test cubes</strong> — Ask your supplier for compressive strength test cubes from each delivery day. This provides documentation of concrete quality for your records and building inspector.</li>
            </ol>

            <div className="bg-brand-50 rounded-2xl p-6 my-10 border border-brand-200">
              <div className="flex items-start gap-4">
                <HardHat className="w-8 h-8 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Building a Foundation in Dar es Salaam?</h3>
                  <p className="text-gray-700 mb-4">
                    Get the right concrete for your foundation from Tanzibaba. Premium quality, correct grades, and reliable delivery. Get an instant quote or speak with our team.
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
                <p className="text-sm text-gray-600">Complete breakdown of concrete prices across all grades for foundation work.</p>
              </Link>
              <Link href="/blog/c25-vs-c30-concrete" className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">C25 vs C30 Concrete</h3>
                <p className="text-sm text-gray-600">Compare the most common grades used in foundation construction.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-brand-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Start Your Foundation Project</h2>
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
