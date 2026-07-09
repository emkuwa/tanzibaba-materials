import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, ArrowRight, CheckCircle, HardHat, Package, Wrench, Shield, Phone, Search, DollarSign, Award, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Buy Construction Equipment Tanzania | New & Used Machinery for Sale',
  description: 'Source new and used construction equipment in Tanzania. Excavators, bulldozers, loaders, cranes, dump trucks and more from trusted suppliers and dealers.',
  keywords: ['buy construction equipment Tanzania', 'construction machinery for sale', 'new excavator Tanzania', 'used bulldozer for sale', 'heavy equipment dealers Tanzania', 'construction equipment suppliers', 'buy crane Tanzania'],
  alternates: { canonical: `${siteUrl}/equipment/buy` },
  openGraph: {
    title: 'Buy Construction Equipment Tanzania — New & Used Machinery for Sale',
    description: 'Source new and used construction equipment in Tanzania from trusted suppliers and dealers.',
    url: `${siteUrl}/equipment/buy`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const benefits = [
  { icon: Search, title: 'Wide Selection', desc: 'Access new and used equipment from multiple trusted suppliers across Tanzania.' },
  { icon: Shield, title: 'Verified Suppliers', desc: 'All equipment owners and dealers are vetted for credibility and machine quality.' },
  { icon: DollarSign, title: 'Competitive Pricing', desc: 'Compare options and get the best market rates for your equipment purchase.' },
  { icon: Truck, title: 'Delivery & Logistics', desc: 'Coordination of transport and delivery for equipment purchased through our network.' },
];

const categories = [
  { title: 'Earthmoving', items: ['Excavators', 'Bulldozers', 'Wheel Loaders', 'Backhoe Loaders', 'Motor Graders'], image: '/images/equipment/wheel-loader-hire-tanzania.webp', alt: 'Wheel loader for sale in Tanzania — new and used options' },
  { title: 'Transport', items: ['Dump Trucks', 'Tipper Trucks', 'Lowbed Trailers', 'Water Bowsers', 'Fuel Bowsers'], image: '/images/equipment/tipper-truck-hire-tanzania.webp', alt: 'Tipper truck for sale in Tanzania — new and used options' },
  { title: 'Concrete', items: ['Concrete Pump Trucks', 'Transit Mixers', 'Boom Pumps'], image: '/images/equipment/transit-mixer-truck-tanzania.webp', alt: 'Transit mixer truck for sale in Tanzania — new and used options' },
  { title: 'Lifting & Handling', items: ['Mobile Cranes', 'Forklifts', 'Telehandlers'], image: '/images/equipment/forklift-hire-tanzania.webp', alt: 'Forklift for sale in Tanzania — new and used options' },
  { title: 'Mining & Quarry', items: ['Mobile Crushers', 'Screening Plants'], image: '/images/equipment/screening-plant-hire-tanzania.webp', alt: 'Screening plant for sale in Tanzania — new and used options' },
  { title: 'Site Equipment', items: ['Generators', 'Lighting Towers', 'Air Compressors'], image: '/images/equipment/diesel-generator-hire-tanzania.webp', alt: 'Diesel generator for sale in Tanzania — new and used options' },
];

const faqs = [
  { q: 'What types of equipment can I buy through Tanzibaba?', a: 'We connect buyers with sellers of all types of construction equipment including excavators, bulldozers, wheel loaders, backhoe loaders, motor graders, dump trucks, tipper trucks, mobile cranes, forklifts, concrete pump trucks, transit mixers, generators and more — both new and used.' },
  { q: 'Are the suppliers verified?', a: 'Yes, all equipment owners, dealers and suppliers listed on the Tanzibaba network are verified for credibility. We check machine condition, ownership documentation and supplier reputation before listing.' },
  { q: 'Can I get financing for equipment purchases?', a: 'We work with approved partners who offer flexible financing options including installment plans and rent-to-own arrangements for qualified buyers.' },
  { q: 'Do you help with equipment delivery?', a: 'Yes, we coordinate transport and delivery logistics for equipment purchased through our network, ensuring safe and timely delivery to your location across Tanzania.' },
  { q: 'How do I inquire about a specific machine?', a: 'Contact us via WhatsApp or phone with the type of equipment you need, and we\'ll connect you with relevant suppliers from our network.' },
];

export default function BuyEquipment() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image src="/images/equipment/bulldozer-hire-tanzania.webp" alt="Buy construction equipment Tanzania — new and used bulldozers, excavators and heavy machinery" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Package className="w-4 h-4" /> Buy Equipment
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Buy Construction<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Equipment Tanzania</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                Source new and used construction equipment from verified suppliers and dealers across Tanzania.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/255716002790?text=Hi%20Tanzibaba!%20I%20am%20looking%20to%20buy%20construction%20equipment.%20Please%20connect%20me%20with%20suppliers." target="_blank" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-600/30 text-sm">
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all border border-white/20 text-sm">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Why Buy Through Tanzibaba?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Access trusted equipment suppliers across Tanzania with verified machines and competitive pricing.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(b => (
                <div key={b.title} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{b.title}</h3>
                  <p className="text-sm text-gray-500">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Package className="w-4 h-4" /> Equipment Available
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">New & Used Equipment</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Browse equipment categories available for purchase through our supplier network.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map(cat => (
                <div key={cat.title} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
                    <Image src={cat.image} alt={cat.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="inline-flex items-center gap-1.5 bg-white/90 text-gray-900 px-3 py-1 rounded-lg text-xs font-bold">{cat.title}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-2">
                      {cat.items.map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 md:p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Looking for Specific Equipment?</h3>
                <p className="text-sm text-gray-500 mb-6 max-w-md">Tell us what you need and we&apos;ll connect you with verified suppliers offering the best prices.</p>
                <a href="https://wa.me/255716002790?text=Hi%20Tanzibaba!%20I%20am%20looking%20to%20buy%20construction%20equipment.%20Please%20connect%20me%20with%20suppliers." target="_blank" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg text-base">
                  <MessageCircle className="w-5 h-5" /> Send Inquiry
                </a>
                <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> +255 716 002 790</span>
                  <span>or</span>
                  <span className="flex items-center gap-1"><Award className="w-4 h-4" /> Verified Suppliers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <CheckCircle className="w-4 h-4" /> FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-gray-500 text-sm md:text-base">Common questions about buying equipment through Tanzibaba.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
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

        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-6 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)' }} />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4">Ready to Buy Equipment?</h2>
                <p className="text-gray-400 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">Get connected with verified equipment suppliers across Tanzania.</p>
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                  <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all shadow-lg text-sm md:text-base">
                    Inquire Now <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all border border-white/20 text-sm md:text-base">
                    <Phone className="w-4 h-4" /> Call +255 716 002 790
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
