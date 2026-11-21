import React from 'react';
import { ArrowUp, Heart, Terminal, Shield } from 'lucide-react';
import SakugaButton from './sakuga/SakugaButton';
import { sakugaSound } from './sakuga/SakugaSound';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    sakugaSound.playSlash();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t-2 border-black bg-zinc-950 py-12 text-zinc-400 font-mono text-xs">
      {/* Anime Speedlines accent top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff3366] via-[#00f0ff] to-[#ffe600]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Identity */}
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-anime text-2xl text-white tracking-wider">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="font-jp text-[10px] text-[#ff3366] font-bold">
                {PORTFOLIO_DATA.personal.kanjiName}
              </span>
            </div>
            <p className="text-zinc-500 text-[11px]">
              Engineered with Node.js mindset • Anime micro-physics powered by Sakuga-VFX principles
            </p>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex items-center gap-4">
            <SakugaButton
              size="sm"
              variant="ghost"
              soundType="slash"
              sfxText="跳躍!"
              icon={ArrowUp}
              onClick={scrollToTop}
            >
              Top of Scroll
            </SakugaButton>
          </div>

        </div>

        {/* Bottom Credits & Sakuga acknowledgment */}
        <div className="mt-8 border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-[10px]">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All Guild Rights Reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Special credit to</span>
            <a
              href="https://github.com/finktheartist/sakuga-vfx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00f0ff] hover:underline font-bold"
            >
              sakuga-vfx by Justin Finkelman
            </a>
            <span>for anime interaction inspiration.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
