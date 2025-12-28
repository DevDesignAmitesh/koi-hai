import { normalizeNickname } from "./normalizeNickname";

// inputs are couples name
export function canonicalizeNicknames(a: string, b: string) {
  return [normalizeNickname(a), normalizeNickname(b)].sort();
}
