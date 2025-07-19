# 📦 PinPointMap – Backend

This is the Node.js + Express.js backend for 📍 **PinPointMap** — a full-stack location bookmarking app that allows users to drop pins on a map with custom remarks and auto-fetched addresses.

---

### 🚀 Live Demo

🔗 [Deployed Live on Vercel](https://pin-point-map-frontend.vercel.app/)

---

### ⚙️ Hosted Backend

The Express.js + MongoDB backend is deployed on Render:

📡 API Base: [`https://pinpointmap-backend.onrender.com`](https://pinpointmap-backend.onrender.com)

Used by the frontend to perform CRUD operations for pins.


---

## 🚀 Features

- RESTful API to handle pin CRUD operations  
- Connects to MongoDB using Mongoose  
- Supports CORS for frontend communication  
- Includes sample data for demo/testing  
- Clean, minimal, and production-ready structure  

---

## 📂 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | `/api/pins`      | Fetch all saved pins    |
| POST   | `/api/pins`      | Create a new pin        |
| PUT    | `/api/pins/:id`  | Update a specific pin   |
| DELETE | `/api/pins/:id`  | Delete a specific pin   |

---

## 🧪 Sample Pin Format

```json
{
  "lat": 21.1182,
  "lng": 79.0472,
  "remark": "College Campus",
  "address": "IIIT Nagpur, Maharashtra, India"
}
```

---

## ⚙️ Tech Stack

- **Node.js** – Server runtime  
- **Express.js** – API framework  
- **MongoDB + Mongoose** – Database  
- **CORS** – Allow frontend access  
- **Dotenv** – Secure config  

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/atharva5924/PinPointMap-backend.git
cd PinPointMap-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables
Create a .env file with the following:

```env
PORT=5000
MONGO_URI=your-mongodb-connection-uri
```

### 4. Start the server

```bash
npm start
```

Server will run at:
🌐 http://localhost:5000

---

## 🌍 Deployment Notes

If deploying to platforms like **Render**, **Railway**, or **Vercel Functions**, ensure:

- ✅ Your **MongoDB URI** is correctly set in environment variables  
- ✅ **CORS** is enabled to accept requests from your frontend origin

---

## 📁 Project Structure

```bash
PinPointMap-backend/
├── models/
│   └── Pin.js         # Mongoose schema
├── .env               # Environment config
├── index.js           # Main server file
├── package.json       # Scripts & metadata
└── README.md          # This file
```

---

### 👨‍💻 Developer

**Atharva Nile**
CSE Undergrad @ IIIT Nagpur
📧 atharvanile2005@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/atharva-nile-a50120294) • [GitHub](https://github.com/atharva5924)

---


Let me know if you'd like:

- Matching `README.md` for the frontend project
- Shields/badges for GitHub (like `build`, `license`, `deploy`, etc.)
- Postman collection export instructions or API test guide

---
