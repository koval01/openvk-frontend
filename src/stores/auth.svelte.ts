import { api } from '../services/api';
import { demoUser, type User } from '../services/types';
import { wsStore } from './ws.svelte';

const TOKEN_KEY = 'openvk.token';
const USER_KEY = 'openvk.user';

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
    privacy_wall: user.privacy_wall ?? 'everyone',
    privacy_messages: user.privacy_messages ?? 'everyone',
  };
}

class AuthStore {
  token = $state<string | null>(localStorage.getItem(TOKEN_KEY));
  user = $state<User | null>(readUser());
  error = $state<string | null>(null);
  pending = $state(false);
  isAuthenticated = $derived(this.token !== null);

  displayName = $derived(
    this.user ? `${this.user.first_name} ${this.user.last_name}` : 'Guest',
  );

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
      this.error = error instanceof Error ? error.message : 'Login failed';
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
      this.error = error instanceof Error ? error.message : 'Could not create the account';
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
