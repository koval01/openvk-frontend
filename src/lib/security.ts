import { PROTOBUF_MIME, asArrayBuffer, challengeFromPb } from '../proto/wire';

const API_BASE = import.meta.env.VITE_API_URL ?? '';

export type Challenge = {
  csrf_token: string;
  challenge_id: string;
  nonce: string;
  expires_in: number;
  alg: string;
  public_key: string;
};

let csrfToken = '';

export function currentCsrf(): string {
  return csrfToken;
}

export function clearCsrf() {
  csrfToken = '';
}

export async function refreshChallenge(): Promise<Challenge> {
  const response = await fetch(`${API_BASE}/api/v1/security/challenge`, {
    headers: { Accept: PROTOBUF_MIME },
    credentials: 'same-origin',
  });
  if (!response.ok) {
    throw new Error('Could not start a secure session');
  }
  const challenge = challengeFromPb(new Uint8Array(await response.arrayBuffer()));
  csrfToken = challenge.csrf_token;
  return challenge;
}

export async function ensureCsrf(): Promise<string> {
  if (csrfToken) {
    return csrfToken;
  }
  await refreshChallenge();
  return csrfToken;
}

export async function sealFields(
  publicKeyB64: string,
  nonce: string,
  fields: string[],
): Promise<string> {
  const der = Uint8Array.from(atob(publicKeyB64), (char) => char.charCodeAt(0));
  const key = await crypto.subtle.importKey(
    'spki',
    der,
    { name: 'RSA-OAEP', hash: 'SHA-256' },
    false,
    ['encrypt'],
  );
  const sealed = await crypto.subtle.encrypt(
    { name: 'RSA-OAEP' },
    key,
    asArrayBuffer(encodeFields(nonce, fields)),
  );
  return bytesToBase64(new Uint8Array(sealed));
}

function encodeFields(nonce: string, fields: string[]): Uint8Array {
  const encoder = new TextEncoder();
  const parts = [encoder.encode(nonce), ...fields.map((field) => encoder.encode(field))];
  let length = Math.max(0, parts.length - 1);
  for (const part of parts) {
    length += part.length;
  }
  const out = new Uint8Array(length);
  let offset = 0;
  for (const [index, part] of parts.entries()) {
    if (index > 0) {
      out[offset] = 0;
      offset += 1;
    }
    out.set(part, offset);
    offset += part.length;
  }
  return out;
}

function bytesToBase64(bytes: Uint8Array): string {
  let binary = '';
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}
