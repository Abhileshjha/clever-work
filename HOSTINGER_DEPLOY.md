# Deploy Clever Work on Hostinger

This is a Node.js + React application. It must run as a **Node.js Web App** or on a VPS; uploading `dist/public` to a normal `public_html` website will show the marketing pages but will break lead forms, login, and the admin dashboard.

## Recommended: Hostinger Node.js Web App

1. Put this project in a private GitHub repository. Do not commit `.env`, `data/app-data.json`, `node_modules`, or generated `dist` files.
2. In hPanel, select **Websites → Add website → Node.js Web App** and connect the repository. Set the repository root to this project.
3. In the app's build settings use:

   ```text
   NPM_CONFIG_PRODUCTION=false npm ci && npm run build
   ```

   Use this start command:

   ```text
   npm start
   ```

   If Hostinger requires a root entry file, set:

   ```text
   server.js
   ```

4. In the hPanel environment-variable UI, add the following values. Never upload a production `.env` file or paste its values into GitHub:

   ```text
   NODE_ENV=production
   SESSION_SECRET=<a-long-random-secret>
   DATABASE_URL=<your-postgresql-connection-url>
   ADMIN_USERNAME=<a-unique-admin-username>
   ADMIN_PASSWORD=<a-long-unique-password>
   LEAD_WEBHOOK_URL=<optional HTTPS webhook URL>
   ```

   Do not set `PORT` unless Hostinger specifically asks for it—the application automatically uses the platform-provided port.

5. Attach the domain in hPanel, deploy, and open `https://your-domain/`. Verify the lead form and then sign in at `https://your-domain/admin`.

## Database

For production, use PostgreSQL and provide `DATABASE_URL`. The app can fall back to `data/app-data.json` when no database is configured, but that file is unsuitable for a managed deployment because a rebuild/redeploy can discard leads and it cannot safely handle concurrent requests.

Create the database schema once after adding `DATABASE_URL`:

```bash
npm ci
npm run db:push
```

Run that command from a trusted machine or terminal that has the production `DATABASE_URL`; do not expose the URL in source control.

## Alternative: Hostinger VPS

Use Ubuntu 24.04, upload/clone the repository to `/var/www/clever-work`, configure the same environment variables in `/var/www/clever-work/.env` (owned by the deployment user, mode `600`), then run:

```bash
cd /var/www/clever-work
npm ci
npm run build
npm install -g pm2
NODE_ENV=production pm2 start dist/index.cjs --name clever-work
pm2 save
pm2 startup
```

Proxy the domain to the application port (normally `5000`) with NGINX. Set the `Host`, `X-Forwarded-For`, and `X-Forwarded-Proto` headers, then enable a TLS certificate before testing `/admin`.

## Pre-launch checklist

- Replace any existing admin username, password, and session secret; the previous sample credentials must never be used in production.
- Configure a PostgreSQL database and run `npm run db:push`.
- Submit one test lead and confirm the webhook receives it, if configured.
- Confirm `/admin` can log in over HTTPS and that a second browser session cannot access leads without logging in.
