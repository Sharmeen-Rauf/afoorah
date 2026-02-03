"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
  ssr: false,
});

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaded = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && (
        <LoadingScreen onLoaded={handleLoaded} minDisplayMs={2200} />
      )}
      <div
        className={`min-h-screen bg-[#0a0a0a] transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <Header />
        <main>
          <HeroSection
            title="Holiday 25"
            cta="SHOP"
            ctaHref="/collections/holiday-25"
            backgroundClassName="bg-[#0f1412]"
          />
          <HeroSection
            title="Classics"
            cta="SHOP"
            ctaHref="#"
            backgroundClassName="bg-[#1a1510]"
          />
          <HeroSection
            title="Dime x Eastpak"
            cta="Discover"
            ctaHref="#"
            backgroundClassName="bg-[#0c0f1a]"
          />
        </main>
      </div>
    </>
  );
}
