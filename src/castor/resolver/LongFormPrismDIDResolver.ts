import { SHA256 } from "@stablelib/sha256";
import { CastorError } from "../../domain/models/Errors";
import { Apollo } from "../../domain/buildingBlocks/Apollo";
import { LongFormPrismDID } from "../../castor/did/prismDID/LongFormPrismDID";
import {
  DIDResolver,
  DIDDocument,
  DID,
  DIDUrl,
  PublicKey,
  Curve,
} from "../../domain/models";

import * as DIDParser from "../parser/DIDParser";
import * as Protos from "../protos/node_models";
import * as base64 from "multiformats/bases/base64";
import * as base58 from "multiformats/bases/base58";
import { Secp256k1PublicKey } from "../../apollo/utils/Secp256k1PublicKey";
import { Ed25519PublicKey } from "../../apollo/utils/Ed25519PublicKey";
import { X25519PublicKey } from "../../apollo/utils/X25519PublicKey";
import { PrismDIDKeyUsage } from "../../domain/models/derivation/schemas/PrismDerivation";

export class LongFormPrismDIDResolver implements DIDResolver {
  method = "prism";

  constructor(private apollo: Apollo) {}

  async resolve(didString: string): Promise<DIDDocument> {
    const did = DIDParser.parse(didString);
    const prismDID = new LongFormPrismDID(did);
    const state = prismDID.encodedState;
    const base64State = base64.base64url.decode(`u${state}`);
    const coreProperties = this.decodeState(did, base64State);
    return new DIDDocument(did, coreProperties);
  }

  private getProtoCurve(proto: Protos.io.iohk.atala.prism.protos.PublicKey) {
    return proto.compressed_ec_key_data?.curve ?? proto.ec_key_data.curve;
  }

  private decodeState(did: DID, encodedData: Uint8Array): DIDDocument.CoreProperty[] {
    try {
      const verifyEncodedState = new SHA256().update(encodedData).digest();
      const verifyEncodedStateHex = verifyEncodedState;

      if (
        Buffer.from(verifyEncodedState).toString("hex") !==
        Buffer.from(verifyEncodedStateHex).toString("hex")
      ) {
        throw new CastorError.InitialStateOfDIDChanged();
      }

      const coreProperties: DIDDocument.CoreProperty[] = [];
      const verificationMethods = new DIDDocument.VerificationMethods();
      coreProperties.push(verificationMethods);

      // services
      const services = new DIDDocument.Services();
      const operation = Protos.io.iohk.atala.prism.protos.AtalaOperation.deserializeBinary(encodedData);
      const opServices = operation.create_did?.did_data?.services;
      opServices?.forEach(service => {
        const endpoint = service.service_endpoint.at(0);

        if (endpoint !== undefined) {
          services.values.push(
            new DIDDocument.Service(service.id, [service.type], endpoint)
          );
        }
      });

      if (services.values.length > 0) {
        coreProperties.push(services);
      }

      // verification methods + groupings
      const authenticationMethods = new DIDDocument.Authentication();
      // ?? assertionMethods not handled
      // const assertionMethods = new DIDDocument.AssertionMethod();
      const keyAgreementMethods = new DIDDocument.KeyAgreement();
      const capabilityInvocationMethods = new DIDDocument.CapabilityInvocation();
      const capabilityDelegationMethods = new DIDDocument.CapabilityDelegation();
      const publicKeys = operation.create_did?.did_data?.public_keys;
      publicKeys?.forEach(key => {
        /**
         * TODO: Support keys in multiple formats, right now its multibase
         */
        const didUrl = new DIDUrl(did, [], new Map(), key.id);
        const curve = this.getProtoCurve(key);

        if (!curve) {
          throw new CastorError.InvalidKeyError();
        }

        const pk = this.mapToPublicKey(curve, key);
        const method = new DIDDocument.VerificationMethod(
          didUrl.string(),
          did.toString(),
          this.getVerificationMethodType(curve),
          undefined,
          base58.base58btc.encode(pk.raw)
        );

        verificationMethods.values.push(method);

        switch (key.usage) {
          case PrismDIDKeyUsage.AUTHENTICATION_KEY:
            authenticationMethods.add(method);
            break;
          case PrismDIDKeyUsage.KEY_AGREEMENT_KEY:
            keyAgreementMethods.add(method);
            break;
          case PrismDIDKeyUsage.CAPABILITY_DELEGATION_KEY:
            capabilityDelegationMethods.add(method);
            break;
          case PrismDIDKeyUsage.CAPABILITY_INVOCATION_KEY:
            capabilityInvocationMethods.add(method);
            break;
          case PrismDIDKeyUsage.UNKNOWN_KEY:
          case PrismDIDKeyUsage.MASTER_KEY:
          case PrismDIDKeyUsage.ISSUING_KEY:
          case PrismDIDKeyUsage.REVOCATION_KEY: break;
        }
      });

      if (authenticationMethods.urls.length > 0) {
        coreProperties.push(authenticationMethods);
      }
      if (keyAgreementMethods.urls.length > 0) {
        coreProperties.push(keyAgreementMethods);
      }
      if (capabilityDelegationMethods.urls.length > 0) {
        coreProperties.push(capabilityDelegationMethods);
      }
      if (capabilityInvocationMethods.urls.length > 0) {
        coreProperties.push(capabilityInvocationMethods);
      }

      return coreProperties;
    } catch (err) {
      throw new CastorError.InitialStateOfDIDChanged();
    }
  }

  private mapToPublicKey(
    curve: string,
    key: Protos.io.iohk.atala.prism.protos.PublicKey
  ): PublicKey {
    if (curve === Curve.SECP256K1) {
      return key.has_compressed_ec_key_data
        ? Secp256k1PublicKey.secp256k1FromBytes(key.compressed_ec_key_data.data)
        : Secp256k1PublicKey.secp256k1FromByteCoordinates(key.ec_key_data.x, key.ec_key_data.y);
    }

    if (!key.has_compressed_ec_key_data) {
      throw new Error("Expected compressed compressed key");
    }

    if (curve === Curve.ED25519) {
      return Ed25519PublicKey.from.Buffer(Buffer.from(key.compressed_ec_key_data.data));
    }
    if (curve === Curve.X25519) {
      return X25519PublicKey.from.Buffer(Buffer.from(key.compressed_ec_key_data.data));
    }

    throw new Error("Unsupported key type");
  }

  private getVerificationMethodType(curve: string): DIDDocument.VerificationMethod.Type {
    switch (curve) {
      case Curve.SECP256K1:
        return "EcdsaSecp256k1VerificationKey2019";
      case Curve.ED25519:
        return "Ed25519VerificationKey2020";
      case Curve.X25519:
        return "X25519KeyAgreementKey2020";
      default:
        return "JsonWebKey2020";
    }
  }
}
