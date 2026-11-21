import React, { useState } from 'react';
import { User, Cpu, Database, Network, Award, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';
import SakugaBadge from './sakuga/SakugaBadge';
import SakugaSlider from './sakuga/SakugaSlider';
import ScrollReveal from './ScrollReveal';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function CharacterSheet() {
  const [manaOutput, setManaOutput] = useState(85);

  return (
    <section id="about" className="relative py-16 bg-transparent">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-14 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-jp text-xs font-black uppercase text-[#ff3366]">人物鑑定 // SECTION 01</span>
              <span className="h-0.5 w-12 bg-[#ff3366] shadow-[0_0_8px_#ff3366]" />
            </div>
            <h2 className="font-anime text-4xl tracking-wider text-white sm:text-5xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              HUNTER LICENSE // <span className="text-[#00f0ff]">CHARACTER SHEET</span>
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              Official Sorcerer Record & Attributes Specification
            </p>
          </div>
        </ScrollReveal>

        {/* Character Card Main Grid */}
        <ScrollReveal delay={150}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            
            {/* Identity & Lore Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* The Lore Box */}
              <div className="border-2 border-black bg-zinc-950/85 backdrop-blur-md p-6 shadow-[6px_6px_0px_#00f0ff]">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-[#ff3366]" />
                    <span className="font-mono text-sm font-bold uppercase text-white">
                      Sorcerer Dossier: {PORTFOLIO_DATA.personal.name}
                    </span>
                  </div>
                  <SakugaBadge rank="S" variant="gold">
                    {PORTFOLIO_DATA.personal.level}
                  </SakugaBadge>
                </div>

                <div className="mt-4 space-y-4 font-sans text-sm leading-relaxed text-zinc-200">
                  <p>
                    Operating at the vanguard of modern distributed computing, I specialize in crafting 
                    <strong className="text-white"> resilient, low-latency backend architectures</strong>, 
                    production-grade REST APIs, and database engines tailored for high-concurrency environments.
                  </p>
                  <p>
                    At <strong className="text-[#00f0ff]">CBMO AI</strong>, I serve as a Backend Developer driving 
                    both the core marketing intelligence platform and <strong className="text-[#ff3366]">Beeyouniq</strong>, 
                    orchestrating asynchronous AI pipelines, campaign workflows, and automated content generation pipelines.
                  </p>
                  <blockquote className="border-l-2 border-[#ffe600] pl-3 italic text-zinc-400 font-mono text-xs">
                    "{PORTFOLIO_DATA.personal.heroQuote}"
                  </blockquote>
                </div>

                {/* Passive Traits */}
                <div className="mt-6 border-t border-zinc-800 pt-4">
                  <p className="font-mono text-xs font-bold uppercase text-zinc-400 mb-3">
                    PASSIVE TRAITS & COMBAT BUFFS:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <CheckCircle className="h-4 w-4 text-[#00f0ff]" />
                      <span>Deep Async & Concurrency Control</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-300">
                      <CheckCircle className="h-4 w-4 text-[#ff3366]" />
                      <span>Resilient Fault-Tolerant APIs</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-300">
                      <CheckCircle className="h-4 w-4 text-[#ffe600]" />
                      <span>Database Indexing & Query Tuning</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-300">
                      <CheckCircle className="h-4 w-4 text-emerald-400" />
                      <span>Rapid AI & Workflow Integration</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Interactive Mana / Power Tuning with Authentic Sakuga Slider */}
              <div className="border-2 border-zinc-800 bg-zinc-950/85 backdrop-blur-md p-6 shadow-[6px_6px_0px_#000000]">
                <SakugaSlider
                  value={manaOutput}
                  onChange={setManaOutput}
                  label="OVERCLOCK ENGINE // CURSED ENERGY RESONANCE"
                  subtext="Adjusting the resonance throttles backend pipeline throughput"
                />
              </div>

            </div>

            {/* Radar / Core Attributes Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-2 border-black bg-zinc-950/85 backdrop-blur-md p-6 shadow-[6px_6px_0px_#ff3366]">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span className="font-mono text-sm font-bold uppercase text-white">
                    POWER RADAR // 能力値
                  </span>
                  <span className="font-jp text-xs text-[#00f0ff]">特級判定</span>
                </div>

                {/* Progress Bars for stats */}
                <div className="mt-6 space-y-5 font-mono text-xs">
                  {Object.entries(PORTFOLIO_DATA.personal.stats).map(([key, val]) => {
                    const labels = {
                      backendArchitecture: 'Backend Architecture & Node.js',
                      apiEngineering: 'RESTful API Engineering',
                      databaseMastery: 'MongoDB & MySQL Optimization',
                      aiWorkflowOrchestration: 'AI Automation & Workflows',
                      devOpsDocker: 'Docker & Microservices Containment',
                      problemSolving: 'Algorithmic Problem Solving',
                    };
                    return (
                      <div key={key} className="space-y-1.5">
                        <div className="flex justify-between font-bold">
                          <span className="text-zinc-300">{labels[key] || key}</span>
                          <span className="text-[#ff3366]">{val}%</span>
                        </div>
                        <div className="h-2.5 w-full border border-black bg-zinc-900 p-0.5">
                          <div
                            className="h-full bg-gradient-to-r from-[#ff3366] to-[#00f0ff] transition-all duration-500 shadow-[0_0_6px_#ff3366]"
                            style={{ width: `${val}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Certifications preview */}
                <div className="mt-6 border-t border-zinc-800 pt-4">
                  <p className="font-mono text-xs font-bold uppercase text-zinc-400 mb-2">
                    VERIFIED GUILD SEALS:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <SakugaBadge rank="S" variant="cyan">
                      Postman API Student Expert
                    </SakugaBadge>
                    <SakugaBadge rank="A" variant="gold">
                      Power BI Certified
                    </SakugaBadge>
                    <SakugaBadge rank="A" variant="purple">
                      SIT ICOE Hackathon '24
                    </SakugaBadge>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
