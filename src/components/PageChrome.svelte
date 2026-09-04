<script lang="ts">
  import type { Snippet } from 'svelte';
  import { documentTitle } from '../lib/pageTitle';
  import { pageChrome } from '../stores/pageChrome.svelte';

  let {
    title,
    note,
    right,
    centered = false,
    header,
    children,
  }: {
    title: string;
    note?: string;
    right?: string;
    centered?: boolean;
    header?: Snippet;
    children?: Snippet;
  } = $props();

  const tabTitle = $derived(documentTitle(title));

  $effect(() => {
    pageChrome.heading = title;
    return () => {
      pageChrome.heading = '';
    };
  });
</script>

<svelte:head>
  <title>{tabTitle}</title>
</svelte:head>

<div class="page_body" class:page_body_centered={centered}>
  <div id="wrapH">
    <div id="wrapHI">
      <div class="page_yellowheader">
        {#if header}
          {@render header()}
        {:else}
          {title}
          {#if note}
            <span><b>{note}</b></span>
          {/if}
          {#if right}
            <div style="float:right;">
              <span><b>{right}</b></span>
            </div>
          {/if}
        {/if}
      </div>
    </div>
  </div>
  <div class="wrap2">
    <div class="wrap1">
      <div id="auth" class="page-wrap">
        <div class="page_content">
          {@render children?.()}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .page_body_centered {
    float: none;
    margin: 12px auto;
    width: 632px;
  }
</style>
