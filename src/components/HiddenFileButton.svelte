<script lang="ts">
  let {
    accept,
    testId,
    disabled = false,
    label,
    multiple = false,
    onpick,
  }: {
    accept: string;
    testId: string;
    disabled?: boolean;
    label: string;
    multiple?: boolean;
    onpick: (files: FileList | null, input: HTMLInputElement) => void;
  } = $props();

  const uid = $props.id();
  const inputId = $derived(`${uid}-${testId}`);
</script>

<input
  id={inputId}
  class="upload"
  data-testid={testId}
  type="file"
  {accept}
  {multiple}
  {disabled}
  style="display: none;"
  onchange={(event) => {
    const node = event.currentTarget;
    onpick(node.files, node);
  }}
/>
<label class="button" for={inputId}>{label}</label>
