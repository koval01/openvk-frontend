<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { CAMERA_FALLBACK, mediaSrc } from '../services/types';

  let {
    src,
    alt = '',
    ...rest
  }: Omit<HTMLImgAttributes, 'src'> & { src?: string | null } = $props();

  const requested = $derived(mediaSrc(typeof src === 'string' ? src : null));
  let failedFor = $state<string | null>(null);
  const resolved = $derived(failedFor === requested ? CAMERA_FALLBACK : requested);

  function onerror() {
    if (requested !== CAMERA_FALLBACK) {
      failedFor = requested;
    }
  }
</script>

<img {...rest} {alt} src={resolved} {onerror} />
