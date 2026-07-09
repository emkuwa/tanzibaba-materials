import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, ArrowRight, CheckCircle, HardHat, Package, Users, Phone, DollarSign, BarChart3, Globe, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'List Construction Equipment for Sale or Rent | Tanzania Equipment Marketplace',
  description: 'Equipment owners and dealers can list construction equipment for sale or rent on the Tanzibaba marketplace. Reach contractors and developers across Tanzania.',
  keywords: ['list construction equipment Tanzania', 'sell equipment online Tanzania', 'equipment marketplace Tanzania', 'list machinery for rent', 'equipment dealer Tanzania', 'advertise construction equipment', 'equipment listing platform'],
  alternates: { canonical: `${siteUrl}/equipment/list-equipment` },
  openGraph: {
    title: 'List Construction Equipment for Sale or Rent | Tanzania Equipment Marketplace',
    description: 'Equipment owners and dealers can list equipment for sale or rent. Reach contractors across Tanzania.',
    url: `${siteUrl}/equipment/list-equipment`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const benefits = [
  { icon: Users, title: 'Reach Ready Buyers', desc: 'Connect with contractors, developers and construction companies actively looking for equipment.' },
  { icon: DollarSign, title: 'Generate Revenue', desc: 'Turn idle equipment into income by listing for rent. Sell equipment to a targeted audience.' },
  { icon: BarChart3, title: 'Market Exposure', desc: 'Your equipment listings featured across Tanzibaba\'s platform reaching thousands of monthly visitors.' },
  { icon: Globe, title: 'Nationwide Reach', desc: 'Listings visible to buyers and renters across Dar es Salaam, Zanzibar, Dodoma, Arusha and all Tanzania.' },
];

const steps = [
  { icon: Users, number: '1', title: 'Create an Account', desc: 'Sign up as an equipment owner or dealer on the Tanzibaba platform.' },
  { icon: Package, number: '2', title: 'List Your Equipment', desc: 'Add equipment details, photos, pricing and availability for rent or sale.' },
  { icon: Phone, number: '3', title: 'Receive Inquiries', desc: 'Get notified when contractors and developers express interest in your equipment.' },
  { icon: CheckCircle, number: '4', title: 'Complete the Deal', desc: 'Connect with buyers or renters directly and complete the transaction on your terms.' },
];

const faqs = [
  { q: 'Who can list equipment on Tanzibaba?', a: 'Equipment owners, dealers, fleet managers and construction companies with equipment available for rent or sale can list on the Tanzibaba platform.' },
  { q: 'What types of equipment can I list?', a: 'You can list all types of construction equipment including excavators, bulldozers, wheel loaders, backhoe loaders, motor graders, dump trucks, mobile cranes, forklifts, concrete pump trucks, generators and any other construction-related machinery.' },
  { q: 'Is there a fee to list equipment?', a: 'Contact us for current listing fee structure. We offer competitive rates for equipment owners and dealers.' },
  { q: 'How do I receive inquiries?', a: 'When a potential buyer or renter is interested in your equipment, we connect them with you directly via the contact information you provide.' },
  { q: 'Can I list both for rent and for sale?', a: 'Yes, you can list equipment for rent, for sale, or both. You set the terms, pricing and availability for each listing.' },
  { q: 'How do I get started?', a: 'Contact us via WhatsApp or phone to register as an equipment owner. Our team will guide you through the listing process.' },
];

export default function ListEquipment() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image src="/images/new/aggregates.webp" alt="List construction equipment Tanzania" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-violet-600/20 border border-violet-500/30 text-violet-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Package className="w-4 h-4" /> List Equipment
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Sell or List Your<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Construction Equipment</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                Equipment owners and dealers can list construction equipment for sale or rent. Reach contractors and developers across Tanzania.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/255716002790?text=Hi%20Tanzibaba!%20I%20would%20like%20to%20list%20my%20construction%20equipment.%20Please%20send%20me%20information%20on%20how%20to%20get%20started." target="_blank" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-600/30 text-sm">
                  Start Listing <ArrowRight className="w-4 h-4" />
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Why List with Tanzibaba?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">The easiest way to connect your equipment with contractors and developers who need it.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(b => (
                <div key={b.title} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6 text-violet-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{b.title}</h3>
                  <p className="text-sm text-gray-500">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Users className="w-4 h-4" /> How It Works
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Get Started in 4 Simple Steps</h2>
              <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">Listing your equipment on the Tanzibaba network is quick and straightforward.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map(s => (
                <div key={s.title} className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <s.icon className="w-7 h-7 text-violet-600" />
                  </div>
                  <div className="w-7 h-7 bg-violet-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-bold -mt-1">{s.number}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                  <p className="text-xs text-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-violet-600 to-violet-700 rounded-3xl p-6 md:p-10 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)' }} />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Own Construction Equipment?</h3>
                <p className="text-violet-100 text-sm md:text-base mb-6 max-w-md mx-auto">Join the Tanzibaba Network and receive equipment hire requests from contractors and developers across Tanzania.</p>
                <Link href="/supplier/register" className="inline-flex items-center gap-2 bg-white text-violet-700 font-semibold px-6 md:px-8 py-3.5 rounded-xl hover:bg-violet-50 transition-all shadow-lg text-base">
                  Register Your Equipment <ArrowRight className="w-4 h-4" />
                </Link>
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
              <p className="text-gray-500 text-sm md:text-base">Common questions about listing equipment on the Tanzibaba marketplace.</p>
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
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4">Ready to List Your Equipment?</h2>
                <p className="text-gray-400 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">Join the Tanzibaba network and connect with contractors and developers across Tanzania.</p>
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                  <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all shadow-lg text-sm md:text-base">
                    Start Listing <ArrowRight className="w-4 h-4" />
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
