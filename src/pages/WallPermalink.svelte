<script lang="ts">
  import Comments from '../components/Comments.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import Tabs from '../components/Tabs.svelte';
  import WallPost from '../components/WallPost.svelte';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { displayName, ownerHref } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  const ownerId = $derived(Number(router.route.userId));
  const localId = $derived(Number(router.route.postId));
  const ownerUrl = $derived(ownerHref(ownerId));

  const postPromise = $derived.by(() => {
    if (!auth.token || !ownerId || !localId) {
      return Promise.reject(new Error('missing post'));
    }
    return api.wallPost(ownerId, localId, auth.token);
  });
</script>

{#await postPromise}
  <PageChrome title={locale.t('post')}>
    <p>{locale.t('loading_wall')}</p>
  </PageChrome>
{:then post}
  {#snippet header()}
    <a href={ownerUrl} onclick={(event) => router.handleClick(event, ownerUrl)}>
      {post.club?.name ?? displayName(post.target)}
    </a>
    »
    <a href={ownerUrl} onclick={(event) => router.handleClick(event, ownerUrl)}>{locale.t('wall')}</a>
    »
    {locale.t('post')}
  {/snippet}
  <PageChrome title={locale.t('post')} {header}>
    <Tabs
      tabs={[
        { id: 'all', label: locale.t('all_posts'), href: ownerUrl },
        { id: 'post', label: locale.t('post') },
      ]}
      active="post"
    />
    <div id="post_page_main">
      <WallPost {post} />
      <hr />
    </div>
    <div id="post_page_meta">
      <div class="item_comments">
        <Comments target="wall" {ownerId} objectId={localId} />
      </div>
      <div class="item_links" id="post_acts">
        <h4>{locale.t('actions')}</h4>
        <a
          href="/report/{localId}?type=wall&amp;owner={ownerId}"
          class="profile_link"
          style="display:block;width:96%;"
          onclick={(event) =>
            router.handleClick(event, `/report/${localId}?type=wall&owner=${ownerId}`)}
          >{locale.t('report')}</a
        >
      </div>
    </div>
  </PageChrome>
{:catch}
  <PageChrome title={locale.t('not_found')}>
    <div class="ovk-empty">{locale.t('not_found')}</div>
  </PageChrome>
{/await}
