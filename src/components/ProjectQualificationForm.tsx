'use client';

import { useState } from 'react';
import { Send, CheckCircle, Building, DollarSign, MapPin, User, Phone, Mail, ClipboardList } from 'lucide-react';

const projectTypes = [
  'Commercial Development',
  'Industrial Facility',
  'Infrastructure Project',
  'Government Project',
  'Large-Scale Residential',
  'Mixed-Use Development',
];

const projectValues = [
  'Under $500,000',
  '$500,000 – $1,000,000',
  '$1,000,000 – $2,000,000',
  '$2,000,000 – $5,000,000',
  '$5,000,000+',
  'Prefer Not to Say',
];

const fundingStatuses = [
  'Fully Funded',
  'Partially Funded',
  'Seeking Funding',
  'Under Review',
  'Not Yet Funded',
];

const projectStages = [
  'Planning',
  'Design',
  'Tendering',
  'Pre-Construction',
  'Under Construction',
];

export default function ProjectQualificationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    projectName: '',
    projectType: '',
    projectValue: '',
    fundingStatus: '',
    projectStage: '',
    location: '',
    company: '',
    contactPerson: '',
    phone: '',
    email: '',
  });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm text-center">
        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You</h3>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Your project qualification form has been received. Our major projects team will review your submission and contact you within 1-2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center">
          <ClipboardList className="w-5 h-5 text-brand-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900">Project Qualification</h3>
          <p className="text-xs text-gray-500">Tell us about your project</p>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Name</label>
          <input type="text" value={form.projectName} onChange={e => update('projectName', e.target.value)} required placeholder="e.g. Mbezi Beach Office Complex"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            <Building className="w-4 h-4 inline mr-1.5 text-gray-400" />Project Type
          </label>
          <select value={form.projectType} onChange={e => update('projectType', e.target.value)} required
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent bg-white">
            <option value="">Select project type</option>
            {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              <DollarSign className="w-4 h-4 inline mr-1.5 text-gray-400" />Estimated Project Value
            </label>
            <select value={form.projectValue} onChange={e => update('projectValue', e.target.value)} required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent bg-white">
              <option value="">Select value range</option>
              {projectValues.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Funding Status</label>
            <select value={form.fundingStatus} onChange={e => update('fundingStatus', e.target.value)} required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent bg-white">
              <option value="">Select funding status</option>
              {fundingStatuses.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Stage</label>
            <select value={form.projectStage} onChange={e => update('projectStage', e.target.value)} required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent bg-white">
              <option value="">Select project stage</option>
              {projectStages.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              <MapPin className="w-4 h-4 inline mr-1.5 text-gray-400" />Project Location
            </label>
            <input type="text" value={form.location} onChange={e => update('location', e.target.value)} required placeholder="City, Region"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
          </div>
        </div>

        <div className="border-t border-gray-100 pt-5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Your Details</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                <Building className="w-4 h-4 inline mr-1.5 text-gray-400" />Company Name
              </label>
              <input type="text" value={form.company} onChange={e => update('company', e.target.value)} required placeholder="Company name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                <User className="w-4 h-4 inline mr-1.5 text-gray-400" />Contact Person
              </label>
              <input type="text" value={form.contactPerson} onChange={e => update('contactPerson', e.target.value)} required placeholder="Full name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                <Phone className="w-4 h-4 inline mr-1.5 text-gray-400" />Phone
              </label>
              <input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} required placeholder="+255 700 000 000"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                <Mail className="w-4 h-4 inline mr-1.5 text-gray-400" />Email
              </label>
              <input type="email" value={form.email} onChange={e => update('email', e.target.value)} required placeholder="email@company.com"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
            </div>
          </div>
        </div>

        <button type="submit"
          className="w-full bg-brand-600 text-white rounded-xl py-3.5 font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 text-sm">
          <Send className="w-4 h-4" /> Submit Qualification Form
        </button>

        <p className="text-xs text-gray-400 text-center">
          Our major projects team will review your submission and respond within 1-2 business days.
        </p>
      </div>
    </form>
  );
}
