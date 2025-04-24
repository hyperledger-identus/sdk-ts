import { DID, DIDDocument, KeyPair } from "../models";
import { PublicKey } from "../models";

export interface Castor {
  parseDID(did: string): DID;
  createPrismDID(
    masterPublicKey: PublicKey,
    services?: DIDDocument.Service[],
    authenticationKeys?: (PublicKey | KeyPair)[]
  ): Promise<DID>;
  createPeerDID(
    publicKeys: PublicKey[],
    services: DIDDocument.Service[]
  ): Promise<DID>;
  resolveDID(did: DID | string): Promise<DIDDocument>;
  verifySignature(
    did: DID,
    challenge: Uint8Array,
    signature: Uint8Array
  ): Promise<boolean>;
  getEcnumbasis(did: DID, publicKey: PublicKey): string;
}
