import {
  DARK_THEME,
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  applyTheme,
  parseThemeId,
  type ThemeId,
} from '../lib/theme';

function readStoredTheme(): ThemeId {
  try {
    return parseThemeId(localStorage.getItem(THEME_STORAGE_KEY));
  } catch {
    return 'default';
  }
}

class ThemeStore {
  id = $state<ThemeId>(readStoredTheme());
  isDark = $derived(this.id === 'dark');

  constructor() {
    applyTheme(this.id === 'dark' ? DARK_THEME : DEFAULT_THEME);
  }

  set = (id: ThemeId) => {
    this.id = id;
    localStorage.setItem(THEME_STORAGE_KEY, id);
    applyTheme(id === 'dark' ? DARK_THEME : DEFAULT_THEME);
  };
}

export const theme = new ThemeStore();
