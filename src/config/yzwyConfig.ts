export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: 'Royal Moments' | 'Studio';
  dateLabel: string;
}

export interface RoyalAward {
  id: string;
  title: string;
  citation: string;
  category: string;
  year: string;
  initialApplause: number;
}

export interface RoastCard {
  id: string;
  title: string;
  category: 'Personality' | 'Engineering' | 'Food Crimes';
  observation: string;
  verdict: string;
}

export interface WishItem {
  id: string;
  author: string;
  message: string;
}

export const yzwyConfig = {
  brand: {
    name: 'Princess Yzwy',
    monogram: 'Y',
    nextBirthdayIso: '2027-11-15T00:00:00',
    celebrationMode: true,
  },
  hero: {
    royalGreetingBadge: 'Royal Birthday Edition',
    headline: 'Princess Yzwy',
    subheadline: 'A Little Princess, A Lot of Beauty, An Endless Amount of Charm',
    rotatingTitles: [
      'Our Beautiful Princess',
      'Princess Engineer',
      'Her Royal Highness, Princess Yzwy',
      'Architect of Clean Code & Couture',
    ],
    ctaLabel: 'Enter the Royal Celebration',
  },
  birthdayMessage: {
    kicker: 'Royal Proclamation',
    scriptTitle: 'To Her Majesty,',
    heading: 'A Birthday Decree of Joy & Brilliance',
    salutation: 'Dearest Princess Yzwy,',
    paragraphs: [
      'On your 18th birthday, my little princess, I wish you endless happiness and a life filled with good health, joy, and beautiful moments.',
      'May you celebrate your birthday year after year, all the way to 100 and beyond, always surrounded by the people you love, with a heart full of happiness and a smile that never fades.',
      "May the days ahead bring you the sweetest surprises, and may all your wishes come true, one by one. I hope life gives you countless reasons to smile and memories that you'll cherish forever.",
      "And for your next birthday, I sincerely wish you a perfect 100/100 on your Calculus exam, and hopefully, you'll finally stop overthinking every little thing and give that beautiful mind of yours a well-deserved break!",
      'May your year be filled with laughter, lovely surprises, unforgettable adventures, and moments as beautiful as your heart.',
      'Everyone wishes you a day overflowing with happiness and joy, because you deserve every beautiful thing this world has to offer.',
    ],
    closingLine: 'Happy 18th Birthday, Princess Yzwy. Keep shining, little princess. ♡',
    closingWish: 'With love and endless wishes,',
    signature: '— Person U Know ♡',
    dateStamp: 'Issued November 15 · Royal Calendar',
  },
  engineerPrincess: {
    kicker: 'Blueprint & Tiara',
    heading: 'The Princess Engineer Duality',
    subheading:
      'Rarely does one soul balance razor-sharp systems engineering with unmistakable royal poise. Here is the official specification.',
    specs: [
      {
        id: 'architecture',
        tabLabel: 'Systems Grace',
        title: 'Clean Architecture Under Pressure',
        description:
          'Approaches tangled edge cases with the calm authority of Her Royal Highness reviewing court petitions—methodical, composed, and allergic to messy workarounds.',
        metrics: [
          { label: 'Code Clarity', value: '99.8%' },
          { label: 'First-Try Intuition', value: 'High' },
          { label: 'Panic Level', value: '0.00' },
        ],
      },
      {
        id: 'aesthetic',
        tabLabel: 'Couture UI',
        title: 'Pixel-Level Royal Standards',
        description:
          'Spots a misaligned 1px border from across the room. Insists that functional tools should look like they belong in a Parisian atelier.',
        metrics: [
          { label: 'Spacing Precision', value: '1.0 px' },
          { label: 'Palette Harmony', value: '10 / 10' },
          { label: 'Compromise Rate', value: '0.0%' },
        ],
      },
      {
        id: 'fuel',
        tabLabel: 'Royal Fuel',
        title: 'Açaí & Midnight KFC',
        description:
          'Runs on Açaí bowls, late-night KFC cravings, carefully curated playlists, and sudden bursts of inspiration that turn ordinary nights into unforgettable adventures.',
        metrics: [
          { label: 'Açaí Dependency', value: 'Essential' },
          { label: 'KFC Cravings', value: 'Midnight Mode' },
          { label: 'Joy Output', value: 'Infinite' },
        ],
      },
    ],
  },
  royalRoasts: [
    {
      id: 'overthinking',
      title: 'The Overthinking Olympics',
      category: 'Personality',
      observation:
        'Can turn a simple three-word message into a 47-page psychological investigation, complete with imaginary scenarios, alternative endings, and conclusions that nobody asked for.',
      verdict: 'Her Defense: "I\'m just considering every possibility."',
    },
    {
      id: 'calculus',
      title: 'The Calculus Survival Protocol',
      category: 'Engineering',
      observation:
        'A brilliant engineering student who deserves a peaceful birthday, yet somehow has a Calculus exam waiting just around the corner to remind her that peace was never an option.',
      verdict: 'Her Defense: "I\'ll definitely get 100/100 this time."',
    },
    {
      id: 'kfc-fries',
      title: 'The KFC Finger Agreement',
      category: 'Food Crimes',
      observation:
        'Willing to let you eat her chicken fingers, but the moment you even look at her KFC fries, the friendship is officially under investigation. Those fries are strictly personal property.',
      verdict: 'Her Defense: "You can have the chicken. NOT THE FRIES."',
    },
    {
      id: 'acai-fund',
      title: 'The Açaí Emergency Fund',
      category: 'Food Crimes',
      observation:
        'Would probably consider borrowing money from an orphan charity just to place an Açaí order before it sells out. No delay is acceptable. No craving shall be left unanswered.',
      verdict: 'Her Defense: "It\'s an emergency. I NEED MY AÇAÍ."',
    },
  ] as RoastCard[],
  gallery: [
    {
      id: 'birthday-cutie',
      src: '/assets/aistudio/download_10d5d823.jpg',
      title: 'Royal Birthday Cutie',
      caption: 'Kochy on her birthday, after waiting 18 years for this moment',
      category: 'Royal Moments',
      dateLabel: 'Gallery Plate I',
    },
    {
      id: 'candle-watch',
      src: '/assets/aistudio/Cat___0703a518.jpg',
      title: 'The Midnight Candle Watch',
      caption: "Even on her birthday, she's still an overthinker!",
      category: 'Studio',
      dateLabel: 'Gallery Plate II',
    },
    {
      id: 'five-candles',
      src: '/assets/aistudio/download__2__3c7cc827.jpg',
      title: 'Glowing Wish Hour',
      caption: 'Kochy after realizing she has a Calculus exam just a few days after her birthday',
      category: 'Royal Moments',
      dateLabel: 'Gallery Plate III',
    },
    {
      id: 'party-toast',
      src: '/assets/aistudio/download__1__e0e2bcea.jpg',
      title: 'Polka-Dot Party Celebration',
      caption: "Even when you turn 118, not just 18, you'll still be the cutest little kitty, Kochy",
      category: 'Royal Moments',
      dateLabel: 'Gallery Plate IV',
    },
  ] as GalleryPhoto[],
  royalAwards: [
    {
      id: 'aesthetic-perfectionist',
      title: 'The Aesthetic Perfectionist',
      citation:
        "In recognition of her ability to turn the simplest things into beautiful experiences. She is like fertile soil: wherever a seed happens to fall, a flower blooms. It's as if beauty naturally finds its way into everything she touches.",
      category: 'Impeccable Taste',
      year: '2026',
      initialApplause: 31,
    },
    {
      id: 'human-sunshine',
      title: 'The Human Sunshine Award',
      citation:
        'In recognition of her contagious laughter, sweet personality, and extraordinary ability to turn your day around in less than a second — transforming sadness and frustration into pure happiness and uncontrollable laughter, all with the innocent, angelic heart of a child.',
      category: 'Heart of Gold',
      year: '2026',
      initialApplause: 42,
    },
    {
      id: 'expert-eye',
      title: 'The Expert Eye Award',
      citation:
        'In recognition of her remarkably sharp eye for the tiniest details, especially when it comes to spotting the prettiest girls. From identifying the most beautiful ones to mastering the art of flirting and pursuing them, she clearly holds a PhD in this particular field! 😂',
      category: 'Unmatched Eye for Beauty',
      year: '2026',
      initialApplause: 24,
    },
  ] as RoyalAward[],
  heartfelt: {
    kicker: 'From the Heart',
    heading: 'Wishes Inscribed for Princess Yzwy',
    tribute:
      'Beyond the crowns, confetti, and playful titles, what truly makes today special is celebrating who you are: fiercely smart, genuinely warm, endlessly creative, and radiant in every season.',
    initialWishes: [
      {
        id: 'w1',
        author: 'Royal Court',
        message: 'May this next chapter bring you bold dreams, peaceful mornings, and pure happiness.',
      },
      {
        id: 'w2',
        author: 'Engineering Guild',
        message:
          'Wishing you zero exam stress, unlimited excuses to postpone studying, and endless playtime with little Ali — may your exams somehow pass themselves!',
      },
    ],
  },
  finalSurprise: {
    kicker: 'The Royal Vault',
    heading: 'Your Birthday Treasure Awaits',
    prompt: 'Tap the royal seal below to unbox your official birthday privileges.',
    vouchers: [
      {
        id: 'v1',
        title: 'Unlimited Sweet Treat Decree',
        detail: 'Redeemable for your favorite cake, pastries, or artisanal dessert—no questions asked.',
      },
      {
        id: 'v2',
        title: 'Guilt-Free Relaxation Pass',
        detail: 'One full day dedicated strictly to cozy comfort, good music, and zero chores.',
      },
      {
        id: 'v3',
        title: 'Golden Hour Celebration Dinner',
        detail: 'A dressed-up birthday toast at a table chosen solely by Her Royal Highness.',
      },
    ],
  },
};