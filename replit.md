# replit.md

## Overview

This is a freelancer portfolio website for "The Clever Work" — a full-stack developer/consultancy business. It has three main pages:

1. **Main Portfolio** (`/`) — Single-page marketing site with hero, tech stack marquee, stats/about, experience timeline (accordion services + tech grid), portfolio showcase (21 project screenshots), pricing plans, and contact footer. Uses dark theme with green accent. Includes a timed lead capture popup.
2. **Real Estate Landing** (`/real-estate`) — A B2B performance marketing agency landing page targeting real estate developers. Sections: Hero with inline lead form, Problems, Results with ROI table + inline lead form, Services (6 cards), Portfolio/Clients, Pricing (3 tiers: 30K-60K, 60K-85K, 90K-1.5L), Process timeline, Why Us, CTA with inline lead form, Footer. Uses light theme with teal-green accent (#0d7c5f). Includes a timed lead capture popup.
3. **Admin Dashboard** (`/admin`) — Protected admin page with login. Shows all leads from both pages in a searchable, filterable table with CSV export. Login credentials: Ugna1908 / Ugna@19082022.

Both landing pages use phone 8766350093 and email thecleverwork@gmail.com. The site includes a backend API for leads, contact messages, and admin authentication with session management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Directory Structure
- **`client/`** — React frontend (Vite-powered SPA)
- **`server/`** — Express backend API
- **`shared/`** — Shared code between frontend and backend (database schema, API route definitions)
- **`migrations/`** — Drizzle ORM database migrations
- **`script/`** — Build scripts

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite with HMR support during development
- **Routing**: Wouter — has `/` (Home portfolio), `/real-estate` (Real Estate landing), `/admin` (Admin dashboard), and a 404 page
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui (new-york style) for admin page. Custom CSS classes (`.trk-*` for portfolio, `.re-*` for RE page) for landing pages.
- **Animations**: Framer Motion + react-intersection-observer for scroll-triggered animations
- **Styling**: Tailwind CSS with CSS custom properties for theming (dark theme by default). Fonts: Inter (body), Outfit (display)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend Architecture
- **Framework**: Express 5 running on Node.js with TypeScript (tsx for dev, esbuild for production)
- **API Pattern**: Routes defined in `shared/routes.ts` with Zod schemas for input validation.
- **Session Management**: express-session with connect-pg-simple (PostgreSQL session store)
- **Authentication**: bcrypt password hashing, session-based admin auth
- **Development**: Vite dev server is used as middleware in Express during development (see `server/vite.ts`)
- **Production**: Client is built to `dist/public/`, server is bundled to `dist/index.cjs` via esbuild

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema location**: `shared/schema.ts` — tables:
  - `contact_messages` (id, name, email, message, createdAt)
  - `leads` (id, name, phone, email, projectName, budget, source, page, createdAt)
  - `admin_users` (id, username, password)
- **Connection**: `pg` Pool via `DATABASE_URL` environment variable
- **Session store**: `connect-pg-simple` with auto table creation
- **Migrations**: Use `npm run db:push` (drizzle-kit push) to sync schema to database

### Storage Layer
- **Pattern**: Interface-based storage (`IStorage` in `server/storage.ts`) with a `DatabaseStorage` implementation
- **Methods**: `createContactMessage()`, `createLead()`, `getLeads()`, `getAdminByUsername()`, `createAdminUser()`

### API Routes
- `POST /api/contact` — Creates a contact message
- `POST /api/leads` — Creates a lead (from popup or inline forms)
- `POST /api/admin/login` — Admin login with session
- `GET /api/admin/session` — Check current auth status
- `POST /api/admin/logout` — Admin logout
- `GET /api/admin/leads` — Get all leads (requires admin auth)

### Key Components
- **LeadPopup** (`client/src/components/LeadPopup.tsx`) — Timed popup (8s) for lead capture on both pages. Supports dark/light variants. Dismissible per session.
- **LeadForm** (`client/src/components/LeadForm.tsx`) — Inline lead form component with multiple variants (dark/light/glass). Supports optional project name and budget fields. Used in RE page hero, results, and CTA sections.
- **Admin** (`client/src/pages/Admin.tsx`) — Admin dashboard with login form, stats cards, searchable/filterable leads table, and CSV export.

### Build Process
- **Dev**: `npm run dev` — runs tsx with Vite middleware for HMR
- **Build**: `npm run build` — Vite builds the client, esbuild bundles the server.
- **Start**: `npm run start` — runs the production build from `dist/`
- **Type check**: `npm run check`

## External Dependencies

### Database
- **PostgreSQL** — Required. Connection string must be set in `DATABASE_URL` environment variable.

### Key NPM Packages
- **Frontend**: React, Vite, Wouter, TanStack React Query, Framer Motion, shadcn/ui (Radix UI + Tailwind CSS), Lucide icons, react-icons
- **Backend**: Express 5, Drizzle ORM, pg (node-postgres), Zod, express-session, connect-pg-simple, bcrypt
- **Shared**: drizzle-zod for schema validation bridges

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal` — Always active
- `@replit/vite-plugin-cartographer` and `@replit/vite-plugin-dev-banner` — Active in development on Replit only

### External Services Referenced
- WhatsApp links for contact (external links, no API integration)
- Google Fonts (Inter, Outfit, and others loaded via CDN)
