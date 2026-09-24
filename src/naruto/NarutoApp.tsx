import React, { useState } from 'react';
import {
  SHINOBI_LEGENDS,
  HOKAGE_MONUMENT,
  AKATSUKI_MEMBERS,
  NARUTO_ARCS,
  JUTSU_DOJUTSU,
  NARUTO_QUOTES,
  SHINOBI_WEAPONS,
  NARUTO_OATH,
  ShinobiLegend,
  NarutoArc
} from './data/narutoData';
import { universeAudio } from '../anime-universe/audio/universeAudio';
import { NarutoIntro } from './components/intro/NarutoIntro';
import { NarutoTransition } from './components/intro/NarutoTransition';
import {
  Sparkles,
  Shield,
  Swords,
  Wind,
  Flame,
  Zap,
  ChevronRight,
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
  Check
} from 'lucide-react';

export type NarutoView = 'shinobi' | 'arcs' | 'hokage' | 'akatsuki' | 'jutsu' | 'quotes' | 'blades' | 'oath';

export const NarutoApp: React.FC = () => {
  const [stage, setStage] = useState<'intro' | 'transition' | 'main'>('intro');
  const [currentView, setCurrentView] = useState<NarutoView>('shinobi');
  const [selectedShinobi, setSelectedShinobi] = useState<ShinobiLegend | null>(null);
  const [showFamilyModal, setShowFamilyModal] = useState<boolean>(false);
  const [selectedArc, setSelectedArc] = useState<NarutoArc | null>(null);
  const [copiedQuoteId, setCopiedQuoteId] = useState<string | null>(null);
  const [isAudioMuted, setIsAudioMuted] = useState(universeAudio.getIsMuted());

  const handleNavigate = (view: NarutoView) => {
    universeAudio.playClick(540, 0.08);
    setCurrentView(view);
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

  return (
    <div className="relative min-h-screen bg-[#0a0604] text-slate-100 font-sans selection:bg-orange-600 selection:text-white flex flex-col justify-between">
      {/* STAGE 1: WILL OF FIRE & RASENGAN SWIRL INTRO */}
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
          <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-xl border-b border-orange-500/25 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-500 to-red-600 p-0.5 shadow-lg shadow-orange-500/30">
                <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-orange-400 animate-spin-slow" />
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
                { id: 'shinobi', label: 'SHINOBI LEGENDS' },
                { id: 'arcs', label: 'GREAT BATTLES (20 SCENES)' },
                { id: 'hokage', label: 'HOKAGE MONUMENT' },
                { id: 'akatsuki', label: 'AKATSUKI BOUNTIES' },
                { id: 'jutsu', label: 'JUTSU & DOJUTSU' },
                { id: 'quotes', label: 'QUOTES SANCTUARY' },
                { id: 'blades', label: 'SEVEN SWORDS' },
                { id: 'oath', label: 'SHINOBI NINDO' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleNavigate(tab.id as NarutoView)}
                  className={`px-3.5 py-1.5 rounded-full transition cursor-pointer ${
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
            {/* VIEW 1: SHINOBI LEGENDS (CHARACTER SANCTUARY) */}
            {currentView === 'shinobi' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Swords className="w-3.5 h-3.5 text-orange-400" />
                    <span>HEROES & SHADOWS OF THE FIVE NATIONS</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Shinobi Legends Archive
                  </h2>
                  <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                    The legendary ninjas whose blood, sacrifices, and ideals forged the modern shinobi world. Click on Family & Mentors to explore their ancestral roots.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {SHINOBI_LEGENDS.map((char) => (
                    <div
                      key={char.id}
                      className="group relative rounded-3xl bg-slate-950/80 border border-white/10 hover:border-orange-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_35px_rgba(249,115,22,0.3)]"
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

                        <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                          {char.description}
                        </p>

                        <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                          <div className="text-[10px] font-mono text-amber-400 uppercase font-bold flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3" /> NATURE TYPES:
                          </div>
                          <div className="text-xs text-slate-200">{char.natureTypes.join(', ')}</div>
                        </div>
                      </div>

                      <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between gap-3">
                        <button
                          onClick={() => {
                            universeAudio.playChakraBurst();
                            setSelectedShinobi(char);
                            setShowFamilyModal(true);
                          }}
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-orange-600/20 hover:bg-orange-600 text-orange-300 hover:text-white border border-orange-500/30 text-xs font-mono font-bold tracking-wider uppercase transition cursor-pointer shadow-lg"
                        >
                          <Users className="w-3.5 h-3.5" />
                          <span>CLAN & MENTORS TREE</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 2: GREAT BATTLES & ARCS (20 SCENES PER ARC) */}
            {currentView === 'arcs' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Scroll className="w-3.5 h-3.5 text-orange-400" />
                    <span>CHRONICLES OF DESTINY • 20 SCENES PER ARC</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Naruto Shippuden Sagas
                  </h2>
                  <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                    Click any arc to enter the theater and explore all 20 cinematic story plot scenes, taglines, concise plots, and motivational lessons.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {NARUTO_ARCS.map((arc) => (
                    <div
                      key={arc.id}
                      onClick={() => {
                        universeAudio.playChakraBurst();
                        setSelectedArc(arc);
                      }}
                      className="group relative rounded-3xl bg-slate-950/80 border border-white/10 hover:border-orange-500/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_35px_rgba(249,115,22,0.3)] cursor-pointer"
                    >
                      <div className="space-y-4">
                        <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-black/60 border border-white/5 flex items-center justify-center">
                          <img
                            src={arc.image}
                            alt={arc.title}
                            className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = './images/naruto/leaf-village.png';
                            }}
                          />
                          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 border border-orange-500/40 text-[10px] font-mono text-orange-400 font-bold">
                            {arc.episodes}
                          </div>
                        </div>

                        <div>
                          <div className="text-xs font-mono text-orange-400 font-bold">
                            {arc.japaneseTitle} • {arc.subtitle}
                          </div>
                          <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                            {arc.title}
                          </h3>
                        </div>

                        <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                          {arc.synopsis}
                        </p>

                        <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-xs text-slate-300">
                          <strong className="text-amber-400">Key Clash:</strong> {arc.keyClash}
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-orange-400 font-bold">
                        <span>EXPLORE 20 PLOT SCENES</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 3: HOKAGE MONUMENT */}
            {currentView === 'hokage' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Award className="w-3.5 h-3.5 text-orange-400" />
                    <span>THE SACRED STONE CARVINGS OF KONOHA</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    The Hokage Monument (火影)
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {HOKAGE_MONUMENT.map((hokage, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-3xl bg-slate-950/80 border border-orange-500/30 space-y-4 shadow-xl hover:border-orange-500/60 transition"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="px-2.5 py-0.5 rounded bg-orange-600/20 text-orange-300 text-[10px] font-mono font-bold uppercase">
                          {hokage.order}
                        </span>
                      </div>

                      <h3 className="font-cinzel text-2xl font-bold text-white">
                        {hokage.name}
                      </h3>
                      <div className="text-xs font-mono text-amber-400 font-bold">
                        "{hokage.title}"
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {hokage.description}
                      </p>

                      <div className="p-3 rounded-xl bg-black/60 border-l-2 border-orange-400 text-xs text-orange-200">
                        <strong>Signature Jutsu:</strong> {hokage.signatureTechnique}
                      </div>

                      <div className="text-xs text-slate-400">
                        <strong className="text-amber-400">Reign Feat:</strong> {hokage.reignFeat}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 4: AKATSUKI BOUNTIES & BINGO BOOK */}
            {currentView === 'akatsuki' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Flame className="w-3.5 h-3.5 text-red-400" />
                    <span>THE CRIMSON CLOUD ROGUE MERCENARIES</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Akatsuki Bingo Book (赤砂)
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {AKATSUKI_MEMBERS.map((akatsuki) => (
                    <div
                      key={akatsuki.id}
                      className="p-6 rounded-3xl bg-slate-950/80 border border-red-500/30 space-y-4 shadow-xl hover:border-red-500/60 transition"
                    >
                      <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-black/60 border border-white/5 flex items-center justify-center">
                        <img
                          src={akatsuki.image}
                          alt={akatsuki.name}
                          className="w-full h-full object-contain filter contrast-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = './images/naruto/pain.png';
                          }}
                        />
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 border border-red-500/40 text-[10px] font-mono text-red-400 font-bold">
                          {akatsuki.bingoThreatClass}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-mono text-red-400 font-bold">
                          RING: {akatsuki.ring} ({akatsuki.kanji}) • {akatsuki.finger}
                        </div>
                        <h3 className="font-cinzel text-2xl font-bold text-white">
                          {akatsuki.name}
                        </h3>
                        <div className="text-xs font-mono text-amber-400 font-bold">
                          BOUNTY: {akatsuki.bounty}
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-slate-300">
                        <div>
                          <strong className="text-red-400">Partner:</strong> {akatsuki.partner}
                        </div>
                        <div>
                          <strong className="text-orange-400">Signature Jutsu:</strong> {akatsuki.signatureJutsu}
                        </div>
                        <p className="text-slate-400 italic">"{akatsuki.philosophy}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 5: JUTSU & DOJUTSU ENCYCLOPEDIA */}
            {currentView === 'jutsu' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Eye className="w-3.5 h-3.5 text-orange-400" />
                    <span>THE THREE GREAT DOJUTSU & S-RANK NINJUTSU</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Jutsu & Dojutsu Encyclopedia
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {JUTSU_DOJUTSU.map((j) => (
                    <div
                      key={j.id}
                      className="p-6 rounded-3xl bg-slate-950/80 border border-orange-500/30 space-y-4 shadow-xl"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="px-2.5 py-0.5 rounded bg-orange-600/20 text-orange-300 text-[10px] font-mono font-bold uppercase">
                          {j.category}
                        </span>
                        <span className="text-xs font-mono text-amber-400 font-bold">
                          {j.rank}
                        </span>
                      </div>

                      <h3 className="font-cinzel text-2xl font-bold text-white">
                        {j.name}
                      </h3>
                      <div className="text-xs font-mono text-slate-400 font-bold">
                        User: {j.user}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {j.description}
                      </p>

                      <div className="p-3 rounded-xl bg-black/60 border-l-2 border-orange-400 text-xs text-orange-200">
                        <strong>Combat Effect:</strong> {j.effect}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 6: MOTIVATIONAL QUOTES SANCTUARY */}
            {currentView === 'quotes' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Quote className="w-3.5 h-3.5 text-orange-400" />
                    <span>WORDS ENGRAVED IN THE WILL OF FIRE</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Naruto Quotes Sanctuary
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {NARUTO_QUOTES.map((q) => (
                    <div
                      key={q.id}
                      className="p-6 rounded-3xl bg-slate-950/80 border border-orange-500/25 flex flex-col justify-between space-y-4 shadow-xl"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={q.image}
                            alt={q.speaker}
                            className="w-14 h-14 rounded-2xl object-contain bg-black border border-orange-500/40"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = './images/naruto/naruto-sage.png';
                            }}
                          />
                          <div>
                            <h4 className="font-cinzel text-lg font-bold text-white">{q.speaker}</h4>
                            <div className="text-xs font-mono text-orange-400">{q.title}</div>
                          </div>
                        </div>

                        <blockquote className="p-4 rounded-2xl bg-black/60 border-l-4 border-orange-500 text-orange-100 italic text-sm leading-relaxed">
                          "{q.quote}"
                        </blockquote>

                        <div className="text-xs text-slate-400">
                          <strong className="text-amber-400">Context:</strong> {q.context}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-orange-400 uppercase font-bold">
                          {q.tagline}
                        </span>
                        <button
                          onClick={() => handleCopyQuote(q.id, q.quote)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-orange-500/30 text-xs font-mono text-orange-300 hover:text-white hover:border-orange-400 transition cursor-pointer"
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

            {/* VIEW 7: SEVEN SWORDS & WEAPONS ARSENAL */}
            {currentView === 'blades' && (
              <section className="space-y-10 animate-fadeIn">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Swords className="w-3.5 h-3.5 text-orange-400" />
                    <span>LEGENDARY BLADES OF THE MIST & ARTIFACTS</span>
                  </div>
                  <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                    Legendary Shinobi Weapons
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {SHINOBI_WEAPONS.map((weapon) => (
                    <div
                      key={weapon.id}
                      className="p-6 rounded-3xl bg-slate-950/80 border border-orange-500/30 space-y-4 shadow-xl"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="w-20 h-20 rounded-2xl bg-black border border-orange-500/40 flex items-center justify-center shrink-0">
                          <Swords className="w-10 h-10 text-orange-400" />
                        </div>
                        <div>
                          <div className="text-xs font-mono text-orange-400 font-bold">
                            BEARER: {weapon.bearer}
                          </div>
                          <h3 className="font-cinzel text-2xl font-bold text-white">
                            {weapon.name}
                          </h3>
                          <div className="text-xs font-mono text-amber-400 font-bold">
                            Class: {weapon.classification}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-slate-300">
                        <div>
                          <strong className="text-orange-400">Origin:</strong> {weapon.origin}
                        </div>
                        <div>
                          <strong className="text-amber-400">Special Trait:</strong> {weapon.specialTrait}
                        </div>
                        <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-slate-400">
                          <strong>Current Status:</strong> {weapon.currentStatus}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIEW 8: SACRED NINDO (OATH) */}
            {currentView === 'oath' && (
              <section className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn py-12">
                <div className="w-20 h-20 rounded-3xl bg-orange-600/20 border-2 border-orange-500/60 mx-auto flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.5)]">
                  <Flame className="w-10 h-10 text-orange-400 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-mono text-orange-400 font-bold tracking-widest uppercase">
                    {NARUTO_OATH.japaneseTitle}
                  </div>
                  <h2 className="font-cinzelDeco text-3xl sm:text-5xl font-black text-white tracking-wider">
                    {NARUTO_OATH.title}
                  </h2>
                </div>

                <div className="p-8 sm:p-12 rounded-3xl bg-slate-950/90 border-2 border-orange-500/40 shadow-2xl space-y-6">
                  <p className="font-serif italic text-base sm:text-xl text-orange-100 leading-relaxed whitespace-pre-line">
                    "{NARUTO_OATH.verse}"
                  </p>
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs font-mono text-amber-400 font-bold tracking-widest">
                      {NARUTO_OATH.creed}
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      {NARUTO_OATH.masterMessage}
                    </div>
                  </div>
                </div>
              </section>
            )}
          </main>

          {/* FAMILY & CLAN / MENTORS TREE MODAL */}
          {showFamilyModal && selectedShinobi && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fadeIn">
              <div className="relative w-full max-w-4xl bg-slate-950 border-2 border-orange-500/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(249,115,22,0.3)] max-h-[90vh] overflow-y-auto">
                <div className="flex items-start justify-between pb-4 border-b border-orange-500/30">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-orange-400 tracking-widest uppercase mb-1">
                      <Scroll className="w-4 h-4 text-orange-400" />
                      <span>SACRED ANCESTRAL & MENTORSHIP LINEAGE</span>
                    </div>
                    <h3 className="font-cinzel text-2xl sm:text-4xl font-black text-white">
                      {selectedShinobi.name}’s Legendary Clan & Mentors Tree
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowFamilyModal(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-orange-400 transition cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-6 space-y-6">
                  {selectedShinobi.familyTree.map((member, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-900/90 border border-orange-500/20 hover:border-orange-400/60 transition-all flex flex-col md:flex-row gap-5 items-start"
                    >
                      <div className="w-28 h-36 rounded-xl overflow-hidden border border-orange-500/40 bg-black shrink-0 relative shadow-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-contain filter contrast-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = './images/naruto/naruto-sage.png';
                          }}
                        />
                        <div className="absolute bottom-1 inset-x-1 py-0.5 text-center bg-black/80 text-[8px] font-mono text-orange-300 font-bold uppercase rounded">
                          {member.relation}
                        </div>
                      </div>

                      <div className="flex-1 space-y-2 text-left">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <h4 className="font-cinzel text-xl font-bold text-white">
                              {member.name}
                            </h4>
                            <div className="text-xs font-mono text-orange-400 font-bold">
                              "{member.epithet}"
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded bg-orange-500/10 border border-orange-500/30 text-[10px] font-mono text-orange-300 uppercase font-black">
                            {member.relation}
                          </span>
                        </div>

                        <div className="text-xs text-slate-300 leading-relaxed">
                          <strong className="text-amber-400">Deeds & Achievements:</strong> {member.achievements}
                        </div>

                        <div className="p-3 rounded-xl bg-black/60 border-l-2 border-orange-400 text-xs italic text-orange-200">
                          <strong>Best Shot & Quote:</strong> "{member.bestShotQuote}"
                          <div className="mt-1 text-[11px] not-italic text-slate-400">
                            🎬 <em>{member.bestShotScene}</em>
                          </div>
                        </div>

                        <div className="text-xs text-slate-400">
                          <strong className="text-orange-400">Inherited Legacy:</strong> {member.legacy}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <button
                    onClick={() => setShowFamilyModal(false)}
                    className="px-8 py-2.5 rounded-full bg-orange-600 text-white font-cinzel font-bold text-xs uppercase tracking-wider hover:bg-orange-500 transition cursor-pointer"
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
              <div className="relative w-full max-w-5xl bg-slate-950 border-2 border-orange-500/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(249,115,22,0.4)] max-h-[92vh] overflow-y-auto">
                <div className="flex items-start justify-between pb-4 border-b border-orange-500/30">
                  <div>
                    <div className="text-xs font-mono text-orange-400 tracking-widest uppercase mb-1">
                      {selectedArc.japaneseTitle} • {selectedArc.episodes}
                    </div>
                    <h3 className="font-cinzel text-2xl sm:text-4xl font-black text-white">
                      {selectedArc.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedArc(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-orange-400 transition cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="my-6 p-4 rounded-2xl bg-black/60 border border-white/10 text-sm text-slate-300">
                  <strong className="text-orange-400">Synopsis:</strong> {selectedArc.synopsis}
                </div>

                <div className="space-y-4">
                  <h4 className="font-cinzel text-xl font-bold text-white flex items-center gap-2">
                    <Scroll className="w-5 h-5 text-orange-500" />
                    <span>20 Complete Story Plot Scenes & Motivational Lessons</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedArc.storyPlotScenes.map((scene) => (
                      <div
                        key={scene.id}
                        className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded bg-orange-600/30 text-orange-300 text-[10px] font-mono font-bold">
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

                        <div className="p-3 rounded-xl bg-black/50 border-l-2 border-orange-400 text-xs italic text-orange-200">
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
                    className="px-8 py-2.5 rounded-full bg-orange-600 text-white font-cinzel font-bold text-xs uppercase tracking-wider hover:bg-orange-500 transition cursor-pointer"
                  >
                    CLOSE BATTLE THEATER
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* FOOTER */}
          <footer className="relative z-10 border-t border-white/10 bg-black/90 py-10 px-4 sm:px-8 mt-16 text-center space-y-6">
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Sparkles className="w-5 h-5 text-orange-400 animate-spin-slow" />
                <span className="font-cinzelDeco text-lg font-bold tracking-widest text-white">
                  NARUTO SHIPPUDEN • WILL OF FIRE
                </span>
                <Flame className="w-5 h-5 text-orange-400" />
              </div>
              <blockquote className="font-serif italic text-xs sm:text-sm text-orange-200/90 max-w-2xl mx-auto">
                "As long as there are leaves falling from the great tree, the fire will continue to burn."
                <footer className="text-[10px] font-mono text-orange-400 mt-1 uppercase not-italic">
                  — Hiruzen Sarutobi, Third Hokage
                </footer>
              </blockquote>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 border border-orange-500/30 hover:border-orange-400 text-orange-300 text-xs font-bold tracking-widest uppercase transition-all shadow-lg hover:scale-105 cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>RETURN TO HOKAGE ROCK</span>
              </button>

              <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
                NARUTO © MASASHI KISHIMOTO / SHUEISHA, TV TOKYO, PIERROT • NON-PROFIT FAN TRIBUTE
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};
