import React, { useState } from 'react';
import { sound } from '../../audio/soundEngine';
import confetti from 'canvas-confetti';
import { Sparkles, Zap, Flame, Compass, Smile, Film, Users, Coins, Map, History } from 'lucide-react';

interface Gear5HeroProps {
  onNavigate: (sectionId: string) => void;
}

type LuffyForm = 'gear5' | 'gear4' | 'gear2' | 'base';

export const Gear5Hero: React.FC<Gear5HeroProps> = ({ onNavigate }) => {
  const [activeForm, setActiveForm] = useState<LuffyForm>('gear5');
  const [laughCount, setLaughCount] = useState(0);

  const handleNikaLaugh = () => {
    sound.startDrumsOfLiberation();
    sound.playClick(750, 0.12);
    setLaughCount((prev) => prev + 1);

    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#ffffff', '#fef08a', '#facc15', '#f59e0b']
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
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      {/* Dynamic Animated Sun Halo & Cartoon Cloud Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[560px] md:w-[760px] h-[340px] sm:h-[560px] md:h-[760px] pointer-events-none">
        {/* Giant Golden Sun Glow */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-700 ${
            activeForm === 'gear5'
              ? 'bg-gradient-to-tr from-amber-400/40 via-yellow-200/40 to-white/60 blur-3xl scale-125'
              : activeForm === 'gear4'
              ? 'bg-gradient-to-tr from-red-600/40 via-amber-700/30 to-slate-900 blur-3xl'
              : 'bg-gradient-to-tr from-amber-500/25 via-yellow-300/15 to-transparent blur-3xl'
          }`}
        />

        {/* Cartoon Cloud Swirl Rings */}
        <div className="absolute inset-8 rounded-full border-2 border-dashed border-white/20 animate-spin-slow" />
        <div className="absolute inset-16 rounded-full border border-amber-300/30 animate-spin" style={{ animationDuration: '45s' }} />

        {/* Nika Hair Steam Puffs */}
        {activeForm === 'gear5' && (
          <>
            <div className="absolute -top-12 left-1/4 w-40 h-20 bg-white/40 rounded-full blur-xl animate-float-slow" />
            <div className="absolute -bottom-8 right-1/4 w-48 h-24 bg-yellow-100/30 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '2s' }} />
          </>
        )}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center">
        {/* Form Selector Pills */}
        <div className="mb-6 flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-slate-900/90 border border-white/10 backdrop-blur-md">
          <button
            onClick={() => switchForm('base')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition ${
              activeForm === 'base' ? 'bg-amber-400 text-black shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Base Straw Hat
          </button>
          <button
            onClick={() => switchForm('gear2')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition ${
              activeForm === 'gear2' ? 'bg-red-500 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Gear 2 & 3
          </button>
          <button
            onClick={() => switchForm('gear4')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition ${
              activeForm === 'gear4' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Gear 4 Boundman
          </button>
          <button
            onClick={() => switchForm('gear5')}
            className={`px-3.5 py-1 rounded-full text-xs font-black tracking-wider transition flex items-center gap-1.5 ${
              activeForm === 'gear5'
                ? 'bg-gradient-to-r from-yellow-300 to-white text-black shadow-[0_0_20px_#facc15] scale-105'
                : 'text-yellow-300 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
            <span>GEAR 5 WHITE FORM</span>
          </button>
        </div>

        {/* Nika / Gear 5 Badge */}
        <div
          onClick={handleNikaLaugh}
          data-cursor="gear5"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-300/40 hover:border-yellow-300 text-yellow-300 text-xs sm:text-sm font-bold tracking-widest uppercase cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-lg shadow-yellow-500/20 mb-4"
        >
          <Smile className="w-4 h-4 text-yellow-400 animate-bounce" />
          <span>JOY BOY HAS RETURNED • SUN GOD NIKA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
        </div>

        {/* Primary Cinematic Heading */}
        <h2 className="font-bebas text-2xl sm:text-4xl md:text-5xl tracking-[0.35em] text-amber-400 uppercase drop-shadow-[0_0_25px_rgba(245,158,11,0.5)]">
          THE AGE OF PIRATES
        </h2>

        <h1 className="mt-2 font-cinzelDeco text-4xl sm:text-7xl md:text-8xl font-black text-white tracking-wider leading-tight drop-shadow-[0_0_45px_rgba(255,255,255,0.7)]">
          THE JOURNEY <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-white">CONTINUES</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-300 font-medium max-w-2xl leading-relaxed">
          {activeForm === 'gear5' ? (
            <span className="text-yellow-200 font-semibold">
              Awakened upon Onigashima rooftop! Luffy transforms into the legendary warrior of liberation with pure white hair, cloud sash steam, and boundless cartoon freedom.
            </span>
          ) : activeForm === 'gear4' ? (
            <span>
              Infusing muscle structure with high-octane Armament Haki and bouncing with devastating steam pressure against Doflamingo and Katakuri.
            </span>
          ) : (
            <span>
              From East Blue to Egghead Island, twenty-five years of legendary adventures, conqueror's clashes, and the quest for the ultimate treasure: <strong>ONE PIECE</strong>.
            </span>
          )}
        </p>

        {/* Gear 5 White Form Visual Showcase Card */}
        <div className="mt-8 p-6 rounded-3xl bg-slate-900/80 border-2 border-yellow-300/50 max-w-xl w-full shadow-[0_0_50px_rgba(250,204,21,0.25)] flex items-center gap-5 text-left">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-yellow-200 shrink-0 bg-white/10 flex items-center justify-center shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=400&q=80"
              alt="Luffy Gear 5 White Form"
              className="w-full h-full object-cover filter contrast-125 brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-1 text-[9px] font-black font-mono text-yellow-300 text-center w-full">
              WHITE FORM
            </div>
          </div>

          <div className="space-y-1 flex-1">
            <div className="text-[10px] font-mono text-yellow-400 font-black uppercase tracking-widest flex items-center justify-between">
              <span>MYTHICAL ZOAN AWAKENING</span>
              <span className="px-2 py-0.5 rounded bg-yellow-400 text-black text-[9px] font-extrabold">CANON</span>
            </div>
            <h4 className="font-cinzel text-lg font-black text-white">
              Hito Hito no Mi, Model: Nika
            </h4>
            <p className="text-xs text-slate-300 line-clamp-2">
              The user’s body acquires rubber properties with freedom restricted only by imagination, bringing smiles to people and laughing through battle.
            </p>
          </div>
        </div>

        {/* Direct Section Portals (Cleanly Navigating to Separate Sections) */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full max-w-4xl">
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

        {/* Drums of Liberation Play Button */}
        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={handleNikaLaugh}
            data-cursor="pointer"
            className="px-6 py-3 rounded-full font-black text-xs sm:text-sm tracking-widest uppercase text-black bg-gradient-to-r from-yellow-300 via-amber-400 to-white hover:from-white hover:to-yellow-300 transition-all shadow-[0_0_30px_rgba(250,204,21,0.6)] flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950 animate-spin-slow" />
            <span>PLAY DRUMS OF LIBERATION ({laughCount > 0 ? `×${laughCount}` : 'BEAT'})</span>
          </button>
        </div>
      </div>
    </section>
  );
};
