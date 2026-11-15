import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { yzwyConfig } from '../config/yzwyConfig';
import { PearlDivider } from './RoyalGraphics';
import { WishItem } from './WishesPage';

interface WishesPreviewSectionProps {
  wishes: WishItem[];
  onOpenWishes: () => void;
}

export const WishesPreviewSection: React.FC<WishesPreviewSectionProps> = ({
  wishes,
  onOpenWishes,
}) => {
  const previewWishes = wishes.slice(0, 2);

  return (
    <section
      id="wishes-preview"
      className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#FFF9FB] via-[#F9F2FE]/60 to-[#FFF9FB]"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9E5662] mb-2">
            {yzwyConfig.heartfelt.kicker}
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#3A232E] text-balance mb-4">
            {yzwyConfig.heartfelt.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#5D3D4B] leading-relaxed">
            {yzwyConfig.heartfelt.tribute}
          </p>
          <PearlDivider className="mt-4 pb-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {previewWishes.map((wish, idx) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="luxury-card rounded-[1.75rem] p-6 sm:p-7 flex flex-col justify-between"
            >
              <p className="font-serif italic text-xl text-[#3A232E] leading-relaxed mb-4">
                “{wish.message}”
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9E5662]">
                — {wish.author}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenWishes}
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#3A232E] via-[#593344] to-[#3A232E] px-7 py-3.5 text-sm font-semibold text-[#FFF9FB] border border-[#D4AF37]/55 shadow-[0_12px_28px_-10px_rgba(58,35,46,0.45)] hover:shadow-[0_16px_34px_-10px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
          >
            <Heart className="h-4 w-4 text-[#F4B2CA]" />
            <span>Read All Wishes</span>
            <ArrowRight className="h-4 w-4 text-[#E8C97E]" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
