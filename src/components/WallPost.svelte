<script lang="ts">
  import MediaImg from './MediaImg.svelte';
  import { localeForIntl } from '../lib/languages';
  import { router } from '../lib/router.svelte';
  import { displayName, wallHref, type WallPost } from '../services/types';
  import { locale } from '../stores/locale.svelte';

  let { post, showTarget = false }: { post: WallPost; showTarget?: boolean } = $props();

  const authorHref = $derived(`/id${post.author.id}`);
  const targetHref = $derived(`/id${post.target.id}`);
  const postHref = $derived(wallHref(post));
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
</script>

<table class="post" style="font-size: 11px; width: 100%; margin-bottom: 8px;">
  <tbody>
    <tr>
      <td style="width: 54px; vertical-align: top; padding-right: 6px;">
        <a href={authorHref} onclick={(event) => router.handleClick(event, authorHref)}>
          <MediaImg src={post.author.avatar_url} width="50" height="50" alt="" />
        </a>
      </td>
      <td style="vertical-align: top;">
        <div class="post-author">
          <a href={authorHref} onclick={(event) => router.handleClick(event, authorHref)}>
            <b>{displayName(post.author)}</b>
          </a>
          {locale.t('writes')}
          {#if onForeignWall}
            <a href={targetHref} onclick={(event) => router.handleClick(event, targetHref)}>
              {locale.t('post_on_user_wall', displayName(post.target))}
            </a>
          {/if}
          <a
            href={postHref}
            style="float:right; color:var(--ovk-muted);"
            onclick={(event) => router.handleClick(event, postHref)}
          >
            {timeLabel}
          </a>
        </div>
        <div class="post-content" style="padding: 6px 5px;">{post.content}</div>
      </td>
    </tr>
  </tbody>
</table>
