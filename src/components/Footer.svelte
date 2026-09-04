<script lang="ts">
  import { APP_BUILD } from '../lib/build';
  import { LANGUAGES, flagSrc } from '../lib/languages';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { locale } from '../stores/locale.svelte';

  let { inset = true }: { inset?: boolean } = $props();

  const apiBuild = api.health().then((health) => health.version);

  const preview = LANGUAGES.slice(0, 3);

  function pick(event: MouseEvent, code: string) {
    event.preventDefault();
    void locale.set(code);
  }
</script>

<div class="page_footer" class:page_footer_flush={!inset}>
  <div class="navigation_footer">
    <a href="/about" class="link" onclick={(event) => router.handleClick(event, '/about')}
      >{locale.t('footer_about_instance')}</a
    >
    <a href="/terms" class="link" onclick={(event) => router.handleClick(event, '/terms')}
      >{locale.t('footer_rules')}</a
    >
    <a href="/blog" class="link" onclick={(event) => router.handleClick(event, '/blog')}
      >{locale.t('footer_blog')}</a
    >
    <a href="/support" class="link" onclick={(event) => router.handleClick(event, '/support')}
      >{locale.t('footer_help')}</a
    >
    <a href="/privacy" class="link" onclick={(event) => router.handleClick(event, '/privacy')}
      >{locale.t('footer_privacy')}</a
    >
  </div>
  <p class="navigation_centrize">
    {#each preview as language (language.code)}
      <a
        href={`/language?lg=${encodeURIComponent(language.code)}`}
        rel="nofollow"
        title={language.nativeName}
        class="link link_lang"
        data-testid={`lang-flag-${language.code}`}
        onclick={(event) => pick(event, language.code)}
      >
        <img src={flagSrc(language.flag)} alt={language.nativeName} />
      </a>
    {/each}
    <a
      href="/language"
      class="link"
      data-testid="all-languages"
      onclick={(event) => router.handleClick(event, '/language')}>{locale.t('all_languages')}</a
    >
  </p>
  <div class="page_footer_build" data-testid="app-build">
    {#await apiBuild}
      build {APP_BUILD}
    {:then hash}
      build {APP_BUILD}{hash && hash !== APP_BUILD ? ` / ${hash}` : ''}
    {:catch}
      build {APP_BUILD}
    {/await}
  </div>
</div>

<style>
  .page_footer_flush {
    margin-left: 0;
  }

  .page_footer_build {
    color: var(--ovk-muted);
    font-size: 10px;
    padding: 6px 0 2px;
  }
</style>
