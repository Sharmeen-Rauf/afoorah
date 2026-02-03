"use client";

import Link from "next/link";

interface HeaderProps {
  /** "dark" = white text (hero), "light" = dark text (collection/shop over white) */
  variant?: "dark" | "light";
}

export default function Header({ variant = "dark" }: HeaderProps) {
  const nav = [
    { label: "SHOP", href: "/collections/holiday-25" },
    { label: "LOOKBOOK", href: "#" },
    { label: "STORES", href: "#" },
    { label: "PROJECTS", href: "#" },
  ];

  const textClass = variant === "light" ? "text-zinc-900" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 sm:px-8 md:px-12 bg-transparent ${textClass}`}
    >
      <nav className="flex gap-8 font-sans text-sm tracking-widest uppercase">
        {nav.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="transition-opacity hover:opacity-70"
          >
            {label}
          </Link>
        ))}
      </nav>
      <Link
        href="/"
        className="absolute left-1/2 -translate-x-1/2 font-serif text-xl tracking-wide"
      >
        Dime
      </Link>
      <div className="flex items-center gap-6 font-sans text-sm tracking-widest uppercase">
        <button type="button" className="transition-opacity hover:opacity-70">
          $USD (EN)
        </button>
        <Link href="/cart" className="transition-opacity hover:opacity-70">
          CART (0)
        </Link>
      </div>
    </header>
  );
}
