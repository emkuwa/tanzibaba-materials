import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Zap, CheckCircle, MapPin, MessageCircle, ArrowRight, Shield, HardHat } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'C25 Concrete Dar es Salaam | Strong & Reliable | Tanzibaba',
  description: 'Premium C25 concrete in Dar es Salaam. Ideal for house foundations, columns, beams, and driveways. Quality controlled production.',
  keywords: ['C25 concrete dar es salaam', 'C25 concrete price', 'grade 25 concrete'],
  alternates: { canonical: `${siteUrl}/services/c25-concrete-dar-es-salaam` },
  openGraph: {
    title: 'C25 Concrete Dar es Salaam | Strong & Reliable | Tanzibaba',
    description: 'Premium C25 concrete in Dar es Salaam. Ideal for house foundations, columns, beams, and driveways.',
    url: `${siteUrl}/services/c25-concrete-dar-es-salaam`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'C25 Concrete Supply Dar es Salaam',
  provider: { '@type': 'LocalBusiness', name: 'Tanzibaba' },
  areaServed: { '@type': 'City', name: 'Dar es Salaam' },
  description: 'Premium C25 concrete in Dar es Salaam. Ideal for house foundations, columns, beams, and driveways. Quality controlled production.',
};

export default function C25ConcreteDarEsSalaam() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80" alt="C25 concrete Dar es Salaam" className="w-full h-full object-cover" style={{ objectPosition: '50% 30%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Shield className="w-4 h-4" /> C25 Concrete Dar es Salaam
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Premium C25 Concrete{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Supply in Dar es Salaam</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                C25 (Grade 25) concrete is the most popular choice for residential construction in Dar es Salaam. With a compressive strength of 25 Newtons per square millimetre (N/mm²), it is the ideal concrete grade for house foundations, columns, beams, suspended slabs, and driveways. Tanzibaba produces premium C25 concrete using washed sand technology for superior strength and durability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#quick-price" className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40">
                  Get Instant Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                  <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image src="/images/new/commercial-building.webp" alt="C25 premium concrete supply in Dar es Salaam — quality tested ready-mix for construction" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" loading="lazy" />
        </div>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-heading text-center mb-4">What Is C25 Concrete?</h2>
            <p className="section-sub text-center mb-10">C25 concrete, also referred to as Grade 25 concrete, is a standard-strength mix designed for general-purpose structural applications.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Technical Specifications</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Compressive strength: 25 N/mm²</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Design strength at 28 days</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Standard mix: 1:1.5:3 (cement:sand:aggregate)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Water-cement ratio: ~0.50 – 0.55</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Slump range: 75 – 150 mm</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Ideal Applications</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> House foundations and strip footings</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Reinforced concrete columns and beams</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Suspended ground and first-floor slabs</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Driveways, pathways, and patios</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Retaining walls and garden walls</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Why Choose Tanzibaba C25?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Washed sand technology for stronger concrete</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Computer-controlled batching for consistency</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Slump-tested every load</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Competitive pricing with VAT included</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Fast delivery across Dar es Salaam</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">C25 Concrete Pricing in Dar es Salaam</h2>
            <p className="section-sub text-center mb-10">Our C25 concrete is competitively priced with full transparency — no hidden fees.</p>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Price Guide (per m³)</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between pb-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">C25 concrete (material only)</span>
                      <span className="text-sm font-bold">TZS 210,000</span>
                    </li>
                    <li className="flex justify-between pb-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Delivery (avg per m³)</span>
                      <span className="text-sm font-bold">~TZS 75,000</span>
                    </li>
                    <li className="flex justify-between pb-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">VAT (18% included)</span>
                      <span className="text-sm font-bold">Included</span>
                    </li>
                    <li className="flex justify-between font-bold text-gray-900 pt-2">
                      <span>Total price guide</span>
                      <span>TZS ~285,000/m³</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">Prices vary by volume, location, and delivery distance. Use our Quick Price tool for an exact quote for your project.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Why Our Pricing Is Competitive</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Direct from our own production facilities — no middlemen</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Volume discounts for larger orders (50+ m³)</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Consistent mix design — no waste from overordering</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Transparent breakdown — see exactly what you pay for</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">C25 vs Other Concrete Grades</h2>
            <p className="section-sub text-center mb-10">How does C25 compare to other common grades? Here is a quick comparison for Dar es Salaam construction.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Grade</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Strength</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Best For</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Price/m³ Guide</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold">C20</td>
                    <td className="py-3 px-4">20 N/mm²</td>
                    <td className="py-3 px-4">Residential slabs, patios</td>
                    <td className="py-3 px-4">TZS 180,000</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-brand-50">
                    <td className="py-3 px-4 font-bold text-brand-700">C25</td>
                    <td className="py-3 px-4 font-bold text-brand-700">25 N/mm²</td>
                    <td className="py-3 px-4 font-bold text-brand-700">House foundations, columns, beams</td>
                    <td className="py-3 px-4 font-bold text-brand-700">TZS 210,000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold">C30</td>
                    <td className="py-3 px-4">30 N/mm²</td>
                    <td className="py-3 px-4">Multi-storey, commercial</td>
                    <td className="py-3 px-4">TZS 250,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">C35</td>
                    <td className="py-3 px-4">35 N/mm²</td>
                    <td className="py-3 px-4">Heavy-duty, industrial</td>
                    <td className="py-3 px-4">TZS 290,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">* Prices are for concrete material only. Delivery and pump charges are additional. Use Quick Price for a full estimate.</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Order C25 Concrete in Dar es Salaam</h2>
            <p className="section-sub text-center mb-10">Ordering C25 concrete from Tanzibaba is quick and straightforward.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Select C25 Grade', desc: 'Choose C25 from our concrete grade selector in the Quick Price tool on our homepage.' },
                { step: '2', title: 'Enter Your Volume', desc: 'Estimate the cubic metres needed for your foundation, slab, or other structural element.' },
                { step: '3', title: 'Get Instant Quote', desc: 'Receive your C25 price including delivery and VAT. Adjust volume or add a pump if needed.' },
                { step: '4', title: 'Confirm & Pour', desc: 'Schedule delivery and pour your C25 concrete with confidence, knowing it meets Tanzibaba quality standards.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-brand-700 font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-brand-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Need C25 Concrete for Your Project?</h2>
            <p className="text-lg text-brand-100 mb-8">Get your instant C25 concrete quote now or message us on WhatsApp.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl">
                <Zap className="w-5 h-5" /> Get C25 Quote
              </a>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Explore Other Concrete Grades</h2>
            <p className="section-sub text-center mb-10">Tanzibaba supplies the full range of concrete grades for every project.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/services/c30-concrete-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-2xl font-extrabold text-brand-600">C30</span>
                <p className="text-sm text-gray-600 mt-2">Multi-storey & commercial buildings</p>
              </Link>
              <Link href="/services/concrete-supplier-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">All Grades</span>
                <p className="text-sm text-gray-600 mt-2">View our complete range C10 – C50</p>
              </Link>
              <Link href="/services/commercial-concrete-supply-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">Commercial</span>
                <p className="text-sm text-gray-600 mt-2">Large-scale concrete supply</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
