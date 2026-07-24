# Deploy Clever Work on Render

This is a Node.js + React application. On Render it runs as a single **Web Service**
that serves both the API and the built client — no separate static site is needed.

## Option A: One-click Blueprint (recommended)

This repo includes `render.yaml`, which defines the web service and a managed
PostgreSQL database together.

1. Push this repo to GitHub (see the "Get the code onto GitHub" section below if
   you haven't already).
2. In the Render dashboard, click **New → Blueprint**, connect your GitHub
   account if you haven't, and select this repository.
3. Render reads `render.yaml` and shows a preview: one Web Service
   (`clever-work`) and one PostgreSQL database (`clever-work-db`). Confirm the
   plan for each (the file defaults to `free`; change it in the preview if you
   want a paid plan instead).
4. Render will prompt you for the environment variables marked `sync: false`:
   - `ADMIN_USERNAME` — pick a new, unique admin username.
   - `ADMIN_PASSWORD` — pick a new, long, unique password. Do not reuse any
     password that has appeared in this project's local `.env` before.
   - `LEAD_WEBHOOK_URL` — optional; leave blank if you don't have one yet.
5. Click **Apply**. Render provisions the database, builds the web service
   (`npm ci && npm run build`), and starts it (`npm start`). `DATABASE_URL` and
   `SESSION_SECRET` are generated and wired up automatically — you never need
   to touch them.
6. Once the first deploy finishes, open the service URL, submit a test lead,
   then sign in at `/admin` with the credentials from step 4.
7. Push the database schema once (see "Database" below).
8. Attach a custom domain under the web service's **Settings → Custom Domains**
   tab if you want one.

## Option B: Manual Web Service (no Blueprint)

1. **New → Web Service**, connect this GitHub repo.
2. Runtime: **Node**. Build command: `npm ci && npm run build`. Start command:
   `npm start`.
3. Add environment variables under **Environment**:
   ```text
   NODE_ENV=production
   SESSION_SECRET=<a long random secret>
   DATABASE_URL=<a PostgreSQL connection string>
   ADMIN_USERNAME=<a unique admin username>
   ADMIN_PASSWORD=<a long unique password>
   LEAD_WEBHOOK_URL=<optional HTTPS webhook URL>
   ```
   Don't set `PORT` — Render injects it automatically and the app already
   reads `process.env.PORT`.
4. If you want a database, add one separately (**New → PostgreSQL**) and paste
   its **Internal Connection String** into `DATABASE_URL` above.
5. Deploy, then follow steps 6-8 from Option A.

## Get the code onto GitHub

If this repo isn't pushed yet:

```bash
git add -A
git commit -m "Your message"
git push origin main
```

Render redeploys automatically on every push to the connected branch.

## Database

The app falls back to `data/app-data.json` when no `DATABASE_URL` is set, but
that file is unsuitable here: Render's filesystem is ephemeral, so anything
written to it is lost on every redeploy or restart. Always configure
`DATABASE_URL` on Render — either the managed database from the Blueprint, or
your own (Neon, Supabase, Render Postgres created manually, etc).

Push the schema once after the database exists and `DATABASE_URL` is set:

```bash
DATABASE_URL=<paste the connection string> npm run db:push
```

Run this from a trusted machine that has the real `DATABASE_URL` — the same
command you'd run locally, just pointed at the production database. Render's
free PostgreSQL plan may have a limited lifetime or storage cap; check the
current terms in the Render dashboard before relying on it long-term.

## Pre-launch checklist

- Confirm `ADMIN_USERNAME`/`ADMIN_PASSWORD`/`SESSION_SECRET` are unique to this
  deployment, not values reused from local development or another environment.
- Run `npm run db:push` against the production database at least once.
- Submit one test lead and confirm the webhook receives it, if configured.
- Confirm `/admin` can log in over HTTPS and that a second browser session
  cannot access leads without logging in.
