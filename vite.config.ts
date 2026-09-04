import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { hashCssClasses } from './vite.hash-css-classes.ts';
import { securityHeaders } from './src/lib/csp';

const root = path.dirname(fileURLToPath(import.meta.url));

function resolveBuild(): string {
  const fromEnv = process.env.OPENVK_BUILD?.trim();
  if (fromEnv) {
    return fromEnv;
  }
  try {
    return execFileSync('git', ['rev-parse', '--short=7', 'HEAD'], {
      cwd: root,
      encoding: 'utf8',
    }).trim();
  } catch {
    return 'unknown';
  }
}

/**
 * In production media is read from its own host (nginx in front of Silo, or a
 * CDN). In development we keep it same-origin by proxying /media to the bucket,
 * so the dev server behaves like that host without loosening the CSP.
 */
const MEDIA_TARGET = process.env.MEDIA_PROXY_TARGET?.trim() || 'http://127.0.0.1:9000';
const MEDIA_BUCKET = process.env.MEDIA_BUCKET?.trim() || 'openvk';
/** Set when the deployed site reads media from another origin; empty in dev. */
const MEDIA_ORIGIN = process.env.VITE_MEDIA_ORIGIN?.trim() ?? '';

const apiProxy = {
  '/api': { target: 'http://127.0.0.1:8080', changeOrigin: true },
  '/method': { target: 'http://127.0.0.1:8080', changeOrigin: true },
  '/token': { target: 'http://127.0.0.1:8080', changeOrigin: true },
  '/oauth': { target: 'http://127.0.0.1:8080', changeOrigin: true },
  '/health': { target: 'http://127.0.0.1:8080', changeOrigin: true },
  '/ready': { target: 'http://127.0.0.1:8080', changeOrigin: true },
  '/ws': { target: 'ws://127.0.0.1:8080', ws: true },
  '/media': {
    target: MEDIA_TARGET,
    changeOrigin: true,
    rewrite: (requestPath: string) => requestPath.replace(/^\/media/, `/${MEDIA_BUCKET}`),
  },
};

export default defineConfig({
  define: {
    __OPENVK_BUILD__: JSON.stringify(resolveBuild()),
  },
  resolve: {
    alias: {
      $lib: path.resolve(root, 'src/lib'),
    },
  },
  plugins: [hashCssClasses(), tailwindcss(), svelte()],
  build: {
    target: 'es2022',
    cssMinify: true,
    minify: true,
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    headers: securityHeaders(true, MEDIA_ORIGIN),
    proxy: apiProxy,
  },
  preview: {
    port: 4173,
    headers: securityHeaders(false, MEDIA_ORIGIN),
    proxy: apiProxy,
  },
});
