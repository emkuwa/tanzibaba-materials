import { Response } from 'express';
import { PrismaClient, OrderStatus } from '@prisma/client';
import { AuthRequest } from '../types';

const prisma = new PrismaClient();

export async function getOrders(req: AuthRequest, res: Response): Promise<void> {
  try {
    const { status, page = '1', limit = '20' } = req.query;
    const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
    const take = parseInt(limit as string);

    const where: any = {};
    if (status) where.status = status;

    if (req.user?.role === 'SUPPLIER') {
      const supplier = await prisma.supplier.findUnique({ where: { userId: req.user.userId } });
      if (supplier) where.supplierId = supplier.id;
    }

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where,
        include: {
          quote: { include: { customer: true } },
          supplier: true,
          statusUpdates: true,
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take,
      }),
      prisma.order.count({ where }),
    ]);

    res.json({
      orders,
      pagination: { page: parseInt(page as string), limit: take, total, pages: Math.ceil(total / take) },
    });
  } catch (error) {
    console.error('GetOrders error:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
}

export async function getOrderById(req: AuthRequest, res: Response): Promise<void> {
  try {
    const id = req.params.id as string;
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        quote: { include: { customer: true } },
        supplier: true,
        statusUpdates: true,
      },
    });
    if (!order) {
      res.status(404).json({ error: 'Order not found' });
      return;
    }
    res.json(order);
  } catch (error) {
    console.error('GetOrderById error:', error);
    res.status(500).json({ error: 'Failed to fetch order' });
  }
}

export async function updateOrderStatus(req: AuthRequest, res: Response): Promise<void> {
  try {
    const id = req.params.id as string;
    const { status, note } = req.body;
    const order = await prisma.order.update({
      where: { id },
      data: {
        status,
        ...(status === 'ACCEPTED' ? { acceptedAt: new Date() } : {}),
        ...(status === 'DELIVERED' ? { deliveredAt: new Date() } : {}),
      },
    });

    await prisma.orderStatusUpdate.create({
      data: { orderId: id, status, note },
    });

    if (status === 'DELIVERED') {
      await prisma.quote.update({
        where: { id: order.quoteId },
        data: { status: 'DELIVERED' },
      });
    }

    if (status === 'ACCEPTED') {
      await prisma.quote.update({
        where: { id: order.quoteId },
        data: { status: 'SUPPLIER_CONTACTED' },
      });
    }

    res.json(order);
  } catch (error) {
    console.error('UpdateOrderStatus error:', error);
    res.status(500).json({ error: 'Failed to update order status' });
  }
}

export async function getDashboardStats(req: AuthRequest, res: Response): Promise<void> {
  try {
    const [
      totalLeads,
      quotesGenerated,
      acceptedQuotes,
      supplierAssigned,
      deliveredOrders,
    ] = await Promise.all([
      prisma.quote.count(),
      prisma.quote.count({ where: { status: 'QUOTED' } }),
      prisma.quote.count({ where: { status: 'ACCEPTED' } }),
      prisma.quote.count({ where: { status: 'SUPPLIER_ASSIGNED' } }),
      prisma.quote.count({ where: { status: 'DELIVERED' } }),
    ]);

    res.json({
      totalLeads,
      quotesGenerated,
      acceptedQuotes,
      supplierAssigned,
      deliveredOrders,
    });
  } catch (error) {
    console.error('GetDashboardStats error:', error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
}
