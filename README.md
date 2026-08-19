# Happily Never After

A modern, full-stack donation platform built for _Happily Never After_. It allows supporters to contribute, view live messages, and enables administrator to verify transactions securely through an authenticated dashboard.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=flat-square&logo=vercel)](https://happily-never-after.vercel.app/)

## Features

- **Supporter Contributions & Real-Time Messaging:** Secure donation submission flow paired with dynamic message feeds.
- **Admin Verification Workflows:** Protected dashboard routes allowing admins to verify, approve, or reject incoming donations.
- **End-to-End Type Safety:** Strict validation across client inputs and database schemas using TypeScript and Zod.
- **Fluid UI & Micro-Interactions:** Polished layout transitions and animations powered by Motion (Framer Motion).
- **Responsive Design:** Fully adaptive layout optimized for mobile and desktop screens.

## Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js (App Router, Server Actions) |
| **Language** | TypeScript |
| **Styling & UI** | Tailwind CSS, ShadCN UI, Motion (Framer Motion) |
| **Form Handling** | React Hook Form |
| **Validation** | Zod |
| **Database & Auth** | Supabase (PostgreSQL) |
| **Deployment** | Vercel |

## Architecture & Highlights

- **Server Actions over API Routes:** Utilized Next.js Server Actions to handle mutations securely on the server side, eliminating boilerplate API route files.
- **Data Validation:** Implemented **Zod schemas** shared across form inputs and database operations to guarantee type safety and prevent malformed payloads.
- **Database Security:** Configured **Supabase Row-Level Security (RLS)** policies to ensure only authorized administrators can access verification workflows.

## Project Structure

```
.
├── app/
│   ├── actions/            # Server actions
│   ├── admin/              # Protected admin page
│   ├── fonts/              # External fonts
│   ├── layout.tsx          # Root layout
│   ├── login/              # Login page (using Supabase Auth)
│   └── page.tsx            # Landing page
├── components/
│   └── ui/                 # ShadCN components
├── lib/
│   ├── auth/               # Authentication helpers
│   ├── constants.ts        # App-wide constants
│   ├── motion/             # Framer Motion variants
│   ├── services/           # DB operation services
│   │   ├── campaign/
│   │   └── donation/
│   ├── supabase/           # Supabase client and type definitions
│   ├── utils.ts            # General helper functions
│   └── validation/         # Zod validation schemas
├── public/                 # Static assets
└── supabase/
    ├── migrations/         # Supabase DB migrations
    └── seed.sql            # Supabase DB seed data
```

## Getting Started

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/userVallen/happily-never-after.git
   cd happily-never-after
   ```

2. Install dependencies:
   ```bash
   pnpm i
   ```

3. Set up environment variables:
   - Create a .env.local file in the root directory and add your Supabase credentials:
        ```
        NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
        NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
        SUPABASE_SECRET_KEY=your_supabase_secret_key
        SUPABASE_JWKS_URL=your_supabase_jwks_url
        ```
        Also add the admin email:
        ```
        ADMIN_EMAIL=your_admin_email
        ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## License

Created by Vallen Nathaniel as a portfolio project.
