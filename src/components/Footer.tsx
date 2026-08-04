import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-charcoal py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-silver-600">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="font-mono text-[11px] text-silver-600">{site.role}</p>
      </div>
    </footer>
  );
}
