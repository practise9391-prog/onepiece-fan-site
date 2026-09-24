import React, { useState } from 'react';
import { SHADOW_ARMY, TOP_HUNTERS, GATES_AND_DUNGEONS, ShadowSoldier, HunterDossier } from './data/soloLevelingData';
import { universeAudio } from '../anime-universe/audio/universeAudio';
import { Zap, Shield, Swords, Sparkles, ChevronRight, X, User, Award, Activity, Skull } from 'lucide-react';

export const SoloLevelingApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'system' | 'shadows' | 'hunters' | 'gates'>('system');
  const [ariseTriggered, setAriseTriggered] = useState(false);
  const [selectedShadow, setSelectedShadow] = useState<ShadowSoldier | null>(null);

  const handleArise = () => {
    universeAudio.playSystemChime();
    setAriseTriggered(true);
    setTimeout(() => setAriseTriggered(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#05060d] text-slate-100 font-sans selection:bg-blue-600 selection:text-white pb-24">
      {/* Top Futuristic System Header */}
      <header className="sticky top-0 z-40 bg-black/85 backdrop-blur-xl border-b border-blue-500/30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-0.5 shadow-lg shadow-blue-500/30">
            <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
              <Zap className="w-5 h-5 text-blue-400 animate-pulse" />
            </div>
          </div>
          <div>
            <h1 className="font-cinzelDeco font-black text-lg text-white tracking-widest leading-none">
              SOLO LEVELING
            </h1>
            <span className="text-[9px] font-mono tracking-[0.3em] text-blue-400 uppercase">
              SHADOW MONARCH SYSTEM • 나 혼자만 레벨업
            </span>
          </div>
        </div>

        {/* System Navigation Tabs */}
        <nav className="flex items-center gap-1 bg-slate-950 p-1.5 rounded-full border border-white/10 text-xs font-mono font-bold">
          <button
            onClick={() => {
              universeAudio.playHover();
              setActiveTab('system');
            }}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              activeTab === 'system'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40 font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            STATUS WINDOW
          </button>
          <button
            onClick={() => {
              universeAudio.playHover();
              setActiveTab('shadows');
            }}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              activeTab === 'shadows'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40 font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            SHADOW ARMY
          </button>
          <button
            onClick={() => {
              universeAudio.playHover();
              setActiveTab('hunters');
            }}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              activeTab === 'hunters'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40 font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            HUNTER DOSSIER
          </button>
          <button
            onClick={() => {
              universeAudio.playHover();
              setActiveTab('gates');
            }}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              activeTab === 'gates'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40 font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            GATES & DUNGEONS
          </button>
        </nav>
      </header>

      {/* Cinematic Hero: Sung Jin-Woo & The Shadow Monarch */}
      <section className="relative px-6 py-16 sm:py-20 max-w-7xl mx-auto overflow-hidden">
        {/* Shadow Purple Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/15 rounded-full filter blur-[130px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
              <Activity className="w-3.5 h-3.5 text-blue-400" />
              <span>SYSTEM NOTIFICATION: QUEST COMPLETED</span>
            </div>

            <h2 className="font-cinzelDeco text-4xl sm:text-6xl font-black text-white tracking-wider leading-tight">
              MONARCH OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">SHADOWS</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-mono">
              [Player Sung Jin-Woo has inherited the heart of the Shadow Monarch Ashborn. All restrictions have been lifted.]
            </p>

            {/* Interactive "ARISE" Extraction Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={handleArise}
                data-cursor="pointer"
                className="group relative px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white font-cinzel font-black tracking-widest uppercase shadow-2xl hover:scale-105 transition-all cursor-pointer overflow-hidden border border-blue-400/40"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Skull className="w-5 h-5 text-blue-300" />
                  <span>COMMAND: "ARISE" (일어나라)</span>
                </span>
                <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-30 transition-opacity blur-md" />
              </button>

              {ariseTriggered && (
                <div className="text-xs font-mono text-blue-400 font-bold animate-pulse">
                  ✦ SHADOW EXTRACTION SUCCESSFUL! 130,000 SHADOWS AWAKENED!
                </div>
              )}
            </div>
          </div>

          {/* Sung Jin-Woo Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-80 h-96 sm:w-96 sm:h-[420px] rounded-3xl overflow-hidden border border-blue-500/40 bg-gradient-to-t from-blue-950/80 via-black to-slate-950 p-4 flex items-center justify-center shadow-2xl">
              <img
                src="./images/solo-leveling/jinwoo.png"
                alt="Sung Jin-Woo"
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TAB 1: AUTHENTIC PLAYER STATUS WINDOW */}
        {activeTab === 'system' && (
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl p-6 sm:p-10 bg-slate-950/90 border-2 border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.25)] font-mono">
              <div className="flex items-center justify-between pb-4 border-b border-blue-500/30 mb-6">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold tracking-widest uppercase">
                  <Activity className="w-4 h-4 animate-spin-slow" />
                  <span>[STATUS WINDOW - PLAYER: SUNG JIN-WOO]</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/40">
                  LEVEL 146
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <div>
                    <span className="text-slate-400">JOB: </span>
                    <strong className="text-purple-400 font-bold">Shadow Monarch (그림자 군주)</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">TITLE: </span>
                    <strong className="text-amber-300">The One Who Overcame Adversity</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">FATIGUE: </span>
                    <strong className="text-emerald-400 font-bold">0%</strong>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">HP (HEALTH POINTS)</span>
                      <span className="text-blue-300 font-bold">84,200 / 84,200</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-blue-500/30">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">MP (MANA POINTS)</span>
                      <span className="text-purple-300 font-bold">128,450 / 128,450</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-purple-500/30">
                      <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-400 w-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Allocation Grid */}
              <div className="mt-8 pt-6 border-t border-blue-500/20 grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400 uppercase">STRENGTH</div>
                  <div className="text-xl font-bold text-blue-400 mt-1">324</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400 uppercase">AGILITY</div>
                  <div className="text-xl font-bold text-blue-400 mt-1">340</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400 uppercase">SENSE</div>
                  <div className="text-xl font-bold text-blue-400 mt-1">315</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400 uppercase">VITALITY</div>
                  <div className="text-xl font-bold text-blue-400 mt-1">290</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                  <div className="text-[10px] text-slate-400 uppercase">INTELLIGENCE</div>
                  <div className="text-xl font-bold text-purple-400 mt-1">370</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SHADOW ARMY SANCTUARY */}
        {activeTab === 'shadows' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-cinzelDeco text-3xl sm:text-4xl font-black text-white">
                THE IMMORTAL <span className="text-blue-400">SHADOW ARMY</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-mono">
                Extracted from the souls of fallen warriors and monarch commanders. They feel zero fatigue, regenerate indefinitely, and obey only Sung Jin-Woo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SHADOW_ARMY.map((s) => (
                <div
                  key={s.id}
                  onClick={() => {
                    universeAudio.playClick(600, 0.1);
                    setSelectedShadow(s);
                  }}
                  onMouseEnter={() => universeAudio.playHover()}
                  data-cursor="pointer"
                  className="rounded-3xl p-6 bg-slate-950/90 border border-blue-500/20 hover:border-blue-400 shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
                  style={{ boxShadow: `0 10px 30px -15px ${s.glowColor}` }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-mono font-bold uppercase border border-blue-400/40">
                        {s.grade}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {s.koreanName}
                      </span>
                    </div>

                    <div className="relative w-full h-44 rounded-2xl bg-black/80 border border-white/10 my-3 flex items-center justify-center p-2">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                      />
                    </div>

                    <h4 className="font-cinzel text-xl font-bold text-white">
                      {s.name}
                    </h4>

                    <div className="text-[11px] font-mono text-slate-400 mt-1">
                      Origin: <span className="text-slate-200">{s.origin.split('/')[0]}</span>
                    </div>

                    <p className="text-xs font-mono italic text-blue-300 mt-3 line-clamp-2">
                      "{s.quote}"
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-bold">
                    <span>VIEW DOSSIER</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: HUNTER DOSSIER */}
        {activeTab === 'hunters' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-cinzelDeco text-3xl sm:text-4xl font-black text-white">
                S-RANK & <span className="text-blue-400">NATIONAL LEVEL HUNTERS</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-mono">
                The apex defenders of humanity. Individuals whose mana cores possess destructive capacity comparable to national military divisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TOP_HUNTERS.map((h) => (
                <div
                  key={h.id}
                  className="rounded-3xl p-6 bg-slate-950/90 border border-white/10 hover:border-blue-400/50 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-amber-300 font-bold uppercase">
                      {h.rank}
                    </span>

                    <div className="relative w-full h-44 rounded-2xl bg-black/80 border border-white/10 my-4 flex items-center justify-center p-2">
                      <img
                        src={h.image}
                        alt={h.name}
                        className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                      />
                    </div>

                    <h4 className="font-cinzel text-xl font-bold text-white">
                      {h.name}
                    </h4>
                    <div className="text-xs font-mono text-blue-400 mt-0.5 font-bold">
                      {h.title}
                    </div>

                    <div className="mt-3 text-xs space-y-1 font-mono text-slate-300">
                      <div>Guild: <strong className="text-white">{h.guild}</strong></div>
                      <div>Class: <strong className="text-slate-200">{h.classType}</strong></div>
                    </div>

                    <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: GATES & DUNGEONS */}
        {activeTab === 'gates' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-cinzelDeco text-3xl sm:text-4xl font-black text-white">
                DIMENSIONAL <span className="text-blue-400">GATES & RAIDS</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-mono">
                Portals linking our reality with dungeon realms. Uncleared gates trigger Dungeon Breaks where monsters invade human territory.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GATES_AND_DUNGEONS.map((g) => (
                <div
                  key={g.id}
                  className="rounded-3xl overflow-hidden bg-slate-950/90 border border-white/10 hover:border-blue-400/50 shadow-xl flex flex-col justify-between"
                >
                  <div className="relative h-44 w-full bg-black/60 overflow-hidden">
                    <img
                      src={g.image}
                      alt={g.name}
                      className="w-full h-full object-cover filter contrast-110 brightness-90 hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/60" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 text-[10px] font-mono text-blue-400 font-bold border border-white/10">
                      {g.rank}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-cinzel text-xl font-bold text-white mb-1">
                        {g.name}
                      </h4>
                      <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-bold mb-3">
                        BOSS: {g.boss}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {g.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 text-xs font-mono text-slate-400">
                      Significance: <span className="text-blue-300 font-bold">{g.significance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Expanded Shadow Soldier Modal */}
      {selectedShadow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn font-mono">
          <div className="relative w-full max-w-xl bg-slate-950 border border-blue-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase text-blue-400 font-bold">
                  SHADOW GRADE: {selectedShadow.grade}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-white mt-0.5">
                  {selectedShadow.name}
                </h3>
                <div className="text-xs font-mono text-slate-400">
                  {selectedShadow.koreanName}
                </div>
              </div>

              <button
                onClick={() => setSelectedShadow(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-5 relative h-48 rounded-2xl bg-black/80 border border-white/10 flex items-center justify-center p-2">
              <img
                src={selectedShadow.image}
                alt={selectedShadow.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
              />
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30">
                <div className="text-[10px] font-mono text-blue-400 uppercase font-bold mb-1">
                  TACTICAL ABILITY
                </div>
                <div className="text-sm text-white font-bold">
                  {selectedShadow.ability}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold mb-1">
                  ORIGIN OF EXTRACTION
                </div>
                <p className="text-slate-200 leading-relaxed">
                  {selectedShadow.origin}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold mb-1">
                  COMMANDER SUMMARY
                </div>
                <p className="text-slate-200 leading-relaxed">
                  {selectedShadow.description}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedShadow(null)}
              className="w-full mt-6 py-2.5 rounded-xl bg-blue-600 text-white font-cinzel font-bold text-sm tracking-wider uppercase hover:bg-blue-500 transition cursor-pointer"
            >
              CLOSE COMMAND DOSSIER
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

