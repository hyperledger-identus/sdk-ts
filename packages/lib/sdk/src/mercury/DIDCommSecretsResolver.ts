/* eslint-disable @typescript-eslint/consistent-type-imports */
import type * as DIDComm from "@hyperledger/identus-didcomm";
import { computeEncnumbasis } from "../castor/utils";

/**
 * Bridges the SDK's key storage (Pluto) to the DIDComm library's
 * `SecretsResolver` interface.
 *
 * Looks up Peer DID private keys stored in Pluto and converts them
 * into JWK-based `Secret` objects consumable by the DIDComm WASM layer.
 */
export class DIDCommSecretsResolver implements DIDComm.SecretsResolver {
  constructor(
    private readonly apollo: import("@hyperledger/identus-domain").Apollo,
    private readonly castor: import("@hyperledger/identus-domain").Castor,
    private readonly pluto: import("@hyperledger/identus-domain").Pluto
  ) { }

  private async parseDIDUrl(didString: string): Promise<import("@hyperledger/identus-domain").DIDUrl> {
    const { DIDUrl, DID } = await import("@hyperledger/identus-domain");
    const regex =
      /^did:(?<method>[a-z0-9]+):(?<idstring>[a-z0-9.\-_%]+(?::[a-z0-9.\-_%]+)*)(?<path>\/[^#?]*)?(?<query>\?[^#]*)?(?<fragment>#.*)?$/gi;
    const match = regex.exec(didString);
    if (!match || !match.groups) {
      throw new Error("Invalid DID string");
    }
    const { method, idstring, fragment = "", query = "", path } = match.groups;
    let attributes = new Map<string, string>();
    if (query) {
      attributes = query
        .slice(1)
        .split("&")
        .map((queryAttribute) => queryAttribute.split("="))
        .reduce((all, [varName, varValue]) => {
          all.set(varName, varValue);
          return all;
        }, new Map<string, string>());
    }

    const did = DID.fromString(`did:${method}:${idstring}`);
    const paths = path ? path.split("/").filter((p) => p) : [];
    return new DIDUrl(did, paths, attributes, fragment.slice(1));
  }


  async find_secrets(secret_ids: string[]): Promise<string[]> {
    const peerDids = await this.pluto.getAllPeerDIDs();
    const results = await Promise.all(
      secret_ids.map(async (secretId) => {
        const secretDID = await this.parseDIDUrl(secretId);
        const found = peerDids.find((peerDIDSecret: any) => {
          return secretDID.did.toString() === peerDIDSecret.did.toString();
        });
        return found ? secretId : null;
      })
    );
    return results.filter((id): id is string => id !== null);
  }

  async get_secret(secret_id: string): Promise<DIDComm.Secret | null> {
    const { DIDDocument } = await import("@hyperledger/identus-domain");
    const peerDids = await this.pluto.getAllPeerDIDs();
    const secretDID = await this.parseDIDUrl(secret_id);
    const found = peerDids.find((peerDIDSecret: any) => {
      return secretDID.did.toString() === peerDIDSecret.did.toString();
    });
    if (found) {
      const did = await this.castor.resolveDID(found.did.toString());

      const [publicKeyJWK] = did.coreProperties.reduce<import("@hyperledger/identus-domain").JWK[]>((all, property) => {
        if (property instanceof DIDDocument.VerificationMethods) {
          const matchingValue =
            property.values.find(
              (verificationMethod) => verificationMethod.id === secret_id
            );

          if (matchingValue && matchingValue.publicKeyJwk) {
            return [...all, matchingValue.publicKeyJwk];
          }
        }
        return all;
      }, []);

      if (publicKeyJWK) {
        const secret = await this.mapToSecret(found, publicKeyJWK);
        return secret;
      }
    }
    return null;
  }

  private async mapToSecret(
    peerDid: import("@hyperledger/identus-domain").PeerDID,
    publicKeyJWK: import("@hyperledger/identus-domain").JWK
  ): Promise<DIDComm.Secret> {
    const { Curve, KeyTypes } = await import("@hyperledger/identus-domain");
    const privateKeyBuffer = peerDid.privateKeys.find(
      (key) => key.keyCurve.curve === Curve.X25519
    );
    if (!privateKeyBuffer) {
      throw new Error(`Invalid PrivateKey Curve ${Curve.X25519}`);
    }
    const privateKey = this.apollo.createPrivateKey({
      type: KeyTypes.Curve25519,
      curve: Curve.X25519,
      raw: privateKeyBuffer.value,
    });
    const ecnumbasis = await computeEncnumbasis(
      privateKey.publicKey()
    );
    const id = `${peerDid.did.toString()}#${ecnumbasis}`;

    const secret: DIDComm.Secret = {
      id,
      type: "JsonWebKey2020",
      privateKeyJwk: {
        crv: Curve.X25519,
        kty: "OKP",
        d: Buffer.from(privateKey.getEncoded()).toString(),
        x: publicKeyJWK.x,
      },
    };

    return secret;
  }
}
