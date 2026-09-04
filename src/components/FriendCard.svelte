<script lang="ts">
  import MediaImg from './MediaImg.svelte';
  import { router } from '../lib/router.svelte';
  import { displayName, type User } from '../services/types';

  let { friend }: { friend: User } = $props();
  const href = $derived(`/id${friend.id}`);
</script>

<div class="scroll_node content">
  <table>
    <tbody>
      <tr>
        <td valign="top" class="list_view_item_cover">
          <a {href} onclick={(event) => router.handleClick(event, href)}>
            <MediaImg src={friend.avatar_url} width="75" alt="" />
          </a>
        </td>
        <td valign="top" style="width: 100%" class="list_view_item_info">
          <a {href} onclick={(event) => router.handleClick(event, href)}>
            <b>{displayName(friend)}</b>
          </a>
          {#if friend.status}
            <br />{friend.status}
          {/if}
          {#if friend.city}
            <br />{friend.city}
          {/if}
        </td>
      </tr>
    </tbody>
  </table>
</div>
