import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Download, Sparkles, Terminal } from 'lucide-react';
import SakugaButton from './sakuga/SakugaButton';
import SakugaToggle from './sakuga/SakugaToggle';
import { sakugaSound } from './sakuga/SakugaSound';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Navbar({ onOpenTerminal }) {
  const [soundActive, setSoundActive] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const newState = sakugaSound.toggle();
    setSoundActive(newState);
  };

  const navLinks = [
    { name: 'Overview', href: '#hero', kanji: '概要' },
    { name: 'Character', href: '#about', kanji: '人物' },
    { name: 'Jutsu Tree', href: '#skills', kanji: '技術' },
    { name: 'Quests', href: '#projects', kanji: '実績' },
    { name: 'Story Arcs', href: '#experience', kanji: '経歴' },
    { name: 'Guild Hall', href: '#contact', kanji: '連絡' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b-2 border-zinc-800/80 bg-[#080811]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={() => sakugaSound.playSlash()}
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center border-2 border-[#ff3366] bg-black font-jp text-lg font-black text-[#00f0ff] shadow-[3px_3px_0px_#ff3366] transition-transform duration-200 group-hover:scale-105">
            <span>普</span>
            {/* Manga corner accents */}
            <span className="absolute -top-1 -left-1 h-1.5 w-1.5 bg-[#ffe600]" />
            <span className="absolute -bottom-1 -right-1 h-1.5 w-1.5 bg-[#ffe600]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-jp text-[10px] font-black tracking-widest text-[#ff3366]">
              <span>ATANU PRAMANIK</span>
              <span className="text-zinc-600">//</span>
              <span className="text-[#00f0ff]">Lv.24</span>
            </div>
            <div className="font-mono text-xs font-bold tracking-wider text-zinc-300 group-hover:text-white">
              BACKEND ARCHITECT
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => sakugaSound.playBlip()}
              className="group relative flex flex-col font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400 transition-colors hover:text-white"
            >
              <span className="text-[9px] font-jp text-zinc-600 group-hover:text-[#ff3366]">
                {link.kanji}
              </span>
              <span>{link.name}</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00f0ff] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Action Controls - Balanced Anime HUD Capsule */}
        <div className="hidden sm:flex items-center gap-3 border border-zinc-800 bg-zinc-950/80 px-3 py-1.5 shadow-[3px_3px_0px_#000000]">
          {/* Aligned Anime SFX Switch */}
          <SakugaToggle
            label="SFX"
            checked={soundActive}
            onChange={(val) => {
              setSoundActive(val);
              sakugaSound.setEnabled(val);
            }}
          />

          <span className="h-4 w-px bg-zinc-800" />

          {/* Balanced LinkedIn CTA Button */}
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sakugaSound.playSlash()}
            className="flex h-7 items-center justify-center gap-1.5 border-2 border-black bg-[#00f0ff] px-3.5 font-mono text-xs font-black uppercase tracking-wider text-zinc-950 shadow-[2px_2px_0px_#000000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#ffe600] hover:shadow-[3px_3px_0px_#ff3366] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>LINKEDIN</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleSound}
            className="p-2 border border-zinc-700 bg-zinc-900 text-zinc-300"
          >
            {soundActive ? <Volume2 className="h-4 w-4 text-[#00f0ff]" /> : <VolumeX className="h-4 w-4 text-zinc-500" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-zinc-700 bg-zinc-900 text-zinc-100"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#080811] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                sakugaSound.playBlip();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between border-b border-zinc-800/60 py-2 font-mono text-sm uppercase text-zinc-300"
            >
              <span>{link.name}</span>
              <span className="font-jp text-xs text-[#ff3366]">{link.kanji}</span>
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full"
            >
              <SakugaButton size="md" variant="primary" className="w-full">
                Guild Transmission
              </SakugaButton>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
