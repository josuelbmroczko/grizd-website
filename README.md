# Kristi Skëndaj (GrizD) — Website

Site pessoal em **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, pronto
para deploy na **Vercel**. Já vem preparado para receber uma **página de
admin** com **PostgreSQL** via **Prisma** — mas hoje roda 100% sem banco
conectado.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Prisma (ORM, já com schema para Postgres — não conectado ainda)
- lucide-react (ícones)

## Rodando localmente

```bash
npm install
cp .env.example .env   # opcional — não precisa preencher nada pra rodar local
npm run dev
```

Abra http://localhost:3000

## Estrutura

```
src/
  app/
    page.tsx              → monta a home com todas as seções
    layout.tsx             → fontes (Space Grotesk, Inter, JetBrains Mono) e metadata
    globals.css
    api/contact/route.ts   → recebe o formulário de contato
    admin/                 → área /admin (protegida por senha)
    api/admin/              → login/logout do admin
  components/               → uma seção do site por arquivo
  lib/
    content.ts              → TODO o conteúdo textual do site (edite aqui)
    prisma.ts                → client Prisma "seguro" (funciona sem DATABASE_URL)
prisma/
  schema.prisma              → modelos ContactMessage e AdminUser (Postgres)
public/
  ASSETS_TODO.md             → lista de imagens/CV que faltam adicionar
```

## Editar conteúdo do site

Praticamente todo o texto (nome, faixas do Spotify, vídeos, redes sociais,
etc.) está centralizado em **`src/lib/content.ts`**. Não é necessário mexer
nos componentes para trocar textos, links ou adicionar/remover faixas.

## Imagens e CV pendentes

Veja **`public/ASSETS_TODO.md`** — há placeholders visuais (iniciais "KS" em
fundo gradiente) no Hero, About e Companies até você adicionar os arquivos
reais (foto, fundo do estúdio, logos, CV em PDF).

## Deploy na Vercel

1. Suba este projeto num repositório Git (GitHub/GitLab/Bitbucket).
2. Na Vercel: **Add New Project** → importe o repositório.
   - Framework Preset: **Next.js** (detectado automaticamente)
   - Build Command / Output: padrão do Next.js, não precisa mexer
3. Em **Environment Variables**, você pode fazer o deploy **sem configurar
   nada** — o site funciona normalmente (formulário de contato só não salva
   em banco, fica registrado no log).
4. Clique em **Deploy**.

Pronto — o site está no ar.

## Conectando o Postgres depois (quando quiser)

1. Crie um banco Postgres (Vercel Postgres, [Neon](https://neon.tech),
   [Supabase](https://supabase.com) ou Railway são opções simples e com
   plano gratuito).
2. Copie a connection string (formato
   `postgresql://usuario:senha@host:5432/banco`).
3. Na Vercel: **Project → Settings → Environment Variables** → adicione:
   - `DATABASE_URL` = a connection string
   - `ADMIN_PASSWORD` = uma senha forte, para liberar o `/admin`
4. Rode as migrations (localmente, apontando pro banco de produção, ou via
   um comando no seu terminal com a `DATABASE_URL` de produção exportada):
   ```bash
   npx prisma migrate deploy
   ```
5. Faça um novo deploy (ou apenas um redeploy) na Vercel.

A partir daqui:
- O formulário de **Contact** passa a salvar as mensagens no Postgres
  automaticamente (a rota `api/contact` já detecta `DATABASE_URL` sozinha).
- A página **`/admin`** (protegida por `ADMIN_PASSWORD`) passa a listar as
  mensagens recebidas.

Nenhum código precisa ser alterado para isso — é só configurar as env vars e
rodar a migration.

## Expandindo a área de admin

O login atual (`/admin/login`) é propositalmente simples (uma senha via
cookie), suficiente para uso pessoal. O `prisma/schema.prisma` já inclui um
modelo `AdminUser` (com `email` + `passwordHash`) caso no futuro você queira
múltiplos usuários com autenticação real — nesse caso, vale trocar por
NextAuth, Lucia ou Clerk usando essa tabela como base.
