<script lang="ts">
  import { overlay } from '../../stores/overlay.svelte';
  import { locale } from '../../stores/locale.svelte';

  let color = $state('#111111');
  let size = $state(4);
  let drawing = false;
  let last: { x: number; y: number } | null = null;

  function pad(node: HTMLCanvasElement) {
    const ctx = node.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, node.width, node.height);
    }
    overlay.captureGraffiti = () =>
      new Promise((resolve) => {
        node.toBlob((blob) => resolve(blob), 'image/jpeg', 0.92);
      });
    return () => {
      overlay.captureGraffiti = null;
    };
  }

  function point(event: PointerEvent) {
    const node = event.currentTarget as HTMLCanvasElement;
    const box = node.getBoundingClientRect();
    return {
      x: ((event.clientX - box.left) / box.width) * node.width,
      y: ((event.clientY - box.top) / box.height) * node.height,
    };
  }

  function stroke(event: PointerEvent) {
    const node = event.currentTarget as HTMLCanvasElement;
    const ctx = node.getContext('2d');
    if (!ctx || !drawing) {
      return;
    }
    const next = point(event);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    if (last) {
      ctx.moveTo(last.x, last.y);
    } else {
      ctx.moveTo(next.x, next.y);
    }
    ctx.lineTo(next.x, next.y);
    ctx.stroke();
    last = next;
  }

  function clearPad(event: MouseEvent) {
    const root = (event.currentTarget as HTMLElement).closest('#ovkDraw');
    const node = root?.querySelector('canvas');
    const ctx = node?.getContext('2d');
    if (!node || !ctx) {
      return;
    }
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, node.width, node.height);
  }
</script>

<div id="ovkDraw">
  <div class="graffiti-tools">
    <label>
      {locale.t('graffiti')}
      <input type="color" bind:value={color} />
    </label>
    <input type="range" min="2" max="24" bind:value={size} />
    <input type="button" class="button" value={locale.t('delete')} onclick={clearPad} />
  </div>
  <canvas
    {@attach pad}
    data-testid="graffiti-canvas"
    width="720"
    height="420"
    onpointerdown={(event) => {
      drawing = true;
      last = point(event);
      event.currentTarget.setPointerCapture(event.pointerId);
      stroke(event);
    }}
    onpointermove={stroke}
    onpointerup={() => {
      drawing = false;
      last = null;
    }}
    onpointercancel={() => {
      drawing = false;
      last = null;
    }}
  ></canvas>
</div>

<style>
  #ovkDraw {
    min-height: 480px;
    background: #fff;
  }

  canvas {
    display: block;
    width: 100%;
    height: 420px;
    touch-action: none;
    cursor: crosshair;
    border: 1px solid #ccc;
    background: #fff;
  }

  .graffiti-tools {
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 6px 0;
  }
</style>
