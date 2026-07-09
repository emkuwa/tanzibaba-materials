import { Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../types';
import {
  generateQuoteNumber,
  generateInvoiceNumber,
  calculateVolume,
  getBasePricePerM3,
  calculateDeliveryCost,
  calculatePumpCost,
} from '../utils/helpers';

const prisma = new PrismaClient();

export async function requestQuote(req: AuthRequest, res: Response): Promise<void> {
  try {
    const {
      fullName, phoneNumber, whatsappNumber,
      productCategory, projectType, projectStage, siteLocation, district, latitude, longitude,
      concreteGrade, quantityM3, length, width, thickness,
      gravelItems, deliveryDate, pumpRequired, specialRequirements,
    } = req.body;

    const isConcrete = !productCategory || productCategory === 'ready-mix-concrete' || productCategory === 'multiple';
    const isGravel = productCategory === 'gravel-aggregates';

    let concreteCost = 0;
    let deliveryCost = 0;
    let pumpCost = 0;
    let totalPrice = 0;
    let volume = 0;

    if (isConcrete && (concreteGrade || quantityM3)) {
      volume = quantityM3 || calculateVolume(length, width, thickness) || 0;
      if (volume <= 0) {
        res.status(400).json({ error: 'Quantity or dimensions required for concrete' });
        return;
      }
      const basePrice = getBasePricePerM3(concreteGrade || 'C20');
      concreteCost = volume * basePrice;
      const estimatedDistance = 15;
      deliveryCost = calculateDeliveryCost(estimatedDistance, volume);
      pumpCost = pumpRequired ? calculatePumpCost(volume) : 0;
      totalPrice = concreteCost + deliveryCost + pumpCost;
    }

    let customer = await prisma.customer.findFirst({
      where: { OR: [{ phoneNumber }, { whatsappNumber }] },
    });

    if (!customer && req.user) {
      customer = await prisma.customer.findUnique({
        where: { userId: req.user.userId },
      });
    }

    if (!customer && req.user) {
      customer = await prisma.customer.create({
        data: {
          userId: req.user.userId,
          fullName,
          phoneNumber,
          whatsappNumber,
        },
      });
    }

    if (!customer) {
      const user = await prisma.user.create({
        data: {
          email: `${whatsappNumber}@guest.tanzibaba.co.tz`,
          passwordHash: '',
          role: 'CUSTOMER',
        },
      });
      customer = await prisma.customer.create({
        data: {
          userId: user.id,
          fullName,
          phoneNumber,
          whatsappNumber,
        },
      });
    }

    const quote = await prisma.quote.create({
      data: {
        quoteNumber: generateQuoteNumber(),
        customerId: customer.id,
        productCategory,
        projectType,
        siteLocation,
        district,
        latitude,
        longitude,
        concreteGrade: concreteGrade || null,
        quantityM3: volume > 0 ? volume : null,
        length,
        width,
        thickness,
        deliveryDate: new Date(deliveryDate),
        pumpRequired,
        concreteCost: concreteCost > 0 ? concreteCost : null,
        deliveryCost: deliveryCost > 0 ? deliveryCost : null,
        pumpCost: pumpCost > 0 ? pumpCost : null,
        totalPrice: totalPrice > 0 ? totalPrice : null,
        status: 'QUOTED',
        notes: specialRequirements || null,
      },
    });

    if (isConcrete && concreteGrade && volume > 0) {
      const basePrice = getBasePricePerM3(concreteGrade);
      await prisma.quoteItem.create({
        data: {
          quoteId: quote.id,
          grade: concreteGrade,
          quantity: volume,
          unitPrice: basePrice,
          total: concreteCost,
        },
      });
    }

    if (isGravel && gravelItems && gravelItems.length > 0) {
      for (const item of gravelItems) {
        await prisma.quoteItem.create({
          data: {
            quoteId: quote.id,
            grade: item.gravelSize || '',
            quantity: item.quantity,
            unitPrice: 0,
            total: 0,
            gravelSize: item.gravelSize,
            gravelUseCase: item.gravelUseCase,
            gravelUnit: item.gravelUnit,
          },
        });
      }
    }

    const pricing: Record<string, any> = {};
    if (concreteCost > 0) {
      pricing.concreteCost = concreteCost;
      pricing.deliveryCost = deliveryCost;
      pricing.pumpCost = pumpCost;
      pricing.totalPrice = totalPrice;
    }

    res.status(201).json({
      quote,
      pricing: Object.keys(pricing).length > 0 ? pricing : { totalPrice: 0 },
      disclaimer: isGravel
        ? 'Tanzibaba — Gravel / Aggregates Supply. Supplier pricing will be provided upon review of your requirements.'
        : 'Tanzibaba — Premium Ready-Mix Concrete | Washed sand technology. Direct pricing.',
    });
  } catch (error) {
    console.error('RequestQuote error:', error);
    res.status(500).json({ error: 'Failed to create quote' });
  }
}

export async function acceptQuote(req: AuthRequest, res: Response): Promise<void> {
  try {
    const id = req.params.id as string;
    const quote = await prisma.quote.update({
      where: { id },
      data: { status: 'ACCEPTED' },
    });

    await prisma.invoice.create({
      data: {
        quoteId: quote.id,
        invoiceNumber: generateInvoiceNumber(),
      },
    });

    res.json(quote);
  } catch (error) {
    console.error('AcceptQuote error:', error);
    res.status(500).json({ error: 'Failed to accept quote' });
  }
}

export async function getQuotes(req: AuthRequest, res: Response): Promise<void> {
  try {
    const { status, search, page = '1', limit = '20' } = req.query;
    const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
    const take = parseInt(limit as string);

    const where: any = {};
    if (status) where.status = status;
    if (search) {
      where.OR = [
        { quoteNumber: { contains: search as string, mode: 'insensitive' } },
        { customer: { fullName: { contains: search as string, mode: 'insensitive' } } },
        { customer: { phoneNumber: { contains: search as string } } },
      ];
    }

    if (req.user?.role === 'CUSTOMER') {
      const customer = await prisma.customer.findUnique({ where: { userId: req.user.userId } });
      if (customer) where.customerId = customer.id;
    }

    const [quotes, total] = await Promise.all([
      prisma.quote.findMany({
        where,
        include: {
          customer: true,
          order: { include: { supplier: true } },
          invoices: true,
          items: true,
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take,
      }),
      prisma.quote.count({ where }),
    ]);

    res.json({
      quotes,
      pagination: {
        page: parseInt(page as string),
        limit: take,
        total,
        pages: Math.ceil(total / take),
      },
    });
  } catch (error) {
    console.error('GetQuotes error:', error);
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
}

export async function getQuoteById(req: AuthRequest, res: Response): Promise<void> {
  try {
    const id = req.params.id as string;
    const quote = await prisma.quote.findUnique({
      where: { id },
      include: {
        customer: true,
        order: { include: { supplier: true, statusUpdates: true } },
        invoices: true,
        items: true,
      },
    });
    if (!quote) {
      res.status(404).json({ error: 'Quote not found' });
      return;
    }
    res.json(quote);
  } catch (error) {
    console.error('GetQuoteById error:', error);
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
}

export async function updateQuoteStatus(req: AuthRequest, res: Response): Promise<void> {
  try {
    const id = req.params.id as string;
    const { status, notes } = req.body;
    const quote = await prisma.quote.update({
      where: { id },
      data: { status, notes },
    });
    res.json(quote);
  } catch (error) {
    console.error('UpdateQuoteStatus error:', error);
    res.status(500).json({ error: 'Failed to update quote' });
  }
}

export async function updateQuote(req: AuthRequest, res: Response): Promise<void> {
  try {
    const id = req.params.id as string;
    const data = req.body;
    const quote = await prisma.quote.update({ where: { id }, data });
    res.json(quote);
  } catch (error) {
    console.error('UpdateQuote error:', error);
    res.status(500).json({ error: 'Failed to update quote' });
  }
}
