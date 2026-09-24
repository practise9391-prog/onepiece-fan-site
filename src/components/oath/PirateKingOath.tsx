import React, { useState } from 'react';
import { PIRATE_KING_OATHS, CrewOath } from '../../data/oathData';
import { sound } from '../../audio/soundEngine';
import { Crown, Sparkles, Quote, Flame, Compass, ChevronRight, Shield, Swords } from 'lucide-react';

export const PirateKingOath: React.FC = () => {
  const [selectedOath, setSelectedOath] = useState<CrewOath>(PIRATE_KING_OATHS[0]);

  const handleSelectOath = (oath: CrewOath) => {
    sound.playSwordSlash();
    setSelectedOath(oath);
  };

  return (
    <section id="oath" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
          <Crown className="w-3.5 h-3.5 text-amber-400" />
          <span>SACRED CREW OATH OF ALLEGIANCE</span>
        </div>

        <h2 className="font-cinzelDeco text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider">
          "LUFFY WILL BECOME THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">KING OF THE PIRATES"</span>
        </h2>

        <p className="mt-3 text-slate-400 max-w-3xl mx-auto text-sm sm:text-base font-medium">
          The ultimate declarations of faith. Even with shattered bones, facing execution, or looking an Emperor in the eye—every Straw Hat staked their life proclaiming Luffy’s destiny.
        </p>
      </div>

      {/* Featured Spotlight Section */}
      <div className="relative rounded-3xl overflow-hidden border border-amber-500/40 bg-slate-950/90 shadow-2xl mb-12">
        {/* Ambient Scene Backdrop */}
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-[0.25] transition-all duration-700"
          style={{ backgroundImage: `url(${selectedOath.sceneImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />

        <div className="relative z-10 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Character Portrait & Title */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden border-2 shadow-2xl bg-black/50 p-1 flex items-center justify-center mb-4"
              style={{ borderColor: selectedOath.themeColor }}
            >
              <img
                src={selectedOath.characterImage}
                alt={selectedOath.crewMember}
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
            </div>

            <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-1">
              {selectedOath.role}
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-white">
              {selectedOath.crewMember}
            </h3>
            <div className="text-xs font-mono text-slate-400 italic">
              {selectedOath.japaneseName}
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-mono">
              <span className="px-2.5 py-1 rounded-md bg-white/10 text-amber-300 font-bold border border-white/10">
                {selectedOath.arc}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 text-slate-300 border border-white/10">
                {selectedOath.episode}
              </span>
            </div>
          </div>

          {/* Right: The Iconic Moment & Unshakable Oath */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>CIRCUMSTANCE: {selectedOath.opponentOrContext}</span>
              </div>

              {/* Gold Oath Callout */}
              <div className="relative pl-6 py-4 my-2 border-l-4 border-amber-400 bg-amber-500/10 rounded-r-2xl pr-4">
                <Quote className="absolute left-1 top-2 w-4 h-4 text-amber-400/60" />
                <div className="font-cinzelDeco text-lg sm:text-2xl font-black text-white leading-relaxed">
                  "{selectedOath.oathQuote}"
                </div>
                {selectedOath.japaneseQuote && (
                  <div className="mt-2 text-xs font-sans text-amber-200/90 italic">
                    {selectedOath.japaneseQuote}
                  </div>
                )}
              </div>

              <div className="mt-4 text-sm text-slate-300 leading-relaxed font-sans">
                {selectedOath.circumstance}
              </div>
            </div>

            {/* Significance Banner */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-start gap-3 bg-white/5 p-4 rounded-2xl">
              <Crown className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                  CANON SIGNIFICANCE
                </div>
                <p className="text-xs text-slate-200 mt-0.5 leading-relaxed font-medium">
                  {selectedOath.significance}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of All Crew Members' Declarations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PIRATE_KING_OATHS.map((oath) => {
          const isSelected = selectedOath.id === oath.id;
          return (
            <div
              key={oath.id}
              onClick={() => handleSelectOath(oath)}
              onMouseEnter={() => sound.playHover()}
              data-cursor="pointer"
              className={`group p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-500/15 border-amber-400 shadow-xl shadow-amber-500/20 scale-[1.02]'
                  : 'bg-slate-950/80 border-white/10 hover:border-amber-400/50 hover:bg-slate-900/80'
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/20 bg-black/60 shrink-0 p-0.5 flex items-center justify-center">
                    <img
                      src={oath.characterImage}
                      alt={oath.crewMember}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {oath.crewMember}
                    </h4>
                    <div className="text-[11px] font-mono text-slate-400">
                      {oath.arc}
                    </div>
                  </div>
                </div>

                <p className="text-xs font-serif italic text-slate-200 line-clamp-3 mb-4">
                  "{oath.oathQuote}"
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">
                  {oath.role.split('/')[0]}
                </span>
                <span className="text-slate-400 group-hover:text-amber-300 font-bold flex items-center gap-1 transition-colors">
                  <span>VIEW SCENE</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

