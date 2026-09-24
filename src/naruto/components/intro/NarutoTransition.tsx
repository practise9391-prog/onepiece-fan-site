import React, { useEffect, useState } from 'react';
import { universeAudio } from '../../../anime-universe/audio/universeAudio';
import { Sparkles, Eye, FastForward, Flame } from 'lucide-react';

interface NarutoTransitionProps {
  onComplete: () => void;
}

export const NarutoTransition: React.FC<NarutoTransitionProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'shuriken' | 'flashes' | 'kuramaRoar' | 'hokageDawn' | 'fadeout'>('shuriken');
  const [flashIndex, setFlashIndex] = useState(0);

  const narutoMemories = [
    { text: 'TEAM 7 BELL TEST: "COMRADES OVER RULES"', arc: 'Land of Waves' },
    { text: 'THE TEARS OF ZABUZA & HAKU IN THE SNOW', arc: 'Bridge of Heroes' },
    { text: 'ROCK LEE DROPS THE WEIGHTS AGAINST GAARA', arc: 'Chunin Exams' },
    { text: 'HIRUZEN SARUTOBI: REAPER DEATH SEAL', arc: 'Konoha Crush' },
    { text: 'VALLEY OF THE END: RASENGAN VS CHIDORI', arc: 'Sasuke Retrieval' },
    { text: 'THE TALE OF JIRAIYA THE GALLANT SINKING', arc: 'Mount Myoboku' },
    { text: 'SAGE MODE ARRIVAL: CRUSHING PAIN', arc: 'Pain Assault' },
    { text: 'MADARA DROPS TWO METEORS ON THE ALLIANCE', arc: 'Shinobi World War' },
    { text: 'KURAMA LINKS FISTS WITH NARUTO', arc: 'Nine-Tails Link' },
    { text: 'SIX PATHS SAGE & THE SEVENTH HOKAGE', arc: 'Destiny Fulfilled' }
  ];

  useEffect(() => {
    universeAudio.playChakraBurst();

    const timer1 = setTimeout(() => {
      setStage('flashes');
      universeAudio.playBladeSlash();
    }, 600);

    const timer2 = setTimeout(() => {
      setStage('kuramaRoar');
      universeAudio.playThunder();
    }, 1400);

    const timer3 = setTimeout(() => {
      setStage('hokageDawn');
      universeAudio.playChakraBurst();
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

  useEffect(() => {
    if (stage === 'flashes') {
      const interval = setInterval(() => {
        setFlashIndex((prev) => (prev + 1) % narutoMemories.length);
        universeAudio.playClick(370 + Math.random() * 240, 0.02);
      }, 90);
      return () => clearInterval(interval);
    }
  }, [stage, narutoMemories.length]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden transition-opacity duration-1000 ${
        stage === 'fadeout' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background flying leaves & orange chakra sparks */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${10 + (i % 4) * 8}px`,
              height: `${10 + (i % 4) * 8}px`,
              top: `${(i * 18) % 95}%`,
              left: `${(i * 24) % 90}%`,
              background: i % 2 === 0 ? 'rgba(249, 115, 22, 0.7)' : 'rgba(56, 189, 248, 0.6)',
              boxShadow: i % 2 === 0 ? '0 0 15px rgba(249,115,22,0.9)' : '0 0 15px rgba(56,189,248,0.9)',
              transform: `scale(${stage === 'flashes' || stage === 'kuramaRoar' ? 1.6 : 0.8})`,
              opacity: stage === 'kuramaRoar' ? 0.9 : 0.35,
              animation: `pulse ${2 + (i % 3)}s infinite alternate`,
              transition: 'all 0.6s ease-out'
            }}
          />
        ))}
      </div>

      {/* STAGE 1: LEAF HEADBAND & SPIRAL SEAL */}
      {stage === 'shuriken' && (
        <div className="relative z-10 flex flex-col items-center text-center animate-pulse">
          <div className="w-36 h-14 rounded-xl border-2 border-orange-500/80 bg-slate-950 p-2 shadow-[0_0_50px_rgba(249,115,22,0.7)] flex items-center justify-center mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-orange-400" />
              <span className="font-cinzelDeco font-black text-xl text-white tracking-widest">
                木ノ葉
              </span>
            </div>
          </div>
          <p className="font-cinzel text-xl text-orange-400 tracking-[0.3em] uppercase font-bold animate-bounce">
            WILL OF FIRE AWAKENING
          </p>
        </div>
      )}

      {/* STAGE 2: MEMORY FLASHES */}
      {stage === 'flashes' && (
        <div className="relative z-10 max-w-2xl px-6 text-center animate-scaleIn">
          <div className="text-orange-500 font-mono text-sm tracking-[0.4em] uppercase mb-2 flex items-center justify-center gap-2">
            <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
            <span>{narutoMemories[flashIndex].arc}</span>
            <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
          </div>
          <h2 className="font-cinzelDeco font-black text-2xl sm:text-4xl text-white tracking-widest drop-shadow-[0_0_25px_rgba(249,115,22,0.9)]">
            {narutoMemories[flashIndex].text}
          </h2>
        </div>
      )}

      {/* STAGE 3: KURAMA NINE-TAILS ROAR & MANGEKYO PULSE */}
      {stage === 'kuramaRoar' && (
        <div className="relative z-10 flex flex-col items-center animate-scaleIn">
          <div className="relative w-44 h-44 rounded-full border-4 border-dashed border-orange-500 flex items-center justify-center shadow-[0_0_80px_rgba(249,115,22,0.9)] bg-orange-950/40">
            <Eye className="w-20 h-20 text-orange-400 animate-spin-slow filter drop-shadow-[0_0_20px_#f97316]" />
          </div>
          <h1 className="mt-6 font-cinzelDeco font-black text-4xl sm:text-5xl text-orange-300 tracking-[0.25em] uppercase drop-shadow-[0_0_35px_rgba(249,115,22,1)]">
            KURAMA CHAKRA LINK
          </h1>
        </div>
      )}

      {/* STAGE 4: HOKAGE DAWN */}
      {stage === 'hokageDawn' && (
        <div className="relative z-10 text-center animate-fadeIn">
          <div className="text-orange-400 font-mono text-xs tracking-[0.5em] uppercase mb-2">
            NARUTO SHIPPUDEN • ナルト 疾風伝
          </div>
          <h1 className="font-cinzelDeco font-black text-4xl sm:text-6xl text-white tracking-widest drop-shadow-[0_0_40px_rgba(249,115,22,1)]">
            THE SEVENTH HOKAGE!
          </h1>
          <p className="mt-4 text-xs font-mono text-orange-300 tracking-widest">
            "AS LONG AS THERE ARE LEAVES FALLING, THE FIRE BURNS ON."
          </p>
        </div>
      )}

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute bottom-8 right-8 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-orange-500/40 text-orange-300 text-xs font-mono font-bold tracking-widest uppercase hover:bg-orange-950/80 transition cursor-pointer"
      >
        <span>SKIP TRANSITION</span>
        <FastForward className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

