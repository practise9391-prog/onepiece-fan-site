import React, { useState } from 'react';
import { HASHIRA_PILLARS, BREATHING_STYLES, TWELVE_KIZUKI, DEMON_SLAYER_ARCS, HashiraMember } from './data/demonSlayerData';
import { universeAudio } from '../anime-universe/audio/universeAudio';
import { Flame, Droplets, Zap, Shield, Swords, Sparkles, ChevronRight, X, Heart, Wind } from 'lucide-react';

export const DemonSlayerApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hashira' | 'breathing' | 'demons' | 'arcs'>('hashira');
  const [selectedHashira, setSelectedHashira] = useState<HashiraMember | null>(null);
  const [activeBreathing, setActiveBreathing] = useState(BREATHING_STYLES[0]);

  const handleHashiraClick = (h: HashiraMember) => {
    universeAudio.playBladeSlash();
    setSelectedHashira(h);
  };

  return (
    <div className="min-h-screen bg-[#070308] text-slate-100 font-sans selection:bg-red-600 selection:text-white pb-24">
      {/* Top Demon Slayer Navbar */}
      <header className="sticky top-0 z-40 bg-black/85 backdrop-blur-xl border-b border-red-500/20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-red-600 to-amber-500 p-0.5 shadow-lg shadow-red-500/30">
            <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
              <Flame className="w-5 h-5 text-red-500 animate-pulse" />
            </div>
          </div>
          <div>
            <h1 className="font-cinzelDeco font-black text-lg text-white tracking-widest leading-none">
              DEMON SLAYER
            </h1>
            <span className="text-[9px] font-mono tracking-[0.3em] text-red-400 uppercase">
              KIMETSU NO YAIBA • 鬼滅の刃
            </span>
          </div>
        </div>

        {/* Section Tabs */}
        <nav className="flex items-center gap-1 bg-slate-950 p-1.5 rounded-full border border-white/10 text-xs font-mono font-bold">
          <button
            onClick={() => {
              universeAudio.playHover();
              setActiveTab('hashira');
            }}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              activeTab === 'hashira'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            HASHIRA (PILLARS)
          </button>
          <button
            onClick={() => {
              universeAudio.playHover();
              setActiveTab('breathing');
            }}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              activeTab === 'breathing'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            BREATHING STYLES
          </button>
          <button
            onClick={() => {
              universeAudio.playHover();
              setActiveTab('demons');
            }}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              activeTab === 'demons'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            TWELVE KIZUKI
          </button>
          <button
            onClick={() => {
              universeAudio.playHover();
              setActiveTab('arcs');
            }}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              activeTab === 'arcs'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            STORY ARCS
          </button>
        </nav>
      </header>

      {/* Cinematic Demon Slayer Hero Showcase */}
      <section className="relative px-6 py-16 sm:py-24 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient Red Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
              <Flame className="w-3.5 h-3.5 text-red-500" />
              <span>HINOKAMI KAGURA • DANCE OF THE FIRE GOD</span>
            </div>

            <h2 className="font-cinzelDeco text-4xl sm:text-6xl font-black text-white tracking-wider leading-tight">
              SET YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">HEART ABLAZE</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              "No matter how devastating the blows may be, stand tall and live with pride. The Nichirin blade shines brightest in the deepest night."
            </p>

            {/* Quick Interactive Breathing Switcher */}
            <div className="pt-4 flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <Flame className="w-6 h-6 text-orange-500" />
                <div className="text-left">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">PROGENITOR</div>
                  <div className="font-bold text-xs text-white">Sun Breathing</div>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <Droplets className="w-6 h-6 text-blue-400" />
                <div className="text-left">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">FLUID DEFENSE</div>
                  <div className="font-bold text-xs text-white">Water Breathing</div>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <div className="text-left">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">GODSPEED</div>
                  <div className="font-bold text-xs text-white">Thunderclap Flash</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Character Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-80 h-96 sm:w-96 sm:h-[420px] rounded-3xl overflow-hidden border border-red-500/30 bg-gradient-to-t from-red-950/80 via-black to-slate-950 p-4 flex items-center justify-center shadow-2xl">
              <img
                src="./images/demon-slayer/tanjiro.png"
                alt="Tanjiro Kamado"
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_25px_rgba(239,68,68,0.5)] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN TAB CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TAB 1: THE 9 HASHIRA PILLARS */}
        {activeTab === 'hashira' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-cinzelDeco text-3xl sm:text-4xl font-black text-white">
                THE NINE <span className="text-red-500">HASHIRA (柱)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                The supreme swordmasters of the Demon Slayer Corps. Each pillar commands a unique breathing derivation and bears the hopes of humanity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {HASHIRA_PILLARS.map((h) => (
                <div
                  key={h.id}
                  onClick={() => handleHashiraClick(h)}
                  onMouseEnter={() => universeAudio.playHover()}
                  data-cursor="pointer"
                  className="group relative rounded-3xl p-6 bg-slate-950/90 border border-white/10 hover:border-red-500/60 shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden"
                  style={{
                    boxShadow: `0 10px 30px -15px ${h.accentColor}40`
                  }}
                >
                  <div>
                    {/* Top Identity */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-red-400 uppercase">
                        {h.title}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {h.japaneseName}
                      </span>
                    </div>

                    {/* Portrait Frame */}
                    <div className="relative w-full h-48 rounded-2xl bg-black/60 border border-white/10 overflow-hidden my-3 flex items-center justify-center p-2 group-hover:border-red-500/40">
                      <img
                        src={h.image}
                        alt={h.name}
                        className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <h4 className="font-cinzel text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {h.name}
                    </h4>
                    <div className="text-xs font-mono text-amber-300 mt-0.5 font-bold">
                      {h.breathingStyle}
                    </div>

                    <p className="text-xs font-serif italic text-slate-300 mt-3 line-clamp-2">
                      "{h.quote}"
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-mono text-slate-400">
                      Blade: {h.bladeColor.split(' ')[0]}
                    </span>
                    <span className="text-red-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>INSPECT PILLAR</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: BREATHING STYLES ENCYCLOPEDIA */}
        {activeTab === 'breathing' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-cinzelDeco text-3xl sm:text-4xl font-black text-white">
                BREATHING <span className="text-red-500">STYLES</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Total Concentration Breathing (Zenchūshū no Kokyū) accelerates blood circulation and heart rate to give human slayers the physical might of demons.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {BREATHING_STYLES.map((b) => (
                <div
                  key={b.id}
                  className="rounded-3xl p-6 bg-slate-950/85 border border-white/10 hover:border-red-500/50 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                      {b.derivation}
                    </span>
                    <h4 className="font-cinzel text-2xl font-black text-white mt-1">
                      {b.name}
                    </h4>
                    <div className="text-xs font-mono text-red-400 mb-3 italic">
                      {b.japaneseName}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {b.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <div className="text-[10px] font-mono text-amber-300 uppercase tracking-wider font-bold">
                        KEY FORMS & TECHNIQUES:
                      </div>
                      {b.forms.map((f, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs">
                          <div className="font-bold text-white text-[11px] mb-0.5">
                            {f.number}: <span className="text-red-300">{f.name}</span>
                          </div>
                          <div className="text-slate-400 text-[10px] leading-relaxed">
                            {f.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: TWELVE KIZUKI & DEMONS */}
        {activeTab === 'demons' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-cinzelDeco text-3xl sm:text-4xl font-black text-white">
                THE TWELVE <span className="text-red-500">DEMON MOONS (十二鬼月)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Hand-picked by Demon King Muzan Kibutsuji, the Upper Ranks have remained undefeated for over a century, consuming hundreds of Demon Slayers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TWELVE_KIZUKI.map((d) => (
                <div
                  key={d.id}
                  className="rounded-3xl p-6 bg-slate-950/90 border border-red-500/20 hover:border-red-500/60 shadow-xl flex flex-col justify-between"
                  style={{ boxShadow: `0 10px 30px -15px ${d.glowColor}` }}
                >
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-[10px] font-mono text-red-300 font-bold uppercase">
                      {d.rank}
                    </span>

                    <div className="relative w-full h-44 rounded-2xl bg-black/80 border border-white/10 my-4 flex items-center justify-center p-2">
                      <img
                        src={d.image}
                        alt={d.name}
                        className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                      />
                    </div>

                    <h4 className="font-cinzel text-xl font-bold text-white">
                      {d.name}
                    </h4>
                    <div className="text-xs font-mono text-slate-400 mt-1">
                      Blood Art: <strong className="text-red-300">{d.bloodArt}</strong>
                    </div>

                    <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: STORY ARCS */}
        {activeTab === 'arcs' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-cinzelDeco text-3xl sm:text-4xl font-black text-white">
                CHRONICLES & <span className="text-red-500">BATTLES</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                From the snowy mountain where Tanjiro’s family was slaughtered to the shifting depths of the Infinity Castle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DEMON_SLAYER_ARCS.map((arc) => (
                <div
                  key={arc.id}
                  className="rounded-3xl overflow-hidden bg-slate-950/90 border border-white/10 hover:border-red-500/50 shadow-xl flex flex-col justify-between"
                >
                  <div className="relative h-44 w-full bg-black/60 overflow-hidden">
                    <img
                      src={arc.image}
                      alt={arc.title}
                      className="w-full h-full object-cover filter contrast-110 brightness-90 hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/60" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 text-[10px] font-mono text-red-400 font-bold border border-white/10">
                      {arc.episodes}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-cinzel text-xl font-bold text-white mb-1">
                        {arc.title}
                      </h4>
                      <div className="text-[10px] font-mono text-red-400 uppercase tracking-widest font-bold mb-3">
                        {arc.subtitle}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {arc.synopsis}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 text-xs font-mono text-amber-300">
                      CLASH: {arc.keyClash}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Expanded Hashira Inspector Modal */}
      {selectedHashira && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-xl bg-slate-950 border border-red-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase text-red-400 font-bold">
                  {selectedHashira.title}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-white mt-0.5">
                  {selectedHashira.name}
                </h3>
                <div className="text-xs font-mono text-slate-400 italic">
                  {selectedHashira.japaneseName}
                </div>
              </div>

              <button
                onClick={() => setSelectedHashira(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-5 relative h-48 rounded-2xl bg-black/80 border border-white/10 flex items-center justify-center p-2">
              <img
                src={selectedHashira.image}
                alt={selectedHashira.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]"
              />
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30">
                <div className="text-[10px] font-mono text-red-400 uppercase font-bold">
                  ICONIC RESOLVE & QUOTE
                </div>
                <blockquote className="font-serif italic text-sm text-red-100 mt-1">
                  "{selectedHashira.quote}"
                </blockquote>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-2">
                <div>
                  <span className="text-slate-400">Breathing Style: </span>
                  <strong className="text-white">{selectedHashira.breathingStyle}</strong>
                </div>
                <div>
                  <span className="text-slate-400">Nichirin Blade: </span>
                  <strong className="text-amber-300">{selectedHashira.bladeColor}</strong>
                </div>
                <div>
                  <span className="text-slate-400">Slayer Mark: </span>
                  <span className="text-slate-200">{selectedHashira.markStatus}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold mb-1">
                  BIOGRAPHY & FEATS
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {selectedHashira.description}
                </p>
              </div>

              <div>
                <div className="text-[10px] font-mono text-amber-300 uppercase font-bold mb-2">
                  SIGNATURE FORMS
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedHashira.signatureForms.map((f) => (
                    <span key={f} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedHashira(null)}
              className="w-full mt-6 py-2.5 rounded-xl bg-red-600 text-white font-cinzel font-bold text-sm tracking-wider uppercase hover:bg-red-500 transition cursor-pointer"
            >
              CLOSE HASHIRA DOSSIER
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
