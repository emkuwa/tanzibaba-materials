import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, MessageCircle, Newspaper, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Industry News | Construction & Concrete Updates Tanzania | Tanzibaba',
  description: 'Stay updated with the latest construction industry news, concrete market trends, and building material updates in Tanzania and Dar es Salaam.',
  keywords: ['construction news tanzania', 'concrete market updates', 'building materials news dar es salaam'],
  alternates: { canonical: `${siteUrl}/news` },
  openGraph: {
    title: 'Industry News | Construction & Concrete Updates Tanzania | Tanzibaba',
    description: 'Stay updated with the latest construction industry news, concrete market trends, and building material updates in Tanzania.',
    url: `${siteUrl}/news`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const newsItems = [
  {
    title: 'Tanzania Construction Sector Growth Reaches 8.2% in 2026',
    excerpt: 'The construction sector continues to be one of the fastest-growing industries in Tanzania, driven by government infrastructure projects and private investment.',
    date: '18 June 2026',
    category: 'Market Update',
  },
  {
    title: 'New Ready-Mix Concrete Standards Released by TBS',
    excerpt: 'The Tanzania Bureau of Standards has updated quality requirements for ready-mix concrete suppliers. Here is what it means for your projects.',
    date: '12 June 2026',
    category: 'Regulations',
  },
  {
    title: 'Dar es Salaam Infrastructure Projects Worth $2.1 Billion Underway',
    excerpt: 'Major road, bridge, and building projects are transforming Dar es Salaam, creating huge demand for construction materials across the city.',
    date: '5 June 2026',
    category: 'Projects',
  },
  {
    title: 'Aggregate Supply Chain Improvements in Zanzibar',
    excerpt: 'New logistics routes and quarry developments are making building materials more accessible and affordable for construction projects in Zanzibar.',
    date: '28 May 2026',
    category: 'Supply Chain',
  },
  {
    title: 'Sustainable Construction Practices Gain Momentum in East Africa',
    excerpt: 'Green building techniques and eco-friendly construction materials are becoming more popular as developers seek cost-effective and sustainable solutions.',
    date: '20 May 2026',
    category: 'Sustainability',
  },
  {
    title: 'Government Announces New Affordable Housing Initiative',
    excerpt: 'The Tanzanian government has launched a new program to boost affordable housing construction, creating opportunities for builders and material suppliers.',
    date: '14 May 2026',
    category: 'Policy',
  },
];

export default function NewsIndex() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[45vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80" alt="Construction industry news" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Newspaper className="w-4 h-4" /> Industry News
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                Construction &amp; Concrete{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Industry News</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Stay informed with the latest construction industry updates, concrete market trends, and building material news across Tanzania.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsItems.map((item, i) => (
                <article key={i} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg hover:border-brand-200 transition-all duration-300">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <span className="inline-block bg-brand-50 text-brand-700 px-3 py-1 rounded-full font-medium">{item.category}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {item.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{item.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{item.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-heading mb-4">Have a News Tip or Question?</h2>
            <p className="section-sub mb-8">
              Reach out to us for the latest updates on construction materials, pricing, and industry developments in Tanzania.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#quick-price" className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl">
                Get a Quote <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all">
                <MessageCircle className="w-5 h-5 text-green-500" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
