export async function derivePairRootKey(secret: string) {
  const encoder = new TextEncoder();

  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );

  const salt = encoder.encode("koi-hai-pair-salt"); // constant app salt

  const pairRootKey = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 150_000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false, // ❗ NOT extractable
    ["encrypt", "decrypt"]
  );

  return pairRootKey;
}
