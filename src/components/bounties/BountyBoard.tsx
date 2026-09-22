import React, { useState, useEffect } from 'react';
import { WANTED_POSTERS, WantedPoster } from '../../data/bountiesData';
import { sound } from '../../audio/soundEngine';
import { Coins, Sparkles, Anchor, Eye, ShieldAlert, AlertTriangle } from 'lucide-react';

export const BountyBoard: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [tickedBounties, setTickedBounties] = useState<{ [key: string]: number }>({});
  const [selectedPoster, setSelectedPoster] = useState<WantedPoster | null>(null);

  const filters = ['ALL', 'Straw Hat Pirates', 'Four Emperors', 'Legendary Pirates'];

  const filteredPosters = activeFilter === 'ALL'
    ? WANTED_POSTERS
    : WANTED_POSTERS.filter((p) => p.affiliation === activeFilter);

  // Fast Animated Berry Counter Ticker (240ms)
  useEffect(() => {
    filteredPosters.forEach((poster) => {
      let current = 0;
      const target = poster.bounty;
      const step = Math.ceil(target / 12);
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setTickedBounties((prev) => ({ ...prev, [poster.id]: current }));
      }, 20);
    });
  }, [activeFilter]);

  const handlePosterClick = (poster: WantedPoster) => {
    sound.playClick(500, 0.1);
    if (poster.isGear5) {
      sound.startDrumsOfLiberation();
      setTimeout(() => sound.stopDrumsOfLiberation(), 2500);
    }
    setSelectedPoster(poster);
  };

  return (
    <section id="bounties" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
          <Coins className="w-3.5 h-3.5" />
          <span>MARINE HEADQUARTERS BOUNTY REGISTRY</span>
        </div>

        <h2 className="font-cinzelDeco text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">BOUNTY</span> BOARD
        </h2>

        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-medium">
          Official imperial wanted notices issued by the World Government Marine Directorate. Featuring authentic canonical portraits including Luffy’s Gear 5 White Form.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                sound.playHover();
                setActiveFilter(f);
              }}
              data-cursor="pointer"
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition cursor-pointer ${
                activeFilter === f
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/30 font-black scale-105'
                  : 'bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:border-amber-400/50 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Wanted Poster Grid with Realistic Parchment Styling */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredPosters.map((poster) => {
          const displayedValue = tickedBounties[poster.id] || poster.bounty;

          return (
            <div
              key={poster.id}
              onClick={() => handlePosterClick(poster)}
              onMouseEnter={() => sound.playHover()}
              data-cursor="pointer"
              className={`group relative bg-[#edd9b2] text-[#2b180d] p-5 rounded-2xl shadow-2xl transition-all duration-200 transform-gpu hover:scale-[1.04] hover:-rotate-1 border-4 border-[#bca075] cursor-pointer flex flex-col justify-between overflow-hidden ${
                poster.isGear5 ? 'ring-4 ring-yellow-400/80 shadow-[0_0_40px_rgba(250,204,21,0.5)]' : ''
              }`}
              style={{
                boxShadow: poster.isGear5
                  ? '0 0 35px rgba(250, 204, 21, 0.4), inset 0 0 50px rgba(162, 123, 73, 0.4)'
                  : '0 20px 35px -10px rgba(0, 0, 0, 0.8), inset 0 0 50px rgba(162, 123, 73, 0.35)'
              }}
            >
              {/* Marine Stamp Seal */}
              <div className="absolute top-2 right-2 select-none pointer-events-none border-2 border-red-700/70 rounded px-1.5 py-0.5 text-[8px] font-black tracking-widest text-red-700/80 transform rotate-12 uppercase font-serif">
                MARINE HQ
              </div>

              {/* Special Badge (Gear 5, Sunny, Concert) */}
              {poster.isGear5 && (
                <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded bg-yellow-400 text-black text-[8px] font-black tracking-widest uppercase shadow-md flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>GEAR 5 WHITE FORM</span>
                </div>
              )}
              {poster.isSunnyFigurehead && (
                <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded bg-orange-600 text-white text-[8px] font-black tracking-widest uppercase shadow-md">
                  <span>SUNNY PHOTO ERROR</span>
                </div>
              )}
              {poster.isConcertPoster && (
                <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded bg-purple-600 text-white text-[8px] font-black tracking-widest uppercase shadow-md">
                  <span>SOUL KING TOUR</span>
                </div>
              )}

              <div>
                {/* Header Wanted Text */}
                <div className="text-center font-serif text-3xl font-black tracking-[0.25em] text-[#3e2415] border-b-2 border-[#8c6747]/60 pb-1 mb-3 mt-4 select-none drop-shadow-sm">
                  WANTED
                </div>

                {/* Portrait Frame */}
                <div className="w-full aspect-[4/3] rounded bg-[#2e1d11] p-1 shadow-inner overflow-hidden border border-[#8c6747] relative">
                  <img
                    src={poster.imageUrl}
                    alt={poster.name}
                    className="w-full h-full object-cover filter sepia-[0.35] contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-300"
                  />
                  {poster.isGear5 && (
                    <div className="absolute inset-0 bg-yellow-200/15 pointer-events-none mix-blend-screen animate-pulse" />
                  )}
                </div>

                {/* Condition: DEAD OR ALIVE */}
                <div className="text-center font-bold text-xs tracking-widest text-[#5c371e] mt-3 uppercase font-serif">
                  ({poster.status})
                </div>

                {/* Pirate / Target Name */}
                <div className="text-center font-serif text-xl font-black text-[#221006] tracking-wider mt-1 truncate">
                  {poster.name}
                </div>

                {/* Epithet */}
                <div className="text-center text-[10px] font-bold text-[#7a4c28] tracking-widest uppercase">
                  "{poster.epithet}"
                </div>
              </div>

              {/* Bottom Bounty Value with Berry Symbol ฿ and Marine Seal */}
              <div className="mt-4 pt-3 border-t-2 border-[#8c6747]/60 text-center relative">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#6a4224]">
                  REWARD
                </div>
                <div className="font-mono text-xl font-black text-[#1e0f06] flex items-center justify-center gap-1">
                  <span className="font-serif text-lg">฿</span>
                  <span>{displayedValue.toLocaleString()}</span>
                  <span className="text-[11px] font-sans font-bold text-[#6a4224]">-</span>
                </div>

                {/* Bottom Marine Official Seal */}
                <div className="mt-2 flex items-center justify-center gap-1 text-[8px] font-mono font-bold text-[#734725] uppercase tracking-widest">
                  <Anchor className="w-2.5 h-2.5 text-blue-900" />
                  <span>WORLD GOVERNMENT ADMIRALTY</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Poster Modal with Marine Intelligence */}
      {selectedPoster && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#f4e6ca] text-[#2b180d] border-4 border-[#bca075] rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex justify-between items-start border-b-2 border-[#8c6747]/60 pb-3">
              <div>
                <span className="text-xs font-serif font-black tracking-widest text-red-800 uppercase flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-red-700" />
                  <span>CLASSIFIED ADMIRALTY NOTICE</span>
                </span>
                <h3 className="font-serif text-3xl font-black text-[#1c0d05]">
                  {selectedPoster.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPoster(null)}
                className="p-2 rounded-full bg-black/10 hover:bg-black/20 text-[#2b180d] transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="my-5 flex gap-4">
              <div className="w-32 h-36 rounded border-2 border-[#8c6747] overflow-hidden shrink-0 bg-black">
                <img
                  src={selectedPoster.imageUrl}
                  alt={selectedPoster.name}
                  className="w-full h-full object-cover filter sepia-[0.35]"
                />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-[#734725] font-bold">
                  AFFILIATION: {selectedPoster.affiliation}
                </div>
                <div className="text-2xl font-mono font-black text-red-900 mt-1">
                  ฿ {selectedPoster.bountyFormatted}
                </div>
                {selectedPoster.posterNote && (
                  <div className="inline-block mt-1 px-2 py-0.5 rounded bg-red-950 text-white text-[9px] font-mono font-bold tracking-wider uppercase">
                    {selectedPoster.posterNote}
                  </div>
                )}
                <div className="mt-3 text-xs text-[#422714] leading-relaxed">
                  <strong>Marine Intel:</strong> {selectedPoster.marineNote}
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedPoster(null)}
              className="w-full py-2.5 rounded-xl bg-[#3e2415] text-[#edd9b2] font-serif font-bold text-sm tracking-wider uppercase hover:bg-[#25150c] transition cursor-pointer"
            >
              DISMISS NOTICE
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
