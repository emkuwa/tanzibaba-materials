'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowLeft } from 'lucide-react';

export default function ConcreteCalculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [thickness, setThickness] = useState('');
  const [waste, setWaste] = useState('5');
  const [result, setResult] = useState<{ volume: number; withWaste: number } | null>(null);

  const calculate = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const t = parseFloat(thickness);
    const wastePct = parseFloat(waste) || 0;
    if (l > 0 && w > 0 && t > 0) {
      const volume = l * w * (t / 1000);
      setResult({ volume, withWaste: volume * (1 + wastePct / 100) });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-950 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/tools" className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-4 transition-colors"><ArrowLeft className="w-4 h-4" /> All Tools</Link>
          <div className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 px-3 py-1 rounded-full text-xs font-medium mb-3"><Calculator className="w-3.5 h-3.5" /> Calculator</div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Concrete Volume Calculator</h1>
          <p className="text-gray-400">Calculate the exact volume of concrete needed for slabs, footings, columns and beams.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 -mt-8 pb-20">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Length (m)</label>
                <input type="number" value={length} onChange={e => setLength(e.target.value)} placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Width (m)</label>
                <input type="number" value={width} onChange={e => setWidth(e.target.value)} placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Thickness (mm)</label>
                <input type="number" value={thickness} onChange={e => setThickness(e.target.value)} placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Waste Factor (%)</label>
              <input type="number" value={waste} onChange={e => setWaste(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
            </div>
            <button onClick={calculate} className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3.5 rounded-xl transition-all">Calculate Volume</button>
          </div>
          {result && (
            <div className="mt-6 p-5 bg-brand-50 rounded-xl border border-brand-200">
              <h3 className="font-bold text-gray-900 mb-3">Results</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white rounded-xl p-4 border border-brand-100">
                  <p className="text-gray-500">Net Volume</p>
                  <p className="text-2xl font-bold text-gray-900">{result.volume.toFixed(2)} m³</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-brand-100">
                  <p className="text-gray-500">With Waste ({waste}%)</p>
                  <p className="text-2xl font-bold text-brand-600">{result.withWaste.toFixed(2)} m³</p>
                </div>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/255716002790?text=${encodeURIComponent(`Hi Tanzibaba, I need ${result.withWaste.toFixed(2)} m³ of ready mix concrete for my project.`)}`}
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
          )}
        </div>
      </div>
      </div>
    </>
  );
}
