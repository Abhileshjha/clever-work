import { z } from 'zod';
import { insertContactMessageSchema, contactMessages, insertLeadSchema, leads } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  contact: {
    create: {
      method: 'POST' as const,
      path: '/api/contact' as const,
      input: insertContactMessageSchema,
      responses: {
        201: z.custom<typeof contactMessages.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
  leads: {
    create: {
      method: 'POST' as const,
      path: '/api/leads' as const,
      input: insertLeadSchema,
    },
    list: {
      method: 'GET' as const,
      path: '/api/admin/leads' as const,
    },
  },
  admin: {
    login: {
      method: 'POST' as const,
      path: '/api/admin/login' as const,
      input: z.object({
        username: z.string(),
        password: z.string(),
      }),
    },
    session: {
      method: 'GET' as const,
      path: '/api/admin/session' as const,
    },
    logout: {
      method: 'POST' as const,
      path: '/api/admin/logout' as const,
    },
  },
};
