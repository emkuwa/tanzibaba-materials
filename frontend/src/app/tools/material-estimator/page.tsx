'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HardHat, ArrowLeft, Plus, Trash2 } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

interface MaterialItem {
  name: string;
  quantity: number;
  unit: string;
}

export default function MaterialEstimator() {
  const [items, setItems] = useState<MaterialItem[]>([{ name: '', quantity: 0, unit: 'm³' }]);
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  const addItem = () => setItems([...items, { name: '', quantity: 0, unit: 'm³' }]);
  const removeItem = (i: number) => setItems(items.filter((_, idx) => idx !== i));

  const updateItem = (i: number, field: keyof MaterialItem, value: string) => {
    const newItems = [...items];
    if (field === 'quantity') newItems[i][field] = parseFloat(value) || 0;
    else newItems[i][field] = value;
    setItems(newItems);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-950 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/tools" className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-4 transition-colors"><ArrowLeft className="w-4 h-4" /> All Tools</Link>
          <div className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 px-3 py-1 rounded-full text-xs font-medium mb-3"><HardHat className="w-3.5 h-3.5" /> Tool</div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Material Estimator</h1>
          <p className="text-gray-400">List and estimate all materials needed for your construction project.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 -mt-8 pb-20">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <div className="space-y-3">
            {items.map((item, i) => (
              <div key={i} className="flex gap-3 items-end">
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Material</label>
                  <input type="text" value={item.name} onChange={e => updateItem(i, 'name', e.target.value)} placeholder="e.g. Concrete C25" className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
                <div className="w-24">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Qty</label>
                  <input type="number" value={item.quantity || ''} onChange={e => updateItem(i, 'quantity', e.target.value)} placeholder="0" className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
                <div className="w-20">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Unit</label>
                  <select value={item.unit} onChange={e => updateItem(i, 'unit', e.target.value)} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none">
                    <option value="m³">m³</option>
                    <option value="tons">tons</option>
                    <option value="pcs">pcs</option>
                    <option value="bags">bags</option>
                    <option value="L">L</option>
                  </select>
                </div>
                {items.length > 1 && (
                  <button onClick={() => removeItem(i)} className="p-2.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button onClick={addItem} className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium py-2">
              <Plus className="w-4 h-4" /> Add Material
            </button>
          </div>
          {items.some(i => i.name && i.quantity > 0) && (
            <div className="mt-6 p-5 bg-green-50 rounded-xl border border-green-200">
              <h3 className="font-bold text-gray-900 mb-3">Material List</h3>
              <div className="space-y-2">
                {items.filter(i => i.name && i.quantity > 0).map((item, i) => (
                  <div key={i} className="flex justify-between items-center bg-white rounded-xl px-4 py-3 border border-green-100 text-sm">
                    <span className="font-medium text-gray-900">{item.name}</span>
                    <span className="text-gray-600">{item.quantity} {item.unit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
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
              product="Construction Materials"
              onClose={() => setShowLeadCapture(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
