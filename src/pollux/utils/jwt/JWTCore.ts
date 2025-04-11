import * as didResolver from "did-resolver";
import { base64url } from "multiformats/bases/base64";
import { base58btc } from 'multiformats/bases/base58';
import { defaultHashConfig, defaultSaltGen } from "./config";
import { VerificationKeyType } from "../../../castor/types";
import {
  Castor,
  AlsoKnownAs,
  Controller,
  VerificationMethods,
  Services,
  PublicKey,
  PrivateKey,
  Signer,
  Hasher,
  Verifier,
  Curve,
  Apollo,
  KeyProperties,
  KeyTypes
} from "../../../domain";
import { expect } from "../../../utils";
import { Domain } from "../../..";


/**
 * JWTCore
 * Wraps signing and verifying functionality with all our supported algorithms
 * Works for both secp256k1(ECDSA) and ed25519(EdDSA)
 */
export abstract class JWTCore {
  constructor(
    public readonly apollo: Apollo,
    public readonly castor: Castor
  ) { }

  public async resolve(did: string): Promise<didResolver.DIDResolutionResult> {
    const resolved = await this.castor.resolveDID(did);
    const alsoKnownAs = resolved.coreProperties.find(
      (prop): prop is AlsoKnownAs => prop instanceof AlsoKnownAs
    );
    const controller = resolved.coreProperties.find(
      (prop): prop is Controller => prop instanceof Controller
    );
    const verificationMethods = resolved.coreProperties.find(
      (prop): prop is VerificationMethods => prop instanceof VerificationMethods
    );
    const service = resolved.coreProperties.find(
      (prop): prop is Services => prop instanceof Services
    );
    return {
      didResolutionMetadata: { contentType: "application/did+ld+json" },
      didDocumentMetadata: {},
      didDocument: {
        id: resolved.id.toString(),
        alsoKnownAs: alsoKnownAs && alsoKnownAs.values,
        controller:
          controller && controller.values
            ? controller.values.map((v) => v.toString())
            : [],
        verificationMethod:
          verificationMethods && verificationMethods.values
            ? verificationMethods.values.map((vm) => {
              if (vm.publicKeyMultibase) {
                return {
                  id: vm.id,
                  type: vm.type === Curve.SECP256K1 ? "EcdsaSecp256k1VerificationKey2019" : vm.type === Curve.ED25519 ? 'Ed25519VerificationKey2020' : 'unknown',
                  controller: vm.controller,
                  publicKeyMultibase: vm.publicKeyMultibase,
                };
              }
              if (vm.publicKeyJwk) {
                return {
                  id: vm.id,
                  type: "JsonWebKey2020",
                  controller: vm.controller,
                  publicKeyJwk: vm.publicKeyJwk,
                };
              }
              throw new Error("Invalid KeyType");
            })
            : [],
        service:
          service?.values?.reduce<didResolver.Service[]>((acc, service) => {
            const type = service.type.at(0);
            if (type === undefined) return acc;
            return acc.concat({
              id: service.id,
              type: type,
              serviceEndpoint: service.serviceEndpoint,
            });
          }, []) ?? [],
      },
    };
  }

  protected getSKConfig(privateKey: PrivateKey): { signAlg: string, signer: Signer, hasher: Hasher, hasherAlg: string; } {
    return {
      signAlg: privateKey.alg,
      signer: async (data) => {
        if (!privateKey.isSignable()) {
          throw new Error("Cannot sign with this key");
        }
        const signature = privateKey.sign(Buffer.from(data));
        const signatureEncoded = base64url.baseEncode(signature);
        return signatureEncoded;
      },
      ...defaultHashConfig,
      ...defaultSaltGen
    };
  }

  protected getPKInstance(verificationMethod: didResolver.VerificationMethod) {
    let pk: PublicKey | undefined = undefined;
    if (verificationMethod.publicKeyMultibase) {
      const decoded = base58btc.decode(verificationMethod.publicKeyMultibase);

      if (verificationMethod.type === VerificationKeyType.EcdsaSecp256k1VerificationKey2019) {
        pk = this.apollo.createPublicKey({
          [KeyProperties.curve]: Curve.SECP256K1,
          [KeyProperties.type]: KeyTypes.EC,
          [KeyProperties.rawKey]: decoded
        });
      } else if (verificationMethod.type === VerificationKeyType.Ed25519VerificationKey2018 ||
        verificationMethod.type === VerificationKeyType.Ed25519VerificationKey2020) {
        pk = this.apollo.createPublicKey({
          [KeyProperties.curve]: Curve.ED25519,
          [KeyProperties.type]: KeyTypes.EC,
          [KeyProperties.rawKey]: decoded
        });
      }
      return pk;
    }
    if (verificationMethod.publicKeyJwk) {
      const jwk = verificationMethod.publicKeyJwk as any;

      if (jwk.kty === "EC") {
        const crv = expect(jwk.crv, new Error('Missing JWK Parameter `crv`'));
        const withCoordinates = jwk.x !== undefined || jwk.y !== undefined;

        if (withCoordinates) {
          const decodedX = this.decodeJWKParameter('x', jwk);
          const decodedY = this.decodeJWKParameter('y', jwk);
          return this.apollo.createPublicKey({
            [KeyProperties.type]: crv === Curve.X25519 ? KeyTypes.Curve25519 : KeyTypes.EC,
            [KeyProperties.curve]: crv,
            [KeyProperties.curvePointX]: decodedX,
            [KeyProperties.curvePointY]: decodedY
          });
        }

        if (jwk.d !== undefined) {
          const decodedD = this.decodeJWKParameter('d', jwk);
          const sk = this.apollo.createPrivateKey({
            [KeyProperties.type]: crv === Curve.X25519 ? KeyTypes.Curve25519 : KeyTypes.EC,
            [KeyProperties.curve]: crv,
            [KeyProperties.rawKey]: decodedD
          });

          return sk.publicKey();
        }

        throw new Error('Required property x+y or d is missing in EC JWK');
      }

      if (verificationMethod.publicKeyJwk.kty === "OKP") {
        const crv = expect(jwk.crv, new Error('Missing JWK Parameter x'));
        const decodedX = this.decodeJWKParameter('x', jwk);

        return this.apollo.createPublicKey({
          [KeyProperties.type]: crv === Curve.X25519 ? KeyTypes.Curve25519 : KeyTypes.EC,
          [KeyProperties.curve]: crv,
          [KeyProperties.rawKey]: decodedX
        });

      }

      return pk;
    }
    throw new Error("Not supported");
  }

  protected getPKConfig(publicKey: PublicKey): { signAlg: string, verifier: Verifier, hasher: Hasher, hasherAlg: string; } {
    return {
      signAlg: publicKey.alg,
      verifier: async (data, signatureEncoded) => {
        if (!publicKey.canVerify()) {
          throw new Error("Cannot verify with this key");
        }
        const signature = Buffer.from(base64url.baseDecode(signatureEncoded));
        return publicKey.verify(Buffer.from(data), signature);
      },
      ...defaultHashConfig,
      ...defaultSaltGen
    };
  }

  private decodeJWKParameter(
    coordinate: 'x' | 'y' | 'd',
    jwk: Domain.JWK
  ): Uint8Array {
    if (!jwk[coordinate]) {
      throw new Error(`Missing JWK Parameter ${coordinate}`);
    }
    const coordinateValue = jwk[coordinate];
    try {
      if (typeof coordinateValue !== 'string') {
        throw new Error(`Invalid JWK Parameter, not string ${coordinate}`);
      }
      const decoded = base64url.baseDecode(coordinateValue);
      return new Uint8Array(decoded);
    }
    catch (err) {
      throw new Error(`Invalid JWK Parameter, not base64url encoded ${coordinate}`);
    }
  }
}
