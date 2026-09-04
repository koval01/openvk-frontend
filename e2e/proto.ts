import { decodeMessage, encodeMessage } from '../src/proto/runtime';

export const PROTOBUF_MIME = 'application/x-protobuf';

export function encodeProto(name: string, payload: object): Buffer {
  return Buffer.from(encodeMessage(name, payload));
}

export function decodeProto<T>(name: string, bytes: Uint8Array): T {
  return decodeMessage<T>(name, bytes);
}
