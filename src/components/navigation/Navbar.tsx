import React, { useState, useEffect } from 'react';
import { sound } from '../../audio/soundEngine';
import {
  Compass,
  Volume2,
  VolumeX,
  Menu,
  X,
  RotateCcw,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onReplayIntro: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onReplayIntro
}) => {
  const [isMuted, setIsMuted] = useState(sound.getIsMuted());
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'arcs', label: 'ARCS' },
    { id: 'crew', label: 'CREW & THEMES' },
    { id: 'bounties', label: 'BOUNTIES' },
    { id: 'devil-fruits', label: 'DEVIL FRUITS' },
    { id: 'world', label: 'WORLD MAP' },
    { id: 'timeline', label: 'TIMELINE' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const unmuted = sound.toggleMute();
    setIsMuted(!unmuted);
    sound.playClick(500, 0.08);
  };

  const handleItemClick = (id: string) => {
    sound.playClick(650, 0.06);
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 ${
          isScrolled
            ? 'bg-black/75 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo with Straw Hat Jolly Roger Emblem */}
          <button
            onClick={() => handleItemClick('home')}
            className="flex items-center gap-2.5 group cursor-pointer"
            data-cursor="pointer"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 p-0.5 shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <Compass className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-cinzelDeco font-black text-sm sm:text-base tracking-wider text-white group-hover:text-amber-400 transition-colors">
                ONE PIECE
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-amber-400/80 uppercase">
                THE GRAND LINE
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="pointer"
                  className={`relative px-3.5 py-1.5 text-xs font-bold tracking-wider rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-black bg-gradient-to-r from-amber-400 to-yellow-300 shadow-md shadow-amber-500/40 font-extrabold'
                      : 'text-slate-300 hover:text-amber-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full shadow-[0_0_8px_#f59e0b]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools: Replay Intro + Audio Control + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Replay Intro */}
            <button
              onClick={() => {
                sound.playClick(400, 0.1);
                onReplayIntro();
              }}
              title="Replay Cinematic Opening"
              data-cursor="pointer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 hover:border-amber-400/50 text-slate-300 hover:text-amber-300 text-xs font-semibold transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden md:inline">REPLAY INTRO</span>
            </button>

            {/* Audio Toggle with Equalizer Visualizer Bars */}
            <button
              onClick={handleToggleSound}
              data-cursor="pointer"
              title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 hover:border-amber-400 text-amber-300 text-xs font-bold transition shadow-sm"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-slate-400" />
              ) : (
                <div className="flex items-center gap-1">
                  <Volume2 className="w-4 h-4 text-amber-400" />
                  {/* Equalizer Wave Bars */}
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-amber-400 animate-pulse" />
                    <span className="w-0.5 h-3 bg-amber-300 animate-bounce" />
                    <span className="w-0.5 h-1.5 bg-yellow-400 animate-pulse" />
                  </div>
                </div>
              )}
              <span className="hidden sm:inline">
                {isMuted ? 'MUTED' : 'AUDIO ON'}
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-cursor="pointer"
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-amber-400"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 animate-fadeIn lg:hidden">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Compass className="w-6 h-6 text-amber-400 animate-spin-slow" />
              <span className="font-cinzel text-lg font-bold text-white">THE GRAND LINE</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/10 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-3 my-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`py-3 px-4 text-left font-cinzel text-xl font-bold rounded-xl transition ${
                  activeSection === item.id
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                onReplayIntro();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 font-bold"
            >
              <RotateCcw className="w-4 h-4" />
              <span>REPLAY CINEMATIC OPENING</span>
            </button>
            <div className="text-center text-[10px] text-slate-500 font-mono tracking-widest uppercase">
              One Piece Grand Line • Fan Experience
            </div>
          </div>
        </div>
      )}
    </>
  );
};

