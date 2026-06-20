import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, Tag, MessageCircle, Phone, ChevronRight, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { allArticles, getArticleBySlug, getRelatedArticles } from '@/data/knowledge/articles';
import { knowledgeCategories, getCategoryBySlug } from '@/data/knowledge/categories';
import { siteUrl } from '@/data/locations';

interface PageProps { params: { slug: string } }

export function generateStaticParams() {
  return allArticles.map(a => ({ slug: a.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: `${siteUrl}/learn/${article.slug}` },
    openGraph: { title: article.title, description: article.description, url: `${siteUrl}/learn/${article.slug}`, siteName: 'Tanzibaba', type: 'article', publishedTime: article.publishedDate, modifiedTime: article.updatedDate, locale: 'en_TZ' },
  };
}

export default function LearnArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const category = getCategoryBySlug(article.category);
  const related = getRelatedArticles(article);
  const faqSchema = article.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  } : null;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    author: { '@type': 'Organization', name: 'Tanzibaba' },
    publisher: { '@type': 'Organization', name: 'Tanzibaba', logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo/tanzibaba.svg` } },
    url: `${siteUrl}/learn/${article.slug}`,
    image: `${siteUrl}/images/og-brand-image.png`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/learn/${article.slug}` },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="bg-gray-950 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/learn" className="hover:text-brand-400 transition-colors">Education Hub</Link>
              <ChevronRight className="w-3 h-3" />
              {category && <Link href={`/learn?category=${category.slug}`} className="hover:text-brand-400 transition-colors">{category.name}</Link>}
              <ChevronRight className="w-3 h-3" />
              <span className="text-gray-500">{article.title.split(':')[0]}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{article.h1}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readingTime}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Published {article.publishedDate}</span>
              {article.updatedDate !== article.publishedDate && (
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Updated {article.updatedDate}</span>
              )}
              {category && <span className="flex items-center gap-1.5"><Tag className="w-4 h-4" /> {category.name}</span>}
            </div>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 mb-10">
            <div className="prose prose-lg max-w-none">
              {article.content.map((section, i) => (
                <section key={i} className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{section.body}</p>
                </section>
              ))}
            </div>
          </div>

          {article.faqs.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {article.faqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-brand-600 rounded-2xl p-8 md:p-12 text-white mb-10">
            <h2 className="text-2xl font-bold mb-3">Need Concrete For Your Project?</h2>
            <p className="text-brand-100 mb-6">Get premium ready mix concrete delivered to your site. Free technical advice and competitive pricing for projects anywhere in Tanzania.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-quote" className="bg-white text-brand-700 px-6 py-3 rounded-xl font-semibold hover:bg-brand-50 transition-colors text-center">Request a Quote</Link>
              <a href="https://wa.me/255716002790" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
              <a href="tel:+255716002790" className="bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Call +255 716 002 790
              </a>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map(r => (
                  <Link key={r.slug} href={`/learn/${r.slug}`} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all duration-300 group">
                    <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">{getCategoryBySlug(r.category)?.name || r.category}</span>
                    <h3 className="font-bold text-gray-900 mt-1 mb-2 group-hover:text-brand-600 transition-colors">{r.title.split(':')[0]}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{r.description}</p>
                    <span className="text-sm font-semibold text-brand-60mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-brand-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Explore More in the Education Hub</h3>
                <p className="text-sm text-gray-500 mt-1">Browse our complete library of construction guides, material information and expert advice.</p>
                <Link href="/learn" className="text-sm font-semibold text-brand-60 mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Browse All Articles <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    </>
  );
}
