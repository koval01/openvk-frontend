<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import { api } from '../services/api';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  let receiver = $state('');
  let amount = $state('1');
  let error = $state<string | null>(null);
  let done = $state(false);

  async function submit(event: Event) {
    event.preventDefault();
    if (!auth.token) {
      return;
    }
    error = null;
    done = false;
    try {
      const updated = await api.transferCoins(auth.token, Number(receiver), Number(amount));
      auth.updateUser(updated);
      done = true;
    } catch (caught) {
      error = caught instanceof Error ? caught.message : locale.t('error');
    }
  }
</script>

<PageChrome title={locale.t('points')}>
  <p>{locale.t('on_your_account')}: {auth.user?.coins ?? 0} {locale.t('points_count')}</p>
  <form class="container_gray settings_padding" onsubmit={submit}>
    <p>
      <span class="nobold">ID</span>
      <input bind:value={receiver} />
    </p>
    <p>
      <span class="nobold">{locale.t('count')}</span>
      <input bind:value={amount} type="number" min="1" />
    </p>
    {#if error}
      <p class="vk-error">{error}</p>
    {/if}
    {#if done}
      <div class="vk-notice">{locale.t('votes_sent')}</div>
    {/if}
    <input type="submit" class="button" value={locale.t('send')} />
  </form>
</PageChrome>
