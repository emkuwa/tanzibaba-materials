import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Truck, Zap, CheckCircle, MapPin, MessageCircle, ArrowRight, Building, HardHat, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'Vijana Towers | Commercial Concrete Supply | Tanzibaba',
  description: 'Premium concrete supply for Vijana Towers, a landmark commercial high-rise in Dar es Salaam. High-strength grades C30/C35/C40 with strict quality assurance and reliable delivery logistics.',
  keywords: ['vijana towers', 'commercial concrete supply', 'high-rise concrete', 'vijana towers dar es salaam', 'concrete supply dar es salaam'],
  alternates: { canonical: `${siteUrl}/projects/vijana-towers` },
  openGraph: {
    title: 'Vijana Towers | Commercial Concrete Supply | Tanzibaba',
    description: 'Premium concrete supply for Vijana Towers, a landmark commercial high-rise in Dar es Salaam. High-strength grades, quality assured.',
    url: `${siteUrl}/projects/vijana-towers`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Project',
  name: 'Vijana Towers Concrete Supply',
  description: 'Premium concrete supply for Vijana Towers, a landmark commercial high-rise in Dar es Salaam. High-strength grades C30/C35/C40 with strict quality assurance.',
  location: { '@type': 'Place', name: 'Dar es Salaam, Tanzania' },
  provider: { '@type': 'LocalBusiness', name: 'Tanzibaba' },
};

export default function VijanaTowers() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80" alt="Vijana Towers commercial concrete supply Dar es Salaam" className="w-full h-full object-cover" style={{ objectPosition: '50% 25%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Building className="w-4 h-4" /> Featured Project — Commercial High-Rise
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Vijana Towers{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Concrete Supply</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Tanzibaba was the exclusive ready-mix concrete supplier for Vijana Towers, a landmark commercial high-rise development in the heart of Dar es Salaam. This project demanded high-strength concrete grades, precise delivery coordination, and uncompromising quality control across all structural elements.
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

        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
          <Image src="/images/commercial-building.jpg" alt="Vijana Towers — premium concrete supply by Tanzibaba for this landmark commercial high-rise in Dar es Salaam" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" priority />
        </div>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Project Overview</h2>
            <p className="section-sub text-center mb-10">Vijana Towers is a landmark commercial high-rise development in Dar es Salaam, representing one of the most significant construction projects in the city&apos;s central business district. The tower features multiple storeys of premium office space, retail facilities, and underground parking, requiring substantial volumes of high-quality ready-mix concrete delivered on a strict construction schedule.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="card text-center">
                <Building className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Project Type</h3>
                <p className="text-sm text-gray-600">Commercial High-Rise</p>
              </div>
              <div className="card text-center">
                <MapPin className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                <p className="text-sm text-gray-600">Dar es Salaam CBD</p>
              </div>
              <div className="card text-center">
                <HardHat className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Role</h3>
                <p className="text-sm text-gray-600">Exclusive Concrete Supplier</p>
              </div>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                As the exclusive ready-mix concrete supplier for Vijana Towers, Tanzibaba was entrusted with delivering all structural concrete for the project from foundation to rooftop. The scope encompassed over 15,000 cubic metres of concrete across multiple grades, supplied over an 18-month construction period. Our involvement began at the design stage, working closely with the structural engineers to develop optimised mix designs that met both strength requirements and workability needs for pump placement at height.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The project presented unique logistical challenges. Located in the congested Dar es Salaam CBD, our delivery fleet had to navigate tight urban streets and coordinate deliveries during specific window periods to avoid traffic disruption. We deployed a dedicated fleet of modern mixer trucks operating from our nearest production facility in Kariakoo, ensuring consistent delivery times and fresh concrete for every pour. A concrete pump was stationed on-site for the duration of the project to facilitate efficient placement across all floor levels.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Scope of Work</h2>
            <p className="section-sub text-center mb-10">Our scope covered every concrete element of the Vijana Towers structure, from deep foundations to the roof slab.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Foundation & Substructure</h3>
                  <p className="text-sm text-gray-600">Large-volume foundation rafts, pile caps, and ground beams requiring high-strength C35 concrete with low-permeability mix design for below-grade durability. Continuous pours of up to 300 m³ were coordinated across multiple production locations to ensure uninterrupted supply.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Structural Frame — Columns & Shear Walls</h3>
                  <p className="text-sm text-gray-600">C40 concrete was specified for the primary vertical structural elements including columns and shear walls in the lower storeys where load demands are highest. Our mix design incorporated superplasticiser admixtures to achieve the required workability without compromising strength.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Suspended Floor Slabs</h3>
                  <p className="text-sm text-gray-600">C30 concrete was supplied for suspended floor slabs across all levels. A pump-friendly mix with optimised slump retention ensured smooth placement at heights exceeding 50 metres. Each slab pour was tested for slump and temperature before placement.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Roof Slab & Parapet</h3>
                  <p className="text-sm text-gray-600">C35 weather-resistant concrete was used for the roof slab and parapet walls, formulated with enhanced durability additives to withstand exposure to sun, wind, and seasonal rainfall.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Materials Supplied</h2>
            <p className="section-sub text-center mb-10">All concrete was produced at our computer-controlled batching plants using premium raw materials.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <Shield className="w-8 h-8 text-brand-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">Concrete Grades</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> C30 — Suspended floor slabs, stair cores</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> C35 — Foundation rafts, ground beams, roof slab</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> C40 — Columns, shear walls, transfer beams</li>
                </ul>
              </div>
              <div className="card">
                <Truck className="w-8 h-8 text-brand-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">Delivery Logistics</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Dedicated mixer truck fleet from Kariakoo plant</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> On-site concrete pump for high-rise placement</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Time-slot deliveries to CBD traffic restrictions</li>
                </ul>
              </div>
              <div className="card">
                <HardHat className="w-8 h-8 text-brand-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">Quality Control</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Computer-batched mixes for consistency</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Slump and temperature testing on every load</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Cube sampling and compression testing at 7 & 28 days</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Quality Assurance & Testing</h2>
            <p className="section-sub text-center mb-10">Every cubic metre of concrete supplied to Vijana Towers was subject to our rigorous quality assurance protocol.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Mix Design Approval', desc: 'Custom mix designs developed with the structural engineer and trialled before production commencement.' },
                { step: '2', title: 'Pre-Delivery Checks', desc: 'Each batch verified for slump, temperature, and air content before leaving the plant.' },
                { step: '3', title: 'On-Site Testing', desc: 'Independent slump tests and cube samples taken at the point of placement for every pour.' },
                { step: '4', title: 'Compression Testing', desc: '28-day compressive strength testing by accredited laboratories with full reporting.' },
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Need High-Strength Concrete for Your High-Rise Project?</h2>
            <p className="text-lg text-brand-100 mb-8">Get a project-specific quote or speak to our commercial sales team on WhatsApp.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl">
                <Zap className="w-5 h-5" /> Get Project Quote
              </a>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Related Projects</h2>
            <p className="section-sub text-center mb-10">Explore more of Tanzibaba&apos;s landmark project deliveries.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/projects/viva-towers" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">Viva Towers</span>
                <p className="text-sm text-gray-600 mt-2">Premium concrete supply for Dar es Salaam high-rise development</p>
              </Link>
              <Link href="/projects/hotel-verde-zanzibar" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">Hotel Verde Zanzibar</span>
                <p className="text-sm text-gray-600 mt-2">Sustainable concrete for East Africa&apos;s first green hotel</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Explore Our Services</h2>
            <p className="section-sub text-center mb-10">Tanzibaba supplies premium concrete for projects of every scale across Tanzania.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/services/commercial-concrete-supply-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">Commercial Supply</span>
                <p className="text-sm text-gray-600 mt-2">Large-scale concrete for commercial developments</p>
              </Link>
              <Link href="/services/concrete-pump-rental-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">Pump Rental</span>
                <p className="text-sm text-gray-600 mt-2">Efficient placement for high-rise projects</p>
              </Link>
              <Link href="/services/concrete-supplier-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">All Grades</span>
                <p className="text-sm text-gray-600 mt-2">View our complete product range C10 – C50</p>
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
