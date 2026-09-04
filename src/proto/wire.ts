import type {
  Album,
  AudioTrack,
  Comment,
  GeoPoint,
  Group,
  InstanceAbout,
  Message,
  Photo,
  PrivacyLevel,
  SiteNotification,
  TokenResponse,
  UpdateAccount,
  User,
  Video,
  WallAttachment,
  WallPost,
  WriteWallBody,
  LikeState,
  Gift,
  GiftCategory,
  UserGift,
  Ticket,
  TicketReply,
  SiteReport,
  Voucher,
  BannedLink,
  Warning,
  NospamResult,
  AdminOverview,
} from '../services/types';
import { rewriteMediaUrl } from '../services/types';
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

function mediaField(value?: string | null): string {
  return rewriteMediaUrl(value ?? '');
}

function optMediaField(value?: string | null): string | null {
  const valueOrNull = optString(value);
  return valueOrNull ? rewriteMediaUrl(valueOrNull) : valueOrNull;
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
  privacy_profile?: number;
  privacy_friends?: number;
  created_at?: string;
  coins?: number;
  rating?: number;
  role?: string;
  banned?: boolean;
  ban_reason?: string;
  banned_until?: string;
  support_banned?: boolean;
  support_ban_reason?: string;
  posting_allowed?: boolean;
  messaging_allowed?: boolean;
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
    avatar_url: optMediaField(user.avatar_url),
    verified: Boolean(user.verified),
    privacy_wall: privacyFromPb(user.privacy_wall),
    privacy_messages: privacyFromPb(user.privacy_messages),
    privacy_photos: privacyFromPb(user.privacy_photos),
    privacy_audio: privacyFromPb(user.privacy_audio),
    privacy_profile: privacyFromPb(user.privacy_profile),
    privacy_friends: privacyFromPb(user.privacy_friends),
    created_at: user.created_at ?? '',
    coins: Number(user.coins ?? 0),
    rating: Number(user.rating ?? 0),
    role: user.role || 'user',
    banned: Boolean(user.banned),
    ban_reason: optString(user.ban_reason),
    banned_until: optString(user.banned_until),
    support_banned: Boolean(user.support_banned),
    support_ban_reason: optString(user.support_ban_reason),
    posting_allowed: user.posting_allowed !== false,
    messaging_allowed: user.messaging_allowed !== false,
  };
}

export function usersFromPb(bytes: Uint8Array): User[] {
  const list = decode<{ users?: PbUser[] }>('UserList', bytes);
  return (list.users ?? []).map(userFromPb);
}

type PbGeo = {
  lat?: number;
  lng?: number;
  name?: string;
};

type PbWallAttachment = {
  kind?: string;
  owner_id?: number;
  object_id?: number;
  url?: string;
  title?: string;
  src?: string;
};

type PbWallPost = {
  id?: number;
  target_id?: number;
  author_id?: number;
  author?: PbUser;
  target?: PbUser;
  content?: string;
  permalink?: string;
  created_at?: string;
  attachments?: PbWallAttachment[];
  geo?: PbGeo;
  source?: string;
  nsfw?: boolean;
  comment_count?: number;
  club?: PbGroup;
  like_count?: number;
  liked?: boolean;
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
    attachments: (post.attachments ?? []).map((item) => ({
      kind: item.kind ?? '',
      owner_id: Number(item.owner_id ?? 0),
      object_id: Number(item.object_id ?? 0),
      url: mediaField(item.url),
      title: item.title ?? '',
      src: mediaField(item.src),
    })),
    geo: post.geo
      ? {
          lat: Number(post.geo.lat ?? 0),
          lng: Number(post.geo.lng ?? 0),
          name: post.geo.name ?? '',
        }
      : null,
    source: optString(post.source),
    nsfw: Boolean(post.nsfw),
    comment_count: Number(post.comment_count ?? 0),
    club: post.club ? groupFromPb(post.club) : null,
    like_count: Number(post.like_count ?? 0),
    liked: Boolean(post.liked),
  };
}

export function wallPostsFromPb(bytes: Uint8Array): WallPost[] {
  const list = decode<{ posts?: PbWallPost[] }>('WallPostList', bytes);
  return (list.posts ?? []).map(wallPostFromPb);
}

type PbComment = {
  id?: number;
  author_id?: number;
  author?: PbUser;
  content?: string;
  created_at?: string;
  like_count?: number;
  liked?: boolean;
};

export function commentFromPb(comment: PbComment): Comment {
  return {
    id: Number(comment.id ?? 0),
    author_id: Number(comment.author_id ?? 0),
    author: userFromPb(comment.author ?? {}),
    content: comment.content ?? '',
    created_at: comment.created_at ?? '',
    like_count: Number(comment.like_count ?? 0),
    liked: Boolean(comment.liked),
  };
}

export function commentsFromPb(bytes: Uint8Array): Comment[] {
  const list = decode<{ comments?: PbComment[] }>('CommentList', bytes);
  return (list.comments ?? []).map(commentFromPb);
}

export function likeStateFromPb(bytes: Uint8Array): LikeState {
  const state = decode<{ liked?: boolean; count?: number }>('LikeState', bytes);
  return {
    liked: Boolean(state.liked),
    count: Number(state.count ?? 0),
  };
}

export function encodeWriteWall(body: WriteWallBody): Uint8Array {
  const geo: GeoPoint | undefined = body.geo ?? undefined;
  return encode('WriteWall', {
    content: body.content,
    attachments: body.attachments.map((item: WallAttachment) => ({
      kind: item.kind,
      owner_id: item.owner_id,
      object_id: item.object_id,
      url: item.url,
      title: item.title,
      src: item.src,
    })),
    geo: geo ? { lat: geo.lat, lng: geo.lng, name: geo.name } : undefined,
    source: body.source || undefined,
    nsfw: body.nsfw,
  });
}

type PbNotification = {
  id?: number;
  kind?: string;
  actor_id?: number;
  actor?: PbUser;
  entity_type?: string;
  entity_id?: number;
  payload_json?: string;
  href?: string;
  read_at?: string;
  created_at?: string;
};

export function notificationFromPb(item: PbNotification): SiteNotification {
  return {
    id: Number(item.id ?? 0),
    kind: item.kind ?? '',
    actor_id: item.actor_id === undefined ? null : Number(item.actor_id),
    actor: item.actor ? userFromPb(item.actor) : null,
    entity_type: optString(item.entity_type),
    entity_id: item.entity_id === undefined ? null : Number(item.entity_id),
    payload_json: item.payload_json ?? '',
    href: item.href ?? '/notifications',
    read_at: optString(item.read_at),
    created_at: item.created_at ?? '',
  };
}

export function notificationsFromPb(bytes: Uint8Array): SiteNotification[] {
  const list = decode<{ notifications?: PbNotification[] }>('NotificationList', bytes);
  return (list.notifications ?? []).map(notificationFromPb);
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
    src: mediaField(track.src),
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
  like_count?: number;
  liked?: boolean;
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
    url: mediaField(photo.url),
    like_count: Number(photo.like_count ?? 0),
    liked: Boolean(photo.liked),
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
    cover_url: optMediaField(album.cover_url),
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
  like_count?: number;
  liked?: boolean;
};

export function videoFromPb(video: PbVideo): Video {
  return {
    id: Number(video.id ?? 0),
    media_id: optNumber(video.media_id),
    title: video.title ?? '',
    description: optString(video.description),
    status: video.status ?? '',
    owner_user_id: Number(video.owner_user_id ?? 0),
    src: optMediaField(video.src),
    like_count: Number(video.like_count ?? 0),
    liked: Boolean(video.liked),
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
  avatar_url?: string;
  members?: number;
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
    avatar_url: optMediaField(group.avatar_url),
    members: Number(group.members ?? 0),
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

export function errorFromPb(bytes: Uint8Array): { code?: string; message?: string; traceId?: string } {
  const error = decode<{ error?: string; message?: string; trace_id?: string }>('Error', bytes);
  return {
    code: error.error || undefined,
    message: error.message || undefined,
    traceId: error.trace_id || undefined,
  };
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
    privacy_photos: privacyToPb(body.privacy_photos ?? 'everyone'),
    privacy_audio: privacyToPb(body.privacy_audio ?? 'everyone'),
    privacy_profile: privacyToPb(body.privacy_profile ?? 'everyone'),
    privacy_friends: privacyToPb(body.privacy_friends ?? 'everyone'),
    status: body.status === undefined ? undefined : (body.status ?? ''),
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

type PbGift = {
  id?: number;
  category_id?: number;
  name?: string;
  description?: string;
  price?: number;
  image_url?: string;
};

function giftFromPb(gift: PbGift): Gift {
  return {
    id: Number(gift.id ?? 0),
    category_id: Number(gift.category_id ?? 0),
    name: gift.name ?? '',
    description: gift.description ?? '',
    price: Number(gift.price ?? 0),
    image_url: gift.image_url ?? '',
  };
}

export function catalogFromPb(bytes: Uint8Array): GiftCategory[] {
  const list = decode<{
    categories?: {
      id?: number;
      slug?: string;
      name?: string;
      description?: string;
      gifts?: PbGift[];
    }[];
  }>('GiftCatalog', bytes);
  return (list.categories ?? []).map((category) => ({
    id: Number(category.id ?? 0),
    slug: category.slug ?? '',
    name: category.name ?? '',
    description: category.description ?? '',
    gifts: (category.gifts ?? []).map(giftFromPb),
  }));
}

type PbUserGift = {
  id?: number;
  gift_id?: number;
  gift?: PbGift;
  sender_id?: number;
  sender?: PbUser;
  receiver_id?: number;
  caption?: string;
  anonymous?: boolean;
  created_at?: string;
};

export function userGiftFromPb(gift: PbUserGift): UserGift {
  return {
    id: Number(gift.id ?? 0),
    gift_id: Number(gift.gift_id ?? 0),
    gift: giftFromPb(gift.gift ?? {}),
    sender_id: Number(gift.sender_id ?? 0),
    sender: gift.sender ? userFromPb(gift.sender) : null,
    receiver_id: Number(gift.receiver_id ?? 0),
    caption: optString(gift.caption),
    anonymous: Boolean(gift.anonymous),
    created_at: gift.created_at ?? '',
  };
}

export function userGiftsFromPb(bytes: Uint8Array): UserGift[] {
  const list = decode<{ gifts?: PbUserGift[] }>('UserGiftList', bytes);
  return (list.gifts ?? []).map(userGiftFromPb);
}

type PbTicketReply = {
  id?: number;
  ticket_id?: number;
  author_id?: number;
  author?: PbUser;
  content?: string;
  from_agent?: boolean;
  created_at?: string;
};

type PbTicket = {
  id?: number;
  author_id?: number;
  author?: PbUser;
  subject?: string;
  content?: string;
  status?: string;
  created_at?: string;
  replies?: PbTicketReply[];
};

function ticketReplyFromPb(reply: PbTicketReply): TicketReply {
  return {
    id: Number(reply.id ?? 0),
    ticket_id: Number(reply.ticket_id ?? 0),
    author_id: Number(reply.author_id ?? 0),
    author: userFromPb(reply.author ?? {}),
    content: reply.content ?? '',
    from_agent: Boolean(reply.from_agent),
    created_at: reply.created_at ?? '',
  };
}

export function ticketFromPb(ticket: PbTicket): Ticket {
  return {
    id: Number(ticket.id ?? 0),
    author_id: Number(ticket.author_id ?? 0),
    author: userFromPb(ticket.author ?? {}),
    subject: ticket.subject ?? '',
    content: ticket.content ?? '',
    status: ticket.status ?? '',
    created_at: ticket.created_at ?? '',
    replies: (ticket.replies ?? []).map(ticketReplyFromPb),
  };
}

export function ticketsFromPb(bytes: Uint8Array): Ticket[] {
  const list = decode<{ tickets?: PbTicket[] }>('TicketList', bytes);
  return (list.tickets ?? []).map(ticketFromPb);
}

type PbReport = {
  id?: number;
  author_id?: number;
  author?: PbUser;
  target_type?: string;
  target_id?: number;
  reason?: string;
  status?: string;
  created_at?: string;
};

export function reportFromPb(report: PbReport): SiteReport {
  return {
    id: Number(report.id ?? 0),
    author_id: Number(report.author_id ?? 0),
    author: userFromPb(report.author ?? {}),
    target_type: report.target_type ?? '',
    target_id: Number(report.target_id ?? 0),
    reason: report.reason ?? '',
    status: report.status ?? '',
    created_at: report.created_at ?? '',
  };
}

export function reportsFromPb(bytes: Uint8Array): SiteReport[] {
  const list = decode<{ reports?: PbReport[] }>('ReportList', bytes);
  return (list.reports ?? []).map(reportFromPb);
}

type PbVoucher = {
  id?: number;
  serial?: string;
  coins?: number;
  remaining?: number;
  total?: number;
  expires_at?: string;
};

export function voucherFromPb(voucher: PbVoucher): Voucher {
  return {
    id: Number(voucher.id ?? 0),
    serial: voucher.serial ?? '',
    coins: Number(voucher.coins ?? 0),
    remaining: Number(voucher.remaining ?? 0),
    total: Number(voucher.total ?? 0),
    expires_at: optString(voucher.expires_at),
  };
}

export function vouchersFromPb(bytes: Uint8Array): Voucher[] {
  const list = decode<{ vouchers?: PbVoucher[] }>('VoucherList', bytes);
  return (list.vouchers ?? []).map(voucherFromPb);
}

type PbBannedLink = {
  id?: number;
  url?: string;
  reason?: string;
  created_at?: string;
};

export function bannedLinkFromPb(link: PbBannedLink): BannedLink {
  return {
    id: Number(link.id ?? 0),
    url: link.url ?? '',
    reason: link.reason ?? '',
    created_at: link.created_at ?? '',
  };
}

export function bannedLinksFromPb(bytes: Uint8Array): BannedLink[] {
  const list = decode<{ links?: PbBannedLink[] }>('BannedLinkList', bytes);
  return (list.links ?? []).map(bannedLinkFromPb);
}

export function warningFromPb(bytes: Uint8Array): Warning {
  const warning = decode<{
    id?: number;
    user_id?: number;
    actor_id?: number;
    reason?: string;
    created_at?: string;
  }>('Warning', bytes);
  return {
    id: Number(warning.id ?? 0),
    user_id: Number(warning.user_id ?? 0),
    actor_id: Number(warning.actor_id ?? 0),
    reason: warning.reason ?? '',
    created_at: warning.created_at ?? '',
  };
}

export function warningsFromPb(bytes: Uint8Array): Warning[] {
  const list = decode<{
    warnings?: {
      id?: number;
      user_id?: number;
      actor_id?: number;
      reason?: string;
      created_at?: string;
    }[];
  }>('WarningList', bytes);
  return (list.warnings ?? []).map((warning) => ({
    id: Number(warning.id ?? 0),
    user_id: Number(warning.user_id ?? 0),
    actor_id: Number(warning.actor_id ?? 0),
    reason: warning.reason ?? '',
    created_at: warning.created_at ?? '',
  }));
}

export function nospamFromPb(bytes: Uint8Array): NospamResult {
  const result = decode<{
    action_id?: number;
    hits?: {
      post_id?: number;
      target_id?: number;
      local_id?: number;
      author_id?: number;
      content?: string;
      permalink?: string;
    }[];
    deleted?: number;
  }>('NospamResult', bytes);
  return {
    action_id: Number(result.action_id ?? 0),
    hits: (result.hits ?? []).map((hit) => ({
      post_id: Number(hit.post_id ?? 0),
      target_id: Number(hit.target_id ?? 0),
      local_id: Number(hit.local_id ?? 0),
      author_id: Number(hit.author_id ?? 0),
      content: hit.content ?? '',
      permalink: hit.permalink ?? '',
    })),
    deleted: Number(result.deleted ?? 0),
  };
}

export function overviewFromPb(bytes: Uint8Array): AdminOverview {
  const overview = decode<AdminOverview>('AdminOverview', bytes);
  return {
    users: Number(overview.users ?? 0),
    groups: Number(overview.groups ?? 0),
    wall_posts: Number(overview.wall_posts ?? 0),
    tickets_open: Number(overview.tickets_open ?? 0),
    reports_open: Number(overview.reports_open ?? 0),
    banned_users: Number(overview.banned_users ?? 0),
  };
}

export function adminUsersFromPb(bytes: Uint8Array): User[] {
  const list = decode<{ users?: PbUser[] }>('AdminUserList', bytes);
  return (list.users ?? []).map(userFromPb);
}

export function adminClubsFromPb(bytes: Uint8Array): Group[] {
  const list = decode<{ groups?: PbGroup[] }>('AdminClubList', bytes);
  return (list.groups ?? []).map(groupFromPb);
}
