<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  const inviteUrl = $derived(
    `${window.location.origin}/login?act=register&ref=${encodeURIComponent(String(auth.user?.id ?? ''))}`,
  );

  let copied = $state(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(inviteUrl);
      copied = true;
    } catch {
      copied = false;
    }
  }
</script>

<PageChrome title={locale.t('invite')}>
  <p>{locale.t('you_can_invite')}</p>
  <center>
    <input class="invite-input" type="text" readonly value={inviteUrl} size="50" data-testid="invite-link" />
    <button class="vk-btn ml-1" type="button" onclick={copy}>
      {copied ? locale.t('copied') : locale.t('copy')}
    </button>
  </center>
  <p>{locale.t('you_can_invite_2')}</p>
</PageChrome>

<style>
  .invite-input {
    width: 360px;
    max-width: 100%;
    border: 1px solid var(--ovk-border);
    background: var(--ovk-input);
    color: var(--ovk-text);
    padding: 3px;
    font-size: 11px;
    font-family: tahoma, verdana, arial, sans-serif;
  }

  p {
    margin: 0 0 12px;
  }
</style>
