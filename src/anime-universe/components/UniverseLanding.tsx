import React, { useState } from 'react';
import { ANIME_UNIVERSES, AnimeUniverseMeta, AnimeId } from '../data/animeUniverseData';
import { universeAudio } from '../audio/universeAudio';
import { UniverseParticleCanvas } from './UniverseParticleCanvas';
import { Sparkles, Compass, Flame, Zap, ArrowRight, Play, Volume2, VolumeX, Shield, Award } from 'lucide-react';

interface UniverseLandingProps {
  onSelectAnime: (id: AnimeId) => void;
}

export const UniverseLanding: React.FC<UniverseLandingProps> = ({ onSelectAnime }) => {
  const [hoveredId, setHoveredId] = useState<AnimeId | null>(null);
  const [isMuted, setIsMuted] = useState(universeAudio.getIsMuted());

  const handleToggleSound = () => {
    const unmuted = universeAudio.toggleMute();
    setIsMuted(!unmuted);
    universeAudio.playClick(600, 0.1);
  };

  const handleAnimeClick = (anime: AnimeUniverseMeta) => {
    universeAudio.playClick(500, 0.1);
    if (anime.id === 'one-piece') universeAudio.playPortalWarp(520);
    else if (anime.id === 'demon-slayer') universeAudio.playBladeSlash();
    else if (anime.id === 'solo-leveling') universeAudio.playSystemChime();
    else if (anime.id === 'naruto') universeAudio.playChakraBurst();

    onSelectAnime(anime.id);
  };

  return (
    <div className="relative min-h-screen bg-black text-slate-100 overflow-x-hidden flex flex-col justify-between selection:bg-amber-500 selection:text-black">
      {/* Dynamic Cosmic Particle Canvas */}
      <UniverseParticleCanvas />

      {/* Atmospheric Top Navigation Bar */}
      <header className="relative z-20 px-6 sm:px-12 py-6 flex items-center justify-between border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-blue-500 p-0.5 shadow-lg shadow-purple-500/20">
            <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
            </div>
          </div>
          <div>
            <span className="font-cinzelDeco font-black text-base tracking-widest text-white block">
              ANIME UNIVERSE
            </span>
            <span className="text-[9px] font-mono tracking-[0.3em] text-slate-400 uppercase">
              MULTIVERSE PORTAL • 4 WORLDS
            </span>
          </div>
        </div>

        {/* Sound Toggle */}
        <button
          onClick={handleToggleSound}
          onMouseEnter={() => universeAudio.playHover()}
          data-cursor="pointer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-amber-400/50 text-slate-300 hover:text-white transition text-xs font-mono"
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
          <span className="hidden sm:inline">{isMuted ? 'SOUND MUTED' : 'AUDIO ACTIVE'}</span>
        </button>
      </header>

      {/* Main Hero & Anime Cards Showcase */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex-1 flex flex-col justify-center">
        {/* Title Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-mono tracking-[0.3em] uppercase mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENTER THE REALM OF IMMORTALS & KINGS</span>
          </div>

          <h1 className="font-cinzelDeco text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-wider leading-tight">
            ANIME <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 via-blue-400 to-orange-400">UNIVERSE</span>
          </h1>

          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            Four legendary masterpieces. Select your destination to enter an ultra-premium, interactive cinematic experience.
          </p>
        </div>

        {/* 4 Interactive Anime World Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {ANIME_UNIVERSES.map((anime) => {
            const isHovered = hoveredId === anime.id;

            return (
              <div
                key={anime.id}
                onClick={() => handleAnimeClick(anime)}
                onMouseEnter={() => {
                  setHoveredId(anime.id);
                  universeAudio.playHover();
                }}
                onMouseLeave={() => setHoveredId(null)}
                data-cursor="pointer"
                className={`group relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden cursor-pointer border transition-all duration-500 transform-gpu flex flex-col justify-between p-7 sm:p-9 ${
                  isHovered
                    ? 'scale-[1.02] shadow-2xl'
                    : 'bg-slate-950/80 border-white/10 hover:border-white/20'
                }`}
                style={{
                  borderColor: isHovered ? anime.themeColor : undefined,
                  boxShadow: isHovered ? `0 20px 60px -15px ${anime.glowColor}` : undefined
                }}
              >
                {/* Background Ambience Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${anime.bgGradient} opacity-60 group-hover:opacity-90 transition-opacity duration-700`}
                />

                {/* Subtle Radial Glow */}
                <div
                  className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full filter blur-3xl opacity-30 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: anime.themeColor }}
                />

                {/* Main Character Artwork Background / Watermark */}
                <div className="absolute right-0 top-0 bottom-0 w-3/5 overflow-hidden pointer-events-none opacity-40 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700 flex items-center justify-center">
                  <img
                    src={anime.heroImage}
                    alt={anime.title}
                    className="h-full w-full object-contain object-right filter drop-shadow-[0_0_25px_rgba(0,0,0,0.8)]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = anime.fallbackImage;
                    }}
                  />
                </div>

                {/* Top Card Header */}
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <div className="text-[10px] font-mono tracking-[0.3em] font-bold uppercase text-slate-400 mb-1">
                      {anime.japaneseTitle} • {anime.genre}
                    </div>
                    <h2 className="font-cinzelDeco text-2xl sm:text-4xl font-black text-white tracking-wider group-hover:text-amber-200 transition-colors">
                      {anime.title}
                    </h2>
                    <div className="text-xs font-mono font-bold text-slate-300 uppercase mt-0.5" style={{ color: anime.themeColor }}>
                      {anime.subtitle}
                    </div>
                  </div>

                  {/* Emblem Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl bg-black/60 border border-white/20 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform"
                    style={{ borderColor: anime.themeColor }}
                  >
                    {anime.id === 'one-piece' && <Compass className="w-6 h-6 text-amber-400 animate-spin-slow" />}
                    {anime.id === 'demon-slayer' && <Flame className="w-6 h-6 text-red-500 animate-pulse" />}
                    {anime.id === 'solo-leveling' && <Zap className="w-6 h-6 text-blue-400" />}
                    {anime.id === 'naruto' && <Sparkles className="w-6 h-6 text-orange-400" />}
                  </div>
                </div>

                {/* Bottom Card Footer & Action */}
                <div className="relative z-10 mt-auto pt-6 border-t border-white/10">
                  <p className="text-xs sm:text-sm text-slate-300 font-sans line-clamp-2 mb-4 leading-relaxed">
                    {anime.description}
                  </p>

                  <div className="flex items-center justify-between">
                    {/* Status Pill */}
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-slate-300">
                      {anime.status}
                    </span>

                    {/* Launch CTA */}
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-cinzel text-xs font-bold tracking-wider transition-all duration-300 group-hover:translate-x-1"
                      style={{
                        backgroundColor: anime.themeColor,
                        color: '#000',
                        boxShadow: `0 0 15px ${anime.glowColor}`
                      }}
                    >
                      <span>ENTER REALM</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/80 py-6 px-6 text-center text-xs font-mono text-slate-500">
        ANIME UNIVERSE • PRESERVING ONE PIECE & EXPANDING MULTIVERSE LEGENDS • 2026
      </footer>
    </div>
  );
};
