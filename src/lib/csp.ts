/**
 * Browser CSP for the 2007 SPA (Vite injects eval in dev).
 *
 * Photos, audio and video are served by the bucket host, so that origin has to
 * be allowed for images and media. In dev the host is proxied under /media and
 * stays same-origin, so `mediaOrigin` is only needed in production.
 */
export function contentSecurityPolicy(dev: boolean, mediaOrigin = ''): string {
  const script = dev
    ? "'self' 'unsafe-eval' 'unsafe-inline' https://challenges.cloudflare.com"
    : "'self' https://challenges.cloudflare.com";
  const media = mediaOrigin.trim().replace(/\/+$/, '');
  const mediaSource = media ? ` ${media}` : '';
  // `'self'` is the page origin only. localhost ≠ 127.0.0.1, so a tab on one
  // host cannot load /media from the other unless both loopbacks are listed.
  const loopback = dev
    ? ' http://127.0.0.1:5173 http://localhost:5173 http://[::1]:5173 http://127.0.0.1:4173 http://localhost:4173'
    : '';
  return [
    "default-src 'self'",
    `script-src ${script}`,
    "style-src 'self' 'unsafe-inline'",
    `img-src 'self' data: blob:${mediaSource}${loopback} https://tile.openstreetmap.org https://a.tile.openstreetmap.org https://b.tile.openstreetmap.org https://c.tile.openstreetmap.org`,
    `media-src 'self' blob:${mediaSource}${loopback}`,
    "font-src 'self'",
    "connect-src 'self' ws: wss: https://challenges.cloudflare.com https://nominatim.openstreetmap.org",
    "frame-src https://challenges.cloudflare.com",
    "worker-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join('; ');
}

export function securityHeaders(dev: boolean, mediaOrigin = ''): Record<string, string> {
  return {
    'Content-Security-Policy': contentSecurityPolicy(dev, mediaOrigin),
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(self), payment=(), usb=()',
    'Cross-Origin-Opener-Policy': 'same-origin',
  };
}
