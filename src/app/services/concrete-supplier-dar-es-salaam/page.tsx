import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Zap, CheckCircle, MapPin, MessageCircle, ArrowRight, Shield, Building, Users, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'Concrete Supplier Dar es Salaam | Premium Ready-Mix | Tanzibaba',
  description: 'Leading concrete supplier in Dar es Salaam. Premium ready-mix concrete for commercial, industrial & residential projects. Instant online pricing.',
  keywords: ['concrete supplier dar es salaam', 'concrete company dar es salaam', 'concrete prices'],
  alternates: { canonical: `${siteUrl}/services/concrete-supplier-dar-es-salaam` },
  openGraph: {
    title: 'Concrete Supplier Dar es Salaam | Premium Ready-Mix | Tanzibaba',
    description: 'Leading concrete supplier in Dar es Salaam. Premium ready-mix concrete for commercial, industrial & residential projects.',
    url: `${siteUrl}/services/concrete-supplier-dar-es-salaam`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Concrete Supplier Dar es Salaam',
  provider: { '@type': 'LocalBusiness', name: 'Tanzibaba' },
  areaServed: { '@type': 'City', name: 'Dar es Salaam' },
  description: 'Premium ready-mix concrete supplier in Dar es Salaam. Serving commercial, industrial & residential projects with grades C10-C50.',
};

export default function ConcreteSupplierDarEsSalaam() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1600&q=80" alt="Concrete supplier Dar es Salaam" className="w-full h-full object-cover" style={{ objectPosition: '50% 30%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Building className="w-4 h-4" /> Concrete Supplier Dar es Salaam
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Premium Concrete Supplier{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">in Dar es Salaam</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Tanzibaba is Dar es Salaam&apos;s most trusted concrete supplier. We deliver premium ready-mix concrete to commercial, industrial, and residential projects across the city. With washed sand technology and direct pricing, we supply the strength your project needs.
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
          <Image src="/images/commercial-building.jpg" alt="Leading concrete supplier in Dar es Salaam — premium ready-mix for all construction needs" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" priority />
        </div>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-heading text-center mb-4">Why Tanzibaba Is Dar es Salaam&apos;s Leading Concrete Supplier</h2>
            <p className="section-sub text-center mb-12">
              We are not just another concrete company — we are a modern, technology-driven supplier committed to quality, transparency, and reliability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="card text-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Truck className="w-7 h-7 text-brand-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">Quality Controlled Production</h3>
                <p className="text-sm text-gray-600">Our production coverage means shorter delivery distances, faster turnaround, and fresher concrete at your site.</p>
              </div>
              <div className="card text-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Shield className="w-7 h-7 text-brand-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
                <p className="text-sm text-gray-600">Computer-controlled batching, regular slump tests, and compressive strength verification ensure every load meets specifications.</p>
              </div>
              <div className="card text-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Users className="w-7 h-7 text-brand-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-sm text-gray-600">Our team of experienced concrete professionals helps you choose the right grade, plan your pour, and schedule delivery for success.</p>
              </div>
              <div className="card text-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Clock className="w-7 h-7 text-brand-600" /></div>
                <h3 className="font-bold text-gray-900 mb-2">On-Time Delivery</h3>
                <p className="text-sm text-gray-600">We understand concrete has a working life. Our logistics team schedules deliveries precisely so your pour goes smoothly.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Concrete Grades We Supply</h2>
            <p className="section-sub text-center mb-10">Every project has unique structural requirements. We deliver the right grade for the right application.</p>
            <div className="space-y-4">
              {[
                { grade: 'C10 – C15', desc: 'Non-structural and light-duty applications including blinding, leveling, walkways, and light foundations. Economical solutions for preparatory work.' },
                { grade: 'C20 – C25', desc: 'Standard residential concrete. Perfect for house slabs, foundations, columns, beams, driveways, and patios. C25 is the most popular choice for home construction in Dar es Salaam.' },
                { grade: 'C30 – C35', desc: 'Commercial and multi-storey construction. Ideal for apartment buildings, office complexes, hotels, and heavy-duty industrial floors where higher strength is required.' },
                { grade: 'C40 – C50', desc: 'High-performance engineered concrete. Used in industrial plants, bridges, precast elements, marine structures, and other demanding applications requiring exceptional durability.' },
              ].map((item) => (
                <div key={item.grade} className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">{item.grade}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Projects We Supply</h2>
            <p className="section-sub text-center mb-10">As a leading concrete supplier in Dar es Salaam, we serve a diverse range of construction projects.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <Building className="w-8 h-8 text-brand-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Commercial Buildings</h3>
                  <p className="text-sm text-gray-600">Shopping complexes, office buildings, hotels, and hospitals. We supply the volumes and grades needed for large-scale commercial developments, with production capacity capable of sustaining high-volume pours.</p>
                <Link href="/services/commercial-concrete-supply-dar-es-salaam" className="text-sm text-brand-600 font-semibold mt-3 inline-block hover:underline">Commercial concrete supply →</Link>
              </div>
              <div className="card">
                <Building className="w-8 h-8 text-brand-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Apartment Buildings</h3>
                <p className="text-sm text-gray-600">Multi-storey residential projects require consistent, high-quality concrete for structural integrity. Our C30 and C35 grades are ideal for apartment construction in Dar es Salaam.</p>
                <Link href="/services/apartment-concrete-supply-dar-es-salaam" className="text-sm text-brand-600 font-semibold mt-3 inline-block hover:underline">Apartment concrete supply →</Link>
              </div>
              <div className="card">
                <Building className="w-8 h-8 text-brand-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Residential Homes</h3>
                <p className="text-sm text-gray-600">From single-room foundations to full house slabs, we deliver premium C20 and C25 concrete for homeowners and small contractors. No minimum quantity hassles.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Areas We Cover</h2>
            <p className="section-sub text-center mb-10">As Dar es Salaam&apos;s concrete supplier, we deliver across all districts.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Kinondoni', areas: 'Magomeni, Mikocheni, Sinza, Kawe, Kunduchi, Tegeta' },
                { name: 'Ubungo', areas: 'Kimara, Mbezi, Gongo la Mboto, Saranga, Kwembe' },
                { name: 'Ilala', areas: 'Kariakoo, Upanga, Buguruni, Tabata, Pugu, Ukonga' },
                { name: 'Temeke', areas: 'Mbagala, Charambe, Kurasini, Mtoni, Tandika' },
                { name: 'Kigamboni', areas: 'Kigamboni, Vijibweni, Somangila, Tungi' },
              ].map((item) => (
                <div key={item.name} className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-brand-600" />
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{item.areas}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-brand-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Looking for a Reliable Concrete Supplier in Dar es Salaam?</h2>
            <p className="text-lg text-brand-100 mb-8">Get your instant online quote now or message us on WhatsApp for a personalised consultation.</p>
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
            <h2 className="section-heading text-center mb-4">Why Direct From the Supplier Matters</h2>
            <p className="section-sub text-center mb-10">When you choose Tanzibaba as your concrete supplier, you benefit from direct-from-plant pricing and full supply chain control.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">No Broker Markups</h3>
                  <p className="text-sm text-gray-600">We own and operate our production facilities. When you order from Tanzibaba, you pay the producer price — not a middleman&apos;s inflated rate. Our pricing is transparent with VAT included.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Consistent Mix Quality</h3>
                  <p className="text-sm text-gray-600">Because we control production from raw material selection to batching and delivery, we maintain consistent quality across every cubic metre we supply.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Reliable Supply Capacity</h3>
                  <p className="text-sm text-gray-600">With operations nationwide and a modern fleet of mixer trucks, we have the capacity to handle projects of any size — from residential slabs to large commercial developments.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Technical Support</h3>
                  <p className="text-sm text-gray-600">Our team provides technical guidance on mix design, grade selection, pouring procedures, curing practices, and concrete pump requirements for your specific project.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
