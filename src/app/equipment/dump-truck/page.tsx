import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, ArrowRight, CheckCircle, HardHat, Building2, Route, Globe, Wrench, Shield, Phone, MessageCircle, Clock, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Dump Truck Hire Tanzania | Rent Dump Trucks for Construction | Tanzibaba',
  description: 'Hire dump trucks in Tanzania for transporting aggregates, earth and construction materials. Short-term and long-term rental with trained operators. Rent, buy or rent-to-own.',
  keywords: ['dump truck hire Tanzania', 'dump truck rental Dar es Salaam', 'tipper truck hire', 'hire dump truck', 'dump truck for construction', 'dump truck with operator', 'tipper truck rental', 'dump truck Tanzania'],
  alternates: { canonical: `${siteUrl}/equipment/dump-truck` },
  openGraph: {
    title: 'Dump Truck Hire Tanzania — Rent, Buy or Rent-to-Own',
    description: 'Hire dump trucks in Tanzania for transporting materials. Flexible rental, purchase and rent-to-own options.',
    url: `${siteUrl}/equipment/dump-truck`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const applications = [
  { icon: Truck, title: 'Material Transport', desc: 'Hauling aggregates, earth and construction materials across project sites.' },
  { icon: Route, title: 'Site Clearing', desc: 'Removing debris and excavated material from construction sites efficiently.' },
  { icon: Wrench, title: 'Road Construction', desc: 'Transporting base materials and asphalt for road projects.' },
  { icon: Globe, title: 'Bulk Delivery', desc: 'Delivering sand, gravel and crushed stone in large volumes.' },
];

const industries = [
  { icon: Building2, title: 'Commercial Construction', desc: 'Office buildings, retail centres and mixed-use developments.' },
  { icon: HardHat, title: 'Infrastructure', desc: 'Roads, bridges, drainage systems and public works.' },
  { icon: Route, title: 'Mining & Quarry', desc: 'Hauling ore, overburden and quarry products.' },
  { icon: Globe, title: 'Residential Development', desc: 'Material transport for housing estates and residential projects.' },
];

const benefits = [
  { icon: Wrench, title: 'Well-Maintained Fleet', desc: 'All dump trucks serviced regularly and inspected before every hire.' },
  { icon: Users, title: 'Trained Operators', desc: 'Experienced drivers available or self-drive options for qualified operators.' },
  { icon: Clock, title: 'Flexible Hire Periods', desc: 'Daily, weekly and monthly rental options tailored to your schedule.' },
  { icon: Truck, title: 'Nationwide Delivery', desc: 'Trucks delivered to your site across Tanzania ready to work.' },
];

const faqs = [
  { q: 'What dump truck capacities are available?', a: 'We offer a range from 10-tonne to 30-tonne trucks suitable for different load requirements and project sizes.' },
  { q: 'Do you provide drivers?', a: 'Yes, experienced drivers are available for all dump truck hires. Self-drive options are also available.' },
  { q: 'Can I rent dump trucks long-term?', a: 'Yes, we offer daily to monthly rental with discounted rates for long-term commitments.' },
  { q: 'How is delivery arranged?', a: 'Trucks are delivered directly to your construction site ready to work. Our logistics team coordinates transport and ensures safe offloading.' },
  { q: 'What about maintenance during hire?', a: 'We provide 24/7 breakdown support with on-site repairs or prompt replacement at no additional cost.' },
];

export default function DumpTruckPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Breadcrumbs */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/equipment" className="hover:text-brand-600 transition-colors">Equipment</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">Dump Trucks</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/equipment/dump-truck-hire-tanzania.webp" alt="Dump truck available for hire in Tanzania" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/50" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Truck className="w-4 h-4" /> Dump Trucks
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Dump Truck Hire<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Across Tanzania</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                High-capacity dump trucks for transporting aggregates, earth and construction materials. Rent, buy or rent-to-own with flexible terms.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/255716002790?text=Hi%20Tanzibaba!%20I%20am%20interested%20in%20hiring%20a%20dump%20truck.%20Please%20send%20me%20more%20information." target="_blank" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-600/30 text-sm">
                  Request Quote <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all border border-white/20 text-sm">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Dump Truck Applications</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Reliable haulage solutions for construction, mining and infrastructure projects.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map(a => (
                <div key={a.title} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                    <a.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{a.title}</h3>
                  <p className="text-sm text-gray-500">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Building2 className="w-4 h-4" /> Industries
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Industries We Serve</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Dump trucks for every sector — from residential developments to large-scale mining.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map(ind => (
                <div key={ind.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                    <ind.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{ind.title}</h3>
                  <p className="text-sm text-gray-500">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Shield className="w-4 h-4" /> Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Benefits of Hiring with Tanzibaba</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Reliable dump trucks, flexible terms and nationwide support.</p>
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

        {/* Gallery */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Equipment Gallery</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Our dump truck fleet — well-maintained and ready for your project.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative">
                <Image src="/images/equipment/dump-truck-hire-tanzania.webp" alt="Dump truck on construction site" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative">
                <Image src="/images/equipment/dump-truck-hire-tanzania.webp" alt="Dump truck transporting materials" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative">
                <Image src="/images/equipment/dump-truck-hire-tanzania.webp" alt="Dump truck with operator" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <CheckCircle className="w-4 h-4" /> FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-gray-500 text-sm md:text-base">Common questions about dump truck hire with Tanzibaba.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                    {faq.q}
                    <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform shrink-0" />
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)' }} />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">Ready to Hire a Dump Truck?</h2>
                <p className="text-gray-400 text-sm md:text-lg mb-8 max-w-2xl mx-auto">Get a quote within minutes. Our team will match you with the right dump truck for your project.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg text-base">
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all border border-white/20 text-base">
                    <Phone className="w-4 h-4" /> Call +255 716 002 790
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">More Equipment Options</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/equipment/excavator" className="inline-flex items-center gap-2 bg-gray-50 hover:bg-brand-50 text-gray-700 hover:text-brand-700 px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium transition-all">Excavators</Link>
              <Link href="/equipment/bulldozer" className="inline-flex items-center gap-2 bg-gray-50 hover:bg-brand-50 text-gray-700 hover:text-brand-700 px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium transition-all">Bulldozers</Link>
              <Link href="/equipment/concrete-pump" className="inline-flex items-center gap-2 bg-gray-50 hover:bg-brand-50 text-gray-700 hover:text-brand-700 px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium transition-all">Concrete Pumps</Link>
              <Link href="/equipment/mobile-crane" className="inline-flex items-center gap-2 bg-gray-50 hover:bg-brand-50 text-gray-700 hover:text-brand-700 px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium transition-all">Mobile Cranes</Link>
              <Link href="/equipment/wheel-loader" className="inline-flex items-center gap-2 bg-gray-50 hover:bg-brand-50 text-gray-700 hover:text-brand-700 px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium transition-all">Wheel Loaders</Link>
              <Link href="/equipment" className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-xl border border-brand-200 text-sm font-medium transition-all hover:bg-brand-100">View All Equipment</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}