<script lang="ts">
  import HiddenFileButton from '../components/HiddenFileButton.svelte';
  import PageChrome from '../components/PageChrome.svelte';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { displayName, type AudioTrack } from '../services/types';
  import { audioPlayer } from '../stores/audio.svelte';
  import { auth } from '../stores/auth.svelte';
  import { locale } from '../stores/locale.svelte';

  type PendingTrack = { file: File; performer: string; name: string };

  let epoch = $state(0);
  let error = $state<string | null>(null);
  let uploading = $state(false);
  let pending = $state<PendingTrack[]>([]);

  const isUpload = $derived(router.route.act === 'upload');
  const ownerId = $derived(Number(router.route.userId ?? auth.user?.id ?? 0));
  const isOwn = $derived(Boolean(auth.user && ownerId === auth.user.id));
  const audiosHref = $derived(auth.user ? `/audios${auth.user.id}` : '/audio');

  const tracksPromise = $derived.by(() => {
    void epoch;
    return auth.token && ownerId
      ? api.audio(auth.token, ownerId).catch((): AudioTrack[] => [])
      : Promise.resolve([] as AudioTrack[]);
  });

  function stripExtension(name: string) {
    return name.replace(/\.[^.]+$/, '');
  }

  function guessTags(file: File): PendingTrack {
    const base = stripExtension(file.name);
    const parts = base.split(/\s[-–—]\s/);
    if (parts.length >= 2) {
      return { file, performer: parts[0], name: parts.slice(1).join(' - ') };
    }
    return { file, performer: locale.t('track_unknown'), name: base };
  }

  function queueFiles(files: FileList | null, input: HTMLInputElement) {
    const next = [...(files ?? [])].filter((file) => !file.type || file.type.startsWith('audio/'));
    input.value = '';
    if (next.length === 0) {
      error = locale.t('select_audio');
      return;
    }
    error = null;
    const names = new Set(pending.map((item) => item.file.name));
    pending = [
      ...pending,
      ...next.filter((file) => !names.has(file.name)).map(guessTags),
    ];
  }

  function dropPending(index: number) {
    pending = pending.filter((_, position) => position !== index);
  }

  async function uploadQueued() {
    if (!auth.token || pending.length === 0) {
      return;
    }
    uploading = true;
    error = null;
    try {
      for (const item of pending) {
        await api.uploadAudio(
          auth.token,
          item.file,
          item.performer.trim() || locale.t('track_unknown'),
          item.name.trim() || stripExtension(item.file.name),
        );
      }
      pending = [];
      router.goto(audiosHref);
    } catch (caught) {
      error = caught instanceof Error ? caught.message : locale.t('error');
    } finally {
      uploading = false;
    }
  }

  async function uploadSimple(files: FileList | null, input: HTMLInputElement) {
    const file = files?.[0];
    if (!file || !auth.token) {
      return;
    }
    const tags = guessTags(file);
    uploading = true;
    error = null;
    try {
      await api.uploadAudio(auth.token, file, tags.performer, tags.name);
      epoch += 1;
    } catch (caught) {
      error = caught instanceof Error ? caught.message : locale.t('error');
    } finally {
      uploading = false;
      input.value = '';
    }
  }

  async function remove(id: number) {
    if (!auth.token) {
      return;
    }
    try {
      await api.deleteAudio(auth.token, id);
      epoch += 1;
    } catch (caught) {
      error = caught instanceof Error ? caught.message : locale.t('error');
    }
  }
</script>

{#if isUpload}
  {#snippet header()}
    {#if auth.user}
      <a href="/id{auth.user.id}" onclick={(event) => router.handleClick(event, `/id${auth.user?.id}`)}>
        {displayName(auth.user)}
      </a>
      »
      <a href={audiosHref} onclick={(event) => router.handleClick(event, audiosHref)}>{locale.t('audios')}</a>
      »
    {/if}
    {locale.t('upload_audio')}
  {/snippet}
  <PageChrome title={locale.t('upload_audio')} {header}>
    <div class="container_gray" style="border: 0;margin-top: -10px;" data-testid="audio-upload-page">
      <div id="upload_container">
        {#if pending.length === 0}
          <div id="firstStep">
            <h4>{locale.t('select_audio')}</h4><br />
            <b>{locale.t('limits')}</b>
            <ul>
              <li>{locale.t('audio_requirements', 1, 30, 25)}</li>
              <li>{locale.t('audio_requirements_2')}</li>
            </ul>
            <div id="audio_upload">
              <HiddenFileButton
                testId="audio-file"
                accept="audio/mpeg,audio/wav,audio/ogg,audio/webm,audio/mp4,.mp3,.wav"
                multiple
                disabled={uploading}
                label={locale.t('upload_button')}
                onpick={(files, input) => queueFiles(files, input)}
              />
            </div><br />
            <span>
              {locale.t('you_can_also_add_audio_using')}
              <b>
                <a href="/search?section=audios" onclick={(event) => router.handleClick(event, '/search?section=audios')}
                  >{locale.t('search_audio_inst')}</a
                >
              </b>.
            </span>
          </div>
        {:else}
          <div id="lastStep">
            <div id="lastStepContainers">
              {#each pending as item, index (`${item.file.name}-${index}`)}
                <div class="upload_container_element">
                  <div class="upload_container_name">
                    <span>{item.file.name}</span>
                    <div
                      id="small_remove_button"
                      role="button"
                      tabindex="0"
                      onclick={() => dropPending(index)}
                      onkeydown={(event) => event.key === 'Enter' && dropPending(index)}
                    ></div>
                  </div>
                  <table class="flexible_table" cellspacing="7" cellpadding="0" border="0" align="center">
                    <tbody>
                      <tr>
                        <td width="120" valign="top"><span class="nobold">{locale.t('performer')}:</span></td>
                        <td
                          ><input
                            data-testid={`audio-artist-${index}`}
                            bind:value={item.performer}
                            type="text"
                            autocomplete="off"
                            maxlength="80"
                          /></td
                        >
                      </tr>
                      <tr>
                        <td width="120" valign="top"><span class="nobold">{locale.t('audio_name')}:</span></td>
                        <td
                          ><input
                            data-testid={`audio-title-${index}`}
                            bind:value={item.name}
                            type="text"
                            autocomplete="off"
                            maxlength="80"
                          /></td
                        >
                      </tr>
                    </tbody>
                  </table>
                </div>
              {/each}
            </div>
            <div id="lastStepButtons" style="text-align: center;margin-top: 10px;">
              <input
                class="button"
                type="button"
                data-testid="audio-upload-submit"
                value={uploading ? locale.t('sending') : locale.t('upload_button')}
                disabled={uploading}
                onclick={() => void uploadQueued()}
              />
              <HiddenFileButton
                testId="audio-file-more"
                accept="audio/mpeg,audio/wav,audio/ogg,audio/webm,audio/mp4,.mp3,.wav"
                multiple
                disabled={uploading}
                label={locale.t('select_another_file')}
                onpick={(files, input) => queueFiles(files, input)}
              />
            </div>
          </div>
        {/if}
        {#if error}
          <p class="vk-error" data-testid="audio-error">{error}</p>
        {/if}
      </div>
    </div>
  </PageChrome>
{:else}
  <PageChrome title={isOwn ? locale.t('my_audios') : locale.t('audios')}>
    <div class="verticalGrayTabsWrapper">
      <div class="verticalGrayTabs">
        <div class="with_padding">
          {#if auth.user}
            <a
              href={audiosHref}
              id={isOwn ? 'used' : 'ki'}
              onclick={(event) => router.handleClick(event, audiosHref)}>{locale.t('my_music')}</a
            >
            <a href="/player/upload" onclick={(event) => router.handleClick(event, '/player/upload')}
              >{locale.t('upload_audio')}</a
            >
          {/if}
        </div>
      </div>
    </div>
    {#await tracksPromise}
      <p>{locale.t('loading_audio')}</p>
    {:then tracks}
      {#if isOwn}
        <form class="container_gray" data-testid="audio-upload" onsubmit={(event) => event.preventDefault()}>
          <HiddenFileButton
            testId="audio-file"
            accept="audio/mpeg,audio/wav,audio/ogg,audio/webm,audio/mp4,.mp3,.wav"
            disabled={uploading}
            label={locale.t('upload_audio')}
            onpick={(files, input) => void uploadSimple(files, input)}
          />
        </form>
      {/if}
      {#if error}
        <p class="vk-error" data-testid="audio-error">{error}</p>
      {/if}
      {#each tracks as track (track.id)}
        <div data-testid={`audio-${track.id}`}>
          <button
            class="vk-profile-link"
            type="button"
            data-testid={`play-audio-${track.id}`}
            onclick={() =>
              audioPlayer.play({
                id: track.id,
                artist: track.artist,
                title: track.title,
                durationMs: track.duration_ms,
                src: track.src,
              })}
          >
            {track.artist} — {track.title}
          </button>
          {#if isOwn}
            <button class="link" type="button" data-testid={`delete-audio-${track.id}`} onclick={() => remove(track.id)}
              >{locale.t('delete')}</button
            >
          {/if}
        </div>
      {:else}
        <div class="ovk-empty">{locale.t('no_audio_yet')}</div>
      {/each}
    {/await}
  </PageChrome>
{/if}
