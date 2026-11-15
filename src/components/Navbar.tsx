import React from 'react';
import { Lock, Volume2, VolumeX } from 'lucide-react';
import { yzwyConfig } from '../config/yzwyConfig';

export type PageRoute = 'home' | 'wishes';

interface NavbarProps {
  musicPlaying: boolean;
  onToggleMusic: () => void;
  activePage: PageRoute;
  onNavigate: (page: PageRoute, hash?: string) => void;
}

interface NavItem {
  label: string;
  page: PageRoute;
  hash?: string;
  href: string;
  privateLock?: boolean;
}

const navLinks: NavItem[] = [
  { href: '#royal-message', label: 'Decree', page: 'home', hash: '#royal-message' },
  { href: '/wishes', label: 'Wishes', page: 'wishes' },
  { href: '#roast', label: 'Court Wit', page: 'home', hash: '#roast' },
  { href: '#gallery', label: 'Gallery', page: 'home', hash: '#gallery' },
  { href: '#awards', label: 'Honors', page: 'home', hash: '#awards' },
  {
    href: '#only-for-yzwy',
    label: 'Only for Yzwy ♡',
    page: 'home',
    hash: '#only-for-yzwy',
    privateLock: true,
  },
];

export const Navbar: React.FC<NavbarProps> = ({
  musicPlaying,
  onToggleMusic,
  activePage,
  onNavigate,
}) => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    e.preventDefault();
    onNavigate(item.page, item.hash);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#FFF9FB]/85 backdrop-blur-md border-b border-[#EBC7D4]/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-6 sm:gap-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home', '#top');
          }}
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#3A232E] whitespace-nowrap shrink-0 hover:text-[#9E5662] transition-colors"
        >
          {yzwyConfig.brand.name}
        </a>

        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-medium text-[#715261]">
          {navLinks.map((link) => {
            const isCurrent =
              link.page === 'wishes' && activePage === 'wishes';
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 underline underline-offset-4 transition-all ${
                  isCurrent
                    ? 'text-[#3A232E] font-semibold decoration-[#D4AF37]'
                    : 'decoration-transparent hover:text-[#3A232E] hover:decoration-[#D4AF37]'
                }`}
              >
                {link.privateLock && (
                  <Lock className="h-3.5 w-3.5 text-[#C9868D]" aria-hidden="true" />
                )}
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/wishes"
            onClick={(e) => {
              e.preventDefault();
              onNavigate(activePage === 'wishes' ? 'home' : 'wishes');
            }}
            className="md:hidden text-xs font-semibold text-[#9E5662] hover:text-[#3A232E] underline decoration-[#D4AF37]/60 underline-offset-4 whitespace-nowrap shrink-0"
          >
            {activePage === 'wishes' ? 'Celebration' : 'Wishes'}
          </a>

          <button
            type="button"
            data-music-control="true"
            onClick={onToggleMusic}
            aria-pressed={musicPlaying}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 border transition-all cursor-pointer ${
              musicPlaying
                ? 'bg-[#3A232E] text-[#FFF9FB] border-[#D4AF37]/60 shadow-sm'
                : 'bg-[#FFF5F8] text-[#3A232E] border-[#EBC7D4] hover:border-[#D4AF37]'
            }`}
          >
            {musicPlaying ? (
              <Volume2 className="h-3.5 w-3.5 text-[#E8C97E]" />
            ) : (
              <VolumeX className="h-3.5 w-3.5 text-[#9E5662]" />
            )}
            <span>{musicPlaying ? 'Pause Music' : 'Play Music'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
