<script lang="ts">
  import LocaleHtml from '../components/LocaleHtml.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import { router } from '../lib/router.svelte';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  type TourSection = {
    id: string;
    label: string;
    parts: Array<{ title?: string; texts: string[]; bottom?: string[] }>;
  };

  const sections: TourSection[] = [
    {
      id: 'start',
      label: 'tour_section_1',
      parts: [
        {
          title: 'tour_section_1_title_1',
          texts: ['tour_section_1_text_1', 'tour_section_1_text_2', 'tour_section_1_text_3'],
          bottom: ['tour_section_1_bottom_text_1'],
        },
      ],
    },
    {
      id: 'profile',
      label: 'tour_section_2',
      parts: [
        {
          title: 'tour_section_2_title_1',
          texts: ['tour_section_2_text_1_1', 'tour_section_2_text_1_2', 'tour_section_2_text_1_3'],
          bottom: ['tour_section_2_bottom_text_1'],
        },
        {
          title: 'tour_section_2_title_2',
          texts: ['tour_section_2_text_2_1', 'tour_section_2_text_2_2', 'tour_section_2_text_2_3'],
        },
        {
          title: 'tour_section_2_title_4',
          texts: [],
          bottom: ['welcome_classic'],
        },
      ],
    },
    {
      id: 'photos',
      label: 'tour_section_3',
      parts: [
        {
          title: 'tour_section_3_title_1',
          texts: ['tour_section_3_text_1', 'tour_section_3_text_2', 'tour_section_3_text_3'],
          bottom: ['tour_section_3_bottom_text_1'],
        },
      ],
    },
    {
      id: 'search',
      label: 'tour_section_4',
      parts: [
        {
          title: 'tour_section_4_title_1',
          texts: ['tour_section_4_text_1', 'tour_section_4_text_2', 'tour_section_4_text_3'],
        },
      ],
    },
    {
      id: 'videos',
      label: 'tour_section_5',
      parts: [
        {
          title: 'tour_section_5_title_1',
          texts: ['tour_section_5_text_1', 'tour_section_5_text_2'],
          bottom: ['tour_section_5_bottom_text_1'],
        },
      ],
    },
    {
      id: 'audios',
      label: 'tour_section_6',
      parts: [
        {
          title: 'tour_section_6_title_1',
          texts: ['tour_section_6_text_1', 'tour_section_6_text_2', 'tour_section_6_text_3'],
          bottom: ['tour_section_6_bottom_text_1'],
        },
      ],
    },
    {
      id: 'news',
      label: 'tour_section_7',
      parts: [
        {
          title: 'tour_section_7_title_1',
          texts: ['tour_section_7_text_1', 'tour_section_7_text_2'],
          bottom: ['tour_section_7_bottom_text_1'],
        },
      ],
    },
    {
      id: 'groups',
      label: 'tour_section_9',
      parts: [
        {
          title: 'tour_section_9_title_1',
          texts: ['tour_section_9_text_1', 'tour_section_9_text_2', 'tour_section_9_text_3'],
          bottom: ['tour_section_9_bottom_text_1'],
        },
      ],
    },
  ];

  let current = $state(sections[0].id);
  const active = $derived(sections.find((section) => section.id === current) ?? sections[0]);
</script>

<PageChrome title={locale.t('tour_title')}>
  <div id="tour">
    <div class="rightNav">
      <h1>{locale.t('tour_title')}</h1>
      <div class="rightLinks">
        <div class="tab">
          {#each sections as section (section.id)}
            <button
              type="button"
              class={['tablinks', current === section.id && 'active']}
              onclick={() => (current = section.id)}
            >
              {locale.t(section.label)}
            </button>
          {/each}
        </div>
      </div>
      {#if !auth.isAuthenticated}
        <h1>{locale.t('reg_title')}</h1>
        <div class="rightLinks">
          <div><LocaleHtml html={locale.t('reg_text')} /></div>
        </div>
      {/if}
    </div>

    <div class="tabcontent">
      {#each active.parts as part, index (index)}
        {#if part.title}
          <h2>{locale.t(part.title)}</h2>
        {/if}
        {#if part.texts.length > 0}
          <ul class="listing">
            {#each part.texts as key (key)}
              <li><span><LocaleHtml html={locale.t(key)} /></span></li>
            {/each}
          </ul>
        {/if}
        {#if part.bottom}
          {#each part.bottom as key (key)}
            <p class="big"><LocaleHtml html={locale.t(key)} /></p>
          {/each}
        {/if}
      {/each}
      {#if !auth.isAuthenticated && current === 'start'}
        <div class="tour-reg">
          <a
            class="button"
            href="/login?act=register"
            onclick={(event) => router.handleClick(event, '/login?act=register')}>{locale.t('tour_reg')}</a
          >
        </div>
      {/if}
    </div>
  </div>
</PageChrome>

<style>
  #tour {
    overflow: hidden;
  }

  .rightNav {
    float: right;
    width: 140px;
    padding-left: 6px;
  }

  .rightNav h1 {
    background: var(--ovk-hover);
    font-weight: bold;
    font-size: 11px;
    padding: 4px 5px;
    margin: 0 0 4px;
  }

  .rightLinks {
    margin-bottom: 10px;
  }

  .tab button {
    display: block;
    width: 138px;
    border: none;
    margin-bottom: 5px;
    text-align: left;
    cursor: pointer;
    background: none;
    font-size: 10px;
    color: var(--ovk-link);
    padding: 4px 6px;
  }

  .tab button.active {
    background: var(--ovk-surface);
    color: var(--ovk-text);
    font-weight: bold;
    cursor: default;
  }

  .tabcontent {
    margin-right: 150px;
  }

  .tabcontent h2 {
    color: var(--ovk-title);
    font-size: 14px;
    padding-bottom: 3px;
    border-bottom: 1px solid var(--ovk-border);
  }

  .listing {
    margin: 8px 0 10px 18px;
    padding: 0;
  }

  .listing li {
    margin: 4px 0;
  }

  .big {
    font-size: 12px;
    text-align: center;
  }

  .tour-reg {
    margin-top: 10px;
    text-align: center;
  }
</style>
