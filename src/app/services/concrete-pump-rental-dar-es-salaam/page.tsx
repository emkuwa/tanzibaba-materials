import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Zap, CheckCircle, MapPin, MessageCircle, ArrowRight, Building, HardHat, Maximize2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Concrete Pump Rental Dar es Salaam | Reliable Service | Tanzibaba',
  description: 'Professional concrete pump rental in Dar es Salaam. Ideal for multi-storey construction, difficult access sites, and large volume pours.',
  keywords: ['concrete pump dar es salaam', 'concrete pump rental', 'pump concrete'],
  alternates: { canonical: `${siteUrl}/services/concrete-pump-rental-dar-es-salaam` },
  openGraph: {
    title: 'Concrete Pump Rental Dar es Salaam | Reliable Service | Tanzibaba',
    description: 'Professional concrete pump rental in Dar es Salaam. Ideal for multi-storey construction, difficult access sites, and large volume pours.',
    url: `${siteUrl}/services/concrete-pump-rental-dar-es-salaam`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Concrete Pump Rental Dar es Salaam',
  provider: { '@type': 'LocalBusiness', name: 'Tanzibaba' },
  areaServed: { '@type': 'City', name: 'Dar es Salaam' },
  description: 'Professional concrete pump rental in Dar es Salaam. Ideal for multi-storey construction, difficult access sites, and large volume pours.',
};

export default function ConcretePumpRentalDarEsSalaam() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1600&q=80" alt="Concrete pump rental Dar es Salaam" className="w-full h-full object-cover" style={{ objectPosition: '50% 30%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Truck className="w-4 h-4" /> Concrete Pump Rental Dar es Salaam
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Professional Concrete Pump Rental{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">in Dar es Salaam</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Tanzibaba offers professional concrete pump rental services across Dar es Salaam. Whether you are pouring concrete for a multi-storey apartment building, a constrained urban site in Kariakoo, or a large commercial development, our concrete pumps make the job faster, safer, and more efficient.
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
          <Image src="/images/new/concrete-pump.webp" alt="Concrete pump operations at a multi-storey construction site in Dar es Salaam" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" priority />
        </div>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-heading text-center mb-4">Benefits of Using a Concrete Pump</h2>
            <p className="section-sub text-center mb-10">A concrete pump transforms how you pour. Here is why contractors across Dar es Salaam choose pump delivery.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="card text-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Building className="w-7 h-7 text-brand-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">Multi-Storey Reach</h3>
                <p className="text-sm text-gray-600">Our pumps can reach upper floors of multi-storey buildings, eliminating the need for crane-and-bucket methods that slow down construction.</p>
              </div>
              <div className="card text-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><HardHat className="w-7 h-7 text-brand-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">Difficult Access Sites</h3>
                <p className="text-sm text-gray-600">Tight urban sites, confined spaces, and areas where mixer trucks cannot reach directly — pumps solve access problems efficiently.</p>
              </div>
              <div className="card text-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Maximize2 className="w-7 h-7 text-brand-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">High-Volume Pours</h3>
                <p className="text-sm text-gray-600">For large continuous pours like foundation slabs or industrial floors, pumps deliver concrete faster and more consistently than manual methods.</p>
              </div>
              <div className="card text-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Zap className="w-7 h-7 text-brand-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">Faster Placement</h3>
                <p className="text-sm text-gray-600">Pump placement is significantly faster than manual wheelbarrow or bucket methods, reducing labour costs and pour time.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">When to Use a Concrete Pump</h2>
            <p className="section-sub text-center mb-10">Not every pour needs a pump. Here are the situations where it makes a real difference.</p>
            <div className="space-y-4">
              {[
                { title: 'Multi-Storey Apartment & Commercial Buildings', desc: 'Pouring concrete on upper floors is one of the most common reasons to rent a pump. Our pumps deliver concrete directly to the pour point on any floor, eliminating the need for cranes, hoists, or manual labour to move concrete upstairs.' },
                { title: 'Constrained Urban Sites (Kariakoo, Upanga, City Centre)', desc: 'Many construction sites in central Dar es Salaam have limited access for mixer trucks. A concrete pump allows the truck to remain on the street while concrete is pumped to the pour location — sometimes over 50 metres away.' },
                { title: 'Large Continuous Pours', desc: 'Foundations, large floor slabs, and industrial pavements require continuous concrete placement to prevent cold joints. Pumps maintain a steady flow, ensuring the entire pour is monolithic and structurally sound.' },
                { title: 'Residential Projects with Access Challenges', desc: 'Even for single-storey homes, if the mixer truck cannot get close enough to the pour area, a pump saves significant time and labour compared to wheelbarrows.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Concrete Pump Rental Pricing</h2>
            <p className="section-sub text-center mb-10">Our pump pricing is transparent and included in your quote. Use our Quick Price tool to see the total cost.</p>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Pump Service Fee Structure</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span><strong className="text-gray-900">Base pump fee:</strong> TZS 150,000 per pour</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span><strong className="text-gray-900">Volume charge:</strong> TZS 5,000 per m³ of concrete pumped</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span><strong className="text-gray-900">All prices include:</strong> operator, hose, maintenance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Example Cost</h3>
                  <p className="text-sm text-gray-600 mb-3">For a 50 m³ pour requiring a pump:</p>
                  <div className="bg-white rounded-lg p-4 border border-gray-200 text-sm">
                    <div className="flex justify-between mb-2"><span>Base pump fee</span><span className="font-medium">TZS 150,000</span></div>
                    <div className="flex justify-between mb-2"><span>Volume charge (50 × 5,000)</span><span className="font-medium">TZS 250,000</span></div>
                    <div className="flex justify-between pt-2 border-t border-gray-200 font-bold"><span>Total pump cost</span><span>TZS 400,000</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">How to Rent a Concrete Pump</h2>
            <p className="section-sub text-center mb-10">Adding a pump to your concrete order is easy.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Select Pump Option', desc: 'In our Quick Price tool, select &quot;Yes&quot; for the concrete pump question when placing your order.' },
                { step: '2', title: 'Get Combined Quote', desc: 'Your instant quote will include both concrete delivery and pump charges in one transparent price.' },
                { step: '3', title: 'Discuss Site Access', desc: 'Our team will confirm site accessibility and pump placement requirements before your pour.' },
                { step: '4', title: 'Pump & Pour', desc: 'On delivery day, the pump arrives with your mixer trucks. Our operator handles setup and pumping.' },
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Need a Concrete Pump for Your Project?</h2>
            <p className="text-lg text-brand-100 mb-8">Get an instant quote that includes pump rental, or speak to our team about your specific requirements.</p>
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
            <h2 className="section-heading text-center mb-4">Frequently Asked Questions</h2>
            <p className="section-sub text-center mb-10">Common questions about concrete pump rental in Dar es Salaam.</p>
            <div className="space-y-4">
              {[
                { q: 'What type of concrete pump do you use?', a: 'We use trailer-mounted concrete pumps with a boom reach suitable for most construction sites in Dar es Salaam. Our pumps can handle all standard concrete grades from C10 to C50.' },
                { q: 'How far can the pump reach?', a: 'Our pumps can typically reach up to 50 metres horizontally and 30 metres vertically, depending on the specific model and site conditions. We will confirm suitability during order confirmation.' },
                { q: 'Do I need to prepare the site for the pump?', a: 'Yes. The pump truck needs a stable, level area to set up. Access for the pump hose to the pour area should be clear. Our team will advise on specific requirements when you book.' },
                { q: 'Can I rent a pump without ordering concrete?', a: 'Our pumps are available exclusively with Tanzibaba concrete orders. We do not offer stand-alone pump rental for concrete purchased from other suppliers.' },
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                    {faq.q}
                    <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform shrink-0" />
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">{faq.a}</div>
                </details>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-sm text-gray-600">Looking for premium concrete to go with your pump? View our <Link href="/services/ready-mix-concrete-dar-es-salaam" className="text-brand-600 font-semibold hover:underline">concrete supply options</Link> or explore <Link href="/services/concrete-supplier-dar-es-salaam" className="text-brand-600 font-semibold hover:underline">why Tanzibaba is Dar es Salaam&apos;s trusted supplier</Link>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
