import { NextRequest, NextResponse } from "next/server";
import { prisma, isDatabaseConfigured } from "@/lib/prisma";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Preencha nome, email e mensagem." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 });
  }

  // Tenta enviar o email via Resend
  try {
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "josuelbeserramroczko@gmail.com",
        subject: `Novo contato de ${name}`,
        replyTo: email,
        html: `<p>Você recebeu uma nova mensagem através do site.</p>
               <p><strong>Nome:</strong> ${name}</p>
               <p><strong>E-mail:</strong> ${email}</p>
               <p><strong>Mensagem:</strong></p>
               <p style="white-space: pre-wrap;">${message}</p>`,
      });
    } else {
      console.warn("[contact] RESEND_API_KEY não configurada. E-mail não enviado.");
    }
  } catch (error) {
    console.error("[contact] Erro ao enviar email pelo Resend:", error);
    return NextResponse.json(
      { error: "Erro ao enviar o e-mail. Tente novamente." },
      { status: 500 }
    );
  }

  // Sem banco conectado ainda: registra no log da Vercel e responde com sucesso.
  // Assim que DATABASE_URL for configurada, passa a persistir automaticamente.
  if (!isDatabaseConfigured || !prisma) {
    console.info("[contact] Nova mensagem processada:", {
      name,
      email,
      message,
    });

    return NextResponse.json({
      ok: true,
      persisted: false,
    });
  }

  try {
    const saved = await prisma.contactMessage.create({
      data: { name, email, message },
    });

    return NextResponse.json({ ok: true, persisted: true, id: saved.id });
  } catch (error) {
    console.error("[contact] Erro ao salvar no banco:", error);
    return NextResponse.json(
      { error: "Erro ao salvar sua mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}
