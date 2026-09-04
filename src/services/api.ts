import { clearCsrf, ensureCsrf, refreshChallenge, sealFields } from '../lib/security';
import {
  asArrayBuffer,
  PROTOBUF_MIME,
  albumFromPb,
  albumsFromPb,
  instanceAboutFromPb,
  audioFromPb,
  audioListFromPb,
  decode,
  encode,
  encodeAuthRequest,
  encodeSealedPassword,
  encodeUpdateAccount,
  errorMessageFromPb,
  groupsFromPb,
  messageFromPb,
  messagesFromPb,
  photoFromPb,
  tokenFromPb,
  userFromPb,
  usersFromPb,
  videoFromPb,
  videosFromPb,
  wallPostFromPb,
  wallPostsFromPb,
} from '../proto/wire';
import type {
  Album,
  AudioTrack,
  Group,
  HealthResponse,
  InstanceAbout,
  Message,
  Photo,
  TokenResponse,
  UpdateAccount,
  User,
  Video,
  WallPost,
} from './types';

const API_BASE = import.meta.env.VITE_API_URL ?? '';

type RequestOptions = {
  method?: string;
  token?: string | null;
  form?: FormData;
  body?: Uint8Array;
};

function isUnsafe(method: string): boolean {
  return method !== 'GET' && method !== 'HEAD' && method !== 'OPTIONS';
}

async function requestBytes(
  path: string,
  options: RequestOptions = {},
  retried = false,
): Promise<Uint8Array | undefined> {
  const method = options.method ?? 'GET';
  const headers = new Headers({ Accept: PROTOBUF_MIME });
  if (options.form === undefined && options.body !== undefined) {
    headers.set('Content-Type', PROTOBUF_MIME);
  }
  if (options.token) {
    headers.set('Authorization', `Bearer ${options.token}`);
  }
  if (isUnsafe(method)) {
    headers.set('X-CSRF-Token', await ensureCsrf());
  }

  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    credentials: 'same-origin',
    body: options.form ?? (options.body ? asArrayBuffer(options.body) : undefined),
  });

  if (
    response.status === 403 &&
    isUnsafe(method) &&
    !retried &&
    !path.startsWith('/api/v1/auth/')
  ) {
    clearCsrf();
    return requestBytes(path, options, true);
  }

  if (!response.ok) {
    throw new ApiError(response.status, await readError(response));
  }

  if (response.status === 204) {
    return undefined;
  }

  return new Uint8Array(await response.arrayBuffer());
}

async function requestMapped<T>(
  path: string,
  options: RequestOptions,
  map: (bytes: Uint8Array) => T,
): Promise<T> {
  const bytes = await requestBytes(path, options);
  return map(bytes ?? new Uint8Array());
}

async function readError(response: Response): Promise<string> {
  try {
    const bytes = new Uint8Array(await response.clone().arrayBuffer());
    return errorMessageFromPb(bytes) ?? response.statusText;
  } catch {
    return response.statusText;
  }
}

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

function ownerQuery(ownerId?: number, photos?: boolean): string {
  const params = new URLSearchParams();
  if (ownerId !== undefined) {
    params.set('owner_id', String(ownerId));
  }
  if (photos) {
    params.set('photos', 'true');
  }
  const query = params.toString();
  return query ? `?${query}` : '';
}

export const api = {
  health: async () => {
    const response = await fetch(`${API_BASE}/health`, {
      headers: { Accept: 'application/json' },
      credentials: 'same-origin',
    });
    if (!response.ok) {
      throw new ApiError(response.status, response.statusText);
    }
    const body = (await response.json()) as HealthResponse;
    return {
      ...body,
      version: response.headers.get('x-openvk-build') ?? body.version,
    };
  },
  login: async (login: string, password: string, turnstileToken: string) => {
    const challenge = await refreshChallenge();
    const password_sealed = await sealFields(challenge.public_key, challenge.nonce, [password]);
    return requestMapped<TokenResponse>(
      '/api/v1/auth/login',
      {
        method: 'POST',
        body: encodeAuthRequest({
          login,
          challenge_id: challenge.challenge_id,
          password_sealed,
          turnstile_token: turnstileToken,
        }),
      },
      tokenFromPb,
    );
  },
  register: async (login: string, password: string, turnstileToken: string) => {
    const challenge = await refreshChallenge();
    const password_sealed = await sealFields(challenge.public_key, challenge.nonce, [password]);
    return requestMapped<TokenResponse>(
      '/api/v1/auth/register',
      {
        method: 'POST',
        body: encodeAuthRequest({
          login,
          challenge_id: challenge.challenge_id,
          password_sealed,
          turnstile_token: turnstileToken,
        }),
      },
      tokenFromPb,
    );
  },
  logout: (token?: string | null) => requestBytes('/api/v1/auth/logout', { method: 'POST', token }),
  about: () => requestMapped<InstanceAbout>('/api/v1/about', {}, instanceAboutFromPb),
  news: (token: string) => requestMapped<WallPost[]>('/api/v1/feed', { token }, wallPostsFromPb),
  user: (id: number, token: string) =>
    requestMapped<User>(`/api/v1/users/${id}`, { token }, (bytes) =>
      userFromPb(decode('User', bytes)),
    ),
  wall: (id: number, token: string) =>
    requestMapped<WallPost[]>(`/api/v1/users/${id}/wall`, { token }, wallPostsFromPb),
  wallPost: (ownerId: number, localId: number, token: string) =>
    requestMapped<WallPost>(`/api/v1/users/${ownerId}/wall/${localId}`, { token }, (bytes) =>
      wallPostFromPb(decode('WallPost', bytes)),
    ),
  writeWall: (id: number, content: string, token: string) =>
    requestMapped<WallPost>(
      `/api/v1/users/${id}/wall`,
      { method: 'POST', token, body: encode('WriteWall', { content }) },
      (bytes) => wallPostFromPb(decode('WallPost', bytes)),
    ),
  friends: (token: string) => requestMapped<User[]>('/api/v1/friends', { token }, usersFromPb),
  userFriends: (id: number, token: string) =>
    requestMapped<User[]>(`/api/v1/users/${id}/friends`, { token }, usersFromPb),
  messages: (token: string, peerId?: number) => {
    const query = peerId === undefined ? '' : `?peer_id=${peerId}`;
    return requestMapped<Message[]>(`/api/v1/messages${query}`, { token }, messagesFromPb);
  },
  sendMessage: (token: string, peerId: number, text: string) =>
    requestMapped<Message>(
      '/api/v1/messages',
      { method: 'POST', token, body: encode('SendMessage', { peer_id: peerId, text }) },
      (bytes) => messageFromPb(decode('Message', bytes)),
    ),
  settings: (token: string) =>
    requestMapped<User>('/api/v1/settings', { token }, (bytes) => userFromPb(decode('User', bytes))),
  updateSettings: (token: string, body: UpdateAccount) =>
    requestMapped<User>(
      '/api/v1/settings',
      { method: 'PUT', token, body: encodeUpdateAccount(body) },
      (bytes) => userFromPb(decode('User', bytes)),
    ),
  changePassword: async (token: string, current_password: string, new_password: string) => {
    const challenge = await refreshChallenge();
    const password_sealed = await sealFields(challenge.public_key, challenge.nonce, [
      current_password,
      new_password,
    ]);
    await requestBytes('/api/v1/settings/password', {
      method: 'PUT',
      token,
      body: encodeSealedPassword({
        challenge_id: challenge.challenge_id,
        password_sealed,
      }),
    });
  },
  deleteAccount: async (token: string, password: string) => {
    const challenge = await refreshChallenge();
    const password_sealed = await sealFields(challenge.public_key, challenge.nonce, [password]);
    await requestBytes('/api/v1/settings', {
      method: 'DELETE',
      token,
      body: encodeSealedPassword({
        challenge_id: challenge.challenge_id,
        password_sealed,
      }),
    });
  },
  audio: (token: string, ownerId?: number) =>
    requestMapped<AudioTrack[]>(`/api/v1/audio${ownerQuery(ownerId)}`, { token }, audioListFromPb),
  uploadAudio: (token: string, file: File, artist: string, title: string) => {
    const form = new FormData();
    form.set('file', file);
    form.set('artist', artist);
    form.set('title', title);
    return requestMapped<AudioTrack>('/api/v1/audio', { method: 'POST', token, form }, (bytes) =>
      audioFromPb(decode('AudioTrack', bytes)),
    );
  },
  deleteAudio: (token: string, id: number) =>
    requestBytes(`/api/v1/audio/${id}`, { method: 'DELETE', token }),
  albums: (token: string, ownerId?: number, photos = false) =>
    requestMapped<Album[]>(`/api/v1/albums${ownerQuery(ownerId, photos)}`, { token }, albumsFromPb),
  album: (token: string, id: number) =>
    requestMapped<Album>(`/api/v1/albums/${id}`, { token }, (bytes) =>
      albumFromPb(decode('Album', bytes)),
    ),
  createAlbum: (token: string, title: string, description?: string) =>
    requestMapped<Album>(
      '/api/v1/albums',
      {
        method: 'POST',
        token,
        body: encode('CreateAlbum', { title, description: description || undefined }),
      },
      (bytes) => albumFromPb(decode('Album', bytes)),
    ),
  uploadPhoto: (token: string, file: File, albumId?: number) => {
    const form = new FormData();
    form.set('file', file);
    const query = albumId === undefined ? '' : `?album_id=${albumId}`;
    return requestMapped<Photo>(`/api/v1/photos${query}`, { method: 'POST', token, form }, (bytes) =>
      photoFromPb(decode('Photo', bytes)),
    );
  },
  deletePhoto: (token: string, albumId: number, mediaId: number) =>
    requestBytes(`/api/v1/albums/${albumId}/photos/${mediaId}`, {
      method: 'DELETE',
      token,
    }),
  deleteAlbum: (token: string, id: number) =>
    requestBytes(`/api/v1/albums/${id}`, { method: 'DELETE', token }),
  videos: (token: string, ownerId?: number) =>
    requestMapped<Video[]>(`/api/v1/videos${ownerQuery(ownerId)}`, { token }, videosFromPb),
  uploadVideo: (token: string, file: File, title: string) => {
    const form = new FormData();
    form.set('file', file);
    form.set('title', title);
    return requestMapped<Video>('/api/v1/videos', { method: 'POST', token, form }, (bytes) =>
      videoFromPb(decode('Video', bytes)),
    );
  },
  deleteVideo: (token: string, id: number) =>
    requestBytes(`/api/v1/videos/${id}`, { method: 'DELETE', token }),
  uploadAvatar: (token: string, file: File) => {
    const form = new FormData();
    form.set('file', file);
    return requestMapped<User>('/api/v1/settings/avatar', { method: 'POST', token, form }, (bytes) =>
      userFromPb(decode('User', bytes)),
    );
  },
  groups: (token: string) => requestMapped<Group[]>('/api/v1/groups', { token }, groupsFromPb),
};
