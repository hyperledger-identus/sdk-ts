import * as base64 from "multiformats/bases/base64";
import { PeerDID, type PeerDIDEncoded, PeerDIDService } from "./PeerDID";
import {
  Numalgo2Prefix,
  type VerificationMaterialAgreement,
  type VerificationMaterialAuthentication,
} from "@hyperledger/identus-domain";

import { type Ed25519PublicKey } from "../../../apollo/utils/Ed25519PublicKey";
import { type X25519PublicKey } from "../../../apollo/utils/X25519PublicKey";
import { Curve, DID, type DIDDocument, KeyProperties, type PublicKey } from "@hyperledger/identus-domain";
import { authenticationFromPublicKey, createMultibaseEncnumbasis, keyAgreementFromPublicKey } from "../../utils";

/**
 * PeerDID Creation wrapper class
 *
 * @export
 * @class PeerDIDCreate
 * @typedef {PeerDIDCreate}
 */
export class PeerDIDCreate {
  /**
   * Creates an instance of a PeerDID by providing a valid set of KeyPairs and DIDDocumentServices[]
   *
   * @param {PublicKey[]} publicKeys
   * @param {DIDDocumentService[]} services
   * @returns {PeerDID}
   */
  createPeerDID(
    publicKeys: PublicKey[],
    services: DIDDocument.Service[]
  ): PeerDID {
    const { signingKeys, encryptionKeys } = publicKeys.reduce(
      ({ signingKeys, encryptionKeys }, publicKey) => {
        if (publicKey.isCurve<Ed25519PublicKey>(Curve.ED25519)) {
          return {
            signingKeys: [...signingKeys, publicKey],
            encryptionKeys,
          };
        }

        if (publicKey.isCurve<X25519PublicKey>(Curve.X25519)) {
          return {
            signingKeys,
            encryptionKeys: [...encryptionKeys, publicKey],
          };
        }

        return {
          signingKeys,
          encryptionKeys,
        };
      },
      { signingKeys: [], encryptionKeys: [] } as {
        signingKeys: Ed25519PublicKey[];
        encryptionKeys: X25519PublicKey[];
      }
    );

    const encodedEncryptionKeysStr = encryptionKeys
      .map(keyAgreementFromPublicKey)
      .map(createMultibaseEncnumbasis)
      .map((value) => `.${Numalgo2Prefix.keyAgreement}${value}`)
      .join("");

    const encodedSigningKeysStr = signingKeys
      .map(authenticationFromPublicKey)
      .map(createMultibaseEncnumbasis)
      .map((value) => `.${Numalgo2Prefix.authentication}${value}`)
      .join("");

    const encodedService = this.encodeService(services);

    return new PeerDID(
      DID.fromString(
        `did:peer:2${encodedEncryptionKeysStr}${encodedSigningKeysStr}.${Numalgo2Prefix.service}${encodedService}`
      )
    );
  }

  /**
   * Computes Encnumbasis from a valid did and its keyPair
   *
   * @param {PublicKey} publicKey
   * @returns {string}
   */
  computeEncnumbasis(publicKey: PublicKey): string {
    let material:
      | VerificationMaterialAgreement
      | VerificationMaterialAuthentication;
    let multibaseEcnumbasis: string;

    switch (publicKey.getProperty(KeyProperties.curve)) {
      case Curve.X25519:
        material = keyAgreementFromPublicKey(publicKey);
        multibaseEcnumbasis = createMultibaseEncnumbasis(material);
        return multibaseEcnumbasis.slice(1);
      case Curve.ED25519:
        material = authenticationFromPublicKey(publicKey);
        multibaseEcnumbasis = createMultibaseEncnumbasis(material);
        return multibaseEcnumbasis.slice(1);
      default:
        //TODO: Improve this error handling
        throw new Error("computeEncnumbasis -> InvalidKeyPair Curve");
    }
  }

  private encodeService(services: DIDDocument.Service[]): string {
    const peerDIDServices = services.reduce<PeerDIDEncoded[]>(
      (acc, service) => {
        const type = service.type.at(0);

        if (type === undefined) return acc;

        const encoded = new PeerDIDService(
          type,
          service.serviceEndpoint.uri,
          service.serviceEndpoint.routingKeys,
          service.serviceEndpoint.accept
        ).encode();

        return acc.concat(encoded);
      },
      []
    );

    if (peerDIDServices.length === 1) {
      const peerDIDService = peerDIDServices.at(0);

      return base64.base64url.baseEncode(
        Buffer.from(JSON.stringify(peerDIDService))
      );
    }

    return base64.base64url.baseEncode(
      Buffer.from(JSON.stringify(peerDIDServices))
    );
  }



}
