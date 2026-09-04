import { waitForTurnstile } from './helpers';
import { decodeProto, encodeProto, PROTOBUF_MIME } from './proto';
import { expect, test } from './fixtures';

test('the always-pass widget unlocks login and register', async ({ page }) => {
  await page.goto('/login');
  await waitForTurnstile(page);
  await expect(page.getByTestId('turnstile')).toBeAttached();

  await page.getByTestId('auth-toggle').click();
  await waitForTurnstile(page);
  await expect(page.getByTestId('turnstile')).toBeAttached();
});

test('the API rejects login without a Turnstile token', async ({ request }) => {
  const challenge = await request.get('/api/v1/security/challenge', {
    headers: { Accept: PROTOBUF_MIME },
  });
  expect(challenge.ok()).toBeTruthy();
  const issued = decodeProto<{
    csrf_token: string;
    challenge_id: string;
    nonce: string;
    public_key: string;
  }>('Challenge', new Uint8Array(await challenge.body()));
  const passwordSealed = await sealPassword(issued.public_key, issued.nonce, 'openvk');
  const response = await request.post('/api/v1/auth/login', {
    headers: {
      'X-CSRF-Token': issued.csrf_token,
      'Content-Type': PROTOBUF_MIME,
      Accept: PROTOBUF_MIME,
    },
    data: encodeProto('AuthRequest', {
      login: 'id1',
      challenge_id: issued.challenge_id,
      password_sealed: passwordSealed,
    }),
    failOnStatusCode: false,
  });
  expect(response.status()).toBe(400);
  const body = decodeProto<{ message?: string }>('Error', new Uint8Array(await response.body()));
  expect(String(body.message)).toMatch(/security check/i);
});

async function sealPassword(publicKeyB64: string, nonce: string, password: string): Promise<string> {
  const der = Uint8Array.from(atob(publicKeyB64), (char) => char.charCodeAt(0));
  const key = await crypto.subtle.importKey(
    'spki',
    der,
    { name: 'RSA-OAEP', hash: 'SHA-256' },
    false,
    ['encrypt'],
  );
  const encoder = new TextEncoder();
  const nonceBytes = encoder.encode(nonce);
  const passwordBytes = encoder.encode(password);
  const plain = new Uint8Array(nonceBytes.length + 1 + passwordBytes.length);
  plain.set(nonceBytes, 0);
  plain[nonceBytes.length] = 0;
  plain.set(passwordBytes, nonceBytes.length + 1);
  const sealed = await crypto.subtle.encrypt({ name: 'RSA-OAEP' }, key, plain);
  const bytes = new Uint8Array(sealed);
  let binary = '';
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}
