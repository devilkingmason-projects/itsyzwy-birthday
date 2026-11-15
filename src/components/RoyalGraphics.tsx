import React, { useEffect, useMemo, useState } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';

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

export const RosePetalSVG: React.FC<{
  className?: string;
  tone?: 'blush' | 'rose' | 'ivory';
}> = ({ className = 'w-4 h-4', tone = 'blush' }) => {
  const fills = {
    blush: ['#FFEBF2', '#F7BCD1'],
    rose: ['#FFD9E6', '#EB9CB8'],
    ivory: ['#FFF8FA', '#FAD7E4'],
  };
  const [light, deep] = fills[tone];

  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`petal-${tone}`} x1="4" y1="3" x2="24" y2="25" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={light} />
          <stop offset="100%" stopColor={deep} />
        </linearGradient>
      </defs>
      <path
        d="M14.5 3C20.5 4.2 24.5 9.8 23.2 16.4C22 22.3 15.8 25.6 10.2 23.8C5.2 22.1 3.4 16.2 6.2 10.6C8.1 6.7 11.4 3.6 14.5 3Z"
        fill={`url(#petal-${tone})`}
        fillOpacity="0.82"
      />
    </svg>
  );
};

export const AngelWingSVG: React.FC<{ className?: string }> = ({
  className = 'w-14 h-9',
}) => (
  <svg
    viewBox="0 0 96 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="angelWingGlow" x1="8" y1="8" x2="88" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
        <stop offset="55%" stopColor="#FBF3D9" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#FDE8EF" stopOpacity="0.35" />
      </linearGradient>
    </defs>
    {/* Left wing */}
    <path
      d="M44 36C34 22 18 10 6 12C12 20 14 24 8 27C16 31 20 33 15 37C24 38 33 38 44 36Z"
      fill="url(#angelWingGlow)"
      stroke="#E8C97E"
      strokeOpacity="0.45"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    {/* Right wing */}
    <path
      d="M52 36C62 22 78 10 90 12C84 20 82 24 88 27C80 31 76 33 81 37C72 38 63 38 52 36Z"
      fill="url(#angelWingGlow)"
      stroke="#E8C97E"
      strokeOpacity="0.45"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
);

export const FloatingBowWithTrail: React.FC<{
  className?: string;
  bowClassName?: string;
  direction?: 'left' | 'right';
  duration?: number;
}> = ({
  className = '',
  bowClassName = 'w-20 h-14 drop-shadow-sm',
  direction = 'left',
  duration = 6.2,
}) => {
  const prefersReduced = useReducedMotion();

  const trailOffsets = useMemo(
    () => [
      { x: direction === 'left' ? -18 : 18, y: 14, size: 5, delay: 0 },
      { x: direction === 'left' ? -30 : 30, y: 24, size: 4, delay: 0.35 },
      { x: direction === 'left' ? -10 : 10, y: 28, size: 3.5, delay: 0.7 },
      { x: direction === 'left' ? -40 : 40, y: 34, size: 3, delay: 1.05 },
    ],
    [direction]
  );

  return (
    <div className={`relative inline-block ${className}`} aria-hidden="true">
      {/* Golden dust trail particles behind the bow */}
      {trailOffsets.map((dot, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0.25, scale: 0.8 }}
          animate={
            prefersReduced
              ? { opacity: 0.45 }
              : {
                  opacity: [0.1, 0.85, 0.1],
                  scale: [0.65, 1.25, 0.65],
                  y: [dot.y, dot.y + 10, dot.y],
                  x: [dot.x, dot.x + (direction === 'left' ? -6 : 6), dot.x],
                }
          }
          transition={{
            duration: 2.8 + idx * 0.45,
            delay: dot.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            width: dot.size,
            height: dot.size,
            left: '50%',
            top: '50%',
          }}
          className="absolute rounded-full bg-gradient-to-br from-[#FFF7D6] via-[#E8C97E] to-[#D4AF37] shadow-[0_0_8px_rgba(232,201,126,0.85)]"
        />
      ))}

      <motion.div
        animate={
          prefersReduced
            ? undefined
            : {
                y: [0, -9, 0],
                x: direction === 'left' ? [0, 5, 0] : [0, -5, 0],
                rotate: direction === 'left' ? [-4, 2, -4] : [5, -2, 5],
              }
        }
        transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      >
        <SatinBowSVG className={bowClassName} />
      </motion.div>
    </div>
  );
};

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
  const prefersReduced = useReducedMotion();
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${(i * 19 + 7) % 94}%`,
        top: `${(i * 29 + 11) % 88}%`,
        size: i % 3 === 0 ? 12 : i % 2 === 0 ? 8 : 6,
        duration: 4.5 + (i % 5) * 1.1,
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
          initial={{ opacity: 0.35, y: 0, scale: 0.92 }}
          animate={
            prefersReduced
              ? { opacity: 0.4 }
              : {
                  opacity: [0.2, 0.85, 0.25],
                  y: [-10, 14, -10],
                  scale: [0.9, 1.15, 0.9],
                  rotate: [0, 12, -8, 0],
                }
          }
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

const burstLocations = [
  { left: '12%', top: '24%' },
  { left: '84%', top: '32%' },
  { left: '14%', top: '68%' },
  { left: '86%', top: '74%' },
];

export const FairytaleAmbientBackground: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [burstTick, setBurstTick] = useState(0);

  // Layered parallax transforms
  const farLayerY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const midLayerY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const nearLayerY = useTransform(scrollYProgress, [0, 1], [0, -210]);

  useEffect(() => {
    if (prefersReduced) return;
    const interval = window.setInterval(() => {
      setBurstTick((t) => t + 1);
    }, 9500);
    return () => window.clearInterval(interval);
  }, [prefersReduced]);

  // 1. Magical Sparkles (champagne-gold & white glitter)
  const glitterParticles = useMemo(
    () =>
      [
        { left: '6%', top: '16%', size: 4, gold: true, duration: 3.4, delay: 0.2 },
        { left: '14%', top: '38%', size: 3, gold: false, duration: 4.1, delay: 1.1 },
        { left: '9%', top: '62%', size: 4, gold: true, duration: 3.8, delay: 0.7 },
        { left: '18%', top: '82%', size: 3, gold: false, duration: 4.4, delay: 1.8 },
        { left: '88%', top: '18%', size: 4, gold: true, duration: 3.6, delay: 0.5 },
        { left: '93%', top: '42%', size: 3, gold: false, duration: 4.2, delay: 1.4 },
        { left: '84%', top: '64%', size: 4, gold: true, duration: 3.9, delay: 0.9 },
        { left: '91%', top: '86%', size: 3, gold: false, duration: 4.5, delay: 2.1 },
        { left: '26%', top: '12%', size: 3, gold: true, duration: 4.0, delay: 0.4 },
        { left: '74%', top: '14%', size: 3, gold: false, duration: 3.7, delay: 1.6 },
        { left: '34%', top: '89%', size: 3, gold: true, duration: 4.3, delay: 1.2 },
        { left: '68%', top: '91%', size: 4, gold: false, duration: 3.5, delay: 0.8 },
      ],
    []
  );

  // 2. Floating Hearts (translucent pink & rose-gold drifting upward)
  const floatingHearts = useMemo(
    () => [
      { left: '5%', top: '76%', size: 13, roseGold: false, duration: 15, delay: 0 },
      { left: '13%', top: '88%', size: 11, roseGold: true, duration: 18, delay: 3 },
      { left: '86%', top: '80%', size: 14, roseGold: false, duration: 16, delay: 1.5 },
      { left: '93%', top: '72%', size: 10, roseGold: true, duration: 19, delay: 4.5 },
      { left: '22%', top: '92%', size: 11, roseGold: false, duration: 17, delay: 6 },
      { left: '78%', top: '90%', size: 12, roseGold: true, duration: 20, delay: 2.5 },
    ],
    []
  );

  // 3. Fairy Dust (glowing curved-path particles)
  const fairyDust = useMemo(
    () => [
      { left: '8%', top: '26%', size: 5, duration: 12, delay: 0 },
      { left: '16%', top: '54%', size: 4, duration: 14, delay: 2.2 },
      { left: '82%', top: '28%', size: 5, duration: 13, delay: 1.1 },
      { left: '90%', top: '58%', size: 4, duration: 15, delay: 3.4 },
      { left: '11%', top: '78%', size: 4, duration: 13.5, delay: 4.0 },
      { left: '88%', top: '82%', size: 5, duration: 14.5, delay: 1.8 },
    ],
    []
  );

  // 4. Falling Rose Petals (soft pink rotating petals drifting down)
  const rosePetals = useMemo(
    () => [
      { left: '7%', top: '-4%', tone: 'blush' as const, duration: 17, delay: 0.4 },
      { left: '18%', top: '-6%', tone: 'rose' as const, duration: 20, delay: 4.2 },
      { left: '81%', top: '-5%', tone: 'ivory' as const, duration: 18, delay: 1.8 },
      { left: '92%', top: '-4%', tone: 'blush' as const, duration: 21, delay: 6.0 },
      { left: '28%', top: '-5%', tone: 'ivory' as const, duration: 22, delay: 8.5 },
      { left: '72%', top: '-6%', tone: 'rose' as const, duration: 19, delay: 3.1 },
    ],
    []
  );

  // 5. Shimmering Four-Point Golden Stars
  const shimmerStars = useMemo(
    () => [
      { left: '4%', top: '30%', size: 12, duration: 5.2, delay: 0.3 },
      { left: '15%', top: '48%', size: 9, duration: 4.6, delay: 1.7 },
      { left: '8%', top: '72%', size: 11, duration: 5.8, delay: 2.4 },
      { left: '94%', top: '24%', size: 12, duration: 5.0, delay: 0.9 },
      { left: '85%', top: '46%', size: 9, duration: 4.8, delay: 2.1 },
      { left: '91%', top: '70%', size: 11, duration: 5.5, delay: 1.2 },
    ],
    []
  );

  // 6. Floating Pearls
  const floatingPearls = useMemo(
    () => [
      { left: '6%', top: '20%', size: 7, duration: 16, delay: 0 },
      { left: '88%', top: '36%', size: 8, duration: 18, delay: 2.5 },
      { left: '12%', top: '66%', size: 6, duration: 15, delay: 4.2 },
      { left: '83%', top: '78%', size: 7, duration: 17, delay: 1.4 },
      { left: '24%', top: '86%', size: 6, duration: 19, delay: 3.1 },
    ],
    []
  );

  // 7. Ambient Angel-Wing Silhouettes (far parallax layer)
  const angelWings = useMemo(
    () => [
      { left: '5%', top: '42%', scale: 0.9, duration: 11, delay: 0 },
      { left: '86%', top: '52%', scale: 0.85, duration: 12.5, delay: 2.5 },
    ],
    []
  );

  // 8. Ambient Floating Pink Bows with Golden Dust Trails
  const ambientBows = useMemo(
    () => [
      { left: '3%', top: '52%', direction: 'left' as const, duration: 7.4, className: 'w-14 h-10 opacity-50' },
      { left: '89%', top: '64%', direction: 'right' as const, duration: 8.2, className: 'w-14 h-10 opacity-50' },
    ],
    []
  );

  const activeBurst = burstLocations[burstTick % burstLocations.length];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Layer 1 (Far): Soft Angel Glow Halos & Angel-Wing Silhouettes */}
      <motion.div
        style={{ y: prefersReduced ? 0 : farLayerY }}
        className="absolute inset-0"
      >
        <div className="absolute -left-24 top-1/5 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(251,243,217,0.55),rgba(250,210,225,0.18)_55%,transparent_75%)] blur-2xl" />
        <div className="absolute -right-24 top-2/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(244,178,202,0.32),rgba(233,221,251,0.22)_55%,transparent_75%)] blur-2xl" />

        {angelWings.map((wing, idx) => (
          <motion.div
            key={`wing-${idx}`}
            style={{ left: wing.left, top: wing.top, scale: wing.scale }}
            animate={
              prefersReduced
                ? { opacity: 0.22 }
                : {
                    opacity: [0.14, 0.34, 0.14],
                    y: [-8, 10, -8],
                    rotate: [-3, 3, -3],
                  }
            }
            transition={{
              duration: wing.duration,
              delay: wing.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="hidden md:block absolute drop-shadow-[0_0_16px_rgba(246,227,166,0.55)]"
          >
            <AngelWingSVG className="w-16 h-10" />
          </motion.div>
        ))}

        {/* Shimmering Four-Point Golden Stars */}
        {shimmerStars.map((star, idx) => (
          <motion.div
            key={`star-${idx}`}
            style={{ left: star.left, top: star.top }}
            animate={
              prefersReduced
                ? { opacity: 0.45 }
                : {
                    opacity: [0.15, 0.85, 0.15],
                    scale: [0.7, 1.2, 0.7],
                    rotate: [0, 35, 0],
                  }
            }
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute"
          >
            <svg width={star.size} height={star.size} viewBox="0 0 24 24" fill="none">
              <path
                d="M12 1.5L14.5 9.5L22.5 12L14.5 14.5L12 22.5L9.5 14.5L1.5 12L9.5 9.5L12 1.5Z"
                fill="#E8C97E"
              />
            </svg>
          </motion.div>
        ))}
      </motion.div>

      {/* Layer 2 (Mid): Magical Sparkles, Fairy Dust, Floating Hearts & Pearls */}
      <motion.div
        style={{ y: prefersReduced ? 0 : midLayerY }}
        className="absolute inset-0"
      >
        {/* Magical Champagne-Gold & White Glitter Sparkles */}
        {glitterParticles.map((dot, idx) => (
          <motion.span
            key={`glitter-${idx}`}
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
            }}
            animate={
              prefersReduced
                ? { opacity: 0.45 }
                : {
                    opacity: [0.1, 0.95, 0.1],
                    scale: [0.6, 1.35, 0.6],
                  }
            }
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={`absolute rounded-full ${
              dot.gold
                ? 'bg-[#FAF0C3] shadow-[0_0_8px_rgba(212,175,55,0.8)]'
                : 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.95)]'
            }`}
          />
        ))}

        {/* Fairy Dust Following Soft Curved Paths */}
        {fairyDust.map((dust, idx) => (
          <motion.span
            key={`dust-${idx}`}
            style={{
              left: dust.left,
              top: dust.top,
              width: dust.size,
              height: dust.size,
            }}
            animate={
              prefersReduced
                ? { opacity: 0.4 }
                : {
                    x: [0, 26, -14, 18, 0],
                    y: [0, -24, -46, -20, 0],
                    opacity: [0.2, 0.85, 0.55, 0.8, 0.2],
                    scale: [0.8, 1.3, 0.9, 1.2, 0.8],
                  }
            }
            transition={{
              duration: dust.duration,
              delay: dust.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute rounded-full bg-gradient-to-br from-[#FFFDF2] to-[#E8C97E] shadow-[0_0_12px_rgba(232,201,126,0.9)]"
          />
        ))}

        {/* Translucent Pink & Rose-Gold Floating Hearts */}
        {floatingHearts.map((heart, idx) => (
          <motion.div
            key={`heart-${idx}`}
            style={{ left: heart.left, top: heart.top }}
            animate={
              prefersReduced
                ? { opacity: 0.3 }
                : {
                    y: [0, -180, -360],
                    x: [0, idx % 2 === 0 ? 18 : -18, 0],
                    opacity: [0, 0.52, 0],
                    scale: [0.85, 1.05, 0.9],
                  }
            }
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute"
          >
            <svg width={heart.size} height={heart.size} viewBox="0 0 24 24" fill="none">
              <path
                d="M12 20.5C12 20.5 4 14.9 4 9.2C4 6.5 6.1 4.5 8.6 4.5C10.2 4.5 11.4 5.3 12 6.4C12.6 5.3 13.8 4.5 15.4 4.5C17.9 4.5 20 6.5 20 9.2C20 14.9 12 20.5 12 20.5Z"
                fill={heart.roseGold ? '#D6949B' : '#F4B2CA'}
                fillOpacity="0.48"
              />
            </svg>
          </motion.div>
        ))}

        {/* Floating Iridescent Pearls */}
        {floatingPearls.map((pearl, idx) => (
          <motion.span
            key={`pearl-${idx}`}
            style={{
              left: pearl.left,
              top: pearl.top,
              width: pearl.size,
              height: pearl.size,
              background:
                'radial-gradient(circle at 30% 30%, #FFFFFF 0%, #FDE8EF 55%, #E0B2C4 100%)',
            }}
            animate={
              prefersReduced
                ? { opacity: 0.55 }
                : {
                    x: [0, idx % 2 === 0 ? 34 : -34, 0],
                    y: [0, -16, 12, 0],
                    opacity: [0.35, 0.8, 0.35],
                  }
            }
            transition={{
              duration: pearl.duration,
              delay: pearl.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute rounded-full shadow-[0_2px_10px_rgba(244,178,202,0.55)]"
          />
        ))}
      </motion.div>

      {/* Layer 3 (Near): Falling Soft-Pink Rose Petals, Ambient Floating Bows with Golden Trails, & Occasional Sparkle Bursts */}
      <motion.div
        style={{ y: prefersReduced ? 0 : nearLayerY }}
        className="absolute inset-0"
      >
        {/* Falling Soft-Pink Rose Petals */}
        {!prefersReduced &&
          rosePetals.map((petal, idx) => (
            <motion.div
              key={`petal-${idx}`}
              style={{ left: petal.left, top: petal.top }}
              animate={{
                y: ['0vh', '108vh'],
                x: [0, idx % 2 === 0 ? 45 : -45, idx % 2 === 0 ? -15 : 20],
                rotate: [0, idx % 2 === 0 ? 220 : -220],
                opacity: [0, 0.65, 0.65, 0],
              }}
              transition={{
                duration: petal.duration,
                delay: petal.delay,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute"
            >
              <RosePetalSVG className="w-3.5 h-3.5 sm:w-4 sm:h-4" tone={petal.tone} />
            </motion.div>
          ))}

        {/* Ambient Floating Pink Bows with Golden Dust Trails */}
        {ambientBows.map((bow, idx) => (
          <div
            key={`ambient-bow-${idx}`}
            style={{ left: bow.left, top: bow.top }}
            className="hidden lg:block absolute"
          >
            <FloatingBowWithTrail
              direction={bow.direction}
              duration={bow.duration}
              bowClassName={bow.className}
            />
          </div>
        ))}

        {/* Occasional Gentle Magical Sparkle Burst */}
        {!prefersReduced && burstTick > 0 && (
          <div
            key={`ambient-burst-${burstTick}`}
            style={{ left: activeBurst.left, top: activeBurst.top }}
            className="absolute"
          >
            {Array.from({ length: 8 }, (_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              const radius = 28 + (i % 2) * 16;
              return (
                <motion.span
                  key={i}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  animate={{
                    x: Math.cos(angle) * radius,
                    y: Math.sin(angle) * radius,
                    scale: [0, 1.15, 0],
                    opacity: [0, 0.85, 0],
                  }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#FFFDF2] to-[#E8C97E] shadow-[0_0_8px_rgba(212,175,55,0.85)]"
                />
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
};

interface ConfettiBurstProps {
  burstKey: number;
}

export const ConfettiBurst: React.FC<ConfettiBurstProps> = ({ burstKey }) => {
  const prefersReduced = useReducedMotion();
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

  if (burstKey === 0 || prefersReduced) return null;

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
