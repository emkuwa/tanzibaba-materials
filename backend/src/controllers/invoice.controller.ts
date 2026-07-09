import { Response } from 'express';
import { PrismaClient } from '@prisma/client';
import PDFDocument from 'pdfkit';
import { AuthRequest } from '../types';

const prisma = new PrismaClient();

export async function generateInvoicePdf(req: AuthRequest, res: Response): Promise<void> {
  try {
    const id = req.params.id as string;
    const quote = await prisma.quote.findUnique({
      where: { id },
      include: {
        customer: true,
        invoices: true,
        items: true,
      },
    });

    if (!quote) {
      res.status(404).json({ error: 'Quote not found' });
      return;
    }

    const invoice = quote.invoices[0];
    if (!invoice) {
      res.status(404).json({ error: 'Invoice not found' });
      return;
    }

    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=invoice-${quote.quoteNumber}.pdf`);
    doc.pipe(res);

    doc.fontSize(24).font('Helvetica-Bold').text('TANZIBABA', { align: 'center' });
    doc.fontSize(10).font('Helvetica').text('Supplier Network Platform', { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(8).text('Dar es Salaam, Tanzania', { align: 'center' });
    doc.moveDown(1);

    doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke();
    doc.moveDown(1);

    doc.fontSize(16).font('Helvetica-Bold').text('INVOICE', { align: 'center' });
    doc.moveDown(0.5);

    doc.fontSize(10).font('Helvetica');
    doc.text(`Invoice Number: ${invoice.invoiceNumber}`);
    doc.text(`Quote Number: ${quote.quoteNumber}`);
    doc.text(`Issue Date: ${invoice.issuedAt.toLocaleDateString('en-TZ')}`);
    doc.moveDown(1);

    doc.font('Helvetica-Bold').text('Customer Information');
    doc.font('Helvetica');
    doc.text(`Name: ${quote.customer.fullName}`);
    doc.text(`Phone: ${quote.customer.phoneNumber}`);
    doc.text(`WhatsApp: ${quote.customer.whatsappNumber}`);
    doc.moveDown(1);

    doc.font('Helvetica-Bold').text('Project Information');
    doc.font('Helvetica');
    doc.text(`Project Type: ${quote.projectType}`);
    doc.text(`Location: ${quote.siteLocation}`);
    doc.text(`District: ${quote.district}`);
    doc.text(`Concrete Grade: ${quote.concreteGrade}`);
    doc.text(`Quantity: ${quote.quantityM3} m³`);
    doc.text(`Delivery Date: ${quote.deliveryDate.toLocaleDateString('en-TZ')}`);
    doc.text(`Pump Required: ${quote.pumpRequired ? 'Yes' : 'No'}`);
    doc.moveDown(1);

    doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke();
    doc.moveDown(0.5);

    doc.font('Helvetica-Bold').text('Pricing Breakdown');
    doc.moveDown(0.5);

    const leftX = 50;
    const rightX = 500;
    const lineHeight = 18;

    doc.font('Helvetica');
    let y = doc.y;
    doc.text('Concrete Cost', leftX, y);
    doc.text(`TZS ${(quote.concreteCost || 0).toLocaleString('en-TZ')}`, rightX, y, { align: 'right' });
    y += lineHeight;

    doc.text('Delivery Cost', leftX, y);
    doc.text(`TZS ${(quote.deliveryCost || 0).toLocaleString('en-TZ')}`, rightX, y, { align: 'right' });
    y += lineHeight;

    if (quote.pumpCost && quote.pumpCost > 0) {
      doc.text('Pump Cost', leftX, y);
      doc.text(`TZS ${quote.pumpCost.toLocaleString('en-TZ')}`, rightX, y, { align: 'right' });
      y += lineHeight;
    }

    doc.moveTo(50, y + 5).lineTo(545, y + 5).stroke();
    y += lineHeight + 5;

    doc.font('Helvetica-Bold');
    doc.text('Total Price', leftX, y);
    doc.text(`TZS ${(quote.totalPrice || 0).toLocaleString('en-TZ')}`, rightX, y, { align: 'right' });
    doc.moveDown(2);

    doc.fontSize(8).font('Helvetica').fillColor('#666');
    doc.text('Tanzibaba — Premium Ready-Mix Concrete | Dar es Salaam, Tanzania', { align: 'center' });
    doc.text(`Contact: 0716002790 | info@tanzibaba.co.tz`, { align: 'center' });

    doc.end();
  } catch (error) {
    console.error('GenerateInvoicePdf error:', error);
    res.status(500).json({ error: 'Failed to generate invoice PDF' });
  }
}
