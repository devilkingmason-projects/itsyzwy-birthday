import React, { useCallback, useEffect, useState } from 'react';
import { Navbar, PageRoute } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BirthdayMessageSection } from './components/BirthdayMessageSection';
import { EngineerPrincessSection } from './components/EngineerPrincessSection';
import { RoyalRoastSection } from './components/RoyalRoastSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { RoyalAwardsSection } from './components/RoyalAwardsSection';
import { PrivateMessageSection } from './components/PrivateMessageSection';
import { FinalSurpriseSection } from './components/FinalSurpriseSection';
import { WishesPage, WishItem } from './components/WishesPage';
import { WishesPreviewSection } from './components/WishesPreviewSection';
import { Footer } from './components/Footer';
import { ConfettiBurst, FairytaleAmbientBackground } from './components/RoyalGraphics';
import { FloatingMusicControl } from './components/FloatingMusicControl';
import { yzwyConfig } from './config/yzwyConfig';
import { MusicState, royalAudio } from './utils/royalAudio';
import { collection, onSnapshot, query, orderBy, addDoc } from 'firebase/firestore';
import { db } from './firebase';

function getInitialRoute(): PageRoute {
  if (typeof window !== 'undefined' && window.location.pathname === '/wishes') {
    return 'wishes';
  }
  return 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState<PageRoute>(getInitialRoute);
  const [wishes, setWishes] = useState<WishItem[]>([]); // بيبدأ فاضي وبيمتلئ من Firebase
  const [musicState, setMusicState] = useState<MusicState>(() =>
    royalAudio.getState()
  );
  const [confettiKey, setConfettiKey] = useState(0);

  const triggerConfetti = useCallback(() => {
    setConfettiKey((k) => k + 1);
  }, []);

  const handleNavigate = useCallback(
    (page: PageRoute, hash?: string) => {
      if (page === 'wishes') {
        if (window.location.pathname !== '/wishes') {
          window.history.pushState({}, '', '/wishes');
        }
        setActivePage('wishes');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetPath = hash && hash !== '#top' ? `/${hash}` : '/';
      if (
        window.location.pathname !== '/' ||
        window.location.hash !== (hash ?? '')
      ) {
        window.history.pushState({}, '', targetPath);
      }

      if (activePage !== 'home') {
        setActivePage('home');
        window.requestAnimationFrame(() => {
          window.setTimeout(() => {
            if (!hash || hash === '#top') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              const target = document.querySelector(hash);
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
          }, 60);
        });
      } else if (!hash || hash === '#top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const target = document.querySelector(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [activePage]
  );

  // ✨ بنجيب الرسايل من Firebase لايف (Real-time)
  useEffect(() => {
    const q = query(collection(db, 'wishes'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const wishesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        author: doc.data().author || '',
        message: doc.data().message || '',
      })) as WishItem[];
      setWishes(wishesData);
    });
    return () => unsubscribe();
  }, []);

  // ✨ بنحفظ الرسالة الجديدة في Firebase
  const handleAddWish = useCallback(async (wish: WishItem) => {
    try {
      await addDoc(collection(db, 'wishes'), {
        author: wish.author,
        message: wish.message,
        createdAt: Date.now(),
      });
    } catch (error) {
      console.error("Error adding wish: ", error);
    }
  }, []);

  const handleEnterCelebration = useCallback(() => {
    royalAudio.playRoyalFanfare();
    triggerConfetti();
    const target = document.querySelector('#royal-message');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }, [triggerConfetti]);

  const handleToggleMusic = useCallback(() => {
    royalAudio.toggleMusic();
  }, []);

  const handleTapToPlay = useCallback(() => {
    void royalAudio.play();
  }, []);

  const handleTriggerSparkle = useCallback(() => {
    royalAudio.playSparkleChime();
    triggerConfetti();
  }, [triggerConfetti]);

  const handleOpenGift = useCallback(() => {
    royalAudio.playRoyalFanfare();
    triggerConfetti();
  }, [triggerConfetti]);

  useEffect(() => {
    const onPopState = () => {
      setActivePage(
        window.location.pathname === '/wishes' ? 'wishes' : 'home'
      );
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const unsubscribe = royalAudio.subscribe(setMusicState);
    void royalAudio.attemptAutoplay();

    return () => {
      unsubscribe();
      royalAudio.stopMusic();
    };
  }, []);

  useEffect(() => {
    if (!musicState.autoplayBlocked || musicState.hasStarted) return;

    const handleFirstInteraction = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('[data-music-control="true"]')) return;
      void royalAudio.play();
    };

    window.addEventListener('pointerdown', handleFirstInteraction, {
      once: true,
      passive: true,
    });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [musicState.autoplayBlocked, musicState.hasStarted]);

  return (
    <div className="relative min-h-screen bg-[#FFF9FB] text-[#3A232E] overflow-x-hidden">
      <FairytaleAmbientBackground />
      <Navbar
        musicPlaying={musicState.isPlaying}
        onToggleMusic={handleToggleMusic}
        activePage={activePage}
        onNavigate={handleNavigate}
      />
      <main
        id={activePage === 'wishes' ? 'top' : undefined}
        className="relative z-10"
      >
        {activePage === 'wishes' ? (
          <WishesPage
            wishes={wishes}
            onAddWish={handleAddWish}
            onBackHome={() => handleNavigate('home', '#top')}
          />
        ) : (
          <>
            <HeroSection onEnterCelebration={handleEnterCelebration} />
            <BirthdayMessageSection />
            <EngineerPrincessSection />
            <RoyalRoastSection />
            <PhotoGallerySection />
            <RoyalAwardsSection onTriggerSparkle={handleTriggerSparkle} />
            <PrivateMessageSection />
            <FinalSurpriseSection onOpenGift={handleOpenGift} />
            <WishesPreviewSection
              wishes={wishes}
              onOpenWishes={() => handleNavigate('wishes')}
            />
          </>
        )}
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <FloatingMusicControl
        isPlaying={musicState.isPlaying}
        hasStarted={musicState.hasStarted}
        autoplayBlocked={musicState.autoplayBlocked}
        onToggleMusic={handleToggleMusic}
        onTapToPlay={handleTapToPlay}
      />
      <ConfettiBurst burstKey={confettiKey} />
    </div>
  );
}