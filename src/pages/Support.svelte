<script lang="ts">
  import ArticleBody from '../components/ArticleBody.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import Tabs from '../components/Tabs.svelte';
  import { faqItems } from '../content/faq';
  import { localeForIntl } from '../lib/languages';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import type { Ticket } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  const items = $derived(faqItems(locale.code));
  const act = $derived(router.route.act || 'faq');
  const ticketId = $derived(Number(router.route.postId ?? 0));
  const mode = $derived(
    ticketId
      ? act === 'close' || act === 'delete'
        ? act
        : 'view'
      : act === 'list' || act === 'new'
        ? act
        : 'faq',
  );

  let subject = $state('');
  let content = $state('');
  let reply = $state('');
  let error = $state<string | null>(null);
  let epoch = $state(0);

  const ticketsPromise = $derived.by(() => {
    void epoch;
    if (!auth.token || (mode !== 'list' && mode !== 'view')) {
      return Promise.resolve([] as Ticket[]);
    }
    return api.tickets(auth.token, Boolean(auth.user && (auth.user.role === 'admin' || auth.user.role === 'agent')));
  });

  const ticketPromise = $derived.by(() => {
    void epoch;
    if (!auth.token || !ticketId) {
      return Promise.resolve(null);
    }
    return api.ticket(auth.token, ticketId);
  });

  async function createTicket(event: Event) {
    event.preventDefault();
    if (!auth.token) {
      return;
    }
    error = null;
    try {
      const ticket = await api.createTicket(auth.token, subject, content);
      subject = '';
      content = '';
      router.goto(`/support/view/${ticket.id}`);
    } catch (caught) {
      error = caught instanceof Error ? caught.message : locale.t('error');
    }
  }

  async function sendReply(event: Event) {
    event.preventDefault();
    if (!auth.token || !ticketId) {
      return;
    }
    error = null;
    try {
      await api.replyTicket(auth.token, ticketId, reply);
      reply = '';
      epoch += 1;
    } catch (caught) {
      error = caught instanceof Error ? caught.message : locale.t('error');
    }
  }

  async function closeTicket() {
    if (!auth.token || !ticketId) {
      return;
    }
    await api.closeTicket(auth.token, ticketId);
    epoch += 1;
  }

  async function removeTicket() {
    if (!auth.token || !ticketId) {
      return;
    }
    await api.deleteTicket(auth.token, ticketId);
    router.goto('/support?act=list');
  }

  $effect(() => {
    const id = ticketId;
    const action = act;
    const token = auth.token;
    if (!token || !id || (action !== 'close' && action !== 'delete')) {
      return;
    }
    let cancelled = false;
    void (async () => {
      try {
        if (action === 'close') {
          await api.closeTicket(token, id);
          if (!cancelled) {
            router.goto(`/support/view/${id}`);
          }
        } else {
          await api.deleteTicket(token, id);
          if (!cancelled) {
            router.goto('/support?act=list');
          }
        }
      } catch {
        /* stay on the loading screen; the ticket view still exists */
      }
    })();
    return () => {
      cancelled = true;
    };
  });
</script>

<PageChrome title={locale.t('menu_help')}>
  {#if auth.user}
    <Tabs
      tabs={[
        { id: 'faq', label: locale.t('support_faq'), href: '/support' },
        { id: 'list', label: locale.t('support_list'), href: '/support?act=list' },
        { id: 'new', label: locale.t('support_new'), href: '/support?act=new' },
      ]}
      active={mode === 'view' || mode === 'close' || mode === 'delete' ? 'list' : mode}
    />
  {/if}

  {#if error}
    <p class="vk-error">{error}</p>
  {/if}

  {#if mode === 'close' || mode === 'delete'}
    <p>{locale.t('loading')}</p>
  {:else if mode === 'new'}
    {#if auth.user?.support_banned}
      <center>
        <img src="/assets/packages/static/openvk/img/oof.apng" alt="" style="width: 20%;" />
        <p>{auth.user.support_ban_reason}</p>
      </center>
    {:else}
      <form class="new" onsubmit={createTicket}>
        <center>
          <input bind:value={subject} placeholder={locale.t('support_new_title')} style="width: 80%;" />
          <br /><br />
          <textarea bind:value={content} placeholder={locale.t('support_new_content')} style="width: 80%; min-height: 120px;"
          ></textarea>
          <br /><br />
          <input type="submit" class="button" value={locale.t('write')} />
        </center>
      </form>
    {/if}
  {:else if mode === 'list'}
    {#await ticketsPromise}
      <p>{locale.t('loading')}</p>
    {:then tickets}
      {#each tickets as ticket (ticket.id)}
        <table class="post" border="0" style="font-size: 11px; width: 610px;">
          <tbody>
            <tr>
              <td width="54" valign="top">
                <center>
                  <img
                    src="/assets/packages/static/openvk/img/note.gif"
                    alt=""
                    style="margin-top: 17px;"
                  />
                </center>
              </td>
              <td valign="top">
                <div class="post-author">
                  <a
                    href="/support/view/{ticket.id}"
                    onclick={(event) => router.handleClick(event, `/support/view/${ticket.id}`)}
                    ><b>{ticket.subject}</b></a
                  >
                </div>
                <div class="post-content" style="padding: 4px;">
                  {locale.t('status')}: {ticket.status}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      {:else}
        <div class="ovk-empty">{locale.t('nothing_here')}</div>
      {/each}
    {/await}
  {:else if mode === 'view'}
    {#await ticketPromise}
      <p>{locale.t('loading')}</p>
    {:then ticket}
      {#if ticket}
        <h4>{ticket.subject}</h4>
        <p>{ticket.content}</p>
        <p class="nobold">
          {ticket.author.first_name} {ticket.author.last_name} · {new Date(ticket.created_at).toLocaleString(
            localeForIntl(locale.code),
          )}
        </p>
        {#each ticket.replies as item (item.id)}
          <div class="container_gray settings_padding">
            <b>{item.author.first_name} {item.author.last_name}</b>
            {#if item.from_agent}
              ({locale.t('menu_help')})
            {/if}
            <p>{item.content}</p>
          </div>
        {/each}
        {#if ticket.status === 'open'}
          <form onsubmit={sendReply}>
            <textarea bind:value={reply} style="width: 80%; min-height: 80px;"></textarea>
            <div>
              <input type="submit" class="button" value={locale.t('write')} />
              <button class="button" type="button" onclick={closeTicket}>{locale.t('close')}</button>
              {#if auth.user?.role === 'admin' || auth.user?.role === 'agent'}
                <button class="button" type="button" onclick={removeTicket}>{locale.t('delete')}</button>
              {/if}
            </div>
          </form>
        {:else}
          <p>{locale.t('ticket_closed')}</p>
        {/if}
      {/if}
    {/await}
  {:else}
    <h4>{locale.t('support_faq')}</h4>
    {#each items as item, index (index)}
      <div class="faq">
        <div id="faqhead">{item.title}</div>
        <div id="faqcontent">
          <ArticleBody blocks={item.blocks} />
        </div>
      </div>
    {/each}
  {/if}
</PageChrome>

<style>
  h4 {
    margin: 0 0 12px;
    font-size: 13px;
    color: var(--ovk-title);
  }
</style>
