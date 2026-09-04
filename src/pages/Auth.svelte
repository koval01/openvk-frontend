<script lang="ts">
  import FlashMessage from '../components/FlashMessage.svelte';
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';
  import LocaleHtml from '../components/LocaleHtml.svelte';
  import Turnstile from '../components/Turnstile.svelte';
  import { documentTitle } from '../lib/pageTitle';
  import { router } from '../lib/router.svelte';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  const path = $derived(router.pathname.replace(/\/+$/, '') || '/');
  const isWelcome = $derived(path === '/' || path === '/feed' || path === '/news');
  const mode = $derived(
    !isWelcome &&
      (router.pathname.replace(/\/+$/, '') === '/reg' ||
        new URLSearchParams(router.search).get('act') === 'register')
      ? 'register'
      : 'login',
  );
  const heading = $derived(
    isWelcome
      ? locale.t('welcome')
      : mode === 'register'
        ? locale.t('registration')
        : locale.t('login_heading'),
  );
  const tabTitle = $derived(documentTitle(heading));

  let login = $state('');
  let password = $state('');
  let turnstileToken = $state('');
  let challenge = $state(0);
  let agreed = $state(false);

  function goRegister() {
    turnstileToken = '';
    auth.error = null;
    router.goto('/login?act=register');
  }

  function goLogin() {
    turnstileToken = '';
    auth.error = null;
    router.goto('/login');
  }

  async function submit(event: Event) {
    event.preventDefault();
    if (!turnstileToken) {
      auth.fail('error', 'complete_security_check');
      return;
    }
    if (mode === 'register' && !agreed) {
      auth.fail('error', 'checkbox_in_registration_unchecked');
      return;
    }
    try {
      if (mode === 'register') {
        await auth.register(login, password, turnstileToken);
      } else {
        await auth.login(login, password, turnstileToken);
      }
      router.goto('/');
    } catch {
      turnstileToken = '';
      challenge += 1;
    }
  }
</script>

<svelte:head>
  <title>{tabTitle}</title>
</svelte:head>

<div class="layout">
  <div id="xhead" class="dm"></div>
  <Header />
  {#if isWelcome}
    <div class="sidebar">
      <form id="fastLogin" data-testid="auth-form" onsubmit={submit}>
        <label for="login"><span>{locale.t('email_label')}:</span></label>
        <input
          id="login"
          data-testid="auth-login"
          class="inputText"
          type="text"
          name="login"
          bind:value={login}
          autocomplete="username"
        />
        <label for="password"><span>{locale.t('password')}:</span></label>
        <input
          id="password"
          data-testid="auth-password"
          class="inputText"
          type="password"
          name="password"
          bind:value={password}
          autocomplete="current-password"
        />
        {#key `${mode}:${challenge}:${locale.code}`}
          <Turnstile action={mode} bind:token={turnstileToken} />
        {/key}
        <div class="fast-login-actions">
          <input
            type="submit"
            class="button"
            data-testid="auth-submit"
            value={auth.pending ? locale.t('signing_in') : locale.t('login_heading')}
            disabled={auth.pending || !turnstileToken}
          />
          <a
            href="/login?act=register"
            class="button"
            data-testid="auth-toggle"
            onclick={(event) => {
              event.preventDefault();
              goRegister();
            }}>{locale.t('registration')}</a
          >
        </div>
        <br /><br />
        <a href="/restore" onclick={(event) => router.handleClick(event, '/restore')}>
          {locale.t('forgot_password')}
        </a>
      </form>
    </div>
  {:else}
    <div class="sidebar">
      <div class="navigation">
        <a href="/" class="link" onclick={(event) => router.handleClick(event, '/')}>
          {locale.t('home')}
        </a>
        <a href="/login" class="link" onclick={(event) => router.handleClick(event, '/login')}>
          {locale.t('login_heading')}
        </a>
        <a
          href="/login?act=register"
          class="link"
          onclick={(event) => router.handleClick(event, '/login?act=register')}
        >
          {locale.t('registration')}
        </a>
      </div>
    </div>
  {/if}

  <div class="page_body">
    <div id="wrapH">
      <div id="wrapHI">
        <div class="page_yellowheader">{heading}</div>
      </div>
    </div>
    <div class="wrap2">
      <div class="wrap1">
        <div class="page_content p-3">
          {#if auth.error}
            <FlashMessage
              title={auth.error.title}
              message={auth.error.message}
              testid="auth-error"
            />
          {/if}
          {#if isWelcome}
            <h2 class="welcome-lead">
              <b>{locale.t('welcome_vk_brand')}</b> - {locale.t('welcome_vk_lead')}
            </h2>
            <p>{locale.t('welcome_vk_friends')}</p>
            <p>{locale.t('welcome_vk_can')}</p>
            <ul class="welcome-listing">
              <li><span>{locale.t('welcome_vk_item1')}</span></li>
              <li><span>{locale.t('welcome_vk_item2')}</span></li>
              <li><span>{locale.t('welcome_vk_item3')}</span></li>
            </ul>
            <a href="/tour" class="noUnd" onclick={(event) => router.handleClick(event, '/tour')}>
              <div class="tour">
                <b>{locale.t('tour_title')}</b>
                <div>{locale.t('tour_promo')}</div>
              </div>
            </a>
            <div class="welcome-actions">
              <input
                type="submit"
                form="fastLogin"
                class="button"
                value={locale.t('login_heading')}
                disabled={auth.pending || !turnstileToken}
              />
              <a
                href="/login?act=register"
                class="button"
                onclick={(event) => {
                  event.preventDefault();
                  goRegister();
                }}>{locale.t('registration')}</a
              >
            </div>
          {:else}
            <form data-testid="auth-form" onsubmit={submit}>
              <table
                class="flexible_table auth_table"
                cellspacing="7"
                cellpadding="0"
                width="46%"
                border="0"
                align="center"
              >
                <tbody>
                  <tr style="text-align: right;">
                    <td>
                      <span class="nobold">{locale.t('email_label')}: </span>
                    </td>
                    <td style="width:191px;">
                      <input
                        id="login"
                        data-testid="auth-login"
                        type="text"
                        name="login"
                        bind:value={login}
                        autocomplete="username"
                      />
                    </td>
                  </tr>
                  <tr style="text-align: right;">
                    <td>
                      <span class="nobold">{locale.t('password')}: </span>
                    </td>
                    <td>
                      <input
                        id="password"
                        data-testid="auth-password"
                        type="password"
                        name="password"
                        bind:value={password}
                        autocomplete={mode === 'register' ? 'new-password' : 'current-password'}
                      />
                    </td>
                  </tr>
                  <tr class="turnstile-slot">
                    <td></td>
                    <td>
                      {#key `${mode}:${challenge}:${locale.code}`}
                        <Turnstile action={mode} bind:token={turnstileToken} />
                      {/key}
                    </td>
                  </tr>
                  {#if mode === 'register'}
                    <tr>
                      <td></td>
                      <td>
                        <label class="auth-agree">
                          <input
                            type="checkbox"
                            data-testid="auth-terms"
                            bind:checked={agreed}
                          />
                          <LocaleHtml html={locale.t('checkbox_in_registration')} />
                        </label>
                      </td>
                    </tr>
                  {/if}
                </tbody>
              </table>
              <div class="auth-actions">
                <input
                  type="submit"
                  class="button"
                  data-testid="auth-submit"
                  value={auth.pending
                    ? mode === 'register'
                      ? locale.t('creating')
                      : locale.t('signing_in')
                    : mode === 'register'
                      ? locale.t('create_account')
                      : locale.t('login_heading')}
                  disabled={auth.pending || !turnstileToken}
                />
                {#if mode === 'login'}
                  <a
                    href="/login?act=register"
                    class="button"
                    data-testid="auth-toggle"
                    onclick={(event) => {
                      event.preventDefault();
                      goRegister();
                    }}>{locale.t('registration')}</a
                  >
                  <br /><br />
                  <a href="/restore" onclick={(event) => router.handleClick(event, '/restore')}>
                    {locale.t('forgot_password')}
                  </a>
                {:else}
                  <a
                    href="/login"
                    class="button"
                    data-testid="auth-toggle"
                    onclick={(event) => {
                      event.preventDefault();
                      goLogin();
                    }}>{locale.t('login_heading')}</a
                  >
                {/if}
              </div>
            </form>
          {/if}
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>

<style>
  #fastLogin {
    padding: 0;
    overflow: hidden;
  }

  #fastLogin label {
    display: block;
    margin-bottom: 2px;
  }

  #fastLogin .inputText,
  #fastLogin input[type='text'],
  #fastLogin input[type='password'] {
    width: 118px;
    box-sizing: border-box;
  }

  .fast-login-actions {
    white-space: nowrap;
    margin-top: 5px;
  }

  #fastLogin .button,
  #fastLogin input[type='submit'] {
    display: inline-block;
    width: auto;
    margin: 0;
    padding: 3px 5px;
    font-family: Tahoma, sans-serif;
  }

  #fastLogin a.button {
    margin-left: 4px;
  }

  .welcome-lead {
    font-size: 12px;
    font-weight: normal;
    margin: 4px 0 10px;
  }

  .welcome-listing {
    margin: 6px 0 10px 18px;
    padding: 0;
  }

  .welcome-listing,
  .welcome-listing span {
    color: var(--ovk-text);
  }

  .welcome-listing li {
    margin: 4px 0;
  }

  .welcome-actions {
    text-align: center;
    margin: 8px 0 10px;
  }

  .welcome-actions .button {
    display: inline-block;
    margin-right: 5px;
    cursor: pointer;
  }

  .turnstile-slot td {
    padding: 0;
    line-height: 0;
    height: 0;
  }

  .auth-actions .button {
    display: inline-block;
    margin-left: 4px;
  }

  .auth-actions {
    text-align: center;
  }

  .auth-agree {
    display: flex;
    gap: 6px;
    align-items: flex-start;
    text-align: left;
    font-size: 11px;
  }
</style>
