<script lang="ts">
  import MediaImg from '../components/MediaImg.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { CAMERA_FALLBACK, type Group } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  const groupsPromise = $derived(
    auth.token ? api.groups(auth.token).catch((): Group[] => []) : Promise.resolve([] as Group[]),
  );
</script>

<PageChrome title={locale.t('my_groups')}>
  {#await groupsPromise}
    <p>{locale.t('loading_groups')}</p>
  {:then groups}
    <div id="groups_graybar" class="container_gray">
      <form action="/search" id="search_box" onsubmit={(event) => event.preventDefault()}>
        <input
          name="q"
          class="header_search_input"
          style="width: 320px"
          placeholder={locale.t('search_by_groups')}
        />
      </form>
    </div>
    <div class="summaryBar vk-summary">
      <div class="summary">
        {groups.length === 0 ? locale.t('groups_zero') : locale.count('groups_list', groups.length)}
      </div>
    </div>
    <div class="list_view container_gray no_scroll_container">
      {#each groups as group (group.id)}
        {@const href = `/club${group.id}`}
        <div class="scroll_node content">
          <table>
            <tbody>
              <tr>
                <td valign="top" class="list_view_item_cover">
                  <a {href} onclick={(event) => router.handleClick(event, href)}>
                    <MediaImg
                      src={group.avatar_url ?? CAMERA_FALLBACK}
                      width="75"
                      alt={group.name}
                    />
                  </a>
                </td>
                <td valign="top" style="width: 100%" class="list_view_item_info">
                  <table id="basicInfo" class="ugc-table group_info" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td class="label"><span class="nobold">{locale.t('name')}: </span></td>
                        <td class="data">
                          <a {href} onclick={(event) => router.handleClick(event, href)}
                            >{group.name}</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="label"><span class="nobold">{locale.t('size')}:</span></td>
                        <td class="data">{group.members} {locale.t('participants')}</td>
                      </tr>
                    </tbody>
                  </table>
                  {#if group.about}
                    <div>{group.about}</div>
                  {/if}
                </td>
                <td valign="top" class="action_links list_view_item_actions">
                  <a {href} class="profile_link hide_on_mobiles" onclick={(event) => router.handleClick(event, href)}
                    >{locale.t('check_community')}</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      {:else}
        <div class="ovk-empty">{locale.t('nothing_here')}</div>
      {/each}
    </div>
  {/await}
</PageChrome>
