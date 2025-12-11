# Quick Start Guide

## Prerequisites Check

Before starting, ensure you have:
- ✅ Node.js v18+ installed (`node --version`)
- ✅ MongoDB running locally OR MongoDB Atlas connection string
- ✅ npm or yarn package manager

## Step-by-Step Setup

### 1. Install Dependencies

```bash
npm run install:all
```

This will install dependencies for:
- Root workspace
- Backend (`backend/`)
- Frontend (`frontend/`)

### 2. Configure MongoDB

**Option A: Local MongoDB**
- Make sure MongoDB is running on `localhost:27017`
- No configuration needed (uses default)

**Option B: MongoDB Atlas or Remote**
- Copy `backend/env.example` to `backend/.env`
- Update `MONGODB_URI` with your connection string:
  ```
  MONGODB_URI=mongodb://localhost:27017/eric-tech-assessment
  ```
  
**Note:** If using local MongoDB, you can skip this step as it uses the default connection string.

### 3. Start Development Servers

**Option 1: Start Both (Recommended)**
```bash
npm run dev
```

**Option 2: Start Separately**
```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend
npm run dev:frontend
```

### 4. Initialize Database

The frontend will automatically call the init API when it starts. You should see:
- ✅ Database initialized successfully
- Sample products, users, and orders created

**Manual Initialization:**
```bash
curl -X POST http://localhost:3001/api/init
```

### 5. Access the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:3001
- **API Health Check:** http://localhost:3001/api/health

## Troubleshooting

### MongoDB Connection Error
```
❌ MongoDB connection error: ...
```
**Solution:** 
- Check if MongoDB is running
- Verify connection string in `backend/.env`
- Check network/firewall settings

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::3001
```
**Solution:**
- Stop other processes using ports 3000 or 3001
- Or change ports in `backend/.env` and `frontend/vite.config.ts`

### Module Not Found
```
Error: Cannot find module '...'
```
**Solution:**
- Run `npm run install:all` again
- Delete `node_modules` and reinstall
- Check Node.js version (needs v18+)

### Frontend Not Loading
- Check if backend is running on port 3001
- Check browser console for errors
- Verify API proxy in `frontend/vite.config.ts`

## Next Steps

1. ✅ Verify database initialization
2. ✅ Browse products at http://localhost:3000/products
3. ✅ Check API endpoints at http://localhost:3001/api/health
4. 📖 Read [ASSESSMENT.md](./ASSESSMENT.md) for task instructions

## Development Tips

- Backend auto-reloads on file changes (using `tsx watch`)
- Frontend has hot module replacement (HMR)
- API responses follow format: `{ success: boolean, data: any, message?: string }`
- Check browser console and terminal for errors

## Project Structure Overview

```
eric-tech/
├── backend/          # Node.js API (port 3001)
│   └── src/
│       ├── models/   # MongoDB schemas
│       └── routes/   # API endpoints
├── frontend/         # React app (port 3000)
│   └── src/
│       ├── components/  # React components
│       ├── pages/      # Page components
│       └── services/   # API client
└── ASSESSMENT.md     # Task instructions
```

Happy coding! 🚀

