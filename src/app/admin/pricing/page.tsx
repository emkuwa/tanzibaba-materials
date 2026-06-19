'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DollarSign, TrendingUp, Truck, Percent, Save, Download, Building2, MapPin, FileText, RefreshCw } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { buildZonePricing, getZoneForLocation, calculateProfit, generateQuoteProfitReport, zoneGradePricing, getGradePricing, ZonePricing, PricingZone, ProductPricing, GradePricing } from '@/data/pricing';
import { fmt } from '@/data/constants';

type Tab = 'products' | 'concrete' | 'reports';

export default function AdminPricingPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<Tab>('products');
  const [selectedZone, setSelectedZone] = useState<PricingZone>('dar');
  const [zoneData, setZoneData] = useState<ZonePricing[]>([]);
  const [gradeData, setGradeData] = useState(zoneGradePricing);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!loading && (!user || user.role !== 'ADMIN')) router.push('/login');
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('tanzibaba-pricing');
      if (stored) {
        try { setZoneData(JSON.parse(stored)); } catch { setZoneData(buildZonePricing()); }
      } else {
        setZoneData(buildZonePricing());
      }
      const storedGrades = localStorage.getItem('tanzibaba-pricing-grades');
      if (storedGrades) {
        try { setGradeData(JSON.parse(storedGrades)); } catch { setGradeData(zoneGradePricing); }
      }
    }
  }, [user, loading, router]);

  const currentZone = zoneData.find(z => z.zoneId === selectedZone);
  const currentGrades = gradeData.find(z => z.zoneId === selectedZone);

  const handleSave = () => {
    localStorage.setItem('tanzibaba-pricing', JSON.stringify(zoneData));
    localStorage.setItem('tanzibaba-pricing-grades', JSON.stringify(gradeData));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updateProduct = (productId: string, field: keyof ProductPricing, value: number) => {
    setZoneData(prev => prev.map(zone => {
      if (zone.zoneId !== selectedZone) return zone;
      return {
        ...zone,
        products: zone.products.map(p => {
          if (p.productId !== productId) return p;
          const updated = { ...p, [field]: value };
          if (field === 'costPrice' || field === 'transportCost' || field === 'marginPercent') {
            const cost = field === 'costPrice' ? value : p.costPrice;
            const transport = field === 'transportCost' ? value : p.transportCost;
            const margin = field === 'marginPercent' ? value : p.marginPercent;
            updated.sellingPrice = Math.round((cost + transport) * (1 + margin / 100));
          }
          return updated;
        }),
      };
    }));
  };

  const updateGrade = (grade: string, field: keyof GradePricing, value: number) => {
    setGradeData(prev => prev.map(zone => {
      if (zone.zoneId !== selectedZone) return zone;
      return {
        ...zone,
        grades: zone.grades.map(g => {
          if (g.grade !== grade) return g;
          const updated = { ...g, [field]: value };
          if (field === 'costPrice' || field === 'transportCost' || field === 'marginPercent') {
            const cost = field === 'costPrice' ? value : g.costPrice;
            const transport = field === 'transportCost' ? value : g.transportCost;
            const margin = field === 'marginPercent' ? value : g.marginPercent;
            updated.sellingPrice = Math.round((cost + transport) * (1 + margin / 100));
          }
          return updated;
        }),
      };
    }));
  };

  const exportReport = () => {
    const zone = currentZone;
    if (!zone) return;
    const rows = [
      ['Product', 'Cost Price (TZS)', 'Transport (TZS)', 'Margin %', 'Selling Price (TZS)', 'Profit/Unit', 'Unit'],
      ...zone.products.map(p => [p.productName, p.costPrice, p.transportCost, `${p.marginPercent}%`, p.sellingPrice, p.sellingPrice - p.costPrice - p.transportCost, p.unit]),
      [],
      ['Grade', 'Cost Price (TZS)', 'Transport (TZS)', 'Margin %', 'Selling Price (TZS)', 'Profit/m³', ''],
      ...(currentGrades?.grades.map(g => [g.grade, g.costPrice, g.transportCost, `${g.marginPercent}%`, g.sellingPrice, g.sellingPrice - g.costPrice - g.transportCost, 'per m³']) || []),
    ];
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `pricing-${selectedZone}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-4 border-brand-600 border-t-transparent rounded-full" /></div>;
  if (!user || user.role !== 'ADMIN') return null;

  return (
    <>
      <head><meta name="robots" content="noindex, nofollow" /></head>
      <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2"><DollarSign className="w-6 h-6 text-brand-600" /> Pricing Engine</h1>
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            {(['products', 'concrete', 'reports'] as Tab[]).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === tab ? 'bg-white text-brand-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>{tab === 'products' ? 'Products' : tab === 'concrete' ? 'Concrete Grades' : 'Reports'}</button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            {(['dar', 'dodoma', 'zanzibar'] as PricingZone[]).map(z => (
              <button key={z} onClick={() => setSelectedZone(z)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${selectedZone === z ? 'bg-brand-600 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                <MapPin className="w-3.5 h-3.5" /> {z === 'dar' ? 'Dar es Salaam' : z === 'dodoma' ? 'Dodoma' : 'Zanzibar'}
              </button>
            ))}
          </div>
          <button onClick={handleSave} className="flex items-center gap-1.5 bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-700 transition-all">
            <Save className="w-4 h-4" /> {saved ? 'Saved!' : 'Save'}
          </button>
          <button onClick={exportReport} className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-all">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* PRODUCT PRICING TABLE */}
        {activeTab === 'products' && currentZone && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-bold text-gray-900">{currentZone.zoneName} — Product Pricing</h2>
              <span className="text-xs text-gray-400">All prices in TZS</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Product</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Unit</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Cost Price</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Transport</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Margin %</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Selling Price</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Profit/Unit</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Bulk Discount</th>
                  </tr>
                </thead>
                <tbody>
                  {currentZone.products.map(p => {
                    const profit = p.sellingPrice - p.costPrice - p.transportCost;
                    const discount = p.bulkDiscounts.length > 0 ? `${p.bulkDiscounts[p.bulkDiscounts.length - 1].discountPercent}% max` : 'None';
                    return (
                      <tr key={p.productId} className="border-t border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">{p.productName}</td>
                        <td className="px-4 py-3 text-right text-gray-500 text-xs">{p.unit}</td>
                        <td className="px-4 py-3">
                          <input type="number" value={p.costPrice} onChange={e => updateProduct(p.productId, 'costPrice', +e.target.value)}
                            className="w-28 text-right bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
                        </td>
                        <td className="px-4 py-3">
                          <input type="number" value={p.transportCost} onChange={e => updateProduct(p.productId, 'transportCost', +e.target.value)}
                            className="w-28 text-right bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-end gap-1">
                            <input type="number" value={p.marginPercent} onChange={e => updateProduct(p.productId, 'marginPercent', +e.target.value)}
                              className="w-20 text-right bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
                            <span className="text-gray-400">%</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-right font-bold text-gray-900">{fmt(p.sellingPrice)}</td>
                        <td className={`px-4 py-3 text-right font-semibold ${profit > 0 ? 'text-green-600' : 'text-red-600'}`}>{fmt(profit)}</td>
                        <td className="px-4 py-3 text-right text-xs text-gray-500">{discount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CONCRETE GRADE PRICING */}
        {activeTab === 'concrete' && currentGrades && currentZone && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-bold text-gray-900">{currentZone.zoneName} — Concrete Grade Pricing</h2>
              <span className="text-xs text-gray-400">All prices in TZS per m³</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Grade</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Cost Price</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Transport</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Margin %</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Selling Price</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Profit/m³</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Margin Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {currentGrades.grades.map(g => {
                    const profit = g.sellingPrice - g.costPrice - g.transportCost;
                    const marginAmt = Math.round((g.costPrice + g.transportCost) * (g.marginPercent / 100));
                    return (
                      <tr key={g.grade} className="border-t border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3 font-bold text-gray-900">{g.grade}</td>
                        <td className="px-4 py-3">
                          <input type="number" value={g.costPrice} onChange={e => updateGrade(g.grade, 'costPrice', +e.target.value)}
                            className="w-28 text-right bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
                        </td>
                        <td className="px-4 py-3">
                          <input type="number" value={g.transportCost} onChange={e => updateGrade(g.grade, 'transportCost', +e.target.value)}
                            className="w-28 text-right bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-end gap-1">
                            <input type="number" value={g.marginPercent} onChange={e => updateGrade(g.grade, 'marginPercent', +e.target.value)}
                              className="w-20 text-right bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
                            <span className="text-gray-400">%</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-right font-bold text-gray-900">{fmt(g.sellingPrice)}</td>
                        <td className={`px-4 py-3 text-right font-semibold ${profit > 0 ? 'text-green-600' : 'text-red-600'}`}>{fmt(profit)}</td>
                        <td className="px-4 py-3 text-right text-brand-600 font-semibold">{fmt(marginAmt)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center gap-6 text-sm">
              <span className="text-gray-500">Cost-based pricing.</span>
              <span className="text-gray-500">Selling Price = (Cost + Transport) × (1 + Margin%)</span>
              <span className="text-gray-500">Dar plants serve Dar · Dodoma plants serve Dodoma · Zanzibar plants serve Zanzibar</span>
            </div>
          </div>
        )}

        {/* REPORTS */}
        {activeTab === 'reports' && currentZone && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-brand-600" /> Profit Summary — {currentZone.zoneName}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Products Configured', value: currentZone.products.length, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { label: 'Avg Margin', value: `${Math.round(currentZone.products.reduce((s, p) => s + p.marginPercent, 0) / currentZone.products.length)}%`, color: 'text-green-600', bg: 'bg-green-50' },
                  { label: 'Avg Selling Price', value: fmt(Math.round(currentZone.products.reduce((s, p) => s + p.sellingPrice, 0) / currentZone.products.length)), color: 'text-brand-600', bg: 'bg-brand-50' },
                  { label: 'Concrete Grades', value: currentGrades?.grades.length || 0, color: 'text-purple-600', bg: 'bg-purple-50' },
                ].map((stat, i) => (
                  <div key={i} className={`${stat.bg} rounded-xl p-4`}>
                    <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                    <p className={`text-2xl font-extrabold ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-3">Product Profit Breakdown</h3>
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-3 py-2 font-semibold text-gray-600 text-xs">Product</th>
                      <th className="text-right px-3 py-2 font-semibold text-gray-600 text-xs">Cost</th>
                      <th className="text-right px-3 py-2 font-semibold text-gray-600 text-xs">Transport</th>
                      <th className="text-right px-3 py-2 font-semibold text-gray-600 text-xs">Sell Price</th>
                      <th className="text-right px-3 py-2 font-semibold text-gray-600 text-xs">Margin %</th>
                      <th className="text-right px-3 py-2 font-semibold text-gray-600 text-xs">Profit/Unit</th>
                      <th className="text-right px-3 py-2 font-semibold text-gray-600 text-xs">Profit %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentZone.products.map(p => {
                      const profit = p.sellingPrice - p.costPrice - p.transportCost;
                      const profitPct = p.sellingPrice > 0 ? Math.round((profit / p.sellingPrice) * 100) : 0;
                      return (
                        <tr key={p.productId} className="border-t border-gray-100">
                          <td className="px-3 py-2 font-medium text-gray-900 text-xs">{p.productName}</td>
                          <td className="px-3 py-2 text-right text-xs text-gray-600">{fmt(p.costPrice)}</td>
                          <td className="px-3 py-2 text-right text-xs text-gray-600">{fmt(p.transportCost)}</td>
                          <td className="px-3 py-2 text-right text-xs font-bold text-gray-900">{fmt(p.sellingPrice)}</td>
                          <td className="px-3 py-2 text-right text-xs text-blue-600">{p.marginPercent}%</td>
                          <td className="px-3 py-2 text-right text-xs font-semibold text-green-600">{fmt(profit)}</td>
                          <td className="px-3 py-2 text-right text-xs text-green-600">{profitPct}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Truck className="w-5 h-5 text-brand-600" /> Truck Transport Cost Matrix</h2>
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-3 py-2 font-semibold text-gray-600 text-xs">Truck Type</th>
                    <th className="text-right px-3 py-2 font-semibold text-gray-600 text-xs">Capacity (Tons)</th>
                    <th className="text-right px-3 py-2 font-semibold text-gray-600 text-xs">Rate/Ton</th>
                    <th className="text-right px-3 py-2 font-semibold text-gray-600 text-xs">Total Cost (Dar)</th>
                    <th className="text-right px-3 py-2 font-semibold text-gray-600 text-xs">Total Cost (Dodoma)</th>
                    <th className="text-right px-3 py-2 font-semibold text-gray-600 text-xs">Total Cost (Zanzibar)</th>
                  </tr>
                </thead>
                <tbody>
                  {[['Fuso', 6], ['Howo', 30], ['Scania', 25]].map(([name, tons]) => (
                    <tr key={name as string} className="border-t border-gray-100">
                      <td className="px-3 py-2 font-medium text-gray-900 text-xs">{name as string}</td>
                      <td className="px-3 py-2 text-right text-xs text-gray-600">{tons as number} tons</td>
                      <td className="px-3 py-2 text-right text-xs text-gray-600">TZS 20,000</td>
                      <td className="px-3 py-2 text-right text-xs font-semibold text-gray-900">{fmt((tons as number) * 20000)}</td>
                      <td className="px-3 py-2 text-right text-xs font-semibold text-gray-900">{fmt((tons as number) * 50000)}</td>
                      <td className="px-3 py-2 text-right text-xs font-semibold text-gray-900">{fmt((tons as number) * 60000)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><FileText className="w-5 h-5 text-brand-600" /> Quote-Level Profit Calculator</h2>
              <p className="text-xs text-gray-500 mb-4">Select products and quantities to simulate quote profitability.</p>
              <ItemizedProfitCalc zone={selectedZone} />
            </div>
          </div>
        )}
      </main>
    </div>
    </>
  );
}

function ItemizedProfitCalc({ zone }: { zone: PricingZone }) {
  const zoneData = buildZonePricing().find(z => z.zoneId === zone);
  const [items, setItems] = useState<{ productId: string; qty: number }[]>([]);

  const addItem = () => {
    if (!zoneData) return;
    const first = zoneData.products[0];
    setItems(prev => [...prev, { productId: first.productId, qty: 1 }]);
  };

  const updateItem = (index: number, field: 'productId' | 'qty', value: string | number) => {
    setItems(prev => prev.map((item, i) => i === index ? { ...item, [field]: field === 'qty' ? +value : value } : item));
  };

  const removeItem = (index: number) => setItems(prev => prev.filter((_, i) => i !== index));

  const report = generateQuoteProfitReport(zone, items.map(i => ({ productId: i.productId as any, quantity: i.qty })));

  return (
    <div>
      <button onClick={addItem} className="text-xs bg-brand-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-brand-700 mb-4">+ Add Item</button>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3 mb-2">
          <select value={item.productId} onChange={e => updateItem(i, 'productId', e.target.value)}
            className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500">
            {zoneData?.products.map(p => <option key={p.productId} value={p.productId}>{p.productName}</option>)}
          </select>
          <input type="number" value={item.qty} onChange={e => updateItem(i, 'qty', e.target.value)}
            className="w-24 text-right bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500" min={1} />
          <button onClick={() => removeItem(i)} className="text-xs text-red-500 hover:text-red-700">Remove</button>
        </div>
      ))}
      {items.length > 0 && (
        <div className="mt-4 bg-gray-50 rounded-xl border border-gray-200 p-4">
          <h4 className="font-bold text-gray-900 text-sm mb-3">Quote Profit Summary</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
            <div className="bg-white rounded-lg p-3 border border-gray-100"><span className="text-gray-500 block">Total Cost</span><span className="font-bold text-gray-900">{fmt(report.totalCost)}</span></div>
            <div className="bg-white rounded-lg p-3 border border-gray-100"><span className="text-gray-500 block">Total Transport</span><span className="font-bold text-gray-900">{fmt(report.totalTransport)}</span></div>
            <div className="bg-white rounded-lg p-3 border border-gray-100"><span className="text-gray-500 block">Total Selling</span><span className="font-bold text-gray-900">{fmt(report.totalSelling)}</span></div>
            <div className="bg-white rounded-lg p-3 border border-gray-100"><span className="text-gray-500 block">Total Profit</span><span className="font-bold text-green-600">{fmt(report.totalProfit)}</span></div>
            <div className="bg-white rounded-lg p-3 border border-gray-100"><span className="text-gray-500 block">Avg Margin</span><span className="font-bold text-brand-600">{report.averageMarginPercent}%</span></div>
          </div>
        </div>
      )}
    </div>
  );
}
