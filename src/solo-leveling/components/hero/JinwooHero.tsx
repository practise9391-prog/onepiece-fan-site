import React, { useState } from 'react';
import { universeAudio } from '../../../anime-universe/audio/universeAudio';
import confetti from 'canvas-confetti';
import { Zap, Skull, Sparkles, Swords, Scroll, Users, Activity, Award } from 'lucide-react';

interface JinwooHeroProps {
  onNavigate: (sectionId: string) => void;
}

type JinwooForm = 'monarch' | 'necromancer' | 'erank';

interface JinwooFormData {
  name: string;
  subtitle: string;
  badge: string;
  image: string;
  description: string;
  quote: string;
  powerType: string;
  accentGradient: string;
  glowColor: string;
  tag: string;
  rankTag: string;
}

const JINWOO_FORMS: Record<JinwooForm, JinwooFormData> = {
  monarch: {
    name: 'SUNG JIN-WOO (SHADOW MONARCH)',
    subtitle: 'The Sovereign of Death • Inheritor of Ashborn’s Black Heart',
    badge: 'MONARCH OF SHADOWS (그림자 군주)',
    image: './images/solo-leveling/jinwoo.png',
    description: 'Rising from the weakest E-Rank hunter to the supreme Sovereign of Death. Inheriting Ashborn’s infinite mana and an immortal legion of millions, he bends the laws of life, death, and space to his will.',
    quote: 'From now on... you are not my hunters. You are my prey. 일어나라 (ARISE)!',
    powerType: 'Ruler’s Authority • Shadow Extraction • Domain of the Monarch',
    accentGradient: 'from-blue-600 via-indigo-600 to-purple-600',
    glowColor: 'rgba(59, 130, 246, 0.45)',
    tag: 'JEJU ISLAND & MONARCHS WAR',
    rankTag: 'NATIONAL LEVEL • BEYOND MEASUREMENT'
  },
  necromancer: {
    name: 'SUNG JIN-WOO (NECROMANCER AWAKENED)',
    subtitle: 'Job Change Quest • Commander of the Blood-Red Host',
    badge: 'LORD OF THE DEAD',
    image: './images/solo-leveling/igris.png',
    description: 'Conquering the blood-red throne of knights and executing Commander Igris to unlock the hidden Necromancer class. A single word resounded through the silent castle: "ARISE".',
    quote: 'I used to run away from monsters... But now, the monsters will fear me!',
    powerType: 'Shadow Extraction • Dagger Rush • Bloodlust',
    accentGradient: 'from-indigo-600 via-purple-600 to-pink-600',
    glowColor: 'rgba(99, 102, 241, 0.45)',
    tag: 'JOB CHANGE QUEST CASTLE',
    rankTag: 'S-RANK CANDIDATE • PLAYER EXCLUSIVE'
  },
  erank: {
    name: 'SUNG JIN-WOO (THE WEAKEST HUNTER)',
    subtitle: 'E-Rank Hunter • The Cartenon Altar Survivor',
    badge: 'COURAGE OF THE WEAK',
    image: './images/solo-leveling/statue-god.png',
    description: 'Risking his life in low-rank gates every day to pay his mother’s medical bills and sister’s tuition. On the altar of the Double Dungeon, he refused to give up and the System chose him.',
    quote: 'If I don’t run, I’ll die. But if I don’t fight, I can’t protect anyone! I want to get stronger!',
    powerType: 'Daily Quest Grind • 100 Pushups • Infinite Potential',
    accentGradient: 'from-slate-600 via-blue-900 to-black',
    glowColor: 'rgba(30, 58, 138, 0.35)',
    tag: 'CARTENON DOUBLE DUNGEON',
    rankTag: 'E-RANK (WEAKEST OF ALL MANKIND)'
  }
};

export const JinwooHero: React.FC<JinwooHeroProps> = ({ onNavigate }) => {
  const [activeForm, setActiveForm] = useState<JinwooForm>('monarch');
  const [ariseCount, setAriseCount] = useState(0);

  const activeData = JINWOO_FORMS[activeForm];

  const handleArise = () => {
    universeAudio.playAriseEcho();
    universeAudio.playSystemChime();
    setAriseCount((prev) => prev + 1);

    confetti({
      particleCount: 85,
      spread: 95,
      origin: { y: 0.55 },
      colors: ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#ffffff']
    });
  };

  const switchForm = (form: JinwooForm) => {
    universeAudio.playClick(600, 0.08);
    setActiveForm(form);
  };

  return (
    <section className="relative px-4 sm:px-8 py-10 max-w-6xl mx-auto overflow-hidden">
      {/* GRAND HERO HEADER TITLE (Like One Piece) */}
      <div className="text-center space-y-2 mb-10">
        <h3 className="text-xs sm:text-sm font-mono tracking-[0.4em] text-blue-400 uppercase font-black">
          THE MONARCH OF SHADOWS
        </h3>
        <h1 className="font-cinzelDeco font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-widest drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]">
          THE REIGN OF ETERNITY
        </h1>
      </div>

      {/* FORM SWITCHER PILLS */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {[
          { id: 'monarch', label: '👑 SHADOW MONARCH (FINAL)', icon: Skull },
          { id: 'necromancer', label: '⚡ NECROMANCER (IGRIS QUEST)', icon: Zap },
          { id: 'erank', label: '🗡️ E-RANK (WEAKEST HUNTER)', icon: Activity }
        ].map((f) => {
          const Icon = f.icon;
          return (
            <button
              key={f.id}
              onClick={() => switchForm(f.id as JinwooForm)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeForm === f.id
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{f.label}</span>
            </button>
          );
        })}
      </div>

      {/* DUAL-COLUMN HERO SHOWCASE CARD (Identical Layout to One Piece Hero) */}
      <div
        className="relative rounded-3xl bg-slate-950/90 border-2 border-blue-500/40 p-6 sm:p-10 shadow-[0_0_60px_rgba(59,130,246,0.25)] backdrop-blur-xl"
        style={{
          boxShadow: `0 0 60px ${activeData.glowColor}`
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: CHARACTER PORTRAIT CARD & INTERACTIVE BUTTON */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-2xl bg-black/80 border-2 border-white/10 p-4 shadow-2xl flex flex-col items-center">
              {/* Tag Badge */}
              <div className="w-full flex items-center justify-between mb-3 text-[10px] font-mono font-bold text-blue-400">
                <span className="px-2.5 py-1 rounded bg-blue-950/80 border border-blue-500/30 uppercase">
                  {activeData.tag}
                </span>
                <span className="text-indigo-400">SUNG JIN-WOO</span>
              </div>

              {/* Character Image */}
              <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden bg-gradient-to-b from-black/40 via-blue-950/20 to-black flex items-center justify-center">
                <img
                  src={activeData.image}
                  alt={activeData.name}
                  className="w-full h-full object-contain filter contrast-110 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = './images/solo-leveling/jinwoo.png';
                  }}
                />
              </div>

              {/* Action Button */}
              <button
                onClick={handleArise}
                className="mt-4 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-indigo-500 text-white font-cinzel font-bold text-xs uppercase tracking-widest shadow-lg transition-all hover:scale-102 cursor-pointer flex items-center justify-center gap-2"
              >
                <Skull className="w-4 h-4 animate-bounce text-blue-200" />
                <span>COMMAND: ARISE (일어나라) ⚡</span>
              </button>

              <div className="mt-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                EXTRACTIONS TRIGGERED: <span className="text-blue-400 font-bold">{ariseCount}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: DETAILS, DESCRIPTION, QUOTE & STATS */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeData.badge}</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              {activeData.name}
            </h2>

            <div className="text-xs sm:text-sm font-mono text-blue-400 font-bold">
              {activeData.subtitle}
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeData.description}
            </p>

            {/* FAMOUS QUOTATION BOX (Matching One Piece Style) */}
            <blockquote className="p-4 rounded-2xl bg-black/60 border-l-4 border-blue-400 text-blue-200 font-serif italic text-sm sm:text-base leading-relaxed shadow-inner">
              "{activeData.quote}"
            </blockquote>

            {/* POWER SYSTEM & RANK BADGES */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="px-3 py-1.5 rounded-lg bg-black/70 border border-blue-500/40 text-xs font-mono text-blue-300 font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                <span>{activeData.powerType}</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-blue-500/15 border border-blue-500/40 text-xs font-mono text-blue-300 font-black">
                {activeData.rankTag}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK SECTION JUMP BUTTONS */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { id: 'gates', label: 'STORY SAGAS & GATES', icon: Scroll, desc: 'Season 1 to Final War' },
          { id: 'shadows', label: 'SHADOW ARMY', icon: Skull, desc: 'Bellion, Beru, Igris & Lore' },
          { id: 'hunters', label: 'TOP HUNTERS', icon: Users, desc: 'National Level & S-Rank' },
          { id: 'skills', label: 'SYSTEM SKILLS', icon: Zap, desc: 'Monarch Powers & Authority' }
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-blue-500/50 text-left transition-all hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] cursor-pointer group"
            >
              <Icon className="w-5 h-5 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-cinzel text-xs sm:text-sm font-bold text-white">
                {item.label}
              </div>
              <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                {item.desc}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
