<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import { api } from '../services/api';
  import type { AudioTrack } from '../services/types';
  import { audioPlayer } from '../stores/audio.svelte';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  let epoch = $state(0);
  let artist = $state('');
  let title = $state('');
  let error = $state<string | null>(null);
  let uploading = $state(false);

  const tracksPromise = $derived.by(() => {
    void epoch;
    return auth.token && auth.user
      ? api.audio(auth.token, auth.user.id).catch((): AudioTrack[] => [])
      : Promise.resolve([] as AudioTrack[]);
  });

  async function upload(event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    const file = input.files?.[0];
    if (!file || !auth.token) {
      return;
    }
    uploading = true;
    error = null;
    try {
      await api.uploadAudio(
        auth.token,
        file,
        artist.trim() || 'Unknown artist',
        title.trim() || file.name,
      );
      artist = '';
      title = '';
      epoch += 1;
    } catch (caught) {
      error = caught instanceof Error ? caught.message : 'Could not upload audio';
    } finally {
      uploading = false;
      input.value = '';
    }
  }

  async function remove(id: number) {
    if (!auth.token) {
      return;
    }
    try {
      await api.deleteAudio(auth.token, id);
      epoch += 1;
    } catch (caught) {
      error = caught instanceof Error ? caught.message : 'Could not delete audio';
    }
  }
</script>

<PageChrome title={locale.t('my_audios')}>
  {#await tracksPromise}
    <p class="m-0 text-vk-muted">{locale.t('loading_audio')}</p>
  {:then tracks}
    <form class="vk-gray-box" data-testid="audio-upload">
      <input class="vk-input" data-testid="audio-artist" bind:value={artist} placeholder={locale.t('performer')} />
      <input class="vk-input" data-testid="audio-title" bind:value={title} placeholder={locale.t('title')} />
      <input
        data-testid="audio-file"
        type="file"
        accept="audio/mpeg,audio/wav,audio/ogg,audio/webm,audio/mp4,.mp3,.wav"
        disabled={uploading}
        onchange={upload}
      />
    </form>
    {#if error}
      <p class="text-vk-error" data-testid="audio-error">{error}</p>
    {/if}
    {#each tracks as track (track.id)}
      <div data-testid={`audio-${track.id}`}>
        <button
          class="vk-profile-link"
          type="button"
          data-testid={`play-audio-${track.id}`}
          onclick={() =>
            audioPlayer.play({
              id: track.id,
              artist: track.artist,
              title: track.title,
              durationMs: track.duration_ms,
              src: track.src,
            })}
        >
          {track.artist} — {track.title}
        </button>
        <button class="link" type="button" data-testid={`delete-audio-${track.id}`} onclick={() => remove(track.id)}
          >{locale.t('delete')}</button
        >
      </div>
    {:else}
      <div class="vk-empty">{locale.t('no_audio_yet')}</div>
    {/each}
  {/await}
</PageChrome>
