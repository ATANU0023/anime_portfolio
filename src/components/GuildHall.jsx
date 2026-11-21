import React, { useState } from 'react';
import { Mail, Phone, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import SakugaButton from './sakuga/SakugaButton';
import SakugaBadge from './sakuga/SakugaBadge';
import ScrollReveal from './ScrollReveal';
import { sakugaSound } from './sakuga/SakugaSound';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function GuildHall({ showToast }) {
  const [formData, setFormData] = useState({
    sender: '',
    email: '',
    missionType: 'Full-Time Mission',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    sakugaSound.playSlash();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    showToast("Email address copied to scroll clipboard! // ズバッ!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sakugaSound.playVictory();
    // Launch default email client
    const subject = encodeURIComponent(`[Quest Request] ${formData.missionType} from ${formData.sender}`);
    const body = encodeURIComponent(`Sender: ${formData.sender}\nEmail: ${formData.email}\nMission Type: ${formData.missionType}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
    showToast("Transmission initiated! Opening mail portal... // 送信完了!");
  };

  return (
    <section id="contact" className="relative py-16 bg-transparent">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-jp text-xs font-black uppercase text-[#00f0ff]">交信依頼 // SECTION 05</span>
              <span className="h-0.5 w-12 bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" />
            </div>
            <h2 className="font-anime text-4xl tracking-wider text-white sm:text-5xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              GUILD HALL // <span className="text-[#ff3366]">TRANSMISSION HUB</span>
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              Dispatch High-Priority Mission Requests, Collaborations, or Job Offers
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          
          {/* Quick Contact & Portals */}
          <div className="lg:col-span-5 space-y-6">
            
            <ScrollReveal delay={100}>
              <div className="border-2 border-black bg-zinc-950/85 backdrop-blur-md p-6 shadow-[6px_6px_0px_#00f0ff]">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span className="font-mono text-sm font-bold uppercase text-white">
                    Direct Comm Frequency
                  </span>
                  <SakugaBadge rank="S" variant="cyan">
                    ONLINE
                  </SakugaBadge>
                </div>

                <div className="mt-6 space-y-4 font-mono text-xs">
                  {/* Email Item */}
                  <div className="flex items-center justify-between border border-zinc-800 bg-[#0d0d1c]/90 p-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-[#ff3366]" />
                      <div>
                        <p className="text-[10px] text-zinc-500">PRIMARY DISPATCH</p>
                        <p className="font-bold text-white">{PORTFOLIO_DATA.personal.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 border border-zinc-700 bg-zinc-900 hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors"
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>

                  {/* Phone Item */}
                  <div className="flex items-center justify-between border border-zinc-800 bg-[#0d0d1c]/90 p-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-[#00f0ff]" />
                      <div>
                        <p className="text-[10px] text-zinc-500">MOBILE FREQUENCY</p>
                        <p className="font-bold text-white">{PORTFOLIO_DATA.personal.phone}</p>
                      </div>
                    </div>
                    <span className="font-jp text-[10px] text-zinc-500">通話可能</span>
                  </div>
                </div>

                {/* Social Portals */}
                <div className="mt-6 border-t border-zinc-800 pt-4">
                  <p className="font-mono text-xs font-bold uppercase text-zinc-400 mb-3">
                    EXTERNAL GUILD REALMS:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={PORTFOLIO_DATA.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SakugaButton
                        size="sm"
                        variant="secondary"
                        soundType="slash"
                        sfxText="ドン!"
                        icon={LinkedinIcon}
                      >
                        LinkedIn
                      </SakugaButton>
                    </a>

                    <a
                      href={PORTFOLIO_DATA.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SakugaButton
                        size="sm"
                        variant="ghost"
                        soundType="blip"
                        icon={GithubIcon}
                      >
                        GitHub
                      </SakugaButton>
                    </a>
                  </div>
                </div>

              </div>
            </ScrollReveal>

            {/* Response Time SLA Banner */}
            <ScrollReveal delay={150}>
              <div className="border-2 border-zinc-800 bg-zinc-950/80 backdrop-blur-md p-4 font-mono text-xs text-zinc-400 shadow-[4px_4px_0px_#000000]">
                <span className="text-[#ffe600] font-bold">DISPATCH SLA:</span> Average response time &lt; 12 hours for high-priority opportunities and engineering inquiries.
              </div>
            </ScrollReveal>

          </div>

          {/* Mission Dispatch Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={200}>
              <form
                onSubmit={handleSubmit}
                className="border-2 border-black bg-zinc-950/85 backdrop-blur-md p-6 sm:p-8 shadow-[8px_8px_0px_#ff3366] space-y-4"
              >
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-[#ff3366]" />
                    <span className="font-mono text-sm font-bold uppercase text-white">
                      Submit Mission Transmission
                    </span>
                  </div>
                  <span className="font-jp text-xs text-zinc-500">暗号化通信</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-xs font-bold uppercase text-zinc-300">
                      Your Name / Guild ID
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.sender}
                      onChange={(e) => setFormData({ ...formData, sender: e.target.value })}
                      placeholder="e.g. Satoshi Nakamoto"
                      className="w-full border-2 border-zinc-800 bg-[#0e0e1c]/90 px-3 py-2 font-mono text-xs text-white placeholder-zinc-600 focus:border-[#00f0ff] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-xs font-bold uppercase text-zinc-300">
                      Return Communication Channel (Email)
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full border-2 border-zinc-800 bg-[#0e0e1c]/90 px-3 py-2 font-mono text-xs text-white placeholder-zinc-600 focus:border-[#00f0ff] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-xs font-bold uppercase text-zinc-300">
                    Mission Classification
                  </label>
                  <select
                    value={formData.missionType}
                    onChange={(e) => setFormData({ ...formData, missionType: e.target.value })}
                    className="w-full border-2 border-zinc-800 bg-[#0e0e1c]/90 px-3 py-2 font-mono text-xs text-white focus:border-[#ff3366] focus:outline-none transition-colors"
                  >
                    <option value="Full-Time Mission">Full-Time Software Engineering Role</option>
                    <option value="Backend Consulting">Backend Architecture & API Consulting</option>
                    <option value="AI Workflow Development">AI System & Automation Engineering</option>
                    <option value="General Transmission">General Tech Inquiries</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-xs font-bold uppercase text-zinc-300">
                    Mission Briefing / Message
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detail the technical challenge, stack requirements, or team objectives..."
                    className="w-full border-2 border-zinc-800 bg-[#0e0e1c]/90 px-3 py-2 font-mono text-xs text-white placeholder-zinc-600 focus:border-[#00f0ff] focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <SakugaButton
                    type="submit"
                    size="lg"
                    variant="primary"
                    soundType="impact"
                    sfxText="発射!"
                    icon={Send}
                    className="w-full"
                  >
                    Transmit Message // 送信
                  </SakugaButton>
                </div>
              </form>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
