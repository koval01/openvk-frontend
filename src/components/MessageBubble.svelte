<script lang="ts">
  import MediaImg from '../components/MediaImg.svelte';
  import { localeForIntl } from '../lib/languages';
  import { router } from '../lib/router.svelte';
  import { displayName, type Message, type User } from '../services/types';
  import { locale } from '../stores/locale.svelte';

  let {
    message,
    author,
  }: {
    message: Message;
    author: User;
  } = $props();

  const timeLabel = $derived(
    new Date(message.created_at).toLocaleTimeString(localeForIntl(locale.code), {
      hour: '2-digit',
      minute: '2-digit',
    }),
  );
  const href = $derived(`/id${author.id}`);
</script>

<div class="messenger-app--messages---message">
  <a {href} onclick={(event) => router.handleClick(event, href)}>
    <MediaImg class="ava" src={author.avatar_url} alt={displayName(author)} />
  </a>
  <div class="_content">
    <a {href} onclick={(event) => router.handleClick(event, href)}>
      <strong>{displayName(author)}</strong>
    </a>
    <span class="text">{message.text}</span>
  </div>
  <div class="time" style="text-align: right;">
    <span>{timeLabel}</span>
  </div>
</div>
