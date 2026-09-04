import { openvk } from './generated.js';

const CONVERSION = {
  longs: Number,
  enums: Number,
  bytes: String,
  defaults: true,
  arrays: true,
  objects: false,
  oneofs: true,
};

type Codec = {
  encode: (message: object) => { finish: () => Uint8Array };
  decode: (bytes: Uint8Array) => object;
  toObject: (message: object, options?: object) => object;
};

function lookup(name: string): Codec {
  const type = (openvk.v1 as Record<string, unknown>)[name];
  if (!type || typeof (type as Codec).encode !== 'function') {
    throw new Error(`unknown protobuf type ${name}`);
  }
  return type as Codec;
}

export function encodeMessage(name: string, payload: object): Uint8Array {
  return lookup(name).encode(payload).finish();
}

export function decodeMessage<T>(name: string, bytes: Uint8Array): T {
  const type = lookup(name);
  return type.toObject(type.decode(bytes), CONVERSION) as T;
}

export function asArrayBuffer(bytes: Uint8Array): ArrayBuffer {
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer;
}
