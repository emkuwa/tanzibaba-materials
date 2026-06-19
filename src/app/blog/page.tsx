import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'Concrete Blog | Ready-Mix Guide & Tips | Tanzibaba',
  description: 'Expert guides on ready-mix concrete in Dar es Salaam. Price guides, grade comparisons, pump tips, and construction advice.',
  keywords: ['concrete blog', 'ready mix concrete guide', 'concrete tips tanzania', 'construction blog dar es salaam'],
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    title: 'Concrete Blog | Ready-Mix Guide & Tips | Tanzibaba',
    description: 'Expert guides on ready-mix concrete in Dar es Salaam. Price guides, grade comparisons, pump tips, and construction advice.',
    url: `${siteUrl}/blog`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Tanzibaba Concrete Blog',
  description: 'Expert guides on ready-mix concrete in Dar es Salaam. Price guides, grade comparisons, pump tips, and construction advice.',
  publisher: { '@type': 'Organization', name: 'Tanzibaba' },
};

const articles = [
  {
    title: 'Concrete Price Guide Tanzania 2026',
    excerpt: 'Complete breakdown of concrete prices across all grades. From C10 at 130,000 TZS/m³ to C50 at 400,000 TZS/m³ — understand delivery costs, pump fees, and VAT.',
    slug: 'concrete-price-guide-tanzania',
    date: '16 June 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
  },
  {
    title: 'C25 vs C30 Concrete — Which Grade Do You Need?',
    excerpt: 'Compare C25 (25MPa) and C30 (30MPa) concrete for your construction project. Strength, applications, cost differences, and expert recommendations.',
    slug: 'c25-vs-c30-concrete',
    date: '10 June 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&q=80',
  },
  {
    title: 'Concrete Pump Guide — When & Why You Need One',
    excerpt: 'Complete guide to concrete pumps in Dar es Salaam. Line pumps vs boom pumps, when pumps are needed, costs, and benefits for your project.',
    slug: 'concrete-pump-guide',
    date: '5 June 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1624969862644-791f3dc98927?w=600&q=80',
  },
  {
    title: 'Ready-Mix Concrete for Apartment Buildings',
    excerpt: 'Essential guide to concrete for apartment construction in Dar es Salaam. Grade recommendations, costs, quantity estimation, and delivery planning.',
    slug: 'ready-mix-concrete-for-apartments',
    date: '28 May 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
  },
  {
    title: 'Foundation Concrete Guide — Right Mix for Your Project',
    excerpt: 'Complete guide to foundation concrete in Dar es Salaam. Grades, mix designs, curing tips, and common mistakes to avoid when building your foundation.',
    slug: 'foundation-concrete-guide',
    date: '20 May 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
  },
];

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80" alt="Concrete construction blog" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Calendar className="w-4 h-4" /> Concrete Blog
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Concrete Blog &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Construction Guides</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Expert guides on ready-mix concrete in Dar es Salaam. Price guides, grade comparisons, pump tips, and construction advice from the Tanzibaba team.
              </p>
            </div>
          </div>
        </section>

        <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mb-8">
          <Image src="/images/commercial-building.jpg" alt="Tanzibaba concrete blog — expert guides on ready-mix concrete in Dar es Salaam" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" priority />
        </div>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-brand-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-heading mb-4">Need Concrete Advice for Your Project?</h2>
            <p className="section-sub mb-8">
              Not sure which concrete grade you need? Our team can help you choose the right mix for your construction project in Dar es Salaam.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#quick-price" className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl">
                Get an Instant Quote <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all">
                <MessageCircle className="w-5 h-5 text-green-500" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
