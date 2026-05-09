# IronForge Shop 🏋️

Full-stack ecommerce app for supplements and athletic clothing.

**Live Demo:** https://iron-forge-gym-terry.netlify.app

## Tech Stack

**Frontend**
- React + Vite
- Tailwind CSS
- React Router
- Axios

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- bcrypt
- Stripe (payment intent)

## Features

- 🔐 User authentication — register & login with JWT
- 🛍️ Product catalog — 8 products with real images
- 📦 Full CRUD for products
- 📊 Admin dashboard with stats
- 🌱 Database seeder — populate MongoDB in one command
- 📱 Responsive design

## Getting Started

**Backend**
cd server
npm install
npm run dev

**Frontend**
cd client
npm install
npm run dev

**Seed the database**
cd server
npm run data:import

## Environment Variables

Create a `.env` file in the `server` folder:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=5000
STRIPE_SECRET_KEY=your_stripe_key

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| GET | /api/products | Get all products |
| POST | /api/products | Create product |
| PUT | /api/products/:id | Update product |
| DELETE | /api/products/:id | Delete product |
| GET | /api/dashboard | Admin stats |

## Author

Fernando Terrazas — Junior MERN Developer
GitHub: terry-stang92
Upwork: Fernando T. — Frontend Developer