import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, ArrowRight, CheckCircle, HardHat, Package, Phone, Shield, RefreshCw, DollarSign, ClipboardList, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Rent-to-Own Construction Equipment Tanzania | Flexible Ownership',
  description: 'Rent construction equipment with the option to buy in Tanzania. Flexible rent-to-own plans through approved partners for excavators, loaders, cranes and more.',
  keywords: ['rent to own equipment Tanzania', 'lease to own construction equipment', 'equipment financing Tanzania', 'rent to own excavator', 'hire purchase construction equipment', 'equipment ownership plans Tanzania'],
  alternates: { canonical: `${siteUrl}/equipment/rent-to-own` },
  openGraph: {
    title: 'Rent-to-Own Construction Equipment Tanzania — Flexible Ownership Plans',
    description: 'Rent construction equipment with the option to buy through flexible rent-to-own plans in Tanzania.',
    url: `${siteUrl}/equipment/rent-to-own`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const steps = [
  { icon: ClipboardList, title: 'Choose Your Equipment', desc: 'Select the equipment you need from our rental categories — excavators, loaders, cranes and more.' },
  { icon: RefreshCw, title: 'Rent with Option to Buy', desc: 'Start with a flexible rental agreement. A portion of your rental payments goes toward future purchase.' },
  { icon: DollarSign, title: 'Own at Your Pace', desc: 'Exercise the purchase option anytime during or after the rental term and own the equipment.' },
];

const faqs = [
  { q: 'How does rent-to-own work?', a: 'Rent-to-own allows you to rent construction equipment with the option to purchase it at the end of or during the rental term. A portion of each rental payment is credited toward the eventual purchase price, making it a flexible path to ownership.' },
  { q: 'What equipment is available on rent-to-own?', a: 'Most of our equipment categories are available for rent-to-own including excavators, wheel loaders, backhoe loaders, forklifts, generators, concrete pump trucks and more. Availability depends on current stock and partner programs.' },
  { q: 'Are there credit requirements?', a: 'Rent-to-own plans are available through approved partners. Requirements vary by partner and equipment value. Contact us to discuss your options and we\'ll match you with a suitable plan.' },
  { q: 'Can I return the equipment if I change my mind?', a: 'Yes, rent-to-own agreements include standard rental terms. If you decide not to purchase, you can return the equipment at the end of the rental period without obligation to buy.' },
  { q: 'How do I apply for a rent-to-own plan?', a: 'Contact us via WhatsApp or phone with the equipment you need. We\'ll connect you with our approved partners who will guide you through the application and approval process.' },
];

export default function RentToOwn() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image src="/images/new/commercial-building.webp" alt="Rent to own construction equipment Tanzania" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <RefreshCw className="w-4 h-4" /> Rent-to-Own
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Rent-to-Own<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Construction Equipment</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                Flexible equipment ownership through approved partners. Rent with the option to buy at your own pace.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/255716002790?text=Hi%20Tanzibaba!%20I%20am%20interested%20in%20rent-to-own%20equipment.%20Please%20send%20me%20more%20information." target="_blank" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-600/30 text-sm">
                  Get Started <ArrowRight className="w-4 h-4" />
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">How Rent-to-Own Works</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">A simple path to equipment ownership with the flexibility of rental.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((s, i) => (
                <div key={s.title} className="text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <s.icon className="w-8 h-8 text-brand-600" />
                  </div>
                  <div className="w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold -mt-2">Step {i + 1}</div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{s.title}</h3>
                  <p className="text-sm text-gray-500 max-w-xs mx-auto">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Shield className="w-4 h-4" /> Why Choose Rent-to-Own?
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Benefits of Rent-to-Own</h2>
              <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">Flexible equipment acquisition that works for your business cash flow.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Preserve Working Capital', desc: 'No large upfront purchase. Spread equipment costs over manageable rental periods.' },
                { title: 'Build Equity Over Time', desc: 'A portion of each rental payment is credited toward the eventual purchase of the equipment.' },
                { title: 'Test Before You Buy', desc: 'Use the equipment on your projects before committing to full ownership.' },
                { title: 'Flexible Terms', desc: 'Choose when to exercise the purchase option — during or after the rental term.' },
                { title: 'Tax Benefits', desc: 'Rental payments are typically tax-deductible as operating expenses.' },
                { title: 'Equipment Upgrades', desc: 'Upgrade to newer models during the rental period if your project requirements change.' },
              ].map(b => (
                <div key={b.title} className="bg-white rounded-2xl border border-gray-200 p-6 flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{b.title}</h3>
                    <p className="text-sm text-gray-500">{b.desc}</p>
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
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interested in Rent-to-Own?</h3>
                <p className="text-sm text-gray-500 mb-6 max-w-md">Contact us to discuss rent-to-own options for the equipment you need.</p>
                <a href="https://wa.me/255716002790?text=Hi%20Tanzibaba!%20I%20am%20interested%20in%20rent-to-own%20equipment.%20Please%20send%20me%20more%20information." target="_blank" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg text-base">
                  <MessageCircle className="w-5 h-5" /> Send Inquiry
                </a>
                <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> +255 716 002 790</span>
                  <span>or</span>
                  <span className="flex items-center gap-1"><ClipboardList className="w-4 h-4" /> Flexible Plans Available</span>
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
              <p className="text-gray-500 text-sm md:text-base">Common questions about rent-to-own equipment plans.</p>
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
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4">Start Your Journey to Ownership</h2>
                <p className="text-gray-400 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">Flexible rent-to-own plans tailored to your budget and project needs.</p>
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                  <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all shadow-lg text-sm md:text-base">
                    Get Started <ArrowRight className="w-4 h-4" />
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
