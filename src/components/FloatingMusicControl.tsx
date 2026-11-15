import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Music, Pause, Play } from 'lucide-react';

interface FloatingMusicControlProps {
  isPlaying: boolean;
  hasStarted: boolean;
  autoplayBlocked: boolean;
  onToggleMusic: () => void;
  onTapToPlay: () => void;
}

export const FloatingMusicControl: React.FC<FloatingMusicControlProps> = ({
  isPlaying,
  hasStarted,
  autoplayBlocked,
  onToggleMusic,
  onTapToPlay,
}) => {
  const prefersReduced = useReducedMotion();

  const actionLabel = isPlaying
    ? 'Pause La Vie En Rose – Emily Watts'
    : hasStarted
      ? 'Resume La Vie En Rose – Emily Watts'
      : 'Play La Vie En Rose – Emily Watts';

  return (
    <div
      data-music-control="true"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5"
    >
      <AnimatePresence>
        {autoplayBlocked && !isPlaying && (
          <motion.button
            type="button"
            initial={{ opacity: 0, x: 12, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={onTapToPlay}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF5F8] via-[#FFFFFF] to-[#FDE8EF] border border-[#D4AF37]/50 px-4 py-2.5 min-h-[44px] text-xs font-semibold text-[#9E5662] shadow-[0_12px_28px_-10px_rgba(158,86,98,0.35)] hover:border-[#D4AF37] hover:text-[#3A232E] transition-all cursor-pointer whitespace-nowrap"
          >
            <Music className="h-3.5 w-3.5 text-[#C9868D]" />
            <span>Tap to Play ♡</span>
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={onToggleMusic}
        aria-label={actionLabel}
        aria-pressed={isPlaying}
        title="La Vie En Rose – Emily Watts"
        whileHover={prefersReduced ? undefined : { scale: 1.05 }}
        whileTap={prefersReduced ? undefined : { scale: 0.96 }}
        className={`relative inline-flex items-center justify-center gap-1.5 rounded-full min-h-[44px] min-w-[44px] px-3.5 border transition-all cursor-pointer shadow-[0_12px_28px_-8px_rgba(58,35,46,0.28)] ${
          isPlaying
            ? 'bg-gradient-to-br from-[#3A232E] to-[#593344] text-[#FFF9FB] border-[#D4AF37]/70'
            : 'bg-gradient-to-br from-[#FFF9FB] to-[#FDE8EF] text-[#3A232E] border-[#C9868D]/60 hover:border-[#D4AF37]'
        }`}
      >
        {/* Subtle active glow ring when playing */}
        {isPlaying && !prefersReduced && (
          <motion.span
            aria-hidden="true"
            animate={{ scale: [1, 1.22, 1], opacity: [0.45, 0, 0.45] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute inset-0 rounded-full border border-[#E8C97E]/70"
          />
        )}

        <Music
          className={`h-4 w-4 shrink-0 ${
            isPlaying ? 'text-[#E8C97E]' : 'text-[#9E5662]'
          }`}
        />

        {isPlaying ? (
          <span className="flex items-end gap-0.5 h-3" aria-hidden="true">
            {[0, 1, 2].map((bar) => (
              <motion.span
                key={bar}
                animate={
                  prefersReduced
                    ? { height: '8px' }
                    : { height: ['4px', '12px', '5px'] }
                }
                transition={{
                  duration: 0.9 + bar * 0.18,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: bar * 0.15,
                }}
                className="w-0.5 rounded-full bg-[#E8C97E]"
              />
            ))}
          </span>
        ) : (
          <span className="sr-only">{actionLabel}</span>
        )}

        <span className="hidden sm:inline text-[11px] font-semibold tracking-wide whitespace-nowrap">
          {isPlaying ? (
            <span className="inline-flex items-center gap-1">
              <Pause className="h-3 w-3 text-[#E8C97E]" />
              <span>La Vie En Rose</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1">
              <Play className="h-3 w-3 text-[#9E5662]" />
              <span>{hasStarted ? 'Resume' : 'Music'}</span>
            </span>
          )}
        </span>
      </motion.button>
    </div>
  );
};
