"use client";

import { useState } from "react";
import { PHONE_DISPLAY } from "@/lib/data";

const links = [
  { href: "#paquetes", label: "Paquetes" },
  { href: "#transporte", label: "Transporte expreso" },
  { href: "#nosotros", label: "Por qué nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-sand/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-7 py-4">
        <div className="flex items-baseline gap-2 font-display text-xl font-bold tracking-tight">
          Servy Express
          <span className="rounded-full border border-teal-deep px-1.5 py-0.5 font-body text-[0.62rem] font-semibold tracking-wide text-teal-deep">
            Agencia
          </span>
        </div>

        <nav
          className={`fixed inset-x-0 top-[66px] flex flex-col items-start gap-4 border-b border-ink/15 bg-cream px-7 py-5 transition-all duration-200 md:static md:flex-row md:items-center md:gap-7 md:border-none md:bg-transparent md:p-0 md:opacity-100 md:pointer-events-auto ${
            open
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-2 opacity-0 pointer-events-none md:translate-y-0"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[0.95rem] font-medium text-ink-soft hover:text-terracotta-deep"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+573127087404"
            className="whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream"
          >
            {PHONE_DISPLAY}
          </a>
        </nav>

        <button
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink md:hidden"
        >
          <span className="relative block h-0.5 w-[18px] bg-ink before:absolute before:-top-1.5 before:left-0 before:h-0.5 before:w-[18px] before:bg-ink after:absolute after:top-1.5 after:left-0 after:h-0.5 after:w-[18px] after:bg-ink" />
        </button>
      </div>
    </header>
  );
}
