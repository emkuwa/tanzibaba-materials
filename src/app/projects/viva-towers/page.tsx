import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Truck, Zap, CheckCircle, MapPin, MessageCircle, ArrowRight, Building, HardHat, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'Viva Towers | Premium Concrete Supply | Tanzibaba',
  description: 'Premium concrete supply for Viva Towers development in Dar es Salaam. High-strength ready-mix concrete with strict quality control for this landmark high-rise project.',
  keywords: ['viva towers dar es salaam', 'concrete supply', 'high-rise construction', 'viva towers concrete', 'premium concrete dar es salaam'],
  alternates: { canonical: `${siteUrl}/projects/viva-towers` },
  openGraph: {
    title: 'Viva Towers | Premium Concrete Supply | Tanzibaba',
    description: 'Premium concrete supply for Viva Towers development in Dar es Salaam. High-strength ready-mix concrete with strict quality control.',
    url: `${siteUrl}/projects/viva-towers`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Project',
  name: 'Viva Towers Concrete Supply',
  description: 'Premium concrete supply for Viva Towers development in Dar es Salaam. High-strength ready-mix concrete with strict quality control for this landmark high-rise project.',
  location: { '@type': 'Place', name: 'Dar es Salaam, Tanzania' },
  provider: { '@type': 'LocalBusiness', name: 'Tanzibaba' },
};

export default function VivaTowers() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80" alt="Viva Towers concrete supply Dar es Salaam" className="w-full h-full object-cover" style={{ objectPosition: '50% 30%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Building className="w-4 h-4" /> Featured Project — Premium Development
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Viva Towers{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Concrete Supply</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Tanzibaba had the privilege of supplying premium ready-mix concrete for Viva Towers, a landmark high-rise development in Dar es Salaam. This flagship project demanded the highest standards of concrete quality, consistent delivery, and technical expertise across all phases of construction.
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
          <Image src="/images/commercial-building.jpg" alt="Viva Towers — premium concrete supply by Tanzibaba for this landmark commercial high-rise in Dar es Salaam" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" priority />
        </div>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Project Overview</h2>
            <p className="section-sub text-center mb-10">Viva Towers is a premium high-rise development in Dar es Salaam, comprising luxury residential apartments, commercial office space, and retail outlets across multiple storeys. The project represents a significant investment in Tanzania&apos;s growing urban landscape, with architectural design and engineering standards that demanded the highest quality construction materials and execution.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="card text-center">
                <Building className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Project Type</h3>
                <p className="text-sm text-gray-600">Mixed-Use High-Rise</p>
              </div>
              <div className="card text-center">
                <MapPin className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                <p className="text-sm text-gray-600">Dar es Salaam</p>
              </div>
              <div className="card text-center">
                <HardHat className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Role</h3>
                <p className="text-sm text-gray-600">Primary Concrete Supplier</p>
              </div>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Tanzibaba was engaged as the primary ready-mix concrete supplier for Viva Towers, responsible for delivering all structural concrete grades from foundation to completion. Over the course of the project, we supplied more than 20,000 cubic metres of concrete, coordinating deliveries across multiple phases of construction. The project required meticulous planning to ensure that concrete was available on demand for critical structural elements including foundations, columns, floor slabs, and shear walls.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Working closely with the main contractor and structural engineers, our technical team developed custom mix designs for each structural element type. The project&apos;s location in a busy urban area required careful logistical coordination. We stationed a dedicated fleet of mixer trucks and an on-site concrete pump to ensure efficient placement across all floor levels. Our team managed delivery scheduling to minimise disruption to surrounding traffic while maintaining a consistent supply of fresh concrete for every pour.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Scope of Work</h2>
            <p className="section-sub text-center mb-10">Our supply scope covered all structural concrete elements across the Viva Towers development.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Deep Foundations & Basement</h3>
                  <p className="text-sm text-gray-600">High-volume pours for deep foundation rafts, pile caps, and basement retaining walls using C35 concrete with waterproofing admixtures. Continuous pours of up to 400 m³ were executed with multiple production locations running simultaneously to guarantee uninterrupted supply.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Vertical Structural Elements</h3>
                  <p className="text-sm text-gray-600">C40 concrete was supplied for columns, core walls, and transfer structures in the lower storeys where structural loads are greatest. Our mix was formulated with advanced superplasticiser technology to achieve high workability for dense reinforcement zones without segregation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Suspended Slabs & Beams</h3>
                  <p className="text-sm text-gray-600">C30 concrete for suspended floor slabs and beams across all levels. Our pump-friendly mix design with extended slump retention ensured reliable placement at heights exceeding 60 metres, even during peak daytime temperatures in Dar es Salaam.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">External & Finishing Works</h3>
                  <p className="text-sm text-gray-600">Specialist concrete mixes for external landscaping, paving, and finishing elements. These included exposed aggregate finishes and coloured concrete for architectural features around the development&apos;s ground-floor retail and public areas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Materials Supplied</h2>
            <p className="section-sub text-center mb-10">All concrete was manufactured at our computer-controlled batching facilities using carefully selected raw materials.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <Shield className="w-8 h-8 text-brand-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">Concrete Grades</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> C30 — Suspended floor slabs, beams, stairs</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> C35 — Foundations, basement walls, roof slab</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> C40 — Columns, shear walls, transfer beams</li>
                </ul>
              </div>
              <div className="card">
                <Truck className="w-8 h-8 text-brand-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">Delivery Logistics</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Dedicated mixer truck fleet for project exclusivity</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> On-site concrete pump for vertical placement</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Real-time delivery tracking and coordination</li>
                </ul>
              </div>
              <div className="card">
                <HardHat className="w-8 h-8 text-brand-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">Quality Control</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Computer-automated batching for precision</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> On-site slump, temperature & density testing</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" /> Cube compression testing at 7, 14 & 28 days</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">Delivery Process & Coordination</h2>
            <p className="section-sub text-center mb-10">Supplying a project of this scale required meticulous planning and real-time coordination between our plants, logistics team, and the site.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Project Planning', desc: 'Detailed supply schedule developed with the main contractor, aligning concrete deliveries with the construction programme.' },
                { step: '2', title: 'Plant Allocation', desc: 'Primary and backup production facilities assigned to guarantee supply continuity for every scheduled pour.' },
                { step: '3', title: 'Fleet Dispatch', desc: 'GPS-tracked mixer trucks dispatched at precise intervals to maintain a steady flow of fresh concrete.' },
                { step: '4', title: 'On-Site Management', desc: 'Tanzibaba site coordinator managed pump operations, testing, and pour execution in real time.' },
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Planning a High-Rise Development in Dar es Salaam?</h2>
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
            <p className="section-sub text-center mb-10">Discover other landmark projects supplied by Tanzibaba.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/projects/vijana-towers" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">Vijana Towers</span>
                <p className="text-sm text-gray-600 mt-2">Commercial high-rise concrete supply in Dar es Salaam CBD</p>
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
            <p className="section-sub text-center mb-10">Tanzibaba offers a full range of concrete solutions for projects of every size.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/services/commercial-concrete-supply-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">Commercial Supply</span>
                <p className="text-sm text-gray-600 mt-2">Large-scale concrete for commercial developments</p>
              </Link>
              <Link href="/services/concrete-pump-rental-dar-es-salaam" className="card text-center hover:border-brand-200 transition-all">
                <span className="text-lg font-extrabold text-brand-600">Pump Rental</span>
                <p className="text-sm text-gray-600 mt-2">Efficient concrete placement for high-rise projects</p>
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
