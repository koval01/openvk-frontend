<script lang="ts">
  import { api } from '../../services/api';
  import type { Video } from '../../services/types';
  import { overlay } from '../../stores/overlay.svelte';
  import { auth } from '../../stores/auth.svelte';
  import { locale } from '../../stores/locale.svelte';

  let query = $state('');

  const videosPromise = $derived(
    auth.token && auth.user
      ? api.videos(auth.token, auth.user.id)
      : Promise.resolve([] as Video[]),
  );

  function shown(videos: Video[]) {
    const needle = query.trim().toLowerCase();
    if (!needle) {
      return videos;
    }
    return videos.filter((video) => video.title.toLowerCase().includes(needle));
  }
</script>

<div class="attachment_selector">
  <div class="topGrayBlock display_flex_row">
    <a href="/videos" id="__fast_video_upload" aria-label={locale.t('upload_button')}>
      <input class="button" type="button" value={locale.t('upload_button')} />
    </a>
    <input
      type="search"
      id="video_query"
      maxlength="20"
      placeholder={locale.t('header_search')}
      bind:value={query}
    />
  </div>
  <div id="attachment_insert">
    {#await videosPromise}
      {locale.t('loading_videos')}
    {:then videos}
      <div class="videosInsert">
        {#each shown(videos) as video (video.id)}
          <div class="video_list">
            <a
              class="video-preview"
              href="/video{auth.user?.id}_{video.id}"
              onclick={(event) => {
                event.preventDefault();
                overlay.attachAndClose({
                  kind: 'video',
                  id: `${auth.user?.id}_${video.id}`,
                  url: video.src ?? undefined,
                  title: video.title,
                });
              }}
            >
              <b>{video.title}</b>
            </a>
          </div>
        {:else}
          {locale.t('no_videos')}
        {/each}
      </div>
    {:catch}
      <p class="vk-error">{locale.t('loading_videos')}</p>
    {/await}
  </div>
</div>
