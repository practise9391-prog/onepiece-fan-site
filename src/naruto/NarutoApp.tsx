import React, { useState } from 'react';
import { SHINOBI_LEGENDS, HOKAGE_MONUMENT, AKATSUKI_MEMBERS, NARUTO_ARCS, ShinobiLegend } from './data/narutoData';
import { universeAudio } from '../anime-universe/audio/universeAudio';
import { Sparkles, Shield, Swords, Wind, Flame, Zap, ChevronRight, X, Award, Eye } from 'lucide-react';

export const NarutoApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'shinobi' | 'hokage' | 'akatsuki' | 'arcs'>('shinobi');
  const [selectedShinobi, setSelectedShinobi] = useState<ShinobiLegend | null>(null);

  const handleShinobiClick = (s: ShinobiLegend) => {
    universeAudio.playChakraBurst();
    setSelectedShinobi(s);
  };

  return (
    <div className="min-h-screen bg-[#0a0604] text-slate-100 font-sans selection:bg-orange-600 selection:text-white pb-24">
      {/* Top Shinobi Archive Header */}
      <header className="sticky top-0 z-40 bg-black/85 backdrop-blur-xl border-b border-orange-500/20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-500 to-red-600 p-0.5 shadow-lg shadow-orange-500/30">
            <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-orange-400 animate-spin-slow" />
            </div>
          </div>
          <div>
            <h1 className="font-cinzelDeco font-black text-lg text-white tracking-widest leading-none">
              NARUTO SHIPPUDEN
            </h1>
            <span className="text-[9px] font-mono tracking-[0.3em] text-orange-400 uppercase">
              WILL OF FIRE • ナルト 疾風伝
            </span>
          </div>
        </div>

        {/* Section Tabs */}
        <nav className="flex items-center gap-1 bg-slate-950 p-1.5 rounded-full border border-white/10 text-xs font-mono font-bold">
          <button
            onClick={() => {
              universeAudio.playHover();
              setActiveTab('shinobi');
            }}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              activeTab === 'shinobi'
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30 font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            SHINOBI LEGENDS
          </button>
          <button
            onClick={() => {
              universeAudio.playHover();
              setActiveTab('hokage');
            }}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              activeTab === 'hokage'
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30 font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            HOKAGE MONUMENT
          </button>
          <button
            onClick={() => {
              universeAudio.playHover();
              setActiveTab('akatsuki');
            }}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              activeTab === 'akatsuki'
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30 font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            AKATSUKI (赤砂)
          </button>
          <button
            onClick={() => {
              universeAudio.playHover();
              setActiveTab('arcs');
            }}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              activeTab === 'arcs'
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30 font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            GREAT BATTLES
          </button>
        </nav>
      </header>

      {/* Cinematic Naruto Hero Section */}
      <section className="relative px-6 py-16 sm:py-24 max-w-7xl mx-auto overflow-hidden">
        {/* Swirling Orange/Cyan Chakra Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-orange-600/15 rounded-full filter blur-[130px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>THE TALE OF THE GUTS AND DESTINY</span>
            </div>

            <h2 className="font-cinzelDeco text-4xl sm:text-6xl font-black text-white tracking-wider leading-tight">
              THE WILL OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-300 to-sky-400">FIRE</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              "When people are protecting something truly precious to them, they can become as strong as they can ever be. As long as there are leaves floating in the wind, the fire burns within."
            </p>

            {/* Quick Interactive Jutsu Trigger Buttons */}
            <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
              <button
                onClick={() => universeAudio.playChakraBurst()}
                className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400 text-xs font-mono font-bold flex items-center gap-2 transition"
              >
                <Wind className="w-4 h-4 text-sky-400" />
                <span>RASENGAN (螺旋丸)</span>
              </button>
              <button
                onClick={() => universeAudio.playBladeSlash()}
                className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400 text-xs font-mono font-bold flex items-center gap-2 transition"
              >
                <Zap className="w-4 h-4 text-purple-400" />
                <span>CHIDORI (千鳥)</span>
              </button>
              <button
                onClick={() => universeAudio.playClick(800, 0.1)}
                className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400 text-xs font-mono font-bold flex items-center gap-2 transition"
              >
                <Eye className="w-4 h-4 text-red-500" />
                <span>SHARINGAN (写輪眼)</span>
              </button>
            </div>
          </div>

          {/* Naruto Hero Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-80 h-96 sm:w-96 sm:h-[420px] rounded-3xl overflow-hidden border border-orange-500/30 bg-gradient-to-t from-orange-950/80 via-black to-slate-950 p-4 flex items-center justify-center shadow-2xl">
              <img
                src="./images/naruto/naruto-sage.png"
                alt="Naruto Uzumaki Sage Mode"
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_25px_rgba(234,88,12,0.6)] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN TAB CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TAB 1: SHINOBI LEGENDS */}
        {activeTab === 'shinobi' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-cinzelDeco text-3xl sm:text-4xl font-black text-white">
                SHINOBI <span className="text-orange-500">LEGENDS</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Masters of chakra, forbidden jutsu, and unbreakable bonds who reshaped the balance of the Five Great Shinobi Nations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SHINOBI_LEGENDS.map((s) => (
                <div
                  key={s.id}
                  onClick={() => handleShinobiClick(s)}
                  onMouseEnter={() => universeAudio.playHover()}
                  data-cursor="pointer"
                  className="rounded-3xl p-6 bg-slate-950/90 border border-white/10 hover:border-orange-500/60 shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
                  style={{ boxShadow: `0 10px 30px -15px ${s.accentColor}40` }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-orange-400 font-bold uppercase">
                        {s.clan}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {s.japaneseName}
                      </span>
                    </div>

                    <div className="relative w-full h-48 rounded-2xl bg-black/80 border border-white/10 my-3 flex items-center justify-center p-2">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                      />
                    </div>

                    <h4 className="font-cinzel text-xl font-bold text-white">
                      {s.name}
                    </h4>
                    <div className="text-xs font-mono text-amber-300 font-bold mt-0.5">
                      {s.title}
                    </div>

                    <p className="text-xs font-serif italic text-slate-300 mt-3 line-clamp-2">
                      "{s.quote}"
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-orange-400 font-bold">
                    <span>VIEW DOSSIER</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: HOKAGE MONUMENT */}
        {activeTab === 'hokage' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-cinzelDeco text-3xl sm:text-4xl font-black text-white">
                THE HOKAGE <span className="text-orange-500">MONUMENT (火影岩)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Carved into the sheer stone cliffs overlooking the Hidden Leaf Village. Seven leaders who sacrificed life and soul to nurture the leaves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {HOKAGE_MONUMENT.map((h, i) => (
                <div
                  key={i}
                  className="rounded-3xl p-6 bg-slate-950/90 border border-white/10 hover:border-orange-400/50 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold uppercase">
                      {h.order}
                    </span>

                    <h4 className="font-cinzel text-2xl font-bold text-white mt-3">
                      {h.name}
                    </h4>
                    <div className="text-xs font-mono text-amber-300 mt-0.5 font-bold mb-3">
                      {h.title}
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-xs font-mono text-slate-300 mb-3">
                      <div className="text-[10px] text-orange-400 uppercase font-bold">HISTORIC FEAT:</div>
                      <div>{h.reignFeat}</div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {h.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-slate-400">
                    Signature Art: <strong className="text-white">{h.signatureTechnique}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: AKATSUKI SANCTUARY */}
        {activeTab === 'akatsuki' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-cinzelDeco text-3xl sm:text-4xl font-black text-white">
                THE AKATSUKI <span className="text-red-500">CLAN (暁)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Cloaked in black coats with red clouds. Rogue S-Rank shinobi seeking peace through devastating divine justice and the Tailed Beasts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {AKATSUKI_MEMBERS.map((a) => (
                <div
                  key={a.id}
                  className="rounded-3xl p-6 bg-slate-950/90 border border-red-500/20 hover:border-red-500/60 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-red-950 border border-red-500/50 text-[10px] font-mono text-red-300 font-bold uppercase">
                        RING: {a.ring}
                      </span>
                      <span className="w-7 h-7 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs shadow-md">
                        {a.kanji}
                      </span>
                    </div>

                    <div className="relative w-full h-44 rounded-2xl bg-black/80 border border-white/10 my-4 flex items-center justify-center p-2">
                      <img
                        src={a.image}
                        alt={a.name}
                        className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                      />
                    </div>

                    <h4 className="font-cinzel text-xl font-bold text-white">
                      {a.name}
                    </h4>

                    <p className="text-xs font-serif italic text-red-200 mt-2">
                      "{a.philosophy}"
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-slate-400">
                    Jutsu: <span className="text-amber-300 font-bold">{a.signatureJutsu}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: GREAT BATTLES & ARCS */}
        {activeTab === 'arcs' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-cinzelDeco text-3xl sm:text-4xl font-black text-white">
                LEGENDARY <span className="text-orange-500">SAGAS & BATTLES</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Clashes that decided the fate of nations and severed or bound the links of brotherhood.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {NARUTO_ARCS.map((arc) => (
                <div
                  key={arc.id}
                  className="rounded-3xl overflow-hidden bg-slate-950/90 border border-white/10 hover:border-orange-500/50 shadow-xl flex flex-col justify-between"
                >
                  <div className="relative h-44 w-full bg-black/60 overflow-hidden">
                    <img
                      src={arc.image}
                      alt={arc.title}
                      className="w-full h-full object-cover filter contrast-110 brightness-90 hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/60" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 text-[10px] font-mono text-orange-400 font-bold border border-white/10">
                      {arc.episodes}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-cinzel text-xl font-bold text-white mb-1">
                        {arc.title}
                      </h4>
                      <div className="text-[10px] font-mono text-orange-400 uppercase tracking-widest font-bold mb-3">
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

      {/* Expanded Shinobi Modal */}
      {selectedShinobi && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-xl bg-slate-950 border border-orange-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase text-orange-400 font-bold">
                  {selectedShinobi.ninjaRank} • {selectedShinobi.village}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-white mt-0.5">
                  {selectedShinobi.name}
                </h3>
                <div className="text-xs font-mono text-slate-400 italic">
                  {selectedShinobi.japaneseName}
                </div>
              </div>

              <button
                onClick={() => setSelectedShinobi(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-5 relative h-48 rounded-2xl bg-black/80 border border-white/10 flex items-center justify-center p-2">
              <img
                src={selectedShinobi.image}
                alt={selectedShinobi.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]"
              />
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/30">
                <div className="text-[10px] font-mono text-orange-400 uppercase font-bold mb-1">
                  NINJA WAY (NINDO) & QUOTE
                </div>
                <blockquote className="font-serif italic text-sm text-orange-100">
                  "{selectedShinobi.quote}"
                </blockquote>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div>
                  <span className="text-slate-400">Nature Transformations: </span>
                  <span className="text-white font-bold">{selectedShinobi.natureTypes.join(', ')}</span>
                </div>
                {selectedShinobi.kekkeiGenkai && (
                  <div>
                    <span className="text-slate-400">Kekkei Genkai: </span>
                    <strong className="text-amber-300">{selectedShinobi.kekkeiGenkai}</strong>
                  </div>
                )}
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold mb-1">
                  BIOGRAPHY & ACHIEVEMENTS
                </div>
                <p className="text-slate-200 leading-relaxed">
                  {selectedShinobi.description}
                </p>
              </div>

              <div>
                <div className="text-[10px] font-mono text-amber-300 uppercase font-bold mb-2">
                  SIGNATURE JUTSU
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedShinobi.signatureJutsu.map((j) => (
                    <span key={j} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200">
                      {j}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedShinobi(null)}
              className="w-full mt-6 py-2.5 rounded-xl bg-orange-600 text-white font-cinzel font-bold text-sm tracking-wider uppercase hover:bg-orange-500 transition cursor-pointer"
            >
              CLOSE SHINOBI ARCHIVE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
