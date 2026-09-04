<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import type { NospamResult } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  let query = $state('');
  let deleteHits = $state(true);
  let banAuthors = $state(false);
  let error = $state<string | null>(null);
  let result = $state<NospamResult | null>(null);

  async function search(event: Event) {
    event.preventDefault();
    if (!auth.token) {
      return;
    }
    error = null;
    try {
      result = await api.nospam(auth.token, query, deleteHits, banAuthors);
    } catch (caught) {
      error = caught instanceof Error ? caught.message : locale.t('error');
    }
  }

  async function rollback() {
    if (!auth.token || !result?.action_id) {
      return;
    }
    await api.nospamRollback(auth.token, result.action_id);
    result = { ...result, deleted: 0 };
  }
</script>

<PageChrome title={locale.t('template_ban')}>
  <form class="container_gray settings_padding" onsubmit={search}>
    <input bind:value={query} style="width: 70%;" placeholder={locale.t('header_search')} />
    <label><input type="checkbox" bind:checked={deleteHits} /> {locale.t('delete')}</label>
    <label><input type="checkbox" bind:checked={banAuthors} /> {locale.t('ban')}</label>
    <input type="submit" class="button" value={locale.t('header_search')} />
  </form>
  {#if error}
    <p class="vk-error">{error}</p>
  {/if}
  {#if result}
    <p>{locale.t('nospam_deleted')}: {result.deleted}</p>
    {#if result.action_id}
      <button class="button" type="button" onclick={rollback}>{locale.t('nospam_rolled_back')}</button>
    {/if}
    {#each result.hits as hit (hit.post_id)}
      <div class="container_gray settings_padding">
        <a href="/{hit.permalink}" onclick={(event) => router.handleClick(event, `/${hit.permalink}`)}
          >/{hit.permalink}</a
        >
        <p>{hit.content}</p>
      </div>
    {/each}
  {/if}
</PageChrome>
