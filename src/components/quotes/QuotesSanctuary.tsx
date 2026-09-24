import React, { useState } from 'react';
import { POPULAR_QUOTES, QuoteItem } from '../../data/quotesData';
import { sound } from '../../audio/soundEngine';
import { Quote, Sparkles, Copy, Check, Compass, Heart, Flame, Shield } from 'lucide-react';

export const QuotesSanctuary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['ALL', 'Freedom & Dreams', 'Justice & Truth', 'Comradeship & Sacrifice', 'Honor & Resolve'];

  const filteredQuotes = selectedCategory === 'ALL'
    ? POPULAR_QUOTES
    : POPULAR_QUOTES.filter((q) => q.category === selectedCategory);

  const handleCopyQuote = (item: QuoteItem) => {
    sound.playClick(800, 0.1);
    navigator.clipboard.writeText(`"${item.quote}" — ${item.speaker} (${item.speakerRole})`);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="quotes" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
          <Quote className="w-3.5 h-3.5" />
          <span>WORDS THAT SHAPED AN ERA</span>
        </div>

        <h2 className="font-cinzelDeco text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider">
          POPULAR & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">MOTIVATIONAL QUOTES</span>
        </h2>

        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-medium">
          Timeless wisdom, unbroken wills, and philosophical roars spoken across 25 years of adventure on the Grand Line.
        </p>

        {/* Category Pills */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playHover();
                setSelectedCategory(cat);
              }}
              data-cursor="pointer"
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/30 font-black scale-105'
                  : 'bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:border-amber-400/50 hover:text-white'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Quotes Masonry/Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuotes.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => sound.playHover()}
            className="group relative rounded-3xl p-6 sm:p-7 bg-slate-950/85 border border-white/10 hover:border-amber-400/60 shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            style={{
              boxShadow: `0 10px 30px -15px ${item.accentColor}40`
            }}
          >
            {/* Top Speaker Identity Banner */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl overflow-hidden border-2 shrink-0 bg-black/60 shadow-md flex items-center justify-center"
                    style={{ borderColor: item.accentColor }}
                  >
                    <img
                      src={item.speakerImage}
                      alt={item.speaker}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.speaker}
                    </h3>
                    <div className="text-[11px] font-mono text-slate-400">
                      {item.speakerRole}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopyQuote(item)}
                  title="Copy Quote"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-amber-400 transition"
                >
                  {copiedId === item.id ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Category & Arc Tag */}
              <div className="flex items-center gap-2 mb-4 text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-amber-300 font-bold uppercase">
                  {item.category}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 uppercase">{item.arc}</span>
              </div>

              {/* The Quote */}
              <div className="relative pl-6 mb-5">
                <Quote className="absolute left-0 top-0 w-4 h-4 text-amber-400/50" />
                <blockquote className="font-serif italic text-base sm:text-lg text-slate-100 leading-relaxed">
                  "{item.quote}"
                </blockquote>
                {item.japaneseQuote && (
                  <p className="mt-2 text-xs font-sans text-slate-400/80 leading-normal">
                    {item.japaneseQuote}
                  </p>
                )}
              </div>
            </div>

            {/* Motivational Life Takeaway */}
            <div className="pt-4 border-t border-white/10 mt-auto">
              <div className="text-[9px] font-mono text-amber-400 uppercase tracking-widest font-black mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>LIFE LESSON & MOTIVATION</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans bg-white/5 p-3 rounded-xl border border-white/5">
                {item.motivationLesson}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
