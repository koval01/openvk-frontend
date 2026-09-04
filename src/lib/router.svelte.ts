import { overlay } from '../stores/overlay.svelte';

export type RouteName =
  | 'feed'
  | 'profile'
  | 'friends'
  | 'messages'
  | 'settings'
  | 'audio'
  | 'albums'
  | 'groups'
  | 'club'
  | 'videos'
  | 'notes'
  | 'events'
  | 'notifications'
  | 'apps'
  | 'docs'
  | 'search'
  | 'invite'
  | 'support'
  | 'about'
  | 'terms'
  | 'privacy'
  | 'donate'
  | 'blog'
  | 'tour'
  | 'auth'
  | 'language'
  | 'away'
  | 'wall'
  | 'like'
  | 'likers'
  | 'photo'
  | 'video'
  | 'gifts'
  | 'report'
  | 'admin'
  | 'nospam'
  | 'unban'
  | 'coins'
  | 'authorize'
  | 'not-found';

export type Route = {
  name: RouteName;
  userId?: string;
  postId?: string;
  peerId?: string;
  query?: string;
  slug?: string;
  act?: string;
  groupId?: string;
  photoId?: string;
  videoId?: string;
  to?: string;
  banId?: string;
};

function searchParam(search: string, key: string): string | undefined {
  const value = new URLSearchParams(search).get(key);
  return value || undefined;
}

export function parsePath(pathname: string, search = window.location.search): Route {
  const path = pathname.replace(/\/+$/, '') || '/';
  const query = searchParam(search, 'q');
  const act = searchParam(search, 'act');
  if (path === '/' || path === '/feed' || path === '/news') {
    return { name: 'feed' };
  }
  if (path === '/login' || path === '/auth' || path === '/reg') {
    return { name: 'auth' };
  }
  const friendsMatch = path.match(/^\/friends(\d+)$/);
  if (friendsMatch) {
    return { name: 'friends', userId: friendsMatch[1] };
  }
  if (path === '/friends') {
    return { name: 'friends' };
  }
  const imSel = path.match(/^\/im\/sel(\d+)$/);
  if (imSel) {
    return { name: 'messages', peerId: imSel[1] };
  }
  if (path === '/messages' || path === '/im') {
    return { name: 'messages', peerId: searchParam(search, 'sel') };
  }
  if (path === '/settings' || path === '/edit') {
    return { name: 'settings', act };
  }
  const audiosMatch = path.match(/^\/audios(\d+)$/);
  if (audiosMatch) {
    return { name: 'audio', userId: audiosMatch[1] };
  }
  if (path === '/audio' || path === '/player/upload') {
    return { name: 'audio', act: path === '/player/upload' ? 'upload' : act };
  }
  const albumsMatch = path.match(/^\/albums(\d+)$/);
  if (albumsMatch) {
    return { name: 'albums', userId: albumsMatch[1] };
  }
  if (path === '/albums' || path === '/photos') {
    return { name: 'albums' };
  }
  const clubMatch = path.match(/^\/club(\d+)$/);
  if (clubMatch) {
    return { name: 'club', groupId: clubMatch[1] };
  }
  const groupsMatch = path.match(/^\/groups(\d+)$/);
  if (groupsMatch) {
    return { name: 'groups', userId: groupsMatch[1] };
  }
  if (path === '/groups') {
    return { name: 'groups' };
  }
  const videosMatch = path.match(/^\/videos(\d+)$/);
  if (videosMatch) {
    return { name: 'videos', userId: videosMatch[1] };
  }
  if (path === '/videos') {
    return { name: 'videos' };
  }
  if (path === '/notes') {
    return { name: 'notes' };
  }
  if (path === '/events') {
    return { name: 'events' };
  }
  if (path === '/notifications') {
    return { name: 'notifications' };
  }
  if (path === '/apps') {
    return { name: 'apps' };
  }
  if (path === '/docs') {
    return { name: 'docs' };
  }
  if (path === '/search') {
    return { name: 'search', query };
  }
  if (path === '/invite') {
    return { name: 'invite' };
  }
  const supportView = path.match(/^\/support\/view\/(\d+)$/);
  if (supportView) {
    return { name: 'support', postId: supportView[1], act: 'view' };
  }
  if (path === '/support/tickets') {
    return { name: 'support', act: 'list' };
  }
  if (path === '/support') {
    return { name: 'support', act };
  }
  const supportClose = path.match(/^\/support\/ticket(\d+)\/close$/);
  if (supportClose) {
    return { name: 'support', postId: supportClose[1], act: 'close' };
  }
  const supportDelete = path.match(/^\/support\/delete\/(\d+)$/);
  if (supportDelete) {
    return { name: 'support', postId: supportDelete[1], act: 'delete' };
  }
  if (path === '/coins_transfer') {
    return { name: 'coins' };
  }
  if (path === '/unban.php') {
    return { name: 'unban' };
  }
  if (path === '/noSpam' || path === '/al_abuse/search') {
    return { name: 'nospam' };
  }
  if (path === '/scumfeed' || path === '/admin/support/reports') {
    return { name: 'admin', slug: 'reports' };
  }
  const adminReport = path.match(/^\/admin\/report(?:Action)?(\d+)$/);
  if (adminReport) {
    return { name: 'admin', slug: 'report', postId: adminReport[1] };
  }
  const adminUserBans = path.match(/^\/admin\/user(\d+)\/bans$/);
  if (adminUserBans) {
    return { name: 'admin', slug: 'bans', userId: adminUserBans[1] };
  }
  const adminQuick = path.match(/^\/admin\/(ban|unban|warn)\/(\d+)$/);
  if (adminQuick) {
    return { name: 'admin', slug: adminQuick[1], userId: adminQuick[2] };
  }
  const adminSupportBan = path.match(/^\/admin\/support\/(ban|unban)\/(\d+)$/);
  if (adminSupportBan) {
    return { name: 'admin', slug: `support-${adminSupportBan[1]}`, userId: adminSupportBan[2] };
  }
  const adminVoucher = path.match(/^\/admin\/vouchers\/id(\d+)$/);
  if (adminVoucher) {
    return { name: 'admin', slug: 'voucher', postId: adminVoucher[1] };
  }
  const adminUser = path.match(/^\/admin\/users\/id(\d+)$/);
  if (adminUser) {
    return { name: 'admin', slug: 'user', userId: adminUser[1] };
  }
  const adminClub = path.match(/^\/admin\/clubs\/id(\d+)$/);
  if (adminClub) {
    return { name: 'admin', slug: 'club', groupId: adminClub[1] };
  }
  const adminLink = path.match(/^\/admin\/bannedLink\/id(\d+)$/);
  if (adminLink) {
    return { name: 'admin', slug: 'banned-link', postId: adminLink[1] };
  }
  if (path === '/admin/bannedLinks') {
    return { name: 'admin', slug: 'banned-links' };
  }
  const adminGift = path.match(/^\/admin\/gifts\/id(\d+)$/);
  if (adminGift) {
    return { name: 'admin', slug: 'gifts', postId: adminGift[1] };
  }
  if (path.startsWith('/admin/')) {
    const rest = path.slice('/admin/'.length);
    return { name: 'admin', slug: rest || 'overview' };
  }
  if (path === '/admin') {
    return { name: 'admin', slug: 'overview' };
  }
  const reportMatch = path.match(/^\/report\/(\d+)$/);
  if (reportMatch) {
    return {
      name: 'report',
      postId: reportMatch[1],
      userId: searchParam(search, 'owner') ?? searchParam(search, 'user'),
      act: searchParam(search, 'type') ?? 'user',
    };
  }
  const giftImage = path.match(/^\/gift(\d+)_(\d+)\.png$/);
  if (giftImage) {
    return { name: 'gifts', userId: giftImage[1], photoId: giftImage[2], act: 'image' };
  }
  const giftsUser = path.match(/^\/gifts(\d+)$/);
  if (giftsUser) {
    return { name: 'gifts', userId: giftsUser[1] };
  }
  if (path === '/gifts') {
    return { name: 'gifts', userId: searchParam(search, 'user'), act };
  }
  if (path === '/authorize') {
    return { name: 'authorize' };
  }
  if (path === '/about') {
    return { name: 'about' };
  }
  if (path === '/terms') {
    return { name: 'terms' };
  }
  if (path === '/privacy') {
    return { name: 'privacy' };
  }
  if (path === '/donate') {
    return { name: 'donate' };
  }
  if (path === '/blog') {
    return { name: 'blog' };
  }
  if (path === '/tour') {
    return { name: 'tour' };
  }
  if (path === '/language') {
    return { name: 'language' };
  }
  const awayBan = path.match(/^\/away\.php\/(\d+)$/);
  if (awayBan) {
    return { name: 'away', banId: awayBan[1], to: searchParam(search, 'to') };
  }
  if (path === '/away.php') {
    return { name: 'away', to: searchParam(search, 'to') };
  }
  const blogMatch = path.match(/^\/blog\/([a-z0-9-]+)$/);
  if (blogMatch) {
    return { name: 'blog', slug: blogMatch[1] };
  }
  const kbMatch = path.match(/^\/kb\/([a-z0-9-]+)$/);
  if (kbMatch) {
    if (kbMatch[1] === 'rules') {
      return { name: 'terms' };
    }
    if (kbMatch[1] === 'privacy' || kbMatch[1] === 'donate') {
      return { name: kbMatch[1] };
    }
  }
  const wallLike = path.match(/^\/wall(-?\d+)_(\d+)\/(like|likes)$/);
  if (wallLike) {
    return {
      name: wallLike[3] === 'likes' ? 'likers' : 'like',
      userId: wallLike[1],
      postId: wallLike[2],
      act: 'wall',
    };
  }
  const photoLike = path.match(/^\/photo(-?\d+)_(\d+)\/(like|likes)$/);
  if (photoLike) {
    return {
      name: photoLike[3] === 'likes' ? 'likers' : 'like',
      userId: photoLike[1],
      postId: photoLike[2],
      act: 'photo',
    };
  }
  const videoLike = path.match(/^\/video(-?\d+)_(\d+)\/(like|likes)$/);
  if (videoLike) {
    return {
      name: videoLike[3] === 'likes' ? 'likers' : 'like',
      userId: videoLike[1],
      postId: videoLike[2],
      act: 'video',
    };
  }
  const commentLike = path.match(/^\/comment(\d+)\/like$/);
  if (commentLike) {
    return { name: 'like', postId: commentLike[1], act: 'comment' };
  }
  const wallMatch = path.match(/^\/wall(-?\d+)_(\d+)$/);
  if (wallMatch) {
    return { name: 'wall', userId: wallMatch[1], postId: wallMatch[2] };
  }
  const wallOnly = path.match(/^\/wall(-?\d+)$/);
  if (wallOnly) {
    const owner = Number(wallOnly[1]);
    if (owner < 0) {
      return { name: 'club', groupId: String(-owner) };
    }
    return { name: 'profile', userId: wallOnly[1] };
  }
  const photoMatch = path.match(/^\/photo(-?\d+)_(\d+)$/);
  if (photoMatch) {
    return { name: 'photo', userId: photoMatch[1], photoId: photoMatch[2] };
  }
  const videoMatch = path.match(/^\/video(-?\d+)_(\d+)$/);
  if (videoMatch) {
    return { name: 'video', userId: videoMatch[1], videoId: videoMatch[2] };
  }
  const idMatch = path.match(/^\/id(\d+)$/);
  if (idMatch) {
    return { name: 'profile', userId: idMatch[1] };
  }
  const profileMatch = path.match(/^\/profile(?:\/(\d+))?$/);
  if (profileMatch) {
    return { name: 'profile', userId: profileMatch[1] };
  }
  return { name: 'not-found' };
}

/** Left-click without modifier keys — intercept for SPA navigation / overlay. */
export function isPlainLeftClick(event: MouseEvent): boolean {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
}

/** Keep `href` for copy / new tab; only swallow a plain left click. */
export function interceptUnlessModified(event: MouseEvent): boolean {
  if (!isPlainLeftClick(event)) {
    return false;
  }
  event.preventDefault();
  return true;
}

class Router {
  pathname = $state(window.location.pathname);
  search = $state(window.location.search);
  route = $derived(parsePath(this.pathname, this.search));

  constructor() {
    window.addEventListener('popstate', () => {
      overlay.dismiss();
      this.pathname = window.location.pathname;
      this.search = window.location.search;
    });
  }

  goto = (path: string) => {
    const url = new URL(path, window.location.origin);
    if (
      url.pathname === this.pathname &&
      url.search === this.search &&
      url.hash === window.location.hash
    ) {
      return;
    }
    overlay.dismiss();
    overlay.flashLoader();
    history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`);
    this.pathname = url.pathname;
    this.search = url.search;
  };

  handleClick = (event: MouseEvent, path: string) => {
    if (!isPlainLeftClick(event)) {
      return;
    }
    event.preventDefault();
    this.goto(path);
  };
}

export const router = new Router();
