import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Truck, Zap, CheckCircle, MapPin, MessageCircle, ArrowRight, Building, HardHat, Shield, Leaf } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Hotel Verde Zanzibar | Sustainable Concrete | Tanzibaba',
  description: 'Premium concrete supply for Hotel Verde Zanzibar, East Africa\'s first green hotel. Sustainable construction materials with stringent quality control for eco-friendly development.',
  keywords: ['hotel verde zanzibar', 'premium concrete', 'sustainable construction', 'green building materials', 'concrete supply zanzibar'],
  alternates: { canonical: `${siteUrl}/projects/hotel-verde-zanzibar` },
  openGraph: {
    title: 'Hotel Verde Zanzibar | Sustainable Concrete | Tanzibaba',
    description: 'Premium concrete supply for Hotel Verde Zanzibar, East Africa\'s first green hotel. Sustainable construction materials.',
    url: `${siteUrl}/projects/hotel-verde-zanzibar`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Project',
  name: 'Hotel Verde Zanzibar Concrete Supply',
  description: 'Premium concrete supply for Hotel Verde Zanzibar, East Africa\'s first green hotel. Sustainable construction materials with stringent quality control.',
  location: { '@type': 'Place', name: 'Zanzibar, Tanzania' },
  provider: { '@type': 'LocalBusiness', name: 'Tanzibaba' },
};

export default function HotelVerdeZanzibar() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80" alt="Hotel Verde Zanzibar sustainable concrete supply" className="w-full h-full object-cover" style={{ objectPosition: '50% 40%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Leaf className="w-4 h-4" /> Featured Project — Sustainable Construction
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Hotel Verde Zanzibar{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Concrete Supply</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Tanzibaba supplied premium ready-mix concrete for Hotel Verde Zanzibar, East Africa&apos;s first green-certified hotel. This groundbreaking project embodied sustainable construction principles, and our concrete solutions were tailored to meet stringent environmental performance standards while delivering uncompromising structural quality.
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
          <Image src="/images/commercial-building.jpg" alt="Hotel Verde Zanzibar — sustainable hotel construction with premium concrete supplied by Tanzibaba" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" priority />
        </div>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Project Overview</h2>
            <p className="section-sub text-center mb-10">Hotel Verde Zanzibar is a landmark sustainable hospitality development located on the pristine Zanzibar coastline. As East Africa&apos;s first green-certified hotel, the project set a new benchmark for environmentally responsible construction in the region. The development encompasses guest villas, a main hotel building, restaurants, swimming pools, and extensive landscaped grounds — all designed and built to rigorous sustainability standards.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="card text-center">
                <Building className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Project Type</h3>
                <p className="text-sm text-gray-600">Sustainable Hotel & Resort</p>
              </div>
              <div className="card text-center">
                <MapPin className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                <p className="text-sm text-gray-600">Zanzibar, Tanzania</p>
              </div>
              <div className="card text-center">
                <HardHat className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Role</h3>
                <p className="text-sm text-gray-600">Premier Concrete Supplier</p>
              </div>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Tanzibaba was selected as the premier concrete supplier for Hotel Verde Zanzibar based on our ability to deliver premium-grade concrete with consistent quality across a challenging island logistics environment. Over the course of the project, we supplied more than 12,000 cubic metres of concrete, transporting materials across the Dar es Salaam to Zanzibar shipping route. Our involvement required extensive planning to coordinate barge shipments of concrete materials and, where feasible, direct mixer truck deliveries from our mainland plants.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The sustainable focus of Hotel Verde Zanzibar influenced every aspect of material selection and construction methodology. Our technical team worked with the project&apos;s sustainability consultants to optimise mix designs that reduced embodied carbon without compromising structural performance. We utilised supplementary cementitious materials where possible and ensured all raw materials were sourced from responsibly managed quarries. The project achieved its green building certification, and Tanzibaba&apos;s concrete solutions contributed significantly to the sustainability profile of the development.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Scope of Work</h2>
            <p className="section-sub text-center mb-10">Our concrete supply covered all structural and architectural elements across the Hotel Verde Zanzibar development.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Foundations & Ground Works</h3>
                  <p className="text-sm text-gray-600">C30 and C35 concrete for strip footings, raft foundations, and ground beams across the main hotel building and guest villa structures. Mix designs incorporated ground-granulated blast-furnace slag to reduce cement content and lower the carbon footprint of the foundation works.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Structural Frame & Slabs</h3>
                  <p className="text-sm text-gray-600">C30 concrete for columns, beams, and suspended floor slabs across all buildings. Pump-friendly mixes were supplied for efficient placement, with extended workability retention to account for the hot coastal climate of Zanzibar.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Swimming Pools & Water Features</h3>
                  <p className="text-sm text-gray-600">Specialist water-resistant concrete for swimming pools, infinity edges, and ornamental water features. These mixes were formulated with integral waterproofing admixtures to prevent water ingress and ensure long-term durability in the coastal environment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">External & Landscape Works</h3>
                  <p className="text-sm text-gray-600">Architectural concrete for pathways, terraces, retaining walls, and hardscape features using exposed aggregate and fair-faced finishes. These elements were designed to blend with the natural surroundings while providing durable, low-maintenance surfaces.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Materials Supplied</h2>
            <p className="section-sub text-center mb-10">Every cubic metre of concrete delivered to Hotel Verde Zanzibar met the highest standards of quality and sustainability.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <Shield className="w-8 h-8 text-brand-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">Concrete Grades</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> C30 — Slabs, beams, columns, superstructure</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> C35 — Foundations, ground beams, retaining walls</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Water-resistant — Pools & water features</li>
                </ul>
              </div>
              <div className="card">
                <Leaf className="w-8 h-8 text-brand-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">Sustainability Features</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Reduced cement content using GGBS</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Responsibly sourced aggregates</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Optimised logistics to minimise fuel use</li>
                </ul>
              </div>
              <div className="card">
                <HardHat className="w-8 h-8 text-brand-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">Quality Control</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Computer-controlled batching for precision</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Marine-grade durability testing for coastal exposure</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Full compressive strength testing regime</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Sustainable Construction Focus</h2>
            <p className="section-sub text-center mb-10">Hotel Verde Zanzibar set new standards for sustainable tourism development in East Africa, and our concrete solutions were aligned with that vision.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <Leaf className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Reduced Carbon Footprint</h3>
                  <p className="text-sm text-gray-600">By incorporating supplementary cementitious materials such as ground-granulated blast-furnace slag into our mix designs, we reduced the embodied carbon of the concrete by up to 30% compared to standard Portland cement mixes. This was a key contributor to the project&apos;s green building certification.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <Leaf className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Responsible Sourcing</h3>
                  <p className="text-sm text-gray-600">All aggregates used in the Hotel Verde Zanzibar project were sourced from responsibly managed quarries with environmental management plans in place. Our washed sand technology ensured consistent quality without relying on marine-dredged materials that could impact coastal ecosystems.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <Leaf className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Efficient Logistics</h3>
                  <p className="text-sm text-gray-600">Our logistics team optimised delivery routes and consolidated shipments to minimise fuel consumption and emissions. By coordinating barge schedules and maximising load efficiency, we reduced the environmental impact of transporting materials from the mainland to Zanzibar.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <Leaf className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Durability & Longevity</h3>
                  <p className="text-sm text-gray-600">High-durability concrete formulations were specified for all coastal-exposed elements, ensuring the structures withstand Zanzibar&apos;s marine environment for decades. This long-service-life approach reduces the need for future repairs and material replacement, supporting the project&apos;s overall sustainability goals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-brand-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Planning a Sustainable Development in Zanzibar?</h2>
            <p className="text-lg text-brand-100 mb-8">Get a project-specific concrete quote or speak to our team on WhatsApp.</p>
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
            <p className="section-sub text-center mb-10">Explore other landmark projects supplied by Tanzibaba.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/projects/vijana-towers" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">Vijana Towers</span>
                <p className="text-sm text-gray-600 mt-2">Commercial high-rise concrete supply in Dar es Salaam</p>
              </Link>
              <Link href="/projects/viva-towers" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">Viva Towers</span>
                <p className="text-sm text-gray-600 mt-2">Premium concrete supply for Dar es Salaam development</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Explore Our Services</h2>
            <p className="section-sub text-center mb-10">Tanzibaba offers a full range of concrete solutions for projects of every type and scale.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/services/commercial-concrete-supply-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">Commercial Supply</span>
                <p className="text-sm text-gray-600 mt-2">Large-scale concrete for commercial developments</p>
              </Link>
              <Link href="/services/concrete-pump-rental-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">Pump Rental</span>
                <p className="text-sm text-gray-600 mt-2">Efficient placement for multi-storey projects</p>
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
