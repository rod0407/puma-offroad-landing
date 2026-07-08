import React, { useState, useRef, useCallback } from 'react';
import { Button } from './Button';

const thumbnails = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif"
];

interface MouseTrail {
  id: number;
  x: number;
  y: number;
  img: string;
  rot: number;
}

export const PartnerSection = () => {
  const [trails, setTrails] = useState<MouseTrail[]>([]);
  const lastTime = useRef(0);
  const counter = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastTime.current > 80) {
      const rect = e.currentTarget.getBoundingClientRect();
      const newTrail = {
        id: counter.current++,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        img: thumbnails[Math.floor(Math.random() * thumbnails.length)],
        rot: Math.random() * 20 - 10
      };

      setTrails(prev => [...prev, newTrail]);
      lastTime.current = now;

      setTimeout(() => {
        setTrails(prev => prev.filter(t => t.id !== newTrail.id));
      }, 1000);
    }
  }, []);

  return (
    <section className="w-full py-12 px-6">
      <div 
        className="relative max-w-7xl mx-auto py-48 rounded-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] bg-white overflow-hidden flex flex-col items-center text-center cursor-crosshair"
        onMouseMove={handleMouseMove}
      >
        {trails.map(t => (
          <img 
            key={t.id}
            src={t.img}
            className="absolute w-32 h-20 object-cover rounded-lg pointer-events-none transition-all duration-1000 ease-out"
            style={{
              left: t.x - 64,
              top: t.y - 40,
              transform: `rotate(${t.rot}deg) scale(0.5)`,
              opacity: 0,
              animation: 'spawnFade 1s forwards'
            }}
            alt=""
          />
        ))}

        <h2 className="font-mondwest text-[48px] md:text-[64px] lg:text-[80px] color-[#0D212C] mb-12 z-10">
          Partner with us
        </h2>
        
        <div className="z-10">
          <Button variant="primary" className="pl-2 pr-7 py-2 gap-3">
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Viktor" className="w-10 h-10 rounded-full object-cover" />
            Start chat with Viktor
          </Button>
        </div>
      </div>
      <style>{`
        @keyframes spawnFade {
          0% { opacity: 1; transform: scale(1) rotate(var(--rot)); }
          100% { opacity: 0; transform: scale(0.5) rotate(var(--rot)); }
        }
      `}</style>
    </section>
  );
};