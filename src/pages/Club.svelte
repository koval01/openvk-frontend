<script lang="ts">
  import MediaImg from '../components/MediaImg.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import WallComposer from '../components/WallComposer.svelte';
  import WallPost from '../components/WallPost.svelte';
  import { composerHasContent, submitWall } from '../lib/wallWrite';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { CAMERA_FALLBACK, displayName, type User, type WallPost as WallPostType } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  const groupId = $derived(Number(router.route.groupId));
  const wallOwner = $derived(-groupId);

  let draft = $state('');
  let wallError = $state<string | null>(null);
  let posting = $state(false);
  let wallEpoch = $state(0);

  const groupPromise = $derived(
    auth.token && groupId
      ? api.group(groupId, auth.token)
      : Promise.reject(new Error('missing group')),
  );

  const ownerPromise = $derived.by(async () => {
    const group = await groupPromise.catch(() => null);
    if (!group || !auth.token) {
      return null as User | null;
    }
    return api.user(group.owner_id, auth.token).catch(() => null);
  });

  const wallPromise = $derived.by(() => {
    void wallEpoch;
    if (!auth.token || !groupId) {
      return Promise.resolve([] as WallPostType[]);
    }
    return api.wall(wallOwner, auth.token).catch((): WallPostType[] => []);
  });

  async function writeOnWall(event: Event) {
    event.preventDefault();
    if (!composerHasContent(draft) || !auth.token || !groupId) {
      return;
    }
    posting = true;
    wallError = null;
    try {
      await submitWall(wallOwner, draft, auth.token);
      draft = '';
      wallEpoch += 1;
    } catch (error) {
      wallError = error instanceof Error ? error.message : locale.t('error');
    } finally {
      posting = false;
    }
  }
</script>

{#await groupPromise}
  <PageChrome title={locale.t('loading_groups')}>
    <p>{locale.t('loading_groups')}</p>
  </PageChrome>
{:then group}
  <PageChrome title={group.name}>
    <div id="clubPage">
      <div class="left_big_block">
        <div class="content_title_expanded">{locale.t('information')}</div>
        <div class="page_info page_info_main">
          <table class="ugc-table">
            <tbody>
              <tr>
                <td><span class="nobold">{locale.t('name_group')}:</span></td>
                <td><b>{group.name}</b></td>
              </tr>
              {#if group.about}
                <tr>
                  <td><span class="nobold">{locale.t('description')}:</span></td>
                  <td>{group.about}</td>
                </tr>
              {/if}
            </tbody>
          </table>
        </div>
        <div class="content_title_expanded">{locale.t('participants')}</div>
        <div class="content_subtitle">
          {group.members} {locale.t('participants')}
        </div>
        <div class="content_divider wall_block">
          <div class="content_title_expanded">
            {locale.t('wall')}
            <nobold>
              {#await wallPromise then wall}
                <span class="wall_block_counter">{wall.length}</span>
              {/await}
              <a
                href="/wall-{groupId}"
                class="float-right lowercase"
                onclick={(event) => router.handleClick(event, `/wall-${groupId}`)}>{locale.t('all_title')}</a
              >
            </nobold>
          </div>
          <div id="underHeader">
            <div class="content_subtitle">
              <WallComposer bind:draft {posting} error={wallError} onsubmit={writeOnWall} />
            </div>
            <div class="content scroll_container">
              {#await wallPromise}
                <p>{locale.t('loading_wall')}</p>
              {:then wall}
                {#each wall as post (`${post.target_id}_${post.id}`)}
                  <div class="scroll_node" data-uniqueid={`${post.target_id}_${post.id}`}>
                    <WallPost {post} />
                  </div>
                {:else}
                  <div class="ovk-empty">{locale.t('no_posts_abstract')}</div>
                {/each}
              {/await}
            </div>
          </div>
        </div>
      </div>
      <div class="right_small_block">
        <div class="avatar_block" style="position:relative;">
          <MediaImg
            src={group.avatar_url ?? CAMERA_FALLBACK}
            alt={group.name}
            id="bigAvatar"
            style="width: 100%; image-rendering: -webkit-optimize-contrast;"
          />
        </div>
        <div id="profile_links">
          <div id="profile_link" style="width: 194px;">
            <a
              href="/report/{groupId}?type=club"
              class="link"
              onclick={(event) => router.handleClick(event, `/report/${groupId}?type=club`)}
              >{locale.t('report')}</a
            >
          </div>
        </div>
        <div class="hide_on_mobiles">
          <div class="content_title_expanded">{locale.t('group_type')}</div>
          <div style="padding:4px">{locale.t('group_type_open')}</div>
        </div>
        {#await ownerPromise then owner}
          {#if owner}
            <div class="content_title_expanded">{locale.t('creator')}</div>
            <div class="avatar-list-item" style="padding: 8px;">
              <div class="avatar">
                <a
                  href="/id{owner.id}"
                  onclick={(event) => router.handleClick(event, `/id${owner.id}`)}
                >
                  <MediaImg class="ava" src={owner.avatar_url} alt="" />
                </a>
              </div>
              <div class="info">
                <a
                  href="/id{owner.id}"
                  class="title"
                  onclick={(event) => router.handleClick(event, `/id${owner.id}`)}
                  >{displayName(owner)}</a
                >
              </div>
            </div>
          {/if}
        {/await}
      </div>
    </div>
  </PageChrome>
{:catch}
  <PageChrome title={locale.t('not_found')}>
    <div class="ovk-empty">{locale.t('not_found')}</div>
  </PageChrome>
{/await}
