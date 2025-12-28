import { buildSecretMaterial } from "./buildSecretMaterial";
import { derivePairRootKey } from "./derivePairRootKey";
import { generateInviteCode } from "./generateInviteCode";
import { generatePairId } from "./generatePairId";

export async function handleCreatePair({
  nicknameA,
  nicknameB,
  sharedPhrase,
}: {
  nicknameA: string;
  nicknameB: string;
  sharedPhrase: string;
}) {
  const secret = buildSecretMaterial(nicknameA, nicknameB, sharedPhrase);

  const pairRootKey = await derivePairRootKey(secret);
  const pairId = await generatePairId(secret);
  const inviteCode = generateInviteCode(pairId);

  // Store pairRootKey securely (IndexedDB / memory)
  // Send ONLY pairId to backend

  return {
    pairRootKey,
    pairId,
    inviteCode,
  };
}
