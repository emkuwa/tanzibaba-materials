'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Truck, ArrowRight, CheckCircle, HardHat, Building2, Mountain, Package, Square, Route,
  Calculator, BookOpen, Users, Newspaper, FileText, Phone, MessageCircle, Zap, Award,
  Shield, Globe, Hammer, Beaker, X, Droplets, Tractor, Wrench, Cog, ClipboardList
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadCaptureForm from '@/components/LeadCaptureForm';

const trustBadges = [
  { icon: Award, label: 'Premium Concrete Quality' },
  { icon: Droplets, label: 'Washed Sand Technology' },
  { icon: Beaker, label: 'Laboratory Tested Concrete' },
  { icon: CheckCircle, label: 'Quality Controlled Production' },
  { icon: Truck, label: 'Reliable Supply & Equipment Network' },
];

const products = [
  { icon: Truck, title: 'Premium Ready Mix Concrete', desc: 'Grades C10 to C50 with washed sand technology and computerized batching.', href: '/ready-mix-concrete-dar-es-salaam', image: '/images/new/ready-mix-concrete.webp' },
  { icon: Mountain, title: 'Premium Aggregates', desc: 'High-quality crushed stone, gravel and aggregates from our Lugoba crushing plant.', href: '/aggregates-supplier-dar-es-salaam', image: '/images/new/aggregates.webp' },
  { icon: Mountain, title: 'Premium Gravel', desc: 'Crushed gravel in sizes from crusher dust to 40mm+ for all construction applications.', href: '/aggregates-supplier-dar-es-salaam', image: '/images/new/crusher-plant.webp' },
  { icon: Droplets, title: 'Premium Washed Sand', desc: 'Washed sand — silt and clay removed for superior concrete strength and performance.', href: '/aggregates-supplier-dar-es-salaam', image: '/images/new/washed-sand.webp' },
  { icon: Route, title: 'Premium Road Base', desc: 'Road base, sub-base and asphalt aggregates for road and infrastructure projects.', href: '/aggregates-supplier-dar-es-salaam', image: '/images/new/road-construction.webp' },
  { icon: Square, title: 'Premium Hollow Blocks', desc: 'Lightweight hollow blocks for walls, partitions and non-load-bearing construction.', href: '/blocks-supplier-dar-es-salaam', image: '/images/new/hollow-blocks.webp' },
  { icon: Square, title: 'Premium Solid Blocks', desc: 'Dense solid blocks for load-bearing walls, foundations and structural construction.', href: '/blocks-supplier-dar-es-salaam', image: '/images/new/solid-blocks.webp' },
  { icon: Package, title: 'Premium Paving Blocks', desc: 'Interlocking and decorative paving blocks for driveways, walkways and parking.', href: '/paving-blocks-dar-es-salaam', image: '/images/new/paving-blocks.png' },
  { icon: Package, title: 'Culvert Pipes', desc: 'Precast concrete culvert pipes for drainage and infrastructure projects.', href: '/culvert-pipes-dar-es-salaam', image: '/images/new/culvert-pipes.webp' },
  { icon: Package, title: 'Precast Products', desc: 'Custom precast concrete elements for specialized construction applications.', href: '/services/ready-mix-concrete-dar-es-salaam', image: '/images/new/precast-products.webp' },
];

const qualityItems = [
  { icon: Award, title: 'Premium Concrete', desc: 'Designed for consistency, strength and performance — engineered for serious construction projects.' },
  { icon: Droplets, title: 'Washed Sand Technology', desc: 'Cleaner sand helps produce better concrete — removing impurities for superior results.' },
  { icon: Beaker, title: 'Laboratory Tested Concrete', desc: 'Concrete quality verified through laboratory testing to ensure consistency and performance.' },
  { icon: CheckCircle, title: 'Quality Controlled Production', desc: 'Controlled processes from production to delivery — ensuring dependable results every time.' },
];

const whyUs = [
  { icon: Award, title: 'Premium Concrete Quality', desc: 'Engineered for consistency, strength and performance across all construction applications.' },
  { icon: Droplets, title: 'Washed Sand Technology', desc: 'Advanced sand washing removes impurities — producing cleaner materials and stronger concrete.' },
  { icon: Beaker, title: 'Laboratory Tested Concrete', desc: 'Every batch verified through laboratory testing to ensure consistency and performance.' },
  { icon: CheckCircle, title: 'Quality Controlled Production', desc: 'Computerized batching and strict quality control at every stage of production.' },
  { icon: Truck, title: 'Reliable Supply & Equipment Network', desc: 'Modern fleet, strategic plant locations and extensive equipment inventory ensure on-time delivery for projects of any size.' },
  { icon: HardHat, title: 'Industry Expertise', desc: 'Decades of experience serving commercial, industrial and infrastructure projects across Tanzania.' },
];

const services = [
  { icon: Package, title: 'Building Materials Supply', desc: 'Premium concrete, aggregates, blocks and building materials for all construction needs.', href: '/ready-mix-concrete-dar-es-salaam', image: '/images/new/ready-mix-concrete.webp' },
  { icon: Mountain, title: 'Aggregate Supply', desc: 'High-quality crushed stone, gravel and aggregates from our quality-controlled crushing plant.', href: '/aggregates-supplier-dar-es-salaam', image: '/images/new/aggregates.webp' },
  { icon: Truck, title: 'Ready Mix Concrete', desc: 'Premium ready-mix concrete grades C10 to C50 with washed sand technology.', href: '/ready-mix-concrete-dar-es-salaam', image: '/images/new/concrete-pump.webp' },
  { icon: HardHat, title: 'Equipment Hire', desc: 'Earthmoving, material handling and construction equipment for short or long-term hire.', href: '/equipment-hire', image: '/images/new/commercial-building.webp' },
  { icon: Wrench, title: 'Heavy Machinery Rental', desc: 'Heavy machinery including cranes, loaders, graders and rollers for your projects.', href: '/equipment-hire', image: '/images/new/road-construction.webp' },
  { icon: Truck, title: 'Truck Hire', desc: 'Dump trucks, tipper trucks, lowbed trailers and water bowsers for material transport.', href: '/equipment-hire', image: '/images/new/crusher-plant.webp' },
  { icon: Route, title: 'Project Logistics', desc: 'End-to-end logistics coordination for material and equipment delivery to your site.', href: '/services/logistics', image: '/images/new/commercial-building.webp' },
  { icon: ClipboardList, title: 'Procurement Services', desc: 'Complete procurement management for construction materials and equipment.', href: '/services/procurement', image: '/images/new/precast-products.webp' },
];

const equipment = [
  { icon: Tractor, title: 'Excavators', desc: 'Hydraulic excavators for earthmoving, trenching and site preparation.', color: 'bg-orange-50 text-orange-600' },
  { icon: Tractor, title: 'Bulldozers', desc: 'Heavy-duty bulldozers for grading, clearing and land levelling.', color: 'bg-stone-50 text-stone-600' },
  { icon: Truck, title: 'Wheel Loaders', desc: 'Wheel loaders for material handling, loading and stockpile management.', color: 'bg-brand-50 text-brand-600' },
  { icon: Tractor, title: 'Backhoe Loaders', desc: 'Versatile backhoe loaders for excavation, digging and loading.', color: 'bg-amber-50 text-amber-600' },
  { icon: Tractor, title: 'Motor Graders', desc: 'Motor graders for fine grading, road maintenance and levelling.', color: 'bg-blue-50 text-blue-600' },
  { icon: Truck, title: 'Dump Trucks', desc: 'Heavy-duty dump trucks for bulk material transport.', color: 'bg-red-50 text-red-600' },
  { icon: Truck, title: 'Tipper Trucks', desc: 'Tipper trucks for efficient unloading of aggregates and materials.', color: 'bg-amber-50 text-amber-600' },
  { icon: Truck, title: 'Lowbed Trailers', desc: 'Lowbed trailers for transporting heavy equipment and machinery.', color: 'bg-indigo-50 text-indigo-600' },
  { icon: Wrench, title: 'Mobile Cranes', desc: 'Mobile cranes for lifting, hoisting and heavy material placement.', color: 'bg-violet-50 text-violet-600' },
  { icon: Tractor, title: 'Forklifts', desc: 'Forklifts for material handling, loading and warehouse operations.', color: 'bg-teal-50 text-teal-600' },
  { icon: Truck, title: 'Concrete Pump Trucks', desc: 'Concrete pump trucks for precise concrete placement at height.', color: 'bg-cyan-50 text-cyan-600' },
  { icon: Truck, title: 'Transit Mixers', desc: 'Concrete transit mixers for fresh concrete delivery to site.', color: 'bg-sky-50 text-sky-600' },
  { icon: Droplets, title: 'Water Bowsers', desc: 'Water bowsers for dust suppression, compaction and site water supply.', color: 'bg-blue-50 text-blue-600' },
  { icon: Droplets, title: 'Fuel Bowsers', desc: 'Fuel bowsers for on-site refuelling of equipment and vehicles.', color: 'bg-rose-50 text-rose-600' },
  { icon: Cog, title: 'Rollers', desc: 'Compaction rollers for soil, asphalt and road base compaction.', color: 'bg-stone-50 text-stone-600' },
  { icon: Hammer, title: 'Mobile Crushers', desc: 'Mobile crushers for on-site rock crushing and aggregate production.', color: 'bg-orange-50 text-orange-600' },
  { icon: Cog, title: 'Screening Plants', desc: 'Screening plants for material sorting, grading and classification.', color: 'bg-purple-50 text-purple-600' },
  { icon: Zap, title: 'Generators', desc: 'Diesel generators for reliable on-site power supply.', color: 'bg-amber-50 text-amber-600' },
];

const tools = [
  { icon: Calculator, title: 'Concrete Calculator', desc: 'Calculate exact concrete volume for slabs, columns, beams and footings.', href: '/tools/concrete-calculator', color: 'bg-brand-50 text-brand-600' },
  { icon: Calculator, title: 'Block Calculator', desc: 'Estimate number of blocks needed for walls and partitions.', href: '/tools/block-calculator', color: 'bg-blue-50 text-blue-600' },
  { icon: Calculator, title: 'Aggregate Calculator', desc: 'Determine aggregate quantities for concrete mixing and road base.', href: '/tools/aggregate-calculator', color: 'bg-orange-50 text-orange-600' },
  { icon: Calculator, title: 'Paving Calculator', desc: 'Estimate paving blocks, sand and cement for driveways.', href: '/tools/paving-blocks-dar-es-salaam', color: 'bg-stone-50 text-stone-600' },
  { icon: Calculator, title: 'Material Estimator', desc: 'Comprehensive construction material estimation for your project.', href: '/tools/material-estimator', color: 'bg-green-50 text-green-600' },
  { icon: Calculator, title: 'Cost Calculator', desc: 'Estimate total construction costs for your building project.', href: '/tools/cost-calculator', color: 'bg-purple-50 text-purple-600' },
];

const industryHub = [
  { icon: BookOpen, title: 'Education Hub', desc: 'Learn about construction materials, methods and best practices.', href: '/learn', color: 'bg-green-50 text-green-600' },
  { icon: FileText, title: 'Government Hub', desc: 'Building permits, regulations, and compliance guides.', href: '/government', color: 'bg-purple-50 text-purple-600' },
  { icon: Users, title: 'Industry Directory', desc: 'Find contractors, architects, engineers and suppliers.', href: '/directory', color: 'bg-orange-50 text-orange-600' },
  { icon: Newspaper, title: 'Industry News', desc: 'Latest construction trends and material price updates.', href: '/news', color: 'bg-blue-50 text-blue-600' },
  { icon: Calculator, title: 'AI Tools', desc: 'Smart calculators and AI-powered construction planning.', href: '/tools', color: 'bg-brand-50 text-brand-600' },
  { icon: BookOpen, title: 'Building Guides', desc: 'Free guides on concrete, aggregates and construction.', href: '/resources/guides', color: 'bg-teal-50 text-teal-600' },
];

const productOptions = [
  'Ready Mix Concrete', 'Aggregates', 'Gravel', 'Washed Sand', 'Road Base', 'Concrete Blocks', 'Paving Blocks', 'Culvert Pipes', 'Precast Products', 'Equipment Hire', 'Other'
];

const locationOptions = [
  'Dar es Salaam', 'Zanzibar', 'Dodoma', 'Arusha', 'Mwanza', 'Other'
];

export default function Home() {
  const [showQuote, setShowQuote] = useState(false);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [form, setForm] = useState({ product: '', location: '', quantity: '', phone: '' });

  const handleQuickQuote = () => {
    const msg = `Hi Tanzibaba!%0A%0AI need a price estimate:%0A%0AProduct: ${form.product || 'Not specified'}%0ALocation: ${form.location || 'Not specified'}%0AQuantity: ${form.quantity || 'Not specified'}%0APhone: ${form.phone || 'Not specified'}`;
    window.open(`https://wa.me/255716002790?text=${msg}`, '_blank');
    setShowQuote(false);
    setForm({ product: '', location: '', quantity: '', phone: '' });
  };

  return (
    <>
      <Navbar />
      <main>
        {/* 1. HERO */}
        <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)' }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pt-24 md:pb-20 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-brand-500/20">
                <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" /> Tanzania&apos;s Premium Building Materials & Equipment Supplier
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-4 md:mb-6">
                Premium Concrete Made with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Washed Sand Technology</span>{' '}
                for Superior Strength and Performance
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-6 md:mb-8 max-w-2xl">
                Trusted supplier of concrete, aggregates, blocks, building materials and equipment hire for commercial, industrial and infrastructure projects across Tanzania.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10">
                <button onClick={() => setShowQuote(true)} className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all shadow-lg shadow-brand-600/30 text-sm md:text-base">
                  Get Price <ArrowRight className="w-4 h-4" />
                </button>
                <a onClick={() => setShowLeadCapture(true)} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all shadow-lg text-sm md:text-base cursor-pointer">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" /> WhatsApp Us
                </a>
                <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all border border-white/20 text-sm md:text-base">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" /> Call Now
                </a>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {trustBadges.map(b => (
                  <div key={b.label} className="flex items-center gap-2">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-brand-600/20 rounded-lg flex items-center justify-center">
                      <b.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-400" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-300">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 1b. TRUST SECTION */}
        <section className="py-16 md:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4">Why Choose Tanzibaba?</h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 text-sm md:text-base">Trusted by contractors, developers and homeowners across Tanzania for premium building materials and reliable supply.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
              {[
                { icon: Award, title: 'Premium Concrete', desc: 'Engineered for consistency and superior strength across all grades.' },
                { icon: Droplets, title: 'Washed Sand Technology', desc: 'Cleaner sand removes impurities for stronger, more durable concrete.' },
                { icon: Beaker, title: 'Laboratory Tested', desc: 'Every batch verified through rigorous laboratory testing.' },
                { icon: Truck, title: 'Reliable Supply & Equipment', desc: 'Modern fleet and strategic plants ensure on-time delivery.' },
                { icon: CheckCircle, title: 'Transparent Pricing', desc: 'Direct factory pricing with no hidden costs. VAT included.' },
              ].map(item => (
                <div key={item.title} className="text-center p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-semibold">Response within 2 hours</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-200">
                <Truck className="w-4 h-4" />
                <span className="text-sm font-semibold">Free delivery over 50m³</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full border border-purple-200">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold">100% quality guaranteed</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 text-center mb-6">What Our Customers Say</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  { name: 'James M.', role: 'Contractor, Kinondoni', text: 'Tanzibaba delivered C30 concrete to our apartment project on time and at the right consistency. Their washed sand technology makes a real difference in strength.' },
                  { name: 'Sarah K.', role: 'Developer, Ilala', text: 'We switched to Tanzibaba for our commercial building project. The quality is consistent and their pricing is transparent — no hidden costs.' },
                  { name: 'David L.', role: 'Project Manager, Temeke', text: 'Reliable supply and great customer support. They responded to our WhatsApp inquiry within minutes and had concrete delivered the next day.' },
                ].map(t => (
                  <div key={t.name} className="bg-white rounded-xl border border-gray-200 p-5">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">&ldquo;{t.text}&rdquo;</p>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. PRODUCTS - Immediately below hero */}
        <section id="products" className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Package className="w-4 h-4" /> Our Products
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">Premium Building Materials</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Premium materials from foundation to finish — ready mix concrete, aggregates, blocks and more.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {products.map(p => (
                <Link key={p.title} href={p.href} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300 flex flex-col h-full">
                  <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <div className="p-4 md:p-5 flex flex-col flex-1">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{p.title}</h3>
                    <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4 flex-1 line-clamp-2">{p.desc}</p>
                    <span className="text-sm font-semibold text-brand-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 3. WHY OUR CONCRETE IS DIFFERENT */}
        <section className="py-12 md:py-16 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Award className="w-4 h-4" /> Premium Concrete Quality
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">Why Our Concrete Is Different</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Premium concrete starts with better materials. Our washed sand technology and quality controlled production deliver consistent, high-performance results.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {qualityItems.map(q => (
                <div key={q.title} className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <q.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{q.title}</h3>
                  <p className="text-xs md:text-sm text-gray-500">{q.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SERVICES */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <HardHat className="w-4 h-4" /> Our Services
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Construction Supply & Equipment Services</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Comprehensive building materials supply, equipment hire and logistics services for construction projects of all sizes.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {services.map(s => (
                <Link key={s.title} href={s.href} className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  </div>
                  <div className="p-4 md:p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-brand-600 transition-colors text-sm md:text-base">{s.title}</h3>
                    <p className="text-xs md:text-sm text-gray-500 flex-1">{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. EQUIPMENT HIRE */}
        <section className="py-12 md:py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <HardHat className="w-4 h-4" /> Equipment Hire
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">Heavy Equipment & Machinery Hire</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Well-maintained construction equipment available for short and long-term hire across Tanzania. All machines operated by trained professionals.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {equipment.map(e => (
                <div key={e.title} className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 hover:shadow-lg hover:border-brand-200 transition-all duration-300 text-center group">
                  <div className={`w-12 h-12 md:w-14 md:h-14 ${e.color} rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                    <e.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">{e.title}</h3>
                  <p className="text-xs md:text-sm text-gray-500">{e.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 md:mt-10">
              <Link href="/equipment-hire" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all shadow-lg text-sm md:text-base">
                View All Equipment <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. WHY CHOOSE TANZIBABA */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <CheckCircle className="w-4 h-4" /> Why Choose Us
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">Why Choose Tanzibaba?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">We combine premium materials, competitive pricing and reliable supply to deliver the best construction experience.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {whyUs.map(w => (
                <div key={w.title} className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <w.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{w.title}</h3>
                  <p className="text-xs md:text-sm text-gray-500">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CONSTRUCTION TOOLS */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Calculator className="w-4 h-4" /> Construction Calculators
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">Smart Construction Tools</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Free online tools to help you estimate materials, costs and quantities for your construction project.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {tools.map(t => (
                <Link key={t.title} href={t.href} className="group bg-gray-50 rounded-2xl border border-gray-100 p-5 md:p-6 hover:shadow-xl hover:border-brand-200 transition-all duration-300 text-center">
                  <div className={`w-12 h-12 md:w-14 md:h-14 ${t.color} rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                    <t.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{t.title}</h3>
                  <p className="text-xs md:text-sm text-gray-500">{t.desc}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6 md:mt-8">
              <Link href="/tools" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-sm md:text-base">
                View All Tools <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 8. INDUSTRY HUB */}
        <section className="py-12 md:py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <BookOpen className="w-4 h-4" /> Industry Hub
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">Construction Knowledge Center</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Stay informed with the latest industry news, guides, government procedures and professional resources.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {industryHub.map(h => (
                <Link key={h.title} href={h.href} className="group bg-white rounded-2xl border border-gray-200 p-5 md:p-6 hover:shadow-lg hover:border-brand-200 transition-all duration-300">
                  <div className={`w-10 h-10 md:w-12 md:h-12 ${h.color} rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                    <h.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-brand-600 transition-colors text-sm md:text-base">{h.title}</h3>
                  <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-3">{h.desc}</p>
                  <span className="text-sm font-semibold text-brand-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <CheckCircle className="w-4 h-4" /> FAQ
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Quick answers to common questions about Tanzibaba products and services.</p>
            </div>
            <div className="space-y-4">
              {[
                { q: 'What is ready mix concrete?', a: 'Ready mix concrete is concrete that is batched at a central plant and delivered to your construction site in a ready-to-use state. It ensures consistent quality, precise mix ratios and saves time compared to on-site mixing. Tanzibaba produces ready mix concrete using computerized batching and washed sand technology for superior strength and performance.' },
                { q: 'What concrete grades does Tanzibaba supply?', a: 'We supply a full range of concrete grades from C10 to C50, including C15, C20, C25, C30, C35, C40 and C45. Each grade is designed for specific applications — from lean blinding (C10) to high-strength structural concrete (C50). Our team can help you select the right grade for your project requirements.' },
                { q: 'Do you deliver to Zanzibar and Dodoma?', a: 'Yes, we deliver to Dar es Salaam, Zanzibar, Dodoma, Arusha, Mwanza and other locations across Tanzania. Our strategic plant locations and modern fleet ensure reliable delivery to your construction site. Contact us on WhatsApp at +255 716 002 790 for delivery availability and scheduling in your area.' },
                { q: 'What is washed sand technology?', a: 'Washed sand technology involves thoroughly cleaning sand to remove silt, clay and other impurities before it is used in concrete production. Cleaner sand produces stronger, more durable concrete with better workability. Tanzibaba uses washed sand across all our concrete products to deliver consistent, premium-quality results.' },
                { q: 'How do I get a quote?', a: 'Getting a quote is quick and easy. Click the "Get Price" button on our website, select your product, location and quantity, and we\'ll send you a price estimate via WhatsApp within minutes. You can also call us at +255 716 002 790 or message us directly on WhatsApp for an immediate response.' },
                { q: 'What payment methods do you accept?', a: 'We accept bank transfers, mobile money (M-Pesa, Tigo Pesa, Airtel Money), and cash payments. For large orders, we offer flexible payment terms including partial payment on delivery. Contact our team to discuss the best payment option for your project.' },
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                    {faq.q}
                    <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform shrink-0" />
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
          { '@type': 'Question', name: 'What is ready mix concrete?', acceptedAnswer: { '@type': 'Answer', text: 'Ready mix concrete is concrete that is batched at a central plant and delivered to your construction site in a ready-to-use state. It ensures consistent quality, precise mix ratios and saves time compared to on-site mixing. Tanzibaba produces ready mix concrete using computerized batching and washed sand technology for superior strength and performance.' } },
          { '@type': 'Question', name: 'What concrete grades does Tanzibaba supply?', acceptedAnswer: { '@type': 'Answer', text: 'We supply a full range of concrete grades from C10 to C50, including C15, C20, C25, C30, C35, C40 and C45. Each grade is designed for specific applications — from lean blinding (C10) to high-strength structural concrete (C50). Our team can help you select the right grade for your project requirements.' } },
          { '@type': 'Question', name: 'Do you deliver to Zanzibar and Dodoma?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we deliver to Dar es Salaam, Zanzibar, Dodoma, Arusha, Mwanza and other locations across Tanzania. Our strategic plant locations and modern fleet ensure reliable delivery to your construction site. Contact us on WhatsApp at +255 716 002 790 for delivery availability and scheduling in your area.' } },
          { '@type': 'Question', name: 'What is washed sand technology?', acceptedAnswer: { '@type': 'Answer', text: 'Washed sand technology involves thoroughly cleaning sand to remove silt, clay and other impurities before it is used in concrete production. Cleaner sand produces stronger, more durable concrete with better workability. Tanzibaba uses washed sand across all our concrete products to deliver consistent, premium-quality results.' } },
          { '@type': 'Question', name: 'How do I get a quote?', acceptedAnswer: { '@type': 'Answer', text: 'Getting a quote is quick and easy. Click the "Get Price" button on our website, select your product, location and quantity, and we\'ll send you a price estimate via WhatsApp within minutes. You can also call us at +255 716 002 790 or message us directly on WhatsApp for an immediate response.' } },
          { '@type': 'Question', name: 'What payment methods do you accept?', acceptedAnswer: { '@type': 'Answer', text: 'We accept bank transfers, mobile money (M-Pesa, Tigo Pesa, Airtel Money), and cash payments. For large orders, we offer flexible payment terms including partial payment on delivery. Contact our team to discuss the best payment option for your project.' } },
        ] }) }} />

        {/* 10. QUOTE CTA */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl p-6 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)' }} />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4">Need Building Materials or Equipment?</h2>
                <p className="text-brand-100 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">Get a quick estimate in under 30 seconds. Our team will help you select the right materials or equipment for your project.</p>
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                  <button onClick={() => setShowQuote(true)} className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl hover:bg-brand-50 transition-all shadow-lg text-sm md:text-base">
                    Get Price <ArrowRight className="w-4 h-4" />
                  </button>
                  <a onClick={() => setShowLeadCapture(true)} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all shadow-lg text-sm md:text-base cursor-pointer">
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" /> WhatsApp Us
                  </a>
                  <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all text-sm md:text-base">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" /> Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FIXED CTA BAR - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex gap-2 justify-center items-center z-40 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <button onClick={() => setShowQuote(true)} className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-all">
          <Calculator className="w-4 h-4" /> Get Price
        </button>
        <a href="tel:+255716002790" className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-all">
          <Phone className="w-4 h-4" /> Call
        </a>
        <a onClick={() => setShowLeadCapture(true)} className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-all cursor-pointer">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>

      {/* QUICK QUOTE MODAL */}
      {showQuote && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4" onClick={() => setShowQuote(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative bg-white w-full md:max-w-md md:rounded-2xl rounded-t-2xl p-6 shadow-2xl animate-in slide-in-from-bottom duration-300" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Get Instant Price</h3>
                <p className="text-sm text-gray-500">Get an estimate via WhatsApp in 30 seconds</p>
              </div>
              <button onClick={() => setShowQuote(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Product</label>
                <select value={form.product} onChange={e => setForm(f => ({ ...f, product: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none">
                  <option value="">Select product</option>
                  {productOptions.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Location</label>
                <select value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none">
                  <option value="">Select location</option>
                  {locationOptions.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Quantity</label>
                <input type="text" value={form.quantity} onChange={e => setForm(f => ({ ...f, quantity: e.target.value }))} placeholder="e.g. 50 cubic meters" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="e.g. 0712 345 678" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" />
              </div>

              <button onClick={handleQuickQuote} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-2">
                <MessageCircle className="w-5 h-5" /> Get WhatsApp Estimate
              </button>

              <p className="text-xs text-gray-400 text-center">We&apos;ll respond with a price estimate within minutes</p>
            </div>
          </div>
        </div>
      )}

      {/* LEAD CAPTURE MODAL */}
      {showLeadCapture && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4" onClick={() => setShowLeadCapture(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative bg-white w-full md:max-w-md md:rounded-2xl rounded-t-2xl shadow-2xl animate-in slide-in-from-bottom duration-300" onClick={e => e.stopPropagation()}>
            <LeadCaptureForm onClose={() => setShowLeadCapture(false)} />
          </div>
        </div>
      )}

      <div className="h-16 md:hidden" />
      <Footer />
    </>
  );
}
