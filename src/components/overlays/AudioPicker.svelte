<script lang="ts">
  import { api } from '../../services/api';
  import type { AudioTrack } from '../../services/types';
  import { overlay } from '../../stores/overlay.svelte';
  import { auth } from '../../stores/auth.svelte';
  import { locale } from '../../stores/locale.svelte';

  const tracksPromise = $derived(
    auth.token && auth.user
      ? api.audio(auth.token, auth.user.id)
      : Promise.resolve([] as AudioTrack[]),
  );
</script>

<div class="attachment_selector">
  <div id="attachment_insert">
    {#await tracksPromise}
      {locale.t('loading_audio')}
    {:then tracks}
      <div class="audiosInsert">
        {#each tracks as track (track.id)}
          <a
            href="/audio{track.owner_user_id}_{track.id}"
            onclick={(event) => {
              event.preventDefault();
              overlay.attachAndClose({
                kind: 'audio',
                id: `${track.owner_user_id}_${track.id}`,
                url: track.src,
                title: `${track.artist} — ${track.title}`,
              });
            }}
          >
            {track.artist} — {track.title}
          </a>
        {:else}
          {locale.t('no_audio_yet')}
        {/each}
      </div>
    {:catch}
      <p class="vk-error">{locale.t('loading_audio')}</p>
    {/await}
  </div>
</div>
