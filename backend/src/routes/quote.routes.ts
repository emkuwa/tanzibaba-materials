import { Router } from 'express';
import {
  requestQuote,
  acceptQuote,
  getQuotes,
  getQuoteById,
  updateQuoteStatus,
  updateQuote,
} from '../controllers/quote.controller';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.post('/', requestQuote);
router.get('/', authenticate, getQuotes);
router.get('/:id', authenticate, getQuoteById);
router.patch('/:id/accept', authenticate, acceptQuote);
router.patch('/:id/status', authenticate, authorize('ADMIN'), updateQuoteStatus);
router.put('/:id', authenticate, authorize('ADMIN'), updateQuote);

export default router;
