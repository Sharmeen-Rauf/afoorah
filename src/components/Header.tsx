"use client";

export default function Header() {
  const nav = [
    { label: "SHOP", href: "#" },
    { label: "LOOKBOOK", href: "#" },
    { label: "STORES", href: "#" },
    { label: "PROJECTS", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 text-white pointer-events-none sm:px-8 md:px-12">
      <nav className="flex gap-8 font-sans text-sm tracking-widest uppercase">
        {nav.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="pointer-events-auto transition-opacity hover:opacity-70"
          >
            {label}
          </a>
        ))}
      </nav>
      <a
        href="/"
        className="absolute left-1/2 -translate-x-1/2 font-serif text-xl tracking-wide pointer-events-auto"
      >
        Dime
      </a>
      <div className="flex items-center gap-6 font-sans text-sm tracking-widest uppercase pointer-events-auto">
        <button type="button" className="transition-opacity hover:opacity-70">
          $USD (EN)
        </button>
        <a href="#" className="transition-opacity hover:opacity-70">
          CART (0)
        </a>
      </div>
    </header>
  );
}
