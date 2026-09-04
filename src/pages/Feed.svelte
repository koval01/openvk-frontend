<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import Tabs from '../components/Tabs.svelte';
  import WallComposer from '../components/WallComposer.svelte';
  import WallPost from '../components/WallPost.svelte';
  import { api } from '../services/api';
  import type { WallPost as WallPostType } from '../services/types';
  import { composerHasContent, submitWall } from '../lib/wallWrite';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  let draft = $state('');
  let wallError = $state<string | null>(null);
  let posting = $state(false);
  let wallEpoch = $state(0);
  let tab = $state('mine');

  const remotePosts = $derived.by(() => {
    void wallEpoch;
    if (!auth.token) {
      return Promise.resolve([] as WallPostType[]);
    }
    return api.news(auth.token).catch((): WallPostType[] => []);
  });

  async function writeOnWall(event: Event) {
    event.preventDefault();
    if (!composerHasContent(draft) || !auth.token || !auth.user) {
      return;
    }
    posting = true;
    wallError = null;
    try {
      await submitWall(auth.user.id, draft, auth.token);
      draft = '';
      wallEpoch += 1;
    } catch (error) {
      wallError = error instanceof Error ? error.message : 'Could not write';
    } finally {
      posting = false;
    }
  }
</script>

<PageChrome title={locale.t('news')}>
  <Tabs
    tabs={[
      { id: 'mine', label: locale.t('my_news') },
      { id: 'all', label: locale.t('all_news') },
    ]}
    active={tab}
    onselect={(id) => {
      tab = id;
    }}
  />

  <WallComposer bind:draft {posting} error={wallError} onsubmit={writeOnWall} />

  {#await remotePosts}
    <p>{locale.t('loading_news')}</p>
  {:then posts}
    {#each posts as post (`${post.target_id}_${post.id}`)}
      <WallPost {post} showTarget />
    {:else}
      <div class="vk-empty">{locale.t('no_wall_notes')}</div>
    {/each}
  {/await}
</PageChrome>
