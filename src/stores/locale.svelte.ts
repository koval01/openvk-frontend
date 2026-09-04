import { applyDocumentLanguage, detectLanguage, persistLanguage } from '../lib/detectLocale';
import { DEFAULT_LANGUAGE, isLanguageCode, localeForIntl } from '../lib/languages';
import { extraCatalog } from '../locales/extra';
import {
  extractIncludes,
  interpolate,
  parseStrings,
  pluralKey,
  type Catalog,
} from '../lib/stringsFormat';

const cache = new Map<string, Catalog>();
const inflight = new Map<string, Promise<Catalog>>();

async function fetchCatalog(code: string, stack: string[] = []): Promise<Catalog> {
  const hit = cache.get(code);
  if (hit) {
    return hit;
  }
  const pending = inflight.get(code);
  if (pending) {
    return pending;
  }
  if (stack.includes(code)) {
    return {};
  }

  const load = (async () => {
    const response = await fetch(`/locales/${encodeURIComponent(code)}.strings`);
    if (!response.ok) {
      throw new Error(`locale ${code} is missing`);
    }
    const source = await response.text();
    const catalog: Catalog = {};
    for (const included of extractIncludes(source)) {
      Object.assign(catalog, await fetchCatalog(included, [...stack, code]));
    }
    Object.assign(catalog, parseStrings(source));
    cache.set(code, catalog);
    inflight.delete(code);
    return catalog;
  })();

  inflight.set(code, load);
  return load;
}

function mergeCatalogs(code: string, openvk: Catalog, fallback: Catalog): Catalog {
  return {
    ...fallback,
    ...extraCatalog(DEFAULT_LANGUAGE),
    ...openvk,
    ...extraCatalog(code),
  };
}

class LocaleStore {
  code = $state(DEFAULT_LANGUAGE);
  ready = $state(false);
  catalog = $state<Catalog>({ ...extraCatalog(DEFAULT_LANGUAGE) });
  #fallback: Catalog = extraCatalog(DEFAULT_LANGUAGE);

  constructor() {
    this.code = detectLanguage();
    applyDocumentLanguage(this.code);
    void this.#boot();
  }

  t = (key: string, ...args: Array<string | number>): string => {
    if (this.code === 'qqx') {
      return key;
    }
    const template = this.catalog[key] ?? this.#fallback[key];
    if (template === undefined) {
      return `@${key}`;
    }
    return args.length ? interpolate(template, args) : template;
  };

  count = (base: string, n: number): string => {
    const locale = localeForIntl(this.code);
    const key = pluralKey(base, n, locale);
    if (this.catalog[key] || this.#fallback[key]) {
      return this.t(key, n);
    }
    if (this.catalog[`${base}_other`] || this.#fallback[`${base}_other`]) {
      return this.t(`${base}_other`, n);
    }
    return this.t(base, n);
  };

  set = async (code: string) => {
    if (!isLanguageCode(code)) {
      return;
    }
    persistLanguage(code);
    applyDocumentLanguage(code);
    this.code = code;
    await this.#apply(code);
  };

  async #boot() {
    try {
      this.#fallback = await fetchCatalog(DEFAULT_LANGUAGE);
    } catch {
      this.#fallback = extraCatalog(DEFAULT_LANGUAGE);
    }
    await this.#apply(this.code);
    this.ready = true;
  }

  async #apply(code: string) {
    if (code === DEFAULT_LANGUAGE) {
      this.catalog = mergeCatalogs(code, this.#fallback, this.#fallback);
      return;
    }
    try {
      const overlay = await fetchCatalog(code);
      this.catalog = mergeCatalogs(code, overlay, this.#fallback);
    } catch {
      this.catalog = mergeCatalogs(DEFAULT_LANGUAGE, this.#fallback, this.#fallback);
    }
  }
}

export const locale = new LocaleStore();
