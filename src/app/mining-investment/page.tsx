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
    "Explore investment interests and strategic partnership opportunities across Tanzania’s mining sector. Register your investor profile or submit a project inquiry.",
  keywords: [
    "invest in Tanzania mining",
    "Tanzania mining investment opportunities",
    "mining joint venture Tanzania",
    "Tanzania mineral projects",
    "graphite investment Tanzania",
    "gold investment Tanzania",
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
