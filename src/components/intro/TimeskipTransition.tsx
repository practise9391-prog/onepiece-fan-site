import React, { useEffect, useState } from 'react';
import { sound } from '../../audio/soundEngine';
import { Clock, Sparkles, FastForward } from 'lucide-react';

interface TimeskipTransitionProps {
  onComplete: () => void;
}

export const TimeskipTransition: React.FC<TimeskipTransitionProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'clock' | 'flashes' | 'posterSpin' | 'dawn' | 'fadeout'>('clock');
  const [flashIndex, setFlashIndex] = useState(0);

  const adventureMemories = [
    { text: 'THE PROMISE AT FOOSHA VILLAGE', saga: 'East Blue' },
    { text: 'THE SACRIFICE OF A PIRATE KING', saga: 'Loguetown' },
    { text: 'THE RAIN RETURNS TO ALABASTA', saga: 'Grand Line' },
    { text: 'RINGING THE GOLDEN BELL OF SHANDORA', saga: 'Skypiea' },
    { text: 'FAREWELL, GOING MERRY...', saga: 'Water 7' },
    { text: 'I WANT TO LIVE! — ENIES LOBBY', saga: 'World War' },
    { text: 'NOTHING HAPPENED — THRILLER BARK', saga: 'Sacrifice' },
    { text: 'THE CREW SEPARATED AT SABAODY', saga: 'Despair' },
    { text: 'THE DEATH OF FIRE FIST ACE', saga: 'Marineford' },
    { text: 'THE PROMISE CARVED IN BLOOD: 3D2Y', saga: 'The Secret Code' }
  ];

  useEffect(() => {
    // Sound FX: clock ticking / distortion
    sound.playClick(200, 0.1);

    // Fast, high-energy cinematic pacing (under 2.5s total)
    const timer1 = setTimeout(() => {
      setStage('flashes');
      sound.playSwordSlash();
    }, 600);

    const timer2 = setTimeout(() => {
      setStage('posterSpin');
      sound.playThunder();
    }, 1400);

    const timer3 = setTimeout(() => {
      setStage('dawn');
      sound.startDrumsOfLiberation();
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
      sound.stopDrumsOfLiberation();
    };
  }, [onComplete]);

  // Rapid memory flash timer (80ms adrenaline cuts)
  useEffect(() => {
    if (stage === 'flashes') {
      const interval = setInterval(() => {
        setFlashIndex((prev) => (prev + 1) % adventureMemories.length);
        sound.playClick(300 + Math.random() * 200, 0.02);
      }, 90);
      return () => clearInterval(interval);
    }
  }, [stage, adventureMemories.length]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden transition-opacity duration-1000 ${
        stage === 'fadeout' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background flying newspaper debris and wanted posters */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Flying Newspaper Pages */}
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded bg-amber-100/90 text-slate-800 p-2 shadow-2xl border border-amber-900/30 text-[8px] font-mono select-none"
            style={{
              width: `${70 + (i % 4) * 20}px`,
              height: `${90 + (i % 3) * 25}px`,
              top: `${(i * 19) % 95}%`,
              left: `${(i * 27) % 90}%`,
              transform: `rotate(${((i * 45) % 120) - 60}deg) scale(${stage === 'flashes' || stage === 'posterSpin' ? 1.4 : 0.7}) translateZ(0)`,
              opacity: stage === 'posterSpin' ? 0.85 : 0.25,
              animation: `floatSlow ${5 + (i % 5)}s ease-in-out infinite alternate`,
              transition: 'all 0.8s ease-out'
            }}
          >
            <div className="font-bold border-b border-slate-700 pb-0.5 mb-1 text-[7px] tracking-tight">
              WORLD ECONOMIC JOURNAL
            </div>
            <div className="font-extrabold text-[9px] text-red-700 leading-tight">
              {i % 2 === 0 ? 'SUMMIT WAR AT END' : 'PORTGAS D. ACE FALLS'}
            </div>
            <div className="mt-1 line-clamp-3 text-slate-600">
              Whitebeard breathes his last standing upright in Marineford crescent bay...
            </div>
          </div>
        ))}
      </div>

      {/* Skipping Control */}
      <button
        onClick={onComplete}
        className="absolute top-6 right-6 z-30 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-200 text-xs font-bold tracking-wider uppercase transition shadow-lg"
      >
        <span>SKIP TRANSITION</span>
        <FastForward className="w-3.5 h-3.5" />
      </button>

      {/* STAGE 1: Dramatic Clock / Time Transition */}
      {stage === 'clock' && (
        <div className="relative z-10 flex flex-col items-center text-center px-4 animate-fadeIn">
          {/* Pulsing Ancient Chrono Clock */}
          <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-amber-500/50 flex items-center justify-center bg-black/80 shadow-[0_0_80px_rgba(245,158,11,0.5)] mb-8">
            <div className="absolute inset-2 rounded-full border border-dashed border-amber-300/40 animate-spin-slow" />
            <Clock className="w-16 h-16 md:w-20 md:h-20 text-amber-400 animate-pulse" />
            {/* Clock hands fast spin */}
            <div className="absolute w-1 h-14 md:h-18 bg-amber-400 origin-bottom transform rotate-45 animate-spin" style={{ animationDuration: '2s' }} />
            <div className="absolute w-1.5 h-10 md:h-12 bg-red-500 origin-bottom transform -rotate-90 animate-spin" style={{ animationDuration: '6s' }} />
          </div>

          <div className="font-pirata text-5xl sm:text-7xl md:text-8xl text-amber-400 tracking-wider drop-shadow-[0_0_30px_rgba(245,158,11,0.8)]">
            TWO YEARS LATER...
          </div>

          <p className="mt-4 font-mono text-sm tracking-[0.4em] text-slate-300 uppercase">
            3D ➔ 2Y • The secret oath carved upon the bell of Ox
          </p>
        </div>
      )}

      {/* STAGE 2: Fast Flashes of Past Adventures */}
      {stage === 'flashes' && (
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.5em] text-red-500 font-bold mb-2">
            MEMORIES OF THE PAST ERA
          </div>
          <div className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-widest leading-none drop-shadow-[0_0_40px_rgba(239,68,68,0.9)] animate-pulse">
            {adventureMemories[flashIndex].text}
          </div>
          <div className="mt-4 inline-block px-3 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono uppercase tracking-wider rounded">
            {adventureMemories[flashIndex].saga}
          </div>
        </div>
      )}

      {/* STAGE 3: Flying Wanted Posters & Straw Hat Silhouettes */}
      {stage === 'posterSpin' && (
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
          <div className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black text-amber-400 tracking-widest drop-shadow-[0_0_50px_rgba(245,158,11,0.9)]">
            REUNITED AT SABAODY
          </div>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-medium max-w-xl">
            Ten comrades forged in trial. Mastered in Haki. The Thousand Sunny sets sail for the treacherous waters of the New World.
          </p>

          {/* Straw Hat Silhouettes Row */}
          <div className="mt-8 flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
            {['LUFFY', 'ZORO', 'NAMI', 'USOPP', 'SANJI', 'CHOPPER', 'ROBIN', 'FRANKY', 'BROOK', 'JINBE'].map((name) => (
              <div
                key={name}
                className="px-2.5 py-1 rounded bg-slate-900/90 border border-amber-500/40 text-[10px] font-bold tracking-widest text-amber-300 shadow-md"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STAGE 4: Dawn & Sun God Awakening */}
      {stage === 'dawn' && (
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-100 flex items-center justify-center shadow-[0_0_100px_rgba(250,204,21,1)] mb-6 animate-bounce">
            <Sparkles className="w-10 h-10 text-amber-950" />
          </div>

          <div className="font-cinzelDeco text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-widest drop-shadow-[0_0_60px_rgba(255,255,255,0.9)]">
            THE NEW ERA BEGINS
          </div>

          <p className="mt-4 text-lg md:text-xl font-bold tracking-[0.3em] text-yellow-300 uppercase">
            Joy Boy has returned • The Drums of Liberation beat!
          </p>
        </div>
      )}
    </div>
  );
};

