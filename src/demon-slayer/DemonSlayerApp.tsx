import React, { useState } from 'react';
import {
  HASHIRA_PILLARS,
  TANJIRO_AND_FRIENDS,
  BREATHING_STYLES,
  TWELVE_KIZUKI,
  DEMON_SLAYER_ARCS,
  DEMON_SLAYER_QUOTES,
  NICHIRIN_BLADES,
  DEMON_SLAYER_OATH,
  CharacterProfile,
  DemonSlayerArc
} from './data/demonSlayerData';
import { universeAudio } from '../anime-universe/audio/universeAudio';
import { DemonSlayerIntro } from './components/intro/DemonSlayerIntro';
import { DemonSlayerTransition } from './components/intro/DemonSlayerTransition';
import { TanjiroHero } from './components/hero/TanjiroHero';
import {
  Flame,
  Droplets,
  Zap,
  Shield,
  Swords,
  Sparkles,
  ChevronRight,
  X,
  Heart,
  Wind,
  Scroll,
  Quote,
  RotateCcw,
  Volume2,
  VolumeX,
  ArrowUp,
  Award,
  Users,
  Copy,
  Check
} from 'lucide-react';

export type DemonSlayerView = 'home' | 'arcs' | 'hashira' | 'slayers' | 'breathing' | 'demons' | 'blades' | 'quotes' | 'oath';

export const DemonSlayerApp: React.FC = () => {
  const [stage, setStage] = useState<'intro' | 'transition' | 'main'>('intro');
  const [currentView, setCurrentView] = useState<DemonSlayerView>('home');
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterProfile | null>(null);
  const [showFamilyModal, setShowFamilyModal] = useState<boolean>(false);
  const [selectedArc, setSelectedArc] = useState<DemonSlayerArc | null>(null);
  const [activeBreathing, setActiveBreathing] = useState(BREATHING_STYLES[0]);
  const [copiedQuoteId, setCopiedQuoteId] = useState<string | null>(null);
  const [isAudioMuted, setIsAudioMuted] = useState(universeAudio.getIsMuted());

  const handleNavigate = (view: string) => {
    universeAudio.playClick(500, 0.08);
    setCurrentView(view as DemonSlayerView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSound = () => {
    const unmuted = universeAudio.toggleMute();
    setIsAudioMuted(!unmuted);
    if (unmuted) universeAudio.playClick(600, 0.08);
  };

  const handleCopyQuote = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    universeAudio.playClick(700, 0.05);
    setCopiedQuoteId(id);
    setTimeout(() => setCopiedQuoteId(null), 2500);
  };

  const scrollToTop = () => {
    universeAudio.playClick(600, 0.08);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#070308] text-slate-100 font-sans selection:bg-red-600 selection:text-white flex flex-col justify-between">
      {/* STAGE 1: CINEMATIC BLIZZARD & EMBER INTRO */}
      {stage === 'intro' && (
        <DemonSlayerIntro
          onComplete={() => setStage('transition')}
          onSkipToMain={() => setStage('main')}
        />
      )}

      {/* STAGE 2: MEMORY FLASHES & BLADE AWAKENING TRANSITION */}
      {stage === 'transition' && (
        <DemonSlayerTransition onComplete={() => setStage('main')} />
      )}

      {/* STAGE 3: MAIN DEMON SLAYER SANCTUARY */}
      {stage === 'main' && (
        <>
          {/* Top Demon Slayer Navbar (HUD Style Matching One Piece) */}
          <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-xl border-b border-red-500/25 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-red-600 to-amber-500 p-0.5 shadow-lg shadow-red-500/30">
                <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                  <Flame className="w-5 h-5 text-red-500 animate-pulse" />
                </div>
              </div>
              <div>
                <h1 className="font-cinzelDeco font-black text-base sm:text-lg text-white tracking-widest leading-none">
                  DEMON SLAYER
                </h1>
                <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.25em] text-red-400 uppercase">
                  KIMETSU NO YAIBA • 鬼滅の刃
                </span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex flex-wrap items-center gap-1 bg-slate-950/80 p-1.5 rounded-full border border-white/10 text-xs font-mono font-bold">
              {[
                { id: 'home', label: 'HOME' },
                { id: 'arcs', label: '12 STORY ARCS' },
                { id: 'hashira', label: 'THE 9 HASHIRA' },
                { id: 'slayers', label: 'TANJIRO & FRIENDS' },
                { id: 'breathing', label: 'BREATHING STYLES' },
                { id: 'demons', label: 'TWELVE KIZUKI' },
                { id: 'blades', label: 'NICHIRIN BLADES' },
                { id: 'quotes', label: 'QUOTES' },
                { id: 'oath', label: 'SACRED OATH' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleNavigate(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full transition cursor-pointer ${
                    currentView === tab.id
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/40 font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Controls: Sound & Replay */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleSound}
                className="p-2 rounded-full bg-slate-900 border border-red-500/30 text-red-300 hover:text-white hover:border-red-400 transition cursor-pointer"
                title={isAudioMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setStage('intro')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-red-500/30 text-red-300 hover:text-white hover:border-red-400 text-xs font-mono font-bold transition cursor-pointer"
                title="Replay Cinematic Intro"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">REPLAY INTRO</span>
              </button>
            </div>
          </header>

          {/* MAIN CONTENT AREA */}
          <main className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-8 w-full space-y-16">
            {/* VIEW 0: HOME — TANJIRO HERO (Matching One Piece Gear 5 Hero) */}
            {currentView === 'home' && (
              <TanjiroHero onNavigate={handleNavigate} />
            )}

            {/* VIEW 1: THE 12 STORY ARCS IN ORDER (All 3 Parts) */}
            {currentView === 'arcs' && (
              <section className="space-y-12 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Scroll className="w-3.5 h-3.5 text-red-400" />
                    <span>THE 12 STORY ARCS IN CHRONOLOGICAL ORDER • 20 SCENES EACH</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Chronicles of Kimetsu no Yaiba
                  </h2>
                  <p className="text-sm text-slate-400 max-w-3xl mx-auto">
                    From Tanjiro’s tragedy on Mount Kumotori through the high-stakes battles with the Hashira to the decisive sunrise against Muzan Kibutsuji.
                  </p>
                </div>

                {/* Sagas Loop: Part 1, Part 2, Part 3 */}
                {[
                  {
                    partTitle: 'Part 1: Tanjiro\'s Beginnings (Anime Season 1)',
                    arcs: DEMON_SLAYER_ARCS.slice(0, 6),
                    badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-950/60'
                  },
                  {
                    partTitle: 'Part 2: High-Stakes Battles (Anime Seasons 2–4)',
                    arcs: DEMON_SLAYER_ARCS.slice(6, 10),
                    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-950/60'
                  },
                  {
                    partTitle: 'Part 3: The Final Battle Saga (Infinity Castle & Sunrise Countdown)',
                    arcs: DEMON_SLAYER_ARCS.slice(10, 12),
                    badgeColor: 'border-red-500/40 text-red-400 bg-red-950/60'
                  }
                ].map((sagaGroup, gIdx) => (
                  <div key={gIdx} className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase border ${sagaGroup.badgeColor}`}>
                        {sagaGroup.partTitle}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {sagaGroup.arcs.map((arc) => (
                        <div
                          key={arc.id}
                          onClick={() => {
                            universeAudio.playBladeSlash();
                            setSelectedArc(arc);
                          }}
                          className="group relative rounded-3xl bg-slate-950/80 border border-white/10 hover:border-red-500/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_35px_rgba(239,68,68,0.3)] cursor-pointer"
                        >
                          <div className="space-y-4">
                            <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-black/60 border border-white/5 flex items-center justify-center">
                              <img
                                src={arc.image}
                                alt={arc.title}
                                className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = './images/demon-slayer/tanjiro.png';
                                }}
                              />
                              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 border border-red-500/40 text-[10px] font-mono text-red-400 font-bold">
                                {arc.chapters}
                              </div>
                            </div>

                            <div>
                              <div className="text-xs font-mono text-red-400 font-bold">
                                {arc.japaneseTitle} • {arc.episodes}
                              </div>
                              <h3 className="font-cinzel text-xl font-bold text-white mt-1">
                                {arc.title}
                              </h3>
                            </div>

                            <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                              {arc.synopsis}
                            </p>

                            <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 text-xs text-slate-300">
                              <strong className="text-amber-400">Key Clash:</strong> {arc.keyClash}
                            </div>
                          </div>

                          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-red-400 font-bold">
                            <span>EXPLORE 20 PLOT SCENES</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            )}

            {/* VIEW 2: THE 9 HASHIRA PILLARS */}
            {currentView === 'hashira' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Users className="w-3.5 h-3.5 text-red-400" />
                    <span>THE SUPREME PILLARS OF HUMANITY</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    The Nine Hashira Pillars (九柱)
                  </h2>
                  <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                    The highest-ranking warriors of the Demon Slayer Corps. Each has honed a distinct breathing discipline to extreme perfection.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {HASHIRA_PILLARS.map((char) => (
                    <div
                      key={char.id}
                      className="group relative rounded-3xl bg-slate-950/80 border border-white/10 hover:border-red-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_35px_rgba(239,68,68,0.25)]"
                    >
                      <div className="space-y-4">
                        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-black/60 border border-white/5 flex items-center justify-center">
                          <img
                            src={char.image}
                            alt={char.name}
                            className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = './images/demon-slayer/tanjiro.png';
                            }}
                          />
                          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 border border-red-500/40 text-[10px] font-mono text-red-400 uppercase font-black">
                            {char.title}
                          </div>
                        </div>

                        <div>
                          <div className="text-xs font-mono text-red-400 font-bold">
                            {char.japaneseName}
                          </div>
                          <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                            {char.name}
                          </h3>
                        </div>

                        <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                          {char.description}
                        </p>

                        <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                          <div className="text-[10px] font-mono text-amber-400 uppercase font-bold flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3" /> MARK STATUS:
                          </div>
                          <div className="text-xs text-slate-200">{char.markStatus}</div>
                        </div>
                      </div>

                      <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between gap-3">
                        <button
                          onClick={() => {
                            universeAudio.playBladeSlash();
                            setSelectedCharacter(char);
                            setShowFamilyModal(true);
                          }}
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white border border-red-500/30 text-xs font-mono font-bold tracking-wider uppercase transition cursor-pointer shadow-lg"
                        >
                          <Users className="w-3.5 h-3.5" />
                          <span>FAMILY & MENTORS TREE</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 3: TANJIRO & FRIENDS (MAIN PROTAGONISTS) */}
            {currentView === 'slayers' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Swords className="w-3.5 h-3.5 text-red-400" />
                    <span>THE KAMABOKO SQUAD & PROTAGONISTS</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Tanjiro & His Comrades
                  </h2>
                  <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                    The indomitable young warriors whose unbreakable bonds, unique combat styles, and shared suffering changed the fate of the Demon Slayer Corps.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {TANJIRO_AND_FRIENDS.map((char) => (
                    <div
                      key={char.id}
                      className="group relative rounded-3xl bg-slate-950/80 border border-white/10 hover:border-red-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_35px_rgba(239,68,68,0.25)]"
                    >
                      <div className="space-y-4">
                        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-black/60 border border-white/5 flex items-center justify-center">
                          <img
                            src={char.image}
                            alt={char.name}
                            className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = './images/demon-slayer/tanjiro.png';
                            }}
                          />
                          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 border border-red-500/40 text-[10px] font-mono text-red-400 uppercase font-black">
                            {char.title}
                          </div>
                        </div>

                        <div>
                          <div className="text-xs font-mono text-red-400 font-bold">
                            {char.japaneseName}
                          </div>
                          <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                            {char.name}
                          </h3>
                        </div>

                        <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                          {char.description}
                        </p>

                        <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                          <div className="text-[10px] font-mono text-amber-400 uppercase font-bold flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3" /> STYLE & FORMS:
                          </div>
                          <div className="text-xs text-slate-200">{char.signatureForms.join(' • ')}</div>
                        </div>
                      </div>

                      <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between gap-3">
                        <button
                          onClick={() => {
                            universeAudio.playBladeSlash();
                            setSelectedCharacter(char);
                            setShowFamilyModal(true);
                          }}
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white border border-red-500/30 text-xs font-mono font-bold tracking-wider uppercase transition cursor-pointer shadow-lg"
                        >
                          <Users className="w-3.5 h-3.5" />
                          <span>FAMILY & MENTORS TREE</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 4: BREATHING STYLES ENCYCLOPEDIA */}
            {currentView === 'breathing' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Wind className="w-3.5 h-3.5 text-red-400" />
                    <span>SACRED BREATHING STYLES & ESOTERIC FORMS</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Breathing Styles Encyclopedia
                  </h2>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  {BREATHING_STYLES.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => {
                        universeAudio.playBladeSlash();
                        setActiveBreathing(style);
                      }}
                      className={`px-5 py-2 rounded-full font-mono text-xs font-bold transition cursor-pointer ${
                        activeBreathing.id === style.id
                          ? 'bg-red-600 text-white shadow-lg shadow-red-600/40'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
                      }`}
                    >
                      {style.name}
                    </button>
                  ))}
                </div>

                <div className="p-8 rounded-3xl bg-slate-950/80 border border-red-500/40 space-y-6 shadow-2xl">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <div className="text-xs font-mono text-red-400 font-bold">
                        {activeBreathing.japaneseName}
                      </div>
                      <h3 className="font-cinzel text-3xl font-black text-white">
                        {activeBreathing.name}
                      </h3>
                    </div>
                    <div className="px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-300">
                      {activeBreathing.derivation}
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed max-w-4xl">
                    {activeBreathing.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    {activeBreathing.forms.map((form, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-1">
                        <div className="text-xs font-mono text-amber-400 font-bold uppercase">
                          {form.number}: {form.name}
                        </div>
                        <p className="text-xs text-slate-300">{form.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* VIEW 5: TWELVE KIZUKI & DEMONS */}
            {currentView === 'demons' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Flame className="w-3.5 h-3.5 text-red-400" />
                    <span>THE PROGENITOR & TWELVE DEMON MOONS</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    The Twelve Kizuki (十二鬼月)
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {TWELVE_KIZUKI.map((demon) => (
                    <div
                      key={demon.id}
                      className="p-6 rounded-3xl bg-slate-950/80 border border-red-500/30 space-y-4 shadow-xl hover:border-red-500/60 transition"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="w-24 h-28 rounded-2xl overflow-hidden bg-black shrink-0 border border-red-500/40">
                          <img
                            src={demon.image}
                            alt={demon.name}
                            className="w-full h-full object-contain filter contrast-110"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = './images/demon-slayer/muzan.png';
                            }}
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="px-2.5 py-0.5 rounded bg-red-500/20 text-red-300 text-[10px] font-mono font-black uppercase">
                            {demon.rank}
                          </span>
                          <h3 className="font-cinzel text-2xl font-black text-white">
                            {demon.name}
                          </h3>
                          <div className="text-xs font-mono text-amber-400">
                            <strong>Threat Level:</strong> {demon.threatRating}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-slate-300">
                        <div>
                          <strong className="text-red-400">Blood Demon Art:</strong> {demon.bloodArt}
                        </div>
                        <div>
                          <strong className="text-slate-400">Human Past:</strong> {demon.humanPast}
                        </div>
                        <p className="pt-2 text-slate-400 italic">"{demon.description}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 6: NICHIRIN BLADES ARSENAL */}
            {currentView === 'blades' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Swords className="w-3.5 h-3.5 text-red-400" />
                    <span>SUN-SOAKED IRON SAND FROM MOUNT YOKO</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Legendary Nichirin Blades
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {NICHIRIN_BLADES.map((blade) => (
                    <div
                      key={blade.id}
                      className="p-6 rounded-3xl bg-slate-950/80 border border-red-500/30 space-y-4 shadow-xl"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="w-20 h-20 rounded-2xl bg-black border border-red-500/40 flex items-center justify-center shrink-0">
                          <Swords className="w-10 h-10 text-red-400" />
                        </div>
                        <div>
                          <div className="text-xs font-mono text-red-400 font-bold">
                            BEARER: {blade.bearer}
                          </div>
                          <h3 className="font-cinzel text-2xl font-bold text-white">
                            {blade.name}
                          </h3>
                          <div className="text-xs font-mono text-amber-400 font-bold">
                            Color: {blade.bladeColor}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-slate-300">
                        <div>
                          <strong className="text-red-400">Meaning & Trait:</strong> {blade.meaning}
                        </div>
                        <div>
                          <strong className="text-amber-400">Special Property:</strong> {blade.specialTrait}
                        </div>
                        <div>
                          <strong className="text-slate-400">Craftsman:</strong> {blade.craftsman}
                        </div>
                        <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-slate-400">
                          <strong>Current Status:</strong> {blade.currentStatus}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 7: QUOTES SANCTUARY */}
            {currentView === 'quotes' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Quote className="w-3.5 h-3.5 text-red-400" />
                    <span>WORDS ENGRAVED IN HUMAN WILL</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Demon Slayer Quotes Sanctuary
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {DEMON_SLAYER_QUOTES.map((q) => (
                    <div
                      key={q.id}
                      className="p-6 rounded-3xl bg-slate-950/80 border border-red-500/25 flex flex-col justify-between space-y-4 shadow-xl"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={q.image}
                            alt={q.speaker}
                            className="w-14 h-14 rounded-2xl object-contain bg-black border border-red-500/40"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = './images/demon-slayer/tanjiro.png';
                            }}
                          />
                          <div>
                            <h4 className="font-cinzel text-lg font-bold text-white">{q.speaker}</h4>
                            <div className="text-xs font-mono text-red-400">{q.title}</div>
                          </div>
                        </div>

                        <blockquote className="p-4 rounded-2xl bg-black/60 border-l-4 border-red-500 text-red-100 italic text-sm leading-relaxed">
                          "{q.quote}"
                        </blockquote>

                        <div className="text-xs text-slate-400">
                          <strong className="text-amber-400">Context:</strong> {q.context}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-red-400 uppercase font-bold">
                          {q.tagline}
                        </span>
                        <button
                          onClick={() => handleCopyQuote(q.id, q.quote)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-red-500/30 text-xs font-mono text-red-300 hover:text-white hover:border-red-400 transition cursor-pointer"
                        >
                          {copiedQuoteId === q.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">COPIED!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>COPY QUOTE</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 8: SACRED OATH */}
            {currentView === 'oath' && (
              <section className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn py-12">
                <div className="w-20 h-20 rounded-3xl bg-red-600/20 border-2 border-red-500/60 mx-auto flex items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.5)]">
                  <Flame className="w-10 h-10 text-red-500 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-mono text-red-400 font-bold tracking-widest uppercase">
                    {DEMON_SLAYER_OATH.japaneseTitle}
                  </div>
                  <h2 className="font-cinzelDeco text-3xl sm:text-5xl font-black text-white tracking-wider">
                    {DEMON_SLAYER_OATH.title}
                  </h2>
                </div>

                <div className="p-8 sm:p-12 rounded-3xl bg-slate-950/90 border-2 border-red-500/40 shadow-2xl space-y-6">
                  <p className="font-serif italic text-base sm:text-xl text-red-100 leading-relaxed whitespace-pre-line">
                    "{DEMON_SLAYER_OATH.verse}"
                  </p>
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs font-mono text-amber-400 font-bold tracking-widest">
                      {DEMON_SLAYER_OATH.creed}
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      {DEMON_SLAYER_OATH.masterMessage}
                    </div>
                  </div>
                </div>
              </section>
            )}
          </main>

          {/* FAMILY & MENTORS TREE MODAL */}
          {showFamilyModal && selectedCharacter && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fadeIn">
              <div className="relative w-full max-w-4xl bg-slate-950 border-2 border-red-500/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(239,68,68,0.3)] max-h-[90vh] overflow-y-auto">
                <div className="flex items-start justify-between pb-4 border-b border-red-500/30">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-red-400 tracking-widest uppercase mb-1">
                      <Scroll className="w-4 h-4 text-red-400" />
                      <span>SACRED ANCESTRAL & MENTORSHIP LINEAGE</span>
                    </div>
                    <h3 className="font-cinzel text-2xl sm:text-4xl font-black text-white">
                      {selectedCharacter.name}’s Legendary Family Tree
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowFamilyModal(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-red-400 transition cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-6 space-y-6">
                  {selectedCharacter.familyTree.map((member, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-900/90 border border-red-500/20 hover:border-red-400/60 transition-all flex flex-col md:flex-row gap-5 items-start"
                    >
                      <div className="w-28 h-36 rounded-xl overflow-hidden border border-red-500/40 bg-black shrink-0 relative shadow-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-contain filter contrast-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = './images/demon-slayer/tanjiro.png';
                          }}
                        />
                        <div className="absolute bottom-1 inset-x-1 py-0.5 text-center bg-black/80 text-[8px] font-mono text-red-300 font-bold uppercase rounded">
                          {member.relation}
                        </div>
                      </div>

                      <div className="flex-1 space-y-2 text-left">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <h4 className="font-cinzel text-xl font-bold text-white">
                              {member.name}
                            </h4>
                            <div className="text-xs font-mono text-red-400 font-bold">
                              "{member.epithet}"
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded bg-red-500/10 border border-red-500/30 text-[10px] font-mono text-red-300 uppercase font-black">
                            {member.relation}
                          </span>
                        </div>

                        <div className="text-xs text-slate-300 leading-relaxed">
                          <strong className="text-amber-400">Deeds & Achievements:</strong> {member.achievements}
                        </div>

                        <div className="p-3 rounded-xl bg-black/60 border-l-2 border-red-400 text-xs italic text-red-200">
                          <strong>Best Shot & Quote:</strong> "{member.bestShotQuote}"
                          <div className="mt-1 text-[11px] not-italic text-slate-400">
                            🎬 <em>{member.bestShotScene}</em>
                          </div>
                        </div>

                        <div className="text-xs text-slate-400">
                          <strong className="text-red-400">Inherited Legacy:</strong> {member.legacy}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <button
                    onClick={() => setShowFamilyModal(false)}
                    className="px-8 py-2.5 rounded-full bg-red-600 text-white font-cinzel font-bold text-xs uppercase tracking-wider hover:bg-red-500 transition cursor-pointer"
                  >
                    CLOSE LINEAGE
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ARC DETAIL THEATER MODAL (20 SCENES PER ARC) */}
          {selectedArc && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fadeIn">
              <div className="relative w-full max-w-5xl bg-slate-950 border-2 border-red-500/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(239,68,68,0.4)] max-h-[92vh] overflow-y-auto">
                <div className="flex items-start justify-between pb-4 border-b border-red-500/30">
                  <div>
                    <div className="text-xs font-mono text-red-400 tracking-widest uppercase mb-1">
                      {selectedArc.part} • {selectedArc.chapters}
                    </div>
                    <h3 className="font-cinzel text-2xl sm:text-4xl font-black text-white">
                      {selectedArc.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedArc(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-red-400 transition cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="my-6 p-4 rounded-2xl bg-black/60 border border-white/10 text-sm text-slate-300">
                  <strong className="text-red-400">Synopsis:</strong> {selectedArc.synopsis}
                </div>

                <div className="space-y-4">
                  <h4 className="font-cinzel text-xl font-bold text-white flex items-center gap-2">
                    <Scroll className="w-5 h-5 text-red-500" />
                    <span>20 Complete Story Plot Scenes & Motivational Lessons</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedArc.storyPlotScenes.map((scene) => (
                      <div
                        key={scene.id}
                        className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded bg-red-600/30 text-red-300 text-[10px] font-mono font-bold">
                            SCENE {scene.sceneNumber}
                          </span>
                          <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">
                            {scene.tagline}
                          </span>
                        </div>

                        <h5 className="font-cinzel text-lg font-bold text-white">{scene.title}</h5>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {scene.storySummary}
                        </p>

                        <div className="p-3 rounded-xl bg-black/50 border-l-2 border-red-400 text-xs italic text-red-200">
                          <strong>Motivational Takeaway:</strong> {scene.motivationLine}
                        </div>

                        {scene.keyDialogue && (
                          <div className="text-[11px] font-mono text-slate-400">
                            💬 <strong>{scene.speaker}:</strong> {scene.keyDialogue}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 text-center">
                  <button
                    onClick={() => setSelectedArc(null)}
                    className="px-8 py-2.5 rounded-full bg-red-600 text-white font-cinzel font-bold text-xs uppercase tracking-wider hover:bg-red-500 transition cursor-pointer"
                  >
                    CLOSE SAGA THEATER
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* FOOTER */}
          <footer className="relative z-10 border-t border-white/10 bg-black/90 py-10 px-4 sm:px-8 mt-16 text-center space-y-6">
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Flame className="w-5 h-5 text-red-500" />
                <span className="font-cinzelDeco text-lg font-bold tracking-widest text-white">
                  DEMON SLAYER: KIMETSU NO YAIBA
                </span>
                <Swords className="w-5 h-5 text-red-500" />
              </div>
              <blockquote className="font-serif italic text-xs sm:text-sm text-red-200/90 max-w-2xl mx-auto">
                "Human emotions are eternal and indestructible. That is the one thing that will never fade."
                <footer className="text-[10px] font-mono text-red-400 mt-1 uppercase not-italic">
                  — Kagaya Ubuyashiki
                </footer>
              </blockquote>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 border border-red-500/30 hover:border-red-400 text-red-300 text-xs font-bold tracking-widest uppercase transition-all shadow-lg hover:scale-105 cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>RETURN TO MOUNT KUMOTORI</span>
              </button>

              <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
                DEMON SLAYER © KOYOHARU GOTOUGE / SHUEISHA, UFOTABLE • NON-PROFIT FAN TRIBUTE
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};
