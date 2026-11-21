import React, { useState } from 'react';
import SakugaTabs from './sakuga/SakugaTabs';
import SakugaBadge from './sakuga/SakugaBadge';
import ScrollReveal from './ScrollReveal';
import { sakugaSound } from './sakuga/SakugaSound';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function JutsuTree() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const tabs = PORTFOLIO_DATA.skillCategories.map((cat, idx) => ({
    id: idx.toString(),
    label: cat.name,
    kanji: cat.element.split('/')[1]?.trim() || '術',
    count: cat.skills.length,
  }));

  const activeCategory = PORTFOLIO_DATA.skillCategories[Number(activeCategoryIndex)] || PORTFOLIO_DATA.skillCategories[0];

  return (
    <section id="skills" className="relative py-16 bg-transparent">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-jp text-xs font-black uppercase text-[#00f0ff]">忍術大系 // SECTION 02</span>
              <span className="h-0.5 w-12 bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" />
            </div>
            <h2 className="font-anime text-4xl tracking-wider text-white sm:text-5xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              JUTSU TREE // <span className="text-[#ff3366]">TECHNICAL ARSENAL</span>
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              Categorized Grimoire of Programming Languages, Frameworks, and Tools
            </p>
          </div>
        </ScrollReveal>

        {/* Element / School Selector Tabs */}
        <ScrollReveal delay={100}>
          <div className="mb-8 overflow-x-auto pb-2">
            <SakugaTabs
              tabs={tabs}
              activeTab={activeCategoryIndex.toString()}
              onChange={(id) => setActiveCategoryIndex(Number(id))}
            />
          </div>
        </ScrollReveal>

        {/* Selected School Banner */}
        <ScrollReveal delay={150}>
          <div className="mb-8 flex flex-wrap items-center justify-between border-2 border-zinc-800 bg-zinc-950/85 backdrop-blur-md p-4 shadow-[4px_4px_0px_#000000]">
            <div className="flex items-center gap-3">
              <span className="font-jp text-lg font-black text-[#ffe600]">
                {activeCategory.element}
              </span>
              <span className="h-4 w-px bg-zinc-700" />
              <span className="font-mono text-sm font-bold uppercase text-white">
                {activeCategory.name} Scroll
              </span>
            </div>
            <SakugaBadge rank="S" variant="crimson">
              {activeCategory.rank}
            </SakugaBadge>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeCategory.skills.map((skill, index) => (
              <div
                key={skill.name}
                onMouseEnter={() => sakugaSound.playBlip()}
                className="group relative overflow-hidden border-2 border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md p-5 shadow-[4px_4px_0px_#000000] transition-all duration-200 hover:-translate-y-1 hover:border-[#00f0ff] hover:shadow-[6px_6px_0px_#ff3366]"
              >
                {/* Diagonal Light Sheen On Hover */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

                {/* Corner mark */}
                <span className="absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-[#ff3366] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                    {skill.name}
                  </span>
                  <span className="font-jp text-[10px] font-bold text-[#ffe600]">
                    {skill.level}
                  </span>
                </div>

                {/* Mastery bar */}
                <div className="mt-4 space-y-1">
                  <div className="flex justify-between font-mono text-[10px] text-zinc-400">
                    <span>MASTERY</span>
                    <span className="text-[#ff3366] font-bold">{skill.mastery}%</span>
                  </div>
                  <div className="h-2 w-full border border-black bg-zinc-950 p-0.5">
                    <div
                      className="h-full bg-gradient-to-r from-[#ff3366] to-[#00f0ff] transition-all duration-300 shadow-[0_0_6px_#00f0ff]"
                      style={{ width: `${skill.mastery}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Summary Footer Tag */}
        <div className="mt-10 border-l-2 border-[#00f0ff] pl-4 font-mono text-xs text-zinc-400 bg-black/40 py-2">
          <span className="text-white font-bold">SYNERGY COMBO:</span> Seamless end-to-end integration across Node.js/Express, MongoDB aggregations, and automated AI worker orchestration.
        </div>

      </div>
    </section>
  );
}
