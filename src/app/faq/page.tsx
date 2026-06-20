import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle, HelpCircle, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions | Tanzibaba',
  description: 'Answers to common questions about Tanzibaba ready-mix concrete, aggregates, blocks, pricing, delivery, and construction materials in Tanzania.',
  keywords: ['concrete FAQ tanzania', 'ready mix concrete questions', 'construction materials FAQ dar es salaam'],
  alternates: { canonical: `${siteUrl}/faq` },
  openGraph: {
    title: 'FAQ | Frequently Asked Questions | Tanzibaba',
    description: 'Answers to common questions about Tanzibaba ready-mix concrete, aggregates, blocks, pricing, delivery, and construction materials.',
    url: `${siteUrl}/faq`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const faqGroups = [
  {
    category: 'Products & Materials',
    questions: [
      {
        q: 'What concrete grades do you offer?',
        a: 'We supply ready-mix concrete in grades C10 through C50. The most common grades for residential construction are C20 and C25, while commercial projects typically use C30 or higher. Our team can help you select the right grade for your project.',
      },
      {
        q: 'What is ready-mix concrete?',
        a: 'Ready-mix concrete is pre-mixed at a batching plant and delivered to your site in a truck. It ensures consistent quality, precise mix proportions, and saves time compared to mixing on-site. It is ideal for foundations, slabs, columns, and beams.',
      },
      {
        q: 'Do you supply concrete blocks and paving?',
        a: 'Yes. We manufacture and deliver concrete blocks, paving blocks, and culvert pipes across Dar es Salaam and Zanzibar. Blocks are available in standard and custom sizes.',
      },
      {
        q: 'What aggregates do you sell?',
        a: 'We supply sand, gravel, ballast, and road base materials in various sizes. All aggregates are sourced from quality-controlled quarries and tested to meet Tanzanian standards.',
      },
    ],
  },
  {
    category: 'Pricing & Orders',
    questions: [
      {
        q: 'How do I get a price quote?',
        a: 'You can request a quote through our website by visiting the Get a Quote page, or contact us directly via WhatsApp at +255 716 002 790. We provide same-day quotes for standard orders.',
      },
      {
        q: 'What is the minimum order quantity?',
        a: 'Minimum order quantities vary by product. For ready-mix concrete, the minimum is typically 5 cubic meters. For aggregates and blocks, please contact us for specific minimums based on your delivery location.',
      },
      {
        q: 'Do prices include delivery?',
        a: 'Our quoted prices include production costs. Delivery fees depend on the quantity ordered and the distance to your site. We provide transparent delivery cost breakdowns with every quote.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept bank transfers, mobile money (M-Pesa, Tigo Pesa), and cash on delivery for qualifying orders. Payment terms can be arranged for large or recurring orders.',
      },
    ],
  },
  {
    category: 'Delivery & Logistics',
    questions: [
      {
        q: 'What areas do you deliver to?',
        a: 'We deliver across Dar es Salaam (Kinondoni, Ilala, Temeke, Kigamboni, Ubungo), Zanzibar, Dodoma, and other regions in Tanzania. Contact us to confirm delivery availability for your location.',
      },
      {
        q: 'How long does delivery take?',
        a: 'For Dar es Salaam, standard delivery is within 2-4 hours of order confirmation. For Zanzibar and upcountry locations, delivery is typically scheduled within 24-48 hours. Rush delivery is available for urgent projects.',
      },
      {
        q: 'Can I schedule a specific delivery time?',
        a: 'Yes. We offer scheduled delivery windows to ensure your concrete arrives when your crew is ready. We recommend confirming your delivery window at least 24 hours in advance.',
      },
      {
        q: 'Do you provide a concrete pump service?',
        a: 'Yes. We offer concrete pump rental with experienced operators for projects requiring concrete placement at height or over distance. Both line pumps and boom pumps are available.',
      },
    ],
  },
  {
    category: 'Quality & Technical',
    questions: [
      {
        q: 'Do your products meet Tanzanian standards?',
        a: 'All our products are tested and comply with Tanzania Bureau of Standards (TBS) requirements. We provide test certificates and compliance documentation upon request.',
      },
      {
        q: 'Can I visit your batching plant?',
        a: 'Yes. We welcome site visits to our batching plants. Contact us to schedule a visit so you can see our production process and quality control measures firsthand.',
      },
      {
        q: 'Do you offer technical support for my project?',
        a: 'Absolutely. Our team includes experienced engineers who can advise on concrete grades, mix designs, and construction best practices for your specific project requirements.',
      },
    ],
  },
];

export default function FaqIndex() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[45vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80" alt="Frequently asked questions" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <HelpCircle className="w-4 h-4" /> FAQ
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                Frequently Asked{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Questions</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Everything you need to know about Tanzibaba products, pricing, delivery, and construction materials.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            {faqGroups.map((group, gi) => (
              <div key={gi} className={gi > 0 ? 'mt-12' : ''}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">{group.category}</h2>
                <div className="space-y-4">
                  {group.questions.map((faq, qi) => (
                    <details key={qi} className="group rounded-xl border border-gray-200 hover:border-brand-200 transition-colors">
                      <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer text-lg font-semibold text-gray-900 list-none">
                        {faq.q}
                        <span className="text-gray-400 group-open:rotate-45 transition-transform text-2xl shrink-0">+</span>
                      </summary>
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-heading mb-4">Still Have Questions?</h2>
            <p className="section-sub mb-8">
              Our team is ready to help. Contact us directly and we will get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-xl">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
              <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all">
                <Phone className="w-5 h-5" /> Call +255 716 002 790
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
