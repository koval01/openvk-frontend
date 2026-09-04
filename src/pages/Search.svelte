<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import { router } from '../lib/router.svelte';
  import { locale } from '../stores/locale.svelte';

  const query = $derived(router.route.query ?? '');

  function submit(event: Event) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const q = String(new FormData(form).get('q') ?? '').trim();
    router.goto(q ? `/search?q=${encodeURIComponent(q)}` : '/search');
  }
</script>

<PageChrome title={locale.t('header_search')}>
  <form class="vk-gray-box" onsubmit={submit}>
    <input class="vk-input w-[280px]" name="q" placeholder={locale.t('header_search')} value={query} />
    <button class="vk-btn ml-1" type="submit">{locale.t('header_search')}</button>
  </form>
  {#if query}
    <div class="vk-summary">{locale.t('results_for', query)}</div>
    <div class="vk-empty">{locale.t('nothing_here')}</div>
  {:else}
    <div class="vk-empty">{locale.t('enter_search')}</div>
  {/if}
</PageChrome>
