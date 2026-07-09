import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Truck, CheckCircle, MapPin, MessageCircle, Award, Factory, HardHat, Users, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'About Tanzibaba | Premium Ready-Mix Concrete Dar es Salaam',
  description: 'Tanzibaba is Dar es Salaam\'s premium ready-mix concrete and equipment supplier. Quality-controlled production with washed sand technology. Direct pricing — no middlemen.',
  keywords: ['about tanzibaba', 'tanzibaba concrete supplier', 'tanzania concrete company', 'ready mix concrete company dar es salaam'],
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: 'About Tanzibaba | Premium Ready-Mix Concrete Dar es Salaam',
    description: 'Tanzibaba is Dar es Salaam\'s premium ready-mix concrete and equipment supplier. Washed sand technology, quality controlled production, direct pricing.',
    url: `${siteUrl}/about`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
  },
};

const milestones = [
  { year: '2018', title: 'Founded', desc: 'Tanzibaba established to fill the gap in premium ready-mix concrete supply in Dar es Salaam.' },
  { year: '2020', title: 'Quality Milestone', desc: 'Achieved consistent quality-controlled production standards across all operations.' },
  { year: '2022', title: 'Washed Sand Technology', desc: 'Invested in advanced washed sand processing for superior concrete strength and consistency.' },
  { year: '2024', title: 'Operations Nationwide', desc: 'Expanded operations across Dar es Salaam, Zanzibar and Dodoma.' },
];

const values = [
  { icon: <Award className="w-6 h-6" />, title: 'Quality First', desc: 'Every batch tested for slump, temperature, and uniformity before leaving the plant.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Transparent Pricing', desc: 'No hidden fees, no middlemen. What you see is what you pay — VAT included.' },
  { icon: <Truck className="w-6 h-6" />, title: 'Reliable Delivery', desc: 'Modern fleet with trained operators ensuring on-time delivery, every time.' },
  { icon: <Users className="w-6 h-6" />, title: 'Expert Team', desc: 'Experienced concrete specialists providing technical support from planning to pour.' },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image src="/images/large-construction-projects-dar-es-salaam.jpg" alt="Tanzibaba concrete delivery operations in Dar es Salaam" fill className="object-cover" style={{ objectPosition: '50% 40%' }} priority fetchPriority="high" sizes="100vw" quality={85} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Shield className="w-4 h-4" /> About Tanzibaba
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Dar es Salaam&apos;s Premium<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Concrete Supplier</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                From foundation to skyline — supplying quality-controlled ready-mix concrete with washed sand technology and computerized batching.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Our Story</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Tanzibaba was built to solve a simple problem — inconsistent concrete quality and unreliable supply in Dar es Salaam&apos;s booming construction market.</p>
            </div>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4">
              <p>Founded in 2018, Tanzibaba started with a commitment to quality that was rare in the local concrete market. While other suppliers cut corners with unwashed aggregates and inconsistent mixing, we invested in proper washed sand technology and computerized batching from day one.</p>
              <p>Today, we operate across all five districts of Dar es Salaam — Kinondoni, Ubungo, Ilala, Temeke, and Kigamboni. This coverage allows us to deliver fresh concrete to any site within the city with minimal travel time, ensuring consistent quality at the point of pour.</p>
              <p>Our concrete has been used in landmark projects including Vijana Towers, Viva Towers, and Hotel Verde Zanzibar. We supply commercial developers, industrial facilities, apartment builders, and infrastructure contractors who demand reliability, consistency, and professional service.</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center">Our Milestones</h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">Key moments in our journey to becoming Dar es Salaam&apos;s premium concrete supplier.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mx-auto mb-3 text-lg font-bold">{m.year}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{m.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center">Our Values</h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">The principles that guide every cubic metre of concrete we produce.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center text-white shrink-0">{v.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">{v.title}</h3>
                    <p className="text-gray-500 text-sm">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'What is Tanzibaba?', a: 'Tanzibaba is Dar es Salaam\'s premium ready-mix concrete supplier. We provide quality-controlled concrete using washed sand technology and computerized batching, serving commercial, industrial, infrastructure and residential projects across Tanzania.' },
                { q: 'What products do you offer?', a: 'We offer a full range of ready-mix concrete grades (from M5 to C50+), concrete pumping services, and construction materials supply. Our concrete is suitable for foundations, slabs, columns, beams, and all structural applications.' },
                { q: 'Where do you deliver?', a: 'We operate across all five districts of Dar es Salaam (Kinondoni, Ubungo, Ilala, Temeke, and Kigamboni), as well as Zanzibar and Dodoma. Additional regions in Tanzania can be serviced subject to project requirements.' },
                { q: 'What is washed sand technology?', a: 'Washed sand technology involves thoroughly cleaning aggregate materials to remove silt, clay, and impurities before mixing. This produces concrete with superior strength, better workability, and greater consistency compared to unwashed alternatives.' },
                { q: 'How do I get a quote?', a: 'You can request a quote via WhatsApp at 0716 002 790, email quotes@tanzibaba.co.tz, or use our online quote form at /get-quote. We respond within minutes during business hours.' },
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

        <section className="py-16 px-4 bg-brand-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Work with Tanzibaba?</h2>
              <p className="text-brand-100 mb-8 max-w-xl mx-auto">Get a price estimate for your project. Premium construction materials delivered to your site.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/get-quote" className="inline-flex items-center gap-2 bg-white text-brand-700 px-6 py-3 rounded-xl font-semibold hover:bg-brand-50 transition-colors">Get Price Estimate</Link>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"><MessageCircle className="w-4 h-4" /> Chat on WhatsApp</a>
            </div>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { q: 'What is Tanzibaba?', a: 'Tanzibaba is Dar es Salaam\'s premium ready-mix concrete supplier. We provide quality-controlled concrete using washed sand technology and computerized batching, serving commercial, industrial, infrastructure and residential projects across Tanzania.' },
            { q: 'What products do you offer?', a: 'We offer a full range of ready-mix concrete grades (from M5 to C50+), concrete pumping services, and construction materials supply. Our concrete is suitable for foundations, slabs, columns, beams, and all structural applications.' },
            { q: 'Where do you deliver?', a: 'We operate across all five districts of Dar es Salaam (Kinondoni, Ubungo, Ilala, Temeke, and Kigamboni), as well as Zanzibar and Dodoma. Additional regions in Tanzania can be serviced subject to project requirements.' },
            { q: 'What is washed sand technology?', a: 'Washed sand technology involves thoroughly cleaning aggregate materials to remove silt, clay, and impurities before mixing. This produces concrete with superior strength, better workability, and greater consistency compared to unwashed alternatives.' },
            { q: 'How do I get a quote?', a: 'You can request a quote via WhatsApp at 0716 002 790, email quotes@tanzibaba.co.tz, or use our online quote form at /get-quote. We respond within minutes during business hours.' },
          ].map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
        }) }} />
      </main>
      <Footer />
    </>
  );
}
