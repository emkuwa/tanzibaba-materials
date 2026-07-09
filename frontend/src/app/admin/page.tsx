'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Users, FileText, CheckCircle, Truck, Package, LogOut, Search, Plus, Download } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { api } from '@/lib/api';
import { DashboardStats, Quote, Supplier } from '@/types';

export default function AdminPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'quotes' | 'suppliers'>('dashboard');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    if (!loading && (!user || user.role !== 'ADMIN')) {
      router.push('/login');
      return;
    }
    if (user) {
      loadData();
    }
  }, [user, loading, router, activeTab]);

  const loadData = async () => {
    try {
      if (activeTab === 'dashboard') {
        const s = await api.orders.stats();
        setStats(s);
      }
      if (activeTab === 'quotes') {
        const params = new URLSearchParams();
        if (search) params.set('search', search);
        if (statusFilter) params.set('status', statusFilter);
        const res = await api.quotes.getAll(`?${params.toString()}`);
        setQuotes(res.quotes);
      }
      if (activeTab === 'suppliers') {
        const params = new URLSearchParams();
        if (search) params.set('search', search);
        const res = await api.suppliers.getAll(`?${params.toString()}`);
        setSuppliers(res.suppliers);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleMatchSupplier = async (quoteId: string) => {
    if (!confirm('Assign this quote for processing?')) return;
    try {
      await api.suppliers.match(quoteId);
      loadData();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleUpdateStatus = async (quoteId: string, status: string) => {
    try {
      await api.quotes.updateStatus(quoteId, { status });
      loadData();
    } catch (err: any) {
      alert(err.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-brand-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  const statCards = stats ? [
    { label: 'Total Leads', value: stats.totalLeads, icon: Users, color: 'bg-blue-500' },
    { label: 'Quotes Generated', value: stats.quotesGenerated, icon: FileText, color: 'bg-purple-500' },
    { label: 'Accepted', value: stats.acceptedQuotes, icon: CheckCircle, color: 'bg-green-500' },
    { label: 'Supplier Assigned', value: stats.supplierAssigned, icon: Truck, color: 'bg-orange-500' },
    { label: 'Delivered', value: stats.deliveredOrders, icon: Package, color: 'bg-brand-600' },
  ] : [];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-lg text-gray-900">Admin</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Admin</span>
            <button onClick={logout} className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-600">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6">
          {(['dashboard', 'quotes', 'suppliers'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 border-b-2 text-sm font-medium transition-colors ${
                activeTab === tab ? 'border-brand-600 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && stats && (
          <>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {statCards.map((card) => (
                <div key={card.label} className="card text-center">
                  <div className={`w-10 h-10 ${card.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                  <p className="text-xs text-gray-500">{card.label}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'quotes' && (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Quotes & Leads</h1>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="input-field pl-10 py-2 text-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && loadData()}
                  />
                </div>
                <select className="input-field py-2 text-sm w-40" value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setTimeout(loadData, 0); }}>
                  <option value="">All Status</option>
                  <option value="SUBMITTED">Submitted</option>
                  <option value="QUOTED">Quoted</option>
                  <option value="ACCEPTED">Accepted</option>
                  <option value="SUPPLIER_ASSIGNED">Supplier Assigned</option>
                  <option value="SUPPLIER_CONTACTED">Supplier Contacted</option>
                  <option value="DELIVERED">Delivered</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {quotes.map((quote) => (
                <div key={quote.id} className="card">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-sm text-brand-600 font-bold">{quote.quoteNumber}</span>
                        <span className={`status-badge text-xs ${
                          quote.status === 'DELIVERED' ? 'bg-green-100 text-green-700' :
                          quote.status === 'ACCEPTED' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>{quote.status.replace('_', ' ')}</span>
                      </div>
                      <p className="font-medium text-gray-900">{quote.customer?.fullName} — {quote.projectType}</p>
                      <p className="text-xs text-gray-500">
                        {quote.productCategory === 'gravel-aggregates' ? 'Gravel / Aggregates' : quote.concreteGrade || 'Concrete'}
                        {quote.quantityM3 ? ` | ${quote.quantityM3} m³` : ''}
                        {quote.items && quote.items.length > 0 ? ` | ${quote.items.length} item(s)` : ''}
                        {' | '}{quote.district} | {new Date(quote.deliveryDate).toLocaleDateString('en-TZ')}
                      </p>
                      {(quote.totalPrice || 0) > 0 && <p className="text-sm font-bold text-brand-600 mt-1">TZS {quote.totalPrice!.toLocaleString('en-TZ')}</p>}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {quote.status === 'QUOTED' && (
                        <button onClick={() => handleUpdateStatus(quote.id, 'ACCEPTED')} className="btn-primary text-xs py-1.5 px-3">Mark Accepted</button>
                      )}
                      {quote.status === 'ACCEPTED' && (
                        <button onClick={() => handleMatchSupplier(quote.id)} className="btn-primary text-xs py-1.5 px-3">Match Supplier</button>
                      )}
                      {quote.invoices && quote.invoices.length > 0 && (
                        <a href={api.invoices.getPdf(quote.id)} target="_blank" className="btn-outline text-xs py-1.5 px-3 flex items-center gap-1">
                          <Download className="w-3 h-3" /> PDF
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {quotes.length === 0 && (
                <div className="card text-center py-8 text-gray-500">No quotes found</div>
              )}
            </div>
          </>
        )}

        {activeTab === 'suppliers' && (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Suppliers</h1>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search suppliers..."
                    className="input-field pl-10 py-2 text-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && loadData()}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {suppliers.map((supplier) => (
                <div key={supplier.id} className="card">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{supplier.companyName}</h3>
                      <p className="text-sm text-gray-500">{supplier.contactPerson}</p>
                    </div>
                    <span className={`status-badge text-xs ${
                      supplier.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>{supplier.status}</span>
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Phone: {supplier.phoneNumber}</p>
                    <p>Email: {supplier.email}</p>
                    <p>Capacity: {supplier.capacity} m³/day</p>
                    <p>Reliability: {supplier.reliabilityScore}/5</p>
                    {supplier.coverageAreas && (
                      <p>Coverage: {supplier.coverageAreas.map((c) => c.district).join(', ')}</p>
                    )}
                    {supplier.pricings && (
                      <p>Grades: {supplier.pricings.map((p) => p.grade).join(', ')}</p>
                    )}
                  </div>
                </div>
              ))}
              {suppliers.length === 0 && (
                <div className="col-span-full card text-center py-8 text-gray-500">No suppliers found</div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
    </>
  );
}
