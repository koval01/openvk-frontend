<script lang="ts">
  import { locale } from '../stores/locale.svelte';

  const COOKIE = 'cookiesAgreed=true';

  function agreedFromDocument(): boolean {
    return document.cookie.split(';').some((part) => part.trim() === COOKIE);
  }

  let agreed = $state(agreedFromDocument());

  const cookieParts = $derived.by(() => {
    const html = locale.t('cookies_popup_content');
    const match = html.match(/^(.*?)<a href=['"]\/privacy['"]>(.*?)<\/a>(.*)$/s);
    if (!match) {
      return { before: html, link: '', after: '' };
    }
    return { before: match[1], link: match[2], after: match[3] };
  });

  function agree() {
    const expires = new Date(Date.now() + 40_000_000_000).toUTCString();
    document.cookie = `${COOKIE};expires=${expires};SameSite=Strict;path=/`;
    agreed = true;
  }
</script>

{#if !agreed}
  <div class="cookies-popup">
    <div class="contanier">
      <div class="text">
        {cookieParts.before}<a href="/privacy">{cookieParts.link}</a>{cookieParts.after}
      </div>
      <div class="buttons">
        <a
          class="button"
          href="/"
          onclick={(event) => {
            event.preventDefault();
            agree();
          }}>{locale.t('cookies_popup_agree')}</a
        >
      </div>
    </div>
  </div>
{/if}
