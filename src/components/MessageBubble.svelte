<script lang="ts">
  import { localeForIntl } from '../lib/languages';
  import type { Message } from '../services/types';
  import { locale } from '../stores/locale.svelte';

  let { message, mine }: { message: Message; mine: boolean } = $props();
  const timeLabel = $derived(
    new Date(message.created_at).toLocaleTimeString(localeForIntl(locale.code), {
      hour: '2-digit',
      minute: '2-digit',
    }),
  );
</script>

<div class={['mb-2 flex', mine ? 'justify-end' : 'justify-start']}>
  <div
    class={[
      'max-w-[70%] border px-2 py-1.5',
      mine ? 'border-vk-border bg-vk-hover' : 'border-vk-border bg-vk-surface',
    ]}
  >
    <p class="m-0 whitespace-pre-wrap">{message.text}</p>
    <div class="mt-0.5 text-right text-vk-muted">{timeLabel}</div>
  </div>
</div>
