/** Packed site theme. Default and dark use this one binary layout — not themepacks. */

export const THEME_STORAGE_KEY = 'openvk.theme';
export const THEME_MAGIC = 'OVK1';

export type ThemeId = 'default' | 'dark';

export const TOKEN_KEYS = [
  'page',
  'surface',
  'surface-alt',
  'text',
  'muted',
  'link',
  'title',
  'border',
  'hover',
  'button',
  'button-text',
  'notice',
  'notice-border',
  'header-link',
  'post-author',
  'input',
  'error',
] as const;

export type TokenKey = (typeof TOKEN_KEYS)[number];
export type ThemeTokens = Record<TokenKey, string>;

export type DecodedTheme = {
  id: ThemeId;
  tokens: ThemeTokens;
};

const DEFAULT_COLORS: ThemeTokens = {
  page: '#ffffff',
  surface: '#ffffff',
  'surface-alt': '#f6f6f6',
  text: '#000000',
  muted: '#777777',
  link: '#2b587a',
  title: '#45688e',
  border: '#d5dde6',
  hover: '#dae1e8',
  button: '#2b587a',
  'button-text': '#ffffff',
  notice: '#fff9d7',
  'notice-border': '#e2c822',
  'header-link': '#dae1e8',
  'post-author': '#f0f0f0',
  input: '#ffffff',
  error: '#9a205e',
};

/** True-black inverse of the white 2007 site. VK blue stays the accent. */
const DARK_COLORS: ThemeTokens = {
  page: '#000000',
  surface: '#000000',
  'surface-alt': '#0a0a0a',
  text: '#ececec',
  muted: '#8a8a8a',
  link: '#8cb6d4',
  title: '#9ec4de',
  border: '#1f1f1f',
  hover: '#121212',
  button: '#2b587a',
  'button-text': '#ffffff',
  notice: '#0c0a00',
  'notice-border': '#6e5c14',
  'header-link': '#c8c8c8',
  'post-author': '#0a0a0a',
  input: '#000000',
  error: '#e8789a',
};

export const DEFAULT_THEME = encodeTheme('default', DEFAULT_COLORS);
export const DARK_THEME = encodeTheme('dark', DARK_COLORS);

export function parseThemeId(value: string | null | undefined): ThemeId {
  return value === 'dark' ? 'dark' : 'default';
}

export function themeBinary(id: ThemeId): Uint8Array {
  return id === 'dark' ? DARK_THEME : DEFAULT_THEME;
}

export function encodeTheme(id: ThemeId, tokens: ThemeTokens): Uint8Array {
  const bytes = new Uint8Array(4 + 1 + TOKEN_KEYS.length * 3);
  bytes.set([0x4f, 0x56, 0x4b, 0x31]);
  bytes[4] = id === 'dark' ? 1 : 0;
  TOKEN_KEYS.forEach((key, index) => {
    const [red, green, blue] = hexToRgb(tokens[key]);
    const offset = 5 + index * 3;
    bytes[offset] = red;
    bytes[offset + 1] = green;
    bytes[offset + 2] = blue;
  });
  return bytes;
}

export function decodeTheme(bytes: Uint8Array): DecodedTheme {
  if (bytes.length < 5 + TOKEN_KEYS.length * 3) {
    throw new Error('theme binary is truncated');
  }
  const magic = String.fromCharCode(bytes[0], bytes[1], bytes[2], bytes[3]);
  if (magic !== THEME_MAGIC) {
    throw new Error(`unknown theme magic ${magic}`);
  }
  const id: ThemeId = bytes[4] === 1 ? 'dark' : 'default';
  const tokens = {} as ThemeTokens;
  TOKEN_KEYS.forEach((key, index) => {
    const offset = 5 + index * 3;
    tokens[key] = rgbToHex(bytes[offset], bytes[offset + 1], bytes[offset + 2]);
  });
  return { id, tokens };
}

export function applyTheme(bytes: Uint8Array, root: HTMLElement = document.documentElement) {
  const theme = decodeTheme(bytes);
  root.dataset.theme = theme.id;
  root.style.colorScheme = theme.id === 'dark' ? 'dark' : 'light';
  for (const key of TOKEN_KEYS) {
    root.style.setProperty(`--ovk-${key}`, theme.tokens[key]);
  }
}

function hexToRgb(hex: string): [number, number, number] {
  const value = hex.replace('#', '');
  return [
    Number.parseInt(value.slice(0, 2), 16),
    Number.parseInt(value.slice(2, 4), 16),
    Number.parseInt(value.slice(4, 6), 16),
  ];
}

function rgbToHex(red: number, green: number, blue: number): string {
  return `#${[red, green, blue].map((part) => part.toString(16).padStart(2, '0')).join('')}`;
}
