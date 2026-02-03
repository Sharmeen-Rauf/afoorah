"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";

// Mock product data keyed by slug
const PRODUCTS: Record<
  string,
  { name: string; color: string; price: string; description: string }
> = {
  "ho25-quilted-ripstop-puffer-emerald": {
    name: "Quilted Ripstop Puffer",
    color: "Emerald",
    price: "198",
    description: "Lightweight quilted ripstop puffer with hood. Holiday 25 collection.",
  },
  "ho25-quilted-ripstop-puffer-sage": {
    name: "Quilted Ripstop Puffer",
    color: "Sage",
    price: "198",
    description: "Lightweight quilted ripstop puffer with hood. Holiday 25 collection.",
  },
  "ho25-hooded-jacket-forest": {
    name: "Hooded Jacket",
    color: "Forest",
    price: "245",
    description: "Hooded jacket with visible stitching. Holiday 25 collection.",
  },
  "ho25-quilted-collar-jacket-slate": {
    name: "Quilted Collar Jacket",
    color: "Slate",
    price: "225",
    description: "Quilted collar jacket. Holiday 25 collection.",
  },
  "ho25-crewneck-sweater-oat": {
    name: "Crewneck Sweater",
    color: "Oat",
    price: "128",
    description: "Crewneck sweater. Holiday 25 collection.",
  },
  "ho25-logo-tee-black": {
    name: "Logo Tee",
    color: "Black",
    price: "58",
    description: "Logo tee. Holiday 25 collection.",
  },
  "ho25-cargo-pants-olive": {
    name: "Cargo Pants",
    color: "Olive",
    price: "165",
    description: "Cargo pants. Holiday 25 collection.",
  },
  "ho25-beanie-navy": {
    name: "Beanie",
    color: "Navy",
    price: "42",
    description: "Beanie. Holiday 25 collection.",
  },
};

export default function ProductPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const product = slug ? PRODUCTS[slug] : null;

  if (!slug || !product) {
    return (
      <div className="min-h-screen bg-white">
        <Header variant="light" />
        <main className="pt-32 px-6 text-center">
          <h1 className="font-serif text-2xl text-zinc-900">Product not found</h1>
          <Link
            href="/collections/holiday-25"
            className="mt-4 inline-block font-sans text-sm uppercase tracking-widest text-zinc-600 hover:text-zinc-900"
          >
            Back to Holiday 25
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header variant="light" />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <Link
            href="/collections/holiday-25"
            className="mb-8 inline-block font-sans text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-900"
          >
            ← Holiday 25
          </Link>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-zinc-200">
              <div className="h-full w-full bg-gradient-to-b from-zinc-300 to-zinc-400" />
            </div>
            <div>
              <h1 className="font-serif text-3xl font-normal tracking-wide text-zinc-900 md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-2 font-sans text-sm text-zinc-500">{product.color}</p>
              <p className="mt-4 font-sans text-2xl font-medium text-zinc-900">
                ${product.price} USD
              </p>
              <p className="mt-6 font-sans text-sm leading-relaxed text-zinc-600">
                {product.description}
              </p>
              <button
                type="button"
                className="mt-8 w-full max-w-sm border border-zinc-900 bg-zinc-900 px-6 py-3 font-sans text-xs uppercase tracking-widest text-white transition-colors hover:bg-zinc-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
