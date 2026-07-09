import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Zap, Scale, Home, Building2, DollarSign, HardHat, Truck, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'What Is Ready-Mix Concrete? — Complete Guide for Dar es Salaam | Tanzibaba',
  description: 'Everything you need to know about ready-mix concrete in Dar es Salaam. How it is made, grades, cost, delivery, and why it is the best choice for construction projects.',
  keywords: ['what is ready mix concrete', 'ready mix concrete guide', 'concrete types dar es salaam', 'ready mix concrete benefits'],
  alternates: { canonical: `${siteUrl}/blog/what-is-ready-mix-concrete` },
  openGraph: {
    title: 'What Is Ready-Mix Concrete? — Complete Guide for Dar es Salaam | Tanzibaba',
    description: 'Everything you need to know about ready-mix concrete in Dar es Salaam. How it is made, grades, cost, delivery, and why it is the best choice for construction projects.',
    url: `${siteUrl}/blog/what-is-ready-mix-concrete`,
    siteName: 'Tanzibaba',
    type: 'article',
    locale: 'en_TZ',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Is Ready-Mix Concrete? — Complete Guide for Dar es Salaam',
    description: 'Everything you need to know about ready-mix concrete in Dar es Salaam. How it is made, grades, cost, delivery, and why it is the best choice for construction projects.',
    datePublished: '2026-06-20',
    author: { '@type': 'Organization', name: 'Tanzibaba' },
    publisher: { '@type': 'Organization', name: 'Tanzibaba' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is ready-mix concrete?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ready-mix concrete is concrete that is precisely batched and mixed at a central plant according to engineering specifications, then delivered to the construction site in a concrete mixer truck in a ready-to-use state. Unlike site-mixed concrete, which is mixed on-site using manual methods or small mixers, ready-mix ensures consistent quality, accurate proportions, and superior strength through computer-controlled batching and strict quality control.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does ready-mix concrete take to arrive after ordering?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In Dar es Salaam, standard delivery lead time is 24 to 48 hours for most grades. For urgent orders, same-day delivery may be available subject to plant capacity and location. We recommend placing orders at least 48 hours in advance for large pours to ensure adequate truck allocation and scheduling.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the minimum quantity for ready-mix concrete delivery?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The minimum order quantity for ready-mix concrete delivery in Dar es Salaam is typically 3 cubic metres (m³). For quantities smaller than this, site-mixing may be more practical. Tanzibaba offers flexible delivery options for both small and large projects across the city.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does ready-mix concrete cost in Dar es Salaam?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ready-mix concrete prices in Dar es Salaam range from approximately 180,000 TZS per m³ for lower grades like C10 to over 300,000 TZS per m³ for high-strength grades like C40 and C50. The price depends on the grade, quantity, delivery distance, and whether a concrete pump is required. Additional charges may apply for small loads, weekend deliveries, and waiting time beyond the standard discharge window.',
        },
      },
    ],
  },
];

export default function WhatIsReadyMixConcrete() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1600&q=80" alt="What is ready-mix concrete — complete guide for Dar es Salaam construction" className="w-full h-full object-cover" style={{ objectPosition: '50% 50%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Truck className="w-4 h-4" /> Ready-Mix Guide
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-4 tracking-tight">
                What Is Ready-Mix Concrete? — Complete Guide for Dar es Salaam
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>Published: 20 June 2026</span>
                <span>·</span>
                <span>7 min read</span>
              </div>
            </div>
          </div>
        </section>

        <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-8">
          <Image src="/images/new/commercial-building.webp" alt="What is ready-mix concrete — complete guide for Dar es Salaam construction projects" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" loading="lazy" />
        </div>

        <article className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto prose prose-gray prose-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Ready-mix concrete has become the standard choice for construction projects across Dar es Salaam, from single-storey homes in Kinondoni to high-rise commercial towers in the city centre. But what exactly is ready-mix concrete, how is it different from mixing concrete on site, and why are more builders choosing it? This guide covers everything you need to know.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Is Ready-Mix Concrete?</h2>
            <p>
              Ready-mix concrete is concrete that is precisely batched and mixed at a central batching plant according to engineering specifications, then delivered to the construction site in a concrete mixer truck in a ready-to-use state. The concrete is manufactured under controlled conditions using computerised weighing systems that ensure every batch meets the exact design mix required for the project.
            </p>
            <p>
              The key difference between ready-mix and site-mixed concrete is where and how the mixing happens. With site-mixed concrete, cement, sand, and aggregate are measured manually or with basic equipment on the construction site, often leading to inconsistencies in quality and strength. Ready-mix concrete, by contrast, is produced in a factory environment where every ingredient is precisely controlled, from the moisture content of the sand to the temperature of the water.
            </p>
            <p>
              In Dar es Salaam, where construction quality standards are rising and projects are becoming more ambitious, ready-mix concrete offers the reliability that site-mixing simply cannot match. Tanzibaba operates a modern batching plant on the outskirts of the city, supplying <Link href="/services/ready-mix-concrete-dar-es-salaam" className="text-brand-600 font-semibold hover:underline">ready-mix concrete</Link> to construction sites across Dar es Salaam, including Mbezi Beach, Mikocheni, Kariakoo, Upanga, and beyond.
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mt-12 mb-6">How Ready-Mix Concrete Is Made</h2>
            <p>
              The production of ready-mix concrete follows a carefully controlled process that begins long before the truck arrives at your site. Understanding how it is made helps explain why the quality is so consistent.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Batching</strong> — The process starts with weighing the ingredients: cement, sand, coarse aggregate (gravel or crushed stone), water, and sometimes chemical admixtures. Computerised batching systems at plants like Tanzibaba&apos;s ensure each component is measured to within 1% accuracy.</li>
              <li><strong>Washed sand technology</strong> — We use washed sand that has been processed to remove clay, silt, and organic impurities. This step is critical because impurities in unwashed sand can weaken the concrete and cause cracking. Many site-mix operations in Dar es Salaam use unprocessed sand, which is one of the main reasons for quality issues.</li>
              <li><strong>Mixing</strong> — The ingredients are combined in a high-capacity mixer at the plant. The mixing time is controlled to ensure a homogeneous blend where every particle of aggregate is coated with cement paste.</li>
              <li><strong>Quality control</strong> — Before delivery, samples are taken from each batch and tested for slump, temperature, and air content. Cube samples are cast and tested at 7 and 28 days to confirm compressive strength meets the specified grade.</li>
            </ul>
            <p>
              This factory-controlled process is simply not possible with on-site mixing, where variations in ingredient quality, measuring accuracy, and mixing time can lead to inconsistent concrete that may not meet the required strength.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ready-Mix Concrete Grades (C10 to C50)</h2>
            <p>
              Concrete is classified by grade, with each grade indicating its compressive strength in megapascals (MPa) after 28 days of curing. Here are the most common ready-mix concrete grades available in Dar es Salaam and their typical applications:
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 my-8 border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 font-bold text-gray-900">Grade</th>
                    <th className="text-left py-3 font-bold text-gray-900">Strength</th>
                    <th className="text-left py-3 font-bold text-gray-900">Typical Applications</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { grade: 'C10', strength: '10 MPa', applications: 'Blinding, kerbs, drainage works, temporary works' },
                    { grade: 'C15', strength: '15 MPa', applications: 'Floor toppings, pavements, light-duty pathways' },
                    { grade: 'C20', strength: '20 MPa', applications: 'House foundations, driveways, garage floors' },
                    { grade: 'C25', strength: '25 MPa', applications: 'Residential slabs, columns, beams, retaining walls' },
                    { grade: 'C30', strength: '30 MPa', applications: 'Multi-storey buildings, commercial structures' },
                    { grade: 'C35', strength: '35 MPa', applications: 'High-rise construction, heavy-duty industrial floors' },
                    { grade: 'C40', strength: '40 MPa', applications: 'Bridges, structural columns, pre-stressed concrete' },
                    { grade: 'C50', strength: '50 MPa', applications: 'Specialist structural elements, high-load infrastructure' },
                  ].map((row) => (
                    <tr key={row.grade} className="border-b border-gray-200 last:border-0">
                      <td className="py-3 font-semibold text-gray-900">{row.grade}</td>
                      <td className="py-3 text-gray-700">{row.strength}</td>
                      <td className="py-3 text-gray-700">{row.applications}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              For most residential projects in Dar es Salaam, C25 is the recommended grade. Commercial and multi-storey buildings typically require C30 or higher. Your structural engineer will specify the correct grade based on load calculations and building design.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Benefits of Ready-Mix Concrete</h2>
            <p>
              More builders in Dar es Salaam are switching from site-mixed to ready-mix concrete, and for good reason. Here are the key advantages:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Consistent quality</strong> — Every batch is the same. Computer-controlled batching eliminates the human error that comes with manual mixing, so you get the same strength and workability from the first load to the last.</li>
              <li><strong>Higher strength</strong> — Because ingredients are precisely measured and mixed using advanced equipment, ready-mix concrete typically achieves higher compressive strength than site-mixed concrete of the same nominal mix design.</li>
              <li><strong>Convenience</strong> — No need to store bags of cement, piles of sand, and aggregate on your site. No need to hire a concrete mixer or worry about mixing labour. The concrete arrives ready to pour, and you only pay for what you use.</li>
              <li><strong>Less waste</strong> — Ready-mix is ordered to exact quantities, minimising leftover materials. Site-mixing often results in excess concrete or partial bag usage that goes to waste.</li>
              <li><strong>Faster construction</strong> — With ready-mix, a large pour that would take a full day of on-site mixing can be completed in a matter of hours. This speed reduces labour costs and keeps your project on schedule.</li>
              <li><strong>Reduced site traffic</strong> — Fewer delivery vehicles for cement, sand, and aggregate means less congestion on your site and in your neighbourhood.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">When to Choose Ready-Mix Over Site-Mixed</h2>
            <p>
              Ready-mix concrete is not always the right choice for every project. Understanding when to use it and when site-mixing makes more sense will help you get the best value for your money.
            </p>
            <p className="font-semibold text-gray-900">Choose ready-mix concrete when:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Your project requires a minimum of 3 m³ of concrete</li>
              <li>The concrete grade is C20 or higher and consistent strength is important</li>
              <li>You have limited storage space for materials on your site</li>
              <li>Your project timeline demands fast pours and quick curing</li>
              <li>The structure is engineered and requires a guaranteed concrete specification</li>
            </ul>
            <p className="font-semibold text-gray-900">Site-mixing may be suitable when:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You need less than 3 m³ of concrete (below typical minimum delivery)</li>
              <li>The concrete is for non-structural applications like garden paths</li>
              <li>Your site is inaccessible to concrete mixer trucks</li>
              <li>You are working in a remote area far from any batching plant</li>
            </ul>
            <p>
              In Dar es Salaam, most urban and suburban sites are easily accessible to concrete trucks. Areas like Mbezi Beach, Masaki, Oyster Bay, Mikocheni, Kariakoo, Tabata, and Kimara all have good road access. If you are unsure, contact Tanzibaba and our team will advise whether your site can accommodate a concrete truck delivery.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Order Ready-Mix Concrete in Dar es Salaam</h2>
            <p>
              Ordering ready-mix concrete from Tanzibaba is straightforward. Follow these steps to ensure a smooth delivery and pour:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li><strong>Determine your concrete grade</strong> — Consult your structural engineer or project drawings to find the specified concrete grade. If you are not sure, our team can help match the grade to your application.</li>
              <li><strong>Calculate the volume</strong> — Measure the length, width, and depth of your pour area. Multiply these together to get the volume in cubic metres. Add 5–10% for wastage and uneven ground.</li>
              <li><strong>Place your order</strong> — Contact Tanzibaba via our website, phone, or WhatsApp at least 24 to 48 hours before your desired delivery date. Provide the grade, volume, site address, and preferred delivery time.</li>
              <li><strong>Prepare the site</strong> — Ensure the delivery route is clear, formwork is in place and properly braced, and there is space for the truck to manoeuvre. Have your labour team ready for the pour.</li>
              <li><strong>Receive and pour</strong> — Our truck arrives with your concrete. The driver will position the truck chute to deliver the concrete directly into your formwork. For large or difficult-to-reach areas, a concrete pump can be arranged.</li>
            </ol>
            <p>
              The minimum order quantity for ready-mix concrete delivery in Dar es Salaam is typically 3 m³. For smaller quantities, we can advise on alternatives or connect you with local suppliers who offer smaller volumes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost of Ready-Mix Concrete in Dar es Salaam</h2>
            <p>
              Ready-mix concrete prices in Dar es Salaam vary depending on the grade, quantity, delivery distance, and any additional services required. Here are approximate price ranges per cubic metre (excluding VAT):
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 my-8 border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 font-bold text-gray-900">Grade</th>
                    <th className="text-left py-3 font-bold text-gray-900">Approx. Price per m³ (TZS)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { grade: 'C10', price: '180,000 – 200,000' },
                    { grade: 'C15', price: '190,000 – 210,000' },
                    { grade: 'C20', price: '200,000 – 220,000' },
                    { grade: 'C25', price: '210,000 – 235,000' },
                    { grade: 'C30', price: '250,000 – 280,000' },
                    { grade: 'C35', price: '270,000 – 300,000' },
                    { grade: 'C40', price: '290,000 – 330,000' },
                    { grade: 'C50', price: '320,000 – 370,000' },
                  ].map((row) => (
                    <tr key={row.grade} className="border-b border-gray-200 last:border-0">
                      <td className="py-3 font-semibold text-gray-900">{row.grade}</td>
                      <td className="py-3 text-gray-700">{row.price} TZS</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Additional costs may include delivery fees for locations beyond the standard coverage area, concrete pump hire (approximately TZS 300,000–500,000 per day), and waiting time charges if the pour is delayed beyond the agreed window. For a detailed breakdown, read our <Link href="/blog/concrete-price-guide-tanzania" className="text-brand-600 font-semibold hover:underline">Complete Concrete Price Guide →</Link>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6 my-6">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">What is ready-mix concrete?</h3>
                <p className="text-sm text-gray-700">Ready-mix concrete is concrete that is precisely batched and mixed at a central plant according to engineering specifications, then delivered to the construction site in a concrete mixer truck in a ready-to-use state. Unlike site-mixed concrete, which is mixed on-site using manual methods or small mixers, ready-mix ensures consistent quality, accurate proportions, and superior strength through computer-controlled batching and strict quality control.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">How long does ready-mix concrete take to arrive after ordering?</h3>
                <p className="text-sm text-gray-700">In Dar es Salaam, standard delivery lead time is 24 to 48 hours for most grades. For urgent orders, same-day delivery may be available subject to plant capacity and location. We recommend placing orders at least 48 hours in advance for large pours to ensure adequate truck allocation and scheduling.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">What is the minimum quantity for ready-mix concrete delivery?</h3>
                <p className="text-sm text-gray-700">The minimum order quantity for ready-mix concrete delivery in Dar es Salaam is typically 3 cubic metres (m³). For quantities smaller than this, site-mixing may be more practical. Tanzibaba offers flexible delivery options for both small and large projects across the city.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">How much does ready-mix concrete cost in Dar es Salaam?</h3>
                <p className="text-sm text-gray-700">Ready-mix concrete prices in Dar es Salaam range from approximately 180,000 TZS per m³ for lower grades like C10 to over 300,000 TZS per m³ for high-strength grades like C40 and C50. The price depends on the grade, quantity, delivery distance, and whether a concrete pump is required. Additional charges may apply for small loads, weekend deliveries, and waiting time beyond the standard discharge window.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Can ready-mix concrete be delivered to my site if access is narrow?</h3>
                <p className="text-sm text-gray-700">Standard concrete mixer trucks require a minimum access width of approximately 3.5 metres. For sites with narrow access, we can use smaller mixer trucks or arrange a concrete pump that can transfer the concrete from the truck to the pour area using a flexible hose. Contact our team to discuss your site access and we will recommend the best solution.</p>
              </div>
            </div>

            <div className="bg-brand-50 rounded-2xl p-6 my-10 border border-brand-200">
              <div className="flex items-start gap-4">
                <DollarSign className="w-8 h-8 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Not Sure Which Grade You Need?</h3>
                  <p className="text-gray-700 mb-4">
                    Our team can help you choose the right concrete grade for your project. Get an instant quote or chat with us on WhatsApp for personalised advice.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="/#quick-price" className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-brand-700 transition-all">
                      Get Instant Quote <ArrowRight className="w-4 h-4" />
                    </a>
                    <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white border border-brand-300 text-brand-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-brand-50 transition-all">
                      <MessageCircle className="w-4 h-4" /> WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/services/ready-mix-concrete-dar-es-salaam" className="group border border-gray-200 rounded-xl p-4 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-brand-600 transition-colors mb-1">Ready-Mix Concrete</h3>
                <p className="text-xs text-gray-500">C10–C50 grades delivered to your site</p>
              </Link>
              <Link href="/aggregates-supplier-zanzibar" className="group border border-gray-200 rounded-xl p-4 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-brand-600 transition-colors mb-1">Aggregates</h3>
                <p className="text-xs text-gray-500">Gravel, crushed stone &amp; all grades</p>
              </Link>
              <Link href="/blocks-supplier-zanzibar" className="group border border-gray-200 rounded-xl p-4 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-brand-600 transition-colors mb-1">Concrete Blocks</h3>
                <p className="text-xs text-gray-500">Standard &amp; custom blocks for construction</p>
              </Link>
              <Link href="/get-quote" className="group border border-gray-200 rounded-xl p-4 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-brand-600 transition-colors mb-1">Get a Quote</h3>
                <p className="text-xs text-gray-500">Instant pricing for your project</p>
              </Link>
            </div>
          </section>

          <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/concrete-price-guide-tanzania" className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">Concrete Price Guide Tanzania 2026</h3>
                <p className="text-sm text-gray-600">Complete breakdown of concrete prices across all grades, delivery costs, pump fees, and VAT.</p>
              </Link>
              <Link href="/blog/c25-vs-c30-concrete" className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">C25 vs C30 Concrete — Which Grade Do You Need?</h3>
                <p className="text-sm text-gray-600">Compare C25 and C30 concrete for construction projects. Strength, applications, cost differences, and expert recommendations.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-brand-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Order Ready-Mix Concrete?</h2>
            <p className="text-lg text-brand-100 mb-8">Get an instant quote or chat with our team on WhatsApp.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl">
                <Zap className="w-5 h-5" /> Get Instant Quote
              </a>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
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
