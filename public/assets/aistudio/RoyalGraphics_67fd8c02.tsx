import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const RoyalCrownSVG: React.FC<{ className?: string }> = ({
  className = 'w-16 h-12',
}) => (
  <svg
    viewBox="0 0 120 82"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="crownGold" x1="12" y1="14" x2="108" y2="74" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FAF0C3" />
        <stop offset="42%" stopColor="#E4BE58" />
        <stop offset="75%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#A67A1B" />
      </linearGradient>
      <linearGradient id="crownRose" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFDCE8" />
        <stop offset="100%" stopColor="#E98AA9" />
      </linearGradient>
    </defs>
    <path
      d="M20 58L10 24L38 40L60 14L82 40L110 24L100 58H20Z"
      fill="url(#crownGold)"
      stroke="#9E7617"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <rect
      x="20"
      y="61"
      width="80"
      height="10"
      rx="5"
      fill="url(#crownGold)"
      stroke="#9E7617"
      strokeWidth="1.8"
    />
    <circle cx="60" cy="11" r="5" fill="url(#crownRose)" stroke="#9E7617" strokeWidth="1.4" />
    <circle cx="10" cy="21" r="4" fill="url(#crownRose)" stroke="#9E7617" strokeWidth="1.4" />
    <circle cx="110" cy="21" r="4" fill="url(#crownRose)" stroke="#9E7617" strokeWidth="1.4" />
    <circle cx="60" cy="44" r="5.5" fill="url(#crownRose)" stroke="#FFF9FB" strokeWidth="1.5" />
    <circle cx="38" cy="48" r="3.5" fill="#FFFDFB" />
    <circle cx="82" cy="48" r="3.5" fill="#FFFDFB" />
  </svg>
);

export const SatinBowSVG: React.FC<{ className?: string }> = ({
  className = 'w-14 h-10',
}) => (
  <svg
    viewBox="0 0 120 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="bowPink" x1="10" y1="10" x2="110" y2="70" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFE6EF" />
        <stop offset="50%" stopColor="#F6B5CB" />
        <stop offset="100%" stopColor="#DF83A3" />
      </linearGradient>
    </defs>
    {/* Ribbon tails */}
    <path
      d="M55 42L32 72L45 69L56 46Z"
      fill="#E99AB6"
      stroke="#C66E8D"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M65 42L88 72L75 69L64 46Z"
      fill="#E99AB6"
      stroke="#C66E8D"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    {/* Left & right bow loops */}
    <path
      d="M56 38C40 16 14 14 14 34C14 52 38 50 56 41Z"
      fill="url(#bowPink)"
      stroke="#C66E8D"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M64 38C80 16 106 14 106 34C106 52 82 50 64 41Z"
      fill="url(#bowPink)"
      stroke="#C66E8D"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    {/* Center knot */}
    <rect
      x="51"
      y="30"
      width="18"
      height="18"
      rx="7"
      fill="#FBE4EC"
      stroke="#C66E8D"
      strokeWidth="1.8"
    />
  </svg>
);

export const PearlDivider: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <div className={`flex items-center justify-center gap-3 py-4 ${className}`} aria-hidden="true">
    <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
    <div className="flex items-center gap-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-white to-[#EAD2DA] shadow-sm" />
      <span className="h-2 w-2 rounded-full bg-gradient-to-br from-white to-[#E6C5D0] shadow-sm" />
      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#FFF9E6] to-[#D4AF37] shadow-sm" />
      <span className="h-2 w-2 rounded-full bg-gradient-to-br from-white to-[#E6C5D0] shadow-sm" />
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-white to-[#EAD2DA] shadow-sm" />
    </div>
    <span className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
  </div>
);

export const FloatingSparkles: React.FC = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${(i * 19 + 7) % 94}%`,
        top: `${(i * 29 + 11) % 88}%`,
        size: i % 3 === 0 ? 12 : i % 2 === 0 ? 8 : 6,
        duration: 4 + (i % 5) * 1.1,
        delay: (i % 6) * 0.45,
        kind: i % 4 === 0 ? 'heart' : i % 3 === 0 ? 'pearl' : 'star',
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0.25, y: 0, scale: 0.9 }}
          animate={{
            opacity: [0.2, 0.85, 0.25],
            y: [-10, 14, -10],
            scale: [0.9, 1.15, 0.9],
            rotate: [0, 12, -8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ left: p.left, top: p.top }}
          className="absolute"
        >
          {p.kind === 'star' && (
            <svg width={p.size * 1.4} height={p.size * 1.4} viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
                fill="#E8C97E"
                fillOpacity="0.8"
              />
            </svg>
          )}
          {p.kind === 'pearl' && (
            <div
              style={{ width: p.size, height: p.size }}
              className="rounded-full bg-gradient-to-br from-white via-[#FDE8EF] to-[#E6B8C9] shadow-[0_0_12px_rgba(244,178,202,0.7)]"
            />
          )}
          {p.kind === 'heart' && (
            <svg width={p.size * 1.3} height={p.size * 1.3} viewBox="0 0 24 24" fill="none">
              <path
                d="M12 20.5C12 20.5 4 14.9 4 9.2C4 6.5 6.1 4.5 8.6 4.5C10.2 4.5 11.4 5.3 12 6.4C12.6 5.3 13.8 4.5 15.4 4.5C17.9 4.5 20 6.5 20 9.2C20 14.9 12 20.5 12 20.5Z"
                fill="#F4B2CA"
                fillOpacity="0.55"
              />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};

interface ConfettiBurstProps {
  burstKey: number;
}

export const ConfettiBurst: React.FC<ConfettiBurstProps> = ({ burstKey }) => {
  const pieces = useMemo(() => {
    const colors = ['#D4AF37', '#F4B2CA', '#FDE2EB', '#E9DDFB', '#E8C97E', '#DF83A3'];
    return Array.from({ length: 56 }, (_, i) => {
      const angle = (i / 56) * Math.PI * 2 + (i % 3) * 0.12;
      const distance = 150 + ((i * 37) % 270);
      return {
        id: `${burstKey}-${i}`,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance - 90,
        rotate: ((i * 73) % 720) - 360,
        color: colors[i % colors.length],
        width: 7 + (i % 6),
        height: 10 + (i % 8),
        isCircle: i % 5 === 0,
      };
    });
  }, [burstKey]);

  if (burstKey === 0) return null;

  return (
    <div
      key={burstKey}
      className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {pieces.map((piece) => (
        <motion.span
          key={piece.id}
          initial={{ x: 0, y: 20, scale: 0, opacity: 1, rotate: 0 }}
          animate={{
            x: piece.x,
            y: piece.y + 180,
            scale: [0, 1.15, 0.9],
            opacity: [1, 1, 0],
            rotate: piece.rotate,
          }}
          transition={{ duration: 1.9, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            backgroundColor: piece.color,
            width: piece.width,
            height: piece.isCircle ? piece.width : piece.height,
            borderRadius: piece.isCircle ? '9999px' : '3px',
          }}
          className="absolute shadow-sm"
        />
      ))}
    </div>
  );
};