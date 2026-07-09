import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Zap, CheckCircle, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Ready-Mix Concrete Temeke | Premium Supply | Tanzibaba',
  description: 'Ready-mix concrete delivery in Temeke district. Serving Mbagala, Charambe, Kurasini, Mtoni & more. Premium concrete for all projects.',
  keywords: ['ready mix concrete temeke', 'concrete mbagala', 'concrete kurasini'],
  alternates: { canonical: `${siteUrl}/ready-mix-concrete-temeke` },
  openGraph: {
    title: 'Ready-Mix Concrete Temeke | Premium Supply | Tanzibaba',
    description: 'Ready-mix concrete delivery in Temeke district. Serving Mbagala, Charambe, Kurasini, Mtoni & more.',
    url: `${siteUrl}/ready-mix-concrete-temeke`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ready-Mix Concrete Supply Temeke',
  provider: { '@type': 'LocalBusiness', name: 'Tanzibaba' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Temeke District, Dar es Salaam' },
  description: 'Premium ready-mix concrete supply in Temeke district. Serving Mbagala, Charambe, Kurasini, Mtoni & more.',
};

export default function ReadyMixConcreteTemeke() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1600&q=80" alt="Ready-mix concrete delivery Temeke" className="w-full h-full object-cover" style={{ objectPosition: '50% 30%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Truck className="w-4 h-4" /> Ready-Mix Concrete Temeke
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Premium Ready-Mix Concrete{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Delivery in Temeke District</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Tanzibaba delivers premium ready-mix concrete throughout Temeke district — serving Mbagala, Charambe, Kurasini, Mtoni, Tandika, Chamazi, and beyond. Our production network ensures fast delivery times and fresh concrete for every project, whether residential, commercial, or industrial.
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
          <Image src="/images/new/commercial-building.webp" alt="Ready-mix concrete delivery in Temeke — premium concrete supply for local construction projects" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" loading="lazy" />
        </div>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-heading text-center mb-4">Concrete Delivery Areas in Temeke</h2>
            <p className="section-sub text-center mb-10">Fast, reliable concrete delivery to every corner of Temeke district.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                'Temeke', 'Mbagala', 'Charambe', 'Azimio', 'Chamazi',
                'Kurasini', 'Mtoni', 'Tandika', 'Kisarawe', 'Makangarawe',
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
            <h2 className="section-heading text-center mb-4">Why Choose Tanzibaba for Concrete in Temeke?</h2>
            <p className="section-sub text-center mb-10">Quality concrete delivered reliably, every time.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-600" /> Grade C10 to C50 Available</h3>
                <p className="text-sm text-gray-600">Full range of concrete grades for every application. From C20 for residential slabs in Mbagala to C35 for industrial floors in Kurasini — we have the right mix.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-600" /> Washed Sand Quality</h3>
                <p className="text-sm text-gray-600">Our concrete is produced using washed sand that is free from silt and clay. This means stronger bonds, higher compressive strength, and more durable concrete for your Temeke project.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-600" /> Reliable Delivery Logistics</h3>
                <p className="text-sm text-gray-600">We understand Temeke&apos;s road network and traffic patterns. Our experienced drivers deliver on time, every time — ensuring your concrete is poured within its working life.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-600" /> Transparent Pricing</h3>
                <p className="text-sm text-gray-600">Instant online quotes with full cost breakdown — concrete, delivery, pump charges, and VAT. No hidden fees, no surprises.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Concrete Grades for Temeke Projects</h2>
            <p className="section-sub text-center mb-10">From residential homes to industrial facilities.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { grade: 'C20 – C25', desc: 'Standard residential concrete for house foundations, slabs, columns, and driveways — ideal for Mbagala, Tandika, and Azimio residential areas.' },
                { grade: 'C30', desc: 'Multi-storey and commercial projects — suitable for apartment buildings and commercial developments in Kurasini and along the Nelson Mandela Road corridor.' },
                { grade: 'C35 – C40', desc: 'Heavy-duty and industrial concrete — perfect for warehouses, factories, and industrial facilities in the Kurasini industrial zone.' },
              ].map((item) => (
                <div key={item.grade} className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <span className="text-xl font-extrabold text-brand-600">{item.grade}</span>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">How Ordering Works</h2>
            <p className="section-sub text-center mb-10">Simple process, instant pricing, reliable delivery.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Select Your Needs', desc: 'Choose grade, volume, and Temeke delivery location using our online Quick Price tool.' },
                { step: '2', title: 'Get Instant Quote', desc: 'Receive a detailed price estimate with full transparency — no middleman markups.' },
                { step: '3', title: 'Confirm Order', desc: 'Schedule your delivery date and time. Standard orders need 24-48 hours notice.' },
                { step: '4', title: 'Concrete Arrives', desc: 'Fresh concrete delivered in modern mixer trucks. Pump rental available for difficult access.' },
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Order Ready-Mix Concrete in Temeke Today</h2>
            <p className="text-lg text-brand-100 mb-8">Get your instant online quote or talk to our team on WhatsApp.</p>
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
              <Link href="/services/ready-mix-concrete-kigamboni" className="card text-center hover:border-brand-200 transition-all">
                <MapPin className="w-6 h-6 text-brand-600 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900">Kigamboni</h3>
                <p className="text-xs text-gray-500">Kigamboni, Vijibweni, Tungi</p>
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
