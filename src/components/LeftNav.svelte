<script lang="ts">
  import type { RouteName } from '../lib/router.svelte';
  import { router } from '../lib/router.svelte';
  import { userHref } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  type NavItem = { href: string; label: string; name: RouteName; klass: string };

  const owner = $derived(auth.user?.id);
  const pageHref = $derived(auth.user ? userHref(auth.user) : '/profile');
  const items = $derived<NavItem[]>([
    {
      href: pageHref,
      label: locale.t('my_page'),
      name: 'profile',
      klass: 'my_page',
    },
    {
      href: owner ? `/friends${owner}` : '/friends',
      label: locale.t('my_friends'),
      name: 'friends',
      klass: 'my_friends',
    },
    {
      href: owner ? `/albums${owner}` : '/albums',
      label: locale.t('my_photos'),
      name: 'albums',
      klass: 'my_photos',
    },
    {
      href: owner ? `/videos${owner}` : '/videos',
      label: locale.t('my_videos'),
      name: 'videos',
      klass: 'my_videos',
    },
    {
      href: owner ? `/audios${owner}` : '/audio',
      label: locale.t('my_audios'),
      name: 'audio',
      klass: 'my_audios',
    },
    { href: '/im', label: locale.t('my_messages'), name: 'messages', klass: 'my_messages' },
    { href: owner ? `/notes${owner}` : '/notes', label: locale.t('my_notes'), name: 'notes', klass: 'my_notes' },
    {
      href: owner ? `/groups${owner}` : '/groups',
      label: locale.t('my_groups'),
      name: 'groups',
      klass: 'my_groups',
    },
    { href: owner ? `/events${owner}` : '/events', label: locale.t('my_events'), name: 'events', klass: 'my_groups' },
    { href: '/feed', label: locale.t('my_feed'), name: 'feed', klass: 'my_feed' },
    {
      href: '/notifications',
      label: locale.t('my_feedback'),
      name: 'notifications',
      klass: 'my_feedback',
    },
    { href: '/settings', label: locale.t('my_settings'), name: 'settings', klass: 'my_settings' },
  ]);

  const extras = $derived<NavItem[]>([
    { href: '/apps', label: locale.t('apps'), name: 'apps', klass: 'my_apps' },
    { href: owner ? `/docs${owner}` : '/docs', label: locale.t('my_documents'), name: 'docs', klass: 'my_documents' },
    ...(auth.user?.role === 'admin'
      ? [
          { href: '/admin', label: locale.t('admin'), name: 'admin' as const, klass: 'my_apps' },
          { href: '/noSpam', label: locale.t('template_ban'), name: 'nospam' as const, klass: 'my_apps' },
        ]
      : []),
  ]);

  function isActive(item: NavItem): boolean {
    if (item.name === 'profile') {
      if (router.route.name !== 'profile') {
        return false;
      }
      if (!router.route.userId && !router.route.slug) {
        return true;
      }
      const user = auth.user;
      if (!user) {
        return false;
      }
      if (router.route.userId && router.route.userId === String(user.id)) {
        return true;
      }
      const mine = user.screen_name?.trim().toLowerCase();
      if (mine && router.route.slug === mine) {
        return true;
      }
      return Boolean(mine && router.route.userId && mine === `id${router.route.userId}`);
    }
    if (item.name === 'groups') {
      return router.route.name === 'groups' || router.route.name === 'club';
    }
    return router.route.name === item.name;
  }
</script>

<div class="sidebar">
  <div class="navigation">
    <a
      href="/edit"
      class="link edit-button"
      onclick={(event) => router.handleClick(event, '/edit')}>{locale.t('edit_button')}</a
    >
    {#each items as item (item.href)}
      <a
        href={item.href}
        class={['link', item.klass, isActive(item) && 'is-active']}
        onclick={(event) => router.handleClick(event, item.href)}
      >
        {item.label}
      </a>
    {/each}
    <div class="menu_divider"></div>
    {#each extras as item (item.href)}
      <a
        href={item.href}
        class={['link', item.klass, isActive(item) && 'is-active']}
        onclick={(event) => router.handleClick(event, item.href)}
      >
        {item.label}
      </a>
    {/each}
  </div>
</div>
