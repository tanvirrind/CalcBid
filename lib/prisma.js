import { PrismaClient } from "@prisma/client";

// Singleton Prisma client — safe for Next.js dev hot-reload and prod.
const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
