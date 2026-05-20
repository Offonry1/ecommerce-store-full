# 🛒 Industrial E-Commerce Store

A full-stack e-commerce web application built with the **MERN stack** (MongoDB, Express, React, Node.js). Covers the complete shopping experience from product browsing through to order management.

---

## 🚀 Features

- 🛍️ Product listings with categories and detail pages
- 🛒 Shopping cart — add, remove, and update quantities
- 📦 Order management and processing
- 🔐 User authentication and account management
- 📱 Responsive design — works across desktop and mobile
- ⚡ Fast, single-page application experience with React

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, JavaScript, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Auth | JWT (JSON Web Tokens) |
| Styling | CSS3 |

---

## ⚡ Quick Start

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) (local or Atlas cloud)

### Installation

```bash
# Clone the repository
git clone https://github.com/Offonry1/ecommerce-store-full.git
cd ecommerce-store-full/ecommerce-store-full
```

### Backend Setup

```bash
cd backend   # navigate to backend folder
npm install

# Create a .env file with the following:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
# PORT=5000

npm start
```

### Frontend Setup

```bash
cd frontend   # navigate to frontend folder
npm install
npm start
```

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000

---

## 📁 Project Structure

```
ecommerce-store-full/
├── backend/
│   ├── models/          # Mongoose data models (Product, User, Order)
│   ├── routes/          # Express API routes
│   ├── middleware/      # Auth middleware
│   └── server.js        # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Page views (Home, Product, Cart, etc.)
│   │   └── App.js       # Root component
│   └── package.json
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/users/login` | User login |
| POST | `/api/users/register` | User registration |
| POST | `/api/orders` | Create new order |
| GET | `/api/orders/:id` | Get order by ID |

---

## 👨‍💻 Author

**Mandela Offonry**
- GitHub: [@Offonry1](https://github.com/Offonry1)
- LinkedIn: [mandelaoffonry](https://www.linkedin.com/in/mandelaoffonry)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
