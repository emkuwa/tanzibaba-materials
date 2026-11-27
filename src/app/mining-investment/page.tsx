import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileCheck2,
  Globe2,
  Handshake,
  LockKeyhole,
  Mountain,
  ShieldCheck,
  Target,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InvestorLeadForm from "@/components/InvestorLeadForm";

const siteUrl = "https://materials.tanzibaba.com";

export const metadata: Metadata = {
  title: "Invest in Tanzania’s Mining Sector | Tanzibaba",
  description:
    "Explore Tanzania’s mineral potential, global demand trends and investment opportunities across mining, processing and related services.",
  keywords: [
    "invest in Tanzania mining",
    "Tanzania mining investment opportunities",
    "mining joint venture Tanzania",
    "Tanzania mineral projects",
    "graphite investment Tanzania",
    "gold investment Tanzania",
    "graphite investment Tanzania",
    "Tanzania critical minerals",
    "Tanzania mineral processing investment",
  ],
  alternates: { canonical: siteUrl + "/mining-investment" },
  openGraph: {
    title: "Invest in Tanzania’s Mining Sector | Tanzibaba",
    description:
      "Explore investment interests and strategic partnership opportunities across Tanzania’s mining sector.",
    url: siteUrl + "/mining-investment",
    siteName: "Tanzibaba",
    type: "website",
    locale: "en_TZ",
  },
};

const investmentThemes = [
  {
    icon: Target,
    title: "Graphite & battery minerals",
    description: "Interest in graphite and minerals used in energy storage and battery supply chains.",
  },
  {
    icon: Mountain,
    title: "Gold & precious metals",
    description: "Interest in exploration, mine development, production and value addition.",
  },
  {
    icon: Globe2,
    title: "Critical & industrial minerals",
    description: "Interest in nickel, copper, rare earths, gemstones and industrial minerals.",
  },
];

const process = [
  {
    icon: FileCheck2,
    title: "Share your criteria",
    description: "Tell us which minerals, project stages and investment structures you are considering.",
  },
  {
    icon: ShieldCheck,
    title: "Review suitable information",
    description: "Relevant information is considered privately, subject to availability and permission from project parties.",
  },
  {
    icon: Handshake,
    title: "Explore next steps",
    description: "Where there is a fit, parties can discuss due diligence and possible investment or partnership terms.",
  },
];


const mineralCatalogue = [
  { title: "Precious metals and gemstones", items: "Gold, silver, platinum-group elements (PGE), diamonds, tanzanite, ruby, sapphire, emerald, spinel, garnet, aquamarine, tourmaline, alexandrite and other semi-precious stones.", use: "Bullion, jewellery, investment products, electronics and specialist industrial applications." },
  { title: "Battery, technology and critical minerals", items: "Graphite, nickel, cobalt, lithium, copper, rare earth elements (including neodymium and praseodymium), niobium, tantalum, vanadium, titanium, tin, tungsten, antimony and molybdenum.", use: "Batteries, electric vehicles, power grids, magnets, electronics, alloys and advanced manufacturing." },
  { title: "Base and ferrous metals", items: "Copper, nickel, iron ore, lead, zinc, tin, tungsten, chromium and other base-metal occurrences.", use: "Construction, machinery, electrical networks, transport, industrial equipment and metal products." },
  { title: "Industrial, construction and agricultural minerals", items: "Limestone, gypsum, phosphate, kaolin, clays, feldspar, quartz, silica and white sands, dolomite, salt, soda ash, bauxite, diatomite, pozzolana, marble, dimension stone, mica, vermiculite and heavy mineral sands.", use: "Cement, fertiliser, glass, ceramics, chemicals, building products, steelmaking and manufacturing." },
  { title: "Energy and other geological resources", items: "Coal, uranium, helium, geothermal resources and carbon dioxide occurrences.", use: "Energy, industrial gases and specialised technology applications, subject to project-specific regulation and feasibility." },
];

const demandSignals = [
  { mineral: "Lithium", trend: "IEA’s Stated Policies Scenario projects demand to grow around fivefold by 2040.", applications: "Electric-vehicle batteries and stationary energy storage." },
  { mineral: "Graphite and nickel", trend: "IEA projects demand for each to roughly double by 2040 in its Stated Policies Scenario.", applications: "Battery anodes, batteries, stainless steel and industrial alloys." },
  { mineral: "Cobalt and rare earth elements", trend: "IEA projects demand to rise by around 50–60% by 2040 in the same scenario.", applications: "Batteries, permanent magnets, motors, electronics and clean-energy equipment." },
  { mineral: "Copper", trend: "IEA projects demand to rise around 30% by 2040; announced mine supply is projected to fall short of 2035 requirements in its Stated Policies Scenario.", applications: "Power grids, buildings, transport, renewable energy and electrification." },
  { mineral: "Gold and gemstones", trend: "Established international markets include jewellery, investment, electronics and specialist uses; demand and prices fluctuate with global markets.", applications: "Bullion, jewellery, investment products, electronics and cutting/polishing." },
];

const investmentPathways = [
  { title: "Explore and define resources", description: "Fund permitted exploration, drilling, sampling, resource modelling and technical studies where mineral rights and data are verified." },
  { title: "Develop or expand a mine", description: "Consider project development, mine construction, equipment, power, water, roads, safety systems and production expansion." },
  { title: "Process and add value locally", description: "Assess beneficiation, concentration, refining, smelting, graphite processing, gemstone cutting and other downstream activities." },
  { title: "Build supply-chain partnerships", description: "Explore offtake, project finance, equipment, engineering, laboratories, logistics, environmental services and local procurement." },
];

export default function MiningInvestmentPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <section className="relative overflow-hidden bg-gray-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/50 via-gray-950 to-gray-950" />
          <div className="absolute -right-24 top-20 h-80 w-80 rounded-full border border-white/5" />
          <div className="absolute -right-10 top-36 h-52 w-52 rounded-full border border-white/5" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                <Mountain className="h-4 w-4" /> Tanzania mining sector
              </div>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Invest in Tanzania’s Mining Sector
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                Explore investment interests and strategic partnership opportunities across Tanzania’s diverse mineral sector. Share your criteria to request relevant information privately.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#investor-interest"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-950/30 transition hover:bg-green-500"
                >
                  Register Investor Interest <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#investment-themes"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Mineral Themes
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-300">
                <span className="inline-flex items-center gap-2"><LockKeyhole className="h-4 w-4 text-green-400" /> Private inquiries</span>
                <span className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4 text-green-400" /> International investors welcome</span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-300">Investment focus</p>
              <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                From mineral potential to long-term value
              </h2>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Tanzania’s mining sector includes opportunities at different stages, from exploration and project development to processing and offtake. Investment structures depend on each project and its verified rights, studies and approvals.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Joint ventures", "Equity investment", "Project finance", "Offtake partnerships"].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-gray-950/40 px-4 py-3 text-sm font-medium text-gray-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="investment-themes" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">Areas of interest</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                Mineral investment themes
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                These are sector themes, not a representation that a specific mine or investment is currently available.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {investmentThemes.map((item) => (
                <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-gray-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="bg-green-50 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "US$5.40bn", label: "Mineral exports in 2025" },
              { value: "US$4.75bn", label: "Gold exports in 2025" },
              { value: "31.1%", label: "Growth in mineral export value, 2024–2025" },
              { value: "11.9%", label: "Average mining share of GDP, Jan–Sep 2025" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-green-100 bg-white p-5 text-center shadow-sm">
                <p className="text-2xl font-extrabold tracking-tight text-green-800 sm:text-3xl">{stat.value}</p>
                <p className="mt-2 text-sm leading-5 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-4 max-w-7xl text-center text-xs leading-5 text-gray-500">
            Source: Tanzania Ministry of Minerals’ FY 2026/27 budget speech summary. These are historical indicators, not a forecast or return guarantee.
            <a className="ml-1 font-semibold text-green-700 underline" href="https://www.madini.go.tz/news/muhtasari-wa-hotuba-ya-mheshimiwa-anthony-peter-mavunde-mb-waziri-wa-madini-akiwasilisha-bungeni-makadirio-ya-mapato-na-matumizi-kwa-mwaka-wa-fedha-20262027" target="_blank" rel="noreferrer">View the Ministry summary</a>.
          </p>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">A broad geological endowment</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">Mineral resources and occurrences in Tanzania</h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Tanzania’s geology spans ancient cratons, mobile belts, rift basins and coastal formations. The Geological Survey of Tanzania documents the mineral groups below and notes that significant areas remain underexplored.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {mineralCatalogue.map((category) => (
                <article key={category.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-700"><Mountain className="h-5 w-5" /></div>
                  <h3 className="mt-4 text-lg font-bold text-gray-950">{category.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-700">{category.items}</p>
                  <p className="mt-3 text-xs leading-5 text-gray-500"><span className="font-semibold text-gray-700">Uses:</span> {category.use}</p>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-5xl text-center text-xs leading-5 text-gray-500">
              This catalogue summarises resources, occurrences and geological potential reported by GST. It does not claim that every listed mineral has a commercially proven deposit or an available investment project.
              <a className="ml-1 font-semibold text-green-700 underline" href="https://www.gst.go.tz/uploads/documents/sw-1731760022-Criticals%20Minerals%20in%20Tanzania%20.pdf" target="_blank" rel="noreferrer">GST critical minerals overview</a>
              {" · "}
              <a className="font-semibold text-green-700 underline" href="https://www.gst.go.tz/uploads/documents/sw-1731760756-Geology%20and%20Minerals%20Potential%20in%20Tanzania%20.pdf" target="_blank" rel="noreferrer">GST solid mineral occurrences summary</a>.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">Global market context</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">Demand drivers investors are watching</h2>
              </div>
              <p className="text-sm leading-6 text-gray-600">
                Electrification, grid upgrades, energy storage, construction and advanced manufacturing are shaping mineral demand. The International Energy Agency’s scenario projections point to growth in several minerals found or reported in Tanzania.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {demandSignals.map((signal) => (
                <article key={signal.mineral} className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-gray-950">{signal.mineral}</h3>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">Market signal</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-700">{signal.trend}</p>
                  <p className="mt-2 text-xs leading-5 text-gray-500"><span className="font-semibold text-gray-700">Demand uses:</span> {signal.applications}</p>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-5 max-w-5xl text-center text-xs leading-5 text-gray-500">
              IEA figures are scenario-based global projections, not guaranteed prices, sales or demand for any particular project. Under the IEA Stated Policies Scenario, announced mine supply is projected to fall short of 2035 requirements by 30% for copper and 40% for lithium.
              <a className="ml-1 font-semibold text-green-700 underline" href="https://www.iea.org/reports/global-critical-minerals-outlook-2025/overview-of-outlook-for-key-minerals" target="_blank" rel="noreferrer">View IEA’s 2025 outlook and assumptions</a>.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">Ways to participate</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">Investment opportunities across the value chain</h2>
              <p className="mt-4 text-base leading-7 text-gray-600">Capital, technical expertise, market access and operating capability can each support responsible project development.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {investmentPathways.map((item, index) => (
                <article key={item.title} className="rounded-2xl border border-gray-200 p-6">
                  <span className="text-sm font-bold text-green-700">0{index + 1}</span>
                  <h3 className="mt-3 text-lg font-bold text-gray-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                </article>
              ))}
            </div>
            <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-green-100 bg-green-50 p-6">
              <h3 className="text-lg font-bold text-gray-950">Why Tanzania can be on an investor’s shortlist</h3>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-gray-700 sm:grid-cols-2">
                <li>Diverse mineral systems and geological data available through GST to support early screening.</li>
                <li>A proven gold export base alongside developing graphite and other critical-mineral activity.</li>
                <li>Scope to evaluate projects at different stages, from exploration to processing and services.</li>
                <li>Government policy focus on critical minerals, local value addition and participation in the mining economy.</li>
              </ul>
              <p className="mt-4 text-xs leading-5 text-gray-500">
                Tanzania’s Mining Act provides for at least 16% non-dilutable Government free-carried interest in companies holding mining or special mining licences, with possible additional participation depending on applicable provisions. Investors should obtain current Tanzanian legal and tax advice.
                <a className="ml-1 font-semibold text-green-700 underline" href="https://www.tumemadini.go.tz/media/uploads/publications/2026/03/06/The_Mining_Act_Cap._123_R.E_2023.pdf" target="_blank" rel="noreferrer">Review the Mining Act</a>.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-950 px-4 py-14 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-300">A disciplined investment process</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Verify the project before committing capital</h2>
              <p className="mt-4 text-sm leading-6 text-gray-300">Strong investment cases combine verified mineral rights, reliable technical information, a realistic development plan, responsible community and environmental management, infrastructure, financing and a credible route to market.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Typical diligence areas</h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">Licence status and boundaries · beneficial ownership · exploration and resource data · independent technical reports · land access · environmental and social approvals · water and power · logistics · capital needs · offtake terms · taxes, royalties and local-content rules.</p>
              <a className="mt-4 inline-flex text-sm font-semibold text-green-300 underline" href="https://www.gst.go.tz/pages/geo-information" target="_blank" rel="noreferrer">Explore geological information from GST</a>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">A clear process</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                How investment inquiries proceed
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {process.map((item, index) => (
                <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-950 text-white">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-bold text-gray-300">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-gray-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="investor-interest" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">Start a conversation</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                Tell us what you are looking for
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Investors, project owners and strategic partners can submit an inquiry. Please share enough information to understand your interest, but do not send confidential documents through this form.
              </p>
              <div className="mt-7 space-y-4">
                <div className="flex gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-700"><LockKeyhole className="h-4 w-4" /></div>
                  <p className="text-sm leading-6 text-gray-600">Names and project details are not published here. Information is shared only where appropriate and with permission.</p>
                </div>
                <div className="flex gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-700"><ShieldCheck className="h-4 w-4" /></div>
                  <p className="text-sm leading-6 text-gray-600">Every investment decision requires independent legal, technical, financial and regulatory due diligence.</p>
                </div>
              </div>
            </div>
            <InvestorLeadForm />
          </div>
        </section>

        <section className="bg-gray-950 px-4 py-12 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Looking for a strategic mining opportunity in Tanzania?</h2>
            <p className="mt-3 text-sm leading-6 text-gray-300">Register your interest and tell us about your investment criteria.</p>
            <Link href="#investor-interest" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500">
              Submit an inquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-xs leading-5 text-gray-500">
            Submitting an inquiry is not an offer to sell an investment, a guarantee that a project is available, or a promise of returns. Any project information is subject to authorization, verification and due diligence.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
