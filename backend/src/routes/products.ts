import { Router } from 'express';
import { getProducts, getProductById } from '../controllers/productController';

export const productsRouter = Router();

// Get all products with optional filters
productsRouter.get('/', getProducts);

// Get single product by ID
productsRouter.get('/:id', getProductById);

