<script lang="ts">
  import MediaImg from '../MediaImg.svelte';
  import { api } from '../../services/api';
  import type { Album } from '../../services/types';
  import { overlay } from '../../stores/overlay.svelte';
  import { auth } from '../../stores/auth.svelte';
  import { locale } from '../../stores/locale.svelte';

  let albumId = $state(0);
  let error = $state<string | null>(null);
  let uploading = $state(false);
  let epoch = $state(0);

  const albumsPromise = $derived.by(() => {
    void epoch;
    if (!auth.token || !auth.user) {
      return Promise.resolve([] as Album[]);
    }
    return api.albums(auth.token, auth.user.id, true);
  });

  const selectedAlbum = $derived(Number(albumId));

  function photosOf(albums: Album[]) {
    if (selectedAlbum === 0) {
      return albums.flatMap((album) => album.photos);
    }
    return albums.find((album) => album.id === selectedAlbum)?.photos ?? [];
  }

  async function upload(event: Event, albums: Album[]) {
    const input = event.currentTarget as HTMLInputElement;
    const files = [...(input.files ?? [])];
    input.value = '';
    if (!auth.token || files.length === 0) {
      return;
    }
    uploading = true;
    error = null;
    try {
      let target = selectedAlbum || albums[0]?.id;
      if (!target) {
        const created = await api.createAlbum(auth.token, locale.t('photos'));
        target = created.id;
      }
      for (const file of files) {
        await api.uploadPhoto(auth.token, file, target);
      }
      epoch += 1;
    } catch (caught) {
      error = caught instanceof Error ? caught.message : locale.t('upload_button');
    } finally {
      uploading = false;
    }
  }
</script>

{#await albumsPromise}
  <div class="attachment_selector">
    <div id="attachment_insert">{locale.t('loading_albums')}</div>
  </div>
{:then albums}
  {@const photos = photosOf(albums)}
  <div class="attachment_selector">
    <div class="topGrayBlock display_flex_row">
      <label>
        <input
          id="__pickerQuickUpload"
          type="file"
          multiple
          accept="image/*"
          style="display: none;"
          disabled={uploading}
          onchange={(event) => void upload(event, albums)}
        />
        <input
          type="button"
          class="button"
          value={locale.t('upload_button')}
          onclick={() => document.getElementById('__pickerQuickUpload')?.click()}
        />
      </label>
      <select id="albumSelect" bind:value={albumId}>
        <option value={0}>{locale.t('all_photos')}</option>
        {#each albums as album (album.id)}
          <option value={album.id}>{album.title}</option>
        {/each}
      </select>
    </div>
    <div id="attachment_insert">
      <div id="attachment_insert_count">
        <h4>{locale.count('is_x_photos', photos.length)}</h4>
      </div>
      {#if error}
        <p class="vk-error">{error}</p>
      {/if}
      <div class="photosList album-flex">
          {#each photos as photo (photo.id)}
          {@const href = `/photo${photo.owner_user_id}_${photo.id}`}
          <a
            class="album-photo"
            data-attachmentdata={`${photo.owner_user_id}_${photo.id}`}
            {href}
            onclick={(event) => {
              event.preventDefault();
              const ok = overlay.attachAndClose({
                kind: 'photo',
                id: `${photo.owner_user_id}_${photo.id}`,
                url: photo.url,
                title: photo.original_filename ?? '',
              });
              if (!ok) {
                overlay.openDialog({
                  unique: 'alert',
                  title: locale.t('error'),
                  text: locale.t('too_many_photos'),
                  panel: 'text',
                  buttons: [{ label: locale.t('ok') }],
                  closeOnButtons: true,
                });
              }
            }}
          >
            <MediaImg class="album-photo--image" src={photo.url} alt="" />
          </a>
        {/each}
      </div>
    </div>
  </div>
{/await}
