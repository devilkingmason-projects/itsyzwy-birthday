import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { yzwyConfig } from '../config/yzwyConfig';
import { RoyalCrownSVG } from './RoyalGraphics';

export const EngineerPrincessSection: React.FC = () => {
  const [activeId, setActiveId] = useState(yzwyConfig.engineerPrincess.specs[0].id);
  const activeSpec =
    yzwyConfig.engineerPrincess.specs.find((s) => s.id === activeId) ??
    yzwyConfig.engineerPrincess.specs[0];

  return (
    <section id="engineer" className="relative py-20 sm:py-24 px-4 sm:px-6 blueprint-grid border-y border-[#EBC7D4]/60">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9E5662] mb-2">
            {yzwyConfig.engineerPrincess.kicker}
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#3A232E] text-balance mb-4">
            {yzwyConfig.engineerPrincess.heading}
          </h2>
          <p className="text-base text-[#5D3D4B] leading-relaxed">
            {yzwyConfig.engineerPrincess.subheading}
          </p>
        </div>

        {/* Interactive Spec Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full bg-white/90 border border-[#EBC7D4] p-1.5 shadow-xs">
            {yzwyConfig.engineerPrincess.specs.map((spec) => {
              const isActive = spec.id === activeId;
              return (
                <button
                  key={spec.id}
                  type="button"
                  onClick={() => setActiveId(spec.id)}
                  className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#3A232E] text-[#FFF9FB] shadow-xs'
                      : 'text-[#715261] hover:text-[#3A232E]'
                  }`}
                >
                  {spec.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={activeSpec.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="luxury-card rounded-[2rem] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#9E5662]">
              <Compass className="h-4 w-4 text-[#D4AF37]" />
              <span>SPECIFICATION · {activeSpec.tabLabel.toUpperCase()}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3A232E]">
              {activeSpec.title}
            </h3>
            <p className="text-base text-[#5D3D4B] leading-relaxed">
              {activeSpec.description}
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {activeSpec.metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-center justify-between rounded-2xl bg-white/90 border border-[#F2D5DF] px-5 py-3.5"
              >
                <span className="text-xs font-medium text-[#715261]">
                  {metric.label}
                </span>
                <span className="font-mono text-sm sm:text-base font-semibold tabular-nums text-[#3A232E]">
                  {metric.value}
                </span>
              </div>
            ))}
            <div className="hidden lg:flex items-center justify-end gap-2 pt-2 text-xs text-[#9E5662]">
              <RoyalCrownSVG className="w-6 h-4" />
              <span>Verified by Royal Engineering Standards</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
