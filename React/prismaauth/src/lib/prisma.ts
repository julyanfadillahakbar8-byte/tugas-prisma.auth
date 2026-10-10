import { PrismaClient } from "../generated/prisma/client";

declare global {
  var prismaDb: PrismaClient | undefined;
}

export const prisma = globalThis.prismaDb ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  globalThis.prismaDb = prisma;
}