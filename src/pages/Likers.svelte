<script lang="ts">
  import FriendCard from '../components/FriendCard.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { likeTargetPermalink, type LikeKind, type User } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  const kind = $derived(
    (router.route.act === 'photo' || router.route.act === 'video' ? router.route.act : 'post') as LikeKind,
  );
  const ownerId = $derived(Number(router.route.userId ?? 0));
  const objectId = $derived(Number(router.route.postId ?? 0));
  const itemHref = $derived(likeTargetPermalink(router.route.act ?? 'wall', ownerId, objectId));
  const itemLabel = $derived(
    router.route.act === 'photo'
      ? locale.t('photo')
      : router.route.act === 'video'
        ? locale.t('video')
        : locale.t('wall'),
  );

  const likersPromise = $derived.by(() => {
    if (!auth.token || !objectId) {
      return Promise.resolve([] as User[]);
    }
    return api.likers(kind, ownerId, objectId, auth.token);
  });
</script>

{#snippet header()}
  <a href={itemHref} onclick={(event) => router.handleClick(event, itemHref)}>{itemLabel}</a>
  »
  {locale.t('likers_list')}
{/snippet}

<PageChrome title={locale.t('likers_list')} {header}>
  {#await likersPromise}
    <p>{locale.t('loading')}</p>
  {:then likers}
    <div class="summaryBar vk-summary">
      <div class="summary">
        {likers.length === 0
          ? locale.count('liked_by_x_people', 0)
          : locale.count('liked_by_x_people', likers.length)}
      </div>
    </div>
    <div class="list_view container_gray no_scroll_container">
      {#each likers as person (person.id)}
        <FriendCard friend={person} />
      {:else}
        <div class="ovk-empty">{locale.t('nothing_here')}</div>
      {/each}
    </div>
  {:catch}
    <div class="ovk-empty">{locale.t('error')}</div>
  {/await}
</PageChrome>
