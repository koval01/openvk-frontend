<script lang="ts">
  import { api } from '../services/api';
  import { router } from '../lib/router.svelte';
  import type { PrivacyLevel, User } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';
  import { theme } from '../stores/theme.svelte';

  let { account, tab = 'general' }: { account: User; tab?: string } = $props();

  let saveMessage = $state<string | null>(null);
  let saveError = $state<string | null>(null);
  let saving = $state(false);
  let passwordMessage = $state<string | null>(null);
  let passwordError = $state<string | null>(null);
  let savingPassword = $state(false);
  let deletePassword = $state('');
  let deleting = $state(false);
  let deleteError = $state<string | null>(null);

  async function saveAccount(event: Event) {
    event.preventDefault();
    if (!auth.token) {
      return;
    }
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    saving = true;
    saveError = null;
    saveMessage = null;
    try {
      const updated = await api.updateSettings(auth.token, {
        first_name: String(data.get('first_name') ?? account.first_name),
        last_name: String(data.get('last_name') ?? account.last_name),
        email: String(data.get('email') ?? account.email ?? '') || null,
        phone: String(data.get('phone') ?? account.phone ?? '') || null,
        city: String(data.get('city') ?? account.city ?? '') || null,
        privacy_wall: String(data.get('privacy_wall') ?? account.privacy_wall) as PrivacyLevel,
        privacy_messages: String(
          data.get('privacy_messages') ?? account.privacy_messages,
        ) as PrivacyLevel,
      });
      auth.updateUser(updated);
      saveMessage = locale.t('saved');
    } catch (error) {
      saveError = error instanceof Error ? error.message : locale.t('loading_account');
    } finally {
      saving = false;
    }
  }

  async function savePassword(event: Event) {
    event.preventDefault();
    if (!auth.token) {
      return;
    }
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    savingPassword = true;
    passwordError = null;
    passwordMessage = null;
    try {
      await api.changePassword(
        auth.token,
        String(data.get('current_password') ?? ''),
        String(data.get('new_password') ?? ''),
      );
      form.reset();
      passwordMessage = locale.t('password_changed');
    } catch (error) {
      passwordError = error instanceof Error ? error.message : locale.t('change_password');
    } finally {
      savingPassword = false;
    }
  }

  async function deleteAccount(event: Event) {
    event.preventDefault();
    if (!auth.token || !deletePassword) {
      return;
    }
    deleting = true;
    deleteError = null;
    try {
      await api.deleteAccount(auth.token, deletePassword);
      auth.logout();
      router.goto('/login');
    } catch (error) {
      deleteError = error instanceof Error ? error.message : 'Could not delete account';
    } finally {
      deleting = false;
    }
  }
</script>

{#if tab === 'general'}
  <form class="vk-gray-box" onsubmit={saveAccount}>
    <h4 class="vk-h4 mt-0">{locale.t('your_page')}</h4>
    <table class="w-full border-collapse">
      <tbody>
        <tr>
          <td class="w-[140px] py-1 text-vk-label">{locale.t('name')}</td>
          <td class="py-1">
            <input class="vk-input w-[220px]" name="first_name" value={account.first_name} />
          </td>
        </tr>
        <tr>
          <td class="py-1 text-vk-label">{locale.t('surname')}</td>
          <td class="py-1">
            <input class="vk-input w-[220px]" name="last_name" value={account.last_name} />
          </td>
        </tr>
        <tr>
          <td class="py-1 text-vk-label">{locale.t('email')}</td>
          <td class="py-1">
            <input class="vk-input w-[220px]" name="email" type="email" value={account.email ?? ''} />
          </td>
        </tr>
        <tr>
          <td class="py-1 text-vk-label">{locale.t('phone')}</td>
          <td class="py-1">
            <input class="vk-input w-[220px]" name="phone" value={account.phone ?? ''} />
          </td>
        </tr>
        <tr>
          <td class="py-1 text-vk-label">{locale.t('city')}</td>
          <td class="py-1">
            <input class="vk-input w-[220px]" name="city" value={account.city ?? ''} />
          </td>
        </tr>
      </tbody>
    </table>
    {#if saveMessage}
      <div class="vk-notice mt-2">{saveMessage}</div>
    {/if}
    {#if saveError}
      <p class="mt-2 mb-0 text-vk-error">{saveError}</p>
    {/if}
    <div class="mt-2">
      <button class="vk-btn" type="submit" disabled={saving}
        >{saving ? locale.t('saving') : locale.t('save')}</button
      >
    </div>
  </form>
  <form class="vk-gray-box" data-testid="appearance-form">
    <h4 class="vk-h4 mt-0">{locale.t('appearance')}</h4>
    <label>
      <input
        type="radio"
        name="appearance"
        value="default"
        data-testid="theme-default"
        checked={theme.id === 'default'}
        onchange={() => theme.set('default')}
      />
      {locale.t('theme_default')}
    </label>
    <label class="ml-4">
      <input
        type="radio"
        name="appearance"
        value="dark"
        data-testid="theme-dark"
        checked={theme.id === 'dark'}
        onchange={() => theme.set('dark')}
      />
      {locale.t('theme_dark')}
    </label>
  </form>
{:else if tab === 'security'}
  <form class="vk-gray-box" onsubmit={savePassword}>
    <h4 class="vk-h4 mt-0">{locale.t('password')}</h4>
    <table class="w-full border-collapse">
      <tbody>
        <tr>
          <td class="w-[140px] py-1 text-vk-label">{locale.t('old_password')}</td>
          <td class="py-1">
            <input class="vk-input w-[220px]" name="current_password" type="password" />
          </td>
        </tr>
        <tr>
          <td class="py-1 text-vk-label">{locale.t('new_password')}</td>
          <td class="py-1">
            <input class="vk-input w-[220px]" name="new_password" type="password" minlength="8" />
          </td>
        </tr>
      </tbody>
    </table>
    {#if passwordMessage}
      <div class="vk-notice mt-2">{passwordMessage}</div>
    {/if}
    {#if passwordError}
      <p class="mt-2 mb-0 text-vk-error">{passwordError}</p>
    {/if}
    <div class="mt-2">
      <button class="vk-btn" type="submit" disabled={savingPassword}>
        {savingPassword ? locale.t('changing') : locale.t('change_password')}
      </button>
    </div>
  </form>
  <form class="vk-gray-box" data-testid="delete-account-form" onsubmit={deleteAccount}>
    <h4 class="vk-h4 mt-0">{locale.t('delete_account')}</h4>
    <p>{locale.t('delete_account_warning')}</p>
    <input
      class="vk-input w-[220px]"
      data-testid="delete-account-password"
      name="password"
      type="password"
      bind:value={deletePassword}
      placeholder={locale.t('old_password')}
    />
    {#if deleteError}
      <p class="mt-2 mb-0 text-vk-error">{deleteError}</p>
    {/if}
    <div class="mt-2">
      <button class="vk-btn" type="submit" data-testid="delete-account" disabled={deleting}>
        {deleting ? locale.t('deleting') : locale.t('delete_account')}
      </button>
    </div>
  </form>
{:else}
  <form class="vk-gray-box" onsubmit={saveAccount}>
    <h4 class="vk-h4 mt-0">{locale.t('privacy')}</h4>
    <table class="w-full border-collapse">
      <tbody>
        <tr>
          <td class="w-[180px] py-1 align-top text-vk-label">{locale.t('privacy_setting_write_wall')}</td>
          <td class="py-1">
            <select class="vk-select w-[220px]" name="privacy_wall" value={account.privacy_wall}>
              <option value="everyone">{locale.t('privacy_value_anybody')}</option>
              <option value="friends">{locale.t('privacy_value_friends')}</option>
              <option value="nobody">{locale.t('privacy_value_only_me')}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="py-1 align-top text-vk-label">{locale.t('privacy_setting_write_messages')}</td>
          <td class="py-1">
            <select
              class="vk-select w-[220px]"
              name="privacy_messages"
              value={account.privacy_messages}
            >
              <option value="everyone">{locale.t('privacy_value_anybody')}</option>
              <option value="friends">{locale.t('privacy_value_friends')}</option>
              <option value="nobody">{locale.t('privacy_value_only_me')}</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
    {#if saveMessage}
      <div class="vk-notice mt-2">{saveMessage}</div>
    {/if}
    {#if saveError}
      <p class="mt-2 mb-0 text-vk-error">{saveError}</p>
    {/if}
    <div class="mt-2">
      <button class="vk-btn" type="submit" disabled={saving}
        >{saving ? locale.t('saving') : locale.t('save')}</button
      >
    </div>
  </form>
{/if}
