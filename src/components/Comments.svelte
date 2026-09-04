<script lang="ts">
  import LikeButton from './LikeButton.svelte';
  import MediaImg from './MediaImg.svelte';
  import { localeForIntl } from '../lib/languages';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { displayName, type Comment, type CommentTarget } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  let {
    target,
    ownerId,
    objectId,
    showTitle = true,
  }: {
    target: CommentTarget;
    ownerId: number;
    objectId: number;
    showTitle?: boolean;
  } = $props();

  let draft = $state('');
  let error = $state<string | null>(null);
  let posting = $state(false);
  let epoch = $state(0);
  let expanded = $state(false);

  const commentsPromise = $derived.by(() => {
    void epoch;
    if (!auth.token || !ownerId || !objectId) {
      return Promise.resolve([] as Comment[]);
    }
    return api.comments(target, ownerId, objectId, auth.token);
  });

  async function submit(event: Event) {
    event.preventDefault();
    if (!auth.token || !draft.trim()) {
      return;
    }
    posting = true;
    error = null;
    try {
      await api.writeComment(target, ownerId, objectId, draft.trim(), auth.token);
      draft = '';
      epoch += 1;
    } catch (caught) {
      error = caught instanceof Error ? caught.message : locale.t('error');
    } finally {
      posting = false;
    }
  }

  function timeLabel(value: string) {
    return new Date(value).toLocaleString(localeForIntl(locale.code), {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  function pinComments(node: HTMLElement) {
    if (window.location.hash === '#comments') {
      node.scrollIntoView();
    }
  }
</script>

{#snippet heading(count)}
  {#if showTitle}
    <div>
      <h4>
        {#if count == null}
          {locale.t('comments')}
        {:else}
          {locale.t('comments')} ({count})
        {/if}
      </h4>
    </div>
  {/if}
{/snippet}

<div id="comments" {@attach pinComments}>
  {#await commentsPromise}
    {@render heading()}
    <p>{locale.t('loading_comments')}</p>
  {:then comments}
    {@render heading(comments.length)}
    {#if auth.token}
      <div id="standaloneCommentBox">
        <div id="write" class="model_content_textarea" style="padding: 5px 0;">
          <form method="post" style="margin: 0;" onsubmit={submit}>
            <textarea
              class={['small-textarea', expanded && 'expanded-textarea']}
              name="text"
              bind:value={draft}
              placeholder={locale.t('write')}
              autocomplete="off"
              style="width: 100%; resize: none;"
              onfocus={() => {
                expanded = true;
              }}
            ></textarea>
            <div></div>
            {#if error}
              <p class="vk-error">{error}</p>
            {/if}
            <div class="post-buttons" style:display={expanded ? 'block' : 'none'}>
              <br />
              <input
                type="submit"
                class="button"
                value={posting ? locale.t('sending') : locale.t('write')}
                disabled={posting}
              />
            </div>
          </form>
        </div>
      </div>
    {/if}
    {#if comments.length > 0}
      <div class="scroll_container">
        {#each comments as comment (comment.id)}
          {@const href = `/id${comment.author.id}`}
          <div class="scroll_node">
            <table
              border="0"
              style="font-size: 11px;"
              class="post comment"
              id="_comment{comment.id}"
            >
              <tbody>
                <tr>
                  <td width="30" valign="top">
                    <a {href} onclick={(event) => router.handleClick(event, href)}>
                      <MediaImg
                        src={comment.author.avatar_url}
                        width="30"
                        class="cCompactAvatars post-avatar"
                        alt=""
                      />
                    </a>
                  </td>
                  <td width="100%" valign="top">
                    <div class="post-author">
                      <a {href} onclick={(event) => router.handleClick(event, href)}>
                        <b class="post-author-name">{displayName(comment.author)}</b>
                      </a>
                    </div>
                    <div class="post-content">
                      <div class="text">
                        <span class="really_text">{comment.content}</span>
                      </div>
                      <div class="post-menu">
                        <a href="#_comment{comment.id}" class="date">{timeLabel(comment.created_at)}</a>
                        <div style="float: right; font-size: .7rem;">
                          <LikeButton
                            id={String(comment.id)}
                            type="comment"
                            liked={comment.liked}
                            count={comment.like_count}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        {/each}
      </div>
    {:else}
      {locale.t('comments_tip')}
    {/if}
  {:catch}
    {@render heading()}
    <p class="vk-error">{locale.t('error')}</p>
  {/await}
</div>
