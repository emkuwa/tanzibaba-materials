import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Zap, CheckCircle, MapPin, MessageCircle, ArrowRight, Building, Warehouse, Store, HardHat } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Commercial Concrete Supply Dar es Salaam | Large Projects | Tanzibaba',
  description: 'Professional commercial concrete supply in Dar es Salaam. For shopping complexes, office buildings, hotels & hospitals. Large capacity.',
  keywords: ['commercial concrete supply', 'commercial concrete dar es salaam'],
  alternates: { canonical: `${siteUrl}/services/commercial-concrete-supply-dar-es-salaam` },
  openGraph: {
    title: 'Commercial Concrete Supply Dar es Salaam | Large Projects | Tanzibaba',
    description: 'Professional commercial concrete supply in Dar es Salaam. For shopping complexes, office buildings, hotels & hospitals.',
    url: `${siteUrl}/services/commercial-concrete-supply-dar-es-salaam`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Concrete Supply Dar es Salaam',
  provider: { '@type': 'LocalBusiness', name: 'Tanzibaba' },
  areaServed: { '@type': 'City', name: 'Dar es Salaam' },
  description: 'Professional commercial concrete supply in Dar es Salaam. For shopping complexes, office buildings, hotels & hospitals.',
};

export default function CommercialConcreteSupplyDarEsSalaam() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1600&q=80" alt="Commercial concrete supply Dar es Salaam" className="w-full h-full object-cover" style={{ objectPosition: '50% 30%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Building className="w-4 h-4" /> Commercial Concrete Supply
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Professional Commercial Concrete Supply{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">in Dar es Salaam</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Tanzibaba is the preferred commercial concrete supplier for Dar es Salaam&apos;s largest development projects. From shopping complexes and office buildings to hotels, hospitals, and industrial facilities, we have the production capacity, logistics network, and technical expertise to deliver premium concrete for projects of any scale.
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

        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image src="/images/commercial-building.jpg" alt="Premium ready-mix concrete supply for commercial construction projects in Dar es Salaam — high-rise buildings and commercial complexes" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" priority />
        </div>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-heading text-center mb-4">Commercial Projects We Supply</h2>
            <p className="section-sub text-center mb-10">We have the capacity and expertise to handle concrete supply for Dar es Salaam&apos;s most demanding commercial developments.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Store, title: 'Shopping Complexes', desc: 'Large-format retail centres require high-volume, consistent concrete supply for foundations, floor slabs, columns, and parking structures. Our production capacity can sustain the high throughput these projects demand.' },
                { icon: Building, title: 'Office Buildings', desc: 'From low-rise corporate offices to high-rise commercial towers, we supply C30, C35, and custom-grade concrete with pump-friendly mixes for efficient multi-storey construction.' },
                { icon: Building, title: 'Hotels & Resorts', desc: 'Hospitality projects across Dar es Salaam and the coast require high-quality finishes and structural integrity. Our washed sand concrete delivers both strength and surface quality.' },
                { icon: Warehouse, title: 'Industrial Facilities', desc: 'Warehouses, factories, and industrial plants need heavy-duty concrete for floor slabs capable of supporting machinery and heavy loads. We supply C35–C50 grades for these applications.' },
              ].map((item) => (
                <div key={item.title} className="card">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4"><item.icon className="w-6 h-6 text-brand-600" /></div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Why Choose Tanzibaba for Commercial Projects?</h2>
            <p className="section-sub text-center mb-10">Large commercial projects demand a concrete supplier with scale, reliability, and technical depth.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Large Production Capacity</h3>
                  <p className="text-sm text-gray-600">With operations across Dar es Salaam, we can produce and deliver hundreds of cubic metres of concrete per day. For large commercial pours — such as foundation rafts or parking deck slabs — we coordinate multiple production locations to ensure uninterrupted supply.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Consistent Quality at Scale</h3>
                  <p className="text-sm text-gray-600">Our computer-controlled batching systems ensure every cubic metre of concrete is identical — critical for commercial projects where structural consistency across large pours is essential for meeting engineering specifications.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Concrete Pump Fleet</h3>
                  <p className="text-sm text-gray-600">Commercial projects almost always require concrete pumps for efficient placement. Our pump fleet handles pours at any height or distance, ensuring your project stays on schedule. See our <Link href="/services/concrete-pump-rental-dar-es-salaam" className="text-brand-600 hover:underline">pump rental service</Link> for details.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Technical Mix Design Support</h3>
                  <p className="text-sm text-gray-600">Our technical team works with your structural engineer to develop and test custom mix designs. Whether you need a specific admixture, enhanced durability, or special slump requirements, we deliver exactly what your specs call for.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Concrete Grades for Commercial Construction</h2>
            <p className="section-sub text-center mb-10">Different commercial elements require different concrete grades. Here is our recommendation guide.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Element</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Recommended Grade</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Key Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { element: 'Foundation rafts & ground beams', grade: 'C30 – C35', requirement: 'High strength, low permeability' },
                    { element: 'Columns & shear walls', grade: 'C30 – C40', requirement: 'High compressive strength' },
                    { element: 'Suspended floor slabs', grade: 'C30 – C35', requirement: 'Consistent workability, pumpable' },
                    { element: 'Roof slabs', grade: 'C30', requirement: 'Weather-resistant, durable' },
                    { element: 'Parking decks', grade: 'C35', requirement: 'Abrasion-resistant, high durability' },
                    { element: 'Industrial floor slabs', grade: 'C35 – C50', requirement: 'Heavy load capacity, flatness' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">{row.element}</td>
                      <td className="py-3 px-4 text-brand-600 font-semibold">{row.grade}</td>
                      <td className="py-3 px-4 text-gray-600">{row.requirement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Commercial Concrete Supply Process</h2>
            <p className="section-sub text-center mb-10">Our commercial supply process is designed for efficiency, transparency, and reliability.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Consultation', desc: 'Contact us with your project requirements. Our team reviews structural drawings, mix specifications, and delivery schedules.' },
                { step: '2', title: 'Custom Quote', desc: 'Receive a detailed commercial quotation with volume pricing, delivery logistics, pump requirements, and VAT.' },
                { step: '3', title: 'Production Planning', desc: 'We allocate plant capacity, schedule mixer trucks, and coordinate pump resources to match your pour schedule.' },
                { step: '4', title: 'Delivery & Pour Support', desc: 'On-site delivery management, quality testing, and technical support throughout your project duration.' },
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Planning a Commercial Development in Dar es Salaam?</h2>
            <p className="text-lg text-brand-100 mb-8">Get a commercial concrete quote or speak to our sales team on WhatsApp.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl">
                <Zap className="w-5 h-5" /> Get Commercial Quote
              </a>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Related Services</h2>
            <p className="section-sub text-center mb-10">Explore our other commercial-grade concrete services.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/services/c30-concrete-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-2xl font-extrabold text-brand-600">C30</span>
                <p className="text-sm text-gray-600 mt-2">Premium grade for commercial buildings</p>
              </Link>
              <Link href="/services/concrete-pump-rental-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">Pump Rental</span>
                <p className="text-sm text-gray-600 mt-2">Efficient placement for commercial projects</p>
              </Link>
              <Link href="/services/concrete-supplier-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">All Grades</span>
                <p className="text-sm text-gray-600 mt-2">View our complete product range</p>
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
