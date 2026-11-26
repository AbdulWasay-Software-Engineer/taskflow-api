
# TaskFlow API – Backend Development Internship

A RESTful Task Management API built using Node.js, Express.js, and MongoDB. This project was developed as part of the Backend Development Internship at InternDom and covers CRUD operations, authentication, authorization, file uploads, email integration, and API security.

## 🚀 Project Overview

TaskFlow API allows users to manage their tasks securely. Users can register, log in, create tasks, view tasks, update and delete their tasks, and upload images with tasks. Admins have additional privileges to manage tasks and access admin-only functionality.

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- Multer
- Nodemailer
- Helmet
- express-rate-limit
- dotenv
- Postman

## 📋 Internship Tasks

### Task 1 – Task CRUD API

Implemented CRUD functionality for task management.

Features:
- Create a new task
- Get all tasks
- Get a task by ID
- Update a task
- Delete a task
- MongoDB database integration
- Error handling for invalid requests and missing tasks

### Task 2 – Authentication System

Implemented user authentication using JWT.

Features:
- User signup
- User login
- Password hashing with bcrypt
- JWT token generation
- Protected routes
- User profile endpoint

### Task 3 – Role-Based Access Control (RBAC)

Implemented authorization based on user roles.

Roles:
- Admin
- User

Features:
- Role-based middleware
- Admin-only routes
- Users can access and manage their own tasks
- Admins have additional access privileges
- Pagination
- Search functionality
- Ownership checks for task updates and deletion

### Task 4 – Advanced Features & Security

Implemented additional backend features.

Features:
- Image upload using Multer
- Image path saved in MongoDB
- Welcome email using Nodemailer
- Security headers using Helmet
- API rate limiting
- Environment variables using dotenv
- Centralized error handling
- Image file validation
- Maximum image size limit of 5 MB

## 📁 Project Structure

```text
TaskFlow-API/
│
├── config/
│   ├── db.js
│   └── mailer.js
│
├── controllers/
│   ├── authController.js
│   └── taskController.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   └── uploadMiddleware.js
│
├── models/
│   ├── User.js
│   └── Task.js
│
├── routes/
│   ├── authRoutes.js
│   ├── taskRoutes.js
│   └── adminRoutes.js
│
├── uploads/
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md

```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AbdulWasay-Software-Engineer/taskflow-api.git
```

### 2. Navigate to Project Folder

```bash
cd taskflow-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_google_app_password
```

> Never upload your `.env` file or credentials to GitHub.

### 5. Start the Development Server

```bash
npm run dev
```

The API will run at:

```text
http://localhost:5000
```

## 🔐 Authentication API

### Signup

**Endpoint:**

```http
POST /api/auth/signup
```

**Request Body:**

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123"
}
```

### Login

**Endpoint:**

```http
POST /api/auth/login
```

**Request Body:**

```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

Login returns a JWT token which is used to access protected routes.

### Get Profile

**Endpoint:**

```http
GET /api/auth/profile
```

**Authorization:**

```text
Bearer Token
```

## 📌 Task API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/tasks` | Create a task |
| GET | `/api/tasks` | Get tasks |
| GET | `/api/tasks/:id` | Get task by ID |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

### Create Task

```http
POST /api/tasks
```

Authorization: Bearer Token

Request body for normal JSON requests:

```json
{
  "title": "Learn Node.js",
  "description": "Complete backend tasks",
  "status": "pending"
}
```

For image uploads, use **multipart/form-data** with:

| Key | Type |
|---|---|
| title | Text |
| description | Text |
| status | Text |
| image | File |

### Get All Tasks

```http
GET /api/tasks
```

### Search Tasks

```http
GET /api/tasks?search=Node
```

### Pagination

```http
GET /api/tasks?page=1&limit=10
```

### Get Task By ID

```http
GET /api/tasks/:id
```

### Update Task

```http
PUT /api/tasks/:id
```

### Delete Task

```http
DELETE /api/tasks/:id
```

## 👥 Role-Based Access Control

### User Role

- Can access authorized task routes
- Can view tasks
- Can update their own tasks
- Can delete their own tasks
- Cannot access admin-only routes

### Admin Role

- Has additional administrative access
- Can access admin-protected endpoints
- Can manage tasks according to role permissions

### Admin Dashboard

```http
GET /api/admin/dashboard
```

Authorization: Bearer Token with admin role

## 📸 Image Upload

Images are uploaded using Multer.

Supported image formats:

- JPG
- JPEG
- PNG
- WEBP

Maximum file size:

```text
5 MB
```

Uploaded images are stored in the `uploads/` directory and their paths are saved in MongoDB.

Images can be accessed through:

```text
http://localhost:5000/uploads/filename
```

## 📧 Welcome Email

Nodemailer is integrated to send a welcome email after successful signup.

Features:
- Automatic welcome email
- Gmail SMTP integration
- Email sending status included in signup response

## 🛡️ Security Features

- JWT authentication
- Password hashing using bcrypt
- Role-based authorization
- Helmet security headers
- API rate limiting
- Environment variable configuration
- Image file validation
- File size restrictions
- Protected API routes
- Ownership validation

## 🧪 Testing

The API was tested using Postman.

Testing included:

- Signup and login
- JWT authentication
- Protected profile access
- Task creation
- Task listing
- Task retrieval by ID
- Task updates
- Task deletion
- Pagination
- Search
- Admin access
- User access restrictions
- Image upload
- Welcome email
- API security middleware

## 📦 Environment Variables

| Variable | Description |
|---|---|
| PORT | Server port |
| MONGO_URI | MongoDB connection string |
| JWT_SECRET | Secret key for JWT |
| EMAIL_USER | Gmail sender address |
| EMAIL_PASS | Gmail app password |

## 🔗 GitHub Repository

[TaskFlow API – GitHub](https://github.com/AbdulWasay-Software-Engineer/taskflow-api)

## 👨‍💻 Developer

**Abdul Wasay Ali**

Backend Development Intern – InternDom

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Backend API development
- RESTful architecture
- Node.js and Express.js
- MongoDB and Mongoose
- Authentication and authorization
- JWT
- Role-based access control
- File uploads
- Email integration
- API security
- Error handling
- Postman API testing
- Git and GitHub

---

**Developed as part of the InternDom Backend Development Internship – Tasks 1 to 4.**
