<script lang="ts">
  import MediaImg from '../components/MediaImg.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import { api } from '../services/api';
  import type { Album } from '../services/types';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

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

  async function uploadPhoto(albumId: number | undefined, files: FileList | null) {
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
    }
  }

  async function removePhoto(albumId: number, mediaId: number) {
    if (!auth.token) {
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
</script>

<PageChrome title={locale.t('my_photos')}>
  {#await albumsPromise}
    <p class="m-0 text-vk-muted">{locale.t('loading_albums')}</p>
  {:then albums}
    <div class="vk-summary" data-testid="albums-summary">
      {albums.length === 0 ? locale.t('albums_list_zero') : locale.count('albums_list', albums.length)}
    </div>
    <form class="vk-gray-box" data-testid="album-create" onsubmit={createAlbum}>
      <input class="vk-input" name="title" bind:value={title} placeholder={locale.t('album_title')} />
      <button class="vk-btn" type="submit">{locale.t('create_album')}</button>
    </form>
    <label class="vk-gray-box" style="display:block;">
      {locale.t('upload_a_photo')}
      <input
        data-testid="photo-file"
        type="file"
        accept="image/png,image/jpeg,image/gif,image/webp"
        disabled={uploading}
        onchange={(event) => {
          const input = event.currentTarget;
          void uploadPhoto(albums[0]?.id, input.files).then(() => {
            input.value = '';
          });
        }}
      />
    </label>
    {#if error}
      <p class="text-vk-error" data-testid="albums-error">{error}</p>
    {/if}
    {#each albums as album (album.id)}
      <div class="border-b border-vk-border py-2" data-testid={`album-${album.id}`}>
        <b>{album.title}</b>
        <span class="text-vk-muted"> {album.photo_count} {locale.t('photos')}</span>
        {#if album.description}
          <div class="text-vk-muted">{album.description}</div>
        {/if}
        <div class="container_gray scroll_container album-flex">
          {#each album.photos as photo (photo.id)}
            <div class="album-photo" data-testid={`photo-${photo.id}`}>
              <MediaImg
                class="album-photo--image"
                src={photo.url}
                alt={photo.original_filename ?? album.title}
              />
              <button
                class="link album-photo--delete"
                type="button"
                data-testid={`delete-photo-${photo.id}`}
                onclick={() => removePhoto(album.id, photo.id)}>{locale.t('delete')}</button
              >
            </div>
          {/each}
        </div>
      </div>
    {:else}
      <div class="vk-empty">{locale.t('nothing_here')}</div>
    {/each}
  {:catch failed}
    <p class="text-vk-error" data-testid="albums-error">
      {failed instanceof Error ? failed.message : locale.t('loading_albums')}
    </p>
  {/await}
</PageChrome>
