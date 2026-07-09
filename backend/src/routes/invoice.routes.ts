import { Router } from 'express';
import { generateInvoicePdf } from '../controllers/invoice.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

router.get('/:id/pdf', authenticate, generateInvoicePdf);

export default router;
