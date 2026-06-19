'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DollarSign, ArrowLeft, Plus, Trash2 } from 'lucide-react';

interface CostItem {
  description: string;
  amount: number;
}

export default function CostCalculator() {
  const [items, setItems] = useState<CostItem[]>([{ description: '', amount: 0 }]);
  const [labour, setLabour] = useState(0);
  const [misc, setMisc] = useState(0);

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
        </div>
      </div>
      </div>
    </>
  );
}
