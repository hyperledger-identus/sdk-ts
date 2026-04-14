import * as Domain from "@hyperledger/identus-domain";
import { type DIDDocument } from "@hyperledger/identus-domain";
import { type DIDMethod, type DIDKeys } from "../types";
import { PeerDIDResolver } from "../../resolver/PeerDIDResolver";
import { PeerDIDCreate } from "../../../peer-did/PeerDIDCreate";
import { extractVerificationMethods } from "../../utils";
import { VerificationMaterialAgreement, VerificationMaterialAuthentication, VerificationMaterialFormatPeerDID, VerificationMethodTypeAgreement, VerificationMethodTypeAuthentication } from "../../../peer-did/types";
import { JWKHelper } from "../../../peer-did/helpers/JWKHelper";
import { X25519PublicKey } from "../../../apollo/utils/X25519PublicKey";
import { Ed25519PublicKey } from "../../../apollo/utils/Ed25519PublicKey";

/** Options for creating a new Peer DID. */
export type CreatePayload = {
  /** Optional DID Document services to embed. */
  services?: DIDDocument.Service[];
  /**
   * Key map. Must include `AUTHENTICATION_KEY` and `KEY_AGREEMENT_KEY`
   * as `PrivateKey[]` arrays.
   */
  keys: DIDKeys;
};

declare module "../types" {
  interface DIDMethodTypeMap {
    peer: {
      createPayload: CreatePayload;
    };
  }
}

/**
 * DID method implementation for `did:peer` (algorithm 2).
 *
 * Creates peer DIDs from authentication and key-agreement keys and
 * verifies signatures by resolving the DID Document locally.
 *
 * @example
 * ```ts
 * const peer = new PeerDIDMethod();
 * const did = await peer.create({
 *   keys: {
 *     AUTHENTICATION_KEY: [authSK],
 *     KEY_AGREEMENT_KEY: [agreementSK],
 *   },
 *   services: [service],
 * });
 * ```
 */
export class PeerDIDMethod implements DIDMethod<never, CreatePayload> {
  method = "peer" as const;
  resolver = new PeerDIDResolver();

  /**
   * Create a new `did:peer:2` DID from the provided keys and services.
   *
   * @param opts - creation options containing keys and optional services
   * @returns the newly created peer DID
   * @throws {CastorError.InvalidKeyError} if required keys are missing
   */
  async create(
    opts: CreatePayload,
  ): Promise<Domain.DID> {
    const keys = opts.keys;
    const services = opts.services ?? [];
    if (!keys.AUTHENTICATION_KEY || !keys.KEY_AGREEMENT_KEY) {
      throw new Domain.CastorError.InvalidKeyError("AUTHENTICATION_KEY and KEY_AGREEMENT_KEY are required");
    }
    const publicKeys = Object.values(keys).flat().map((key) => key.publicKey());
    const { did } = new PeerDIDCreate().createPeerDID(publicKeys, services);
    return did;
  }

  /**
   * Verify a signature against a Peer DID's Ed25519 verification methods.
   *
   * Resolves the DID Document and tries each Ed25519 verification method
   * until one validates the signature, or returns `false`.
   */
  async verifySignature(
    did: Domain.DID,
    challenge: Uint8Array,
    signature: Uint8Array
  ): Promise<boolean> {
    const didDocument = await this.resolver.resolve(did.toString());
    const verificationMethods = extractVerificationMethods(
      didDocument.coreProperties
    );

    const methods = verificationMethods.filter(({ publicKeyJwk }) => {
      if (!publicKeyJwk) return false;
      return publicKeyJwk.crv === Domain.Curve.ED25519;
    });

    if (methods.length <= 0) {
      throw new Error("No verification methods for Peer DID");
    }

    let publicKey: Domain.PublicKey;
    for (const method of methods) {
      if (!method.publicKeyJwk) {
        throw new Error(
          "PeerDID VerificationMethod does not have jwk Key in it"
        );
      }
      const material =
        method.publicKeyJwk.crv === Domain.Curve.X25519
          ? new VerificationMaterialAgreement(
            JSON.stringify(method.publicKeyJwk),
            VerificationMethodTypeAgreement.JSON_WEB_KEY_2020,
            VerificationMaterialFormatPeerDID.JWK
          )
          : new VerificationMaterialAuthentication(
            JSON.stringify(method.publicKeyJwk),
            VerificationMethodTypeAuthentication.JSON_WEB_KEY_2020,
            VerificationMaterialFormatPeerDID.JWK
          );

      const decodedKey =
        method.publicKeyJwk.crv === Domain.Curve.X25519
          ? JWKHelper.fromJWKAgreement(
            material as VerificationMaterialAgreement
          )
          : JWKHelper.fromJWKAuthentication(
            material as VerificationMaterialAuthentication
          );

      publicKey =
        method.publicKeyJwk.crv === Domain.Curve.X25519
          ? new X25519PublicKey(Buffer.from(decodedKey))
          : new Ed25519PublicKey(Buffer.from(decodedKey));

      if (
        publicKey.canVerify() &&
        publicKey.verify(Buffer.from(challenge), Buffer.from(signature))
      ) {
        return true;
      }
    }
    return false;

  }

}
