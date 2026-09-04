<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  let error = $state<string | null>(null);

  async function unban() {
    if (!auth.token) {
      router.goto('/login');
      return;
    }
    error = null;
    try {
      const user = await api.selfUnban(auth.token);
      auth.updateUser(user);
      router.goto(`/id${user.id}`);
    } catch (caught) {
      error = caught instanceof Error ? caught.message : locale.t('error');
    }
  }
</script>

<PageChrome title={locale.t('unban_user_action')}>
  <p>{error ?? locale.t('user_is_blocked')}</p>
  <button class="button" type="button" onclick={unban}>{locale.t('unban_user_action')}</button>
</PageChrome>
