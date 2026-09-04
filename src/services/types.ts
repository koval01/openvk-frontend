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
  created_at: string;
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
};

export function wallHref(post: Pick<WallPost, 'target_id' | 'id' | 'permalink'>): string {
  return `/${post.permalink || `wall${post.target_id}_${post.id}`}`;
}

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
};

export type Group = {
  id: number;
  slug: string;
  name: string;
  about?: string | null;
  kind: string;
  owner_id: number;
  created_at: string;
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
};

export function displayName(user: User): string {
  return `${user.first_name} ${user.last_name}`.trim();
}

export const CAMERA_FALLBACK = '/assets/packages/static/openvk/img/camera_200.png';

export function mediaSrc(path: string | null | undefined): string {
  if (!path) {
    return CAMERA_FALLBACK;
  }
  return path;
}

export function initials(user: User): string {
  return `${user.first_name.slice(0, 1)}${user.last_name.slice(0, 1)}`;
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
  created_at: new Date().toISOString(),
};
