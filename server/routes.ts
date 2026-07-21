import type { Express, Request, Response, NextFunction } from "express";
import type { Server } from "http";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import bcrypt from "bcrypt";
import { storage } from "./storage";
import { hasDatabase, pool } from "./db";
import { api } from "@shared/routes";
import { z } from "zod";

declare module "express-session" {
  interface SessionData {
    adminId: number;
    adminUsername: string;
  }
}

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.session.adminId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

async function sendLeadEmail(lead: Awaited<ReturnType<typeof storage.createLead>>) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("LEAD_WEBHOOK_URL not configured; skipping lead notification.");
    return;
  }

  const payload = {
    name: lead.name,
    phone: lead.phone,
    email: lead.email || null,
    projectName: lead.projectName || null,
    budget: lead.budget || null,
    companyName: lead.companyName || null,
    city: lead.city || null,
    marketingBudget: lead.marketingBudget || null,
    monthlyLeads: lead.monthlyLeads || null,
    source: lead.source || "popup",
    page: lead.page || "/",
    createdAt: lead.createdAt ? new Date(lead.createdAt).toISOString() : null,
  };

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  const PgStore = connectPgSimple(session);
  const sessionStore = hasDatabase && pool
    ? new PgStore({ pool, createTableIfMissing: true })
    : new session.MemoryStore();

  app.use(
    session({
      store: sessionStore,
      secret: process.env.SESSION_SECRET || "dev-secret-key",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      },
    })
  );

  await seedAdmin();

  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.post(api.leads.create.path, async (req, res) => {
    try {
      const input = api.leads.create.input.parse(req.body);
      const lead = await storage.createLead(input);
      try {
        await sendLeadEmail(lead);
      } catch (error) {
        console.error("Failed to send lead email notification:", error);
      }
      res.status(201).json(lead);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.post(api.admin.login.path, async (req, res) => {
    try {
      const { username, password } = api.admin.login.input.parse(req.body);
      const user = await storage.getAdminByUsername(username);
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      req.session.adminId = user.id;
      req.session.adminUsername = user.username;
      res.json({ username: user.username });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input" });
      }
      throw err;
    }
  });

  app.get(api.admin.session.path, (req, res) => {
    if (req.session.adminId) {
      res.json({ authenticated: true, username: req.session.adminUsername });
    } else {
      res.json({ authenticated: false });
    }
  });

  app.post(api.admin.logout.path, (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      res.json({ message: "Logged out" });
    });
  });

  app.get(api.leads.list.path, requireAdmin, async (_req, res) => {
    const allLeads = await storage.getLeads();
    res.json(allLeads);
  });

  return httpServer;
}

async function seedAdmin() {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  if (!username || !password) {
    throw new Error("ADMIN_USERNAME and ADMIN_PASSWORD must be configured");
  }
  const existing = await storage.getAdminByUsername(username);
  if (!existing) {
    const hash = await bcrypt.hash(password, 10);
    await storage.createAdminUser(username, hash);
    console.log(`Admin user created: ${username}`);
  }
}
