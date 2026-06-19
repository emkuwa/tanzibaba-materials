import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Truck, CheckCircle, Shield, MapPin, MessageCircle, ArrowRight, Zap, Factory, Scale, HardHat, Building2, Building, Warehouse, Store, Route, Package, CircleDot, Layers, Grid } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import areas, { getAreaBySlug, materialTypes, getMaterialTypeBySlug, concreteGrades, fmtPrice, siteUrl } from '@/data/locations';
import { materialsServices, constructionServices } from '@/data/services';
import { allMaterialsLocations, getMaterialsLocationBySlug } from '@/data/materialsLocations';
import { tanzaniaRegions, africaCountries, getRegionBySlug, getCountryBySlug } from '@/data/countries';

interface PageProps { params: { slug: string } }

const iconMap: Record<string, React.ElementType> = { Truck, Building2, Building, Warehouse, Store, Route, Package, CircleDot, Layers, HardHat, Shield, Grid, Factory, Scale };

function areaSlugs(): string[] {
  const slugs: string[] = [];
  for (const mt of materialTypes) {
    for (const area of areas) {
      slugs.push(`${mt.slug}-${area.slug}`);
    }
  }
  return slugs;
}

const gradeSlugs: string[] = concreteGrades.map(g => `c${g.grade.toLowerCase()}-concrete-dar-es-salaam`);

const projectTypeSlugs: string[] = [
  'apartment-concrete-supply', 'commercial-concrete-supply', 'industrial-concrete-supply',
  'warehouse-concrete-supply', 'hotel-concrete-supply', 'hospital-concrete-supply',
  'school-concrete-supply', 'infrastructure-concrete-supply',
  'road-construction', 'bridge-construction', 'housing-developments',
];

const districtNames: Record<string, string> = {
  'kinondoni': 'Kinondoni', 'ubungo': 'Ubungo', 'ilala': 'Ilala',
  'temeke': 'Temeke', 'kigamboni': 'Kigamboni', 'bagamoyo': 'Bagamoyo', 'kibaha': 'Kibaha',
};

const overviewData: Record<string, { desc: string; features: string[] }> = {
  'gravel-supplier-dar-es-salaam': { desc: 'Premium gravel supply in Dar es Salaam for construction, road building, and infrastructure projects. Quality-controlled gravel grades for all applications.', features: ['Quality-graded gravel for construction', 'Multiple sizes from crusher dust to 40mm+', 'Bulk delivery across Dar es Salaam', 'Competitive direct pricing with VAT included'] },
  'crushed-stone-supplier-dar-es-salaam': { desc: 'Premium crushed stone supply in Dar es Salaam for commercial, industrial, and infrastructure projects. Produced from quality-controlled crushing operations at our Lugoba plant.', features: ['Quality crushed stone from Lugoba', 'Multiple grades: 6mm, 10mm, 14mm, 20mm, 40mm', 'Suitable for concrete production and road construction', 'Bulk delivery available across Dar es Salaam'] },
  'road-construction-materials': { desc: 'Road construction materials supply in Dar es Salaam. Aggregates, gravel, base course, concrete, and crushed stone for road building and infrastructure projects.', features: ['Complete road construction materials package', 'Base course and sub-base materials', 'Concrete for bridges, culverts and drainage', 'Aggregates for asphalt production and road surfacing'] },
  'aggregates-supplier-dar-es-salaam': { desc: 'Construction aggregates supply in Dar es Salaam. Gravel, crushed stone, and base course materials for commercial, industrial, and residential projects.', features: ['Full range of construction aggregates', 'Quality-controlled production from our Lugoba crusher', 'Competitive bulk pricing with VAT included', 'Reliable delivery scheduling across all districts'] },
  'aggregates-supplier-kinondoni': { desc: 'Construction aggregates supply in Kinondoni, Dar es Salaam. Gravel, crushed stone, and base course materials for commercial, industrial, and residential projects in Kinondoni.', features: ['Full range of construction aggregates', 'Quality-controlled production from our Lugoba crusher', 'Competitive bulk pricing with VAT included', 'Reliable delivery scheduling in Kinondoni'] },
  'aggregates-supplier-ubungo': { desc: 'Construction aggregates supply in Ubungo, Dar es Salaam. Gravel, crushed stone, and base course materials for commercial, industrial, and residential projects in Ubungo.', features: ['Full range of construction aggregates', 'Quality-controlled production from our Lugoba crusher', 'Competitive bulk pricing with VAT included', 'Reliable delivery scheduling in Ubungo'] },
  'aggregates-supplier-kigamboni': { desc: 'Construction aggregates supply in Kigamboni, Dar es Salaam. Gravel, crushed stone, and base course materials for commercial, industrial, and residential projects in Kigamboni.', features: ['Full range of construction aggregates', 'Quality-controlled production from our Lugoba crusher', 'Competitive bulk pricing with VAT included', 'Reliable delivery scheduling in Kigamboni'] },
  'kokoto-supplier-dar-es-salaam': { desc: 'Kokoto (gravel) supply in Dar es Salaam. Quality crushed stone and gravel for construction, concrete production, and road building. Direct from our crushing operations at Lugoba.', features: ['Quality kokoto (gravel) supply', 'Multiple sizes: 6mm, 10mm, 14mm, 20mm, 40mm', 'Ideal for concrete production and road construction', 'Bulk delivery across Dar es Salaam and Coast region'] },
  'construction-materials-dar-es-salaam': { desc: 'Comprehensive construction materials supply in Dar es Salaam. Ready-mix concrete, gravel, crushed stone, aggregates, and road construction materials for projects of all sizes.', features: ['Ready-mix concrete grades C10 to C50', 'Gravel and crushed stone from Lugoba', 'Construction aggregates for all applications', 'Road construction materials for infrastructure projects'] },
  'ready-mix-concrete-dar-es-salaam': { desc: 'Premium ready-mix concrete supply in Dar es Salaam. Grades C10 to C50 with washed sand technology and computerized batching across all districts.', features: ['Grades C10 to C50 for all project types', 'Washed sand technology for superior strength', 'Fast delivery within 24-48 hours', 'Pricing includes 18% VAT'] },
  'blocks-supplier-dar-es-salaam': { desc: 'Premium concrete blocks supply in Dar es Salaam. Hollow blocks, solid blocks, paving blocks, and kerbstones for walls, fencing, driveways, and construction projects.', features: ['Hollow blocks: 140x190x390, 190x190x390, 230x190x390mm', 'Solid blocks: 90x190x390 to 220x190x390mm', 'Paving blocks and kerbstones for landscaping', 'Bulk delivery across Dar es Salaam'] },
  'paving-blocks-dar-es-salaam': { desc: 'Premium paving blocks and paver tiles supply in Dar es Salaam. Interlocking paving blocks for driveways, walkways, patios, parking areas, and landscaping.', features: ['Paving blocks: 200x100x80, 200x100x60, 220x110x80mm', 'Paver tiles: 60mm and 20mm thickness', 'Kerbstones: 500x250x100 and 500x250x150mm', 'Bulk delivery across Dar es Salaam and surrounding areas'] },
  'culvert-pipes-dar-es-salaam': { desc: 'Premium concrete culvert pipes supply in Dar es Salaam. Round pipes and box culverts for drainage, road crossings, driveways, and infrastructure projects.', features: ['Round pipes: 400mm, 500mm, 600mm diameter x 1050mm', 'Box culverts: 900x900x100 and 1200x900x100mm', 'Small drainage and large river crossing options', 'Bulk delivery across Dar es Salaam and Coast region'] },
};

const productImages: Record<string, string> = {
  'ready-mix-concrete': '/images/new/ready-mix-concrete.webp',
  'aggregates': '/images/new/aggregates.webp',
  'gravel': '/images/new/aggregates.webp',
  'blocks': '/images/new/hollow-blocks.webp',
  'paving': '/images/new/paving-blocks.webp',
  'culvert': '/images/new/culvert-pipes.webp',
  'precast': '/images/new/precast-products.webp',
  'crusher-plant': '/images/new/crusher-plant.webp',
  'road-construction': '/images/new/road-construction.webp',
};

const districtPages: Record<string, { desc: string; features: string[] }> = {
  'ready-mix-concrete-kinondoni': { desc: 'Premium ready-mix concrete supply in Kinondoni, Dar es Salaam. Serving Magomeni, Mikocheni, Sinza, Kawe, Kunduchi, Tegeta, and all Kinondoni wards with fast delivery and consistent quality.', features: ['Batch plants serving all Kinondoni wards', 'Grades C10-C50 with washed sand technology', 'Coverage: Magomeni to Tegeta, Sinza to Kawe', 'Fast delivery for residential and commercial projects'] },
  'ready-mix-concrete-ubungo': { desc: 'Premium ready-mix concrete supply in Ubungo, Dar es Salaam. Serving Kimara, Mbezi, Gongo la Mboto, Ubungo Makati, and all Ubungo wards with quality-controlled concrete.', features: ['Strategic production location near Ubungo area', 'Grades C10-C50 available for all project types', 'Coverage: Kimara, Mbezi, Gongo la Mboto, Saranga', 'Reliable delivery for residential and commercial construction'] },
  'ready-mix-concrete-ilala': { desc: 'Premium ready-mix concrete supply in Ilala, Dar es Salaam. Serving Kariakoo, Upanga, Buguruni, Ukonga, Pugu, and all Ilala wards with quality-controlled ready-mix concrete.', features: ['Batch plants serving central and south Ilala', 'Grades C10-C50 for residential and commercial projects', 'Coverage: Kariakoo to Pugu, Upanga to Ukonga', 'Fast delivery for city-centre and suburban projects'] },
  'ready-mix-concrete-temeke': { desc: 'Premium ready-mix concrete supply in Temeke, Dar es Salaam. Serving Mbagala, Kurasini, Mtoni, Chamazi, and all Temeke wards with reliable concrete delivery.', features: ['Batch plants serving all Temeke districts', 'Grades C10-C50 for residential and industrial projects', 'Coverage: Mbagala, Kurasini, Mtoni, Chamazi', 'Reliable delivery across south Dar es Salaam'] },
  'ready-mix-concrete-kigamboni': { desc: 'Premium ready-mix concrete supply in Kigamboni, Dar es Salaam. Serving Kigamboni town, Vijibweni, Tungi, and the entire Kigamboni peninsula with fresh concrete delivery.', features: ['Batch plants serving the Kigamboni peninsula', 'Grades C10-C50 available', 'Coverage: Kigamboni town, Vijibweni, Tungi, Mjimwema', 'Fresh concrete delivery across the bridge corridor'] },
  'ready-mix-concrete-bagamoyo': { desc: 'Premium ready-mix concrete supply in Bagamoyo. Quality concrete delivered from Dar es Salaam to Bagamoyo town and surrounding areas.', features: ['Delivery from Dar es Salaam', 'Grades C10-C50 for residential and commercial projects', 'Coverage: Bagamoyo town centre and suburbs', 'Scheduled delivery for reliable project planning'] },
  'ready-mix-concrete-kibaha': { desc: 'Premium ready-mix concrete supply in Kibaha. Quality concrete delivered from Dar es Salaam to Kibaha town and the Morogoro Road corridor.', features: ['Delivery from Dar es Salaam', 'Grades C10-C50 for all project types', 'Coverage: Kibaha town centre and surrounding areas', 'Reliable scheduling for coastal region projects'] },
};

const materialsLocationSlugs: string[] = materialsServices.flatMap(s =>
  allMaterialsLocations.map(l => `${s.slug}-${l.slug}`)
);

const tanzaniaConstructionSlugs: string[] = constructionServices.flatMap(s =>
  tanzaniaRegions.map(r => `${s.slug}-${r.slug}`)
);

const africaConstructionSlugs: string[] = constructionServices.flatMap(s =>
  africaCountries.filter(c => c.slug !== 'tanzania').map(c => `${s.slug}-${c.slug}`)
);

const overviewSlugs: string[] = [
  'gravel-supplier-dar-es-salaam', 'crushed-stone-supplier-dar-es-salaam',
  'road-construction-materials', 'aggregates-supplier-dar-es-salaam',
  'kokoto-supplier-dar-es-salaam', 'construction-materials-dar-es-salaam',
  'ready-mix-concrete-dar-es-salaam', 'blocks-supplier-dar-es-salaam',
  'paving-blocks-dar-es-salaam', 'culvert-pipes-dar-es-salaam',
  ...Object.keys(districtNames).map(d => `ready-mix-concrete-${d}`),
  'aggregates-supplier-kinondoni', 'aggregates-supplier-ubungo', 'aggregates-supplier-kigamboni',
  'government-projects-tanzania', 'turnkey-construction-tanzania',
  ...tanzaniaRegions.map(r => `construction-company-${r.slug}`),
  ...tanzaniaConstructionSlugs.filter(s => !s.startsWith('construction-company-')),
  ...africaConstructionSlugs,
  'construction-company-east-africa', 'commercial-construction-east-africa', 'infrastructure-projects-east-africa',
  ...materialsLocationSlugs,
];

const specialSlugs = new Set([
  'government-projects-tanzania', 'turnkey-construction-tanzania',
  'construction-company-east-africa', 'commercial-construction-east-africa', 'infrastructure-projects-east-africa',
]);

export function generateStaticParams() {
  return [...areaSlugs(), ...gradeSlugs, ...projectTypeSlugs, ...overviewSlugs].map(slug => ({ slug }));
}

function parseSlug(slug: string): { type: 'area' | 'grade' | 'project' | 'overview'; mt?: string; areaSlug?: string; grade?: string; projectKey?: string } {
  for (const mt of materialTypes) {
    for (const area of areas) {
      if (slug === `${mt.slug}-${area.slug}`) return { type: 'area', mt: mt.slug, areaSlug: area.slug };
    }
  }
  for (const g of concreteGrades) {
    if (slug === `c${g.grade.toLowerCase()}-concrete-dar-es-salaam`) return { type: 'grade', grade: g.grade };
  }
  for (const pk of projectTypeSlugs) {
    if (slug === pk) return { type: 'project', projectKey: pk };
  }
  return { type: 'overview', mt: slug };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const slug = params.slug;

  // Handle special pages
  if (slug === 'government-projects-tanzania') {
    return { title: 'Government Projects Tanzania — Public Buildings & Infrastructure | Tanzibaba', description: 'Tanzibaba delivers government construction projects across Tanzania — public buildings, institutional facilities and government infrastructure.', alternates: { canonical: `${siteUrl}/${slug}` }, openGraph: { title: 'Government Projects Tanzania', description: 'Government construction projects across Tanzania.', url: `${siteUrl}/${slug}`, siteName: 'Tanzibaba', type: 'website', locale: 'en_TZ' } };
  }
  if (slug === 'turnkey-construction-tanzania') {
    return { title: 'Turnkey Construction Tanzania — End-to-End Project Delivery | Tanzibaba', description: 'Tanzibaba delivers turnkey construction projects across Tanzania — from design through to completion.', alternates: { canonical: `${siteUrl}/${slug}` }, openGraph: { title: 'Turnkey Construction Tanzania', description: 'End-to-end turnkey construction projects across Tanzania.', url: `${siteUrl}/${slug}`, siteName: 'Tanzibaba', type: 'website', locale: 'en_TZ' } };
  }
  if (slug === 'construction-company-east-africa') {
    return { title: 'Construction Company East Africa — Major Projects | Tanzibaba', description: 'Tanzibaba undertakes major construction and infrastructure projects across East Africa.', alternates: { canonical: `${siteUrl}/${slug}` }, openGraph: { title: 'Construction Company East Africa', description: 'Major construction projects across East Africa.', url: `${siteUrl}/${slug}`, siteName: 'Tanzibaba', type: 'website', locale: 'en_TZ' } };
  }
  if (slug === 'commercial-construction-east-africa') {
    return { title: 'Commercial Construction East Africa — Office, Retail & Mixed-Use | Tanzibaba', description: 'Tanzibaba delivers commercial construction projects across East Africa.', alternates: { canonical: `${siteUrl}/${slug}` }, openGraph: { title: 'Commercial Construction East Africa', description: 'Commercial construction projects across East Africa.', url: `${siteUrl}/${slug}`, siteName: 'Tanzibaba', type: 'website', locale: 'en_TZ' } };
  }
  if (slug === 'infrastructure-projects-east-africa') {
    return { title: 'Infrastructure Projects East Africa — Roads, Bridges & Public Works | Tanzibaba', description: 'Tanzibaba delivers infrastructure projects across East Africa.', alternates: { canonical: `${siteUrl}/${slug}` }, openGraph: { title: 'Infrastructure Projects East Africa', description: 'Infrastructure projects across East Africa.', url: `${siteUrl}/${slug}`, siteName: 'Tanzibaba', type: 'website', locale: 'en_TZ' } };
  }

  // Auto-generate construction country/region pages
  const constructionService = constructionServices.find(s => slug.startsWith(`${s.slug}-`));
  if (constructionService) {
    const rest = slug.replace(`${constructionService.slug}-`, '');
    const region = getRegionBySlug(rest);
    const country = getCountryBySlug(rest);
    if (region) {
      return { title: `${constructionService.name} in ${region.name} | Tanzibaba`, description: `Tanzibaba ${constructionService.desc} in ${region.name}, Tanzania. Available to support major commercial, industrial and infrastructure developments.`, alternates: { canonical: `${siteUrl}/${slug}` }, openGraph: { title: `${constructionService.name} ${region.name} Tanzania`, description: `${constructionService.name} services in ${region.name}, Tanzania.`, url: `${siteUrl}/${slug}`, siteName: 'Tanzibaba', type: 'website', locale: 'en_TZ' } };
    }
    if (country) {
      return { title: `${constructionService.name} in ${country.name} | Tanzibaba`, description: `Tanzibaba ${constructionService.desc} in ${country.name}. Available to support major commercial, industrial and infrastructure developments.`, alternates: { canonical: `${siteUrl}/${slug}` }, openGraph: { title: `${constructionService.name} ${country.name}`, description: `${constructionService.name} services in ${country.name}.`, url: `${siteUrl}/${slug}`, siteName: 'Tanzibaba', type: 'website', locale: 'en_TZ' } };
    }
  }

  // Auto-generate materials location pages
  const materialsService = materialsServices.find(s => slug.startsWith(`${s.slug}-`));
  if (materialsService) {
    const rest = slug.replace(`${materialsService.slug}-`, '');
    const location = getMaterialsLocationBySlug(rest);
    if (location) {
      return { title: `${materialsService.name} in ${location.name} | Tanzibaba`, description: `${materialsService.metaDescBase.replace('{location}', location.name)} Contact Tanzibaba for commercial, industrial and infrastructure projects.`, alternates: { canonical: `${siteUrl}/${slug}` }, openGraph: { title: `${materialsService.name} ${location.name}`, description: `${materialsService.name} supply in ${location.name}, ${location.region}.`, url: `${siteUrl}/${slug}`, siteName: 'Tanzibaba', type: 'website', locale: 'en_TZ' } };
    }
  }

  // Fall through to existing metadata logic
  const parsed = parseSlug(slug);
  let title = '';
  let description = '';

  if (parsed.type === 'area') {
    const area = getAreaBySlug(parsed.areaSlug!);
    const mt = getMaterialTypeBySlug(parsed.mt!);
    if (area && mt) {
      title = `${mt.name} ${area.name} | Tanzibaba`;
      description = `Premium ${mt.metaDescSuffix} in ${area.name}, ${area.district}. Serving the ${area.landmark} area. Get an instant quote online.`;
    }
  } else if (parsed.type === 'grade') {
    const g = concreteGrades.find(c => c.grade === parsed.grade);
    if (g) {
      title = `${g.grade} Concrete Dar es Salaam | ${g.strength} | Tanzibaba`;
      description = `${g.grade} (${g.strength}) concrete supply in Dar es Salaam. ${g.description} Get an instant quote online.`;
    }
  } else if (parsed.type === 'project') {
    const pt = projectTypeData[parsed.projectKey!];
    if (pt) {
      title = `${pt.name} Concrete & Materials | Tanzibaba Dar es Salaam`;
      description = `${pt.name} materials and concrete supply in Dar es Salaam. ${pt.desc}. Get an instant quote online.`;
    }
  } else if (parsed.type === 'overview') {
    const displayName = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const od = overviewData[slug];
    const districtKey = Object.keys(districtNames).find(d => slug.endsWith(`-${d}`));
    if (districtKey && !od) {
      title = slug.startsWith('aggregates-supplier') ? `Aggregates Supplier ${districtNames[districtKey]} | Tanzibaba` : `Ready-Mix Concrete ${districtNames[districtKey]} | Tanzibaba`;
      description = `Premium ${slug.replace(/-/g, ' ')} in Dar es Salaam.`;
    } else {
      title = od ? `${displayName} | Tanzibaba Dar es Salaam` : `${displayName} | Tanzibaba`;
      description = od?.desc || `Premium ${slug.replace(/-/g, ' ')}.`;
    }
  }

  return {
    title, description,
    alternates: { canonical: `${siteUrl}/${slug}` },
    openGraph: { title, description, url: `${siteUrl}/${slug}`, siteName: 'Tanzibaba', type: 'website', locale: 'en_TZ' },
  };
}

const projectTypeData: Record<string, { name: string; desc: string; grade: string; content: string }> = {
  'apartment-concrete-supply': { name: 'Apartment Construction', desc: 'premium ready-mix concrete supply for apartment building construction', grade: 'C30', content: 'Apartment buildings require concrete that delivers consistent strength across multiple floors. We recommend C30 for columns and slabs in buildings up to five storeys, with C25 for foundations. For high-rise towers, C35 or C40 may be specified.' },
  'commercial-concrete-supply': { name: 'Commercial Construction', desc: 'premium ready-mix concrete supply for commercial building construction', grade: 'C30', content: 'Commercial buildings demand concrete that meets strict structural specifications. We supply C30 as the standard grade, with C35 and C40 for higher-load areas.' },
  'industrial-concrete-supply': { name: 'Industrial Construction', desc: 'premium ready-mix concrete supply for industrial facility construction', grade: 'C35', content: 'Industrial facilities require high-strength concrete that can withstand heavy machinery and constant traffic. We supply C35 to C50 grades for industrial floors, foundations, and structural elements.' },
  'warehouse-concrete-supply': { name: 'Warehouse Construction', desc: 'premium ready-mix concrete supply for warehouse construction', grade: 'C30', content: 'Warehouse floors require concrete that can handle heavy loads from racking systems and forklift traffic. We recommend C30 as the minimum grade, with C35 for higher-load areas.' },
  'hotel-concrete-supply': { name: 'Hotel Construction', desc: 'premium ready-mix concrete supply for hotel construction', grade: 'C30', content: 'Hotel construction demands high-quality concrete for both structural integrity and aesthetic finishes. We supply C25 for foundations, C30 for upper-floor slabs, and C35 for high-traffic areas.' },
  'hospital-concrete-supply': { name: 'Hospital Construction', desc: 'premium ready-mix concrete supply for healthcare facility construction', grade: 'C30', content: 'Hospital construction requires concrete that meets the highest quality standards. We supply grades from C25 to C40 for different structural elements.' },
  'school-concrete-supply': { name: 'School Construction', desc: 'premium ready-mix concrete supply for school construction', grade: 'C25', content: 'School construction ranges from single-storey classrooms to multi-purpose halls. We supply C25 as the standard grade for foundations, slabs, and columns.' },
  'infrastructure-concrete-supply': { name: 'Infrastructure Projects', desc: 'premium ready-mix concrete supply for infrastructure projects', grade: 'C35', content: 'Infrastructure projects demand concrete that meets stringent specifications for strength and durability. We supply C35 to C50 grades for bridges, culverts, roads, and drainage structures.' },
  'road-construction': { name: 'Road Construction', desc: 'construction materials and concrete for road building projects', grade: 'C35', content: 'Road construction requires durable materials that can withstand heavy traffic loads and environmental exposure. We supply concrete grades C30 to C50 for road foundations, pavements, bridges, and drainage structures.' },
  'bridge-construction': { name: 'Bridge Construction', desc: 'high-strength concrete and materials for bridge projects', grade: 'C40', content: 'Bridge construction demands the highest quality materials for structural integrity and longevity. We supply C35 to C50 concrete grades for bridge decks, abutments, piers, and foundations.' },
  'housing-developments': { name: 'Housing Developments', desc: 'concrete and construction materials for housing estate projects', grade: 'C25', content: 'Housing developments require reliable, consistent materials across multiple units. We supply C25 as the standard grade for house foundations, slabs, and columns, with C30 for larger developments.' },
};

function AreaSection({ area, mt }: { area: NonNullable<ReturnType<typeof getAreaBySlug>>; mt: NonNullable<ReturnType<typeof getMaterialTypeBySlug>> }) {
  const IconComp = iconMap[mt.icon] || Truck;
  const isConcrete = mt.slug.startsWith('ready-mix-concrete') || mt.slug.startsWith('concrete-supplier');
  const isAggregate = ['gravel-supplier', 'crushed-stone-supplier', 'aggregates-supplier', 'kokoto-supplier'].includes(mt.slug);
  const isRoad = mt.slug === 'road-construction-materials';

  const areaFaqs = [
    { q: `Do you supply ${mt.name.toLowerCase()} in ${area.name}?`, a: `Yes, we supply ${mt.name.toLowerCase()} to ${area.name} in ${area.district}. Our facilities serve the ${area.landmark} area with reliable delivery services.` },
    { q: `How quickly can you deliver to ${area.name}?`, a: `We recommend ordering 24-48 hours in advance for standard deliveries. Our locations across Dar es Salaam ensure fast delivery to ${area.name} and surrounding areas.` },
    { q: `What quantities are available for delivery to ${area.name}?`, a: `We supply projects of all sizes in ${area.name} — from small home renovations to large commercial and infrastructure developments.` },
    { q: `How do I order materials for my ${area.name} project?`, a: `Use our online Quick Price tool for an instant estimate, or contact us on WhatsApp. Our team will confirm availability, pricing, and delivery scheduling for your ${area.name} project.` },
  ];

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-brand-950" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <IconComp className="w-4 h-4" /> {mt.badge} {area.name}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
              {mt.name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">in {area.name}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
              Tanzibaba {mt.descPrefix} in {area.name}, {area.district} — {area.description}.
              {isConcrete ? ' We deliver grades C10 to C50 using washed sand technology for superior strength and durability.' : ''}
              {isAggregate ? ' Our materials are sourced from quality-controlled production facilities for consistent grading and strength.' : ''}
              {isRoad ? ' We supply aggregates, gravel, base course, and concrete for road construction projects of all sizes.' : ''}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#quick-price" className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40">
                Get Instant Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">{isConcrete ? <Factory className="w-7 h-7 text-brand-600" /> : <Scale className="w-7 h-7 text-brand-600" />}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{isConcrete ? 'Quality Controlled Production' : 'Quality Controlled Production'}</h3>
              <p className="text-sm text-gray-600">{isConcrete ? 'Strategically located across Dar es Salaam for fast, reliable delivery to ' + area.name + '.' : 'Our materials are produced under strict quality control to meet construction specifications for projects in ' + area.name + '.'}</p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Scale className="w-7 h-7 text-brand-600" /></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{isConcrete ? 'Washed Sand Technology' : 'Consistent Material Grading'}</h3>
              <p className="text-sm text-gray-600">{isConcrete ? 'Our washed sand technology produces stronger, more durable concrete.' : 'All aggregates and materials are graded and tested for consistency.'}</p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><HardHat className="w-7 h-7 text-brand-600" /></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Direct Supply Pricing</h3>
              <p className="text-sm text-gray-600">No middlemen, no markups. Direct from our production facilities to your project site in {area.name}. All quotes include VAT for full transparency.</p>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">Why Choose Tanzibaba for {mt.name} in {area.name}?</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">We serve projects across {area.district}, including the {area.landmark} area.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { title: 'Quality Control', text: `Every batch produced under strict quality control. We test for consistency, grading, and strength — essential for projects in ${area.name}.` },
              { title: `Fast Delivery to ${area.name}`, text: `With facilities strategically positioned across Dar es Salaam, we deliver quickly to ${area.name} and surrounding ${area.district} areas.` },
              { title: 'Flexible Volume Options', text: `Whether you need a small load for a home in ${area.name} or bulk supply for a ${area.district} commercial development, we have the capacity.` },
              { title: 'Expert Support', text: `Our team helps you select the right materials for your specific project requirements in ${area.name}. Contact us for technical advice.` },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">{mt.name} FAQ for {area.name}</h2>
          <div className="space-y-4">
            {areaFaqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">{faq.q}<ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform shrink-0" /></summary>
                <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Need {mt.name} in {area.name}?</h2>
          <p className="text-lg text-brand-100 mb-8">Get an instant online quote or speak with our team on WhatsApp.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl"><Zap className="w-5 h-5" /> Get Instant Quote</a>
            <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm"><MessageCircle className="w-5 h-5" /> Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: areaFaqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
    </>
  );
}

function GradeContent({ grade }: { grade: (typeof concreteGrades)[number] }) {
  const gradeFaqs = [
    { q: `What is ${grade.grade} concrete?`, a: `${grade.grade} concrete is a ${grade.strength} mix designed for ${grade.applications.toLowerCase()}. It achieves its specified strength after 28 days of curing.` },
    { q: `How much does ${grade.grade} concrete cost?`, a: `${grade.grade} concrete costs approximately ${fmtPrice(grade.price)} per m\u00B3 including VAT. Final price varies based on volume and delivery distance.` },
    { q: `Where can I buy ${grade.grade} concrete in Dar es Salaam?`, a: `Tanzibaba supplies ${grade.grade} concrete across all districts of Dar es Salaam including Kinondoni, Ubungo, Ilala, Temeke, and Kigamboni.` },
    { q: `What is the delivery time for ${grade.grade} concrete?`, a: `We recommend ordering 24-48 hours in advance. For urgent requirements, contact us on WhatsApp.` },
  ];

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-brand-950" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"><Shield className="w-4 h-4" /> {grade.grade} Concrete Dar es Salaam</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">{grade.grade} Concrete <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">Dar es Salaam</span></h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">{grade.description} {grade.grade} achieves {grade.strength} compressive strength after 28 days.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#quick-price" className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40">Get Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></a>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"><MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-2xl border border-gray-100 bg-gray-50"><Scale className="w-7 h-7 text-brand-600 mx-auto mb-4" /><h3 className="font-bold text-gray-900 mb-2">{grade.strength}</h3><p className="text-sm text-gray-600">Compressive strength after 28 days</p></div>
            <div className="text-center p-6 rounded-2xl border border-gray-100 bg-gray-50"><HardHat className="w-7 h-7 text-brand-600 mx-auto mb-4" /><h3 className="font-bold text-gray-900 mb-2">{fmtPrice(grade.price)}/m&sup3;</h3><p className="text-sm text-gray-600">Estimated price including 18% VAT</p></div>
            <div className="text-center p-6 rounded-2xl border border-gray-100 bg-gray-50"><CheckCircle className="w-7 h-7 text-brand-600 mx-auto mb-4" /><h3 className="font-bold text-gray-900 mb-2">Washed Sand</h3><p className="text-sm text-gray-600">Produced with advanced washed sand technology</p></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Applications for {grade.grade}</h2>
          <p className="text-gray-600 mb-6">{grade.applications}.</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">{grade.grade} Concrete Price</h2>
          <p className="text-gray-600">The estimated price for {grade.grade} concrete in Dar es Salaam is <strong>{fmtPrice(grade.price)} per m&sup3;</strong> including 18% VAT.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">FAQ About {grade.grade} Concrete</h2>
          <div className="space-y-4">{gradeFaqs.map((faq, i) => (<details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group"><summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">{faq.q}<ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform shrink-0" /></summary><div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">{faq.a}</div></details>))}</div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Order {grade.grade} Concrete</h2>
          <p className="text-lg text-brand-100 mb-8">Get an instant quote or speak with our team on WhatsApp.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl"><Zap className="w-5 h-5" /> Get Quote</a>
            <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm"><MessageCircle className="w-5 h-5" /> Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: gradeFaqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
    </>
  );
}

function ProjectContent({ projectKey, pt }: { projectKey: string; pt: typeof projectTypeData[string] }) {
  const content = pt.content;
  const projectFaqs = [
    { q: `What materials do I need for ${pt.name.toLowerCase()}?`, a: `${pt.name} projects require concrete (grade ${pt.grade}), aggregates, gravel, and reinforcement materials.` },
    { q: `What concrete grade is recommended for ${pt.name.toLowerCase()}?`, a: `We recommend ${pt.grade} concrete for ${pt.name.toLowerCase()} projects.` },
    { q: `How do I get a quote for ${pt.name.toLowerCase()} materials?`, a: `Use our online Quick Price tool for an instant estimate, or contact us on WhatsApp.` },
    { q: `Do you deliver materials for ${pt.name.toLowerCase()} in Dar es Salaam?`, a: `Yes, we deliver across all districts of Dar es Salaam.` },
  ];

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-brand-950" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"><HardHat className="w-4 h-4" /> {pt.name}</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">Materials for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">{pt.name}</span></h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">{pt.desc} in Dar es Salaam.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#quick-price" className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40">Get Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></a>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"><MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{pt.name} Materials & Concrete</h2>
          <p className="text-gray-600 mb-8">{content}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{concreteGrades.map(g => (<div key={g.grade} className="bg-gray-50 rounded-xl border border-gray-200 p-4"><span className="text-xl font-extrabold text-brand-600">{g.grade}</span><p className="text-xs text-gray-500 mt-1">{g.strength} {'·'} {fmtPrice(g.price)}/m&sup3;</p></div>))}</div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">FAQ About {pt.name} Materials</h2>
          <div className="space-y-4">{projectFaqs.map((faq, i) => (<details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group"><summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">{faq.q}<ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform shrink-0" /></summary><div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">{faq.a}</div></details>))}</div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: projectFaqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <section className="py-16 px-4 bg-brand-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Start Your {pt.name} Project</h2>
          <p className="text-lg text-brand-100 mb-8">Get an instant quote or speak with our team on WhatsApp.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl"><Zap className="w-5 h-5" /> Get Quote</a>
            <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm"><MessageCircle className="w-5 h-5" /> Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}

function ConstructionContent({ slug }: { slug: string }) {
  const cs = constructionServices.find(s => slug.startsWith(`${s.slug}-`));
  const rest = cs ? slug.replace(`${cs.slug}-`, '') : slug;
  const region = getRegionBySlug(rest);
  const country = getCountryBySlug(rest);
  const isEA = slug.endsWith('east-africa');
  const isGovernment = slug === 'government-projects-tanzania';
  const isTurnkey = slug === 'turnkey-construction-tanzania';
  const isTanzaniaRegion = !!region;

  const locationName = region?.name || country?.name || (isEA ? 'East Africa' : '');
  const trustRegions = country ? `Dar es Salaam · Zanzibar · Dodoma · ${country.name}` : isEA ? 'Dar es Salaam · Zanzibar · Dodoma · East Africa' : 'Dar es Salaam · Zanzibar · Dodoma';

  const displayName = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const sectionLabel = isGovernment ? 'Government Projects Tanzania' : isTurnkey ? 'Turnkey Construction Tanzania' : cs ? `${cs.name} ${locationName}` : displayName;

  const heroDesc = isGovernment
    ? 'Tanzibaba delivers government construction projects across Tanzania — public buildings, institutional facilities and government infrastructure.'
    : isTurnkey
    ? 'Tanzibaba delivers turnkey construction projects across Tanzania — from design through to completion.'
    : isEA
    ? `Tanzibaba undertakes ${cs?.name.toLowerCase() || 'construction'} projects across East Africa. Available to support major commercial, industrial and infrastructure developments.`
    : region
    ? `Tanzibaba delivers ${cs?.name.toLowerCase() || 'construction'} services in ${region.name}, Tanzania. Available to support major commercial, industrial and infrastructure developments. Primary operations in Dar es Salaam, Zanzibar and Dodoma.`
    : country
    ? `Tanzibaba delivers ${cs?.name.toLowerCase() || 'construction'} services in ${country.name}. Available to support major commercial, industrial and infrastructure developments. Primary operations in Dar es Salaam, Zanzibar and Dodoma.`
    : `Construction services by Tanzibaba.`;

  const capabilities = isGovernment
    ? ['Government Office Buildings', 'Public Institutions', 'Government Infrastructure', 'Institutional Facilities']
    : isTurnkey
    ? ['Design & Planning', 'Project Management', 'Construction & Delivery', 'Quality Assurance', 'Handover & Commissioning']
    : cs?.capabilities || ['Commercial Buildings', 'Industrial Facilities', 'Infrastructure Projects', 'Government Projects'];

  const faqs = isGovernment
    ? [
      { q: 'What government construction services does Tanzibaba offer?', a: 'Tanzibaba offers government office buildings, public institutions, government infrastructure, and institutional facilities across Tanzania.' },
      { q: 'How do I submit a government project for qualification?', a: 'Submit your project details through our qualification form on the Major Projects page.' },
      { q: 'Does Tanzibaba work on small projects?', a: 'Tanzibaba focuses on medium to large-scale government and institutional projects. Preferred project value is from USD 2M+.' },
      { q: 'How do I contact Tanzibaba about a project?', a: 'Reach us on WhatsApp at +255716002790 or submit your project details through our qualification form.' },
    ]
    : isTurnkey
    ? [
      { q: 'What does turnkey construction mean?', a: 'Turnkey construction covers the entire project lifecycle from design and planning through to construction and handover.' },
      { q: 'How do I submit a turnkey project for qualification?', a: 'Submit your project details through our qualification form on the Major Projects page.' },
      { q: 'Does Tanzibaba work on small projects?', a: 'Tanzibaba focuses on medium to large-scale commercial, industrial and infrastructure projects. Preferred project value is from USD 2M+.' },
      { q: 'How do I contact Tanzibaba about a project?', a: 'Reach us on WhatsApp at +255716002790 or submit your project details through our qualification form.' },
    ]
    : [
      { q: `What ${cs?.name.toLowerCase() || 'construction'} services does Tanzibaba offer in ${locationName}?`, a: `Tanzibaba offers ${cs?.name.toLowerCase() || 'construction'} services in ${locationName}. Primary operations in Dar es Salaam, Zanzibar and Dodoma.` },
      { q: `How do I submit a project for qualification in ${locationName}?`, a: 'Submit your project details through our qualification form on the Major Projects page.' },
      { q: 'Does Tanzibaba work on small projects?', a: 'Tanzibaba focuses on medium to large-scale commercial, industrial, infrastructure and government projects. Preferred project value is from USD 2M+.' },
      { q: 'How do I contact Tanzibaba about a project?', a: 'Reach us on WhatsApp at +255716002790 or submit your project details through our qualification form.' },
    ];

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-brand-950" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Building2 className="w-4 h-4" /> {sectionLabel}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">{displayName}</h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">{heroDesc}</p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-1.5 text-sm text-gray-300 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                <CheckCircle className="w-4 h-4 text-green-400" /> {trustRegions}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/major-projects#qualify" className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40">
                Discuss Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                Get Materials Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">Capabilities{locationName ? ` in ${locationName}` : ''}</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            {region ? `Supporting construction projects in ${region.name} and across Tanzania.` : country ? `Supporting construction projects in ${country.name}.` : 'Supporting major construction projects across Tanzania and East Africa.'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl border border-gray-100 p-4">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0" />
                <span className="text-sm font-medium text-gray-700">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
            <div className="flex items-start gap-3">
              <div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">Construction services available across Tanzania.</span> Primary operations in Dar es Salaam, Zanzibar and Dodoma. Additional construction projects can be undertaken in other locations subject to project requirements.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {(country || isEA) ? 'Supporting construction projects across Tanzania with capability to support regional developments in East Africa.' : 'Supporting construction projects across Tanzania with capability to support regional developments in East Africa.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">{faq.q}<ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform shrink-0" /></summary>
                <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Start Your Project</h2>
          <p className="text-lg text-brand-100 mb-8">Submit your project for qualification or get a materials quote.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/major-projects#qualify" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl">Discuss Your Project <ArrowRight className="w-5 h-5" /></a>
            <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm"><Zap className="w-5 h-5" /> Get Materials Quote</a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
    </>
  );
}

function MaterialsLocationContent({ slug }: { slug: string }) {
  const ms = materialsServices.find(s => slug.startsWith(`${s.slug}-`));
  const rest = ms ? slug.replace(`${ms.slug}-`, '') : slug;
  const location = getMaterialsLocationBySlug(rest);
  const name = ms?.name || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const locName = location?.name || rest.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const isConcrete = ms?.slug === 'ready-mix-concrete';
  const isAggregate = ms?.slug === 'aggregates-supplier';

  const faqs = [
    { q: `Do you supply ${name.toLowerCase()} in ${locName}?`, a: `Yes, we supply ${name.toLowerCase()} to ${locName}${location ? `, ${location.region}` : ''}. Contact us for pricing and availability.` },
    { q: `How do I order ${name.toLowerCase()} in ${locName}?`, a: `Use our online Quick Price tool for an instant estimate, or contact us on WhatsApp. We deliver to ${locName} and surrounding areas.` },
    { q: `What quantities of ${name.toLowerCase()} can I order?`, a: 'We supply projects of all sizes — from small residential deliveries to large commercial and infrastructure developments.' },
    { q: 'Do your prices include VAT?', a: 'Yes, all our quoted prices include 18% VAT. Contact us for a detailed quotation.' },
  ];

  const desc = location
    ? `Tanzibaba ${ms?.desc || 'supplies quality construction materials'} in ${location.name}, ${location.region}. ${location.description}. Available for residential, commercial and infrastructure projects.`
    : `Tanzibaba supplies ${name.toLowerCase()} in ${locName}. Contact us for pricing and delivery scheduling.`;

  const schemaService = { '@type': 'Service', name: `${name} in ${locName}`, provider: { '@id': `${siteUrl}/#business` }, areaServed: locName };

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-brand-950" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Package className="w-4 h-4" /> {name} {locName}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">{name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">in {locName}</span></h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">{desc}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#quick-price" className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40">
                Get Instant Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-7 h-7 text-brand-600" /></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Materials</h3>
              <p className="text-sm text-gray-600">All materials are produced under strict quality control for consistent strength and grading.</p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><HardHat className="w-7 h-7 text-brand-600" /></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Reliable Delivery</h3>
              <p className="text-sm text-gray-600">{isConcrete ? 'Fast concrete delivery serving ' + locName + '.' : 'Reliable material delivery to ' + locName + (location ? ', ' + location.region : '') + '.'}</p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Scale className="w-7 h-7 text-brand-600" /></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Direct Pricing</h3>
              <p className="text-sm text-gray-600">No middlemen, no markups. All quotes include VAT for full transparency.</p>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">Why Tanzibaba for {name} in {locName}?</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">Quality materials, competitive pricing and reliable delivery for projects of all sizes.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { title: 'Quality Control', text: `All ${name.toLowerCase()} materials are produced under strict quality control, ensuring consistency for your projects in ${locName}.` },
              { title: `Coverage in ${locName}`, text: `We deliver ${name.toLowerCase()} to ${locName}${location ? `, ${location.region}` : ''}. Contact us for delivery scheduling.` },
              { title: 'Flexible Volumes', text: 'We supply projects of all sizes — from small residential to large commercial and infrastructure developments.' },
              { title: 'Expert Support', text: 'Our team helps you select the right materials. Contact us for technical advice and recommendations.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-6">Delivery Coverage</h2>
          <p className="text-gray-500 text-center mb-8 max-w-xl mx-auto text-sm">
            {location?.region === 'Dar es Salaam' ? 'We deliver to all districts of Dar es Salaam.' : `We deliver to ${locName} and surrounding areas in ${location?.region || 'Tanzania'}.`}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {(location?.region === 'Zanzibar' ? ['Zanzibar City', 'Paje', 'Nungwi', 'Kiwengwa', 'Matemwe', 'Fumba', 'Jambiani'] : location?.region === 'Dodoma' ? ['Dodoma'] : ['Kinondoni', 'Ubungo', 'Ilala', 'Temeke', 'Kigamboni', 'Bagamoyo', 'Kibaha']).map((d, i) => (
              <Link key={i} href={`/ready-mix-concrete-${d.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center gap-1.5 bg-gray-50 rounded-xl px-4 py-2.5 border border-gray-200 hover:border-brand-300 hover:bg-brand-50 transition-colors text-sm font-medium text-gray-700 hover:text-brand-700">
                <MapPin className="w-4 h-4 text-brand-600 shrink-0" /> {d}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">{faq.q}<ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform shrink-0" /></summary>
                <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <section className="py-16 px-4 bg-brand-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Get a Quote for {name} in {locName}</h2>
          <p className="text-lg text-brand-100 mb-8">Get an instant price estimate or speak with our team on WhatsApp.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl"><Zap className="w-5 h-5" /> Get Quote</a>
            <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm"><MessageCircle className="w-5 h-5" /> Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}

function OverviewContent({ slug }: { slug: string }) {
  const displayName = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const IconComp = iconMap[slug.startsWith('gravel') || slug.startsWith('crushed') || slug.startsWith('kokoto') ? 'CircleDot' : slug.startsWith('road') ? 'Route' : 'Package'] || Package;

  const overviewFaqs = [
    { q: `What ${displayName.toLowerCase()} do you supply?`, a: `We supply a comprehensive range of ${displayName.toLowerCase()} in Dar es Salaam.` },
    { q: `How do I order ${displayName.toLowerCase()}?`, a: 'Use our online Quick Price tool for an instant estimate, or contact us on WhatsApp.' },
    { q: `Do you deliver ${displayName.toLowerCase()} across Dar es Salaam?`, a: 'Yes, we deliver across all districts of Dar es Salaam.' },
    { q: `What volumes of ${displayName.toLowerCase()} can you supply?`, a: 'We supply projects of all sizes — from small residential to large commercial developments.' },
  ];

  const isDistrict = Object.keys(districtNames).some(d => slug.endsWith(`-${d}`));
  const data = isDistrict ? (districtPages[slug] || overviewData[slug]) : (overviewData[slug] || { desc: `Premium ${slug.replace(/-/g, ' ')} in Dar es Salaam.`, features: ['Quality materials', 'Competitive pricing', 'Reliable delivery', 'Expert support'] });

  const pageFaqs = isDistrict ? [
    { q: `Do you supply ${slug.startsWith('aggregates') ? 'construction aggregates' : 'premium ready-mix concrete'} in ${displayName.replace('Ready-Mix Concrete ', '').replace('Aggregates Supplier ', '')}?`, a: `Yes, we supply ${slug.startsWith('aggregates') ? 'construction aggregates' : 'premium ready-mix concrete'} to all areas of ${displayName.replace('Ready-Mix Concrete ', '').replace('Aggregates Supplier ', '')}.` },
    { q: `What ${slug.startsWith('aggregates') ? 'aggregate grades' : 'concrete grades'} are available?`, a: slug.startsWith('aggregates') ? 'We supply crusher dust (0-5mm), 6mm, 10mm, 14mm, 20mm, 40mm gravel, road base, and asphalt aggregate.' : 'We supply C10 to C50, including C25 for foundations and C30 for commercial buildings.' },
    { q: `How quickly can you deliver?`, a: 'We recommend ordering 24-48 hours in advance.' },
    { q: 'Do you deliver to residential projects?', a: 'Yes, to residential, commercial, and infrastructure projects of all sizes.' },
    { q: 'How do I place an order?', a: 'Use our online quote tool or contact us on WhatsApp.' },
  ] : slug.startsWith('ready-mix-concrete') ? [
    { q: 'What concrete grades do you supply?', a: 'C10 to C50 including C25 for foundations and C30 for commercial buildings.' },
    { q: 'What is washed sand technology?', a: 'Washed sand is cleaned to remove impurities, resulting in stronger, more durable concrete.' },
    { q: 'How do you ensure consistent concrete quality?', a: 'We use washed sand technology, computerized batching, and on-site quality control testing to ensure every delivery meets specified grade requirements.' },
    { q: 'How do I calculate how much concrete I need?', a: 'Multiply area (length x width) by thickness. Contact us for help.' },
    { q: 'Do your prices include VAT?', a: 'Yes, all quoted prices include 18% VAT.' },
  ] : slug.startsWith('blocks') ? [
    { q: 'What types of concrete blocks do you supply?', a: 'Hollow blocks (140x190x390, 190x190x390, 230x190x390mm) and solid blocks (90x190x390 to 220x190x390mm).' },
    { q: 'Which block size is best for wall construction?', a: '140x190x390mm hollow blocks for standard walls, 190x190x390mm for load-bearing walls.' },
    { q: 'Can you deliver blocks to my project site?', a: 'Yes, across Dar es Salaam including Kinondoni, Ubungo, Ilala, Temeke, and Kigamboni.' },
    { q: 'How many blocks do I need?', a: 'Calculate wall area divided by block face area. Contact us for assistance.' },
  ] : slug.startsWith('paving') ? [
    { q: 'What paving products do you supply?', a: 'Interlocking paving blocks, paver tiles, paving slabs, and kerbstones for landscaping.' },
    { q: 'Which paving block is best for driveways?', a: '200x100x80mm or 220x110x80mm paving blocks designed for vehicle traffic.' },
    { q: 'Do you supply kerbstones for road projects?', a: 'Yes, 500x250x100mm and 500x250x150mm kerbstones.' },
    { q: 'Can I order for a landscaping project?', a: 'Yes, all paving products for landscaping are available.' },
  ] : slug.startsWith('culvert') ? [
    { q: 'What culvert pipe sizes do you supply?', a: 'Round pipes: 400mm, 500mm, 600mm dia x 1050mm. Box culverts: 900x900x100 and 1200x900x100mm.' },
    { q: 'Which size do I need for a driveway crossing?', a: '400mm or 500mm diameter round pipe for standard crossings.' },
    { q: 'Do you deliver culvert pipes across Dar es Salaam?', a: 'Yes, to all districts and surrounding areas.' },
    { q: 'How do I order culvert pipes?', a: 'Use our online quote tool or contact us on WhatsApp.' },
  ] : [
    { q: `What ${displayName.toLowerCase()} do you supply?`, a: `We supply ${displayName.toLowerCase()} in Dar es Salaam for commercial, industrial, and infrastructure projects.` },
    { q: 'How do I place an order?', a: 'Use our online quote tool or contact us on WhatsApp.' },
    { q: 'Do you deliver across Dar es Salaam?', a: 'Yes, to all districts.' },
    { q: 'What volumes can you supply?', a: 'Projects of all sizes — from small residential to large commercial.' },
  ];

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
        {(slug.startsWith('ready-mix-concrete') || slug.startsWith('aggregates') || slug.startsWith('blocks') || slug.startsWith('paving') || slug.startsWith('culvert') || slug.startsWith('gravel')) ? (
          <Image src={slug.startsWith('ready-mix-concrete') ? productImages['ready-mix-concrete'] : (slug.startsWith('aggregates') || slug.startsWith('gravel')) ? productImages['aggregates'] : slug.startsWith('blocks') ? productImages['blocks'] : slug.startsWith('paving') ? productImages['paving'] : slug.startsWith('culvert') ? productImages['culvert'] : ''} alt="" fill className="object-cover opacity-30" sizes="100vw" loading="lazy" />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/95 via-gray-900/90 to-brand-950/85" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"><IconComp className="w-4 h-4" /> {displayName}</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">{displayName}</h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">{data.desc}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#quick-price" className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40">Get Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></a>
              <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"><MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Why Tanzibaba for {displayName}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.features.map((f, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-gray-100 bg-gray-50"><CheckCircle className="w-8 h-8 text-brand-600 mx-auto mb-3" /><p className="font-semibold text-gray-900 text-sm">{f}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-6">Delivery Coverage</h2>
          <p className="text-gray-500 text-center mb-8 max-w-xl mx-auto text-sm">We deliver to all districts of Dar es Salaam and surrounding areas.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Kinondoni', 'Ubungo', 'Ilala', 'Temeke', 'Kigamboni', 'Bagamoyo', 'Kibaha'].map((d, i) => (
              <Link key={i} href={`/ready-mix-concrete-${d.toLowerCase()}`} className="inline-flex items-center gap-1.5 bg-gray-50 rounded-xl px-4 py-2.5 border border-gray-200 hover:border-brand-300 hover:bg-brand-50 transition-colors text-sm font-medium text-gray-700 hover:text-brand-700">
                <MapPin className="w-4 h-4 text-brand-600 shrink-0" /> {d}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {pageFaqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">{faq.q}<ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform shrink-0" /></summary>
                <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: pageFaqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Products</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/ready-mix-concrete-dar-es-salaam', label: 'Ready-Mix Concrete' },
              { href: '/aggregates-supplier-dar-es-salaam', label: 'Aggregates' },
              { href: '/blocks-supplier-dar-es-salaam', label: 'Blocks' },
              { href: '/paving-blocks-dar-es-salaam', label: 'Paving Blocks' },
              { href: '/culvert-pipes-dar-es-salaam', label: 'Culvert Pipes' },
            ].filter(l => !slug.includes(l.href.replace(/\//g, '').replace(/-dar-es-salaam/g, ''))).slice(0, 4).map((l, i) => (
              <Link key={i} href={l.href} className="inline-flex items-center gap-1 bg-gray-100 hover:bg-brand-100 text-gray-700 hover:text-brand-700 rounded-xl px-4 py-2 text-sm font-medium transition-colors">{l.label} <ArrowRight className="w-3 h-3" /></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Get a Quote for {displayName}</h2>
          <p className="text-lg text-brand-100 mb-8">Get an instant price estimate or speak with our team on WhatsApp.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl"><Zap className="w-5 h-5" /> Get Quote</a>
            <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm"><MessageCircle className="w-5 h-5" /> Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default function SEOPage({ params }: PageProps) {
  const slug = params.slug;

  // Return 404 for sitemap files - these should be handled by sitemap route handlers
  if (slug.startsWith('sitemap') || slug.endsWith('.xml')) {
    notFound();
  }

  // Special + EA pages
  if (specialSlugs.has(slug)) {
    return (<><Navbar /><main><ConstructionContent slug={slug} /></main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [ { '@type': 'LocalBusiness', '@id': `${siteUrl}/#business`, name: 'Tanzibaba', url: siteUrl, telephone: '+255716002790', areaServed: slug.endsWith('tanzania') ? 'Tanzania' : 'East Africa' }, { '@type': 'Service', name: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), provider: { '@id': `${siteUrl}/#business` } }, { '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), item: `${siteUrl}/${slug}` } ] } ] }) }} /></>);
  }

  // Auto-generated construction pages (region + country)
  const constructionService = constructionServices.find(s => slug.startsWith(`${s.slug}-`));
  if (constructionService) {
    const rest = slug.replace(`${constructionService.slug}-`, '');
    const region = getRegionBySlug(rest);
    const country = getCountryBySlug(rest);
    if (region || country) {
      return (<><Navbar /><main><ConstructionContent slug={slug} /></main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [ { '@type': 'LocalBusiness', '@id': `${siteUrl}/#business`, name: 'Tanzibaba', url: siteUrl, telephone: '+255716002790', areaServed: region ? `${region.name}, Tanzania` : country?.name || '' }, { '@type': 'Service', name: `${constructionService.name} ${region?.name || country?.name || ''}`, provider: { '@id': `${siteUrl}/#business` } }, { '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: `${constructionService.name} ${region?.name || country?.name || ''}`, item: `${siteUrl}/${slug}` } ] } ] }) }} /></>);
    }
  }

  // Auto-generated materials location pages (Zanzibar, Dodoma, extended DSM)
  const materialsService = materialsServices.find(s => slug.startsWith(`${s.slug}-`));
  if (materialsService) {
    const rest = slug.replace(`${materialsService.slug}-`, '');
    const location = getMaterialsLocationBySlug(rest);
    if (location && !overviewData[slug] && !districtPages[slug]) {
      return (<><Navbar /><main><MaterialsLocationContent slug={slug} /></main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [ { '@type': 'LocalBusiness', '@id': `${siteUrl}/#business`, name: 'Tanzibaba', url: siteUrl, telephone: '+255716002790', areaServed: `${location.name}, ${location.region}` }, { '@type': 'Service', name: `${materialsService.name} ${location.name}`, provider: { '@id': `${siteUrl}/#business` }, areaServed: `${location.name}, ${location.region}` }, { '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: `${materialsService.name} ${location.name}`, item: `${siteUrl}/${slug}` } ] } ] }) }} /></>);
    }
  }

  // Existing page types
  const parsed = parseSlug(slug);

  if (parsed.type === 'area') {
    const area = getAreaBySlug(parsed.areaSlug!);
    const mt = getMaterialTypeBySlug(parsed.mt!);
    if (area && mt) {
      return (<><Navbar /><main><AreaSection area={area} mt={mt} /></main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [ { '@type': 'LocalBusiness', '@id': `${siteUrl}/#business`, name: 'Tanzibaba', url: siteUrl, telephone: '+255716002790', areaServed: `${area.name}, ${area.district}, Dar es Salaam`, address: { '@type': 'PostalAddress', addressLocality: 'Dar es Salaam', addressCountry: 'TZ' } }, { '@type': 'Service', name: `${mt.name} ${area.name}`, provider: { '@id': `${siteUrl}/#business` }, areaServed: `${area.name}, ${area.district}, Dar es Salaam` }, { '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: `${mt.name} ${area.name}`, item: `${siteUrl}/${slug}` } ] } ] }) }} /></>);
    }
  }
  if (parsed.type === 'grade') {
    const grade = concreteGrades.find(g => g.grade === parsed.grade);
    if (grade) return (<><Navbar /><main><GradeContent grade={grade} /></main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [ { '@type': 'LocalBusiness', '@id': `${siteUrl}/#business`, name: 'Tanzibaba', url: siteUrl, telephone: '+255716002790', areaServed: 'Dar es Salaam' }, { '@type': 'Service', name: `${grade.grade} Concrete Dar es Salaam`, provider: { '@id': `${siteUrl}/#business` } }, { '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: `${grade.grade} Concrete Dar es Salaam`, item: `${siteUrl}/${slug}` } ] } ] }) }} /></>);
  }
  if (parsed.type === 'project') {
    const pt = projectTypeData[parsed.projectKey!];
    if (pt) return (<><Navbar /><main><ProjectContent projectKey={parsed.projectKey!} pt={pt} /></main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [ { '@type': 'LocalBusiness', '@id': `${siteUrl}/#business`, name: 'Tanzibaba', url: siteUrl, telephone: '+255716002790', areaServed: 'Dar es Salaam' }, { '@type': 'Service', name: `${pt.name} Materials`, provider: { '@id': `${siteUrl}/#business` } }, { '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: pt.name, item: `${siteUrl}/${slug}` } ] } ] }) }} /></>);
  }
  if (parsed.type === 'overview') {
    return (<><Navbar /><main><OverviewContent slug={slug} /></main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [ { '@type': 'LocalBusiness', '@id': `${siteUrl}/#business`, name: 'Tanzibaba', url: siteUrl, telephone: '+255716002790', areaServed: 'Dar es Salaam' }, { '@type': 'Service', name: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), provider: { '@id': `${siteUrl}/#business` } } ] }) }} /></>);
  }

  return null;
}
