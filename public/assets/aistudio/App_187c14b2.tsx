import React, { useCallback, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BirthdayMessageSection } from './components/BirthdayMessageSection';
import { EngineerPrincessSection } from './components/EngineerPrincessSection';
import { RoyalRoastSection } from './components/RoyalRoastSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { RoyalAwardsSection } from './components/RoyalAwardsSection';
import { HeartfeltSection } from './components/HeartfeltSection';
import { FinalSurpriseSection } from './components/FinalSurpriseSection';
import { Footer } from './components/Footer';
import { ConfettiBurst } from './components/RoyalGraphics';
import { royalAudio } from './utils/royalAudio';

export default function App() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);

  const triggerConfetti = useCallback(() => {
    setConfettiKey((k) => k + 1);
  }, []);

  const handleEnterCelebration = useCallback(() => {
    royalAudio.playRoyalFanfare();
    triggerConfetti();
    const target = document.querySelector('#royal-message');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }, [triggerConfetti]);

  const handleToggleMusic = useCallback(() => {
    const playing = royalAudio.toggleMusic();
    setMusicPlaying(playing);
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
    return () => {
      royalAudio.stopMusic();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FFF9FB] text-[#3A232E] overflow-x-hidden">
      <Navbar musicPlaying={musicPlaying} onToggleMusic={handleToggleMusic} />
      <main>
        <HeroSection onEnterCelebration={handleEnterCelebration} />
        <BirthdayMessageSection />
        <EngineerPrincessSection />
        <RoyalRoastSection />
        <PhotoGallerySection />
        <RoyalAwardsSection onTriggerSparkle={handleTriggerSparkle} />
        <HeartfeltSection />
        <FinalSurpriseSection onOpenGift={handleOpenGift} />
      </main>
      <Footer />
      <ConfettiBurst burstKey={confettiKey} />
    </div>
  );
}