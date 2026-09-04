/** Browser CSP for the 2007 SPA (Vite injects eval in dev). */
export function contentSecurityPolicy(dev: boolean): string {
  const script = dev
    ? "'self' 'unsafe-eval' 'unsafe-inline' https://challenges.cloudflare.com"
    : "'self' https://challenges.cloudflare.com";
  return [
    "default-src 'self'",
    `script-src ${script}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "connect-src 'self' ws: wss: https://challenges.cloudflare.com",
    "frame-src https://challenges.cloudflare.com",
    "worker-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join('; ');
}

export function securityHeaders(dev: boolean): Record<string, string> {
  return {
    'Content-Security-Policy': contentSecurityPolicy(dev),
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
    'Cross-Origin-Opener-Policy': 'same-origin',
  };
}
