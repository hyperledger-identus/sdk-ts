/* eslint-disable @typescript-eslint/no-unused-vars */
import { secp256k1 } from "@noble/curves/secp256k1";
import { SHA256 } from "@stablelib/sha256";
import * as base64 from "multiformats/bases/base64";
import * as base58 from "multiformats/bases/base58";
import { Apollo } from "../domain/buildingBlocks/Apollo";
import { Castor as CastorInterface } from "../domain/buildingBlocks/Castor";
import {
  DID,
  Service,
  DIDDocument,
  PrismDID,
  DIDDocumentCoreProperty,
  DIDResolver,
  KeyPair,
} from "../domain/models";

import * as DIDParser from "./parser/DIDParser";
import * as Protos from "./protos/node_models";
import { PeerDIDResolver } from "./resolver/PeerDIDResolver";
import { PeerDIDCreate } from "../peer-did/PeerDIDCreate";
import { LongFormPrismDIDResolver } from "./resolver/LongFormPrismDIDResolver";
import {
  CastorError,
  VerificationMethod as DIDDocumentVerificationMethod,
  VerificationMethods as DIDDocumentVerificationMethods,
  getUsageFromId,
  getUsageId,
  isEd25519VerificationKey,
  isSecp256k1VerificationKey,
  PrivateKey,
  Usage,
  VerificationMethod,
} from "../domain";

import { JWKHelper } from "../peer-did/helpers/JWKHelper";
import {
  VerificationMaterialAgreement,
  VerificationMaterialAuthentication,
  VerificationMaterialFormatPeerDID,
  VerificationMethodTypeAgreement,
  VerificationMethodTypeAuthentication,
} from "../peer-did/types";

import { Secp256k1PublicKey } from "../apollo/utils/Secp256k1PublicKey";
import { PublicKey, Curve } from "../domain/models";
import { X25519PublicKey } from "../apollo/utils/X25519PublicKey";
import { Ed25519PublicKey } from "../apollo/utils/Ed25519PublicKey";
import { PrismDIDPublicKey } from "./did/prismDID/PrismDIDPublicKey";
import { Secp256k1PrivateKey } from "../apollo/utils/Secp256k1PrivateKey";

type ExtraResolver = new (apollo: Apollo) => DIDResolver;
/**
 * Castor is a powerful and flexible library for working with DIDs. Whether you are building a decentralised application
 * or a more traditional system requiring secure and private identity management, Castor provides the tools and features
 * you need to easily create, manage, and resolve DIDs.
 *
 * @class Castor
 * @typedef {Castor}
 */
export default class Castor implements CastorInterface {
  private apollo: Apollo;
  private resolvers: DIDResolver[];

  /**
   * Creates an instance of Castor as soon as a valid cryptographic interface is provided (Apollo).
   *
   * @constructor
   * @param {Apollo} apollo
   * @param {ExtraResolver[]} extraResolvers
   */
  constructor(apollo: Apollo, extraResolvers: ExtraResolver[] = []) {
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
  parseDID(did: string): DID {
    return DIDParser.parse(did);
  }

  private getPrismDIDKeyFromVerificationMethod(verificationMethod: VerificationMethod): PrismDIDPublicKey {
    const id = verificationMethod.id;
    const { usage, index } = getUsageFromId(id);
    if (verificationMethod.publicKeyJwk) {
      const raw = base64.base64url.baseDecode(verificationMethod.publicKeyJwk.x);
      if (verificationMethod.publicKeyJwk.crv === Curve.SECP256K1) {
        return new PrismDIDPublicKey(
          getUsageId(usage, index),
          usage,
          new Secp256k1PublicKey(raw)
        );
      } else if (verificationMethod.publicKeyJwk.crv === Curve.ED25519) {
        return new PrismDIDPublicKey(
          getUsageId(usage, index),
          usage,
          new Ed25519PublicKey(raw)
        );
      } else if (verificationMethod.publicKeyJwk.crv === Curve.X25519) {
        return new PrismDIDPublicKey(
          getUsageId(usage, index),
          usage,
          new X25519PublicKey(raw)
        );
      }
    } else if (verificationMethod.publicKeyMultibase) {
      const raw = base58.base58btc.decode(verificationMethod.publicKeyMultibase)
      if (verificationMethod.type === "EcdsaSecp256k1VerificationKey2019") {
        return new PrismDIDPublicKey(
          getUsageId(usage, index),
          usage,
          new Secp256k1PublicKey(raw)
        );
      } else if (verificationMethod.type === "Ed25519VerificationKey2018" || verificationMethod.type === "Ed25519VerificationKey2020") {
        return new PrismDIDPublicKey(
          getUsageId(usage, index),
          usage,
          new Ed25519PublicKey(raw)
        );
      } else if (verificationMethod.type === "X25519KeyAgreementKey2019" || verificationMethod.type === "X25519KeyAgreementKey2020") {
        return new PrismDIDPublicKey(
          getUsageId(usage, index),
          usage,
          new X25519PublicKey(raw)
        );
      }
    }
    throw new Error("No public key found in verification method")
  }

  /**
   * Creates a Prism DID Atala Object, a buffer contained the prism did create operation.
   * @param {PrivateKey} key
   * @param {Service[]} services
   * @param {PublicKey[]} authenticationKeys
   * @param {PublicKey[]} issuanceKeys
   * @returns {Promise<{operationHex: string, metadataBody: {v: number, c: string[]}, did: DID}>}
   */
  async createPrismDIDAtalaObject(
    key: PrivateKey,
    did: DID,
  ) {
    if (key.isSignable() && key instanceof Secp256k1PrivateKey) {
      const resolved = await this.resolveDID(did.toString());
      const didPublicKeys: Protos.io.iohk.atala.prism.protos.PublicKey[] = resolved.verificationMethods.map(
        (verificationMethod) => this.getPrismDIDKeyFromVerificationMethod(verificationMethod).toProto()
      );
      const didCreationData =
        new Protos.io.iohk.atala.prism.protos.CreateDIDOperation.DIDCreationData({
          public_keys: didPublicKeys,
          services: resolved.services?.map((service) => {
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
      const encodedStateHash = (new SHA256()).update(encodedState).digest()
      const signature = secp256k1.sign(
        encodedStateHash,
        key.raw
      )
      const signedOperation = Protos.io.iohk.atala.prism.protos.SignedAtalaOperation.fromObject({
        signature: signature.toDERRawBytes(),
        operation,
        signed_with: getUsageId(Usage.MASTER_KEY, 0)
      })
      const block = Protos.io.iohk.atala.prism.protos.AtalaBlock.fromObject({
        operations: [
          signedOperation
        ]
      })
      const atalaObject = Protos.io.iohk.atala.prism.protos.AtalaObject.fromObject({
        block_content: block
      })
      return atalaObject.serialize();
    }
    throw new CastorError.InvalidKeyError("Cannot sign with this key")
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
   * const exampleServiceEndpoint = new Domain.Service("didcomm", ["DIDCommMessaging"], {
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
   * @async
   * @param {PrivateKey | KeyPair} masterPublicKey
   * @param {?(Service[] | undefined)} [services]
   * @param {?(PublicKey[] | undefined)} [authenticationKeys]
   * @param {?(PublicKey[] | undefined)} [issuanceKeys]
   * @returns {Promise<DID>}
   */
  async createPrismDID(
    key: PublicKey | KeyPair,
    services?: Service[] | undefined,
    authenticationKeys: (PublicKey | KeyPair)[] = [],
    issuanceKeys: (PublicKey | KeyPair)[] = [],
  ): Promise<DID> {
    const didPublicKeys: Protos.io.iohk.atala.prism.protos.PublicKey[] = [];
    const masterPublicKey = "publicKey" in key ? key.publicKey : key;
    const masterPk = new PrismDIDPublicKey(
      getUsageId(Usage.MASTER_KEY),
      Usage.MASTER_KEY,
      masterPublicKey,
    ).toProto();

    didPublicKeys.push(masterPk);

    if (authenticationKeys.length) {
      for (const [index, authenticationKey] of authenticationKeys.entries()) {
        const pk = "publicKey" in authenticationKey ? authenticationKey.publicKey : authenticationKey
        const prismDIDPublicKey = new PrismDIDPublicKey(
          getUsageId(Usage.AUTHENTICATION_KEY, index),
          Usage.AUTHENTICATION_KEY,
          pk,
        )
        didPublicKeys.push(prismDIDPublicKey.toProto())
      }
    }

    if (issuanceKeys.length) {
      for (const [index, issuanceKey] of issuanceKeys.entries()) {
        const pk = "publicKey" in issuanceKey ? issuanceKey.publicKey : issuanceKey
        const prismDIDPublicKey = new PrismDIDPublicKey(
          getUsageId(Usage.ISSUING_KEY, index),
          Usage.ISSUING_KEY,
          pk,
        )
        didPublicKeys.push(prismDIDPublicKey.toProto())
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
    const methodSpecificId = PrismDID.parseMethodId([stateHash, base64State]);
    return new DID("did", "prism", methodSpecificId.toString());
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
   * @async
   * @param {PublicKey[]} publicKeys
   * @param {Service[]} services
   * @returns {Promise<DID>}
   */
  async createPeerDID(
    publicKeys: PublicKey[],
    services: Service[]
  ): Promise<DID> {
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
   * @async
   * @param {string} did
   * @returns {Promise<DIDDocument>}
   */
  async resolveDID(did: string): Promise<DIDDocument> {
    const parsed = DID.fromString(did);
    const resolvers = this.resolvers.filter(
      (resolver) => resolver.method === parsed.method
    );
    for (const resolver of resolvers) {
      try {
        return await resolver.resolve(did)
      } catch (err) {
        console.log("Failed resolving did " + did)
      }
    }
    throw new Error("Non of the available Castor resolvers could resolve the did")
  }

  /**
   * Extracts the verificationMethods from an array of CoreProperties inside a DID Document
   *
   * @private
   * @param {DIDDocumentCoreProperty[]} coreProperties
   * @returns {DIDDocumentVerificationMethod[]}
   */
  private extractVerificationMethods(
    coreProperties: DIDDocumentCoreProperty[]
  ): DIDDocumentVerificationMethod[] {
    return coreProperties.reduce<DIDDocumentVerificationMethod[]>(
      (result, property) => {
        if (property instanceof DIDDocumentVerificationMethods) {
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
   * @async
   * @param {DID} did
   * @param {Uint8Array} challenge
   * @param {Uint8Array} signature
   * @returns {Promise<boolean>}
   */
  async verifySignature(
    did: DID,
    challenge: Uint8Array,
    signature: Uint8Array
  ): Promise<boolean> {
    const didDocument = await this.resolveDID(did.toString());
    const verificationMethods = this.extractVerificationMethods(
      didDocument.coreProperties
    );
    let publicKey: PublicKey;

    if (did.method == "prism") {
      const methods = verificationMethods.filter(
        (method) => isSecp256k1VerificationKey(method.type) || isEd25519VerificationKey(method.type)
      );
      if (methods.length <= 0) {
        throw new Error("No verification methods for Prism DID");
      }
      for (const method of methods) {
        try {
          if (!method.publicKeyMultibase) {
            throw new Error(
              "PrismDID VerificationMethod does not have multibase Key in it"
            );
          }
          if (isSecp256k1VerificationKey(method.type)) {
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
          if (isEd25519VerificationKey(method.type)) {
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
        return publicKeyJwk.crv === Curve.ED25519;
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
          method.publicKeyJwk.crv === Curve.X25519
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
          method.publicKeyJwk.crv === Curve.X25519
            ? JWKHelper.fromJWKAgreement(
              material as VerificationMaterialAgreement
            )
            : JWKHelper.fromJWKAuthentication(
              material as VerificationMaterialAuthentication
            );

        publicKey =
          method.publicKeyJwk.crv === Curve.X25519
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
  getEcnumbasis(did: DID, publicKey: PublicKey): string {
    return new PeerDIDCreate().computeEncnumbasis(did, publicKey);
  }
}
