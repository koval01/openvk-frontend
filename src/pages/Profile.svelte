<script lang="ts">
  import MediaImg from '../components/MediaImg.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import WallPost from '../components/WallPost.svelte';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import {
    demoUser,
    displayName,
    type Album,
    type User,
    type WallPost as WallPostType,
  } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { localeForIntl } from '../lib/languages';
  import { locale } from '../stores/locale.svelte';

  let draft = $state('');
  let wallError = $state<string | null>(null);
  let posting = $state(false);
  let wallEpoch = $state(0);
  let profileEpoch = $state(0);
  let avatarError = $state<string | null>(null);

  const requestedId = $derived(Number(router.route.userId ?? auth.user?.id));
  const isOwnPage = $derived(auth.user?.id === requestedId);

  const profilePromise = $derived.by(() => {
    void profileEpoch;
    if (!auth.token) {
      return Promise.resolve({ ...demoUser, id: requestedId });
    }
    return api.user(requestedId, auth.token).catch((): User => ({ ...demoUser, id: requestedId }));
  });

  const wallPromise = $derived.by(() => {
    void wallEpoch;
    if (!auth.token) {
      return Promise.resolve([] as WallPostType[]);
    }
    return api.wall(requestedId, auth.token).catch((): WallPostType[] => []);
  });

  const friendsPromise = $derived(
    auth.token
      ? api.userFriends(requestedId, auth.token).catch((): User[] => [])
      : Promise.resolve([] as User[]),
  );
  const albumsPromise = $derived.by(() => {
    void profileEpoch;
    return auth.token
      ? api.albums(auth.token, requestedId, true).catch((): Album[] => [])
      : Promise.resolve([] as Album[]);
  });
  const myFriendsPromise = $derived(
    auth.token ? api.friends(auth.token).catch((): User[] => []) : Promise.resolve([] as User[]),
  );

  function registeredOn(profile: User): string {
    return new Date(profile.created_at).toLocaleDateString(localeForIntl(locale.code), {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  async function writeOnWall(event: Event) {
    event.preventDefault();
    if (!draft.trim() || !auth.token) {
      return;
    }
    posting = true;
    wallError = null;
    try {
      await api.writeWall(requestedId, draft.trim(), auth.token);
      draft = '';
      wallEpoch += 1;
    } catch (error) {
      wallError = error instanceof Error ? error.message : 'Could not write on this wall';
    } finally {
      posting = false;
    }
  }

  async function changeAvatar(event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    const file = input.files?.[0];
    if (!file || !auth.token) {
      return;
    }
    avatarError = null;
    try {
      const updated = await api.uploadAvatar(auth.token, file);
      auth.updateUser(updated);
      profileEpoch += 1;
    } catch (caught) {
      avatarError = caught instanceof Error ? caught.message : 'Could not update photo';
    } finally {
      input.value = '';
    }
  }
</script>

{#await profilePromise}
  <PageChrome title={locale.t('page')}>
    <p>{locale.t('loading_page')}</p>
  </PageChrome>
{:then profile}
  <PageChrome
    title={displayName(profile)}
    note={isOwnPage ? `(${locale.t('this_is_you')})` : undefined}
    right={locale.t('online')}
  >
    <div class="left_small_block">
      <div class="avatar_block">
        <MediaImg
          src={profile.avatar_url}
          alt={displayName(profile)}
          id="bigAvatar"
          data-testid="profile-avatar"
          style="width: 100%;"
        />
        {#if isOwnPage}
          <label class="link" style="display:block;padding:4px 0;">
            {locale.t('upload_photo')}
            <input
              data-testid="avatar-file"
              type="file"
              accept="image/png,image/jpeg,image/gif,image/webp"
              onchange={changeAvatar}
            />
          </label>
          {#if avatarError}
            <p class="vk-error">{avatarError}</p>
          {/if}
        {/if}
      </div>
      <div id="profile_links">
        {#if isOwnPage}
          <div id="profile_link" style="width: 194px;">
            <a href="/settings" class="link" onclick={(event) => router.handleClick(event, '/settings')}
              >{locale.t('edit_page')}</a
            >
          </div>
        {:else}
          <div id="profile_link" style="width: 194px;">
            <a href="/im" class="link" onclick={(event) => router.handleClick(event, '/im')}
              >{locale.t('send_message')}</a
            >
          </div>
          {#await myFriendsPromise then mine}
            <div id="profile_link" style="width: 194px;">
              {#if mine.some((friend) => friend.id === requestedId)}
                <a href="/friends" class="link" onclick={(event) => router.handleClick(event, '/friends')}
                  >{locale.t('you_are_friends')}</a
                >
              {:else}
                <a href="/friends" class="link" onclick={(event) => router.handleClick(event, '/friends')}
                  >{locale.t('friends_add')}</a
                >
              {/if}
            </div>
          {/await}
        {/if}
      </div>

      <div class="content_title_expanded">{locale.t('friends')}</div>
      {#await friendsPromise}
        <p>…</p>
      {:then friends}
        <div class="content_subtitle">{friends.length}</div>
        <div style="padding: 4px;">
          {#each friends.slice(0, 6) as friend (friend.id)}
            {@const href = `/id${friend.id}`}
            <a
              {href}
              style="display:inline-block;width:60px;text-align:center;margin:2px;"
              onclick={(event) => router.handleClick(event, href)}
            >
              <MediaImg src={friend.avatar_url} alt="" width="50" height="50" />
              <div>{friend.first_name}</div>
            </a>
          {:else}
            <span>{locale.t('no_friends_yet')}</span>
          {/each}
        </div>
      {/await}

      <div class="content_title_expanded">{locale.t('photos')}</div>
      {#await albumsPromise}
        <div class="content_subtitle">…</div>
      {:then albums}
        {@const photos = albums.flatMap((album) => album.photos)}
        <div class="content_subtitle" data-testid="profile-photo-count">{photos.length}</div>
        <div class="album-flex" style="padding: 4px;" data-testid="profile-photos">
          {#each photos.slice(0, 6) as photo (photo.id)}
            <MediaImg
              class="album-photo--image"
              src={photo.url}
              alt=""
              width="75"
              height="75"
            />
          {:else}
            <p style="padding: 4px;">{locale.t('no_photo_albums')}</p>
          {/each}
        </div>
      {/await}
    </div>

    <div class="right_big_block">
      <div class="page_info_main page_info_main_profile page_info">
        <div class="accountInfo clearFix">
          <div class="profileName">
            <h2>{displayName(profile)}</h2>
            <div class="page_status">
              {#if profile.status}
                {profile.status}
              {:else if isOwnPage}
                <div class="edit_link page_status_edit_button">[ {locale.t('change_status')} ]</div>
              {/if}
            </div>
          </div>
        </div>
        <table id="basicInfo" class="not_flexible_table ugc-table" border="0" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td class="label"><span class="nobold">{locale.t('city')}: </span></td>
              <td class="data">{profile.city ?? '—'}</td>
            </tr>
            <tr>
              <td class="label"><span class="nobold">{locale.t('page')}: </span></td>
              <td class="data">{profile.screen_name ?? `id${profile.id}`}</td>
            </tr>
            <tr>
              <td class="label"><span class="nobold">{locale.t('registration_date')}: </span></td>
              <td class="data">{registeredOn(profile)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="content_title_expanded">{locale.t('information')}</div>
      {#if isOwnPage}
        <div style="padding: 10px 8px 15px 8px;">
          <table class="ugc-table" border="0" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td class="label"><span class="nobold">{locale.t('email')}: </span></td>
                <td class="data">{profile.email ?? '—'}</td>
              </tr>
              <tr>
                <td class="label"><span class="nobold">{locale.t('phone')}: </span></td>
                <td class="data">{profile.phone ?? '—'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      {:else}
        <div class="user_info_none" style="padding: 15px;color:var(--ovk-muted);text-align: center;">
          {locale.t('contact_details_hidden')}
        </div>
      {/if}

      {#await wallPromise}
        <div class="content_title_expanded">{locale.t('wall')}</div>
        <p>{locale.t('loading_wall')}</p>
      {:then wall}
        <div class="content_title_expanded">
          {locale.t('wall')}
          <nobold>
            <span class="wall_block_counter"
              >{wall.length === 0 ? locale.t('wall_zero') : wall.length}</span
            >
          </nobold>
        </div>
        <div class="content_subtitle">
          <form action="#" method="post" style="margin:0;" onsubmit={writeOnWall}>
            <textarea
              placeholder={locale.t('write_ellipsis')}
              class="small-textarea"
              autocomplete="off"
              bind:value={draft}
            ></textarea>
            {#if wallError}
              <p class="vk-error">{wallError}</p>
            {/if}
            <input
              type="submit"
              value={posting ? locale.t('sending') : locale.t('write')}
              class="button"
              disabled={posting}
            />
          </form>
        </div>
        {#each wall as post (`${post.target_id}_${post.id}`)}
          <div
            data-testid={`wall-${post.target_id}_${post.id}`}
            class={router.route.postId === String(post.id) ? 'wall-permalink' : undefined}
          >
            <WallPost {post} />
          </div>
        {:else}
          <div class="ovk-empty">{locale.t('wall_empty')}</div>
        {/each}
      {/await}
    </div>
  </PageChrome>
{/await}
