📌 Employee Management System (EMS)

A full-stack Employee Management System built using React, Node.js, Express, and MongoDB.
This application helps organizations manage employees, departments, leaves, and authentication efficiently with a clean UI and secure backend APIs.

🚀 Features
🔐 Authentication & Authorization

User registration and login

JWT-based authentication

Protected routes using middleware

Role-based access (Admin/User)

👨‍💼 Employee Management

Add new employees

View employee list

Update employee details

Delete employees

Department and position management

📊 Dashboard

Total employees count

Department-wise employee statistics

Salary statistics (average, min, max)

Centralized admin dashboard

🏖 Leave Management

Apply for leave

View leave status

Admin approval/rejection of leaves

Leave history tracking

🔎 Search & Filter

Search employees by name

Filter by department and position

Reset/Clear filters option

🌐 REST API

Structured RESTful APIs

Proper request validation

Error handling with meaningful responses

🛠 Tech Stack
Frontend

React.js

Vite

React Router

Axios

CSS / UI Components

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Token)

Express Validator

📂 Project Structure
employee-management/
│
├── backend/
│   ├── config/          # Database configuration
│   ├── middleware/      # Auth middleware
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── server.js        # Backend entry point
│   ├── .env             # Environment variables
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Pages (Dashboard, Employees, Login, etc.)
│   │   ├── utils/       # Utility functions
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│
└── README.md

⚙️ Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


MongoDB can be connected using MongoDB Compass or MongoDB Atlas.

▶️ How to Run the Project
1️⃣ Clone the Repository
git clone <repository-url>
cd employee-management

2️⃣ Backend Setup
cd backend
npm install
npm start


Backend will run on:

http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run on:

http://localhost:5173

🔑 API Authentication Flow

User logs in

JWT token is generated

Token is sent in request headers:

Authorization: Bearer <token>


Middleware verifies token before accessing protected routes

🧪 Testing APIs (Postman)

Register/Login user

Copy JWT token

Use token in Authorization header

Access secured employee and leave APIs

📌 Resume Worthy Highlights

Developed a full-stack MERN application with secure authentication and role-based access

Implemented real-time employee, department, and leave management with RESTful APIs

📄 License

This project is for learning and educational purposes.