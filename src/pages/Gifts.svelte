<script lang="ts">
  import PageChrome from '../components/PageChrome.svelte';
  import Tabs from '../components/Tabs.svelte';
  import { localeForIntl } from '../lib/languages';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { displayName, type GiftCategory, type User, type UserGift } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  const ownerId = $derived(Number(router.route.userId ?? auth.user?.id ?? 0));
  const picking = $derived(router.route.act === 'pick');
  const imageId = $derived(router.route.act === 'image' ? Number(router.route.photoId ?? 0) : 0);

  let caption = $state('');
  let anonymous = $state(false);
  let error = $state<string | null>(null);
  let epoch = $state(0);

  const profilePromise = $derived(
    auth.token && ownerId
      ? api.user(ownerId, auth.token).catch((): User | null => null)
      : Promise.resolve(null),
  );
  const giftsPromise = $derived.by(() => {
    void epoch;
    return auth.token && ownerId ? api.userGifts(auth.token, ownerId) : Promise.resolve([] as UserGift[]);
  });
  const catalogPromise = $derived(
    auth.token && (picking || imageId) ? api.giftCatalog(auth.token) : Promise.resolve([] as GiftCategory[]),
  );

  $effect(() => {
    if (!imageId || !auth.token) {
      return;
    }
    void giftsPromise.then((gifts) => {
      const match = gifts.find((item) => item.id === imageId);
      if (match) {
        window.location.replace(match.gift.image_url);
      }
    });
  });

  async function send(giftId: number) {
    if (!auth.token || !ownerId) {
      return;
    }
    error = null;
    try {
      await api.sendGift(auth.token, {
        gift_id: giftId,
        receiver_id: ownerId,
        caption: caption || undefined,
        anonymous,
      });
      caption = '';
      router.goto(`/gifts${ownerId}`);
      epoch += 1;
    } catch (caught) {
      error = caught instanceof Error ? caught.message : locale.t('error');
    }
  }
</script>

{#if imageId}
  <PageChrome title={locale.t('gifts')}>
    <p>{locale.t('loading')}</p>
  </PageChrome>
{:else}
  {#await profilePromise}
    <PageChrome title={locale.t('gifts')}>
      <p>{locale.t('loading')}</p>
    </PageChrome>
  {:then profile}
    {@const title = profile ? locale.t('users_gifts').replace('$1', profile.first_name) : locale.t('gifts')}
    <PageChrome {title}>
      {#snippet header()}
        {#if profile}
          <a href="/id{ownerId}" onclick={(event) => router.handleClick(event, `/id${ownerId}`)}
            >{displayName(profile)}</a
          >
          »
        {/if}
        {locale.t('gifts')}
      {/snippet}
      <Tabs
        tabs={[
          { id: 'list', label: ownerId === auth.user?.id ? locale.t('my_gifts') : locale.t('gifts'), href: `/gifts${ownerId}` },
          {
            id: 'pick',
            label: locale.t('send_gift'),
            href: `/gifts?act=pick&user=${ownerId}`,
          },
        ]}
        active={picking ? 'pick' : 'list'}
      />
      {#if error}
        <p class="vk-error">{error}</p>
      {/if}
      {#if picking}
        {#await catalogPromise then categories}
          {#each categories as category (category.id)}
            <h4>{category.name}</h4>
            <div class="gift_cat_row gift_pick">
              {#each category.gifts as gift (gift.id)}
                <div class="user_gift" style="display: inline-block; margin: 8px; text-align: center;">
                  <img class="gift_pic" src={gift.image_url} alt={gift.name} width="96" height="96" />
                  <div>{gift.name}</div>
                  <div>{gift.price} {locale.t('points_count')}</div>
                  <button class="button" type="button" onclick={() => send(gift.id)}>{locale.t('send_gift')}</button>
                </div>
              {/each}
            </div>
          {/each}
          <p>
            <label>
              <input type="checkbox" bind:checked={anonymous} />
              {locale.t('gift_anonymous')}
            </label>
          </p>
          <input bind:value={caption} placeholder={locale.t('gift_comment')} style="width: 80%;" />
        {/await}
      {:else}
        {#await giftsPromise}
          <p>{locale.t('loading')}</p>
        {:then gifts}
          {#each gifts as item (item.id)}
            <table class="post gift" border="0" style="font-size: 11px;">
              <tbody>
                <tr>
                  <td class="post-author-ava" width="54" valign="top">
                    {#if item.anonymous || !item.sender}
                      <img src="/assets/packages/static/openvk/img/camera_200.png" width="50" alt="" />
                    {:else}
                      <a href="/id{item.sender.id}" onclick={(event) => router.handleClick(event, `/id${item.sender?.id}`)}>
                        <img src={item.sender.avatar_url || '/assets/packages/static/openvk/img/camera_200.png'} width="50" alt="" />
                      </a>
                    {/if}
                  </td>
                  <td valign="top">
                    <div class="post-author">
                      {#if item.anonymous || !item.sender}
                        <b>{locale.t('gift')}</b>
                      {:else}
                        <a href="/id{item.sender.id}" onclick={(event) => router.handleClick(event, `/id${item.sender?.id}`)}
                          ><b>{displayName(item.sender)}</b></a
                        >
                      {/if}
                    </div>
                    <div class="user_gift">
                      <img class="gift_pic" src={item.gift.image_url} alt={item.gift.name} />
                      {#if item.caption}
                        <div class="gift_comment">{item.caption}</div>
                      {/if}
                    </div>
                    <div class="post-menu">
                      {new Date(item.created_at).toLocaleString(localeForIntl(locale.code))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          {:else}
            <div class="ovk-empty">{locale.t('user_doesnt_have_gifts')}</div>
          {/each}
        {/await}
      {/if}
    </PageChrome>
  {/await}
{/if}
