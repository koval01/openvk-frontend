<script lang="ts">
  import { router } from '../lib/router.svelte';

  type Tab = { id: string; label: string; href?: string };

  let {
    tabs,
    active,
    onselect,
  }: {
    tabs: Tab[];
    active: string;
    onselect?: (id: string) => void;
  } = $props();

  function activate(event: MouseEvent, tab: Tab) {
    if (tab.href) {
      router.handleClick(event, tab.href);
      return;
    }
    event.preventDefault();
    onselect?.(tab.id);
  }
</script>

<div class="tabs">
  {#each tabs as tab (tab.id)}
    {#if tab.id === active}
      <div id="activetabs" class="tab">
        <a id="act_tab_a" href={tab.href ?? '#'} onclick={(event) => activate(event, tab)}
          >{tab.label}</a
        >
      </div>
    {:else}
      <div class="tab">
        <a href={tab.href ?? '#'} onclick={(event) => activate(event, tab)}>{tab.label}</a>
      </div>
    {/if}
  {/each}
</div>
