<script lang="ts">
  import type { Snippet } from 'svelte';
  import { documentTitle } from '../lib/pageTitle';

  let {
    title,
    note,
    right,
    centered = false,
    children,
  }: {
    title: string;
    note?: string;
    right?: string;
    centered?: boolean;
    children?: Snippet;
  } = $props();

  const tabTitle = $derived(documentTitle(title));
</script>

<svelte:head>
  <title>{tabTitle}</title>
</svelte:head>

<div class="page_body" class:page_body_centered={centered}>
  <div id="wrapH">
    <div id="wrapHI">
      <div class="page_yellowheader">
        {title}
        {#if note}
          <span><b>{note}</b></span>
        {/if}
        {#if right}
          <div style="float:right;">
            <span><b>{right}</b></span>
          </div>
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
