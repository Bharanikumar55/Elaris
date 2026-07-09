# 🌿 Elaris

> **Discover Hidden Places. Create Lasting Memories.**

Elaris is a production-inspired full-stack web application built as a long-term software engineering journey.

Unlike traditional social media platforms that focus on people, Elaris is designed around **nature, exploration, travel experiences, and meaningful memories**. Users can discover breathtaking destinations, share adventures, preserve moments, and inspire others to explore responsibly.

---

# 📖 Vision

Modern social media helps people share photos, but it rarely helps users discover authentic natural destinations or plan meaningful outdoor experiences.

Elaris aims to become a platform where nature lovers can:

- 🌿 Discover hidden natural places
- 📸 Share authentic travel experiences
- 🧭 Explore mountains, forests, lakes, beaches and trails
- 🌎 Learn from fellow explorers
- 🌱 Encourage sustainable tourism
- ❤️ Preserve memorable journeys

Rather than focusing on influencers, Elaris focuses on **places and experiences**.

---

# ✨ Current Progress

## ✅ Version

Current Development Stage

```
v0.2.0
```

Current Status

- ✅ React Project Setup
- ✅ React Router
- ✅ Tailwind CSS
- ✅ Homepage UI
- ✅ Component-Based Architecture
- ✅ Authentication UI
- 🚧 Backend (Next)

---

# 🏗 Tech Stack

## Frontend

- React
- TypeScript (Planned)
- Vite
- Tailwind CSS
- React Router DOM
- Context API

## Backend (Upcoming)

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM

## Authentication

- Context API (Current)
- JWT Authentication (Upcoming)

## Storage

- Cloudinary (Upcoming)
- AWS S3 (Future)

## Deployment (Future)

- Docker
- AWS
- Nginx
- Kubernetes

---

# 📂 Project Structure

```
Elaris/

│
├── client/
│
│   ├── public/
│   │
│   ├── src/
│   │
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Categories.jsx
│   │   │   ├── CategoryCard.jsx
│   │   │   ├── FeaturedPlaces.jsx
│   │   │   ├── PlaceCard.jsx
│   │   │   ├── WhyElaris.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── context/
│   │   │
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── pages/
│   │   │
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── CreatePost.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── package.json
│
├── server/
│
│   └── (Coming Soon)
│
└── README.md
```

---

# 🌟 Features Implemented

## 🏠 Landing Page

A modern responsive homepage built with reusable React components.

Includes

- Responsive Navigation Bar
- Hero Section
- Search Bar
- Categories Section
- Featured Destinations
- Why Elaris Section
- Footer

---

## ♻️ Reusable Components

Implemented reusable UI architecture.

Examples

- PlaceCard
- CategoryCard

Data is rendered dynamically using

```jsx
.map()
```

instead of manually creating components.

---

## ⚛ React Concepts Practiced

### Components

UI divided into reusable pieces.

---

### Props

Passing data from parent components to child components.

Example

```jsx
<PlaceCard
    title="Ooty"
    location="Tamil Nadu"
/>
```

---

### Arrays

Application data stored in JavaScript arrays instead of hardcoding components.

---

### map()

Rendering UI dynamically from arrays.

Example

```jsx
places.map(...)
```

---

### useState()

Implemented React state management.

Practiced using

- Search Input
- Login Form
- Register Form

---

### Events

Learned

- onClick
- onChange
- onSubmit

---

### Forms

Created controlled forms using React state.

---

### Conditional Rendering

Implemented

```jsx
{loading ? ... : ...}
```

and

```jsx
{error && ...}
```

---

## 🔐 Authentication UI

Built a complete frontend authentication flow.

Current Features

- Login Page
- Register Page
- Password Visibility Toggle
- Loading State
- Form Validation
- Navigation using React Router

(Currently simulated without backend.)

---

## 🌍 Context API

Implemented global authentication state.

Created

```
AuthContext
```

Current capabilities

- Login
- Logout
- Global User State

---

## 🛡 Protected Routes

Implemented route protection.

Protected Pages

- Profile
- Create Post

Users are redirected to Login when authentication is unavailable.

---

## 🚀 Routing

Implemented React Router.

Current Routes

```
/

Home

/login

/register

/profile

/create-post
```

---

# 🧠 React Concepts Learned

- JSX
- Components
- Props
- Arrays
- map()
- useState()
- Events
- Forms
- Controlled Components
- Conditional Rendering
- Context API
- Custom Hooks
- React Router
- useNavigate()
- Protected Routes

---

# 🎓 Development Philosophy

Elaris follows a simple principle.

> Build the simplest solution that works today.
>
> Introduce complexity only when there is a real engineering need.

Instead of adding technologies because they are popular, every decision is introduced gradually while solving real software engineering problems.

This project is intended to simulate how production applications evolve over time.

---

# 🛣 Current Development Roadmap

## ✅ Phase 1

Frontend Foundations

- React Setup
- Tailwind
- Routing
- Components
- Props
- useState
- Authentication UI

---

## 🚧 Phase 2 (Next)

Backend Development

- Express.js
- REST APIs
- Controllers
- Routes
- Middleware
- Error Handling

---

## 🚧 Phase 3

Database

- PostgreSQL
- Prisma ORM
- Relationships
- Migrations

---

## 🚧 Phase 4

Authentication

- Password Hashing
- JWT
- Access Tokens
- Refresh Tokens
- Protected APIs

---

## 🚧 Phase 5

Posts

Users will be able to

- Create Posts
- Upload Images
- Add Locations
- Categories
- Date of Visit

---

## 🚧 Phase 6

Social Features

- Likes
- Comments
- Saved Posts
- User Profiles

---

## 🚧 Phase 7

Production Features

- Cloudinary
- Redis
- Background Jobs
- Docker
- AWS
- Nginx
- Kubernetes
- Monitoring
- Logging

---

# 📸 Screenshots

## 🏠 Homepage

> *(Add Homepage Screenshot Here)*

```
/docs/images/home.png
```

---

## 🔐 Login

> *(Add Login Screenshot Here)*

```
/docs/images/login.png
```

---

## 📝 Register

> *(Add Register Screenshot Here)*

```
/docs/images/register.png
```

---

# 🎯 Learning Goals

This project is intentionally being built step by step to gain practical experience in

- React
- Backend Development
- REST APIs
- Authentication
- PostgreSQL
- Prisma
- Cloud Computing
- Docker
- DevOps
- System Design
- Scalable Architecture
- Production Engineering

---
# 📅 Development Log

## v0.2.0

- Built responsive homepage
- Learned React Components
- Learned Props
- Implemented `.map()` rendering
- Learned `useState()`
- Built Login UI
- Built Register UI
- Implemented Context API
- Added Protected Routes
- Added Navigation Flow

---

## Next Milestone

- Express Backend
- PostgreSQL
- Prisma
- JWT Authentication

# 🌱 Long-Term Vision

Elaris is more than a portfolio project.

It is being developed as a complete software engineering journey demonstrating

- Clean Architecture
- Modern Frontend Development
- Backend Engineering
- Authentication Systems
- Database Design
- Production Best Practices
- Scalable Full Stack Development

Every new feature is added only after understanding the engineering problem it solves.

---

# 🤝 Contributing

Suggestions, improvements and ideas are always welcome.

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Open a Pull Request.

---

# 📄 License

Licensed under the MIT License.

---

# 💚 Elaris

> **Explore Beyond Maps.**
>
> **Create Lasting Memories.**