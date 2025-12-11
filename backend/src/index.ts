import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { initRouter } from './routes/init';
import { productsRouter } from './routes/products';
import { usersRouter } from './routes/users';
import { ordersRouter } from './routes/orders';
import { syncOrderServiceConfig } from './controllers/orderController';
import { initializeExternalServiceConfig } from './controllers/initController';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/eric-tech-assessment')
  .then(() => {
    console.log('✅ Connected to MongoDB');
    
    // Sync order service configuration on startup
    syncOrderServiceConfig().catch(() => {
      // Silently handle errors - order service is optional
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
  });

// Routes
app.use('/api/init', initRouter);
app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/api/orders', ordersRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

