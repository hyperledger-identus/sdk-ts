import { secp256k1 } from "@noble/curves/secp256k1";
import { SHA256 } from "@stablelib/sha256";
import * as base64 from "multiformats/bases/base64";
import * as base58 from "multiformats/bases/base58";
import * as DIDParser from "./parser/DIDParser";
import * as Domain from "../domain";
import * as ECConfig from "../domain/models/ECConfig";
import { DIDDocument, } from "../domain/models";
import { PeerDIDResolver } from "./resolver/PeerDIDResolver";
import { PeerDIDCreate } from "../peer-did/PeerDIDCreate";
import { LongFormPrismDIDResolver } from "./resolver/LongFormPrismDIDResolver";
import { JWKHelper } from "../peer-did/helpers/JWKHelper";
import {
  VerificationMaterialAgreement,
  VerificationMaterialAuthentication,
  VerificationMaterialFormatPeerDID,
  VerificationMethodTypeAgreement,
  VerificationMethodTypeAuthentication,
} from "../peer-did/types";

import { Secp256k1PublicKey } from "../apollo/utils/Secp256k1PublicKey";
import { X25519PublicKey } from "../apollo/utils/X25519PublicKey";
import { Ed25519PublicKey } from "../apollo/utils/Ed25519PublicKey";
import { Secp256k1PrivateKey } from "../apollo/utils/Secp256k1PrivateKey";
import { PrismDIDKeyUsage } from "../domain/models/derivation/schemas/PrismDerivation";

import * as Protos from "./protos/node_models";
import ProtosPk = Protos.io.iohk.atala.prism.protos.PublicKey;
import ProtosECKeyData = Protos.io.iohk.atala.prism.protos.ECKeyData;
import ProtosCompressedECKeyData = Protos.io.iohk.atala.prism.protos.CompressedECKeyData;

export type ExtraResolver = new (apollo: Domain.Apollo) => Domain.DIDResolver;

/**
 * Castor is a powerful and flexible library for working with DIDs. Whether you are building a decentralised application
 * or a more traditional system requiring secure and private identity management, Castor provides the tools and features
 * you need to easily create, manage, and resolve DIDs.
 *
 * @class Castor
 * @typedef {Castor}
 */
export default class Castor implements Domain.Castor {
  private apollo: Domain.Apollo;
  private resolvers: Domain.DIDResolver[];

  /**
   * Creates an instance of Castor as soon as a valid cryptographic interface is provided (Apollo).
   *
   * @param {Apollo} apollo
   * @param {ExtraResolver[]} extraResolvers
   */
  constructor(apollo: Domain.Apollo, extraResolvers: ExtraResolver[] = []) {
    this.apollo = apollo;
    this.resolvers = [
      new PeerDIDResolver(),
      new LongFormPrismDIDResolver(this.apollo),
      ...extraResolvers.map((Resolver) => new Resolver(apollo))
    ];
  }

  /**
   * Parses a string representation of a Decentralized Identifier (DID) into a DID object.
   *
   * @example
   * This function takes a string representation of a DID and returns an instance of `Domain.DID`. It may throw an error if the string is not a valid
   * DID.
   *
   * ```ts
   * const parsedPrismDid = castor.parseDID(
   *  "did:prism:b6c0c33d701ac1b9a262a14454d1bbde3d127d697a76950963c5fd930605:Cj8KPRI7CgdtYXN0ZXIwEAFKLgoJc2VmsxEiECSTjyV7sUfCr_ArpN9rvCwR9fRMAhcsr_S7ZRiJk4p5k"
   * );
   * ```
   *
   * @param {string} did
   * @returns {DID}
   */
  parseDID(did: string): Domain.DID {
    return DIDParser.parse(did);
  }

  /**
   * Creates a Prism DID Atala Object, a buffer contained the prism did create operation.
   * @param {PrivateKey} key
   * @param {DID} did
   * @returns {Promise<{operationHex: string, metadataBody: {v: number, c: string[]}, did: DID}>}
   */
  async createPrismDIDAtalaObject(
    key: Domain.PrivateKey,
    did: Domain.DID,
  ) {
    if (key.isSignable() && key instanceof Secp256k1PrivateKey) {
      const resolved = await this.resolveDID(did.toString());
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
   * Creates a DID for a prism (a device or server that acts as a DID owner and controller) using a
   * given master public key and list of services.
   *
   * @example
   * This function creates a new `prism` DID, using a given master Public Key and a list of Services.
   * The Public Key may be an individual Key or a KeyPair
   * It may throw an error if the master Public Key or Services are invalid.
   *
   * ```ts
   * const exampleServiceEndpoint = new Domain.DIDDocument.Service("didcomm", ["DIDCommMessaging"], {
   *  uri: "https://example.com/endpoint",
   *  accept: ["didcomm/v2"],
   *  routingKeys: ["did:example:somemediator#somekey"],
   * });
   * const prismDid = await castor.createPrismDID(
   *  keyPairFromCurveSecp256K1.publicKey,
   *  [exampleServiceEndpoint]
   * );
   * ```
   *
   * 
   * @param {PublicKey | KeyPair} key
   * @param {?(Service[] | undefined)} [services]
   * @param {?(PublicKey[] | undefined)} [authenticationKeys]
   * @param {?(PublicKey[] | undefined)} [issuanceKeys]
   * @returns {Promise<DID>}
   */
  async createPrismDID(
    key: Domain.PublicKey | Domain.KeyPair,
    services?: DIDDocument.Service[] | undefined,
    authenticationKeys: (Domain.PublicKey | Domain.KeyPair)[] = [],
    issuanceKeys: (Domain.PublicKey | Domain.KeyPair)[] = [],
  ): Promise<Domain.DID> {
    const didPublicKeys: Protos.io.iohk.atala.prism.protos.PublicKey[] = [];
    const masterPublicKey = "publicKey" in key ? key.publicKey : key;
    const masterPk = this.createProtos(masterPublicKey, PrismDIDKeyUsage.MASTER_KEY);

    didPublicKeys.push(masterPk);

    if (authenticationKeys.length) {
      for (const [index, authenticationKey] of authenticationKeys.entries()) {
        const pk = "publicKey" in authenticationKey ? authenticationKey.publicKey : authenticationKey;
        const prismDIDPublicKey = this.createProtos(pk, PrismDIDKeyUsage.AUTHENTICATION_KEY, index);
        didPublicKeys.push(prismDIDPublicKey);
      }
    }

    if (issuanceKeys.length) {
      for (const [index, issuanceKey] of issuanceKeys.entries()) {
        const pk = "publicKey" in issuanceKey ? issuanceKey.publicKey : issuanceKey;
        const prismDIDPublicKey = this.createProtos(pk, PrismDIDKeyUsage.ISSUING_KEY, index);
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
    return new Domain.DID("did", "prism", methodSpecificId.toString());
  }

  /**
   * Creates a DID for a peer (a device or server that acts as a DID subject) using given key agreement
   * and authentication key pairs and a list of services.
   *
   * @example
   * This function creates new peer DID, using a given key agreement, authentication key pairs, and a list of services. It may throw an error if the key pairs or services are invalid.
   *
   * ```ts
   * const peerDid = await castor.createPeerDID(
   *     [keyPairFromCurveEd25519, keyPairFromCurveX25519],
   *     [exampleService]
   * );
   * ```
   *
   * 
   * @param {PublicKey[]} publicKeys
   * @param {Service[]} services
   * @returns {Promise<DID>}
   */
  async createPeerDID(
    publicKeys: Domain.PublicKey[],
    services: DIDDocument.Service[]
  ): Promise<Domain.DID> {
    const peerDIDOperation = new PeerDIDCreate();
    const peerDID = peerDIDOperation.createPeerDID(publicKeys, services);
    return peerDID.did;
  }

  /**
   * Asynchronously resolves a DID to its corresponding DID Document. This function may throw an error if
   * the DID is invalid or the document cannot be retrieved.
   * **Note:** only `prism` and `peer` DID methods are currently supported!
   *
   * @example
   * This function asynchronously resolves a DID to its corresponding DID Document. It may throw an error if the DID is invalid or the document is unretrievable.
   *
   * ```ts
   * const didDocument = await castor.resolveDID("did:prism:123456")
   * ```
   *
   * 
   * @param {DID | string} didstr
   * @returns {Promise<DIDDocument>}
   */
  async resolveDID(didstr: Domain.DID | string): Promise<DIDDocument> {
    const did = Domain.DID.from(didstr);
    const resolvers = this.resolvers.filter(x => x.method === did.method);
    for (const resolver of resolvers) {
      try {
        return await resolver.resolve(did.toString());
      } catch (err) {
        console.log(`Failed resolving did ${did.toString()}`);
      }
    }
    throw new Error("Non of the available Castor resolvers could resolve the did");
  }

  /**
   * Extracts the verificationMethods from an array of CoreProperties inside a DID Document
   *
   * @private
   * @param {DIDDocumentCoreProperty[]} coreProperties
   * @returns {DIDDocumentVerificationMethod[]}
   */
  private extractVerificationMethods(
    coreProperties: DIDDocument.CoreProperty[]
  ): DIDDocument.VerificationMethod[] {
    return coreProperties.reduce<DIDDocument.VerificationMethod[]>(
      (result, property) => {
        if (property instanceof DIDDocument.VerificationMethods) {
          result.push(...property.values);
        }
        return result;
      },
      []
    );
  }

  /**
   * Verifies the authenticity of a signature using the corresponding DID Document, challenge, and signature data.
   * This function returns a boolean value indicating whether the signature is valid or not. This function may throw
   * an error if the DID Document or signature data are invalid.
   *
   * @example
   * This function verifies the authenticity of a signature using given DID, challenge, and signature data. It returns a boolean value indicating whether the signature is valid or not. It may throw an error if the DID or signature data are invalid.
   *
   * ```ts
   * const message = "data to sign";
   * const messageBytes = new TextEncoder().encode(message);
   * const {mnemonics, seed} = apollo.createRandomSeed();
   * const privateKey = apollo.createPublicKey({
   *   type: KeyTypes.EC,
   *   curve: Curve.SECP256K1,
   *   seed: Buffer.from(seed.value).toString("hex"),
   *   derivationPath: "m/0'/0'/0'"
   * });
   * if (privateKey.isSignable()) {
   *   const signature = privateKey.sign(message);
   *   const did = castor.parseDID("did:prism:123456");
   *   const challenge = messageBytes
   *   const isValid = castor.verifySignature(
   *       castor.parseDID("did:prism:123456"),
   *       challenge, // Uint8Array
   *       signature // Uint8Array
   *   );
   * }
   * ```
   *
   * 
   * @param {DID} did
   * @param {Uint8Array} challenge
   * @param {Uint8Array} signature
   * @returns {Promise<boolean>}
   */
  async verifySignature(
    did: Domain.DID,
    challenge: Uint8Array,
    signature: Uint8Array
  ): Promise<boolean> {
    const didDocument = await this.resolveDID(did.toString());
    const verificationMethods = this.extractVerificationMethods(
      didDocument.coreProperties
    );
    let publicKey: Domain.PublicKey;

    if (did.method == "prism") {
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
        } catch (err) {
          console.debug("checking next key for verification");
        }
      }
    } else if (did.method == "peer") {
      const methods = verificationMethods.filter(({ publicKeyJwk }) => {
        if (!publicKeyJwk) return false;
        return publicKeyJwk.crv === Domain.Curve.ED25519;
      });
      if (methods.length <= 0) {
        throw new Error("No verification methods for Peer DID");
      }
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
    } else {
      throw new Error("Did method not supported");
    }

    return false;
  }

  /**
   * Returns ecnumbasis from a valid DID and its related publicKey
   *
   * @param {DID} did
   * @param {PublicKey} publicKey
   * @returns {string}
   */
  getEcnumbasis(did: Domain.DID, publicKey: Domain.PublicKey): string {
    return new PeerDIDCreate().computeEncnumbasis(did, publicKey);
  }

  /**
   * create an identifier for keys within a DID Document
   * should be unique within the Document
   * 
   * @param keyUsage - maps to a prefix word
   * @param index - occurrence of this keyUsage
   * @returns {string}
   */
  private getUsageId(keyUsage: PrismDIDKeyUsage, index = 0): string {
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
    usage: PrismDIDKeyUsage,
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

  private createProtos(publicKey: Domain.PublicKey, usage: PrismDIDKeyUsage, index?: number) {
    const id = this.getUsageId(usage, index);

    if (publicKey.curve === Domain.Curve.SECP256K1) {
      const encoded = publicKey.getEncoded();
      const xBytes = encoded.slice(1, 1 + ECConfig.PRIVATE_KEY_BYTE_SIZE);
      const yBytes = encoded.slice(1 + ECConfig.PRIVATE_KEY_BYTE_SIZE, encoded.length);

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
}
