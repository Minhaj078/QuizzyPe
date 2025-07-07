
# 🧙‍♂️ QuizzyPe: Micro-Quiz Platform

**QuizzyPe** is a modern, responsive micro-quiz platform built with **Next.js**. It allows users to browse quizzes across various subjects, take them, and track their performance over time.

---

## 📚 Table of Contents

1. [Setup and Running Locally](#1-setup-and-running-locally)  
2. [Design Decisions & Next.js Implementation](#2-design-decisions--nextjs-implementation)  
   - [Static Site Generation (SSG)](#static-site-generation-ssg)  
   - [Server-Side Rendering (SSR)](#server-side-rendering-ssr)  
   - [API Routes](#api-routes)  
   - [next/image](#nextimage)  
3. [Challenges Faced & Solutions](#3-challenges-faced--solutions)  
4. [AI Coding Tools Utilization](#4-ai-coding-tools-utilization)

---

## 1. Setup and Running Locally

Follow these steps to get **QuizzyPe** up and running on your local machine.

### 🛠️ Prerequisites

- Node.js (v18.x or later recommended)  
- npm or Yarn

### 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Minhaj078/QuizzyPe
```
Install dependencies:

```bash
Copy
Edit
npm install
# or
yarn install
```
###🚀 Running the Development Server
To run the application in development mode:

```bash
Copy
Edit
npm run dev
# or
yarn dev
```
Open http://localhost:3000 in your browser to see the application. The page will hot-reload as you make changes.
---
## 2. Design Decisions & Next.js Implementation

**QuizzyPe** leverages several key **Next.js** features to deliver a fast, efficient, and scalable user experience.

### 📄 Static Site Generation (SSG)

**Quiz Categories and Individual Quiz Pages:**

- `src/app/page.js`: The homepage fetches category data at build time and renders the quiz category cards.
- `src/app/quiz/[id]/page.js`: This dynamic route uses `generateStaticParams` to pre-render individual quiz pages based on available quiz IDs.

✅ **Benefits**: Improves performance, SEO, and reduces server load as pages are served as static HTML.

---

### 🔁 Server-Side Rendering (SSR)

- Although not currently implemented, the architecture supports SSR for future dynamic features (e.g., authenticated dashboards).
- At present, all data is imported statically into components.

---

### 🔌 API Routes

- Not yet used since all quiz data is imported directly.
- For future features (e.g., login, external APIs), Next.js API routes will be used.

---

### 🖼️ next/image

- `next/image` is used to optimize images (lazy-load, resize, modern formats like WebP) for better performance and UX across all devices and network conditions.

---

## 3. Challenges Faced & Solutions

### 🧠 Client vs Server Component Interaction

**Challenge:**  
Handling quiz logic, state, and `localStorage` on the client while keeping static data rendering on the server.

**Solution:**  
- Marked `QuizClient.js` with `"use client"`.
- Passed `initialQuizData` from the server component (`page.js`) as props.
- Encapsulated all interactivity and state inside the client component.

---

## 4. AI Coding Tools Utilization

AI tools significantly accelerated development. They were used for:

### 🐞 Debugging Help

- Resolving persistent errors
- JSX namespace build issues with Recharts

### 📖 Learning & Explanation

- Quick grasp of SSG, SSR, and `next/image`
- Tailwind best practices
- Scrollbar targeting and CSS quirks

---

## 🤝 Contributing

We welcome contributions to make **QuizzyPe** better! Whether it’s a bug fix, feature addition, UI improvement, or performance enhancement—your input is valuable.

### 🛠️ How to Contribute

1. **Fork the Repository**  
   Click the **Fork** button on the top right of this repo.

2. **Clone Your Fork**

```bash
git clone https://github.com/your-username/QuizzyPe
```


