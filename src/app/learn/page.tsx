import Link from 'next/link';
import { BookOpen, HardHat, Package, Zap, Mountain, Grid3x3, Route, Building2, Factory, Newspaper, Brain, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { knowledgeCategories, type KnowledgeCategory } from '@/data/knowledge/categories';
import { allArticles } from '@/data/knowledge/articles';

const iconMap: Record<string, React.ElementType> = { HardHat, Package, Zap, Mountain, Grid3x3, Route, Building2, Factory, Newspaper, Brain };

const colorMap: Record<string, string> = {
  'construction-guides': 'bg-blue-50 text-blue-600',
  'building-materials-guides': 'bg-orange-50 text-orange-600',
  'ready-mix-concrete-academy': 'bg-green-50 text-green-600',
  'aggregates-gravel-academy': 'bg-amber-50 text-amber-600',
  'blocks-paving-academy': 'bg-purple-50 text-purple-600',
  'infrastructure-academy': 'bg-red-50 text-red-600',
  'commercial-construction-academy': 'bg-indigo-50 text-indigo-600',
  'industrial-construction-academy': 'bg-cyan-50 text-cyan-600',
  'tanzania-construction-news': 'bg-pink-50 text-pink-600',
  'ai-tools-for-construction': 'bg-violet-50 text-violet-600',
};

export const metadata = {
  title: 'Construction Education Hub | Tanzibaba',
  description: `Free educational resources on construction materials, methods, engineering, cost guides, safety and project planning in Tanzania. ${allArticles.length}+ expert guides.`,
  alternates: { canonical: 'https://materials.tanzibaba.com/learn' },
};

export default function LearnPage() {
  const categoriesWithCounts = knowledgeCategories.map(c => ({
    ...c,
    count: allArticles.filter(a => a.category === c.slug).length,
  }));

  const featured = allArticles.slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-brand-500/20">
            <BookOpen className="w-4 h-4" /> {allArticles.length}+ Articles
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Construction Education Hub</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Expert guides on construction materials, methods, costs, safety and project planning in Tanzania. Written by industry professionals.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-16">
          {categoriesWithCounts.map(c => {
            const Icon = iconMap[c.icon] || Package;
            return (
              <Link key={c.slug} href={`/learn?category=${c.slug}`} className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-xl hover:border-brand-200 transition-all duration-300 group">
                <div className={`w-12 h-12 ${colorMap[c.slug] || 'bg-gray-50 text-gray-600'} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{c.name}</h3>
                <p className="text-xs text-gray-500 mb-2 line-clamp-2">{c.description}</p>
                <span className="text-xs font-semibold text-brand-600">{c.count} articles</span>
              </Link>
            );
          })}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {featured.map(a => {
            const cat = knowledgeCategories.find(c => c.slug === a.category);
            return (
              <Link key={a.slug} href={`/learn/${a.slug}`} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all duration-300 group">
                <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">{cat?.name || a.category}</span>
                <h3 className="font-bold text-gray-900 mt-1 mb-2 group-hover:text-brand-600 transition-colors">{a.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{a.description}</p>
                <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                  <span>{a.readingTime}</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="bg-brand-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Have A Construction Question?</h2>
          <p className="text-brand-100 mb-6 max-w-xl mx-auto">Our technical team is ready to help with any construction question. Get expert advice on materials, methods and project planning.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/255716002790" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" /> Ask on WhatsApp
            </a>
            <a href="tel:+255716002790" className="bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Call +255 716 002 790
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
