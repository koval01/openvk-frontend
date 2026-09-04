<script lang="ts">
  import MessageBubble from '../components/MessageBubble.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import Tabs from '../components/Tabs.svelte';
  import { api } from '../services/api';
  import { displayName, type Message, type User } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  let draft = $state('');
  let localMessages = $state.raw<Message[]>([]);

  const threadPromise = $derived.by(async () => {
    if (!auth.token) {
      return { peer: null as User | null, messages: [] as Message[] };
    }
    const friends = await api.friends(auth.token).catch((): User[] => []);
    const peer = friends[0] ?? null;
    if (!peer) {
      return { peer, messages: [] as Message[] };
    }
    const messages = await api.messages(auth.token, peer.id).catch((): Message[] => []);
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
      localMessages = [...localMessages, message];
    } catch {
      draft = text;
    }
  }
</script>

<PageChrome title={locale.t('my_messages')}>
  <Tabs tabs={[{ id: 'all', label: locale.t('all_messages') }]} active="all" />
  <div class="vk-gray-box">
    <input class="vk-input w-full" placeholder={locale.t('search_messages')} />
  </div>
  {#await threadPromise}
    <p class="m-0 text-vk-muted">{locale.t('loading_messages')}</p>
  {:then thread}
    <div class="min-h-[280px] bg-vk-hover p-2">
      <div class="vk-section-title">
        {thread.peer ? displayName(thread.peer) : locale.t('my_messages')}
      </div>
      {#each [...thread.messages, ...localMessages] as message (`${message.peer_id}_${message.id}`)}
        <MessageBubble {message} mine={message.author_id === auth.user?.id} />
      {:else}
        <div class="vk-empty">{locale.t('nobody_wrote')}</div>
      {/each}
    </div>
    <form class="flex gap-1 border-t border-vk-border p-2" onsubmit={(event) => send(event, thread.peer)}>
      <input class="vk-input h-[24px] flex-1" placeholder={locale.t('write_message')} bind:value={draft} />
      <button class="vk-btn" type="submit">{locale.t('send')}</button>
    </form>
  {/await}
</PageChrome>
