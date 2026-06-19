import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, FileText, CheckSquare, LandPlot, Leaf, TrendingUp, Gavel, UserCheck, ExternalLink, Search, ArrowRight, Shield, BookOpen, ClipboardList } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { govCategories } from '@/data/government/categories';
import { siteUrl } from '@/data/locations';

const icons: Record<string, React.ReactNode> = {
  'building-permits': <Building2 className="w-8 h-8" />,
  'land-property': <LandPlot className="w-8 h-8" />,
  'environment': <Leaf className="w-8 h-8" />,
  'investment': <TrendingUp className="w-8 h-8" />,
  'public-procurement': <Gavel className="w-8 h-8" />,
  'professional-licensing': <UserCheck className="w-8 h-8" />,
  'official-resources': <ExternalLink className="w-8 h-8" />,
  'checklists': <ClipboardList className="w-8 h-8" />,
};

export const metadata: Metadata = {
  title: 'Government Hub Tanzania — Building Permits, Land & Construction Procedures | Tanzibaba',
  description: 'Complete government procedures guide for construction in Tanzania. Building permits, land processes, environmental compliance, investment guides and official resources.',
  alternates: { canonical: `${siteUrl}/government` },
  openGraph: { title: 'Government Hub Tanzania', description: 'Complete government procedures guide for construction in Tanzania.', url: `${siteUrl}/government`, siteName: 'Tanzibaba', type: 'website' },
};

export default function GovernmentHubPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gray-950 pt-28 pb-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Shield className="w-4 h-4" /> Tanzania Government Hub
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Government Procedures &amp; Resources</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Your complete guide to building permits, land processes, environmental compliance, investment procedures and government resources in Tanzania.</p>
          </div>
        </section>

        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {govCategories.map(cat => (
                <Link key={cat.slug} href={cat.slug === 'official-resources' ? '/government#official-resources' : cat.slug === 'checklists' ? '/government#checklists' : `/government/${cat.slug}`}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                  <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-4">{icons[cat.slug] || <BookOpen className="w-8 h-8" />}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{cat.description}</p>
                  <span className="text-xs font-semibold text-brand-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">{cat.pageCount} guides <ArrowRight className="w-3 h-3" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-amber-200">
              <Search className="w-4 h-4" /> Need Help With A Government Procedure?
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">We Can Help You Navigate The Process</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-8 text-sm">Whether you need building permits, land procedures or regulatory compliance, our team can provide guidance and connect you with qualified professionals.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30">
                Ask Via WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all border border-gray-200">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
