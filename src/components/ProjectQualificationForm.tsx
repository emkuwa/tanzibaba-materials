'use client';

import { useState } from 'react';
import { Send, CheckCircle, Building, Package, MapPin, Phone, MessageCircle, Hash } from 'lucide-react';

const projectTypes = [
  'Residential',
  'Commercial',
  'Industrial',
  'Infrastructure',
  'Government',
  'Hospitality',
  'Not Sure',
];

const products = [
  'Concrete',
  'Aggregates',
  'Gravel',
  'Blocks',
  'Multiple Products',
  'Construction Services',
];

export default function ProjectQualificationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    projectType: '',
    product: '',
    location: '',
    quantity: '',
    phone: '',
    whatsapp: '',
  });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Tanzibaba!%0A%0AI need a price estimate:%0A%0AProject Type: ${form.projectType || 'Not specified'}%0AProduct: ${form.product || 'Not specified'}%0ALocation: ${form.location || 'Not specified'}%0AQuantity: ${form.quantity || 'Not specified'}%0APhone: ${form.phone || 'Not specified'}%0AWhatsApp: ${form.whatsapp || 'Not specified'}`;
    window.open(`https://wa.me/255716002790?text=${msg}`, '_blank');
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
          Your request has been sent via WhatsApp. Our team will respond with a price estimate within minutes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center">
          <Package className="w-5 h-5 text-brand-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900">Get a Price Estimate</h3>
          <p className="text-xs text-gray-500">Tell us what you need — we will respond quickly</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              <Building className="w-4 h-4 inline mr-1.5 text-gray-400" />Project Type
            </label>
            <select value={form.projectType} onChange={e => update('projectType', e.target.value)} required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent bg-white">
              <option value="">Select type</option>
              {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              <Package className="w-4 h-4 inline mr-1.5 text-gray-400" />Product Needed
            </label>
            <select value={form.product} onChange={e => update('product', e.target.value)} required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent bg-white">
              <option value="">Select product</option>
              {products.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              <MapPin className="w-4 h-4 inline mr-1.5 text-gray-400" />Delivery Location
            </label>
            <input type="text" value={form.location} onChange={e => update('location', e.target.value)} required placeholder="City or area"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              <Hash className="w-4 h-4 inline mr-1.5 text-gray-400" />Quantity
            </label>
            <input type="text" value={form.quantity} onChange={e => update('quantity', e.target.value)} placeholder="e.g. 50 cubic meters"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Contact Details</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                <Phone className="w-4 h-4 inline mr-1.5 text-gray-400" />Phone Number
              </label>
              <input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} required placeholder="e.g. 0712 345 678"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                <MessageCircle className="w-4 h-4 inline mr-1.5 text-green-500" />WhatsApp Number
              </label>
              <input type="tel" value={form.whatsapp} onChange={e => update('whatsapp', e.target.value)} placeholder="If different from phone"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
            </div>
          </div>
        </div>

        <button type="submit"
          className="w-full bg-green-500 text-white rounded-xl py-3.5 font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-500/30 flex items-center justify-center gap-2 text-sm">
          <MessageCircle className="w-4 h-4" /> Send via WhatsApp
        </button>

        <p className="text-xs text-gray-400 text-center">
          We will respond with a price estimate within minutes.
        </p>
      </div>
    </form>
  );
}
