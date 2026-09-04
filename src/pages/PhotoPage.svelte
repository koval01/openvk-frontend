<script lang="ts">
  import Comments from '../components/Comments.svelte';
  import LikeButton from '../components/LikeButton.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { displayName, ownerHref, rewriteMediaUrl, type User } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  const ownerId = $derived(Number(router.route.userId));
  const photoId = $derived(Number(router.route.photoId));
  const ownerUrl = $derived(ownerHref(ownerId));

  const pagePromise = $derived.by(async () => {
    if (!auth.token || !ownerId || !photoId) {
      throw new Error('missing photo');
    }
    const photo = await api.photo(ownerId, photoId, auth.token);
    const owner =
      ownerId > 0 ? await api.user(ownerId, auth.token).catch((): User | null => null) : null;
    return { photo, owner };
  });
</script>

{#await pagePromise}
  <PageChrome title={locale.t('photo')}>
    <p>{locale.t('loading_albums')}</p>
  </PageChrome>
{:then page}
  {#snippet header()}
    <a href={ownerUrl} onclick={(event) => router.handleClick(event, ownerUrl)}>
      {page.owner ? displayName(page.owner) : locale.t('photo')}
    </a>
    »
    {locale.t('photo')}
  {/snippet}
  <PageChrome title={locale.t('photo')} {header}>
    <div class="media-page-wrapper photo-page-wrapper">
      <div class="photo-page-wrapper-photo">
        <img src={rewriteMediaUrl(page.photo.url)} alt={page.photo.original_filename ?? ''} />
      </div>
      <div class="ovk-photo-details">
        <div class="media-page-wrapper-description">
          <div class="upload_time">
            {locale.t('info_upload_date')}
            <LikeButton
              id={`${ownerId}_${photoId}`}
              type="photo"
              tidy
              liked={page.photo.liked}
              count={page.photo.like_count}
            />
          </div>
        </div>
        <hr />
        <div class="media-page-wrapper-details">
          <div class="media-page-wrapper-comments">
            <Comments target="photo" {ownerId} objectId={photoId} />
          </div>
          <div class="media-page-wrapper-actions">
            {#if page.owner}
              <a
                href={ownerUrl}
                class="media-page-author-block"
                onclick={(event) => router.handleClick(event, ownerUrl)}
              >
                <b>{displayName(page.owner)}</b>
              </a>
            {/if}
            <a
              href={rewriteMediaUrl(page.photo.url)}
              class="profile_link"
              target="_blank"
              rel="noreferrer"
              style="display:block;width:96%;"
            >
              {locale.t('open_original')}
            </a>
            <a
              href="/report/{photoId}?type=photo"
              class="profile_link"
              onclick={(event) => router.handleClick(event, `/report/${photoId}?type=photo`)}
              style="display:block;width:96%;"
            >
              {locale.t('report')}
            </a>
          </div>
        </div>
      </div>
    </div>
  </PageChrome>
{:catch}
  <PageChrome title={locale.t('not_found')}>
    <div class="ovk-empty">{locale.t('not_found')}</div>
  </PageChrome>
{/await}
