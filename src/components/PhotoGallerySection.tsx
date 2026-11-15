import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react';
import { GalleryPhoto, yzwyConfig } from '../config/yzwyConfig';
import { PearlDivider } from './RoyalGraphics';

type FilterType = 'All' | 'Royal Moments' | 'Studio';

export const PhotoGallerySection: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [brokenIds, setBrokenIds] = useState<Record<string, boolean>>({});

  const filteredPhotos =
    filter === 'All'
      ? yzwyConfig.gallery
      : yzwyConfig.gallery.filter((p) => p.category === filter);

  const activeIdx = activePhoto
    ? filteredPhotos.findIndex((p) => p.id === activePhoto.id)
    : -1;

  const showPrev = () => {
    if (activeIdx < 0 || filteredPhotos.length === 0) return;
    const prevIdx = (activeIdx - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[prevIdx]);
  };

  const showNext = () => {
    if (activeIdx < 0 || filteredPhotos.length === 0) return;
    const nextIdx = (activeIdx + 1) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIdx]);
  };

  useEffect(() => {
    if (!activePhoto) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePhoto(null);
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  return (
    <section
      id="gallery"
      className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#FFF9FB] via-[#FFF4F8] to-[#FFF9FB]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9E5662] mb-2">
              Curated Keepsakes
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#3A232E]">
              The Royal Gallery
            </h2>
          </div>

          <div className="inline-flex items-center gap-1 rounded-full bg-white/90 border border-[#EBC7D4] p-1 self-start md:self-auto">
            {(['All', 'Royal Moments', 'Studio'] as FilterType[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  filter === tab
                    ? 'bg-[#3A232E] text-[#FFF9FB]'
                    : 'text-[#715261] hover:text-[#3A232E]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredPhotos.map((photo) => {
            const isBroken = Boolean(brokenIds[photo.id]);
            return (
              <motion.button
                key={photo.id}
                type="button"
                layout
                whileHover={{ y: -4 }}
                onClick={() => setActivePhoto(photo)}
                className="group text-left luxury-card rounded-[2rem] overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#FFF5F8] to-[#FDE8EF] relative">
                  {isBroken ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF5F8] to-[#F2EBFD] p-6 text-center">
                      <Camera className="h-8 w-8 text-[#9E5662] mb-2" />
                      <span className="font-serif text-xl font-semibold text-[#3A232E]">
                        {photo.title}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={photo.src}
                      alt={photo.title}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setBrokenIds((prev) => ({ ...prev, [photo.id]: true }))
                      }
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-xs text-[#9E5662] mb-1.5">
                    <span>{photo.dateLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{photo.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#3A232E] mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-[#5D3D4B] leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        <PearlDivider className="mt-12 pb-0" />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-[#3A232E]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-[2rem] bg-[#FFF9FB] border border-[#D4AF37]/40 overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                aria-label="Close gallery preview"
                onClick={() => setActivePhoto(null)}
                className="absolute right-4 top-4 z-10 h-10 w-10 rounded-full bg-white/90 border border-[#EBC7D4] flex items-center justify-center text-[#3A232E] hover:bg-[#FFF5F8] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="aspect-[4/3] w-full bg-gradient-to-br from-[#FFF5F8] to-[#FDE8EF]">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-[#9E5662] mb-1">
                    {activePhoto.dateLabel} · {activePhoto.category}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-[#3A232E]">
                    {activePhoto.title}
                  </h3>
                  <p className="text-sm text-[#5D3D4B] mt-1">
                    {activePhoto.caption}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    aria-label="Previous photo"
                    onClick={showPrev}
                    className="h-10 w-10 rounded-full border border-[#EBC7D4] bg-white flex items-center justify-center text-[#3A232E] hover:border-[#D4AF37] cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next photo"
                    onClick={showNext}
                    className="h-10 w-10 rounded-full border border-[#EBC7D4] bg-white flex items-center justify-center text-[#3A232E] hover:border-[#D4AF37] cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
