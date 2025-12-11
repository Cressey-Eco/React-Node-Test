import { Router } from 'express';
import {
    getOrders,
    getOrderById,
    createOrder,
    updateOrderStatus,
} from '../controllers/orderController';

export const ordersRouter = Router();

// Get all orders
ordersRouter.get('/', getOrders);

// Get single order by ID
ordersRouter.get('/:id', getOrderById);

// Create new order
ordersRouter.post('/', createOrder);

// Update order status
ordersRouter.patch('/:id/status', updateOrderStatus);

