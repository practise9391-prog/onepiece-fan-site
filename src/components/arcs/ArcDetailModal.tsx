import React, { useState, useEffect } from 'react';
import { ArcData, IconicMoment, FightScene, ArcSectionChapter } from '../../data/arcsData';
import { sound } from '../../audio/soundEngine';
import {
  X,
  Sparkles,
  Swords,
  Shield,
  MapPin,
  Users,
  Quote,
  Flame,
  Compass,
  ArrowLeft,
  BookOpen,
  Trophy,
  Zap
} from 'lucide-react';

interface ArcDetailModalProps {
  arc: ArcData;
  onClose: () => void;
}

export const ArcDetailModal: React.FC<ArcDetailModalProps> = ({ arc, onClose }) => {
  const [activeTab, setActiveTab] = useState<'fights' | 'chapters' | 'moments' | 'factions'>('fights');
  const [selectedFight, setSelectedFight] = useState<FightScene>(arc.fights[0] || null);
  const [selectedMoment, setSelectedMoment] = useState<IconicMoment>(arc.iconicMoments[0] || null);

  useEffect(() => {
    // Play thematic audio on entry
    if (arc.id === 'marineford') {
      sound.playThunder();
    } else if (arc.id === 'wano') {
      sound.playSwordSlash();
    } else if (arc.id === 'east-blue') {
      sound.playSwordSlash();
    } else {
      sound.playClick(440, 0.15);
    }
  }, [arc]);

  const handleClose = () => {
    sound.playClick(320, 0.1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black animate-fadeIn">
      {/* Thematic Background Backdrop */}
      <div
        className="fixed inset-0 bg-cover bg-center transition-all duration-1000 filter brightness-[0.3] scale-105"
        style={{
          backgroundImage: `url(${arc.bgImage})`
        }}
      />

      {/* Atmospheric Color Veil */}
      <div
        className={`fixed inset-0 bg-gradient-to-b ${arc.bgGradient} opacity-90 pointer-events-none`}
      />

      {/* Top Floating Cinematic HUD Header */}
      <header className="sticky top-0 z-30 bg-black/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
        <button
          onClick={handleClose}
          data-cursor="pointer"
          className="flex items-center gap-2 text-slate-300 hover:text-amber-400 text-xs sm:text-sm font-bold tracking-widest uppercase transition group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>RETURN TO ARCS</span>
        </button>

        {/* Center Arc Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-amber-300">
          <Compass className="w-3.5 h-3.5 animate-spin-slow" />
          <span>{arc.saga.toUpperCase()}</span>
        </div>

        <button
          onClick={handleClose}
          data-cursor="pointer"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-amber-400 transition cursor-pointer"
          aria-label="Close Arc"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      {/* Main Arc Thematic World Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-8">
        {/* Arc Banner Hero */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-amber-400 uppercase tracking-widest mb-1.5">
              <span>{arc.episodes}</span>
              <span>•</span>
              <span>{arc.chapters}</span>
              <span>•</span>
              <span>{arc.year}</span>
            </div>

            <h1 className="font-cinzelDeco text-4xl sm:text-6xl font-black text-white tracking-wider drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]">
              {arc.title}
            </h1>

            <p className="mt-1 text-sm sm:text-lg font-bold text-amber-300 tracking-wide uppercase">
              {arc.subtitle}
            </p>
          </div>

          {/* Quick Tab Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-white/10 flex-wrap">
            <button
              onClick={() => {
                sound.playHover();
                setActiveTab('fights');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wider transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'fights'
                  ? 'bg-red-500 text-white shadow-lg font-black'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Swords className="w-3.5 h-3.5" />
              <span>LEGENDARY FIGHTS</span>
            </button>
            <button
              onClick={() => {
                sound.playHover();
                setActiveTab('chapters');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wider transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'chapters'
                  ? 'bg-amber-400 text-black shadow-lg font-black'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>CHRONICLES & SCENES</span>
            </button>
            <button
              onClick={() => {
                sound.playHover();
                setActiveTab('moments');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wider transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'moments'
                  ? 'bg-amber-400 text-black shadow-lg font-black'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>ICONIC MOMENTS</span>
            </button>
            <button
              onClick={() => {
                sound.playHover();
                setActiveTab('factions');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wider transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'factions'
                  ? 'bg-amber-400 text-black shadow-lg font-black'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>FACTIONS</span>
            </button>
          </div>
        </div>

        {/* TAB 1: LEGENDARY FIGHT SCENES */}
        {activeTab === 'fights' && (
          <div className="mt-8 space-y-8">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-amber-400 font-bold">
              CANON COMBAT CLASHES & RIVALRIES
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Fight Selector List */}
              <div className="lg:col-span-4 space-y-3">
                {arc.fights.map((fight) => {
                  const isSelected = selectedFight?.id === fight.id;
                  return (
                    <button
                      key={fight.id}
                      onClick={() => {
                        sound.playSwordSlash();
                        setSelectedFight(fight);
                      }}
                      data-cursor="pointer"
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-red-500/20 border-red-500 shadow-lg shadow-red-500/30'
                          : 'bg-slate-900/60 border-slate-700/60 hover:border-red-400/50 hover:bg-slate-900'
                      }`}
                    >
                      <div className="text-[10px] font-mono text-red-400 uppercase font-black mb-1 flex items-center gap-1">
                        <Swords className="w-3 h-3" />
                        <span>{fight.combatants}</span>
                      </div>
                      <div className="font-cinzel text-sm sm:text-base font-bold text-white">
                        {fight.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Fight Full Dossier & Cinematic Spotlight */}
              <div className="lg:col-span-8">
                {selectedFight && (
                  <div className="glass-card p-6 sm:p-8 rounded-3xl border border-red-500/40 shadow-2xl relative overflow-hidden">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                      <span className="px-3 py-1 rounded-full bg-red-600/30 border border-red-500/50 text-red-300 text-xs font-black tracking-wider uppercase">
                        {selectedFight.combatants}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        LOCALE: {selectedFight.location}
                      </span>
                    </div>

                    <h2 className="font-cinzelDeco text-2xl sm:text-3xl font-black text-white mt-4">
                      {selectedFight.title}
                    </h2>

                    {/* Decisive Technique Badge */}
                    <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-yellow-300">
                      <Zap className="w-3.5 h-3.5 text-yellow-400" />
                      <span>CLASH: {selectedFight.keyClash}</span>
                    </div>

                    {/* Quote Box (e.g. Zoro promise to Luffy) */}
                    {selectedFight.quote && (
                      <div className="my-6 p-5 rounded-2xl bg-gradient-to-r from-red-950/40 to-slate-900 border-l-4 border-red-500 text-red-200 italic font-serif text-base sm:text-lg flex items-start gap-3">
                        <Quote className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                        <div>
                          <div>"{selectedFight.quote}"</div>
                          {selectedFight.speaker && (
                            <div className="mt-2 text-xs font-mono not-italic font-bold text-red-400 uppercase tracking-widest">
                              — {selectedFight.speaker}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed mt-4 font-sans">
                      {selectedFight.description}
                    </p>

                    {/* Outcome Box */}
                    <div className="mt-6 p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
                      <div className="text-xs sm:text-sm text-slate-300">
                        <strong className="text-amber-400 uppercase font-mono mr-1">OUTCOME:</strong>
                        {selectedFight.outcome}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CHRONICLES & PICTURE STORYBOARDS */}
        {activeTab === 'chapters' && (
          <div className="mt-8 space-y-6">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-amber-400 font-bold">
              THE COMPLETE CHRONOLOGICAL SERIES SECTIONS
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {arc.chaptersList.map((chap, i) => (
                <div
                  key={chap.id}
                  className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={chap.imageUrl}
                      alt={chap.title}
                      className="w-full h-full object-cover filter contrast-110 brightness-90 hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/60" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-amber-300">
                      ACT 0{i + 1} • {chap.episodes}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-cinzel text-lg font-bold text-white mb-2">
                        {chap.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                        {chap.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 space-y-1">
                      <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                        KEY SCENES:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {chap.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-amber-300 border border-white/10"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: ICONIC MOMENTS */}
        {activeTab === 'moments' && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              {arc.iconicMoments.map((m) => {
                const isSelected = selectedMoment?.id === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      sound.playHover();
                      setSelectedMoment(m);
                    }}
                    data-cursor="pointer"
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-400 shadow-lg'
                        : 'bg-slate-900/60 border-slate-700/60 hover:border-amber-400/50'
                    }`}
                  >
                    <div className="text-[10px] font-mono text-amber-400 uppercase font-black mb-1">
                      {m.badge}
                    </div>
                    <div className="font-cinzel text-sm sm:text-base font-bold text-white">
                      {m.title}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-2">
              {selectedMoment && (
                <div className="glass-card p-6 sm:p-8 rounded-3xl border border-amber-500/40">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase">
                      {selectedMoment.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      EMOTIONAL PEAK
                    </span>
                  </div>

                  <h2 className="font-cinzelDeco text-2xl sm:text-3xl font-black text-white mt-4">
                    {selectedMoment.title}
                  </h2>

                  {selectedMoment.quote && (
                    <div className="my-5 p-5 rounded-2xl bg-amber-500/10 border-l-4 border-amber-400 text-amber-200 italic font-serif text-base sm:text-lg flex items-start gap-3">
                      <Quote className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                      <div>
                        <div>"{selectedMoment.quote}"</div>
                        {selectedMoment.speaker && (
                          <div className="mt-2 text-xs font-mono not-italic font-bold text-amber-400 uppercase">
                            — {selectedMoment.speaker}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    {selectedMoment.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: FACTIONS */}
        {activeTab === 'factions' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {arc.factions.map((f, i) => (
              <div
                key={f.name}
                className="glass-card p-6 rounded-3xl border border-white/10"
              >
                <div className="text-[10px] font-mono text-amber-400 uppercase font-black mb-1">
                  FACTION 0{i + 1}
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white">
                  {f.name}
                </h3>
                <p className="text-xs text-amber-300 font-semibold uppercase mt-0.5">
                  {f.banner}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2">
                    COMMANDERS & ROSTER
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {f.members.map((m) => (
                      <span
                        key={m}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
