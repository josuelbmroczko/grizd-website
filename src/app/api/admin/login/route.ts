import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE = "grizd_admin_session";

export async function POST(request: NextRequest) {
  const { password } = await request.json().catch(() => ({ password: "" }));

  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return NextResponse.json(
      {
        error:
          "ADMIN_PASSWORD não está configurada nas Environment Variables. Configure na Vercel para ativar o login.",
      },
      { status: 500 }
    );
  }

  if (password !== adminPassword) {
    return NextResponse.json({ error: "Senha incorreta." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });

  // Sessão simples via cookie httpOnly. Para produção com múltiplos admins,
  // trocar por autenticação real (NextAuth, Lucia, Clerk, etc.) usando a
  // tabela AdminUser já preparada em prisma/schema.prisma.
  response.cookies.set(SESSION_COOKIE, "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 horas
  });

  return response;
}
