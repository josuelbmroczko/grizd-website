"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Não foi possível entrar.");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-void px-6">
      <div className="w-full max-w-sm rounded-2xl border border-hairline bg-panel-gradient p-8 shadow-card">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-panelLight">
            <Lock className="h-4 w-4 text-silver-300" />
          </div>
          <div>
            <h1 className="font-display text-lg text-silver-100">Admin</h1>
            <p className="text-xs text-silver-500">Área restrita</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="mb-1.5 block text-xs text-silver-400">
              Senha
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-hairline bg-charcoal px-3 py-2.5 text-sm text-silver-100 outline-none placeholder:text-silver-600 focus:border-silver-400"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-xs text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-silver-gradient py-2.5 text-sm font-medium text-void transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}
