'use client';

import { useState } from "react";
import { ArrowRight, CheckCircle, LockKeyhole, Send } from "lucide-react";

const minerals = [
  "Graphite & battery minerals",
  "Gold & precious metals",
  "Nickel, copper & base metals",
  "Rare earths & industrial minerals",
  "Gemstones",
  "Other mineral interests",
];

const investmentRoutes = [
  "Joint venture",
  "Equity investment",
  "Project finance",
  "Offtake agreement",
  "Technical or strategic partnership",
  "Other",
];

const interestTypes = [
  "Investor seeking opportunities",
  "Mining project seeking investment",
  "Institution or strategic partner",
  "Other",
];

export default function InvestorLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    country: "",
    interestType: interestTypes[0],
    mineral: "",
    investmentRange: "",
    investmentRoute: "",
    message: "",
    consent: false,
  });

  const update = (field: string, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value } as typeof current));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Tanzibaba mining investment inquiry",
      "",
      "Name: " + form.name,
      "Business email: " + form.email,
      "Organization: " + (form.organization || "Not specified"),
      "Country: " + form.country,
      "Inquiry type: " + form.interestType,
      "Mineral interest: " + (form.mineral || "Not specified"),
      "Investment range: " + (form.investmentRange || "Not specified"),
      "Preferred structure: " + (form.investmentRoute || "Not specified"),
      "Details: " + (form.message || "Not provided"),
    ].join("\n");

    const nextWhatsappUrl = "https://wa.me/255716002790?text=" + encodeURIComponent(message);
    setWhatsappUrl(nextWhatsappUrl);
    window.open(nextWhatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-green-200 bg-green-50 p-8 text-center sm:p-10">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
          <CheckCircle className="h-7 w-7 text-green-700" />
        </div>
        <h3 className="text-2xl font-bold text-gray-950">Your inquiry is ready</h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600">
          WhatsApp should open with your message. Please press Send there to deliver your inquiry. If it did not open, <a className="font-semibold text-green-700 underline" href={whatsappUrl} target="_blank" rel="noreferrer">open WhatsApp here</a> or email <a className="font-semibold text-green-700 underline" href="mailto:info@tanzibaba.co.tz">info@tanzibaba.co.tz</a>.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="mt-6 text-sm font-semibold text-green-800 hover:underline">Submit another inquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-950/5 sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">Private inquiry</p>
        <h3 className="mt-2 text-2xl font-extrabold text-gray-950">Register your interest</h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">Share your investment focus or project requirements. Do not include confidential technical or financial documents in this form.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-gray-700">Full name *
          <input required autoComplete="name" value={form.name} onChange={(event) => update("name", event.target.value)} className="mt-1.5 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100" placeholder="Your name" />
        </label>
        <label className="text-sm font-medium text-gray-700">Business email *
          <input required type="email" autoComplete="email" value={form.email} onChange={(event) => update("email", event.target.value)} className="mt-1.5 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100" placeholder="name@company.com" />
        </label>
        <label className="text-sm font-medium text-gray-700">Company or organization
          <input value={form.organization} onChange={(event) => update("organization", event.target.value)} className="mt-1.5 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100" placeholder="Organization name" />
        </label>
        <label className="text-sm font-medium text-gray-700">Country *
          <input required autoComplete="country-name" value={form.country} onChange={(event) => update("country", event.target.value)} className="mt-1.5 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100" placeholder="Country of residence or registration" />
        </label>
        <label className="text-sm font-medium text-gray-700">I am a *
          <select required value={form.interestType} onChange={(event) => update("interestType", event.target.value)} className="mt-1.5 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100">
            {interestTypes.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="text-sm font-medium text-gray-700">Mineral of interest
          <select value={form.mineral} onChange={(event) => update("mineral", event.target.value)} className="mt-1.5 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100">
            <option value="">Select a mineral or category</option>
            {minerals.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="text-sm font-medium text-gray-700">Indicative investment range
          <select value={form.investmentRange} onChange={(event) => update("investmentRange", event.target.value)} className="mt-1.5 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100">
            <option value="">Select a range</option>
            <option>Below USD 1 million</option>
            <option>USD 1–5 million</option>
            <option>USD 5–25 million</option>
            <option>USD 25–100 million</option>
            <option>Above USD 100 million</option>
            <option>To be discussed</option>
            <option>Not applicable — project owner or partner</option>
          </select>
        </label>
        <label className="text-sm font-medium text-gray-700">Preferred partnership structure
          <select value={form.investmentRoute} onChange={(event) => update("investmentRoute", event.target.value)} className="mt-1.5 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100">
            <option value="">Select a structure</option>
            {investmentRoutes.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="text-sm font-medium text-gray-700 sm:col-span-2">Briefly describe your interest
          <textarea rows={4} value={form.message} onChange={(event) => update("message", event.target.value)} className="mt-1.5 w-full resize-y rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100" placeholder="Mineral, project stage, investment criteria, or partnership sought" />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-gray-600">
        <input type="checkbox" required checked={form.consent} onChange={(event) => update("consent", event.target.checked)} className="mt-1 h-4 w-4 rounded border-gray-300 text-green-700 focus:ring-green-600" />
        <span>I agree that Tanzibaba may use these details to respond to this inquiry and, with my consent, share relevant information with appropriate project parties.</span>
      </label>

      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-200 sm:w-auto">
        <Send className="h-4 w-4" /> Submit investor interest <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-4 text-xs leading-5 text-gray-500">No project names or sensitive details are published here. Further information is subject to availability, permission and independent due diligence.</p>
    </form>
  );
}
