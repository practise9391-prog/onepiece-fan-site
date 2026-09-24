import React, { useEffect, useState } from 'react';
import { AnimeUniverseMeta } from '../data/animeUniverseData';
import { universeAudio } from '../audio/universeAudio';
import { Sparkles, Zap, Flame, Shield, Compass } from 'lucide-react';

interface AnimeIntroModalProps {
  anime: AnimeUniverseMeta;
  onComplete: () => void;
}

export const AnimeIntroModal: React.FC<AnimeIntroModalProps> = ({ anime, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Play anime thematic audio
    if (anime.id === 'one-piece') {
      universeAudio.playPortalWarp(520);
    } else if (anime.id === 'demon-slayer') {
      universeAudio.playBladeSlash();
    } else if (anime.id === 'solo-leveling') {
      universeAudio.playSystemChime();
    } else if (anime.id === 'naruto') {
      universeAudio.playChakraBurst();
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [anime, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl animate-fadeIn">
      {/* Background Anime Aura Glow */}
      <div
        className="absolute inset-0 opacity-30 filter blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${anime.themeColor} 0%, transparent 70%)`
        }}
      />

      <div className="relative z-10 max-w-xl mx-4 text-center p-8 rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl flex flex-col items-center">
        {/* Animated Emblem Badge */}
        <div
          className="w-24 h-24 rounded-3xl p-1 mb-6 shadow-2xl animate-pulse flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${anime.themeColor}, #000)`,
            boxShadow: `0 0 40px ${anime.glowColor}`
          }}
        >
          <div className="w-full h-full rounded-2xl bg-black/90 flex items-center justify-center">
            {anime.id === 'one-piece' && <Compass className="w-12 h-12 text-amber-400 animate-spin-slow" />}
            {anime.id === 'demon-slayer' && <Flame className="w-12 h-12 text-red-500 animate-bounce" />}
            {anime.id === 'solo-leveling' && <Zap className="w-12 h-12 text-blue-400 animate-pulse" />}
            {anime.id === 'naruto' && <Sparkles className="w-12 h-12 text-orange-400 animate-spin-slow" />}
          </div>
        </div>

        {/* Kanji Subtitle */}
        <div className="text-sm font-bold tracking-[0.4em] text-slate-400 uppercase mb-2">
          {anime.japaneseTitle}
        </div>

        {/* Main Title */}
        <h1
          className="font-cinzelDeco text-4xl sm:text-5xl font-black text-white tracking-widest drop-shadow-2xl"
          style={{
            textShadow: `0 0 25px ${anime.themeColor}`
          }}
        >
          {anime.title}
        </h1>

        <p className="mt-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-300 font-bold">
          "{anime.tagline}"
        </p>

        {/* Cinematic Status Line */}
        <div className="mt-8 flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: anime.themeColor }} />
          <span>ENTERING REALM • {progress}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden">
          <div
            className="h-full transition-all duration-75 rounded-full"
            style={{
              width: `${progress}%`,
              backgroundColor: anime.themeColor,
              boxShadow: `0 0 12px ${anime.themeColor}`
            }}
          />
        </div>
      </div>
    </div>
  );
};

