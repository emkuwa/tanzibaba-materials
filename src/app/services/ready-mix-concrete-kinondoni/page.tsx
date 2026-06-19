import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Zap, CheckCircle, MapPin, MessageCircle, ArrowRight, Shield, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Ready-Mix Concrete Kinondoni | Premium Supply | Tanzibaba',
  description: 'Ready-mix concrete supply in Kinondoni district. Fast delivery to Magomeni, Mikocheni, Sinza, Kawe & more. Premium quality, instant quotes.',
  keywords: ['ready mix concrete kinondoni', 'concrete delivery kinondoni', 'concrete magomeni'],
  alternates: { canonical: `${siteUrl}/services/ready-mix-concrete-kinondoni` },
  openGraph: {
    title: 'Ready-Mix Concrete Kinondoni | Premium Supply | Tanzibaba',
    description: 'Ready-mix concrete supply in Kinondoni district. Fast delivery to Magomeni, Mikocheni, Sinza, Kawe & more.',
    url: `${siteUrl}/services/ready-mix-concrete-kinondoni`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ready-Mix Concrete Supply Kinondoni',
  provider: { '@type': 'LocalBusiness', name: 'Tanzibaba' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Kinondoni District, Dar es Salaam' },
  description: 'Premium ready-mix concrete supply in Kinondoni district. Fast delivery to Magomeni, Mikocheni, Sinza, Kawe & more.',
};

export default function ReadyMixConcreteKinondoni() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80" alt="Ready-mix concrete delivery Kinondoni" className="w-full h-full object-cover" style={{ objectPosition: '50% 30%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Truck className="w-4 h-4" /> Ready-Mix Concrete Kinondoni
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Ready-Mix Concrete Supply{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">in Kinondoni District</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Tanzibaba supplies premium ready-mix concrete across Kinondoni district — including Magomeni, Mikocheni, Sinza, Kawe, Kunduchi, Tegeta, and beyond. With production facilities strategically located near Kinondoni, we offer fast delivery, competitive pricing, and the same washed sand quality that makes Tanzibaba the preferred concrete supplier in Dar es Salaam.
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
          <Image src="/images/commercial-building.jpg" alt="Ready-mix concrete delivery in Kinondoni — premium concrete supply for local construction projects" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" loading="lazy" />
        </div>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-heading text-center mb-4">Concrete Delivery to All Kinondoni Areas</h2>
            <p className="section-sub text-center mb-10">We deliver premium ready-mix concrete to every neighbourhood in Kinondoni district. Our local production facilities ensure fast turnaround and fresher concrete.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                'Magomeni', 'Mwananyamala', 'Tandale', 'Manzese', 'Mikocheni', 'Kawe',
                'Kunduchi', 'Tegeta', 'Sinza', 'Kijitonyama', 'Mabibo', 'Kinondoni MSD',
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
            <h2 className="section-heading text-center mb-4">Why Choose Tanzibaba for Concrete in Kinondoni?</h2>
            <p className="section-sub text-center mb-10">Local supply, national quality standards.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Locally Based Production</h3>
                  <p className="text-sm text-gray-600">Our Kinondoni-area production location means shorter travel distances for mixer trucks. This translates to fresher concrete, faster deliveries, and lower transport costs — savings we pass on to you.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">C10 to C50 Grades Available</h3>
                  <p className="text-sm text-gray-600">Whatever your project requires, from C10 blinding concrete to C50 high-performance structural mixes, we deliver it to your Kinondoni site. Our quality control processes ensure every load meets specification.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Washed Sand Quality</h3>
                  <p className="text-sm text-gray-600">All concrete produced for Kinondoni deliveries uses our signature washed sand technology. The result is stronger, more durable concrete with better workability and a higher-quality finish.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Concrete Grades for Every Kinondoni Project</h2>
            <p className="section-sub text-center mb-10">From residential homes in Sinza to commercial buildings in Mikocheni, we have the right grade.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { grade: 'C20', desc: 'Residential slabs, small foundations, patios — Popular for home extensions and new builds in Kinondoni residential areas.' },
                { grade: 'C25', desc: 'House foundations, columns, beams, driveways — The standard choice for residential construction across Kinondoni.' },
                { grade: 'C30', desc: 'Multi-storey apartments, commercial buildings — Ideal for Mikocheni and Kawe apartment developments.' },
                { grade: 'C35', desc: 'Heavy-duty structures, industrial floors — For commercial projects in Mwananyamala and Manzese.' },
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
            <h2 className="section-heading text-center mb-4">How Concrete Delivery Works in Kinondoni</h2>
            <p className="section-sub text-center mb-10">Getting concrete delivered to your Kinondoni project site is simple.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Select Your Grade & Volume', desc: 'Use our online Quick Price tool to select the concrete grade and quantity you need for your Kinondoni project.' },
                { step: '2', title: 'Get Your Price Instantly', desc: 'Receive an immediate price estimate with full cost breakdown — concrete, delivery, pump, and VAT included.' },
                { step: '3', title: 'Confirm Your Delivery Schedule', desc: 'Choose your delivery date and time window. We recommend ordering 24-48 hours ahead for standard pours.' },
                { step: '4', title: 'Receive Your Concrete', desc: 'Our mixer trucks arrive at your Kinondoni site at the scheduled time. We also offer concrete pump services for difficult-access projects.' },
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Need Ready-Mix Concrete Delivered in Kinondoni?</h2>
            <p className="text-lg text-brand-100 mb-8">Get your instant online quote or talk to us on WhatsApp. Quick response, reliable delivery.</p>
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
            <h2 className="section-heading text-center mb-4">Other Areas We Serve</h2>
            <p className="section-sub text-center mb-10">Tanzibaba delivers premium concrete across all of Dar es Salaam.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Link href="/services/ready-mix-concrete-ubungo" className="card text-center hover:border-brand-200 transition-all">
                <MapPin className="w-6 h-6 text-brand-600 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900">Ubungo</h3>
                <p className="text-xs text-gray-500">Kimara, Mbezi, Gongo la Mboto</p>
              </Link>
              <Link href="/services/ready-mix-concrete-ilala" className="card text-center hover:border-brand-200 transition-all">
                <MapPin className="w-6 h-6 text-brand-600 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900">Ilala</h3>
                <p className="text-xs text-gray-500">Kariakoo, Upanga, Buguruni</p>
              </Link>
              <Link href="/services/ready-mix-concrete-temeke" className="card text-center hover:border-brand-200 transition-all">
                <MapPin className="w-6 h-6 text-brand-600 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900">Temeke</h3>
                <p className="text-xs text-gray-500">Mbagala, Kurasini, Mtoni</p>
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
