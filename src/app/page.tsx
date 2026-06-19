'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Truck, ArrowRight, CheckCircle, HardHat, Building2, Mountain, Package, Square, Route,
  Calculator, BookOpen, Users, Newspaper, FileText, Phone, MessageCircle, Zap, Award,
  Shield, Globe, Hammer, Beaker, X, Droplets
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const trustBadges = [
  { icon: Award, label: 'Premium Concrete Quality' },
  { icon: Droplets, label: 'Washed Sand Technology' },
  { icon: Beaker, label: 'Laboratory Tested Concrete' },
  { icon: CheckCircle, label: 'Quality Controlled Production' },
  { icon: Truck, label: 'Reliable Supply Network' },
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
  { icon: Truck, title: 'Reliable Supply Network', desc: 'Modern fleet and strategic plant locations ensure on-time delivery for projects of any size.' },
  { icon: HardHat, title: 'Industry Expertise', desc: 'Decades of experience serving commercial, industrial and infrastructure projects across Tanzania.' },
];

const services = [
  { icon: Building2, title: 'Commercial', desc: 'Offices, retail, hotels, and mixed-use developments.', href: '/commercial-construction-dar-es-salaam', image: '/images/new/commercial-building.webp' },
  { icon: HardHat, title: 'Industrial', desc: 'Factories, warehouses, and industrial facilities.', href: '/industrial-construction-tanzania', image: '/images/new/concrete-pump.webp' },
  { icon: Route, title: 'Infrastructure', desc: 'Roads, bridges, culverts and public works.', href: '/infrastructure-construction-tanzania', image: '/images/new/road-construction.webp' },
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
  'Ready Mix Concrete', 'Aggregates', 'Gravel', 'Washed Sand', 'Road Base', 'Concrete Blocks', 'Paving Blocks', 'Culvert Pipes', 'Precast Products', 'Other'
];

const locationOptions = [
  'Dar es Salaam', 'Zanzibar', 'Dodoma', 'Arusha', 'Mwanza', 'Other'
];

export default function Home() {
  const [showQuote, setShowQuote] = useState(false);
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
                <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" /> Tanzania&apos;s Premium Building Materials Supplier
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-4 md:mb-6">
                Premium Concrete Made with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Washed Sand Technology</span>{' '}
                for Superior Strength and Performance
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-6 md:mb-8 max-w-2xl">
                Trusted supplier of concrete, aggregates, blocks and building materials for commercial, industrial and infrastructure projects across Tanzania.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10">
                <button onClick={() => setShowQuote(true)} className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all shadow-lg shadow-brand-600/30 text-sm md:text-base">
                  Get Price <ArrowRight className="w-4 h-4" />
                </button>
                <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all shadow-lg text-sm md:text-base">
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

        {/* 4. CONSTRUCTION SERVICES */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <HardHat className="w-4 h-4" /> Construction Services
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Professional Construction Services</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Professional construction and civil works services available for commercial, industrial and infrastructure developments.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {services.map(s => (
                <Link key={s.title} href={s.href} className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 33vw" />
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-brand-600 transition-colors text-sm md:text-base">{s.title}</h3>
                    <p className="text-xs md:text-sm text-gray-500">{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. WHY CHOOSE TANZIBABA */}
        <section className="py-12 md:py-20 px-4 bg-gray-50">
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

        {/* 6. CONSTRUCTION TOOLS */}
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

        {/* 7. INDUSTRY HUB */}
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

        {/* 8. QUOTE CTA */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl p-6 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)' }} />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4">Need Building Materials?</h2>
                <p className="text-brand-100 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">Get a quick estimate in under 30 seconds. Our team will help you select the right materials for your project.</p>
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                  <button onClick={() => setShowQuote(true)} className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl hover:bg-brand-50 transition-all shadow-lg text-sm md:text-base">
                    Get Price <ArrowRight className="w-4 h-4" />
                  </button>
                  <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all shadow-lg text-sm md:text-base">
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
        <a href="https://wa.me/255716002790" target="_blank" className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-all">
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

      <div className="h-16 md:hidden" />
      <Footer />
    </>
  );
}
