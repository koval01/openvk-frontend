import { rewriteMediaUrl } from '../services/types';

export type OverlayButton = {
  label: string;
  action?: () => void | Promise<void>;
};

export type ViewerPhoto = {
  id: string;
  url: string;
  title?: string;
  ownerId?: number;
  objectId?: number;
  liked?: boolean;
  count?: number;
};

export type DialogPanel =
  | 'text'
  | 'photo-picker'
  | 'video-picker'
  | 'audio-picker'
  | 'poll'
  | 'graffiti'
  | 'geo'
  | 'source'
  | 'notes'
  | 'document';

export type WallAttachment = {
  kind: 'photo' | 'video' | 'audio' | 'document' | 'note' | 'poll' | 'geo' | 'source';
  id: string;
  url?: string;
  title?: string;
};

export type DialogOverlay = {
  id: number;
  kind: 'dialog';
  unique?: string;
  title: string;
  width?: string;
  bodyStyle?: string;
  text?: string;
  panel: DialogPanel;
  buttons: OverlayButton[];
  closeOnButtons: boolean;
  warnOnExit?: boolean;
  exitTitle?: string;
  exitText?: string;
  exitYes?: string;
  exitNo?: string;
  hidden?: boolean;
};

export type PhotoOverlay = {
  id: number;
  kind: 'photo';
  unique?: string;
  photos: ViewerPhoto[];
  index: number;
  hidden?: boolean;
};

export type VideoOverlay = {
  id: number;
  kind: 'video';
  unique?: string;
  title: string;
  src: string;
  href?: string;
  commentsOpen?: boolean;
  hidden?: boolean;
  ownerId?: number;
  objectId?: number;
  liked?: boolean;
  count?: number;
};

export type OverlayItem = DialogOverlay | PhotoOverlay | VideoOverlay;

const MAX_WALL_ATTACHMENTS = 10;

let nextId = 1;

class OverlayStore {
  stack = $state<OverlayItem[]>([]);
  loader = $state(false);
  wallAttachments = $state<WallAttachment[]>([]);
  sourceDraft = $state('');
  geoDraft = $state<{ lat: number; lng: number; name: string } | null>(null);
  nsfwDraft = $state(false);
  pollTitle = $state('');
  captureGraffiti = $state<(() => Promise<Blob | null>) | null>(null);
  #loaderTimer = 0;

  visible = $derived(this.stack.filter((item) => !item.hidden));
  open = $derived(this.visible.length > 0);
  top = $derived(this.visible.at(-1) ?? null);

  flashLoader = () => {
    this.loader = true;
    window.clearTimeout(this.#loaderTimer);
    this.#loaderTimer = window.setTimeout(() => {
      this.loader = false;
    }, 180);
  };

  openDialog = (options: Omit<DialogOverlay, 'id' | 'kind'>): number | null => {
    if (options.unique && this.stack.some((item) => item.unique === options.unique)) {
      return null;
    }
    const id = nextId++;
    this.stack = [
      ...this.stack,
      {
        kind: 'dialog',
        closeOnButtons: options.closeOnButtons ?? true,
        panel: options.panel ?? 'text',
        buttons: options.buttons,
        title: options.title,
        width: options.width,
        bodyStyle: options.bodyStyle,
        text: options.text,
        unique: options.unique,
        warnOnExit: options.warnOnExit,
        exitTitle: options.exitTitle,
        exitText: options.exitText,
        exitYes: options.exitYes,
        exitNo: options.exitNo,
        id,
      },
    ];
    return id;
  };

  confirm = (options: {
    title: string;
    text: string;
    yes: string;
    no: string;
    unique?: string;
    first?: 'yes' | 'no';
  }): Promise<boolean> =>
    new Promise((resolve) => {
      if (options.unique && this.stack.some((item) => item.unique === options.unique)) {
        resolve(false);
        return;
      }
      const id = nextId++;
      const finish = (value: boolean) => {
        this.close(id);
        resolve(value);
      };
      const yes = { label: options.yes, action: () => finish(true) };
      const no = { label: options.no, action: () => finish(false) };
      this.stack = [
        ...this.stack,
        {
          id,
          kind: 'dialog',
          unique: options.unique ?? 'confirm',
          title: options.title,
          text: options.text,
          panel: 'text',
          closeOnButtons: false,
          buttons: options.first === 'no' ? [no, yes] : [yes, no],
        },
      ];
    });

  openPhoto = (photos: ViewerPhoto[], index = 0) => {
    if (photos.length === 0 || this.stack.some((item) => item.unique === 'photo_viewer')) {
      return;
    }
    this.stack = [
      ...this.stack,
      {
        id: nextId++,
        kind: 'photo',
        unique: 'photo_viewer',
        photos: photos.map((photo) => ({ ...photo, url: rewriteMediaUrl(photo.url) })),
        index: Math.max(0, Math.min(index, photos.length - 1)),
      },
    ];
  };

  openVideo = (video: Omit<VideoOverlay, 'id' | 'kind'>) => {
    if (this.stack.some((item) => item.unique === 'video_player')) {
      return;
    }
    this.stack = [
      ...this.stack,
      {
        id: nextId++,
        kind: 'video',
        unique: 'video_player',
        commentsOpen: false,
        ...video,
        src: rewriteMediaUrl(video.src),
      },
    ];
  };

  stepPhoto = (delta: number) => {
    const current = this.top;
    if (!current || current.kind !== 'photo' || current.photos.length < 2) {
      return;
    }
    const next = (current.index + delta + current.photos.length) % current.photos.length;
    this.stack = this.stack.map((item) =>
      item.id === current.id && item.kind === 'photo' ? { ...item, index: next } : item,
    );
  };

  toggleVideoComments = (id: number) => {
    this.stack = this.stack.map((item) =>
      item.id === id && item.kind === 'video' ? { ...item, commentsOpen: !item.commentsOpen } : item,
    );
  };

  minimizeVideo = (id: number) => {
    this.stack = this.stack.map((item) =>
      item.id === id && item.kind === 'video' ? { ...item, hidden: true, commentsOpen: false } : item,
    );
  };

  revealVideo = (id: number) => {
    this.stack = this.stack.map((item) =>
      item.id === id && item.kind === 'video' ? { ...item, hidden: false } : item,
    );
  };

  addWallAttachment = (attachment: WallAttachment): boolean => {
    if (this.wallAttachments.some((item) => item.id === attachment.id)) {
      return true;
    }
    if (this.wallAttachments.length >= MAX_WALL_ATTACHMENTS) {
      return false;
    }
    this.wallAttachments = [
      ...this.wallAttachments,
      {
        ...attachment,
        url: attachment.url ? rewriteMediaUrl(attachment.url) : attachment.url,
      },
    ];
    return true;
  };

  removeWallAttachment = (id: string) => {
    const removed = this.wallAttachments.find((item) => item.id === id);
    this.wallAttachments = this.wallAttachments.filter((item) => item.id !== id);
    if (removed?.kind === 'geo') {
      this.geoDraft = null;
    }
    if (removed?.kind === 'source') {
      this.sourceDraft = '';
    }
  };

  clearWallAttachments = () => {
    this.wallAttachments = [];
    this.sourceDraft = '';
    this.geoDraft = null;
    this.nsfwDraft = false;
    this.pollTitle = '';
  };

  attachAndClose = (attachment: WallAttachment): boolean => {
    const ok = this.addWallAttachment(attachment);
    if (ok) {
      this.closeTop();
    }
    return ok;
  };

  close = (id?: number) => {
    if (id === undefined) {
      this.stack = this.stack.slice(0, -1);
      return;
    }
    this.stack = this.stack.filter((item) => item.id !== id);
  };

  closeTop = () => {
    const top = this.stack.at(-1);
    if (!top) {
      return;
    }
    this.close(top.id);
  };

  dismiss = () => {
    this.stack = [];
  };
}

export const overlay = new OverlayStore();
