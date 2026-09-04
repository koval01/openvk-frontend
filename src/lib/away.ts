/**
 * OpenVK/VK wrap outbound links as `/away.php?to=…`.
 * There is no PHP; the `.php` path is the 2007 address-bar easter egg.
 */
export function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export function isInternalHref(href: string): boolean {
  if (!href || href.startsWith('mailto:') || href.startsWith('javascript:')) {
    return false;
  }
  if (href.startsWith('/away.php')) {
    return true;
  }
  if (href.startsWith('/') && !href.startsWith('//')) {
    return true;
  }
  try {
    return new URL(href, window.location.origin).origin === window.location.origin;
  } catch {
    return false;
  }
}

export function awayHref(target: string): string {
  const trimmed = target.trim();
  if (!trimmed) {
    return '/';
  }
  if (
    trimmed.startsWith('#') ||
    trimmed.startsWith('mailto:') ||
    trimmed.startsWith('tel:') ||
    trimmed.startsWith('/away.php')
  ) {
    return trimmed;
  }
  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) {
    return trimmed;
  }
  try {
    const url = new URL(trimmed, window.location.origin);
    if (url.origin === window.location.origin) {
      return `${url.pathname}${url.search}${url.hash}`;
    }
    if (url.protocol === 'http:' || url.protocol === 'https:') {
      return `/away.php?to=${encodeURIComponent(url.href)}`;
    }
  } catch {
    return '/';
  }
  return '/';
}

export function decodeAwayTo(raw: string | undefined): string | null {
  if (!raw) {
    return null;
  }
  if (isHttpUrl(raw)) {
    return raw;
  }
  try {
    const decoded = decodeURIComponent(raw);
    return isHttpUrl(decoded) ? decoded : null;
  } catch {
    return null;
  }
}
