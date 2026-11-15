import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Eye, EyeOff, HelpCircle, Lock, LockOpen, MailOpen, Sparkles } from 'lucide-react';
import { PearlDivider, SatinBowSVG } from './RoyalGraphics';

interface UnlockedLetter {
  heading: string;
  paragraphs: string[];
  signature: string;
}

const RoyalLockIllustration: React.FC<{ unlocked?: boolean }> = ({
  unlocked = false,
}) => (
  <svg
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-20 h-20 mx-auto drop-shadow-[0_8px_18px_rgba(201,134,141,0.28)]"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="lockBodyGold" x1="20" y1="40" x2="76" y2="86" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF7DF" />
        <stop offset="45%" stopColor="#F4C7D8" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>
      <linearGradient id="lockShackle" x1="30" y1="14" x2="66" y2="46" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FAF0C3" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#9F7C1F" />
      </linearGradient>
    </defs>
    <circle cx="48" cy="54" r="34" fill="#FDE8EF" fillOpacity="0.6" />
    <path
      d={
        unlocked
          ? 'M33 42V29C33 20.5 39.7 14 48 14C55.4 14 61.5 19.2 62.8 26.2'
          : 'M33 43V30C33 21.7 39.7 15 48 15C56.3 15 63 21.7 63 30V43'
      }
      stroke="url(#lockShackle)"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <rect
      x="22"
      y="41"
      width="52"
      height="40"
      rx="14"
      fill="url(#lockBodyGold)"
      stroke="#B98744"
      strokeWidth="2"
    />
    <rect
      x="27"
      y="46"
      width="42"
      height="30"
      rx="10"
      stroke="#FFF9FB"
      strokeOpacity="0.7"
      strokeWidth="1.2"
    />
    <path
      d="M48 68C48 68 41 62.8 41 57.9C41 55.4 42.9 53.6 45.1 53.6C46.5 53.6 47.5 54.3 48 55.3C48.5 54.3 49.5 53.6 50.9 53.6C53.1 53.6 55 55.4 55 57.9C55 62.8 48 68 48 68Z"
      fill="#3A232E"
    />
  </svg>
);

// الرسالة السرية اللي هتظهر
const SECRET_LETTER: UnlockedLetter = {
  heading: 'To Our Dearest Princess',
  paragraphs: [
    'أخيراً يمدي أسولف على راحتي!',
    'يا هلا وغلا باللي دخلوا 18 سنة ❤️',
    'مدري متى بتشوفين هالرسالة، بس أتمنى تشوفينها، وأتمنى بعد تكونين بكامل صحتج وعافيتج.',
    'كل عام وانتِ بخير وياعسى عمرج مديد مهندستنا العزيزه. 🎂',
    'وأتمنى هالسنة تكون كلها إنجازات أكثر من اللي راحت واللي قبلها، وأتمنى تحصلين اللي تبينه، وكل اللي تتمنينه يصير حقيقة ويتحقق.',
    'الله يحفظج ويحافظ عليج، ويديمج في حياة أحبابج، ويخلي لج كل اللي تحبينهم. 💗',
  ],
  signature: '— People You Know',
};

export const PrivateMessageSection: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [letter, setLetter] = useState<UnlockedLetter | null>(null);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Not quite, this little secret is reserved for Yzwy! ♡');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // التحقق من الباسورد في المتصفح مباشرة (من غير سيرفر)
    setTimeout(() => {
      if (password.trim().toLowerCase() === 'kochy') {
        setLetter(SECRET_LETTER);
        setPassword('');
      } else {
        setError('Not quite, this little secret is reserved for Yzwy! ♡');
      }
      setIsSubmitting(false);
    }, 600); // تأخير بسيط عشان يبان زي اللودينج
  };

  const handleRelock = () => {
    setLetter(null);
    setPassword('');
    setError('');
  };

  return (
    <section
      id="only-for-yzwy"
      className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#FFF9FB] via-[#FFF4F8] to-[#FFF9FB]"
    >
      <div className="mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          {!letter ? (
            <motion.div
              key="locked-gate"
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReduced ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45 }}
              className="luxury-card rounded-[2.5rem] px-6 sm:px-12 py-12 sm:py-14 text-center relative overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-3 rounded-[2rem] border border-[#D4AF37]/25"
              />

              <div className="relative z-10 max-w-md mx-auto">
                <motion.div
                  animate={
                    prefersReduced
                      ? undefined
                      : { y: [0, -5, 0] }
                  }
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="mb-4"
                >
                  <RoyalLockIllustration />
                </motion.div>

                <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#9E5662] mb-2">
                  <Lock className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span>Only for Yzwy ♡</span>
                </p>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3A232E] text-balance mb-3">
                  A Little Secret, Just for You
                </h2>

                <p className="font-serif italic text-lg sm:text-xl text-[#5D3D4B] mb-8">
                  “Some words are meant for one person only. This little corner is yours, Yzwy.”
                </p>

                <form onSubmit={handleUnlock} className="space-y-4 text-left">
                  <div>
                    <label htmlFor="yzwy-secret-password" className="sr-only">
                      Secret Password
                    </label>
                    <div className="relative">
                      <input
                        id="yzwy-secret-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (error) setError('');
                        }}
                        placeholder="Enter secret password..."
                        autoComplete="off"
                        className="w-full rounded-full border border-[#EBC7D4] bg-white/95 pl-5 pr-12 py-3.5 text-sm text-[#3A232E] placeholder:text-[#715261]/65 shadow-inner focus:outline-none focus:border-[#D4AF37]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full flex items-center justify-center text-[#715261] hover:text-[#3A232E] cursor-pointer"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="alert"
                      className="text-center text-xs sm:text-sm font-medium text-[#9E5662]"
                    >
                      {error}
                    </motion.p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#3A232E] via-[#593344] to-[#3A232E] px-7 py-3.5 text-sm font-semibold text-[#FFF9FB] border border-[#D4AF37]/60 shadow-[0_12px_28px_-10px_rgba(58,35,46,0.5)] hover:shadow-[0_16px_34px_-10px_rgba(212,175,55,0.45)] transition-all cursor-pointer disabled:opacity-70"
                  >
                    <LockOpen className="h-4 w-4 text-[#E8C97E]" />
                    <span>
                      {isSubmitting ? 'Unlocking...' : 'Unlock My Message ♡'}
                    </span>
                  </button>
                </form>

                {/* Need a hint? */}
                <div className="mt-5 flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => setShowHint((prev) => !prev)}
                    aria-expanded={showHint}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9E5662] hover:text-[#3A232E] underline decoration-[#D4AF37]/60 underline-offset-4 transition-colors cursor-pointer py-1"
                  >
                    <HelpCircle className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span>Need a hint?</span>
                  </button>

                  <AnimatePresence>
                    {showHint && (
                      <motion.p
                        initial={prefersReduced ? false : { opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={prefersReduced ? undefined : { opacity: 0, y: -6 }}
                        transition={{ duration: 0.22 }}
                        className="mt-2.5 rounded-2xl border border-[#F2D5DF] bg-[#FFF8FA]/95 px-4 py-2.5 text-xs sm:text-sm italic text-[#5D3D4B] shadow-2xs"
                      >
                        “What name does someone call you most often? ♡”
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked-letter"
              initial={prefersReduced ? false : { opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={prefersReduced ? undefined : { opacity: 0, y: 12 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="luxury-card rounded-[2.5rem] px-6 sm:px-14 py-12 sm:py-16 relative overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-3 rounded-[2rem] border border-[#D4AF37]/30"
              />

              <div className="relative z-10 text-center">
                <motion.div
                  initial={prefersReduced ? false : { scale: 0.8, rotate: -6 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="flex flex-col items-center mb-4"
                >
                  <SatinBowSVG className="w-16 h-11 mb-2" />
                  <div className="h-12 w-12 rounded-full bg-[#FFF5F8] border border-[#D4AF37]/45 flex items-center justify-center shadow-xs">
                    <MailOpen className="h-5 w-5 text-[#9E5662]" />
                  </div>
                </motion.div>

                <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#9E5662] mb-2">
                  <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span>Private Letter Unlocked</span>
                </p>

                <h2 className="font-script text-4xl sm:text-6xl text-[#9E5662] mb-2">
                  {letter.heading}
                </h2>

                <PearlDivider className="mt-1 pb-2" />

                {/* Dedicated Private Letter Area */}
                <div className="mx-auto max-w-xl mt-6 rounded-[1.75rem] border border-[#D4AF37]/35 bg-white/90 px-6 sm:px-10 py-8 sm:py-10 shadow-inner">
                  <div
                    dir="rtl"
                    lang="ar"
                    className="text-right space-y-5 text-base sm:text-[18px] leading-[1.95] text-[#3A232E]"
                  >
                    {letter.paragraphs.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 pt-5 border-t border-[#EBC7D4]/70 text-center">
                    <p className="font-serif text-lg sm:text-xl font-bold text-[#9E5662]">
                      {letter.signature}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={handleRelock}
                    className="inline-flex items-center gap-2 rounded-full border border-[#EBC7D4] bg-[#FFF5F8] px-5 py-2 text-xs font-semibold text-[#715261] hover:text-[#3A232E] hover:border-[#D4AF37] transition-colors cursor-pointer"
                  >
                    <Lock className="h-3.5 w-3.5 text-[#9E5662]" />
                    <span>Lock Private Corner</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};