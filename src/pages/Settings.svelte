<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import SettingsForms from '../components/SettingsForms.svelte';
  import Tabs from '../components/Tabs.svelte';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  const tab = $derived(
    router.route.act === 'security' ||
      router.route.act === 'privacy' ||
      router.route.act === 'finance' ||
      router.route.act === 'finance.top-up'
      ? router.route.act
      : 'general',
  );

  const accountPromise = $derived(
    auth.token ? api.settings(auth.token) : Promise.reject(new Error('Not signed in')),
  );
</script>

<PageChrome title={locale.t('my_settings')}>
  <Tabs
    tabs={[
      { id: 'general', label: locale.t('main'), href: '/settings' },
      { id: 'security', label: locale.t('security'), href: '/settings?act=security' },
      { id: 'privacy', label: locale.t('privacy'), href: '/settings?act=privacy' },
      { id: 'finance', label: locale.t('points'), href: '/settings?act=finance' },
    ]}
    active={tab.startsWith('finance') ? 'finance' : tab}
  />
  {#await accountPromise}
    <p>{locale.t('loading_account')}</p>
  {:then account}
    <SettingsForms {account} {tab} />
  {:catch}
    <div class="vk-notice">{locale.t('loading_account')}</div>
  {/await}
</PageChrome>
