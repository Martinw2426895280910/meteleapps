// Real MP3 Audio Player and UI Sound Effects Engine for METELE APPS

export interface Mp3Track {
  id: string;
  name: string;
  genre: string;
  url: string;
  durationApprox?: string;
}

export const MP3_PLAYLIST: Mp3Track[] = [
  {
    id: 'track1',
    name: 'Cyber Synthwave Energy',
    genre: 'Electrónica / Synth & Beats',
    url: '/audio/electronic_track1.mp3',
    durationApprox: '6:12'
  },
  {
    id: 'track2',
    name: 'Tech House & Bassline',
    genre: 'House / Techno Melódico',
    url: '/audio/electronic_track2.mp3',
    durationApprox: '5:48'
  },
  {
    id: 'track3',
    name: 'Future Bass & Neon Flow',
    genre: 'Electrónica Progresiva',
    url: '/audio/electronic_track3.mp3',
    durationApprox: '5:24'
  }
];

class AudioEngine {
  private audioElement: HTMLAudioElement | null = null;
  private sfxContext: AudioContext | null = null;
  private sfxGain: GainNode | null = null;
  private isSfxEnabled: boolean = true;
  private currentTrackIndex: number = 0;
  private isPlaying: boolean = false;
  private volume: number = 0.4;
  private currentTime: number = 0;
  private duration: number = 0;
  private listeners: Set<() => void> = new Set();
  private playlist: Mp3Track[] = [...MP3_PLAYLIST];

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudioElement();
    }
  }

  private initAudioElement() {
    if (this.audioElement) return;

    this.audioElement = new Audio();
    this.audioElement.loop = true;
    this.audioElement.volume = this.volume;
    this.audioElement.preload = 'metadata';

    const currentTrack = this.playlist[this.currentTrackIndex];
    if (currentTrack) {
      this.audioElement.src = currentTrack.url;
    }

    this.audioElement.addEventListener('play', () => {
      this.isPlaying = true;
      this.notify();
    });

    this.audioElement.addEventListener('pause', () => {
      this.isPlaying = false;
      this.notify();
    });

    this.audioElement.addEventListener('timeupdate', () => {
      if (this.audioElement) {
        this.currentTime = this.audioElement.currentTime;
        this.duration = this.audioElement.duration || 0;
        this.notify();
      }
    });

    this.audioElement.addEventListener('ended', () => {
      this.nextTrack();
    });

    this.audioElement.addEventListener('error', (e) => {
      console.warn('Error al reproducir pista MP3:', e);
      this.isPlaying = false;
      this.notify();
    });
  }

  private initSfxContext() {
    if (!this.sfxContext && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.sfxContext = new AudioCtx();
      this.sfxGain = this.sfxContext.createGain();
      this.sfxGain.gain.setValueAtTime(0.15, this.sfxContext.currentTime);
      this.sfxGain.connect(this.sfxContext.destination);
    }
    if (this.sfxContext && this.sfxContext.state === 'suspended') {
      this.sfxContext.resume();
    }
  }

  public subscribe(callback: () => void) {
    this.listeners.add(callback);
    callback();
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notify() {
    this.listeners.forEach((cb) => cb());
  }

  // ==========================================
  // MP3 PLAYBACK CONTROLS
  // ==========================================

  public async toggleMusic(): Promise<boolean> {
    this.initAudioElement();
    if (!this.audioElement) return false;

    if (this.isPlaying) {
      this.audioElement.pause();
      return false;
    } else {
      try {
        await this.audioElement.play();
        return true;
      } catch (err) {
        console.warn('No se pudo iniciar reproducción de audio:', err);
        return false;
      }
    }
  }

  public async playMusic(): Promise<void> {
    this.initAudioElement();
    if (!this.audioElement) return;
    try {
      await this.audioElement.play();
    } catch (err) {
      console.warn('Play blocked:', err);
    }
  }

  public pauseMusic() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
  }

  public setTrack(index: number) {
    if (index < 0 || index >= this.playlist.length) return;
    this.currentTrackIndex = index;
    const track = this.playlist[index];

    this.initAudioElement();
    if (this.audioElement) {
      const wasPlaying = this.isPlaying;
      this.audioElement.src = track.url;
      this.audioElement.load();
      if (wasPlaying) {
        this.audioElement.play().catch(() => {});
      }
      this.notify();
    }
  }

  public nextTrack() {
    const nextIdx = (this.currentTrackIndex + 1) % this.playlist.length;
    this.setTrack(nextIdx);
  }

  public prevTrack() {
    const prevIdx = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
    this.setTrack(prevIdx);
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
    this.notify();
  }

  public seek(seconds: number) {
    if (this.audioElement && this.duration > 0) {
      this.audioElement.currentTime = Math.max(0, Math.min(this.duration, seconds));
    }
  }

  public loadCustomMp3(file: File) {
    try {
      const objectUrl = URL.createObjectURL(file);
      const customTrack: Mp3Track = {
        id: `custom-${Date.now()}`,
        name: file.name.replace(/\.[^/.]+$/, ''),
        genre: 'Archivo MP3 Propio',
        url: objectUrl,
        durationApprox: 'Local'
      };

      this.playlist.unshift(customTrack);
      this.setTrack(0);
      this.playMusic();
    } catch (err) {
      console.error('Error al cargar archivo MP3 local:', err);
    }
  }

  // Getters
  public getCurrentTrack(): Mp3Track {
    return this.playlist[this.currentTrackIndex] || this.playlist[0];
  }

  public getPlaylist(): Mp3Track[] {
    return this.playlist;
  }

  public isMusicRunning(): boolean {
    return this.isPlaying;
  }

  public getVolume(): number {
    return this.volume;
  }

  public getCurrentTime(): number {
    return this.currentTime;
  }

  public getDuration(): number {
    return this.duration;
  }

  // ==========================================
  // CRISP UI SOUND EFFECTS
  // ==========================================

  public toggleSfx(): boolean {
    this.isSfxEnabled = !this.isSfxEnabled;
    if (this.isSfxEnabled) {
      this.playSelect();
    }
    this.notify();
    return this.isSfxEnabled;
  }

  public isSfxOn(): boolean {
    return this.isSfxEnabled;
  }

  public playTap() {
    if (!this.isSfxEnabled) return;
    try {
      this.initSfxContext();
      if (!this.sfxContext || !this.sfxGain) return;

      const osc = this.sfxContext.createOscillator();
      const gain = this.sfxContext.createGain();
      const now = this.sfxContext.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.04);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch {}
  }

  public playSelect() {
    if (!this.isSfxEnabled) return;
    try {
      this.initSfxContext();
      if (!this.sfxContext || !this.sfxGain) return;

      const now = this.sfxContext.currentTime;
      const osc = this.sfxContext.createOscillator();
      const gain = this.sfxContext.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.08);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {}
  }

  public playImageExpand() {
    if (!this.isSfxEnabled) return;
    try {
      this.initSfxContext();
      if (!this.sfxContext || !this.sfxGain) return;

      const now = this.sfxContext.currentTime;
      const osc = this.sfxContext.createOscillator();
      const gain = this.sfxContext.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.exponentialRampToValueAtTime(950, now + 0.12);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now);
      osc.stop(now + 0.14);
    } catch {}
  }

  public playToggle() {
    if (!this.isSfxEnabled) return;
    try {
      this.initSfxContext();
      if (!this.sfxContext || !this.sfxGain) return;

      const now = this.sfxContext.currentTime;
      const osc = this.sfxContext.createOscillator();
      const gain = this.sfxContext.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.06);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch {}
  }

  public playSuccess() {
    if (!this.isSfxEnabled) return;
    try {
      this.initSfxContext();
      if (!this.sfxContext || !this.sfxGain) return;

      const now = this.sfxContext.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        if (!this.sfxContext || !this.sfxGain) return;
        const osc = this.sfxContext.createOscillator();
        const gain = this.sfxContext.createGain();

        osc.type = 'sine';
        const start = now + idx * 0.05;
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.18, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.12);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(start);
        osc.stop(start + 0.12);
      });
    } catch {}
  }
}

export const audioEngine = new AudioEngine();
