import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollText, Check } from 'lucide-react';
import { yzwyConfig } from '../config/yzwyConfig';
import { PearlDivider, SatinBowSVG } from './RoyalGraphics';

export const BirthdayMessageSection: React.FC = () => {
  const [sealedByRecipient, setSealedByRecipient] = useState(false);

  return (
    <section
      id="royal-message"
      className="relative py-20 sm:py-24 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="luxury-card rounded-[2rem] px-6 sm:px-14 py-12 sm:py-16 relative"
        >
          <div className="flex flex-col items-center text-center mb-8">
            <SatinBowSVG className="w-16 h-11 mb-3" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9E5662] mb-2">
              {yzwyConfig.birthdayMessage.kicker}
            </p>
            <p className="font-script text-3xl sm:text-4xl text-[#B96B7B] mb-1">
              {yzwyConfig.birthdayMessage.scriptTitle}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3A232E] text-balance">
              {yzwyConfig.birthdayMessage.heading}
            </h2>
            <PearlDivider className="mt-2 pb-0" />
          </div>

          <div className="mx-auto max-w-2xl space-y-5 text-base sm:text-[17px] leading-relaxed text-[#4D303E]">
            <p className="font-serif italic text-xl sm:text-2xl font-bold text-[#3A232E]">
              {yzwyConfig.birthdayMessage.salutation}
            </p>
            {yzwyConfig.birthdayMessage.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <p className="font-bold text-[#3A232E]">
              {yzwyConfig.birthdayMessage.closingLine}
            </p>
            <div className="pt-2 space-y-1">
              <p>{yzwyConfig.birthdayMessage.closingWish}</p>
              <p className="italic font-serif text-lg text-[#9E5662]">
                {yzwyConfig.birthdayMessage.signature}
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-2xl mt-10 pt-6 border-t border-[#EBC7D4]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-[#715261]">
                {yzwyConfig.birthdayMessage.dateStamp}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSealedByRecipient((prev) => !prev)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                sealedByRecipient
                  ? 'bg-[#3A232E] text-[#FFF9FB] border-[#D4AF37]'
                  : 'bg-[#FFF5F8] text-[#3A232E] border-[#D4AF37]/45 hover:bg-[#FDE8EF]'
              }`}
            >
              {sealedByRecipient ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[#E8C97E]" />
                  <span>Royal Decree Accepted</span>
                </>
              ) : (
                <>
                  <ScrollText className="h-3.5 w-3.5 text-[#9E5662]" />
                  <span>Accept Royal Decree</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
