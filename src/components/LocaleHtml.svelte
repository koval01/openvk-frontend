<script lang="ts">
  import { router } from '../lib/router.svelte';

  let { html }: { html: string } = $props();

  function onclick(event: MouseEvent) {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }
    const link = target.closest('a');
    const href = link?.getAttribute('href');
    if (!href || !href.startsWith('/') || href.startsWith('//')) {
      return;
    }
    router.handleClick(event, href);
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions security_html -->
<span class="locale-html" role="presentation" {onclick}>{@html html}</span>

<style>
  .locale-html :global(a) {
    color: var(--ovk-link);
  }
</style>
