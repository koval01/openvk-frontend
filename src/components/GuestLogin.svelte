<script lang="ts">
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
      auth.error = locale.t('complete_security_check');
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
    <p data-testid="auth-error" class="auth-error">{auth.error}</p>
  {/if}
  <div class="button-row">
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
</form>

<style>
  #fastLogin {
    padding: 4px 2px 0;
  }

  #fastLogin label {
    display: block;
    margin-bottom: 2px;
  }

  #fastLogin .inputText {
    width: 118px;
    box-sizing: border-box;
  }

  .button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 6px;
  }

  #fastLogin .button {
    display: inline-block;
    margin: 0;
    font-family: Tahoma, sans-serif;
  }

  .auth-error {
    color: var(--ovk-error);
    margin: 6px 0 0;
  }
</style>
