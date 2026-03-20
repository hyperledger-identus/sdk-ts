import { Pluto } from "../buildingBlocks/Pluto";

export type Claim = Record<string, any>;
export enum CredentialType {
  JWT = "prism/jwt",
  SDJWT = "vc+sd-jwt",
  W3C = "w3c",
  AnonCreds = "AnonCreds",
  Unknown = "Unknown"
}


export abstract class Credential implements Pluto.Storable {
  abstract credentialType: CredentialType;
  abstract recoveryId: string;
  abstract id: string;
  abstract issuer: string;
  abstract subject: string;
  abstract claims: Claim[];
  abstract properties: Map<string, any>;

  public readonly uuid = Pluto.makeUUID();

  getProperty(name: string) {
    return this.properties.get(name);
  }

  isProvable(): this is ProvableCredential {
    return "presentation" in this;
  }

  isStorable(): this is StorableCredential {
    return "toStorable" in this;
  }

  isRevoked() {
    const revoked = this.properties.get("revoked");
    return revoked === true;
  }
}

export interface ProvableCredential {
  presentation(): unknown;
  verifiableCredential(): unknown;
}

export interface StorableCredential {
  toStorable(): {
    id: string;
    recoveryId: string;
    credentialData: string;
    issuer?: string;
    subject?: string;
    credentialCreated?: string;
    credentialUpdated?: string;
    credentialSchema?: string;
    validUntil?: number;
    revoked?: boolean;
    availableClaims?: string[];
  };
}
