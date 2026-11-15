import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles } from 'lucide-react';
import { yzwyConfig } from '../config/yzwyConfig';
import { RoyalCrownSVG } from './RoyalGraphics';

interface RoyalAwardsSectionProps {
  onTriggerSparkle: () => void;
}

export const RoyalAwardsSection: React.FC<RoyalAwardsSectionProps> = ({
  onTriggerSparkle,
}) => {
  const [applauseCounts, setApplauseCounts] = useState<Record<string, number>>(
    () =>
      Object.fromEntries(
        yzwyConfig.royalAwards.map((a) => [a.id, a.initialApplause])
      )
  );

  const handleCelebrateAward = (id: string) => {
    setApplauseCounts((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 0) + 1,
    }));
    onTriggerSparkle();
  };

  return (
    <section id="awards" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex justify-center mb-3">
            <RoyalCrownSVG className="w-12 h-9" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9E5662] mb-2">
            Yzwy's Special Honors
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#3A232E] text-balance">
            Little Awards for an Extraordinary Girl
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {yzwyConfig.royalAwards.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="luxury-card rounded-[2rem] p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-[#9E5662] mb-4">
                  <span>{award.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{award.year}</span>
                </div>

                <div className="h-11 w-11 rounded-2xl bg-[#FFF5F8] border border-[#D4AF37]/35 flex items-center justify-center mb-5">
                  <Award className="h-5 w-5 text-[#D4AF37]" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#3A232E] mb-3">
                  {award.title}
                </h3>
                <p className="text-sm text-[#5D3D4B] leading-relaxed mb-6">
                  {award.citation}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EBC7D4]/70 flex items-center justify-between gap-3">
                <span className="font-mono text-xs tabular-nums text-[#715261]">
                  {applauseCounts[award.id]} Cheers
                </span>
                <button
                  type="button"
                  onClick={() => handleCelebrateAward(award.id)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF5F8] border border-[#D4AF37]/50 px-4 py-2 text-xs font-semibold text-[#3A232E] hover:bg-[#3A232E] hover:text-[#FFF9FB] transition-all whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span>Send Cheers</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
