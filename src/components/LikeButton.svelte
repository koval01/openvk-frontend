<script lang="ts">
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { likePageHref, likersPageHref, type LikeKind } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  let {
    id,
    type = 'post',
    tidy = false,
    liked = false,
    count = 0,
  }: {
    id: string;
    type?: LikeKind;
    tidy?: boolean;
    liked?: boolean;
    count?: number;
  } = $props();

  let likedNow = $derived(liked);
  let countNow = $derived(count);
  let pending = $state(false);
  let tip = $state(false);
  let enterTimer = 0;
  let leaveTimer = 0;

  const href = $derived(likePageHref(type, id));
  const likersHref = $derived(likersPageHref(type, id));

  async function toggle(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (!auth.token) {
      router.goto('/login');
      return;
    }
    if (pending) {
      return;
    }
    const nextLiked = !likedNow;
    likedNow = nextLiked;
    countNow = Math.max(0, countNow + (nextLiked ? 1 : -1));
    pending = true;
    try {
      const state = await api.toggleLike(type, id, auth.token);
      likedNow = state.liked;
      countNow = state.count;
    } catch {
      likedNow = liked;
      countNow = count;
    } finally {
      pending = false;
      if (countNow <= 0) {
        tip = false;
      }
    }
  }

  function showTip() {
    window.clearTimeout(leaveTimer);
    if (countNow <= 0) {
      return;
    }
    enterTimer = window.setTimeout(() => {
      tip = true;
    }, 400);
  }

  function hideTip() {
    window.clearTimeout(enterTimer);
    leaveTimer = window.setTimeout(() => {
      tip = false;
    }, 500);
  }
</script>

<div class={['like_wrap', tidy && 'tidy']}>
  <a
    {href}
    class="post-like-button"
    data-liked={likedNow ? '1' : '0'}
    data-likes={String(countNow)}
    data-id={id}
    data-type={type}
    onclick={toggle}
    onmouseenter={showTip}
    onmouseleave={hideTip}
  >
    <div class="heart" id={likedNow ? 'liked' : undefined}></div>
    <span class="likeCnt">{countNow > 0 ? countNow : ''}</span>
  </a>
  {#if tip && countNow > 0}
    <div class="like_tooltip_wrapper" style="margin: 0;">
      <div class="like_tooltip_head">
        {#if likersHref}
          <a href={likersHref} onclick={(event) => router.handleClick(event, likersHref)}>
            {locale.count('liked_by_x_people', countNow)}
          </a>
        {:else}
          <span>{locale.count('liked_by_x_people', countNow)}</span>
        {/if}
      </div>
      <div class="like_tooltip_body">
        <div class="like_tooltip_body_grid"></div>
      </div>
    </div>
  {/if}
</div>
