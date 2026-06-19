import Link from 'next/link';
import { BookOpen, HardHat, Package, BookText, DollarSign, Shield, ClipboardList, ArrowRight } from 'lucide-react';

const categories = [
  { icon: Package, title: 'Building Materials', desc: 'Everything about concrete, aggregates, blocks, paving and construction materials.', slug: 'building-materials', color: 'bg-orange-50 text-orange-600' },
  { icon: HardHat, title: 'Construction Methods', desc: 'Step-by-step guides on construction techniques, processes and best practices.', slug: 'construction-methods', color: 'bg-blue-50 text-blue-600' },
  { icon: BookText, title: 'Engineering Basics', desc: 'Fundamental engineering concepts for construction projects.', slug: 'engineering-basics', color: 'bg-indigo-50 text-indigo-600' },
  { icon: DollarSign, title: 'Cost Guides', desc: 'Construction cost estimates, material pricing and budget planning guides.', slug: 'cost-guides', color: 'bg-green-50 text-green-600' },
  { icon: Shield, title: 'Safety & PPE', desc: 'Construction safety practices, PPE requirements and site safety guidelines.', slug: 'safety-ppe', color: 'bg-red-50 text-red-600' },
  { icon: ClipboardList, title: 'Project Planning', desc: 'Project management, planning, scheduling and execution guides.', slug: 'project-planning', color: 'bg-purple-50 text-purple-600' },
];

const articles = [
  { title: 'Concrete Grade Guide: C10 to C50', desc: 'Complete guide to concrete grades, their strengths, applications and when to use each.', category: 'Building Materials', href: '/learn/concrete-grade-guide' },
  { title: 'How Concrete Is Delivered', desc: 'From batch plant to pour — understanding the concrete delivery process.', category: 'Construction Methods', href: '/blog/how-concrete-is-delivered' },
  { title: 'Concrete Price Guide Tanzania', desc: 'Current concrete prices in Dar es Salaam, factors affecting cost and how to budget.', category: 'Cost Guides', href: '/blog/concrete-price-guide-tanzania' },
  { title: 'Aggregate Sizes Guide', desc: 'Complete guide to crushed stone sizes, grading and applications in construction.', category: 'Building Materials', href: '/blog/aggregate-sizes-guide' },
  { title: 'Road Construction Materials Guide', desc: 'Materials used in road construction — from sub-base to asphalt.', category: 'Building Materials', href: '/blog/road-construction-materials-guide' },
  { title: 'Hotel Construction in Zanzibar', desc: 'Guide to building hotels and resorts in Zanzibar — regulations, materials and logistics.', category: 'Construction Methods', href: '/blog/hotel-construction-zanzibar' },
  { title: 'Building Construction Costs Tanzania', desc: 'Comprehensive guide to construction costs in Tanzania — materials, labour and more.', category: 'Cost Guides', href: '/blog/building-construction-costs-tanzania' },
  { title: 'Building Permits Guide', desc: 'Step-by-step guide to obtaining building permits in Tanzania.', category: 'Project Planning', href: '/government/building-permits-tanzania' },
];

export const metadata = {
  title: 'Construction Education Hub | Tanzibaba',
  description: 'Free educational resources on construction materials, methods, engineering, cost guides, safety and project planning in Tanzania.',
};

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-brand-500/20">
            <BookOpen className="w-4 h-4" /> Education Hub
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Construction Education Hub</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Free educational resources to help you understand construction materials, methods, costs and best practices in Tanzania.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map(c => (
            <Link key={c.slug} href={`/learn?category=${c.slug}`} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-brand-200 transition-all duration-300 group">
              <div className={`w-14 h-14 ${c.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <c.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{c.desc}</p>
              <span className="text-sm font-semibold text-brand-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Browse <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map(a => (
            <Link key={a.href} href={a.href} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all duration-300">
              <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">{a.category}</span>
              <h3 className="font-bold text-gray-900 mt-1 mb-2">{a.title}</h3>
              <p className="text-sm text-gray-500">{a.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
