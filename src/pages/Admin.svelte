<script lang="ts">
  import InboxIcon from '@lucide/svelte/icons/inbox';
  import SearchIcon from '@lucide/svelte/icons/search';
  import CircleAlertIcon from '@lucide/svelte/icons/circle-alert';
  import UsersIcon from '@lucide/svelte/icons/users';
  import UsersRoundIcon from '@lucide/svelte/icons/users-round';
  import NewspaperIcon from '@lucide/svelte/icons/newspaper';
  import LifeBuoyIcon from '@lucide/svelte/icons/life-buoy';
  import FlagIcon from '@lucide/svelte/icons/flag';
  import BanIcon from '@lucide/svelte/icons/ban';
  import * as Alert from '$lib/components/ui/alert/index.js';
  import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
  import * as Card from '$lib/components/ui/card/index.js';
  import * as Empty from '$lib/components/ui/empty/index.js';
  import * as Field from '$lib/components/ui/field/index.js';
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import * as Table from '$lib/components/ui/table/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Skeleton } from '$lib/components/ui/skeleton/index.js';
  import { Toaster } from '$lib/components/ui/sonner/index.js';
  import { documentTitle } from '$lib/pageTitle';
  import { router } from '$lib/router.svelte';
  import AdminSidebar from '../components/admin/AdminSidebar.svelte';
  import AdminUserDetail from '../components/admin/AdminUserDetail.svelte';
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
  import { toast } from 'svelte-sonner';
  import { toBody } from '../lib/toBody';
  import '../styles/shadcn.css';

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
    return auth.token && slug === 'overview'
      ? api.adminOverview(auth.token)
      : Promise.resolve(null as AdminOverview | null);
  });
  const usersPromise = $derived.by(() => {
    void epoch;
    return auth.token && (slug === 'users' || slug === 'user')
      ? api.adminUsers(auth.token, query || undefined)
      : Promise.resolve([] as User[]);
  });
  const clubsPromise = $derived.by(() => {
    void epoch;
    return auth.token && (slug === 'clubs' || slug === 'club')
      ? api.adminClubs(auth.token)
      : Promise.resolve([] as Group[]);
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
  const toasterTheme = $derived(theme.isDark ? 'dark' : 'light');

  const heading = $derived.by(() => {
    if (slug === 'overview') {
      return locale.t('admin_overview_summary');
    }
    if (slug === 'users' || slug === 'user' || slug === 'bans') {
      return locale.t('users');
    }
    if (slug === 'clubs' || slug === 'club') {
      return locale.t('groups');
    }
    if (slug.startsWith('banned')) {
      return locale.t('admin_banned_links');
    }
    if (slug.startsWith('voucher')) {
      return locale.t('vouchers');
    }
    if (slug === 'gifts' || slug.startsWith('gifts/')) {
      return locale.t('gifts');
    }
    if (slug.startsWith('report')) {
      return locale.t('users_reports');
    }
    if (slug === 'ban' || slug === 'support-ban') {
      return locale.t('ban');
    }
    if (slug === 'unban' || slug === 'support-unban') {
      return locale.t('unban_user_action');
    }
    if (slug === 'warn') {
      return locale.t('warn');
    }
    return locale.t('admin');
  });

  function go(event: MouseEvent, href: string) {
    router.handleClick(event, href);
  }

  function fail(caught: unknown) {
    error = caught instanceof Error ? caught.message : locale.t('error');
    toast.error(error);
  }

  async function createVoucher(event: Event) {
    event.preventDefault();
    if (!auth.token) {
      return;
    }
    try {
      await api.createVoucher(auth.token, Number(voucherCoins), Number(voucherUses));
      toast.success(locale.t('saved'));
      epoch += 1;
    } catch (caught) {
      fail(caught);
    }
  }

  async function addLink(event: Event) {
    event.preventDefault();
    if (!auth.token) {
      return;
    }
    try {
      await api.addBannedLink(auth.token, linkUrl, linkReason);
      linkUrl = '';
      linkReason = '';
      toast.success(locale.t('saved'));
      epoch += 1;
    } catch (caught) {
      fail(caught);
    }
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
      toast.success(locale.t('saved'));
      router.goto(`/admin/users/id${userId}`);
    } catch (caught) {
      fail(caught);
    }
  }

  async function saveLimits(posting: boolean, messaging: boolean) {
    if (!auth.token || !userId) {
      return;
    }
    try {
      await api.setLimits(auth.token, userId, posting, messaging);
      toast.success(locale.t('saved'));
      epoch += 1;
    } catch (caught) {
      fail(caught);
    }
  }

  async function actReport(id: number, action: string) {
    if (!auth.token) {
      return;
    }
    try {
      await api.reportAction(auth.token, id, action, reason || undefined);
      toast.success(locale.t('saved'));
      epoch += 1;
    } catch (caught) {
      fail(caught);
    }
  }

  async function removeLink(id: number, thenHref?: string) {
    if (!auth.token) {
      return;
    }
    try {
      await api.deleteBannedLink(auth.token, id);
      toast.success(locale.t('saved'));
      if (thenHref) {
        router.goto(thenHref);
      } else {
        epoch += 1;
      }
    } catch (caught) {
      fail(caught);
    }
  }

</script>

<svelte:head>
  <title>{documentTitle(locale.t('admin'))}</title>
</svelte:head>

<div class="admin-app">
  <Sidebar.Provider>
    <AdminSidebar {slug} {adminOk} />
    <Sidebar.Inset>
      <header class="flex h-14 shrink-0 items-center gap-2 border-b px-4">
        <Sidebar.Trigger />
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/admin" onclick={(event) => go(event, '/admin')}
                >{locale.t('admin')}</Breadcrumb.Link
              >
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>{heading}</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </header>
      <div class="flex flex-1 flex-col gap-6 p-4 md:p-6">
        {#if !canSee}
          <Alert.Root variant="destructive">
            <CircleAlertIcon />
            <Alert.Title>{locale.t('forbidden')}</Alert.Title>
            <Alert.Description>{locale.t('forbidden_comment')}</Alert.Description>
          </Alert.Root>
        {:else}
          <div>
            <h1 class="text-2xl font-semibold tracking-tight">{heading}</h1>
          </div>
          {#if error}
            <Alert.Root variant="destructive">
              <CircleAlertIcon />
              <Alert.Title>{locale.t('error')}</Alert.Title>
              <Alert.Description>{error}</Alert.Description>
            </Alert.Root>
          {/if}

          {#if slug === 'overview'}
            {#await overviewPromise}
              <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {#each [1, 2, 3, 4, 5, 6] as card (card)}
                  <Skeleton class="h-28" />
                {/each}
              </div>
            {:then overview}
              {#if overview}
                <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  <Card.Root>
                    <Card.Header>
                      <Card.Description>{locale.t('users')}</Card.Description>
                      <Card.Title class="text-3xl tabular-nums">{overview.users}</Card.Title>
                      <Card.Action>
                        <UsersIcon class="size-4 text-muted-foreground" />
                      </Card.Action>
                    </Card.Header>
                  </Card.Root>
                  <Card.Root>
                    <Card.Header>
                      <Card.Description>{locale.t('groups')}</Card.Description>
                      <Card.Title class="text-3xl tabular-nums">{overview.groups}</Card.Title>
                      <Card.Action>
                        <UsersRoundIcon class="size-4 text-muted-foreground" />
                      </Card.Action>
                    </Card.Header>
                  </Card.Root>
                  <Card.Root>
                    <Card.Header>
                      <Card.Description>{locale.t('wall')}</Card.Description>
                      <Card.Title class="text-3xl tabular-nums">{overview.wall_posts}</Card.Title>
                      <Card.Action>
                        <NewspaperIcon class="size-4 text-muted-foreground" />
                      </Card.Action>
                    </Card.Header>
                  </Card.Root>
                  <Card.Root>
                    <Card.Header>
                      <Card.Description>{locale.t('support_list')}</Card.Description>
                      <Card.Title class="text-3xl tabular-nums">{overview.tickets_open}</Card.Title>
                      <Card.Action>
                        <LifeBuoyIcon class="size-4 text-muted-foreground" />
                      </Card.Action>
                    </Card.Header>
                  </Card.Root>
                  <Card.Root>
                    <Card.Header>
                      <Card.Description>{locale.t('users_reports')}</Card.Description>
                      <Card.Title class="text-3xl tabular-nums">{overview.reports_open}</Card.Title>
                      <Card.Action>
                        <FlagIcon class="size-4 text-muted-foreground" />
                      </Card.Action>
                    </Card.Header>
                  </Card.Root>
                  <Card.Root>
                    <Card.Header>
                      <Card.Description>{locale.t('user_is_blocked')}</Card.Description>
                      <Card.Title class="text-3xl tabular-nums">{overview.banned_users}</Card.Title>
                      <Card.Action>
                        <BanIcon class="size-4 text-muted-foreground" />
                      </Card.Action>
                    </Card.Header>
                  </Card.Root>
                </div>
              {/if}
            {/await}
          {:else if slug === 'users'}
            <form
              class="flex max-w-xl gap-2"
              onsubmit={(event) => {
                event.preventDefault();
                epoch += 1;
              }}
            >
              <Input bind:value={query} placeholder={locale.t('header_search')} />
              <Button type="submit">
                <SearchIcon data-icon="inline-start" />
                {locale.t('header_search')}
              </Button>
            </form>
            {#await usersPromise}
              <Skeleton class="h-64" />
            {:then users}
              {#if users.length === 0}
                <Empty.Root class="border">
                  <Empty.Header>
                    <Empty.Media variant="icon"><InboxIcon /></Empty.Media>
                    <Empty.Title>{locale.t('nothing_here')}</Empty.Title>
                  </Empty.Header>
                </Empty.Root>
              {:else}
                <div class="overflow-hidden rounded-xl border">
                  <Table.Root>
                    <Table.Header>
                      <Table.Row>
                        <Table.Head>ID</Table.Head>
                        <Table.Head>{locale.t('name')}</Table.Head>
                        <Table.Head>{locale.t('role')}</Table.Head>
                        <Table.Head class="text-end">{locale.t('points')}</Table.Head>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {#each users as user (user.id)}
                        <Table.Row>
                          <Table.Cell>
                            <a
                              class="font-medium underline-offset-4 hover:underline"
                              href="/admin/users/id{user.id}"
                              onclick={(event) => go(event, `/admin/users/id${user.id}`)}>{user.id}</a
                            >
                          </Table.Cell>
                          <Table.Cell>
                            <div class="flex items-center gap-2">
                              {displayName(user)}
                              {#if user.banned}
                                <Badge variant="destructive">{locale.t('user_is_blocked')}</Badge>
                              {/if}
                            </div>
                          </Table.Cell>
                          <Table.Cell>
                            <Badge variant="secondary">{user.role}</Badge>
                          </Table.Cell>
                          <Table.Cell class="text-end tabular-nums">{user.coins ?? 0}</Table.Cell>
                        </Table.Row>
                      {/each}
                    </Table.Body>
                  </Table.Root>
                </div>
              {/if}
            {/await}
          {:else if slug === 'user'}
            {#await userPromise}
              <Skeleton class="h-48" />
            {:then user}
              {#if user}
                {#await warningsPromise}
                  <Skeleton class="h-48" />
                {:then warnings}
                  {#key user.id}
                    <AdminUserDetail {user} {warnings} onSaveLimits={saveLimits} />
                  {/key}
                {/await}
              {/if}
            {/await}
          {:else if slug === 'clubs'}
            {#await clubsPromise}
              <Skeleton class="h-64" />
            {:then clubs}
              {#if clubs.length === 0}
                <Empty.Root class="border">
                  <Empty.Header>
                    <Empty.Media variant="icon"><InboxIcon /></Empty.Media>
                    <Empty.Title>{locale.t('nothing_here')}</Empty.Title>
                  </Empty.Header>
                </Empty.Root>
              {:else}
                <div class="overflow-hidden rounded-xl border">
                  <Table.Root>
                    <Table.Header>
                      <Table.Row>
                        <Table.Head>{locale.t('name')}</Table.Head>
                        <Table.Head class="text-end">{locale.t('participants')}</Table.Head>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {#each clubs as club (club.id)}
                        <Table.Row>
                          <Table.Cell>
                            <a
                              class="font-medium underline-offset-4 hover:underline"
                              href="/club{club.id}"
                              onclick={(event) => go(event, `/club${club.id}`)}>{club.name}</a
                            >
                          </Table.Cell>
                          <Table.Cell class="text-end tabular-nums">{club.members}</Table.Cell>
                        </Table.Row>
                      {/each}
                    </Table.Body>
                  </Table.Root>
                </div>
              {/if}
            {/await}
          {:else if slug === 'vouchers'}
            <Card.Root class="max-w-xl">
              <Card.Header>
                <Card.Title>{locale.t('vouchers')}</Card.Title>
              </Card.Header>
              <Card.Content>
                <form class="flex flex-col gap-4" onsubmit={createVoucher}>
                  <Field.Group>
                    <Field.Field>
                      <Field.Label>{locale.t('points')}</Field.Label>
                      <Input bind:value={voucherCoins} type="number" min="1" />
                    </Field.Field>
                    <Field.Field>
                      <Field.Label>{locale.t('admin_uses')}</Field.Label>
                      <Input bind:value={voucherUses} type="number" min="1" />
                    </Field.Field>
                  </Field.Group>
                  <Button type="submit" class="w-fit">{locale.t('save')}</Button>
                </form>
              </Card.Content>
            </Card.Root>
            {#await vouchersPromise}
              <Skeleton class="h-48" />
            {:then vouchers}
              {#if vouchers.length}
                <div class="overflow-hidden rounded-xl border">
                  <Table.Root>
                    <Table.Header>
                      <Table.Row>
                        <Table.Head>{locale.t('admin_serial')}</Table.Head>
                        <Table.Head class="text-end">{locale.t('points')}</Table.Head>
                        <Table.Head class="text-end">{locale.t('admin_uses')}</Table.Head>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {#each vouchers as voucher (voucher.id)}
                        <Table.Row>
                          <Table.Cell>
                            <a
                              class="font-medium underline-offset-4 hover:underline"
                              href="/admin/vouchers/id{voucher.id}"
                              onclick={(event) => go(event, `/admin/vouchers/id${voucher.id}`)}>{voucher.serial}</a
                            >
                          </Table.Cell>
                          <Table.Cell class="text-end tabular-nums">{voucher.coins}</Table.Cell>
                          <Table.Cell class="text-end tabular-nums">{voucher.remaining}/{voucher.total}</Table.Cell>
                        </Table.Row>
                      {/each}
                    </Table.Body>
                  </Table.Root>
                </div>
              {/if}
            {/await}
          {:else if slug === 'voucher'}
            {#await vouchersPromise then vouchers}
              {@const voucher = vouchers.find((item) => item.id === objectId)}
              {#if voucher}
                <Card.Root class="max-w-lg">
                  <Card.Header>
                    <Card.Title>{voucher.serial}</Card.Title>
                    <Card.Description>
                      {voucher.coins} {locale.t('points_count')} · {voucher.remaining}/{voucher.total}
                    </Card.Description>
                  </Card.Header>
                </Card.Root>
              {/if}
            {/await}
          {:else if slug === 'banned-links'}
            <Card.Root class="max-w-xl">
              <Card.Header>
                <Card.Title>{locale.t('admin_banned_links')}</Card.Title>
              </Card.Header>
              <Card.Content>
                <form class="flex flex-col gap-4" onsubmit={addLink}>
                  <Field.Group>
                    <Field.Field>
                      <Field.Label>{locale.t('admin_banned_link')}</Field.Label>
                      <Input bind:value={linkUrl} placeholder="https://" />
                    </Field.Field>
                    <Field.Field>
                      <Field.Label>{locale.t('report_reason')}</Field.Label>
                      <Input bind:value={linkReason} placeholder={locale.t('report_reason')} />
                    </Field.Field>
                  </Field.Group>
                  <Button type="submit" class="w-fit">{locale.t('save')}</Button>
                </form>
              </Card.Content>
            </Card.Root>
            {#await linksPromise}
              <Skeleton class="h-48" />
            {:then links}
              {#if links.length}
                <div class="overflow-hidden rounded-xl border">
                  <Table.Root>
                    <Table.Header>
                      <Table.Row>
                        <Table.Head>URL</Table.Head>
                        <Table.Head>{locale.t('report_reason')}</Table.Head>
                        <Table.Head class="w-32"></Table.Head>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {#each links as link (link.id)}
                        <Table.Row>
                          <Table.Cell class="max-w-xs truncate font-medium">{link.url}</Table.Cell>
                          <Table.Cell>{link.reason}</Table.Cell>
                          <Table.Cell>
                            <Button variant="outline" size="sm" onclick={() => removeLink(link.id)}
                              >{locale.t('delete')}</Button
                            >
                          </Table.Cell>
                        </Table.Row>
                      {/each}
                    </Table.Body>
                  </Table.Root>
                </div>
              {/if}
            {/await}
          {:else if slug === 'reports' || slug === 'report'}
            {#await reportsPromise}
              <Skeleton class="h-64" />
            {:then reports}
              {#if reports.length === 0}
                <Empty.Root class="border">
                  <Empty.Header>
                    <Empty.Media variant="icon"><InboxIcon /></Empty.Media>
                    <Empty.Title>{locale.t('nothing_here')}</Empty.Title>
                  </Empty.Header>
                </Empty.Root>
              {:else}
                <div class="flex flex-col gap-3">
                  {#each reports as report (report.id)}
                    <Card.Root>
                      <Card.Header>
                        <Card.Title>
                          <a
                            class="underline-offset-4 hover:underline"
                            href="/admin/report{report.id}"
                            onclick={(event) => go(event, `/admin/report${report.id}`)}>#{report.id}</a
                          >
                        </Card.Title>
                        <Card.Description>
                          {report.target_type} {report.target_id}: {report.reason}
                        </Card.Description>
                        <Card.Action>
                          <Badge variant="secondary">{report.status}</Badge>
                        </Card.Action>
                      </Card.Header>
                      <Card.Footer class="gap-2">
                        <Button size="sm" variant="outline" onclick={() => actReport(report.id, 'ignore')}>OK</Button>
                        <Button size="sm" variant="outline" onclick={() => actReport(report.id, 'delete')}
                          >{locale.t('delete')}</Button
                        >
                        <Button size="sm" variant="destructive" onclick={() => actReport(report.id, 'ban')}
                          >{locale.t('ban')}</Button
                        >
                      </Card.Footer>
                    </Card.Root>
                  {/each}
                </div>
              {/if}
            {/await}
          {:else if slug === 'ban' || slug === 'unban' || slug === 'warn' || slug === 'support-ban' || slug === 'support-unban'}
            {#await userPromise then user}
              <Card.Root class="max-w-lg">
                <Card.Header>
                  <Card.Title>{user ? displayName(user) : userId}</Card.Title>
                </Card.Header>
                <Card.Content>
                  <form class="flex flex-col gap-4" onsubmit={runBan}>
                    {#if slug !== 'unban' && slug !== 'support-unban'}
                      <Field.Field>
                        <Field.Label>{locale.t('report_reason')}</Field.Label>
                        <Input bind:value={reason} placeholder={locale.t('report_reason')} />
                      </Field.Field>
                    {/if}
                    <Button type="submit" class="w-fit">{locale.t('save')}</Button>
                  </form>
                </Card.Content>
              </Card.Root>
            {/await}
          {:else if slug === 'club'}
            {#await clubsPromise then clubs}
              {@const club = clubs.find((item) => item.id === objectId)}
              {#if club}
                <Card.Root class="max-w-lg">
                  <Card.Header>
                    <Card.Title>{club.name}</Card.Title>
                    <Card.Description>{club.members} {locale.t('participants')}</Card.Description>
                    <Card.Action>
                      <Button href="/club{club.id}" variant="outline" onclick={(event) => go(event, `/club${club.id}`)}
                        >{locale.t('page')}</Button
                      >
                    </Card.Action>
                  </Card.Header>
                </Card.Root>
              {/if}
            {/await}
          {:else if slug === 'bans'}
            {#await userPromise then user}
              <h1 class="text-xl font-medium">{user ? displayName(user) : userId}</h1>
            {/await}
            {#await warningsPromise then warnings}
              {#if warnings.length === 0}
                <Empty.Root class="border">
                  <Empty.Header>
                    <Empty.Media variant="icon"><InboxIcon /></Empty.Media>
                    <Empty.Title>{locale.t('nothing_here')}</Empty.Title>
                  </Empty.Header>
                </Empty.Root>
              {:else}
                <div class="flex flex-col gap-2">
                  {#each warnings as warning (warning.id)}
                    <Card.Root>
                      <Card.Content class="text-sm">
                        <p class="text-muted-foreground">{warning.created_at}</p>
                        <p>{warning.reason}</p>
                      </Card.Content>
                    </Card.Root>
                  {/each}
                </div>
              {/if}
            {/await}
          {:else if slug === 'banned-link'}
            {#await linksPromise then links}
              {@const link = links.find((item) => item.id === objectId)}
              {#if link}
                <Card.Root class="max-w-lg">
                  <Card.Header>
                    <Card.Title class="break-all">{link.url}</Card.Title>
                    <Card.Description>{link.reason}</Card.Description>
                  </Card.Header>
                  <Card.Footer>
                    <Button variant="destructive" onclick={() => removeLink(link.id, '/admin/bannedLinks')}
                      >{locale.t('delete')}</Button
                    >
                  </Card.Footer>
                </Card.Root>
              {/if}
            {/await}
          {:else if slug === 'gifts' || slug.startsWith('gifts/')}
            {#await catalogPromise then categories}
              {#each categories as category (category.id)}
                <div class="flex flex-col gap-3">
                  <h2 class="text-lg font-medium">{category.name}</h2>
                  <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {#each category.gifts as gift (gift.id)}
                      <Card.Root>
                        <Card.Content class="flex items-center gap-3">
                          <img class="size-12 rounded-md object-cover" src={gift.image_url} alt={gift.name} />
                          <div>
                            <p class="font-medium">{gift.name}</p>
                            <p class="text-sm text-muted-foreground">
                              {gift.price} {locale.t('points_count')}
                            </p>
                          </div>
                        </Card.Content>
                      </Card.Root>
                    {/each}
                  </div>
                </div>
              {/each}
            {/await}
          {:else}
            <p class="text-muted-foreground">{locale.t('admin_overview_summary')}</p>
          {/if}
        {/if}
      </div>
    </Sidebar.Inset>
  </Sidebar.Provider>
  <div class="admin-toaster" {@attach toBody}>
    <Toaster theme={toasterTheme} />
  </div>
</div>
