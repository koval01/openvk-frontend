export type Language = {
  code: string;
  flag: string;
  name: string;
  nativeName: string;
};

/** OpenVK locales/list.yml. Russian is the source and the fallback. */
export const LANGUAGES: Language[] = [
  { code: 'ru', flag: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'en', flag: 'gb', name: 'English', nativeName: 'English' },
  { code: 'uk', flag: 'ua', name: 'Ukrainian', nativeName: 'Українcька' },
  { code: 'by', flag: 'by', name: 'Belarussian', nativeName: 'Беларуская (Наркамоўка)' },
  { code: 'by_lat', flag: 'by', name: 'Belarussian (Latin)', nativeName: 'Biełaruskaja (Łacinka)' },
  { code: 'pl', flag: 'pl', name: 'Polish', nativeName: 'Polski' },
  { code: 'lv', flag: 'lv', name: 'Latvian', nativeName: 'Latviešu' },
  { code: 'lt', flag: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių' },
  { code: 'de', flag: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'es', flag: 'mx', name: 'Spanish', nativeName: 'Español (México)' },
  { code: 'hy', flag: 'am', name: 'Armenian', nativeName: 'Հայերեն' },
  { code: 'sr_cyr', flag: 'rs', name: 'Serbian (cyrillic)', nativeName: 'Српски (Ћирилица)' },
  { code: 'sr_lat', flag: 'rs', name: 'Serbian (latin)', nativeName: 'Srpski (Latinica)' },
  { code: 'tr', flag: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
  { code: 'kk', flag: 'kz', name: 'Kazakh', nativeName: 'Қазақша' },
  { code: 'kk_lat', flag: 'kz', name: 'Kazakh (Latin)', nativeName: 'Qazaqca (latın)' },
  { code: 'ru_old', flag: 'ru_old', name: 'Pre-revolutionary', nativeName: 'Дореволюцiонный' },
  { code: 'eo', flag: 'eo', name: 'Esperanto', nativeName: 'Esperanto' },
  { code: 'ru_sov', flag: 'su', name: 'Soviet', nativeName: 'Советский' },
  { code: 'ru_lat', flag: 'ru', name: 'Russian (Latin)', nativeName: 'Russkij (Latinica)' },
  { code: 'udm', flag: 'udm', name: 'Udmurtskiy', nativeName: 'Удмуртский' },
  { code: 'zh-Hans', flag: 'cn', name: 'Chinese (Simplified)', nativeName: '简体中文' },
  { code: 'id', flag: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
  { code: 'qqx', flag: 'europeanunion', name: 'qqx', nativeName: 'qqx' },
];

export const DEFAULT_LANGUAGE = 'ru';
export const LOCALE_STORAGE_KEY = 'openvk.lang';
export const LANGUAGE_CODES = new Set(LANGUAGES.map((language) => language.code));

const ALIASES: Record<string, string> = {
  be: 'by',
  'be-latn': 'by_lat',
  'be-by': 'by',
  zh: 'zh-Hans',
  'zh-cn': 'zh-Hans',
  'zh-hans': 'zh-Hans',
  'zh-sg': 'zh-Hans',
  sr: 'sr_cyr',
  'sr-cyrl': 'sr_cyr',
  'sr-latn': 'sr_lat',
  'sr-rs': 'sr_cyr',
  kk: 'kk',
  'kk-latn': 'kk_lat',
  'uk-ua': 'uk',
  'ru-ru': 'ru',
  'en-us': 'en',
  'en-gb': 'en',
};

export function isLanguageCode(value: string | null | undefined): value is string {
  return Boolean(value && LANGUAGE_CODES.has(value));
}

export function languageByCode(code: string): Language | undefined {
  return LANGUAGES.find((language) => language.code === code);
}

/** Map a BCP 47 / Accept-Language tag onto an OpenVK locale code. */
export function matchLanguageTag(tag: string): string | null {
  const raw = tag.trim().toLowerCase().replaceAll('_', '-');
  if (!raw) {
    return null;
  }
  if (LANGUAGE_CODES.has(tag.trim())) {
    return tag.trim();
  }
  if (ALIASES[raw]) {
    return ALIASES[raw];
  }
  const primary = raw.split('-')[0] ?? raw;
  if (LANGUAGE_CODES.has(primary)) {
    return primary;
  }
  if (ALIASES[primary]) {
    return ALIASES[primary];
  }
  return null;
}

export function localeForIntl(code: string): string {
  const map: Record<string, string> = {
    by: 'be',
    by_lat: 'be-Latn',
    sr_cyr: 'sr-Cyrl',
    sr_lat: 'sr-Latn',
    kk_lat: 'kk-Latn',
    ru_old: 'ru',
    ru_sov: 'ru',
    ru_lat: 'ru',
    qqx: 'en',
  };
  return map[code] ?? code;
}

export function flagSrc(flag: string): string {
  return `/assets/packages/static/openvk/img/flags/${flag}.gif`;
}

export function splitNativeName(name: string): { title: string; note?: string } {
  const match = name.match(/^(.+?)\((.+)\)$/);
  if (!match) {
    return { title: name };
  }
  return { title: match[1].trim(), note: match[2].trim() };
}
