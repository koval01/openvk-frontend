<script lang="ts">
  import { tick } from 'svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import { decodeAwayTo } from '../lib/away';
  import { documentTitle } from '../lib/pageTitle';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import type { BannedLink } from '../services/types';
  import { locale } from '../stores/locale.svelte';

  const destination = $derived(decodeAwayTo(router.route.to));
  const banId = $derived(router.route.banId);
  const instanceName = $derived(locale.t('site_name'));
  const bounceTitle = $derived(documentTitle(locale.t('caution')));

  let link = $state<BannedLink | null>(null);
  let checked = $state(false);

  const blocked = $derived(Boolean(banId) || Boolean(link));
  const comment = $derived.by(() => {
    const html = locale.t('url_is_banned_comment', instanceName);
    const match = html.match(/^(.*?)<b>(.*?)<\/b>(.*)$/s);
    if (!match) {
      return { before: html.replace(/<[^>]+>/g, ''), name: '', after: '' };
    }
    return { before: match[1], name: match[2], after: match[3] };
  });
  const reason = $derived(link?.reason || locale.t('url_is_banned_default_reason'));

  $effect(() => {
    const id = banId;
    const url = destination;
    checked = false;
    link = null;
    let cancelled = false;
    void (async () => {
      try {
        if (id) {
          const found = await api.bannedLink(Number(id));
          if (!cancelled) {
            link = found;
          }
        } else if (url) {
          const found = await api.checkAwayUrl(url);
          if (!cancelled) {
            link = found[0] ?? null;
          }
        }
      } catch {
        if (!cancelled) {
          link = null;
        }
      } finally {
        if (!cancelled) {
          checked = true;
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  });

  $effect(() => {
    if (!checked || blocked || !destination) {
      return;
    }
    let cancelled = false;
    void tick().then(() => {
      if (!cancelled) {
        window.location.replace(destination);
      }
    });
    return () => {
      cancelled = true;
    };
  });
</script>

<svelte:head>
  {#if blocked || destination}
    <meta name="robots" content="noindex, nofollow, noarchive" />
  {/if}
  {#if destination && !blocked}
    <title>{bounceTitle}</title>
  {/if}
</svelte:head>

{#snippet header()}{locale.t('caution')}{/snippet}

{#if blocked}
  <PageChrome title={locale.t('transition_is_blocked')} {header}>
    <div style="min-height: 120px;">
      <img
        src="/assets/packages/static/openvk/img/oof.apng"
        width="110"
        height="110"
        alt=""
        style="margin-left: 20px;"
      />
      <div style="padding-left: 150px; margin-top: -100px;">
        <h4 style="font-size: 14px; margin-bottom: 8px;">{locale.t('url_is_banned_title')}</h4>
        <span>
          {comment.before}<b>{comment.name}</b>{comment.after}
          <br /><br />
          {reason}
        </span>
        <br /><br />
        {#if destination}
          <a class="button" href={destination} target="_blank" rel="noreferrer"
            >{locale.t('url_is_banned_proceed')}</a
          >
        {/if}
      </div>
    </div>
  </PageChrome>
{:else if !destination && !banId}
  <PageChrome title={locale.t('not_found')}>
    <div class="ovk-empty">{locale.t('not_found')}</div>
  </PageChrome>
{/if}
