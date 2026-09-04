<script lang="ts">
  import { overlay } from '../../stores/overlay.svelte';
  import { locale } from '../../stores/locale.svelte';

  let error = $state<string | null>(null);

  function pick(event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) {
      return;
    }
    error = null;
    const ok = overlay.attachAndClose({
      kind: 'document',
      id: `doc-${file.name}-${file.size}`,
      title: file.name,
    });
    if (!ok) {
      error = locale.t('too_many_photos');
    }
  }
</script>

<div class="attachment_selector">
  <div class="topGrayBlock display_flex_row">
    <input
      id="__docQuickUpload"
      type="file"
      style="display: none;"
      onchange={pick}
    />
    <input
      class="button"
      type="button"
      value={locale.t('upload_button')}
      onclick={() => document.getElementById('__docQuickUpload')?.click()}
    />
  </div>
  {#if error}
    <p class="vk-error">{error}</p>
  {/if}
  <div id="attachment_insert"></div>
</div>
