
Employee Management System (MERN)

A full-stack Employee Management System built using the MERN stack.
The application allows authenticated users to register, log in, and manage employees, including creating, viewing, searching, filtering, updating, and deleting employee records.

Tech Stack
Frontend

React 18

Vite

React Context API (Authentication)

Axios / Fetch API

CSS (custom styling)

Files

frontend/package.json

frontend/vite.config.js

frontend/src/main.jsx

frontend/src/context/AuthContext.jsx

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

dotenv

CORS

Files

backend/package.json

backend/server.js

Database

MongoDB Atlas

Mongoose ODM

## Project Structure (Key Files)

employee-management/
├── backend/
│ ├── server.js # Server entry point
│ ├── package.json
│ ├── .env # Environment variables
│ ├── config/
│ │ └── db.js # MongoDB connection
│ ├── middleware/
│ │ └── auth.js # JWT authentication middleware
│ ├── models/
│ │ ├── User.js # User schema
│ │ └── Employee.js # Employee schema
│ └── routes/
│ ├── auth.js # Auth routes (signup/login)
│ └── employees.js # Employee CRUD routes
│
├── frontend/
│ ├── index.html
│ ├── package.json
│ ├── vite.config.js
│ └── src/
│ ├── main.jsx # App entry
│ ├── App.jsx # App wrapper
│ ├── context/
│ │ └── AuthContext.jsx
│ ├── components/
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ ├── Dashboard.jsx
│ │ ├── EmployeeForm.jsx
│ │ ├── EmployeeList.jsx
│ │ ├── SearchEmployees.jsx
│ │ └── Navbar.jsx
│ └── assets/
│
└── README.md

Features
Authentication

User signup & login using JWT

Protected routes using authentication middleware

Each user can access only their own employees

Employee Management

Add new employees

View all employees

Search employees by name, email, or department

Filter employees by department and position

Update employee details

Delete employee records

Environment Variables

Create a .env file inside the backend/ directory.

backend/.env
PORT=5000
MONGO_URI=YOUR_MONGODB_ATLAS_URI
JWT_SECRET=YOUR_SECRET_KEY

How to Run (Development)
Backend Setup
cd backend
npm install
npm start


Server runs on: http://localhost:5000

Root test endpoint:
GET / → Employee Management System API

Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on: http://localhost:5173

Backend API calls are made directly to http://localhost:5000

Authentication Flow

User logs in / signs up

Backend generates a JWT token

Token is sent in headers for protected routes

auth middleware verifies token and extracts userId

Employee data is linked using createdBy: userId

API Endpoints Overview
Auth Routes
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	Login user
Employee Routes (Protected)
Method	Endpoint	Description
POST	/api/employees	Create employee
GET	/api/employees	Get employees (search & filter supported)
PUT	/api/employees/:id	Update employee
DELETE	/api/employees/:id	Delete employee

Query Parameters (GET)

search → name / email / department

department

position

Common Troubleshooting
❌ Unauthorized Access

Ensure JWT token is sent in request headers

Check token expiry and secret key

❌ MongoDB Connection Error

Verify MONGO_URI

Ensure Atlas IP access is allowed

❌ Frontend Not Connecting to Backend

Confirm backend is running on port 5000

Check API URLs in frontend components

Future Enhancements

Role-based access (Admin / Manager)

Pagination for employee lists

Export employee data (CSV / PDF)

Deployment using Render / Vercel

References (Core Files)

Backend entry: backend/server.js

DB connection: backend/config/db.js

Auth middleware: backend/middleware/auth.js

Employee routes: backend/routes/employees.js

Auth routes: backend/routes/auth.js

Frontend entry: frontend/src/main.jsx

Auth context: frontend/src/context/AuthContext.jsx