export type AudioTrack = {
  id: number;
  artist: string;
  title: string;
  durationMs: number;
  src: string;
};

class AudioPlayerStore {
  queue = $state.raw<AudioTrack[]>([]);
  index = $state(-1);
  playing = $state(false);
  currentTime = $state(0);
  duration = $state(0);

  current = $derived(this.index >= 0 ? (this.queue[this.index] ?? null) : null);

  play = (track: AudioTrack) => {
    const existing = this.queue.findIndex((item) => item.id === track.id);
    if (existing >= 0) {
      this.index = existing;
    } else {
      this.queue = [...this.queue, track];
      this.index = this.queue.length - 1;
    }
    this.playing = true;
  };

  toggle = () => {
    if (!this.current) {
      return;
    }
    this.playing = !this.playing;
  };

  next = () => {
    if (this.queue.length === 0) {
      return;
    }
    this.index = (this.index + 1) % this.queue.length;
    this.playing = true;
  };

  prev = () => {
    if (this.queue.length === 0) {
      return;
    }
    this.index = (this.index - 1 + this.queue.length) % this.queue.length;
    this.playing = true;
  };
}

export const audioPlayer = new AudioPlayerStore();
