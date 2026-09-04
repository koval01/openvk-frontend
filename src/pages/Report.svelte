<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  const targetId = $derived(Number(router.route.postId ?? 0));
  const targetType = $derived(router.route.act || 'user');
  const ownerId = $derived(Number(router.route.userId ?? 0));
  let reason = $state('');
  let error = $state<string | null>(null);
  let done = $state(false);

  async function submit(event: Event) {
    event.preventDefault();
    if (!auth.token) {
      return;
    }
    error = null;
    try {
      await api.createReport(auth.token, targetType, targetId, reason, ownerId || undefined);
      done = true;
    } catch (caught) {
      error = caught instanceof Error ? caught.message : locale.t('error');
    }
  }
</script>

<PageChrome title={locale.t('report')}>
  {#if done}
    <div class="vk-notice">{locale.t('report_sent')}</div>
  {:else}
    <form class="container_gray settings_padding" onsubmit={submit}>
      <p>{locale.t('report_reason')}</p>
      <textarea bind:value={reason} style="width: 80%; min-height: 80px;"></textarea>
      {#if error}
        <p class="vk-error">{error}</p>
      {/if}
      <div>
        <input type="submit" class="button" value={locale.t('send')} />
      </div>
    </form>
  {/if}
</PageChrome>
