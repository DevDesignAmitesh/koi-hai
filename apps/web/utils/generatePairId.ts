export async function generatePairId(secret: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(secret);

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert to hex
  const pairId = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

  return pairId; // send ONLY this to server
}
