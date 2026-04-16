import { type DID, type DIDDocument, type KeyPair } from "../models";
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


/**
 * Building block for creating, resolving, and managing Decentralized
 * Identifiers across multiple DID methods.
 *
 * The concrete SDK implementation ({@link @hyperledger/identus-sdk!Castor})
 * narrows these signatures using the augmentable `DIDMethodTypeMap`
 * exported from `@hyperledger/identus-sdk`.
 */
export interface Castor {
  createDID(method: string, opts: unknown): Promise<DID>;
  publishDID(method: string, opts: unknown): Promise<unknown>;
  updateDID(method: string, opts: unknown): Promise<unknown>;
  deactivateDID(method: string, opts: unknown): Promise<unknown>;

  /**
   * Resolve a DID to its DID Document.
   *
   * @param did - a {@link DID} instance or DID string
   * @returns the resolved {@link DIDDocument}
   */
  resolveDID(did: DID | string): Promise<DIDDocument>;

  /**
   * Verify a cryptographic signature against a DID's verification methods.
   *
   * @param did - the signer's DID
   * @param challenge - the original data that was signed
   * @param signature - the signature bytes to verify
   * @returns `true` if any verification method on the DID validates the signature
   */
  verifySignature(did: DID, challenge: Uint8Array, signature: Uint8Array): Promise<boolean>;
}
