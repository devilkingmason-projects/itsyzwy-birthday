import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send } from 'lucide-react';
import { yzwyConfig } from '../config/yzwyConfig';
import { PearlDivider } from './RoyalGraphics';

interface WishItem {
  id: string;
  author: string;
  message: string;
}

export const HeartfeltSection: React.FC = () => {
  const [wishes, setWishes] = useState<WishItem[]>(yzwyConfig.heartfelt.initialWishes);
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanAuthor = author.trim();
    const cleanMessage = message.trim();
    if (!cleanAuthor || !cleanMessage) {
      setError('Please enter both your name and a birthday wish.');
      return;
    }
    setError('');
    setWishes((prev) => [
      {
        id: `wish-${Date.now()}`,
        author: cleanAuthor,
        message: cleanMessage,
      },
      ...prev,
    ]);
    setAuthor('');
    setMessage('');
  };

  return (
    <section
      id="heartfelt"
      className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#FFF9FB] via-[#F9F2FE]/60 to-[#FFF9FB]"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Guestbook Form */}
          <motion.form
            onSubmit={handleAddWish}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 luxury-card rounded-[2rem] p-6 sm:p-8 space-y-4"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-[#3A232E]">
              <Heart className="h-4 w-4 text-[#9E5662]" />
              <span>Add a Birthday Note</span>
            </div>

            <div>
              <label
                htmlFor="wish-author"
                className="block text-xs font-medium text-[#715261] mb-1.5"
              >
                Your Name
              </label>
              <input
                id="wish-author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="e.g., Lady Clara"
                className="w-full rounded-xl border border-[#EBC7D4] bg-white px-4 py-2.5 text-sm text-[#3A232E] placeholder:text-[#715261]/60 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label
                htmlFor="wish-message"
                className="block text-xs font-medium text-[#715261] mb-1.5"
              >
                Birthday Wish
              </label>
              <textarea
                id="wish-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a warm birthday wish for Princess Yzwy..."
                className="w-full rounded-xl border border-[#EBC7D4] bg-white px-4 py-2.5 text-sm text-[#3A232E] placeholder:text-[#715261]/60 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {error && <p className="text-xs text-[#9E5662] font-medium">{error}</p>}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#3A232E] text-[#FFF9FB] px-5 py-3 text-xs font-semibold border border-[#D4AF37]/50 hover:bg-[#523040] transition-colors cursor-pointer"
            >
              <Send className="h-3.5 w-3.5 text-[#E8C97E]" />
              <span>Post Birthday Wish</span>
            </button>
          </motion.form>

          {/* Wishes Wall */}
          <div className="lg:col-span-7 space-y-4">
            {wishes.map((wish) => (
              <motion.div
                key={wish.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="luxury-card rounded-[1.75rem] p-6 sm:p-7"
              >
                <p className="font-serif italic text-xl text-[#3A232E] leading-relaxed mb-3">
                  “{wish.message}”
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9E5662]">
                  — {wish.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
