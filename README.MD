# 📝 Task Management Application - AI-ALPHATECH ASSESSMENT

A full-stack task management app using **Next.js 15**, **React 19**, **Node.js**, **Express**, **Material UI**, and **Bootstrap**.

---

## 📦 Tech Stack

| Layer        | Technology Used           | Purpose                                |
|--------------|---------------------------|----------------------------------------|
| Frontend     | Next.js 15 (App Router)   | Modern UI, routing, SSR support        |
|              | React 19                  | Component-based UI                     |
|              | TypeScript                | Type safety                            |
|              | Axios                     | HTTP API calls                         |
|              | Material UI               | UI Components                          |
|              | Bootstrap 5               | Responsive layout                      |
| Backend      | Node.js + Express         | REST API with CRUD functionality       |
|              | JSON File / In-Memory     | Task storage for simplicity            |
|              | Modular Code Structure    | Controllers, Routes, Utils             |

---

## ✅ Features Implemented

- Add, view, edit, and delete tasks (CRUD)
- Responsive design (mobile/tablet/desktop)
- Search functionality with **debounce**
- UI components via **Material UI**
- Styled with **Bootstrap Grid + MUI**
- Modular backend architecture (controllers/routes/utils)
- Toast/snackbar alerts for operations
- Status indication for completed/incomplete tasks
- Component-based frontend (Next.js 15 + App Router)

---

## 💡 Future Features (Possible Additions)

- ✅ JWT-based user authentication (login/signup)
- ✅ Role-based access control
- ✅ Priority levels (e.g., high, medium, low)
- ✅ Due dates & calendar integration
- ✅ MongoDB / PostgreSQL database integration
- ✅ Task categorization / labels
- ✅ Dark/light theme toggle
- ✅ Pagination & sorting
- ✅ File uploads & attachments

---

## 🔧 Local Setup Instructions

### 📁 Backend Setup
```bash
# Clone repo and go to backend folder
cd backend

# Install dependencies
npm install

# Run server (port 5000)
npm start
```

Backend runs at: `http://localhost:5000`

---

### 📁 Frontend Setup (Next.js 15)
```bash
# Navigate to frontend folder
cd frontend

# Create project (if not created)
npx create-next-app@latest . --app --ts

# Install required packages
npm install axios @mui/material @emotion/react @emotion/styled bootstrap

# Create .env.local file
echo "NEXT_PUBLIC_API_URL=http://localhost:5000/tasks" > .env.local

# Run dev server
npm run dev
```

Frontend runs at: `http://localhost:3000`

---

## 📂 Folder Structure Overview

### Backend
```
backend/
├── controllers/         # Logic
├── routes/              # API Endpoints
├── utils/               # File IO helpers
├── tasks.json           # Task data
└── index.js             # App Entry
```

### Frontend
```
frontend/
├── app/                 # App Router Pages
├── components/          # Task UI Components
├── hooks/               # Custom React Hooks
├── lib/                 # Axios API Services
├── types/               # TypeScript Models
├── styles/              # Global CSS
└── .env.local           # API Base URL
```


Made with ❤️ by Aman Ramprakash Yadav
