import type * as Domain from '@hyperledger/identus-domain';

import {
  type VerificationMaterialAgreement,
  type VerificationMaterialAuthentication,
} from "../../peer-did/types";

export type PeerDIDKeys = {
  signingKeys: VerificationMaterialAuthentication[];
  encryptionKeys: VerificationMaterialAgreement[];
};


/**
 * Minimal shape that any DID method instance must satisfy in order to
 * be registered with the {@link Castor} constructor.
 *
 * Both built-in methods (`PrismDIDMethod`, `PeerDIDMethod`) and custom
 * third-party methods implement this interface.
 */
export interface DIDMethodInput {
  /** The DID method name (e.g. `"prism"`, `"peer"`). */
  method: string;
  /** A resolver capable of resolving DIDs of this method. */
  resolver: Domain.DIDResolver;
}