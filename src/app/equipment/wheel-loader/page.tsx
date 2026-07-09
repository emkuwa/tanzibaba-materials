import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, ArrowRight, CheckCircle, HardHat, Building2, Route, Globe, Wrench, Shield, Phone, MessageCircle, Clock, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Wheel Loader Hire Tanzania | Rent Loaders for Construction | Tanzibaba',
  description: 'Hire wheel loaders in Tanzania for loading, carrying and material handling. Short-term and long-term rental. Rent, buy or rent-to-own.',
  keywords: ['wheel loader hire Tanzania', 'loader rental Dar es Salaam', 'front end loader hire', 'wheel loader for construction'],
  alternates: { canonical: `${siteUrl}/equipment/wheel-loader` },
  openGraph: {
    title: 'Wheel Loader Hire Tanzania — Rent, Buy or Rent-to-Own',
    description: 'Hire wheel loaders in Tanzania for loading, carrying and material handling. Short-term and long-term rental. Rent, buy or rent-to-own.',
    url: `${siteUrl}/equipment/wheel-loader`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const applications = [
  { icon: Truck, title: 'Material Loading', desc: 'Efficient loading of aggregates, sand, gravel and other bulk materials into trucks and hoppers.' },
  { icon: Route, title: 'Stockpile Management', desc: 'Organising and managing material stockpiles on construction sites and quarries.' },
  { icon: Wrench, title: 'Site Cleanup', desc: 'Clearing and moving debris, spoils and excess material after construction activities.' },
  { icon: Globe, title: 'Truck Loading', desc: 'Fast and continuous loading of dump trucks and haulage vehicles for efficient site logistics.' },
];

const industries = [
  { icon: Building2, title: 'Commercial Construction', desc: 'Loading and material handling for commercial building projects and site development.' },
  { icon: HardHat, title: 'Infrastructure', desc: 'Road construction, bridge works and public infrastructure requiring bulk material movement.' },
  { icon: Route, title: 'Mining & Quarry', desc: 'Loading blasted rock, ore and overburden in mining and quarry operations.' },
  { icon: Globe, title: 'Agriculture', desc: 'Handling grain, feed, fertiliser and other agricultural bulk materials.' },
];

const benefits = [
  { icon: Wrench, title: 'Well-Maintained Fleet', desc: 'All wheel loaders serviced regularly and inspected before every hire.' },
  { icon: Users, title: 'Trained Operators', desc: 'Experienced operators available or self-drive options for certified operators.' },
  { icon: Clock, title: 'Flexible Hire Periods', desc: 'Daily, weekly and monthly rental options tailored to your project schedule.' },
  { icon: Truck, title: 'Nationwide Delivery', desc: 'Loaders delivered to your site via lowbed trailer across Tanzania.' },
];

const faqs = [
  { q: 'What wheel loader sizes are available?', a: 'We offer a range of wheel loaders from 2-tonne to 10-tonne capacity, suitable for light site work through to heavy quarry loading.' },
  { q: 'Do you provide operators?', a: 'Yes, trained operators are available with every wheel loader hire. Self-drive options are also available for certified operators.' },
  { q: 'Can I rent loaders long-term?', a: 'Yes, we offer flexible rental periods from daily to monthly and long-term with discounted rates.' },
  { q: 'How is delivery arranged?', a: 'Wheel loaders are delivered to your site via lowbed trailer. Our logistics team coordinates transport and ensures safe offloading.' },
  { q: 'What about maintenance?', a: 'We provide 24/7 support with on-site repairs or replacement machine at no additional cost.' },
];

export default function WheelLoaderPage() {
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
              <span className="text-gray-900 font-medium">Wheel Loaders</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/equipment/wheel-loader-hire-tanzania.webp" alt="Wheel loader available for hire in Tanzania" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/50" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Wrench className="w-4 h-4" /> Wheel Loaders
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Wheel Loader Hire<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Across Tanzania</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                Productive wheel loaders for loading, carrying and material handling operations. Rent, buy or rent-to-own.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/255716002790?text=Hi%20Tanzibaba!%20I%20am%20interested%20in%20hiring%20a%20wheel%20loader.%20Please%20send%20me%20more%20information." target="_blank" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-600/30 text-sm">
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Wheel Loader Applications</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Versatile loaders built for efficient material handling in any environment.</p>
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
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Wheel loaders for every sector — from construction to agriculture.</p>
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
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Reliable wheel loaders, flexible terms and nationwide support.</p>
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
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Our wheel loader fleet — well-maintained and ready for your project.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative">
                <Image src="/images/equipment/wheel-loader-hire-tanzania.webp" alt="Wheel loader on construction site" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative">
                <Image src="/images/equipment/wheel-loader-hire-tanzania.webp" alt="Wheel loader loading materials" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative">
                <Image src="/images/equipment/wheel-loader-hire-tanzania.webp" alt="Wheel loader with operator" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
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
              <p className="text-gray-500 text-sm md:text-base">Common questions about wheel loader hire with Tanzibaba.</p>
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
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">Ready to Hire a Wheel Loader?</h2>
                <p className="text-gray-400 text-sm md:text-lg mb-8 max-w-2xl mx-auto">Get a quote within minutes. Our team will match you with the right loader for your project.</p>
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
              <Link href="/equipment/dump-truck" className="inline-flex items-center gap-2 bg-gray-50 hover:bg-brand-50 text-gray-700 hover:text-brand-700 px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium transition-all">Dump Trucks</Link>
              <Link href="/equipment/concrete-pump" className="inline-flex items-center gap-2 bg-gray-50 hover:bg-brand-50 text-gray-700 hover:text-brand-700 px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium transition-all">Concrete Pumps</Link>
              <Link href="/equipment/mobile-crane" className="inline-flex items-center gap-2 bg-gray-50 hover:bg-brand-50 text-gray-700 hover:text-brand-700 px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium transition-all">Mobile Cranes</Link>
              <Link href="/equipment" className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-xl border border-brand-200 text-sm font-medium transition-all hover:bg-brand-100">View All Equipment</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
