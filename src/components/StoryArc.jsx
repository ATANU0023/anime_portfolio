import React from 'react';
import { Briefcase, GraduationCap, Award, ChevronRight, Calendar, MapPin, Zap } from 'lucide-react';
import SakugaBadge from './sakuga/SakugaBadge';
import ScrollReveal from './ScrollReveal';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function StoryArc() {
  return (
    <section id="experience" className="relative py-16 bg-transparent">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-jp text-xs font-black uppercase text-[#ff3366]">物語篇章 // SECTION 04</span>
              <span className="h-0.5 w-12 bg-[#ff3366] shadow-[0_0_8px_#ff3366]" />
            </div>
            <h2 className="font-anime text-4xl tracking-wider text-white sm:text-5xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              STORY ARCS // <span className="text-[#00f0ff]">EXPERIENCE & EDUCATION</span>
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              Chronicles of Professional Missions, Hackathon Trials, and Academic Training
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={100}>
              <div className="flex items-center gap-2 font-mono text-sm font-bold uppercase text-white border-b border-zinc-800 pb-2">
                <Briefcase className="h-4 w-4 text-[#ff3366]" />
                <span>Professional Guild Missions (Experience)</span>
              </div>
            </ScrollReveal>

            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <ScrollReveal key={idx} delay={150}>
                <div className="relative border-2 border-black bg-zinc-950/85 backdrop-blur-md p-6 shadow-[6px_6px_0px_#ff3366]">
                  {/* Arc Title Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-3">
                    <div>
                      <span className="font-jp text-[10px] font-black text-[#ffe600] uppercase">
                        {exp.arc}
                      </span>
                      <h3 className="font-anime text-2xl text-white sm:text-3xl">
                        {exp.role} <span className="text-[#ff3366]">@ {exp.company}</span>
                      </h3>
                    </div>
                    <div className="text-right font-mono text-xs">
                      <span className="flex items-center gap-1 text-zinc-400">
                        <Calendar className="h-3.5 w-3.5 text-[#00f0ff]" />
                        {exp.period}
                      </span>
                      <span className="text-[#00f0ff] font-bold text-[10px]">{exp.status}</span>
                    </div>
                  </div>

                  <p className="mt-3 font-sans text-sm text-zinc-200">
                    {exp.description}
                  </p>

                  {/* Achievements List */}
                  <div className="mt-4 space-y-2.5">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 font-mono text-xs text-zinc-300">
                        <ChevronRight className="h-4 w-4 shrink-0 text-[#00f0ff] mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech chips */}
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-zinc-800/80 pt-3">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-zinc-800 bg-[#121226]/90 px-2 py-0.5 font-mono text-[10px] text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </ScrollReveal>
            ))}

            {/* Certifications & Hackathons */}
            <ScrollReveal delay={200}>
              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-2 font-mono text-sm font-bold uppercase text-white border-b border-zinc-800 pb-2">
                  <Award className="h-4 w-4 text-[#ffe600]" />
                  <span>Trials & Recognized Certifications</span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {PORTFOLIO_DATA.certifications.map((cert) => (
                    <div
                      key={cert.title}
                      className="border-2 border-zinc-800 bg-zinc-950/85 backdrop-blur-md p-4 shadow-[3px_3px_0px_#000000] hover:border-[#ffe600] transition-colors"
                    >
                      <SakugaBadge rank="A" variant="gold" className="mb-2">
                        {cert.badge}
                      </SakugaBadge>
                      <h4 className="font-mono text-xs font-bold text-white">
                        {cert.title}
                      </h4>
                      <p className="mt-1 font-mono text-[10px] text-zinc-400">
                        {cert.issuer} • {cert.year}
                      </p>
                      <p className="mt-2 font-sans text-xs text-zinc-400 leading-snug">
                        {cert.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Education Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delay={120}>
              <div className="flex items-center gap-2 font-mono text-sm font-bold uppercase text-white border-b border-zinc-800 pb-2">
                <GraduationCap className="h-4 w-4 text-[#00f0ff]" />
                <span>Ninja Academy & Academic Mastery (Education)</span>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <ScrollReveal key={idx} delay={180 + idx * 50}>
                  <div className="border-2 border-zinc-800 bg-zinc-950/85 backdrop-blur-md p-5 shadow-[4px_4px_0px_#000000] hover:border-[#00f0ff] transition-colors">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="font-jp text-[10px] font-bold text-[#00f0ff]">
                        {edu.arc}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#ffe600]">
                        {edu.score}
                      </span>
                    </div>

                    <div className="mt-2">
                      <h4 className="font-mono text-sm font-bold text-white">
                        {edu.degree}
                      </h4>
                      <p className="font-mono text-xs text-zinc-400 mt-0.5">
                        {edu.institution}
                      </p>
                      <div className="mt-1 flex items-center justify-between font-mono text-[10px] text-zinc-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </span>
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <p className="mt-3 font-sans text-xs text-zinc-400 leading-relaxed border-l-2 border-zinc-800 pl-2">
                      {edu.highlights}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Core Values / Philosophy */}
            <ScrollReveal delay={250}>
              <div className="border-2 border-black bg-gradient-to-br from-zinc-950/90 to-[#120815]/90 backdrop-blur-md p-5 shadow-[4px_4px_0px_#ffe600]">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#ffe600]" />
                  <span className="font-mono text-xs font-bold uppercase text-white">
                    Developer Code of Honor
                  </span>
                </div>
                <p className="mt-2 font-sans text-xs text-zinc-300 leading-relaxed">
                  "Continuous iteration over premature perfection. True backend mastery lies in creating architectures so resilient they endure chaos with zero downtime."
                </p>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
}
