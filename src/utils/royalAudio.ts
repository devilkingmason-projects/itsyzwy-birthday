export const LA_VIE_EN_ROSE_SRC =
  '/assets/aistudio/Emily_Watts_-_La_Vie_En_Rose__Official_Music_Video__197fbacc.mp3';

export interface MusicState {
  isPlaying: boolean;
  hasStarted: boolean;
  autoplayBlocked: boolean;
}

type MusicListener = (state: MusicState) => void;

class RoyalAudioEngine {
  private ctx: AudioContext | null = null;
  private audio: HTMLAudioElement | null = null;
  private listeners = new Set<MusicListener>();
  private state: MusicState = {
    isPlaying: false,
    hasStarted: false,
    autoplayBlocked: false,
  };
  private autoplayAttempted = false;

  private ensureAudio(): HTMLAudioElement | null {
    if (typeof window === 'undefined') return null;
    if (!this.audio) {
      const el = new Audio(LA_VIE_EN_ROSE_SRC);
      el.loop = true;
      el.volume = 0.35;
      el.preload = 'auto';
      el.currentTime = 0;

      el.addEventListener('play', () => {
        this.updateState({
          isPlaying: true,
          hasStarted: true,
          autoplayBlocked: false,
        });
      });

      el.addEventListener('pause', () => {
        this.updateState({
          isPlaying: false,
        });
      });

      this.audio = el;
    }
    return this.audio;
  }

  private updateState(partial: Partial<MusicState>) {
    this.state = { ...this.state, ...partial };
    this.listeners.forEach((listener) => listener(this.state));
  }

  public getState(): MusicState {
    return this.state;
  }

  public subscribe(listener: MusicListener): () => void {
    this.listeners.add(listener);
    listener(this.state);
    return () => {
      this.listeners.delete(listener);
    };
  }

  public async attemptAutoplay(): Promise<boolean> {
    if (this.autoplayAttempted || this.state.hasStarted) {
      return this.state.isPlaying;
    }
    this.autoplayAttempted = true;

    const audio = this.ensureAudio();
    if (!audio) return false;

    try {
      audio.volume = 0.35;
      audio.loop = true;
      audio.currentTime = 0;
      await audio.play();
      this.updateState({
        isPlaying: true,
        hasStarted: true,
        autoplayBlocked: false,
      });
      return true;
    } catch {
      this.updateState({
        isPlaying: false,
        autoplayBlocked: true,
      });
      return false;
    }
  }

  public async play(): Promise<boolean> {
    const audio = this.ensureAudio();
    if (!audio) return false;

    try {
      audio.volume = 0.35;
      audio.loop = true;
      if (!this.state.hasStarted) {
        audio.currentTime = 0;
      }
      await audio.play();
      this.updateState({
        isPlaying: true,
        hasStarted: true,
        autoplayBlocked: false,
      });
      return true;
    } catch {
      this.updateState({
        isPlaying: false,
        autoplayBlocked: true,
      });
      return false;
    }
  }

  public pause() {
    const audio = this.audio;
    if (audio && !audio.paused) {
      audio.pause();
    }
    this.updateState({
      isPlaying: false,
      autoplayBlocked: false,
    });
  }

  public toggleMusic(): boolean {
    const audio = this.ensureAudio();
    if (!audio) return false;

    if (!audio.paused) {
      this.pause();
      return false;
    }

    void this.play();
    return true;
  }

  public stopMusic() {
    if (this.audio && !this.audio.paused) {
      this.audio.pause();
    }
    this.updateState({
      isPlaying: false,
    });
  }

  // Subtle celebratory UI chimes for interactive confetti triggers (not background music)
  private ensureContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
    return this.ctx;
  }

  private playTone(
    freq: number,
    startOffset: number,
    duration: number,
    volume = 0.05,
    type: OscillatorType = 'sine'
  ) {
    const ctx = this.ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime + startOffset;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.04);
  }

  public playRoyalFanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      this.playTone(freq, idx * 0.07, 0.45, 0.04, 'sine');
    });
  }

  public playSparkleChime() {
    const notes = [880.0, 1046.5, 1318.51];
    notes.forEach((freq, idx) => {
      this.playTone(freq, idx * 0.05, 0.35, 0.035, 'sine');
    });
  }
}

export const royalAudio = new RoyalAudioEngine();
