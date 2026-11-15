import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Check, Sparkles } from 'lucide-react';
import { yzwyConfig } from '../config/yzwyConfig';
import { SatinBowSVG } from './RoyalGraphics';

interface FinalSurpriseSectionProps {
  onOpenGift: () => void;
}

export const FinalSurpriseSection: React.FC<FinalSurpriseSectionProps> = ({
  onOpenGift,
}) => {
  const [opened, setOpened] = useState(false);
  const [claimedIds, setClaimedIds] = useState<Record<string, boolean>>({});

  const handleUnbox = () => {
    setOpened(true);
    onOpenGift();
  };

  const toggleClaim = (id: string) => {
    setClaimedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="surprise" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="luxury-card rounded-[2.5rem] px-6 sm:px-12 py-12 sm:py-16 text-center relative overflow-hidden">
          <div className="flex justify-center mb-3">
            <SatinBowSVG className="w-16 h-11" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9E5662] mb-2">
            {yzwyConfig.finalSurprise.kicker}
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#3A232E] text-balance mb-4">
            {yzwyConfig.finalSurprise.heading}
          </h2>
          <p className="text-base text-[#5D3D4B] max-w-xl mx-auto mb-8">
            {yzwyConfig.finalSurprise.prompt}
          </p>

          {!opened ? (
            <motion.button
              type="button"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleUnbox}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#3A232E] via-[#593344] to-[#3A232E] px-8 py-4 text-sm sm:text-base font-semibold text-[#FFF9FB] border border-[#D4AF37]/60 shadow-[0_14px_30px_-10px_rgba(58,35,46,0.5)] cursor-pointer"
            >
              <Gift className="h-5 w-5 text-[#E8C97E]" />
              <span>Open Your Royal Gift</span>
            </motion.button>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-left space-y-4 mt-4"
              >
                <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[#9E5662] mb-6">
                  <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                  <span>Royal Birthday Privileges Unlocked — Click Any Pass to Claim</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {yzwyConfig.finalSurprise.vouchers.map((voucher) => {
                    const isClaimed = Boolean(claimedIds[voucher.id]);
                    return (
                      <button
                        key={voucher.id}
                        type="button"
                        onClick={() => toggleClaim(voucher.id)}
                        className={`text-left rounded-2xl p-5 border transition-all cursor-pointer flex flex-col justify-between ${
                          isClaimed
                            ? 'bg-[#3A232E] text-[#FFF9FB] border-[#D4AF37]'
                            : 'bg-white/95 text-[#3A232E] border-[#EBC7D4] hover:border-[#D4AF37]'
                        }`}
                      >
                        <div>
                          <h3 className="font-serif text-xl font-bold mb-2">
                            {voucher.title}
                          </h3>
                          <p
                            className={`text-xs leading-relaxed mb-4 ${
                              isClaimed ? 'text-[#FDE8EF]' : 'text-[#5D3D4B]'
                            }`}
                          >
                            {voucher.detail}
                          </p>
                        </div>

                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                            isClaimed ? 'text-[#E8C97E]' : 'text-[#9E5662]'
                          }`}
                        >
                          {isClaimed ? (
                            <>
                              <Check className="h-3.5 w-3.5" />
                              <span>Claimed by Her Majesty</span>
                            </>
                          ) : (
                            <span>Claim Pass</span>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
};
