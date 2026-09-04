<script lang="ts">
  import MediaImg from './MediaImg.svelte';
  import { router } from '../lib/router.svelte';
  import { displayName, type User } from '../services/types';

  let { friend }: { friend: User } = $props();
  const href = $derived(`/id${friend.id}`);
</script>

<a
  {href}
  class="flex gap-2 border-b border-vk-border px-2 py-2 no-underline hover:bg-vk-hover"
  onclick={(event) => router.handleClick(event, href)}
>
  <MediaImg class="size-[50px] shrink-0" src={friend.avatar_url} width="50" height="50" alt="" />
  <div>
    <div class="font-bold text-vk-link">{displayName(friend)}</div>
    {#if friend.status}
      <div class="text-vk-muted">{friend.status}</div>
    {/if}
    {#if friend.city}
      <div class="text-vk-label">{friend.city}</div>
    {/if}
  </div>
</a>
