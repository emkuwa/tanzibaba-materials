import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Zap, CheckCircle, MapPin, MessageCircle, ArrowRight, Shield, Building } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'C30 Concrete Dar es Salaam | Premium Grade | Tanzibaba',
  description: 'Premium C30 concrete in Dar es Salaam. Ideal for multi-storey apartments and commercial buildings. Factory-controlled mix design.',
  keywords: ['C30 concrete dar es salaam', 'C30 concrete price', 'grade 30 concrete'],
  alternates: { canonical: `${siteUrl}/services/c30-concrete-dar-es-salaam` },
  openGraph: {
    title: 'C30 Concrete Dar es Salaam | Premium Grade | Tanzibaba',
    description: 'Premium C30 concrete in Dar es Salaam. Ideal for multi-storey apartments and commercial buildings.',
    url: `${siteUrl}/services/c30-concrete-dar-es-salaam`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'C30 Concrete Supply Dar es Salaam',
  provider: { '@type': 'LocalBusiness', name: 'Tanzibaba' },
  areaServed: { '@type': 'City', name: 'Dar es Salaam' },
  description: 'Premium C30 concrete in Dar es Salaam. Ideal for multi-storey apartments and commercial buildings. Factory-controlled mix design.',
};

export default function C30ConcreteDarEsSalaam() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80" alt="C30 concrete Dar es Salaam" className="w-full h-full object-cover" style={{ objectPosition: '50% 30%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Building className="w-4 h-4" /> C30 Concrete Dar es Salaam
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Premium C30 Concrete{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Supply in Dar es Salaam</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                C30 (Grade 30) concrete is the preferred choice for multi-storey apartment buildings, commercial developments, and structures requiring higher load-bearing capacity. With a compressive strength of 30 N/mm², C30 delivers superior performance for reinforced concrete applications where structural integrity is paramount. Tanzibaba produces premium C30 concrete with factory-controlled mix designs and washed sand technology.
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
          <Image src="/images/commercial-building.jpg" alt="C30 premium concrete supply in Dar es Salaam — quality tested ready-mix for construction" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" loading="lazy" />
        </div>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-heading text-center mb-4">What Is C30 Concrete?</h2>
            <p className="section-sub text-center mb-10">C30 concrete is a medium-strength structural grade designed for reinforced concrete applications in commercial and multi-storey residential construction.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Technical Specifications</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Compressive strength: 30 N/mm²</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Design strength at 28 days</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Standard mix: 1:1:2 (cement:sand:aggregate)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Water-cement ratio: ~0.45 – 0.50</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Slump range: 75 – 150 mm</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Ideal Applications</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Multi-storey apartment buildings</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Commercial office buildings</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Hotels and hospitals</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Shopping complexes</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Heavy-duty floor slabs</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Why Choose Tanzibaba C30?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Factory-controlled mix design for consistency</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Washed sand for higher compressive strength</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Computer batching eliminates human error</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Slump and temperature tested every load</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Pump-friendly mix for multi-storey placement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">C30 Concrete Pricing in Dar es Salaam</h2>
            <p className="section-sub text-center mb-10">Competitive pricing with complete transparency — no hidden charges.</p>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Price Guide (per m³)</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between pb-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">C30 concrete (material only)</span>
                      <span className="text-sm font-bold">TZS 250,000</span>
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
                      <span>TZS ~325,000/m³</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">Prices vary by volume, location, and delivery distance. Use our Quick Price tool for an exact quote.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">Volume Discounts Available</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> 10–50 m³: Standard rate</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> 50–100 m³: Discounted rate</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> 100+ m³: Volume pricing</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Direct-from-plant pricing — no middlemen</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">C30 for Multi-Storey Construction</h2>
            <p className="section-sub text-center mb-10">C30 is the go-to grade for Dar es Salaam&apos;s growing skyline of apartment towers and commercial buildings.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <Building className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Apartment Buildings</h3>
                  <p className="text-sm text-gray-600">For 3-10 storey apartment buildings — common across Kinondoni, Mikocheni, Kawe, Kijitonyama, and Mbezi — C30 provides the structural strength needed for columns, shear walls, suspended slabs, and stair cores. Combined with our concrete pump service, pouring upper floors is efficient and safe.</p>
                  <Link href="/services/apartment-concrete-supply-dar-es-salaam" className="text-sm text-brand-600 font-semibold inline-block mt-2 hover:underline">Apartment concrete supply →</Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Building className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Commercial Buildings</h3>
                  <p className="text-sm text-gray-600">Office blocks, hotels, hospitals, and shopping centres in Kariakoo, Upanga, and along the CBD demand C30 or higher for their structural frames. Our large batch capacity ensures consistent supply for continuous pours, critical for commercial project timelines.</p>
                  <Link href="/services/commercial-concrete-supply-dar-es-salaam" className="text-sm text-brand-600 font-semibold inline-block mt-2 hover:underline">Commercial concrete supply →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Order C30 Concrete in Dar es Salaam</h2>
            <p className="section-sub text-center mb-10">Simple online ordering with instant pricing and reliable delivery.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Select C30', desc: 'Choose C30 from our concrete grade options in the Quick Price tool.' },
                { step: '2', title: 'Enter Volume', desc: 'Input your required cubic metres. Our tool calculates the right quantity for your structural needs.' },
                { step: '3', title: 'Add Pump If Needed', desc: 'For multi-storey projects, add a concrete pump for efficient upper-floor placement.' },
                { step: '4', title: 'Schedule & Pour', desc: 'Confirm delivery and pour your C30 concrete, backed by Tanzibaba quality assurance.' },
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Need C30 Concrete for Your Project?</h2>
            <p className="text-lg text-brand-100 mb-8">Get your instant C30 concrete quote or speak to our team on WhatsApp.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl">
                <Zap className="w-5 h-5" /> Get C30 Quote
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
              <Link href="/services/c25-concrete-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-2xl font-extrabold text-brand-600">C25</span>
                <p className="text-sm text-gray-600 mt-2">House foundations & residential</p>
              </Link>
              <Link href="/services/concrete-supplier-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">All Grades</span>
                <p className="text-sm text-gray-600 mt-2">View our complete range C10 – C50</p>
              </Link>
              <Link href="/services/concrete-pump-rental-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">Pump Rental</span>
                <p className="text-sm text-gray-600 mt-2">For multi-storey placement</p>
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
