// Procedural Web Audio API Sound Engine for One Piece Cinematic Experience
// Zero external assets required — runs instantly in any browser without CORS or missing asset issues.

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.5;
  private oceanNode: { stop: () => void } | null = null;
  private drumsInterval: number | null = null;

  constructor() {
    // AudioContext will be initialized on first user interaction
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopOceanAmbience();
      this.stopDrumsOfLiberation();
    }
    return !this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // --- UI Click / Chime ---
  public playClick(freq = 600, duration = 0.08) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

    gain.gain.setValueAtTime(this.volume * 0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  // --- UI Hover Whisper ---
  public playHover() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.06);

    gain.gain.setValueAtTime(this.volume * 0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.06);
  }

  // --- Katana / Sword Slash (Zoro) ---
  public playSwordSlash() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const bufferSize = this.ctx.sampleRate * 0.35;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(4500, this.ctx.currentTime + 0.08);
    filter.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.35);
    filter.Q.value = 6;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(this.volume * 0.7, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
  }

  // --- Fire / Diable Jambe Ignite (Sanji) ---
  public playFireBurst() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const bufferSize = this.ctx.sampleRate * 0.6;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.sin((i / bufferSize) * Math.PI);
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(250, this.ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(1400, this.ctx.currentTime + 0.2);
    filter.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.6);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(this.volume * 0.6, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
  }

  // --- Thunder / Lightning Strike ---
  public playThunder() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const duration = 1.2;
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + duration);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(this.volume * 0.9, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
  }

  // --- Drums of Liberation ("Doom Dut-Da-Da") ---
  public startDrumsOfLiberation() {
    if (this.isMuted || this.drumsInterval) return;
    this.initContext();

    const pattern = [0, 240, 480, 600]; // milliseconds rhythm
    let beatIdx = 0;

    const playBeat = () => {
      if (this.isMuted || !this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const freq = beatIdx === 0 ? 95 : 125;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(35, this.ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(this.volume * 0.5, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);

      beatIdx = (beatIdx + 1) % pattern.length;
    };

    const scheduleNext = () => {
      playBeat();
      const delay = beatIdx === 0 ? 550 : 220;
      this.drumsInterval = setTimeout(scheduleNext, delay) as unknown as number;
    };

    scheduleNext();
  }

  public stopDrumsOfLiberation() {
    if (this.drumsInterval) {
      clearTimeout(this.drumsInterval);
      this.drumsInterval = null;
    }
  }

  // --- Ambient Ocean Waves ---
  public startOceanAmbience() {
    if (this.isMuted || this.oceanNode) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const bufferSize = this.ctx.sampleRate * 4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + 0.02 * white) / 1.02; // Pink-ish noise
        lastOut = data[i];
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 350;

      // LFO to swell waves
      const lfo = this.ctx.createOscillator();
      lfo.frequency.value = 0.12; // slow wave swell
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.value = 200;

      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      const masterGain = this.ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(this.volume * 0.25, this.ctx.currentTime + 2);

      noise.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(this.ctx.destination);

      noise.start();
      lfo.start();

      this.oceanNode = {
        stop: () => {
          try {
            masterGain.gain.linearRampToValueAtTime(0.001, this.ctx!.currentTime + 1);
            setTimeout(() => {
              noise.stop();
              lfo.stop();
            }, 1000);
          } catch {
            // Ignore if already stopped
          }
          this.oceanNode = null;
        }
      };
    } catch {
      // Audio context might need user gesture
    }
  }

  public stopOceanAmbience() {
    if (this.oceanNode) {
      this.oceanNode.stop();
      this.oceanNode = null;
    }
  }
}

export const sound = new SoundEngine();
