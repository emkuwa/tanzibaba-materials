import type { Metadata } from 'next';
import Link from 'next/link';
import { Truck, CheckCircle, Shield, MapPin, MessageCircle, ArrowRight, Zap, Factory, Scale, HardHat, Building2, Package, CircleDot, Grid } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { materialsServices, constructionServices } from '@/data/services';
import { allMaterialsLocations, getMaterialsLocationBySlug } from '@/data/materialsLocations';
import { tanzaniaRegions, africaCountries, getRegionBySlug, getCountryBySlug } from '@/data/countries';
import { siteUrl } from '@/data/locations';
import { generateSwahiliSlugs, parseSwahiliSlug, getSwahiliServiceData, swahiliServiceMap } from '@/data/swahili';

interface PageProps { params: { slug: string } }

export function generateStaticParams() {
  return generateSwahiliSlugs().map(slug => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const slug = params.slug;
  const parsed = parseSwahiliSlug(slug);
  if (!parsed) return { title: 'Tanzibaba' };

  const swData = getSwahiliServiceData(parsed.enServiceSlug);
  if (!swData) return { title: 'Tanzibaba' };

  const location = getMaterialsLocationBySlug(parsed.enLocationSlug);
  const region = getRegionBySlug(parsed.enLocationSlug);
  const country = getCountryBySlug(parsed.enLocationSlug);
  const locName = location?.name || region?.name || country?.name || parsed.enLocationSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Tanzania';

  return {
    title: `${swData.title} ${locName} | Tanzibaba`,
    description: swData.desc(locName),
    alternates: { canonical: `${siteUrl}/sw/${slug}` },
    openGraph: { title: `${swData.title} ${locName}`, description: swData.desc(locName), url: `${siteUrl}/sw/${slug}`, siteName: 'Tanzibaba', type: 'website', locale: 'sw_TZ' },
  };
}

function SwahiliHero({ slug, parsed }: { slug: string; parsed: NonNullable<ReturnType<typeof parseSwahiliSlug>> }) {
  const swData = getSwahiliServiceData(parsed.enServiceSlug);
  const location = getMaterialsLocationBySlug(parsed.enLocationSlug);
  const region = getRegionBySlug(parsed.enLocationSlug);
  const country = getCountryBySlug(parsed.enLocationSlug);
  const locName = location?.name || region?.name || country?.name || 'Tanzania';

  const h1 = `${swData?.title || 'Tanzibaba'} ${locName}`;
  const desc = swData?.desc(locName) || `Tanzibaba — ${parsed.enServiceSlug} services ${locName}.`;

  return (
    <section className="relative min-h-[70vh] flex items-center bg-gray-950 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-brand-950" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Building2 className="w-4 h-4" /> {swData?.title || 'Tanzibaba'}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">{h1}</h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">{desc}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/255716002790" target="_blank" className="group inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40">
              <MessageCircle className="w-5 h-5" /> WhatsApp Sasa <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
              Pata Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SwahiliMaterialsContent({ slug, parsed }: { slug: string; parsed: NonNullable<ReturnType<typeof parseSwahiliSlug>> }) {
  const swData = getSwahiliServiceData(parsed.enServiceSlug);
  const location = getMaterialsLocationBySlug(parsed.enLocationSlug);
  const locName = location?.name || parsed.enLocationSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Tanzania';

  const faqs = [
    { q: `Je, mnauza ${swData?.title.toLowerCase() || 'materials'} ${locName}?`, a: `Ndiyo, tunauza ${swData?.title.toLowerCase() || 'materials'} ${locName}. Wasiliana nasi kwa WhatsApp au tumia online quote tool kupata bei na delivery schedule.` },
    { q: `Ni aina gani za ${swData?.title.toLowerCase() || 'materials'} mnatoa?`, a: `Tunatoa aina zote za ${swData?.title.toLowerCase() || 'materials'} — kutoka kwa miradi midogo ya nyumba mpaka miradi mikubwa ya biashara na miundombinu. Quality materials guaranteed.` },
    { q: `Je, mnatoa delivery ${locName}?`, a: `Ndiyo, tunatoa delivery ${locName} na maeneo ya jirani. Piga WhatsApp au tumia online tool kupanga delivery schedule.` },
    { q: 'Je, bei zenu zinajumuisha VAT?', a: 'Ndiyo, bei zote tunazotoa zinajumuisha 18% VAT. Hakuna hidden charges. Bei transparent kabisa.' },
    { q: 'Ninawezaje kupata quote?', a: 'Tumia online Quick Price tool kwa instant estimate, au WhatsApp nasi kwa +255716002790. Tutakupa quotation detailed ndani ya muda mfupi.' },
  ];

  return (
    <>
      <SwahiliHero slug={slug} parsed={parsed} />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">Kwa Nini Tuchague Tanzibaba kwa {swData?.title || 'Materials'} {locName}?</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">Quality materials, competitive pricing, na reliable delivery kwa ajili ya miradi yako.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { title: 'Quality Materials', text: `Materials zetu zinatoka kwa quality-controlled production. Unapata consistency na strength kwa kila order.` },
              { title: `Delivery ${locName}`, text: `Tunatoa delivery ${locName} na maeneo ya jirani. Panga delivery schedule na team yetu.` },
              { title: 'Flexible Volumes', text: 'Tunauza kwa quantity yoyote — kutoka kwa miradi midogo ya nyumba mpaka commercial projects kubwa.' },
              { title: 'Direct Pricing', text: 'Hakuna middlemen, hakuna markups. Bei yetu ni direct kutoka kwa producer kwako. All quotes include VAT.' },
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
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Maswali Yanayoulizwa Sana (FAQ)</h2>
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
          <h2 className="text-3xl font-extrabold text-white mb-4">Unahitaji {swData?.title || 'Materials'} {locName}?</h2>
          <p className="text-lg text-brand-100 mb-8">Wasiliana nasi leo — WhatsApp au pata quote online.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#quick-price" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl"><Zap className="w-5 h-5" /> Pata Quote</a>
            <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm"><MessageCircle className="w-5 h-5" /> WhatsApp Sasa</a>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
    </>
  );
}

function SwahiliConstructionContent({ slug, parsed }: { slug: string; parsed: NonNullable<ReturnType<typeof parseSwahiliSlug>> }) {
  const swData = getSwahiliServiceData(parsed.enServiceSlug);
  const location = getMaterialsLocationBySlug(parsed.enLocationSlug);
  const region = getRegionBySlug(parsed.enLocationSlug);
  const country = getCountryBySlug(parsed.enLocationSlug);
  const locName = location?.name || region?.name || country?.name || 'Tanzania';

  const fbContent = [
    { title: 'Quality Construction', text: 'Tunafanya construction kwa quality standard za juu. Timu yetu ina uzoefu wa miradi mingi Tanzania na East Africa.' },
    { title: 'Project Management', text: 'Tunasimamia project yako kutoka planning mpaka handover. On time, on budget, na quality guaranteed.' },
    { title: 'Safety First', text: 'Safety ni priority. Tunafuata strict safety standards kwenye kila project — big au small.' },
    { title: `Available ${locName}`, text: `Tunafanya kazi ${locName} na maeneo mengine Tanzania na East Africa. Submit project yako kwa qualification.` },
  ];

  const faqs = [
    { q: `Je, Tanzania hutekeleza miradi ya ujenzi ${locName}?`, a: `Ndiyo, Tanzania hutekeleza miradi ya ujenzi ${locName}. Tunafanya commercial buildings, industrial facilities, infrastructure projects, na government projects. Primary operations Dar es Salaam, Zanzibar na Dodoma.` },
    { q: 'Ninawezaje kuwasilisha project yangu?', a: 'Tumia qualification form kwenye Major Projects page. Timu yetu inakagua na kujibu ndani ya siku 1-2 za kazi.' },
    { q: 'Je, Tanzania inafanya kazi kwenye small projects?', a: 'Tanzibaba inafocus kwenye medium to large-scale projects (preferred USD 2M+). Kwa small projects, materials supply division yetu inatoa concrete, kokoto, blocks na paving products.' },
    { q: 'Ninawezaje kuwasiliana na Tanzania kuhusu project?', a: 'WhatsApp +255716002790 au submit project details kwenye Major Projects page.' },
  ];

  return (
    <>
      <SwahiliHero slug={slug} parsed={parsed} />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">Uwezo Wetu wa Ujenzi {locName}</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">Tunatoa construction services bora Tanzania na East Africa. Quality, reliability, na professionalism.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {fbContent.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 md:p-8 text-center">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">Construction services available Tanzania na East Africa.</span> Primary operations Dar es Salaam, Zanzibar na Dodoma. Miradi mingine inaweza kutekelezwa maeneo mengine subject to project requirements.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Maswali Yanayoulizwa Sana (FAQ)</h2>
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
          <h2 className="text-3xl font-extrabold text-white mb-4">Anza Project Yako {locName}</h2>
          <p className="text-lg text-brand-100 mb-8">Submit project yako kwa qualification au WhatsApp team yetu.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/major-projects#qualify" className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl">Discuss Your Project <ArrowRight className="w-5 h-5" /></a>
            <a href="https://wa.me/255716002790" target="_blank" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm"><MessageCircle className="w-5 h-5" /> WhatsApp Sasa</a>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
    </>
  );
}

export default function SwahiliPage({ params }: PageProps) {
  const slug = params.slug;
  const parsed = parseSwahiliSlug(slug);
  if (!parsed) return <><Navbar /><main className="py-32 text-center text-gray-500">Page haijapatikana</main><Footer /></>;

  const isConstruction = parsed.serviceType === 'construction' || parsed.serviceType === 'special' || parsed.serviceType === 'east-africa';

  return (
    <>
      <Navbar />
      <main>
        {isConstruction ? (
          <SwahiliConstructionContent slug={slug} parsed={parsed} />
        ) : (
          <SwahiliMaterialsContent slug={slug} parsed={parsed} />
        )}
      </main>
      <Footer />
    </>
  );
}
