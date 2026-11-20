# TaskFlow API – Backend Development Internship

A RESTful Task Management API built using **Node.js, Express.js, MongoDB, and Mongoose**. This project was developed as part of my Backend Development Internship at **InternDom**.

The API provides task management, JWT authentication, role-based access control, pagination, and search functionality.

## 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Express.js
- JSON Web Token (JWT)
- bcryptjs
- Postman
- dotenv
- CORS

## 📌 Completed Tasks

### Task 1 – Task Management CRUD API

Implemented a RESTful API to manage tasks.

**Features:**
- Create a new task.
- Retrieve all tasks.
- Retrieve a single task by ID.
- Update an existing task.
- Delete a task.
- Input validation and error handling.
- MongoDB database integration using Mongoose.

**Task Model:**
- Title
- Description
- Status
- Due Date

**API Endpoints:**

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/tasks` | Create task |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get task by ID |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

### Task 2 – JWT Authentication

Implemented secure user authentication using JSON Web Tokens.

**Features:**
- User signup and login.
- Password hashing using bcryptjs.
- JWT token generation.
- Token verification middleware.
- Protected user profile route.
- Duplicate email validation.
- Unauthorized access handling.

**API Endpoints:**

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/signup` | Register user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/profile` | Get authenticated user profile |

**Authentication:**  
Protected routes require a Bearer Token in the Authorization header.

### Task 3 – Role-Based Access Control (RBAC)

Implemented role-based authorization to manage user permissions.

**Features:**
- Two user roles: Admin and User.
- Role included in JWT payload.
- Custom role authorization middleware.
- Admin dashboard protected for admin users.
- Users can update and delete only their own tasks.
- Admins can update and delete any task.
- Pagination using `page` and `limit`.
- Search tasks by title.
- HTTP 403 response for unauthorized actions.

**Pagination Example:**

`GET /api/tasks?page=1&limit=5`

**Search Example:**

`GET /api/tasks?search=Learn`

**Admin Dashboard:**

`GET /api/admin/dashboard`

## 📂 Project Structure

```text
TASKFLOW-Api/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── taskController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └
