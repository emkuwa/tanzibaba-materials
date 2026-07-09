import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, ArrowRight, CheckCircle, HardHat, Package, Wrench, Zap, Shield, Phone, Calendar, Clock, Users, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Construction Equipment Rental Tanzania | Rent Excavators, Loaders & Cranes',
  description: 'Short-term and long-term construction equipment rental in Tanzania. Excavators, bulldozers, wheel loaders, dump trucks, cranes and more. Well-maintained machines with trained operators.',
  keywords: ['construction equipment rental Tanzania', 'equipment hire Dar es Salaam', 'excavator rental', 'bulldozer hire', 'crane rental Tanzania', 'heavy equipment rental', 'construction machinery hire', 'plant hire Tanzania'],
  alternates: { canonical: `${siteUrl}/equipment/rent` },
  openGraph: {
    title: 'Construction Equipment Rental Tanzania — Rent Excavators, Loaders & Cranes',
    description: 'Short-term and long-term construction equipment rental in Tanzania. Well-maintained machines with trained operators.',
    url: `${siteUrl}/equipment/rent`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const benefits = [
  { icon: Clock, title: 'Flexible Rental Periods', desc: 'Daily, weekly and monthly rental options tailored to your project timeline.' },
  { icon: CheckCircle, title: 'Well-Maintained Fleet', desc: 'All equipment serviced regularly and inspected before every hire.' },
  { icon: Users, title: 'Trained Operators', desc: 'Experienced operators available for all machines — or self-drive options.' },
  { icon: Truck, title: 'Nationwide Delivery', desc: 'Equipment delivered to your site across Dar es Salaam, Zanzibar, Dodoma and beyond.' },
];

const categories = [
  { title: 'Earthmoving', items: ['Excavators', 'Bulldozers', 'Wheel Loaders', 'Backhoe Loaders', 'Motor Graders'], image: '/images/new/road-construction.webp' },
  { title: 'Transport', items: ['Dump Trucks', 'Tipper Trucks', 'Lowbed Trailers', 'Water Bowsers', 'Fuel Bowsers'], image: '/images/new/crusher-plant.webp' },
  { title: 'Concrete', items: ['Concrete Pump Trucks', 'Transit Mixers', 'Boom Pumps'], image: '/images/new/concrete-pump.webp' },
  { title: 'Lifting & Handling', items: ['Mobile Cranes', 'Forklifts', 'Telehandlers'], image: '/images/new/commercial-building.webp' },
  { title: 'Mining & Quarry', items: ['Mobile Crushers', 'Screening Plants'], image: '/images/new/aggregates.webp' },
  { title: 'Site Equipment', items: ['Generators', 'Lighting Towers', 'Air Compressors'], image: '/images/new/washed-sand.webp' },
];

const faqs = [
  { q: 'What equipment can I rent from Tanzibaba?', a: 'We offer a comprehensive range of construction equipment including excavators, bulldozers, wheel loaders, backhoe loaders, motor graders, dump trucks, tipper trucks, lowbed trailers, mobile cranes, forklifts, telehandlers, concrete pump trucks, transit mixers, water bowsers, fuel bowsers, rollers, mobile crushers, screening plants, generators, lighting towers and air compressors.' },
  { q: 'What are the rental periods available?', a: 'We offer flexible rental periods — daily, weekly and monthly rates. Long-term rental discounts are available for projects lasting 3 months or more. Contact our team for custom rental terms tailored to your project duration.' },
  { q: 'Do you provide trained operators?', a: 'Yes, trained and experienced operators are available for all equipment categories. If you have your own certified operator, self-drive options are also available with reduced rates.' },
  { q: 'How is equipment delivered to my site?', a: 'We deliver equipment directly to your construction site using our lowbed trailers and transport fleet. Delivery is available across Dar es Salaam, Zanzibar, Dodoma, Arusha, Mwanza and other regions in Tanzania.' },
  { q: 'What if the equipment breaks down on site?', a: 'We provide 24/7 breakdown support. If any equipment develops a fault during the rental period, we will repair on-site or replace the machine promptly at no additional cost.' },
  { q: 'How do I get a rental quote?', a: 'Request a quote through our website, call +255 716 002 790, or message us on WhatsApp. We respond within minutes during business hours with a detailed rental quotation.' },
];

export default function RentEquipment() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image src="/images/new/road-construction.webp" alt="Construction equipment rental Tanzania" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/30 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <HardHat className="w-4 h-4" /> Rent Equipment
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Construction Equipment<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Rental Tanzania</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                Short-term and long-term construction equipment rental. Excavators, loaders, cranes, dump trucks and more — delivered to your site.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#request" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-600/30 text-sm">
                  Request Equipment <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg text-sm">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Why Rent from Tanzibaba?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Reliable equipment, flexible terms and nationwide delivery — backed by Tanzania&apos;s trusted construction supply network.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(b => (
                <div key={b.title} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6 text-brand-600" />
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
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Package className="w-4 h-4" /> Equipment Categories
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Available for Rental</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Browse our equipment categories — all machines well-maintained and ready for your project.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map(cat => (
                <div key={cat.title} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
                    <Image src={cat.image} alt={cat.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="inline-flex items-center gap-1.5 bg-white/90 text-gray-900 px-3 py-1 rounded-lg text-xs font-bold">{cat.title}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-2">
                      {cat.items.map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
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

        <section id="request" className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Request Equipment</h2>
              <p className="text-gray-500 text-sm md:text-base">Tell us what equipment you need and we&apos;ll send you a rental quote within minutes.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 md:p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get a Quick Quote via WhatsApp</h3>
                <p className="text-sm text-gray-500 mb-6 max-w-md">Send us a message on WhatsApp with your equipment requirements and we&apos;ll respond with availability and pricing.</p>
                <a href="https://wa.me/255716002790?text=Hi%20Tanzibaba!%20I%20would%20like%20to%20rent%20construction%20equipment.%20Please%20send%20me%20more%20information." target="_blank" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg text-base">
                  <MessageCircle className="w-5 h-5" /> Request via WhatsApp
                </a>
                <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> +255 716 002 790</span>
                  <span>or</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Response within 2 hours</span>
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
              <p className="text-gray-500 text-sm md:text-base">Common questions about equipment rental with Tanzibaba.</p>
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
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4">Ready to Rent Equipment?</h2>
                <p className="text-gray-400 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">Get a rental quote in under 2 hours. Our team will help you select the right equipment for your project.</p>
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                  <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all shadow-lg text-sm md:text-base">
                    Request Equipment <ArrowRight className="w-4 h-4" />
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
