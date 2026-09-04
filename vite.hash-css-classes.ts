import { createHash } from 'node:crypto';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import postcss from 'postcss';
import type { Plugin } from 'vite';

const CLASS_IDENT = /^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/;
const CLASS_IN_SELECTOR = /\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)/g;
const STYLE_BLOCK = /<style[^>]*>([\s\S]*?)<\/style>/gi;

/** Tailwind utilities stay as-is; we only rename classes that exist in our stylesheets. */
const SKIP = new Set(['svelte']);

export function hashClassName(name: string, used: Set<string>): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (let salt = 0; salt < 256; salt += 1) {
    const digest = createHash('sha256').update(`openvk-css:${name}:${salt}`).digest();
    let n = 0n;
    for (let i = 0; i < 8; i += 1) {
      n = (n << 8n) | BigInt(digest[i] ?? 0);
    }
    let out = '';
    let x = n;
    for (let i = 0; i < 6; i += 1) {
      out = alphabet[Number(x % 62n)] + out;
      x /= 62n;
    }
    if (/^[0-9]/.test(out)) {
      out = `A${out.slice(1)}`;
    }
    // Stay out of Tailwind's lowercase-utility namespace (`hidden`, `static`, …).
    if (!/[A-Z]/.test(out)) {
      out = out[0].toUpperCase() + out.slice(1);
    }
    if (!/\d/.test(out)) {
      out = `${out.slice(0, 5)}${String(digest[8] % 10)}`;
    }
    if (!used.has(out) && CLASS_IDENT.test(out)) {
      return out;
    }
  }
  throw new Error(`could not hash class name ${name} without a collision`);
}

export function collectClassNamesFromCss(css: string): Set<string> {
  const names = new Set<string>();
  const root = postcss.parse(css);
  root.walkRules((rule) => {
    for (const match of rule.selector.matchAll(CLASS_IN_SELECTOR)) {
      const name = match[1];
      if (name && CLASS_IDENT.test(name) && !name.startsWith('svelte-') && !SKIP.has(name)) {
        names.add(name);
      }
    }
  });
  return names;
}

export function rewriteCssSelectors(css: string, map: Map<string, string>): string {
  const root = postcss.parse(css);
  root.walkRules((rule) => {
    rule.selector = rule.selector.replace(CLASS_IN_SELECTOR, (whole, name: string) => {
      const hashed = map.get(name);
      return hashed ? `.${hashed}` : whole;
    });
  });
  return root.toString();
}

function rewriteClassList(value: string, map: Map<string, string>): string {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((name) => map.get(name) ?? name)
    .join(' ');
}

function rewriteStringLiterals(expr: string, map: Map<string, string>): string {
  return expr.replace(/(['"])([^'"]+)\1/g, (whole, quote: string, value: string) => {
    if (value.includes('/') || value.includes('.') || value.includes(':')) {
      return whole;
    }
    const rewritten = rewriteClassList(value, map);
    return rewritten === value ? whole : `${quote}${rewritten}${quote}`;
  });
}

function matchBraces(source: string, openIndex: number): number {
  let depth = 0;
  let inString: string | null = null;
  for (let i = openIndex; i < source.length; i += 1) {
    const char = source[i];
    if (inString) {
      if (char === '\\') {
        i += 1;
        continue;
      }
      if (char === inString) {
        inString = null;
      }
      continue;
    }
    if (char === '"' || char === "'" || char === '`') {
      inString = char;
      continue;
    }
    if (char === '{') {
      depth += 1;
    } else if (char === '}') {
      depth -= 1;
      if (depth === 0) {
        return i;
      }
    }
  }
  return -1;
}

export function rewriteMarkup(source: string, map: Map<string, string>): string {
  let next = source.replace(
    /\bclass=(["'])([^"']*)\1/g,
    (_whole, quote: string, value: string) => `class=${quote}${rewriteClassList(value, map)}${quote}`,
  );
  next = next.replace(/\bclass:([A-Za-z_][\w-]*)=/g, (whole, name: string) => {
    const hashed = map.get(name);
    return hashed ? `class:${hashed}=` : whole;
  });
  next = next.replace(/\bklass:\s*(["'])([^"']+)\1/g, (whole, quote: string, value: string) => {
    const hashed = map.get(value);
    return hashed ? `klass: ${quote}${hashed}${quote}` : whole;
  });

  const needle = 'class={';
  let i = 0;
  let out = '';
  while (i < next.length) {
    const at = next.indexOf(needle, i);
    if (at === -1) {
      out += next.slice(i);
      break;
    }
    out += next.slice(i, at + needle.length);
    const open = at + needle.length - 1;
    const close = matchBraces(next, open);
    if (close < 0) {
      out += next.slice(at + needle.length);
      break;
    }
    out += rewriteStringLiterals(next.slice(open + 1, close), map);
    out += '}';
    i = close + 1;
  }
  return out;
}

async function walkFiles(dir: string, suffix: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === 'dist') {
        continue;
      }
      files.push(...(await walkFiles(full, suffix)));
    } else if (entry.name.endsWith(suffix)) {
      files.push(full);
    }
  }
  return files;
}

export async function collectProjectClassNames(root: string): Promise<Set<string>> {
  const names = new Set<string>();
  const cssFiles = [
    ...(await walkFiles(path.join(root, 'src'), '.css')),
    ...(await walkFiles(path.join(root, 'public'), '.css')),
  ];
  for (const file of cssFiles) {
    const normalized = file.replaceAll('\\', '/');
    if (normalized.endsWith('/src/styles/shadcn.css')) {
      continue;
    }
    const css = await readFile(file, 'utf8');
    for (const name of collectClassNamesFromCss(css)) {
      names.add(name);
    }
  }
  for (const file of await walkFiles(path.join(root, 'src'), '.svelte')) {
    const source = await readFile(file, 'utf8');
    for (const block of source.matchAll(STYLE_BLOCK)) {
      const css = block[1];
      if (!css) {
        continue;
      }
      for (const name of collectClassNamesFromCss(css)) {
        names.add(name);
      }
    }
  }
  return names;
}

export function buildClassMap(names: Iterable<string>): Map<string, string> {
  const used = new Set<string>();
  const map = new Map<string, string>();
  const sorted = [...names].sort();
  for (const name of sorted) {
    const hashed = hashClassName(name, used);
    used.add(hashed);
    map.set(name, hashed);
  }
  return map;
}

export function hashCssClasses(): Plugin {
  let root = process.cwd();
  let outDir = 'dist';
  let map = new Map<string, string>();

  return {
    name: 'openvk-hash-css-classes',
    apply: 'build',
    enforce: 'pre',
    // Dev keeps OpenVK class names so Playwright and the Latte templates still match.
    // CSS_HASH=0 disables hashing for a production-shaped build.
    async configResolved(config) {
      root = config.root;
      outDir = path.resolve(config.root, config.build.outDir);
      if (process.env.CSS_HASH === '0') {
        map = new Map();
        return;
      }
      map = buildClassMap(await collectProjectClassNames(root));
      config.logger.info(`css class hash: ${map.size} names`);
    },
    transform(code, id) {
      if (map.size === 0) {
        return null;
      }
      const file = id.split('?')[0] ?? id;
      if (file.includes('/node_modules/')) {
        return null;
      }
      if (file.endsWith('.css')) {
        return { code: rewriteCssSelectors(code, map), map: null };
      }
      if (file.endsWith('.svelte')) {
        if (/\bclass=(["'])[^"'=]*\{/.test(code)) {
          this.error(
            `${file}: class="…{expr}" cannot be hashed; use class={['name', cond && 'other']}`,
          );
        }
        let next = rewriteMarkup(code, map);
        next = next.replace(
          /<style([^>]*)>([\s\S]*?)<\/style>/gi,
          (_whole, attrs: string, css: string) =>
            `<style${attrs}>${rewriteCssSelectors(css, map)}</style>`,
        );
        return { code: next, map: null };
      }
      return null;
    },
    generateBundle(_options, bundle) {
      if (map.size === 0) {
        return;
      }
      // Tailwind inlines @import and emits this CSS without going through transform().
      for (const item of Object.values(bundle)) {
        if (item.type !== 'asset' || !item.fileName.endsWith('.css')) {
          continue;
        }
        const source =
          typeof item.source === 'string' ? item.source : Buffer.from(item.source).toString('utf8');
        item.source = rewriteCssSelectors(source, map);
      }
    },
    async closeBundle() {
      if (map.size === 0) {
        return;
      }
      const vendorCss = path.join(outDir, 'assets/packages/static/openvk/css');
      let files: string[] = [];
      try {
        files = (await readdir(vendorCss)).filter((name) => name.endsWith('.css'));
      } catch {
        return;
      }
      for (const name of files) {
        const file = path.join(vendorCss, name);
        const css = await readFile(file, 'utf8');
        await writeFile(file, rewriteCssSelectors(css, map));
      }
    },
  };
}
