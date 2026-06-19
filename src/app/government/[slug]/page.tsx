import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle, CheckCircle, ExternalLink, ClipboardList, MapPin, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { govCategories, getGovCategoryBySlug } from '@/data/government/categories';
import { govPages } from '@/data/government/pages';
import { officialLinks, getGovLinkByCategory, checklists, getGovChecklistBySlug, govLinkCategories } from '@/data/government/links';
import { siteUrl } from '@/data/locations';

interface PageProps { params: { slug: string } }

export function generateStaticParams() {
  const guideSlugs = govPages.map(p => ({ slug: p.slug }));
  const categorySlugs = govCategories.map(c => ({ slug: `${c.slug}` }));
  const checklistSlugs = checklists.map(c => ({ slug: `checklist-${c.slug}` }));
  const resourceSlugs = [({ slug: 'official-resources' })];
  const catListSlugs = govCategories.map(c => ({ slug: `category-${c.slug}` }));
  return [...guideSlugs, ...categorySlugs, ...checklistSlugs, ...resourceSlugs, ...catListSlugs];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const slug = params.slug;
  const page = govPages.find(p => p.slug === slug);
  const cat = getGovCategoryBySlug(slug);
  const checklist = checklists.find(c => `checklist-${c.slug}` === slug);
  const catList = slug.startsWith('category-') ? getGovCategoryBySlug(slug.replace('category-', '')) : null;

  if (page) return { title: `${page.title} | Tanzibaba`, description: page.description, alternates: { canonical: `${siteUrl}/government/${slug}` }, openGraph: { title: page.title, description: page.description, url: `${siteUrl}/government/${slug}`, siteName: 'Tanzibaba', type: 'article' } };
  if (cat) return { title: `${cat.name} — Guides & Resources | Tanzibaba`, description: cat.description, alternates: { canonical: `${siteUrl}/government/${slug}` } };
  if (slug === 'official-resources') return { title: 'Official Government Resources Tanzania | Tanzibaba', description: 'Directory of Tanzanian government authorities, ministries, regulatory bodies and official portals.', alternates: { canonical: `${siteUrl}/government/official-resources` } };
  if (checklist) return { title: `${checklist.title} | Tanzibaba`, description: checklist.description, alternates: { canonical: `${siteUrl}/government/${slug}` } };
  if (catList) return { title: `${catList.name} — Guides | Tanzibaba`, description: catList.description };
  return { title: 'Government Hub | Tanzibaba' };
}

function GovGuidePage({ page }: { page: typeof govPages[0] }) {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gray-950 pt-28 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-brand-400 mb-4">
              <Link href="/government" className="hover:text-brand-300">Government Hub</Link>
              <span>/</span>
              <span>{govCategories.find(c => c.slug === page.category)?.name || page.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">{page.h1}</h1>
            <p className="text-gray-300 text-base max-w-2xl">{page.description}</p>
            <div className="flex items-center gap-3 mt-4 text-xs text-gray-400">
              <span>{page.readingTime} read</span>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-10">
              {page.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{section.heading}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {page.faqs.length > 0 && (
          <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {page.faqs.map((faq, i) => (
                  <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                    <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">{faq.q}<ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform shrink-0" /></summary>
                    <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-10 px-4 bg-brand-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Need Help With This Process?</h2>
            <p className="text-brand-100 mb-6 text-sm">Our team can provide guidance or connect you with qualified professionals.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white text-brand-700 px-6 py-3 rounded-xl font-bold hover:bg-brand-50 transition-all shadow-lg">Ask Via WhatsApp <MessageCircle className="w-4 h-4" /></a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all">Contact Us</Link>
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Article', headline: page.h1, description: page.description,
          author: { '@type': 'Organization', name: 'Tanzibaba' }, publisher: { '@type': 'Organization', name: 'Tanzibaba' },
          mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/government/${page.slug}` }
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: page.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
        }) }} />
      </main>
      <Footer />
    </>
  );
}

function GovCategoryPage({ category }: { category: typeof govCategories[0] }) {
  const pages = govPages.filter(p => p.category === category.slug);
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gray-950 pt-28 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-brand-400 mb-4">
              <Link href="/government" className="hover:text-brand-300">Government Hub</Link>
              <span>/</span>
              <span>{category.name}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">{category.name}</h1>
            <p className="text-gray-300 text-base">{category.description}</p>
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {pages.map(p => (
                <Link key={p.slug} href={`/government/${p.slug}`} className="flex items-start gap-4 bg-gray-50 rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all group">
                  <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 shrink-0"><Shield className="w-5 h-5" /></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-sm">{p.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{p.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function OfficialResourcesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gray-950 pt-28 pb-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-brand-400 mb-4">
              <Link href="/government" className="hover:text-brand-300">Government Hub</Link>
              <span>/</span>
              <span>Official Resources</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Official Government Resources</h1>
            <p className="text-gray-300 max-w-2xl">Directory of Tanzanian government authorities, ministries, regulatory bodies and official portals relevant to construction, investment and business.</p>
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            {govLinkCategories.map(lc => {
              const links = getGovLinkByCategory(lc.slug);
              if (links.length === 0) return null;
              return (
                <div key={lc.slug} className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">{lc.name}</h2>
                  <div className="grid gap-3">
                    {links.map(l => (
                      <a key={l.id} href={l.website} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 bg-gray-50 rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all group">
                        <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 shrink-0"><ExternalLink className="w-5 h-5" /></div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-gray-900 text-sm">{l.name}</h3>
                          <p className="text-xs text-gray-500 mt-0.5">{l.description}</p>
                          {l.contact && <p className="text-xs text-gray-400 mt-1">{l.contact}</p>}
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-brand-600 transition-all shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ChecklistPage({ checklist }: { checklist: typeof checklists[0] }) {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gray-950 pt-28 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-brand-400 mb-4">
              <Link href="/government" className="hover:text-brand-300">Government Hub</Link>
              <span>/</span>
              <span>Checklists</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">{checklist.title}</h1>
            <p className="text-gray-300 text-base">{checklist.description}</p>
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {checklist.items.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{i + 1}. {item.task}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function GovernmentPage({ params }: PageProps) {
  const slug = params.slug;

  const page = govPages.find(p => p.slug === slug);
  if (page) return <GovGuidePage page={page as any} />;

  const cat = getGovCategoryBySlug(slug);
  if (cat) return <GovCategoryPage category={cat} />;

  if (slug === 'official-resources') return <OfficialResourcesPage />;

  const catList = slug.startsWith('category-') ? getGovCategoryBySlug(slug.replace('category-', '')) : null;
  if (catList) return <GovCategoryPage category={catList} />;

  const checklist = checklists.find(c => slug === `checklist-${c.slug}`);
  if (checklist) return <ChecklistPage checklist={checklist} />;

  return (
    <>
      <Navbar />
      <main className="py-32 text-center">
        <p className="text-gray-500">Page not found. <Link href="/government" className="text-brand-600 font-semibold">Return to Government Hub</Link></p>
      </main>
      <Footer />
    </>
  );
}
