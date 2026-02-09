# replit.md

## Overview

This is a freelancer portfolio website for "The Clever Work" — a full-stack developer/consultancy business. It has two landing pages:

1. **Main Portfolio** (`/`) — Single-page marketing site with hero, tech stack marquee, stats/about, experience timeline, portfolio showcase (21 actual project screenshots), pricing plans, and contact footer. Uses dark theme with green accent (Torkfolio style).
2. **Real Estate Landing** (`/real-estate`) — A premium real estate niche landing page ("EstateVue") with hero, featured properties grid, services, about, testimonials, CTA, and footer. Uses light theme with teal-green accent.

Both pages use phone 8766350093 and email thecleverwork@gmail.com. The site includes a backend API for handling contact form submissions stored in PostgreSQL. The project follows a monorepo structure with a React frontend, Express backend, and shared schema/route definitions.

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
- **Routing**: Wouter (lightweight client-side router) — has `/` (Home portfolio), `/real-estate` (Real Estate landing), and a 404 page
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives with Tailwind CSS
- **Animations**: Framer Motion + react-intersection-observer for scroll-triggered animations
- **Styling**: Tailwind CSS with CSS custom properties for theming (dark theme by default). Fonts: Inter (body), Outfit (display)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend Architecture
- **Framework**: Express 5 running on Node.js with TypeScript (tsx for dev, esbuild for production)
- **API Pattern**: Routes defined in `shared/routes.ts` with Zod schemas for input validation. The server uses these same schemas for request validation.
- **Development**: Vite dev server is used as middleware in Express during development (see `server/vite.ts`)
- **Production**: Client is built to `dist/public/`, server is bundled to `dist/index.cjs` via esbuild

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema location**: `shared/schema.ts` — currently has one table: `contact_messages` (id, name, email, message, createdAt)
- **Connection**: `pg` Pool via `DATABASE_URL` environment variable
- **Session store**: `connect-pg-simple` is a dependency (available for future session management)
- **Migrations**: Use `npm run db:push` (drizzle-kit push) to sync schema to database

### Storage Layer
- **Pattern**: Interface-based storage (`IStorage` in `server/storage.ts`) with a `DatabaseStorage` implementation
- **Current methods**: `createContactMessage()`

### API Routes
- `POST /api/contact` — Creates a contact message (validates with Zod, returns 201 on success, 400 on validation error)

### Build Process
- **Dev**: `npm run dev` — runs tsx with Vite middleware for HMR
- **Build**: `npm run build` — Vite builds the client, esbuild bundles the server. Server dependencies on an allowlist are bundled to reduce cold start times.
- **Start**: `npm run start` — runs the production build from `dist/`
- **Type check**: `npm run check`

## External Dependencies

### Database
- **PostgreSQL** — Required. Connection string must be set in `DATABASE_URL` environment variable.

### Key NPM Packages
- **Frontend**: React, Vite, Wouter, TanStack React Query, Framer Motion, shadcn/ui (Radix UI + Tailwind CSS), Lucide icons, react-icons
- **Backend**: Express 5, Drizzle ORM, pg (node-postgres), Zod
- **Shared**: drizzle-zod for schema validation bridges

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal` — Always active
- `@replit/vite-plugin-cartographer` and `@replit/vite-plugin-dev-banner` — Active in development on Replit only

### External Services Referenced (in code/build allowlist)
- WhatsApp links for contact (external links, no API integration)
- Google Fonts (Inter, Outfit, and others loaded via CDN)
- Build allowlist includes packages like `stripe`, `openai`, `@google/generative-ai`, `nodemailer`, `passport` — these are listed for potential future use but not currently implemented