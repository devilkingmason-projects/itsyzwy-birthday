import React, { useEffect, useState } from 'react';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { PearlDivider } from './RoyalGraphics';

export const WishesSection: React.FC = () => {
  const [wishes, setWishes] = useState<{ id: string; name: string; message: string; createdAt: number }[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'wishes'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const wishesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as { id: string; name: string; message: string; createdAt: number }[];
      setWishes(wishesData);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'wishes'), {
        name: name.trim(),
        message: message.trim(),
        createdAt: Date.now(),
      });
      setName('');
      setMessage('');
    } catch (err) {
      console.error('Error adding wish:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="wishes" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-[#9E5662] mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            Leave a Wish for the Queen
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A232E]">
            Birthday Wishes 💌
          </h2>
          <PearlDivider />
        </motion.div>

        {/* Form */}
        <div className="luxury-card rounded-3xl p-6 sm:p-8 mb-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[#9E5662] mb-1.5">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Who is wishing?"
                className="w-full rounded-xl border border-[#EBC6D3] bg-white px-4 py-2.5 text-sm text-[#3A232E] placeholder:text-[#A38190] focus:outline-none focus:border-[#D4AF37]"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[#9E5662] mb-1.5">Your Wish</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your heartfelt birthday wish..."
                rows={4}
                className="w-full rounded-xl border border-[#EBC6D3] bg-white px-4 py-2.5 text-sm text-[#3A232E] placeholder:text-[#A38190] focus:outline-none focus:border-[#D4AF37]"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3A232E] to-[#593344] px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-90 disabled:opacity-50 cursor-pointer"
            >
              <Heart className="h-4 w-4 text-[#FAD2E1]" />
              {isSubmitting ? 'Sending...' : 'Send Birthday Wish'}
            </button>
          </form>
        </div>

        {/* Wishes List */}
        <div className="space-y-4">
          {wishes.length === 0 && (
            <p className="text-center text-[#715261] italic py-6">No wishes yet. Be the first to send one!</p>
          )}
          {wishes.map((wish) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-white/80 border border-[#EBC6D3] p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-serif font-bold text-[#3A232E]">{wish.name}</span>
                <span className="text-[10px] uppercase tracking-widest text-[#9E5662]">
                  {new Date(wish.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm text-[#4E3340] leading-relaxed">{wish.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};