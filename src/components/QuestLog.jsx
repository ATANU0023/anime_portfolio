import React, { useState } from 'react';
import { ExternalLink, Sparkles, Activity, ShieldCheck, Terminal, Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { GithubIcon } from './Icons';
import SakugaButton from './sakuga/SakugaButton';
import SakugaBadge from './sakuga/SakugaBadge';
import ScrollReveal from './ScrollReveal';
import { sakugaSound } from './sakuga/SakugaSound';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function QuestLog() {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedCards, setExpandedCards] = useState({}); // { [id]: boolean }

  const projects = PORTFOLIO_DATA.projects;

  const categories = [
    { id: 'all', label: 'All Quests', count: projects.length },
    { id: 'AI & SaaS Platform', label: 'AI & SaaS', count: 2 },
    { id: 'Full-Stack & Extension', label: 'Extensions & Web', count: 2 },
    { id: 'Machine Learning / DevOps', label: 'ML & DevOps', count: 1 },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  const toggleExpand = (id) => {
    sakugaSound.playSlash();
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    sakugaSound.playBlip();
    const allExpanded = filteredProjects.every((p) => expandedCards[p.id]);
    const newState = {};
    filteredProjects.forEach((p) => {
      newState[p.id] = !allExpanded;
    });
    setExpandedCards(newState);
  };

  const isAllExpanded = filteredProjects.length > 0 && filteredProjects.every((p) => expandedCards[p.id]);

  return (
    <section id="projects" className="relative py-16 bg-transparent">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-jp text-xs font-black uppercase text-[#00f0ff]">任務履歴 // SECTION 03</span>
              <span className="h-0.5 w-12 bg-[#00f0ff]" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="font-anime text-4xl tracking-wider text-white sm:text-5xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                  QUEST LOG // <span className="text-[#ff3366]">PROJECT CHRONICLES</span>
                </h2>
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  Select any quest card to inspect architectural highlights, telemetry, and source code
                </p>
              </div>

              {/* Quick Expand All Toggle */}
              <button
                onClick={expandAll}
                className="self-start sm:self-auto border border-zinc-700 bg-[#0d0d1a] px-3.5 py-1.5 font-mono text-xs font-bold uppercase text-zinc-300 hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors"
              >
                {isAllExpanded ? 'Collapse All [-]' : 'Expand All Specs [+]'}
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Filter Pills */}
        <ScrollReveal delay={80}>
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    sakugaSound.playBlip();
                    setActiveTab(cat.id);
                  }}
                  className={`border px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-150 ${isActive
                    ? 'border-[#ff3366] bg-[#ff3366] text-white shadow-[2px_2px_0px_#000000]'
                    : 'border-zinc-800 bg-[#0c0c16] text-zinc-400 hover:border-zinc-600 hover:text-white'
                    }`}
                >
                  <span>{cat.label}</span>
                  <span className={`ml-2 px-1.5 py-0.2 text-[10px] ${isActive ? 'bg-black text-[#00f0ff]' : 'bg-zinc-800 text-zinc-400'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Clean, Professional Bento Cards Grid */}
        <ScrollReveal delay={120}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
            {filteredProjects.map((project) => {
              const isExpanded = !!expandedCards[project.id];

              return (
                <div
                  key={project.id}
                  className={`group relative flex flex-col justify-between border transition-all duration-200 bg-[#0c0c18] ${isExpanded
                    ? 'border-[#00f0ff] shadow-[6px_6px_0px_#000000] ring-1 ring-[#00f0ff]/50'
                    : 'border-zinc-800 shadow-[4px_4px_0px_#000000] hover:border-zinc-600 hover:shadow-[6px_6px_0px_#000000]'
                    }`}
                >
                  {/* Card Content Top */}
                  <div className="p-5">
                    {/* Header: Rank Badge & Live Status */}
                    <div className="flex items-center justify-between border-b border-zinc-850 pb-2.5">
                      <div className="flex items-center gap-2">
                        <SakugaBadge rank="S" variant={project.category.includes('AI') ? 'gold' : 'crimson'}>
                          {project.badge}
                        </SakugaBadge>
                        <span className="font-mono text-xs text-zinc-400">
                          {project.year}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-bold uppercase tracking-wider">{project.status.split(' ')[0]}</span>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mt-3">
                      <h3 className="font-anime text-2xl text-white group-hover:text-[#00f0ff] transition-colors sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs font-semibold text-[#ffe600] mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="mt-2.5 font-sans text-xs text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="border border-zinc-800 bg-black/60 px-2 py-0.5 font-mono text-[10px] text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Expanded Architectural Dossier */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-zinc-800 space-y-4 animate-fadeIn">
                        {/* Telemetry Bar */}
                        <div className="border border-zinc-800 bg-black/80 p-3 font-mono text-xs space-y-1.5">
                          <div className="flex items-center gap-2">
                            <Activity className="h-3.5 w-3.5 text-[#00f0ff] shrink-0" />
                            <span className="text-zinc-500 text-[10px]">TELEMETRY:</span>
                            <span className="text-[#ffe600] font-bold text-[10px] truncate">{project.metrics}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span className="text-zinc-500 text-[10px]">SECURITY:</span>
                            <span className="text-white text-[10px]">Enterprise Production Hardened</span>
                          </div>
                        </div>

                        {/* Architectural Highlights */}
                        <div>
                          <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-[#00f0ff] font-bold mb-2">
                            <Terminal className="h-3 w-3" />
                            <span>ARCHITECTURAL HIGHLIGHTS</span>
                          </div>
                          <div className="space-y-1.5">
                            {project.highlights.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 border-l-2 border-[#ff3366] bg-zinc-950/60 p-2 font-mono text-xs text-zinc-300 leading-snug"
                              >
                                <span className="h-1 w-1 shrink-0 rotate-45 bg-[#ff3366] mt-1.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 pt-2 border-t border-zinc-850">
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <SakugaButton size="sm" variant="ghost" soundType="blip" icon={GithubIcon}>
                              Source Code
                            </SakugaButton>
                          </a>

                          {project.links.live && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <SakugaButton size="sm" variant="primary" soundType="slash" icon={ExternalLink}>
                                Launch Demo
                              </SakugaButton>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Accordion Toggle Bar */}
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="w-full flex items-center justify-between border-t border-zinc-850 bg-black/40 px-5 py-2.5 font-mono text-[11px] text-zinc-400 hover:text-white hover:bg-zinc-900/60 transition-colors"
                  >
                    <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#00f0ff]">
                      {isExpanded ? (
                        <>
                          <ChevronUp className="h-3.5 w-3.5 text-[#00f0ff]" />
                          <span>COLLAPSE SPECIFICATION</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-3.5 w-3.5 text-zinc-400 group-hover:text-[#00f0ff]" />
                          <span>VIEW ARCHITECTURE & SPECS</span>
                        </>
                      )}
                    </span>
                    <span className="font-jp text-[9px] text-[#ff3366]">
                      {isExpanded ? '仕様書収納' : '詳細展開'}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Enterprise Highlights Note */}
        <ScrollReveal delay={160}>
          <div className="mt-12 border border-zinc-800 bg-[#0d0d1a] p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#ffe600]" />
                  <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                    Enterprise Production Workflows: CBMO AI & Beeyouniq
                  </h4>
                </div>
                <p className="mt-1 font-sans text-xs text-zinc-400">
                  Engineered mission-critical backend microservices, campaign automation pipelines, and high-throughput AI platforms supporting daily commercial workloads.
                </p>
              </div>
              <a href="#experience">
                <SakugaButton size="sm" variant="secondary" soundType="blip">
                  View Experience Arc
                </SakugaButton>
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
