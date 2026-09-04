<script lang="ts">
  import ArticleBody from '../components/ArticleBody.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import { blogPost, blogPosts, formatBlogDate } from '../content/blog';
  import { router } from '../lib/router.svelte';
  import { locale } from '../stores/locale.svelte';

  const posts = $derived(blogPosts());
  const current = $derived(router.route.slug ? blogPost(router.route.slug) : undefined);
</script>

{#if router.route.slug && !current}
  <PageChrome title={locale.t('blog_title')}>
    <div class="ovk-empty">{locale.t('nothing_here')}</div>
  </PageChrome>
{:else if current}
  <PageChrome title={current.title}>
    <div class="blog-meta">{formatBlogDate(current.date, locale.code)}</div>
    <p class="blog-lead">{current.lead}</p>
    <ArticleBody blocks={current.blocks} />
    <p>
      <a href="/blog" class="link" onclick={(event) => router.handleClick(event, '/blog')}
        >{locale.t('blog_all_posts')}</a
      >
    </p>
  </PageChrome>
{:else}
  <PageChrome title={locale.t('blog_title')} note={String(posts.length)}>
    {#each posts as post (post.slug)}
      {@const href = `/blog/${post.slug}`}
      <div class="blog-row">
        <a {href} class="blog-title" onclick={(event) => router.handleClick(event, href)}>{post.title}</a>
        <div class="blog-meta">{formatBlogDate(post.date, locale.code)}</div>
        <div class="blog-lead">{post.lead}</div>
      </div>
    {/each}
  </PageChrome>
{/if}

<style>
  .blog-row {
    padding: 10px 0;
    border-bottom: 1px solid var(--ovk-border);
  }

  .blog-title {
    font-weight: bold;
    color: var(--ovk-link);
  }

  .blog-meta {
    color: var(--ovk-muted);
    margin: 3px 0 6px;
  }

  .blog-lead {
    margin: 0 0 8px;
    line-height: 1.45;
  }
</style>
