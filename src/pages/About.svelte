<script lang="ts">
  import ArticleBody from '../components/ArticleBody.svelte';
  import LocaleHtml from '../components/LocaleHtml.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import { ABOUT_LINKS } from '../content/about';
  import { p } from '../content/blocks';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import type { InstanceAbout } from '../services/types';
  import { locale } from '../stores/locale.svelte';

  const aboutPromise = api.about().catch(
    (): InstanceAbout => ({
      users: 0,
      online_users: 0,
      active_users: 0,
      groups: 0,
      wall_posts: 0,
      popular_groups: [],
    }),
  );

  const intro = $derived([p(locale.t('welcome_classic'))]);
</script>

<PageChrome title={locale.t('about_this_instance')}>
  {#await aboutPromise}
    <p class="m-0 text-vk-muted">{locale.t('loading')}</p>
  {:then about}
    <table class="flexible_table about-table">
      <tbody>
        <tr>
          <td class:has-groups={about.popular_groups.length > 0}>
            <h4>{locale.t('statistics')}</h4>
            <div class="about-block">
              {locale.t('on_this_instance_are')}
              <ul>
                <li>
                  <span><LocaleHtml html={locale.count('about_users', about.users)} /></span>
                </li>
                <li>
                  <span><LocaleHtml html={locale.count('about_online_users', about.online_users)} /></span>
                </li>
                <li>
                  <span><LocaleHtml html={locale.count('about_active_users', about.active_users)} /></span>
                </li>
                <li>
                  <span><LocaleHtml html={locale.count('about_groups', about.groups)} /></span>
                </li>
                <li>
                  <span><LocaleHtml html={locale.count('about_wall_posts', about.wall_posts)} /></span>
                </li>
              </ul>
            </div>
            <h4>{locale.t('about_links')}</h4>
            <div class="about-block">
              {locale.t('instance_links')}
              <ul>
                {#each ABOUT_LINKS as link (link.href)}
                  <li>
                    <a
                      href={link.href}
                      class="link"
                      onclick={(event) => router.handleClick(event, link.href)}>{locale.t(link.nameKey)}</a
                    >
                  </li>
                {/each}
              </ul>
            </div>
          </td>
          {#if about.popular_groups.length > 0}
            <td>
              <h4>{locale.t('most_popular_groups')}</h4>
              <ol class="about-groups">
                {#each about.popular_groups as group, index (group.id)}
                  <li value={index + 1}>
                    <b>{group.name}</b>
                    <div>{locale.count('participants', group.members)}</div>
                  </li>
                {/each}
              </ol>
            </td>
          {/if}
        </tr>
      </tbody>
    </table>
  {/await}

  <ArticleBody blocks={intro} />

  <h4>{locale.t('rules')}</h4>
  <div class="about-block rules">
    <LocaleHtml html={locale.t('about_watch_rules', '/terms')} />
  </div>
</PageChrome>

<style>
  .about-table {
    width: 100%;
  }

  .about-table tr {
    vertical-align: top;
  }

  .about-table td:first-child {
    width: 250px;
  }

  h4 {
    margin: 0;
    padding: 0 0 4px;
    border-bottom: 1px solid var(--ovk-border);
    font-size: 13px;
    color: var(--ovk-title);
  }

  td.has-groups {
    padding-right: 10px;
  }

  .about-block {
    margin-top: 5px;
  }

  .about-block.rules {
    margin-top: 16px;
  }

  .about-groups {
    margin: 5px 0 0;
    padding-left: 22px;
  }

  .about-groups li {
    margin-top: 5px;
  }
</style>
