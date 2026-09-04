import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { execFileSync } from 'node:child_process';
import { createReadStream, existsSync, statSync } from 'node:fs';
import type { IncomingMessage, ServerResponse } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Connect, Plugin } from 'vite';
import { defineConfig } from 'vite';
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

function mediaRoot(): string {
  const fromEnv = process.env.MEDIA_ROOT?.trim();
  if (fromEnv) {
    return path.resolve(fromEnv);
  }
  return path.resolve(root, '../openvk-backend/data/media');
}

function mediaMime(filePath: string): string {
  switch (path.extname(filePath).toLowerCase()) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.gif':
      return 'image/gif';
    case '.webp':
      return 'image/webp';
    case '.mp3':
      return 'audio/mpeg';
    case '.wav':
      return 'audio/wav';
    case '.ogg':
      return 'audio/ogg';
    case '.m4a':
      return 'audio/mp4';
    case '.aac':
      return 'audio/aac';
    case '.flac':
      return 'audio/flac';
    case '.mp4':
      return 'video/mp4';
    case '.webm':
      return 'video/webm';
    case '.mov':
      return 'video/quicktime';
    default:
      return 'application/octet-stream';
  }
}

function serveDiskMedia(rootDir: string): Connect.NextHandleFunction {
  const resolvedRoot = path.resolve(rootDir);
  return (req: IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      next();
      return;
    }
    const requestPath = decodeURIComponent((req.url ?? '/').split('?')[0] ?? '');
    const relative = requestPath.replace(/^\/+/, '');
    const parts = relative.split('/').filter(Boolean);
    if (parts.length === 0 || parts.some((part) => part === '.' || part === '..')) {
      res.statusCode = 400;
      res.end();
      return;
    }
    const filePath = path.resolve(resolvedRoot, ...parts);
    if (filePath !== resolvedRoot && !filePath.startsWith(resolvedRoot + path.sep)) {
      res.statusCode = 400;
      res.end();
      return;
    }
    if (!existsSync(filePath) || !statSync(filePath).isFile()) {
      next();
      return;
    }
    res.setHeader('Content-Type', mediaMime(filePath));
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Content-Disposition', 'inline');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    if (req.method === 'HEAD') {
      res.end();
      return;
    }
    createReadStream(filePath).pipe(res);
  };
}

function mediaStaticPlugin(): Plugin {
  const rootDir = mediaRoot();
  const middleware = serveDiskMedia(rootDir);
  return {
    name: 'openvk-media-static',
    configureServer(server) {
      server.middlewares.use('/media', middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use('/media', middleware);
    },
  };
}

export default defineConfig({
  define: {
    __OPENVK_BUILD__: JSON.stringify(resolveBuild()),
  },
  plugins: [mediaStaticPlugin(), tailwindcss(), svelte()],
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
    headers: securityHeaders(true),
    proxy: {
      '/api': { target: 'http://127.0.0.1:8080', changeOrigin: true },
      '/media': { target: 'http://127.0.0.1:8080', changeOrigin: true },
      '/health': { target: 'http://127.0.0.1:8080', changeOrigin: true },
      '/ready': { target: 'http://127.0.0.1:8080', changeOrigin: true },
      '/ws': { target: 'ws://127.0.0.1:8080', ws: true },
    },
  },
  preview: {
    port: 4173,
    headers: securityHeaders(false),
    proxy: {
      '/api': { target: 'http://127.0.0.1:8080', changeOrigin: true },
      '/media': { target: 'http://127.0.0.1:8080', changeOrigin: true },
      '/health': { target: 'http://127.0.0.1:8080', changeOrigin: true },
      '/ready': { target: 'http://127.0.0.1:8080', changeOrigin: true },
      '/ws': { target: 'ws://127.0.0.1:8080', ws: true },
    },
  },
});
