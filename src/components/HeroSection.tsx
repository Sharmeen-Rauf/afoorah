"use client";

import Link from "next/link";

interface HeroSectionProps {
  title: string;
  cta?: string;
  ctaHref?: string;
  backgroundClassName?: string;
  backgroundGradient?: string;
}

export default function HeroSection({
  title,
  cta = "SHOP",
  ctaHref = "#",
  backgroundClassName = "bg-zinc-900",
  backgroundGradient,
}: HeroSectionProps) {
  return (
    <section
      className={`relative flex min-h-screen w-full flex-col items-center justify-center ${backgroundClassName}`}
      style={
        backgroundGradient
          ? { background: backgroundGradient }
          : undefined
      }
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="font-serif text-5xl font-normal tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {title}
        </h2>
        <Link
          href={ctaHref}
          className="mt-6 font-sans text-sm tracking-[0.25em] text-white uppercase transition-opacity hover:opacity-80"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}
