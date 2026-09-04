<script lang="ts">
  import LocaleHtml from './LocaleHtml.svelte';

  type Props = {
    title: string;
    message: string;
    kind?: 'err' | 'succ' | 'yellow';
    testid?: string;
  };

  let { title, message, kind = 'err', testid }: Props = $props();
</script>

<div class="msg msg_{kind}" data-testid={testid}>
  <b>{title}</b><br />
  <LocaleHtml html={message} />
</div>
