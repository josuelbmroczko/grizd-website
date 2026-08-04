import { PrismaClient } from "@prisma/client";

// Evita múltiplas instâncias do Prisma Client em dev (hot reload do Next.js)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Só cria o client se houver DATABASE_URL configurada.
// Isso permite fazer o deploy do site na Vercel SEM banco conectado ainda —
// nenhuma rota quebra por falta de env var, elas apenas ficam "desativadas"
// até você adicionar DATABASE_URL nas Environment Variables da Vercel.
export const isDatabaseConfigured = Boolean(process.env.DATABASE_URL);

export const prisma: PrismaClient | undefined = isDatabaseConfigured
  ? globalForPrisma.prisma ??
    new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    })
  : undefined;

if (process.env.NODE_ENV !== "production" && prisma) {
  globalForPrisma.prisma = prisma;
}
