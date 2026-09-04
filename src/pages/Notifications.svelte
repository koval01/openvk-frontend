<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import Tabs from '../components/Tabs.svelte';
  import { localeForIntl } from '../lib/languages';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { CAMERA_FALLBACK, displayName, type SiteNotification } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  let tab = $state<'new' | 'archived' | null>(null);

  const listPromise = $derived.by(async () => {
    if (!auth.token) {
      return [] as SiteNotification[];
    }
    const items = await api.notifications(auth.token).catch((): SiteNotification[] => []);
    void api.markNotificationsSeen(auth.token).catch(() => undefined);
    return items;
  });

  function timeLabel(value: string) {
    return new Date(value).toLocaleString(localeForIntl(locale.code), {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  function kindLabel(kind: string) {
    const translated = locale.t(`notif_${kind}`);
    return translated.startsWith('@') ? kind : translated;
  }
</script>

{#snippet header()}
  {#if auth.user}
    <a href="/id{auth.user.id}" onclick={(event) => router.handleClick(event, `/id${auth.user?.id}`)}>
      {displayName(auth.user)}
    </a>
    »
  {/if}
  {locale.t('feedback')}
{/snippet}

<PageChrome title={locale.t('feedback')} {header}>
  {#await listPromise}
    <p>{locale.t('loading_notifications')}</p>
  {:then items}
    {@const unread = items.filter((item) => !item.read_at)}
    {@const archived = items.filter((item) => Boolean(item.read_at))}
    {@const active = tab ?? (unread.length === 0 && archived.length > 0 ? 'archived' : 'new')}
    {@const rows = active === 'new' ? unread : archived}
    <Tabs
      tabs={[
        { id: 'new', label: locale.t('unread') },
        { id: 'archived', label: locale.t('archive') },
      ]}
      {active}
      onselect={(id) => {
        tab = id === 'archived' ? 'archived' : 'new';
      }}
    />
    {#if rows.length > 0}
      <div class={active !== 'new' ? 'scroll_container' : undefined}>
        {#each rows as item (item.id)}
          {@const href = item.href || '/notifications'}
          <table class="scroll_node post post-divider" border="0" style="font-size: 11px;">
            <tbody>
              <tr>
                <td width="54" valign="top">
                  {#if item.actor}
                    <a href="/id{item.actor.id}" onclick={(event) => router.handleClick(event, `/id${item.actor?.id}`)}>
                      <img src={item.actor.avatar_url ?? CAMERA_FALLBACK} width="50" alt="" />
                    </a>
                  {/if}
                </td>
                <td width="100%" valign="top">
                  <div class="post-content">
                    <div class="text" style="line-height: 12pt;">
                      {#if item.actor}
                        <a
                          href="/id{item.actor.id}"
                          onclick={(event) => router.handleClick(event, `/id${item.actor?.id}`)}
                        >
                          <b>{displayName(item.actor)}</b>
                        </a>
                      {/if}
                      {kindLabel(item.kind)}
                      <br />
                      <a {href} onclick={(event) => router.handleClick(event, href)}>{timeLabel(item.created_at)}</a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        {/each}
      </div>
    {:else}
      <div class="ovk-empty">{locale.t('no_notifications')}</div>
    {/if}
  {/await}
</PageChrome>
