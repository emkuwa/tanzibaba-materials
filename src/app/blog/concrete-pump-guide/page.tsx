import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Zap, Truck, Building2, DollarSign, CheckCircle, HardHat } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://tanzibaba.co.tz';

export const metadata: Metadata = {
  title: 'Concrete Pump Guide | When & Why You Need One | Tanzibaba',
  description: 'Complete guide to concrete pumps in Dar es Salaam. When to use a pump, types of pumps, costs, and benefits for your project.',
  keywords: ['concrete pump guide', 'concrete pump dar es salaam', 'when to use concrete pump', 'concrete pump rental', 'line pump boom pump'],
  alternates: { canonical: `${siteUrl}/blog/concrete-pump-guide` },
  openGraph: {
    title: 'Concrete Pump Guide | When & Why You Need One | Tanzibaba',
    description: 'Complete guide to concrete pumps in Dar es Salaam. When to use a pump, types of pumps, costs, and benefits for your project.',
    url: `${siteUrl}/blog/concrete-pump-guide`,
    siteName: 'Tanzibaba',
    type: 'article',
    locale: 'en_TZ',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Concrete Pump Guide — When & Why You Need One',
  description: 'Complete guide to concrete pumps in Dar es Salaam. When to use a pump, types of pumps, costs, and benefits for your project.',
  datePublished: '2026-06-05',
  author: { '@type': 'Organization', name: 'Tanzibaba' },
  publisher: { '@type': 'Organization', name: 'Tanzibaba' },
};

export default function ConcretePumpGuide() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1624969862644-791f3dc98927?w=1600&q=80" alt="Concrete pump guide Dar es Salaam" className="w-full h-full object-cover" style={{ objectPosition: '50% 40%' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Truck className="w-4 h-4" /> Pump Guide
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-4 tracking-tight">
                Concrete Pump Guide — When &amp; Why You Need One
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>Published: 5 June 2026</span>
                <span>·</span>
                <span>7 min read</span>
              </div>
            </div>
          </div>
        </section>

        <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-8">
          <Image src="/images/concrete-pump.jpg" alt="Concrete pump guide — when and why to use a concrete pump for your construction project" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" loading="lazy" />
        </div>

        <article className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto prose prose-gray prose-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A concrete pump can be the difference between a smooth, efficient pour and a slow, labour-intensive day on site. But not every project needs one. This guide explains the types of concrete pumps available in Dar es Salaam, when you need one, how much it costs, and the key benefits.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Is a Concrete Pump?</h2>
            <p>
              A concrete pump is a machine that transfers liquid concrete from the mixer truck to the point of placement using a system of pipes and hoses. Instead of manually wheeling concrete in barrows or using a crane and skip, a pump delivers concrete precisely where it is needed — even if that is several floors up or hundreds of metres away from the truck.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Types of Concrete Pumps</h2>
            <p>
              There are two main types of concrete pumps used in Dar es Salaam:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-brand-700 font-bold text-lg">1</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Line Pump (Trailer-Mounted)</h3>
                <p className="text-sm text-gray-700 mb-3">
                  A line pump is mounted on a trailer and uses flexible hoses to move concrete. It is the most common pump for residential and medium-scale projects.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                  <li>Lower cost than boom pumps</li>
                  <li>Can reach up to 150 metres horizontally</li>
                  <li>Requires manual hose guidance</li>
                  <li>Ideal for ground slabs and low-rise buildings</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-brand-700 font-bold text-lg">2</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Boom Pump (Truck-Mounted)</h3>
                <p className="text-sm text-gray-700 mb-3">
                  A boom pump is mounted on a truck with a robotic arm (boom) that can be positioned precisely over the pour area. It is used for large-scale and multi-storey projects.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                  <li>Hydraulic boom reaches up to 50+ metres vertically</li>
                  <li>Requires fewer workers to operate</li>
                  <li>Higher rental cost</li>
                  <li>Ideal for high-rise buildings and large pours</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">When Do You Need a Concrete Pump?</h2>
            <p>
              While concrete can be placed manually using wheelbarrows and chutes, a pump becomes necessary in certain situations:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Multi-Storey Construction</h3>
                  <p className="text-sm text-gray-700">For upper-floor slabs and columns, a pump is the only practical way to deliver concrete. Carrying concrete up stairs or scaffolding is slow, unsafe, and risks the concrete setting before placement.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <HardHat className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Difficult Site Access</h3>
                  <p className="text-sm text-gray-700">If the mixer truck cannot park close to the pour area — due to narrow roads, gates, or terrain — a pump with long hoses can bridge the gap.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <DollarSign className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Large Volume Pours</h3>
                  <p className="text-sm text-gray-700">For pours exceeding 10 m³, a pump significantly speeds up placement. This reduces the risk of cold joints and ensures uniform concrete quality across the entire pour.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Concrete Pump Costs in Dar es Salaam</h2>
            <p>
              Concrete pump rental in Dar es Salaam typically costs:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Base call-out fee:</strong> TZS 100,000 – 150,000 (covers mobilisation and setup)</li>
              <li><strong>Per-cubic-metre charge:</strong> TZS 4,000 – 6,000 / m³ pumped</li>
              <li><strong>Minimum charge:</strong> Most suppliers require a minimum volume of 5–8 m³ for pump service</li>
            </ul>
            <p>
              For a typical 10 m³ residential slab pour, pump service adds approximately <strong>TZS 200,000</strong> to your total cost. For larger commercial pours of 50 m³, the pump cost averages around <strong>TZS 400,000</strong>.
            </p>
            <p>
              While this is a significant expense, the time savings, reduced labour costs, and improved concrete quality often justify the investment. Many contractors find that a pump pays for itself by reducing pour time from hours to minutes.
            </p>
            <p>
              <Link href="/services/concrete-pump-rental-dar-es-salaam" className="text-brand-600 font-semibold hover:underline">View Tanzibaba concrete pump rental services →</Link>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Benefits of Using a Concrete Pump</h2>
            <div className="space-y-4 my-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Faster Placement</h3>
                  <p className="text-sm text-gray-700">A pump can place 20–40 m³ of concrete per hour, compared to 5–10 m³ per hour with manual methods. Your pour finishes faster, reducing labour costs and overtime.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Better Concrete Quality</h3>
                  <p className="text-sm text-gray-700">Faster placement means the concrete is still fresh and workable when it reaches the formwork. This reduces the risk of cold joints, segregation, and strength loss.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Reduced Labour</h3>
                  <p className="text-sm text-gray-700">A pump replaces a team of workers who would otherwise be pushing wheelbarrows. Fewer people on site means lower labour costs and improved safety.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Precise Placement</h3>
                  <p className="text-sm text-gray-700">The pump hose delivers concrete exactly where you need it — into deep foundation trenches, between rebar cages, or onto upper-floor slabs — with minimal waste.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tips for Using a Concrete Pump</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li><strong>Plan your pump position</strong> — Ensure there is clear access for both the mixer truck and the pump vehicle. The pump should be on stable, level ground.</li>
              <li><strong>Prime the pump</strong> — The pump should be primed with a grout slurry before concrete starts flowing to lubricate the pipes.</li>
              <li><strong>Maintain concrete consistency</strong> — The concrete mix should have adequate workability (slump of 75–125 mm) for pumping. Very stiff mixes may block the pipes.</li>
              <li><strong>Communicate clearly</strong> — Have a worker with a radio or phone at the pour area to signal the pump operator when to start, stop, or adjust flow.</li>
              <li><strong>Clean the pump immediately</strong> — After the pour, the pump and pipes must be flushed with water and cleaned to prevent concrete from hardening inside.</li>
            </ol>

            <div className="bg-brand-50 rounded-2xl p-6 my-10 border border-brand-200">
              <div className="flex items-start gap-4">
                <Truck className="w-8 h-8 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Need a Concrete Pump for Your Project?</h3>
                  <p className="text-gray-700 mb-4">
                    Tanzibaba offers professional concrete pump services across Dar es Salaam. Whether you need a line pump for a ground slab or a boom pump for a high-rise, we have the equipment and expertise.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="/#quick-price" className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-brand-700 transition-all">
                      Get a Quote <ArrowRight className="w-4 h-4" />
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
              <Link href="/blog/concrete-price-guide-tanzania" className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">Concrete Price Guide Tanzania 2026</h3>
                <p className="text-sm text-gray-600">Complete breakdown of concrete prices including pump service costs.</p>
              </Link>
              <Link href="/blog/ready-mix-concrete-for-apartments" className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">Concrete for Apartment Buildings</h3>
                <p className="text-sm text-gray-600">Grade recommendations and best practices for multi-storey construction.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-brand-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Pour?</h2>
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
