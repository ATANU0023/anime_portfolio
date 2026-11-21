import React, { useEffect, useState } from 'react';

/**
 * GlobalAnimeBackdrop - Ensures the iconic anime atmosphere, giant calligraphy watermarks,
 * ambient energy glows, and vertical HUD kanji streamers persist across the ENTIRE site.
 */
export default function GlobalAnimeBackdrop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Ambient Radial Energy Glows */}
      <div className="absolute top-[10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#ff3366]/[0.06] blur-[120px] animate-pulse-glow" />
      <div className="absolute top-[45%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#00f0ff]/[0.06] blur-[140px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[80%] left-[10%] h-[500px] w-[500px] rounded-full bg-[#ffe600]/[0.04] blur-[130px] animate-pulse-glow" style={{ animationDelay: '3s' }} />

      {/* Cyber Grid & Manga Dots Base */}
      <div className="absolute inset-0 bg-manga-dots opacity-25" />
      <div className="absolute inset-0 bg-speedlines opacity-10" />

      {/* GIANT CALLIGRAPHY WATERMARKS (Visible throughout the entire site with gentle parallax) */}
      
      {/* 1. Hero / Top Right: 領域展開 (Domain Expansion) */}
      <div
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        className="absolute right-[-2%] top-[8%] font-jp font-black text-[17vw] leading-none text-white/[0.038] tracking-tighter"
      >
        領域展開
      </div>

      {/* 2. Character / Mid-Left: 電脳無双 (Cyber Peerless) */}
      <div
        style={{ transform: `translateY(${scrollY * -0.12}px)` }}
        className="absolute left-[-2%] top-[28%] font-jp font-black text-[15vw] leading-none text-[#00f0ff]/[0.03] tracking-tighter"
      >
        電脳無双
      </div>

      {/* 3. Skills / Mid-Right: 奥義開眼 (Awakening Secret Technique) */}
      <div
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        className="absolute right-[-3%] top-[50%] font-jp font-black text-[16vw] leading-none text-[#ff3366]/[0.028] tracking-tighter"
      >
        奥義開眼
      </div>

      {/* 4. Projects / Lower-Left: 千変万化 (Infinite Form Adaptability) */}
      <div
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
        className="absolute left-[-2%] top-[72%] font-jp font-black text-[15vw] leading-none text-[#ffe600]/[0.025] tracking-tighter"
      >
        千変万化
      </div>

      {/* 5. Contact / Bottom-Right: 限界突破 (Limit Break) */}
      <div
        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        className="absolute right-[-1%] top-[90%] font-jp font-black text-[16vw] leading-none text-white/[0.03] tracking-tighter"
      >
        限界突破
      </div>
    </div>
  );
}
