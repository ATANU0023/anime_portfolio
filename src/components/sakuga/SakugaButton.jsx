import React, { useRef, useEffect } from 'react';
import { sakugaSound } from './SakugaSound';

/**
 * SakugaButton - Directly uses the official <sakuga-button> custom element
 * from https://github.com/finktheartist/sakuga-vfx
 * Features:
 * - Impact frame one-frame inversion
 * - Spiky burst behind it with crystal shards and 4 clouds
 * - Full baked canvas manga ドン! lettering
 * - Smoke rings and spring rebound
 */
export default function SakugaButton({
  children,
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'accent', 'ghost', 'dark'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  disabled = false,
  soundType = 'impact',
  icon: Icon,
  type = 'button',
  ...props
}) {
  const btnRef = useRef(null);

  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;

    const handleClick = (e) => {
      if (soundType === 'slash') sakugaSound.playSlash();
      else if (soundType === 'blip') sakugaSound.playBlip();
      else sakugaSound.playImpact();

      if (onClick) onClick(e);
    };

    el.addEventListener('click', handleClick);
    return () => el.removeEventListener('click', handleClick);
  }, [onClick, soundType]);

  // Map variants to official sakuga-vfx CSS variables
  const colorSchemes = {
    primary: {
      '--sk-card': '#ff3366',
      '--sk-ink': '#ffffff',
      '--sk-btn-line': '#000000',
      '--sk-acc': '#00f0ff',
      '--sk-btn-sh': '4px 4px 0px #000000',
      '--sk-alt-sh': '4px 4px 0px #000000',
      '--sk-alt-line': '#000000',
    },
    secondary: {
      '--sk-card': '#00f0ff',
      '--sk-ink': '#09090f',
      '--sk-btn-line': '#000000',
      '--sk-acc': '#ff3366',
      '--sk-btn-sh': '4px 4px 0px #000000',
      '--sk-alt-sh': '4px 4px 0px #000000',
      '--sk-alt-line': '#000000',
    },
    accent: {
      '--sk-card': '#ffe600',
      '--sk-ink': '#09090f',
      '--sk-btn-line': '#000000',
      '--sk-acc': '#ff3366',
      '--sk-btn-sh': '4px 4px 0px #000000',
      '--sk-alt-sh': '4px 4px 0px #000000',
      '--sk-alt-line': '#000000',
    },
    ghost: {
      '--sk-card': '#16162a',
      '--sk-ink': '#f1f1f5',
      '--sk-btn-line': '#000000',
      '--sk-acc': '#00f0ff',
      '--sk-btn-sh': '4px 4px 0px #000000',
      '--sk-alt-sh': '4px 4px 0px #000000',
      '--sk-alt-line': '#000000',
    },
    dark: {
      '--sk-card': '#0e0e1a',
      '--sk-ink': '#ffffff',
      '--sk-btn-line': '#000000',
      '--sk-acc': '#ff3366',
      '--sk-btn-sh': '4px 4px 0px #000000',
      '--sk-alt-sh': '4px 4px 0px #000000',
      '--sk-alt-line': '#000000',
    },
  }[variant] || {
    '--sk-card': '#ff3366',
    '--sk-ink': '#ffffff',
    '--sk-btn-line': '#000000',
    '--sk-acc': '#00f0ff',
    '--sk-btn-sh': '4px 4px 0px #000000',
    '--sk-alt-sh': '4px 4px 0px #000000',
    '--sk-alt-line': '#000000',
  };

  const sizeScales = {
    sm: 'scale-[0.85] origin-center',
    md: 'scale-95 origin-center',
    lg: 'scale-100 origin-center',
  }[size] || 'scale-100';

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${sizeScales} ${className}`}>
      <sakuga-button
        ref={btnRef}
        disabled={disabled || undefined}
        type={type}
        style={{
          ...colorSchemes,
          '--sk-bw': '2.5px',
          '--sk-r': '0px', // Manga sharp corners
          display: 'inline-block',
          margin: 0,
        }}
        {...props}
      >
        <span className="flex items-center justify-center gap-2 font-mono text-xs font-bold uppercase tracking-wider whitespace-nowrap">
          {Icon && <Icon className="h-4 w-4 shrink-0" />}
          <span>{children}</span>
        </span>
      </sakuga-button>
    </div>
  );
}
