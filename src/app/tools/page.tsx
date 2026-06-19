import Link from 'next/link';
import { Calculator, Ruler, Square, PaintBucket, HardHat, DollarSign, FileText, Bot, ArrowRight } from 'lucide-react';

const tools = [
  { icon: Ruler, title: 'Concrete Calculator', desc: 'Calculate exact concrete volume for slabs, columns, beams and footings.', href: '/tools/concrete-calculator', color: 'bg-brand-50 text-brand-600' },
  { icon: Square, title: 'Block Calculator', desc: 'Estimate number of blocks needed for walls and partitions.', href: '/tools/block-calculator', color: 'bg-blue-50 text-blue-600' },
  { icon: Calculator, title: 'Sand Calculator', desc: 'Calculate sand volume required for your construction project.', href: '/tools/sand-calculator', color: 'bg-yellow-50 text-yellow-600' },
  { icon: Calculator, title: 'Aggregate Calculator', desc: 'Estimate aggregate and gravel quantities for your project.', href: '/tools/aggregate-calculator', color: 'bg-orange-50 text-orange-600' },
  { icon: Square, title: 'Tile Calculator', desc: 'Calculate number of tiles needed for floors and walls.', href: '/tools/tile-calculator', color: 'bg-purple-50 text-purple-600' },
  { icon: PaintBucket, title: 'Paint Calculator', desc: 'Estimate paint quantity needed for walls and ceilings.', href: '/tools/paint-calculator', color: 'bg-pink-50 text-pink-600' },
  { icon: HardHat, title: 'Material Estimator', desc: 'Comprehensive construction material estimation.', href: '/tools/material-estimator', color: 'bg-green-50 text-green-600' },
  { icon: DollarSign, title: 'Cost Calculator', desc: 'Estimate total construction costs for your project.', href: '/tools/cost-calculator', color: 'bg-emerald-50 text-emerald-600' },
  { icon: FileText, title: 'BOQ Generator', desc: 'Generate a bill of quantities for your construction project.', href: '/tools/boq-generator', color: 'bg-indigo-50 text-indigo-600' },
  { icon: Bot, title: 'AI Assistant', desc: 'Get AI-powered construction advice and answers.', href: '/ai-assistant', color: 'bg-rose-50 text-rose-600' },
];

export const metadata = {
  title: 'Free Construction Calculators & AI Tools | Tanzibaba',
  description: 'Free online construction calculators for concrete, blocks, sand, aggregates, tiles, paint and more. AI-powered construction assistant for Tanzania.',
};

export default function ToolsPage() {
  return (
    <>
      <head>
        <title>Construction Calculators & Tools | Tanzibaba</title>
        <meta name="description" content="Free online construction calculators — concrete, blocks, sand, aggregate, tile, paint calculators and material estimators for Tanzania." />
        <link rel="canonical" href="https://materials.tanzibaba.com/tools" />
      </head>
      <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-brand-500/20">
            <Calculator className="w-4 h-4" /> Free Construction Tools
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">AI Construction Calculators</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Free online tools to help you estimate materials, costs and quantities for your construction project in Tanzania.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(t => (
            <Link key={t.title} href={t.href} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-brand-200 transition-all duration-300 group">
              <div className={`w-14 h-14 ${t.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <t.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{t.desc}</p>
              <span className="text-sm font-semibold text-brand-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Launch Tool <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
