<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import SettingsForms from '../components/SettingsForms.svelte';
  import Tabs from '../components/Tabs.svelte';
  import { api } from '../services/api';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  let tab = $state('general');

  const accountPromise = $derived(
    auth.token ? api.settings(auth.token) : Promise.reject(new Error('Not signed in')),
  );
</script>

<PageChrome title={locale.t('my_settings')}>
  <Tabs
    tabs={[
      { id: 'general', label: locale.t('main') },
      { id: 'security', label: locale.t('security') },
      { id: 'privacy', label: locale.t('privacy') },
    ]}
    active={tab}
    onselect={(id) => {
      tab = id;
    }}
  />
  {#await accountPromise}
    <p class="px-1 py-4 text-vk-muted">{locale.t('loading_account')}</p>
  {:then account}
    <SettingsForms {account} {tab} />
  {:catch}
    <div class="vk-notice m-2">{locale.t('loading_account')}</div>
  {/await}
</PageChrome>
