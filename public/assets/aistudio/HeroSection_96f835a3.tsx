import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowDown, Crown } from 'lucide-react';
import { yzwyConfig } from '../config/yzwyConfig';
import {
  FloatingSparkles,
  PearlDivider,
  RoyalCrownSVG,
  SatinBowSVG,
} from './RoyalGraphics';

interface HeroSectionProps {
  onEnterCelebration: () => void;
}

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetIso: string): CountdownState {
  const diff = Math.max(0, new Date(targetIso).getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onEnterCelebration,
}) => {
  const [titleIdx, setTitleIdx] = useState(0);
  const [countdown, setCountdown] = useState<CountdownState>(() =>
    getTimeLeft(yzwyConfig.brand.nextBirthdayIso)
  );
  const [showCountdownMode, setShowCountdownMode] = useState(
    !yzwyConfig.brand.celebrationMode
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % yzwyConfig.hero.rotatingTitles.length);
    }, 2600);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getTimeLeft(yzwyConfig.brand.nextBirthdayIso));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const currentTitle = yzwyConfig.hero.rotatingTitles[titleIdx];

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6"
    >
      {/* Dreamy Luxury Mesh Gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(250,210,225,0.65),transparent_48%),radial-gradient(circle_at_82%_24%,rgba(233,221,251,0.58),transparent_45%),radial-gradient(circle_at_50%_82%,rgba(246,227,166,0.34),transparent_50%)]"
      />
      <FloatingSparkles />

      {/* Decorative Corner Ribbons */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -8, 0], rotate: [-4, 2, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none hidden lg:block absolute left-10 top-32 opacity-80"
      >
        <SatinBowSVG className="w-20 h-14 drop-shadow-sm" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 8, 0], rotate: [5, -2, 5] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none hidden lg:block absolute right-12 top-36 opacity-80"
      >
        <SatinBowSVG className="w-20 h-14 drop-shadow-sm" />
      </motion.div>

      {/* Main Royal Editorial Card */}
      <div className="relative z-10 mx-auto max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
          className="luxury-card rounded-[2.5rem] px-6 sm:px-12 py-12 sm:py-16 relative overflow-hidden"
        >
          {/* Soft Pearl Frame Line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 rounded-[2rem] border border-[#D4AF37]/25"
          />

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#FFF5F8]/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9E5662] mb-6 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span>{yzwyConfig.hero.royalGreetingBadge}</span>
          </div>

          {/* Animated Floating Crown */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-auto mb-3 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-[#F6E3A6]/45 blur-xl" />
              <RoyalCrownSVG className="relative w-20 h-14 sm:w-24 sm:h-16 drop-shadow-[0_6px_14px_rgba(212,175,55,0.38)]" />
            </div>
          </motion.div>

          {/* Script Accent */}
          <p className="font-script text-3xl sm:text-4xl text-[#B96B7B] mb-2">
            Her Royal Highness
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.04em] leading-[1.06] gold-shimmer-text mb-4">
            {yzwyConfig.hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="font-serif italic text-xl sm:text-2xl text-[#5D3D4B] mb-6">
            “{yzwyConfig.hero.subheadline}”
          </p>

          {/* Rotating Titles Pill */}
          <div className="flex flex-col items-center justify-center mb-8">
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#9E5662] mb-2">
              Currently Reigning As
            </span>
            <div className="h-11 flex items-center justify-center overflow-hidden rounded-full border border-[#F4B2CA]/70 bg-gradient-to-r from-[#FFF5F8] via-[#FFFFFF] to-[#F5EEFF] px-6 min-w-[270px] sm:min-w-[330px] shadow-inner">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTitle}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 font-serif text-lg sm:text-xl font-semibold text-[#3A232E]"
                >
                  <Crown className="h-4 w-4 text-[#D4AF37]" />
                  <span>{currentTitle}</span>
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive Birthday Greeting / Countdown Toggle */}
          <div className="mx-auto max-w-lg rounded-2xl border border-[#EBC7D4] bg-[#FFF8FA]/90 p-4 mb-8">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9E5662]">
                {showCountdownMode ? 'Next Coronation Countdown' : 'Royal Day Status'}
              </span>
              <button
                type="button"
                onClick={() => setShowCountdownMode((prev) => !prev)}
                className="text-[11px] font-medium underline decoration-[#D4AF37] underline-offset-4 text-[#715261] hover:text-[#3A232E] cursor-pointer"
              >
                {showCountdownMode ? 'Show Birthday Greeting' : 'Preview Next Countdown'}
              </button>
            </div>

            {showCountdownMode ? (
              <div className="grid grid-cols-4 gap-2 pt-1">
                {[
                  { label: 'Days', val: countdown.days },
                  { label: 'Hours', val: countdown.hours },
                  { label: 'Mins', val: countdown.minutes },
                  { label: 'Secs', val: countdown.seconds },
                ].map((unit) => (
                  <div
                    key={unit.label}
                    className="rounded-xl bg-white border border-[#F2D5DF] py-2 shadow-2xs"
                  >
                    <div className="font-serif text-xl sm:text-2xl font-bold text-[#3A232E]">
                      {String(unit.val).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-[#9E5662]">
                      {unit.label}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm sm:text-base font-medium text-[#4D303E]">
                🎂{' '}
                <span className="font-semibold text-[#9E5662]">
                  Happy Birthday, The Birthday Queen!
                </span>{' '}
                All royal privileges are officially active today.
              </p>
            )}
          </div>

          {/* CTA Button */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onEnterCelebration}
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#3A232E] via-[#593344] to-[#3A232E] px-8 py-4 text-sm sm:text-base font-semibold text-[#FFF9FB] shadow-[0_14px_30px_-10px_rgba(58,35,46,0.55)] border border-[#D4AF37]/50 hover:shadow-[0_18px_36px_-10px_rgba(212,175,55,0.45)] transition-all cursor-pointer"
          >
            <span>{yzwyConfig.hero.ctaLabel}</span>
            <ArrowDown className="h-4 w-4 text-[#E8C97E]" />
          </motion.button>

          <PearlDivider className="mt-6 pb-0" />
        </motion.div>
      </div>
    </section>
  );
};