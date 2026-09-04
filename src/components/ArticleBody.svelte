<script lang="ts">
  import type { Block, Inline } from '../content/blocks';
  import { router } from '../lib/router.svelte';

  let { blocks }: { blocks: Block[] } = $props();

  function hrefOf(part: Inline): string | undefined {
    return typeof part === 'string' ? undefined : part.href;
  }

  function textOf(part: Inline): string {
    return typeof part === 'string' ? part : part.text;
  }

  function onclick(event: MouseEvent, href: string) {
    if (href.startsWith('/') && !href.startsWith('//')) {
      router.handleClick(event, href);
    }
  }
</script>

{#snippet inline(parts: Inline[])}
  {#each parts as part, partIndex (partIndex)}
    {@const href = hrefOf(part)}
    {#if href}
      <a {href} onclick={(event) => onclick(event, href)}>{textOf(part)}</a>
    {:else}
      {textOf(part)}
    {/if}
  {/each}
{/snippet}

<div class="knowledgeBaseArticle">
  {#each blocks as block, index (index)}
    {#if block.type === 'h'}
      <h4>{@render inline(block.children)}</h4>
    {:else if block.type === 'p'}
      <p>{@render inline(block.children)}</p>
    {:else if block.type === 'ul'}
      <ul>
        {#each block.items as item, itemIndex (itemIndex)}
          <li>{@render inline(item)}</li>
        {/each}
      </ul>
    {:else}
      <ol>
        {#each block.items as item, itemIndex (itemIndex)}
          <li>
            {#if Array.isArray(item)}
              {@render inline(item)}
            {:else}
              {@render inline(item.text)}
              <ol>
                {#each item.children as child, childIndex (childIndex)}
                  <li>{@render inline(child)}</li>
                {/each}
              </ol>
            {/if}
          </li>
        {/each}
      </ol>
    {/if}
  {/each}
</div>

<style>
  h4 {
    margin: 16px 0 8px;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--ovk-border);
    font-size: 13px;
    color: var(--ovk-title);
  }

  p,
  li {
    margin: 8px 0;
    line-height: 1.45;
  }

  ol ol {
    margin: 4px 0 8px;
  }
</style>
