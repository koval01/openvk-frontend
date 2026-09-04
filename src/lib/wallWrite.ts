import { api } from '../services/api';
import {
  parsePrettyId,
  type WallAttachment as PostAttachment,
  type WriteWallBody,
} from '../services/types';
import { overlay, type WallAttachment as Chip } from '../stores/overlay.svelte';

export function composerHasContent(draft: string): boolean {
  return Boolean(draft.trim() || overlay.wallAttachments.length || overlay.geoDraft);
}

export function writeBodyFromComposer(content: string): WriteWallBody {
  const attachments: PostAttachment[] = [];
  let geo = overlay.wallAttachments.some((item) => item.kind === 'geo') ? overlay.geoDraft : null;
  let source: string | null = null;
  for (const chip of overlay.wallAttachments) {
    if (chip.kind === 'geo') {
      continue;
    }
    if (chip.kind === 'source') {
      source = chip.title?.trim() || overlay.sourceDraft.trim() || null;
      continue;
    }
    attachments.push(chipToAttachment(chip));
  }
  if (!source) {
    source = overlay.sourceDraft.trim() || null;
  }
  return {
    content: content.trim(),
    attachments,
    geo,
    source,
    nsfw: overlay.nsfwDraft,
  };
}

export async function submitWall(ownerId: number, content: string, token: string) {
  const post = await api.writeWall(ownerId, writeBodyFromComposer(content), token);
  overlay.clearWallAttachments();
  return post;
}

function chipToAttachment(chip: Chip): PostAttachment {
  const parsed = parsePrettyId(chip.id);
  return {
    kind: chip.kind,
    owner_id: parsed?.ownerId ?? 0,
    object_id: parsed?.objectId ?? 0,
    url: chip.url ?? '',
    title: chip.title ?? '',
    src: chip.url ?? '',
  };
}
