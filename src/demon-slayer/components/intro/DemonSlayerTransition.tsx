import React, { useEffect, useState } from 'react';
import { universeAudio } from '../../../anime-universe/audio/universeAudio';
import { Flame, Swords, FastForward, Sparkles } from 'lucide-react';

interface DemonSlayerTransitionProps {
  onComplete: () => void;
}

export const DemonSlayerTransition: React.FC<DemonSlayerTransitionProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'earring' | 'flashes' | 'bladeSpin' | 'dawn' | 'fadeout'>('earring');
  const [flashIndex, setFlashIndex] = useState(0);

  const demonSlayerMemories = [
    { text: 'THE TRAGEDY AT MOUNT KUMOTORI', arc: 'Kamado Family' },
    { text: 'SLICING THE SACRED BOULDER AT MT. SAGIRI', arc: 'Final Selection' },
    { text: 'HINOKAMI KAGURA: DANCE OF THE FIRE GOD', arc: 'Natagumo Mountain' },
    { text: 'TOTAL CONCENTRATION: CONSTANT — GOURD SHATTERED', arc: 'Butterfly Mansion' },
    { text: 'SET YOUR HEART ABLAZE! — KYOJURO RENGOKU', arc: 'Mugen Train' },
    { text: 'NINTH FORM: PURGATORY (RENGOKU)', arc: 'Akaza Clash' },
    { text: 'SOUND BREATHING: COMPLETED MUSICAL SCORE', arc: 'Entertainment District' },
    { text: 'AWAKENING THE DEMON SLAYER MARK', arc: 'Swordsmith Village' },
    { text: 'NEZUKO CONQUERS THE MORNING SUN', arc: 'Miracle of the Sun' },
    { text: 'DESCENT INTO THE INFINITY CASTLE', arc: 'Final Battle' }
  ];

  useEffect(() => {
    universeAudio.playBladeSlash();

    const timer1 = setTimeout(() => {
      setStage('flashes');
      universeAudio.playFireBurst();
    }, 600);

    const timer2 = setTimeout(() => {
      setStage('bladeSpin');
      universeAudio.playThunder();
    }, 1400);

    const timer3 = setTimeout(() => {
      setStage('dawn');
      universeAudio.playBladeSlash();
    }, 2100);

    const timer4 = setTimeout(() => {
      setStage('fadeout');
      setTimeout(onComplete, 300);
    }, 2700);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'Escape') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  // Rapid memory flash timer (90ms adrenaline cuts)
  useEffect(() => {
    if (stage === 'flashes') {
      const interval = setInterval(() => {
        setFlashIndex((prev) => (prev + 1) % demonSlayerMemories.length);
        universeAudio.playClick(340 + Math.random() * 220, 0.02);
      }, 90);
      return () => clearInterval(interval);
    }
  }, [stage, demonSlayerMemories.length]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden transition-opacity duration-1000 ${
        stage === 'fadeout' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background flying wisteria petals & fiery embers */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${8 + (i % 5) * 6}px`,
              height: `${8 + (i % 5) * 6}px`,
              top: `${(i * 17) % 95}%`,
              left: `${(i * 23) % 90}%`,
              background: i % 2 === 0 ? 'rgba(239, 68, 68, 0.7)' : 'rgba(192, 132, 252, 0.7)',
              boxShadow: i % 2 === 0 ? '0 0 15px rgba(239,68,68,0.9)' : '0 0 15px rgba(192,132,252,0.9)',
              transform: `scale(${stage === 'flashes' || stage === 'bladeSpin' ? 1.6 : 0.8})`,
              opacity: stage === 'bladeSpin' ? 0.9 : 0.35,
              animation: `pulse ${2 + (i % 3)}s infinite alternate`,
              transition: 'all 0.6s ease-out'
            }}
          />
        ))}
      </div>

      {/* STAGE 1: HANAFUDA EARRING PULSE */}
      {stage === 'earring' && (
        <div className="relative z-10 flex flex-col items-center text-center animate-pulse">
          <div className="w-24 h-36 rounded-xl border-2 border-red-500/80 bg-slate-950 p-2 shadow-[0_0_50px_rgba(239,68,68,0.7)] flex flex-col items-center justify-between mb-6">
            <div className="w-10 h-10 rounded-full bg-red-600 border border-amber-400 flex items-center justify-center shadow-lg shadow-red-500/50">
              <Flame className="w-5 h-5 text-amber-200 animate-spin-slow" />
            </div>
            <div className="space-y-1 text-center">
              <div className="w-12 h-1 bg-red-500 mx-auto rounded" />
              <div className="w-8 h-1 bg-amber-400 mx-auto rounded" />
              <div className="w-10 h-1 bg-slate-400 mx-auto rounded" />
            </div>
            <span className="text-[8px] font-mono text-red-300 font-bold uppercase tracking-widest">
              HANAFUDA
            </span>
          </div>
          <p className="font-cinzel text-xl text-red-400 tracking-[0.3em] uppercase font-bold animate-bounce">
            SUN BREATHING INHERITANCE
          </p>
        </div>
      )}

      {/* STAGE 2: ADRENALINE MEMORY FLASHES */}
      {stage === 'flashes' && (
        <div className="relative z-10 max-w-2xl px-6 text-center animate-scaleIn">
          <div className="text-red-500 font-mono text-sm tracking-[0.4em] uppercase mb-2 flex items-center justify-center gap-2">
            <Flame className="w-4 h-4 text-red-500 animate-pulse" />
            <span>{demonSlayerMemories[flashIndex].arc}</span>
            <Flame className="w-4 h-4 text-red-500 animate-pulse" />
          </div>
          <h2 className="font-cinzelDeco font-black text-2xl sm:text-4xl text-white tracking-widest drop-shadow-[0_0_25px_rgba(239,68,68,0.9)]">
            {demonSlayerMemories[flashIndex].text}
          </h2>
        </div>
      )}

      {/* STAGE 3: NICHIRIN BLADE SPINNING AURA */}
      {stage === 'bladeSpin' && (
        <div className="relative z-10 flex flex-col items-center animate-spin-slow">
          <div className="relative w-48 h-48 rounded-full border-4 border-dashed border-red-500 flex items-center justify-center shadow-[0_0_80px_rgba(239,68,68,0.8)]">
            <Swords className="w-24 h-24 text-red-500 filter drop-shadow-[0_0_20px_#ef4444]" />
          </div>
          <span className="mt-4 font-cinzel text-lg tracking-widest text-amber-300 uppercase font-black">
            NICHIRIN BLADE AWAKENING
          </span>
        </div>
      )}

      {/* STAGE 4: GLORIOUS SUN DAWN */}
      {stage === 'dawn' && (
        <div className="relative z-10 text-center animate-fadeIn">
          <div className="text-amber-400 font-mono text-xs tracking-[0.5em] uppercase mb-2">
            KIMETSU NO YAIBA • TAIJOU JIDAI
          </div>
          <h1 className="font-cinzelDeco font-black text-4xl sm:text-6xl text-white tracking-widest drop-shadow-[0_0_40px_rgba(245,158,11,1)]">
            SET YOUR HEART ABLAZE!
          </h1>
          <p className="mt-4 text-xs font-mono text-red-300 tracking-widest">
            "LIVE WITH YOUR CHEST HELD HIGH. NO MATTER HOW WEAK YOU FEEL, BURN YOUR HEART."
          </p>
        </div>
      )}

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute bottom-8 right-8 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-red-500/40 text-red-300 text-xs font-mono font-bold tracking-widest uppercase hover:bg-red-950/80 transition cursor-pointer"
      >
        <span>SKIP TRANSITION</span>
        <FastForward className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
