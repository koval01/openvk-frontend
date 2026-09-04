<script lang="ts">
  import MessageBubble from '../components/MessageBubble.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import Tabs from '../components/Tabs.svelte';
  import MediaImg from '../components/MediaImg.svelte';
  import { localeForIntl } from '../lib/languages';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { displayName, type Message, type User } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  let draft = $state('');
  let extrasByPeer = $state.raw<Record<number, Message[]>>({});

  const peerId = $derived(Number(router.route.peerId));
  const hasPeer = $derived(Number.isFinite(peerId) && peerId > 0);
  const localMessages = $derived(hasPeer ? (extrasByPeer[peerId] ?? []) : []);

  const inboxPromise = $derived.by(async () => {
    if (!auth.token || hasPeer) {
      return [] as { peer: User; last: Message }[];
    }
    const messages = await api.messages(auth.token).catch((): Message[] => []);
    const peers = [...new Set(messages.map((message) => message.peer_id))];
    const users = await Promise.all(
      peers.map((id) => api.user(id, auth.token as string).catch((): User | null => null)),
    );
    const byId = new Map(users.filter((user): user is User => user !== null).map((user) => [user.id, user]));
    return messages.flatMap((last) => {
      const peer = byId.get(last.peer_id);
      return peer ? [{ peer, last }] : [];
    });
  });

  const threadPromise = $derived.by(async () => {
    if (!auth.token || !hasPeer) {
      return { peer: null as User | null, messages: [] as Message[] };
    }
    const [peer, messages] = await Promise.all([
      api.user(peerId, auth.token).catch((): User | null => null),
      api.messages(auth.token, peerId).catch((): Message[] => []),
    ]);
    return { peer, messages };
  });

  async function send(event: Event, peer: User | null) {
    event.preventDefault();
    const text = draft.trim();
    const token = auth.token;
    if (!text || !token || !peer) {
      return;
    }
    draft = '';
    try {
      const message = await api.sendMessage(token, peer.id, text);
      extrasByPeer = {
        ...extrasByPeer,
        [peer.id]: [...(extrasByPeer[peer.id] ?? []), message],
      };
    } catch {
      draft = text;
    }
  }

  function previewTime(iso: string): string {
    return new Date(iso).toLocaleString(localeForIntl(locale.code), {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
</script>

{#if hasPeer}
  {#await threadPromise}
    <PageChrome title={locale.t('my_messages')}>
      <p>{locale.t('loading_messages')}</p>
    </PageChrome>
  {:then thread}
    {#snippet header()}
      <a href="/im" onclick={(event) => router.handleClick(event, '/im')}>{locale.t('my_messages')}</a>
      »
      {#if thread.peer}
        <a
          href="/id{thread.peer.id}"
          onclick={(event) => router.handleClick(event, `/id${thread.peer?.id}`)}
          >{displayName(thread.peer)}</a
        >
      {/if}
    {/snippet}
    <PageChrome title={thread.peer ? displayName(thread.peer) : locale.t('my_messages')} {header}>
      <div class="messenger-app">
        <div class="messenger-app--messages">
          {#each [...thread.messages, ...localMessages] as message (`${message.peer_id}_${message.id}`)}
            {@const author =
              message.author_id === auth.user?.id
                ? auth.user
                : thread.peer}
            {#if author}
              <MessageBubble {message} {author} />
            {/if}
          {:else}
            <center>{locale.t('no_messages')}</center>
          {/each}
        </div>
        <div class="messenger-app--input">
          {#if auth.user && thread.peer}
            <MediaImg class="ava" src={auth.user.avatar_url} alt={displayName(auth.user)} />
            <form
              class="messenger-app--input---messagebox"
              onsubmit={(event) => send(event, thread.peer)}
            >
              <textarea
                name="message"
                placeholder={locale.t('enter_message')}
                bind:value={draft}
                onkeydown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey && !event.metaKey) {
                    event.preventDefault();
                    void send(event, thread.peer);
                  }
                }}
              ></textarea>
              <button class="button" type="submit">{locale.t('send')}</button>
            </form>
            <MediaImg class="ava" src={thread.peer.avatar_url} alt={displayName(thread.peer)} />
          {/if}
        </div>
      </div>
    </PageChrome>
  {/await}
{:else}
  <PageChrome title={locale.t('my_messages')}>
    <Tabs tabs={[{ id: 'all', label: locale.t('all_messages') }]} active="all" />
    <div class="container_gray">
      <form action="/im/search" method="POST" style="margin: 0;" onsubmit={(event) => event.preventDefault()}>
        <input type="text" name="pattern" placeholder={locale.t('search_messages')} />
      </form>
    </div>
    {#await inboxPromise}
      <p>{locale.t('loading_messages')}</p>
    {:then inbox}
      {#if inbox.length > 0}
        <div class="crp-list scroll_container">
          {#each inbox as row (`${row.peer.id}_${row.last.id}`)}
            {@const href = `/im?sel=${row.peer.id}`}
            <div
              class="scroll_node crp-entry"
              role="link"
              tabindex="0"
              onmousedown={() => router.goto(href)}
              onkeydown={(event) => {
                if (event.key === 'Enter') {
                  router.goto(href);
                }
              }}
            >
              <div class="crp-entry--image">
                <MediaImg src={row.peer.avatar_url} alt={displayName(row.peer)} />
              </div>
              <div class="crp-entry--info">
                <a href="/id{row.peer.id}" onclick={(event) => router.handleClick(event, `/id${row.peer.id}`)}
                  >{displayName(row.peer)}</a
                ><br />
                <span>{previewTime(row.last.created_at)}</span>
              </div>
              <div class="crp-entry--message">
                {#if row.last.author_id === auth.user?.id && auth.user}
                  <div class="crp-entry--message---av">
                    <MediaImg src={auth.user.avatar_url} alt="" />
                  </div>
                {/if}
                <div class="crp-entry--message---text">{row.last.text}</div>
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <br /><br />
        <center>{locale.t('no_messages')}</center>
      {/if}
    {/await}
  </PageChrome>
{/if}
