import Link from 'next/link';
import { FileText, ClipboardCheck, Layout, FileSpreadsheet, FormInput, Download, ArrowRight } from 'lucide-react';

const categories = [
  { icon: FileText, title: 'Free Guides', desc: 'Downloadable construction guides and handbooks.', slug: 'guides', color: 'bg-blue-50 text-blue-600' },
  { icon: ClipboardCheck, title: 'Checklists', desc: 'Construction checklists for quality control and site management.', slug: 'checklists', color: 'bg-green-50 text-green-600' },
  { icon: Layout, title: 'Templates', desc: 'Ready-to-use construction document templates.', slug: 'templates', color: 'bg-purple-50 text-purple-600' },
  { icon: FileSpreadsheet, title: 'BOQ Samples', desc: 'Bill of quantities samples for different project types.', slug: 'boq-samples', color: 'bg-orange-50 text-orange-600' },
  { icon: FormInput, title: 'Construction Forms', desc: 'Site forms, inspection reports and project documentation.', slug: 'forms', color: 'bg-indigo-50 text-indigo-600' },
  { icon: Download, title: 'Downloads', desc: 'All downloadable resources in one place.', slug: 'downloads', color: 'bg-red-50 text-red-600' },
];

export const metadata = {
  title: 'Construction Resources & Downloads | Tanzibaba',
  description: 'Free construction guides, checklists, templates, BOQ samples, forms and downloads for construction professionals in Tanzania.',
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-brand-500/20">
            <FileText className="w-4 h-4" /> Resources
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Construction Resources</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Free guides, checklists, templates and forms for construction professionals and homeowners in Tanzania.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(c => (
            <Link key={c.slug} href={`/resources/${c.slug}`} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-brand-200 transition-all duration-300 group">
              <div className={`w-14 h-14 ${c.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <c.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{c.desc}</p>
              <span className="text-sm font-semibold text-brand-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
