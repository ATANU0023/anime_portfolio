import React, { useRef, useEffect } from 'react';
import { sakugaSound } from './SakugaSound';

/**
 * SakugaTabs - Directly uses the official <sakuga-tabs> custom element
 * from https://github.com/finktheartist/sakuga-vfx
 * Features:
 * - Raised indicator slides to selected tab, stretching as it goes
 * - Lands with wedges above it, speed lines, and a puff at the origin side
 */
export default function SakugaTabs({
  tabs = [],
  activeTab = "0",
  onChange,
  className = '',
}) {
  const tabsRef = useRef(null);

  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;

    const handleChange = (e) => {
      sakugaSound.playBlip();
      const newIndex = e.detail?.index ?? el.selected;
      if (onChange) onChange(String(newIndex));
    };

    el.addEventListener('change', handleChange);
    return () => el.removeEventListener('change', handleChange);
  }, [onChange]);

  return (
    <div className={`overflow-x-auto pb-3 ${className}`}>
      <sakuga-tabs
        ref={tabsRef}
        selected={Number(activeTab)}
        label="Jutsu Tree Tabs"
        style={{
          '--sk-card': '#0e0e1c',
          '--sk-ink': '#ffffff',
          '--sk-acc': '#00f0ff',
          '--sk-bw': '2.5px',
          '--sk-sh': '4px 4px 0px #000000',
          display: 'inline-block',
        }}
      >
        {tabs.map((tab, idx) => (
          <option key={tab.id} value={tab.id}>
            {tab.label}
          </option>
        ))}
      </sakuga-tabs>
    </div>
  );
}
