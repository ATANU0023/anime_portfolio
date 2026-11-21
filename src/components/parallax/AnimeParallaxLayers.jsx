import React, { useEffect, useState, useRef } from 'react';

/**
 * AnimeParallaxLayers - Multi-plane anime parallax system:
 * 1. Scroll-Velocity Speedline Burst (Action anime dash lines when scrolling fast)
 * 2. Floating Manga Onomatopoeia & SFX (ゴゴゴ, ドドド, ズバッ!) floating at independent speeds
 * 3. 2.5D Mouse Parallax displacement on background layers
 * 4. Domain Depth Radar (Tracks depth: 0m -> 1250m)
 */
export default function AnimeParallaxLayers() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const lastScrollY = useRef(0);
  const lastTime = useRef(performance.now());
  const velocityTimeout = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const now = performance.now();
          const dt = Math.max(1, now - lastTime.current);
          const dy = currentY - lastScrollY.current;
          const vel = Math.abs(dy / dt); // px per ms

          setScrollY(currentY);
          setScrollVelocity(Math.min(1, vel * 1.5));

          lastScrollY.current = currentY;
          lastTime.current = now;

          // Clear speedline burst after scrolling stops
          if (velocityTimeout.current) clearTimeout(velocityTimeout.current);
          velocityTimeout.current = setTimeout(() => {
            setScrollVelocity(0);
          }, 150);

          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e) => {
      // Normalize mouse offset between -20px and +20px for 2.5D parallax
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMouseOffset({ x, y });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (velocityTimeout.current) clearTimeout(velocityTimeout.current);
    };
  }, []);

  // Compute Domain Depth based on scroll
  const docHeight = typeof document !== 'undefined'
    ? Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
    : 1000;
  const currentDepth = Math.round((scrollY / docHeight) * 1250);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
      
      {/* 1. HIGH-SPEED ANIME CONCENTRATION SPEEDLINES (Flares when scrolling fast) */}
      <div
        style={{
          opacity: Math.min(0.55, scrollVelocity * 0.7),
          transition: 'opacity 120ms ease-out',
        }}
        className="absolute inset-0 bg-speedlines pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,240,255,0.12)_100%)]" />
      </div>

      {/* 2. 2.5D MOUSE-RESPONSIVE ENERGY MESH */}
      <div
        style={{
          transform: `translate3d(${mouseOffset.x * -0.5}px, ${mouseOffset.y * -0.5}px, 0)`,
          transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="absolute inset-0"
      >
        {/* Subtle geometric magic rune circles */}
        <div className="absolute top-[20%] left-[8%] h-72 w-72 rounded-full border border-dashed border-[#ff3366]/10 animate-spin-slow" />
        <div className="absolute top-[60%] right-[12%] h-96 w-96 rounded-full border border-dashed border-[#00f0ff]/10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      {/* 3. MULTI-PLANE FLOATING MANGA ONOMATOPOEIA (Parallax Speeds) */}

      {/* Plane A: "ゴゴゴ" (Menacing rumble - Near Hero/Character) */}
      <div
        style={{
          transform: `translate3d(${mouseOffset.x * 0.3}px, ${scrollY * -0.25}px, 0)`,
          top: '35%',
          left: '3%',
        }}
        className="absolute font-jp font-black text-5xl text-[#ff3366]/[0.15] drop-shadow-[0_0_10px_rgba(255,51,102,0.3)] [writing-mode:vertical-rl]"
      >
        ゴゴゴゴ…
      </div>

      {/* Plane B: "神速" (Godspeed - Near Jutsu Tree) */}
      <div
        style={{
          transform: `translate3d(${mouseOffset.x * -0.4}px, ${scrollY * -0.18}px, 0)`,
          top: '55%',
          right: '4%',
        }}
        className="absolute font-jp font-black text-6xl text-[#00f0ff]/[0.12] drop-shadow-[0_0_15px_rgba(0,240,255,0.3)] [writing-mode:vertical-rl]"
      >
        神速抜刀
      </div>

      {/* Plane C: "ドドド" (Heavy ground impact - Near Projects) */}
      <div
        style={{
          transform: `translate3d(${mouseOffset.x * 0.5}px, ${scrollY * -0.3}px, 0)`,
          top: '75%',
          left: '5%',
        }}
        className="absolute font-jp font-black text-5xl text-[#ffe600]/[0.14] drop-shadow-[0_0_10px_rgba(255,230,0,0.3)] [writing-mode:vertical-rl]"
      >
        ドドドド!
      </div>

      {/* Plane D: "ズバッ!" (Blade slice - Near Story Arc & Contact) */}
      <div
        style={{
          transform: `translate3d(${mouseOffset.x * -0.3}px, ${scrollY * -0.12}px, 0)`,
          top: '92%',
          right: '5%',
        }}
        className="absolute font-jp font-black text-5xl text-[#ff3366]/[0.14] drop-shadow-[0_0_12px_rgba(255,51,102,0.3)] [writing-mode:vertical-rl]"
      >
        ズバッ!!
      </div>
    </div>
  );
}
