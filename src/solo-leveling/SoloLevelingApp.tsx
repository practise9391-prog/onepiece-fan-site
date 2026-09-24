import React, { useState } from 'react';
import {
  TOP_HUNTERS,
  SHADOW_ARMY,
  SOLO_LEVELING_ARCS,
  SYSTEM_SKILLS,
  MONARCHS_LORE,
  SOLO_LEVELING_QUOTES,
  MONARCH_WEAPONS,
  SOLO_LEVELING_OATH,
  HunterDossier,
  SoloLevelingArc
} from './data/soloLevelingData';
import { universeAudio } from '../anime-universe/audio/universeAudio';
import { SoloLevelingIntro } from './components/intro/SoloLevelingIntro';
import { SoloLevelingTransition } from './components/intro/SoloLevelingTransition';
import { JinwooHero } from './components/hero/JinwooHero';
import {
  Zap,
  Shield,
  Swords,
  Sparkles,
  ChevronRight,
  X,
  User,
  Award,
  Activity,
  Skull,
  Scroll,
  Quote,
  RotateCcw,
  Volume2,
  VolumeX,
  ArrowUp,
  Users,
  Copy,
  Check
} from 'lucide-react';

export type SoloLevelingView = 'home' | 'gates' | 'shadows' | 'hunters' | 'skills' | 'monarchs' | 'weapons' | 'quotes' | 'oath';

export const SoloLevelingApp: React.FC = () => {
  const [stage, setStage] = useState<'intro' | 'transition' | 'main'>('intro');
  const [currentView, setCurrentView] = useState<SoloLevelingView>('home');
  const [selectedHunter, setSelectedHunter] = useState<HunterDossier | null>(null);
  const [showFamilyModal, setShowFamilyModal] = useState<boolean>(false);
  const [selectedArc, setSelectedArc] = useState<SoloLevelingArc | null>(null);
  const [copiedQuoteId, setCopiedQuoteId] = useState<string | null>(null);
  const [isAudioMuted, setIsAudioMuted] = useState(universeAudio.getIsMuted());

  const handleNavigate = (view: string) => {
    universeAudio.playClick(520, 0.08);
    setCurrentView(view as SoloLevelingView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSound = () => {
    const unmuted = universeAudio.toggleMute();
    setIsAudioMuted(!unmuted);
    if (unmuted) universeAudio.playClick(600, 0.08);
  };

  const handleCopyQuote = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    universeAudio.playClick(720, 0.05);
    setCopiedQuoteId(id);
    setTimeout(() => setCopiedQuoteId(null), 2500);
  };

  const scrollToTop = () => {
    universeAudio.playClick(600, 0.08);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#05060d] text-slate-100 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      {/* STAGE 1: CARTENON TEMPLE REAWAKENING */}
      {stage === 'intro' && (
        <SoloLevelingIntro
          onComplete={() => setStage('transition')}
          onSkipToMain={() => setStage('main')}
        />
      )}

      {/* STAGE 2: SYSTEM LEVEL UP & SHADOW MONARCH DAWN */}
      {stage === 'transition' && (
        <SoloLevelingTransition onComplete={() => setStage('main')} />
      )}

      {/* STAGE 3: MAIN SYSTEM SANCTUARY */}
      {stage === 'main' && (
        <>
          {/* Top System Header (HUD Style Matching One Piece) */}
          <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-xl border-b border-blue-500/25 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-0.5 shadow-lg shadow-blue-500/30">
                <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-400 animate-pulse" />
                </div>
              </div>
              <div>
                <h1 className="font-cinzelDeco font-black text-base sm:text-lg text-white tracking-widest leading-none">
                  SOLO LEVELING
                </h1>
                <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.25em] text-blue-400 uppercase">
                  SHADOW MONARCH SYSTEM • 나 혼자만 레벨업
                </span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex flex-wrap items-center gap-1 bg-slate-950/80 p-1.5 rounded-full border border-white/10 text-xs font-mono font-bold">
              {[
                { id: 'home', label: 'HOME' },
                { id: 'gates', label: 'STORY SAGAS & GATES' },
                { id: 'shadows', label: 'SHADOW ARMY' },
                { id: 'hunters', label: 'TOP HUNTERS' },
                { id: 'skills', label: 'SYSTEM SKILLS' },
                { id: 'monarchs', label: 'THE MONARCHS' },
                { id: 'weapons', label: 'WEAPONS' },
                { id: 'quotes', label: 'QUOTES' },
                { id: 'oath', label: 'SACRED DECREE' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleNavigate(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full transition cursor-pointer ${
                    currentView === tab.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40 font-black'
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
                className="p-2 rounded-full bg-slate-900 border border-blue-500/30 text-blue-300 hover:text-white hover:border-blue-400 transition cursor-pointer"
                title={isAudioMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setStage('intro')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-blue-500/30 text-blue-300 hover:text-white hover:border-blue-400 text-xs font-mono font-bold transition cursor-pointer"
                title="Replay System Intro"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">REPLAY INTRO</span>
              </button>
            </div>
          </header>

          {/* MAIN CONTENT AREA */}
          <main className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-8 w-full space-y-16">
            {/* VIEW 0: HOME — JINWOO HERO (Matching One Piece Gear 5 Hero) */}
            {currentView === 'home' && (
              <JinwooHero onNavigate={handleNavigate} />
            )}

            {/* VIEW 1: STORY SAGAS & GATES */}
            {currentView === 'gates' && (
              <section className="space-y-12 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Scroll className="w-3.5 h-3.5 text-blue-400" />
                    <span>ALL SEASONS & DUNGEON GATES IN ORDER • 20 SCENES EACH</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Chronicles of the Shadow Monarch
                  </h2>
                  <p className="text-sm text-slate-400 max-w-3xl mx-auto">
                    From the double dungeon massacre through the Job Change Quest, Red Gate, and Jeju Island raid to the final war against Destruction Monarch Antares.
                  </p>
                </div>

                {[
                  {
                    seasonTitle: 'Season 1: The Foundations (Awakening & The Igris Duel)',
                    arcs: SOLO_LEVELING_ARCS.slice(0, 3),
                    badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-950/60'
                  },
                  {
                    seasonTitle: 'Season 2: Arise from the Shadow (Red Gate & Jeju Island Ant Raid)',
                    arcs: SOLO_LEVELING_ARCS.slice(3, 6),
                    badgeColor: 'border-indigo-500/40 text-indigo-400 bg-indigo-950/60'
                  },
                  {
                    seasonTitle: 'Season 3: The Monarchs & Cosmic War (Final Battle & Epilogue)',
                    arcs: SOLO_LEVELING_ARCS.slice(6, 9),
                    badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-950/60'
                  }
                ].map((group, gIdx) => (
                  <div key={gIdx} className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase border ${group.badgeColor}`}>
                        {group.seasonTitle}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {group.arcs.map((arc) => (
                        <div
                          key={arc.id}
                          onClick={() => {
                            universeAudio.playSystemChime();
                            setSelectedArc(arc);
                          }}
                          className="group relative rounded-3xl bg-slate-950/80 border border-white/10 hover:border-blue-500/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] cursor-pointer"
                        >
                          <div className="space-y-4">
                            <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-black/60 border border-white/5 flex items-center justify-center">
                              <img
                                src={arc.image}
                                alt={arc.title}
                                className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = './images/solo-leveling/statue-god.png';
                                }}
                              />
                              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 border border-blue-500/40 text-[10px] font-mono text-blue-400 font-bold">
                                {arc.chapters}
                              </div>
                            </div>

                            <div>
                              <div className="text-xs font-mono text-blue-400 font-bold">
                                {arc.koreanTitle} • {arc.subtitle}
                              </div>
                              <h3 className="font-cinzel text-xl font-bold text-white mt-1">
                                {arc.title}
                              </h3>
                            </div>

                            <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                              {arc.synopsis}
                            </p>

                            <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 text-xs text-slate-300">
                              <strong className="text-blue-400">Key Clash:</strong> {arc.keyClash}
                            </div>
                          </div>

                          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-blue-400 font-bold">
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

            {/* VIEW 2: SHADOW ARMY (HOW JIN-WOO EXTRACTED THEM) */}
            {currentView === 'shadows' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Skull className="w-3.5 h-3.5 text-indigo-400" />
                    <span>THE MILLION-STRONG HOST OF THE MONARCH</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Shadow Army Extraction Dossiers
                  </h2>
                  <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                    Every commander of the Shadow Army fought to the death before being reborn through Jin-Woo’s divine command: "ARISE".
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {SHADOW_ARMY.map((shadow) => (
                    <div
                      key={shadow.id}
                      className="p-6 rounded-3xl bg-slate-950/80 border border-indigo-500/30 space-y-4 shadow-xl hover:border-indigo-500/60 transition"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="w-24 h-28 rounded-2xl overflow-hidden bg-black shrink-0 border border-indigo-500/40">
                          <img
                            src={shadow.image}
                            alt={shadow.name}
                            className="w-full h-full object-contain filter contrast-110"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = './images/solo-leveling/igris.png';
                            }}
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-mono font-black uppercase">
                            {shadow.grade}
                          </span>
                          <h3 className="font-cinzel text-2xl font-black text-white">
                            {shadow.name}
                          </h3>
                          <div className="text-xs font-mono text-blue-400">
                            <strong>Origin:</strong> {shadow.origin}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-slate-300">
                        <div className="p-3 rounded-xl bg-black/60 border-l-2 border-indigo-400">
                          <strong className="text-indigo-300">How He Got Them:</strong> {shadow.howObtained}
                        </div>
                        <div>
                          <strong className="text-blue-400">Special Ability:</strong> {shadow.ability}
                        </div>
                        <p className="text-slate-400 italic">"{shadow.quote}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 3: TOP HUNTERS (NATIONAL LEVEL & S-RANK) */}
            {currentView === 'hunters' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Users className="w-3.5 h-3.5 text-blue-400" />
                    <span>HUMANITY’S APEX GUARDIANS</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    National Level & S-Rank Hunters
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {TOP_HUNTERS.map((char) => (
                    <div
                      key={char.id}
                      className="group relative rounded-3xl bg-slate-950/80 border border-white/10 hover:border-blue-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_35px_rgba(59,130,246,0.3)]"
                    >
                      <div className="space-y-4">
                        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-black/60 border border-white/5 flex items-center justify-center">
                          <img
                            src={char.image}
                            alt={char.name}
                            className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = './images/solo-leveling/jinwoo.png';
                            }}
                          />
                          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 border border-blue-500/40 text-[10px] font-mono text-blue-400 uppercase font-black">
                            {char.rank}
                          </div>
                        </div>

                        <div>
                          <div className="text-xs font-mono text-blue-400 font-bold">
                            {char.koreanName} • {char.guild}
                          </div>
                          <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                            {char.name}
                          </h3>
                        </div>

                        <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                          {char.description}
                        </p>

                        <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                          <div className="text-[10px] font-mono text-indigo-400 uppercase font-bold flex items-center gap-1.5">
                            <Zap className="w-3 h-3" /> SIGNATURE ABILITY:
                          </div>
                          <div className="text-xs text-slate-200">{char.signatureAbility}</div>
                        </div>
                      </div>

                      <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between gap-3">
                        <button
                          onClick={() => {
                            universeAudio.playSystemChime();
                            setSelectedHunter(char);
                            setShowFamilyModal(true);
                          }}
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-mono font-bold tracking-wider uppercase transition cursor-pointer shadow-lg"
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

            {/* VIEW 4: SYSTEM SKILLS ENCYCLOPEDIA */}
            {currentView === 'skills' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Zap className="w-3.5 h-3.5 text-blue-400" />
                    <span>ARCHITECT & MONARCH SYSTEM CAPABILITIES</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    System Skills Encyclopedia
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {SYSTEM_SKILLS.map((skill) => (
                    <div
                      key={skill.id}
                      className="p-6 rounded-3xl bg-slate-950/80 border border-blue-500/30 space-y-4 shadow-xl"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="px-2.5 py-0.5 rounded bg-blue-600/20 text-blue-300 text-[10px] font-mono font-bold uppercase">
                          {skill.type}
                        </span>
                        <span className="text-xs font-mono text-emerald-400 font-bold">
                          {skill.manaCost}
                        </span>
                      </div>

                      <h3 className="font-cinzel text-2xl font-bold text-white">
                        {skill.name}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {skill.description}
                      </p>

                      <div className="p-3 rounded-xl bg-black/60 border-l-2 border-blue-400 text-xs text-blue-200">
                        <strong>Combat Effect:</strong> {skill.effect}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 5: THE MONARCHS */}
            {currentView === 'monarchs' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Skull className="w-3.5 h-3.5 text-purple-400" />
                    <span>THE PRIMORDIAL SOVEREIGNS OF CALAMITY</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    The Nine Monarchs & The Rulers
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {MONARCHS_LORE.map((m) => (
                    <div
                      key={m.id}
                      className="p-6 rounded-3xl bg-slate-950/80 border border-purple-500/30 space-y-4 shadow-xl"
                    >
                      <h3 className="font-cinzel text-2xl font-bold text-white">
                        {m.name}
                      </h3>
                      <div className="text-xs font-mono text-purple-400 font-bold">
                        {m.title}
                      </div>
                      <div className="text-xs text-slate-300">
                        <strong>Domain:</strong> {m.domain}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 6: WEAPONS ARSENAL */}
            {currentView === 'weapons' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Swords className="w-3.5 h-3.5 text-blue-400" />
                    <span>MYTHIC DAGGERS & DRAGON FANG BLADES</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Monarch Weapons Arsenal
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {MONARCH_WEAPONS.map((weapon) => (
                    <div
                      key={weapon.id}
                      className="p-6 rounded-3xl bg-slate-950/80 border border-blue-500/30 space-y-4 shadow-xl"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="w-16 h-16 rounded-2xl bg-black border border-blue-500/40 flex items-center justify-center shrink-0">
                          <Swords className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-xs font-mono text-blue-400 font-bold">
                            RANK: {weapon.rank}
                          </div>
                          <h3 className="font-cinzel text-xl font-bold text-white">
                            {weapon.name}
                          </h3>
                          <div className="text-xs font-mono text-emerald-400 font-bold">
                            {weapon.attackPower}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-slate-300">
                        <div>
                          <strong className="text-blue-400">Origin:</strong> {weapon.origin}
                        </div>
                        <div>
                          <strong className="text-indigo-400">Special Trait:</strong> {weapon.specialTrait}
                        </div>
                        <div className="p-2 rounded-xl bg-black/60 border border-white/10 text-slate-400">
                          <strong>Current Status:</strong> {weapon.currentStatus}
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
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Quote className="w-3.5 h-3.5 text-blue-400" />
                    <span>WORDS OF SOVEREIGNS AND TITANS</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Solo Leveling Quotes Sanctuary
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {SOLO_LEVELING_QUOTES.map((q) => (
                    <div
                      key={q.id}
                      className="p-6 rounded-3xl bg-slate-950/80 border border-blue-500/25 flex flex-col justify-between space-y-4 shadow-xl"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={q.image}
                            alt={q.speaker}
                            className="w-14 h-14 rounded-2xl object-contain bg-black border border-blue-500/40"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = './images/solo-leveling/jinwoo.png';
                            }}
                          />
                          <div>
                            <h4 className="font-cinzel text-lg font-bold text-white">{q.speaker}</h4>
                            <div className="text-xs font-mono text-blue-400">{q.title}</div>
                          </div>
                        </div>

                        <blockquote className="p-4 rounded-2xl bg-black/60 border-l-4 border-blue-500 text-blue-100 italic text-sm leading-relaxed">
                          "{q.quote}"
                        </blockquote>

                        <div className="text-xs text-slate-400">
                          <strong className="text-amber-400">Context:</strong> {q.context}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-blue-400 uppercase font-bold">
                          {q.tagline}
                        </span>
                        <button
                          onClick={() => handleCopyQuote(q.id, q.quote)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-blue-500/30 text-xs font-mono text-blue-300 hover:text-white hover:border-blue-400 transition cursor-pointer"
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

            {/* VIEW 8: SACRED DECREE */}
            {currentView === 'oath' && (
              <section className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn py-12">
                <div className="w-20 h-20 rounded-3xl bg-blue-600/20 border-2 border-blue-500/60 mx-auto flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                  <Zap className="w-10 h-10 text-blue-400 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-mono text-blue-400 font-bold tracking-widest uppercase">
                    {SOLO_LEVELING_OATH.koreanTitle}
                  </div>
                  <h2 className="font-cinzelDeco text-3xl sm:text-5xl font-black text-white tracking-wider">
                    {SOLO_LEVELING_OATH.title}
                  </h2>
                </div>

                <div className="p-8 sm:p-12 rounded-3xl bg-slate-950/90 border-2 border-blue-500/40 shadow-2xl space-y-6">
                  <p className="font-serif italic text-base sm:text-xl text-blue-100 leading-relaxed whitespace-pre-line">
                    "{SOLO_LEVELING_OATH.verse}"
                  </p>
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs font-mono text-indigo-400 font-bold tracking-widest">
                      {SOLO_LEVELING_OATH.creed}
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      {SOLO_LEVELING_OATH.masterMessage}
                    </div>
                  </div>
                </div>
              </section>
            )}
          </main>

          {/* FAMILY & MENTORS TREE MODAL */}
          {showFamilyModal && selectedHunter && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fadeIn">
              <div className="relative w-full max-w-4xl bg-slate-950 border-2 border-blue-500/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(59,130,246,0.3)] max-h-[90vh] overflow-y-auto">
                <div className="flex items-start justify-between pb-4 border-b border-blue-500/30">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-blue-400 tracking-widest uppercase mb-1">
                      <Scroll className="w-4 h-4 text-blue-400" />
                      <span>SACRED ANCESTRAL & MENTORSHIP LINEAGE</span>
                    </div>
                    <h3 className="font-cinzel text-2xl sm:text-4xl font-black text-white">
                      {selectedHunter.name}’s Legendary Family Tree
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowFamilyModal(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-blue-400 transition cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-6 space-y-6">
                  {selectedHunter.familyTree.map((member, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/20 hover:border-blue-400/60 transition-all flex flex-col md:flex-row gap-5 items-start"
                    >
                      <div className="w-28 h-36 rounded-xl overflow-hidden border border-blue-500/40 bg-black shrink-0 relative shadow-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-contain filter contrast-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = './images/solo-leveling/jinwoo.png';
                          }}
                        />
                        <div className="absolute bottom-1 inset-x-1 py-0.5 text-center bg-black/80 text-[8px] font-mono text-blue-300 font-bold uppercase rounded">
                          {member.relation}
                        </div>
                      </div>

                      <div className="flex-1 space-y-2 text-left">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <h4 className="font-cinzel text-xl font-bold text-white">
                              {member.name}
                            </h4>
                            <div className="text-xs font-mono text-blue-400 font-bold">
                              "{member.epithet}"
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-[10px] font-mono text-blue-300 uppercase font-black">
                            {member.relation}
                          </span>
                        </div>

                        <div className="text-xs text-slate-300 leading-relaxed">
                          <strong className="text-amber-400">Deeds & Achievements:</strong> {member.achievements}
                        </div>

                        <div className="p-3 rounded-xl bg-black/60 border-l-2 border-blue-400 text-xs italic text-blue-200">
                          <strong>Best Shot & Quote:</strong> "{member.bestShotQuote}"
                          <div className="mt-1 text-[11px] not-italic text-slate-400">
                            🎬 <em>{member.bestShotScene}</em>
                          </div>
                        </div>

                        <div className="text-xs text-slate-400">
                          <strong className="text-blue-400">Inherited Legacy:</strong> {member.legacy}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <button
                    onClick={() => setShowFamilyModal(false)}
                    className="px-8 py-2.5 rounded-full bg-blue-600 text-white font-cinzel font-bold text-xs uppercase tracking-wider hover:bg-blue-500 transition cursor-pointer"
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
              <div className="relative w-full max-w-5xl bg-slate-950 border-2 border-blue-500/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(59,130,246,0.4)] max-h-[92vh] overflow-y-auto">
                <div className="flex items-start justify-between pb-4 border-b border-blue-500/30">
                  <div>
                    <div className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-1">
                      {selectedArc.season} • {selectedArc.chapters}
                    </div>
                    <h3 className="font-cinzel text-2xl sm:text-4xl font-black text-white">
                      {selectedArc.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedArc(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-blue-400 transition cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="my-6 p-4 rounded-2xl bg-black/60 border border-white/10 text-sm text-slate-300">
                  <strong className="text-blue-400">Synopsis:</strong> {selectedArc.synopsis}
                </div>

                <div className="space-y-4">
                  <h4 className="font-cinzel text-xl font-bold text-white flex items-center gap-2">
                    <Scroll className="w-5 h-5 text-blue-500" />
                    <span>20 Complete Story Plot Scenes & Motivational Lessons</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedArc.storyPlotScenes.map((scene) => (
                      <div
                        key={scene.id}
                        className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded bg-blue-600/30 text-blue-300 text-[10px] font-mono font-bold">
                            SCENE {scene.sceneNumber}
                          </span>
                          <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold">
                            {scene.tagline}
                          </span>
                        </div>

                        <h5 className="font-cinzel text-lg font-bold text-white">{scene.title}</h5>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {scene.storySummary}
                        </p>

                        <div className="p-3 rounded-xl bg-black/50 border-l-2 border-blue-400 text-xs italic text-blue-200">
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
                    className="px-8 py-2.5 rounded-full bg-blue-600 text-white font-cinzel font-bold text-xs uppercase tracking-wider hover:bg-blue-500 transition cursor-pointer"
                  >
                    CLOSE GATE THEATER
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* FOOTER */}
          <footer className="relative z-10 border-t border-white/10 bg-black/90 py-10 px-4 sm:px-8 mt-16 text-center space-y-6">
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="font-cinzelDeco text-lg font-bold tracking-widest text-white">
                  SOLO LEVELING • 나 혼자만 레벨업
                </span>
                <Skull className="w-5 h-5 text-indigo-400" />
              </div>
              <blockquote className="font-serif italic text-xs sm:text-sm text-blue-200/90 max-w-2xl mx-auto">
                "I will protect what is mine... Even if it means turning the entire world into my battlefield."
                <footer className="text-[10px] font-mono text-blue-400 mt-1 uppercase not-italic">
                  — Sung Jin-Woo
                </footer>
              </blockquote>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 border border-blue-500/30 hover:border-blue-400 text-blue-300 text-xs font-bold tracking-widest uppercase transition-all shadow-lg hover:scale-105 cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>RETURN TO CARTENON TEMPLE</span>
              </button>

              <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
                SOLO LEVELING © CHUGONG, DUBU (REDICE STUDIO) / D&C MEDIA, A-1 PICTURES • NON-PROFIT FAN TRIBUTE
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};
