import type { Attachment } from 'svelte/attachments';

/** Pin floating chrome to `document.body` so `position: fixed` uses the viewport. */
export const toBody: Attachment<HTMLElement> = (node) => {
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
