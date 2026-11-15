import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RefreshCw } from 'lucide-react';
import { yzwyConfig } from '../config/yzwyConfig';

export const RoyalRoastSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [revealedVerdict, setRevealedVerdict] = useState(true);

  const roasts = yzwyConfig.royalRoasts;
  const active = roasts[selectedIndex];

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % roasts.length);
    setRevealedVerdict(true);
  };

  return (
    <section id="roast" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9E5662] mb-2">
              Playful Personal Chronicles
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#3A232E] text-balance">
              Things We Have Officially Noticed
            </h2>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2 self-start md:self-auto rounded-full bg-[#3A232E] text-[#FFF9FB] px-5 py-2.5 text-xs font-semibold border border-[#D4AF37]/50 hover:bg-[#523040] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5 text-[#E8C97E]" />
            <span>Next Observation</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Selector List */}
          <div className="md:col-span-5 flex flex-col gap-3">
            {roasts.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`text-left rounded-2xl px-5 py-4 border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#FFF5F8] border-[#D4AF37] shadow-sm'
                      : 'bg-white/80 border-[#EBC7D4]/70 hover:border-[#D4AF37]/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="font-serif text-lg font-bold text-[#3A232E]">
                      {item.title}
                    </span>
                    <span className="text-xs font-medium text-[#9E5662] whitespace-nowrap">
                      0{idx + 1} · {item.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Spotlight Card */}
          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="luxury-card h-full rounded-[2rem] p-7 sm:p-10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#9E5662] font-medium mb-3">
                    <span>Case File 0{selectedIndex + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span>{active.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3A232E] mb-4">
                    {active.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#4D303E] leading-relaxed mb-6">
                    {active.observation}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#EBC7D4]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {revealedVerdict ? (
                    <p className="font-serif italic text-lg text-[#9E5662]">
                      {active.verdict}
                    </p>
                  ) : (
                    <span className="text-sm text-[#715261]">
                      Her defense statement is hidden
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => setRevealedVerdict((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3A232E] underline decoration-[#D4AF37] underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span>{revealedVerdict ? 'Hide Defense' : 'Reveal Defense'}</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
