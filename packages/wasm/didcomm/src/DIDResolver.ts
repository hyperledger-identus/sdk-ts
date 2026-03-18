/* eslint-disable @typescript-eslint/consistent-type-imports */
import type * as DIDComm from "@hyperledger/identus-didcomm-wasm";

const DIDCommMessagingKey = "DIDCommMessaging";

export class DIDCommDIDResolver implements DIDComm.DIDResolver {
  constructor(private readonly castor: import("@hyperledger/identus-domain").Castor) { }

  async resolve(did: string): Promise<DIDComm.DIDDoc | null> {
    const { DIDDocument, CastorError, Curve, expect } = await import("@hyperledger/identus-domain");
    const doc = await this.castor.resolveDID(did);

    const authentications: string[] = [];
    const keyAgreements: string[] = [];
    const services: DIDComm.Service[] = [];
    const verificationMethods: DIDComm.VerificationMethod[] = [];

    doc.coreProperties.forEach((coreProperty) => {
      if ("verificationMethods" in coreProperty) {
        coreProperty.verificationMethods.forEach((method) => {
          const curve = expect(method.publicKeyJwk?.crv, CastorError.InvalidKeyError);

          switch (curve) {
            case Curve.ED25519:
              authentications.push(method.id);
              break;

            case Curve.X25519:
              keyAgreements.push(method.id);
              break;
          }
          const publicKeyBase64 = method.publicKeyJwk?.x as any;
          const publicKeyKid = (method.publicKeyJwk as any).kid;
          verificationMethods.push({
            controller: method.controller,
            id: method.id,
            type: "JsonWebKey2020",
            publicKeyJwk: {
              crv: method.publicKeyJwk?.crv,
              kid: publicKeyKid,
              kty: "OKP",
              x: publicKeyBase64,
            },
          });
        });
      }

      if (
        coreProperty instanceof DIDDocument.Service &&
        coreProperty.type.includes(DIDCommMessagingKey)
      ) {
        services.push({
          id: coreProperty.id,
          type: DIDCommMessagingKey,
          serviceEndpoint: {
            uri: coreProperty.serviceEndpoint.uri,
            accept: coreProperty.serviceEndpoint.accept,
            routing_keys: coreProperty.serviceEndpoint.routingKeys,
          },
        });
      }
    });

    const dcdoc: DIDComm.DIDDoc = {
      id: doc.id.toString(),
      authentication: authentications,
      keyAgreement: keyAgreements,
      service: services,
      verificationMethod: verificationMethods,
    };

    return dcdoc;
  }
}
