import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Zap, CheckCircle, Shield, MapPin, MessageCircle, ArrowRight, Factory, Scale, HardHat } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'Ready-Mix Concrete Dar es Salaam | Premium Supply | Tanzibaba',
  description: 'Premium ready-mix concrete supply in Dar es Salaam. Concrete grades C10 to C50 produced using washed sand technology and quality-controlled batching for residential, commercial and infrastructure projects.',
  keywords: ['ready mix concrete dar es salaam', 'concrete supply dar es salaam', 'concrete delivery dar es salaam', 'washed sand concrete', 'concrete grades C10 C50'],
  alternates: { canonical: `${siteUrl}/services/ready-mix-concrete-dar-es-salaam` },
  openGraph: {
    title: 'Ready-Mix Concrete Dar es Salaam | Premium Supply | Tanzibaba',
    description: 'Premium ready-mix concrete supply in Dar es Salaam. Grades C10 to C50 produced using washed sand technology.',
    url: `${siteUrl}/services/ready-mix-concrete-dar-es-salaam`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ready-Mix Concrete Supply Dar es Salaam',
  provider: { '@type': 'LocalBusiness', name: 'Tanzibaba' },
  areaServed: { '@type': 'City', name: 'Dar es Salaam' },
  description: 'Premium ready-mix concrete supply in Dar es Salaam. Grades C10 to C50 produced using washed sand technology and quality-controlled batching.',
};

export default function ReadyMixConcreteDarEsSalaam() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80" alt="Ready-mix concrete delivery Dar es Salaam" className="w-full h-full object-cover" style={{ objectPosition: '50% 30%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Truck className="w-4 h-4" /> Ready-Mix Concrete Dar es Salaam
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Premium Ready-Mix Concrete{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Supply in Dar es Salaam</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Premium ready-mix concrete supply in Dar es Salaam. Concrete grades C10 to C50 produced using washed sand technology and quality-controlled batching for residential, commercial and infrastructure projects. Operations strategically positioned across the city for fast, reliable delivery.
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
          <Image src="/images/commercial-building.jpg" alt="Premium ready-mix concrete supply across Dar es Salaam — commercial and industrial construction projects" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" priority />
        </div>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="card text-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Factory className="w-7 h-7 text-brand-600" /></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Controlled Production</h3>
                <p className="text-sm text-gray-600">Operations across all five districts of Dar es Salaam for fast, reliable delivery to your project site.</p>
              </div>
              <div className="card text-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Scale className="w-7 h-7 text-brand-600" /></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Washed Sand Technology</h3>
                <p className="text-sm text-gray-600">Our washed sand eliminates silt and clay, producing cleaner aggregate that bonds better with cement for stronger concrete.</p>
              </div>
              <div className="card text-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><HardHat className="w-7 h-7 text-brand-600" /></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Grades C10–C50</h3>
                <p className="text-sm text-gray-600">Full range of concrete grades for every application — from residential slabs to heavy industrial structures.</p>
              </div>
            </div>

            <h2 className="section-heading text-center mb-4">Why Choose Tanzibaba for Ready-Mix Concrete in Dar es Salaam?</h2>
            <p className="section-sub text-center mb-12">
              We deliver premium ready-mix concrete that exceeds industry standards. Here is why contractors, developers, and homeowners trust us.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900">Consistent Quality Control</h3>
                    <p className="text-sm text-gray-600">Every batch is produced in a computer-controlled batching plant with precise aggregate, cement, and water ratios. We test slump, temperature, and compressive strength at every stage to ensure consistency from load to load.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900">Fast Delivery Across Dar es Salaam</h3>
                    <p className="text-sm text-gray-600">With operations spread across Kinondoni, Ubungo, Ilala, Temeke, and Kigamboni, we can deliver to your site quickly — reducing wait times and ensuring your concrete arrives within the optimal pouring window.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900">Direct Pricing — No Middlemen</h3>
                    <p className="text-sm text-gray-600">We supply directly from our own production facilities. No brokers, no markups. You get factory-direct pricing with full transparency. All quotes include 18% VAT so there are no hidden surprises.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900">Washed Sand for Superior Strength</h3>
                    <p className="text-sm text-gray-600">Unlike conventional concrete that uses unprocessed sand full of impurities, our washed sand technology removes silt, clay, and organic matter. This produces a cleaner, stronger bond with cement — resulting in concrete that outperforms standard mixes in compressive strength tests.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900">Flexible Volume &amp; Grade Options</h3>
                    <p className="text-sm text-gray-600">Whether you need 3 m³ for a small residential slab or 300+ m³ for a commercial development, we have the capacity. Choose from nine standard grades (C10 through C50) or order a custom mix design tailored to your structural engineer&apos;s specifications.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900">Concrete Pump Rental Available</h3>
                    <p className="text-sm text-gray-600">For multi-storey projects or sites with limited access, we offer professional concrete pump services. Our pumps make pouring faster, safer, and more precise — especially for upper-floor slabs and columns.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-heading text-center mb-4">Our Concrete Grades</h2>
            <p className="section-sub text-center mb-12">We produce and deliver a full range of concrete grades to match every construction requirement.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { grade: 'C10', desc: 'Blinding, leveling & non-structural fill', use: 'Temporary works, ground levelling' },
                { grade: 'C15', desc: 'Lean concrete, walkways, light foundations', use: 'Footpaths, light-duty slabs' },
                { grade: 'C20', desc: 'Residential slabs, small foundations', use: 'Houses, patios, garages' },
                { grade: 'C25', desc: 'House foundations, columns, beams, driveways', use: 'Standard residential construction' },
                { grade: 'C30', desc: 'Multi-storey apartments, commercial buildings', use: 'Apartment blocks, offices' },
                { grade: 'C35', desc: 'Heavy-duty structures, industrial floors', use: 'Factories, warehouses' },
                { grade: 'C40', desc: 'Industrial plants, engineered structures', use: 'Heavy infrastructure' },
                { grade: 'C45', desc: 'High-strength precast, bridge components', use: 'Precast elements, bridges' },
                { grade: 'C50', desc: 'Specialized high-performance, heavy infrastructure', use: 'Highways, marine structures' },
              ].map((item) => (
                <div key={item.grade} className="bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-200 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-extrabold text-brand-600">{item.grade}</span>
                  </div>
                  <p className="text-sm text-gray-800 font-medium">{item.desc}</p>
                  <p className="text-xs text-gray-500 mt-1">Best for: {item.use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Areas We Serve in Dar es Salaam</h2>
            <p className="section-sub text-center mb-10">Our operations across Dar es Salaam allow us to deliver quickly to every corner of the city.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-600" /> Kinondoni</h3>
                <p className="text-sm text-gray-600">Magomeni, Mikocheni, Sinza, Kawe, Kunduchi, Tegeta, Mwananyamala, Tandale, Manzese, Kijitonyama, Mabibo</p>
                <Link href="/services/ready-mix-concrete-kinondoni" className="text-sm text-brand-600 font-semibold mt-3 inline-block hover:underline">Learn more →</Link>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-600" /> Ubungo</h3>
                <p className="text-sm text-gray-600">Ubungo Makati, Kimara, Mbezi Luis, Mbezi Juu, Gongo la Mboto, Saranga, Kwembe, Msigani</p>
                <Link href="/services/ready-mix-concrete-ubungo" className="text-sm text-brand-600 font-semibold mt-3 inline-block hover:underline">Learn more →</Link>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-600" /> Ilala</h3>
                <p className="text-sm text-gray-600">Kariakoo, Upanga, Mchikichini, Ilala, Buguruni, Kipawa, Tabata, Ukonga, Pugu, Vingunguti</p>
                <Link href="/services/ready-mix-concrete-ilala" className="text-sm text-brand-600 font-semibold mt-3 inline-block hover:underline">Learn more →</Link>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-600" /> Temeke</h3>
                <p className="text-sm text-gray-600">Temeke, Mbagala, Charambe, Azimio, Chamazi, Kurasini, Mtoni, Tandika, Kisarawe</p>
                <Link href="/services/ready-mix-concrete-temeke" className="text-sm text-brand-600 font-semibold mt-3 inline-block hover:underline">Learn more →</Link>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-600" /> Kigamboni</h3>
                <p className="text-sm text-gray-600">Kigamboni, Vijibweni, Somangila, Tungi, Kisarawe II, Mjimwema</p>
                <Link href="/services/ready-mix-concrete-kigamboni" className="text-sm text-brand-600 font-semibold mt-3 inline-block hover:underline">Learn more →</Link>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-600" /> Surrounding Areas</h3>
                <p className="text-sm text-gray-600">We also deliver to Mkuranga, Kibaha, Bagamoyo, and other surrounding regions. Contact us for area-specific delivery schedules.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-brand-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Order Ready-Mix Concrete in Dar es Salaam?</h2>
            <p className="text-lg text-brand-100 mb-8">Get an instant online quote or speak with our team on WhatsApp. We respond within minutes.</p>
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

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">How to Order Ready-Mix Concrete in Dar es Salaam</h2>
            <p className="section-sub text-center mb-10">Ordering premium concrete from Tanzibaba is simple and fast.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Tell Us Your Requirements', desc: 'Fill in your project details — location, concrete grade, volume, and delivery preferences — using our online quote tool.' },
                { step: '2', title: 'Receive Your Instant Quote', desc: 'Get an estimated price immediately. Our system calculates concrete cost, delivery fees, pump charges, and VAT for full transparency.' },
                { step: '3', title: 'Confirm Your Order', desc: 'Review the quote, make adjustments if needed, and confirm your order. Our team will schedule production and delivery.' },
                { step: '4', title: 'We Deliver & Pour', desc: 'We deliver your concrete in modern mixer trucks at the scheduled time. Pump service available for difficult-access sites.' },
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

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Frequently Asked Questions</h2>
            <p className="section-sub text-center mb-10">Common questions about ready-mix concrete supply in Dar es Salaam.</p>
            <div className="space-y-4">
              {[
                { q: 'How much does ready-mix concrete cost in Dar es Salaam?', a: 'Prices depend on the concrete grade, volume, delivery distance, and whether a pump is required. Use our Quick Price tool for an instant estimate. As a guide, C25 concrete starts at approximately TZS 210,000/m³ including VAT, while C30 starts at approximately TZS 250,000/m³.' },
                { q: 'How quickly can you deliver concrete in Dar es Salaam?', a: 'We recommend ordering 24-48 hours in advance for standard pours. For large projects or specialty grades, please give us 3-5 days notice. Our operations across the city mean we can often accommodate urgent requests.' },
                { q: 'What is the minimum order quantity?', a: 'Our minimum order is 1 m³ for standard grades. For smaller quantities, we recommend coordinating with neighbours or planning your pour to meet the minimum.' },
                { q: 'Do you offer concrete pump services?', a: 'Yes, we offer professional concrete pump rental for projects that require it. Pumps are ideal for multi-storey construction, difficult-access sites, and large volume pours that need fast placement.' },
              ].map((faq, i) => (
                <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                    {faq.q}
                    <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform shrink-0" />
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
