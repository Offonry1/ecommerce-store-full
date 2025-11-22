# Industrial E-Commerce Store (Project 2)

## Overview
Simple full-stack (MERN-style) e-commerce demo:
- Backend: Node.js + Express + MongoDB
- Frontend: React + Vite

## Quick start with Docker
1. Copy `.env.example` files into `backend/.env` and `frontend/.env` if you want to edit values.
2. From project root run:
   ```
   docker-compose up --build
   ```
3. Backend API: http://localhost:4000
   Frontend: http://localhost:5173

## Local dev (without Docker)

### Backend
```
cd backend
npm install
cp .env.example .env
# edit .env if needed
npm run seed  # optional: seed DB with example products (ensure Mongo is running)
npm run dev
```

### Frontend
```
cd frontend
npm install
# create .env with VITE_API_URL=http://localhost:4000
npm run dev
```

## Notes
- This is a demo app intended as a project to showcase full-stack engineering for applications in industrial contexts.
- If you want, I can push this repo to your GitHub (offonry1) or produce a ZIP for download.
