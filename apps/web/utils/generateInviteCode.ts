export function generateInviteCode(pairId: string) {
  // Take last 8 hex chars → convert to number → mod 1M
  const lastPart = pairId.slice(-8);
  const num = parseInt(lastPart, 16);

  return (num % 1_000_000).toString().padStart(6, "0");
}
