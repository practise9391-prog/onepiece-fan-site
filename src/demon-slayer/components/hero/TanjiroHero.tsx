import React, { useState } from 'react';
import { universeAudio } from '../../../anime-universe/audio/universeAudio';
import confetti from 'canvas-confetti';
import { Flame, Droplets, Sparkles, Swords, Scroll, Users, Wind, ShieldAlert, Award } from 'lucide-react';

interface TanjiroHeroProps {
  onNavigate: (sectionId: string) => void;
}

type TanjiroForm = 'sun' | 'water' | 'mark';

interface TanjiroFormData {
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

const TANJIRO_FORMS: Record<TanjiroForm, TanjiroFormData> = {
  sun: {
    name: 'TANJIRO KAMADO (HINOKAMI KAGURA)',
    subtitle: 'Sun Breathing (日の呼吸) • Dance of the Fire God',
    badge: 'SUN BREATHING INHERITOR',
    image: './images/demon-slayer/tanjiro.png',
    description: 'Awakening the sacred Hinokami Kagura dance passed down through the Kamado bloodline. His black Nichirin blade catches fire and turns Bright Red, cutting through demonic regeneration with the heat of the sun!',
    quote: 'No matter how many people you lose, you have no choice but to go on living. No matter how devastating the blows may be!',
    powerType: 'Thirteenth Form • Clear Blue Sky • Dragon Sun Halo',
    accentGradient: 'from-red-500 via-amber-500 to-yellow-300',
    glowColor: 'rgba(239, 68, 68, 0.45)',
    tag: 'MOUNT NATAGUMO & INFINITY CASTLE',
    rankTag: 'KINOE RANK • DEMON PROGENITOR SLAYER'
  },
  water: {
    name: 'TANJIRO KAMADO (WATER BREATHING)',
    subtitle: 'Water Breathing (水の呼吸) • Cultivated on Mt. Sagiri',
    badge: 'WATER BREATHER DISCIPLE',
    image: './images/demon-slayer/tanjiro.png',
    description: 'Mastering the ten foundational forms of Water Breathing under Sakonji Urokodaki. Fluid, adaptable, and merciful like mountain currents, slicing demons cleanly along the opening thread.',
    quote: 'I can smell the opening thread! Breathe in, total concentration... Tenth Form: Constant Flux!',
    powerType: 'Water Surface Slash • Constant Flux • Blessed Rain After the Drought',
    accentGradient: 'from-blue-500 via-cyan-400 to-sky-200',
    glowColor: 'rgba(14, 165, 233, 0.45)',
    tag: 'FINAL SELECTION TO NATAGUMO',
    rankTag: 'MIZUNOTO RANK • UROKODAKI\'S DISCIPLE'
  },
  mark: {
    name: 'TANJIRO (AWAKENED MARK & TRANSPARENT WORLD)',
    subtitle: 'Demon Slayer Mark Awakened • Transparent World (透き通る世界)',
    badge: 'TRANSPARENT WORLD & RED BLADE',
    image: './images/demon-slayer/tanjiro.png',
    description: 'Surpassing mortal human limits: heart rate exceeding 200 BPM, body temperature at 39°C. Seeing through blood vessels, bones, and muscle contractions in absolute zero-emotion calm.',
    quote: 'Set your heart ablaze! I will fulfill the hope entrusted by Rengoku-san and eradicate Muzan!',
    powerType: 'Bright Red Nichirin Blade • Transparent World • Selfless State',
    accentGradient: 'from-amber-400 via-red-500 to-purple-600',
    glowColor: 'rgba(245, 158, 11, 0.5)',
    tag: 'SWORDSMITH VILLAGE & SUNRISE COUNTDOWN',
    rankTag: 'LEGENDARY SLAYER • THE SUN PROGENITOR’S WILL'
  }
};

export const TanjiroHero: React.FC<TanjiroHeroProps> = ({ onNavigate }) => {
  const [activeForm, setActiveForm] = useState<TanjiroForm>('sun');
  const [pulseCount, setPulseCount] = useState(0);

  const activeData = TANJIRO_FORMS[activeForm];

  const handlePulse = () => {
    if (activeForm === 'sun' || activeForm === 'mark') {
      universeAudio.playFireBurst();
      universeAudio.playBladeSlash();
    } else {
      universeAudio.playBladeSlash();
    }
    setPulseCount((prev) => prev + 1);

    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.55 },
      colors: activeForm === 'water'
        ? ['#38bdf8', '#0ea5e9', '#0284c7', '#ffffff']
        : ['#ef4444', '#f97316', '#f59e0b', '#facc15', '#ffffff']
    });
  };

  const switchForm = (form: TanjiroForm) => {
    universeAudio.playClick(580, 0.08);
    setActiveForm(form);
  };

  return (
    <section className="relative px-4 sm:px-8 py-10 max-w-6xl mx-auto overflow-hidden">
      {/* GRAND HERO HEADER TITLE (Like One Piece) */}
      <div className="text-center space-y-2 mb-10">
        <h3 className="text-xs sm:text-sm font-mono tracking-[0.4em] text-red-400 uppercase font-black">
          THE DEMON SLAYER CORPS
        </h3>
        <h1 className="font-cinzelDeco font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-widest drop-shadow-[0_0_40px_rgba(239,68,68,0.5)]">
          THE FLAME BURNS ETERNAL
        </h1>
      </div>

      {/* FORM SWITCHER PILLS */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {[
          { id: 'sun', label: '🔥 HINOKAMI KAGURA (SUN)', icon: Flame },
          { id: 'water', label: '🌊 WATER BREATHING (MIZU)', icon: Droplets },
          { id: 'mark', label: '✨ DEMON SLAYER MARK & RED BLADE', icon: Sparkles }
        ].map((f) => {
          const Icon = f.icon;
          return (
            <button
              key={f.id}
              onClick={() => switchForm(f.id as TanjiroForm)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeForm === f.id
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.6)] scale-105'
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
        className="relative rounded-3xl bg-slate-950/90 border-2 border-red-500/40 p-6 sm:p-10 shadow-[0_0_60px_rgba(239,68,68,0.25)] backdrop-blur-xl"
        style={{
          boxShadow: `0 0 60px ${activeData.glowColor}`
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: CHARACTER PORTRAIT CARD & INTERACTIVE BUTTON */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-2xl bg-black/80 border-2 border-white/10 p-4 shadow-2xl flex flex-col items-center">
              {/* Tag Badge */}
              <div className="w-full flex items-center justify-between mb-3 text-[10px] font-mono font-bold text-red-400">
                <span className="px-2.5 py-1 rounded bg-red-950/80 border border-red-500/30 uppercase">
                  {activeData.tag}
                </span>
                <span className="text-amber-400">TANJIRO KAMADO</span>
              </div>

              {/* Character Image */}
              <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden bg-gradient-to-b from-black/40 via-red-950/20 to-black flex items-center justify-center">
                <img
                  src={activeData.image}
                  alt={activeData.name}
                  className="w-full h-full object-contain filter contrast-110 drop-shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = './images/demon-slayer/tanjiro.png';
                  }}
                />
              </div>

              {/* Action Button */}
              <button
                onClick={handlePulse}
                className="mt-4 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-amber-600 to-red-600 hover:from-red-500 hover:to-amber-500 text-white font-cinzel font-bold text-xs uppercase tracking-widest shadow-lg transition-all hover:scale-102 cursor-pointer flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 animate-bounce text-amber-200" />
                <span>UNLEASH HINOKAMI KAGURA 🔥</span>
              </button>

              <div className="mt-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                BREATHING PULSES: <span className="text-amber-400 font-bold">{pulseCount}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: DETAILS, DESCRIPTION, QUOTE & STATS */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeData.badge}</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              {activeData.name}
            </h2>

            <div className="text-xs sm:text-sm font-mono text-amber-400 font-bold">
              {activeData.subtitle}
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeData.description}
            </p>

            {/* FAMOUS QUOTATION BOX (Matching One Piece Style) */}
            <blockquote className="p-4 rounded-2xl bg-black/60 border-l-4 border-amber-400 text-amber-200 font-serif italic text-sm sm:text-base leading-relaxed shadow-inner">
              "{activeData.quote}"
            </blockquote>

            {/* POWER SYSTEM & RANK BADGES */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="px-3 py-1.5 rounded-lg bg-black/70 border border-red-500/40 text-xs font-mono text-red-300 font-bold flex items-center gap-1.5">
                <Swords className="w-3.5 h-3.5 text-red-400" />
                <span>{activeData.powerType}</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/40 text-xs font-mono text-amber-300 font-black">
                {activeData.rankTag}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK SECTION JUMP BUTTONS (Like One Piece) */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { id: 'arcs', label: '12 STORY ARCS', icon: Scroll, desc: 'All 12 Sagas & 20 Scenes' },
          { id: 'hashira', label: 'THE 9 HASHIRA', icon: Users, desc: 'Pillars & Mentors Tree' },
          { id: 'slayers', label: 'TANJIRO & FRIENDS', icon: Swords, desc: 'Main Protagonists & Styles' },
          { id: 'breathing', label: 'BREATHING STYLES', icon: Wind, desc: 'Sun, Flame, Water & Forms' }
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-red-500/50 text-left transition-all hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] cursor-pointer group"
            >
              <Icon className="w-5 h-5 text-red-400 mb-2 group-hover:scale-110 transition-transform" />
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

