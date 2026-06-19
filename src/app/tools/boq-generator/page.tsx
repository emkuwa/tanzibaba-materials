'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, ArrowLeft, Plus, Trash2, Printer } from 'lucide-react';

interface BOQItem {
  item: string;
  description: string;
  quantity: number;
  unit: string;
  rate: number;
}

export default function BOQGenerator() {
  const [projectName, setProjectName] = useState('');
  const [items, setItems] = useState<BOQItem[]>([{ item: '', description: '', quantity: 0, unit: 'm³', rate: 0 }]);

  const addItem = () => setItems([...items, { item: '', description: '', quantity: 0, unit: 'm³', rate: 0 }]);
  const removeItem = (i: number) => setItems(items.filter((_, idx) => idx !== i));

  const updateItem = (i: number, field: keyof BOQItem, value: string) => {
    const newItems = [...items];
    if (field === 'quantity' || field === 'rate') newItems[i][field] = parseFloat(value) || 0;
    else newItems[i][field] = value;
    setItems(newItems);
  };

  const total = items.reduce((s, i) => s + i.quantity * i.rate, 0);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/tools" className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-4 transition-colors"><ArrowLeft className="w-4 h-4" /> All Tools</Link>
          <div className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 px-3 py-1 rounded-full text-xs font-medium mb-3"><FileText className="w-3.5 h-3.5" /> Tool</div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">BOQ Generator</h1>
          <p className="text-gray-400">Generate a simple bill of quantities for your construction project.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 -mt-8 pb-20">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
            <input type="text" value={projectName} onChange={e => setProjectName(e.target.value)} placeholder="e.g. Residential House Construction" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Item</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Description</th>
                  <th className="text-right px-3 py-2 font-semibold text-gray-700 w-20">Qty</th>
                  <th className="text-center px-3 py-2 font-semibold text-gray-700 w-16">Unit</th>
                  <th className="text-right px-3 py-2 font-semibold text-gray-700 w-28">Rate (TZS)</th>
                  <th className="text-right px-3 py-2 font-semibold text-gray-700 w-28">Amount</th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="px-3 py-2"><input type="text" value={item.item} onChange={e => updateItem(i, 'item', e.target.value)} placeholder="1" className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none" /></td>
                    <td className="px-3 py-2"><input type="text" value={item.description} onChange={e => updateItem(i, 'description', e.target.value)} placeholder="Description" className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none" /></td>
                    <td className="px-3 py-2"><input type="number" value={item.quantity || ''} onChange={e => updateItem(i, 'quantity', e.target.value)} placeholder="0" className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm text-right focus:ring-2 focus:ring-brand-500 outline-none" /></td>
                    <td className="px-3 py-2">
                      <select value={item.unit} onChange={e => updateItem(i, 'unit', e.target.value)} className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none">
                        <option value="m³">m³</option>
                        <option value="tons">tons</option>
                        <option value="pcs">pcs</option>
                        <option value="m²">m²</option>
                        <option value="m">m</option>
                        <option value="L">L</option>
                        <option value="bags">bags</option>
                      </select>
                    </td>
                    <td className="px-3 py-2"><input type="number" value={item.rate || ''} onChange={e => updateItem(i, 'rate', e.target.value)} placeholder="0" className="w-full px-2 py-1.5 border border-gray-200 rounded-lg text-sm text-right focus:ring-2 focus:ring-brand-500 outline-none" /></td>
                    <td className="px-3 py-2 text-right font-medium text-gray-900">{(item.quantity * item.rate).toLocaleString()}</td>
                    <td className="px-3 py-2">
                      {items.length > 1 && (
                        <button onClick={() => removeItem(i)} className="p-1 text-red-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button onClick={addItem} className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium py-3 mt-2">
            <Plus className="w-4 h-4" /> Add Item
          </button>

          <div className="mt-4 p-5 bg-indigo-50 rounded-xl border border-indigo-200">
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-900">Grand Total</span>
              <span className="text-2xl font-extrabold text-indigo-600">TZS {total.toLocaleString()}</span>
            </div>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/255716002790?text=${encodeURIComponent(`Hi Tanzibaba, I need help with BOQ for my project.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-all text-center"
            >
              WhatsApp Us
            </a>
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
    </>
  );
}
