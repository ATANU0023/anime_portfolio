import React from 'react';
import { sakugaSound } from './SakugaSound';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * SakugaToggle - A sleek, perfectly balanced anime cyber switch
 * Features:
 * - Pixel-perfect vertical alignment with navbar items
 * - Manga mechanical snap physics
 * - Audio click feedback
 * - Neon Cursed-Energy Cyan active track with solid black manga shadow
 */
export default function SakugaToggle({
  checked = true,
  onChange,
  label = "SFX",
  className = '',
}) {
  const handleToggle = () => {
    sakugaSound.playBlip();
    if (onChange) onChange(!checked);
  };

  return (
    <div
      onClick={handleToggle}
      className={`group flex items-center gap-2 cursor-pointer select-none ${className}`}
      role="switch"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      {label && (
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300 group-hover:text-[#00f0ff] transition-colors">
          {label}
        </span>
      )}

      {/* Snap Switch Track */}
      <div className="relative h-7 w-13 rounded-none border-2 border-black bg-zinc-900 p-0.5 shadow-[2px_2px_0px_#000000] transition-colors group-hover:border-[#00f0ff]">
        {/* Track fill */}
        <div
          className={`absolute inset-0 transition-opacity duration-200 ${
            checked ? 'bg-[#00f0ff]/20 opacity-100' : 'bg-transparent opacity-0'
          }`}
        />

        {/* Sliding mechanical thumb */}
        <div
          className={`flex h-5 w-6 items-center justify-center border border-black font-mono text-[9px] font-black transition-transform duration-200 ease-out ${
            checked
              ? 'translate-x-5.5 bg-[#00f0ff] text-zinc-950 shadow-[1px_1px_0px_#ff3366]'
              : 'translate-x-0 bg-zinc-500 text-zinc-950'
          }`}
        >
          {checked ? (
            <Volume2 className="h-3 w-3 stroke-[2.5]" />
          ) : (
            <VolumeX className="h-3 w-3 stroke-[2.5]" />
          )}
        </div>
      </div>
    </div>
  );
}
