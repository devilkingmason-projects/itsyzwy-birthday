import React from 'react';
import { ArrowUp } from 'lucide-react';
import { yzwyConfig } from '../config/yzwyConfig';
import { RoyalCrownSVG } from './RoyalGraphics';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#EBC7D4]/70 bg-[#FFF5F8]/70 py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <RoyalCrownSVG className="w-8 h-6" />
          <div>
            <p className="font-serif text-lg font-bold text-[#3A232E]">
              {yzwyConfig.brand.name}
            </p>
            <p className="text-xs text-[#715261]">
              Crafted with joy for Our Beautiful Princess
            </p>
          </div>
        </div>

        <a
          href="#top"
          className="inline-flex items-center gap-2 rounded-full border border-[#EBC7D4] bg-white px-4 py-2 text-xs font-semibold text-[#3A232E] hover:border-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
        >
          <span>Back to Top</span>
          <ArrowUp className="h-3.5 w-3.5 text-[#9E5662]" />
        </a>
      </div>
    </footer>
  );
};
