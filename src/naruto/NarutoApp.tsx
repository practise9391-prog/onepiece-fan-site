import React, { useState } from 'react';
import {
  SHINOBI_LEGENDS,
  GREAT_CLANS,
  HOKAGE_MONUMENT,
  AKATSUKI_MEMBERS,
  NARUTO_ARCS,
  JUTSU_DOJUTSU,
  NARUTO_QUOTES,
  SHINOBI_WEAPONS,
  NARUTO_OATH,
  ShinobiLegend,
  NarutoArc,
  GreatClan
} from './data/narutoData';
import { universeAudio } from '../anime-universe/audio/universeAudio';
import { NarutoIntro } from './components/intro/NarutoIntro';
import { NarutoTransition } from './components/intro/NarutoTransition';
import { NarutoHero } from './components/hero/NarutoHero';
import {
  Sparkles,
  Shield,
  Swords,
  Wind,
  Flame,
  Zap,
  ChevronRight,
  ChevronLeft,
  X,
  Award,
  Eye,
  Scroll,
  Quote,
  RotateCcw,
  Volume2,
  VolumeX,
  ArrowUp,
  Users,
  Copy,
  Check,
  BookOpen
} from 'lucide-react';

export type NarutoView =
  | 'home'
  | 'arcs'
  | 'shinobi'
  | 'clans'
  | 'hokage'
  | 'akatsuki'
  | 'jutsu'
  | 'blades'
  | 'quotes'
  | 'oath';

export const NarutoApp: React.FC = () => {
  const [stage, setStage] = useState<'intro' | 'transition' | 'main'>('intro');
  const [currentView, setCurrentView] = useState<NarutoView>('home');
  const [selectedShinobi, setSelectedShinobi] = useState<ShinobiLegend | null>(null);
  const [showFamilyModal, setShowFamilyModal] = useState<boolean>(false);
  const [selectedClan, setSelectedClan] = useState<GreatClan | null>(null);
  const [selectedArc, setSelectedArc] = useState<NarutoArc | null>(null);
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [arcFilter, setArcFilter] = useState<'all' | 'part1' | 'shippuden' | 'boruto'>('all');
  const [copiedQuoteId, setCopiedQuoteId] = useState<string | null>(null);
  const [isAudioMuted, setIsAudioMuted] = useState(universeAudio.getIsMuted());

  const handleNavigate = (view: string) => {
    universeAudio.playClick(540, 0.08);
    setCurrentView(view as NarutoView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSound = () => {
    const unmuted = universeAudio.toggleMute();
    setIsAudioMuted(!unmuted);
    if (unmuted) universeAudio.playClick(600, 0.08);
  };

  const handleCopyQuote = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    universeAudio.playClick(740, 0.05);
    setCopiedQuoteId(id);
    setTimeout(() => setCopiedQuoteId(null), 2500);
  };

  const scrollToTop = () => {
    universeAudio.playClick(600, 0.08);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openArcTheater = (arc: NarutoArc) => {
    universeAudio.playChakraBurst();
    setSelectedArc(arc);
    setCurrentSceneIndex(0);
  };

  const filteredArcs = arcFilter === 'all'
    ? NARUTO_ARCS
    : NARUTO_ARCS.filter((arc) => arc.era === arcFilter);

  return (
    <div className="relative min-h-screen bg-[#0a0604] text-slate-100 font-sans selection:bg-orange-600 selection:text-white flex flex-col justify-between">
      {/* STAGE 1: WILL OF FIRE & RASENGAN INTRO */}
      {stage === 'intro' && (
        <NarutoIntro
          onComplete={() => setStage('transition')}
          onSkipToMain={() => setStage('main')}
        />
      )}

      {/* STAGE 2: MEMORY FLASHES & KURAMA LINK DAWN */}
      {stage === 'transition' && (
        <NarutoTransition onComplete={() => setStage('main')} />
      )}

      {/* STAGE 3: MAIN SHINOBI ARCHIVE */}
      {stage === 'main' && (
        <>
          {/* Top Shinobi Archive Header */}
          <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-xl border-b border-orange-500/25 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-500 to-red-600 p-0.5 shadow-lg shadow-orange-500/30">
                <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                  <Flame className="w-5 h-5 text-orange-400 animate-pulse" />
                </div>
              </div>
              <div>
                <h1 className="font-cinzelDeco font-black text-base sm:text-lg text-white tracking-widest leading-none">
                  NARUTO SHIPPUDEN
                </h1>
                <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.25em] text-orange-400 uppercase">
                  WILL OF FIRE • ナルト 疾風伝
                </span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex flex-wrap items-center gap-1 bg-slate-950/80 p-1.5 rounded-full border border-white/10 text-xs font-mono font-bold">
              {[
                { id: 'home', label: 'HOME' },
                { id: 'arcs', label: '24 STORY ARCS' },
                { id: 'shinobi', label: 'TEAM 7 & LEGENDS' },
                { id: 'clans', label: 'GREAT CLANS' },
                { id: 'hokage', label: 'HOKAGE MONUMENT' },
                { id: 'akatsuki', label: 'AKATSUKI & KARA' },
                { id: 'jutsu', label: 'JUTSU & DOJUTSU' },
                { id: 'blades', label: 'SEVEN SWORDS' },
                { id: 'quotes', label: 'QUOTES' },
                { id: 'oath', label: 'SHINOBI NINDO' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleNavigate(tab.id)}
                  className={`px-3 py-1 rounded-full transition cursor-pointer ${
                    currentView === tab.id
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/40 font-black'
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
                className="p-2 rounded-full bg-slate-900 border border-orange-500/30 text-orange-300 hover:text-white hover:border-orange-400 transition cursor-pointer"
                title={isAudioMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setStage('intro')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-orange-500/30 text-orange-300 hover:text-white hover:border-orange-400 text-xs font-mono font-bold transition cursor-pointer"
                title="Replay Will of Fire Intro"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">REPLAY INTRO</span>
              </button>
            </div>
          </header>

          {/* MAIN CONTENT AREA */}
          <main className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-10 w-full space-y-16">
            {/* VIEW 0: HOME HERO SCREEN (Matching One Piece Hero) */}
            {currentView === 'home' && (
              <NarutoHero onNavigate={handleNavigate} />
            )}

            {/* VIEW 1: 24 STORY ARCS (CHRONOLOGICAL ORDER WITH 20 SCENES PER ARC) */}
            {currentView === 'arcs' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Scroll className="w-3.5 h-3.5 text-orange-400" />
                    <span>THE COMPLETE SHINOBI SAGA • 20 SCENES EACH</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    The 24 Chronicles of Destiny
                  </h2>
                  <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                    From the Land of Waves to Two Blue Vortex, follow Naruto’s 24 story arcs in exact chronological order. Click any arc card to launch the 20-scene battle theater.
                  </p>
                </div>

                {/* ERA FILTER BUTTONS */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {[
                    { id: 'all', label: `ALL 24 ARCS (${NARUTO_ARCS.length})` },
                    { id: 'part1', label: 'PART 1: GENIN ERA (5 ARCS)' },
                    { id: 'shippuden', label: 'PART 2: SHIPPUDEN (7 ARCS)' },
                    { id: 'boruto', label: 'PART 3: BORUTO & TBV (6 ARCS)' }
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => {
                        universeAudio.playClick(620, 0.05);
                        setArcFilter(filter.id as any);
                      }}
                      className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition cursor-pointer ${
                        arcFilter === filter.id
                          ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                          : 'bg-slate-950/80 text-slate-400 hover:text-white border border-white/10'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>

                {/* ARCS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArcs.map((arc, index) => (
                    <div
                      key={arc.id}
                      className="group relative rounded-3xl bg-slate-950/80 border border-white/10 hover:border-orange-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_30px_rgba(234,88,12,0.25)]"
                    >
                      <div className="space-y-4">
                        <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-black/60 border border-white/5 flex items-center justify-center">
                          <img
                            src={arc.image}
                            alt={arc.title}
                            className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = './images/naruto/leaf-village.png';
                            }}
                          />
                          <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/80 border border-orange-500/40 text-[9px] font-mono text-orange-400 uppercase font-black">
                            ARC #{index + 1} • {arc.eraLabel}
                          </div>
                          <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-orange-600/90 text-white text-[9px] font-mono font-bold">
                            {arc.episodes}
                          </div>
                        </div>

                        <div>
                          <div className="text-[11px] font-mono text-orange-400 font-bold">
                            {arc.japaneseTitle}
                          </div>
                          <h3 className="font-cinzel text-xl font-bold text-white mt-0.5">
                            {arc.title}
                          </h3>
                          <div className="text-xs text-amber-300/90 font-sans italic mt-1">
                            "{arc.subtitle}"
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                          {arc.synopsis}
                        </p>

                        <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 space-y-1">
                          <div className="text-[9px] font-mono text-orange-400 uppercase font-bold flex items-center gap-1">
                            <Swords className="w-3 h-3" /> KEY CLASH:
                          </div>
                          <div className="text-xs text-slate-200 font-medium line-clamp-1">
                            {arc.keyClash}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-white/10">
                        <button
                          onClick={() => openArcTheater(arc)}
                          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-mono font-bold tracking-wider uppercase transition cursor-pointer shadow-lg"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>ENTER BATTLE THEATER (20 SCENES)</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 2: TEAM 7 & SHINOBI LEGENDS */}
            {currentView === 'shinobi' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Swords className="w-3.5 h-3.5 text-orange-400" />
                    <span>HEROES & SHADOWS OF THE SHINOBI WORLD</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Team 7 & Shinobi Legends
                  </h2>
                  <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                    The immortal ninja whose bonds, sacrifices, and will reshaped the five nations. Click on Clan & Mentors Tree to reveal their ancestral roots, mentors, and achievements.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {SHINOBI_LEGENDS.map((char) => (
                    <div
                      key={char.id}
                      className="group relative rounded-3xl bg-slate-950/80 border border-white/10 hover:border-orange-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_35px_rgba(234,88,12,0.25)]"
                    >
                      <div className="space-y-4">
                        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-black/60 border border-white/5 flex items-center justify-center">
                          <img
                            src={char.image}
                            alt={char.name}
                            className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = './images/naruto/naruto-sage.png';
                            }}
                          />
                          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 border border-orange-500/40 text-[10px] font-mono text-orange-400 uppercase font-black">
                            {char.ninjaRank}
                          </div>
                        </div>

                        <div>
                          <div className="text-xs font-mono text-orange-400 font-bold">
                            {char.japaneseName} • {char.village}
                          </div>
                          <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                            {char.name}
                          </h3>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {char.description}
                        </p>

                        <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                          <div className="text-[10px] font-mono text-amber-400 uppercase font-bold flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3" /> NATURE TYPES:
                          </div>
                          <div className="text-xs text-slate-200">{char.natureTypes.join(', ')}</div>
                        </div>

                        <div className="space-y-1">
                          <div className="text-[10px] font-mono text-orange-400 uppercase font-bold">
                            SIGNATURE TECHNIQUES:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {char.signatureJutsu.map((j, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded-md bg-orange-950/60 border border-orange-500/30 text-[10px] font-mono text-orange-200"
                              >
                                {j}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-5 mt-4 border-t border-white/10">
                        <button
                          onClick={() => {
                            universeAudio.playChakraBurst();
                            setSelectedShinobi(char);
                            setShowFamilyModal(true);
                          }}
                          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-orange-600/20 hover:bg-orange-600 text-orange-300 hover:text-white border border-orange-500/30 text-xs font-mono font-bold tracking-wider uppercase transition cursor-pointer shadow-lg"
                        >
                          <Users className="w-3.5 h-3.5" />
                          <span>CLAN & MENTORS TREE ({char.familyTree.length} RECORDS)</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 3: GREAT CLANS OF THE SHINOBI WORLD */}
            {currentView === 'clans' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Shield className="w-3.5 h-3.5 text-orange-400" />
                    <span>BLOODLINES & SECRET ARTS</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    The Great Shinobi Clans
                  </h2>
                  <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                    The bloodlines that founded civilizations, awakened supreme Dojutsu, and harbored forbidden Kekkei Genkai across generations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {GREAT_CLANS.map((clan) => (
                    <div
                      key={clan.id}
                      className="group relative rounded-3xl bg-slate-950/80 border border-white/10 hover:border-orange-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_30px_rgba(234,88,12,0.2)]"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full bg-orange-950/80 border border-orange-500/30 text-xs font-mono font-bold text-orange-400 uppercase">
                            {clan.symbol}
                          </span>
                          <span className="text-xs font-mono text-slate-400">{clan.village}</span>
                        </div>

                        <div>
                          <div className="text-xs font-mono text-orange-400 font-bold">
                            {clan.japaneseName}
                          </div>
                          <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                            {clan.name}
                          </h3>
                        </div>

                        <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                          <div className="text-[10px] font-mono text-amber-400 uppercase font-bold flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> KEKKEI GENKAI / SECRET ART:
                          </div>
                          <div className="text-xs text-slate-200 font-semibold">
                            {clan.kekkeiGenkaiOrSecret}
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {clan.historyAndLegacy}
                        </p>

                        <div className="space-y-1.5">
                          <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                            NOTABLE FIGURES:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {clan.notableMembers.map((m, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-[10px] font-mono text-slate-200"
                              >
                                {m}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <div className="text-[10px] font-mono text-orange-400 uppercase font-bold">
                            SIGNATURE TECHNIQUES:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {clan.signatureTechniques.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded bg-orange-950/40 border border-orange-500/20 text-[10px] font-mono text-orange-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 4: HOKAGE MONUMENT */}
            {currentView === 'hokage' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Users className="w-3.5 h-3.5 text-orange-400" />
                    <span>STONE FACES CARVED IN THE MOUNTAIN</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    The Seven Hokage Monument
                  </h2>
                  <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                    The supreme leaders of the Hidden Leaf Village who governed with the Will of Fire and protected the village through all wars.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {HOKAGE_MONUMENT.map((kage) => (
                    <div
                      key={kage.order}
                      className="group relative rounded-3xl bg-slate-950/80 border border-white/10 hover:border-orange-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_30px_rgba(234,88,12,0.2)]"
                    >
                      <div className="space-y-4">
                        <div className="w-full flex items-center justify-between text-xs font-mono text-orange-400 font-bold">
                          <span>{kage.order}</span>
                          <span className="text-amber-400">{kage.title}</span>
                        </div>

                        <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-black/60 border border-white/5 flex items-center justify-center">
                          <img
                            src={kage.image}
                            alt={kage.name}
                            className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = './images/naruto/leaf-village.png';
                            }}
                          />
                        </div>

                        <h3 className="font-cinzel text-2xl font-bold text-white">
                          {kage.name}
                        </h3>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {kage.description}
                        </p>

                        <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                          <div className="text-[10px] font-mono text-orange-400 uppercase font-bold flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> SIGNATURE TECHNIQUE:
                          </div>
                          <div className="text-xs text-amber-200 font-semibold">
                            {kage.signatureTechnique}
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-orange-950/30 border border-orange-500/20 space-y-1">
                          <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                            REIGN FEAT:
                          </div>
                          <div className="text-xs text-slate-300">
                            {kage.reignFeat}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 5: AKATSUKI & KARA BINGO BOOK */}
            {currentView === 'akatsuki' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Shield className="w-3.5 h-3.5 text-red-400" />
                    <span>HIGH-PRIORITY S-RANK ROGUES & CELESTIAL THREATS</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Akatsuki & Kara Bingo Book
                  </h2>
                  <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                    The most wanted rogue shinobi and extraterrestrial cyborgs across the five great nations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {AKATSUKI_MEMBERS.map((rogue) => (
                    <div
                      key={rogue.id}
                      className="group relative rounded-3xl bg-slate-950/80 border border-white/10 hover:border-red-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="px-2.5 py-1 rounded bg-red-950 border border-red-500/30 text-red-400 font-bold">
                            RING: {rogue.ring} ({rogue.finger})
                          </span>
                          <span className="px-2 py-0.5 rounded bg-black/80 text-amber-400 font-black">
                            {rogue.bingoThreatClass}
                          </span>
                        </div>

                        <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-black/60 border border-white/5 flex items-center justify-center">
                          <img
                            src={rogue.image}
                            alt={rogue.name}
                            className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = './images/naruto/pain.png';
                            }}
                          />
                        </div>

                        <div>
                          <div className="text-[11px] font-mono text-red-400 font-bold">
                            PARTNER: {rogue.partner}
                          </div>
                          <h3 className="font-cinzel text-2xl font-bold text-white mt-0.5">
                            {rogue.name}
                          </h3>
                        </div>

                        <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                          <div className="text-[10px] font-mono text-amber-400 uppercase font-bold">
                            BINGO BOUNTY:
                          </div>
                          <div className="text-sm font-mono font-black text-amber-300">
                            {rogue.bounty}
                          </div>
                        </div>

                        <blockquote className="p-3 rounded-xl bg-red-950/20 border-l-2 border-red-500 text-xs italic text-red-200">
                          "{rogue.philosophy}"
                        </blockquote>

                        <div className="space-y-1">
                          <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                            SIGNATURE JUTSU:
                          </div>
                          <div className="text-xs text-slate-200 font-medium">
                            {rogue.signatureJutsu}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 6: JUTSU & DOJUTSU COMPENDIUM */}
            {currentView === 'jutsu' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Zap className="w-3.5 h-3.5 text-orange-400" />
                    <span>NINJUTSU, GENJUTSU, DOJUTSU & SENJUTSU</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Jutsu & Dojutsu Vault
                  </h2>
                  <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                    The supreme ocular powers, shape transformations, and forbidden arts that shattered the battlefield.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {JUTSU_DOJUTSU.map((jutsu) => (
                    <div
                      key={jutsu.id}
                      className="group relative rounded-3xl bg-slate-950/80 border border-white/10 hover:border-orange-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_30px_rgba(234,88,12,0.2)]"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="px-2.5 py-1 rounded bg-orange-950/80 border border-orange-500/30 text-orange-400 font-bold uppercase">
                            {jutsu.category}
                          </span>
                          <span className="px-2.5 py-1 rounded bg-black/80 border border-white/10 text-amber-400 font-black">
                            {jutsu.rank}
                          </span>
                        </div>

                        <div>
                          <div className="text-xs font-mono text-orange-400 font-bold">
                            {jutsu.japaneseName}
                          </div>
                          <h3 className="font-cinzel text-xl font-bold text-white mt-1">
                            {jutsu.name}
                          </h3>
                        </div>

                        <div className="text-xs font-mono text-amber-300 font-semibold">
                          PRIMARY USER: {jutsu.user}
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {jutsu.description}
                        </p>

                        <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                          <div className="text-[10px] font-mono text-orange-400 uppercase font-bold">
                            TACTICAL EFFECT:
                          </div>
                          <div className="text-xs text-slate-200">
                            {jutsu.effect}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 7: SEVEN SWORDS & WEAPONS */}
            {currentView === 'blades' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Swords className="w-3.5 h-3.5 text-orange-400" />
                    <span>LEGENDARY ARTIFACTS OF THE MIST & LEAF</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Shinobi Blades & Weapons
                  </h2>
                  <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                    The Seven Swords of the Mist, legendary artifacts, spacetime anchors, and divine spirit relics.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SHINOBI_WEAPONS.map((w) => (
                    <div
                      key={w.id}
                      className="group relative rounded-3xl bg-slate-950/80 border border-white/10 hover:border-orange-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_30px_rgba(234,88,12,0.2)]"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="px-2.5 py-1 rounded bg-orange-950/80 border border-orange-500/30 text-orange-400 font-bold uppercase">
                            {w.classification}
                          </span>
                        </div>

                        <div>
                          <h3 className="font-cinzel text-xl font-bold text-white">
                            {w.name}
                          </h3>
                          <div className="text-xs font-mono text-amber-300 font-semibold mt-1">
                            WIELDER: {w.bearer}
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                          <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                            ORIGIN:
                          </div>
                          <div className="text-xs text-slate-300">{w.origin}</div>
                        </div>

                        <div className="p-3 rounded-xl bg-orange-950/20 border border-orange-500/20 space-y-1">
                          <div className="text-[10px] font-mono text-orange-400 uppercase font-bold">
                            SPECIAL TRAIT:
                          </div>
                          <div className="text-xs text-slate-200">{w.specialTrait}</div>
                        </div>

                        <div className="space-y-1">
                          <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                            CURRENT STATUS:
                          </div>
                          <div className="text-xs text-amber-400 font-mono">{w.currentStatus}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 8: POPULAR MOTIVATIONAL QUOTES */}
            {currentView === 'quotes' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Quote className="w-3.5 h-3.5 text-orange-400" />
                    <span>WORDS CARVED IN THE HEARTS OF SHINOBI</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Popular Quotations
                  </h2>
                  <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                    The profound philosophical declarations that guided generations through war, grief, and eternal brotherhood.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {NARUTO_QUOTES.map((q) => (
                    <div
                      key={q.id}
                      className="group relative rounded-3xl bg-slate-950/80 border border-white/10 hover:border-orange-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_30px_rgba(234,88,12,0.2)]"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="px-2.5 py-1 rounded bg-orange-950/80 border border-orange-500/30 text-orange-400 font-bold uppercase">
                            {q.tagline}
                          </span>
                          <button
                            onClick={() => handleCopyQuote(q.id, q.quote)}
                            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-orange-500/50 transition cursor-pointer"
                          >
                            {copiedQuoteId === q.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-[10px] text-emerald-400">COPIED</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span className="text-[10px]">COPY QUOTE</span>
                              </>
                            )}
                          </button>
                        </div>

                        <blockquote className="p-4 rounded-2xl bg-black/60 border-l-4 border-orange-500 text-amber-200 font-serif italic text-base leading-relaxed">
                          "{q.quote}"
                        </blockquote>

                        <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                          <div>
                            <div className="font-cinzel text-lg font-bold text-white">
                              {q.speaker}
                            </div>
                            <div className="text-xs font-mono text-orange-400">
                              {q.title}
                            </div>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-orange-950/20 border border-orange-500/20 text-xs text-slate-300">
                          <span className="font-mono text-orange-400 font-bold uppercase mr-1">
                            CONTEXT:
                          </span>
                          {q.context}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 9: THE WILL OF FIRE SACRED NINDO (OATH) */}
            {currentView === 'oath' && (
              <section className="space-y-10 animate-fadeIn max-w-4xl mx-auto">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Flame className="w-3.5 h-3.5 text-orange-400" />
                    <span>THE SACRED CREED OF KONOHAGAKURE</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    The Will of Fire Sacred Nindo
                  </h2>
                  <p className="text-sm text-slate-400">
                    The unbreakable vow whispered by Hashirama, Hiruzen, Minato, and Naruto.
                  </p>
                </div>

                <div className="relative rounded-3xl bg-slate-950/90 border-2 border-orange-500/40 p-8 sm:p-12 shadow-[0_0_60px_rgba(234,88,12,0.25)] text-center space-y-8 backdrop-blur-xl">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-orange-600 via-amber-500 to-red-600 p-1 shadow-[0_0_30px_rgba(234,88,12,0.5)]">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <Flame className="w-10 h-10 text-orange-400 animate-pulse" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono tracking-[0.3em] text-orange-400 uppercase font-black">
                      {NARUTO_OATH.japaneseTitle}
                    </h3>
                    <h1 className="font-cinzelDeco font-black text-2xl sm:text-4xl text-white tracking-widest mt-1">
                      {NARUTO_OATH.title}
                    </h1>
                  </div>

                  <div className="relative p-6 sm:p-8 rounded-2xl bg-black/60 border border-orange-500/30 text-slate-200 font-serif italic text-base sm:text-lg leading-relaxed whitespace-pre-line shadow-inner">
                    {NARUTO_OATH.verse}
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="font-cinzel font-black text-xl text-amber-400 tracking-wider">
                      {NARUTO_OATH.creed}
                    </div>
                    <div className="font-mono text-xs text-orange-400">
                      {NARUTO_OATH.masterMessage}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      universeAudio.playChakraBurst();
                      universeAudio.playFireBurst();
                    }}
                    className="py-3 px-8 rounded-full bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 text-white font-cinzel font-bold text-xs uppercase tracking-widest shadow-xl transition-all hover:scale-105 cursor-pointer inline-flex items-center gap-2"
                  >
                    <Flame className="w-4 h-4 text-yellow-300" />
                    <span>REIGNITE THE WILL OF FIRE 🔥</span>
                  </button>
                </div>
              </section>
            )}
          </main>

          {/* CLAN & MENTORS TREE MODAL */}
          {showFamilyModal && selectedShinobi && (
            <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
              <div className="relative w-full max-w-4xl rounded-3xl bg-slate-950 border-2 border-orange-500/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(234,88,12,0.3)] my-8">
                <button
                  onClick={() => setShowFamilyModal(false)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-orange-500/50 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-mono text-orange-400 font-bold uppercase tracking-widest">
                      ANCESTRAL LINEAGE & MENTORSHIP TREE
                    </div>
                    <h2 className="font-cinzel text-3xl font-black text-white mt-1">
                      {selectedShinobi.name}’s Bonds of Destiny
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      {selectedShinobi.clan} • {selectedShinobi.village}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2">
                    {selectedShinobi.familyTree.map((member, i) => (
                      <div
                        key={i}
                        className="rounded-2xl bg-black/70 border border-white/10 p-5 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded bg-orange-950/80 border border-orange-500/30 text-[10px] font-mono font-bold text-orange-400 uppercase">
                            {member.relation}
                          </span>
                          <span className="text-[10px] font-mono text-amber-400">
                            {member.epithet}
                          </span>
                        </div>

                        <h4 className="font-cinzel text-lg font-bold text-white">
                          {member.name}
                        </h4>

                        <div className="space-y-1">
                          <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                            ACHIEVEMENTS:
                          </div>
                          <div className="text-xs text-slate-300">
                            {member.achievements}
                          </div>
                        </div>

                        <blockquote className="p-2.5 rounded-xl bg-orange-950/20 border-l-2 border-orange-500 text-xs italic text-amber-200">
                          "{member.bestShotQuote}"
                        </blockquote>

                        <div className="space-y-1">
                          <div className="text-[10px] font-mono text-orange-400 uppercase font-bold">
                            ICONIC SCENE:
                          </div>
                          <div className="text-xs text-slate-300">
                            {member.bestShotScene}
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                            LEGACY PASSED DOWN:
                          </div>
                          <div className="text-xs text-amber-300 font-semibold">
                            {member.legacy}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 20-SCENE BATTLE THEATER MODAL */}
          {selectedArc && (
            <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
              <div className="relative w-full max-w-5xl rounded-3xl bg-slate-950 border-2 border-orange-500/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(234,88,12,0.3)] my-8">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-[10px] font-mono text-orange-400 uppercase font-bold tracking-widest">
                      {selectedArc.eraLabel} • {selectedArc.episodes}
                    </span>
                    <h2 className="font-cinzel text-2xl sm:text-3xl font-black text-white">
                      {selectedArc.title} Theater
                    </h2>
                    <div className="text-xs font-sans italic text-amber-300">
                      "{selectedArc.subtitle}"
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedArc(null)}
                    className="p-2 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-orange-500/50 transition cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Theater Controls */}
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span className="text-slate-400">
                    SCENE <span className="text-orange-400 font-bold">{currentSceneIndex + 1}</span> OF{' '}
                    <span className="text-white font-bold">{selectedArc.storyPlotScenes.length}</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        universeAudio.playClick(600, 0.05);
                        setCurrentSceneIndex((prev) =>
                          prev === 0 ? selectedArc.storyPlotScenes.length - 1 : prev - 1
                        );
                      }}
                      className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-orange-500 transition cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        universeAudio.playClick(600, 0.05);
                        setCurrentSceneIndex((prev) =>
                          prev === selectedArc.storyPlotScenes.length - 1 ? 0 : prev + 1
                        );
                      }}
                      className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-orange-500 transition cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Current Active Scene Card */}
                {selectedArc.storyPlotScenes[currentSceneIndex] && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 rounded-2xl bg-black/80 border border-orange-500/30">
                    <div className="lg:col-span-5 flex flex-col items-center">
                      <div className="relative w-full h-56 rounded-xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center">
                        <img
                          src={selectedArc.storyPlotScenes[currentSceneIndex].imageUrl}
                          alt={selectedArc.storyPlotScenes[currentSceneIndex].title}
                          className="w-full h-full object-cover filter contrast-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = './images/naruto/leaf-village.png';
                          }}
                        />
                        <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-orange-600 text-white text-[9px] font-mono font-bold">
                          {selectedArc.storyPlotScenes[currentSceneIndex].badge}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4 text-left">
                      <div>
                        <div className="text-[10px] font-mono text-orange-400 font-bold uppercase tracking-widest">
                          TAGLINE: {selectedArc.storyPlotScenes[currentSceneIndex].tagline}
                        </div>
                        <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
                          {selectedArc.storyPlotScenes[currentSceneIndex].title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {selectedArc.storyPlotScenes[currentSceneIndex].storySummary}
                      </p>

                      {selectedArc.storyPlotScenes[currentSceneIndex].keyDialogue && (
                        <blockquote className="p-3 rounded-xl bg-orange-950/20 border-l-4 border-orange-500 text-amber-200 font-serif italic text-xs leading-relaxed">
                          {selectedArc.storyPlotScenes[currentSceneIndex].keyDialogue}
                          <div className="text-[10px] font-mono text-orange-400 mt-1 not-italic">
                            — {selectedArc.storyPlotScenes[currentSceneIndex].speaker}
                          </div>
                        </blockquote>
                      )}

                      <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                        <div className="text-[10px] font-mono text-amber-400 uppercase font-bold flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> MOTIVATIONAL LESSON:
                        </div>
                        <div className="text-xs text-slate-200">
                          {selectedArc.storyPlotScenes[currentSceneIndex].motivationLine}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Scene Carousel Selector */}
                <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2">
                  {selectedArc.storyPlotScenes.map((scene, idx) => (
                    <button
                      key={scene.id}
                      onClick={() => {
                        universeAudio.playClick(650, 0.04);
                        setCurrentSceneIndex(idx);
                      }}
                      className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition cursor-pointer ${
                        currentSceneIndex === idx
                          ? 'bg-orange-600 text-white shadow-lg'
                          : 'bg-black/60 text-slate-400 hover:text-white border border-white/10'
                      }`}
                    >
                      SCENE {scene.sceneNumber}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Back to Top Floating Button */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-orange-600 hover:bg-orange-500 text-white shadow-xl shadow-orange-600/40 transition hover:scale-110 cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
};
