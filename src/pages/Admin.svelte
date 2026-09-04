<script lang="ts">
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import {
    displayName,
    isAdmin,
    isStaff,
    type AdminOverview,
    type BannedLink,
    type GiftCategory,
    type Group,
    type SiteReport,
    type User,
    type Voucher,
    type Warning,
  } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';
  import { theme } from '../stores/theme.svelte';
  import { documentTitle } from '../lib/pageTitle';
  import '../styles/admin.css';

  const slug = $derived(router.route.slug || 'overview');
  const userId = $derived(Number(router.route.userId ?? 0));
  const objectId = $derived(Number(router.route.postId ?? router.route.groupId ?? 0));

  let query = $state('');
  let reason = $state('');
  let error = $state<string | null>(null);
  let epoch = $state(0);
  let voucherCoins = $state('25');
  let voucherUses = $state('5');
  let linkUrl = $state('');
  let linkReason = $state('');

  const overviewPromise = $derived.by(() => {
    void epoch;
    return auth.token && slug === 'overview' ? api.adminOverview(auth.token) : Promise.resolve(null as AdminOverview | null);
  });
  const usersPromise = $derived.by(() => {
    void epoch;
    return auth.token && (slug === 'users' || slug === 'user')
      ? api.adminUsers(auth.token, query || undefined)
      : Promise.resolve([] as User[]);
  });
  const clubsPromise = $derived.by(() => {
    void epoch;
    return auth.token && (slug === 'clubs' || slug === 'club') ? api.adminClubs(auth.token) : Promise.resolve([] as Group[]);
  });
  const vouchersPromise = $derived.by(() => {
    void epoch;
    return auth.token && (slug === 'vouchers' || slug === 'voucher')
      ? api.vouchers(auth.token)
      : Promise.resolve([] as Voucher[]);
  });
  const reportsPromise = $derived.by(() => {
    void epoch;
    return auth.token && (slug === 'reports' || slug === 'report')
      ? api.reports(auth.token)
      : Promise.resolve([] as SiteReport[]);
  });
  const linksPromise = $derived.by(() => {
    void epoch;
    return auth.token && (slug === 'banned-links' || slug === 'banned-link')
      ? api.bannedLinks(auth.token)
      : Promise.resolve([] as BannedLink[]);
  });
  const userPromise = $derived.by(() => {
    void epoch;
    return auth.token && userId ? api.user(userId, auth.token) : Promise.resolve(null as User | null);
  });
  const warningsPromise = $derived.by(() => {
    void epoch;
    return auth.token && userId && (slug === 'bans' || slug === 'user' || slug === 'warn')
      ? api.warnings(auth.token, userId)
      : Promise.resolve([] as Warning[]);
  });
  const catalogPromise = $derived(
    auth.token && (slug === 'gifts' || slug.startsWith('gifts/'))
      ? api.giftCatalog(auth.token)
      : Promise.resolve([] as GiftCategory[]),
  );
  const staffOk = $derived(isStaff(auth.user));
  const adminOk = $derived(isAdmin(auth.user));
  const reportsOk = $derived(staffOk && (slug === 'reports' || slug === 'report'));
  const canSee = $derived(adminOk || reportsOk);

  function go(event: MouseEvent, href: string) {
    router.handleClick(event, href);
  }

  async function createVoucher(event: Event) {
    event.preventDefault();
    if (!auth.token) {
      return;
    }
    await api.createVoucher(auth.token, Number(voucherCoins), Number(voucherUses));
    epoch += 1;
  }

  async function addLink(event: Event) {
    event.preventDefault();
    if (!auth.token) {
      return;
    }
    await api.addBannedLink(auth.token, linkUrl, linkReason);
    linkUrl = '';
    linkReason = '';
    epoch += 1;
  }

  async function runBan(event: Event) {
    event.preventDefault();
    if (!auth.token || !userId) {
      return;
    }
    error = null;
    try {
      if (slug === 'unban' || slug === 'support-unban') {
        const updated =
          slug === 'unban' ? await api.unbanUser(auth.token, userId) : await api.supportUnban(auth.token, userId);
        if (auth.user?.id === updated.id) {
          auth.updateUser(updated);
        }
      } else if (slug === 'warn') {
        await api.warnUser(auth.token, userId, reason);
      } else if (slug === 'support-ban') {
        await api.supportBan(auth.token, userId, reason);
      } else {
        await api.banUser(auth.token, userId, reason);
      }
      router.goto(`/admin/users/id${userId}`);
    } catch (caught) {
      error = caught instanceof Error ? caught.message : locale.t('error');
    }
  }

  async function saveLimits(event: Event) {
    event.preventDefault();
    if (!auth.token || !userId) {
      return;
    }
    const data = new FormData(event.currentTarget as HTMLFormElement);
    await api.setLimits(auth.token, userId, data.has('posting'), data.has('messaging'));
    epoch += 1;
  }

  async function actReport(id: number, action: string) {
    if (!auth.token) {
      return;
    }
    await api.reportAction(auth.token, id, action, reason || undefined);
    epoch += 1;
  }
</script>

<svelte:head>
  <title>{documentTitle(locale.t('admin'))}</title>
</svelte:head>

<div class={['aui-page', 'aui-page-sidebar', theme.isDark && 'aui-theme-dark']}>
  <header class="aui-header">
    <a href="/" onclick={(event) => go(event, '/')}>{locale.t('site_name')}</a>
    · {locale.t('admin')}
  </header>
  <div class="aui-page-sidebar">
    <aside class="aui-sidebar">
      {#if adminOk}
      <div class="aui-nav-heading">{locale.t('admin_overview')}</div>
      <ul class="aui-nav">
        <li>
          <a class={['aui-nav-item', slug === 'overview' && 'is-active']} href="/admin" onclick={(event) => go(event, '/admin')}
            >{locale.t('admin_overview_summary')}</a
          >
        </li>
      </ul>
      <div class="aui-nav-heading">{locale.t('admin_content')}</div>
      <ul class="aui-nav">
        <li>
          <a class={['aui-nav-item', slug === 'users' && 'is-active']} href="/admin/users" onclick={(event) => go(event, '/admin/users')}
            >{locale.t('users')}</a
          >
        </li>
        <li>
          <a class={['aui-nav-item', slug === 'clubs' && 'is-active']} href="/admin/clubs" onclick={(event) => go(event, '/admin/clubs')}
            >{locale.t('groups')}</a
          >
        </li>
        <li>
          <a
            class={['aui-nav-item', slug.startsWith('banned') && 'is-active']}
            href="/admin/bannedLinks"
            onclick={(event) => go(event, '/admin/bannedLinks')}>{locale.t('admin_banned_links')}</a
          >
        </li>
      </ul>
      {/if}
      <div class="aui-nav-heading">{locale.t('admin_services')}</div>
      <ul class="aui-nav">
        {#if adminOk}
        <li>
          <a
            class={['aui-nav-item', slug.startsWith('voucher') && 'is-active']}
            href="/admin/vouchers"
            onclick={(event) => go(event, '/admin/vouchers')}>{locale.t('vouchers')}</a
          >
        </li>
        <li>
          <a class={['aui-nav-item', (slug === 'gifts' || slug.startsWith('gifts/')) && 'is-active']} href="/admin/gifts" onclick={(event) => go(event, '/admin/gifts')}
            >{locale.t('gifts')}</a
          >
        </li>
        {/if}
        <li>
          <a
            class={['aui-nav-item', slug.startsWith('report') && 'is-active']}
            href="/admin/support/reports"
            onclick={(event) => go(event, '/admin/support/reports')}>{locale.t('users_reports')}</a
          >
        </li>
        {#if adminOk}
        <li>
          <a class="aui-nav-item" href="/noSpam" onclick={(event) => go(event, '/noSpam')}>{locale.t('template_ban')}</a>
        </li>
        {/if}
      </ul>
    </aside>
    <main class="aui-page-panel">
      {#if !canSee}
        <p>{locale.t('forbidden')}</p>
      {:else}
      {#if error}
        <p class="vk-error">{error}</p>
      {/if}

      {#if slug === 'overview'}
        {#await overviewPromise then overview}
          {#if overview}
            <div class="admin-overview_cards">
              <div class="admin-overview_card">
                <div class="admin-overview_card_counter_digit">{overview.users}</div>
                {locale.t('users')}
              </div>
              <div class="admin-overview_card">
                <div class="admin-overview_card_counter_digit">{overview.groups}</div>
                {locale.t('groups')}
              </div>
              <div class="admin-overview_card">
                <div class="admin-overview_card_counter_digit">{overview.wall_posts}</div>
                {locale.t('wall')}
              </div>
              <div class="admin-overview_card">
                <div class="admin-overview_card_counter_digit">{overview.tickets_open}</div>
                {locale.t('support_list')}
              </div>
              <div class="admin-overview_card">
                <div class="admin-overview_card_counter_digit">{overview.reports_open}</div>
                {locale.t('users_reports')}
              </div>
              <div class="admin-overview_card">
                <div class="admin-overview_card_counter_digit">{overview.banned_users}</div>
                {locale.t('user_is_blocked')}
              </div>
            </div>
          {/if}
        {/await}
      {:else if slug === 'users'}
        <form
          onsubmit={(event) => {
            event.preventDefault();
            epoch += 1;
          }}
        >
          <input bind:value={query} />
          <button class="aui-button" type="submit">{locale.t('header_search')}</button>
        </form>
        {#await usersPromise then users}
          <table class="aui">
            <thead>
              <tr>
                <th>ID</th>
                <th>{locale.t('name')}</th>
                <th>{locale.t('points')}</th>
              </tr>
            </thead>
            <tbody>
              {#each users as user (user.id)}
                <tr>
                  <td>
                    <a href="/admin/users/id{user.id}" onclick={(event) => go(event, `/admin/users/id${user.id}`)}
                      >{user.id}</a
                    >
                  </td>
                  <td>{displayName(user)} {user.banned ? `(${locale.t('user_is_blocked')})` : ''}</td>
                  <td>{user.coins ?? 0}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        {/await}
      {:else if slug === 'user'}
        {#await userPromise then user}
          {#if user}
            <h2>{displayName(user)}</h2>
            <p>ID {user.id} · {user.role} · {user.coins} {locale.t('points_count')}</p>
            <p>
              <a href="/id{user.id}" onclick={(event) => go(event, `/id${user.id}`)}>{locale.t('page')}</a>
              ·
              <a href="/admin/ban/{user.id}" onclick={(event) => go(event, `/admin/ban/${user.id}`)}>{locale.t('ban')}</a>
              ·
              <a href="/admin/unban/{user.id}" onclick={(event) => go(event, `/admin/unban/${user.id}`)}
                >{locale.t('unban_user_action')}</a
              >
              ·
              <a href="/admin/warn/{user.id}" onclick={(event) => go(event, `/admin/warn/${user.id}`)}>{locale.t('warn')}</a>
              ·
              <a href="/admin/user{user.id}/bans" onclick={(event) => go(event, `/admin/user${user.id}/bans`)}
                >{locale.t('user_is_blocked')}</a
              >
              ·
              <a href="/admin/support/ban/{user.id}" onclick={(event) => go(event, `/admin/support/ban/${user.id}`)}
                >{locale.t('menu_help')}</a
              >
            </p>
            <form onsubmit={saveLimits}>
              <label><input type="checkbox" name="posting" checked={user.posting_allowed !== false} /> {locale.t('wall')}</label>
              <label><input type="checkbox" name="messaging" checked={user.messaging_allowed !== false} /> {locale.t('my_messages')}</label>
              <button class="aui-button" type="submit">{locale.t('save')}</button>
            </form>
            {#await warningsPromise then warnings}
              {#each warnings as warning (warning.id)}
                <p>{warning.created_at}: {warning.reason}</p>
              {/each}
            {/await}
          {/if}
        {/await}
      {:else if slug === 'clubs'}
        {#await clubsPromise then clubs}
          <table class="aui">
            <tbody>
            {#each clubs as club (club.id)}
              <tr>
                <td>
                  <a href="/club{club.id}" onclick={(event) => go(event, `/club${club.id}`)}>{club.name}</a>
                </td>
                <td>{club.members}</td>
              </tr>
            {/each}
            </tbody>
          </table>
        {/await}
      {:else if slug === 'vouchers'}
        <form onsubmit={createVoucher}>
          <input bind:value={voucherCoins} type="number" min="1" />
          <input bind:value={voucherUses} type="number" min="1" />
          <button class="aui-button" type="submit">{locale.t('save')}</button>
        </form>
        {#await vouchersPromise then vouchers}
          <table class="aui">
            <tbody>
            {#each vouchers as voucher (voucher.id)}
              <tr>
                <td>
                  <a href="/admin/vouchers/id{voucher.id}" onclick={(event) => go(event, `/admin/vouchers/id${voucher.id}`)}
                    >{voucher.serial}</a
                  >
                </td>
                <td>{voucher.coins}</td>
                <td>{voucher.remaining}/{voucher.total}</td>
              </tr>
            {/each}
            </tbody>
          </table>
        {/await}
      {:else if slug === 'voucher'}
        {#await vouchersPromise then vouchers}
          {@const voucher = vouchers.find((item) => item.id === objectId)}
          {#if voucher}
            <h2>{voucher.serial}</h2>
            <p>{voucher.coins} · {voucher.remaining}/{voucher.total}</p>
          {/if}
        {/await}
      {:else if slug === 'banned-links'}
        <form onsubmit={addLink}>
          <input bind:value={linkUrl} placeholder="https://" />
          <input bind:value={linkReason} placeholder={locale.t('report_reason')} />
          <button class="aui-button" type="submit">{locale.t('save')}</button>
        </form>
        {#await linksPromise then links}
          <table class="aui">
            <tbody>
            {#each links as link (link.id)}
              <tr>
                <td>{link.url}</td>
                <td>{link.reason}</td>
                <td>
                  <button
                    class="aui-button aui-button-subtle"
                    type="button"
                    onclick={() => auth.token && api.deleteBannedLink(auth.token, link.id).then(() => (epoch += 1))}
                    >{locale.t('delete')}</button
                  >
                </td>
              </tr>
            {/each}
            </tbody>
          </table>
        {/await}
      {:else if slug === 'reports' || slug === 'report'}
        {#await reportsPromise then reports}
          {#each reports as report (report.id)}
            <div class="admin-overview_card">
              <a href="/admin/report{report.id}" onclick={(event) => go(event, `/admin/report${report.id}`)}
                >#{report.id}</a
              >
              {report.target_type} {report.target_id}: {report.reason} ({report.status})
              <div>
                <button class="aui-button" type="button" onclick={() => actReport(report.id, 'ignore')}>OK</button>
                <button class="aui-button" type="button" onclick={() => actReport(report.id, 'delete')}
                  >{locale.t('delete')}</button
                >
                <button class="aui-button" type="button" onclick={() => actReport(report.id, 'ban')}>{locale.t('ban')}</button>
              </div>
            </div>
          {/each}
        {/await}
      {:else if slug === 'ban' || slug === 'unban' || slug === 'warn' || slug === 'support-ban' || slug === 'support-unban'}
        {#await userPromise then user}
          <h2>{user ? displayName(user) : userId}</h2>
          <form onsubmit={runBan}>
            {#if slug !== 'unban' && slug !== 'support-unban'}
              <input bind:value={reason} placeholder={locale.t('report_reason')} />
            {/if}
            <button class="aui-button" type="submit">{locale.t('save')}</button>
          </form>
        {/await}
      {:else if slug === 'club'}
        {#await clubsPromise then clubs}
          {@const club = clubs.find((item) => item.id === objectId)}
          {#if club}
            <h2>{club.name}</h2>
            <p>
              <a href="/club{club.id}" onclick={(event) => go(event, `/club${club.id}`)}>{locale.t('page')}</a>
              · {club.members} {locale.t('participants')}
            </p>
          {/if}
        {/await}
      {:else if slug === 'bans'}
        {#await userPromise then user}
          <h2>{user ? displayName(user) : userId}</h2>
        {/await}
        {#await warningsPromise then warnings}
          {#each warnings as warning (warning.id)}
            <p>{warning.created_at}: {warning.reason}</p>
          {:else}
            <p>{locale.t('nothing_here')}</p>
          {/each}
        {/await}
      {:else if slug === 'banned-link'}
        {#await linksPromise then links}
          {@const link = links.find((item) => item.id === objectId)}
          {#if link}
            <h2>{link.url}</h2>
            <p>{link.reason}</p>
            <button
              class="aui-button"
              type="button"
              onclick={() => auth.token && api.deleteBannedLink(auth.token, link.id).then(() => router.goto('/admin/bannedLinks'))}
              >{locale.t('delete')}</button
            >
          {/if}
        {/await}
      {:else if slug === 'gifts' || slug.startsWith('gifts/')}
        {#await catalogPromise then categories}
          {#each categories as category (category.id)}
            <h3>{category.name}</h3>
            {#each category.gifts as gift (gift.id)}
              <p>
                <img src={gift.image_url} alt={gift.name} width="48" height="48" />
                {gift.name} · {gift.price} {locale.t('points_count')}
              </p>
            {/each}
          {/each}
        {/await}
      {:else}
        <p>{locale.t('admin_overview_summary')}</p>
      {/if}
      {/if}
    </main>
  </div>
</div>
