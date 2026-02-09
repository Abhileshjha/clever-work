import {
  contactMessages, type InsertContactMessage, type ContactMessage,
  leads, type InsertLead, type Lead,
  adminUsers, type AdminUser,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  getAdminByUsername(username: string): Promise<AdminUser | undefined>;
  createAdminUser(username: string, password: string): Promise<AdminUser>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }

  async createLead(lead: InsertLead): Promise<Lead> {
    const [newLead] = await db.insert(leads).values(lead).returning();
    return newLead;
  }

  async getLeads(): Promise<Lead[]> {
    return await db.select().from(leads).orderBy(desc(leads.createdAt));
  }

  async getAdminByUsername(username: string): Promise<AdminUser | undefined> {
    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.username, username));
    return user;
  }

  async createAdminUser(username: string, password: string): Promise<AdminUser> {
    const [user] = await db.insert(adminUsers).values({ username, password }).returning();
    return user;
  }
}

export const storage = new DatabaseStorage();
