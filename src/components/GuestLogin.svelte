<script lang="ts">
  import LocaleHtml from './LocaleHtml.svelte';
  import Turnstile from './Turnstile.svelte';
  import { router } from '../lib/router.svelte';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  let login = $state('');
  let password = $state('');
  let turnstileToken = $state('');
  let challenge = $state(0);

  async function submit(event: Event) {
    event.preventDefault();
    if (!turnstileToken) {
      auth.fail('error', 'complete_security_check');
      return;
    }
    try {
      await auth.login(login, password, turnstileToken);
      router.goto('/');
    } catch {
      turnstileToken = '';
      challenge += 1;
    }
  }
</script>

<form id="fastLogin" data-testid="auth-form" onsubmit={submit}>
  <label for="guest-login"><span>{locale.t('email_label')}:</span></label>
  <input
    id="guest-login"
    data-testid="auth-login"
    class="inputText"
    type="text"
    name="login"
    bind:value={login}
    autocomplete="username"
  />
  <label for="guest-password"><span>{locale.t('password')}:</span></label>
  <input
    id="guest-password"
    data-testid="auth-password"
    class="inputText"
    type="password"
    name="password"
    bind:value={password}
    autocomplete="current-password"
  />
  {#key `${challenge}:${locale.code}`}
    <Turnstile action="login" bind:token={turnstileToken} />
  {/key}
  {#if auth.error}
    <div class="error auth-error" data-testid="auth-error">
      <b>{auth.error.title}</b><br />
      <LocaleHtml html={auth.error.message} />
    </div>
  {/if}
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
        auth.error = null;
        router.goto('/login?act=register');
      }}>{locale.t('registration')}</a
    >
  </div>
  <br /><br />
  <a href="/restore" onclick={(event) => router.handleClick(event, '/restore')}>
    {locale.t('forgot_password')}
  </a>
</form>

<style>
  #fastLogin {
    padding: 0;
    overflow: hidden;
  }

  #fastLogin label {
    display: block;
    margin-bottom: 2px;
  }

  #fastLogin .inputText {
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

  .auth-error {
    margin: 6px 0 0;
    padding: 4px 5px;
    font-size: 10px;
    line-height: 1.3;
  }
</style>
