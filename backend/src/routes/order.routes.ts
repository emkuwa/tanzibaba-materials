import { Router } from 'express';
import {
  getOrders,
  getOrderById,
  updateOrderStatus,
  getDashboardStats,
} from '../controllers/order.controller';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.get('/stats', authenticate, authorize('ADMIN'), getDashboardStats);
router.get('/', authenticate, getOrders);
router.get('/:id', authenticate, getOrderById);
router.patch('/:id/status', authenticate, updateOrderStatus);

export default router;
