"use client";
import { useEffect, useState } from "react";

const HeroParticles = () => {
  const [particles, setParticles] = useState<{ left: string; top: string; duration: string }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 3}s`
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-500/30 rounded-full animate-glow"
          style={{
            left: p.left,
            top: p.top,
            animationDuration: p.duration
          }}
        />
      ))}
    </div>
  );
};

export default HeroParticles;
