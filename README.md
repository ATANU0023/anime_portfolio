# ⚡ Atanu Pramanik — Anime Sakuga Portfolio

An anime-styled, high-performance portfolio website built from scratch for **Atanu Pramanik**, Software Engineer & Backend Architect.

Inspired by **[sakuga-vfx](https://github.com/finktheartist/sakuga-vfx)** by Justin Finkelman, this portfolio reimagines modern web micro-interactions through dynamic anime physics: squash-and-stretch, spring overshoots, canvas impact particles, manga sound lettering (*ドン!*, *ズバッ!*), and interactive synth audio.

---

## 🗡️ Features & Anime Design Architecture

### 1. Sakuga-VFX Micro-Interactions (`src/components/sakuga/`)
- **`<SakugaButton>`**: Anime physics buttons with squash on press, spring overshoot on release, and pop-up manga onomatopoeia (*ドン!*, *ズバッ!*, *発射!*).
- **`<SakugaToggle>`**: Snapping mechanical switch with audio feedback.
- **`<SakugaTabs>`**: Manga categorized scroll switching with squash-and-stretch indicators.
- **`<SakugaSlider>`**: Interactive Cursed Energy / Mana output tuner.
- **`<SakugaToast>`**: Manga speech-bubble alerts with sound-effect tags (*通知 // TRANSMISSION*).
- **`<SakugaCanvas>`**: High-performance interactive background canvas rendering drifting spirit sparks and responsive katana slash marks on click.
- **`SakugaSound.js`**: Built-in Web Audio API sound synthesizer producing sword slashes, impact thumps (*ドン!*), menu blips, and victory fanfares — **zero external audio dependencies**.

### 2. Tailored Sections
- **Hero Arena**: Oversized calligraphy watermark (*領域展開*), protagonist title, live status HUD, and interactive **Release Bankai / 卍解** power burst.
- **Character Sheet (About)**: Hunter / Sorcerer license dossier, stats radar, and passive abilities.
- **Jutsu Tree (Skills)**: Categorized technical arsenal organized by anime elements (*Lightning, Void, Earth, Wind, Metal*).
- **Quest Log (Projects)**: Deployed software showcases styled as dynamic manga panels:
  - **Atenix**: Context-aware browser extension published on Microsoft Edge Add-ons.
  - **Price App**: Full-stack price tracking sentinel with scraping and cron jobs.
  - **House Price Prediction**: Dockerized Machine Learning valuation model.
  - **CBMO AI & Beeyouniq**: High-throughput enterprise SaaS platforms.
- **Story Arcs (Experience & Education)**:
  - **Arc III**: Backend Developer at CBMO AI (2024 – 2026).
  - **Arc II**: Hackathons & Certifications (Postman API Student Expert, Power BI, SIT Hackathon).
  - **Arc I**: B.Tech in Computer Science at Supreme Knowledge Foundation Group of Institutions (CGPA: 8.28).
- **Guild Hall (Contact)**: Direct transmission terminal, copy-to-clipboard email trigger, phone frequency, and LinkedIn / GitHub portals.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Bundler & Dev Server**: Vite 5
- **Styling**: Tailwind CSS + Custom Manga Design Tokens
- **VFX Physics**: Custom Sakuga-VFX Controls & Canvas Animation
- **Icons**: Lucide React + Custom Manga SVGs
- **Audio**: Web Audio API Sound Synthesizer

---

## 🚀 Running Locally

```bash
# In anime_portfolio:
npm run dev

# Production build:
npm run build

# Preview build:
npm run preview
```
