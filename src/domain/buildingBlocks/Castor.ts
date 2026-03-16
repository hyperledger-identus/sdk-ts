import { type DID, type DIDDocument, type KeyPair, type PrivateKey } from "../models";
import { type PublicKey } from "../models";
import { type PrismDIDKeyUsage } from "../models/derivation/schemas/PrismDerivation";

export type RequiredKeys = 'MASTER_KEY';

/**
 * Maps PrismDIDKeyUsage member names to arrays of public keys.
 * Used to assign keys to the correct verification relationships when creating a Prism DID.
 * 
 * @example
 * { ISSUING_KEY: [issuingPublicKey], AUTHENTICATION_KEY: [authPublicKey] }
 */
export type PrismDIDKeys = Partial<Record<keyof typeof PrismDIDKeyUsage, (PublicKey | KeyPair)[]>>;



export type RequiredPrismDIDKeys<
  T = Required<Pick<PrismDIDKeys, RequiredKeys>> & Omit<PrismDIDKeys, RequiredKeys>
> = T



export type RequiredPrismDIDSecretKeys = {
  [key in Exclude<keyof RequiredPrismDIDKeys, 'MASTER_KEY'>]?: PrivateKey[]
} & {
  MASTER_KEY: PrivateKey
}




export interface Castor {
  parseDID(did: string): DID;

  /**
   * @deprecated Use the `keys: PrismDIDKeys` overload instead.
   * Positional `authenticationKeys` and `issuanceKeys` parameters will be
   * removed in a future major version.
   */
  createPrismDID(
    masterPublicKey: PublicKey,
    services?: DIDDocument.Service[],
    authenticationKeys?: (PublicKey | KeyPair)[],
    issuanceKeys?: (PublicKey | KeyPair)[],
  ): Promise<DID>;

  /**
   * Creates a Prism DID with explicit key-to-usage mapping.
   */
  createPrismDID(
    masterPublicKey: PublicKey,
    services?: DIDDocument.Service[],
    keys?: PrismDIDKeys,
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
