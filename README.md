# 🚀 TaskFlow API – RESTful Task Management System

TaskFlow API is a RESTful backend application built with **Node.js, Express.js, MongoDB, and Mongoose**. It provides APIs to create, retrieve, update, and delete tasks.

This project was developed as **Internship Task 1** to practice backend development, REST API architecture, database integration, and API testing using Postman.

## ✨ Features

- Create new tasks
- Retrieve all tasks
- Retrieve a single task by ID
- Update existing tasks
- Delete tasks
- MongoDB Atlas database integration
- Environment variable configuration using dotenv
- Cross-Origin Resource Sharing (CORS)
- Task timestamps using Mongoose

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB object modeling |
| dotenv | Environment configuration |
| CORS | Cross-origin resource sharing |
| Nodemon | Automatic server restart |
| Postman | API testing |
| Git & GitHub | Version control |

## 📁 Project Structure

```text
TASKFLOW-Api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── taskController.js
│
├── middleware/
│
├── models/
│   └── Task.js
│
├── routes/
│   └── taskRoutes.js
│
├── .env
├── .gitignore
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/TASKFLOW-Api.git
```

### 2. Navigate to Project Folder

```bash
cd TASKFLOW-Api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace the MongoDB URI with your own MongoDB Atlas connection string.

**Important:** Never upload your `.env` file or database credentials to GitHub.

### 5. Start Development Server

```bash
npm run dev
```

Or start normally:

```bash
npm start
```

Server URL:

```text
http://localhost:5000
```

## 🔗 API Endpoints

Base URL:

```text
http://localhost:5000/api/tasks
```

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get task by ID |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## 📝 API Usage Examples

### 1. Create Task – POST

**Endpoint:**

```text
POST /api/tasks
```

**Request Body:**

```json
{
  "title": "Learn Node.js",
  "description": "Complete TaskFlow API",
  "status": "pending",
  "dueDate": "2026-11-10"
}
```

### 2. Get All Tasks – GET

```text
GET /api/tasks
```

### 3. Get Single Task – GET

```text
GET /api/tasks/TASK_ID
```

Replace `TASK_ID` with the actual MongoDB document ID.

### 4. Update Task – PUT

```text
PUT /api/tasks/TASK_ID
```

**Request Body:**

```json
{
  "title": "Learn Express.js",
  "description": "Updated Task Description",
  "status": "in-progress"
}
```

### 5. Delete Task – DELETE

```text
DELETE /api/tasks/TASK_ID
```

## 📊 Task Model

Each task contains the following fields:

| Field | Type | Description |
|---|---|---|
| title | String | Task title (required) |
| description | String | Task description |
| status | String | pending, in-progress, completed |
| dueDate | Date | Task deadline |
| createdAt | Date | Automatically generated |
| updatedAt | Date | Automatically updated |

Default task status: `pending`

## 🧪 API Testing

All API endpoints can be tested using **Postman**.

1. Open Postman.
2. Create a new HTTP request.
3. Enter the API endpoint.
4. Select the appropriate HTTP method.
5. Add JSON data for POST and PUT requests.
6. Click Send and check the response.

## 🎯 Learning Outcomes

Through this project, I practiced:

- Building RESTful APIs using Express.js
- Implementing CRUD operations
- Connecting Node.js with MongoDB Atlas
- Creating Mongoose schemas and models
- Organizing backend code using MVC-style structure
- Configuring environment variables
- Testing APIs using Postman
- Managing source code using Git and GitHub

## 👨‍💻 Developer

**Abdul Wasay Ali**

- GitHub: [aw3922179-source](https://github.com/AbdulWasay-Software-Engineer)
- Project: TaskFlow API
- Internship: Backend Development

---

⭐ If you find this project useful, feel free to explore the repository!
