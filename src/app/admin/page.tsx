import { prisma, isDatabaseConfigured } from "@/lib/prisma";
import { Database, LogOut, Mail } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

// Espelha o model ContactMessage do prisma/schema.prisma. Mantido explícito
// aqui para o projeto compilar mesmo antes de "prisma generate" ser rodado
// (ex: primeiro deploy, antes de o Postgres estar conectado).
type ContactMessageRow = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  readAt: Date | null;
};

async function getMessages(): Promise<ContactMessageRow[] | null> {
  if (!isDatabaseConfigured || !prisma) return null;

  try {
    return await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
  } catch {
    return null;
  }
}

export default async function AdminPage() {
  const messages = await getMessages();

  return (
    <main className="min-h-screen bg-void px-6 py-10 md:px-12">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <p className="eyebrow mb-1">Painel administrativo</p>
            <h1 className="font-display text-2xl text-silver-100">
              Mensagens de contato
            </h1>
          </div>

          <form action="/api/admin/logout" method="post">
            <button
              formAction="/api/admin/logout"
              className="flex items-center gap-2 rounded-lg border border-hairline px-3 py-2 text-xs text-silver-400 transition hover:border-silver-400 hover:text-silver-100"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sair
            </button>
          </form>
        </header>

        {!isDatabaseConfigured && (
          <div className="mb-8 flex items-start gap-3 rounded-xl border border-hairline bg-panel p-5">
            <Database className="mt-0.5 h-5 w-5 shrink-0 text-silver-400" />
            <div>
              <p className="text-sm text-silver-200">
                Nenhum banco de dados conectado ainda.
              </p>
              <p className="mt-1 text-xs leading-relaxed text-silver-500">
                Adicione a variável <code className="text-silver-300">DATABASE_URL</code>{" "}
                nas Environment Variables do projeto na Vercel (aponte para um
                Postgres — Vercel Postgres, Neon, Supabase ou Railway funcionam),
                depois rode{" "}
                <code className="text-silver-300">npx prisma migrate deploy</code>. As
                mensagens do formulário de contato passam a aparecer aqui
                automaticamente.
              </p>
            </div>
          </div>
        )}

        {isDatabaseConfigured && messages === null && (
          <div className="mb-8 rounded-xl border border-hairline bg-panel p-5 text-sm text-silver-400">
            Não foi possível consultar o banco de dados. Verifique se as
            migrations foram aplicadas (
            <code className="text-silver-300">npx prisma migrate deploy</code>).
          </div>
        )}

        {messages && messages.length === 0 && (
          <div className="rounded-xl border border-hairline bg-panel p-8 text-center text-sm text-silver-500">
            Nenhuma mensagem recebida ainda.
          </div>
        )}

        {messages && messages.length > 0 && (
          <ul className="space-y-3">
            {messages.map((m: ContactMessageRow) => (
              <li
                key={m.id}
                className="rounded-xl border border-hairline bg-panel p-5"
              >
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-medium text-silver-100">{m.name}</p>
                  <span className="text-[11px] text-silver-500">
                    {new Date(m.createdAt).toLocaleString("pt-BR")}
                  </span>
                </div>
                <p className="mb-2 flex items-center gap-1.5 text-xs text-silver-400">
                  <Mail className="h-3 w-3" /> {m.email}
                </p>
                <p className="text-sm text-silver-300">{m.message}</p>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10">
          <Link href="/" className="text-xs text-silver-500 hover:text-silver-200">
            ← Voltar para o site
          </Link>
        </div>
      </div>
    </main>
  );
}
