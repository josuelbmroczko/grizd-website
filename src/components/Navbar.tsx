"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "border-b border-hairline bg-void/80 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={120} 
            height={48} 
            className="h-20 w-auto object-contain" 
            priority 
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-xs uppercase tracking-widest text-silver-400 transition hover:text-silver-100"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-silver-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-hairline bg-void px-6 py-4 md:hidden">
          {nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm uppercase tracking-widest text-silver-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
