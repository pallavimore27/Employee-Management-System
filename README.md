Employee Management System (MERN Stack)

A full-stack Employee Management System built using the MERN stack.
This application allows authenticated users to manage employee records securely, including adding, viewing, searching, filtering, updating, and deleting employees.

Tech Stack
Frontend

React 18

Vite

Context API (Authentication)

Axios / Fetch API

CSS

Backend

Node.js

Express.js

MongoDB

Mongoose ODM

JWT Authentication

dotenv

CORS

Database

MongoDB Atlas

Project Structure (Key Files)
employee-management/
├── backend/
│   ├── server.js              # Server entry point
│   ├── package.json
│   ├── .env                   # Environment variables
│   │
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   │
│   ├── middleware/
│   │   └── auth.js             # JWT authentication middleware
│   │
│   ├── models/
│   │   ├── User.js             # User schema
│   │   └── Employee.js         # Employee schema
│   │
│   └── routes/
│       ├── auth.js             # Auth routes (signup/login)
│       └── employees.js        # Employee CRUD routes
│
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   │
│   └── src/
│       ├── main.jsx            # App entry
│       ├── App.jsx             # App wrapper
│       │
│       ├── context/
│       │   └── AuthContext.jsx # Authentication state management
│       │
│       ├── components/
│       │   ├── Login.jsx
│       │   ├── Signup.jsx
│       │   ├── Dashboard.jsx
│       │   ├── EmployeeForm.jsx
│       │   ├── EmployeeList.jsx
│       │   ├── SearchEmployees.jsx
│       │   └── Navbar.jsx
│       │
│       └── assets/
│
└── README.md


Features
Authentication

User signup & login using JWT

Protected routes using authentication middleware

Secure access control for API routes

Each user can access only their own employees

Employee Management

Add new employees

View all employees

Update employee details

Delete employees

Search employees by name, email, or department

Filter employees by department and position

Environment Variables

Create a .env file inside the backend directory.

PORT=5000
MONGO_URI=YOUR_MONGODB_ATLAS_URI
JWT_SECRET=YOUR_SECRET_KEY

How to Run the Project (Development)
Backend Setup
cd backend
npm install
npm start


Backend runs on: http://localhost:5000

Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on: http://localhost:5173

Frontend communicates with backend on port 5000

Authentication Flow

User signs up or logs in

Backend generates a JWT token

Token is stored and sent in request headers

Protected routes validate token via middleware

Employee records are linked to the authenticated user

API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/auth/signup	Register new user
POST	/api/auth/login	Login user
Employee Routes (Protected)
Method	Endpoint	Description
POST	/api/employees	Create employee
GET	/api/employees	Get all employees
PUT	/api/employees/:id	Update employee
DELETE	/api/employees/:id	Delete employee

Query Parameters (GET employees)

search → name / email / department

department

position

Common Troubleshooting
Unauthorized Error

Ensure JWT token is sent in request headers

Check token expiration and secret key

MongoDB Connection Error

Verify MONGO_URI

Ensure IP is allowed in MongoDB Atlas

Frontend Not Connecting to Backend

Confirm backend is running on port 5000

Check API URLs in frontend code

Future Enhancements

Role-based access (Admin / Manager)

Pagination for employee listing

Export employee data (CSV / PDF)

Deployment using Render / Vercel

References (Core Files)

Backend entry: backend/server.js

Database config: backend/config/db.js

Auth middleware: backend/middleware/auth.js

Employee routes: backend/routes/employees.js

Frontend entry: frontend/src/main.jsx

Auth context: frontend/src/context/AuthContext.jsx

Author

Pallavi More