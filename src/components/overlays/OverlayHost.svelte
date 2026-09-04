<script lang="ts">
  import AudioPicker from './AudioPicker.svelte';
  import GeoPicker from './GeoPicker.svelte';
  import GraffitiPad from './GraffitiPad.svelte';
  import PhotoPicker from './PhotoPicker.svelte';
  import PollEditor from './PollEditor.svelte';
  import VideoPicker from './VideoPicker.svelte';
  import Comments from '../Comments.svelte';
  import DocumentPicker from './DocumentPicker.svelte';
  import LikeButton from '../LikeButton.svelte';
  import { interceptUnlessModified, router } from '../../lib/router.svelte';
  import { overlay, type DialogOverlay } from '../../stores/overlay.svelte';
  import { locale } from '../../stores/locale.svelte';
  import { parsePrettyId, photoPermalink, rewriteMediaUrl, videoPermalink } from '../../services/types';
  import type { Attachment } from 'svelte/attachments';

  const toBody: Attachment<HTMLElement> = (node) => {
    const marker = document.createComment('ovk-overlay');
    node.parentNode?.insertBefore(marker, node);
    document.body.appendChild(node);
    return () => {
      if (marker.parentNode) {
        marker.parentNode.insertBefore(node, marker);
        marker.remove();
      } else {
        node.remove();
      }
    };
  };

  function parsePretty(id: string) {
    return parsePrettyId(id);
  }

  function photoPageHref(photo: { id: string; ownerId?: number; objectId?: number } | undefined) {
    if (!photo) {
      return null;
    }
    if (photo.ownerId && photo.objectId) {
      return photoPermalink(photo.ownerId, photo.objectId);
    }
    return parsePrettyId(photo.id) ? `/photo${photo.id}` : null;
  }

  function keepOverlay(event: MouseEvent) {
    interceptUnlessModified(event);
  }

  $effect(() => {
    document.body.classList.toggle('dimmed', overlay.open);
    document.documentElement.style.overflowY = overlay.open ? 'hidden' : 'scroll';
    return () => {
      document.body.classList.remove('dimmed');
      document.documentElement.style.overflowY = '';
    };
  });

  async function press(box: DialogOverlay, button: DialogOverlay['buttons'][number]) {
    await button.action?.();
    if (box.closeOnButtons) {
      overlay.close(box.id);
    }
  }

  async function requestClose(box: DialogOverlay) {
    if (box.closeOnButtons) {
      overlay.close(box.id);
      return;
    }
    if (!box.warnOnExit) {
      return;
    }
    const leave = await overlay.confirm({
      unique: 'close_confirmation',
      title: box.exitTitle ?? locale.t('exit_noun'),
      text: box.exitText ?? locale.t('exit_confirmation'),
      no: box.exitNo ?? locale.t('no'),
      yes: box.exitYes ?? locale.t('yes'),
      first: 'no',
    });
    if (leave) {
      overlay.close(box.id);
    }
  }

  function onKey(event: KeyboardEvent) {
    if (event.key !== 'Escape' || !overlay.top) {
      return;
    }
    const top = overlay.top;
    if (top.kind === 'dialog') {
      void requestClose(top);
      return;
    }
    overlay.close(top.id);
  }

  function onDimmer(event: MouseEvent) {
    if (!(event.target instanceof HTMLElement) || !event.target.classList.contains('dimmer')) {
      return;
    }
    const top = overlay.top;
    if (!top) {
      return;
    }
    if (top.kind === 'dialog') {
      void requestClose(top);
      return;
    }
    overlay.close(top.id);
  }
</script>

<svelte:window onkeydown={onKey} />

<div class="dimmer" {@attach toBody} onclick={onDimmer} role="presentation">
  <div id="clickable"></div>
</div>
<div id="ajloader" class={['loader', overlay.loader && 'shown']}>
  <img src="/assets/packages/static/openvk/img/loading_mini.gif" alt="" />
</div>

{#each overlay.stack as box (box.id)}
  {#if box.kind === 'dialog' && !box.hidden}
    <div class="ovk-diag-cont ovk-msg-all" data-id={box.id} style:width={box.width ?? '420px'} {@attach toBody}>
      <div class="ovk-diag">
        <div class="ovk-diag-head">{box.title}</div>
        <div class="ovk-diag-body" style={box.bodyStyle}>
          {#if box.panel === 'photo-picker'}
            <PhotoPicker />
          {:else if box.panel === 'video-picker'}
            <VideoPicker />
          {:else if box.panel === 'audio-picker'}
            <AudioPicker />
          {:else if box.panel === 'poll'}
            <PollEditor />
          {:else if box.panel === 'graffiti'}
            <GraffitiPad />
          {:else if box.panel === 'geo'}
            <GeoPicker />
          {:else if box.panel === 'source'}
            <div id="source_flex_kunteynir">
              <span style="white-space: pre-line">{locale.t('set_source_tip').replaceAll('<br>', '\n')}</span>
              <input type="text" maxlength="400" placeholder="..." bind:value={overlay.sourceDraft} />
            </div>
          {:else if box.panel === 'notes'}
            <div class="attachment_selector">
              <div id="attachment_insert" style="height: 325px;">
                <div class="notesInsert ovk-empty">{locale.t('nothing_here')}</div>
              </div>
            </div>
          {:else if box.panel === 'document'}
            <DocumentPicker />
          {:else}
            {box.text}
          {/if}
        </div>
        <div class="ovk-diag-action">
          {#each box.buttons as button, index (index)}
            <button
              class="button"
              type="button"
              data-testid="ovk-diag-btn-{index}"
              onclick={() => void press(box, button)}>{button.label}</button
            >
          {/each}
        </div>
      </div>
    </div>
  {:else if box.kind === 'photo'}
    {@const photo = box.photos[box.index]}
    {@const photoHref = photoPageHref(photo)}
    <div class="ovk-photo-view-dimmer ovk-msg-all" data-id={box.id}>
      <div
        class="ovk-photo-view-overlay ovk-photo-view-overlay-left"
        role="button"
        tabindex="0"
        onclick={() => overlay.close(box.id)}
        onkeydown={(event) => event.key === 'Enter' && overlay.close(box.id)}
      ></div>
      <div
        class="ovk-photo-view-overlay ovk-photo-view-overlay-right"
        role="button"
        tabindex="0"
        onclick={() => overlay.close(box.id)}
        onkeydown={(event) => event.key === 'Enter' && overlay.close(box.id)}
      >
        <div class="ovk-photo-close-icon"></div>
      </div>
      <div class="ovk-photo-view">
        <div class="photo_com_title">
          <text id="photo_com_title_photos">
            {#if box.photos.length > 1}
              {locale.t('photo_x_from_y', box.index + 1, box.photos.length)}
            {:else}
              {locale.t('photo')}
            {/if}
          </text>
          <div>
            {#if photoHref}
              <a href={photoHref} onclick={(event) => router.handleClick(event, photoHref)}
                >{locale.t('to_page')}</a
              >
              |
            {/if}
            <a
              id="ovk-photo-close"
              href={photoHref ?? '/'}
              onclick={(event) => (event.preventDefault(), overlay.close(box.id))}>{locale.t('close')}</a
            >
          </div>
        </div>
        <div class="photo_viewer_wrapper">
          <div
            class="ovk-photo-slide-left"
            role="button"
            tabindex="0"
            onclick={() => overlay.stepPhoto(-1)}
            onkeydown={(event) => event.key === 'Enter' && overlay.stepPhoto(-1)}
          ></div>
          <div
            class="ovk-photo-slide-right"
            role="button"
            tabindex="0"
            onclick={() => overlay.stepPhoto(1)}
            onkeydown={(event) => event.key === 'Enter' && overlay.stepPhoto(1)}
          ></div>
          {#if photo && photoHref}
            <a href={photoHref} onclick={keepOverlay}>
              <img src={rewriteMediaUrl(photo.url)} id="ovk-photo-img" alt={photo.title ?? ''} />
            </a>
          {:else if photo}
            <img src={rewriteMediaUrl(photo.url)} id="ovk-photo-img" alt={photo.title ?? ''} />
          {/if}
        </div>
        <div class="ovk-photo-details">
          <div class="media-page-wrapper-description">
            <div class="upload_time">
              {locale.t('info_upload_date')}
              {#if photo?.title}
                | {photo.title}
              {/if}
              {#if photo?.ownerId && photo.objectId}
                <LikeButton
                  id={`${photo.ownerId}_${photo.objectId}`}
                  type="photo"
                  tidy
                  liked={photo.liked}
                  count={photo.count}
                />
              {/if}
            </div>
          </div>
          <hr />
          <div class="media-page-wrapper-details">
            <div class="media-page-wrapper-comments">
              {#if photo?.ownerId && photo.objectId}
                <Comments target="photo" ownerId={photo.ownerId} objectId={photo.objectId} />
              {:else if photo && parsePretty(photo.id)}
                {@const ids = parsePretty(photo.id)!}
                <Comments target="photo" ownerId={ids.ownerId} objectId={ids.objectId} />
              {:else}
                <h4>{locale.t('comments')} (0)</h4>
              {/if}
            </div>
            {#if photoHref}
              <div class="media-page-wrapper-actions">
                <a
                  href={photoHref}
                  class="profile_link"
                  style="display:block;width:96%;"
                  onclick={(event) => router.handleClick(event, photoHref)}>{locale.t('to_page')}</a
                >
                <a
                  href={rewriteMediaUrl(photo?.url ?? '')}
                  class="profile_link"
                  target="_blank"
                  rel="noreferrer"
                  style="display:block;width:96%;">{locale.t('open_original')}</a
                >
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {:else if box.kind === 'video' && box.hidden}
    <div class="miniplayer" style="left:100px;top:0px;">
      <div class="miniplayer-head">
        <b>{box.title}</b>
        <div class="miniplayer-head-buttons">
          <div
            id="__miniplayer_return"
            role="button"
            tabindex="0"
            onclick={() => overlay.revealVideo(box.id)}
            onkeydown={(event) => event.key === 'Enter' && overlay.revealVideo(box.id)}
          ></div>
          <div
            id="__miniplayer_close"
            role="button"
            tabindex="0"
            onclick={() => overlay.close(box.id)}
            onkeydown={(event) => event.key === 'Enter' && overlay.close(box.id)}
          ></div>
        </div>
      </div>
      <div class="miniplayer-body">
        <video controls src={rewriteMediaUrl(box.src)} style="width:100%;height:100%;">
          <track kind="captions" />
        </video>
      </div>
    </div>
  {:else if box.kind === 'video'}
    {@const videoHref =
      box.href ||
      (box.ownerId && box.objectId ? videoPermalink(box.ownerId, box.objectId) : '')}
    <div class="ovk-photo-view-dimmer ovk-msg-all" data-id={box.id}>
      <div
        class="ovk-photo-view-overlay ovk-photo-view-overlay-left"
        role="button"
        tabindex="0"
        onclick={() => overlay.close(box.id)}
        onkeydown={(event) => event.key === 'Enter' && overlay.close(box.id)}
      ></div>
      <div
        class="ovk-photo-view-overlay ovk-photo-view-overlay-right"
        role="button"
        tabindex="0"
        onclick={() => overlay.close(box.id)}
        onkeydown={(event) => event.key === 'Enter' && overlay.close(box.id)}
      >
        <div class="ovk-photo-close-icon"></div>
      </div>
      <div class="ovk-modal-player-window">
        <div id="ovk-player-part">
          <div class="top-part">
            {#if videoHref}
              <a href={videoHref} onclick={(event) => router.handleClick(event, videoHref)}>{box.title}</a>
            {:else}
              <b>{box.title}</b>
            {/if}
            <div class="top-part-buttons">
              <a
                id="__modal_player_minimize"
                class="hoverable_color"
                href="/"
                onclick={(event) => (event.preventDefault(), overlay.minimizeVideo(box.id))}
                >{locale.t('hide_player')}</a
              >
              |
              <a
                id="__modal_player_close"
                class="hoverable_color"
                href="/"
                onclick={(event) => (event.preventDefault(), overlay.close(box.id))}>{locale.t('close')}</a
              >
            </div>
          </div>
          <div class="center-part">
            <video controls src={rewriteMediaUrl(box.src)} style="width:100%;height:100%;">
              <track kind="captions" />
            </video>
          </div>
          <div class="bottom-part">
            <a
              id="__toggle_comments"
              class="hoverable_color"
              href="/"
              onclick={(event) => (event.preventDefault(), overlay.toggleVideoComments(box.id))}
              >{box.commentsOpen ? locale.t('close_comments') : locale.t('show_comments')}</a
            >
            {#if box.ownerId && box.objectId}
              |
              <LikeButton
                id={`${box.ownerId}_${box.objectId}`}
                type="video"
                liked={box.liked}
                count={box.count}
              />
            {/if}
            {#if videoHref}
              |
              <a
                href={videoHref}
                class="hoverable_color"
                onclick={(event) => router.handleClick(event, videoHref)}>{locale.t('to_page')}</a
              >
            {/if}
          </div>
        </div>
        <div id="ovk-player-info" class={box.commentsOpen ? 'shown' : undefined}>
          {#if box.commentsOpen}
            <div class="ovk-vid-details">
              {#if box.ownerId && box.objectId}
                <Comments target="video" ownerId={box.ownerId} objectId={box.objectId} />
              {:else}
                <h4>{locale.t('comments')} (0)</h4>
              {/if}
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}
{/each}

