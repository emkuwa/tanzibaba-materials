import { Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../types';

const prisma = new PrismaClient();

export async function getSuppliers(req: AuthRequest, res: Response): Promise<void> {
  try {
    const { status, search, page = '1', limit = '20' } = req.query;
    const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
    const take = parseInt(limit as string);

    const where: any = {};
    if (status) where.status = status;
    if (search) {
      where.OR = [
        { companyName: { contains: search as string, mode: 'insensitive' } },
        { contactPerson: { contains: search as string, mode: 'insensitive' } },
        { phoneNumber: { contains: search as string } },
      ];
    }

    const [suppliers, total] = await Promise.all([
      prisma.supplier.findMany({
        where,
        include: { coverageAreas: true, pricings: true, user: { select: { email: true } } },
        orderBy: { createdAt: 'desc' },
        skip,
        take,
      }),
      prisma.supplier.count({ where }),
    ]);

    res.json({
      suppliers,
      pagination: { page: parseInt(page as string), limit: take, total, pages: Math.ceil(total / take) },
    });
  } catch (error) {
    console.error('GetSuppliers error:', error);
    res.status(500).json({ error: 'Failed to fetch suppliers' });
  }
}

export async function getSupplierById(req: AuthRequest, res: Response): Promise<void> {
  try {
    const id = req.params.id as string;
    const supplier = await prisma.supplier.findUnique({
      where: { id },
      include: { coverageAreas: true, pricings: true, user: { select: { email: true } } },
    });
    if (!supplier) {
      res.status(404).json({ error: 'Supplier not found' });
      return;
    }
    res.json(supplier);
  } catch (error) {
    console.error('GetSupplierById error:', error);
    res.status(500).json({ error: 'Failed to fetch supplier' });
  }
}

export async function createSupplier(req: AuthRequest, res: Response): Promise<void> {
  try {
    const { email, password, companyName, contactPerson, phoneNumber, ...data } = req.body;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      res.status(400).json({ error: 'Email already in use' });
      return;
    }

    const bcrypt = require('bcryptjs');
    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: { email, passwordHash, role: 'SUPPLIER' },
    });

    const supplier = await prisma.supplier.create({
      data: {
        userId: user.id,
        companyName,
        contactPerson,
        phoneNumber,
        email,
        latitude: data.latitude,
        longitude: data.longitude,
        capacity: data.capacity || 0,
        reliabilityScore: data.reliabilityScore || 0,
        status: data.status || 'ACTIVE',
      },
    });

    if (data.coverageAreas) {
      for (const district of data.coverageAreas) {
        await prisma.supplierCoverage.create({
          data: { supplierId: supplier.id, district },
        });
      }
    }

    if (data.pricings) {
      for (const pricing of data.pricings) {
        await prisma.supplierPricing.create({
          data: { supplierId: supplier.id, ...pricing },
        });
      }
    }

    res.status(201).json(supplier);
  } catch (error) {
    console.error('CreateSupplier error:', error);
    res.status(500).json({ error: 'Failed to create supplier' });
  }
}

export async function updateSupplier(req: AuthRequest, res: Response): Promise<void> {
  try {
    const id = req.params.id as string;
    const supplier = await prisma.supplier.update({
      where: { id },
      data: req.body,
    });
    res.json(supplier);
  } catch (error) {
    console.error('UpdateSupplier error:', error);
    res.status(500).json({ error: 'Failed to update supplier' });
  }
}

export async function matchSupplier(req: AuthRequest, res: Response): Promise<void> {
  try {
    const { quoteId } = req.body;
    const quote = await prisma.quote.findUnique({ where: { id: quoteId } });
    if (!quote) {
      res.status(404).json({ error: 'Quote not found' });
      return;
    }

    const supplier = await prisma.supplier.findFirst({
      where: { status: 'ACTIVE' },
      include: { pricings: true, coverageAreas: true },
    });

    if (!supplier) {
      res.status(404).json({ error: 'No supplier available' });
      return;
    }

    const order = await prisma.order.create({
      data: {
        quoteId: quote.id,
        supplierId: supplier.id,
        status: 'NEW',
      },
    });

    await prisma.quote.update({
      where: { id: quoteId },
      data: { status: 'SUPPLIER_ASSIGNED' },
    });

    res.json({ order, supplier: { id: supplier.id, companyName: supplier.companyName } });
  } catch (error) {
    console.error('MatchSupplier error:', error);
    res.status(500).json({ error: 'Failed to assign supplier' });
  }
}
