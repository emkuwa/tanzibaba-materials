'use client';

import { useState } from 'react';
import { Phone, MessageCircle, CheckCircle, X, Send, FileText } from 'lucide-react';

interface LeadCaptureFormProps {
  product?: string;
  location?: string;
  quantity?: string;
  onClose?: () => void;
}

const WHATSAPP_NUMBER = '255716002790';

export default function LeadCaptureForm({ product = '', location = '', quantity = '', onClose }: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    phone: '',
    whatsapp: '',
    description: '',
  });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const leadData = {
      phone: form.phone,
      whatsapp: form.whatsapp || form.phone,
      product,
      location,
      quantity,
      description: form.description,
      timestamp: new Date().toISOString(),
      source: 'website_lead_capture',
    };

    // Save to localStorage
    const existingLeads = JSON.parse(localStorage.getItem('tanzibaba_leads') || '[]');
    existingLeads.push(leadData);
    localStorage.setItem('tanzibaba_leads', JSON.stringify(existingLeads));

    // Try to send to API (fire and forget)
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData),
    }).catch(() => {});

    // Build WhatsApp message
    const parts = [
      'Hi Tanzibaba!',
      '',
      'I need a price estimate:',
    ];
    if (product) parts.push(`Product: ${product}`);
    if (location) parts.push(`Location: ${location}`);
    if (quantity) parts.push(`Quantity: ${quantity}`);
    if (form.description) parts.push(`Project Details: ${form.description}`);
    parts.push(`Phone: ${form.phone}`);
    if (form.whatsapp) parts.push(`WhatsApp: ${form.whatsapp}`);

    const msg = parts.join('%0A');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm text-center">
        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Lead Captured & WhatsApp Opened</h3>
        <p className="text-gray-500 text-sm max-w-md mx-auto mb-4">
          Your details have been saved. WhatsApp has been opened with your inquiry — send the message to connect with our team.
        </p>
        {onClose && (
          <button onClick={onClose} className="text-sm text-brand-600 hover:text-brand-700 font-semibold">
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center">
            <Send className="w-5 h-5 text-brand-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm">Quick Price Estimate</h3>
            <p className="text-xs text-gray-500">Fill in details — we respond within minutes</p>
          </div>
        </div>
        {onClose && (
          <button type="button" onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>

      <div className="space-y-3">
        {(product || location || quantity) && (
          <div className="bg-gray-50 rounded-xl p-3 text-xs text-gray-600 space-y-1">
            {product && <p><span className="font-medium text-gray-700">Product:</span> {product}</p>}
            {location && <p><span className="font-medium text-gray-700">Location:</span> {location}</p>}
            {quantity && <p><span className="font-medium text-gray-700">Quantity:</span> {quantity}</p>}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Phone className="w-4 h-4 inline mr-1 text-gray-400" />Phone Number *
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={e => update('phone', e.target.value)}
            required
            placeholder="e.g. 0712 345 678"
            className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <MessageCircle className="w-4 h-4 inline mr-1 text-green-500" />WhatsApp Number
          </label>
          <input
            type="tel"
            value={form.whatsapp}
            onChange={e => update('whatsapp', e.target.value)}
            placeholder="If different from phone"
            className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <FileText className="w-4 h-4 inline mr-1 text-gray-400" />Project Description
          </label>
          <textarea
            value={form.description}
            onChange={e => update('description', e.target.value)}
            placeholder="Tell us about your project..."
            rows={2}
            className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 text-sm"
        >
          <MessageCircle className="w-4 h-4" /> Send via WhatsApp
        </button>

        <p className="text-xs text-gray-400 text-center">
          We will respond with a price estimate within minutes.
        </p>
      </div>
    </form>
  );
}
