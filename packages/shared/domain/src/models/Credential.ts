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

  // -- Restore Factory Registry --

  /**
   * Registry of credential restore factories keyed by recoveryId.
   * Plugins register their factory so that the storage layer can
   * reconstruct typed credential instances without static imports
   * that would eagerly load heavy WASM dependencies.
   */
  private static restoreFactories = new Map<string, (dataJson: string) => Credential>();

  /**
   * Register a factory function that can restore a credential from
   * its persisted JSON representation.
   *
   * Called by credential plugins (e.g. AnonCreds) at module
   * evaluation time, before any storage queries run.
   *
   * @param recoveryId - unique identifier for the credential type
   * @param factory - receives raw dataJson string, returns Credential
   */
  static registerRestoreFactory(
    recoveryId: string,
    factory: (dataJson: string) => Credential
  ) {
    Credential.restoreFactories.set(recoveryId, factory);
  }

  /**
   * Restore a credential using a previously registered factory.
   *
   * @returns restored Credential, or undefined if no factory exists
   *          for the given recoveryId
   */
  static restoreFromFactory(
    recoveryId: string,
    dataJson: string
  ): Credential | undefined {
    const factory = Credential.restoreFactories.get(recoveryId);
    return factory?.(dataJson);
  }

  // -- Instance Methods --

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
