import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Zap, CheckCircle, MapPin, MessageCircle, ArrowRight, Building, HardHat } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'Apartment Concrete Supply Dar es Salaam | Multi-Storey | Tanzibaba',
  description: 'Specialized concrete supply for apartment buildings in Dar es Salaam. Multi-storey construction expertise. Premium strength grades.',
  keywords: ['apartment concrete supply', 'apartment construction concrete'],
  alternates: { canonical: `${siteUrl}/services/apartment-concrete-supply-dar-es-salaam` },
  openGraph: {
    title: 'Apartment Concrete Supply Dar es Salaam | Multi-Storey | Tanzibaba',
    description: 'Specialized concrete supply for apartment buildings in Dar es Salaam. Multi-storey construction expertise.',
    url: `${siteUrl}/services/apartment-concrete-supply-dar-es-salaam`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Apartment Concrete Supply Dar es Salaam',
  provider: { '@type': 'LocalBusiness', name: 'Tanzibaba' },
  areaServed: { '@type': 'City', name: 'Dar es Salaam' },
  description: 'Specialized concrete supply for apartment buildings in Dar es Salaam. Multi-storey construction expertise. Premium strength grades.',
};

export default function ApartmentConcreteSupplyDarEsSalaam() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80" alt="Apartment concrete supply Dar es Salaam" className="w-full h-full object-cover" style={{ objectPosition: '50% 30%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Building className="w-4 h-4" /> Apartment Concrete Supply
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Specialized Concrete Supply for Apartment Buildings{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">in Dar es Salaam</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Dar es Salaam is experiencing a boom in apartment construction — from Mikocheni and Kawe to Mbezi, Kijitonyama, and Kigamboni. Tanzibaba is the concrete supplier of choice for developers building multi-storey apartment blocks. We deliver the right grades, consistent quality, and pump-ready mixes that make apartment construction faster and more reliable.
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

        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image src="/images/apartment-development.jpg" alt="Large apartment development project using premium ready-mix concrete supply in Dar es Salaam" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" priority />
        </div>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-heading text-center mb-4">Why Apartment Developers Choose Tanzibaba</h2>
            <p className="section-sub text-center mb-10">Building apartments requires a concrete supplier who understands multi-storey construction. Here is why developers trust us.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="card text-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><HardHat className="w-7 h-7 text-brand-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">Structural Grade Expertise</h3>
                <p className="text-sm text-gray-600">We specialise in C30, C35, and C40 grades that meet the structural requirements of multi-storey apartment buildings — columns, shear walls, suspended slabs, and stair cores.</p>
              </div>
              <div className="card text-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Truck className="w-7 h-7 text-brand-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">Pump-Ready Mixes</h3>
                <p className="text-sm text-gray-600">All our apartment-grade concrete is formulated for pumpability. Combined with our <Link href="/services/concrete-pump-rental-dar-es-salaam" className="text-brand-600 hover:underline">concrete pump rental service</Link>, we make upper-floor placement fast and efficient.</p>
              </div>
              <div className="card text-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-7 h-7 text-brand-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">Consistent Quality</h3>
                <p className="text-sm text-gray-600">With computer-controlled batching and washed sand technology, every truckload of concrete arriving at your apartment site has the same consistent mix — critical for structural integrity.</p>
              </div>
              <div className="card text-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Zap className="w-7 h-7 text-brand-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">Volume Capacity</h3>
                <p className="text-sm text-gray-600">Apartment projects need large volumes delivered on tight schedules. Our 16+ plants and modern mixer fleet ensure uninterrupted supply for continuous pours.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Concrete Grades for Apartment Construction</h2>
            <p className="section-sub text-center mb-10">Different structural elements of an apartment building require different concrete strengths.</p>
            <div className="space-y-4">
              {[
                { title: 'Foundations & Ground Beams', grade: 'C30', desc: 'The foundation system of an apartment building bears the entire structure. C30 provides the necessary strength for strip footings, raft foundations, and ground beams.' },
                { title: 'Columns & Shear Walls', grade: 'C30 – C35', desc: 'Vertical structural elements in multi-storey buildings require high compressive strength. C30 to C35 concrete ensures your columns and shear walls meet engineering specifications for load-bearing capacity.' },
                { title: 'Suspended Floor Slabs', grade: 'C30', desc: 'Each suspended slab in an apartment building must be strong enough to support live loads from the floors above. C30 with proper reinforcement delivers the required performance.' },
                { title: 'Staircases & Landings', grade: 'C30', desc: 'High-traffic areas require durable concrete that can withstand constant use. C30 provides the abrasion resistance and strength needed for stair construction.' },
                { title: 'Roof Slabs & Parapets', grade: 'C30', desc: 'Roof structures need weather-resistant concrete. C30 with appropriate water-cement ratio ensures durability against Dar es Salaam&apos;s tropical climate.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-extrabold text-brand-600">{item.grade}</span>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Popular Apartment Locations We Serve</h2>
            <p className="section-sub text-center mb-10">We deliver concrete for apartment projects across Dar es Salaam&apos;s most active residential development areas.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { area: 'Mikocheni', desc: 'High-end apartments and mixed-use developments' },
                { area: 'Kawe & Kunduchi', desc: 'Beachfront apartment complexes' },
                { area: 'Mbezi (Luis & Juu)', desc: 'Growing residential towers along the Mbezi corridor' },
                { area: 'Kijitonyama & Sinza', desc: 'Mid-rise student and family apartments' },
                { area: 'Kigamboni', desc: 'New developments on the peninsula' },
                { area: 'Upanga & Kariakoo', desc: 'Urban apartment buildings in the city centre' },
              ].map((item) => (
                <div key={item.area} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
                    <h3 className="font-bold text-gray-900">{item.area}</h3>
                  </div>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">How Apartment Concrete Supply Works</h2>
            <p className="section-sub text-center mb-10">From consultation to pour coordination — our apartment supply service is designed for efficiency.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Project Assessment', desc: 'Tell us about your apartment building project — number of floors, structural requirements, pour schedule, and site location.' },
                { step: '2', title: 'Custom Mix Design', desc: 'Our technical team works with your engineer to finalize the concrete grade, admixtures, and pump requirements.' },
                { step: '3', title: 'Supply Planning', desc: 'We schedule production across our plant network to ensure consistent supply for every pour phase of your project.' },
                { step: '4', title: 'Delivery & Pumping', desc: 'Fresh concrete arrives with our mixer fleet, and our pump service places it exactly where needed — floor by floor.' },
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Building an Apartment in Dar es Salaam?</h2>
            <p className="text-lg text-brand-100 mb-8">Get an instant concrete quote or speak to our apartment construction specialists on WhatsApp.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl">
                <Zap className="w-5 h-5" /> Get Apartment Quote
              </a>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Related Services</h2>
            <p className="section-sub text-center mb-10">Explore our other services for apartment construction.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/services/c30-concrete-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-2xl font-extrabold text-brand-600">C30</span>
                <p className="text-sm text-gray-600 mt-2">The standard grade for apartments</p>
              </Link>
              <Link href="/services/concrete-pump-rental-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">Pump Rental</span>
                <p className="text-sm text-gray-600 mt-2">Efficient floor-by-floor placement</p>
              </Link>
              <Link href="/services/commercial-concrete-supply-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">Commercial</span>
                <p className="text-sm text-gray-600 mt-2">Large-scale concrete supply</p>
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
