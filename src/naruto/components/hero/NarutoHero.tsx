import React, { useState } from 'react';
import { universeAudio } from '../../../anime-universe/audio/universeAudio';
import confetti from 'canvas-confetti';
import { Flame, Sparkles, Swords, Scroll, Users, Shield, Zap, Wind } from 'lucide-react';

interface NarutoHeroProps {
  onNavigate: (sectionId: string) => void;
}

type NarutoForm = 'hokage' | 'kurama' | 'genin';

interface NarutoFormData {
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

const NARUTO_FORMS: Record<NarutoForm, NarutoFormData> = {
  hokage: {
    name: 'NARUTO UZUMAKI (SEVENTH HOKAGE & SIX PATHS SAGE)',
    subtitle: 'Orange Hokage (七代目火影) • Child of Prophecy & Savior of the World',
    badge: 'SEVENTH HOKAGE • SIX PATHS SAGE',
    image: './images/naruto/naruto-sage.png',
    description: 'The hero who ended the generational cycle of hatred, united all five shinobi nations, and attained the legendary mantle of Seventh Hokage. Wielding Six Paths Senjutsu, Truth-Seeking Orbs, and the boundless chakra of all nine Tailed Beasts, he stands as the apex protector of the Hidden Leaf.',
    quote: 'If you don’t like the hand that fate dealt you with, fight for a new one! I’m not gonna run away, and I never go back on my word! That is my ninja way!',
    powerType: 'Six Paths Senjutsu • Super Tailed Beast Rasenshuriken • Baryon Mode',
    accentGradient: 'from-orange-500 via-amber-500 to-yellow-400',
    glowColor: 'rgba(234, 88, 12, 0.45)',
    tag: 'FOURTH GREAT WAR & HOKAGE REIGN',
    rankTag: 'SEVENTH HOKAGE • HERO OF KONOHAGAKURE'
  },
  kurama: {
    name: 'NARUTO UZUMAKI (KURAMA LINK CHAKRA MODE)',
    subtitle: 'Nine-Tails Jinchuriki (九尾チャクラモード) • Golden Bond of Trust',
    badge: 'KURAMA AVATAR UNLEASHED',
    image: './images/naruto/naruto-sage.png',
    description: 'Overcoming two decades of isolation and sorrow by acknowledging his inner demon as a comrade. Naruto and Kurama synchronize their fists in radiant golden chakra, unleashing the colossal Nine-Tails avatar capable of deflecting multiple Tailed Beast Bombs at once.',
    quote: 'You are no longer a monster fox... you are Kurama, my trusted partner from the Leaf Village! Let’s show them what we can do together!',
    powerType: 'Bijuu Chakra Shroud • Planetary Rasengan • Tailed Beast Bomb (Bijudama)',
    accentGradient: 'from-amber-500 via-orange-600 to-red-600',
    glowColor: 'rgba(245, 158, 11, 0.5)',
    tag: 'WAR ARC CLIMAX & FINAL VALLEY',
    rankTag: 'PERFECT JINCHURIKI • BEAST EMBODIMENT'
  },
  genin: {
    name: 'NARUTO UZUMAKI (GENIN TEAM 7)',
    subtitle: 'The Gutsy Ninja (意外性No.1忍) • Number One Hyperactive Knucklehead',
    badge: 'THE WILL OF FIRE EMBODIED',
    image: './images/naruto/naruto-sage.png',
    description: 'The lonely orphan boy who painted the great stone faces of the Hokage seeking recognition. Equipped with only the Multi Shadow Clone Jutsu, raw grit, and the teachings of Master Jiraiya, he proved that hard work and unyielding courage surpass preordained destiny.',
    quote: 'I will become Hokage! And everyone in the village will stop looking down on me and acknowledge my existence once and for all!',
    powerType: 'Multi Shadow Clone Jutsu • Vermilion Rasengan • Frog Kumite',
    accentGradient: 'from-orange-600 via-red-500 to-amber-400',
    glowColor: 'rgba(234, 88, 12, 0.4)',
    tag: 'LAND OF WAVES TO SASUKE RECOVERY',
    rankTag: 'GENIN OF KONOHA • TEAM 7 DISCIPLE'
  }
};

export const NarutoHero: React.FC<NarutoHeroProps> = ({ onNavigate }) => {
  const [activeForm, setActiveForm] = useState<NarutoForm>('hokage');
  const [pulseCount, setPulseCount] = useState(0);

  const activeData = NARUTO_FORMS[activeForm];

  const handlePulse = () => {
    universeAudio.playChakraBurst();
    universeAudio.playFireBurst();
    setPulseCount((prev) => prev + 1);

    confetti({
      particleCount: 85,
      spread: 95,
      origin: { y: 0.55 },
      colors: activeForm === 'kurama'
        ? ['#f59e0b', '#fbbf24', '#f97316', '#ffffff']
        : ['#ea580c', '#f97316', '#38bdf8', '#fbbf24', '#ffffff']
    });
  };

  const switchForm = (form: NarutoForm) => {
    universeAudio.playClick(580, 0.08);
    setActiveForm(form);
  };

  return (
    <section className="relative px-4 sm:px-8 py-10 max-w-6xl mx-auto overflow-hidden">
      {/* GRAND HERO HEADER TITLE (Matching One Piece Hero) */}
      <div className="text-center space-y-2 mb-10">
        <h3 className="text-xs sm:text-sm font-mono tracking-[0.4em] text-orange-400 uppercase font-black">
          THE HIDDEN LEAF VILLAGE • KONOHAGAKURE
        </h3>
        <h1 className="font-cinzelDeco font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-widest drop-shadow-[0_0_40px_rgba(234,88,12,0.5)]">
          THE WILL OF FIRE BURNS ETERNAL
        </h1>
      </div>

      {/* FORM SWITCHER PILLS */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {[
          { id: 'hokage', label: '🟠 SEVENTH HOKAGE & SIX PATHS SAGE', icon: Flame },
          { id: 'kurama', label: '🦊 KURAMA CHAKRA AVATAR MODE', icon: Sparkles },
          { id: 'genin', label: '🍃 GENIN TEAM 7 (GUTSY NINJA)', icon: Wind }
        ].map((f) => {
          const Icon = f.icon;
          return (
            <button
              key={f.id}
              onClick={() => switchForm(f.id as NarutoForm)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeForm === f.id
                  ? 'bg-orange-600 text-white shadow-[0_0_20px_rgba(234,88,12,0.6)] scale-105'
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
        className="relative rounded-3xl bg-slate-950/90 border-2 border-orange-500/40 p-6 sm:p-10 shadow-[0_0_60px_rgba(234,88,12,0.25)] backdrop-blur-xl"
        style={{
          boxShadow: `0 0 60px ${activeData.glowColor}`
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: CHARACTER PORTRAIT CARD & INTERACTIVE BUTTON */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-2xl bg-black/80 border-2 border-white/10 p-4 shadow-2xl flex flex-col items-center">
              {/* Tag Badge */}
              <div className="w-full flex items-center justify-between mb-3 text-[10px] font-mono font-bold text-orange-400">
                <span className="px-2.5 py-1 rounded bg-orange-950/80 border border-orange-500/30 uppercase">
                  {activeData.tag}
                </span>
                <span className="text-amber-400">NARUTO UZUMAKI</span>
              </div>

              {/* Character Image */}
              <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden bg-gradient-to-b from-black/40 via-orange-950/20 to-black flex items-center justify-center">
                <img
                  src={activeData.image}
                  alt={activeData.name}
                  className="w-full h-full object-contain filter contrast-110 drop-shadow-[0_0_25px_rgba(234,88,12,0.5)] transition-all duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = './images/naruto/naruto-sage.png';
                  }}
                />
              </div>

              {/* Action Button */}
              <button
                onClick={handlePulse}
                className="mt-4 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white font-cinzel font-bold text-xs uppercase tracking-widest shadow-lg transition-all hover:scale-102 cursor-pointer flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 animate-bounce text-yellow-200" />
                <span>CHANNEL RASENGAN & KURAMA LINK 🦊</span>
              </button>

              <div className="mt-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                CHAKRA BURSTS: <span className="text-amber-400 font-bold">{pulseCount}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: DETAILS, DESCRIPTION, QUOTE & STATS */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
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
              <div className="px-3 py-1.5 rounded-lg bg-black/70 border border-orange-500/40 text-xs font-mono text-orange-300 font-bold flex items-center gap-1.5">
                <Swords className="w-3.5 h-3.5 text-orange-400" />
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
          { id: 'arcs', label: '24 STORY ARCS', icon: Scroll, desc: 'All 3 Eras & 20 Scenes Each' },
          { id: 'shinobi', label: 'TEAM 7 & LEGENDS', icon: Swords, desc: 'Heroes & Mentors Tree' },
          { id: 'clans', label: 'GREAT CLANS', icon: Shield, desc: 'Uzumaki, Uchiha, Senju & Hyuga' },
          { id: 'hokage', label: 'HOKAGE MONUMENT', icon: Users, desc: 'First to Seventh Hokage' }
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-orange-500/50 text-left transition-all hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(234,88,12,0.2)] cursor-pointer group"
            >
              <Icon className="w-5 h-5 text-orange-400 mb-2 group-hover:scale-110 transition-transform" />
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

