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
  errorFromPb,
  groupsFromPb,
  groupFromPb,
  messageFromPb,
  messagesFromPb,
  photoFromPb,
  tokenFromPb,
  userFromPb,
  usersFromPb,
  videoFromPb,
  videosFromPb,
  commentFromPb,
  commentsFromPb,
  likeStateFromPb,
  encodeWriteWall,
  notificationsFromPb,
  wallPostFromPb,
  wallPostsFromPb,
  catalogFromPb,
  userGiftsFromPb,
  userGiftFromPb,
  ticketsFromPb,
  ticketFromPb,
  reportsFromPb,
  reportFromPb,
  vouchersFromPb,
  voucherFromPb,
  bannedLinksFromPb,
  bannedLinkFromPb,
  warningFromPb,
  warningsFromPb,
  nospamFromPb,
  overviewFromPb,
  adminUsersFromPb,
  adminClubsFromPb,
} from '../proto/wire';
import type {
  Album,
  AudioTrack,
  Comment,
  CommentTarget,
  Group,
  HealthResponse,
  InstanceAbout,
  LikeKind,
  LikeState,
  Message,
  Photo,
  SiteNotification,
  TokenResponse,
  UpdateAccount,
  User,
  Video,
  WallPost,
  WriteWallBody,
  GiftCategory,
  UserGift,
  Ticket,
  SiteReport,
  Voucher,
  BannedLink,
  Warning,
  NospamResult,
  AdminOverview,
} from './types';
import { parsePrettyId } from './types';

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
    throw await readError(response);
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

async function readError(response: Response): Promise<ApiError> {
  const headerTrace = response.headers.get('x-trace-id') ?? '';
  try {
    const bytes = new Uint8Array(await response.clone().arrayBuffer());
    const { code, message, traceId } = errorFromPb(bytes);
    return new ApiError(response.status, message ?? response.statusText, code, traceId || headerTrace);
  } catch {
    return new ApiError(response.status, response.statusText, '', headerTrace);
  }
}

export class ApiError extends Error {
  status: number;
  code: string;
  traceId: string;
  constructor(status: number, message: string, code = '', traceId = '') {
    super(message);
    this.status = status;
    this.code = code;
    this.traceId = traceId;
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

function wallCollectionPath(ownerId: number): string {
  return ownerId < 0 ? `/api/v1/groups/${-ownerId}/wall` : `/api/v1/users/${ownerId}/wall`;
}

function wallItemPath(ownerId: number, localId: number): string {
  return `${wallCollectionPath(ownerId)}/${localId}`;
}

function commentPath(target: CommentTarget, ownerId: number, objectId: number): string {
  if (target === 'photo') {
    return `/api/v1/photos/${ownerId}/${objectId}/comments`;
  }
  if (target === 'video') {
    return `/api/v1/videos/${ownerId}/${objectId}/comments`;
  }
  return `${wallItemPath(ownerId, objectId)}/comments`;
}

function likeCoords(kind: LikeKind, id: string): { ownerId: number; objectId: number } {
  if (kind === 'comment') {
    return { ownerId: 0, objectId: Number(id) };
  }
  const parsed = parsePrettyId(id);
  if (!parsed) {
    throw new Error('invalid like id');
  }
  return parsed;
}

function likeApiPath(kind: LikeKind, ownerId: number, objectId: number, list = false): string {
  const suffix = list ? 'likes' : 'like';
  if (kind === 'photo') {
    return `/api/v1/photos/${ownerId}/${objectId}/${suffix}`;
  }
  if (kind === 'video') {
    return `/api/v1/videos/${ownerId}/${objectId}/${suffix}`;
  }
  if (kind === 'comment') {
    return `/api/v1/comments/${objectId}/like`;
  }
  return `${wallItemPath(ownerId, objectId)}/${suffix}`;
}

export const api = {
  health: async () => {
    const response = await fetch(`${API_BASE}/health`, {
      headers: { Accept: 'application/json' },
      credentials: 'same-origin',
    });
    if (!response.ok) {
      throw new ApiError(
        response.status,
        response.statusText,
        '',
        response.headers.get('x-trace-id') ?? '',
      );
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
  user: (id: number | string, token: string) =>
    requestMapped<User>(`/api/v1/users/${encodeURIComponent(String(id))}`, { token }, (bytes) =>
      userFromPb(decode('User', bytes)),
    ),
  wall: (id: number, token: string) =>
    requestMapped<WallPost[]>(wallCollectionPath(id), { token }, wallPostsFromPb),
  wallPost: (ownerId: number, localId: number, token: string) =>
    requestMapped<WallPost>(wallItemPath(ownerId, localId), { token }, (bytes) =>
      wallPostFromPb(decode('WallPost', bytes)),
    ),
  writeWall: (id: number, body: WriteWallBody, token: string) =>
    requestMapped<WallPost>(
      wallCollectionPath(id),
      { method: 'POST', token, body: encodeWriteWall(body) },
      (bytes) => wallPostFromPb(decode('WallPost', bytes)),
    ),
  comments: (target: CommentTarget, ownerId: number, objectId: number, token: string) =>
    requestMapped<Comment[]>(commentPath(target, ownerId, objectId), { token }, commentsFromPb),
  writeComment: (
    target: CommentTarget,
    ownerId: number,
    objectId: number,
    content: string,
    token: string,
  ) =>
    requestMapped<Comment>(
      commentPath(target, ownerId, objectId),
      { method: 'POST', token, body: encode('WriteComment', { content }) },
      (bytes) => commentFromPb(decode('Comment', bytes)),
    ),
  toggleLike: (kind: LikeKind, id: string, token: string) => {
    const { ownerId, objectId } = likeCoords(kind, id);
    return requestMapped<LikeState>(
      likeApiPath(kind, ownerId, objectId),
      { method: 'POST', token },
      likeStateFromPb,
    );
  },
  likeState: (kind: LikeKind, id: string, token: string) => {
    const { ownerId, objectId } = likeCoords(kind, id);
    return requestMapped<LikeState>(likeApiPath(kind, ownerId, objectId), { token }, likeStateFromPb);
  },
  likers: (kind: LikeKind, ownerId: number, objectId: number, token: string) =>
    requestMapped<User[]>(likeApiPath(kind, ownerId, objectId, true), { token }, usersFromPb),
  photo: (ownerId: number, id: number, token: string) =>
    requestMapped<Photo>(`/api/v1/photos/${ownerId}/${id}`, { token }, (bytes) =>
      photoFromPb(decode('Photo', bytes)),
    ),
  video: (ownerId: number, id: number, token: string) =>
    requestMapped<Video>(`/api/v1/videos/${ownerId}/${id}`, { token }, (bytes) =>
      videoFromPb(decode('Video', bytes)),
    ),
  notifications: (token: string) =>
    requestMapped<SiteNotification[]>('/api/v1/notifications', { token }, notificationsFromPb),
  markNotificationsSeen: (token: string) =>
    requestBytes('/api/v1/notifications', { method: 'POST', token }),
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
  group: (id: number | string, token: string) =>
    requestMapped<Group>(`/api/v1/groups/${encodeURIComponent(String(id))}`, { token }, (bytes) =>
      groupFromPb(decode('Group', bytes)),
    ),
  giftCatalog: (token: string) => requestMapped<GiftCategory[]>('/api/v1/gifts', { token }, catalogFromPb),
  userGifts: (token: string, userId: number) =>
    requestMapped<UserGift[]>(`/api/v1/users/${userId}/gifts`, { token }, userGiftsFromPb),
  sendGift: (
    token: string,
    body: { gift_id: number; receiver_id: number; caption?: string; anonymous: boolean },
  ) =>
    requestMapped<UserGift>(
      '/api/v1/gifts',
      { method: 'POST', token, body: encode('SendGift', body) },
      (bytes) => userGiftFromPb(decode('UserGift', bytes)),
    ),
  transferCoins: (token: string, receiver_id: number, amount: number) =>
    requestMapped<User>(
      '/api/v1/coins/transfer',
      { method: 'POST', token, body: encode('TransferCoins', { receiver_id, amount }) },
      (bytes) => userFromPb(decode('User', bytes)),
    ),
  redeemVoucher: (token: string, serial: string) =>
    requestMapped<User>(
      '/api/v1/vouchers/redeem',
      { method: 'POST', token, body: encode('RedeemVoucher', { serial }) },
      (bytes) => userFromPb(decode('User', bytes)),
    ),
  tickets: (token: string, all = false) =>
    requestMapped<Ticket[]>(`/api/v1/tickets${all ? '?all=true' : ''}`, { token }, ticketsFromPb),
  createTicket: (token: string, subject: string, content: string) =>
    requestMapped<Ticket>(
      '/api/v1/tickets',
      { method: 'POST', token, body: encode('WriteTicket', { subject, content }) },
      (bytes) => ticketFromPb(decode('Ticket', bytes)),
    ),
  ticket: (token: string, id: number) =>
    requestMapped<Ticket>(`/api/v1/tickets/${id}`, { token }, (bytes) =>
      ticketFromPb(decode('Ticket', bytes)),
    ),
  replyTicket: (token: string, id: number, content: string) =>
    requestMapped<Ticket>(
      `/api/v1/tickets/${id}/replies`,
      { method: 'POST', token, body: encode('WriteTicketReply', { content }) },
      (bytes) => ticketFromPb(decode('Ticket', bytes)),
    ),
  closeTicket: (token: string, id: number) =>
    requestMapped<Ticket>(`/api/v1/tickets/${id}/close`, { method: 'POST', token }, (bytes) =>
      ticketFromPb(decode('Ticket', bytes)),
    ),
  deleteTicket: (token: string, id: number) =>
    requestBytes(`/api/v1/tickets/${id}`, { method: 'DELETE', token }),
  createReport: (
    token: string,
    target_type: string,
    target_id: number,
    reason: string,
    owner_id?: number,
  ) =>
    requestMapped<SiteReport>(
      '/api/v1/reports',
      {
        method: 'POST',
        token,
        body: encode('WriteReport', {
          target_type,
          target_id,
          reason,
          ...(owner_id ? { owner_id } : {}),
        }),
      },
      (bytes) => reportFromPb(decode('Report', bytes)),
    ),
  reports: (token: string) => requestMapped<SiteReport[]>('/api/v1/reports', { token }, reportsFromPb),
  report: (token: string, id: number) =>
    requestMapped<SiteReport>(`/api/v1/reports/${id}`, { token }, (bytes) =>
      reportFromPb(decode('Report', bytes)),
    ),
  reportAction: (token: string, id: number, action: string, reason?: string) =>
    requestMapped<SiteReport>(
      `/api/v1/reports/${id}/action`,
      { method: 'POST', token, body: encode('ReportAction', { action, reason }) },
      (bytes) => reportFromPb(decode('Report', bytes)),
    ),
  selfUnban: (token: string) =>
    requestMapped<User>('/api/v1/unban', { method: 'POST', token }, (bytes) =>
      userFromPb(decode('User', bytes)),
    ),
  bannedLink: (id: number) =>
    requestMapped<BannedLink>(`/api/v1/away/links/${id}`, {}, (bytes) =>
      bannedLinkFromPb(decode('BannedLink', bytes)),
    ),
  checkAwayUrl: (url: string) =>
    requestMapped<BannedLink[]>(
      `/api/v1/away/check?url=${encodeURIComponent(url)}`,
      {},
      bannedLinksFromPb,
    ),
  nospam: (token: string, query: string, delete_hits: boolean, ban_authors: boolean) =>
    requestMapped<NospamResult>(
      '/api/v1/nospam',
      { method: 'POST', token, body: encode('NospamQuery', { query, delete_hits, ban_authors }) },
      nospamFromPb,
    ),
  nospamRollback: (token: string, id: number) =>
    requestBytes(`/api/v1/nospam/${id}/rollback`, { method: 'POST', token }),
  adminOverview: (token: string) =>
    requestMapped<AdminOverview>('/api/v1/admin/overview', { token }, overviewFromPb),
  adminUsers: (token: string, q?: string) =>
    requestMapped<User[]>(
      `/api/v1/admin/users${q ? `?q=${encodeURIComponent(q)}` : ''}`,
      { token },
      adminUsersFromPb,
    ),
  adminClubs: (token: string) =>
    requestMapped<Group[]>('/api/v1/admin/clubs', { token }, adminClubsFromPb),
  vouchers: (token: string) => requestMapped<Voucher[]>('/api/v1/admin/vouchers', { token }, vouchersFromPb),
  voucher: (token: string, id: number) =>
    requestMapped<Voucher>(`/api/v1/admin/vouchers/${id}`, { token }, (bytes) =>
      voucherFromPb(decode('Voucher', bytes)),
    ),
  createVoucher: (token: string, coins: number, uses: number) =>
    requestMapped<Voucher>(
      '/api/v1/admin/vouchers',
      { method: 'POST', token, body: encode('CreateVoucher', { coins, uses }) },
      (bytes) => voucherFromPb(decode('Voucher', bytes)),
    ),
  bannedLinks: (token: string) =>
    requestMapped<BannedLink[]>('/api/v1/admin/banned-links', { token }, bannedLinksFromPb),
  addBannedLink: (token: string, url: string, reason: string) =>
    requestMapped<BannedLink>(
      '/api/v1/admin/banned-links',
      { method: 'POST', token, body: encode('WriteBannedLink', { url, reason }) },
      (bytes) => bannedLinkFromPb(decode('BannedLink', bytes)),
    ),
  deleteBannedLink: (token: string, id: number) =>
    requestBytes(`/api/v1/admin/banned-links/${id}`, { method: 'DELETE', token }),
  banUser: (token: string, id: number, reason: string, until?: string) =>
    requestMapped<User>(
      `/api/v1/admin/users/${id}/ban`,
      { method: 'POST', token, body: encode('BanUser', { reason, until }) },
      (bytes) => userFromPb(decode('User', bytes)),
    ),
  unbanUser: (token: string, id: number) =>
    requestMapped<User>(`/api/v1/admin/users/${id}/unban`, { method: 'POST', token }, (bytes) =>
      userFromPb(decode('User', bytes)),
    ),
  warnUser: (token: string, id: number, reason: string) =>
    requestMapped<Warning>(
      `/api/v1/admin/users/${id}/warn`,
      { method: 'POST', token, body: encode('WarnUser', { reason }) },
      warningFromPb,
    ),
  warnings: (token: string, id: number) =>
    requestMapped<Warning[]>(`/api/v1/admin/users/${id}/warnings`, { token }, warningsFromPb),
  setLimits: (token: string, id: number, posting_allowed: boolean, messaging_allowed: boolean) =>
    requestMapped<User>(
      `/api/v1/admin/users/${id}/limits`,
      { method: 'POST', token, body: encode('SetLimits', { posting_allowed, messaging_allowed }) },
      (bytes) => userFromPb(decode('User', bytes)),
    ),
  supportBan: (token: string, id: number, reason: string) =>
    requestMapped<User>(
      `/api/v1/admin/users/${id}/support-ban`,
      { method: 'POST', token, body: encode('BanUser', { reason }) },
      (bytes) => userFromPb(decode('User', bytes)),
    ),
  supportUnban: (token: string, id: number) =>
    requestMapped<User>(
      `/api/v1/admin/users/${id}/support-unban`,
      { method: 'POST', token },
      (bytes) => userFromPb(decode('User', bytes)),
    ),
};
