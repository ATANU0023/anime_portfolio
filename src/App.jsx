import React, { useState } from 'react';
import SakugaCanvas from './components/sakuga/SakugaCanvas';
import SakugaToast from './components/sakuga/SakugaToast';
import SakugaDivider from './components/sakuga/SakugaDivider';
import GlobalAnimeBackdrop from './components/GlobalAnimeBackdrop';
import AnimeParallaxLayers from './components/parallax/AnimeParallaxLayers';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CharacterSheet from './components/CharacterSheet';
import JutsuTree from './components/JutsuTree';
import QuestLog from './components/QuestLog';
import StoryArc from './components/StoryArc';
import GuildHall from './components/GuildHall';
import Footer from './components/Footer';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="relative min-h-screen bg-[#080811] text-zinc-100 selection:bg-[#ff3366] selection:text-white">
      {/* 1. Global Anime Background Layer (Persistent Japanese Watermarks, Cyber Streamers & Halos) */}
      <GlobalAnimeBackdrop />

      {/* 2. Multi-Plane Parallax Layer (Floating Manga SFX, 2.5D Tilt, Velocity Speedlines, Depth HUD) */}
      <AnimeParallaxLayers />

      {/* 3. Interactive Canvas Particle Engine & Click Slash Marks */}
      <SakugaCanvas />

      {/* 4. Fighting Game EX Gauge / Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 5. Top Anime Navigation */}
      <Navbar />

      {/* 6. Main Content Journey with Anime Blade-Slash Section Transitions */}
      <main className="relative z-10">
        <Hero />

        {/* Form I: Character Sheet Transition */}
        <SakugaDivider
          form="壱の型"
          title="CHARACTER ATTRIBUTES"
          kanji="人物鑑定"
          color="crimson"
        />
        <CharacterSheet />

        {/* Form II: Jutsu Tree Transition */}
        <SakugaDivider
          form="弐の型"
          title="TECHNICAL ARSENAL"
          kanji="忍術大系"
          color="cyan"
        />
        <JutsuTree />

        {/* Form III: Quest Log Transition */}
        <SakugaDivider
          form="参の型"
          title="PROJECT CHRONICLES"
          kanji="任務履歴"
          color="gold"
        />
        <QuestLog />

        {/* Form IV: Story Arc Transition */}
        <SakugaDivider
          form="四の型"
          title="CHRONICLES OF MISSIONS"
          kanji="物語篇章"
          color="crimson"
        />
        <StoryArc />

        {/* Form V: Guild Hall Transition */}
        <SakugaDivider
          form="伍の型"
          title="TRANSMISSION HUB"
          kanji="交信依頼"
          color="cyan"
        />
        <GuildHall showToast={showToast} />
      </main>

      {/* 7. Footer Endplate */}
      <Footer />

      {/* 8. Floating Sakuga Speech-Bubble Toast */}
      {toastMessage && (
        <SakugaToast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}
