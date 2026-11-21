import React, { useEffect, useRef, useState } from 'react';
import { sakugaSound } from './SakugaSound';

/**
 * SakugaSlider - Official <sakuga-slider> from https://github.com/finktheartist/sakuga-vfx
 * Uses the authentic Web Component with full canvas smoke puffs, speed lines,
 * manga sound lettering (シュッ), teardrop spring lag, and crescent release.
 */
export default function SakugaSlider({
  value = 50,
  onChange,
  min = 0,
  max = 100,
  label = "OVERCLOCK ENGINE // CURSED ENERGY RESONANCE",
  subtext = "Adjusting the resonance throttles backend pipeline throughput",
}) {
  const [val, setVal] = useState(value);
  const sliderRef = useRef(null);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    // Listen to input and change events from the custom element
    const handleInput = (e) => {
      const v = Number(e.target.value ?? el.value);
      setVal(v);
      sakugaSound.playBlip();
      if (onChange) onChange(v);
    };

    const handleChange = (e) => {
      const v = Number(e.target.value ?? el.value);
      setVal(v);
      sakugaSound.playSlash();
      if (onChange) onChange(v);
    };

    el.addEventListener('input', handleInput);
    el.addEventListener('change', handleChange);

    return () => {
      el.removeEventListener('input', handleInput);
      el.removeEventListener('change', handleChange);
    };
  }, [onChange]);

  return (
    <div className="space-y-3 font-mono select-none">
      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-zinc-300">
        <span>{label}</span>
        <span className="font-mono text-sm font-black text-[#00f0ff]">{val}%</span>
      </div>

      {/* Official sakuga-slider component container */}
      <div className="py-2 w-full flex justify-center [filter:drop-shadow(0_4px_8px_rgba(0,0,0,0.5))]">
        <sakuga-slider
          ref={sliderRef}
          value={val}
          min={min}
          max={max}
          unit="%"
          label={label}
          style={{
            '--sk-slider-width': '100%',
            '--sk-pri': '#ff3366',
            '--sk-acc': '#00f0ff',
            '--sk-ink': '#000000',
            '--sk-card': '#ffffff',
            '--sk-bw': '3px',
            width: '100%',
            display: 'block',
          }}
        />
      </div>

      <p className="font-mono text-[11px] text-zinc-400">
        {subtext}: <span className="font-bold text-[#00f0ff]">{val * 120} req/sec</span>
      </p>
    </div>
  );
}
