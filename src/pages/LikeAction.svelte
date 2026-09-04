<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { likePageHref, likeTargetPermalink, type LikeKind } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  const kind = $derived(
    (router.route.act === 'photo' || router.route.act === 'video' || router.route.act === 'comment'
      ? router.route.act
      : 'post') as LikeKind,
  );
  const ownerId = $derived(Number(router.route.userId ?? 0));
  const objectId = $derived(Number(router.route.postId ?? 0));
  const prettyId = $derived(kind === 'comment' ? String(objectId) : `${ownerId}_${objectId}`);
  const back = $derived(likeTargetPermalink(router.route.act ?? 'wall', ownerId, objectId));
  const formAction = $derived(likePageHref(kind, prettyId));

  let error = $state<string | null>(null);
  let sending = $state(false);

  async function submit(event: Event) {
    event.preventDefault();
    if (!auth.token || sending) {
      return;
    }
    sending = true;
    error = null;
    try {
      await api.toggleLike(kind, prettyId, auth.token);
      router.goto(back);
    } catch (caught) {
      error = caught instanceof Error ? caught.message : locale.t('error');
    } finally {
      sending = false;
    }
  }
</script>

<PageChrome title={locale.t('liked_verb')}>
  {#if error}
    <p class="vk-error">{error}</p>
  {/if}
  <form method="post" action={formAction} onsubmit={submit}>
    <input
      type="submit"
      class="button"
      value={sending ? locale.t('sending') : locale.t('liked_verb')}
      disabled={sending}
    />
  </form>
</PageChrome>
