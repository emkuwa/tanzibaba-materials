import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, MapPin, MessageCircle, ArrowRight, Leaf, HardHat } from 'lucide-react';

const siteUrl = 'https://materials.tanzibaba.com';

export const metadata: Metadata = {
  title: 'Our Projects — Concrete Supply Portfolio | Tanzibaba',
  description: 'Explore Tanzibaba\'s portfolio of landmark concrete supply projects across Tanzania. From Hotel Verde Zanzibar\'s sustainable construction to Viva Towers and Vijana Towers high-rise developments in Dar es Salaam.',
  keywords: ['tanzibaba projects', 'concrete supply projects', 'hotel verde zanzibar', 'viva towers', 'vijana towers', 'construction projects tanzania', 'landmark concrete projects'],
  alternates: { canonical: `${siteUrl}/projects` },
  openGraph: {
    title: 'Our Projects — Concrete Supply Portfolio | Tanzibaba',
    description: 'Explore Tanzibaba\'s portfolio of landmark concrete supply projects across Tanzania.',
    url: `${siteUrl}/projects`,
    siteName: 'Tanzibaba',
    type: 'website',
    locale: 'en_TZ',
    images: [{ url: '/images/new/commercial-building.webp', width: 1200, height: 630 }],
  },
};

const projects = [
  {
    slug: 'hotel-verde-zanzibar',
    title: 'Hotel Verde Zanzibar',
    subtitle: 'Sustainable Concrete Supply',
    location: 'Zanzibar, Tanzania',
    type: 'Sustainable Hotel & Resort',
    description: 'Premium concrete supply for Hotel Verde Zanzibar, East Africa\'s first green-certified hotel. Our sustainable concrete solutions met stringent environmental standards while delivering uncompromising structural quality across the entire development.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    icon: Leaf,
    stats: '12,000+ m³',
    statsLabel: 'Concrete Supplied',
    color: 'emerald',
  },
  {
    slug: 'viva-towers',
    title: 'Viva Towers',
    subtitle: 'Premium Concrete Supply',
    location: 'Dar es Salaam, Tanzania',
    type: 'Mixed-Use High-Rise',
    description: 'Premium ready-mix concrete for Viva Towers, a landmark high-rise development in Dar es Salaam. High-strength grades C30/C35/C40 with strict quality control across all phases from foundation to completion.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    icon: Building2,
    stats: '20,000+ m³',
    statsLabel: 'Concrete Supplied',
    color: 'blue',
  },
  {
    slug: 'vijana-towers',
    title: 'Vijana Towers',
    subtitle: 'Commercial Concrete Supply',
    location: 'Dar es Salaam CBD, Tanzania',
    type: 'Commercial High-Rise',
    description: 'Exclusive ready-mix concrete supplier for Vijana Towers, a landmark commercial high-rise in Dar es Salaam CBD. High-strength grades with strict quality assurance and precise delivery coordination.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    icon: HardHat,
    stats: '15,000+ m³',
    statsLabel: 'Concrete Supplied',
    color: 'violet',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50vh] flex items-center bg-gray-950 overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image
              src="/images/new/commercial-building.webp"
              alt="Tanzibaba concrete supply projects portfolio"
              fill
              className="object-cover"
              style={{ objectPosition: '50% 40%' }}
              priority
              fetchPriority="high"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/60" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Building2 className="w-4 h-4" /> Our Portfolio
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Landmark{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                  Projects
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Tanzibaba has supplied premium concrete for some of Tanzania&apos;s most significant construction projects. From sustainable hospitality developments to landmark commercial high-rises, our portfolio showcases our commitment to quality and reliability.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, i) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-full min-h-[300px]">
                      <Image
                        src={project.image}
                        alt={`${project.title} — ${project.subtitle} by Tanzibaba`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={i === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 bg-brand-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                          <project.icon className="w-3.5 h-3.5" /> {project.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-brand-600 font-semibold text-sm mb-3">{project.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                      <div className="flex items-center gap-6 mb-4">
                        <div>
                          <p className="text-2xl font-extrabold text-brand-600">{project.stats}</p>
                          <p className="text-xs text-gray-500">{project.statsLabel}</p>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 text-brand-600 font-semibold group-hover:gap-3 transition-all">
                        View Project Details <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Track Record Speaks</h2>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              Over 47,000 cubic metres of premium concrete supplied across Tanzania&apos;s most demanding construction projects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <p className="text-4xl font-extrabold text-brand-600 mb-1">3</p>
                <p className="text-sm text-gray-500">Landmark Projects</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <p className="text-4xl font-extrabold text-brand-600 mb-1">47,000+</p>
                <p className="text-sm text-gray-500">Cubic Metres Supplied</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <p className="text-4xl font-extrabold text-brand-600 mb-1">100%</p>
                <p className="text-sm text-gray-500">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-brand-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Planning a Major Project?</h2>
            <p className="text-lg text-brand-100 mb-8">Get a project-specific concrete quote or speak to our commercial sales team on WhatsApp.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl">
                Get Project Quote
              </a>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
