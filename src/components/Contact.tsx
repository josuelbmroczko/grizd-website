"use client";

import { useState } from "react";
import { site } from "@/lib/content";
import { Instagram, Linkedin, Download } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error ?? "Algo deu errado.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg("Erro de conexão. Tente novamente.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-void pb-24 pt-24">
      <div className="mx-auto max-w-2xl px-6">
        <p className="eyebrow mb-3 text-center">Get in touch</p>
        <h2 className="text-center font-display text-3xl text-silver-100 sm:text-4xl">
          Contact
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-4 rounded-2xl border border-hairline bg-panel p-6 shadow-card sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs text-silver-400">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-hairline bg-charcoal px-3 py-2.5 text-sm text-silver-100 outline-none placeholder:text-silver-600 focus:border-silver-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs text-silver-400">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-hairline bg-charcoal px-3 py-2.5 text-sm text-silver-100 outline-none placeholder:text-silver-600 focus:border-silver-400"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs text-silver-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-hairline bg-charcoal px-3 py-2.5 text-sm text-silver-100 outline-none placeholder:text-silver-600 focus:border-silver-400"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-lg bg-silver-gradient py-3 text-sm font-medium text-void transition hover:opacity-90 disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-center text-xs text-silver-300">
              Message sent — thank you! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-xs text-red-400">{errorMsg}</p>
          )}
        </form>

        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver-400 transition hover:text-silver-100"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver-400 transition hover:text-silver-100"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <a
            href={site.cvFile}
            download
            className="card-hover inline-flex items-center gap-2 rounded-full border border-hairline bg-panel px-6 py-2.5 text-xs font-medium text-silver-200 shadow-card transition hover:bg-charcoal"
          >
            <Download className="h-4 w-4" />
            Download my CV
          </a>
        </div>
      </div>
    </section>
  );
}
