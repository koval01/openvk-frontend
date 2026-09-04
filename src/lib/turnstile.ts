const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

/** Invisible always-pass dummy. Visible dummy …AA paints a huge German “Erfolg!” box. */
const DUMMY_PASS_VISIBLE = '1x00000000000000000000AA';
const DUMMY_PASS_INVISIBLE = '1x00000000000000000000BB';
export const DUMMY_TURNSTILE_TOKEN = 'XXXX.DUMMY.TOKEN.XXXX';

const configuredKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
export const TURNSTILE_SITE_KEY =
  !configuredKey || configuredKey === DUMMY_PASS_VISIBLE
    ? DUMMY_PASS_INVISIBLE
    : configuredKey;

function isDummyPassSiteKey(sitekey: string): boolean {
  return sitekey === DUMMY_PASS_VISIBLE || sitekey === DUMMY_PASS_INVISIBLE;
}

export type TurnstileRenderOptions = {
  sitekey: string;
  action?: string;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact' | 'flexible';
  appearance?: 'always' | 'execute' | 'interaction-only';
  callback?: (token: string) => void;
  'expired-callback'?: () => void;
  'error-callback'?: () => void;
};

export type TurnstileApi = {
  render: (element: HTMLElement, options: TurnstileRenderOptions) => string;
  remove: (widgetId: string) => void;
  reset: (widgetId?: string) => void;
  ready: (callback: () => void) => void;
  getResponse: (widgetId?: string) => string;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let loading: Promise<TurnstileApi> | null = null;

export function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) {
    return Promise.resolve(window.turnstile);
  }
  if (loading) {
    return loading;
  }
  loading = new Promise((resolve, reject) => {
    const fail = () => reject(new Error('Turnstile failed to load'));
    const succeed = () => {
      const api = window.turnstile;
      if (!api) {
        fail();
        return;
      }
      resolve(api);
    };
    const existing = document.querySelector<HTMLScriptElement>('script[data-openvk-turnstile]');
    if (existing) {
      existing.addEventListener('load', succeed, { once: true });
      existing.addEventListener('error', fail, { once: true });
      return;
    }
    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    // Dynamic scripts default to async; Cloudflare forbids ready() in that mode,
    // and we only need the API after the load event.
    script.async = false;
    script.dataset.openvkTurnstile = '1';
    script.addEventListener('load', succeed, { once: true });
    script.addEventListener('error', fail, { once: true });
    document.head.appendChild(script);
  });
  return loading;
}

export function attachTurnstile(
  action: string,
  onToken: (token: string) => void,
  appearance: 'light' | 'dark' = 'light',
) {
  return (node: HTMLElement) => {
    if (isDummyPassSiteKey(TURNSTILE_SITE_KEY)) {
      onToken(DUMMY_TURNSTILE_TOKEN);
      return () => onToken('');
    }
    let widgetId: string | undefined;
    let cancelled = false;
    void loadTurnstile()
      .then((api) => {
        if (cancelled) {
          return;
        }
        widgetId = api.render(node, {
          sitekey: TURNSTILE_SITE_KEY,
          action,
          theme: appearance,
          size: 'compact',
          appearance: 'interaction-only',
          callback: onToken,
          'expired-callback': () => onToken(''),
          'error-callback': () => onToken(''),
        });
      })
      .catch(() => {
        if (!cancelled) {
          onToken('');
        }
      });
    return () => {
      cancelled = true;
      if (widgetId) {
        window.turnstile?.remove(widgetId);
      }
    };
  };
}
