"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import LoadingScene from "./LoadingScene";

interface LoadingScreenProps {
  onLoaded?: () => void;
  minDisplayMs?: number;
}

export default function LoadingScreen({
  onLoaded,
  minDisplayMs = 2200,
}: LoadingScreenProps) {
  const [opacity, setOpacity] = useState(1);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const timer = setTimeout(() => {
      setOpacity(0);
    }, minDisplayMs);

    const fadeOutDuration = 600;
    const hideTimer = setTimeout(() => {
      setHidden(true);
      onLoaded?.();
    }, minDisplayMs + fadeOutDuration);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [onLoaded, minDisplayMs]);

  useEffect(() => {
    if (opacity < 1) return;
    const duration = 600;
    const start = 1;
    const end = 0;
    const startTime = Date.now() + minDisplayMs;
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      setOpacity(start + (end - start) * t);
      if (t < 1) requestAnimationFrame(tick);
    };
    const id = setTimeout(() => requestAnimationFrame(tick), minDisplayMs);
    return () => clearTimeout(id);
  }, [minDisplayMs, opacity]);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-700 ease-out"
      style={{ opacity }}
    >
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 4], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: false }}
        >
          <Suspense
            fallback={
              <mesh>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshBasicMaterial color="#333" wireframe />
              </mesh>
            }
          >
            <LoadingScene />
          </Suspense>
        </Canvas>
      </div>
      <p
        className="absolute bottom-12 left-1/2 -translate-x-1/2 font-sans text-sm tracking-[0.3em] text-white/70 uppercase"
        style={{ opacity }}
      >
        Loading
      </p>
    </div>
  );
}
