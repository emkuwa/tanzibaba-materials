'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Truck, ArrowRight, HardHat, Building2, Mountain, Package, Square, Route,
  Phone, MessageCircle, Zap, Award, Shield, Globe, Droplets, Search, Wrench,
  HeadphonesIcon, Warehouse, ShoppingCart, CheckCircle
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';

const equipmentList = [
  { id: 'excavator', name: 'Excavators', desc: 'Powerful excavation machines for digging, demolition and material handling on any construction site.', image: '/images/equipment/excavator-hire-tanzania.webp', href: '/equipment/excavator' },
  { id: 'bulldozer', name: 'Bulldozers', desc: 'Heavy-duty bulldozers for grading, pushing and earthmoving across challenging terrain.', image: '/images/equipment/bulldozer-hire-tanzania.webp', href: '/equipment/bulldozer' },
  { id: 'dump-truck', name: 'Dump Trucks', desc: 'High-capacity dump trucks for transporting aggregates, earth and construction materials.', image: '/images/equipment/dump-truck-hire-tanzania.webp', href: '/equipment/dump-truck' },
  { id: 'concrete-pump', name: 'Concrete Pumps', desc: 'Reliable concrete pumping solutions for precise placement at height and distance.', image: '/images/equipment/concrete-pump-truck-tanzania.webp', href: '/equipment/concrete-pump' },
  { id: 'mobile-crane', name: 'Mobile Cranes', desc: 'Versatile mobile cranes for lifting heavy loads on construction and industrial sites.', image: '/images/equipment/mobile-crane-hire-tanzania.webp', href: '/equipment/mobile-crane' },
  { id: 'wheel-loader', name: 'Wheel Loaders', desc: 'Productive wheel loaders for loading, carrying and material handling operations.', image: '/images/equipment/wheel-loader-hire-tanzania.webp', href: '/equipment/wheel-loader' },
];

const materials = [
  { icon: Truck, title: 'Ready Mix Concrete', desc: 'Grades C10 to C50 with washed sand technology.', href: '/ready-mix-concrete-dar-es-salaam', image: '/images/new/ready-mix-concrete.webp' },
  { icon: Mountain, title: 'Aggregates', desc: 'Crushed stone, gravel and sand for all applications.', href: '/aggregates-supplier-dar-es-salaam', image: '/images/new/aggregates.webp' },
  { icon: Square, title: 'Concrete Blocks', desc: 'Hollow and solid blocks for walls and foundations.', href: '/blocks-supplier-dar-es-salaam', image: '/images/new/hollow-blocks.webp' },
  { icon: Package, title: 'Paving Blocks', desc: 'Interlocking blocks for driveways and walkways.', href: '/paving-blocks-dar-es-salaam', image: '/images/new/paving-blocks.png' },
  { icon: Route, title: 'Road Base', desc: 'Base and sub-base materials for road projects.', href: '/aggregates-supplier-dar-es-salaam', image: '/images/new/road-construction.webp' },
  { icon: Package, title: 'Culvert Pipes', desc: 'Precast concrete pipes for drainage and infrastructure.', href: '/culvert-pipes-dar-es-salaam', image: '/images/new/culvert-pipes.webp' },
];

const servicesList = [
  { title: 'Building Materials', desc: 'Premium concrete, aggregates, blocks and civil works materials.', image: '/images/new/ready-mix-concrete.webp', href: '/ready-mix-concrete-dar-es-salaam' },
  { title: 'Ready Mix Concrete', desc: 'Computer-batched concrete delivered fresh to your site.', image: '/images/new/concrete-pump.webp', href: '/ready-mix-concrete-dar-es-salaam' },
  { title: 'Aggregates', desc: 'Quality crushed stone, gravel, sand and road base materials.', image: '/images/new/aggregates.webp', href: '/aggregates-supplier-dar-es-salaam' },
  { title: 'Equipment Hire', desc: 'Excavators, bulldozers, cranes and heavy machinery for hire.', image: '/images/equipment/excavator-hire-tanzania.webp', href: '/equipment' },
  { title: 'Truck Hire', desc: 'Dump trucks, lowbed trailers and transport for your materials.', image: '/images/equipment/dump-truck-hire-tanzania.webp', href: '/equipment' },
  { title: 'Project Procurement', desc: 'End-to-end material procurement for construction projects.', image: '/images/new/commercial-building.webp', href: '/services/ready-mix-concrete-dar-es-salaam' },
  { title: 'Logistics', desc: 'Reliable delivery and supply chain for construction sites.', image: '/images/new/crusher-plant.webp', href: '/services/ready-mix-concrete-dar-es-salaam' },
  { title: 'Bulk Supply', desc: 'Volume pricing and scheduled delivery for large projects.', image: '/images/new/solid-blocks.webp', href: '/services/ready-mix-concrete-dar-es-salaam' },
];

const industries = [
  { icon: Building2, title: 'Commercial', desc: 'Office buildings, retail, hotels and mixed-use developments.', href: '/commercial-construction-dar-es-salaam' },
  { icon: HardHat, title: 'Industrial', desc: 'Factories, warehouses and industrial facilities.', href: '/industrial-construction-tanzania' },
  { icon: Route, title: 'Infrastructure', desc: 'Roads, bridges, culverts and public works.', href: '/infrastructure-construction-tanzania' },
  { icon: Globe, title: 'Residential', desc: 'Homes, apartments and residential complexes.', href: '/ready-mix-concrete-dar-es-salaam' },
];

const whyUs = [
  { icon: Award, title: 'Premium Concrete Quality', desc: 'Engineered for consistency and superior strength across all grades from C10 to C50.' },
  { icon: Droplets, title: 'Washed Sand Technology', desc: 'Advanced sand washing removes impurities for stronger, more durable concrete.' },
  { icon: Shield, title: 'Laboratory Tested', desc: 'Every batch verified through laboratory testing to ensure consistent quality.' },
  { icon: Truck, title: 'Reliable Supply Network', desc: 'Modern fleet and strategic plants ensure on-time delivery across Tanzania.' },
  { icon: HeadphonesIcon, title: '24/7 Customer Support', desc: 'Dedicated support team ready to help with orders, delivery and inquiries.' },
  { icon: HardHat, title: 'Industry Expertise', desc: 'Decades of experience serving commercial, industrial and infrastructure projects.' },
];

const productOptions = [
  'Ready Mix Concrete', 'Aggregates', 'Gravel', 'Washed Sand', 'Road Base', 'Concrete Blocks', 'Paving Blocks', 'Culvert Pipes', 'Precast Products', 'Other'
];

const locationOptions = [
  'Dar es Salaam', 'Zanzibar', 'Dodoma', 'Arusha', 'Mwanza', 'Other'
];

export default function Home() {
  const [showQuote, setShowQuote] = useState(false);
  const [form, setForm] = useState({ product: '', location: '', quantity: '', phone: '' });
  const [search, setSearch] = useState('');

  const filteredEquipment = useMemo(() => {
    if (!search.trim()) return equipmentList;
    const q = search.toLowerCase();
    return equipmentList.filter(e => e.name.toLowerCase().includes(q) || e.desc.toLowerCase().includes(q));
  }, [search]);

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
        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/mobile-hero.webp" alt="Construction materials and equipment Tanzania" fill className="object-cover" priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/50" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24 w-full">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-brand-500/20">
                <Zap className="w-3.5 h-3.5" /> Tanzania&apos;s Construction Supply Network
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] mb-4 tracking-tight">
                Construction Materials<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">&amp; Equipment</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-white/90 mb-2">Supply &bull; Hire &bull; Procurement</p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
                Premium building materials and heavy equipment across Tanzania.
              </p>
              <p className="text-sm text-gray-500 mb-6">Get matched in under 2 minutes.</p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => setShowQuote(true)} className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-600/30 text-base">
                  Request Quote <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/equipment" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all border border-white/20 text-base">
                  Browse Equipment <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex items-center gap-4 mt-6 text-sm">
                <a href="tel:+255716002790" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <span className="text-gray-600">|</span>
                <a href="https://wa.me/255716002790" target="_blank" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="py-12 md:py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-extrabold text-brand-600 mb-1">
                  <AnimatedCounter end={150} suffix="+" />
                </div>
                <p className="text-sm md:text-base text-gray-600 font-medium">Construction Materials</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-extrabold text-brand-600 mb-1">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <p className="text-sm md:text-base text-gray-600 font-medium">Equipment Categories</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-extrabold text-brand-600 mb-1">
                  <AnimatedCounter end={80} suffix="+" />
                </div>
                <p className="text-sm md:text-base text-gray-600 font-medium">Partner Suppliers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-extrabold text-brand-600 mb-1">
                  <AnimatedCounter end={2} suffix="" />
                </div>
                <p className="text-sm md:text-base text-gray-600 font-medium">Tanzania &amp; Zanzibar</p>
              </div>
            </div>
          </div>
        </section>

        {/* EQUIPMENT SEARCH */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search construction equipment..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
        </section>

        {/* EQUIPMENT */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 md:mb-12">
              <div>
                <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                  <Wrench className="w-4 h-4" /> Equipment Hire
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">Popular Equipment</h2>
              </div>
              <Link href="/equipment" className="hidden sm:inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:text-brand-700">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            {filteredEquipment.length === 0 ? (
              <p className="text-center text-gray-500 py-12">No equipment found matching &ldquo;{search}&rdquo;</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEquipment.map(eq => (
                  <div key={eq.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
                    <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                      <Image src={eq.image} alt={eq.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{eq.name}</h3>
                      <p className="text-sm text-gray-500 mb-4 flex-1">{eq.desc}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-medium">Rent</span>
                        <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-medium">Buy</span>
                        <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">Rent-to-Own</span>
                      </div>
                      <Link href={eq.href} className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-green-600/20 text-sm w-full">
                        <MessageCircle className="w-4 h-4" /> Request Quote
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="text-center mt-8 sm:hidden">
              <Link href="/equipment" className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm">
                View All Equipment <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* MATERIALS */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                <Package className="w-4 h-4" /> Building Materials
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">Premium Construction Materials</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">From foundation to finish — quality materials for every stage of construction.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map(m => (
                <Link key={m.title} href={m.href} className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300">
                  <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
                    <Image src={m.image} alt={m.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-1 text-base">{m.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{m.desc}</p>
                    <span className="text-sm font-semibold text-brand-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                <HardHat className="w-4 h-4" /> Our Services
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">Complete Construction Services</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">End-to-end construction supply, equipment and logistics services across Tanzania.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesList.map(s => (
                <Link key={s.title} href={s.href} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base group-hover:text-brand-600 transition-colors">{s.title}</h3>
                    <p className="text-xs md:text-sm text-gray-500 mb-3">{s.desc}</p>
                    <span className="text-sm font-semibold text-brand-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                <Building2 className="w-4 h-4" /> Industries We Serve
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">Serving All Construction Sectors</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">From commercial towers to residential homes — we deliver for every project.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map(ind => (
                <Link key={ind.title} href={ind.href} className="group bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all duration-300 text-center">
                  <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <ind.icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{ind.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{ind.desc}</p>
                  <span className="text-sm font-semibold text-brand-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE TANZIBABA */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                <Award className="w-4 h-4" /> Why Choose Us
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">Why Tanzibaba?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Trusted by Tanzania&apos;s leading contractors and developers for premium materials and equipment.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyUs.map(w => (
                <div key={w.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                    <w.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{w.title}</h3>
                  <p className="text-sm text-gray-500">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)' }} />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">Ready to Start Your Project?</h2>
                <p className="text-brand-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">Get a quote in under 2 minutes. Our team will match you with the right materials and equipment.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button onClick={() => setShowQuote(true)} className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold px-8 py-4 rounded-xl hover:bg-brand-50 transition-all shadow-lg text-base">
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </button>
                  <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all border border-white/30 text-base">
                    <Phone className="w-4 h-4" /> Call +255 716 002 790
                  </a>
                </div>
                <div className="flex items-center justify-center gap-6 mt-8 text-sm text-brand-200">
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Response within 2 hours</span>
                  <span className="flex items-center gap-2"><Truck className="w-4 h-4" /> Free delivery over 50m&sup3;</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* STICKY MOBILE BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex gap-2 z-40 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <button onClick={() => setShowQuote(true)} className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-lg">
          Request Quote
        </button>
        <a href="tel:+255716002790" className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all">
          <Phone className="w-4 h-4" /> Call
        </a>
        <a href="https://wa.me/255716002790" target="_blank" className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>

      {/* QUOTE MODAL */}
      {showQuote && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4" onClick={() => setShowQuote(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative bg-white w-full md:max-w-md md:rounded-2xl rounded-t-2xl p-6 shadow-2xl animate-in slide-in-from-bottom duration-300" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Request Quote</h3>
                <p className="text-sm text-gray-500">Get matched in under 2 minutes</p>
              </div>
              <button onClick={() => setShowQuote(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
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
              <button onClick={handleQuickQuote} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-2 text-base">
                <MessageCircle className="w-5 h-5" /> Get WhatsApp Estimate
              </button>
              <p className="text-xs text-gray-400 text-center">We&apos;ll respond with a quote within minutes</p>
            </div>
          </div>
        </div>
      )}

      <div className="h-16 md:hidden" />
      <Footer />
    </>
  );
}
