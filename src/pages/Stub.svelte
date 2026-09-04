<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';

  let { title, empty = 'Nothing here yet…' }: { title: string; empty?: string } = $props();
</script>

<PageChrome {title}>
  <div class="ovk-empty">{empty}</div>
</PageChrome>
