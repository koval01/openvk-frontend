<script lang="ts">
  import HiddenFileButton from '../components/HiddenFileButton.svelte';
  import MediaImg from '../components/MediaImg.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import { interceptUnlessModified } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { photoPermalink, type Album, type Photo } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';
  import { overlay } from '../stores/overlay.svelte';

  let epoch = $state(0);
  let title = $state('Photos');
  let error = $state<string | null>(null);
  let uploading = $state(false);

  const albumsPromise = $derived.by(() => {
    void epoch;
    return auth.token && auth.user
      ? api.albums(auth.token, auth.user.id, true)
      : Promise.resolve([] as Album[]);
  });

  async function createAlbum(event: Event) {
    event.preventDefault();
    if (!auth.token || !title.trim()) {
      return;
    }
    error = null;
    try {
      await api.createAlbum(auth.token, title.trim());
      epoch += 1;
    } catch (caught) {
      error = caught instanceof Error ? caught.message : 'Could not create album';
    }
  }

  async function uploadPhoto(albumId: number | undefined, files: FileList | null, input: HTMLInputElement) {
    const file = files?.[0];
    if (!file || !auth.token) {
      return;
    }
    uploading = true;
    error = null;
    try {
      await api.uploadPhoto(auth.token, file, albumId);
      epoch += 1;
    } catch (caught) {
      error = caught instanceof Error ? caught.message : 'Could not upload photo';
    } finally {
      uploading = false;
      input.value = '';
    }
  }

  async function removePhoto(albumId: number, mediaId: number) {
    if (!auth.token) {
      return;
    }
    const ok = await overlay.confirm({
      title: locale.t('warning'),
      text: locale.t('question_confirm'),
      yes: locale.t('yes'),
      no: locale.t('no'),
    });
    if (!ok) {
      return;
    }
    error = null;
    try {
      await api.deletePhoto(auth.token, albumId, mediaId);
      epoch += 1;
    } catch (caught) {
      error = caught instanceof Error ? caught.message : 'Could not delete photo';
    }
  }

  function viewerPhotos(album: Album) {
    return album.photos.map((photo: Photo) => ({
      id: `${photo.owner_user_id}_${photo.id}`,
      url: photo.url,
      title: photo.original_filename ?? album.title,
      ownerId: photo.owner_user_id,
      objectId: photo.id,
      liked: photo.liked,
      count: photo.like_count,
    }));
  }
</script>

<PageChrome title={locale.t('my_photos')}>
  {#await albumsPromise}
    <p>{locale.t('loading_albums')}</p>
  {:then albums}
    <div class="summaryBar">
      <div class="summary albumSummary" data-testid="albums-summary">
        {albums.length === 0 ? locale.t('albums_list_zero') : locale.count('albums_list', albums.length)}
        <span style="float: right;">
          &nbsp;|&nbsp;
          <a href="#create">{locale.t('create_album')}</a>
        </span>
      </div>
    </div>
    <form id="create" class="container_gray" data-testid="album-create" onsubmit={createAlbum}>
      <input name="title" bind:value={title} placeholder={locale.t('album_title')} />
      <input type="submit" class="button" value={locale.t('create_album')} />
    </form>
    <div class="container_gray">
      <HiddenFileButton
        testId="photo-file"
        accept="image/png,image/jpeg,image/gif,image/webp"
        disabled={uploading}
        label={locale.t('upload_picts')}
        onpick={(files, input) => void uploadPhoto(albums[0]?.id, files, input)}
      />
    </div>
    {#if error}
      <p class="vk-error" data-testid="albums-error">{error}</p>
    {/if}
    <div class="list_view container_gray no_scroll_container">
      {#each albums as album (album.id)}
        <div class="scroll_node content" data-testid={`album-${album.id}`}>
          <table>
            <tbody>
              <tr>
                <td valign="top" class="list_view_item_cover">
                  <MediaImg
                    src={album.cover_url ?? album.photos[0]?.url}
                    alt={album.title}
                    style="height: 130px; width: 170px; object-fit: cover"
                  />
                </td>
                <td valign="top" style="width: 100%" class="list_view_item_info">
                  <b>{album.title}</b><br />
                  <span style="color: grey;">{album.photo_count} {locale.t('photos')}</span>
                  {#if album.description}
                    <div>{album.description}</div>
                  {/if}
                  <div class="container_gray scroll_container album-flex">
                    {#each album.photos as photo, index (photo.id)}
                      <div class="album-photo" data-testid={`photo-${photo.id}`}>
                        <a
                          href={photoPermalink(photo.owner_user_id, photo.id)}
                          onclick={(event) => {
                            if (!interceptUnlessModified(event)) {
                              return;
                            }
                            overlay.openPhoto(viewerPhotos(album), index);
                          }}
                        >
                          <MediaImg
                            class="album-photo--image"
                            src={photo.url}
                            alt={photo.original_filename ?? album.title}
                          />
                        </a>
                        <button
                          class="link album-photo--delete"
                          type="button"
                          data-testid={`delete-photo-${photo.id}`}
                          onclick={() => removePhoto(album.id, photo.id)}>{locale.t('delete')}</button
                        >
                      </div>
                    {/each}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      {:else}
        <div class="ovk-empty">{locale.t('nothing_here')}</div>
      {/each}
    </div>
  {:catch failed}
    <p class="vk-error" data-testid="albums-error">
      {failed instanceof Error ? failed.message : locale.t('loading_albums')}
    </p>
  {/await}
</PageChrome>
