<script lang="ts">
  import { toBody } from '../lib/toBody';
  import { audioPlayer } from '../stores/audio.svelte';
  import { rewriteMediaUrl } from '../services/types';
  import { locale } from '../stores/locale.svelte';

  const label = $derived(
    audioPlayer.current
      ? `${audioPlayer.current.artist} — ${audioPlayer.current.title}`
      : locale.t('no_track'),
  );
</script>

<div id="ajax_audio_player" class={['ovk-audio-dock', !audioPlayer.current && 'hidden']} {@attach toBody}>
  <div id="aj_player">
    <div id="aj_player_internal_controls">
      <div id="aj_player_play">
        <div
          id="aj_player_play_btn"
          class={audioPlayer.playing ? '' : 'paused'}
          role="button"
          tabindex="0"
          onclick={() => audioPlayer.toggle()}
          onkeydown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              audioPlayer.toggle();
            }
          }}
        ></div>
      </div>
      <div id="aj_player_track">
        <div id="aj_player_track_name">
          <div id="aj_player_track_title">{label}</div>
        </div>
        <div class="selectableTrack">
          <div class="slider"></div>
        </div>
      </div>
      <div id="aj_player_buttons">
        <div
          id="aj_player_previous"
          role="button"
          tabindex="0"
          onclick={() => audioPlayer.prev()}
          onkeydown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              audioPlayer.prev();
            }
          }}
        ></div>
        <div
          id="aj_player_next"
          role="button"
          tabindex="0"
          onclick={() => audioPlayer.next()}
          onkeydown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              audioPlayer.next();
            }
          }}
        ></div>
      </div>
    </div>
    <div
      id="aj_player_close_btn"
      role="button"
      tabindex="0"
      onclick={() => audioPlayer.stop()}
      onkeydown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          audioPlayer.stop();
        }
      }}
    ></div>
  </div>
  <audio
    {@attach (node) => {
      const src = rewriteMediaUrl(audioPlayer.current?.src ?? '');
      if (node.getAttribute('src') !== src) {
        node.src = src;
      }
      if (audioPlayer.playing && src) {
        void node.play().catch(() => {
          audioPlayer.playing = false;
        });
      } else {
        node.pause();
      }
      return () => node.pause();
    }}
    bind:currentTime={audioPlayer.currentTime}
    bind:duration={audioPlayer.duration}
    onended={() => audioPlayer.next()}
  ></audio>
</div>
