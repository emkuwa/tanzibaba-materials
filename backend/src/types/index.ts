import { Request } from 'express';

export interface AuthPayload {
  userId: string;
  email: string;
  role: 'ADMIN' | 'SUPPLIER' | 'CUSTOMER';
}

export interface AuthRequest extends Request {
  user?: AuthPayload;
}

export interface GravelItemInput {
  gravelSize: string;
  gravelUseCase: string;
  quantity: number;
  gravelUnit: string;
}

export interface QuoteInput {
  fullName: string;
  phoneNumber: string;
  whatsappNumber: string;
  productCategory?: string;
  projectType: string;
  projectStage?: string;
  siteLocation: string;
  district: string;
  latitude?: number;
  longitude?: number;
  concreteGrade?: string;
  quantityM3?: number;
  length?: number;
  width?: number;
  thickness?: number;
  gravelItems?: GravelItemInput[];
  deliveryDate: string;
  pumpRequired: boolean;
  specialRequirements?: string;
}

export interface QuotePricing {
  concreteCost: number;
  deliveryCost: number;
  pumpCost: number;
  totalPrice: number;
}

export interface SupplierMatch {
  supplierId: string;
  companyName: string;
  distance: number;
  score: number;
}
