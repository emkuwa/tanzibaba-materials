import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Zap, CheckCircle, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Ready-Mix Concrete Ubungo | Premium Supply | Tanzibaba',
  description: 'Ready-mix concrete delivery in Ubungo district. Serving Kimara, Mbezi, Gongo la Mboto & more. Premium concrete with washed sand technology.',
  keywords: ['ready mix concrete ubungo', 'concrete kimara', 'concrete mbezi'],
  alternates: { canonical: `${siteUrl}/services/ready-mix-concrete-ubungo` },
  openGraph: {
    title: 'Ready-Mix Concrete Ubungo | Premium Supply | Tanzibaba',
    description: 'Ready-mix concrete delivery in Ubungo district. Serving Kimara, Mbezi, Gongo la Mboto & more.',
    url: `${siteUrl}/services/ready-mix-concrete-ubungo`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ready-Mix Concrete Supply Ubungo',
  provider: { '@type': 'LocalBusiness', name: 'Tanzibaba' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Ubungo District, Dar es Salaam' },
  description: 'Premium ready-mix concrete supply in Ubungo district. Serving Kimara, Mbezi, Gongo la Mboto & more.',
};

export default function ReadyMixConcreteUbungo() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1600&q=80" alt="Ready-mix concrete delivery Ubungo" className="w-full h-full object-cover" style={{ objectPosition: '50% 30%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Truck className="w-4 h-4" /> Ready-Mix Concrete Ubungo
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Premium Ready-Mix Concrete{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Delivery in Ubungo District</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Tanzibaba delivers premium ready-mix concrete throughout Ubungo district — covering Kimara, Mbezi Luis, Mbezi Juu, Gongo la Mboto, Saranga, Kwembe, and Msigani. Our Ubungo-area production location ensures quick delivery times and fresher concrete for your project. Choose from the full range of C10 to C50 grades with our signature washed sand quality.
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
          <Image src="/images/commercial-building.jpg" alt="Ready-mix concrete delivery in Ubungo — premium concrete supply for local construction projects" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" loading="lazy" />
        </div>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-heading text-center mb-4">Concrete Delivery Areas in Ubungo</h2>
            <p className="section-sub text-center mb-10">Fast, reliable concrete delivery to every corner of Ubungo district.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                'Ubungo Makati', 'Kimara', 'Mbezi Luis', 'Mbezi Juu', 'Gongo la Mboto',
                'Saranga', 'Kwembe', 'Msigani', 'Ubungo Kisiwani',
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
            <h2 className="section-heading text-center mb-4">Why Choose Tanzibaba for Ubungo Concrete Delivery?</h2>
            <p className="section-sub text-center mb-10">Local expertise meets premium quality.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-600" /> Local Production in Ubungo</h3>
                <p className="text-sm text-gray-600">Our production location serving the Ubungo corridor means mixer trucks travel shorter distances to reach your site. Concrete arrives fresher, within its working life, and at a lower transport cost.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-600" /> Full Grade Range Available</h3>
                <p className="text-sm text-gray-600">From C20 for residential foundations in Kimara to C30 and C35 for commercial buildings along the Mbezi corridor — we supply every grade you need.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-600" /> Washed Sand Quality</h3>
                <p className="text-sm text-gray-600">All concrete from Tanzibaba uses washed sand — free from silt, clay, and organic impurities. The result is stronger, more durable concrete that performs better in structural applications.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-600" /> Transparent Pricing</h3>
                <p className="text-sm text-gray-600">No hidden fees. Our instant quote tool shows you the full cost breakdown — concrete, delivery, pump if needed, and VAT. What you see is what you pay.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Concrete Grades for Ubungo Projects</h2>
            <p className="section-sub text-center mb-10">Residential, commercial, or industrial — we have the right mix.</p>
            <div className="space-y-3">
              {[
                { grade: 'C25', desc: 'The standard choice for house foundations, columns, beams, and driveways across Ubungo residential areas like Kimara and Mbezi.' },
                { grade: 'C30', desc: 'Ideal for multi-storey apartment buildings and commercial developments along the Morogoro Road corridor and Mbezi business areas.' },
                { grade: 'C35 – C40', desc: 'Heavy-duty concrete for industrial facilities, warehouses, and engineered structures in Kwembe and Saranga industrial zones.' },
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
            <h2 className="section-heading text-center mb-4">Ordering Concrete in Ubungo</h2>
            <p className="section-sub text-center mb-10">Simple, fast, and transparent ordering process.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: '1', title: 'Use Our Quick Price Tool', desc: 'Enter your project details — grade, volume, location in Ubungo, and delivery preferences — for an instant estimate.' },
                { step: '2', title: 'Receive Your Quote', desc: 'Get a detailed price breakdown with concrete cost, delivery fee, pump charges, and 18% VAT included.' },
                { step: '3', title: 'Schedule Delivery', desc: 'Confirm your order and pick a delivery window. We recommend 24-48 hours advance notice for standard Ubungo deliveries.' },
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
            <div className="text-center mt-8">
              <p className="text-sm text-gray-600">Need a concrete pump for your Ubungo project? We offer pump rental for multi-storey and difficult-access sites.</p>
              <Link href="/services/concrete-pump-rental-dar-es-salaam" className="text-sm text-brand-600 font-semibold inline-block mt-2 hover:underline">Learn about concrete pump rental →</Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-brand-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Order Ready-Mix Concrete in Ubungo Today</h2>
            <p className="text-lg text-brand-100 mb-8">Get an instant online quote or chat with our team on WhatsApp.</p>
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
