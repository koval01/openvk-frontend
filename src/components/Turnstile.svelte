<script lang="ts">
  import { attachTurnstile } from '../lib/turnstile';
  import { theme } from '../stores/theme.svelte';

  let { action, token = $bindable('') }: { action: string; token?: string } = $props();

  function setToken(value: string) {
    token = value;
  }

  const attachment = $derived(
    attachTurnstile(action, setToken, theme.isDark ? 'dark' : 'light'),
  );
</script>

{#key theme.id}
  <div class="cf-turnstile" data-testid="turnstile" {@attach attachment}></div>
{/key}

<style>
  .cf-turnstile {
    min-height: 65px;
    max-width: 100%;
  }
</style>
