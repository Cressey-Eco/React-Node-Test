# Assessment Task - Senior Full-Stack Engineer

## Overview

Welcome to the Eric Tech assessment project! This is a simplified e-commerce platform built with React, Node.js, TypeScript, and MongoDB. The backend is mostly implemented, and your task is to focus on **frontend development and API integration**.

## Project Structure

```
eric-tech/
├── backend/          # Node.js/Express/TypeScript API (mostly complete)
├── frontend/         # React/TypeScript frontend (needs implementation)
└── ASSESSMENT.md     # This file
```

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally or connection string)
- npm or yarn

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm run install:all
   ```

2. **Configure MongoDB:**
   - Create a `.env` file in the `backend` directory (copy from `env.example`)
   - Update `MONGODB_URI` with your MongoDB connection string
   - Default: `mongodb://localhost:27017/eric-tech-assessment`

3. **Start the backend:**
   ```bash
   npm run dev:backend
   ```
   The backend will run on `http://localhost:3001`

4. **Start the frontend:**
   ```bash
   npm run dev:frontend
   ```
   The frontend will run on `http://localhost:3000`

5. **Initialize the database:**
   - The app will automatically call the init API on startup
   - Or manually call: `POST http://localhost:3001/api/init`

## Assessment Tasks

### Task 1: Shopping Cart Functionality

Implement a shopping cart system with the following features:

1. **Cart State Management**
   - Add products to cart
   - Remove products from cart
   - Update product quantities
   - Calculate cart total
   - Persist cart state (localStorage or React Context)

2. **Cart UI Components**
   - Cart icon in header showing item count
   - Cart page displaying all items
   - Quantity controls (increment/decrement)
   - Remove item button
   - Cart total calculation

3. **Integration**
   - Use the existing API service (`src/services/api.ts`)
   - Integrate with product detail page "Add to Cart" button

### Task 2: Checkout Flow

Create a checkout page that allows users to:

1. **Checkout Form**
   - Review cart items
   - Shipping address form (street, city, state, zipCode, country)
   - Form validation using shadCN components
   - Order summary with total

2. **Order Creation**
   - Submit order to backend API (`POST /api/orders`)
   - Handle API responses and errors
   - Show success/error messages
   - Redirect to order confirmation page

## API Endpoints Reference

### Products
- `GET /api/products` - Get all products (supports `?category=`, `?featured=true`, `?search=`)
- `GET /api/products/:id` - Get single product

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get single user
- `POST /api/users` - Create user

### Orders
- `GET /api/orders` - Get all orders (supports `?userId=`, `?status=`)
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create order
- `PATCH /api/orders/:id/status` - Update order status

### Initialization
- `POST /api/init` - Initialize database with sample data

## Requirements & Guidelines

1. **Use shadCN UI Components**
   - Leverage existing components in `src/components/ui/`
   - Create new components as needed following shadCN patterns
   - Maintain consistent design system

2. **TypeScript**
   - Proper typing for all components and functions
   - Type safety for API responses

3. **Code Quality**
   - Clean, readable code
   - Proper error handling
   - Loading states where appropriate
   - Responsive design

4. **State Management**
   - Use React Context, Zustand, or similar for cart state
   - Consider localStorage for persistence

5. **Routing**
   - Add routes for cart page and checkout page
   - Use React Router (already set up)

## What's Already Implemented

✅ Backend API with all endpoints
✅ MongoDB models and schemas
✅ Database initialization
✅ Basic frontend structure
✅ Product listing page (basic)
✅ Product detail page (basic)
✅ shadCN UI components setup
✅ API service layer
✅ Routing setup

## What You Need to Implement

❌ Shopping cart functionality
❌ Cart UI components
❌ Checkout page and form
❌ Order creation

## Submission

Please provide:

1. **GitHub Repository Link**
   - Fork or clone this repository
   - Commit your changes with clear messages
   - Push to your GitHub account

2. **Brief Summary**
   - What you implemented
   - Any challenges faced
   - Any additional features or improvements

3. **Screenshots or Demo**
   - Screenshots of the implemented features
   - Or a short video demo (optional)

## Evaluation Criteria

- ✅ Functionality completeness
- ✅ Code quality and organization
- ✅ UI/UX design and responsiveness
- ✅ TypeScript usage and type safety
- ✅ Error handling
- ✅ API integration
- ✅ Component reusability
- ✅ Best practices

## Questions?

If you have any questions about the assessment, please don't hesitate to ask. Good luck!

---

**Note:** This is a simplified version for assessment purposes. Focus on demonstrating your skills in React, TypeScript, and API integration rather than building a production-ready system.

