const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

async function fetchApi(endpoint: string, options: RequestInit = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...((options.headers as Record<string, string>) || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || `HTTP ${res.status}`);
  }

  return res.json();
}

export const api = {
  auth: {
    register: (data: any) => fetchApi('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
    login: (data: { email: string; password: string }) => fetchApi('/auth/login', { method: 'POST', body: JSON.stringify(data) }),
    me: () => fetchApi('/auth/me'),
  },
  quotes: {
    request: (data: any) => fetchApi('/quotes', { method: 'POST', body: JSON.stringify(data) }),
    getAll: (params?: string) => fetchApi(`/quotes${params || ''}`),
    getById: (id: string) => fetchApi(`/quotes/${id}`),
    accept: (id: string) => fetchApi(`/quotes/${id}/accept`, { method: 'PATCH' }),
    updateStatus: (id: string, data: any) => fetchApi(`/quotes/${id}/status`, { method: 'PATCH', body: JSON.stringify(data) }),
    update: (id: string, data: any) => fetchApi(`/quotes/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  },
  suppliers: {
    getAll: (params?: string) => fetchApi(`/suppliers${params || ''}`),
    getById: (id: string) => fetchApi(`/suppliers/${id}`),
    create: (data: any) => fetchApi('/suppliers', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: string, data: any) => fetchApi(`/suppliers/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    match: (quoteId: string) => fetchApi('/suppliers/match', { method: 'POST', body: JSON.stringify({ quoteId }) }),
  },
  orders: {
    getAll: (params?: string) => fetchApi(`/orders${params || ''}`),
    getById: (id: string) => fetchApi(`/orders/${id}`),
    updateStatus: (id: string, data: { status: string; note?: string }) => fetchApi(`/orders/${id}/status`, { method: 'PATCH', body: JSON.stringify(data) }),
    stats: () => fetchApi('/orders/stats'),
  },
  invoices: {
    getPdf: (quoteId: string) => `${API_URL}/invoices/${quoteId}/pdf`,
  },
};
