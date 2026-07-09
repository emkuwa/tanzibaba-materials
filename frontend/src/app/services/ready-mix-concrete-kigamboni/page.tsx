import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Zap, CheckCircle, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Ready-Mix Concrete Kigamboni | Premium Supply | Tanzibaba',
  description: 'Ready-mix concrete supply in Kigamboni district. Serving Kigamboni, Vijibweni, Somangila, Tungi & more. Quality concrete, fast delivery.',
  keywords: ['ready mix concrete kigamboni', 'concrete kigamboni', 'concrete vijibweni'],
  alternates: { canonical: `${siteUrl}/ready-mix-concrete-kigamboni` },
  openGraph: {
    title: 'Ready-Mix Concrete Kigamboni | Premium Supply | Tanzibaba',
    description: 'Ready-mix concrete supply in Kigamboni district. Serving Kigamboni, Vijibweni, Somangila, Tungi & more.',
    url: `${siteUrl}/ready-mix-concrete-kigamboni`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ready-Mix Concrete Supply Kigamboni',
  provider: { '@type': 'LocalBusiness', name: 'Tanzibaba' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Kigamboni District, Dar es Salaam' },
  description: 'Premium ready-mix concrete supply in Kigamboni district. Serving Kigamboni, Vijibweni, Somangila, Tungi & more.',
};

export default function ReadyMixConcreteKigamboni() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80" alt="Ready-mix concrete delivery Kigamboni" className="w-full h-full object-cover" style={{ objectPosition: '50% 30%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Truck className="w-4 h-4" /> Ready-Mix Concrete Kigamboni
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Premium Ready-Mix Concrete{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Supply in Kigamboni District</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Tanzibaba supplies premium ready-mix concrete across Kigamboni district — including Kigamboni town, Vijibweni, Somangila, Tungi, Kisarawe II, and Mjimwema. As one of Dar es Salaam&apos;s fastest-growing districts, Kigamboni deserves a concrete supplier that can keep pace with its development. Our production capacity and logistics network ensure fresh, high-quality concrete delivered on time.
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
          <Image src="/images/commercial-building.jpg" alt="Ready-mix concrete delivery in Kigamboni — premium concrete supply for local construction projects" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" loading="lazy" />
        </div>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-heading text-center mb-4">Concrete Delivery Areas in Kigamboni</h2>
            <p className="section-sub text-center mb-10">From the Kigamboni peninsula to the southern suburbs, we deliver everywhere.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                'Kigamboni', 'Vijibweni', 'Somangila', 'Tungi', 'Kisarawe II', 'Mjimwema',
              ].map((area) => (
                <div key={area} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <MapPin className="w-5 h-5 text-brand-600 shrink-0" />
                  <span className="text-sm font-medium text-gray-800">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Why Choose Tanzibaba for Kigamboni Concrete?</h2>
            <p className="section-sub text-center mb-10">The right partner for a growing district.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Dedicated Logistics for Kigamboni</h3>
                  <p className="text-sm text-gray-600">We understand the unique logistics of delivering to Kigamboni, including ferry crossing coordination and route planning. Our team ensures your concrete arrives fresh and on time, regardless of where your site is located on the peninsula.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Full Range of Grades</h3>
                  <p className="text-sm text-gray-600">Residential or commercial — we deliver C10 through C50. C25 is our most popular grade for Kigamboni home construction, while C30 and C35 are ideal for the district&apos;s growing number of apartment and commercial developments.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Washed Sand Technology</h3>
                  <p className="text-sm text-gray-600">Our concrete uses washed sand for cleaner aggregate and stronger bonds. This means higher compressive strength, better durability, and a superior finish for your Kigamboni project.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Concrete Pump Available</h3>
                  <p className="text-sm text-gray-600">Building a multi-storey structure in Kigamboni? Our concrete pump service makes upper-floor pours fast, safe, and efficient — ideal for the district&apos;s rapidly growing skyline.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Concrete Grades for Kigamboni</h2>
            <p className="section-sub text-center mb-10">Every project has unique needs. We have the right grade.</p>
            <div className="space-y-3">
              {[
                { grade: 'C25', desc: 'House foundations, columns, beams, and driveways — the standard choice for residential construction across Kigamboni, Vijibweni, and Tungi.' },
                { grade: 'C30', desc: 'Multi-storey apartment buildings — ideal for the growing number of residential complexes in Kigamboni town and along the beachfront.' },
                { grade: 'C35 – C40', desc: 'Commercial and heavy-duty structures — for hotels, resorts, and commercial buildings in Kigamboni&apos;s developing areas.' },
              ].map((item) => (
                <div key={item.grade} className="bg-gray-50 rounded-xl border border-gray-200 p-5 flex items-start gap-4">
                  <span className="text-xl font-extrabold text-brand-600 shrink-0">{item.grade}</span>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Ordering Concrete in Kigamboni</h2>
            <p className="section-sub text-center mb-10">Simple online ordering with instant pricing.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: '1', title: 'Tell Us Your Requirements', desc: 'Concrete grade, volume, and delivery location in Kigamboni — fill in the details online in under 2 minutes.' },
                { step: '2', title: 'Get Your Instant Quote', desc: 'Receive a detailed price breakdown with concrete, delivery, pump, and VAT costs. No hidden charges.' },
                { step: '3', title: 'Schedule & Receive', desc: 'Confirm your delivery date and time. Standard orders need 24-48 hours notice. We deliver fresh concrete right to your site.' },
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Building in Kigamboni? Order Concrete Today</h2>
            <p className="text-lg text-brand-100 mb-8">Get your instant online quote or message us on WhatsApp.</p>
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
            <h2 className="section-heading text-center mb-4">Explore Other Service Areas</h2>
            <p className="section-sub text-center mb-10">We deliver premium concrete across all Dar es Salaam districts.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Link href="/services/ready-mix-concrete-kinondoni" className="card text-center hover:border-brand-200 transition-all">
                <MapPin className="w-6 h-6 text-brand-600 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900">Kinondoni</h3>
                <p className="text-xs text-gray-500">Magomeni, Mikocheni, Sinza</p>
              </Link>
              <Link href="/services/ready-mix-concrete-ubungo" className="card text-center hover:border-brand-200 transition-all">
                <MapPin className="w-6 h-6 text-brand-600 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900">Ubungo</h3>
                <p className="text-xs text-gray-500">Kimara, Mbezi, Gongo la Mboto</p>
              </Link>
              <Link href="/services/ready-mix-concrete-ilala" className="card text-center hover:border-brand-200 transition-all">
                <MapPin className="w-6 h-6 text-brand-600 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900">Ilala</h3>
                <p className="text-xs text-gray-500">Kariakoo, Upanga, Tabata</p>
              </Link>
              <Link href="/services/ready-mix-concrete-temeke" className="card text-center hover:border-brand-200 transition-all">
                <MapPin className="w-6 h-6 text-brand-600 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900">Temeke</h3>
                <p className="text-xs text-gray-500">Mbagala, Kurasini, Mtoni</p>
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
