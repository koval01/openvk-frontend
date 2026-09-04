<script lang="ts">
  import Comments from '../components/Comments.svelte';
  import LikeButton from '../components/LikeButton.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import { interceptUnlessModified, router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { ownerHref, rewriteMediaUrl, videoPermalink } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';
  import { overlay } from '../stores/overlay.svelte';

  const ownerId = $derived(Number(router.route.userId));
  const videoId = $derived(Number(router.route.videoId));
  const ownerUrl = $derived(ownerHref(ownerId));

  const videoPromise = $derived.by(() => {
    if (!auth.token || !ownerId || !videoId) {
      return Promise.reject(new Error('missing video'));
    }
    return api.video(ownerId, videoId, auth.token);
  });
</script>

{#await videoPromise}
  <PageChrome title={locale.t('video')}>
    <p>{locale.t('loading_videos')}</p>
  </PageChrome>
{:then video}
  {#snippet header()}
    <a href={ownerUrl} onclick={(event) => router.handleClick(event, ownerUrl)}>{locale.t('videos')}</a>
    »
    {video.title}
  {/snippet}
  <PageChrome title={video.title} {header}>
    {#if video.src}
      <video controls src={rewriteMediaUrl(video.src)} style="width:100%;max-width:640px;">
        <track kind="captions" />
      </video>
      <p>
        <a
          href={videoPermalink(ownerId, videoId)}
          onclick={(event) => {
            if (!interceptUnlessModified(event)) {
              return;
            }
            overlay.openVideo({
              title: video.title,
              src: video.src ?? '',
              href: videoPermalink(ownerId, videoId),
              ownerId,
              objectId: videoId,
              liked: video.liked,
              count: video.like_count,
            });
          }}>{locale.t('video')}</a
        >
      </p>
    {/if}
    <p>
      <LikeButton
        id={`${ownerId}_${videoId}`}
        type="video"
        liked={video.liked}
        count={video.like_count}
      />
    </p>
    <Comments target="video" {ownerId} objectId={videoId} />
    <p>
      <a
        href="/report/{videoId}?type=video"
        onclick={(event) => router.handleClick(event, `/report/${videoId}?type=video`)}
        >{locale.t('report')}</a
      >
    </p>
  </PageChrome>
{:catch}
  <PageChrome title={locale.t('not_found')}>
    <div class="ovk-empty">{locale.t('not_found')}</div>
  </PageChrome>
{/await}
