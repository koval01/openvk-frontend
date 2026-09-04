<script lang="ts">
  import { router } from '../lib/router.svelte';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  let query = $state('');

  function submit(event: Event) {
    event.preventDefault();
    const q = query.trim();
    router.goto(q ? `/search?q=${encodeURIComponent(q)}` : '/search');
  }
</script>

<div class="page_header">
  <a
    href="/"
    class="home_button"
    title={locale.t('site_name')}
    onclick={(event) => router.handleClick(event, '/')}
  ></a>
  <div class="header_navigation">
    {#if auth.user}
      <div class="link link_long_screens">
        <a href="/" onclick={(event) => router.handleClick(event, '/')}>{locale.t('header_home')}</a>
      </div>
      <div class="link link_long_screens">
        <a href="/groups" onclick={(event) => router.handleClick(event, '/groups')}
          >{locale.t('header_groups')}</a
        >
      </div>
      <div class="link">
        <a href="/search" onclick={(event) => router.handleClick(event, '/search')}
          >{locale.t('header_search')}</a
        >
      </div>
      <div class="link">
        <a href="/invite" onclick={(event) => router.handleClick(event, '/invite')}
          >{locale.t('header_invite')}</a
        >
      </div>
      <div class="link">
        <a href="/support" onclick={(event) => router.handleClick(event, '/support')}
          >{locale.t('header_help')}</a
        >
      </div>
      <div class="link">
        <a
          id="logout_link"
          href="/login"
          onclick={(event) => {
            event.preventDefault();
            auth.logout();
            router.goto('/login');
          }}>{locale.t('header_log_out')}</a
        >
      </div>
      <div class="link header_divider_stick" id="search_box">
        <div id="search_box_fr">
          <form
            id="search_form"
            data-testid="header-search-form"
            action="/search"
            method="get"
            onsubmit={submit}
          >
            <div id="search_and_one_more_wrapper">
              <input
                autocomplete="off"
                type="search"
                maxlength="79"
                name="q"
                data-testid="header-search-q"
                placeholder={locale.t('header_search')}
                bind:value={query}
              />
            </div>
            <button class="search_box_button" type="submit"
              ><span>{locale.t('header_search')}</span></button
            >
          </form>
        </div>
      </div>
    {:else}
      <div class="link">
        <a href="/login" onclick={(event) => router.handleClick(event, '/login')}
          >{locale.t('header_login')}</a
        >
      </div>
      <div class="link">
        <a
          href="/login?act=register"
          onclick={(event) => router.handleClick(event, '/login?act=register')}
          >{locale.t('header_registration')}</a
        >
      </div>
      <div class="link">
        <a href="/support" onclick={(event) => router.handleClick(event, '/support')}
          >{locale.t('header_help')}</a
        >
      </div>
    {/if}
  </div>
</div>
