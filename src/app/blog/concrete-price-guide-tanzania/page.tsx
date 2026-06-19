import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Truck, Zap, DollarSign, Building2, HardHat, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Concrete Price Guide Tanzania 2026 | Ready-Mix Costs | Tanzibaba',
  description: 'Complete guide to concrete prices in Tanzania 2026. C10-C50 grade prices, delivery costs, pump fees, and VAT explained.',
  keywords: ['concrete price guide', 'concrete cost tanzania', 'concrete prices dar es salaam', 'ready mix concrete price', 'concrete price list tanzania'],
  alternates: { canonical: `${siteUrl}/blog/concrete-price-guide-tanzania` },
  openGraph: {
    title: 'Concrete Price Guide Tanzania 2026 | Ready-Mix Costs | Tanzibaba',
    description: 'Complete guide to concrete prices in Tanzania 2026. C10-C50 grade prices, delivery costs, pump fees, and VAT explained.',
    url: `${siteUrl}/blog/concrete-price-guide-tanzania`,
    siteName: 'Tanzibaba',
    type: 'article',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Concrete Price Guide Tanzania 2026',
  description: 'Complete guide to concrete prices in Tanzania 2026. C10-C50 grade prices, delivery costs, pump fees, and VAT explained.',
  datePublished: '2026-06-16',
  author: { '@type': 'Organization', name: 'Tanzibaba' },
  publisher: { '@type': 'Organization', name: 'Tanzibaba' },
};

export default function ConcretePriceGuide() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80" alt="Concrete price guide Tanzania" className="w-full h-full object-cover" style={{ objectPosition: '50% 40%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <DollarSign className="w-4 h-4" /> Price Guide
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-4 tracking-tight">
                Concrete Price Guide Tanzania 2026
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>Published: 16 June 2026</span>
                <span>·</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </section>

        <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-8">
          <Image src="/images/commercial-building.jpg" alt="Concrete price guide Tanzania 2026 — C10 to C50 ready-mix concrete prices from Tanzibaba" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" loading="lazy" />
        </div>

        <article className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto prose prose-gray prose-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Understanding concrete pricing in Tanzania can be challenging. With multiple grades, delivery fees, pump costs, and VAT to consider, it is easy to underestimate your project budget. This guide breaks down every cost component so you know exactly what to expect when ordering ready-mix concrete in Dar es Salaam.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Concrete Pricing Works</h2>
            <p>
              Ready-mix concrete prices in Tanzania are determined by several factors. The most significant is the concrete grade, which specifies the compressive strength measured in megapascals (MPa). Higher strength grades require more cement and stricter quality control, which increases the cost per cubic metre.
            </p>
            <p>
              Beyond the grade, your final price includes delivery charges (based on distance from the nearest production facility), optional pump service fees, and mandatory 18% VAT. Volume discounts are available for larger orders, typically above 20 m³.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Concrete Grade Price Ranges (Per m³)</h2>
            <p>
              Below are the current market price ranges for standard concrete grades in Dar es Salaam. These prices include the concrete material cost but exclude delivery, pump fees, and VAT.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 my-8 border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 font-bold text-gray-900">Grade</th>
                    <th className="text-left py-3 font-bold text-gray-900">Strength</th>
                    <th className="text-left py-3 font-bold text-gray-900">Typical Use</th>
                    <th className="text-right py-3 font-bold text-gray-900">Price Range (TZS/m³)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { grade: 'C10', strength: '10 MPa', use: 'Blinding, leveling, non-structural fill', price: '130,000 – 150,000' },
                    { grade: 'C15', strength: '15 MPa', use: 'Lean concrete, walkways, light foundations', price: '155,000 – 175,000' },
                    { grade: 'C20', strength: '20 MPa', use: 'Residential slabs, small foundations', price: '180,000 – 200,000' },
                    { grade: 'C25', strength: '25 MPa', use: 'House foundations, columns, beams, driveways', price: '210,000 – 230,000' },
                    { grade: 'C30', strength: '30 MPa', use: 'Multi-storey apartments, commercial buildings', price: '250,000 – 280,000' },
                    { grade: 'C35', strength: '35 MPa', use: 'Heavy-duty structures, industrial floors', price: '290,000 – 320,000' },
                    { grade: 'C40', strength: '40 MPa', use: 'Industrial plants, engineered structures', price: '330,000 – 360,000' },
                    { grade: 'C45', strength: '45 MPa', use: 'High-strength precast, bridge components', price: '360,000 – 390,000' },
                    { grade: 'C50', strength: '50 MPa', use: 'Specialized high-performance, heavy infrastructure', price: '390,000 – 430,000' },
                  ].map((row) => (
                    <tr key={row.grade} className="border-b border-gray-200 last:border-0">
                      <td className="py-3 font-bold text-brand-600">{row.grade}</td>
                      <td className="py-3 text-gray-700">{row.strength}</td>
                      <td className="py-3 text-gray-700 text-sm">{row.use}</td>
                      <td className="py-3 text-right text-gray-900 font-semibold whitespace-nowrap">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Delivery Costs</h2>
            <p>
              Delivery is charged separately from the concrete material. Most suppliers in Dar es Salaam charge a flat delivery fee per trip plus a per-kilometre charge for distances beyond a certain radius from the production facility.
            </p>
            <p>
              Typical delivery costs range from <strong>TZS 80,000 to TZS 150,000</strong> per trip within Dar es Salaam city limits. Projects located outside the city, such as in Mkuranga, Kibaha, or Bagamoyo, may incur higher delivery charges due to the additional distance and travel time.
            </p>
            <p>
              To minimise delivery costs, choose a supplier with production facilities near your project location. Tanzibaba operates across all five districts of Dar es Salaam, ensuring fast and affordable delivery to most sites.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Concrete Pump Costs</h2>
            <p>
              If your project requires a concrete pump — for multi-storey construction, difficult-access sites, or large volume pours — pump service is charged separately. Pump costs typically include a base call-out fee plus a per-cubic-metre pumping charge.
            </p>
            <p>
              In Dar es Salaam, concrete pump rental costs approximately <strong>TZS 150,000 base fee + TZS 5,000 per m³</strong>. For a standard 10 m³ pour, the pump service would add approximately TZS 200,000 to your total cost. While this is a significant addition, a pump can dramatically speed up your pour and improve concrete quality.
            </p>
            <p>
              <Link href="/blog/concrete-pump-guide" className="text-brand-600 font-semibold hover:underline">Read our full concrete pump guide →</Link>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">VAT and Other Charges</h2>
            <p>
              All concrete purchases in Tanzania are subject to <strong>18% VAT</strong>. Reputable suppliers include VAT in their quoted prices for full transparency. Always confirm whether the price you are quoted includes or excludes VAT to avoid budget surprises.
            </p>
            <p>
              Some suppliers may also charge additional fees for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>After-hours delivery</strong> — Night or weekend deliveries may incur a surcharge.</li>
              <li><strong>Small volumes</strong> — Orders below 3 m³ may have a minimum delivery charge.</li>
              <li><strong>Waiting time</strong> — If your site is not ready when the truck arrives, demurrage charges may apply.</li>
              <li><strong>Special mix designs</strong> — Custom mixes that require additional testing or admixtures may cost more.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Sample Project Cost Breakdown</h2>
            <p>
              To give you a realistic idea of total costs, here is a sample breakdown for a typical residential house slab requiring 10 m³ of C25 concrete delivered in Dar es Salaam:
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 my-8 border border-gray-200">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    { item: 'Concrete (C25, 10 m³ × 215,000 TZS)', amount: '2,150,000' },
                    { item: 'Delivery fee', amount: '100,000' },
                    { item: 'Pump service (base + 10 m³ × 5,000 TZS)', amount: '200,000' },
                    { item: 'Subtotal', amount: '2,450,000' },
                    { item: 'VAT (18%)', amount: '441,000' },
                    { item: 'Total Estimated Cost', amount: '2,891,000', bold: true },
                  ].map((row) => (
                    <tr key={row.item} className="border-b border-gray-200 last:border-0">
                      <td className={`py-3 ${row.bold ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.item}</td>
                      <td className={`py-3 text-right whitespace-nowrap ${row.bold ? 'font-bold text-gray-900' : 'text-gray-700'}`}>TZS {row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Get an Accurate Quote</h2>
            <p>
              To get a precise price for your project, you will need to provide the following information to your concrete supplier:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li><strong>Concrete grade</strong> — Specify the grade (e.g., C25) or provide your structural engineer&apos;s mix design.</li>
              <li><strong>Volume</strong> — The total cubic metres required. Use our online calculator if you are unsure.</li>
              <li><strong>Delivery location</strong> — Your project site address in Dar es Salaam or surrounding areas.</li>
              <li><strong>Pump requirement</strong> — Whether you need a concrete pump or will use manual methods.</li>
              <li><strong>Delivery schedule</strong> — Preferred date and time for the pour.</li>
            </ol>
            <p className="mt-6">
              Use the <a href="/#quick-price" className="text-brand-600 font-semibold hover:underline">Tanzibaba Instant Quote tool</a> to get an estimated price immediately. Our system calculates all costs — concrete, delivery, pump fees, and VAT — for full upfront transparency.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tips to Save on Concrete Costs</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Order the right grade</strong> — Do not over-specify. Using C30 when C25 is sufficient adds unnecessary cost. Consult a structural engineer.</li>
              <li><strong>Plan your pour</strong> — Ordering a single larger pour is more cost-effective than multiple small deliveries.</li>
              <li><strong>Choose a nearby supplier</strong> — A production facility close to your site reduces delivery charges.</li>
              <li><strong>Order during business hours</strong> — Standard daytime deliveries avoid after-hours surcharges.</li>
              <li><strong>Prepare your site</strong> — Have your formwork, reinforcement, and labour ready before the truck arrives to avoid waiting time charges.</li>
            </ul>

            <div className="bg-brand-50 rounded-2xl p-6 my-10 border border-brand-200">
              <div className="flex items-start gap-4">
                <HardHat className="w-8 h-8 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Need a Custom Quote?</h3>
                  <p className="text-gray-700 mb-4">
                    Get an instant online quote or speak with our team on WhatsApp. We respond within minutes and provide full price breakdowns with no hidden fees.
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

        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/c25-vs-c30-concrete" className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">C25 vs C30 Concrete — Which Grade Do You Need?</h3>
                <p className="text-sm text-gray-600">Compare strength, applications, and cost differences between C25 and C30 concrete.</p>
              </Link>
              <Link href="/blog/concrete-pump-guide" className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">Concrete Pump Guide — When & Why You Need One</h3>
                <p className="text-sm text-gray-600">Learn about pump types, costs, and when a concrete pump makes sense for your project.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-brand-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Order?</h2>
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
