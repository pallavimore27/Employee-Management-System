📌 Employee Management System

A full-stack Employee Management System built using React, Node.js, Express, and MongoDB.
This application allows admins to manage employee records with secure authentication and a modern dashboard UI.

🚀 Features (Only What Exists in Your Project)
🔐 Authentication

User registration

User login

JWT-based authentication

Protected API routes using middleware

👨‍💼 Employee Management

Add new employees

View employee list

Update employee details

Delete employees

Department and position handling

📊 Dashboard

Total employees count

Department-wise employee statistics

Salary statistics (average, minimum, maximum)

🔎 Search & Filter

Search employees by name

Filter employees by department

Filter employees by position

Clear/reset filters

🛠 Tech Stack
Frontend

React.js

Vite

React Router

Axios

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT

Express Validator

📂 Project Structure

employee-management/

│
├── backend/

│   ├── config/           # Database configuration

│   ├── middleware/       # Authentication middleware

│   ├── models/           # Mongoose schemas

│   ├── routes/           # API routes

│   ├── server.js         # Backend entry point

│   └── .env              # Environment variables
│

├── frontend/

│   ├── public/

│   ├── src/

│   │   ├── components/   # Reusable UI components

│   │   ├── pages/        # Dashboard, Employees, Login, etc.

│   │   ├── utils/        # Utility functions

│   │   ├── App.jsx

│   │   └── main.jsx

│   └── vite.config.js

│

└── README.md


⚙️ Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

▶️ How to Run the Project
Backend
cd backend
npm install
npm start

Frontend
cd frontend
npm install
npm run dev
