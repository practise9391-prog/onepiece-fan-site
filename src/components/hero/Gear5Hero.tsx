import React, { useState } from 'react';
import { sound } from '../../audio/soundEngine';
import confetti from 'canvas-confetti';
import { Sparkles, Zap, Flame, Smile, Film, Users, Coins, Map, History, ShieldAlert } from 'lucide-react';

interface Gear5HeroProps {
  onNavigate: (sectionId: string) => void;
}

type LuffyForm = 'gear5' | 'gear4' | 'gear2' | 'base';

interface FormData {
  name: string;
  subtitle: string;
  badge: string;
  image: string;
  description: string;
  quote: string;
  hakiType: string;
  accentGradient: string;
  glowColor: string;
  tag: string;
}

const FORMS_METADATA: Record<LuffyForm, FormData> = {
  gear5: {
    name: 'SUN GOD NIKA (GEAR 5)',
    subtitle: 'Mythical Zoan: Hito Hito no Mi, Model: Nika Awakening',
    badge: 'WARRIOR OF LIBERATION',
    image: './images/crew/luffy-gear5-action.png',
    description: 'The ancient Drums of Liberation echo through the sky! Luffy’s hair turns pure cloud-white, defying all laws of physics with boundless cartoon freedom.',
    quote: 'This is my peak! As long as I am laughing, anything is possible!',
    hakiType: 'Supreme Advanced Conqueror’s Infusion',
    accentGradient: 'from-amber-400 via-yellow-200 to-white',
    glowColor: 'rgba(250, 204, 21, 0.45)',
    tag: 'ONIGASHIMA & EGGHEAD'
  },
  gear4: {
    name: 'GEAR 4: BOUNDMAN',
    subtitle: 'Muscular Balloon Inflation & High-Tension Armament',
    badge: 'BOUNCING MONSTER',
    image: './images/crew/luffy-gear4.png',
    description: 'Compressing massive Armament Haki into swollen muscular contours, bouncing relentlessly with devastating compressed air shockwaves.',
    quote: 'I won’t let you destroy Dressrosa! Gomu Gomu no King Kong Gun!',
    hakiType: 'Vulcanized Armament Haki Hardening',
    accentGradient: 'from-red-600 via-orange-500 to-amber-400',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    tag: 'DRESSROSA & WHOLE CAKE'
  },
  gear2: {
    name: 'GEAR 2 & GEAR 3',
    subtitle: 'Cardiovascular Doping & Bone Balloon Gigantification',
    badge: 'SUPERSONIC STEAM',
    image: './images/crew/luffy-gear2.png',
    description: 'Pumping blood at supersonic velocity through rubber arteries to achieve blinding speed and incinerating Jet attacks.',
    quote: 'All of my techniques have evolved to another level. Nobody is getting left behind anymore!',
    hakiType: 'Pre-Timeskip Awakening Evolution',
    accentGradient: 'from-rose-500 via-red-400 to-amber-300',
    glowColor: 'rgba(244, 63, 94, 0.35)',
    tag: 'ENIES LOBBY & MARINEFORD'
  },
  base: {
    name: 'MONKEY D. LUFFY (BASE)',
    subtitle: 'Future Pirate King • Captain of the Straw Hat Grand Fleet',
    badge: 'STRAW HAT EMBLEM',
    image: './images/crew/luffy.png',
    description: 'Sailing across the Grand Line under the sacred Straw Hat entrusted by Red-Haired Shanks, rallying ten legendary comrades to claim the One Piece.',
    quote: 'I’m going to become the King of the Pirates! (海賊王に俺はなる！)',
    hakiType: 'Advanced Conqueror’s • Ryuo • Future Sight',
    accentGradient: 'from-yellow-400 via-amber-300 to-orange-400',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    tag: 'EAST BLUE TO THE NEW WORLD'
  }
};

export const Gear5Hero: React.FC<Gear5HeroProps> = ({ onNavigate }) => {
  const [activeForm, setActiveForm] = useState<LuffyForm>('gear5');
  const [laughCount, setLaughCount] = useState(0);

  const activeData = FORMS_METADATA[activeForm];

  const handleNikaLaugh = () => {
    sound.startDrumsOfLiberation();
    sound.playClick(750, 0.12);
    setLaughCount((prev) => prev + 1);

    confetti({
      particleCount: 85,
      spread: 100,
      origin: { y: 0.55 },
      colors: ['#ffffff', '#fef08a', '#facc15', '#f59e0b', '#fbbf24']
    });

    setTimeout(() => {
      sound.stopDrumsOfLiberation();
    }, 4000);
  };

  const switchForm = (form: LuffyForm) => {
    setActiveForm(form);
    if (form === 'gear5') {
      handleNikaLaugh();
    } else if (form === 'gear4') {
      sound.playThunder();
    } else if (form === 'gear2') {
      sound.playFireBurst();
    } else {
      sound.playClick(500, 0.08);
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
      {/* Dynamic Animated Sun Halo & Background Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[580px] md:w-[800px] h-[340px] sm:h-[580px] md:h-[800px] pointer-events-none">
        <div
          className={`absolute inset-0 rounded-full transition-all duration-700 ${
            activeForm === 'gear5'
              ? 'bg-gradient-to-tr from-amber-400/35 via-yellow-200/35 to-white/55 blur-3xl scale-125'
              : activeForm === 'gear4'
              ? 'bg-gradient-to-tr from-red-600/35 via-amber-700/25 to-slate-900 blur-3xl'
              : activeForm === 'gear2'
              ? 'bg-gradient-to-tr from-rose-600/35 via-red-500/20 to-transparent blur-3xl'
              : 'bg-gradient-to-tr from-amber-500/20 via-yellow-300/15 to-transparent blur-3xl'
          }`}
        />
        <div className="absolute inset-8 rounded-full border-2 border-dashed border-white/20 animate-spin-slow" />
        <div className="absolute inset-20 rounded-full border border-amber-300/25 animate-spin" style={{ animationDuration: '50s' }} />

        {activeForm === 'gear5' && (
          <>
            <div className="absolute -top-12 left-1/4 w-44 h-24 bg-white/40 rounded-full blur-2xl animate-float-slow" />
            <div className="absolute -bottom-8 right-1/4 w-52 h-28 bg-yellow-100/30 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '2s' }} />
          </>
        )}
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 text-center max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Form Selector Navigation Pills */}
        <div className="mb-6 flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-slate-900/90 border border-white/10 backdrop-blur-md shadow-2xl flex-wrap justify-center">
          <button
            onClick={() => switchForm('base')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
              activeForm === 'base' ? 'bg-amber-400 text-black shadow-md font-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            Base Straw Hat
          </button>
          <button
            onClick={() => switchForm('gear2')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
              activeForm === 'gear2' ? 'bg-red-500 text-white shadow-md font-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            Gear 2 & 3
          </button>
          <button
            onClick={() => switchForm('gear4')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
              activeForm === 'gear4' ? 'bg-orange-500 text-white shadow-md font-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            Gear 4 Boundman
          </button>
          <button
            onClick={() => switchForm('gear5')}
            className={`px-4 py-1.5 rounded-full text-xs font-black tracking-wider transition flex items-center gap-1.5 cursor-pointer ${
              activeForm === 'gear5'
                ? 'bg-gradient-to-r from-yellow-300 via-amber-300 to-white text-black shadow-[0_0_25px_#facc15] scale-105'
                : 'text-yellow-300 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
            <span>GEAR 5 WHITE FORM</span>
          </button>
        </div>

        {/* Nika / Joy Boy Banner */}
        <div
          onClick={handleNikaLaugh}
          data-cursor="gear5"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-300/40 hover:border-yellow-300 text-yellow-300 text-xs sm:text-sm font-bold tracking-widest uppercase cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-lg shadow-yellow-500/20 mb-3"
        >
          <Smile className="w-4 h-4 text-yellow-400 animate-bounce" />
          <span>JOY BOY HAS RETURNED • SUN GOD NIKA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
        </div>

        {/* Top Titles */}
        <h2 className="font-bebas text-2xl sm:text-4xl md:text-5xl tracking-[0.35em] text-amber-400 uppercase drop-shadow-[0_0_25px_rgba(245,158,11,0.5)]">
          THE AGE OF PIRATES
        </h2>

        <h1 className="font-cinzelDeco text-3xl sm:text-6xl md:text-7xl font-black text-white tracking-wider leading-tight drop-shadow-[0_0_45px_rgba(255,255,255,0.7)]">
          THE JOURNEY <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-white">CONTINUES</span>
        </h1>

        {/* 🌟 HERO VISUAL SHOWCASE: High-Res Official Luffy Form */}
        <div className="mt-8 relative w-full max-w-3xl rounded-3xl bg-slate-950/85 border-2 border-yellow-400/40 p-6 sm:p-8 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-500">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-50 blur-2xl transition-all duration-700"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${activeData.glowColor}, transparent 70%)`
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            {/* Luffy Character Artwork Container */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div
                onClick={handleNikaLaugh}
                data-cursor="pointer"
                className="relative w-56 sm:w-64 h-72 sm:h-80 rounded-2xl overflow-hidden border-2 border-yellow-300/60 bg-gradient-to-b from-slate-900 via-slate-950 to-black flex items-center justify-center shadow-[0_0_35px_rgba(250,204,21,0.3)] group cursor-pointer"
              >
                {/* Authentic Anime Luffy Character Image */}
                <img
                  src={activeData.image}
                  alt={activeData.name}
                  className="w-full h-full object-contain filter contrast-110 brightness-105 group-hover:scale-105 transition-transform duration-300 p-2"
                  onError={(e) => {
                    // Fallback to base Luffy if any asset fails
                    (e.target as HTMLImageElement).src = './images/crew/luffy.png';
                  }}
                />

                {/* Form Badge Overlay */}
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/75 border border-yellow-400/40 text-[9px] font-mono font-black text-yellow-300 uppercase tracking-widest">
                  {activeData.tag}
                </div>

                {/* Interactive Click Prompt */}
                <div className="absolute bottom-2 inset-x-2 text-center py-1 rounded-lg bg-black/80 border border-white/10 text-[9px] font-mono text-yellow-300 tracking-wider">
                  CLICK TO AWAKEN DRUMS 🥁
                </div>
              </div>

              {/* Laugh count indicator */}
              <div className="mt-2 text-[10px] font-mono text-slate-400">
                LIBERATION PULSES: <span className="text-yellow-400 font-bold">{laughCount}</span>
              </div>
            </div>

            {/* Form Details and Combat Attributes */}
            <div className="md:col-span-7 text-left space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-yellow-400/10 border border-yellow-400/30 text-[10px] font-mono font-extrabold text-yellow-400 uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>{activeData.badge}</span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-white leading-snug">
                {activeData.name}
              </h3>

              <div className="text-xs font-mono font-bold text-amber-300 tracking-wider">
                {activeData.subtitle}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeData.description}
              </p>

              <blockquote className="p-3 rounded-xl bg-black/60 border-l-4 border-yellow-400 text-xs text-yellow-200 italic">
                "{activeData.quote}"
              </blockquote>

              <div className="pt-2 flex flex-wrap items-center gap-2 text-[10px] font-mono">
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300">
                  ⚡ {activeData.hakiType}
                </span>
                <span className="px-2.5 py-1 rounded bg-amber-500/20 border border-amber-400/40 text-amber-300 font-bold">
                  ฿ 3,000,000,000 BOUNTY
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Navigation Portals */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full max-w-4xl">
          <button
            onClick={() => onNavigate('arcs')}
            data-cursor="pointer"
            className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-amber-400 hover:bg-amber-500/20 text-slate-200 hover:text-amber-300 transition-all flex flex-col items-center gap-1.5 shadow-lg group cursor-pointer"
          >
            <Film className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="font-cinzel text-xs font-bold tracking-wider">15 CANON ARCS</span>
          </button>

          <button
            onClick={() => onNavigate('crew')}
            data-cursor="pointer"
            className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-emerald-400 hover:bg-emerald-500/20 text-slate-200 hover:text-emerald-300 transition-all flex flex-col items-center gap-1.5 shadow-lg group cursor-pointer"
          >
            <Users className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="font-cinzel text-xs font-bold tracking-wider">CREW & THEMES</span>
          </button>

          <button
            onClick={() => onNavigate('bounties')}
            data-cursor="pointer"
            className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-yellow-400 hover:bg-yellow-500/20 text-slate-200 hover:text-yellow-300 transition-all flex flex-col items-center gap-1.5 shadow-lg group cursor-pointer"
          >
            <Coins className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
            <span className="font-cinzel text-xs font-bold tracking-wider">WANTED POSTERS</span>
          </button>

          <button
            onClick={() => onNavigate('world')}
            data-cursor="pointer"
            className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/20 text-slate-200 hover:text-cyan-300 transition-all flex flex-col items-center gap-1.5 shadow-lg group cursor-pointer"
          >
            <Map className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="font-cinzel text-xs font-bold tracking-wider">GRAND LINE MAP</span>
          </button>

          <button
            onClick={() => onNavigate('timeline')}
            data-cursor="pointer"
            className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-purple-400 hover:bg-purple-500/20 text-slate-200 hover:text-purple-300 transition-all flex flex-col items-center gap-1.5 shadow-lg group cursor-pointer col-span-2 sm:col-span-1"
          >
            <History className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
            <span className="font-cinzel text-xs font-bold tracking-wider">VOYAGE TIMELINE</span>
          </button>
        </div>

        {/* Drums of Liberation Action Button */}
        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={handleNikaLaugh}
            data-cursor="pointer"
            className="px-7 py-3 rounded-full font-black text-xs sm:text-sm tracking-widest uppercase text-black bg-gradient-to-r from-yellow-300 via-amber-400 to-white hover:from-white hover:to-yellow-300 transition-all shadow-[0_0_35px_rgba(250,204,21,0.6)] flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950 animate-spin-slow" />
            <span>PLAY DRUMS OF LIBERATION ({laughCount > 0 ? `×${laughCount}` : 'BEAT'})</span>
          </button>
        </div>
      </div>
    </section>
  );
};
