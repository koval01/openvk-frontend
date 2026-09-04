<script lang="ts">
  import ArticleBody from '../components/ArticleBody.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import { getArticle } from '../content/articles';
  import { locale } from '../stores/locale.svelte';

  let { name }: { name: string } = $props();

  const article = $derived(getArticle(name, locale.code));
</script>

{#if article}
  <PageChrome title={article.heading}>
    <ArticleBody blocks={article.blocks} />
  </PageChrome>
{:else}
  <PageChrome title={locale.t('not_found')}>
    <div class="ovk-empty">{locale.t('nothing_here')}</div>
  </PageChrome>
{/if}
