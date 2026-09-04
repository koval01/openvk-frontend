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
  let voucher = $state(['', '', '', '']);
  let voucherError = $state<string | null>(null);
  let voucherOk = $state(false);

  function level(data: FormData, name: string, fallback: PrivacyLevel | undefined): PrivacyLevel {
    return String(data.get(name) ?? fallback ?? 'everyone') as PrivacyLevel;
  }

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
        privacy_wall: level(data, 'privacy_wall', account.privacy_wall),
        privacy_messages: level(data, 'privacy_messages', account.privacy_messages),
        privacy_photos: level(data, 'privacy_photos', account.privacy_photos),
        privacy_audio: level(data, 'privacy_audio', account.privacy_audio),
        privacy_profile: level(data, 'privacy_profile', account.privacy_profile),
        privacy_friends: level(data, 'privacy_friends', account.privacy_friends),
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

  async function redeemVoucher(event: Event) {
    event.preventDefault();
    if (!auth.token) {
      return;
    }
    voucherError = null;
    voucherOk = false;
    try {
      const updated = await api.redeemVoucher(auth.token, voucher.join('-'));
      auth.updateUser(updated);
      voucher = ['', '', '', ''];
      voucherOk = true;
    } catch (error) {
      voucherError = error instanceof Error ? error.message : locale.t('error');
    }
  }

  const privacyOptions = $derived([
    { value: 'everyone', label: locale.t('privacy_value_anybody_dative') },
    { value: 'friends', label: locale.t('privacy_value_friends_dative') },
    { value: 'nobody', label: locale.t('privacy_value_only_me_dative') },
  ]);
</script>

{#snippet privacySelect(name: string, value: PrivacyLevel | undefined)}
  <select name={name} style="width: 164px;" value={value ?? 'everyone'}>
    {#each privacyOptions as option (option.value)}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
{/snippet}

{#snippet privacyRow(label: string, name: string, value: PrivacyLevel | undefined)}
  <tr>
    <td width="120" valign="top">
      <span class="nobold">{label}</span>
    </td>
    <td>
      {@render privacySelect(name, value)}
    </td>
  </tr>
{/snippet}

{#if tab === 'general'}
  <form class="container_gray settings_padding" onsubmit={saveAccount}>
    <h4>{locale.t('your_page')}</h4>
    <table class="flexible_table" cellspacing="7" cellpadding="0" width="60%" border="0" align="center">
      <tbody>
        <tr>
          <td width="120" valign="top"><span class="nobold">{locale.t('name')}</span></td>
          <td><input name="first_name" value={account.first_name} style="width: 100%;" /></td>
        </tr>
        <tr>
          <td width="120" valign="top"><span class="nobold">{locale.t('surname')}</span></td>
          <td><input name="last_name" value={account.last_name} style="width: 100%;" /></td>
        </tr>
        <tr>
          <td width="120" valign="top"><span class="nobold">{locale.t('email')}</span></td>
          <td>
            <input name="email" value={account.email ?? ''} style="width: 100%;" />
          </td>
        </tr>
        <tr>
          <td width="120" valign="top"><span class="nobold">{locale.t('phone')}</span></td>
          <td><input name="phone" value={account.phone ?? ''} style="width: 100%;" /></td>
        </tr>
        <tr>
          <td width="120" valign="top"><span class="nobold">{locale.t('city')}</span></td>
          <td><input name="city" value={account.city ?? ''} style="width: 100%;" /></td>
        </tr>
        <tr>
          <td></td>
          <td>
            {#if saveMessage}
              <div class="vk-notice">{saveMessage}</div>
            {/if}
            {#if saveError}
              <p class="vk-error">{saveError}</p>
            {/if}
            <input
              type="submit"
              class="button"
              value={saving ? locale.t('saving') : locale.t('save')}
              disabled={saving}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </form>
  <form class="container_gray settings_padding" data-testid="appearance-form">
    <h4>{locale.t('appearance')}</h4>
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
    <label>
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
  <form class="container_gray settings_padding" onsubmit={savePassword}>
    <h4>{locale.t('password')}</h4>
    <table class="flexible_table" cellspacing="7" cellpadding="0" width="60%" border="0" align="center">
      <tbody>
        <tr>
          <td width="120" valign="top"><span class="nobold">{locale.t('old_password')}</span></td>
          <td><input name="current_password" type="password" style="width: 100%;" /></td>
        </tr>
        <tr>
          <td width="120" valign="top"><span class="nobold">{locale.t('new_password')}</span></td>
          <td>
            <input name="new_password" type="password" minlength="8" style="width: 100%;" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            {#if passwordMessage}
              <div class="vk-notice">{passwordMessage}</div>
            {/if}
            {#if passwordError}
              <p class="vk-error">{passwordError}</p>
            {/if}
            <input
              type="submit"
              class="button"
              value={savingPassword ? locale.t('changing') : locale.t('change_password')}
              disabled={savingPassword}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </form>
  <form class="container_gray settings_padding" data-testid="delete-account-form" onsubmit={deleteAccount}>
    <h4>{locale.t('delete_account')}</h4>
    <p>{locale.t('delete_account_warning')}</p>
    <input
      data-testid="delete-account-password"
      name="password"
      type="password"
      bind:value={deletePassword}
      placeholder={locale.t('old_password')}
      style="width: 164px;"
    />
    {#if deleteError}
      <p class="vk-error">{deleteError}</p>
    {/if}
    <div>
      <button class="button" type="submit" data-testid="delete-account" disabled={deleting}>
        {deleting ? locale.t('deleting') : locale.t('delete_account')}
      </button>
    </div>
  </form>
{:else if tab === 'finance' || tab === 'finance.top-up'}
  <div class="container_gray settings_padding">
    <div style="text-align: center; font-weight: 900;">
      {locale.t('on_your_account')}
      <div style="font-size: 48px;">{auth.user?.coins ?? account.coins ?? 0}</div>
      {locale.t('points_count')}<br />
      <small>
        <a href="/settings?act=finance.top-up" onclick={(event) => router.handleClick(event, '/settings?act=finance.top-up')}
          >[{locale.t('have_voucher')}?]</a
        >
      </small>
      <br />
      <small>
        <a href="/coins_transfer" onclick={(event) => router.handleClick(event, '/coins_transfer')}
          >{locale.t('points')}</a
        >
      </small>
    </div>
    {#if tab === 'finance.top-up'}
      <p>{locale.t('voucher_explanation')}</p>
      <form name="vouncher_form" onsubmit={redeemVoucher}>
        {#each voucher as _, index (index)}
          <input
            class="vouncher_input"
            maxlength="6"
            bind:value={voucher[index]}
            style="display: inline-block; width: 50px; text-align: center;"
          />
          {#if index < 3}&nbsp;-&nbsp;{/if}
        {/each}
        <br /><br />
        {#if voucherError}
          <p class="vk-error">{voucherError}</p>
        {/if}
        {#if voucherOk}
          <div class="vk-notice">{locale.t('voucher_redeemed')}</div>
        {/if}
        <input type="submit" class="button" value={locale.t('redeem')} />
      </form>
    {/if}
  </div>
{:else}
  <form class="container_gray settings_padding" onsubmit={saveAccount}>
    <table class="flexible_table" cellspacing="7" cellpadding="0" width="60%" border="0" align="center">
      <tbody>
        {@render privacyRow(locale.t('privacy_setting_access_page'), 'privacy_profile', account.privacy_profile)}
        {@render privacyRow(locale.t('privacy_setting_read_info'), 'privacy_info', account.privacy_profile)}
        {@render privacyRow(locale.t('privacy_setting_see_groups'), 'privacy_groups', 'everyone')}
        {@render privacyRow(locale.t('privacy_setting_see_photos'), 'privacy_photos', account.privacy_photos)}
        {@render privacyRow(locale.t('privacy_setting_see_videos'), 'privacy_videos', 'everyone')}
        {@render privacyRow(locale.t('privacy_setting_view_audio'), 'privacy_audio', account.privacy_audio)}
        {@render privacyRow(locale.t('privacy_setting_see_notes'), 'privacy_notes', 'everyone')}
        {@render privacyRow(locale.t('privacy_setting_see_friends'), 'privacy_friends', account.privacy_friends)}
        {@render privacyRow(locale.t('privacy_setting_add_to_friends'), 'privacy_friends_add', 'everyone')}
        {@render privacyRow(locale.t('privacy_setting_write_wall'), 'privacy_wall', account.privacy_wall)}
        {@render privacyRow(
          locale.t('privacy_setting_write_messages'),
          'privacy_messages',
          account.privacy_messages,
        )}
        {@render privacyRow(locale.t('privacy_setting_see_likes'), 'privacy_likes', 'everyone')}
        <tr>
          <td width="120" valign="top">
            <span class="nobold">{locale.t('profile_type')}</span>
          </td>
          <td>
            <select name="profile_type" style="width: 164px;">
              <option value="open">{locale.t('profile_type_open')}</option>
              <option value="closed">{locale.t('profile_type_closed')}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            {#if saveMessage}
              <div class="vk-notice">{saveMessage}</div>
            {/if}
            {#if saveError}
              <p class="vk-error">{saveError}</p>
            {/if}
            <input
              type="submit"
              class="button"
              value={saving ? locale.t('saving') : locale.t('save')}
              disabled={saving}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </form>
{/if}
