<script lang="ts">
  import MediaImg from '../components/MediaImg.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import Redirect from '../components/Redirect.svelte';
  import WallComposer from '../components/WallComposer.svelte';
  import WallPost from '../components/WallPost.svelte';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import {
    accountWrite,
    displayName,
    isAdmin,
    userHref,
    type Album,
    type AudioTrack,
    type Group,
    type User,
    type WallPost as WallPostType,
  } from '../services/types';
  import { audioPlayer } from '../stores/audio.svelte';
  import { auth } from '../stores/auth.svelte';
  import { localeForIntl } from '../lib/languages';
  import { composerHasContent, submitWall } from '../lib/wallWrite';
  import { overlay } from '../stores/overlay.svelte';
  import { locale } from '../stores/locale.svelte';

  let draft = $state('');
  let wallError = $state<string | null>(null);
  let posting = $state(false);
  let wallEpoch = $state(0);
  let profileEpoch = $state(0);
  let avatarError = $state<string | null>(null);
  let statusOpen = $state(false);
  let statusDraft = $state('');
  let statusBroadcast = $state(false);
  let statusError = $state<string | null>(null);

  type ProfileView =
    | { kind: 'user'; user: User }
    | { kind: 'club'; href: string }
    | { kind: 'missing' };

  const profileKey = $derived(
    router.route.slug ?? router.route.userId ?? (auth.user ? String(auth.user.id) : ''),
  );

  async function loadView(key: string, token: string): Promise<ProfileView> {
    try {
      return { kind: 'user', user: await api.user(key, token) };
    } catch {
      if (/^\d+$/.test(key)) {
        return { kind: 'missing' };
      }
      try {
        const group = await api.group(key, token);
        return { kind: 'club', href: `/club${group.id}` };
      } catch {
        return { kind: 'missing' };
      }
    }
  }

  const profilePromise = $derived.by(() => {
    void profileEpoch;
    const key = profileKey;
    const token = auth.token;
    if (!token || !key) {
      return Promise.resolve({ kind: 'missing' } as ProfileView);
    }
    return loadView(key, token);
  });

  const wallPromise = $derived.by(() => {
    void wallEpoch;
    const token = auth.token;
    return profilePromise.then((view) =>
      view.kind === 'user' && token
        ? api.wall(view.user.id, token).catch((): WallPostType[] => [])
        : [],
    );
  });

  const friendsPromise = $derived(
    profilePromise.then((view) =>
      view.kind === 'user' && auth.token
        ? api.userFriends(view.user.id, auth.token).catch((): User[] => [])
        : [],
    ),
  );
  const albumsPromise = $derived.by(() => {
    void profileEpoch;
    return profilePromise.then((view) =>
      view.kind === 'user' && auth.token
        ? api.albums(auth.token, view.user.id, true).catch((): Album[] => [])
        : [],
    );
  });
  const groupsPromise = $derived(
    auth.token ? api.groups(auth.token).catch((): Group[] => []) : Promise.resolve([] as Group[]),
  );
  const myFriendsPromise = $derived(
    auth.token ? api.friends(auth.token).catch((): User[] => []) : Promise.resolve([] as User[]),
  );
  const audioPromise = $derived(
    profilePromise.then((view) =>
      view.kind === 'user' && auth.token
        ? api.audio(auth.token, view.user.id).catch((): AudioTrack[] => [])
        : [],
    ),
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
    if (!composerHasContent(draft) || !auth.token) {
      return;
    }
    posting = true;
    wallError = null;
    try {
      const view = await profilePromise;
      if (view.kind !== 'user') {
        return;
      }
      await submitWall(view.user.id, draft, auth.token);
      draft = '';
      wallEpoch += 1;
    } catch (error) {
      wallError = error instanceof Error ? error.message : 'Could not write on this wall';
    } finally {
      posting = false;
    }
  }

  function completeness(profile: User) {
    let incompleteness = 0;
    const unfilled: { key: string; href: string; icon: string; bonus: string }[] = [];
    if (!profile.status) {
      unfilled.push({
        key: 'status',
        href: '/edit',
        icon: 'icon3.gif',
        bonus: `${locale.t('status')} (+15%)`,
      });
      incompleteness += 15;
    }
    if (!profile.phone) {
      unfilled.push({
        key: 'telegram',
        href: '/edit?act=contacts',
        icon: 'icon2.gif',
        bonus: `${locale.t('telegram')} (+15%)`,
      });
      incompleteness += 15;
    }
    if (!profile.email) {
      unfilled.push({
        key: 'email',
        href: '/edit?act=contacts',
        icon: 'icon2.gif',
        bonus: `${locale.t('email')} (+20%)`,
      });
      incompleteness += 20;
    }
    if (!profile.city) {
      unfilled.push({
        key: 'city',
        href: '/edit',
        icon: 'icon1.gif',
        bonus: `${locale.t('city')} (+20%)`,
      });
      incompleteness += 20;
    }
    unfilled.push({
      key: 'interests',
      href: '/edit?act=interests',
      icon: 'icon1.gif',
      bonus: `${locale.t('interests')} (+20%)`,
    });
    incompleteness += 20;
    const total = Math.max(100 - incompleteness, 0);
    return { total, percent: Math.min(total, 100), unfilled };
  }

  function formatDuration(ms: number): string {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  }

  async function saveStatus(event: Event) {
    event.preventDefault();
    if (!auth.token || !auth.user) {
      return;
    }
    statusError = null;
    try {
      const updated = await api.updateSettings(auth.token, accountWrite(auth.user, { status: statusDraft }));
      auth.updateUser(updated);
      profileEpoch += 1;
      statusOpen = false;
    } catch (caught) {
      statusError = caught instanceof Error ? caught.message : locale.t('error');
    }
  }

  function toggleStatus(profile: User) {
    if (auth.user?.id !== profile.id) {
      return;
    }
    statusDraft = profile.status ?? '';
    statusOpen = !statusOpen;
  }

  function onDocumentClick(event: MouseEvent) {
    if (!statusOpen) {
      return;
    }
    const node = event.target;
    if (!(node instanceof Node)) {
      return;
    }
    if (document.getElementById('status_editor')?.contains(node)) {
      return;
    }
    if (document.getElementById('page_status_text')?.contains(node)) {
      return;
    }
    statusOpen = false;
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

<svelte:window onclick={onDocumentClick} />

{#await profilePromise}
  <PageChrome title={locale.t('page')}>
    <p>{locale.t('loading_page')}</p>
  </PageChrome>
{:then view}
  {#if view.kind === 'club'}
    <Redirect to={view.href} />
  {:else if view.kind === 'missing'}
    <PageChrome title={locale.t('not_found')}>
      <div class="ovk-empty">{locale.t('nothing_here')}</div>
    </PageChrome>
  {:else}
    {@const profile = view.user}
    {@const ownerId = profile.id}
    {@const own = auth.user?.id === ownerId}
  {#if profile.banned}
    {@const bannedHtml = locale.t('user_banned', profile.first_name)}
    {@const bannedParts = bannedHtml.match(/^(.*?)<b>(.*?)<\/b>(.*)$/s)}
    <PageChrome title={displayName(profile)}>
      <center>
        <img
          src="/assets/packages/static/openvk/img/oof.apng"
          alt=""
          style="width: 20%;"
        />
        <p>
          {#if bannedParts}
            {bannedParts[1]}<b>{bannedParts[2]}</b>{bannedParts[3]}
          {:else}
            {bannedHtml.replace(/<[^>]+>/g, '')}
          {/if}
          <br />
          {locale.t('user_banned_comment')}
          <b>{profile.ban_reason ?? ''}</b>.<br />
          {locale.t('user_is_blocked')}
          {#if profile.banned_until}
            {locale.t('before')}: <b>{profile.banned_until}</b>
          {:else}
            <b>{locale.t('forever')}</b>
          {/if}
        </p>
        {#if isAdmin(auth.user)}
          <p>
            <a class="button" href="/admin/unban/{profile.id}" onclick={(event) => router.handleClick(event, `/admin/unban/${profile.id}`)}
              >{locale.t('unban_user_action')}</a
            >
          </p>
        {/if}
      </center>
    </PageChrome>
  {:else}
  <PageChrome
    title={displayName(profile)}
    note={own ? `(${locale.t('this_is_you')})` : undefined}
    right={locale.t('online')}
  >
    <div class="left_small_block">
      <div class="avatar_block">
        {#if own}
          <div class="avatar_controls">
            {#if profile.avatar_url}
              <div class="avatarDelete hoverable"></div>
            {/if}
            <div class="avatar_variants">
              <label
                for="avatar-file"
                class={['_add_image', 'hoverable', profile.avatar_url ? 'set_image' : 'upload_image']}
                id="add_image"
              >
                <span>{profile.avatar_url ? locale.t('upload_new_picture') : locale.t('add_image')}</span>
              </label>
            </div>
          </div>
          <input
            id="avatar-file"
            data-testid="avatar-file"
            type="file"
            accept="image/png,image/jpeg,image/gif,image/webp"
            style="display: none;"
            onchange={changeAvatar}
          />
          {#if avatarError}
            <p class="vk-error">{avatarError}</p>
          {/if}
        {/if}
        {#if profile.avatar_url}
          <a
            href="/"
            onclick={(event) => {
              event.preventDefault();
              overlay.openPhoto([{ id: `ava-${profile.id}`, url: profile.avatar_url ?? '' }]);
            }}
          >
            <MediaImg
              src={profile.avatar_url}
              alt={displayName(profile)}
              id="bigAvatar"
              data-testid="profile-avatar"
              style="width: 100%; image-rendering: -webkit-optimize-contrast;"
            />
          </a>
        {:else}
          <MediaImg
            src={profile.avatar_url}
            alt={displayName(profile)}
            id="bigAvatar"
            data-testid="profile-avatar"
            style="width: 100%; image-rendering: -webkit-optimize-contrast;"
          />
        {/if}
      </div>
      <div id="profile_links">
        {#if own}
          <div id="profile_link" style="width: 194px;">
            <a href="/edit" class="link" onclick={(event) => router.handleClick(event, '/edit')}
              >{locale.t('edit_page')}</a
            >
          </div>
        {:else}
          <div id="profile_link" style="width: 194px;">
            <a
              href="/im?sel={ownerId}"
              class="link"
              data-testid="send-message"
              onclick={(event) => router.handleClick(event, `/im?sel=${ownerId}`)}
              >{locale.t('send_message')}</a
            >
          </div>
          {#await myFriendsPromise then mine}
            <div id="profile_link" style="width: 194px;">
              {#if mine.some((friend) => friend.id === ownerId)}
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
          <div id="profile_link" style="width: 194px;">
            <a
              href="/gifts?act=pick&user={ownerId}"
              class="link"
              onclick={(event) => router.handleClick(event, `/gifts?act=pick&user=${ownerId}`)}
              >{locale.t('send_gift')}</a
            >
          </div>
          <div id="profile_link" style="width: 194px;">
            <a
              href="/report/{ownerId}?type=user"
              class="link"
              onclick={(event) => router.handleClick(event, `/report/${ownerId}?type=user`)}
              >{locale.t('report')}</a
            >
          </div>
        {/if}
        <div id="profile_link" style="width: 194px;">
          <a
            href="/gifts{ownerId}"
            class="link"
            onclick={(event) => router.handleClick(event, `/gifts${ownerId}`)}>{locale.t('gifts')}</a
          >
        </div>
      </div>
      {#if own}
        {@const report = completeness(profile)}
        <div class="profile-hints">
          <div class={['completeness-gauge', report.total >= 100 && 'completeness-gauge-gold']}>
            <div style="width: {report.percent}%"></div>
            <span>{report.total}%</span>
          </div>
          {#if report.unfilled.length > 0}
            <br />
            {#each report.unfilled.slice(0, 3) as hint (hint.key)}
              <a href={hint.href} onclick={(event) => router.handleClick(event, hint.href)}>
                <img src="/assets/packages/static/openvk/img/{hint.icon}" alt="" />
                {hint.bonus}
              </a>
            {/each}
          {/if}
        </div>
        <br />
      {/if}

      <div class="content_title_expanded">{locale.t('friends')}</div>
      {#await friendsPromise}
        <p>…</p>
      {:then friends}
        <div class="content_subtitle">
          {locale.count('friends', friends.length)}
          <div style="float:right;">
            <a
              href="/friends{ownerId}"
              onclick={(event) => router.handleClick(event, `/friends${ownerId}`)}>{locale.t('all_title')}</a
            >
          </div>
        </div>
        <div class="content_list hide_on_mobiles">
          {#each friends.slice(0, 6) as friend (friend.id)}
            {@const href = userHref(friend)}
            <div class="cl_element">
              <div class="cl_avatar">
                <a {href} onclick={(event) => router.handleClick(event, href)}>
                  <MediaImg class="ava" src={friend.avatar_url} alt="" />
                </a>
              </div>
              <a {href} class="cl_name" onclick={(event) => router.handleClick(event, href)}>
                <text class="cl_fname">{friend.first_name}</text>
                <text class="cl_lname">{friend.last_name}</text>
              </a>
            </div>
          {:else}
            <span>{locale.t('no_friends_yet')}</span>
          {/each}
        </div>
      {/await}

      <div class="content_title_expanded">{locale.t('albums')}</div>
      {#await albumsPromise}
        <div class="content_subtitle">…</div>
      {:then albums}
        <div class="content_subtitle" data-testid="profile-photo-count">
          {locale.count('albums', albums.length)}
          <div style="float:right;">
            <a
              href="/albums{ownerId}"
              onclick={(event) => router.handleClick(event, `/albums${ownerId}`)}>{locale.t('all_title')}</a
            >
          </div>
        </div>
        <div class="hide_on_mobiles" style="padding: 5px;" data-testid="profile-photos">
          {#each albums.slice(0, 4) as album (album.id)}
            <div class="ovk-album" style="display: inline-block;">
              <div style="text-align: center;float: left;height: 54pt;width: 100px;">
                <a
                  href="/albums{ownerId}"
                  onclick={(event) => router.handleClick(event, `/albums${ownerId}`)}
                >
                  <MediaImg
                    src={album.cover_url ?? album.photos[0]?.url}
                    alt=""
                    style="max-width: 80px; max-height: 54pt;"
                  />
                </a>
              </div>
              <div style="overflow: hidden; overflow-wrap: break-word;">
                <b>{album.title}</b><br />
                <span class="nobold">{album.photo_count} {locale.t('photos')}</span>
              </div>
            </div>
          {:else}
            <p style="padding: 4px;">{locale.t('no_photo_albums')}</p>
          {/each}
        </div>
      {/await}

      {#await groupsPromise then groups}
        {#if groups.length > 0}
          <div class="content_title_expanded">{locale.t('groups')}</div>
          <div class="content_subtitle">
            {locale.count('groups', groups.length)}
            <div style="float:right;">
              <a
                href="/groups{ownerId}"
                onclick={(event) => router.handleClick(event, `/groups${ownerId}`)}
                >{locale.t('all_title')}</a
              >
            </div>
          </div>
          <div style="padding: 4px;">
            {#each groups.slice(0, 6) as group, index (group.id)}
              <a
                href="/club{group.id}"
                onclick={(event) => router.handleClick(event, `/club${group.id}`)}>{group.name}</a
              >{index < Math.min(groups.length, 6) - 1 ? ' • ' : ''}
            {/each}
          </div>
        {/if}
      {/await}
    </div>

    <div class="right_big_block">
      <div class="page_info_main page_info_main_profile page_info">
        {#if own}
          <div class="page_status_popup" id="status_editor" style:display={statusOpen ? 'block' : 'none'}>
            <form name="status_popup_form" onsubmit={saveStatus}>
              <div style="margin-bottom: 10px;">
                <input type="text" name="status" size="50" bind:value={statusDraft} />
                <label style="width: 316px;display: block;">
                  <input type="checkbox" name="broadcast" bind:checked={statusBroadcast} />
                  {locale.t('broadcast_audio')}
                </label>
              </div>
              {#if statusError}
                <p class="vk-error">{statusError}</p>
              {/if}
              <button type="submit" name="submit" class="button" style="height: 22px;">{locale.t('send')}</button>
            </form>
          </div>
        {/if}
        <div class="accountInfo clearFix">
          <div class="profileName">
            <h2>{displayName(profile)}</h2>
            <div class="page_status">
              {#if profile.status}
                {#if own}
                  <button
                    type="button"
                    class="page_status page_status_edit_button"
                    id="page_status_text"
                    onclick={() => toggleStatus(profile)}
                  >
                    {profile.status}
                  </button>
                {:else}
                  <div class="page_status">{profile.status}</div>
                {/if}
              {:else if own}
                <button
                  type="button"
                  class="edit_link page_status_edit_button"
                  id="page_status_text"
                  onclick={() => toggleStatus(profile)}
                >
                  [ {locale.t('change_status')} ]
                </button>
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
      {#if own}
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

      {#await audioPromise then tracks}
        {#if tracks.length > 0}
          <div class="content_title_expanded">
            {locale.t('audio')}
            <div style="float:right;">
              <a
                href="/audios{ownerId}"
                onclick={(event) => router.handleClick(event, `/audios${ownerId}`)}>{locale.t('all_title')}</a
              >
            </div>
          </div>
          <div style="padding: 4px 8px;">
            {#each tracks.slice(0, 3) as track (track.id)}
              <div class="audioEmbed" style="display:flex;align-items:center;gap:6px;padding:2px 0;">
                <button
                  type="button"
                  class="link"
                  onclick={() =>
                    audioPlayer.play({
                      id: track.id,
                      artist: track.artist,
                      title: track.title,
                      durationMs: track.duration_ms,
                      src: track.src,
                    })}
                >
                  ▶
                </button>
                <span>{track.artist} — {track.title}</span>
                <span style="margin-left:auto;color:var(--ovk-muted);">{formatDuration(track.duration_ms)}</span>
              </div>
            {/each}
          </div>
        {/if}
      {/await}

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
          <WallComposer bind:draft {posting} error={wallError} onsubmit={writeOnWall} />
        </div>
        {#each wall as post (`${post.target_id}_${post.id}`)}
          <div data-testid={`wall-${post.target_id}_${post.id}`}>
            <WallPost {post} />
          </div>
        {:else}
          <div class="ovk-empty">{locale.t('wall_empty')}</div>
        {/each}
      {/await}
    </div>
  </PageChrome>
  {/if}
  {/if}
{/await}
