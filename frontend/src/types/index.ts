export type UserRole = 'ADMIN' | 'SUPPLIER' | 'CUSTOMER';

export type QuoteStatus =
  | 'SUBMITTED'
  | 'QUOTED'
  | 'ACCEPTED'
  | 'SUPPLIER_ASSIGNED'
  | 'SUPPLIER_CONTACTED'
  | 'DELIVERED'
  | 'CANCELLED';

export type OrderStatus =
  | 'NEW'
  | 'ACCEPTED'
  | 'IN_PROGRESS'
  | 'DELIVERED'
  | 'CANCELLED';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  customer?: Customer;
  supplier?: Supplier;
}

export interface Customer {
  id: string;
  userId: string;
  fullName: string;
  phoneNumber: string;
  whatsappNumber: string;
}

export interface Supplier {
  id: string;
  userId: string;
  companyName: string;
  contactPerson: string;
  phoneNumber: string;
  email: string;
  latitude?: number;
  longitude?: number;
  capacity: number;
  reliabilityScore: number;
  status: string;
  coverageAreas: SupplierCoverage[];
  pricings: SupplierPricing[];
}

export interface SupplierCoverage {
  id: string;
  supplierId: string;
  district: string;
}

export interface SupplierPricing {
  id: string;
  supplierId: string;
  grade: string;
  pricePerM3: number;
  deliveryFee: number;
  pumpFee: number;
}

export interface Quote {
  id: string;
  quoteNumber: string;
  customerId: string;
  productCategory?: string;
  projectType: string;
  siteLocation: string;
  district: string;
  latitude?: number;
  longitude?: number;
  concreteGrade?: string;
  quantityM3?: number;
  length?: number;
  width?: number;
  thickness?: number;
  deliveryDate: string;
  pumpRequired: boolean;
  concreteCost?: number;
  deliveryCost?: number;
  pumpCost?: number;
  totalPrice?: number;
  status: QuoteStatus;
  notes?: string;
  createdAt: string;
  customer?: Customer;
  order?: Order;
  invoices?: Invoice[];
  items?: QuoteItem[];
}

export interface QuoteItem {
  id: string;
  quoteId: string;
  grade: string;
  quantity: number;
  unitPrice: number;
  total: number;
  gravelSize?: string;
  gravelUseCase?: string;
  gravelUnit?: string;
}

export interface GravelItemInput {
  gravelSize: string;
  gravelUseCase: string;
  quantity: number;
  gravelUnit: string;
}

export interface Order {
  id: string;
  quoteId: string;
  supplierId: string;
  status: OrderStatus;
  notes?: string;
  acceptedAt?: string;
  deliveredAt?: string;
  createdAt: string;
  quote?: Quote;
  supplier?: Supplier;
  statusUpdates?: OrderStatusUpdate[];
}

export interface OrderStatusUpdate {
  id: string;
  orderId: string;
  status: OrderStatus;
  note?: string;
  createdAt: string;
}

export interface Invoice {
  id: string;
  quoteId: string;
  invoiceNumber: string;
  pdfUrl?: string;
  issuedAt: string;
}

export interface DashboardStats {
  totalLeads: number;
  quotesGenerated: number;
  acceptedQuotes: number;
  supplierAssigned: number;
  deliveredOrders: number;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}
