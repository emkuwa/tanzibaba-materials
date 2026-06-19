'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Square, ArrowLeft } from 'lucide-react';

const blockSizes = [
  { label: '100mm Block (9.5\"x4\"x4\")', coverage: 0.025 },
  { label: '150mm Block (9.5\"x6\"x4\")', coverage: 0.025 },
  { label: '200mm Block (9.5\"x8\"x4\")', coverage: 0.025 },
  { label: '230mm Hollow Block', coverage: 0.025 },
];

export default function BlockCalculator() {
  const [wallLength, setWallLength] = useState('');
  const [wallHeight, setWallHeight] = useState('');
  const [blockType, setBlockType] = useState('0');
  const [waste, setWaste] = useState('5');
  const [result, setResult] = useState<{ area: number; blocks: number; withWaste: number } | null>(null);

  const calculate = () => {
    const l = parseFloat(wallLength);
    const h = parseFloat(wallHeight);
    const wastePct = parseFloat(waste) || 0;
    const block = blockSizes[parseInt(blockType)];
    if (l > 0 && h > 0 && block) {
      const area = l * h;
      const blocksPerSqm = 1 / block.coverage;
      const blocks = Math.ceil(area * blocksPerSqm);
      setResult({ area, blocks, withWaste: Math.ceil(blocks * (1 + wastePct / 100)) });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-950 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/tools" className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-4 transition-colors"><ArrowLeft className="w-4 h-4" /> All Tools</Link>
          <div className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-300 px-3 py-1 rounded-full text-xs font-medium mb-3"><Square className="w-3.5 h-3.5" /> Calculator</div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Block Calculator</h1>
          <p className="text-gray-400">Estimate the number of concrete blocks needed for your wall or partition.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 -mt-8 pb-20">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Wall Length (m)</label>
                <input type="number" value={wallLength} onChange={e => setWallLength(e.target.value)} placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Wall Height (m)</label>
                <input type="number" value={wallHeight} onChange={e => setWallHeight(e.target.value)} placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Block Type</label>
              <select value={blockType} onChange={e => setBlockType(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none">
                {blockSizes.map((b, i) => <option key={i} value={i}>{b.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Waste Factor (%)</label>
              <input type="number" value={waste} onChange={e => setWaste(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
            </div>
            <button onClick={calculate} className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3.5 rounded-xl transition-all">Calculate Blocks</button>
          </div>
          {result && (
            <div className="mt-6 p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">Results</h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-xl p-4 border border-blue-100">
                  <p className="text-gray-500">Wall Area</p>
                  <p className="text-2xl font-bold text-gray-900">{result.area.toFixed(2)} m²</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-blue-100">
                  <p className="text-gray-500">Blocks Needed</p>
                  <p className="text-2xl font-bold text-gray-900">{result.blocks}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-blue-100">
                  <p className="text-gray-500">With {waste}% Waste</p>
                  <p className="text-2xl font-bold text-blue-600">{result.withWaste}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
}
