'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DollarSign, ArrowLeft, Plus, Trash2 } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

interface CostItem {
  description: string;
  amount: number;
}

export default function CostCalculator() {
  const [items, setItems] = useState<CostItem[]>([{ description: '', amount: 0 }]);
  const [labour, setLabour] = useState(0);
  const [misc, setMisc] = useState(0);
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  const addItem = () => setItems([...items, { description: '', amount: 0 }]);
  const removeItem = (i: number) => setItems(items.filter((_, idx) => idx !== i));

  const updateItem = (i: number, field: keyof CostItem, value: string) => {
    const newItems = [...items];
    if (field === 'amount') newItems[i][field] = parseFloat(value) || 0;
    else newItems[i][field] = value;
    setItems(newItems);
  };

  const materialTotal = items.reduce((s, i) => s + i.amount, 0);
  const grandTotal = materialTotal + labour + misc;

  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-950 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/tools" className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-4 transition-colors"><ArrowLeft className="w-4 h-4" /> All Tools</Link>
          <div className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 px-3 py-1 rounded-full text-xs font-medium mb-3"><DollarSign className="w-3.5 h-3.5" /> Calculator</div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Construction Cost Calculator</h1>
          <p className="text-gray-400">Estimate total construction costs including materials, labour and miscellaneous expenses.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 -mt-8 pb-20">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4">Material Costs</h3>
          <div className="space-y-3">
            {items.map((item, i) => (
              <div key={i} className="flex gap-3 items-end">
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Item</label>
                  <input type="text" value={item.description} onChange={e => updateItem(i, 'description', e.target.value)} placeholder="e.g. Concrete C25" className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
                <div className="w-32">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Amount (TZS)</label>
                  <input type="number" value={item.amount || ''} onChange={e => updateItem(i, 'amount', e.target.value)} placeholder="0" className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
                {items.length > 1 && (
                  <button onClick={() => removeItem(i)} className="p-2.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button onClick={addItem} className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium py-2">
              <Plus className="w-4 h-4" /> Add Item
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Labour Cost (TZS)</label>
              <input type="number" value={labour || ''} onChange={e => setLabour(parseFloat(e.target.value) || 0)} placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Miscellaneous (TZS)</label>
              <input type="number" value={misc || ''} onChange={e => setMisc(parseFloat(e.target.value) || 0)} placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
            </div>
          </div>

          <div className="mt-6 p-5 bg-emerald-50 rounded-xl border border-emerald-200">
            <h3 className="font-bold text-gray-900 mb-3">Cost Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between bg-white rounded-xl px-4 py-3 border border-emerald-100">
                <span className="text-gray-600">Materials</span>
                <span className="font-bold text-gray-900">TZS {materialTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between bg-white rounded-xl px-4 py-3 border border-emerald-100">
                <span className="text-gray-600">Labour</span>
                <span className="font-bold text-gray-900">TZS {labour.toLocaleString()}</span>
              </div>
              <div className="flex justify-between bg-white rounded-xl px-4 py-3 border border-emerald-100">
                <span className="text-gray-600">Miscellaneous</span>
                <span className="font-bold text-gray-900">TZS {misc.toLocaleString()}</span>
              </div>
              <div className="flex justify-between bg-emerald-600 text-white rounded-xl px-4 py-3 font-bold text-base">
                <span>Total Estimated Cost</span>
                <span>TZS {grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setShowLeadCapture(true)}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-all text-center"
            >
              WhatsApp Us
            </button>
            <a
              href="/get-quote"
              className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-xl transition-all text-center"
            >
              Get Quote
            </a>
          </div>
        </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/ready-mix-concrete-dar-es-salaam" className="flex items-center gap-3 p-3 rounded-xl bg-brand-50 hover:bg-brand-100 transition-colors text-sm font-medium text-brand-700">
              <span className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 font-bold">R</span>
              Ready-Mix Concrete
            </Link>
            <Link href="/aggregates-supplier-dar-es-salaam" className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors text-sm font-medium text-orange-700">
              <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold">A</span>
              Aggregates
            </Link>
            <Link href="/blocks-supplier-dar-es-salaam" className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors text-sm font-medium text-blue-700">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">B</span>
              Concrete Blocks
            </Link>
          </div>
        </div>
      </div>

      {showLeadCapture && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4" onClick={() => setShowLeadCapture(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative bg-white w-full md:max-w-md md:rounded-2xl rounded-t-2xl shadow-2xl animate-in slide-in-from-bottom duration-300" onClick={e => e.stopPropagation()}>
            <LeadCaptureForm
              product="Cost Estimation"
              onClose={() => setShowLeadCapture(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
