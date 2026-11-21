import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

/**
 * ScrollProgress - Anime Fighting Game EX Gauge / Mana bar
 * positioned right below the navigation bar.
 */
export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrolled = (totalScroll / windowHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, scrolled)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-[61px] left-0 right-0 z-30 pointer-events-none select-none">
      {/* Background Track */}
      <div className="h-1 w-full bg-zinc-950/90 border-b border-zinc-900/60">
        {/* Animated Gradient Gauge */}
        <div
          className="relative h-full bg-gradient-to-r from-[#ff3366] via-[#00f0ff] to-[#ffe600] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Sparking Tip Effect */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_#00f0ff] animate-ping" />
        </div>
      </div>

      {/* Mini HUD Level indicator on the right */}
      <div className="hidden sm:flex absolute right-4 top-2 items-center gap-1.5 font-mono text-[9px] font-black uppercase text-zinc-400 bg-black/80 px-2 py-0.5 border border-zinc-800 shadow-[2px_2px_0px_#000000]">
        <Zap className="h-2.5 w-2.5 text-[#ffe600]" />
        <span>EX GAUGE:</span>
        <span className="text-[#00f0ff]">{Math.round(scrollProgress)}%</span>
      </div>
    </div>
  );
}
