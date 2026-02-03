"use client";

import Link from "next/link";
import Header from "@/components/Header";

const FILTERS = [
  { label: "ALL HOLIDAY 25", active: true },
  { label: "TOPS", active: false },
  { label: "BOTTOMS", active: false },
  { label: "ACCESSORIES", active: false },
];

const MOCK_PRODUCTS = [
  { id: "1", slug: "ho25-quilted-ripstop-puffer-emerald", name: "Quilted Ripstop Puffer", color: "Emerald", badge: "A FEW LEFT", price: "198" },
  { id: "2", slug: "ho25-quilted-ripstop-puffer-sage", name: "Quilted Ripstop Puffer", color: "Sage", price: "198" },
  { id: "3", slug: "ho25-hooded-jacket-forest", name: "Hooded Jacket", color: "Forest", price: "245" },
  { id: "4", slug: "ho25-quilted-collar-jacket-slate", name: "Quilted Collar Jacket", color: "Slate", price: "225" },
  { id: "5", slug: "ho25-crewneck-sweater-oat", name: "Crewneck Sweater", color: "Oat", price: "128" },
  { id: "6", slug: "ho25-logo-tee-black", name: "Logo Tee", color: "Black", price: "58" },
  { id: "7", slug: "ho25-cargo-pants-olive", name: "Cargo Pants", color: "Olive", price: "165" },
  { id: "8", slug: "ho25-beanie-navy", name: "Beanie", color: "Navy", price: "42" },
];

function ProductCard({
  slug,
  name,
  color,
  price,
  badge,
}: {
  slug: string;
  name: string;
  color: string;
  price: string;
  badge?: string;
}) {
  return (
    <Link href={`/products/${slug}`} className="group block">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-zinc-200">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-300 to-zinc-400" />
        {badge && (
          <span className="absolute left-2 top-2 rounded border border-zinc-900 bg-white px-2 py-0.5 font-sans text-xs uppercase tracking-wider text-zinc-900">
            {badge}
          </span>
        )}
      </div>
      <div className="mt-3 space-y-0.5">
        <p className="font-sans text-sm font-medium text-zinc-900 group-hover:underline">
          {name}
        </p>
        <p className="font-sans text-xs text-zinc-500">{color}</p>
        <p className="font-sans text-sm font-medium text-zinc-900">${price} USD</p>
      </div>
    </Link>
  );
}

export default function Holiday25Collection() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="light" />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
          <h1 className="font-serif text-4xl font-normal tracking-wide text-zinc-900 md:text-5xl">
            Holiday 25
          </h1>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-4">
            <div className="flex gap-1 overflow-x-auto">
              {FILTERS.map((f) => (
                <button
                  key={f.label}
                  type="button"
                  className={`whitespace-nowrap px-4 py-2 font-sans text-xs uppercase tracking-widest transition-colors ${
                    f.active
                      ? "rounded border border-zinc-900 bg-zinc-900 text-white"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="font-sans text-xs uppercase tracking-widest text-zinc-600 hover:text-zinc-900"
              >
                Filters
              </button>
              <span className="font-sans text-xs text-zinc-500">
                272 products
              </span>
              <div className="flex gap-1">
                <button
                  type="button"
                  className="rounded p-1.5 text-zinc-900"
                  title="Grid view"
                >
                  <GridIcon />
                </button>
                <button
                  type="button"
                  className="rounded p-1.5 text-zinc-400"
                  title="List view"
                >
                  <ListIcon />
                </button>
              </div>
              <div className="flex gap-3 font-sans text-xs text-zinc-600">
                <span className="font-medium text-zinc-900">Product</span>
                <button type="button" className="hover:text-zinc-900">
                  Model
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {MOCK_PRODUCTS.map((p) => (
              <ProductCard
                key={p.id}
                slug={p.slug}
                name={p.name}
                color={p.color}
                price={p.price}
                badge={p.badge}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="1" width="6" height="6" rx="0.5" />
      <rect x="11" y="1" width="6" height="6" rx="0.5" />
      <rect x="1" y="11" width="6" height="6" rx="0.5" />
      <rect x="11" y="11" width="6" height="6" rx="0.5" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="2" width="16" height="4" rx="0.5" />
      <rect x="1" y="8" width="16" height="4" rx="0.5" />
      <rect x="1" y="14" width="16" height="4" rx="0.5" />
    </svg>
  );
}
