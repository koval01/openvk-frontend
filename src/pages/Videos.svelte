<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import { api } from '../services/api';
  import type { Video } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  let epoch = $state(0);
  let title = $state('');
  let error = $state<string | null>(null);
  let uploading = $state(false);

  const videosPromise = $derived.by(() => {
    void epoch;
    return auth.token && auth.user
      ? api.videos(auth.token, auth.user.id).catch((): Video[] => [])
      : Promise.resolve([] as Video[]);
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
      await api.uploadVideo(auth.token, file, title.trim() || file.name);
      title = '';
      epoch += 1;
    } catch (caught) {
      error = caught instanceof Error ? caught.message : 'Could not upload video';
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
      await api.deleteVideo(auth.token, id);
      epoch += 1;
    } catch (caught) {
      error = caught instanceof Error ? caught.message : 'Could not delete video';
    }
  }
</script>

<PageChrome title={locale.t('my_videos')}>
  {#await videosPromise}
    <p class="m-0 text-vk-muted">{locale.t('loading_videos')}</p>
  {:then videos}
    <form class="vk-gray-box" data-testid="video-upload">
      <input class="vk-input" data-testid="video-title" bind:value={title} placeholder={locale.t('title')} />
      <input
        data-testid="video-file"
        type="file"
        accept="video/mp4,video/webm,video/quicktime"
        disabled={uploading}
        onchange={upload}
      />
    </form>
    {#if error}
      <p class="text-vk-error" data-testid="video-error">{error}</p>
    {/if}
    {#each videos as video (video.id)}
      <div class="border-b border-vk-border py-2" data-testid={`video-${video.id}`}>
        <b>{video.title}</b>
        {#if video.src}
          <div>
            <video controls src={video.src} width="320" data-testid={`video-player-${video.id}`}>
              <track kind="captions" />
            </video>
          </div>
        {/if}
        <button class="link" type="button" data-testid={`delete-video-${video.id}`} onclick={() => remove(video.id)}
          >{locale.t('delete')}</button
        >
      </div>
    {:else}
      <div class="vk-empty">{locale.t('no_videos_yet')}</div>
    {/each}
  {/await}
</PageChrome>
