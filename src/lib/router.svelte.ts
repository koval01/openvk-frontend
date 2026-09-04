export type RouteName =
  | 'feed'
  | 'profile'
  | 'friends'
  | 'messages'
  | 'settings'
  | 'audio'
  | 'albums'
  | 'groups'
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
  | 'not-found';

export type Route = {
  name: RouteName;
  userId?: string;
  postId?: string;
  peerId?: string;
  query?: string;
  slug?: string;
};

export function parsePath(pathname: string, search = window.location.search): Route {
  const path = pathname.replace(/\/+$/, '') || '/';
  const query = new URLSearchParams(search).get('q') ?? undefined;
  if (path === '/' || path === '/feed' || path === '/news') {
    return { name: 'feed' };
  }
  if (path === '/login' || path === '/auth' || path === '/reg') {
    return { name: 'auth' };
  }
  if (path === '/friends') {
    return { name: 'friends' };
  }
  if (path === '/messages' || path === '/im') {
    return { name: 'messages' };
  }
  if (path === '/settings') {
    return { name: 'settings' };
  }
  if (path === '/audio') {
    return { name: 'audio' };
  }
  if (path === '/albums' || path === '/photos') {
    return { name: 'albums' };
  }
  if (path === '/groups') {
    return { name: 'groups' };
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
  if (path === '/support') {
    return { name: 'support' };
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
  const wallMatch = path.match(/^\/wall(-?\d+)_(\d+)$/);
  if (wallMatch) {
    return { name: 'profile', userId: wallMatch[1], postId: wallMatch[2] };
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

class Router {
  pathname = $state(window.location.pathname);
  search = $state(window.location.search);
  route = $derived(parsePath(this.pathname, this.search));

  constructor() {
    window.addEventListener('popstate', () => {
      this.pathname = window.location.pathname;
      this.search = window.location.search;
    });
  }

  goto = (path: string) => {
    const url = new URL(path, window.location.origin);
    if (url.pathname === this.pathname && url.search === this.search) {
      return;
    }
    history.pushState({}, '', `${url.pathname}${url.search}`);
    this.pathname = url.pathname;
    this.search = url.search;
  };

  handleClick = (event: MouseEvent, path: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    this.goto(path);
  };
}

export const router = new Router();
