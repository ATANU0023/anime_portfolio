import React from 'react';

/**
 * SakugaDivider - Anime Katana blade-slash section divider with
 * glowing neon laser edges and Japanese form titles (壱の型, 弐の型...)
 */
export default function SakugaDivider({
  form = "壱の型",
  title = "SECTION DIVIDER",
  kanji = "切断",
  color = "crimson", // "crimson", "cyan", "gold"
}) {
  const colorStyles = {
    crimson: {
      line: "from-transparent via-[#ff3366] to-transparent",
      glow: "shadow-[0_0_12px_#ff3366]",
      badge: "border-[#ff3366] text-[#ff3366] bg-black",
      text: "text-[#ff3366]",
    },
    cyan: {
      line: "from-transparent via-[#00f0ff] to-transparent",
      glow: "shadow-[0_0_12px_#00f0ff]",
      badge: "border-[#00f0ff] text-[#00f0ff] bg-black",
      text: "text-[#00f0ff]",
    },
    gold: {
      line: "from-transparent via-[#ffe600] to-transparent",
      glow: "shadow-[0_0_12px_#ffe600]",
      badge: "border-[#ffe600] text-[#ffe600] bg-black",
      text: "text-[#ffe600]",
    },
  }[color] || {
    line: "from-transparent via-[#ff3366] to-transparent",
    glow: "shadow-[0_0_12px_#ff3366]",
    badge: "border-[#ff3366] text-[#ff3366] bg-black",
    text: "text-[#ff3366]",
  };

  return (
    <div className="relative my-10 flex w-full items-center justify-center py-4 select-none">
      {/* Dynamic Diagonal Slash Line */}
      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      {/* Glowing Neon Laser Core */}
      <div
        className={`absolute inset-x-8 sm:inset-x-24 h-[1.5px] bg-gradient-to-r ${colorStyles.line} ${colorStyles.glow}`}
      />

      {/* Manga Chapter Stance Badge */}
      <div
        className={`relative z-10 flex items-center gap-2.5 border-2 px-4 py-1 font-mono text-[11px] font-bold uppercase tracking-widest shadow-[3px_3px_0px_#000000] ${colorStyles.badge}`}
      >
        <span className="h-1.5 w-1.5 rotate-45 bg-current animate-ping" />
        <span className="font-jp text-xs font-black">{form}</span>
        <span className="text-zinc-600">//</span>
        <span className="text-zinc-200">{title}</span>
        <span className="font-jp text-[10px] text-zinc-500">[{kanji}]</span>
      </div>
    </div>
  );
}
