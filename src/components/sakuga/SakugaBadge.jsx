import React from 'react';

export default function SakugaBadge({
  children,
  rank = 'A', // 'S', 'A', 'B', 'Special'
  variant = 'cyan', // 'cyan', 'crimson', 'gold', 'purple'
  className = '',
}) {
  const colorMap = {
    crimson: 'border-[#ff3366] text-[#ff3366] bg-[#ff3366]/10 shadow-[2px_2px_0px_#ff3366]',
    cyan: 'border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/10 shadow-[2px_2px_0px_#00f0ff]',
    gold: 'border-[#ffe600] text-[#ffe600] bg-[#ffe600]/10 shadow-[2px_2px_0px_#ffe600]',
    purple: 'border-[#9d4edd] text-[#9d4edd] bg-[#9d4edd]/10 shadow-[2px_2px_0px_#9d4edd]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider ${
        colorMap[variant] || colorMap.cyan
      } ${className}`}
    >
      <span className="h-1.5 w-1.5 rotate-45 bg-current" />
      {children}
    </span>
  );
}
