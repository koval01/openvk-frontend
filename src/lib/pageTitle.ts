import { locale } from '../stores/locale.svelte';

/** Official 2007 tab title: `В Контакте | Добро пожаловать`. */
export function documentTitle(page: string): string {
  const site = locale.t('site_name');
  const part = page.trim();
  return part ? `${site} | ${part}` : site;
}
