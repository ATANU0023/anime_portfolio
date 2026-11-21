import React, { useEffect, useRef } from 'react';

export default function SakugaCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Continuous rising spirit particles & cursed energy embers
    const particleCount = Math.min(Math.floor(window.innerWidth / 28), 65);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.8 + 0.8,
      speedX: (Math.random() - 0.5) * 0.9,
      speedY: -Math.random() * 0.9 - 0.3, // Drifting upwards like anime cursed sparks
      opacity: Math.random() * 0.7 + 0.2,
      pulse: Math.random() * 0.04 + 0.015,
      color:
        Math.random() > 0.6
          ? '#00f0ff' // Cursed energy cyan
          : Math.random() > 0.3
          ? '#ff3366' // Crimson sakura flame
          : '#ffe600', // Electric gold spark
    }));

    // Mouse movement trail sparks
    let mouseTrail = [];
    const handleMouseMove = (e) => {
      if (Math.random() > 0.4) {
        mouseTrail.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          opacity: 0.85,
          color: Math.random() > 0.5 ? '#00f0ff' : '#ff3366',
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Dynamic anime slashes & crystal chip impact debris on click
    let slashes = [];
    let chips = [];

    const handleWindowClick = (e) => {
      const angle = (Math.random() * Math.PI) / 3 - Math.PI / 6;
      slashes.push({
        x: e.clientX,
        y: e.clientY,
        length: Math.random() * 140 + 90,
        angle: angle,
        life: 1.0,
        decay: 0.05,
        color: Math.random() > 0.5 ? '#ffffff' : '#00f0ff',
      });

      // Spawn crystal chip debris around impact
      for (let i = 0; i < 8; i++) {
        const chipAngle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 2;
        chips.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(chipAngle) * speed,
          vy: Math.sin(chipAngle) * speed,
          size: Math.random() * 3 + 1.5,
          life: 1.0,
          decay: 0.04,
          color: Math.random() > 0.5 ? '#ffe600' : '#ff3366',
        });
      }
    };
    window.addEventListener('click', handleWindowClick);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Rising Embers
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += Math.sin(Date.now() * p.pulse) * 0.01;

        // Wrap around
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(0.85, p.opacity));
        ctx.shadowBlur = 9;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 2. Draw Mouse Trail Sparks
      for (let i = mouseTrail.length - 1; i >= 0; i--) {
        const t = mouseTrail[i];
        t.x += t.speedX;
        t.y += t.speedY;
        t.opacity -= 0.04;
        if (t.opacity <= 0) {
          mouseTrail.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.fillStyle = t.color;
        ctx.globalAlpha = t.opacity;
        ctx.shadowBlur = 6;
        ctx.shadowColor = t.color;
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 3. Draw Slashes
      for (let i = slashes.length - 1; i >= 0; i--) {
        const s = slashes[i];
        s.life -= s.decay;
        if (s.life <= 0) {
          slashes.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.angle);
        ctx.globalAlpha = s.life;
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 3.5 * s.life;
        ctx.shadowBlur = 18;
        ctx.shadowColor = '#00f0ff';

        ctx.beginPath();
        ctx.moveTo(-s.length / 2, 0);
        ctx.lineTo(s.length / 2, 0);
        ctx.stroke();

        // Cross cutting blade flash
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(-s.length / 4, -10 * s.life);
        ctx.lineTo(s.length / 4, 10 * s.life);
        ctx.stroke();

        ctx.restore();
      }

      // 4. Draw Crystal Chips
      for (let i = chips.length - 1; i >= 0; i--) {
        const c = chips[i];
        c.x += c.vx;
        c.y += c.vy;
        c.vy += 0.1; // gravity
        c.life -= c.decay;
        if (c.life <= 0) {
          chips.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.fillStyle = c.color;
        ctx.globalAlpha = c.life;
        ctx.shadowBlur = 8;
        ctx.shadowColor = c.color;
        ctx.fillRect(c.x, c.y, c.size, c.size);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleWindowClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
