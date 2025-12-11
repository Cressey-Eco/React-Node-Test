import { Router } from 'express';
import { initializeDatabase } from '../controllers/initController';

export const initRouter = Router();

initRouter.post('/', initializeDatabase);

