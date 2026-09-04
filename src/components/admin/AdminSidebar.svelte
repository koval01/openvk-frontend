<script lang="ts">
  import GiftIcon from '@lucide/svelte/icons/gift';
  import HomeIcon from '@lucide/svelte/icons/home';
  import LayoutDashboardIcon from '@lucide/svelte/icons/layout-dashboard';
  import Link2OffIcon from '@lucide/svelte/icons/link-2-off';
  import LogOutIcon from '@lucide/svelte/icons/log-out';
  import ShieldIcon from '@lucide/svelte/icons/shield';
  import ShieldBanIcon from '@lucide/svelte/icons/shield-ban';
  import TicketIcon from '@lucide/svelte/icons/ticket';
  import UsersIcon from '@lucide/svelte/icons/users';
  import UsersRoundIcon from '@lucide/svelte/icons/users-round';
  import FlagIcon from '@lucide/svelte/icons/flag';
  import ChevronsUpDownIcon from '@lucide/svelte/icons/chevrons-up-down';
  import * as Avatar from '$lib/components/ui/avatar/index.js';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import { router } from '$lib/router.svelte';
  import { CAMERA_FALLBACK, displayName } from '../../services/types';
  import { auth } from '../../stores/auth.svelte';
  import { locale } from '../../stores/locale.svelte';

  let { slug, adminOk }: { slug: string; adminOk: boolean } = $props();

  const usersActive = $derived(
    ['users', 'user', 'ban', 'unban', 'warn', 'bans', 'support-ban', 'support-unban'].includes(slug),
  );
  const clubsActive = $derived(slug === 'clubs' || slug === 'club');
  const linksActive = $derived(slug.startsWith('banned'));
  const voucherActive = $derived(slug.startsWith('voucher'));
  const giftsActive = $derived(slug === 'gifts' || slug.startsWith('gifts/'));
  const reportsActive = $derived(slug.startsWith('report'));

  function go(event: MouseEvent, href: string) {
    router.handleClick(event, href);
  }

  const initials = $derived.by(() => {
    const user = auth.user;
    if (!user) {
      return '?';
    }
    return `${user.first_name[0] ?? ''}${user.last_name[0] ?? ''}`.toUpperCase() || '?';
  });
</script>

<Sidebar.Root variant="inset">
  <Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton size="lg">
          {#snippet child({ props })}
            <a href="/admin" {...props} onclick={(event) => go(event, '/admin')}>
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
              >
                <ShieldIcon />
              </div>
              <div class="grid flex-1 text-start text-sm leading-tight">
                <span class="truncate font-medium">{locale.t('admin')}</span>
                <span class="truncate text-xs text-muted-foreground">{locale.t('site_name')}</span>
              </div>
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Header>
  <Sidebar.Content>
    {#if adminOk}
      <Sidebar.Group>
        <Sidebar.GroupLabel>{locale.t('admin_overview')}</Sidebar.GroupLabel>
        <Sidebar.GroupContent>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={slug === 'overview'}>
                {#snippet child({ props })}
                  <a href="/admin" {...props} onclick={(event) => go(event, '/admin')}>
                    <LayoutDashboardIcon />
                    <span>{locale.t('admin_overview_summary')}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
      <Sidebar.Group>
        <Sidebar.GroupLabel>{locale.t('admin_content')}</Sidebar.GroupLabel>
        <Sidebar.GroupContent>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={usersActive}>
                {#snippet child({ props })}
                  <a href="/admin/users" {...props} onclick={(event) => go(event, '/admin/users')}>
                    <UsersIcon />
                    <span>{locale.t('users')}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={clubsActive}>
                {#snippet child({ props })}
                  <a href="/admin/clubs" {...props} onclick={(event) => go(event, '/admin/clubs')}>
                    <UsersRoundIcon />
                    <span>{locale.t('groups')}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={linksActive}>
                {#snippet child({ props })}
                  <a
                    href="/admin/bannedLinks"
                    {...props}
                    onclick={(event) => go(event, '/admin/bannedLinks')}
                  >
                    <Link2OffIcon />
                    <span>{locale.t('admin_banned_links')}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
    {/if}
    <Sidebar.Group>
      <Sidebar.GroupLabel>{locale.t('admin_services')}</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#if adminOk}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={voucherActive}>
                {#snippet child({ props })}
                  <a
                    href="/admin/vouchers"
                    {...props}
                    onclick={(event) => go(event, '/admin/vouchers')}
                  >
                    <TicketIcon />
                    <span>{locale.t('vouchers')}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={giftsActive}>
                {#snippet child({ props })}
                  <a href="/admin/gifts" {...props} onclick={(event) => go(event, '/admin/gifts')}>
                    <GiftIcon />
                    <span>{locale.t('gifts')}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/if}
          <Sidebar.MenuItem>
            <Sidebar.MenuButton isActive={reportsActive}>
              {#snippet child({ props })}
                <a
                  href="/admin/support/reports"
                  {...props}
                  onclick={(event) => go(event, '/admin/support/reports')}
                >
                  <FlagIcon />
                  <span>{locale.t('users_reports')}</span>
                </a>
              {/snippet}
            </Sidebar.MenuButton>
          </Sidebar.MenuItem>
          {#if adminOk}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                {#snippet child({ props })}
                  <a href="/noSpam" {...props} onclick={(event) => go(event, '/noSpam')}>
                    <ShieldBanIcon />
                    <span>{locale.t('template_ban')}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/if}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>
  <Sidebar.Footer>
    {#if auth.user}
      <Sidebar.Menu>
        <Sidebar.MenuItem>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger
              class="flex w-full items-center gap-2 rounded-md p-2 text-start text-sm outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar.Root class="size-8 rounded-lg">
                <Avatar.Image src={auth.user.avatar_url || CAMERA_FALLBACK} alt="" />
                <Avatar.Fallback class="rounded-lg">{initials}</Avatar.Fallback>
              </Avatar.Root>
              <div class="grid flex-1 text-start text-sm leading-tight">
                <span class="truncate font-medium">{displayName(auth.user)}</span>
                <span class="truncate text-xs text-muted-foreground">{auth.user.role}</span>
              </div>
              <ChevronsUpDownIcon class="ms-auto" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content class="min-w-56 rounded-lg" align="end" side="top">
              <DropdownMenu.Group>
                <DropdownMenu.Item onclick={() => router.goto('/')}>
                  <HomeIcon />
                  {locale.t('admin_to_site')}
                </DropdownMenu.Item>
                <DropdownMenu.Item onclick={() => router.goto('/logout')}>
                  <LogOutIcon />
                  {locale.t('header_log_out')}
                </DropdownMenu.Item>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    {/if}
  </Sidebar.Footer>
  <Sidebar.Rail />
</Sidebar.Root>
