<script lang="ts">
  import HiddenFileButton from '../components/HiddenFileButton.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import { interceptUnlessModified } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { videoPermalink, type Video } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';
  import { overlay } from '../stores/overlay.svelte';

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

  async function upload(files: FileList | null, input: HTMLInputElement) {
    const file = files?.[0];
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
    const ok = await overlay.confirm({
      title: locale.t('warning'),
      text: locale.t('question_confirm'),
      yes: locale.t('yes'),
      no: locale.t('no'),
    });
    if (!ok) {
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
    <p>{locale.t('loading_videos')}</p>
  {:then videos}
    <form class="container_gray" data-testid="video-upload" onsubmit={(event) => event.preventDefault()}>
      <input data-testid="video-title" bind:value={title} placeholder={locale.t('title')} />
      <HiddenFileButton
        testId="video-file"
        accept="video/mp4,video/webm,video/quicktime"
        disabled={uploading}
        label={locale.t('upload_video')}
        onpick={(files, input) => void upload(files, input)}
      />
    </form>
    {#if error}
      <p class="vk-error" data-testid="video-error">{error}</p>
    {/if}
    {#each videos as video (video.id)}
      <div data-testid={`video-${video.id}`}>
        {#if video.src}
          <a
            class="compact_video"
            id="videoOpen"
            href={videoPermalink(video.owner_user_id, video.id)}
            onclick={(event) => {
              if (!interceptUnlessModified(event)) {
                return;
              }
              overlay.openVideo({
                title: video.title,
                src: video.src ?? '',
                href: videoPermalink(video.owner_user_id, video.id),
                ownerId: video.owner_user_id,
                objectId: video.id,
                liked: video.liked,
                count: video.like_count,
              });
            }}>{video.title}</a
          >
        {:else}
          <b>{video.title}</b>
        {/if}
        <button class="link" type="button" data-testid={`delete-video-${video.id}`} onclick={() => remove(video.id)}
          >{locale.t('delete')}</button
        >
      </div>
    {:else}
      <div class="ovk-empty">{locale.t('no_videos_yet')}</div>
    {/each}
  {/await}
</PageChrome>
