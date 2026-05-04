import { secp256k1 } from "@noble/curves/secp256k1";
import { SHA256 } from "@stablelib/sha256";
import * as base64 from "multiformats/bases/base64";
import { type DIDMethod, type DIDMethodOperation, type RequiredPrismDIDSecretKeys } from "../types";
import * as Protos from "@hyperledger/identus-protos";
import * as Domain from '@hyperledger/identus-domain';
import { type DIDDocument, PrismDIDKeyUsage, type PrismDIDKeyUsageType } from "@hyperledger/identus-domain";
import * as base58 from "multiformats/bases/base58";

import { PrismDIDResolver } from "../../resolver/PrismDIDResolver";
import { Secp256k1PrivateKey } from "../../../apollo/utils/Secp256k1PrivateKey";
import { Ed25519PublicKey } from "../../../apollo/utils/Ed25519PublicKey";
import { Secp256k1PublicKey } from "../../../apollo/utils/Secp256k1PublicKey";
import { X25519PublicKey } from "../../../apollo/utils/X25519PublicKey";

import ProtosPk = Protos.io.iohk.atala.prism.protos.PublicKey;
import ProtosECKeyData = Protos.io.iohk.atala.prism.protos.ECKeyData;
import ProtosCompressedECKeyData = Protos.io.iohk.atala.prism.protos.CompressedECKeyData;
import { extractVerificationMethods } from "../../utils";

/** Options for creating a new Prism DID. */
export type CreatePayload = {
  /** Optional DID Document services to embed. */
  services?: DIDDocument.Service[];
  /** Key map. `MASTER_KEY` is required; other usages are optional. */
  keys: RequiredPrismDIDSecretKeys;
};

/** Options for deactivating a Prism DID. */
export type DeactivatePayload = {
  /** Master signing key used to authorise the deactivation. */
  key: Domain.PrivateKey;
  /** The DID to deactivate. */
  did: Domain.DID;
};

/** Options for updating a Prism DID. */
export type UpdatePayload = {
  /** Master signing key used to authorise the update. */
  key: Domain.PrivateKey;
  /** The DID to update. */
  did: Domain.DID;
};

/** Options for publishing a Prism DID to the ledger. */
export type PublishPayload = {
  /** Master signing key used to sign the Atala operation. */
  key: Domain.PrivateKey;
  /** The long-form DID to publish. */
  did: Domain.DID;
}

/** Serialised Atala object bytes returned after a publish operation. */
export type Metadata = Uint8Array

/**
 * DID method implementation for `did:prism`.
 *
 * Handles creation of long-form Prism DIDs, publishing them as signed
 * Atala operations, and verifying signatures against resolved DID Documents.
 *
 * @example
 * ```ts
 * const prism = new PrismDIDMethod();
 * const did = await prism.create({
 *   keys: { MASTER_KEY: masterSK, ISSUING_KEY: [issuingSK] },
 *   services: [service],
 * });
 * ```
 */
export class PrismDIDMethod
  implements DIDMethod<Metadata, CreatePayload, PublishPayload> {
  method = "prism" as const;
  resolver: PrismDIDResolver;

  /**
   * @param prismResolverEndpoint - custom VDR endpoint for short-form resolution
   */
  constructor(prismResolverEndpoint: string) {
    this.resolver = new PrismDIDResolver(prismResolverEndpoint);
  }

  /**
   * Create a new long-form Prism DID from the provided keys and services.
   *
   * @param opts - creation options containing keys and optional services
   * @returns the newly created `did:prism:...` DID
   * @throws {CastorError.InvalidKeyError} if `MASTER_KEY` is missing
   */
  async create(
    opts: CreatePayload,
  ): Promise<Domain.DID> {
    const didPublicKeys: Protos.io.iohk.atala.prism.protos.PublicKey[] = [];

    const keys = opts.keys;
    const services = opts.services;

    if (!keys.MASTER_KEY) {
      throw new Domain.CastorError.InvalidKeyError("MASTER_KEY is required");
    }

    const masterPublicKey = keys.MASTER_KEY.publicKey();
    const masterPk = this.createProtos(masterPublicKey, PrismDIDKeyUsage.MASTER_KEY);

    didPublicKeys.push(masterPk);

    for (const [usageName, keyList] of Object.entries(keys)) {
      if (usageName === "MASTER_KEY") {
        continue;
      }
      const usage = PrismDIDKeyUsage[usageName as keyof typeof PrismDIDKeyUsage];
      if (usage === undefined) {
        throw new Error(`Invalid key usage: ${usageName}`);
      }
      for (const [index, keyOrPair] of (keyList as Domain.PrivateKey[]).entries()) {
        const pk = keyOrPair.publicKey();
        const prismDIDPublicKey = this.createProtos(pk, usage, index);
        didPublicKeys.push(prismDIDPublicKey);
      }
    }
    const didCreationData =
      new Protos.io.iohk.atala.prism.protos.CreateDIDOperation.DIDCreationData({
        public_keys: didPublicKeys,
        services: services?.map((service) => {
          return new Protos.io.iohk.atala.prism.protos.Service({
            service_endpoint: [service.serviceEndpoint.uri],
            id: service.id,
            type: service.type.at(0),
          });
        }),
      });

    const didOperation =
      new Protos.io.iohk.atala.prism.protos.CreateDIDOperation({
        did_data: didCreationData,
      });

    const operation = new Protos.io.iohk.atala.prism.protos.AtalaOperation({
      create_did: didOperation,
    });

    const encodedState = operation.serializeBinary();
    const sha256 = new SHA256();
    const stateHash = Buffer.from(
      sha256.update(encodedState).digest()
    ).toString("hex");

    const base64State = base64.base64url.baseEncode(encodedState);
    const methodSpecificId = Domain.PrismDID.parseMethodId([stateHash, base64State]);

    return new Domain.DID("did", "prism", methodSpecificId.toString())
  }

  /**
   * Publish a Prism DID by building and signing an Atala operation.
   *
   * @param opts - the master key and DID to publish
   * @returns serialised `AtalaObject` bytes
   * @throws {CastorError.InvalidKeyError} if the key cannot sign
   */
  async publish(
    opts: PublishPayload,
  ): Promise<DIDMethodOperation<Metadata>> {
    const { key, did } = opts;
    if (key.isSignable() && key instanceof Secp256k1PrivateKey) {
      const resolved = await this.resolver.resolve(did.toString());
      const didPublicKeys = resolved.verificationMethods.map(x => this.getPrismDIDKeyFromVerificationMethod(x));
      const didCreationData = new Protos.io.iohk.atala.prism.protos.CreateDIDOperation.DIDCreationData({
        public_keys: didPublicKeys,
        services: resolved.services?.map((service) => {
          return new Protos.io.iohk.atala.prism.protos.Service({
            service_endpoint: [service.serviceEndpoint.uri],
            id: service.id,
            type: service.type.at(0),
          });
        }),
      });
      const didOperation = new Protos.io.iohk.atala.prism.protos.CreateDIDOperation({
        did_data: didCreationData,
      });
      const operation = new Protos.io.iohk.atala.prism.protos.AtalaOperation({
        create_did: didOperation,
      });
      const encodedState = operation.serializeBinary();
      const encodedStateHash = (new SHA256()).update(encodedState).digest();
      const signature = secp256k1.sign(
        encodedStateHash,
        key.raw
      );
      const signedOperation = Protos.io.iohk.atala.prism.protos.SignedAtalaOperation.fromObject({
        signature: signature.toDERRawBytes(),
        operation,
        signed_with: this.getUsageId(PrismDIDKeyUsage.MASTER_KEY, 0)
      });
      const block = Protos.io.iohk.atala.prism.protos.AtalaBlock.fromObject({
        operations: [
          signedOperation
        ]
      });
      const atalaObject = Protos.io.iohk.atala.prism.protos.AtalaObject.fromObject({
        block_content: block
      });
      return atalaObject.serialize();
    }
    throw new Domain.CastorError.InvalidKeyError("Cannot sign with this key");
  }

  /**
   * create an identifier for keys within a DID Document
   * should be unique within the Document
   * 
   * @param keyUsage - maps to a prefix word
   * @param index - occurrence of this keyUsage
   * @returns {string}
   */
  private getUsageId(keyUsage: PrismDIDKeyUsageType, index = 0): string {
    switch (keyUsage) {
      case PrismDIDKeyUsage.MASTER_KEY:
        return `master-${index}`;
      case PrismDIDKeyUsage.ISSUING_KEY:
        return `issuing-${index}`;
      case PrismDIDKeyUsage.KEY_AGREEMENT_KEY:
        return `agreement-${index}`;
      case PrismDIDKeyUsage.AUTHENTICATION_KEY:
        return `authentication-${index}`;
      case PrismDIDKeyUsage.REVOCATION_KEY:
        return `revocation-${index}`;
      case PrismDIDKeyUsage.CAPABILITY_DELEGATION_KEY:
        return `delegation-${index}`;
      case PrismDIDKeyUsage.CAPABILITY_INVOCATION_KEY:
        return `invocation-${index}`;
      default:
        return `unknown-${index}`;
    }
  }


  /**
   * Return usage from a verification method id
   * 
   * @param id - verification method id string
   * @returns {Usage}
   */
  private getUsageFromId(id: string): {
    usage: PrismDIDKeyUsageType,
    index: number;
  } {
    const regex = /#([a-zA-Z]+)-(\d+)/;
    const [_, methodId, methodIndex] = id.match(regex) || [];
    if (methodId === undefined || methodIndex === undefined) {
      throw new Domain.CastorError.MethodIdIsDoesNotSatisfyRegex("Verification method id does not contain fragment");
    }
    const index = parseInt(methodIndex);
    if (methodId === "master") {
      return { usage: PrismDIDKeyUsage.MASTER_KEY, index };
    }
    if (methodId === "issuing") {
      return { usage: PrismDIDKeyUsage.ISSUING_KEY, index };
    }
    if (methodId === "agreement") {
      return { usage: PrismDIDKeyUsage.KEY_AGREEMENT_KEY, index };
    }
    if (methodId === "authentication") {
      return { usage: PrismDIDKeyUsage.AUTHENTICATION_KEY, index };
    }
    if (methodId === "revocation") {
      return { usage: PrismDIDKeyUsage.REVOCATION_KEY, index };
    }
    if (methodId === "delegation") {
      return { usage: PrismDIDKeyUsage.CAPABILITY_DELEGATION_KEY, index };
    }
    if (methodId === "invocation") {
      return { usage: PrismDIDKeyUsage.CAPABILITY_INVOCATION_KEY, index };
    }
    return { usage: PrismDIDKeyUsage.UNKNOWN_KEY, index };
  }

  private createProtos(publicKey: Domain.PublicKey, usage: PrismDIDKeyUsageType, index?: number) {
    const id = this.getUsageId(usage, index);

    if (publicKey.curve === Domain.Curve.SECP256K1.toString()) {
      const encoded = publicKey.getEncoded();
      const xBytes = encoded.slice(1, 1 + Domain.ECConfig.PRIVATE_KEY_BYTE_SIZE);
      const yBytes = encoded.slice(1 + Domain.ECConfig.PRIVATE_KEY_BYTE_SIZE, encoded.length);

      return new ProtosPk({
        id: id,
        usage: usage,
        ec_key_data: new ProtosECKeyData({
          curve: publicKey.curve.toLocaleLowerCase(),
          x: xBytes,
          y: yBytes,
        }),
      });
    }

    return new ProtosPk({
      id: id,
      usage: usage,
      compressed_ec_key_data: new ProtosCompressedECKeyData({
        curve: publicKey.curve,
        data: publicKey.raw,
      }),
    });
  }


  private getPrismDIDKeyFromVerificationMethod(verificationMethod: DIDDocument.VerificationMethod) {
    const { usage, index } = this.getUsageFromId(verificationMethod.id);

    if (verificationMethod.publicKeyJwk) {
      // TODO need to properly parse JWK into key / raw
      const raw = base64.base64url.baseDecode(verificationMethod.publicKeyJwk.x as any);

      if (verificationMethod.publicKeyJwk.crv === Domain.Curve.SECP256K1) {
        return this.createProtos(new Secp256k1PublicKey(raw), usage, index);
      }

      if (verificationMethod.publicKeyJwk.crv === Domain.Curve.ED25519) {
        return this.createProtos(new Ed25519PublicKey(raw), usage, index);
      }

      if (verificationMethod.publicKeyJwk.crv === Domain.Curve.X25519) {
        return this.createProtos(new X25519PublicKey(raw), usage, index);
      }
    }
    else if (verificationMethod.publicKeyMultibase) {
      const raw = base58.base58btc.decode(verificationMethod.publicKeyMultibase);

      if (verificationMethod.type === "EcdsaSecp256k1VerificationKey2019") {
        return this.createProtos(new Secp256k1PublicKey(raw), usage, index);
      }

      if (verificationMethod.type === "Ed25519VerificationKey2018" || verificationMethod.type === "Ed25519VerificationKey2020") {
        return this.createProtos(new Ed25519PublicKey(raw), usage, index);
      }

      if (verificationMethod.type === "X25519KeyAgreementKey2019" || verificationMethod.type === "X25519KeyAgreementKey2020") {
        return this.createProtos(new X25519PublicKey(raw), usage, index);
      }
    }

    throw new Error("No public key found in verification method");
  }


  /**
   * Verify a signature against a Prism DID's verification methods.
   *
   * Resolves the DID Document and tries each verification method until
   * one successfully validates the signature, or returns `false`.
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
    for (const method of verificationMethods) {
      try {
        if (!method.publicKeyMultibase) {
          throw new Error(
            "PrismDID VerificationMethod does not have multibase Key in it"
          );
        }
        if (method.type === "EcdsaSecp256k1VerificationKey2019") {
          const publicKey = Secp256k1PublicKey.secp256k1FromBytes(
            Buffer.from(base58.base58btc.decode(method.publicKeyMultibase))
          );

          if (
            publicKey.canVerify() &&
            publicKey.verify(Buffer.from(challenge), Buffer.from(signature))
          ) {
            return true;
          }
        }

        if (method.type === "Ed25519VerificationKey2018" || method.type === "Ed25519VerificationKey2020") {
          const publicKey = new Ed25519PublicKey(
            Buffer.from(base58.base58btc.decode(method.publicKeyMultibase))
          );
          if (
            publicKey.canVerify() &&
            publicKey.verify(Buffer.from(challenge), Buffer.from(signature))
          ) {
            return true;
          }
        }
      } catch {
        console.debug("checking next key for verification");
      }
    }

    return false;

  }
}
