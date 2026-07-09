import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, HelpCircle, Phone, Package, CheckCircle } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Building Materials Kongwa — Zege, Kokoto & Blocks | Tanzibaba',
  description: 'Building materials supplier in Kongwa, Dodoma. Ready mix concrete, aggregates, kokoto, blocks, paving blocks and culvert pipes.',
  keywords: ['building materials Kongwa', 'zege Kongwa', 'kokoto Kongwa', 'concrete Kongwa', 'blocks Kongwa', 'vifaa vya ujenzi Kongwa', 'msambazaji wa zege Kongwa', 'aggregates Kongwa'],
  alternates: {
    canonical: `${siteUrl}/kongwa-building-materials`,
  },
  openGraph: {
    title: 'Building Materials Kongwa — Zege, Kokoto & Blocks | Tanzibaba',
    description: 'Building materials supplier in Kongwa, Dodoma. Ready mix concrete, aggregates, kokoto, blocks, paving blocks and culvert pipes.',
    url: `${siteUrl}/kongwa-building-materials`,
    siteName: 'Tanzibaba',
    type: 'website',
  },
};

const products = [
  {
    name: 'Ready Mix Concrete',
    slug: 'ready-mix-concrete-dodoma',
    image: '/images/new/ready-mix-concrete.webp',
    description: 'High-quality ready mix concrete delivered directly to your construction site in Kongwa district.',
  },
  {
    name: 'Aggregates & Kokoto',
    slug: 'aggregates-supplier-dodoma',
    image: '/images/new/aggregates.webp',
    description: 'Premium aggregates, gravel, and kokoto for all your construction projects in Kongwa.',
  },
  {
    name: 'Concrete Blocks',
    slug: 'blocks-supplier-dodoma',
    image: '/images/new/hollow-blocks.webp',
    description: 'Durable concrete blocks in various sizes for residential and commercial buildings in Kongwa.',
  },
  {
    name: 'Paving Blocks',
    slug: 'paving-blocks-dodoma',
    image: '/images/new/paving-blocks.webp',
    description: 'Decorative and interlocking paving blocks for driveways, walkways, and outdoor spaces in Kongwa.',
  },
  {
    name: 'Culvert Pipes',
    slug: 'culvert-pipes-dodoma',
    image: '/images/new/culvert-pipes.webp',
    description: 'Robust concrete culvert pipes for drainage and road infrastructure projects in Kongwa.',
  },
  {
    name: 'Zege (Concrete Products)',
    slug: 'zege-dodoma',
    image: '/images/new/ready-mix-concrete.webp',
    description: 'Full range of zege and concrete products for construction needs throughout Kongwa district.',
  },
];

const faqs = [
  {
    question: 'Do you deliver building materials to Kongwa district?',
    answer: 'Yes, we deliver all building materials including ready mix concrete, aggregates, kokoto, blocks, paving blocks, and culvert pipes throughout Kongwa district in Dodoma region.',
  },
  {
    question: 'How long does delivery to Kongwa take?',
    answer: 'Delivery to Kongwa district typically takes 24-48 hours depending on the order size and specific location within the district. Contact us for accurate delivery timeframes.',
  },
  {
    question: 'What is the minimum order for delivery to Kongwa?',
    answer: 'We have flexible minimum order requirements. For large construction projects in Kongwa, we offer bulk pricing and scheduled deliveries. Contact us to discuss your specific needs.',
  },
  {
    question: 'Can I get a quote for building materials in Kongwa?',
    answer: 'Absolutely! Contact us via phone or WhatsApp for a free, no-obligation quote for any building materials delivered to Kongwa district.',
  },
  {
    question: 'What types of concrete products are available for Kongwa?',
    answer: 'We supply ready mix concrete, concrete blocks in various sizes, paving blocks, culvert pipes, and other zege products to Kongwa district.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function KongwaBuildingMaterialsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-yellow-500 to-amber-600 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                Kongwa District — Dodoma
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building Materials Kongwa
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
              Complete building materials supplier in Kongwa district, Dodoma.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/255700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Get a Quote
              </a>
              <Link
                href="#products"
                className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
              >
                View Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Building Materials Available in Kongwa
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Quality construction materials delivered to your site in Kongwa district
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/${product.slug}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <span className="inline-flex items-center gap-2 text-amber-600 font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Tanzibaba in Kongwa?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wide Range</h3>
                <p className="text-gray-600">
                  Complete selection of building materials from one trusted supplier in Kongwa.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assured</h3>
                <p className="text-gray-600">
                  All products meet Tanzania construction standards and quality benchmarks.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Delivery</h3>
                <p className="text-gray-600">
                  Fast and dependable delivery to all areas within Kongwa district.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <HelpCircle className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about building materials delivery in Kongwa
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Materials in Kongwa?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote on building materials delivered to Kongwa district.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/255700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors"
              >
                Contact Form
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
