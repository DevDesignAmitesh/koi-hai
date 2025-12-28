import { canonicalizeNicknames } from "./canonicalizeNicknames";

export function buildSecretMaterial(
  nicknameA: string,
  nicknameB: string,
  sharedPhrase: string
) {
  const [n1, n2] = canonicalizeNicknames(nicknameA, nicknameB);

  return `${n1}|${n2}|${sharedPhrase.trim()}`;
}
