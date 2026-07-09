import { Router } from 'express';
import {
  getSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  matchSupplier,
} from '../controllers/supplier.controller';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.get('/', authenticate, getSuppliers);
router.get('/:id', authenticate, getSupplierById);
router.post('/', authenticate, authorize('ADMIN'), createSupplier);
router.put('/:id', authenticate, authorize('ADMIN'), updateSupplier);
router.post('/match', authenticate, authorize('ADMIN'), matchSupplier);

export default router;
