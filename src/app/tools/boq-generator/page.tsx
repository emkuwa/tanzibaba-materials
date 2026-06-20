'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, ArrowLeft, Plus, Trash2, Printer } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

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
  const [showLeadCapture, setShowLeadCapture] = useState(false);

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
              product="BOQ Assistance"
              onClose={() => setShowLeadCapture(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
