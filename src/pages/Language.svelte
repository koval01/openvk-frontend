<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import { awayHref } from '../lib/away';
  import { LANGUAGES, flagSrc, splitNativeName } from '../lib/languages';
  import { router } from '../lib/router.svelte';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  function choose(event: MouseEvent, code: string) {
    event.preventDefault();
    void locale.set(code);
    if (router.search) {
      router.goto('/language');
    }
  }
</script>

<PageChrome title={locale.t('select_language')} centered={!auth.isAuthenticated}>
  <div class="navigation-lang">
    {#each LANGUAGES as language (language.code)}
      {@const split = splitNativeName(language.nativeName)}
      <a
        href={`/language?lg=${encodeURIComponent(language.code)}`}
        class="link_new"
        class:is-current={locale.code === language.code}
        rel="nofollow"
        data-testid={`lang-${language.code}`}
        onclick={(event) => choose(event, language.code)}
      >
        <img src={flagSrc(language.flag)} alt={language.nativeName} />
        {#if split.note}
          {split.title}
          <br />
          <small>{split.note}</small>
        {:else}
          {language.nativeName}
        {/if}
      </a>
    {/each}
  </div>
  <div>
    <a
      href={awayHref('https://hosted.weblate.org/projects/openvk/')}
      target="_blank"
      rel="noreferrer"
    >
      {locale.t('language_add_strings')}
    </a>
  </div>
</PageChrome>

<style>
  .navigation-lang {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(5, 1fr);
    margin-bottom: 4px;
  }

  .navigation-lang .link_new {
    display: inline-block;
    padding: 20px 10px 5px;
    text-decoration: none;
    border-top: 1px solid var(--ovk-page);
    color: var(--ovk-text);
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    text-align: center;
    font-size: 11px;
    cursor: pointer;
    background: none;
    margin-bottom: 1px;
  }

  .navigation-lang .link_new img {
    display: block;
    margin: 0 auto 8px;
  }

  .navigation-lang .link_new:hover,
  .navigation-lang .link_new.is-current {
    background-color: var(--ovk-hover);
    border-top: 1px solid var(--ovk-border);
  }
</style>
