'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Package, CheckCircle, XCircle, Clock, Truck, LogOut, Phone, MapPin } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { api } from '@/lib/api';
import { Order } from '@/types';

export default function SupplierPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    if (!loading && (!user || user.role !== 'SUPPLIER')) {
      router.push('/login');
      return;
    }
    if (user) {
      loadOrders();
    }
  }, [user, loading, router]);

  const loadOrders = async () => {
    try {
      const res = await api.orders.getAll();
      setOrders(res.orders);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingOrders(false);
    }
  };

  const handleUpdateStatus = async (orderId: string, status: string, note?: string) => {
    try {
      await api.orders.updateStatus(orderId, { status, note });
      loadOrders();
    } catch (err: any) {
      alert(err.message);
    }
  };

  if (loading || loadingOrders) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-brand-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-lg text-gray-900">Supplier Portal</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{user?.email}</span>
            <button onClick={logout} className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-600">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Assigned Orders</h1>
            <p className="text-gray-500 text-sm">Manage your concrete delivery orders.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="flex items-center gap-1"><Package className="w-4 h-4" /> {orders.length} Orders</span>
          </div>
        </div>

        {orders.length === 0 ? (
          <div className="card text-center py-12">
            <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Orders Assigned</h3>
            <p className="text-gray-500">New orders will appear here once you are matched with a customer.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="card">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-sm text-brand-600 font-bold">{order.quote?.quoteNumber}</span>
                      <span className={`status-badge text-xs ${
                        order.status === 'NEW' ? 'bg-blue-100 text-blue-700' :
                        order.status === 'ACCEPTED' ? 'bg-green-100 text-green-700' :
                        order.status === 'IN_PROGRESS' ? 'bg-yellow-100 text-yellow-700' :
                        order.status === 'DELIVERED' ? 'bg-brand-100 text-brand-700' :
                        'bg-red-100 text-red-700'
                      }`}>{order.status.replace('_', ' ')}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">{order.quote?.projectType}</h3>
                    <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-500">
                      <span>{order.quote?.concreteGrade} | {order.quote?.quantityM3} m³</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {order.quote?.siteLocation}</span>
                      <span className="flex items-center gap-1"><CalendarIcon className="w-3 h-3" /> {order.quote?.deliveryDate ? new Date(order.quote.deliveryDate).toLocaleDateString('en-TZ') : ''}</span>
                    </div>
                    {order.quote?.totalPrice && (
                      <p className="text-lg font-bold text-brand-600 mt-1">TZS {order.quote.totalPrice.toLocaleString('en-TZ')}</p>
                    )}
                    {order.quote?.customer && (
                      <div className="flex items-center gap-4 mt-2 text-sm">
                        <span className="text-gray-700 font-medium">{order.quote.customer.fullName}</span>
                        <a href={`tel:${order.quote.customer.phoneNumber}`} className="flex items-center gap-1 text-brand-600 hover:underline">
                          <Phone className="w-3 h-3" /> {order.quote.customer.phoneNumber}
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {order.status === 'NEW' && (
                      <>
                        <button onClick={() => handleUpdateStatus(order.id, 'ACCEPTED', 'Order accepted')} className="btn-primary text-sm py-2 px-4 flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" /> Accept
                        </button>
                        <button onClick={() => handleUpdateStatus(order.id, 'CANCELLED', 'Order rejected')} className="btn-outline text-sm py-2 px-4 flex items-center gap-1 text-red-600 border-red-200 hover:bg-red-50">
                          <XCircle className="w-4 h-4" /> Reject
                        </button>
                      </>
                    )}
                    {order.status === 'ACCEPTED' && (
                      <button onClick={() => handleUpdateStatus(order.id, 'IN_PROGRESS', 'Delivery in progress')} className="btn-primary text-sm py-2 px-4 flex items-center gap-1">
                        <Truck className="w-4 h-4" /> In Progress
                      </button>
                    )}
                    {order.status === 'IN_PROGRESS' && (
                      <button onClick={() => handleUpdateStatus(order.id, 'DELIVERED', 'Order delivered')} className="btn-primary text-sm py-2 px-4 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" /> Mark Delivered
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}
