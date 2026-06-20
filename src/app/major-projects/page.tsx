import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectQualificationForm from '@/components/ProjectQualificationForm';
import { Building2, FlaskConical, HardHat, ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Major Projects — Commercial & Infrastructure Construction | Tanzibaba',
  description: 'Tanzibaba undertakes large-scale commercial, industrial, infrastructure and government construction projects across Tanzania. Primary operations in Dar es Salaam, Zanzibar and Dodoma. Submit your project for qualification.',
  keywords: ['major construction projects Tanzania', 'commercial construction Dar es Salaam', 'industrial construction Tanzania', 'infrastructure projects Tanzania', 'government construction projects', 'large scale construction'],
  alternates: { canonical: `${siteUrl}/major-projects` },
  openGraph: {
    title: 'Major Projects — Commercial & Infrastructure Construction | Tanzibaba',
    description: 'Large-scale commercial, industrial, infrastructure and government construction projects across Tanzania. Primary operations in Dar es Salaam, Zanzibar and Dodoma.',
    url: `${siteUrl}/major-projects`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/mobile-hero.webp', width: 1200, height: 630 }],
  },
};

const projectCategories = [
  { icon: Building2, title: 'Commercial Developments', desc: 'Office complexes, retail centers, hotels, and mixed-use developments built to international standards.', items: ['Multi-story office buildings', 'Shopping centers and malls', 'Hotel and hospitality projects', 'Mixed-use commercial complexes'] },
  { icon: FlaskConical, title: 'Industrial Facilities', desc: 'Manufacturing plants, warehouses, processing facilities and industrial infrastructure for heavy industry.', items: ['Manufacturing and processing plants', 'Warehouses and logistics centers', 'Cold storage facilities', 'Industrial storage and handling'] },
  { icon: HardHat, title: 'Infrastructure Projects', desc: 'Road networks, bridges, drainage systems and public infrastructure serving communities and industry.', items: ['Road and highway construction', 'Bridge and culvert construction', 'Drainage and flood control', 'Public utilities infrastructure'] },
];

const serviceRegions = [
  { name: 'Dar es Salaam', desc: 'Commercial, industrial and infrastructure projects across all districts.', link: '/commercial-construction-dar-es-salaam' },
  { name: 'Zanzibar', desc: 'Construction projects across Zanzibar — hotels, resorts, commercial and infrastructure.', link: '/construction-company-zanzibar' },
  { name: 'Dodoma', desc: 'Government and commercial construction projects in Tanzania\'s capital city.', link: '/commercial-construction-dodoma' },
];

export default function MajorProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/new/commercial-building.webp" alt="Major commercial and infrastructure construction projects by Tanzibaba in Dar es Salaam and Dodoma" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-500/30 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Building2 className="w-4 h-4" /> Major Projects Division
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Major{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Construction Projects
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Tanzibaba delivers large-scale commercial, industrial, infrastructure and government projects across Tanzania. Primary operations in Dar es Salaam, Zanzibar and Dodoma, with additional projects undertaken in other regions subject to requirements. From concept to completion — built to last.
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="flex items-center gap-1.5 text-sm text-gray-300 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Dar es Salaam
                </div>
                <div className="flex items-center gap-1.5 text-sm text-gray-300 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Zanzibar
                </div>
                <div className="flex items-center gap-1.5 text-sm text-gray-300 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Dodoma
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href="#qualify" className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40 hover:shadow-brand-600/60 hover:scale-[1.02] active:scale-[0.98]">
                  Qualify Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                  Talk to Our Team
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">What We Build</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Tanzibaba's Major Projects division delivers construction excellence across commercial, industrial, infrastructure and government sectors.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectCategories.map((cat, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                    <cat.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{cat.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{cat.desc}</p>
                  <ul className="space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8">
              <div className="flex items-start gap-2">
                <div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">Construction services available across Tanzania.</span> Primary operations in Dar es Salaam, Zanzibar and Dodoma. Additional construction projects can be undertaken in other regions of Tanzania subject to project requirements.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Supporting construction projects across Tanzania with capability to support regional developments in East Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="qualify" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  <Building2 className="w-4 h-4" /> Qualify Your Project
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Submit Your Project for Qualification</h2>
                <p className="text-gray-500 mb-6">Complete the form and our major projects team will review your submission. We prioritize funded, well-structured commercial, industrial, infrastructure and government projects.</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-amber-700 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Submit Project Details</p>
                      <p className="text-xs text-gray-500">Tell us about your project type, value, and stage.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-amber-700 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Team Review</p>
                      <p className="text-xs text-gray-500">Our major projects team evaluates your submission within 1-2 days.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-amber-700 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Proposal &amp; Consultation</p>
                      <p className="text-xs text-gray-500">We prepare a tailored proposal and schedule a consultation.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <ProjectQualificationForm />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Service Regions</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Tanzibaba's Major Projects division operates across Tanzania's primary commercial and administrative centers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {serviceRegions.map((region, i) => (
                <Link key={i} href={region.link} className="group bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-brand-600 transition-colors">{region.name}</h3>
                      <p className="text-gray-500 text-sm">{region.desc}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-brand-600 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'What projects have you supplied?', a: 'Tanzibaba has supplied concrete for landmark projects including Vijana Towers, Viva Towers, and Hotel Verde Zanzibar. Our Major Projects division handles commercial developments, industrial facilities, and infrastructure projects across Tanzania.' },
                { q: 'Can I visit a site?', a: 'Site visits can be arranged for qualified project leads. Contact our Major Projects team via WhatsApp at 0716 002 790 to discuss scheduling a visit to one of our active project sites in Dar es Salaam, Zanzibar, or Dodoma.' },
                { q: 'How do I become a project supplier?', a: 'Submit your project details through the qualification form on this page. Our team reviews submissions within 1-2 days and will contact you to discuss how we can support your project requirements.' },
                { q: 'What regions do you cover for major projects?', a: 'Our primary operations cover Dar es Salaam, Zanzibar and Dodoma. Additional construction projects can be undertaken in other regions of Tanzania subject to project requirements and scale.' },
                { q: 'What project types do you accept?', a: 'We accept commercial developments (offices, hotels, retail), industrial facilities (warehouses, factories, cold storage), infrastructure projects (roads, bridges, drainage), and government construction projects.' },
              ].map((faq, i) => (
                <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                    {faq.q}
                    <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform shrink-0" />
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { q: 'What projects have you supplied?', a: 'Tanzibaba has supplied concrete for landmark projects including Vijana Towers, Viva Towers, and Hotel Verde Zanzibar. Our Major Projects division handles commercial developments, industrial facilities, and infrastructure projects across Tanzania.' },
            { q: 'Can I visit a site?', a: 'Site visits can be arranged for qualified project leads. Contact our Major Projects team via WhatsApp at 0716 002 790 to discuss scheduling a visit to one of our active project sites in Dar es Salaam, Zanzibar, or Dodoma.' },
            { q: 'How do I become a project supplier?', a: 'Submit your project details through the qualification form on this page. Our team reviews submissions within 1-2 days and will contact you to discuss how we can support your project requirements.' },
            { q: 'What regions do you cover for major projects?', a: 'Our primary operations cover Dar es Salaam, Zanzibar and Dodoma. Additional construction projects can be undertaken in other regions of Tanzania subject to project requirements and scale.' },
            { q: 'What project types do you accept?', a: 'We accept commercial developments (offices, hotels, retail), industrial facilities (warehouses, factories, cold storage), infrastructure projects (roads, bridges, drainage), and government construction projects.' },
          ].map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
        }) }} />
      </main>
    </>
  );
}
