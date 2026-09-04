import {
  DEFAULT_LANGUAGE,
  LOCALE_STORAGE_KEY,
  isLanguageCode,
  matchLanguageTag,
} from './languages';

export function readStoredLanguage(): string | null {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLanguageCode(stored) ? stored : null;
  } catch {
    return null;
  }
}

function languageFromUrl(): string | null {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path !== '/language') {
    return null;
  }
  const requested = new URLSearchParams(window.location.search).get('lg');
  return isLanguageCode(requested) ? requested : null;
}

/** OpenVK: ?lg= on /language, else stored choice, else first language tag, else Russian. */
export function detectLanguage(languages: readonly string[] = navigator.languages): string {
  const fromUrl = languageFromUrl();
  if (fromUrl) {
    persistLanguage(fromUrl);
    return fromUrl;
  }
  const stored = readStoredLanguage();
  if (stored) {
    return stored;
  }
  for (const tag of languages) {
    const matched = matchLanguageTag(tag);
    if (matched) {
      return matched;
    }
  }
  return DEFAULT_LANGUAGE;
}

export function persistLanguage(code: string) {
  localStorage.setItem(LOCALE_STORAGE_KEY, code);
}

export function applyDocumentLanguage(code: string) {
  document.documentElement.lang = code === 'qqx' ? 'en' : code.split('_')[0] ?? code;
}
