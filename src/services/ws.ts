import { asArrayBuffer, decodeSocketEvent, encodeSocketEvent } from '../proto/wire';

export type SocketEvent = {
  type: string;
  payload?: unknown;
  ts?: number;
};

export type SocketHandlers = {
  onMessage?: (event: SocketEvent) => void;
  onStatus?: (connected: boolean) => void;
};

export function createReconnectSocket(url: string, handlers: SocketHandlers) {
  let socket: WebSocket | null = null;
  let attempts = 0;
  let stopped = false;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const connect = () => {
    if (stopped) {
      return;
    }

    socket = new WebSocket(url);
    socket.binaryType = 'arraybuffer';
    socket.addEventListener('open', () => {
      attempts = 0;
      handlers.onStatus?.(true);
    });
    socket.addEventListener('message', (message) => {
      try {
        if (message.data instanceof ArrayBuffer) {
          handlers.onMessage?.(decodeSocketEvent(new Uint8Array(message.data)));
          return;
        }
        if (message.data instanceof Blob) {
          void message.data.arrayBuffer().then((buffer) => {
            handlers.onMessage?.(decodeSocketEvent(new Uint8Array(buffer)));
          });
          return;
        }
        handlers.onMessage?.({ type: 'raw', payload: message.data });
      } catch {
        handlers.onMessage?.({ type: 'raw', payload: message.data });
      }
    });
    socket.addEventListener('close', () => {
      handlers.onStatus?.(false);
      schedule();
    });
    socket.addEventListener('error', () => {
      socket?.close();
    });
  };

  const schedule = () => {
    if (stopped) {
      return;
    }
    const delay = Math.min(1000 * 2 ** attempts, 15_000);
    attempts += 1;
    timer = setTimeout(connect, delay);
  };

  connect();

  return {
    send(data: unknown) {
      if (socket?.readyState !== WebSocket.OPEN) {
        return;
      }
      if (data instanceof Uint8Array) {
        socket.send(asArrayBuffer(data));
        return;
      }
      if (typeof data === 'object' && data && 'type' in data) {
        const event = data as SocketEvent;
        socket.send(asArrayBuffer(encodeSocketEvent(event)));
        return;
      }
      socket.send(asArrayBuffer(encodeSocketEvent({ type: 'client', payload: data })));
    },
    disconnect() {
      stopped = true;
      if (timer !== undefined) {
        clearTimeout(timer);
      }
      socket?.close();
      socket = null;
    },
  };
}
