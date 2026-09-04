export type PrivacyLevel = 'everyone' | 'friends' | 'nobody';

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  screen_name?: string | null;
  status?: string | null;
  city?: string | null;
  email?: string | null;
  phone?: string | null;
  avatar_url?: string | null;
  verified: boolean;
  privacy_wall: PrivacyLevel;
  privacy_messages: PrivacyLevel;
  privacy_photos?: PrivacyLevel;
  privacy_audio?: PrivacyLevel;
  privacy_profile?: PrivacyLevel;
  privacy_friends?: PrivacyLevel;
  created_at: string;
  coins?: number;
  rating?: number;
  role?: string;
  banned?: boolean;
  ban_reason?: string | null;
  banned_until?: string | null;
  support_banned?: boolean;
  support_ban_reason?: string | null;
  posting_allowed?: boolean;
  messaging_allowed?: boolean;
};

export type WallAttachment = {
  kind: string;
  owner_id: number;
  object_id: number;
  url: string;
  title: string;
  src: string;
};

export type GeoPoint = {
  lat: number;
  lng: number;
  name: string;
};

export type WallPost = {
  id: number;
  target_id: number;
  author_id: number;
  author: User;
  target: User;
  content: string;
  permalink: string;
  created_at: string;
  attachments: WallAttachment[];
  geo: GeoPoint | null;
  source: string | null;
  nsfw: boolean;
  comment_count: number;
  club: Group | null;
  like_count: number;
  liked: boolean;
};

export type WriteWallBody = {
  content: string;
  attachments: WallAttachment[];
  geo?: GeoPoint | null;
  source?: string | null;
  nsfw: boolean;
};

export function wallHref(post: Pick<WallPost, 'target_id' | 'id' | 'permalink'>): string {
  return `/${post.permalink || `wall${post.target_id}_${post.id}`}`;
}

export function ownerHref(ownerId: number): string {
  return ownerId < 0 ? `/club${-ownerId}` : `/id${ownerId}`;
}

export function parsePrettyId(value: string): { ownerId: number; objectId: number } | null {
  const match = /^(-?\d+)_(\d+)$/.exec(value);
  if (!match) {
    return null;
  }
  return { ownerId: Number(match[1]), objectId: Number(match[2]) };
}

export function photoPermalink(ownerId: number, objectId: number): string {
  return `/photo${ownerId}_${objectId}`;
}

export function videoPermalink(ownerId: number, objectId: number): string {
  return `/video${ownerId}_${objectId}`;
}

export function mediaPermalink(
  kind: 'photo' | 'video',
  ownerId: number,
  objectId: number,
): string {
  return kind === 'photo' ? photoPermalink(ownerId, objectId) : videoPermalink(ownerId, objectId);
}

export type LikeKind = 'post' | 'photo' | 'video' | 'comment';

export type LikeState = {
  liked: boolean;
  count: number;
};

export function likePageHref(kind: LikeKind, id: string): string {
  if (kind === 'post') {
    return `/wall${id}/like`;
  }
  if (kind === 'comment') {
    return `/comment${id}/like`;
  }
  return `/${kind}${id}/like`;
}

export function likersPageHref(kind: LikeKind, id: string): string | null {
  if (kind === 'comment') {
    return null;
  }
  if (kind === 'post') {
    return `/wall${id}/likes`;
  }
  return `/${kind}${id}/likes`;
}

export function likeTargetPermalink(kind: string, ownerId: number, objectId: number): string {
  if (kind === 'wall' || kind === 'post') {
    return `/wall${ownerId}_${objectId}`;
  }
  if (kind === 'photo') {
    return `/photo${ownerId}_${objectId}`;
  }
  if (kind === 'video') {
    return `/video${ownerId}_${objectId}`;
  }
  return '/feed';
}

export type Comment = {
  id: number;
  author_id: number;
  author: User;
  content: string;
  created_at: string;
  like_count: number;
  liked: boolean;
};

export type CommentTarget = 'wall' | 'photo' | 'video';

export type SiteNotification = {
  id: number;
  kind: string;
  actor_id: number | null;
  actor: User | null;
  entity_type: string | null;
  entity_id: number | null;
  payload_json: string;
  href: string;
  read_at: string | null;
  created_at: string;
};

export type Message = {
  id: number;
  peer_id: number;
  author_id: number;
  text: string;
  created_at: string;
};

export type AudioTrack = {
  id: number;
  media_id: number;
  artist: string;
  title: string;
  duration_ms: number;
  owner_user_id: number;
  src: string;
};

export type Photo = {
  id: number;
  album_id: number;
  owner_user_id: number;
  mime: string;
  size_bytes: number;
  width?: number | null;
  height?: number | null;
  original_filename?: string | null;
  url: string;
  like_count: number;
  liked: boolean;
};

export type Album = {
  id: number;
  title: string;
  description?: string | null;
  owner_user_id: number;
  created_at: string;
  photo_count: number;
  cover_url?: string | null;
  photos: Photo[];
};

export type Video = {
  id: number;
  media_id?: number | null;
  title: string;
  description?: string | null;
  status: string;
  owner_user_id: number;
  src?: string | null;
  like_count: number;
  liked: boolean;
};

export type Group = {
  id: number;
  slug: string;
  name: string;
  about?: string | null;
  kind: string;
  owner_id: number;
  created_at: string;
  avatar_url?: string | null;
  members: number;
};

export type TokenResponse = {
  token: string;
  token_type: string;
  user_id: number;
};

export type HealthResponse = {
  status: 'ok' | 'degraded';
  postgres: boolean;
  redis: boolean;
  version: string;
};

export type PopularGroup = {
  id: number;
  name: string;
  members: number;
};

export type InstanceAbout = {
  users: number;
  online_users: number;
  active_users: number;
  groups: number;
  wall_posts: number;
  popular_groups: PopularGroup[];
};

export type UpdateAccount = {
  first_name: string;
  last_name: string;
  email: string | null;
  phone: string | null;
  city: string | null;
  privacy_wall: PrivacyLevel;
  privacy_messages: PrivacyLevel;
  privacy_photos?: PrivacyLevel | null;
  privacy_audio?: PrivacyLevel | null;
  privacy_profile?: PrivacyLevel | null;
  privacy_friends?: PrivacyLevel | null;
  /** Omit to leave unchanged. Empty string clears the status. */
  status?: string | null;
};

export function accountWrite(user: User, extra: Partial<UpdateAccount> = {}): UpdateAccount {
  const patch: UpdateAccount = {
    first_name: extra.first_name ?? user.first_name,
    last_name: extra.last_name ?? user.last_name,
    email: extra.email !== undefined ? extra.email : (user.email ?? null),
    phone: extra.phone !== undefined ? extra.phone : (user.phone ?? null),
    city: extra.city !== undefined ? extra.city : (user.city ?? null),
    privacy_wall: extra.privacy_wall ?? user.privacy_wall,
    privacy_messages: extra.privacy_messages ?? user.privacy_messages,
    privacy_photos: extra.privacy_photos ?? user.privacy_photos ?? 'everyone',
    privacy_audio: extra.privacy_audio ?? user.privacy_audio ?? 'everyone',
    privacy_profile: extra.privacy_profile ?? user.privacy_profile ?? 'everyone',
    privacy_friends: extra.privacy_friends ?? user.privacy_friends ?? 'everyone',
  };
  if ('status' in extra) {
    patch.status = extra.status ?? '';
  }
  return patch;
}

export function displayName(user: User): string {
  return `${user.first_name} ${user.last_name}`.trim();
}

export const CAMERA_FALLBACK = '/assets/packages/static/openvk/img/camera_200.png';

const LOOPBACK_HOSTS = new Set(['localhost', '127.0.0.1', '::1']);

/** Bucket bytes are proxied at `/media`. Absolute 127.0.0.1 URLs on a localhost tab trip CSP. */
export function rewriteMediaUrl(path: string): string {
  if (!path || path.startsWith('data:') || path.startsWith('blob:') || path.startsWith('/media/')) {
    return path;
  }
  try {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'http://127.0.0.1';
    const url = new URL(path, origin);
    if (!url.pathname.startsWith('/media/')) {
      return path;
    }
    const host = url.hostname.replace(/^\[|\]$/g, '');
    const pageHost =
      typeof window !== 'undefined' ? window.location.hostname.replace(/^\[|\]$/g, '') : '';
    if (LOOPBACK_HOSTS.has(host) || (pageHost !== '' && host === pageHost)) {
      return `${url.pathname}${url.search}`;
    }
  } catch {
    return path;
  }
  return path;
}

export function mediaSrc(path: string | null | undefined): string {
  if (!path) {
    return CAMERA_FALLBACK;
  }
  return rewriteMediaUrl(path);
}

export type Gift = {
  id: number;
  category_id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
};

export type GiftCategory = {
  id: number;
  slug: string;
  name: string;
  description: string;
  gifts: Gift[];
};

export type UserGift = {
  id: number;
  gift_id: number;
  gift: Gift;
  sender_id: number;
  sender: User | null;
  receiver_id: number;
  caption: string | null;
  anonymous: boolean;
  created_at: string;
};

export type TicketReply = {
  id: number;
  ticket_id: number;
  author_id: number;
  author: User;
  content: string;
  from_agent: boolean;
  created_at: string;
};

export type Ticket = {
  id: number;
  author_id: number;
  author: User;
  subject: string;
  content: string;
  status: string;
  created_at: string;
  replies: TicketReply[];
};

export type SiteReport = {
  id: number;
  author_id: number;
  author: User;
  target_type: string;
  target_id: number;
  reason: string;
  status: string;
  created_at: string;
};

export type Voucher = {
  id: number;
  serial: string;
  coins: number;
  remaining: number;
  total: number;
  expires_at: string | null;
};

export type BannedLink = {
  id: number;
  url: string;
  reason: string;
  created_at: string;
};

export type Warning = {
  id: number;
  user_id: number;
  actor_id: number;
  reason: string;
  created_at: string;
};

export type NospamHit = {
  post_id: number;
  target_id: number;
  local_id: number;
  author_id: number;
  content: string;
  permalink: string;
};

export type NospamResult = {
  action_id: number;
  hits: NospamHit[];
  deleted: number;
};

export type AdminOverview = {
  users: number;
  groups: number;
  wall_posts: number;
  tickets_open: number;
  reports_open: number;
  banned_users: number;
};

export function isStaff(user: User | null | undefined): boolean {
  return user?.role === 'admin' || user?.role === 'agent';
}

export function isAdmin(user: User | null | undefined): boolean {
  return user?.role === 'admin';
}

export const demoUser: User = {
  id: 1,
  first_name: 'Ivan',
  last_name: 'Petrov',
  screen_name: 'id1',
  status: 'OpenVK rewrite in progress',
  city: 'Saint Petersburg',
  email: 'ivan@openvk.local',
  phone: '+7 812 000-00-01',
  avatar_url: null,
  verified: false,
  privacy_wall: 'everyone',
  privacy_messages: 'everyone',
  privacy_photos: 'everyone',
  privacy_audio: 'everyone',
  privacy_profile: 'everyone',
  privacy_friends: 'everyone',
  created_at: new Date().toISOString(),
  coins: 0,
  rating: 0,
  role: 'user',
  banned: false,
  posting_allowed: true,
  messaging_allowed: true,
};
