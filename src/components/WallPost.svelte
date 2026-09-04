<script lang="ts">
  import LikeButton from './LikeButton.svelte';
  import MediaImg from './MediaImg.svelte';
  import { localeForIntl } from '../lib/languages';
  import { interceptUnlessModified, router } from '../lib/router.svelte';
  import { audioPlayer } from '../stores/audio.svelte';
  import {
    displayName,
    ownerHref,
    userHref,
    rewriteMediaUrl,
    wallHref,
    photoPermalink,
    videoPermalink,
    type WallAttachment,
    type WallPost,
  } from '../services/types';
  import { locale } from '../stores/locale.svelte';
  import { overlay } from '../stores/overlay.svelte';

  let { post, showTarget = false }: { post: WallPost; showTarget?: boolean } = $props();

  const authorHref = $derived(userHref(post.author));
  const targetHref = $derived(ownerHref(post.target_id));
  const postHref = $derived(wallHref(post));
  const prettyId = $derived(`${post.target_id}_${post.id}`);
  const timeLabel = $derived(
    new Date(post.created_at).toLocaleString(localeForIntl(locale.code), {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
  );
  const onForeignWall = $derived(showTarget && post.author_id !== post.target_id);
  const tiles = $derived(
    post.attachments.filter((item) => item.kind === 'photo' || item.kind === 'video'),
  );
  const extras = $derived(
    post.attachments.filter((item) => item.kind !== 'photo' && item.kind !== 'video'),
  );

  function share(event: MouseEvent) {
    event.preventDefault();
    overlay.openDialog({
      unique: `share_${prettyId}`,
      title: locale.t('share'),
      text: post.content,
      panel: 'text',
      width: '420px',
      buttons: [{ label: locale.t('cancel') }, { label: locale.t('share') }],
      closeOnButtons: true,
    });
  }

  function pretty(item: WallAttachment) {
    return `${item.owner_id}_${item.object_id}`;
  }

  function openPhoto(item: WallAttachment, event: MouseEvent) {
    if (!interceptUnlessModified(event)) {
      return;
    }
    overlay.openPhoto([
      {
        id: pretty(item),
        url: item.url,
        title: item.title,
        ownerId: item.owner_id,
        objectId: item.object_id,
      },
    ]);
  }

  function openVideo(item: WallAttachment, event: MouseEvent) {
    if (!interceptUnlessModified(event)) {
      return;
    }
    overlay.openVideo({
      title: item.title || locale.t('video'),
      src: item.src || item.url,
      href: videoPermalink(item.owner_id, item.object_id),
      ownerId: item.owner_id,
      objectId: item.object_id,
    });
  }
</script>

<table
  border="0"
  style="font-size: 11px;"
  data-id={prettyId}
  class={['post', 'post_oldschool', post.nsfw && 'post-nsfw']}
>
  <tbody>
    <tr>
      <td class="post-author-ava" width="54" valign="top">
        <a class="post-author-url" href={authorHref} onclick={(event) => router.handleClick(event, authorHref)}>
          <MediaImg src={post.author.avatar_url} class="post-avatar" width="50" alt="" />
        </a>
      </td>
      <td width="100%" valign="top">
        <div class="post-author">
          <a href={authorHref} onclick={(event) => router.handleClick(event, authorHref)}>
            <b class="post-author-name">{displayName(post.author)}</b>
          </a>
          {locale.t('writes')}
          {#if onForeignWall}
            <a href={targetHref} class="mention" onclick={(event) => router.handleClick(event, targetHref)}>
              <b>
                {post.target_id < 0
                  ? locale.t('post_on_group_wall', displayName(post.target))
                  : locale.t('post_on_user_wall', displayName(post.target))}
              </b>
            </a>
          {/if}
          <br />
          <a href={postHref} class="date" onclick={(event) => router.handleClick(event, postHref)}>{timeLabel}</a>
        </div>
        <div class="post-content" id={prettyId}>
          <div class="text" id="text{prettyId}">
            <span class="really_text">{post.content}</span>
            {#if tiles.length > 0}
              <div class="attachments attachments_b">
                {#each tiles as item (`${item.kind}-${pretty(item)}`)}
                  <div class="attachment">
                    {#if item.kind === 'photo'}
                      {@const href = photoPermalink(item.owner_id, item.object_id)}
                      <a {href} onclick={(event) => openPhoto(item, event)}>
                        <img class="media" src={rewriteMediaUrl(item.url)} alt={item.title} />
                      </a>
                    {:else}
                      {@const href = videoPermalink(item.owner_id, item.object_id)}
                      <a class="compact_video" id="videoOpen" {href} onclick={(event) => openVideo(item, event)}>
                        <div class="play-button"><div class="play-button-ico"></div></div>
                        {#if item.url}
                          <img class="media" src={rewriteMediaUrl(item.url)} alt={item.title} />
                        {:else}
                          {item.title}
                        {/if}
                      </a>
                    {/if}
                  </div>
                {/each}
              </div>
            {/if}
            {#if extras.length > 0}
              <div class="attachments attachments_m">
                {#each extras as item (`${item.kind}-${item.object_id}-${item.title}`)}
                  <div class="attachment">
                    {#if item.kind === 'audio'}
                      <button
                        type="button"
                        class="link"
                        onclick={() =>
                          audioPlayer.play({
                            id: item.object_id,
                            artist: item.title,
                            title: item.title,
                            durationMs: 0,
                            src: item.src || item.url,
                          })}
                      >
                        {item.title}
                      </button>
                    {:else}
                      {item.title || item.kind}
                    {/if}
                  </div>
                {/each}
              </div>
            {/if}
          </div>
          {#if post.geo}
            <div class="post-geo">
              <a href={postHref} onclick={(event) => router.handleClick(event, postHref)}>{post.geo.name}</a>
            </div>
          {/if}
          {#if post.source}
            <div class="sourceDiv">
              <span>{locale.t('source')}: {post.source}</span>
            </div>
          {/if}
        </div>
        <div class="post-edit"></div>
        <div class="post-menu">
          <a href="{postHref}#comments" onclick={(event) => router.handleClick(event, `${postHref}#comments`)}>
            {locale.t('comments')}{post.comment_count ? ` (${post.comment_count})` : ''}
          </a>
          &nbsp;|&nbsp;
          <a id="reposts{prettyId}" class="post-share-button" href="/" onclick={share}>
            {locale.t('share')}
          </a>
          &nbsp;|&nbsp;
          <a
            href="/report/{post.id}?type=wall&amp;owner={post.target_id}"
            onclick={(event) =>
              router.handleClick(event, `/report/${post.id}?type=wall&owner=${post.target_id}`)}
          >
            {locale.t('report')}
          </a>
          <LikeButton id={prettyId} type="post" liked={post.liked} count={post.like_count} />
        </div>
      </td>
    </tr>
  </tbody>
</table>
