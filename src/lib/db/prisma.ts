import { PrismaClient } from "@prisma/client";

// Ensure `globalThis` is cast properly to access `prisma` in a global context
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Initialize Prisma client if it's not already initialized
const prismaBase = globalForPrisma.prisma ?? new PrismaClient();

// Extend Prisma client with custom query modifications
export const prisma = prismaBase.$extends({
  query: {
    cart: {
      async update({ args, query }) {
        args.data = { ...args.data, updatedAt: new Date() };
        return query(args);
      },
    },
  },
});

// Store Prisma client globally in non-production environments
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prismaBase;
}