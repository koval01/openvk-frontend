<script lang="ts">
  import ArticleBody from '../components/ArticleBody.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import { faqItems } from '../content/faq';
  import { locale } from '../stores/locale.svelte';

  const items = $derived(faqItems(locale.code));
</script>

<PageChrome title={locale.t('menu_help')}>
  <h4>{locale.t('support_faq')}</h4>
  {#each items as item, index (index)}
    <div class="faq">
      <div id="faqhead">{item.title}</div>
      <div id="faqcontent">
        <ArticleBody blocks={item.blocks} />
      </div>
    </div>
  {/each}
</PageChrome>

<style>
  h4 {
    margin: 0 0 12px;
    font-size: 13px;
    color: var(--ovk-title);
  }
</style>
