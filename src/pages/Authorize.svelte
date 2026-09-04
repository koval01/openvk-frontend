<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  const params = new URLSearchParams(window.location.search);
  const redirect = params.get('redirect_uri') || '/blank.html';

  function allow() {
    if (!auth.token) {
      return;
    }
    const url = new URL(redirect, window.location.origin);
    url.hash = `access_token=${auth.token}&user_id=${auth.user?.id ?? ''}`;
    window.location.replace(url.toString());
  }
</script>

<PageChrome title="OAuth">
  <p>{locale.t('apps')}</p>
  <button class="button" type="button" onclick={allow} disabled={!auth.token}>{locale.t('ok')}</button>
</PageChrome>
