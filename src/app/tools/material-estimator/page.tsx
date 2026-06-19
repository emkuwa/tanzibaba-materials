'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HardHat, ArrowLeft, Plus, Trash2 } from 'lucide-react';

interface MaterialItem {
  name: string;
  quantity: number;
  unit: string;
}

export default function MaterialEstimator() {
  const [items, setItems] = useState<MaterialItem[]>([{ name: '', quantity: 0, unit: 'm³' }]);

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
        </div>
      </div>
      </div>
    </>
  );
}
