# Kaar Assignment - MERN Stack Registration App

A complete MERN stack registration application built without Express.js, featuring password hashing with bcrypt, an animated React UI, and MongoDB integration.
<img width="1913" height="842" alt="Kaar assignment" src="https://github.com/user-attachments/assets/2f6f2458-efcd-4761-b086-f3e6a66c06aa" />
<img width="1910" height="833" alt="Kaar assignment 1" src="https://github.com/user-attachments/assets/cf921c8a-e801-43f3-a17b-414507c0ef76" />
<img width="1858" height="811" alt="Kaar assignment 2" src="https://github.com/user-attachments/assets/ce82f7bc-188a-4047-bf8d-495ae4cbd2a0" />
<img width="1892" height="845" alt="Kaar assignment 3" src="https://github.com/user-attachments/assets/331f6c7c-4348-4424-8da3-867fc1c9be49" />





## Features

- **Pure Node.js Backend**: Built using only the `http` module (no Express)
- **Manual JSON Parsing**: Custom request handling with `req.on('data')` and `req.on('end')`
- **Password Security**: bcrypt password hashing (10 salt rounds)
- **MongoDB Integration**: Mongoose ODM for database operations
- **Modern React UI**: Animated registration form with Framer Motion
- **React Router**: Client-side routing for navigation
- **CORS Support**: Manual CORS headers implementation
- **Decrypt Feature**: Display original password (for demonstration purposes)
- **Created At Timestamp**: Automatic timestamp tracking for registrations

## 📁 Project Structure

```
Kaar Assignment/
├── backend/
│   ├── server.js          # Node.js HTTP server
│   ├── package.json       # Backend dependencies
│   └── node_modules/      # Backend packages (gitignored)
├── frontend/
│   ├── src/
│   │   ├── App.jsx        # Main app component with routes
│   │   ├── Register.jsx   # Registration form component
│   │   ├── Register.css   # Registration form styles
│   │   └── main.jsx       # React entry point
│   ├── package.json       # Frontend dependencies
│   └── node_modules/      # Frontend packages (gitignored)
└── .gitignore            # Git ignore rules

```

## 🛠️ Tech Stack

### Backend
- **Node.js** (http module)
- **MongoDB** (Mongoose)
- **bcrypt** (Password hashing)

### Frontend
- **React** (Vite)
- **React Router DOM**
- **Framer Motion** (Animations)
- **React Icons**

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AmitheshChris02/Kaar-Assignment.git
cd Kaar-Assignment
```

### 2. Backend Setup

```bash
cd backend
npm install
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

### 4. MongoDB Setup

**Option A: Local MongoDB**
- Ensure MongoDB is running locally
- Default connection: `mongodb://localhost:27017/mern_noexpress`

**Option B: MongoDB Atlas**
- Create a cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Get your connection string
- Set environment variable: `MONGO_URI=your_connection_string`

### 5. Environment Variables (Optional)

Create a `.env` file in the backend directory:

```env
MONGO_URI=mongodb://localhost:27017/mern_noexpress
PORT=5000
```

##  Running the Application

### Start Backend Server

```bash
cd backend
npm start
```

The server will run on `http://localhost:5000`

### Start Frontend Development Server

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

##  API Endpoints

### POST `/register`

Register a new user.

**Request Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "hashedPassword": "$2b$10$...",
  "createdAt": "2025-12-05T12:00:00.000Z"
}
```

## Security Notes

- Passwords are hashed using bcrypt before storage
- MongoDB connection strings are excluded via `.gitignore`
- CORS is manually configured for security
- **Important**: The "Decrypt" feature is for demonstration only. In production, passwords should never be stored in plaintext or passed through navigation state.

##  Database Schema

```javascript
{
  username: String (required),
  email: String (required),
  password: String (hashed, required),
  createdAt: Date (auto-generated)
}
```

##  Testing the Application

1. Start MongoDB (local or Atlas)
2. Start the backend server
3. Start the frontend development server
4. Navigate to `http://localhost:5173`
5. Fill in the registration form
6. Submit to see the welcome page with hashed password
7. Click "Decrypt" to view the original password (demo only)

##  Dependencies

### Backend
- `bcrypt`: ^6.0.0
- `mongoose`: ^9.0.0

### Frontend
- `react`: ^19.2.0
- `react-dom`: ^19.2.0
- `react-router-dom`: ^7.10.1
- `framer-motion`: Latest
- `react-icons`: Latest

## 👨‍💻 Developer

**Amithesh Christus A**

---

**Note**: Make sure MongoDB is running before starting the backend server. The application will automatically create the `mern_noexpress` database and `users` collection on first registration.

