<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import { api } from '../services/api';
  import type { Group } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  const groupsPromise = $derived(
    auth.token ? api.groups(auth.token).catch((): Group[] => []) : Promise.resolve([] as Group[]),
  );
</script>

<PageChrome title={locale.t('my_groups')}>
  {#await groupsPromise}
    <p class="m-0 text-vk-muted">{locale.t('loading_groups')}</p>
  {:then groups}
    <div class="vk-summary">
      {groups.length === 0 ? locale.t('groups_zero') : locale.count('groups', groups.length)}
    </div>
    {#each groups as group (group.id)}
      <div class="border-b border-vk-border py-2">
        <b>{group.name}</b>
        <div class="text-vk-muted">
          {group.kind}
          {#if group.about}
            · {group.about}
          {/if}
        </div>
      </div>
    {:else}
      <div class="vk-empty">{locale.t('nothing_here')}</div>
    {/each}
  {/await}
</PageChrome>
