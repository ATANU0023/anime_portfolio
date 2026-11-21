import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Terminal, Shield, Zap, Flame, ExternalLink, Code2, ArrowDown, Sparkles } from 'lucide-react';
import SakugaButton from './sakuga/SakugaButton';
import SakugaBadge from './sakuga/SakugaBadge';
import { sakugaSound } from './sakuga/SakugaSound';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero() {
  const [powerMode, setPowerMode] = useState(false);
  const [bankaiText, setBankaiText] = useState('RELEASE BANKAI // 卍解');

  const triggerBankai = () => {
    sakugaSound.playCharge();
    setTimeout(() => {
      sakugaSound.playVictory();
      // Burst confetti
      confetti({
        particleCount: 90,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff3366', '#00f0ff', '#ffe600', '#ffffff'],
      });
    }, 280);

    setPowerMode(!powerMode);
    setBankaiText(!powerMode ? 'MAXIMUM DOMAIN ACTIVE // 領域展開' : 'RELEASE BANKAI // 卍解');
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-16 bg-transparent"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-6">

            {/* Class Rank Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <SakugaBadge rank="S" variant="crimson">
                SPECIAL GRADE ENGINEER
              </SakugaBadge>
              <SakugaBadge rank="Special" variant="cyan">
                LEVEL 24 // CBMO AI
              </SakugaBadge>
              <span className="font-jp text-xs text-zinc-500">
                {PORTFOLIO_DATA.personal.kanjiName}
              </span>
            </div>

            {/* Protagonist Name Heading */}
            <div className="space-y-2">
              <h1 className="font-anime text-6xl tracking-wider text-white sm:text-7xl md:text-8xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                ATANU{' '}
                <span className="text-[#ff3366]">
                  PRAMANIK
                </span>
              </h1>
              <p className="font-mono text-lg font-bold uppercase tracking-widest text-[#00f0ff] sm:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {PORTFOLIO_DATA.personal.title}
              </p>
            </div>

            {/* Quote / Summary with semi-translucent backdrop */}
            <p className="max-w-2xl font-sans text-base leading-relaxed text-zinc-200 sm:text-lg border-l-4 border-[#ff3366] pl-4 bg-zinc-950/70 backdrop-blur-sm py-3 shadow-[4px_4px_0px_#000000]">
              {PORTFOLIO_DATA.personal.summary}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#projects" className="inline-block">
                <SakugaButton
                  size="md"
                  variant="primary"
                  soundType="slash"
                  icon={Zap}
                >
                  Explore Quests
                </SakugaButton>
              </a>

              <a href="#contact" className="inline-block">
                <SakugaButton
                  size="md"
                  variant="dark"
                  soundType="blip"
                >
                  Guild Transmission
                </SakugaButton>
              </a>

              {/* Interactive Bankai / Domain Expansion Button */}
              <div className="inline-block">
                <SakugaButton
                  size="md"
                  variant={powerMode ? "secondary" : "accent"}
                  soundType="impact"
                  onClick={triggerBankai}
                  icon={Flame}
                >
                  {bankaiText}
                </SakugaButton>
              </div>
            </div>

            {/* Live Status Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 font-mono text-xs text-zinc-300">
              <div className="flex items-center gap-2 bg-black/60 px-3 py-1 border border-zinc-800">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span>Active Status: Available for Missions</span>
              </div>
              <div className="flex items-center gap-2 bg-black/60 px-3 py-1 border border-zinc-800">
                <Shield className="h-4 w-4 text-[#00f0ff]" />
                <span>Base: {PORTFOLIO_DATA.personal.location}</span>
              </div>
            </div>

          </div>

          {/* Interactive Anime Avatar / Cyber Status Card */}
          <div className="lg:col-span-4">
            <div className="relative mx-auto max-w-sm border-2 border-black bg-zinc-950/90 backdrop-blur-md p-5 shadow-[8px_8px_0px_#ff3366] transition-transform duration-300 hover:scale-[1.02]">
              {/* Halftone Manga Corner */}
              <div className="absolute top-2 right-2 font-jp text-[10px] font-black tracking-widest text-[#ffe600]">
                特級呪術技師
              </div>

              {/* Character Visual Frame */}
              <div className="relative aspect-square w-full overflow-hidden border-2 border-zinc-800 bg-[#0d0d1a]/95 flex flex-col items-center justify-center p-4">
                {/* Anime Speedlines behind avatar */}
                <div className="absolute inset-0 bg-speedlines opacity-40" />

                {/* Cyber Sigil / Rune with Dual Rotating Rings */}
                <div className="relative flex h-32 w-32 items-center justify-center">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00f0ff]/60 animate-spin-slow" />
                  {/* Inner ring */}
                  <div className="absolute inset-3 rounded-full border-2 border-dotted border-[#ff3366]/60 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '8s' }} />
                  {/* Core icon */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-black/80 border border-[#ffe600] shadow-[0_0_15px_#ff3366]">
                    <Code2 className="h-8 w-8 text-[#00f0ff]" />
                  </div>
                </div>

                <div className="relative mt-4 text-center">
                  <p className="font-jp text-xs font-bold text-zinc-400">系統: 電脳領域特化</p>
                  <p className="font-mono text-sm font-black text-[#00f0ff]">
                    NODE.JS // REST // AI PIPELINES
                  </p>
                </div>

                {/* Power Output Gauge */}
                <div className="mt-4 w-full space-y-1 font-mono text-[10px]">
                  <div className="flex justify-between text-zinc-400">
                    <span>SERVER THROUGHPUT</span>
                    <span className="text-[#ffe600]">99.9%</span>
                  </div>
                  <div className="h-2 w-full border border-black bg-zinc-900">
                    <div
                      className="h-full bg-gradient-to-r from-[#ff3366] to-[#00f0ff]"
                      style={{ width: powerMode ? '100%' : '88%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Quick Specs table */}
              <div className="mt-4 space-y-2 border-t border-zinc-800 pt-3 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-500">EXPERIENCE:</span>
                  <span className="font-bold text-white">2+ Years Enterprise</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">CURRENT GUILD:</span>
                  <span className="font-bold text-[#00f0ff]">CBMO AI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">SPECIALIZATION:</span>
                  <span className="font-bold text-[#ff3366]">Backend & AI Workflows</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Metrics Ticker with semi-transparent blur */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-2 border-zinc-800 bg-zinc-950/70 backdrop-blur-md p-4 sm:grid-cols-4 shadow-[4px_4px_0px_#000000]">
          <div className="border-r border-zinc-800/80 pr-4">
            <p className="font-anime text-3xl text-[#ff3366] sm:text-4xl">2+ YEARS</p>
            <p className="font-mono text-xs uppercase text-zinc-400">Production Experience</p>
          </div>
          <div className="border-r border-zinc-800/80 pr-4">
            <p className="font-anime text-3xl text-[#00f0ff] sm:text-4xl">100%</p>
            <p className="font-mono text-xs uppercase text-zinc-400">Scalable Architecture</p>
          </div>
          <div className="border-r border-zinc-800/80 pr-4">
            <p className="font-anime text-3xl text-[#ffe600] sm:text-4xl">MICROSOFT</p>
            <p className="font-mono text-xs uppercase text-zinc-400">Published Edge Add-on</p>
          </div>
          <div>
            <p className="font-anime text-3xl text-emerald-400 sm:text-4xl">CGPA 8.28</p>
            <p className="font-mono text-xs uppercase text-zinc-400">B.Tech Computer Science</p>
          </div>
        </div>

      </div>
    </section>
  );
}
