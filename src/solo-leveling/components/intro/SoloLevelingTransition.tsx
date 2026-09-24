import React, { useEffect, useState } from 'react';
import { universeAudio } from '../../../anime-universe/audio/universeAudio';
import { Zap, Skull, FastForward, Activity } from 'lucide-react';

interface SoloLevelingTransitionProps {
  onComplete: () => void;
}

export const SoloLevelingTransition: React.FC<SoloLevelingTransitionProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'systemWindow' | 'flashes' | 'ariseBurst' | 'monarchDawn' | 'fadeout'>('systemWindow');
  const [flashIndex, setFlashIndex] = useState(0);

  const soloLevelingMemories = [
    { text: 'THE DOUBLE DUNGEON SACRIFICE (CARTENON)', arc: 'Reawakening' },
    { text: 'DAILY QUEST SURVIVAL: 100 PUSHUPS & PENALTY ZONE', arc: 'The Player' },
    { text: 'SUBWAY DUNGEON: BLUE POISON-FANG KASAKA', arc: 'First Boss' },
    { text: 'JOB CHANGE QUEST: BLOOD-RED THRONE OF KNIGHTS', arc: 'Job Quest' },
    { text: 'COMMAND OF THE MONARCH: "ARISE" — IGRIS ENLISTED', arc: 'Shadow Extraction' },
    { text: 'RED GATE: SLAYING BARUKA THE FROST GENERAL', arc: 'Ice Elf Dungeon' },
    { text: 'DEMON CASTLE: DEFEATING MONARCH BARAN', arc: 'Demon Realm' },
    { text: 'JEJU ISLAND: S-RANK ANT KING BEHEADED — BERU RISES', arc: 'Jeju Raid' },
    { text: 'ASHBORN PASSES THE BLACK HEART OF DEATH', arc: 'Shadow Monarch' },
    { text: 'ALL SHADOWS KNEEL BEFORE SUNG JIN-WOO', arc: 'Final Monarch' }
  ];

  useEffect(() => {
    universeAudio.playSystemChime();

    const timer1 = setTimeout(() => {
      setStage('flashes');
      universeAudio.playBladeSlash();
    }, 600);

    const timer2 = setTimeout(() => {
      setStage('ariseBurst');
      universeAudio.playAriseEcho();
    }, 1400);

    const timer3 = setTimeout(() => {
      setStage('monarchDawn');
      universeAudio.playThunder();
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
        setFlashIndex((prev) => (prev + 1) % soloLevelingMemories.length);
        universeAudio.playClick(380 + Math.random() * 250, 0.02);
      }, 90);
      return () => clearInterval(interval);
    }
  }, [stage, soloLevelingMemories.length]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden transition-opacity duration-1000 ${
        stage === 'fadeout' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background flying blue system data shards */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded bg-blue-500/20 border border-blue-400/40 text-[7px] font-mono text-blue-300 p-1"
            style={{
              width: `${60 + (i % 4) * 20}px`,
              height: `${35 + (i % 3) * 15}px`,
              top: `${(i * 19) % 95}%`,
              left: `${(i * 26) % 90}%`,
              transform: `rotate(${((i * 30) % 90) - 45}deg) scale(${stage === 'flashes' || stage === 'ariseBurst' ? 1.5 : 0.8})`,
              opacity: stage === 'ariseBurst' ? 0.9 : 0.3,
              boxShadow: '0 0 15px rgba(59,130,246,0.5)',
              transition: 'all 0.6s ease-out'
            }}
          >
            [DATA_SHARD_{i}]
            <br />
            STATUS: EXTRACTED
          </div>
        ))}
      </div>

      {/* STAGE 1: SYSTEM NOTIFICATION POPUP */}
      {stage === 'systemWindow' && (
        <div className="relative z-10 p-6 rounded-2xl bg-black/90 border-2 border-blue-500/80 shadow-[0_0_60px_rgba(59,130,246,0.6)] text-center animate-pulse">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-blue-400 font-bold uppercase tracking-widest mb-2">
            <Activity className="w-4 h-4 text-blue-400 animate-spin" />
            <span>PLAYER STATUS EVOLUTION</span>
          </div>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-white">
            LEVEL UP: 1 ➔ 146+
          </h3>
          <div className="mt-3 text-xs font-mono text-emerald-400">
            [TITLE: THE MONARCH OF SHADOWS ACQUIRED]
          </div>
        </div>
      )}

      {/* STAGE 2: MEMORY FLASHES */}
      {stage === 'flashes' && (
        <div className="relative z-10 max-w-2xl px-6 text-center animate-scaleIn">
          <div className="text-blue-400 font-mono text-sm tracking-[0.4em] uppercase mb-2 flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-blue-400 animate-pulse" />
            <span>{soloLevelingMemories[flashIndex].arc}</span>
            <Zap className="w-4 h-4 text-blue-400 animate-pulse" />
          </div>
          <h2 className="font-cinzelDeco font-black text-2xl sm:text-4xl text-white tracking-widest drop-shadow-[0_0_25px_rgba(59,130,246,0.9)]">
            {soloLevelingMemories[flashIndex].text}
          </h2>
        </div>
      )}

      {/* STAGE 3: THE SACRED "ARISE" COMMAND BURST */}
      {stage === 'ariseBurst' && (
        <div className="relative z-10 flex flex-col items-center animate-scaleIn">
          <div className="relative w-44 h-44 rounded-full border-4 border-dashed border-indigo-500 flex items-center justify-center shadow-[0_0_80px_rgba(99,102,241,0.9)] bg-indigo-950/40">
            <Skull className="w-20 h-20 text-indigo-400 animate-pulse filter drop-shadow-[0_0_20px_#818cf8]" />
          </div>
          <h1 className="mt-6 font-cinzelDeco font-black text-4xl sm:text-6xl text-indigo-300 tracking-[0.3em] uppercase drop-shadow-[0_0_35px_rgba(99,102,241,1)]">
            " 일어나라 (ARISE) "
          </h1>
        </div>
      )}

      {/* STAGE 4: SHADOW MONARCH DAWN */}
      {stage === 'monarchDawn' && (
        <div className="relative z-10 text-center animate-fadeIn">
          <div className="text-blue-400 font-mono text-xs tracking-[0.5em] uppercase mb-2">
            SOLO LEVELING • 나 혼자만 레벨업
          </div>
          <h1 className="font-cinzelDeco font-black text-4xl sm:text-6xl text-white tracking-widest drop-shadow-[0_0_40px_rgba(59,130,246,1)]">
            I AM THE SHADOW MONARCH.
          </h1>
          <p className="mt-4 text-xs font-mono text-blue-300 tracking-widest">
            "MY SOLDIERS... SHALL CONQUER DEATH ITSELF."
          </p>
        </div>
      )}

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute bottom-8 right-8 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-blue-500/40 text-blue-300 text-xs font-mono font-bold tracking-widest uppercase hover:bg-blue-950/80 transition cursor-pointer"
      >
        <span>SKIP TRANSITION</span>
        <FastForward className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
