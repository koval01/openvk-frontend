import type {
  Album,
  AudioTrack,
  Group,
  InstanceAbout,
  Message,
  Photo,
  PrivacyLevel,
  TokenResponse,
  UpdateAccount,
  User,
  Video,
  WallPost,
} from '../services/types';
import { asArrayBuffer, decodeMessage, encodeMessage } from './runtime';

export { asArrayBuffer };

export const PROTOBUF_MIME = 'application/x-protobuf';

export function encode(name: string, payload: object): Uint8Array {
  return encodeMessage(name, payload);
}

export function decode<T>(name: string, bytes: Uint8Array): T {
  return decodeMessage<T>(name, bytes);
}

export function privacyFromPb(value: number | undefined): PrivacyLevel {
  switch (value) {
    case 2:
      return 'friends';
    case 3:
      return 'nobody';
    default:
      return 'everyone';
  }
}

export function privacyToPb(value: PrivacyLevel): number {
  switch (value) {
    case 'friends':
      return 2;
    case 'nobody':
      return 3;
    default:
      return 1;
  }
}

function optString(value?: string | null): string | null {
  return value ? value : null;
}

function optNumber(value?: number | null): number | null {
  return value === undefined || value === null ? null : Number(value);
}

type PbUser = {
  id?: number;
  first_name?: string;
  last_name?: string;
  screen_name?: string;
  status?: string;
  city?: string;
  email?: string;
  phone?: string;
  avatar_url?: string;
  verified?: boolean;
  privacy_wall?: number;
  privacy_messages?: number;
  privacy_photos?: number;
  privacy_audio?: number;
  created_at?: string;
};

export function userFromPb(user: PbUser): User {
  return {
    id: Number(user.id ?? 0),
    first_name: user.first_name ?? '',
    last_name: user.last_name ?? '',
    screen_name: optString(user.screen_name),
    status: optString(user.status),
    city: optString(user.city),
    email: optString(user.email),
    phone: optString(user.phone),
    avatar_url: optString(user.avatar_url),
    verified: Boolean(user.verified),
    privacy_wall: privacyFromPb(user.privacy_wall),
    privacy_messages: privacyFromPb(user.privacy_messages),
    privacy_photos: privacyFromPb(user.privacy_photos),
    privacy_audio: privacyFromPb(user.privacy_audio),
    created_at: user.created_at ?? '',
  };
}

export function usersFromPb(bytes: Uint8Array): User[] {
  const list = decode<{ users?: PbUser[] }>('UserList', bytes);
  return (list.users ?? []).map(userFromPb);
}

type PbWallPost = {
  id?: number;
  target_id?: number;
  author_id?: number;
  author?: PbUser;
  target?: PbUser;
  content?: string;
  permalink?: string;
  created_at?: string;
};

export function wallPostFromPb(post: PbWallPost): WallPost {
  return {
    id: Number(post.id ?? 0),
    target_id: Number(post.target_id ?? 0),
    author_id: Number(post.author_id ?? 0),
    author: userFromPb(post.author ?? {}),
    target: userFromPb(post.target ?? {}),
    content: post.content ?? '',
    permalink: post.permalink ?? '',
    created_at: post.created_at ?? '',
  };
}

export function wallPostsFromPb(bytes: Uint8Array): WallPost[] {
  const list = decode<{ posts?: PbWallPost[] }>('WallPostList', bytes);
  return (list.posts ?? []).map(wallPostFromPb);
}

type PbMessage = {
  id?: number;
  peer_id?: number;
  author_id?: number;
  text?: string;
  created_at?: string;
};

export function messageFromPb(message: PbMessage): Message {
  return {
    id: Number(message.id ?? 0),
    peer_id: Number(message.peer_id ?? 0),
    author_id: Number(message.author_id ?? 0),
    text: message.text ?? '',
    created_at: message.created_at ?? '',
  };
}

export function messagesFromPb(bytes: Uint8Array): Message[] {
  const list = decode<{ messages?: PbMessage[] }>('MessageList', bytes);
  return (list.messages ?? []).map(messageFromPb);
}

type PbAudio = {
  id?: number;
  media_id?: number;
  artist?: string;
  title?: string;
  duration_ms?: number;
  owner_user_id?: number;
  src?: string;
};

export function audioFromPb(track: PbAudio): AudioTrack {
  return {
    id: Number(track.id ?? 0),
    media_id: Number(track.media_id ?? 0),
    artist: track.artist ?? '',
    title: track.title ?? '',
    duration_ms: Number(track.duration_ms ?? 0),
    owner_user_id: Number(track.owner_user_id ?? 0),
    src: track.src ?? '',
  };
}

export function audioListFromPb(bytes: Uint8Array): AudioTrack[] {
  const list = decode<{ tracks?: PbAudio[] }>('AudioList', bytes);
  return (list.tracks ?? []).map(audioFromPb);
}

type PbPhoto = {
  id?: number;
  album_id?: number;
  owner_user_id?: number;
  mime?: string;
  size_bytes?: number;
  width?: number;
  height?: number;
  original_filename?: string;
  url?: string;
};

export function photoFromPb(photo: PbPhoto): Photo {
  return {
    id: Number(photo.id ?? 0),
    album_id: Number(photo.album_id ?? 0),
    owner_user_id: Number(photo.owner_user_id ?? 0),
    mime: photo.mime ?? '',
    size_bytes: Number(photo.size_bytes ?? 0),
    width: optNumber(photo.width),
    height: optNumber(photo.height),
    original_filename: optString(photo.original_filename),
    url: photo.url ?? '',
  };
}

type PbAlbum = {
  id?: number;
  title?: string;
  description?: string;
  owner_user_id?: number;
  created_at?: string;
  photo_count?: number;
  cover_url?: string;
  photos?: PbPhoto[];
};

export function albumFromPb(album: PbAlbum): Album {
  return {
    id: Number(album.id ?? 0),
    title: album.title ?? '',
    description: optString(album.description),
    owner_user_id: Number(album.owner_user_id ?? 0),
    created_at: album.created_at ?? '',
    photo_count: Number(album.photo_count ?? 0),
    cover_url: optString(album.cover_url),
    photos: (album.photos ?? []).map(photoFromPb),
  };
}

export function albumsFromPb(bytes: Uint8Array): Album[] {
  const list = decode<{ albums?: PbAlbum[] }>('AlbumList', bytes);
  return (list.albums ?? []).map(albumFromPb);
}

type PbVideo = {
  id?: number;
  media_id?: number;
  title?: string;
  description?: string;
  status?: string;
  owner_user_id?: number;
  src?: string;
};

export function videoFromPb(video: PbVideo): Video {
  return {
    id: Number(video.id ?? 0),
    media_id: optNumber(video.media_id),
    title: video.title ?? '',
    description: optString(video.description),
    status: video.status ?? '',
    owner_user_id: Number(video.owner_user_id ?? 0),
    src: optString(video.src),
  };
}

export function videosFromPb(bytes: Uint8Array): Video[] {
  const list = decode<{ videos?: PbVideo[] }>('VideoList', bytes);
  return (list.videos ?? []).map(videoFromPb);
}

type PbGroup = {
  id?: number;
  slug?: string;
  name?: string;
  about?: string;
  kind?: string;
  owner_id?: number;
  created_at?: string;
};

export function groupFromPb(group: PbGroup): Group {
  return {
    id: Number(group.id ?? 0),
    slug: group.slug ?? '',
    name: group.name ?? '',
    about: optString(group.about),
    kind: group.kind ?? '',
    owner_id: Number(group.owner_id ?? 0),
    created_at: group.created_at ?? '',
  };
}

export function groupsFromPb(bytes: Uint8Array): Group[] {
  const list = decode<{ groups?: PbGroup[] }>('GroupList', bytes);
  return (list.groups ?? []).map(groupFromPb);
}

type PbPopularGroup = {
  id?: number;
  name?: string;
  members?: number;
};

export function instanceAboutFromPb(bytes: Uint8Array): InstanceAbout {
  const about = decode<{
    users?: number;
    online_users?: number;
    active_users?: number;
    groups?: number;
    wall_posts?: number;
    popular_groups?: PbPopularGroup[];
  }>('InstanceAbout', bytes);
  return {
    users: Number(about.users ?? 0),
    online_users: Number(about.online_users ?? 0),
    active_users: Number(about.active_users ?? 0),
    groups: Number(about.groups ?? 0),
    wall_posts: Number(about.wall_posts ?? 0),
    popular_groups: (about.popular_groups ?? []).map((group) => ({
      id: Number(group.id ?? 0),
      name: group.name ?? '',
      members: Number(group.members ?? 0),
    })),
  };
}

export function tokenFromPb(bytes: Uint8Array): TokenResponse {
  const token = decode<{ token?: string; token_type?: string; user_id?: number }>('Token', bytes);
  return {
    token: token.token ?? '',
    token_type: token.token_type ?? 'Bearer',
    user_id: Number(token.user_id ?? 0),
  };
}

export function errorMessageFromPb(bytes: Uint8Array): string | undefined {
  const error = decode<{ message?: string }>('Error', bytes);
  return error.message || undefined;
}

export function encodeUpdateAccount(body: UpdateAccount): Uint8Array {
  return encode('UpdateAccount', {
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email || undefined,
    phone: body.phone || undefined,
    city: body.city || undefined,
    privacy_wall: privacyToPb(body.privacy_wall),
    privacy_messages: privacyToPb(body.privacy_messages),
  });
}

export function encodeAuthRequest(body: {
  login: string;
  challenge_id: string;
  password_sealed: string;
  turnstile_token: string;
}): Uint8Array {
  return encode('AuthRequest', body);
}

export function encodeSealedPassword(body: { challenge_id: string; password_sealed: string }): Uint8Array {
  return encode('SealedPassword', body);
}

export type PbChallenge = {
  csrf_token: string;
  challenge_id: string;
  nonce: string;
  expires_in: number;
  alg: string;
  public_key: string;
};

export function challengeFromPb(bytes: Uint8Array): PbChallenge {
  const challenge = decode<PbChallenge>('Challenge', bytes);
  return {
    csrf_token: challenge.csrf_token ?? '',
    challenge_id: challenge.challenge_id ?? '',
    nonce: challenge.nonce ?? '',
    expires_in: Number(challenge.expires_in ?? 0),
    alg: challenge.alg ?? '',
    public_key: challenge.public_key ?? '',
  };
}

export type PbSocketEvent = {
  type?: string;
  ts?: number;
  payload?: string;
};

export function encodeSocketEvent(event: { type: string; ts?: number; payload?: unknown }): Uint8Array {
  const payload =
    event.payload === undefined
      ? ''
      : typeof event.payload === 'string'
        ? event.payload
        : JSON.stringify(event.payload);
  return encode('SocketEvent', {
    type: event.type,
    ts: event.ts ?? Math.floor(Date.now() / 1000),
    payload,
  });
}

export function decodeSocketEvent(bytes: Uint8Array): { type: string; ts: number; payload: unknown } {
  const event = decode<PbSocketEvent>('SocketEvent', bytes);
  let payload: unknown = event.payload ?? '';
  if (typeof payload === 'string' && payload) {
    try {
      payload = JSON.parse(payload);
    } catch {
      payload = event.payload;
    }
  }
  return {
    type: event.type ?? 'event',
    ts: Number(event.ts ?? 0),
    payload,
  };
}
