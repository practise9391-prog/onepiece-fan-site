import React, { useState } from 'react';
import { DEVIL_FRUITS, DevilFruit, FruitType } from '../../data/devilFruitsData';
import { sound } from '../../audio/soundEngine';
import { Sparkles, Zap, Flame, Shield, HelpCircle, X, ChevronRight } from 'lucide-react';

export const DevilFruitGallery: React.FC = () => {
  const [selectedType, setSelectedType] = useState<FruitType | 'ALL'>('ALL');
  const [activeFruit, setActiveFruit] = useState<DevilFruit | null>(null);

  const types: (FruitType | 'ALL')[] = ['ALL', 'Paramecia', 'Zoan', 'Logia'];

  const filteredFruits = selectedType === 'ALL'
    ? DEVIL_FRUITS
    : DEVIL_FRUITS.filter((f) => f.type === selectedType);

  const handleFruitClick = (fruit: DevilFruit) => {
    sound.playClick(620, 0.1);
    if (fruit.type === 'Logia') {
      sound.playFireBurst();
    } else {
      sound.playThunder();
    }
    setActiveFruit(fruit);
  };

  return (
    <section id="devil-fruits" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MYSTICAL ARTIFACTS OF THE SEA</span>
        </div>

        <h2 className="font-cinzelDeco text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider">
          DEVIL FRUIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">ENCYCLOPEDIA</span>
        </h2>

        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-medium">
          The incarnation of the Sea Devils. Explore the three supreme classifications: Paramecia, Zoan, and Logia.
        </p>

        {/* Category Filters */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => {
                sound.playHover();
                setSelectedType(type);
              }}
              data-cursor="pointer"
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition ${
                selectedType === type
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/30 font-black scale-105'
                  : 'bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:border-amber-400/50 hover:text-white'
              }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* 3D-styled Fruit Pedestals */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredFruits.map((fruit) => (
          <div
            key={fruit.id}
            onClick={() => handleFruitClick(fruit)}
            onMouseEnter={() => sound.playHover()}
            data-cursor="pointer"
            className="group relative rounded-3xl p-6 bg-slate-950/80 border border-white/10 hover:border-amber-400/60 shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden"
            style={{
              boxShadow: `0 10px 30px -10px ${fruit.themeGlow}`
            }}
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider">
                {fruit.type}
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase">
                {fruit.subType || 'CANON'}
              </span>
            </div>

            {/* 3D Swirling Fruit Orb Canvas Representation */}
            <div className="relative w-32 h-32 mx-auto my-4 flex items-center justify-center">
              {/* Outer Glow Halo */}
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-tr ${fruit.gradient} blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 animate-pulse`}
              />

              {/* 3D Sphere with custom spirals */}
              <div
                className={`w-24 h-24 rounded-full bg-gradient-to-tr ${fruit.gradient} border-2 border-white/40 shadow-inner flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-700`}
              >
                {/* Spiral swirls pattern inside fruit */}
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-white/50 animate-spin-slow flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-white/60" />
                </div>
              </div>
            </div>

            {/* Title & Info */}
            <div className="mt-4 text-center">
              <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                {fruit.name}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1 italic truncate">
                "{fruit.romanized}"
              </p>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 truncate">
                  User: <strong className="text-slate-200">{fruit.user.split(' ')[0]}</strong>
                </span>
                <span className="text-amber-400 font-bold flex items-center gap-0.5">
                  <span>INSPECT</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Fruit Inspector Modal */}
      {activeFruit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-xl bg-slate-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase text-amber-400 font-bold">
                  {activeFruit.type} {activeFruit.subType && `• ${activeFruit.subType}`}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-0.5">
                  {activeFruit.name}
                </h3>
                <div className="text-xs font-mono text-slate-400 italic">
                  {activeFruit.japaneseName} ({activeFruit.romanized})
                </div>
              </div>

              <button
                onClick={() => setActiveFruit(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-6 space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                  CURRENT USER & LINEAGE
                </div>
                <div className="font-bold text-base text-amber-300 mt-1">
                  {activeFruit.user}
                </div>
                {activeFruit.previousUser && (
                  <div className="text-xs text-slate-400 mt-0.5">
                    Previous User: {activeFruit.previousUser}
                  </div>
                )}
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                  SPECIAL ABILITY
                </div>
                <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                  {activeFruit.abilityDescription}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold">
                  AWAKENING STATUS
                </div>
                <p className="text-xs sm:text-sm text-amber-200 mt-1 leading-relaxed font-medium">
                  {activeFruit.awakeningStatus}
                </p>
              </div>

              {/* Signature Attacks */}
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-bold">
                  SIGNATURE ATTACKS & COMBAT APPLICATIONS
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeFruit.signatureAttacks.map((attack) => (
                    <span
                      key={attack}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200"
                    >
                      {attack}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveFruit(null)}
              className="w-full py-2.5 rounded-xl bg-amber-400 text-black font-cinzel font-bold text-sm tracking-wider uppercase hover:bg-amber-300 transition"
            >
              CLOSE FRUIT DOSSIER
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

