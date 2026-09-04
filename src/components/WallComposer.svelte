<script lang="ts">
  import { overlay, type DialogPanel } from '../stores/overlay.svelte';
  import { locale } from '../stores/locale.svelte';
  import { router } from '../lib/router.svelte';
  import { api } from '../services/api';
  import { auth } from '../stores/auth.svelte';

  let {
    draft = $bindable(''),
    posting = false,
    error = null,
    onsubmit,
  }: {
    draft?: string;
    posting?: boolean;
    error?: string | null;
    onsubmit: (event: Event) => void | Promise<void>;
  } = $props();

  let expanded = $state(false);
  let attachOpen = $state(false);

  const icon = (file: string) => `/assets/packages/static/openvk/img/oxygen-icons/16x16/${file}`;
  const photos = $derived(overlay.wallAttachments.filter((item) => item.kind === 'photo' || item.kind === 'video'));
  const vertical = $derived(
    overlay.wallAttachments.filter((item) => item.kind !== 'photo' && item.kind !== 'video'),
  );

  function growArea(node: HTMLTextAreaElement) {
    const grow = () => {
      node.style.height = '5px';
      node.style.height = `${node.scrollHeight + 5}px`;
    };
    node.addEventListener('input', grow);
    return () => node.removeEventListener('input', grow);
  }

  function toggleAttach(event: MouseEvent) {
    event.preventDefault();
    attachOpen = !attachOpen;
  }

  function tooMany() {
    overlay.openDialog({
      unique: 'alert',
      title: locale.t('error'),
      text: locale.t('too_many_photos'),
      panel: 'text',
      buttons: [{ label: locale.t('ok') }],
      closeOnButtons: true,
    });
  }

  async function graffitiBlob(): Promise<Blob | null> {
    const fromPad = await overlay.captureGraffiti?.();
    if (fromPad && fromPad.size > 0) {
      return fromPad;
    }
    const canvas = document.querySelector<HTMLCanvasElement>('[data-testid="graffiti-canvas"]');
    if (!canvas) {
      return null;
    }
    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), 'image/jpeg', 0.92);
    });
  }

  function pick(kind: DialogPanel) {
    attachOpen = false;
    if (kind === 'photo-picker') {
      overlay.openDialog({
        unique: 'photo_picker',
        title: locale.t('select_photo'),
        width: '630px',
        bodyStyle: 'height:335px;padding:0px;',
        panel: 'photo-picker',
        buttons: [{ label: locale.t('close') }],
        closeOnButtons: true,
      });
      return;
    }
    if (kind === 'video-picker') {
      overlay.openDialog({
        unique: 'video_picker',
        title: locale.t('selecting_video'),
        width: '630px',
        bodyStyle: 'height:335px;padding:0px;',
        panel: 'video-picker',
        buttons: [{ label: locale.t('close') }],
        closeOnButtons: true,
      });
      return;
    }
    if (kind === 'audio-picker') {
      overlay.openDialog({
        unique: 'audio_picker',
        title: locale.t('select_audio'),
        width: '630px',
        bodyStyle: 'height:335px;padding:0px;',
        panel: 'audio-picker',
        buttons: [{ label: locale.t('close') }],
        closeOnButtons: true,
      });
      return;
    }
    if (kind === 'document') {
      overlay.openDialog({
        unique: 'doc_picker',
        title: locale.t('document'),
        width: '630px',
        bodyStyle: 'height:335px;padding:0px;',
        panel: 'document',
        buttons: [{ label: locale.t('close') }],
        closeOnButtons: true,
      });
      return;
    }
    if (kind === 'notes') {
      overlay.openDialog({
        unique: 'note_picker',
        title: locale.t('select_note'),
        width: '340px',
        bodyStyle: 'height:335px;padding:0px;',
        panel: 'notes',
        buttons: [
          { label: locale.t('create_note'), action: () => router.goto('/notes') },
          { label: locale.t('close') },
        ],
        closeOnButtons: true,
      });
      return;
    }
    if (kind === 'graffiti') {
      const graffitiId = overlay.openDialog({
        unique: 'graffiti',
        title: locale.t('draw_graffiti'),
        width: '750px',
        panel: 'graffiti',
        closeOnButtons: false,
        warnOnExit: true,
        exitTitle: locale.t('exit_noun'),
        exitText: locale.t('exit_confirmation'),
        exitYes: locale.t('yes'),
        exitNo: locale.t('no'),
        buttons: [
          {
            label: locale.t('save'),
            action: async () => {
              const blob = await graffitiBlob();
              if (!blob || !auth.token) {
                return;
              }
              try {
                const file = new File([blob], 'graffiti.jpg', { type: 'image/jpeg' });
                const photo = await api.uploadPhoto(auth.token, file);
                const attached = overlay.addWallAttachment({
                  kind: 'photo',
                  id: `${photo.owner_user_id}_${photo.id}`,
                  url: photo.url,
                  title: locale.t('graffiti'),
                });
                if (!attached) {
                  tooMany();
                  return;
                }
                if (graffitiId != null) {
                  overlay.close(graffitiId);
                }
              } catch (caught) {
                overlay.openDialog({
                  unique: 'alert',
                  title: locale.t('error'),
                  text: caught instanceof Error ? caught.message : locale.t('error'),
                  panel: 'text',
                  buttons: [{ label: locale.t('ok') }],
                  closeOnButtons: true,
                });
              }
            },
          },
          {
            label: locale.t('cancel'),
            action: async () => {
              const leave = await overlay.confirm({
                unique: 'close_confirmation',
                title: locale.t('exit_noun'),
                text: locale.t('exit_confirmation'),
                yes: locale.t('yes'),
                no: locale.t('no'),
                first: 'no',
              });
              if (leave && graffitiId != null) {
                overlay.close(graffitiId);
              }
            },
          },
        ],
      });
      return;
    }
    if (kind === 'poll') {
      overlay.openDialog({
        unique: 'poll_editor',
        title: locale.t('create_poll'),
        panel: 'poll',
        buttons: [
          {
            label: locale.t('attach'),
            action: () => {
              const title = overlay.pollTitle.trim() || locale.t('poll');
              overlay.addWallAttachment({ kind: 'poll', id: `poll-${Date.now()}`, title });
            },
          },
          { label: locale.t('cancel') },
        ],
        closeOnButtons: true,
      });
      return;
    }
    if (kind === 'geo') {
      const geoId = overlay.openDialog({
        unique: 'geo_picker',
        title: locale.t('attach_geotag'),
        width: '80%',
        bodyStyle: 'padding: 10px;',
        panel: 'geo',
        closeOnButtons: false,
        buttons: [
          {
            label: locale.t('attach'),
            action: () => {
              if (!overlay.geoDraft) {
                return;
              }
              overlay.addWallAttachment({
                kind: 'geo',
                id: 'geo',
                title: overlay.geoDraft.name || locale.t('geo_place'),
              });
              if (geoId != null) {
                overlay.close(geoId);
              }
            },
          },
          {
            label: locale.t('cancel'),
            action: () => {
              if (geoId != null) {
                overlay.close(geoId);
              }
            },
          },
        ],
      });
      return;
    }
    overlay.openDialog({
      unique: 'source_picker',
      title: locale.t('add_source'),
      panel: 'source',
      buttons: [
        { label: locale.t('cancel') },
        {
          label: locale.t('set_source'),
          action: () => {
            if (overlay.sourceDraft.trim()) {
              overlay.addWallAttachment({
                kind: 'source',
                id: 'source',
                title: overlay.sourceDraft.trim(),
              });
            }
          },
        },
      ],
      closeOnButtons: true,
    });
  }

  async function attachImageFile(file: File) {
    if (!auth.token) {
      return;
    }
    try {
      const photo = await api.uploadPhoto(auth.token, file);
      if (
        !overlay.addWallAttachment({
          kind: 'photo',
          id: `${photo.owner_user_id}_${photo.id}`,
          url: photo.url,
          title: file.name,
        })
      ) {
        tooMany();
      }
    } catch {
      tooMany();
    }
  }

  function onPaste(event: ClipboardEvent) {
    const file = event.clipboardData?.files[0];
    if (!file || !file.type.startsWith('image/')) {
      return;
    }
    event.preventDefault();
    expanded = true;
    void attachImageFile(file);
  }

  function onDrop(event: DragEvent) {
    const file = event.dataTransfer?.files[0];
    if (!file || !file.type.startsWith('image/')) {
      return;
    }
    event.preventDefault();
    expanded = true;
    void attachImageFile(file);
  }

  function onDocClick(event: MouseEvent) {
    if (!attachOpen) {
      return;
    }
    const node = event.target;
    if (!(node instanceof Node)) {
      return;
    }
    if (document.getElementById('wallAttachmentMenu')?.contains(node)) {
      return;
    }
    if (node instanceof Element && node.closest('.menu_toggler')) {
      return;
    }
    attachOpen = false;
  }
</script>

<svelte:window onclick={onDocClick} />

<div
  id="write"
  class="model_content_textarea"
  style="padding: 5px 0;"
  data-testid="wall-composer"
  role="presentation"
  ondragover={(event) => event.preventDefault()}
  ondrop={onDrop}
>
  <form action="#" method="post" style="margin:0;" {onsubmit}>
    <textarea
      {@attach growArea}
      bind:value={draft}
      placeholder={locale.t('write')}
      name="text"
      class={['small-textarea', expanded && 'expanded-textarea']}
      autocomplete="off"
      style="width: 100%; resize: none;"
      onfocus={() => {
        expanded = true;
      }}
      onpaste={onPaste}
      onkeydown={(event) => {
        if (event.ctrlKey && event.key === 'Enter') {
          event.currentTarget.form?.requestSubmit();
        }
      }}
    ></textarea>
    {#if error}
      <p class="vk-error">{error}</p>
    {/if}
    <div class="post-buttons" style:display={expanded ? 'block' : 'none'}>
      <div class="post-horizontal">
        {#each photos as item (item.id)}
          <a
            href="/"
            class="upload-item"
            data-type={item.kind}
            data-id={item.id}
            onclick={(event) => event.preventDefault()}
          >
            <span
              class="upload-delete"
              role="button"
              tabindex="0"
              onclick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                overlay.removeWallAttachment(item.id);
              }}
              onkeydown={(event) => {
                if (event.key === 'Enter') {
                  overlay.removeWallAttachment(item.id);
                }
              }}>×</span
            >
            {#if item.kind === 'video'}
              <div class="play-button"><div class="play-button-ico"></div></div>
            {/if}
            {#if item.url}
              <img src={item.url} alt={item.title ?? ''} />
            {/if}
          </a>
        {/each}
      </div>
      <div class="post-vertical">
        {#each vertical as item (item.id)}
          <div class="vertical-attachment upload-item" data-type={item.kind} data-id={item.id}>
            <div class="vertical-attachment-content">
              {item.title ?? item.kind}
            </div>
            <div class="vertical-attachment-remove">
              <div
                id="small_remove_button"
                onclick={() => overlay.removeWallAttachment(item.id)}
                role="button"
                tabindex="0"
                onkeydown={(event) => event.key === 'Enter' && overlay.removeWallAttachment(item.id)}
              ></div>
            </div>
          </div>
        {/each}
      </div>
      <div class="post-opts">
        <label>
          <input type="checkbox" name="nsfw" bind:checked={overlay.nsfwDraft} />
          {locale.t('contains_nsfw')}
        </label>
      </div>
      <br />
      <input
        type="submit"
        value={posting ? locale.t('sending') : locale.t('write')}
        class="button"
        disabled={posting}
      />
      <div style="float: right; display: flex; flex-direction: column;">
        <a class="menu_toggler" href="/" onclick={toggleAttach}>{locale.t('attach')}</a>
        <div id="wallAttachmentMenu" class={attachOpen ? undefined : 'hidden'}>
          <a class="header menu_toggler" href="/" onclick={toggleAttach}>{locale.t('attach')}</a>
          <a id="__photoAttachment" href="/" onclick={(event) => (event.preventDefault(), pick('photo-picker'))}>
            <img src={icon('mimetypes/application-x-egon.png')} alt="" />
            {locale.t('photo')}
          </a>
          <a id="__videoAttachment" href="/" onclick={(event) => (event.preventDefault(), pick('video-picker'))}>
            <img src={icon('mimetypes/application-vnd.rn-realmedia.png')} alt="" />
            {locale.t('video')}
          </a>
          <a id="__audioAttachment" href="/" onclick={(event) => (event.preventDefault(), pick('audio-picker'))}>
            <img src={icon('mimetypes/audio-ac3.png')} alt="" />
            {locale.t('audio')}
          </a>
          <a id="__documentAttachment" href="/" onclick={(event) => (event.preventDefault(), pick('document'))}>
            <img src={icon('mimetypes/application-octet-stream.png')} alt="" />
            {locale.t('document')}
          </a>
          <a id="__notesAttachment" href="/" onclick={(event) => (event.preventDefault(), pick('notes'))}>
            <img src={icon('mimetypes/application-x-srt.png')} alt="" />
            {locale.t('note')}
          </a>
          <a href="/" onclick={(event) => (event.preventDefault(), pick('graffiti'))}>
            <img src={icon('actions/draw-brush.png')} alt="" />
            {locale.t('graffiti')}
          </a>
          <a href="/" onclick={(event) => (event.preventDefault(), pick('poll'))}>
            <img src={icon('actions/office-chart-bar-stacked.png')} alt="" />
            {locale.t('poll')}
          </a>
          <a id="__geoAttacher" href="/" onclick={(event) => (event.preventDefault(), pick('geo'))}>
            <img src={icon('apps/amarok.png')} alt="" />
            {locale.t('geo_place')}
          </a>
          <a id="__sourceAttacher" href="/" onclick={(event) => (event.preventDefault(), pick('source'))}>
            <img src={icon('actions/insert-link.png')} alt="" />
            {locale.t('source')}
          </a>
        </div>
      </div>
    </div>
  </form>
</div>
