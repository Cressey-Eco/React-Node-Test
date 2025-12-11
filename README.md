# Eric Tech - E-commerce Assessment Project

A full-stack e-commerce assessment project built with React, Node.js, TypeScript, and MongoDB.

## Tech Stack

### Backend
- **Node.js** with Express
- **TypeScript**
- **MongoDB** with Mongoose
- **RESTful API**

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **shadCN UI** components
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios** for API calls

## Project Structure

```
eric-tech/
├── backend/
│   ├── src/
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API routes
│   │   └── index.ts         # Server entry point
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service layer
│   │   └── lib/            # Utilities
│   ├── package.json
│   └── vite.config.ts
└── ASSESSMENT.md           # Assessment instructions
```

## Quick Start

### Prerequisites

- Node.js (v18+)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd eric-tech
   ```

2. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables:**
   ```bash
   cd backend
   cp env.example .env
   # Edit .env with your MongoDB connection string
   ```

4. **Start MongoDB:**
   - Make sure MongoDB is running locally, or
   - Update `MONGODB_URI` in `backend/.env` with your connection string

5. **Start development servers:**
   ```bash
   # From root directory
   npm run dev
   ```
   
   This will start:
   - Backend: http://localhost:3001
   - Frontend: http://localhost:3000

6. **Initialize the database:**
   - The frontend will automatically call the init API on startup
   - Or manually: `POST http://localhost:3001/api/init`

## Available Scripts

### Root Level
- `npm run dev` - Start both backend and frontend
- `npm run dev:backend` - Start only backend
- `npm run dev:frontend` - Start only frontend
- `npm run install:all` - Install dependencies for all workspaces

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## API Endpoints

### Products
- `GET /api/products` - Get all products
  - Query params: `category`, `featured`, `search`
- `GET /api/products/:id` - Get single product

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get single user
- `POST /api/users` - Create user

### Orders
- `GET /api/orders` - Get all orders
  - Query params: `userId`, `status`
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create order
- `PATCH /api/orders/:id/status` - Update order status

### System
- `POST /api/init` - Initialize database with sample data
- `GET /api/health` - Health check

## Database Models

### Product
- name, description, price, category
- imageUrl, stock, featured
- timestamps

### User
- email, name, role (customer/admin)
- timestamps

### Order
- userId, items[], total, status
- shippingAddress
- timestamps

## Development Notes

- Backend uses TypeScript with Express
- Frontend uses Vite for fast development
- shadCN UI components are pre-configured
- API service layer is set up in `frontend/src/services/api.ts`
- CORS is enabled for local development

## Assessment

See [ASSESSMENT.md](./ASSESSMENT.md) for detailed assessment instructions.

## License

This is an assessment project for evaluation purposes.

