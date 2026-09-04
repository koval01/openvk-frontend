<script lang="ts">
  import FriendCard from '../components/FriendCard.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import Tabs from '../components/Tabs.svelte';
  import { api } from '../services/api';
  import type { User } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  let tab = $state('all');

  const friendsPromise = $derived(
    auth.token ? api.friends(auth.token).catch((): User[] => []) : Promise.resolve([] as User[]),
  );
</script>

<PageChrome title={locale.t('my_friends')}>
  <Tabs
    tabs={[
      { id: 'all', label: locale.t('all_friends') },
      { id: 'online', label: locale.t('friends_online') },
      { id: 'requests', label: locale.t('req') },
    ]}
    active={tab}
    onselect={(id) => {
      tab = id;
    }}
  />

  {#if tab === 'requests'}
    <div class="vk-summary">{locale.t('no_friend_requests')}</div>
    <div class="vk-empty">{locale.t('nothing_here')}</div>
  {:else}
    {#await friendsPromise}
      <p>{locale.t('loading_friends')}</p>
    {:then friends}
      <div class="summaryBar vk-summary">
        <div class="summary">
          {friends.length === 0 ? locale.t('friends_list_zero') : locale.count('friends_list', friends.length)}
        </div>
      </div>
      <div class="list_view container_gray no_scroll_container">
        {#each friends as friend (friend.id)}
          <FriendCard {friend} />
        {:else}
          <div class="ovk-empty">{locale.t('nothing_here')}</div>
        {/each}
      </div>
    {/await}
  {/if}
</PageChrome>
