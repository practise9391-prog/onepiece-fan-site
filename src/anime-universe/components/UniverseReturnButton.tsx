import React from 'react';
import { universeAudio } from '../audio/universeAudio';
import { Sparkles, Globe, ArrowLeft } from 'lucide-react';

interface UniverseReturnButtonProps {
  currentAnime: string;
  onReturn: () => void;
}

export const UniverseReturnButton: React.FC<UniverseReturnButtonProps> = ({ currentAnime, onReturn }) => {
  const handleClick = () => {
    universeAudio.playClick(720, 0.1);
    onReturn();
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-fadeIn">
      <button
        onClick={handleClick}
        onMouseEnter={() => universeAudio.playHover()}
        data-cursor="pointer"
        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-950/85 backdrop-blur-xl border border-white/20 hover:border-amber-400 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] cursor-pointer"
        aria-label="Return to Anime Universe Hub"
        title="Return to Anime Multiverse Hub"
      >
        {/* Soft Animated Outer Glow */}
        <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-blue-500 opacity-20 group-hover:opacity-60 blur-sm transition-opacity" />

        <div className="relative flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
            <Globe className="w-3.5 h-3.5 text-amber-300" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[9px] font-mono tracking-widest text-amber-400 uppercase font-black">
              ✦ MULTIVERSE
            </span>
            <span className="text-xs font-cinzel font-bold text-white group-hover:text-amber-200 tracking-wider">
              ANIME UNIVERSE
            </span>
          </div>

          <ArrowLeft className="w-3.5 h-3.5 text-slate-400 group-hover:-translate-x-0.5 transition-transform" />
        </div>
      </button>
    </div>
  );
};
