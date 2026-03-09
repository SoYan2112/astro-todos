# 🚀 Astro Todo List (Modern Tech Stack)
A lightweight, high-performance Todo application built with a Server-Side Rendering (SSR) architecture. This project leverages the power of Astro 5, seamless data management with Drizzle ORM, and cloud storage via Supabase.

# ✨ Key Features
    Full CRUD Functionality: Create, Read, Update, and Delete tasks in real-time.
    Smart Task Sorting: Completed tasks are automatically pushed to the bottom of the list for better focus.
    Centered Modal Editing: A sleek, centered Dialog (Modal) for quick task renaming.
    SSR Powered: All data logic is handled securely on the server, ensuring fast initial loads and SEO friendliness.
    Modern UI: A clean, minimalist interface styled with Tailwind CSS 4.
    Responsive Design: Fully optimized for both desktop and mobile views.

# 🛠 Tech Stack
    Component	Technology
    Framework	Astro 5
    Database	Supabase (PostgreSQL)
    ORM	Drizzle ORM
    Styling	    Tailwind CSS 4
    Deployment	Vercel

# 🚀 Getting Started
    1. Prerequisites
Create a .env file in the root directory and add your Supabase connection string: DATABASE_URL="postgresql://postgres.[PROJECT-ID]:[YOUR-PASSWORD]@aws-1-ap-south-1.pooler.supabase.com:6543/postgres"
    2. Installation 
Install the necessary dependencies: npm install
    3. Database Synchronization
Push your schema to Supabase using Drizzle Kit: npx drizzle-kit push
4. Run Development Server
Start the local development environment: npm run dev

# 📂 Project Structure
├── src/
│   ├── db/
│   │   ├── index.ts      
│   │   └── schema.ts    
│   ├── layouts/         
│   └── pages/
│       └── index.astro   
├── drizzle.config.ts    
└── astro.config.mjs     

# 📝 License
This project is open-source and intended for educational purposes.