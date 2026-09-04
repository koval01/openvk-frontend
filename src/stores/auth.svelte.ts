import { ApiError, api } from '../services/api';
import { demoUser, rewriteMediaUrl, type User } from '../services/types';
import { locale } from './locale.svelte';
import { wsStore } from './ws.svelte';

const TOKEN_KEY = 'openvk.token';
const USER_KEY = 'openvk.user';

/** OpenVK flash message: bold title plus an explanation, both localized. */
export type AuthFlash = { title: string; message: string };

function flash(titleKey: string, messageKey: string): AuthFlash {
  return { title: locale.t(titleKey), message: locale.t(messageKey) };
}

function loginFlash(error: unknown): AuthFlash {
  if (!(error instanceof ApiError)) {
    return flash('error', 'connection_error');
  }
  switch (error.status) {
    case 400:
      return error.code === 'validation_error' && error.message.includes('required')
        ? flash('login_failed', 'error_insufficient_info')
        : flash('login_failed', 'invalid_username_or_password');
    case 401:
      return flash('login_failed', 'invalid_username_or_password');
    case 403:
      if (error.code === 'banned') {
        return { title: locale.t('error'), message: error.message };
      }
      return flash('error', 'forbidden');
    case 429:
      return flash('rate_limit_error', 'password_reset_rate_limit_error');
    default:
      return flash('login_failed', 'unknown_error');
  }
}

function registerFlash(error: unknown): AuthFlash {
  if (!(error instanceof ApiError)) {
    return flash('error', 'connection_error');
  }
  switch (error.status) {
    case 400:
      if (error.code !== 'validation_error') {
        return flash('failed_to_register', 'unknown_error');
      }
      if (error.message.includes('already taken')) {
        return flash('failed_to_register', 'user_already_exists');
      }
      if (error.message.includes('8 characters')) {
        return flash('failed_to_register', 'error_weak_password');
      }
      return flash('failed_to_register', 'error_insufficient_info');
    case 403:
      return flash('error', 'forbidden');
    case 429:
      return flash('rate_limit_error', 'password_reset_rate_limit_error');
    default:
      return flash('failed_to_register', 'unknown_error');
  }
}

function readUser(): User | null {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) {
    return null;
  }
  try {
    return normalizeUser(JSON.parse(raw) as User);
  } catch {
    return null;
  }
}

function normalizeUser(user: User): User {
  return {
    ...user,
    avatar_url: user.avatar_url ? rewriteMediaUrl(user.avatar_url) : user.avatar_url,
    privacy_wall: user.privacy_wall ?? 'everyone',
    privacy_messages: user.privacy_messages ?? 'everyone',
    privacy_photos: user.privacy_photos ?? 'everyone',
    privacy_audio: user.privacy_audio ?? 'everyone',
    privacy_profile: user.privacy_profile ?? 'everyone',
    privacy_friends: user.privacy_friends ?? 'everyone',
    coins: user.coins ?? 0,
    rating: user.rating ?? 0,
    role: user.role ?? 'user',
    banned: Boolean(user.banned),
    posting_allowed: user.posting_allowed !== false,
    messaging_allowed: user.messaging_allowed !== false,
  };
}

class AuthStore {
  token = $state<string | null>(localStorage.getItem(TOKEN_KEY));
  user = $state<User | null>(readUser());
  error = $state<AuthFlash | null>(null);
  pending = $state(false);
  isAuthenticated = $derived(this.token !== null);

  displayName = $derived(
    this.user ? `${this.user.first_name} ${this.user.last_name}` : 'Guest',
  );

  fail = (titleKey: string, messageKey: string) => {
    this.error = flash(titleKey, messageKey);
  };

  setSession = (token: string, user: User) => {
    this.token = token;
    this.user = user;
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    wsStore.connect();
  };

  updateUser = (user: User) => {
    this.user = user;
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  };

  logout = () => {
    const token = this.token;
    this.token = null;
    this.user = null;
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    wsStore.disconnect();
    if (token) {
      void api.logout(token);
    }
  };

  login = async (login: string, password: string, turnstileToken: string) => {
    this.pending = true;
    this.error = null;
    try {
      const response = await api.login(login, password, turnstileToken);
      const profile =
        (await api.user(response.user_id, response.token).catch(() => null)) ?? {
          ...demoUser,
          id: response.user_id,
        };
      this.setSession(response.token, profile);
    } catch (error) {
      this.error = loginFlash(error);
      throw error;
    } finally {
      this.pending = false;
    }
  };

  register = async (login: string, password: string, turnstileToken: string) => {
    this.pending = true;
    this.error = null;
    try {
      const response = await api.register(login, password, turnstileToken);
      const profile =
        (await api.user(response.user_id, response.token).catch(() => null)) ?? {
          ...demoUser,
          id: response.user_id,
        };
      this.setSession(response.token, profile);
    } catch (error) {
      this.error = registerFlash(error);
      throw error;
    } finally {
      this.pending = false;
    }
  };
}

export const auth = new AuthStore();

if (auth.isAuthenticated) {
  wsStore.connect();
}
