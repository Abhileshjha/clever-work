import {
  contactMessages,
  type InsertContactMessage,
  type ContactMessage,
  leads,
  type InsertLead,
  type Lead,
  adminUsers,
  type AdminUser,
} from "@shared/schema";
import { db, hasDatabase } from "./db";
import { eq, desc } from "drizzle-orm";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  getAdminByUsername(username: string): Promise<AdminUser | undefined>;
  createAdminUser(username: string, password: string): Promise<AdminUser>;
}

interface FileStoreData {
  contactMessages: ContactMessage[];
  leads: Lead[];
  adminUsers: AdminUser[];
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db!.insert(contactMessages).values(message).returning();
    return newMessage;
  }

  async createLead(lead: InsertLead): Promise<Lead> {
    const [newLead] = await db!.insert(leads).values(lead).returning();
    return newLead;
  }

  async getLeads(): Promise<Lead[]> {
    return await db!.select().from(leads).orderBy(desc(leads.createdAt));
  }

  async getAdminByUsername(username: string): Promise<AdminUser | undefined> {
    const [user] = await db!.select().from(adminUsers).where(eq(adminUsers.username, username));
    return user;
  }

  async createAdminUser(username: string, password: string): Promise<AdminUser> {
    const [user] = await db!.insert(adminUsers).values({ username, password }).returning();
    return user;
  }
}

export class FileStorage implements IStorage {
  constructor(private readonly filePath: string) {
    const dir = path.dirname(filePath);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
  }

  private readData(): FileStoreData {
    if (!existsSync(this.filePath)) {
      return { contactMessages: [], leads: [], adminUsers: [] };
    }

    const raw = readFileSync(this.filePath, "utf8");
    if (!raw.trim()) {
      return { contactMessages: [], leads: [], adminUsers: [] };
    }

    return JSON.parse(raw) as FileStoreData;
  }

  private writeData(data: FileStoreData) {
    writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const data = this.readData();
    const newMessage: ContactMessage = {
      id: data.contactMessages.length + 1,
      name: message.name,
      email: message.email,
      message: message.message,
      createdAt: new Date(),
    } as ContactMessage;
    data.contactMessages.push(newMessage);
    this.writeData(data);
    return newMessage;
  }

  async createLead(lead: InsertLead): Promise<Lead> {
    const data = this.readData();
    const newLead: Lead = {
      id: data.leads.length + 1,
      name: lead.name,
      phone: lead.phone,
      email: lead.email ?? null,
      projectName: lead.projectName ?? null,
      budget: lead.budget ?? null,
      companyName: lead.companyName ?? null,
      city: lead.city ?? null,
      marketingBudget: lead.marketingBudget ?? null,
      monthlyLeads: lead.monthlyLeads ?? null,
      source: lead.source ?? "popup",
      page: lead.page ?? "/",
      createdAt: new Date(),
    } as Lead;
    data.leads.push(newLead);
    this.writeData(data);
    return newLead;
  }

  async getLeads(): Promise<Lead[]> {
    const data = this.readData();
    return [...data.leads].sort((a, b) => {
      const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return bTime - aTime;
    });
  }

  async getAdminByUsername(username: string): Promise<AdminUser | undefined> {
    const data = this.readData();
    return data.adminUsers.find((user) => user.username === username);
  }

  async createAdminUser(username: string, password: string): Promise<AdminUser> {
    const data = this.readData();
    const newUser: AdminUser = {
      id: data.adminUsers.length + 1,
      username,
      password,
    } as AdminUser;
    data.adminUsers.push(newUser);
    this.writeData(data);
    return newUser;
  }
}

export function createFileStorage(filePath = process.env.STORAGE_FILE || path.resolve(process.cwd(), "data", "app-data.json")) {
  return new FileStorage(path.resolve(filePath));
}

export const storage = hasDatabase ? new DatabaseStorage() : createFileStorage();
