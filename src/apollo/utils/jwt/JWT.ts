import * as didJWT from "did-jwt";
import didResolver from "did-resolver";

import { Castor } from "../../../domain/buildingBlocks/Castor";
import {
  AlsoKnownAs,
  Controller,
  Services,
  VerificationMethods,
  DID,
  PrivateKey,
} from "../../../domain";
import { JWTCredential } from "../../../pollux/models/JWTVerifiableCredential";

export class JWT {
  private castor: Castor;

  constructor(castor: Castor) {
    this.castor = castor;
  }

  async verify(
    options: {
      issuerDID: DID,
      holderDID?: DID,
      jws: string
    }
  ): Promise<boolean> {
    try {
      const { issuerDID, jws, holderDID } = options;
      if (!issuerDID) {
        throw new Error("Required issuerId");
      }
      const resolved = await this.resolve(issuerDID.toString());
      const verificationMethod = resolved.didDocument?.verificationMethod;
      if (!verificationMethod) {
        throw new Error("Invalid did document");
      }
      const validVerificationMethod = didJWT.verifyJWS(jws, verificationMethod);
      const jwtObject = JWTCredential.fromJWS(jws);

      if (jwtObject.issuer !== issuerDID) {
        throw new Error("Invalid issuer");
      }

      if (jwtObject.isCredential && holderDID && holderDID.toString() !== jwtObject.sub) {
        throw new Error("Invalid subject (holder)");
      }

      return true;
    } catch (err) {
      return false;
    }
  }

  private async resolve(did: string): Promise<didResolver.DIDResolutionResult> {
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
                  type: "EcdsaSecp256k1VerificationKey2019",
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


  async sign(
    options: {
      issuerDID: DID,
      privateKey: PrivateKey | Uint8Array,
      payload: Partial<didJWT.JWTPayload>
    }
  ): Promise<string> {
    const { issuerDID, privateKey, payload } = options;
    const raw = privateKey instanceof PrivateKey ? privateKey.raw : privateKey;
    //TODO: Better check if this method is called with PrismDID and not PeerDID or other
    const signer = didJWT.ES256KSigner(raw);
    const jwt = await didJWT.createJWT(
      payload,
      { issuer: issuerDID.toString(), signer },
      { alg: "ES256K" }
    );
    return jwt;
  }
}
