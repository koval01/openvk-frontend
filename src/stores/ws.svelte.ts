import { createReconnectSocket } from '../services/ws';
import type { SocketEvent } from '../services/ws';

const WS_URL = import.meta.env.VITE_WS_URL ?? `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/ws`;

class WsStore {
  connected = $state(false);
  lastEvent = $state<SocketEvent | null>(null);
  events = $state<SocketEvent[]>([]);
  #client: ReturnType<typeof createReconnectSocket> | null = null;

  connect = () => {
    if (this.#client) {
      return;
    }
    this.#client = createReconnectSocket(WS_URL, {
      onStatus: (connected) => {
        this.connected = connected;
      },
      onMessage: (event) => {
        this.lastEvent = event;
        this.events = [...this.events.slice(-49), event];
      },
    });
  };

  disconnect = () => {
    this.#client?.disconnect();
    this.#client = null;
    this.connected = false;
  };

  send = (payload: unknown) => {
    this.#client?.send(payload);
  };
}

export const wsStore = new WsStore();
